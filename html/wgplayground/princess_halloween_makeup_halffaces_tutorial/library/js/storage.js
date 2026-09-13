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
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,692,800,600],[0,0,788,690]]},
		{name:"storage_atlas_3", frames: [[0,0,800,600],[0,602,629,690],[631,602,629,688]]},
		{name:"storage_atlas_4", frames: [[0,0,629,681],[631,0,615,646]]},
		{name:"storage_atlas_5", frames: [[0,0,538,666],[556,0,494,680],[0,668,554,616]]},
		{name:"storage_atlas_6", frames: [[496,0,490,678],[0,0,494,677]]},
		{name:"storage_atlas_7", frames: [[0,0,402,711],[404,0,402,708],[0,713,1200,200],[808,0,400,407],[642,915,640,280],[0,915,640,280]]},
		{name:"storage_atlas_8", frames: [[402,0,500,300],[402,302,432,244],[0,0,400,400],[0,402,380,380],[0,784,380,380],[684,548,300,350],[684,900,300,350],[382,900,300,350],[904,0,300,350],[986,352,300,350],[986,704,300,350],[382,548,300,350]]},
		{name:"storage_atlas_9", frames: [[604,352,300,350],[906,704,300,350],[604,0,300,350],[604,704,300,350],[302,0,300,350],[0,704,300,350],[906,0,300,350],[302,704,300,350],[906,352,300,350],[0,0,300,350],[0,352,300,350],[302,352,300,350]]},
		{name:"storage_atlas_10", frames: [[0,704,300,350],[302,0,300,350],[302,352,300,350],[604,0,300,350],[906,0,300,350],[604,352,300,350],[302,704,300,350],[906,352,300,350],[604,704,300,350],[906,704,300,350],[0,0,300,350],[0,352,300,350]]},
		{name:"storage_atlas_11", frames: [[0,704,300,350],[906,0,300,350],[604,352,300,350],[0,0,300,350],[302,704,300,350],[0,352,300,350],[302,0,300,350],[302,352,300,350],[604,0,300,350],[906,352,300,350],[604,704,300,350],[906,704,300,350]]},
		{name:"storage_atlas_12", frames: [[0,704,300,350],[0,0,300,350],[0,352,300,350],[302,0,300,350],[604,0,300,350],[906,0,300,350],[302,352,300,350],[302,704,300,350],[604,352,300,350],[906,352,300,350],[604,704,300,350],[906,704,300,350]]},
		{name:"storage_atlas_13", frames: [[0,996,380,260],[0,674,320,320],[302,0,320,320],[946,0,320,320],[624,0,320,320],[0,352,320,320],[322,322,320,320],[0,0,300,350],[322,644,280,340],[604,644,280,340],[886,322,280,340],[886,664,280,340]]},
		{name:"storage_atlas_14", frames: [[976,516,200,300],[774,516,200,300],[0,0,280,340],[258,342,256,256],[0,858,256,256],[282,0,256,256],[258,600,256,256],[258,858,256,256],[516,258,256,256],[540,0,256,256],[798,0,256,256],[0,342,256,256],[774,258,256,256],[0,600,256,256],[516,516,256,256],[1032,258,256,256],[0,1116,917,64],[1006,818,230,210],[919,1030,230,210],[1056,0,230,210],[774,818,230,210],[516,774,256,256]]},
		{name:"storage_atlas_15", frames: [[232,424,230,210],[0,0,230,210],[232,0,230,210],[464,0,230,210],[696,0,230,210],[928,212,230,210],[928,0,230,210],[0,212,230,210],[0,424,230,210],[0,636,230,210],[0,848,230,210],[0,1060,230,210],[232,212,230,210],[464,212,230,210],[696,212,230,210],[696,848,230,210],[464,848,230,210],[232,636,230,210],[232,848,230,210],[696,424,230,210],[232,1060,230,210],[464,424,230,210],[928,636,230,210],[928,848,230,210],[696,636,230,210],[928,424,230,210],[928,1060,230,210],[464,636,230,210],[464,1060,230,210],[696,1060,230,210]]},
		{name:"storage_atlas_16", frames: [[484,914,190,190],[868,1066,180,180],[484,722,190,190],[1050,904,180,180],[922,546,217,174],[1050,1086,180,180],[868,722,220,160],[484,1106,190,190],[676,1106,190,190],[676,914,190,190],[676,722,190,190],[868,884,180,180],[1090,722,180,180],[484,182,240,180],[726,182,240,180],[242,546,240,180],[242,728,240,180],[726,364,240,180],[968,364,240,180],[242,910,240,180],[968,182,240,180],[242,364,240,180],[242,1092,240,180],[484,364,240,180],[0,0,240,180],[0,182,240,180],[242,0,240,180],[484,0,240,180],[726,0,240,180],[0,364,240,180],[0,546,240,180],[968,0,240,180],[0,728,240,180],[0,910,240,180],[0,1092,240,180],[242,182,240,180],[703,546,217,174],[484,546,217,174]]},
		{name:"storage_atlas_17", frames: [[578,571,120,120],[366,583,120,120],[244,551,120,120],[776,309,90,90],[122,551,120,120],[0,420,150,129],[928,409,150,129],[1080,409,150,129],[1242,379,50,184],[1006,839,90,50],[195,857,90,50],[0,551,120,120],[700,622,120,120],[944,662,120,120],[822,622,120,120],[700,571,48,48],[342,0,204,132],[488,583,80,124],[92,134,280,80],[502,221,220,30],[868,309,40,40],[83,835,375,20],[684,828,80,80],[456,134,80,80],[730,99,50,150],[1116,797,50,150],[598,828,50,150],[1168,797,50,150],[546,828,50,150],[1220,797,50,150],[776,540,220,80],[0,0,340,80],[0,82,90,255],[897,0,90,255],[1081,0,90,255],[1173,0,90,255],[989,0,90,255],[805,0,90,255],[0,775,81,99],[83,857,110,52],[0,339,90,67],[914,839,90,66],[548,0,255,97],[1242,565,51,47],[548,99,180,120],[578,503,40,40],[1242,614,40,40],[766,828,40,40],[868,351,40,40],[628,693,40,40],[460,835,40,40],[578,461,40,40],[586,693,40,40],[502,835,40,40],[287,857,40,40],[92,216,408,50],[502,257,408,50],[828,744,41,207],[871,744,41,207],[1265,0,32,205],[650,828,32,205],[998,540,120,120],[1120,540,120,120],[912,257,131,150],[1045,257,131,150],[225,268,131,150],[358,268,131,150],[92,268,131,150],[491,309,131,150],[776,409,150,129],[624,309,150,129],[624,440,150,129],[152,420,150,129],[304,420,150,129],[1178,257,120,120],[456,461,120,120],[374,134,80,80],[1168,662,100,133],[1066,662,100,133],[344,709,240,40],[102,715,240,40],[586,744,240,40],[92,82,240,40],[344,751,240,40],[586,786,240,40],[102,757,240,40],[102,673,240,40],[914,797,200,40],[344,793,200,40],[0,673,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_16"];
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



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_16 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_3 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_4 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.elsa_fringle3 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.explosion_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.explosion_10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.explosion_11_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.explosion_12_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.explosion_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.explosion_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.explosion_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.explosion_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.explosion_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.explosion_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.explosion_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.explosion_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.explosion_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.face_brush = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hand_cl = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.harley_body = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.harley_clothes_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.harley_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.harley_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.harley_eyelashes_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.harley_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.harley_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.harley_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.harley_face_base_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.harley_face_half_contur_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.harley_face_half_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.harley_heart_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.harley_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.harley_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.harley_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.harley_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.harley_obodok = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.harley_rouge_black_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.harley_rouge_red_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.harley_rouge_white2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.harley_rouge_white_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.harley_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_5_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.kosmet = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.lens1 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.lens3 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.lipstick18 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.lipstick2 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.lipstick24 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.lipstick25 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.lipstick31 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.lipstick33 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mascara11 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.mascara17 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.mascara2 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.mascara_app2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.mascara_app3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.mascara_app_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.moana_body = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.moana_clothes = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyelashes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.moana_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.moana_face1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.moana_face2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.moana_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.moana_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.moana_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.moana_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.moana_rouge_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.moana_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.pencil10 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.pencil9 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.podvodka1_2 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.podvodka1_3 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.podvodka4 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.podvodka5 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.polka = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.rouge10 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.rouge11 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.rouge5 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.rouge6 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.rouge7 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.rouge8 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.shadows12 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.shadows15 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.shadows22 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.shadows24 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.shadows6 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.smoke_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_body = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyebrows1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyebrows2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyebrows3 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyebrows4 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyelashes1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyelashes2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyelashes3 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyelashes4 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyelashes5 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyes1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_eyes2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_face1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_face2 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_face3 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_face4 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_fringle = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_lips1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_lips2 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_lips3 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_rouge1 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_rouge2 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.snowhite_shadow = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.sponge = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.sponge2 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.sponge3 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.sw_clothes = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tiana_fringle2 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_en_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(89);
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


(lib.sw_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 20
	this.instance = new lib.hero_3_img();
	this.instance.setTransform(-203.6,-388.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.6,-388.3,402,711);
p.frameBounds = [rect];


(lib.sponge3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sponge3();
	this.instance.setTransform(-26,-34.5,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-34.5,52,69.2);
p.frameBounds = [rect];


(lib.sponge2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sponge2();
	this.instance.setTransform(-26,-34.5,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-34.5,52,69.2);
p.frameBounds = [rect];


(lib.sponge_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sponge();
	this.instance.setTransform(-28,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.snowhite_shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_shadow();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_rouge2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_rouge2();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_rouge1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_rouge1();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_lips3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_lips3();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_lips2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_lips2();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_face4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_face4();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_face3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_face3();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_face2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_face2();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyes2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyes2();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyelashes5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyelashes5();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyelashes4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyelashes4();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyelashes3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyelashes3();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyelashes1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyelashes2();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyelashes1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyelashes1();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyebrows4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyebrows4();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyebrows3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyebrows3();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyebrows2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyebrows2();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.snowhite_eyebrows1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowhite_eyebrows1();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.shadows24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows24();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
p.frameBounds = [rect];


(lib.shadows22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows22();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
p.frameBounds = [rect];


(lib.shadows15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows15();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
p.frameBounds = [rect];


(lib.shadows12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows12();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
p.frameBounds = [rect];


(lib.shadows6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows6();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
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


(lib.rouge11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge11();
	this.instance.setTransform(-47.1,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-54,94.3,108);
p.frameBounds = [rect];


(lib.rouge10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge10();
	this.instance.setTransform(-47.1,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-54,94.3,108);
p.frameBounds = [rect];


(lib.rouge8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge8();
	this.instance.setTransform(-47.1,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-54,94.3,108);
p.frameBounds = [rect];


(lib.rouge7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge7();
	this.instance.setTransform(-47.1,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-54,94.3,108);
p.frameBounds = [rect];


(lib.rouge5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge5();
	this.instance.setTransform(-47.1,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-54,94.3,108);
p.frameBounds = [rect];


(lib.polka_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.polka();
	this.instance.setTransform(-458.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-32,917,64);
p.frameBounds = [rect];


(lib.podvodka6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka5();
	this.instance.setTransform(-11.5,-73.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.5,-73.8,23.1,147.6);
p.frameBounds = [rect];


(lib.podvodka4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka4();
	this.instance.setTransform(-11.5,-73.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.5,-73.8,23.1,147.6);
p.frameBounds = [rect];


(lib.podvodka1_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka1_3();
	this.instance.setTransform(-14.7,-74.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.7,-74.5,29.5,149.1);
p.frameBounds = [rect];


(lib.podvodka1_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka1_2();
	this.instance.setTransform(-14.7,-74.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.7,-74.5,29.5,149.1);
p.frameBounds = [rect];


(lib.pencil10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil10();
	this.instance.setTransform(-78.4,-9.6,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.4,-9.6,156.9,19.3);
p.frameBounds = [rect];


(lib.pencil9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil9();
	this.instance.setTransform(-78.4,-9.6,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.4,-9.6,156.9,19.3);
p.frameBounds = [rect];


(lib.object_28_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzVTVQn/oAAArVQAArUH/oAQIBoALUAAQLVAAIAIAQIAIAAALUQAALVoAIAQoAIArVAAQrUAAoBoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350,350);
p.frameBounds = [rect];


(lib.object_27_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/gBkMQABkMC+i+QC/i+ELAAQENAAC/C+QC+C+AAEMQAAEMi+C/Qi/C/kNgBQkLABi/i/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.object_26_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDqjpFLgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlLAAjqjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_25_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzUTVQoAoAAArVQAArTIAoAQIAoBLUAAQLUAAIBIBQIAIAAALTQAALVoAIAQoBIArUAAQrUAAoAoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350,350);
p.frameBounds = [rect];


(lib.object_24_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApGJHQjyjyAAlVQAAlUDyjyQDyjyFUAAQFVAADyDyQDyDyAAFUQAAFVjyDyQjyDylVAAQlUAAjyjyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-82.5,165,165);
p.frameBounds = [rect];


(lib.object_23_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCGnQkkivAAj4QAAj3EkivQElixGdAAQGeAAElCxQEkCvAAD3QAAD4kkCvQklCxmeAAQmdAAklixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.object_22_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJZQj4j6AAlfQAAleD4j6QD6j4FeAAQFfAAD6D4QD4D6AAFeQAAFfj4D6Qj6D4lfAAQleAAj6j4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_22_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdI1QmajqAAlLQAAlKGajqQGbjrJCAAQJDAAGaDrQGbDqAAFKQAAFLmbDqQmaDrpDAAQpCAAmbjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.object_21_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApGJHQjyjyAAlVQAAlUDyjyQDyjyFUAAQFVAADyDyQDyDyAAFUQAAFVjyDyQjyDylVAAQlUAAjyjyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-82.5,165,165);
p.frameBounds = [rect];


(lib.object_19_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1J8QjpkHgBl1QABl0DpkHQDskIFJAAQFLAADqEIQDrEHAAF0QAAF1jrEHQjqEIlLAAQlJAAjskIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-90,160,180);
p.frameBounds = [rect];


(lib.object_19_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzUTVQoBoAAArVQAArUIBoAQIAoALUAAQLUAAIBIAQIBIAAALUQAALVoBIAQoBIArUAAQrUAAoAoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350.1,350);
p.frameBounds = [rect];


(lib.object_19_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.object_17_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_17_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJYQj5j5ABlfQgBlfD5j5QD5j5FfABQFfgBD5D5QD6D5gBFfQABFfj6D5Qj5D6lfgBQlfABj5j6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk2DcjcQDcjaE1AAQE3AADbDaQDbDcAAE2QAAE2jbDcQjbDbk3AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_16_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwkQkQm2m3gBptQABpsG2m4QG4m2JsgBQJtABG3G2QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm4m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.object_15_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjqQDrjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_15_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyvIY/AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.object_14_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzUTVQoAoAAArVQAArUIAoAQIAoALUAAQLVAAIAIAQIAIAAALUQAALVoAIAQoAIArVAAQrUAAoAoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350,350);
p.frameBounds = [rect];


(lib.object_14_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGnQixivAAj4QAAj3CxiwQCwiwD2AAQD4AACwCwQCwCwAAD3QAAD4iwCvQiwCxj4AAQj2AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_13_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi/i+ABkNQgBkLC/i/QC/i/ELABQENgBC+C/QC+C/AAELQAAENi+C+Qi+C+kNAAQkLAAi/i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.object_13_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I2QjrjrAAlLQAAlKDrjqQDqjrFKAAQFLAADrDrQDpDqABFKQgBFLjpDrQjrDplLABQlKgBjqjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDck2gBQk1ABjcjcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_11_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJYQj4j4AAlgQAAleD4j6QD6j4FeAAQFgAAD4D4QD6D6gBFeQABFgj6D4Qj4D6lggBQleABj6j6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i+AAkNQAAkLC+i/QC+i/EMABQENgBC9C/QC/C/AAELQAAENi/C+Qi9C/kNgBQkMABi+i/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOOEIAA8HIMdAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-90,80,180);
p.frameBounds = [rect];


(lib.object_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjMjNgBkhQABkgDMjOQDOjNEgAAQEhAADODNQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHKQi+i9AAkNQAAkMC+i+QC+i+EMAAQENAAC9C+QC/C+AAEMQAAENi/C9Qi9C/kNAAQkMAAi+i/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.object_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.object_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJZQj4j6AAlfQAAleD4j6QD6j4FeAAQFfAAD5D4QD6D6gBFeQABFfj6D6Qj5D4lfAAQleAAj6j4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk2DcjcQDcjaE1AAQE3AADbDaQDbDcAAE2QAAE2jbDcQjbDbk3AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnUAAqXQAAqVHVnVQHUnUKWgBQKWABHVHUQHVHVAAKVQAAKXnVHUQnVHVqWAAQqWAAnUnVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjcQDcjcE1ABQE2gBDcDcQDbDcAAE1QAAE2jbDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlJDpjsQDrjpFKgBQFKABDrDpQDqDsABFJQgBFLjqDqQjrDrlKAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.object_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqWHVnUQHUnVKWAAQKXAAHUHVQHVHUAAKWQAAKWnVHVQnUHUqXABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjNQDOjOEgAAQEhAADODOQDMDNABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjcQDcjcE1ABQE2gBDcDcQDbDcAAE1QAAE2jbDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJYQj4j5AAlfQAAlfD4j5QD6j5FeABQFggBD4D5QD6D5gBFfQABFfj6D5Qj4D6lggBQleABj6j6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKXABHUHTQHVHWAAKVQAAKWnVHVQnUHUqXABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzUTVQoAoAAArVQAArTIAoBQIAoALUAAQLVAAIAIAQIAIBAALTQAALVoAIAQoAIArVAAQrUAAoAoAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-175,350,350);
p.frameBounds = [rect];


(lib.object_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjNjNAAkhQAAkgDNjOQDOjNEgAAQEhAADNDNQDODOAAEgQAAEhjODNQjNDOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJZQj4j6AAlfQAAleD4j6QD6j4FeAAQFfAAD6D4QD4D6AAFeQAAFfj4D6Qj6D4lfAAQleAAj6j4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.moana_shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_shadows_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_rouge2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_rouge2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_rouge_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 17
	this.instance = new lib.hero_2_img();
	this.instance.setTransform(-289.8,-351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-289.8,-351.9,494,680);
p.frameBounds = [rect];


(lib.moana_lips3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_lips3_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_lips2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_lips2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_face2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_eyes2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_eyelashes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_eyelashes3_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.moana_eyebrows3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.moana_eyebrows3_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.mascara17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara17();
	this.instance.setTransform(-23.2,-65.8,0.516,0.516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-65.8,46.5,131.6);
p.frameBounds = [rect];


(lib.mascara11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara11();
	this.instance.setTransform(-25.2,-71.5,0.561,0.561);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.2,-71.5,50.5,143);
p.frameBounds = [rect];


(lib.mascara2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara2();
	this.instance.setTransform(-25.2,-71.5,0.561,0.561);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.2,-71.5,50.5,143);
p.frameBounds = [rect];


(lib.mascara_app3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_app3_img();
	this.instance.setTransform(-25,-70.7,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-70.7,50,141.5);
p.frameBounds = [rect];


(lib.mascara_app2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_app2_img();
	this.instance.setTransform(-25,-70.8,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-70.8,50,141.6);
p.frameBounds = [rect];


(lib.mascara_app = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara_app_img();
	this.instance.setTransform(-25,-70.8,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-70.8,50.1,141.8);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-160,-160);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320.1);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-160,-160);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320.1);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-160,-160);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/ZAMAAAgx/MAx/AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320.1);
p.frameBounds = [rect, rect, rect];


(lib.lipstick33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick33();
	this.instance.setTransform(-25,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150);
p.frameBounds = [rect];


(lib.lipstick31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick31();
	this.instance.setTransform(-18,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-54,36,108);
p.frameBounds = [rect];


(lib.lipstick25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick25();
	this.instance.setTransform(-18,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-54,36,108);
p.frameBounds = [rect];


(lib.lipstick24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick24();
	this.instance.setTransform(-25,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150);
p.frameBounds = [rect];


(lib.lipstick18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick18();
	this.instance.setTransform(-18,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-54,36,108);
p.frameBounds = [rect];


(lib.lipstick2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick2();
	this.instance.setTransform(-18,-54,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-54,36,108);
p.frameBounds = [rect];


(lib.lens3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens3();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.lens1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.kosmet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kosmet();
	this.instance.setTransform(-94.4,-5.4,0.504,0.504,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.4,-5.4,189,10.9);
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


(lib.harley_shadow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_shadow1_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_rouge_white2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_rouge_white2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_rouge_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_rouge_white_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_rouge_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_rouge_red_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_rouge_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_rouge_black_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_1_img();
	this.instance.setTransform(-286.5,-337.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-286.5,-337.5,538,666);
p.frameBounds = [rect];


(lib.harley_lips3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_lips3_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_lips2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_lips2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_lips1_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_heart_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_face_half_contur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_face_half_contur_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_face_half = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_face_half_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_eyes3_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_eyes2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_eyebrows2_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.harley_eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.harley_eyebrows1_img();
	this.instance.setTransform(-109,-127.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-127.2,218.1,254.4);
p.frameBounds = [rect];


(lib.hand_cl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_cl();
	this.instance.setTransform(-216,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216,-122,432,244);
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


(lib.face_brush_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face_brush();
	this.instance.setTransform(-25,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-92,50,184);
p.frameBounds = [rect];


(lib.dayneris_lens_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_16();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
p.frameBounds = [rect];


(lib.dayneris_lens_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_4();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
p.frameBounds = [rect];


(lib.dayneris_lens_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_3();
	this.instance.setTransform(-54,-46.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-46.4,108,92.9);
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


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-140,-170);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-140,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
p.frameBounds = [rect, rect];


(lib.body_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_2_img();
	this.instance.setTransform(-140,-170);

	this.instance_1 = new lib.title_ru_2_img();
	this.instance_1.setTransform(-140,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
p.frameBounds = [rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-140,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
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


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,800,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
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


(lib.thunder_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.thunder_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.smoke_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.smoke_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,150,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,300);
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
	this.instance = new lib.gravity_explosion_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.explosion_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// animation
	this.instance = new lib.explosion_0_2_img();
	this.instance.setTransform(-128,-128);

	this.instance_1 = new lib.explosion_1_2_img();
	this.instance_1.setTransform(-128,-128);

	this.instance_2 = new lib.explosion_2_2_img();
	this.instance_2.setTransform(-128,-128);

	this.instance_3 = new lib.explosion_3_2_img();
	this.instance_3.setTransform(-128,-128);

	this.instance_4 = new lib.explosion_4_2_img();
	this.instance_4.setTransform(-128,-128);

	this.instance_5 = new lib.explosion_5_2_img();
	this.instance_5.setTransform(-128,-128);

	this.instance_6 = new lib.explosion_6_2_img();
	this.instance_6.setTransform(-128,-128);

	this.instance_7 = new lib.explosion_7_2_img();
	this.instance_7.setTransform(-128,-128);

	this.instance_8 = new lib.explosion_8_2_img();
	this.instance_8.setTransform(-128,-128);

	this.instance_9 = new lib.explosion_9_2_img();
	this.instance_9.setTransform(-128,-128);

	this.instance_10 = new lib.explosion_10_2_img();
	this.instance_10.setTransform(-128,-128);

	this.instance_11 = new lib.explosion_11_2_img();
	this.instance_11.setTransform(-128,-128);

	this.instance_12 = new lib.explosion_12_2_img();
	this.instance_12.setTransform(-128,-128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.blinking_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_star_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.more_games_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_5_img();
	this.instance.setTransform(-41,-15.6,0.322,0.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-15.6,82.1,31.3);
p.frameBounds = [rect];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_4_img();
	this.instance.setTransform(-14.5,-10.6,0.322,0.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-10.6,29,21.3);
p.frameBounds = [rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_3_img();
	this.instance.setTransform(15,-11.1,0.333,0.333,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-11.1,30,22.4);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_2_img();
	this.instance.setTransform(-17.5,-8.2,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-8.2,35,16.6);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more_games_1_img();
	this.instance.setTransform(-14,-17.1,0.346,0.346);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-17.1,28,34.2);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:-380},10).wait(30).to({x:380},0).to({x:0},10).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_5_mc();
	this.instance_1.setTransform(380,0);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:0},10).wait(30).to({x:-380},10).wait(1));

	// bg
	this.instance_2 = new lib.redirect_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,480.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.title_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
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


(lib.title_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
p.frameBounds = [rect];


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


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.instance = new lib.moana_main();
	this.instance.setTransform(434,362,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-42.9,regY:-12,scaleX:1,scaleY:1,x:399.1,y:386},0).to({_off:true},1).wait(2));

	// hero
	this.instance_1 = new lib.harley_main();
	this.instance_1.setTransform(224,361,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false,regX:-17.6,regY:-4.5,scaleX:1,scaleY:1,x:425.4,y:391.5},0).to({_off:true},1).wait(1));

	// hero
	this.instance_2 = new lib.sw_main();
	this.instance_2.setTransform(644,364,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2).to({_off:false,regX:-2.6,regY:-32.8,scaleX:1,scaleY:1,x:440.4,y:367.2},0).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,624.6);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,726.1), new cjs.Rectangle(-200,0,1200,724.5), new cjs.Rectangle(-200,0,1200,722.7)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.instance = new lib.sw_main();
	this.instance.setTransform(326.5,363.8,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero
	this.instance_1 = new lib.harley_main();
	this.instance_1.setTransform(133.7,376.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero
	this.instance_2 = new lib.moana_main();
	this.instance_2.setTransform(469,379.2,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,11.3,679.8,645.5);
p.frameBounds = [rect];


(lib.hero3_52_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// polka.png
	this.instance = new lib.polka_1();
	this.instance.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 14
	this.instance_1 = new lib.hero_6_img();
	this.instance_1.setTransform(-175,-358.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-358.2,917,708);
p.frameBounds = [rect];


(lib.hero3_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// polka.png
	this.instance = new lib.hand_cl_1();
	this.instance.setTransform(307.1,356.4,0.488,0.488,-48.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({rotation:-70.7,x:31.1,y:-121.5},10).wait(51).to({rotation:0,skewX:70.7,skewY:-109.3},1).to({x:-60.9,y:-110.5},7).wait(52).to({x:-295.9,y:324.4,alpha:0.012},8).to({_off:true},1).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:322.7,alpha:0.012},8).to({_off:true},1).wait(131));

	// Слой 14
	this.instance_2 = new lib.hero_6_img();
	this.instance_2.setTransform(-175,-358.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-358.2,917,708);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-458.5,-358.2,917,712.9), new cjs.Rectangle(-175,-358.2,596.8,832.9), new cjs.Rectangle(-175,-358.2,567.4,785.8), new cjs.Rectangle(-175,-358.2,538,738.8), new cjs.Rectangle(-175,-358.2,508.5,708), new cjs.Rectangle(-175,-358.2,478.7,708), new cjs.Rectangle(-175,-358.2,448.8,708), new cjs.Rectangle(-175,-358.2,418.7,708), rect=new cjs.Rectangle(-175,-358.2,402,708), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-181.2,-358.2,408.2,708), new cjs.Rectangle(-210.6,-358.2,437.6,708), new cjs.Rectangle(-239.9,-358.2,466.9,708), new cjs.Rectangle(-269.3,-358.2,496.3,708), new cjs.Rectangle(-298.7,-358.2,525.7,708), new cjs.Rectangle(-328,-358.2,555,708), new cjs.Rectangle(-357.4,-358.2,584.4,747.2), new cjs.Rectangle(-386.9,-358.2,613.8,801.8), new cjs.Rectangle(-175,-358.2,402,708)];


(lib.hero3_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 2
	this.instance = new lib.lens3_1();
	this.instance.setTransform(141.4,-135.6,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:34.4,y:-157.8},8).to({scaleX:0.48,scaleY:0.48,alpha:0.012},5).to({_off:true},1).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.snowhite_fringle();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// Слой 3
	this.instance_4 = new lib.snowhite_eyelashes4_1();
	this.instance_4.setTransform(-19.5,-176);

	this.instance_5 = new lib.snowhite_eyelashes5_1();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(15));

	// Слой 6
	this.instance_6 = new lib.snowhite_face4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// Слой 7
	this.instance_7 = new lib.snowhite_eyelashes3_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// Слой 5
	this.instance_8 = new lib.snowhite_eyes2_1();
	this.instance_8.setTransform(-19.5,-176);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},3).wait(3));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// Слой 12
	this.instance_10 = new lib.snowhite_lips2_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips3_1();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(15));

	// Слой 10
	this.instance_13 = new lib.snowhite_eyebrows4_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// Слой 8
	this.instance_14 = new lib.snowhite_rouge2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// Слой 13
	this.instance_15 = new lib.snowhite_eyebrows3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_shadow_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_rouge1_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face3_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face2_1();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.snowhite_face1();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(15));

	// elsa_body.png
	this.instance_21 = new lib.sw_clothes();
	this.instance_21.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15));

	// elsa_body.png
	this.instance_22 = new lib.snowhite_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens3_1();
	this.instance.setTransform(141.4,-135.6,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.snowhite_fringle();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_4 = new lib.snowhite_eyelashes4_1();
	this.instance_4.setTransform(-19.5,-176);

	this.instance_5 = new lib.snowhite_eyelashes5_1();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 6
	this.instance_6 = new lib.snowhite_face4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 7
	this.instance_7 = new lib.snowhite_eyelashes3_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 10
	this.instance_12 = new lib.snowhite_eyebrows4_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.lens3_1();
	this.instance.setTransform(41.4,180.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:141.4,y:-135.6},9).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.snowhite_fringle();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// Слой 3
	this.instance_4 = new lib.snowhite_eyelashes4_1();
	this.instance_4.setTransform(-19.5,-176);

	this.instance_5 = new lib.snowhite_eyelashes5_1();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// Слой 6
	this.instance_6 = new lib.snowhite_face4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 7
	this.instance_7 = new lib.snowhite_eyelashes3_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 10
	this.instance_12 = new lib.snowhite_eyebrows4_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.instance = new lib.dayneris_lens_3_1();
	this.instance.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.snowhite_fringle();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_4 = new lib.snowhite_eyelashes4_1();
	this.instance_4.setTransform(-19.5,-176);

	this.instance_5 = new lib.snowhite_eyelashes5_1();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 6
	this.instance_6 = new lib.snowhite_face4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 7
	this.instance_7 = new lib.snowhite_eyelashes3_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 10
	this.instance_12 = new lib.snowhite_eyebrows4_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Слой 2
	this.instance = new lib.mascara_app3();
	this.instance.setTransform(-180.5,-112.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-119.5,y:-150.2},4).to({y:-156.2},11).to({rotation:30,x:-126.5,y:-127.2},3).to({x:-132.5,y:-135.6},10).to({rotation:135,x:-111.5,y:-182.5},4).to({x:-113.5,y:-181.5},4).to({rotation:75,x:-100.2,y:-194.5},3).to({x:-101.2,y:-203.5},10).to({rotation:45,x:-131.2,y:-169.5},2).to({y:-177.5},10).to({rotation:30,x:-243.2,y:-159.5,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 15
	this.instance_1 = new lib.dayneris_lens_3_1();
	this.instance_1.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.snowhite_fringle();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(72));

	// Слой 3
	this.instance_5 = new lib.snowhite_eyelashes4_1();
	this.instance_5.setTransform(-19.5,-176);

	this.instance_6 = new lib.snowhite_eyelashes5_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(72));

	// Слой 6
	this.instance_7 = new lib.snowhite_face4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72));

	// Слой 7
	this.instance_8 = new lib.snowhite_eyelashes3_1();
	this.instance_8.setTransform(-19.5,-176);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({alpha:1},32).wait(36));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72));

	// Слой 12
	this.instance_10 = new lib.snowhite_lips2_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips3_1();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(72));

	// Слой 10
	this.instance_13 = new lib.snowhite_eyebrows4_1();
	this.instance_13.setTransform(-19.5,-176);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({alpha:1},21).wait(11));

	// Слой 5
	this.instance_14 = new lib.snowhite_eyebrows1_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({alpha:0.012},8).to({_off:true},1).wait(15));

	// Слой 8
	this.instance_15 = new lib.snowhite_rouge2_1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(72));

	// Слой 13
	this.instance_16 = new lib.snowhite_eyebrows3_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_shadow_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_rouge1_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face3_1();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.snowhite_face2_1();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.snowhite_face1();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(72));

	// elsa_body.png
	this.instance_22 = new lib.sw_clothes();
	this.instance_22.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(72));

	// elsa_body.png
	this.instance_23 = new lib.snowhite_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mascara_app3();
	this.instance.setTransform(-180.5,-112.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 15
	this.instance_1 = new lib.dayneris_lens_3_1();
	this.instance_1.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.snowhite_fringle();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 3
	this.instance_5 = new lib.snowhite_eyelashes4_1();
	this.instance_5.setTransform(-19.5,-176);

	this.instance_6 = new lib.snowhite_eyelashes5_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 6
	this.instance_7 = new lib.snowhite_face4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.mascara_app3();
	this.instance.setTransform(-43.5,152.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45,x:-180.5,y:-112.2},9).wait(1));

	// Слой 15
	this.instance_1 = new lib.dayneris_lens_3_1();
	this.instance_1.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.snowhite_fringle();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(10));

	// Слой 3
	this.instance_5 = new lib.snowhite_eyelashes4_1();
	this.instance_5.setTransform(-19.5,-176);

	this.instance_6 = new lib.snowhite_eyelashes5_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(10));

	// Слой 6
	this.instance_7 = new lib.snowhite_face4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.instance = new lib.mascara11_1();
	this.instance.setTransform(-43.7,152.9);

	this.instance_1 = new lib.dayneris_lens_3_1();
	this.instance_1.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.snowhite_fringle();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 3
	this.instance_5 = new lib.snowhite_eyelashes4_1();
	this.instance_5.setTransform(-19.5,-176);

	this.instance_6 = new lib.snowhite_eyelashes5_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 6
	this.instance_7 = new lib.snowhite_face4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 2
	this.instance = new lib.mascara_app();
	this.instance.setTransform(164.5,-123.1,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-105,x:86.4,y:-168.1},4).to({y:-180.1},9).to({y:-173.1},4).to({rotation:-90,x:104.4,y:-160},9).to({regX:-0.1,regY:0.1,rotation:-150,x:94.6,y:-185.9},4).to({x:99.6,y:-176.9},9).to({regX:0,regY:0,rotation:-15,x:190.7,y:-106.2,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.dayneris_lens_3_1();
	this.instance_2.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(50));

	// Слой 3
	this.instance_6 = new lib.snowhite_eyelashes4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// Слой 7
	this.instance_7 = new lib.snowhite_eyelashes5_1();
	this.instance_7.setTransform(-19.5,-176);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({alpha:1},35).wait(11));

	// Слой 6
	this.instance_8 = new lib.snowhite_face4_1();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 12
	this.instance_10 = new lib.snowhite_lips2_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips3_1();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(50));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 8
	this.instance_14 = new lib.snowhite_rouge2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 13
	this.instance_15 = new lib.snowhite_eyebrows3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_shadow_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_rouge1_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face3_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face2_1();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.snowhite_face1();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(50));

	// elsa_body.png
	this.instance_21 = new lib.sw_clothes();
	this.instance_21.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(50));

	// elsa_body.png
	this.instance_22 = new lib.snowhite_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mascara_app();
	this.instance.setTransform(164.5,-123.1,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.dayneris_lens_3_1();
	this.instance_2.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 3
	this.instance_6 = new lib.snowhite_eyelashes4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 6
	this.instance_7 = new lib.snowhite_face4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.mascara_app();
	this.instance.setTransform(-103.5,152.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-75,x:164.5,y:-123.1},9).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.dayneris_lens_3_1();
	this.instance_2.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// Слой 3
	this.instance_6 = new lib.snowhite_eyelashes4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 6
	this.instance_7 = new lib.snowhite_face4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.instance = new lib.mascara11_1();
	this.instance.setTransform(-43.7,152.9);

	this.instance_1 = new lib.mascara2_1();
	this.instance_1.setTransform(-102.7,152.9);

	this.instance_2 = new lib.dayneris_lens_3_1();
	this.instance_2.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 3
	this.instance_6 = new lib.snowhite_eyelashes4_1();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 6
	this.instance_7 = new lib.snowhite_face4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Слой 2
	this.instance = new lib.podvodka6();
	this.instance.setTransform(156.4,-106.3,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38.7,y:-1.3},5).to({x:90.7,y:-26.3},8).to({x:116.7,y:-57.3},11).to({x:131.7,y:-99.3},8).to({x:128.7,y:-169.3},10).to({x:64.7,y:-222.3},11).to({x:38.7,y:-170.3},11).to({y:-214.3},9).to({x:44.7,y:-197.3},9).to({x:187.7,y:-123.3,alpha:0.012},6).to({_off:true},1).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.dayneris_lens_3_1();
	this.instance_3.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(90));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(90));

	// Слой 3
	this.instance_7 = new lib.snowhite_eyelashes4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// Слой 6
	this.instance_8 = new lib.snowhite_face4_1();
	this.instance_8.setTransform(-19.5,-176);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({alpha:1},77).wait(8));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

	// Слой 12
	this.instance_10 = new lib.snowhite_lips2_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips3_1();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(90));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(90));

	// Слой 8
	this.instance_14 = new lib.snowhite_rouge2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(90));

	// Слой 13
	this.instance_15 = new lib.snowhite_eyebrows3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_shadow_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_rouge1_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face3_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face2_1();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.snowhite_face1();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(90));

	// elsa_body.png
	this.instance_21 = new lib.sw_clothes();
	this.instance_21.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(90));

	// elsa_body.png
	this.instance_22 = new lib.snowhite_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.podvodka6();
	this.instance.setTransform(156.4,-106.3,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.dayneris_lens_3_1();
	this.instance_3.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 3
	this.instance_7 = new lib.snowhite_eyelashes4_1();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Слой 2
	this.instance = new lib.podvodka6();
	this.instance.setTransform(139.9,-71.5,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:112.9,y:-107.2},4).to({x:105.9,y:-89.2},6).to({x:62.9,y:-87.2},11).to({x:73.9,y:-121.3},7).to({x:99.9,y:-123.3},12).to({x:110.9,y:-114.3},9).to({x:124.9,y:-113.3},2).to({x:156.4,y:-106.3},3).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.dayneris_lens_3_1();
	this.instance_3.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(55));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(55));

	// Слой 3
	this.instance_7 = new lib.snowhite_eyelashes4_1();
	this.instance_7.setTransform(-19.5,-176);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({alpha:1},47).wait(4));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(55));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(55));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(55));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(55));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(55));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.podvodka6();
	this.instance.setTransform(139.9,-71.5,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.dayneris_lens_3_1();
	this.instance_3.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 4
	this.instance_7 = new lib.snowhite_eyes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 12
	this.instance_8 = new lib.snowhite_lips2_1();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.snowhite_lips3_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_shadow_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_rouge1_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face3_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face1();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.sw_clothes();
	this.instance_19.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.snowhite_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-223.2,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:135,x:139.9,y:-71.5},9).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.dayneris_lens_3_1();
	this.instance_3.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(10));

	// Слой 4
	this.instance_7 = new lib.snowhite_eyes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 12
	this.instance_8 = new lib.snowhite_lips2_1();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.snowhite_lips3_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 13
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_shadow_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_rouge1_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face3_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face1();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.sw_clothes();
	this.instance_19.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.snowhite_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.instance = new lib.mascara11_1();
	this.instance.setTransform(-43.7,152.9);

	this.instance_1 = new lib.mascara2_1();
	this.instance_1.setTransform(-102.7,152.9);

	this.instance_2 = new lib.podvodka1_2_1();
	this.instance_2.setTransform(-223.2,148.5);

	this.instance_3 = new lib.dayneris_lens_3_1();
	this.instance_3.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 4
	this.instance_7 = new lib.snowhite_eyes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 12
	this.instance_8 = new lib.snowhite_lips2_1();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.snowhite_lips3_1();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_shadow_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_rouge1_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face3_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face1();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.sw_clothes();
	this.instance_19.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.snowhite_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Слой 2
	this.instance = new lib.lipstick31_1();
	this.instance.setTransform(-86.8,-7,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-43.9,y:-40},4).to({x:-32.9,y:-46},10).to({y:-35},6).to({x:-49.9,y:-42},12).to({x:-29.9},7).to({y:-31},3).to({x:-46.1,y:-35},7).to({x:-196.4,y:-14,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.podvodka1_2_1();
	this.instance_3.setTransform(-223.2,148.5);

	this.instance_4 = new lib.dayneris_lens_3_1();
	this.instance_4.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(60));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(60));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

	// Слой 6
	this.instance_10 = new lib.snowhite_lips3_1();
	this.instance_10.setTransform(-19.5,-176);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({alpha:1},45).wait(11));

	// Слой 3
	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// Слой 13
	this.instance_14 = new lib.snowhite_eyebrows3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_shadow_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_rouge1_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(60));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(60));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick31_1();
	this.instance.setTransform(-86.8,-7,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.podvodka1_2_1();
	this.instance_3.setTransform(-223.2,148.5);

	this.instance_4 = new lib.dayneris_lens_3_1();
	this.instance_4.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_shadow_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_rouge1_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face3_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face1();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.sw_clothes();
	this.instance_19.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.snowhite_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.lipstick31_1();
	this.instance.setTransform(123.2,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:-86.8,y:-7},9).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.podvodka1_2_1();
	this.instance_3.setTransform(-223.2,148.5);

	this.instance_4 = new lib.dayneris_lens_3_1();
	this.instance_4.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 13
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_shadow_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_rouge1_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face3_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face1();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.sw_clothes();
	this.instance_19.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.snowhite_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.instance = new lib.mascara11_1();
	this.instance.setTransform(-43.7,152.9);

	this.instance_1 = new lib.mascara2_1();
	this.instance_1.setTransform(-102.7,152.9);

	this.instance_2 = new lib.podvodka1_2_1();
	this.instance_2.setTransform(-223.2,148.5);

	this.instance_3 = new lib.lipstick31_1();
	this.instance_3.setTransform(123.2,168);

	this.instance_4 = new lib.dayneris_lens_3_1();
	this.instance_4.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_shadow_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_rouge1_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face3_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face1();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.sw_clothes();
	this.instance_19.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.snowhite_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Слой 6
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(-226.7,-157.1,1,1,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-206.7},4).to({x:-223.7},5).to({x:-207.7},5).to({rotation:-44.2,x:-149,y:-130.7},5).to({x:-105.5,y:-120.7},10).to({x:-96.5,y:-55.7},8).to({x:-115.5,y:-19.1},7).to({x:-132.5,y:-23.1},3).to({y:-31.1},4).to({x:-151.5},4).to({x:-113.5,y:-49.1},6).to({x:-105.5,y:-70.1},6).to({x:-142.5},9).to({x:-159.5,y:-59.1},4).to({x:-145.5,y:-70.1},2).to({x:-166.5,y:-73.1},5).to({x:-149},3).to({x:-166.4,y:-86.1},5).to({x:-232.4,y:-52.1,alpha:0.012},3).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_1 = new lib.shadows22_1();
	this.instance_1.setTransform(-216.9,-88.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({alpha:0.012},3).to({_off:true},1).wait(1));

	// Слой 15
	this.instance_2 = new lib.mascara11_1();
	this.instance_2.setTransform(-43.7,152.9);

	this.instance_3 = new lib.mascara2_1();
	this.instance_3.setTransform(-102.7,152.9);

	this.instance_4 = new lib.podvodka1_2_1();
	this.instance_4.setTransform(-223.2,148.5);

	this.instance_5 = new lib.lipstick31_1();
	this.instance_5.setTransform(123.2,168);

	this.instance_6 = new lib.dayneris_lens_3_1();
	this.instance_6.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(100));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.snowhite_fringle();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(100));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

	// Слой 12
	this.instance_11 = new lib.snowhite_lips2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(100));

	// Слой 3
	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(100));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(100));

	// Слой 8
	this.instance_14 = new lib.snowhite_rouge2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(100));

	// Слой 11
	this.instance_15 = new lib.snowhite_eyebrows3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(100));

	// Слой 14
	this.instance_16 = new lib.snowhite_shadow_1();
	this.instance_16.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(100));

	// Слой 7
	this.instance_17 = new lib.snowhite_rouge1_1();
	this.instance_17.setTransform(-19.5,-176);
	this.instance_17.alpha = 0.012;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(19).to({_off:false},0).to({alpha:1},76).wait(5));

	// Слой 13
	this.instance_18 = new lib.snowhite_face3_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face2_1();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.snowhite_face1();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(100));

	// elsa_body.png
	this.instance_21 = new lib.sw_clothes();
	this.instance_21.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(100));

	// elsa_body.png
	this.instance_22 = new lib.snowhite_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(-226.7,-157.1,1,1,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.shadows22_1();
	this.instance_1.setTransform(-216.9,-88.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 15
	this.instance_2 = new lib.mascara11_1();
	this.instance_2.setTransform(-43.7,152.9);

	this.instance_3 = new lib.mascara2_1();
	this.instance_3.setTransform(-102.7,152.9);

	this.instance_4 = new lib.podvodka1_2_1();
	this.instance_4.setTransform(-223.2,148.5);

	this.instance_5 = new lib.lipstick31_1();
	this.instance_5.setTransform(123.2,168);

	this.instance_6 = new lib.dayneris_lens_3_1();
	this.instance_6.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.snowhite_fringle();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 12
	this.instance_11 = new lib.snowhite_lips2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 3
	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 8
	this.instance_14 = new lib.snowhite_rouge2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 11
	this.instance_15 = new lib.snowhite_eyebrows3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 14
	this.instance_16 = new lib.snowhite_shadow_1();
	this.instance_16.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 13
	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 6
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(171.3,204.8,1,1,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:75.8,x:-226.7,y:-157.1},9).wait(1));

	// Слой 2
	this.instance_1 = new lib.shadows22_1();
	this.instance_1.setTransform(200,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-216.9,y:-88.9},9).wait(1));

	// Слой 15
	this.instance_2 = new lib.mascara11_1();
	this.instance_2.setTransform(-43.7,152.9);

	this.instance_3 = new lib.mascara2_1();
	this.instance_3.setTransform(-102.7,152.9);

	this.instance_4 = new lib.podvodka1_2_1();
	this.instance_4.setTransform(-223.2,148.5);

	this.instance_5 = new lib.lipstick31_1();
	this.instance_5.setTransform(123.2,168);

	this.instance_6 = new lib.dayneris_lens_3_1();
	this.instance_6.setTransform(42,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.snowhite_fringle();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 12
	this.instance_11 = new lib.snowhite_lips2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 3
	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 8
	this.instance_14 = new lib.snowhite_rouge2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 11
	this.instance_15 = new lib.snowhite_eyebrows3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 14
	this.instance_16 = new lib.snowhite_shadow_1();
	this.instance_16.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 13
	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.instance = new lib.mascara11_1();
	this.instance.setTransform(-43.7,152.9);

	this.instance_1 = new lib.mascara2_1();
	this.instance_1.setTransform(-102.7,152.9);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(171.3,204.8,1,1,-14.2);

	this.instance_3 = new lib.podvodka1_2_1();
	this.instance_3.setTransform(-223.2,148.5);

	this.instance_4 = new lib.lipstick31_1();
	this.instance_4.setTransform(123.2,168);

	this.instance_5 = new lib.dayneris_lens_3_1();
	this.instance_5.setTransform(42,174.6);

	this.instance_6 = new lib.shadows22_1();
	this.instance_6.setTransform(200,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.snowhite_fringle();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 12
	this.instance_11 = new lib.snowhite_lips2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 3
	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 8
	this.instance_14 = new lib.snowhite_rouge2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 11
	this.instance_15 = new lib.snowhite_eyebrows3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 14
	this.instance_16 = new lib.snowhite_shadow_1();
	this.instance_16.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 13
	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.snowhite_face2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.snowhite_face1();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.sw_clothes();
	this.instance_20.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.snowhite_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Слой 2
	this.instance = new lib.sponge2_1();
	this.instance.setTransform(-147.5,-72.1,1.217,1.217,-135);

	this.instance_1 = new lib.sponge3_1();
	this.instance_1.setTransform(-76.8,-107,1.217,1.217,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-180,x:-103.8,y:-131},5).to({x:-84.8,y:-147},8).to({x:-53.8,y:-131},7).to({_off:true,x:-76.8,y:-107},9).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},9).to({x:-96.9,y:-131},11).to({x:5.1,y:-118},9).to({x:31.7,y:-137.9},11).to({x:60.7,y:-127.9},12).to({x:46.7,y:-110.9},12).to({x:7.7,y:-118.9},11).to({x:33.7,y:-151.9},12).to({x:156.7,y:-21.9,alpha:0.012},11).to({_off:true},1).wait(1));

	// Слой 15
	this.instance_2 = new lib.mascara11_1();
	this.instance_2.setTransform(-43.7,152.9);

	this.instance_3 = new lib.mascara2_1();
	this.instance_3.setTransform(-102.7,152.9);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(171.3,204.8,1,1,-14.2);

	this.instance_5 = new lib.podvodka1_2_1();
	this.instance_5.setTransform(-223.2,148.5);

	this.instance_6 = new lib.lipstick31_1();
	this.instance_6.setTransform(123.2,168);

	this.instance_7 = new lib.dayneris_lens_3_1();
	this.instance_7.setTransform(42,174.6);

	this.instance_8 = new lib.shadows22_1();
	this.instance_8.setTransform(200,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(120));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.snowhite_fringle();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(120));

	// Слой 10
	this.instance_12 = new lib.snowhite_eyelashes1_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({alpha:0.012},58).to({_off:true},1).wait(12));

	// Слой 6
	this.instance_13 = new lib.snowhite_eyelashes1_2();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({alpha:0.012},35).to({_off:true},1).wait(79));

	// Слой 4
	this.instance_14 = new lib.snowhite_eyes1();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120));

	// Слой 12
	this.instance_15 = new lib.snowhite_lips2_1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120));

	// Слой 3
	this.instance_16 = new lib.snowhite_lips1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120));

	// Слой 5
	this.instance_17 = new lib.snowhite_eyebrows1();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(120));

	// Слой 8
	this.instance_18 = new lib.snowhite_rouge2_1();
	this.instance_18.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120));

	// Слой 11
	this.instance_19 = new lib.snowhite_eyebrows3_1();
	this.instance_19.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(120));

	// Слой 14
	this.instance_20 = new lib.snowhite_shadow_1();
	this.instance_20.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(120));

	// Слой 13
	this.instance_21 = new lib.snowhite_face3_1();
	this.instance_21.setTransform(-19.5,-176);

	this.instance_22 = new lib.snowhite_face2_1();
	this.instance_22.setTransform(-19.5,-176);

	this.instance_23 = new lib.snowhite_face1();
	this.instance_23.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(120));

	// elsa_body.png
	this.instance_24 = new lib.sw_clothes();
	this.instance_24.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(120));

	// elsa_body.png
	this.instance_25 = new lib.snowhite_body();
	this.instance_25.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.sponge2_1();
	this.instance.setTransform(-169.5,189.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.22,scaleY:1.22,rotation:-135,x:-147.5,y:-72.1},9).wait(1));

	// Слой 15
	this.instance_1 = new lib.mascara11_1();
	this.instance_1.setTransform(-43.7,152.9);

	this.instance_2 = new lib.mascara2_1();
	this.instance_2.setTransform(-102.7,152.9);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(171.3,204.8,1,1,-14.2);

	this.instance_4 = new lib.podvodka1_2_1();
	this.instance_4.setTransform(-223.2,148.5);

	this.instance_5 = new lib.lipstick31_1();
	this.instance_5.setTransform(123.2,168);

	this.instance_6 = new lib.dayneris_lens_3_1();
	this.instance_6.setTransform(42,174.6);

	this.instance_7 = new lib.shadows22_1();
	this.instance_7.setTransform(200,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.snowhite_fringle();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 10
	this.instance_11 = new lib.snowhite_eyelashes2();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 6
	this.instance_12 = new lib.snowhite_eyelashes1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 4
	this.instance_13 = new lib.snowhite_eyes1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 12
	this.instance_14 = new lib.snowhite_lips2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 3
	this.instance_15 = new lib.snowhite_lips1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 5
	this.instance_16 = new lib.snowhite_eyebrows1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 8
	this.instance_17 = new lib.snowhite_rouge2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// Слой 11
	this.instance_18 = new lib.snowhite_eyebrows3_1();
	this.instance_18.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// Слой 14
	this.instance_19 = new lib.snowhite_shadow_1();
	this.instance_19.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// Слой 13
	this.instance_20 = new lib.snowhite_face3_1();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.snowhite_face2_1();
	this.instance_21.setTransform(-19.5,-176);

	this.instance_22 = new lib.snowhite_face1();
	this.instance_22.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(10));

	// elsa_body.png
	this.instance_23 = new lib.sw_clothes();
	this.instance_23.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(10));

	// elsa_body.png
	this.instance_24 = new lib.snowhite_body();
	this.instance_24.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.instance = new lib.mascara11_1();
	this.instance.setTransform(-43.7,152.9);

	this.instance_1 = new lib.mascara2_1();
	this.instance_1.setTransform(-102.7,152.9);

	this.instance_2 = new lib.sponge2_1();
	this.instance_2.setTransform(-169.5,189.8);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(171.3,204.8,1,1,-14.2);

	this.instance_4 = new lib.podvodka1_2_1();
	this.instance_4.setTransform(-223.2,148.5);

	this.instance_5 = new lib.lipstick31_1();
	this.instance_5.setTransform(123.2,168);

	this.instance_6 = new lib.dayneris_lens_3_1();
	this.instance_6.setTransform(42,174.6);

	this.instance_7 = new lib.shadows22_1();
	this.instance_7.setTransform(200,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.snowhite_fringle();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 10
	this.instance_11 = new lib.snowhite_eyelashes2();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 6
	this.instance_12 = new lib.snowhite_eyelashes1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 4
	this.instance_13 = new lib.snowhite_eyes1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 12
	this.instance_14 = new lib.snowhite_lips2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 3
	this.instance_15 = new lib.snowhite_lips1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 5
	this.instance_16 = new lib.snowhite_eyebrows1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 8
	this.instance_17 = new lib.snowhite_rouge2_1();
	this.instance_17.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// Слой 11
	this.instance_18 = new lib.snowhite_eyebrows3_1();
	this.instance_18.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Слой 14
	this.instance_19 = new lib.snowhite_shadow_1();
	this.instance_19.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Слой 13
	this.instance_20 = new lib.snowhite_face3_1();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.snowhite_face2_1();
	this.instance_21.setTransform(-19.5,-176);

	this.instance_22 = new lib.snowhite_face1();
	this.instance_22.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(1));

	// elsa_body.png
	this.instance_23 = new lib.sw_clothes();
	this.instance_23.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

	// elsa_body.png
	this.instance_24 = new lib.snowhite_body();
	this.instance_24.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(149.9,-163.8,1,1,107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.shadows15_1();
	this.instance_1.setTransform(157.5,-95.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.snowhite_fringle();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 10
	this.instance_5 = new lib.snowhite_eyelashes2();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 6
	this.instance_6 = new lib.snowhite_eyelashes1();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.snowhite_eyes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 12
	this.instance_8 = new lib.snowhite_lips2_1();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.snowhite_lips1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.snowhite_eyebrows1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.snowhite_rouge2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 11
	this.instance_12 = new lib.snowhite_eyebrows3_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(78.9,203.6,1,1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:107,x:149.9,y:-163.8},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.shadows15_1();
	this.instance_1.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:157.5,y:-95.3},9).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.snowhite_fringle();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(10));

	// Слой 10
	this.instance_5 = new lib.snowhite_eyelashes2();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 6
	this.instance_6 = new lib.snowhite_eyelashes1();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 4
	this.instance_7 = new lib.snowhite_eyes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 12
	this.instance_8 = new lib.snowhite_lips2_1();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 3
	this.instance_9 = new lib.snowhite_lips1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 5
	this.instance_10 = new lib.snowhite_eyebrows1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 8
	this.instance_11 = new lib.snowhite_rouge2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 11
	this.instance_12 = new lib.snowhite_eyebrows3_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(78.9,203.6,1,1,-5);

	this.instance_1 = new lib.shadows15_1();
	this.instance_1.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.snowhite_fringle();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 10
	this.instance_5 = new lib.snowhite_eyelashes2();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 6
	this.instance_6 = new lib.snowhite_eyelashes1();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.snowhite_eyes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 12
	this.instance_8 = new lib.snowhite_lips2_1();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.snowhite_lips1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.snowhite_eyebrows1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.snowhite_rouge2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 11
	this.instance_12 = new lib.snowhite_eyebrows3_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Слой 2
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(51.9,-12.9,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:31.9,y:-48.9},4).to({x:18.9,y:-52.9},11).to({x:12.9,y:-48.9},4).to({x:15.9,y:-37.2},4).to({x:32.9,y:-45.2},12).to({x:137.1,y:3.8,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(78.9,203.6,1,1,-5);

	this.instance_2 = new lib.shadows15_1();
	this.instance_2.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(46));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(46));

	// Слой 10
	this.instance_6 = new lib.snowhite_eyelashes2();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46));

	// Слой 6
	this.instance_7 = new lib.snowhite_eyelashes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({alpha:1},31).wait(11));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(46));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(46));

	// Слой 11
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(46));

	// Слой 13
	this.instance_14 = new lib.snowhite_face3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face2_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(46));

	// elsa_body.png
	this.instance_17 = new lib.sw_clothes();
	this.instance_17.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(46));

	// elsa_body.png
	this.instance_18 = new lib.snowhite_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(51.9,-12.9,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(78.9,203.6,1,1,-5);

	this.instance_2 = new lib.shadows15_1();
	this.instance_2.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 10
	this.instance_6 = new lib.snowhite_eyelashes2();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 6
	this.instance_7 = new lib.snowhite_eyelashes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.snowhite_lips1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.snowhite_eyebrows1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.snowhite_rouge2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 11
	this.instance_12 = new lib.snowhite_eyebrows3_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(172.4,176);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30,x:51.9,y:-12.9},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(78.9,203.6,1,1,-5);

	this.instance_2 = new lib.shadows15_1();
	this.instance_2.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// Слой 10
	this.instance_6 = new lib.snowhite_eyelashes2();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 6
	this.instance_7 = new lib.snowhite_eyelashes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 3
	this.instance_9 = new lib.snowhite_lips1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 5
	this.instance_10 = new lib.snowhite_eyebrows1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 8
	this.instance_11 = new lib.snowhite_rouge2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 11
	this.instance_12 = new lib.snowhite_eyebrows3_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(172.4,176);

	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(78.9,203.6,1,1,-5);

	this.instance_2 = new lib.shadows15_1();
	this.instance_2.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 10
	this.instance_6 = new lib.snowhite_eyelashes2();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 6
	this.instance_7 = new lib.snowhite_eyelashes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.snowhite_lips1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.snowhite_eyebrows1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.snowhite_rouge2_1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 11
	this.instance_12 = new lib.snowhite_eyebrows3_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// Слой 2
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(162.4,-124.3,1,1,-142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:68.9,y:-140.5},5).to({x:99.9,y:-160.5},18).to({x:125.9,y:-153.5},13).to({x:186.9,y:-67.5,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.shadows15_1();
	this.instance_3.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(47));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(47));

	// Слой 10
	this.instance_7 = new lib.snowhite_eyelashes2();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47));

	// Слой 6
	this.instance_8 = new lib.snowhite_eyelashes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(47));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47));

	// Слой 11
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({alpha:1},31).wait(11));

	// Слой 13
	this.instance_14 = new lib.snowhite_face3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face2_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(47));

	// elsa_body.png
	this.instance_17 = new lib.sw_clothes();
	this.instance_17.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(47));

	// elsa_body.png
	this.instance_18 = new lib.snowhite_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(162.4,-124.3,1,1,-142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.shadows15_1();
	this.instance_3.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 10
	this.instance_7 = new lib.snowhite_eyelashes2();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.snowhite_eyelashes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(205.3,209.7,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-142.3,x:162.4,y:-124.3},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.shadows15_1();
	this.instance_3.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(10));

	// Слой 10
	this.instance_7 = new lib.snowhite_eyelashes2();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 6
	this.instance_8 = new lib.snowhite_eyelashes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(172.4,176);

	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(78.9,203.6,1,1,-5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(205.3,209.7,1,1,15);

	this.instance_3 = new lib.shadows15_1();
	this.instance_3.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.snowhite_fringle();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 10
	this.instance_7 = new lib.snowhite_eyelashes2();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.snowhite_eyelashes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 4
	this.instance_9 = new lib.snowhite_eyes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 2
	this.instance = new lib.sponge_1();
	this.instance.setTransform(99,-79.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:61.5,y:-116.9},4).to({x:38.5,y:-84.9},16).to({x:61.5,y:-125.9},18).to({x:128.5,y:-66.9,alpha:0.012},10).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.pencil10_1();
	this.instance_3.setTransform(205.3,209.7,1,1,15);

	this.instance_4 = new lib.shadows15_1();
	this.instance_4.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(50));

	// Слой 10
	this.instance_8 = new lib.snowhite_eyelashes2();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 6
	this.instance_9 = new lib.snowhite_eyelashes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 3
	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 8
	this.instance_13 = new lib.snowhite_rouge2_1();
	this.instance_13.setTransform(-19.5,-176);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({alpha:1},33).wait(12));

	// Слой 13
	this.instance_14 = new lib.snowhite_face3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face2_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(50));

	// elsa_body.png
	this.instance_17 = new lib.sw_clothes();
	this.instance_17.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// elsa_body.png
	this.instance_18 = new lib.snowhite_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sponge_1();
	this.instance.setTransform(99,-79.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.pencil10_1();
	this.instance_3.setTransform(205.3,209.7,1,1,15);

	this.instance_4 = new lib.shadows15_1();
	this.instance_4.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 10
	this.instance_8 = new lib.snowhite_eyelashes2();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 6
	this.instance_9 = new lib.snowhite_eyelashes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 2
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-124.6,181.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:99,y:-79.6},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.pencil10_1();
	this.instance_3.setTransform(205.3,209.7,1,1,15);

	this.instance_4 = new lib.shadows15_1();
	this.instance_4.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// Слой 10
	this.instance_8 = new lib.snowhite_eyelashes2();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 6
	this.instance_9 = new lib.snowhite_eyelashes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 3
	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(172.4,176);

	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(78.9,203.6,1,1,-5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(205.3,209.7,1,1,15);

	this.instance_3 = new lib.rouge8_1();
	this.instance_3.setTransform(-113.5,183.1);

	this.instance_4 = new lib.shadows15_1();
	this.instance_4.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.snowhite_fringle();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 10
	this.instance_8 = new lib.snowhite_eyelashes2();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 6
	this.instance_9 = new lib.snowhite_eyelashes1();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.snowhite_eyes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.snowhite_lips1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 5
	this.instance_12 = new lib.snowhite_eyebrows1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 13
	this.instance_13 = new lib.snowhite_face3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.snowhite_face2_1();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(1));

	// Слой 8
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-134.6,-73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-74.6,y:-208},5).to({scaleX:0.96,scaleY:0.96},4).to({scaleX:1,scaleY:1,x:-41.6,y:-223},6).to({scaleX:0.89,scaleY:0.89},5).to({scaleX:1,scaleY:1,x:-43.7,y:-120},6).to({scaleX:0.79,scaleY:0.79},7).to({scaleX:1,scaleY:1,x:-78.6,y:-103.8},6).to({scaleX:0.82,scaleY:0.82},6).to({scaleX:1,scaleY:1,x:-50.6,y:-76.8},6).to({scaleX:0.82,scaleY:0.82},7).to({x:-127.6,y:-11.8,alpha:0.012},8).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.pencil10_1();
	this.instance_3.setTransform(205.3,209.7,1,1,15);

	this.instance_4 = new lib.rouge8_1();
	this.instance_4.setTransform(-113.5,183.1);

	this.instance_5 = new lib.shadows15_1();
	this.instance_5.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(68));

	// polka.png
	this.instance_6 = new lib.polka_1();
	this.instance_6.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(68));

	// Слой 9
	this.instance_7 = new lib.harley_obodok();
	this.instance_7.setTransform(-124.5,-312);

	this.instance_8 = new lib.snowhite_fringle();
	this.instance_8.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(68));

	// Слой 10
	this.instance_9 = new lib.snowhite_eyelashes2();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68));

	// Слой 6
	this.instance_10 = new lib.snowhite_eyelashes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(68));

	// Слой 4
	this.instance_11 = new lib.snowhite_eyes1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(68));

	// Слой 3
	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(68));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(68));

	// Слой 13
	this.instance_14 = new lib.snowhite_face3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(68));

	// Слой 11
	this.instance_15 = new lib.snowhite_face2_1();
	this.instance_15.setTransform(-19.5,-176);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({_off:false},0).to({alpha:1},52).wait(11));

	// Слой 2
	this.instance_16 = new lib.snowhite_face1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(68));

	// elsa_body.png
	this.instance_17 = new lib.sw_clothes();
	this.instance_17.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(68));

	// elsa_body.png
	this.instance_18 = new lib.snowhite_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 8
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-32.6,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-134.6,y:-73.6},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2_1();
	this.instance_1.setTransform(172.4,176);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(78.9,203.6,1,1,-5);

	this.instance_3 = new lib.pencil10_1();
	this.instance_3.setTransform(205.3,209.7,1,1,15);

	this.instance_4 = new lib.rouge8_1();
	this.instance_4.setTransform(-113.5,183.1);

	this.instance_5 = new lib.shadows15_1();
	this.instance_5.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_6 = new lib.polka_1();
	this.instance_6.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 9
	this.instance_7 = new lib.harley_obodok();
	this.instance_7.setTransform(-124.5,-312);

	this.instance_8 = new lib.snowhite_fringle();
	this.instance_8.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(10));

	// Слой 10
	this.instance_9 = new lib.snowhite_eyelashes2();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 6
	this.instance_10 = new lib.snowhite_eyelashes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 4
	this.instance_11 = new lib.snowhite_eyes1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 3
	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 13
	this.instance_14 = new lib.snowhite_face3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 2
	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(172.4,176);

	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(78.9,203.6,1,1,-5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(205.3,209.7,1,1,15);

	this.instance_3 = new lib.rouge5_1();
	this.instance_3.setTransform(-20,181.3);

	this.instance_4 = new lib.rouge8_1();
	this.instance_4.setTransform(-113.5,183.1);

	this.instance_5 = new lib.shadows15_1();
	this.instance_5.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_6 = new lib.polka_1();
	this.instance_6.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 9
	this.instance_7 = new lib.harley_obodok();
	this.instance_7.setTransform(-124.5,-312);

	this.instance_8 = new lib.snowhite_fringle();
	this.instance_8.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Слой 10
	this.instance_9 = new lib.snowhite_eyelashes2();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 6
	this.instance_10 = new lib.snowhite_eyelashes1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 4
	this.instance_11 = new lib.snowhite_eyes1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 3
	this.instance_12 = new lib.snowhite_lips1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.snowhite_eyebrows1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.snowhite_face3_1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.snowhite_face1();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.sw_clothes();
	this.instance_16.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.snowhite_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Слой 12
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-208.3,-91,0.663,0.663,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-198.3},4).to({x:-205.3},5).to({rotation:44,x:-49.3,y:-190},6).to({x:19.7,y:-170},13).to({x:-27.7,y:-144.3},14).to({x:-35.7,y:-88.3},12).to({x:22.3},12).to({x:-24.7,y:-68.3},12).to({x:-1.7,y:-57.3},13).to({x:-37.7,y:-25.3},14).to({x:-222.7,y:8.7,alpha:0.012},13).to({_off:true},1).wait(1));

	// Слой 11
	this.instance_1 = new lib.rouge7_1();
	this.instance_1.setTransform(-161.4,-62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({x:-201.4,y:-10.9,alpha:0.012},13).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_2 = new lib.lipstick2_1();
	this.instance_2.setTransform(172.4,176);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(78.9,203.6,1,1,-5);

	this.instance_4 = new lib.pencil10_1();
	this.instance_4.setTransform(205.3,209.7,1,1,15);

	this.instance_5 = new lib.rouge5_1();
	this.instance_5.setTransform(-20,181.3);

	this.instance_6 = new lib.rouge8_1();
	this.instance_6.setTransform(-113.5,183.1);

	this.instance_7 = new lib.shadows15_1();
	this.instance_7.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(120));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.snowhite_fringle();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(120));

	// Слой 10
	this.instance_11 = new lib.snowhite_eyelashes2();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// Слой 6
	this.instance_12 = new lib.snowhite_eyelashes1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

	// Слой 4
	this.instance_13 = new lib.snowhite_eyes1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120));

	// Слой 3
	this.instance_14 = new lib.snowhite_lips1();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120));

	// Слой 8
	this.instance_15 = new lib.snowhite_eyebrows2_1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(21).to({alpha:0.012},88).to({_off:true},1).wait(10));

	// Слой 5
	this.instance_16 = new lib.snowhite_eyebrows1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120));

	// Слой 13
	this.instance_17 = new lib.snowhite_face3_1();
	this.instance_17.setTransform(-19.5,-176);
	this.instance_17.alpha = 0.012;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(21).to({_off:false},0).to({alpha:1},88).wait(11));

	// Слой 2
	this.instance_18 = new lib.snowhite_face1();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120));

	// elsa_body.png
	this.instance_19 = new lib.sw_clothes();
	this.instance_19.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(120));

	// elsa_body.png
	this.instance_20 = new lib.snowhite_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 12
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-225.4,204.9,0.663,0.663,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:155.5,x:-208.3,y:-91},9).wait(1));

	// Слой 11
	this.instance_1 = new lib.rouge7_1();
	this.instance_1.setTransform(-203.4,181.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-161.4,y:-62.9},9).wait(1));

	// Слой 7
	this.instance_2 = new lib.lipstick2_1();
	this.instance_2.setTransform(172.4,176);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(78.9,203.6,1,1,-5);

	this.instance_4 = new lib.pencil10_1();
	this.instance_4.setTransform(205.3,209.7,1,1,15);

	this.instance_5 = new lib.rouge5_1();
	this.instance_5.setTransform(-20,181.3);

	this.instance_6 = new lib.rouge8_1();
	this.instance_6.setTransform(-113.5,183.1);

	this.instance_7 = new lib.shadows15_1();
	this.instance_7.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.snowhite_fringle();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 10
	this.instance_11 = new lib.snowhite_eyelashes2();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 6
	this.instance_12 = new lib.snowhite_eyelashes1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 4
	this.instance_13 = new lib.snowhite_eyes1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 3
	this.instance_14 = new lib.snowhite_lips1();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 8
	this.instance_15 = new lib.snowhite_eyebrows2();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 5
	this.instance_16 = new lib.snowhite_eyebrows1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 2
	this.instance_17 = new lib.snowhite_face1();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// elsa_body.png
	this.instance_18 = new lib.sw_clothes();
	this.instance_18.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.snowhite_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lipstick2_1();
	this.instance.setTransform(172.4,176);

	this.instance_1 = new lib.face_brush_1();
	this.instance_1.setTransform(-225.4,204.9,0.663,0.663,65.5);

	this.instance_2 = new lib.rouge7_1();
	this.instance_2.setTransform(-203.4,181.1);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(78.9,203.6,1,1,-5);

	this.instance_4 = new lib.pencil10_1();
	this.instance_4.setTransform(205.3,209.7,1,1,15);

	this.instance_5 = new lib.rouge5_1();
	this.instance_5.setTransform(-20,181.3);

	this.instance_6 = new lib.rouge8_1();
	this.instance_6.setTransform(-113.5,183.1);

	this.instance_7 = new lib.shadows15_1();
	this.instance_7.setTransform(80.5,182.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.snowhite_fringle();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 10
	this.instance_11 = new lib.snowhite_eyelashes2();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 6
	this.instance_12 = new lib.snowhite_eyelashes1();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 4
	this.instance_13 = new lib.snowhite_eyes1();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 3
	this.instance_14 = new lib.snowhite_lips1();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 8
	this.instance_15 = new lib.snowhite_eyebrows2();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 5
	this.instance_16 = new lib.snowhite_eyebrows1();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.snowhite_face1();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// elsa_body.png
	this.instance_18 = new lib.sw_clothes();
	this.instance_18.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.snowhite_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero2_35_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// polka.png
	this.instance = new lib.polka_1();
	this.instance.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 10
	this.instance_1 = new lib.hero_5_img();
	this.instance_1.setTransform(-262,-327);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-327,917,677);
p.frameBounds = [rect];


(lib.hero2_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// Слой 13
	this.instance = new lib.hand_cl_1();
	this.instance.setTransform(307.1,356.4,0.488,0.488,-48.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({rotation:-70.7,x:31.1,y:-121.5},10).wait(51).to({rotation:0,skewX:70.7,skewY:-109.3},1).to({x:-60.9,y:-110.5},7).wait(52).to({x:-295.9,y:324.4,alpha:0.012},8).to({_off:true},1).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:322.7,alpha:0.012},8).to({_off:true},1).wait(131));

	// Слой 10
	this.instance_2 = new lib.hero_5_img();
	this.instance_2.setTransform(-262,-327);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-327,917,677);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-458.5,-327,917,681.7), new cjs.Rectangle(-262,-327,683.7,801.7), new cjs.Rectangle(-262,-327,654.3,754.6), new cjs.Rectangle(-262,-327,625,707.6), new cjs.Rectangle(-262,-327,595.4,677), new cjs.Rectangle(-262,-327,565.6,677), new cjs.Rectangle(-262,-327,535.7,677), new cjs.Rectangle(-262,-327,505.7,677), rect=new cjs.Rectangle(-262,-327,494,677), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-269.3,-327,501.3,677), new cjs.Rectangle(-298.7,-327,530.7,677), new cjs.Rectangle(-328,-327,560.1,677), new cjs.Rectangle(-357.4,-327,589.5,716), new cjs.Rectangle(-386.9,-327,618.9,770.6), new cjs.Rectangle(-262,-327,494,677)];


(lib.hero2_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(153.6,-108.7,1,1,-129.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:114.6,y:-133.7},5).to({x:96.6,y:-143.7},11).to({x:54.1,y:-133.7},21).to({x:99.1,y:-142.7},10).to({x:116.1,y:-131.7},4).to({x:170.1,y:-71.7,alpha:0.012},7).to({_off:true},1).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.tiana_fringle2();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(60));

	// Слой 12
	this.instance_4 = new lib.moana_eyelashes3();
	this.instance_4.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// Слой 6
	this.instance_5 = new lib.moana_eyelashes1_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// Слой 4
	this.instance_6 = new lib.moana_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.instance_7 = new lib.moana_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(60));

	// Слой 11
	this.instance_8 = new lib.moana_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.moana_lips3();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(60));

	// Слой 3
	this.instance_10 = new lib.moana_lips1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

	// Слой 7
	this.instance_11 = new lib.moana_eyebrows3();
	this.instance_11.setTransform(-19.5,-176);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({alpha:1},47).wait(9));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},51).wait(9));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(60));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(60));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(153.6,-108.7,1,1,-129.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.tiana_fringle2();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 12
	this.instance_4 = new lib.moana_eyelashes3();
	this.instance_4.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 6
	this.instance_5 = new lib.moana_eyelashes1_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4
	this.instance_6 = new lib.moana_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.instance_7 = new lib.moana_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 11
	this.instance_8 = new lib.moana_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.moana_lips3();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 3
	this.instance_10 = new lib.moana_lips1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.moana_eyebrows2_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 5
	this.instance_12 = new lib.moana_eyebrows1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 2
	this.instance_13 = new lib.moana_shadows();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_rouge();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge2();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_face2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_18 = new lib.moana_clothes();
	this.instance_18.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(163.6,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-129.3,x:153.6,y:-108.7},9).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.tiana_fringle2();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// Слой 12
	this.instance_4 = new lib.moana_eyelashes3();
	this.instance_4.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 6
	this.instance_5 = new lib.moana_eyelashes1_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 4
	this.instance_6 = new lib.moana_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.instance_7 = new lib.moana_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// Слой 11
	this.instance_8 = new lib.moana_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.moana_lips3();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// Слой 3
	this.instance_10 = new lib.moana_lips1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 8
	this.instance_11 = new lib.moana_eyebrows2_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 5
	this.instance_12 = new lib.moana_eyebrows1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 2
	this.instance_13 = new lib.moana_shadows();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_rouge();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge2();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_face2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_18 = new lib.moana_clothes();
	this.instance_18.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.moana_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(163.6,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.tiana_fringle2();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 12
	this.instance_4 = new lib.moana_eyelashes3();
	this.instance_4.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 6
	this.instance_5 = new lib.moana_eyelashes1_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4
	this.instance_6 = new lib.moana_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.instance_7 = new lib.moana_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 11
	this.instance_8 = new lib.moana_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.moana_lips3();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 3
	this.instance_10 = new lib.moana_lips1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.moana_eyebrows2_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 5
	this.instance_12 = new lib.moana_eyebrows1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 2
	this.instance_13 = new lib.moana_shadows();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_rouge();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge2();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_face2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_18 = new lib.moana_clothes();
	this.instance_18.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Слой 7
	this.instance = new lib.mascara_app2();
	this.instance.setTransform(153.2,-129.7,1,1,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91.2,y:-160.7},5).to({y:-169.7},7).to({y:-161.7},3).to({y:-169.7},6).to({y:-163.7},3).to({rotation:-156.5,x:86.2,y:-179.7},4).to({x:90.2,y:-176.7},6).to({x:86.2,y:-179.7},2).to({x:90.2,y:-176.7},7).to({x:86.2,y:-179.7},2).to({rotation:-36.5,x:162.9,y:-129.7,alpha:0.012},6).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.tiana_fringle2();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(53));

	// Слой 12
	this.instance_5 = new lib.moana_eyelashes3();
	this.instance_5.setTransform(-19.5,-176);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},41).wait(7));

	// Слой 10
	this.instance_6 = new lib.moana_eyelashes2_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},46).wait(7));

	// Слой 6
	this.instance_7 = new lib.moana_eyelashes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53));

	// Слой 4
	this.instance_8 = new lib.moana_eyes2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(53));

	// Слой 11
	this.instance_10 = new lib.moana_lips2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.moana_lips3();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(53));

	// Слой 3
	this.instance_12 = new lib.moana_lips1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53));

	// Слой 8
	this.instance_13 = new lib.moana_eyebrows2_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(53));

	// Слой 5
	this.instance_14 = new lib.moana_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(53));

	// Слой 2
	this.instance_15 = new lib.moana_shadows();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_rouge2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face2();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.moana_face1_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(53));

	// elsa_body.png
	this.instance_20 = new lib.moana_clothes();
	this.instance_20.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(53));

	// elsa_body.png
	this.instance_21 = new lib.moana_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.mascara_app2();
	this.instance.setTransform(153.2,-129.7,1,1,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.tiana_fringle2();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 10
	this.instance_5 = new lib.moana_eyelashes2_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 6
	this.instance_6 = new lib.moana_eyelashes1_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.moana_eyes2();
	this.instance_7.setTransform(-19.5,-176);

	this.instance_8 = new lib.moana_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Слой 11
	this.instance_9 = new lib.moana_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 7
	this.instance = new lib.mascara_app2();
	this.instance.setTransform(-150,157.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-96.5,x:153.2,y:-129.7},9).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.tiana_fringle2();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(10));

	// Слой 10
	this.instance_5 = new lib.moana_eyelashes2_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 6
	this.instance_6 = new lib.moana_eyelashes1_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 4
	this.instance_7 = new lib.moana_eyes2();
	this.instance_7.setTransform(-19.5,-176);

	this.instance_8 = new lib.moana_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(10));

	// Слой 11
	this.instance_9 = new lib.moana_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(163.6,218.5);

	this.instance_1 = new lib.mascara17_1();
	this.instance_1.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.tiana_fringle2();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 10
	this.instance_5 = new lib.moana_eyelashes2_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 6
	this.instance_6 = new lib.moana_eyelashes1_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.moana_eyes2();
	this.instance_7.setTransform(-19.5,-176);

	this.instance_8 = new lib.moana_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Слой 11
	this.instance_9 = new lib.moana_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 7
	this.instance = new lib.lens1_1();
	this.instance.setTransform(136.4,-75.6,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:35.4,y:-156.6},9).to({scaleX:0.45,scaleY:0.45,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.mascara17_1();
	this.instance_2.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(15));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.tiana_fringle2();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(15));

	// Слой 10
	this.instance_6 = new lib.moana_eyelashes2_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// Слой 6
	this.instance_7 = new lib.moana_eyelashes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// Слой 12
	this.instance_8 = new lib.moana_eyes2();
	this.instance_8.setTransform(-19.5,-176);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({alpha:1},6).wait(2));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// Слой 11
	this.instance_10 = new lib.moana_lips2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.moana_lips3();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(15));

	// Слой 3
	this.instance_12 = new lib.moana_lips1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// Слой 8
	this.instance_13 = new lib.moana_eyebrows2_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// Слой 5
	this.instance_14 = new lib.moana_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// Слой 2
	this.instance_15 = new lib.moana_shadows();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_rouge2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face2();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.moana_face1_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(15));

	// elsa_body.png
	this.instance_20 = new lib.moana_clothes();
	this.instance_20.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15));

	// elsa_body.png
	this.instance_21 = new lib.moana_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lens1_1();
	this.instance.setTransform(136.4,-75.6,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.mascara17_1();
	this.instance_2.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.tiana_fringle2();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 10
	this.instance_6 = new lib.moana_eyelashes2_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 6
	this.instance_7 = new lib.moana_eyelashes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.moana_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 11
	this.instance_9 = new lib.moana_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 7
	this.instance = new lib.lens1_1();
	this.instance.setTransform(-54.6,193.3,0.575,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.57,x:136.4,y:-75.6},9).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.mascara17_1();
	this.instance_2.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.tiana_fringle2();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// Слой 10
	this.instance_6 = new lib.moana_eyelashes2_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 6
	this.instance_7 = new lib.moana_eyelashes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 4
	this.instance_8 = new lib.moana_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 11
	this.instance_9 = new lib.moana_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(163.6,218.5);

	this.instance_1 = new lib.dayneris_lens_4_1();
	this.instance_1.setTransform(-58.1,181.7);

	this.instance_2 = new lib.mascara17_1();
	this.instance_2.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.tiana_fringle2();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 10
	this.instance_6 = new lib.moana_eyelashes2_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 6
	this.instance_7 = new lib.moana_eyelashes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.moana_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 11
	this.instance_9 = new lib.moana_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 7
	this.instance = new lib.lipstick18_1();
	this.instance.setTransform(-122.5,-18.9,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-59.5,y:-45.9},4).to({x:-40.5,y:-49.9},10).to({y:-35.9},6).to({x:-58.5,y:-43.9},9).to({x:-40.7,y:-50.9},10).to({y:-35.9},9).to({x:-55.7,y:-42.9},10).to({x:-162.7,y:27.1,alpha:0.012},10).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.dayneris_lens_4_1();
	this.instance_2.setTransform(-58.1,181.7);

	this.instance_3 = new lib.mascara17_1();
	this.instance_3.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(70));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.tiana_fringle2();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(70));

	// Слой 10
	this.instance_7 = new lib.moana_eyelashes2_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70));

	// Слой 6
	this.instance_8 = new lib.moana_eyelashes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70));

	// Слой 12
	this.instance_10 = new lib.moana_lips2();
	this.instance_10.setTransform(-19.5,-176);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({alpha:1},56).wait(10));

	// Слой 11
	this.instance_11 = new lib.moana_lips3();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// Слой 3
	this.instance_12 = new lib.moana_lips1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// Слой 8
	this.instance_13 = new lib.moana_eyebrows2_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

	// Слой 5
	this.instance_14 = new lib.moana_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(70));

	// Слой 2
	this.instance_15 = new lib.moana_shadows();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_rouge2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face2();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.moana_face1_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(70));

	// elsa_body.png
	this.instance_20 = new lib.moana_clothes();
	this.instance_20.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(70));

	// elsa_body.png
	this.instance_21 = new lib.moana_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lipstick18_1();
	this.instance.setTransform(-122.5,-18.9,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.dayneris_lens_4_1();
	this.instance_2.setTransform(-58.1,181.7);

	this.instance_3 = new lib.mascara17_1();
	this.instance_3.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.tiana_fringle2();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 10
	this.instance_7 = new lib.moana_eyelashes2_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.moana_eyelashes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 11
	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 7
	this.instance = new lib.lipstick18_1();
	this.instance.setTransform(22.5,174.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,x:-122.5,y:-18.9},9).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.dayneris_lens_4_1();
	this.instance_2.setTransform(-58.1,181.7);

	this.instance_3 = new lib.mascara17_1();
	this.instance_3.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.tiana_fringle2();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(10));

	// Слой 10
	this.instance_7 = new lib.moana_eyelashes2_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 6
	this.instance_8 = new lib.moana_eyelashes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 11
	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(163.6,218.5);

	this.instance_1 = new lib.lipstick18_1();
	this.instance_1.setTransform(22.5,174.1);

	this.instance_2 = new lib.dayneris_lens_4_1();
	this.instance_2.setTransform(-58.1,181.7);

	this.instance_3 = new lib.mascara17_1();
	this.instance_3.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.tiana_fringle2();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 10
	this.instance_7 = new lib.moana_eyelashes2_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.moana_eyelashes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 11
	this.instance_10 = new lib.moana_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 7
	this.instance = new lib.lipstick25_1();
	this.instance.setTransform(48.1,-17.9,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15.1,y:-45.9},4).to({x:0.1,y:-52.9},8).to({x:2.1,y:-34.9},8).to({x:19.1,y:-43.9},9).to({x:5.1,y:-50.9},9).to({x:6.1,y:-33.9},9).to({x:19.1,y:-42.9},11).to({x:132.1,y:31.1,alpha:0.012},10).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.lipstick18_1();
	this.instance_2.setTransform(22.5,174.1);

	this.instance_3 = new lib.dayneris_lens_4_1();
	this.instance_3.setTransform(-58.1,181.7);

	this.instance_4 = new lib.mascara17_1();
	this.instance_4.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(70));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(70));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// Слой 11
	this.instance_11 = new lib.moana_lips3();
	this.instance_11.setTransform(-19.5,-176);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({alpha:1},55).wait(11));

	// Слой 3
	this.instance_12 = new lib.moana_lips1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// Слой 8
	this.instance_13 = new lib.moana_eyebrows2_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

	// Слой 5
	this.instance_14 = new lib.moana_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(70));

	// Слой 2
	this.instance_15 = new lib.moana_shadows();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_rouge2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face2();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.moana_face1_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(70));

	// elsa_body.png
	this.instance_20 = new lib.moana_clothes();
	this.instance_20.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(70));

	// elsa_body.png
	this.instance_21 = new lib.moana_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.lipstick25_1();
	this.instance.setTransform(48.1,-17.9,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.lipstick18_1();
	this.instance_2.setTransform(22.5,174.1);

	this.instance_3 = new lib.dayneris_lens_4_1();
	this.instance_3.setTransform(-58.1,181.7);

	this.instance_4 = new lib.mascara17_1();
	this.instance_4.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 7
	this.instance = new lib.lipstick25_1();
	this.instance.setTransform(59.5,174.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:48.1,y:-17.9},9).wait(1));

	// Слой 13
	this.instance_1 = new lib.pencil9_1();
	this.instance_1.setTransform(163.6,218.5);

	this.instance_2 = new lib.lipstick18_1();
	this.instance_2.setTransform(22.5,174.1);

	this.instance_3 = new lib.dayneris_lens_4_1();
	this.instance_3.setTransform(-58.1,181.7);

	this.instance_4 = new lib.mascara17_1();
	this.instance_4.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(163.6,218.5);

	this.instance_1 = new lib.lipstick25_1();
	this.instance_1.setTransform(59.5,174.1);

	this.instance_2 = new lib.lipstick18_1();
	this.instance_2.setTransform(22.5,174.1);

	this.instance_3 = new lib.dayneris_lens_4_1();
	this.instance_3.setTransform(-58.1,181.7);

	this.instance_4 = new lib.mascara17_1();
	this.instance_4.setTransform(-149.2,162.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.moana_shadows();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_rouge();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_rouge2();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.moana_face2();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.moana_face1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.moana_clothes();
	this.instance_19.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.moana_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(-247,-106.4,1,1,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.shadows24_1();
	this.instance_1.setTransform(-183.4,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.tiana_fringle2();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 10
	this.instance_5 = new lib.moana_eyelashes2_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 6
	this.instance_6 = new lib.moana_eyelashes1_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.moana_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 3
	this.instance_8 = new lib.moana_lips1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.moana_eyebrows2_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.moana_eyebrows1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 2
	this.instance_11 = new lib.moana_rouge();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.moana_rouge2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.moana_face2();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_face1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// elsa_body.png
	this.instance_15 = new lib.moana_clothes();
	this.instance_15.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.moana_body();
	this.instance_16.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 11
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(54.9,212.6,1,1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:70,x:-247,y:-106.4},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.shadows24_1();
	this.instance_1.setTransform(51.5,187.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-183.4,y:-36.8},9).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.tiana_fringle2();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(10));

	// Слой 10
	this.instance_5 = new lib.moana_eyelashes2_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 6
	this.instance_6 = new lib.moana_eyelashes1_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 4
	this.instance_7 = new lib.moana_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 3
	this.instance_8 = new lib.moana_lips1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 8
	this.instance_9 = new lib.moana_eyebrows2_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 5
	this.instance_10 = new lib.moana_eyebrows1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 2
	this.instance_11 = new lib.moana_rouge();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.moana_rouge2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.moana_face2();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_face1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// elsa_body.png
	this.instance_15 = new lib.moana_clothes();
	this.instance_15.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.moana_body();
	this.instance_16.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(54.9,212.6,1,1,-5);

	this.instance_1 = new lib.shadows24();
	this.instance_1.setTransform(-2.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.tiana_fringle2();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 10
	this.instance_5 = new lib.moana_eyelashes2_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 6
	this.instance_6 = new lib.moana_eyelashes1_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.moana_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 3
	this.instance_8 = new lib.moana_lips1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.moana_eyebrows2_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.moana_eyebrows1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 2
	this.instance_11 = new lib.moana_rouge();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.moana_rouge2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.moana_face2();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_face1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// elsa_body.png
	this.instance_15 = new lib.moana_clothes();
	this.instance_15.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.moana_body();
	this.instance_16.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// Слой 12
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(-206.1,-63.3,1,1,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-195.1},4).to({x:-210.1},5).to({x:-195.1},5).to({rotation:-65,x:-53.1,y:-27.3},11).to({x:-48.1,y:-30.3},4).to({x:-50.1,y:-40.3},3).to({x:-34.1,y:-92},8).to({x:5.1,y:-99},10).to({x:28.1,y:-86},7).to({x:11.1,y:-53},8).to({x:-15.9,y:-48},7).to({x:16.1,y:-39},4).to({x:-3.9,y:-1},12).to({x:-47.3,y:32},10).to({x:-51.3,y:-113},4).to({y:-163},10).to({x:-24.3,y:-168},7).to({x:7.1,y:-150},9).to({x:-155.9,y:19,alpha:0.012},10).to({_off:true},1).wait(1));

	// Слой 11
	this.instance_1 = new lib.shadows6_1();
	this.instance_1.setTransform(-128.5,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(128).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(54.9,212.6,1,1,-5);

	this.instance_3 = new lib.shadows24();
	this.instance_3.setTransform(-2.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(140));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.tiana_fringle2();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(140));

	// Слой 10
	this.instance_7 = new lib.moana_eyelashes2_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(140));

	// Слой 6
	this.instance_8 = new lib.moana_eyelashes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140));

	// Слой 3
	this.instance_10 = new lib.moana_lips1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(140));

	// Слой 8
	this.instance_11 = new lib.moana_eyebrows2_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(140));

	// Слой 5
	this.instance_12 = new lib.moana_eyebrows1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(140));

	// Слой 13
	this.instance_13 = new lib.moana_rouge();
	this.instance_13.setTransform(-19.5,-176);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).to({alpha:1},104).wait(12));

	// Слой 2
	this.instance_14 = new lib.moana_rouge2();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_face2();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_face1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(140));

	// elsa_body.png
	this.instance_17 = new lib.moana_clothes();
	this.instance_17.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(140));

	// elsa_body.png
	this.instance_18 = new lib.moana_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 12
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(168.9,212.6,1,1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:55,x:-206.1,y:-63.3},9).wait(1));

	// Слой 11
	this.instance_1 = new lib.shadows6_1();
	this.instance_1.setTransform(170.5,187.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-128.5,y:-3.8},9).wait(1));

	// Слой 7
	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(54.9,212.6,1,1,-5);

	this.instance_3 = new lib.shadows24();
	this.instance_3.setTransform(-2.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.tiana_fringle2();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(10));

	// Слой 10
	this.instance_7 = new lib.moana_eyelashes2_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 6
	this.instance_8 = new lib.moana_eyelashes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 3
	this.instance_10 = new lib.moana_lips1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 8
	this.instance_11 = new lib.moana_eyebrows2_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 5
	this.instance_12 = new lib.moana_eyebrows1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 2
	this.instance_13 = new lib.moana_rouge2();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_face2();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_face1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.moana_clothes();
	this.instance_16.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.moana_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kosmet
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(54.9,212.6,1,1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kosmet
	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(168.9,212.6,1,1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows24.png
	this.instance_2 = new lib.shadows24();
	this.instance_2.setTransform(-2.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shadows6.png
	this.instance_3 = new lib.shadows6();
	this.instance_3.setTransform(116.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.tiana_fringle2();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 10
	this.instance_7 = new lib.moana_eyelashes2_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.moana_eyelashes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 4
	this.instance_9 = new lib.moana_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 3
	this.instance_10 = new lib.moana_lips1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.moana_eyebrows2_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 5
	this.instance_12 = new lib.moana_eyebrows1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 2
	this.instance_13 = new lib.moana_rouge2();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_face2();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_face1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.moana_clothes();
	this.instance_16.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.moana_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 11
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-124.5,-39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-92.5,y:-116.9},4).to({x:-58.5,y:-111.9},7).to({x:-65.5,y:-89.9},8).to({x:-89.5,y:-103.8},8).to({x:-53.5,y:-110.8},10).to({x:-67.7,y:-76.8},7).to({x:-147,y:23.2,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(54.9,212.6,1,1,-5);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(168.9,212.6,1,1,-5);

	this.instance_3 = new lib.shadows24();
	this.instance_3.setTransform(-2.5,140.7,0.72,0.72);

	this.instance_4 = new lib.shadows6();
	this.instance_4.setTransform(116.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(50));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 12
	this.instance_14 = new lib.moana_rouge2();
	this.instance_14.setTransform(-19.5,-176);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},40).wait(10));

	// Слой 13
	this.instance_15 = new lib.moana_face2();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// Слой 2
	this.instance_16 = new lib.moana_face1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// elsa_body.png
	this.instance_17 = new lib.moana_clothes();
	this.instance_17.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// elsa_body.png
	this.instance_18 = new lib.moana_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-124.5,-39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(54.9,212.6,1,1,-5);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(168.9,212.6,1,1,-5);

	this.instance_3 = new lib.shadows24();
	this.instance_3.setTransform(-2.5,140.7,0.72,0.72);

	this.instance_4 = new lib.shadows6();
	this.instance_4.setTransform(116.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.moana_face2();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.moana_face1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.moana_clothes();
	this.instance_16.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.moana_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 11
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-82.6,197.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-124.5,y:-39.6},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(54.9,212.6,1,1,-5);

	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(168.9,212.6,1,1,-5);

	this.instance_3 = new lib.shadows24();
	this.instance_3.setTransform(-2.5,140.7,0.72,0.72);

	this.instance_4 = new lib.shadows6();
	this.instance_4.setTransform(116.5,140.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 13
	this.instance_14 = new lib.moana_face2();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 2
	this.instance_15 = new lib.moana_face1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// elsa_body.png
	this.instance_16 = new lib.moana_clothes();
	this.instance_16.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.moana_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(54.9,212.6,1,1,-5);

	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(168.9,212.6,1,1,-5);

	this.instance_2 = new lib.shadows24();
	this.instance_2.setTransform(-2.5,140.7,0.72,0.72);

	this.instance_3 = new lib.shadows6();
	this.instance_3.setTransform(116.5,140.7,0.72,0.72);

	this.instance_4 = new lib.rouge6();
	this.instance_4.setTransform(-106.6,129.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_5 = new lib.polka_1();
	this.instance_5.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 9
	this.instance_6 = new lib.harley_obodok();
	this.instance_6.setTransform(-124.5,-312);

	this.instance_7 = new lib.tiana_fringle2();
	this.instance_7.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 10
	this.instance_8 = new lib.moana_eyelashes2_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 6
	this.instance_9 = new lib.moana_eyelashes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.moana_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 3
	this.instance_11 = new lib.moana_lips1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.moana_eyebrows2_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.moana_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 13
	this.instance_14 = new lib.moana_face2();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.moana_face1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// elsa_body.png
	this.instance_16 = new lib.moana_clothes();
	this.instance_16.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.moana_body();
	this.instance_17.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Слой 12
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-138.8,-84.8,0.663,0.663,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-143.8},4).to({x:-138.8},4).to({x:-143.8},4).to({x:-138.8},4).to({rotation:43.5,x:-42.8,y:-205.8},13).to({x:14.2,y:-164.8},13).to({x:-40.8,y:-110.8},13).to({x:12.2,y:-76.2},14).to({x:-34.8,y:-33.3},11).to({y:-104.3},11).to({x:-39.8,y:-195.3},15).to({y:-90.3},8).to({rotation:118.5,x:-240.7,y:-9.3,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 11
	this.instance_1 = new lib.rouge10_1();
	this.instance_1.setTransform(-95.8,-52.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({x:-179.7,y:0.3,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(54.9,212.6,1,1,-5);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(168.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows24();
	this.instance_4.setTransform(-2.5,140.7,0.72,0.72);

	this.instance_5 = new lib.shadows6();
	this.instance_5.setTransform(116.5,140.7,0.72,0.72);

	this.instance_6 = new lib.rouge6();
	this.instance_6.setTransform(-106.6,129.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(120));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.tiana_fringle2();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(120));

	// Слой 10
	this.instance_10 = new lib.moana_eyelashes2_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Слой 6
	this.instance_11 = new lib.moana_eyelashes1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// Слой 4
	this.instance_12 = new lib.moana_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

	// Слой 3
	this.instance_13 = new lib.moana_lips1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120));

	// Слой 8
	this.instance_14 = new lib.moana_eyebrows2_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120));

	// Слой 5
	this.instance_15 = new lib.moana_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120));

	// Слой 13
	this.instance_16 = new lib.moana_face2();
	this.instance_16.setTransform(-19.5,-176);
	this.instance_16.alpha = 0.012;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30).to({_off:false},0).to({alpha:1},83).wait(7));

	// Слой 2
	this.instance_17 = new lib.moana_face1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(120));

	// elsa_body.png
	this.instance_18 = new lib.moana_clothes();
	this.instance_18.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120));

	// elsa_body.png
	this.instance_19 = new lib.moana_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 12
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-182.8,205.1,0.663,0.663,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:155.5,x:-138.8,y:-84.8},9).wait(1));

	// Слой 11
	this.instance_1 = new lib.rouge10_1();
	this.instance_1.setTransform(-159.8,181.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-95.8,y:-52.7},9).wait(1));

	// Слой 7
	this.instance_2 = new lib.kosmet_1();
	this.instance_2.setTransform(54.9,212.6,1,1,-5);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(168.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows24();
	this.instance_4.setTransform(-2.5,140.7,0.72,0.72);

	this.instance_5 = new lib.shadows6();
	this.instance_5.setTransform(116.5,140.7,0.72,0.72);

	this.instance_6 = new lib.rouge6();
	this.instance_6.setTransform(-106.6,129.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.tiana_fringle2();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// Слой 10
	this.instance_10 = new lib.moana_eyelashes2_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 6
	this.instance_11 = new lib.moana_eyelashes1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 4
	this.instance_12 = new lib.moana_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 3
	this.instance_13 = new lib.moana_lips1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 8
	this.instance_14 = new lib.moana_eyebrows2_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 5
	this.instance_15 = new lib.moana_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 2
	this.instance_16 = new lib.moana_face1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// elsa_body.png
	this.instance_17 = new lib.moana_clothes();
	this.instance_17.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// elsa_body.png
	this.instance_18 = new lib.moana_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(54.9,212.6,1,1,-5);

	this.instance_1 = new lib.kosmet_1();
	this.instance_1.setTransform(168.9,212.6,1,1,-5);

	this.instance_2 = new lib.shadows24();
	this.instance_2.setTransform(-2.5,140.7,0.72,0.72);

	this.instance_3 = new lib.face_brush_1();
	this.instance_3.setTransform(-182.8,205.1,0.663,0.663,65.5);

	this.instance_4 = new lib.shadows6();
	this.instance_4.setTransform(116.5,140.7,0.72,0.72);

	this.instance_5 = new lib.rouge6();
	this.instance_5.setTransform(-106.6,129.3,0.72,0.72);

	this.instance_6 = new lib.rouge10();
	this.instance_6.setTransform(-206.9,127.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.tiana_fringle2();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 10
	this.instance_10 = new lib.moana_eyelashes2_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 6
	this.instance_11 = new lib.moana_eyelashes1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 4
	this.instance_12 = new lib.moana_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 3
	this.instance_13 = new lib.moana_lips1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 8
	this.instance_14 = new lib.moana_eyebrows2_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.moana_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 2
	this.instance_16 = new lib.moana_face1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// elsa_body.png
	this.instance_17 = new lib.moana_clothes();
	this.instance_17.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// elsa_body.png
	this.instance_18 = new lib.moana_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect];


(lib.hero1_51_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// polka.png
	this.instance = new lib.polka_1();
	this.instance.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.hero_4_img();
	this.instance_1.setTransform(-257,-328);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-328,917,678);
p.frameBounds = [rect];


(lib.hero1_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// Слой 5
	this.instance = new lib.hand_cl_1();
	this.instance.setTransform(307.1,356.4,0.488,0.488,-48.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({rotation:-70.7,x:31.1,y:-121.5},10).wait(51).to({rotation:0,skewX:70.7,skewY:-109.3},1).to({x:-60.9,y:-110.5},7).wait(52).to({x:-295.9,y:324.4,alpha:0.012},8).to({_off:true},1).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:322.7,alpha:0.012},8).to({_off:true},1).wait(131));

	// Слой 7
	this.instance_2 = new lib.hero_4_img();
	this.instance_2.setTransform(-257,-328);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-328,917,678);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-458.5,-328,917,682.7), new cjs.Rectangle(-257,-328,678.8,802.7), new cjs.Rectangle(-257,-328,649.4,755.5), new cjs.Rectangle(-257,-328,620,708.5), new cjs.Rectangle(-257,-328,590.5,678), new cjs.Rectangle(-257,-328,560.7,678), new cjs.Rectangle(-257,-328,530.8,678), new cjs.Rectangle(-257,-328,500.7,678), rect=new cjs.Rectangle(-257,-328,490,678), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-269.3,-328,502.3,678), new cjs.Rectangle(-298.7,-328,531.7,678), new cjs.Rectangle(-328,-328,561,678), new cjs.Rectangle(-357.4,-328,590.4,717), new cjs.Rectangle(-386.9,-328,619.8,771.6), new cjs.Rectangle(-257,-328,490,678)];


(lib.hero1_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 7
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(-168.4,-96,1,1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-140.4,y:-121.6},6).to({x:-122.4,y:-134.6},5).to({x:-81,y:-125.6},17).to({x:-32,y:-132.6},5).to({x:10,y:-142.6},16).to({x:21,y:-137.6},6).to({x:26,y:-131.6},4).to({x:-130,y:6.4,alpha:0.012},9).to({_off:true},1).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.elsa_fringle3();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(70));

	// Слой 6
	this.instance_4 = new lib.harley_eyelashes_img();
	this.instance_4.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// Слой 14
	this.instance_5 = new lib.harley_eyes3();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

	// Слой 13
	this.instance_6 = new lib.harley_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70));

	// Слой 11
	this.instance_8 = new lib.harley_lips3();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

	// Слой 8
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(70));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

	// Слой 10
	this.instance_14 = new lib.harley_eyebrows2();
	this.instance_14.setTransform(-19.5,-176);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},24).wait(46));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:0.012},24).to({_off:true},1).wait(45));

	// Слой 2
	this.instance_16 = new lib.harley_heart();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_shadow1();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_red();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half_contur();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_rouge_white();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_half();
	this.instance_21.setTransform(-19.5,-176);

	this.instance_22 = new lib.harley_face_base_img();
	this.instance_22.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(70));

	// elsa_body.png
	this.instance_23 = new lib.harley_clothes_img();
	this.instance_23.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(70));

	// elsa_body.png
	this.instance_24 = new lib.harley_body();
	this.instance_24.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(-168.4,-96,1,1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.elsa_fringle3();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 6
	this.instance_4 = new lib.harley_eyelashes_img();
	this.instance_4.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 14
	this.instance_5 = new lib.harley_eyes3();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 13
	this.instance_6 = new lib.harley_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 11
	this.instance_8 = new lib.harley_lips3();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 5
	this.instance_14 = new lib.harley_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.harley_heart();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_shadow1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 7
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(184.6,223.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,x:-168.4,y:-96},9).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.elsa_fringle3();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// Слой 6
	this.instance_4 = new lib.harley_eyelashes_img();
	this.instance_4.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 14
	this.instance_5 = new lib.harley_eyes3();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 13
	this.instance_6 = new lib.harley_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 11
	this.instance_8 = new lib.harley_lips3();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 8
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 5
	this.instance_14 = new lib.harley_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 2
	this.instance_15 = new lib.harley_heart();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_shadow1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(10));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(184.6,223.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// polka.png
	this.instance_1 = new lib.polka_1();
	this.instance_1.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 9
	this.instance_2 = new lib.harley_obodok();
	this.instance_2.setTransform(-124.5,-312);

	this.instance_3 = new lib.elsa_fringle3();
	this.instance_3.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 6
	this.instance_4 = new lib.harley_eyelashes_img();
	this.instance_4.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 14
	this.instance_5 = new lib.harley_eyes3();
	this.instance_5.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 13
	this.instance_6 = new lib.harley_eyes2();
	this.instance_6.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 11
	this.instance_8 = new lib.harley_lips3();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 5
	this.instance_14 = new lib.harley_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.harley_heart();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_shadow1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 12
	this.instance = new lib.lens1_1();
	this.instance.setTransform(-117.3,-63.3,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.7,y:-153.3},13).to({scaleX:0.44,scaleY:0.44,alpha:0.012},5).to({_off:true},1).wait(1));

	// Слой 10
	this.instance_1 = new lib.lens3_1();
	this.instance_1.setTransform(-165.9,-63.3,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-69.9,y:-152.5},13).to({scaleX:0.44,scaleY:0.44,alpha:0.012},5).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.elsa_fringle3();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(20));

	// Слой 6
	this.instance_6 = new lib.harley_eyelashes_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// Слой 14
	this.instance_7 = new lib.harley_eyes3();
	this.instance_7.setTransform(-19.5,-176);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({alpha:1},5).wait(2));

	// Слой 13
	this.instance_8 = new lib.harley_eyes2();
	this.instance_8.setTransform(-19.5,-176);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).to({alpha:1},5).wait(2));

	// Слой 4
	this.instance_9 = new lib.harley_eyes1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

	// Слой 11
	this.instance_10 = new lib.harley_lips3();
	this.instance_10.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

	// Слой 8
	this.instance_11 = new lib.harley_lips2();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_rouge_white2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(20));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(20));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(20));

	// Слой 2
	this.instance_17 = new lib.harley_heart();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_shadow1();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_red();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half_contur();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_rouge_white();
	this.instance_21.setTransform(-19.5,-176);

	this.instance_22 = new lib.harley_face_half();
	this.instance_22.setTransform(-19.5,-176);

	this.instance_23 = new lib.harley_face_base_img();
	this.instance_23.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(20));

	// elsa_body.png
	this.instance_24 = new lib.harley_clothes_img();
	this.instance_24.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(20));

	// elsa_body.png
	this.instance_25 = new lib.harley_body();
	this.instance_25.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 12
	this.instance = new lib.lens1_1();
	this.instance.setTransform(-117.3,-63.3,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 10
	this.instance_1 = new lib.lens3_1();
	this.instance_1.setTransform(-165.9,-63.3,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.elsa_fringle3();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 6
	this.instance_6 = new lib.harley_eyelashes_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 11
	this.instance_8 = new lib.harley_lips3();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 5
	this.instance_14 = new lib.harley_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.harley_heart();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_shadow1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Слой 12
	this.instance = new lib.lens1_1();
	this.instance.setTransform(150.7,182.2,0.517,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.52,x:-117.3,y:-63.3},8).wait(1));

	// Слой 10
	this.instance_1 = new lib.lens3_1();
	this.instance_1.setTransform(102.1,182.2,0.517,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.52,x:-165.9,y:-63.3},8).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.elsa_fringle3();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(9));

	// Слой 6
	this.instance_6 = new lib.harley_eyelashes_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9));

	// Слой 11
	this.instance_8 = new lib.harley_lips3();
	this.instance_8.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9));

	// Слой 8
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(9));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9));

	// Слой 5
	this.instance_14 = new lib.harley_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9));

	// Слой 2
	this.instance_15 = new lib.harley_heart();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_shadow1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(9));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(9));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(184.6,223.9);

	this.instance_1 = new lib.dayneris_lens_16_1();
	this.instance_1.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_2 = new lib.polka_1();
	this.instance_2.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 9
	this.instance_3 = new lib.harley_obodok();
	this.instance_3.setTransform(-124.5,-312);

	this.instance_4 = new lib.elsa_fringle3();
	this.instance_4.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 6
	this.instance_5 = new lib.harley_eyelashes_img();
	this.instance_5.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4
	this.instance_6 = new lib.harley_eyes1_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 11
	this.instance_7 = new lib.harley_lips3();
	this.instance_7.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 8
	this.instance_8 = new lib.harley_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.harley_rouge_white2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_black();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_lips1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 3
	this.instance_12 = new lib.harley_lips0_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.harley_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.harley_heart();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_shadow1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-100.2,-17.3,1,1,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-59.2,y:-13.3},4).to({x:-68.2,y:-17.3},8).to({x:-82.2,y:-34.3},8).to({x:-73.2,y:-29.3},5).to({x:-59.2,y:-32.3},8).to({x:-62.2,y:-22.3},3).to({x:-74.2,y:-30.3},8).to({x:-83.2,y:-34.3},6).to({x:-135.2,y:10.7,alpha:0.012},8).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.dayneris_lens_16_1();
	this.instance_2.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(60));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.elsa_fringle3();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(60));

	// Слой 6
	this.instance_6 = new lib.harley_eyelashes_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// Слой 11
	this.instance_8 = new lib.harley_lips3();
	this.instance_8.setTransform(-19.5,-176);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({alpha:1},46).wait(10));

	// Слой 8
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(60));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// Слой 5
	this.instance_14 = new lib.harley_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60));

	// Слой 2
	this.instance_15 = new lib.harley_heart();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_shadow1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(60));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(60));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-100.2,-17.3,1,1,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.dayneris_lens_16_1();
	this.instance_2.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.elsa_fringle3();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 6
	this.instance_6 = new lib.harley_eyelashes_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 8
	this.instance_8 = new lib.harley_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.harley_rouge_white2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_black();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_lips1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 3
	this.instance_12 = new lib.harley_lips0_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.harley_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.harley_heart();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_shadow1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-137.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-150,x:-100.2,y:-17.3},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.dayneris_lens_16_1();
	this.instance_2.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.elsa_fringle3();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// Слой 6
	this.instance_6 = new lib.harley_eyelashes_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 8
	this.instance_8 = new lib.harley_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.harley_rouge_white2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_black();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_lips1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// Слой 3
	this.instance_12 = new lib.harley_lips0_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.harley_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 2
	this.instance_14 = new lib.harley_heart();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_shadow1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.podvodka1_2_1();
	this.instance.setTransform(-137.2,139.5);

	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.dayneris_lens_16_1();
	this.instance_2.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.elsa_fringle3();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 6
	this.instance_6 = new lib.harley_eyelashes_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.harley_eyes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 8
	this.instance_8 = new lib.harley_lips2();
	this.instance_8.setTransform(-19.5,-176);

	this.instance_9 = new lib.harley_rouge_white2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_black();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_lips1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 3
	this.instance_12 = new lib.harley_lips0_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.harley_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.harley_heart();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_shadow1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Слой 10
	this.instance = new lib.lipstick24_1();
	this.instance.setTransform(-87,-16.9,0.72,0.72,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-55,y:-44.9},4).to({x:-31,y:-40.9},10).to({y:-30.9},3).to({x:-48,y:-40.9},11).to({x:-36,y:-42.9},12).to({y:-30.9},2).to({x:-51,y:-40.9},11).to({x:-131,y:-17.9,alpha:0.012},5).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.dayneris_lens_16_1();
	this.instance_3.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(60));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.elsa_fringle3();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(60));

	// Слой 6
	this.instance_7 = new lib.harley_eyelashes_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// Слой 4
	this.instance_8 = new lib.harley_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// Слой 11
	this.instance_9 = new lib.harley_lips2();
	this.instance_9.setTransform(-19.5,-176);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({alpha:1},49).wait(7));

	// Слой 8
	this.instance_10 = new lib.harley_rouge_white2();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_rouge_black();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_lips1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(60));

	// Слой 3
	this.instance_13 = new lib.harley_lips0_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// Слой 5
	this.instance_14 = new lib.harley_eyebrows1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60));

	// Слой 2
	this.instance_15 = new lib.harley_heart();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_shadow1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(60));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(60));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.lipstick24_1();
	this.instance.setTransform(-87,-16.9,0.72,0.72,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.dayneris_lens_16_1();
	this.instance_3.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.elsa_fringle3();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 6
	this.instance_7 = new lib.harley_eyelashes_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.harley_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.harley_rouge_white2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_black();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_lips1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_12 = new lib.harley_lips0_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.harley_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.harley_heart();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_shadow1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 10
	this.instance = new lib.lipstick24_1();
	this.instance.setTransform(201,166.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:-87,y:-16.9},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.dayneris_lens_16_1();
	this.instance_3.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.elsa_fringle3();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(10));

	// Слой 6
	this.instance_7 = new lib.harley_eyelashes_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 4
	this.instance_8 = new lib.harley_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 8
	this.instance_9 = new lib.harley_rouge_white2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_black();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_lips1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 3
	this.instance_12 = new lib.harley_lips0_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 5
	this.instance_13 = new lib.harley_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 2
	this.instance_14 = new lib.harley_heart();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_shadow1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.podvodka1_2_1();
	this.instance.setTransform(-137.2,139.5);

	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.dayneris_lens_16_1();
	this.instance_3.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_4 = new lib.polka_1();
	this.instance_4.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.harley_obodok();
	this.instance_5.setTransform(-124.5,-312);

	this.instance_6 = new lib.elsa_fringle3();
	this.instance_6.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 6
	this.instance_7 = new lib.harley_eyelashes_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.harley_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.harley_rouge_white2();
	this.instance_9.setTransform(-19.5,-176);

	this.instance_10 = new lib.harley_rouge_black();
	this.instance_10.setTransform(-19.5,-176);

	this.instance_11 = new lib.harley_lips1();
	this.instance_11.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 3
	this.instance_12 = new lib.harley_lips0_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.instance_13 = new lib.harley_eyebrows1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.harley_heart();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_shadow1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Слой 12
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(-198.1,-75.4,1,1,47.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-177.1},5).to({x:-198.1},4).to({x:-177.1},4).to({rotation:-42.1,x:-112.1,y:-106.4},10).to({x:-143.1,y:-124.4},13).to({x:-171.1,y:-110.4},12).to({x:-175.1,y:-83.4},5).to({x:-147.2,y:-69.5},9).to({x:-111.2,y:-78.5},13).to({x:-154.2,y:-60.5},4).to({x:-146.2},5).to({x:-141.2,y:-63.5},6).to({x:-144.2,y:-52.5},10).to({x:-152.2,y:-59.5},10).to({x:-248.8,y:-15.5,alpha:0.012},8).to({_off:true},1).wait(1));

	// Слой 10
	this.instance_1 = new lib.shadows12_1();
	this.instance_1.setTransform(-148.5,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({x:-152.5,y:46.5,alpha:0.012},8).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_2 = new lib.podvodka1_2_1();
	this.instance_2.setTransform(-137.2,139.5);

	this.instance_3 = new lib.pencil10_1();
	this.instance_3.setTransform(184.6,223.9);

	this.instance_4 = new lib.lipstick24_1();
	this.instance_4.setTransform(201,166.1,0.72,0.72);

	this.instance_5 = new lib.dayneris_lens_16_1();
	this.instance_5.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(120));

	// polka.png
	this.instance_6 = new lib.polka_1();
	this.instance_6.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Слой 9
	this.instance_7 = new lib.harley_obodok();
	this.instance_7.setTransform(-124.5,-312);

	this.instance_8 = new lib.elsa_fringle3();
	this.instance_8.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(120));

	// Слой 6
	this.instance_9 = new lib.harley_eyelashes_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Слой 4
	this.instance_10 = new lib.harley_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Слой 8
	this.instance_11 = new lib.harley_rouge_white2();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_rouge_black();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_lips1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(120));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120));

	// Слой 14
	this.instance_16 = new lib.harley_heart();
	this.instance_16.setTransform(-19.5,-176);
	this.instance_16.alpha = 0.012;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(81).to({_off:false},0).to({alpha:1},29).wait(10));

	// Слой 13
	this.instance_17 = new lib.harley_shadow1();
	this.instance_17.setTransform(-19.5,-176);
	this.instance_17.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},75).wait(45));

	// Слой 2
	this.instance_18 = new lib.harley_rouge_red();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half_contur();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_rouge_white();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_half();
	this.instance_21.setTransform(-19.5,-176);

	this.instance_22 = new lib.harley_face_base_img();
	this.instance_22.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(120));

	// elsa_body.png
	this.instance_23 = new lib.harley_clothes_img();
	this.instance_23.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(120));

	// elsa_body.png
	this.instance_24 = new lib.harley_body();
	this.instance_24.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 12
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(2.9,212.6,1,1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:47.9,x:-198.1,y:-75.4},9).wait(1));

	// Слой 10
	this.instance_1 = new lib.shadows12_1();
	this.instance_1.setTransform(20.5,187.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-148.5,y:-25.8},9).wait(1));

	// Слой 7
	this.instance_2 = new lib.podvodka1_2_1();
	this.instance_2.setTransform(-137.2,139.5);

	this.instance_3 = new lib.pencil10_1();
	this.instance_3.setTransform(184.6,223.9);

	this.instance_4 = new lib.lipstick24_1();
	this.instance_4.setTransform(201,166.1,0.72,0.72);

	this.instance_5 = new lib.dayneris_lens_16_1();
	this.instance_5.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// polka.png
	this.instance_6 = new lib.polka_1();
	this.instance_6.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 9
	this.instance_7 = new lib.harley_obodok();
	this.instance_7.setTransform(-124.5,-312);

	this.instance_8 = new lib.elsa_fringle3();
	this.instance_8.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(10));

	// Слой 6
	this.instance_9 = new lib.harley_eyelashes_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 4
	this.instance_10 = new lib.harley_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 8
	this.instance_11 = new lib.harley_rouge_white2();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_rouge_black();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_lips1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 11
	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.podvodka1_2_1();
	this.instance.setTransform(-137.2,139.5);

	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(2.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows12_1();
	this.instance_4.setTransform(20.5,187.1);

	this.instance_5 = new lib.dayneris_lens_16_1();
	this.instance_5.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_6 = new lib.polka_1();
	this.instance_6.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 9
	this.instance_7 = new lib.harley_obodok();
	this.instance_7.setTransform(-124.5,-312);

	this.instance_8 = new lib.elsa_fringle3();
	this.instance_8.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Слой 6
	this.instance_9 = new lib.harley_eyelashes_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 4
	this.instance_10 = new lib.harley_eyes1_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 8
	this.instance_11 = new lib.harley_rouge_white2();
	this.instance_11.setTransform(-19.5,-176);

	this.instance_12 = new lib.harley_rouge_black();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_lips1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 11
	this.instance_16 = new lib.harley_rouge_red();
	this.instance_16.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Слой 10
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-140.6,-71.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-100.5,y:-107.6},5).to({x:-59.5},13).to({x:-76.5,y:-87.6},14).to({x:-96.5,y:-103.8},15).to({x:-156.5,y:-49.8,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(53));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.elsa_fringle3();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(53));

	// Слой 6
	this.instance_10 = new lib.harley_eyelashes_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(53));

	// Слой 4
	this.instance_11 = new lib.harley_eyes1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(53));

	// Слой 8
	this.instance_12 = new lib.harley_rouge_white2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(53));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(53));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(53));

	// Слой 11
	this.instance_17 = new lib.harley_rouge_red();
	this.instance_17.setTransform(-19.5,-176);
	this.instance_17.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},47).wait(6));

	// Слой 2
	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(53));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(53));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-140.6,-71.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.elsa_fringle3();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 6
	this.instance_10 = new lib.harley_eyelashes_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 4
	this.instance_11 = new lib.harley_eyes1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.harley_rouge_white2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 10
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-72.6,184.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-140.6,y:-71.6},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.elsa_fringle3();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// Слой 6
	this.instance_10 = new lib.harley_eyelashes_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 4
	this.instance_11 = new lib.harley_eyes1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 8
	this.instance_12 = new lib.harley_rouge_white2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(10));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.podvodka1_2_1();
	this.instance.setTransform(-137.2,139.5);

	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(2.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows12_1();
	this.instance_4.setTransform(20.5,187.1);

	this.instance_5 = new lib.rouge11_1();
	this.instance_5.setTransform(-77.3,177.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_7 = new lib.polka_1();
	this.instance_7.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 9
	this.instance_8 = new lib.harley_obodok();
	this.instance_8.setTransform(-124.5,-312);

	this.instance_9 = new lib.elsa_fringle3();
	this.instance_9.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 6
	this.instance_10 = new lib.harley_eyelashes_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 4
	this.instance_11 = new lib.harley_eyes1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 8
	this.instance_12 = new lib.harley_rouge_white2();
	this.instance_12.setTransform(-19.5,-176);

	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 10
	this.instance = new lib.podvodka4_1();
	this.instance.setTransform(-77.6,-48,1,1,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-49.6,y:-31},6).to({x:-43.6,y:-33},5).to({x:-37.6,y:-31},5).to({x:-27.6,y:-30},6).to({x:-46.9,y:-51},3).to({y:-52},4).to({y:-51},4).to({x:-1.9,y:-48},3).to({x:-0.9,y:-54},5).to({y:-49},3).to({x:-102.9,y:-29,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.elsa_fringle3();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(50));

	// Слой 6
	this.instance_11 = new lib.harley_eyelashes_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 4
	this.instance_12 = new lib.harley_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 12
	this.instance_13 = new lib.harley_rouge_white2();
	this.instance_13.setTransform(-19.5,-176);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},44).wait(6));

	// Слой 8
	this.instance_14 = new lib.harley_rouge_black();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.harley_lips1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(50));

	// Слой 3
	this.instance_16 = new lib.harley_lips0_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// Слой 5
	this.instance_17 = new lib.harley_eyebrows1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// Слой 2
	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(50));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(50));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.podvodka4_1();
	this.instance.setTransform(-77.6,-48,1,1,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.elsa_fringle3();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 6
	this.instance_11 = new lib.harley_eyelashes_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 4
	this.instance_12 = new lib.harley_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 10
	this.instance = new lib.podvodka4_1();
	this.instance.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-150,x:-77.6,y:-48},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.elsa_fringle3();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 6
	this.instance_11 = new lib.harley_eyelashes_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 4
	this.instance_12 = new lib.harley_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 8
	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.podvodka1_2_1();
	this.instance.setTransform(-137.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(2.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows12_1();
	this.instance_4.setTransform(20.5,187.1);

	this.instance_5 = new lib.rouge11_1();
	this.instance_5.setTransform(-77.3,177.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.instance_7 = new lib.podvodka1_3_1();
	this.instance_7.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.elsa_fringle3();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 6
	this.instance_11 = new lib.harley_eyelashes_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 4
	this.instance_12 = new lib.harley_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.harley_rouge_black();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-95.2,-43.3,1,1,-150);

	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-44.2,y:-52.3},4).to({x:-42.2,y:-45.3},4).to({x:-50.2,y:-12.3},2).to({x:-25.2,y:-32.3},8).to({x:-4.2,y:-66.3},3).to({y:-61.3},3).to({x:-1.2,y:-42.3},6).to({x:-0.2,y:-63.3},8).to({x:17.8,y:-64.3},3).to({y:-52.3},6).to({_off:true,rotation:0,x:-137.2,y:139.5},7).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(55));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(55));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(55));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(55));

	// Слой 11
	this.instance_14 = new lib.harley_rouge_black();
	this.instance_14.setTransform(-19.5,-176);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({alpha:1},44).wait(8));

	// Слой 8
	this.instance_15 = new lib.harley_lips1();
	this.instance_15.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(55));

	// Слой 3
	this.instance_16 = new lib.harley_lips0_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(55));

	// Слой 5
	this.instance_17 = new lib.harley_eyebrows1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(55));

	// Слой 2
	this.instance_18 = new lib.harley_face_half_contur();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_rouge_white();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_half();
	this.instance_20.setTransform(-19.5,-176);

	this.instance_21 = new lib.harley_face_base_img();
	this.instance_21.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(55));

	// elsa_body.png
	this.instance_22 = new lib.harley_clothes_img();
	this.instance_22.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(55));

	// elsa_body.png
	this.instance_23 = new lib.harley_body();
	this.instance_23.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-95.2,-43.3,1,1,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(2.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows12_1();
	this.instance_4.setTransform(20.5,187.1);

	this.instance_5 = new lib.rouge11_1();
	this.instance_5.setTransform(-77.3,177.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.instance_7 = new lib.podvodka1_3_1();
	this.instance_7.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.elsa_fringle3();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 6
	this.instance_11 = new lib.harley_eyelashes_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 4
	this.instance_12 = new lib.harley_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.harley_lips1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 2
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-137.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-150,x:-95.2,y:-43.3},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(2.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows12_1();
	this.instance_4.setTransform(20.5,187.1);

	this.instance_5 = new lib.rouge11_1();
	this.instance_5.setTransform(-77.3,177.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.instance_7 = new lib.podvodka1_3_1();
	this.instance_7.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.elsa_fringle3();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// Слой 6
	this.instance_11 = new lib.harley_eyelashes_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 4
	this.instance_12 = new lib.harley_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 8
	this.instance_13 = new lib.harley_lips1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 2
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.podvodka1_2_1();
	this.instance.setTransform(-137.2,139.5);

	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(2.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows12_1();
	this.instance_4.setTransform(20.5,187.1);

	this.instance_5 = new lib.rouge11_1();
	this.instance_5.setTransform(-77.3,177.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.instance_7 = new lib.podvodka1_3_1();
	this.instance_7.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_8 = new lib.polka_1();
	this.instance_8.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 9
	this.instance_9 = new lib.harley_obodok();
	this.instance_9.setTransform(-124.5,-312);

	this.instance_10 = new lib.elsa_fringle3();
	this.instance_10.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 6
	this.instance_11 = new lib.harley_eyelashes_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 4
	this.instance_12 = new lib.harley_eyes1_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 8
	this.instance_13 = new lib.harley_lips1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 2
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Слой 10
	this.instance = new lib.lipstick33_1();
	this.instance.setTransform(-29.5,-18.7,0.72,0.72,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-23.5,y:-46.7},5).to({x:-4.5,y:-44.7},14).to({x:-5.5,y:-39.7},3).to({x:-22.5,y:-32.1},14).to({x:-163.5,y:17.9,alpha:0.012},7).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(45));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(45));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(45));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45));

	// Слой 8
	this.instance_14 = new lib.harley_lips1();
	this.instance_14.setTransform(-19.5,-176);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({alpha:1},32).wait(9));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45));

	// Слой 2
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(45));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(45));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.lipstick33_1();
	this.instance.setTransform(-29.5,-18.7,0.72,0.72,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 2
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 10
	this.instance = new lib.lipstick33_1();
	this.instance.setTransform(238,166.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:-29.5,y:-18.7},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(10));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 2
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.podvodka1_2_1();
	this.instance.setTransform(-137.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.lipstick33_1();
	this.instance_3.setTransform(238,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 2
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-95.2,-43.3,1,1,-150);

	this.instance_1 = new lib.podvodka1_2_1();
	this.instance_1.setTransform(-137.2,139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-51.2,y:-62.2},5).to({y:-188.2},18).to({x:26.6,y:-43.2},2).to({x:1.6,y:-12.2},8).to({x:-51.4,y:13.8},10).to({y:-129.2},15).to({_off:true,rotation:0,x:-137.2,y:139.5},6).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.lipstick33_1();
	this.instance_4.setTransform(238,166.1,0.72,0.72);

	this.instance_5 = new lib.kosmet_1();
	this.instance_5.setTransform(2.9,212.6,1,1,-5);

	this.instance_6 = new lib.shadows12_1();
	this.instance_6.setTransform(20.5,187.1);

	this.instance_7 = new lib.rouge11_1();
	this.instance_7.setTransform(-77.3,177.1);

	this.instance_8 = new lib.dayneris_lens_16_1();
	this.instance_8.setTransform(126.5,169);

	this.instance_9 = new lib.podvodka1_3_1();
	this.instance_9.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(65));

	// polka.png
	this.instance_10 = new lib.polka_1();
	this.instance_10.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// Слой 9
	this.instance_11 = new lib.harley_obodok();
	this.instance_11.setTransform(-124.5,-312);

	this.instance_12 = new lib.elsa_fringle3();
	this.instance_12.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(65));

	// Слой 6
	this.instance_13 = new lib.harley_eyelashes_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65));

	// Слой 4
	this.instance_14 = new lib.harley_eyes1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(65));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(65));

	// Слой 8
	this.instance_17 = new lib.harley_face_half_contur();
	this.instance_17.setTransform(-19.5,-176);
	this.instance_17.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},59).wait(6));

	// Слой 2
	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(65));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(65));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-95.2,-43.3,1,1,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.lipstick33_1();
	this.instance_3.setTransform(238,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 8
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 10
	this.instance = new lib.podvodka6();
	this.instance.setTransform(-137.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-150,x:-95.2,y:-43.3},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.lipstick33_1();
	this.instance_3.setTransform(238,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(10));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 8
	this.instance_16 = new lib.harley_face_half_contur();
	this.instance_16.setTransform(-19.5,-176);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 2
	this.instance_17 = new lib.harley_rouge_white();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.pencil10_1();
	this.instance.setTransform(184.6,223.9);

	this.instance_1 = new lib.lipstick24_1();
	this.instance_1.setTransform(201,166.1,0.72,0.72);

	this.instance_2 = new lib.lipstick33_1();
	this.instance_2.setTransform(238,166.1,0.72,0.72);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(2.9,212.6,1,1,-5);

	this.instance_4 = new lib.shadows12_1();
	this.instance_4.setTransform(20.5,187.1);

	this.instance_5 = new lib.rouge11_1();
	this.instance_5.setTransform(-77.3,177.1);

	this.instance_6 = new lib.dayneris_lens_16_1();
	this.instance_6.setTransform(126.5,169);

	this.instance_7 = new lib.podvodka1_2_1();
	this.instance_7.setTransform(-137.2,139.5);

	this.instance_8 = new lib.podvodka1_3_1();
	this.instance_8.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_9 = new lib.polka_1();
	this.instance_9.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 9
	this.instance_10 = new lib.harley_obodok();
	this.instance_10.setTransform(-124.5,-312);

	this.instance_11 = new lib.elsa_fringle3();
	this.instance_11.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Слой 6
	this.instance_12 = new lib.harley_eyelashes_img();
	this.instance_12.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 4
	this.instance_13 = new lib.harley_eyes1_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 3
	this.instance_14 = new lib.harley_lips0_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 5
	this.instance_15 = new lib.harley_eyebrows1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 2
	this.instance_16 = new lib.harley_rouge_white();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.harley_face_half();
	this.instance_17.setTransform(-19.5,-176);

	this.instance_18 = new lib.harley_face_base_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.harley_clothes_img();
	this.instance_19.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Слой 11
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-175.5,-20,0.663,0.663,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:140.5,x:-162.5,y:-28},4).to({rotation:35.5,x:-1.5,y:-65},7).to({x:15.4,y:-72.6},7).to({x:-4.6,y:-60.6},6).to({x:-42.8,y:-22.6},6).to({x:-35.8},4).to({x:5.2,y:-66.6},5).to({x:-91.8,y:-29.7,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 8
	this.instance_1 = new lib.rouge7_1();
	this.instance_1.setTransform(-109.5,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({x:-169.6,y:23.1,alpha:0.012},4).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.lipstick33_1();
	this.instance_4.setTransform(238,166.1,0.72,0.72);

	this.instance_5 = new lib.kosmet_1();
	this.instance_5.setTransform(2.9,212.6,1,1,-5);

	this.instance_6 = new lib.shadows12_1();
	this.instance_6.setTransform(20.5,187.1);

	this.instance_7 = new lib.rouge11_1();
	this.instance_7.setTransform(-77.3,177.1);

	this.instance_8 = new lib.dayneris_lens_16_1();
	this.instance_8.setTransform(126.5,169);

	this.instance_9 = new lib.podvodka1_2_1();
	this.instance_9.setTransform(-137.2,139.5);

	this.instance_10 = new lib.podvodka1_3_1();
	this.instance_10.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(45));

	// polka.png
	this.instance_11 = new lib.polka_1();
	this.instance_11.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45));

	// Слой 9
	this.instance_12 = new lib.harley_obodok();
	this.instance_12.setTransform(-124.5,-312);

	this.instance_13 = new lib.elsa_fringle3();
	this.instance_13.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(45));

	// Слой 6
	this.instance_14 = new lib.harley_eyelashes_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45));

	// Слой 4
	this.instance_15 = new lib.harley_eyes1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45));

	// Слой 3
	this.instance_16 = new lib.harley_lips0_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45));

	// Слой 5
	this.instance_17 = new lib.harley_eyebrows1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(45));

	// Слой 10
	this.instance_18 = new lib.harley_rouge_white();
	this.instance_18.setTransform(-19.5,-176);
	this.instance_18.alpha = 0.012;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(8).to({_off:false},0).to({alpha:1},31).wait(6));

	// Слой 2
	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);

	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19}]}).wait(45));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(45));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-175.5,-20,0.663,0.663,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8
	this.instance_1 = new lib.rouge7_1();
	this.instance_1.setTransform(-109.5,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.lipstick33_1();
	this.instance_4.setTransform(238,166.1,0.72,0.72);

	this.instance_5 = new lib.kosmet_1();
	this.instance_5.setTransform(2.9,212.6,1,1,-5);

	this.instance_6 = new lib.shadows12_1();
	this.instance_6.setTransform(20.5,187.1);

	this.instance_7 = new lib.rouge11_1();
	this.instance_7.setTransform(-77.3,177.1);

	this.instance_8 = new lib.dayneris_lens_16_1();
	this.instance_8.setTransform(126.5,169);

	this.instance_9 = new lib.podvodka1_2_1();
	this.instance_9.setTransform(-137.2,139.5);

	this.instance_10 = new lib.podvodka1_3_1();
	this.instance_10.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// polka.png
	this.instance_11 = new lib.polka_1();
	this.instance_11.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 9
	this.instance_12 = new lib.harley_obodok();
	this.instance_12.setTransform(-124.5,-312);

	this.instance_13 = new lib.elsa_fringle3();
	this.instance_13.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// Слой 6
	this.instance_14 = new lib.harley_eyelashes_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 4
	this.instance_15 = new lib.harley_eyes1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 3
	this.instance_16 = new lib.harley_lips0_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 5
	this.instance_17 = new lib.harley_eyebrows1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// Слой 10
	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Слой 2
	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 11
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-232.4,203.9,0.663,0.663,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:125.5,x:-175.5,y:-20},9).wait(1));

	// Слой 8
	this.instance_1 = new lib.rouge7_1();
	this.instance_1.setTransform(-207.4,180.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-109.5,y:-6.9},9).wait(1));

	// Слой 7
	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.lipstick33_1();
	this.instance_4.setTransform(238,166.1,0.72,0.72);

	this.instance_5 = new lib.kosmet_1();
	this.instance_5.setTransform(2.9,212.6,1,1,-5);

	this.instance_6 = new lib.shadows12_1();
	this.instance_6.setTransform(20.5,187.1);

	this.instance_7 = new lib.rouge11_1();
	this.instance_7.setTransform(-77.3,177.1);

	this.instance_8 = new lib.dayneris_lens_16_1();
	this.instance_8.setTransform(126.5,169);

	this.instance_9 = new lib.podvodka1_2_1();
	this.instance_9.setTransform(-137.2,139.5);

	this.instance_10 = new lib.podvodka1_3_1();
	this.instance_10.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// polka.png
	this.instance_11 = new lib.polka_1();
	this.instance_11.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 9
	this.instance_12 = new lib.harley_obodok();
	this.instance_12.setTransform(-124.5,-312);

	this.instance_13 = new lib.elsa_fringle3();
	this.instance_13.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(10));

	// Слой 6
	this.instance_14 = new lib.harley_eyelashes_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 4
	this.instance_15 = new lib.harley_eyes1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 3
	this.instance_16 = new lib.harley_lips0_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 5
	this.instance_17 = new lib.harley_eyebrows1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// Слой 10
	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// Слой 2
	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-232.4,203.9,0.663,0.663,65.5);

	this.instance_1 = new lib.rouge7_1();
	this.instance_1.setTransform(-207.4,180.1);

	this.instance_2 = new lib.pencil10_1();
	this.instance_2.setTransform(184.6,223.9);

	this.instance_3 = new lib.lipstick24_1();
	this.instance_3.setTransform(201,166.1,0.72,0.72);

	this.instance_4 = new lib.lipstick33_1();
	this.instance_4.setTransform(238,166.1,0.72,0.72);

	this.instance_5 = new lib.kosmet_1();
	this.instance_5.setTransform(2.9,212.6,1,1,-5);

	this.instance_6 = new lib.shadows12_1();
	this.instance_6.setTransform(20.5,187.1);

	this.instance_7 = new lib.rouge11_1();
	this.instance_7.setTransform(-77.3,177.1);

	this.instance_8 = new lib.dayneris_lens_16_1();
	this.instance_8.setTransform(126.5,169);

	this.instance_9 = new lib.podvodka1_2_1();
	this.instance_9.setTransform(-137.2,139.5);

	this.instance_10 = new lib.podvodka1_3_1();
	this.instance_10.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_11 = new lib.polka_1();
	this.instance_11.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 9
	this.instance_12 = new lib.harley_obodok();
	this.instance_12.setTransform(-124.5,-312);

	this.instance_13 = new lib.elsa_fringle3();
	this.instance_13.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// Слой 6
	this.instance_14 = new lib.harley_eyelashes_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 4
	this.instance_15 = new lib.harley_eyes1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 3
	this.instance_16 = new lib.harley_lips0_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 5
	this.instance_17 = new lib.harley_eyebrows1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// Слой 10
	this.instance_18 = new lib.harley_face_half();
	this.instance_18.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Слой 2
	this.instance_19 = new lib.harley_face_base_img();
	this.instance_19.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_clothes_img();
	this.instance_20.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// elsa_body.png
	this.instance_21 = new lib.harley_body();
	this.instance_21.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// Слой 8
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-125.4,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-12.4,y:-60.9},4).to({x:-2.1,y:-224.9},11).to({x:51.5,y:-191.9},7).to({x:46.5,y:-111.9},11).to({x:17.5,y:-76.8},8).to({x:10.5,y:-152},8).to({y:-219},8).to({x:66.5,y:-130},2).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.lipstick33_1();
	this.instance_3.setTransform(238,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_2_1();
	this.instance_8.setTransform(-137.2,139.5);

	this.instance_9 = new lib.podvodka1_3_1();
	this.instance_9.setTransform(-168.2,142);

	this.instance_10 = new lib.face_brush_1();
	this.instance_10.setTransform(-232.4,203.9,0.663,0.663,65.5);

	this.instance_11 = new lib.rouge7_1();
	this.instance_11.setTransform(-207.4,180.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10}]},60).wait(1));

	// polka.png
	this.instance_12 = new lib.polka_1();
	this.instance_12.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(61));

	// Слой 9
	this.instance_13 = new lib.harley_obodok();
	this.instance_13.setTransform(-124.5,-312);

	this.instance_14 = new lib.elsa_fringle3();
	this.instance_14.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(61));

	// Слой 6
	this.instance_15 = new lib.harley_eyelashes_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(61));

	// Слой 4
	this.instance_16 = new lib.harley_eyes1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(61));

	// Слой 3
	this.instance_17 = new lib.harley_lips0_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(61));

	// Слой 5
	this.instance_18 = new lib.harley_eyebrows1_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(61));

	// Слой 10
	this.instance_19 = new lib.harley_face_half();
	this.instance_19.setTransform(-19.5,-176);
	this.instance_19.alpha = 0.012;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).to({alpha:1},55).wait(2));

	// Слой 2
	this.instance_20 = new lib.harley_face_base_img();
	this.instance_20.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(61));

	// elsa_body.png
	this.instance_21 = new lib.harley_clothes_img();
	this.instance_21.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(61));

	// elsa_body.png
	this.instance_22 = new lib.harley_body();
	this.instance_22.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-125.4,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.lipstick33_1();
	this.instance_3.setTransform(238,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_2_1();
	this.instance_8.setTransform(-137.2,139.5);

	this.instance_9 = new lib.podvodka1_3_1();
	this.instance_9.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// polka.png
	this.instance_10 = new lib.polka_1();
	this.instance_10.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 9
	this.instance_11 = new lib.harley_obodok();
	this.instance_11.setTransform(-124.5,-312);

	this.instance_12 = new lib.elsa_fringle3();
	this.instance_12.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// Слой 6
	this.instance_13 = new lib.harley_eyelashes_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 4
	this.instance_14 = new lib.harley_eyes1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 2
	this.instance_17 = new lib.harley_face_base_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// elsa_body.png
	this.instance_18 = new lib.harley_clothes_img();
	this.instance_18.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.harley_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.hero1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 8
	this.instance = new lib.sponge_1();
	this.instance.setTransform(-222.6,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-125.4,y:-54.6},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.lipstick33_1();
	this.instance_3.setTransform(238,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.dayneris_lens_16_1();
	this.instance_7.setTransform(126.5,169);

	this.instance_8 = new lib.podvodka1_2_1();
	this.instance_8.setTransform(-137.2,139.5);

	this.instance_9 = new lib.podvodka1_3_1();
	this.instance_9.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// polka.png
	this.instance_10 = new lib.polka_1();
	this.instance_10.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 9
	this.instance_11 = new lib.harley_obodok();
	this.instance_11.setTransform(-124.5,-312);

	this.instance_12 = new lib.elsa_fringle3();
	this.instance_12.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// Слой 6
	this.instance_13 = new lib.harley_eyelashes_img();
	this.instance_13.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 4
	this.instance_14 = new lib.harley_eyes1_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 3
	this.instance_15 = new lib.harley_lips0_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Слой 5
	this.instance_16 = new lib.harley_eyebrows1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 2
	this.instance_17 = new lib.harley_face_base_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// elsa_body.png
	this.instance_18 = new lib.harley_clothes_img();
	this.instance_18.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// elsa_body.png
	this.instance_19 = new lib.harley_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.face_brush_1();
	this.instance.setTransform(-232.4,203.9,0.663,0.663,65.5);

	this.instance_1 = new lib.pencil10_1();
	this.instance_1.setTransform(184.6,223.9);

	this.instance_2 = new lib.lipstick24_1();
	this.instance_2.setTransform(201,166.1,0.72,0.72);

	this.instance_3 = new lib.lipstick33_1();
	this.instance_3.setTransform(238,166.1,0.72,0.72);

	this.instance_4 = new lib.kosmet_1();
	this.instance_4.setTransform(2.9,212.6,1,1,-5);

	this.instance_5 = new lib.shadows12_1();
	this.instance_5.setTransform(20.5,187.1);

	this.instance_6 = new lib.rouge11_1();
	this.instance_6.setTransform(-77.3,177.1);

	this.instance_7 = new lib.rouge7_1();
	this.instance_7.setTransform(-207.4,180.1);

	this.instance_8 = new lib.dayneris_lens_16_1();
	this.instance_8.setTransform(126.5,169);

	this.instance_9 = new lib.podvodka1_2_1();
	this.instance_9.setTransform(-137.2,139.5);

	this.instance_10 = new lib.podvodka1_3_1();
	this.instance_10.setTransform(-168.2,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// polka.png
	this.instance_11 = new lib.polka_1();
	this.instance_11.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 9
	this.instance_12 = new lib.harley_obodok();
	this.instance_12.setTransform(-124.5,-312);

	this.instance_13 = new lib.elsa_fringle3();
	this.instance_13.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// Слой 6
	this.instance_14 = new lib.harley_eyelashes_img();
	this.instance_14.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 4
	this.instance_15 = new lib.harley_eyes1_img();
	this.instance_15.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// Слой 3
	this.instance_16 = new lib.harley_lips0_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// Слой 5
	this.instance_17 = new lib.harley_eyebrows1_img();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// Слой 2
	this.instance_18 = new lib.harley_face_base_img();
	this.instance_18.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// elsa_body.png
	this.instance_19 = new lib.harley_clothes_img();
	this.instance_19.setTransform(-222,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// elsa_body.png
	this.instance_20 = new lib.harley_body();
	this.instance_20.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect];


(lib.filters_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_open_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},19).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


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


(lib.arrow_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(1));

	// title
	this.instance_1 = new lib.title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// bg
	this.instance_2 = new lib.bg_title_mc();
	this.instance_2.setTransform(165,-90,1,1,0,0,0,165,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-170,280,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.ani3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara11_1();
	this.instance.setTransform(-56.8,-0.7);

	this.instance_1 = new lib.mascara2_1();
	this.instance_1.setTransform(-115.8,-0.7);

	this.instance_2 = new lib.sponge2_1();
	this.instance_2.setTransform(-182.6,36.2);

	this.instance_3 = new lib.kosmet_1();
	this.instance_3.setTransform(158.2,51.2,1,1,-14.2);

	this.instance_4 = new lib.podvodka1_2_1();
	this.instance_4.setTransform(-236.3,-5.1);

	this.instance_5 = new lib.lipstick31_1();
	this.instance_5.setTransform(110.1,14.4);

	this.instance_6 = new lib.dayneris_lens_3_1();
	this.instance_6.setTransform(28.9,21);

	this.instance_7 = new lib.shadows22_1();
	this.instance_7.setTransform(186.9,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-251,-79.6,502.2,159.4);
p.frameBounds = [rect];


(lib.ani2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil9_1();
	this.instance.setTransform(128.8,56.2);

	this.instance_1 = new lib.lipstick25_1();
	this.instance_1.setTransform(24.8,11.9);

	this.instance_2 = new lib.lipstick18_1();
	this.instance_2.setTransform(-12.2,11.9);

	this.instance_3 = new lib.dayneris_lens_4_1();
	this.instance_3.setTransform(-92.9,19.4);

	this.instance_4 = new lib.mascara17_1();
	this.instance_4.setTransform(-184,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207.2,-65.8,414.5,131.6);
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
	this.instance.setTransform(-800,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0},18).wait(9).to({x:-800},31).wait(1));

	// curtain_2
	this.instance_1 = new lib.curtain_2_mc();
	this.instance_1.setTransform(1400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:600},18).wait(9).to({x:1400},31).wait(1));

	// bg
	this.instance_2 = new lib.curtain_3_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-800,0,2800,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-755.5,0,2711.1,600), new cjs.Rectangle(-711.1,0,2622.2,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-622.2,0,2444.4,600), new cjs.Rectangle(-577.8,0,2355.6,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-488.9,0,2177.8,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-355.5,0,1911.1,600), new cjs.Rectangle(-311.1,0,1822.2,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-222.2,0,1644.4,600), new cjs.Rectangle(-177.8,0,1555.6,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-88.9,0,1377.8,600), new cjs.Rectangle(-44.4,0,1288.9,600), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-25.8,0,1251.6,600), new cjs.Rectangle(-51.6,0,1303.2,600), new cjs.Rectangle(-77.4,0,1354.8,600), new cjs.Rectangle(-103.2,0,1406.5,600), new cjs.Rectangle(-129,0,1458.1,600), new cjs.Rectangle(-154.8,0,1509.7,600), new cjs.Rectangle(-180.6,0,1561.3,600), new cjs.Rectangle(-206.4,0,1612.9,600), new cjs.Rectangle(-232.2,0,1664.5,600), new cjs.Rectangle(-258,0,1716.1,600), new cjs.Rectangle(-283.9,0,1767.8,600), new cjs.Rectangle(-309.7,0,1819.4,600), new cjs.Rectangle(-335.5,0,1871,600), new cjs.Rectangle(-361.3,0,1922.6,600), new cjs.Rectangle(-387.1,0,1974.2,600), new cjs.Rectangle(-412.9,0,2025.8,600), new cjs.Rectangle(-438.7,0,2077.4,600), new cjs.Rectangle(-464.5,0,2129,600), new cjs.Rectangle(-490.3,0,2180.6,600), new cjs.Rectangle(-516.1,0,2232.3,600), new cjs.Rectangle(-541.9,0,2283.9,600), new cjs.Rectangle(-567.7,0,2335.5,600), new cjs.Rectangle(-593.5,0,2387.1,600), new cjs.Rectangle(-619.3,0,2438.7,600), new cjs.Rectangle(-645.1,0,2490.3,600), new cjs.Rectangle(-670.9,0,2541.9,600), new cjs.Rectangle(-696.8,0,2593.6,600), new cjs.Rectangle(-722.6,0,2645.2,600), new cjs.Rectangle(-748.4,0,2696.8,600), new cjs.Rectangle(-774.2,0,2748.4,600), new cjs.Rectangle(-800,0,2800,600)];


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


(lib.thunder_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thunder
	this.thunder_mc = new lib.thunder_3_mc();
	this.thunder_mc.shadow = new cjs.Shadow("#FF9900",0,0,30);
	this.thunder_mc.filters = [new cjs.BlurFilter(4, 4, 3)];

	this.timeline.addTween(cjs.Tween.get(this.thunder_mc).wait(1));

	// whiteBackground
	this.whiteBackground_mc = new lib.thunder_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.whiteBackground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-38,1200,638);
p.frameBounds = [rect];


(lib.thunder_0_mc = function(mode,startPosition,loop) {
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
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _thunder_mc = this.body_mc.thunder_mc;
		_thunder_mc.gotoAndStop(0);
		_thunder_mc.visible = false;
		var _whiteBackground_mc = this.body_mc.whiteBackground_mc;
		_whiteBackground_mc.gotoAndStop(0);
		_whiteBackground_mc.visible = false;
		/*
		константы
		*/
		var _INTERVAL = 30;
		/*
		переменные
		*/
		var _currentUpdate_num = 0;
		var _totalUpdates_num = 100;
		var _interval_id = setInterval(_updateFunc, _INTERVAL);
		/*
		обновляем эффект
		*/
		function _updateFunc()
		{
			try
			{
				/*
				
				*/
				_currentUpdate_num++;
				/*
				
				*/
				if (_currentUpdate_num == 1)
				{
					_thunder_mc.removeAllChildren();
					var lightning = new Lightning();
					lightning.createLightningFunc(_thunder_mc, 800 * Math.random(), 100, 300);
				}
				else if (_currentUpdate_num == 2)
				{
					_thunder_mc.visible = true;
				}
				else if (_currentUpdate_num == 4)
				{
					_whiteBackground_mc.visible = true;
					_thunder_mc.visible = false;
				}
				else if (_currentUpdate_num == 6)
				{
					_whiteBackground_mc.visible = false;
				}
				else if (_currentUpdate_num >= _totalUpdates_num)
				{
					_totalUpdates_num = Math.round(Math.random() * 100) + 50;
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
		/*
		динамическое создание молний
		*/
		function Lightning()
		{
			/*
			
			*/
			this.lightning_shape;
			this.cloudX_num;
			this.cloudY_num;
			this.groundX_num;
			this.groundY_num;
			this.branchCloudX_arr;
			this.branchCloudY_arr;
			this.branchThickness_arr;
			this.midRatio_num = 20;
			this.midRatioTaper_num = 0.95;
			this.termDelta_num = 15;
			this.termDeltaTaper_num = 0.95;
			this.lastLegDist_num = 15;
			this.branchProbe_num = 0.5;
			this.branchFactor_num = 0.9;
			this.isBranching_bool = true;
			this.branchCount_num = 0;
			this.branchMax_num = 3;
			this.branchRangeXmax_num = 100;//30
			this.branchRangeXmin_num = 50;//20
			this.branchRangeYmax_num = 80;
			this.branchRangeYmin_num = 50;
			this.thickness_num = 6; 
			this.thicknessTaper_num = 0.3; 
			this.color_str = "#ff3300"; 
			this.termX_num;
			this.termY_num;
			/*
			
			*/
			this.createLightningFunc = function (container_mc, coordX_num, minLenght_num, maxLenght_num)
			{
				/*
				
				*/
				this.cloudX_num = 0;
				this.cloudY_num = 0;
				this.groundX_num = 0;
				this.groundY_num = Math.round((maxLenght_num - minLenght_num) * Math.random()) + minLenght_num;
				this.branchCloudX_arr = new Array();
				this.branchCloudY_arr = new Array();
				this.branchThickness_arr = new Array();
				/*
				
				*/
				this.lightning_shape = new createjs.Shape();
				container_mc.addChild(this.lightning_shape);
				this.lightning_shape.x = coordX_num;
				this.lightning_shape.y = 0;
				/*
				
				*/
				var glowingBall_shape = new createjs.Shape();
				glowingBall_shape.graphics.beginFill(this.color_str);
				glowingBall_shape.graphics.drawCircle(0, 0, 10);
				glowingBall_shape.graphics.endFill();
				container_mc.addChild(glowingBall_shape);
				glowingBall_shape.alpha = 0.5;
				glowingBall_shape.x = coordX_num;
				glowingBall_shape.y = 0;
				/*
				
				*/
				this._getTermFunc();
			};
			/*
			
			*/
			this._setBranchDefaultsFunc = function()
			{
				this.midRatio_num = 20;
				this.midRatioTaper_num = 0.95;
				this.termDelta_num = 5;
				this.termDeltaTaper_num = 0.95;
				this.lastLegDist_num = 15;
				this.thicknessTaper_num = 0.1;
			}
			/*
			
			*/
			this._getTermFunc = function()
			{
				var _lenghtX_num = this.groundX_num - this.cloudX_num;
				var _lenghtY_num = this.groundY_num - this.cloudY_num;
				var midTermX_num = this.cloudX_num + (_lenghtX_num / this.midRatio_num);
				var midTermY_num = this.cloudY_num + (_lenghtY_num / this.midRatio_num);
				if (Math.abs(midTermX_num - this.groundX_num) < this.lastLegDist_num && Math.abs(midTermY_num - this.groundY_num) < this.lastLegDist_num)
				{
					this.termX_num = this.groundX_num;
					this.termY_num = this.groundY_num;
					this._drawStrikeFunc();
					if (this.isBranching_bool)
					{
						this._makeBranchFunc();
					}
					return;
				}
				var rndAngle_num = Math.random() * Math.PI;
				var rndDelta_num = Math.random() * this.termDelta_num;
				this.termX_num = midTermX_num + (rndDelta_num * Math.cos(rndAngle_num));
				this.termY_num = midTermY_num + (rndDelta_num * Math.sin(rndAngle_num));
				var rndNum_num = Math.random();
				if (rndNum_num < this.branchProbe_num && this.branchCount_num < this.branchMax_num && this.isBranching_bool)
				{
					this.branchCloudX_arr[this.branchCount_num] = this.cloudX_num;
					this.branchCloudY_arr[this.branchCount_num] = this.cloudY_num;
					this.branchThickness_arr[this.branchCount_num] = this.thickness_num;
					this.branchCount_num++;
					this.branchProbe_num *= this.branchFactor_num;
				}
				this._drawStrikeFunc(); 
				this._getTermFunc();
			}
			/*
			
			*/
			this._drawStrikeFunc = function()
			{
				this.lightning_shape.graphics.setStrokeStyle(this.thickness_num);
				this.lightning_shape.graphics.beginStroke(this.color_str);
				this.thickness_num = Math.max(0.01, this.thickness_num - this.thicknessTaper_num);
				this.lightning_shape.graphics.moveTo(this.cloudX_num, this.cloudY_num);
				this.lightning_shape.graphics.lineTo(this.termX_num, this.termY_num);
				this.cloudX_num = this.termX_num;
				this.cloudY_num = this.termY_num;
				this.midRatio_num *= this.midRatioTaper_num;
				this.termDelta_num *= this.termDeltaTaper_num;
			}
			/*
			
			*/
			this._makeBranchFunc = function()
			{
				var trigger_num = -1;
				for (var i = 0; i < this.branchCloudX_arr.length; i++)
				{
					this.isBranching_bool = false;
					this.cloudX_num = this.branchCloudX_arr[i];
					this.cloudY_num = this.branchCloudY_arr[i];
					this.thickness_num = this.branchThickness_arr[i] / 2;
					this.groundX_num = this.cloudX_num + trigger_num * (Math.random() * (this.branchRangeXmax_num - this.branchRangeXmin_num) + this.branchRangeXmin_num);
					this.groundY_num = this.cloudY_num + (Math.random() * (this.branchRangeYmax_num - this.branchRangeYmin_num) + this.branchRangeYmin_num);
					this._setBranchDefaultsFunc();
					this._getTermFunc();
					trigger_num *= -1;
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.thunder_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-38,1200,638);
p.frameBounds = [rect];


(lib.smoke_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.smoke_mc.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _that = this;
		var _intervalId;
		var _particles_arr = [];
		var _particleCount_num = 20;
		var _maxVelocity_num = 2;
		var bounds = this.smoke_mc.getBounds();
		var _canvasWidth_num = bounds.width;
		var _canvasHeight_num = bounds.height;
		this.smoke_mc.visible = false;
		/*
		
		*/
		function Particle()
		{
			/*
			
			*/
		    this.x_num = 0;
		    this.y_num = 0;
		    this.xVelocity_num = 0;
		    this.yVelocity_num = 0;
			/*
			
			*/
			this.smoke_img = new lib.smoke_1_img();
			_that.addChild(this.smoke_img);
			/*
			
			*/
		    this.updateFunc = function()
			{
				/*
				
				*/
		        this.x_num += this.xVelocity_num;
		        this.y_num += this.yVelocity_num;
				/*
				
				*/
		        if (this.x_num >= _canvasWidth_num)
				{
		            this.xVelocity_num = -this.xVelocity_num;
		            this.x_num = _canvasWidth_num;
		        }
		        else if (this.x_num <= 0)
				{
					this.xVelocity_num = -this.xVelocity_num;
					this.x_num = 0;
				}
				/*
				
				*/
		        if (this.y_num >= _canvasHeight_num)
				{
		            this.yVelocity_num = -this.yVelocity_num;
		            this.y_num = _canvasHeight_num;
		        }
		        else if (this.y_num <= 0)
				{
		            this.yVelocity_num = -this.yVelocity_num;
		            this.y_num = 0;
		        }
				/*
				
				*/
				this.smoke_img.x = this.x_num - 128;
				this.smoke_img.y = this.y_num - 128;
		    };
			/*
			
			*/
		    this.setPositionFunc = function(x, y)
			{
		        this.x_num = x;
		        this.y_num = y;
		    };
			/*
			
			*/
		    this.setVelocityFunc = function(x, y)
			{
		        this.xVelocity_num = x;
		        this.yVelocity_num = y;
		    };
		}
		/*
		
		*/
		function _updateFunc()
		{
			for(var prop in _particles_arr)
			{
				if(_particles_arr.hasOwnProperty(prop))
				{
					_particles_arr[prop].updateFunc();
				}
			}
		}
		/*
		
		*/
		function _generateRandomFunc(min, max)
		{
		    return Math.random() * (max - min) + min;
		}
		/*
		
		*/
		function _onTickIntervalFunc()
		{
			try
			{
				_updateFunc();
			}
			catch(event)
			{
				clearInterval(_intervalId);
				trace(event, 2);
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		function _initFunc()
		{
			/*
			
			*/
			var particle;
			/*
			
			*/
			for(var i=0; i < _particleCount_num; ++i)
			{
				particle = new Particle();
				particle.setPositionFunc(_generateRandomFunc(0, _canvasWidth_num), _generateRandomFunc(0, _canvasHeight_num));
				particle.setVelocityFunc(_generateRandomFunc(-_maxVelocity_num, _maxVelocity_num), _generateRandomFunc(-_maxVelocity_num, _maxVelocity_num));
				_particles_arr.push(particle);
			}
			/*
			
			*/
			_intervalId = setInterval(_onTickIntervalFunc, 50);
		}
		/*
		
		*/
		_initFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.smoke_mc = new lib.smoke_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.smoke_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,300);
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


(lib.explosion_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2018 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.explosion_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
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


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,1.167,1.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1));

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


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_4_mc();
	this.instance.setTransform(29.7,5.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true},5).wait(39));

	// animation
	this.instance_1 = new lib.more_games_5_mc();
	this.instance_1.setTransform(23.2,13.1,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({y:10.1},6).to({y:13.1},7).to({y:10.1},6).to({_off:true},1).wait(8));

	// animation
	this.instance_2 = new lib.more_games_5_mc();
	this.instance_2.setTransform(-25.3,13.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({y:10.1},6).to({y:13.1},7).to({y:10.1},6).to({_off:true},1).wait(8));

	// animation
	this.instance_3 = new lib.more_games_3_mc();
	this.instance_3.setTransform(28.2,8.3,1,1,0,0,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:11.8},9).to({y:8.3},9).to({_off:true},1).wait(5).to({_off:false},0).to({y:10.8},10).to({_off:true},1).wait(28));

	// animation
	this.instance_4 = new lib.more_games_3_mc();
	this.instance_4.setTransform(-30.8,8.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({y:11.8},9).to({y:8.3},9).wait(6).to({y:10.8},10).to({_off:true},1).wait(28));

	// animation
	this.instance_5 = new lib.more_games_2_mc();
	this.instance_5.setTransform(23.2,7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:4},9).to({_off:true},1).wait(53).to({_off:false,y:7},0).to({y:4},9).wait(1));

	// animation
	this.instance_6 = new lib.more_games_2_mc();
	this.instance_6.setTransform(-26.3,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:4},9).to({_off:true},1).wait(53).to({_off:false,y:7},0).to({y:4},9).wait(1));

	// graph
	this.instance_7 = new lib.more_games_6_img();
	this.instance_7.setTransform(-11.3,14.3,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(73));

	// animation
	this.instance_8 = new lib.more_games_6_mc();
	this.instance_8.setTransform(-0.3,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:41},4).to({y:42},4).to({y:41},4).to({y:42},5).to({y:41},4).to({y:42},5).to({y:41},4).to({y:42},4).to({y:41},4).to({y:42},5).to({y:41},4).to({y:42},5).to({y:41},4).to({y:42},4).to({y:41},4).to({y:42},5).to({y:41},3).wait(1));

	// graph
	this.instance_9 = new lib.more_games_7_img();
	this.instance_9.setTransform(-68,-69.2,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-69.2,136,138.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.subject_28_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_52_0();
	this.instance.setTransform(0,4.3);

	this.instance_1 = new lib.hero3_52();
	this.instance_1.setTransform(0,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-354,917,708);
p.frameBounds = [rect, rect];


(lib.subject_27_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_50();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_51();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_26_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_48();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_49();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_25_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_46();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_47();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_25_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_51_0();
	this.instance.setTransform(0,-11);

	this.instance_1 = new lib.hero1_51();
	this.instance_1.setTransform(0,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-339,917,678);
p.frameBounds = [rect, rect];


(lib.subject_24_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_44();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_45();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_24_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_49();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_50();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_23_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_42();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_43();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_23_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_47();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_48();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_22_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_40();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_41();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_22_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_45();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_46();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_21_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_38();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_39();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_21_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_40();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_44();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_20_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_36();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_37();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_20_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_38();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_39();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_19_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_34();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_35();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_19_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_35_0();
	this.instance.setTransform(0,-11.4);

	this.instance_1 = new lib.hero2_35();
	this.instance_1.setTransform(0,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-338.5,917,677);
p.frameBounds = [rect, rect];


(lib.subject_19_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_36();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_37();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_18_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_32();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_33();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_18_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_33();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_34();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_18_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_34();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_35();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_17_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_30();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_31();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_17_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_31();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_32();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_32();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_33();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_16_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_28();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_29();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_16_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_29();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_30();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_15_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_26();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_27();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_15_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_27();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_28();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_29();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_30();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_14_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_25();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_26();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_27();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_28();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_13_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_23();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_24();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_13_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_23();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_24();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_25();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_26();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_21();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_22();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_23();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_24();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_11_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_19();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_20();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_19();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_20();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_21();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_22();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_10_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_17();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_18();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_17();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_18();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_19();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_20();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_15();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_16();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_15();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_16();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_17();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_18();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_13();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_14();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_15();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_16();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_11();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_12();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_11();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_12();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_13();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_14();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_9();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_10();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_11();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_12();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_7();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_8();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_8();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_9();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_9();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_10();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_6();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_7();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_7();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_8();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_4();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_5();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_4();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_5();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_5();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_6();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_3();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_4();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_1();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_2();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_1();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_2();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.subject_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_1();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero1_2();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();
	this.heroes_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,624.6);
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


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// decor
	this.explosion_2_comp = new lib.explosion_1_2_mc();
	this.explosion_2_comp.setTransform(0,-120);
	this.explosion_2_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explosion_2_comp).wait(34).to({_off:false},0).wait(26));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,-120);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.38,scaleY:0.38},0).to({scaleX:0.81,scaleY:0.81,alpha:0.512},10).to({regY:-0.1,scaleX:0.69,scaleY:0.69,alpha:0.75},5).to({regY:0,scaleX:1,scaleY:1,alpha:1},5).wait(1));

	// decor
	this.explosion_2_comp_1 = new lib.explosion_1_2_mc();
	this.explosion_2_comp_1.setTransform(200,120);
	this.explosion_2_comp_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explosion_2_comp_1).wait(24).to({_off:false},0).wait(36));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(200,120);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.38,scaleY:0.38},0).to({scaleX:0.81,scaleY:0.81,alpha:0.512},10).to({regX:0.1,regY:0.1,scaleX:0.69,scaleY:0.69,x:200.1,y:120.1,alpha:0.75},5).to({regX:0,regY:0,scaleX:1,scaleY:1,x:200,y:120,alpha:1},5).wait(11));

	// decor
	this.explosion_2_comp_2 = new lib.explosion_1_2_mc();
	this.explosion_2_comp_2.setTransform(-200,120);
	this.explosion_2_comp_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explosion_2_comp_2).wait(14).to({_off:false},0).wait(46));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-200,120);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.38,scaleY:0.38},0).to({scaleX:0.81,scaleY:0.81,alpha:0.512},10).to({regX:-0.1,regY:0.1,scaleX:0.69,scaleY:0.69,y:120.1,alpha:0.75},5).to({regX:0,regY:0,scaleX:1,scaleY:1,y:120,alpha:1},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-280,720,560.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-328,-280,688,560.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330,-280,658,530.1), rect=new cjs.Rectangle(-328,-280,656,528.1), rect, rect, rect, rect, rect, new cjs.Rectangle(-330,-280,658,530.1), new cjs.Rectangle(-339.9,-280,668,540), new cjs.Rectangle(-349.9,-280,677.9,550), new cjs.Rectangle(-360,-248,690,528), rect=new cjs.Rectangle(-360,-248,688,528), rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-248,690,528), new cjs.Rectangle(-360,-248,700,528), new cjs.Rectangle(-360,-248,709.9,528), new cjs.Rectangle(-360,-250,720,530.1), rect=new cjs.Rectangle(-360,-248,720,528), rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-250,720,530), new cjs.Rectangle(-360,-259.9,720,540), new cjs.Rectangle(-360,-269.9,720,549.9), new cjs.Rectangle(-360,-280,720,560.1)];


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


(lib.hero3_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// Слой 2
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(149.9,-163.8,1,1,107);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:162.9},4).to({x:150.9},5).to({x:164.9},5).to({rotation:227,x:68.9,y:-97.8},6).to({x:91.9,y:-113.8},14).to({x:130.9,y:-101.8},15).to({x:99.9,y:-116.8},14).to({x:68.5,y:-82.8},12).to({x:272.5,y:-46.9,alpha:0.012},13).to({_off:true},1).wait(27));

	// Слой 7
	this.instance_1 = new lib.shadows15_1();
	this.instance_1.setTransform(157.5,-95.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({x:247.5,y:-73.3,alpha:0.012},13).to({_off:true},1).wait(27));

	// Слой 15
	this.instance_2 = new lib.ani3();
	this.instance_2.setTransform(13.1,341.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({y:153.6},15).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({y:412.7},12).to({y:224.7},15).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.snowhite_fringle();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(116));

	// Слой 10
	this.instance_6 = new lib.snowhite_eyelashes2();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(116));

	// Слой 6
	this.instance_7 = new lib.snowhite_eyelashes1();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(116));

	// Слой 4
	this.instance_8 = new lib.snowhite_eyes1();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(116));

	// Слой 12
	this.instance_9 = new lib.snowhite_lips2_1();
	this.instance_9.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(116));

	// Слой 3
	this.instance_10 = new lib.snowhite_lips1();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(116));

	// Слой 5
	this.instance_11 = new lib.snowhite_eyebrows1();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(116));

	// Слой 8
	this.instance_12 = new lib.snowhite_rouge2_1();
	this.instance_12.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(116));

	// Слой 11
	this.instance_13 = new lib.snowhite_eyebrows3_1();
	this.instance_13.setTransform(-19.5,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(116));

	// Слой 14
	this.instance_14 = new lib.snowhite_shadow_1();
	this.instance_14.setTransform(-19.5,-176);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20).to({_off:false},0).to({alpha:1},55).wait(41));

	// Слой 13
	this.instance_15 = new lib.snowhite_face3_1();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.snowhite_face2_1();
	this.instance_16.setTransform(-19.5,-176);

	this.instance_17 = new lib.snowhite_face1();
	this.instance_17.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(116));

	// elsa_body.png
	this.instance_18 = new lib.sw_clothes();
	this.instance_18.setTransform(-165,-60.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(116));

	// elsa_body.png
	this.instance_19 = new lib.snowhite_body();
	this.instance_19.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-458.5,-316.2,917,666.8), new cjs.Rectangle(-458.5,-316.2,917,682.5), new cjs.Rectangle(-458.5,-316.2,917,698.2), new cjs.Rectangle(-458.5,-316.2,917,713.8), new cjs.Rectangle(-458.5,-316.2,917,729.5), new cjs.Rectangle(-458.5,-316.2,917,745.2), new cjs.Rectangle(-458.5,-316.2,917,760.8), new cjs.Rectangle(-458.5,-316.2,917,748.3), new cjs.Rectangle(-458.5,-316.2,917,735.8), new cjs.Rectangle(-458.5,-316.2,917,723.3), new cjs.Rectangle(-458.5,-316.2,917,710.7), new cjs.Rectangle(-458.5,-316.2,917,698.2), new cjs.Rectangle(-458.5,-316.2,917,685.7), new cjs.Rectangle(-458.5,-316.2,917,673.1), rect=new cjs.Rectangle(-458.5,-316.2,917,666.2), rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_177 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(177).call(this.frame_177).wait(1));

	// Слой 11
	this.instance = new lib.kosmet_1();
	this.instance.setTransform(-247,-106.4,1,1,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-229},4).to({x:-245},5).to({x:-232},5).to({x:-200},5).to({x:-186},5).to({x:-197},5).to({rotation:-57.3,x:-93.8,y:-58.4},5).to({x:-122.8,y:-56.4},8).to({x:-155.8,y:-86.4},7).to({x:-165.8,y:-103.4},7).to({x:-156.8,y:-97.5},4).to({x:-139.8,y:-105.5},5).to({x:-153.8,y:-135.2},4).to({x:-142.8,y:-107.2},4).to({x:-118.8,y:-110.2},4).to({y:-159.2},7).to({y:-112.2},8).to({x:-104.8,y:-103.2},5).to({x:-72.9,y:-139.2},6).to({x:-102.9,y:-101.2},7).to({x:-90.8,y:-77.2},7).to({x:-93.8,y:-58.2},6).to({x:-138.8},7).to({x:-156.8,y:-84.2},8).to({x:-212.8,y:12.8,alpha:0.012},10).to({_off:true},1).wait(29));

	// Слой 7
	this.instance_1 = new lib.shadows24_1();
	this.instance_1.setTransform(-183.4,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(138).to({alpha:0.012},10).to({_off:true},1).wait(29));

	// Слой 13
	this.instance_2 = new lib.ani2();
	this.instance_2.setTransform(34.8,333.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(163).to({_off:false},0).to({y:162.3},14).wait(1));

	// polka.png
	this.instance_3 = new lib.polka_1();
	this.instance_3.setTransform(0,224.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({y:395.7},14).to({y:224.7},14).wait(1));

	// Слой 9
	this.instance_4 = new lib.harley_obodok();
	this.instance_4.setTransform(-124.5,-312);

	this.instance_5 = new lib.tiana_fringle2();
	this.instance_5.setTransform(-135.4,-316.2,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(178));

	// Слой 10
	this.instance_6 = new lib.moana_eyelashes2_img();
	this.instance_6.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(178));

	// Слой 6
	this.instance_7 = new lib.moana_eyelashes1_img();
	this.instance_7.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(178));

	// Слой 4
	this.instance_8 = new lib.moana_eyes1_img();
	this.instance_8.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(178));

	// Слой 3
	this.instance_9 = new lib.moana_lips1_img();
	this.instance_9.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(178));

	// Слой 8
	this.instance_10 = new lib.moana_eyebrows2_img();
	this.instance_10.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(178));

	// Слой 5
	this.instance_11 = new lib.moana_eyebrows1_img();
	this.instance_11.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(178));

	// Слой 12
	this.instance_12 = new lib.moana_shadows();
	this.instance_12.setTransform(-19.5,-176);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(35).to({_off:false},0).to({alpha:1},105).wait(38));

	// Слой 2
	this.instance_13 = new lib.moana_rouge();
	this.instance_13.setTransform(-19.5,-176);

	this.instance_14 = new lib.moana_rouge2();
	this.instance_14.setTransform(-19.5,-176);

	this.instance_15 = new lib.moana_face2();
	this.instance_15.setTransform(-19.5,-176);

	this.instance_16 = new lib.moana_face1_img();
	this.instance_16.setTransform(-128.5,-303.2,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(178));

	// elsa_body.png
	this.instance_17 = new lib.moana_clothes();
	this.instance_17.setTransform(-152.5,-41.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(178));

	// elsa_body.png
	this.instance_18 = new lib.moana_body();
	this.instance_18.setTransform(-175,-88.9,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(178));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-316.2,917,666.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-458.5,-316.2,917,670.6), new cjs.Rectangle(-458.5,-316.2,917,682.8), new cjs.Rectangle(-458.5,-316.2,917,695), new cjs.Rectangle(-458.5,-316.2,917,707.2), new cjs.Rectangle(-458.5,-316.2,917,719.4), new cjs.Rectangle(-458.5,-316.2,917,731.7), new cjs.Rectangle(-458.5,-316.2,917,743.8), new cjs.Rectangle(-458.5,-316.2,917,731.7), new cjs.Rectangle(-458.5,-316.2,917,719.4), new cjs.Rectangle(-458.5,-316.2,917,707.2), new cjs.Rectangle(-458.5,-316.2,917,695), new cjs.Rectangle(-458.5,-316.2,917,682.8), new cjs.Rectangle(-458.5,-316.2,917,670.6), rect=new cjs.Rectangle(-458.5,-316.2,917,666.1), rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_for_pointer_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,2800,600);
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
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AobLtQhWABg+g+Qg+g+ABhWIAAw3QgBhWA+g+QA+g+BWABIQ3AAQBWgBA+A+QA+A+gBBWIAAQ3QABBWg+A+Qg+A+hWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(580,550,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(660,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.699;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.instance_3 = new lib.blinking_star_3_mc();
	this.instance_3.setTransform(653.1,101.1,0.667,0.667,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// decor
	this.thunder_comp = new lib.thunder_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.thunder_comp).wait(1));

	// bg
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1275.9);
p.frameBounds = [rect];


(lib.subject_12_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_21();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero3_22();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.2);
p.frameBounds = [rect, rect];


(lib.subject_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_13();
	this.instance.setTransform(0,-16.8);

	this.instance_1 = new lib.hero2_14();
	this.instance_1.setTransform(0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-458.5,-333,917,666.1);
p.frameBounds = [rect, rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
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
	this.instance.alpha = 0.699;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.blinking_star_3_mc();
	this.instance_1.setTransform(786.1,145.1,0.333,0.333,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0.801;

	this.instance_2 = new lib.blinking_star_3_mc();
	this.instance_2.setTransform(692.2,275.2,0.444,0.444,0,0,0,0.3,0.3);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.blinking_star_3_mc();
	this.instance_3.setTransform(653.1,101.1,0.667,0.667,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// decor
	this.smoke_comp = new lib.smoke_1_mc();
	this.smoke_comp.setTransform(0,250);

	this.timeline.addTween(cjs.Tween.get(this.smoke_comp).wait(1));

	// bg
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1155.9);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-110.6,-58.2,118.6,118.6), new cjs.Rectangle(-109.3,-57.5,117.2,117.2), new cjs.Rectangle(-107.9,-56.8,115.7,115.7), new cjs.Rectangle(-106.6,-56.1,114.3,114.3), new cjs.Rectangle(-105.3,-55.4,112.9,112.9), new cjs.Rectangle(-104,-54.7,111.5,111.5), new cjs.Rectangle(-102.6,-54,110,110), new cjs.Rectangle(-101.3,-53.3,108.6,108.6), new cjs.Rectangle(-99.9,-52.6,107.2,107.2), new cjs.Rectangle(-98.6,-51.9,105.7,105.7), new cjs.Rectangle(-97.3,-51.2,104.3,104.3), new cjs.Rectangle(-95.9,-50.5,102.9,102.9), new cjs.Rectangle(-94.6,-49.8,101.5,101.5), new cjs.Rectangle(-93.3,-49.1,100,100), new cjs.Rectangle(-94.5,-49.8,101.4,101.4), new cjs.Rectangle(-95.8,-50.4,102.7,102.7), new cjs.Rectangle(-97,-51.1,104,104), new cjs.Rectangle(-98.3,-51.7,105.4,105.4), new cjs.Rectangle(-99.5,-52.4,106.7,106.7), new cjs.Rectangle(-100.7,-53,108,108), new cjs.Rectangle(-102,-53.7,109.4,109.4), new cjs.Rectangle(-103.2,-54.4,110.7,110.7), new cjs.Rectangle(-104.5,-55,112,112), new cjs.Rectangle(-105.7,-55.7,113.4,113.4), new cjs.Rectangle(-107,-56.3,114.7,114.7), new cjs.Rectangle(-108.2,-57,116,116), new cjs.Rectangle(-109.5,-57.6,117.4,117.4), new cjs.Rectangle(-110.7,-58.3,118.7,118.7), new cjs.Rectangle(-112,-59,120,120)];


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
p.nominalBounds = rect = new cjs.Rectangle(-190,-180,390.8,310);
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
p.nominalBounds = rect = new cjs.Rectangle(210,550,390.8,310);
p.frameBounds = [rect, new cjs.Rectangle(210,518.9,390.8,310), new cjs.Rectangle(210,487.8,390.8,310), new cjs.Rectangle(210,456.7,390.8,310), new cjs.Rectangle(210,425.6,390.8,310), new cjs.Rectangle(210,394.5,390.8,310), new cjs.Rectangle(210,363.4,390.8,310), new cjs.Rectangle(210,332.2,390.8,310), new cjs.Rectangle(210,301.1,390.8,310), new cjs.Rectangle(210,270,390.8,310), new cjs.Rectangle(210,298,390.8,310), new cjs.Rectangle(210,326,390.8,310), new cjs.Rectangle(210,354,390.8,310), new cjs.Rectangle(210,382,390.8,310), new cjs.Rectangle(210,410,390.8,310), new cjs.Rectangle(210,438,390.8,310), new cjs.Rectangle(210,466,390.8,310), new cjs.Rectangle(210,494,390.8,310), new cjs.Rectangle(210,522,390.8,310), new cjs.Rectangle(210,550,390.8,310)];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
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
	this.next_mc.setTransform(530,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(270,540);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn}]}).wait(1));

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
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1180);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(152,470,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:45,x:152,y:470,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:60,x:345,y:465,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:45,x:240.1,y:480,regX:0.1,regY:-0.1,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:615,y:535,regX:0,regY:0,skewX:-60,skewY:120}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:600,y:515,regX:0,regY:0,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:535.1,y:520.1,regX:0,regY:0.1,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:200,y:515,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:645,y:465,regX:0,regY:0,skewX:-45,skewY:135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:550,y:510,regX:0,regY:0,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:152,y:490,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:275,y:485,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:335,y:490,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:495.1,y:518.1,regX:0,regY:0.1,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:45,x:412,y:155,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-30,x:280.1,y:230.1,regX:0,regY:0.1,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_6 = new lib.arrow_17_mc();
	this.object_6.setTransform(445.2,245.2,0.678,0.678,30,0,0,0.3,0.1);

	this.object_8 = new lib.arrow_18_mc();
	this.object_8.setTransform(445,135,0.678,0.678);

	this.object_10 = new lib.arrow_19_mc();
	this.object_10.setTransform(375.1,245.1,0.613,0.613,0,15,-165,-0.1,0.1);

	this.object_12 = new lib.arrow_20_mc();
	this.object_12.setTransform(426,180.1,0.678,0.678,0,0,180,0.1,0.1);

	this.object_16 = new lib.arrow_21_mc();
	this.object_16.setTransform(335.1,185.1,0.833,0.833,0,0,0,0.1,0.1);

	this.object_18 = new lib.arrow_22_mc();
	this.object_18.setTransform(387.1,236,0.613,0.613,-30,0,0,0.1,0.1);

	this.object_20 = new lib.arrow_23_mc();
	this.object_20.setTransform(450,190.1,0.678,0.678,45,0,0,0.1,0.1);

	this.object_21 = new lib.arrow_24_mc();
	this.object_21.setTransform(465,190,0.733,0.733,0,90,-90);

	this.object_23 = new lib.arrow_25_mc();
	this.object_23.setTransform(419.1,190.1,0.764,0.764,-165,0,0,-0.1,-0.1);

	this.object_25 = new lib.arrow_26_mc();
	this.object_25.setTransform(338.1,185.1,0.678,0.678,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_6}]},5).to({state:[]},1).to({state:[{t:this.object_8}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},1).to({state:[]},1).to({state:[{t:this.object_12}]},1).to({state:[]},1).to({state:[{t:this.object_16}]},3).to({state:[]},1).to({state:[{t:this.object_18}]},1).to({state:[]},1).to({state:[{t:this.object_20}]},1).to({state:[{t:this.object_21}]},1).to({state:[]},1).to({state:[{t:this.object_23}]},1).to({state:[]},1).to({state:[{t:this.object_25}]},1).to({state:[]},1).wait(3));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(383,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(383,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:400}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:431,y:88}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:400}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:325,y:90}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:380}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:380,y:88}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_3_mc();
	this.object_1.setTransform(185,523);

	this.object_2 = new lib.object_2_3_mc();
	this.object_2.setTransform(425,175);

	this.object_3 = new lib.object_3_3_mc();
	this.object_3.setTransform(368,524);

	this.object_4 = new lib.object_4_3_mc();
	this.object_4.setTransform(330,175);

	this.object_5 = new lib.object_5_3_mc();
	this.object_5.setTransform(275,526);

	this.object_7 = new lib.object_7_3_mc();
	this.object_7.setTransform(606,547);

	this.object_9 = new lib.object_9_3_mc();
	this.object_9.setTransform(570,513);

	this.object_11 = new lib.object_11_3_mc();
	this.object_11.setTransform(480,525);

	this.object_13 = new lib.object_13_3_mc();
	this.object_13.setTransform(229,530);

	this.object_14 = new lib.object_14_3_mc();
	this.object_14.setTransform(382,180);

	this.object_15 = new lib.object_15_3_mc();
	this.object_15.setTransform(598,522);

	this.object_17 = new lib.object_17_3_mc();
	this.object_17.setTransform(522,507);

	this.object_19 = new lib.object_19_3_mc();
	this.object_19.setTransform(174,490);

	this.object_22 = new lib.object_22_3_mc();
	this.object_22.setTransform(307,491);

	this.object_24 = new lib.object_24_3_mc();
	this.object_24.setTransform(359,495);

	this.object_26 = new lib.object_26_3_mc();
	this.object_26.setTransform(439,518);

	this.object_27 = new lib.object_27_3_mc();
	this.object_27.setTransform(432,187);

	this.object_28 = new lib.object_28_3_mc();
	this.object_28.setTransform(382,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[]},1).to({state:[{t:this.object_17}]},1).to({state:[]},1).to({state:[{t:this.object_19}]},1).to({state:[]},1).to({state:[{t:this.object_22}]},2).to({state:[]},1).to({state:[{t:this.object_24}]},1).to({state:[]},1).to({state:[{t:this.object_26}]},1).to({state:[{t:this.object_27}]},1).to({state:[{t:this.object_28}]},1).wait(1));

	// objects
	this.subject_1 = new lib.subject_1_3_mc();
	this.subject_1.setTransform(398,360.2);

	this.subject_2 = new lib.hero3_3();
	this.subject_2.setTransform(398,343.4);

	this.subject_3 = new lib.subject_3_3_mc();
	this.subject_3.setTransform(398,360.2);

	this.subject_4 = new lib.hero3_6();
	this.subject_4.setTransform(398,343.4);

	this.subject_5 = new lib.subject_5_3_mc();
	this.subject_5.setTransform(398,360.2);

	this.subject_6 = new lib.subject_6_3_mc();
	this.subject_6.setTransform(398,360.2);

	this.subject_7 = new lib.subject_7_3_mc();
	this.subject_7.setTransform(398,360.2);

	this.subject_8 = new lib.subject_8_3_mc();
	this.subject_8.setTransform(398,360.2);

	this.subject_9 = new lib.subject_9_3_mc();
	this.subject_9.setTransform(398,360.2);

	this.subject_10 = new lib.subject_10_3_mc();
	this.subject_10.setTransform(398,360.2);

	this.subject_11 = new lib.subject_11_3_mc();
	this.subject_11.setTransform(398,360.2);

	this.subject_12 = new lib.subject_12_3_mc();
	this.subject_12.setTransform(398,360.2);

	this.subject_13 = new lib.subject_13_3_mc();
	this.subject_13.setTransform(398,360.2);

	this.subject_14 = new lib.hero3_25();
	this.subject_14.setTransform(398,343.4);

	this.subject_15 = new lib.subject_15_3_mc();
	this.subject_15.setTransform(398,360.2);

	this.subject_16 = new lib.subject_16_3_mc();
	this.subject_16.setTransform(398,360.2);

	this.subject_17 = new lib.subject_17_3_mc();
	this.subject_17.setTransform(398,360.2);

	this.subject_18 = new lib.subject_18_3_mc();
	this.subject_18.setTransform(398,360.2);

	this.subject_19 = new lib.subject_19_3_mc();
	this.subject_19.setTransform(398,360.2);

	this.subject_20 = new lib.subject_20_3_mc();
	this.subject_20.setTransform(398,360.2);

	this.subject_21 = new lib.subject_21_3_mc();
	this.subject_21.setTransform(398,360.2);

	this.subject_22 = new lib.subject_22_3_mc();
	this.subject_22.setTransform(398,360.2);

	this.subject_23 = new lib.subject_23_3_mc();
	this.subject_23.setTransform(398,360.2);

	this.subject_24 = new lib.subject_24_3_mc();
	this.subject_24.setTransform(398,360.2);

	this.subject_25 = new lib.subject_25_3_mc();
	this.subject_25.setTransform(398,360.2);

	this.subject_26 = new lib.subject_26_3_mc();
	this.subject_26.setTransform(398,360.2);

	this.subject_27 = new lib.subject_27_3_mc();
	this.subject_27.setTransform(398,360.2);

	this.subject_28 = new lib.subject_28_3_mc();
	this.subject_28.setTransform(398,339.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).to({state:[{t:this.subject_26}]},1).to({state:[{t:this.subject_27}]},1).to({state:[{t:this.subject_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-329.4,917,1022.7);
p.frameBounds = [rect, new cjs.Rectangle(-60.5,-139,917,832.3), new cjs.Rectangle(-60.5,-329.4,917,1022.7), new cjs.Rectangle(-60.5,-139,917,832.3), rect=new cjs.Rectangle(-60.5,-329.4,917,1022.7), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60.5,-139,917,832.3), rect=new cjs.Rectangle(-60.5,-329.4,917,1022.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60.5,-329.4,917,1022.5)];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(195,475,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:45,x:195,y:475,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:285,y:485,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:620,y:475,skewX:-45,skewY:135,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:500,y:475,skewX:-45,skewY:135,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:485,y:515.2,skewX:-30,skewY:150,regX:0.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:450.1,y:510.1,skewX:-30,skewY:150,regX:0,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:400.1,y:520.1,skewX:-30,skewY:150,regX:0,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:485,y:180,skewX:0,skewY:180,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:235,y:495,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:555,y:540,skewX:-60,skewY:120,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:480,y:230,skewX:15,skewY:-165,regX:0,regY:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_4 = new lib.arrow_11_mc();
	this.object_4.setTransform(360.1,238.1,0.833,0.833,45,0,0,0.1,0.1);

	this.object_8 = new lib.arrow_12_mc();
	this.object_8.setTransform(331.1,185.1,0.833,0.833,0,0,0,0.1,0.1);

	this.object_10 = new lib.arrow_13_mc();
	this.object_10.setTransform(382.1,233.1,0.613,0.613,0,45,-135,-0.1,0);

	this.object_12 = new lib.arrow_14_mc();
	this.object_12.setTransform(392.2,255.1,0.675,0.675,0,0,0,0.2,0.1);

	this.object_16 = new lib.arrow_15_mc();
	this.object_16.setTransform(454,198,0.678,0.678,75);

	this.object_18 = new lib.arrow_16_mc();
	this.object_18.setTransform(431,125,0.678,0.678,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_4}]},3).to({state:[]},1).to({state:[{t:this.object_8}]},3).to({state:[]},1).to({state:[{t:this.object_10}]},1).to({state:[]},1).to({state:[{t:this.object_12}]},1).to({state:[]},1).to({state:[{t:this.object_16}]},3).to({state:[]},1).to({state:[{t:this.object_18}]},1).to({state:[]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(383,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(383,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{x:380,y:410}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:380,y:75}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:440}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:423,y:90}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:383,y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:383,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_2_mc();
	this.object_1.setTransform(229,528);

	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(380,180);

	this.object_3 = new lib.object_3_2_mc();
	this.object_3.setTransform(330,529);

	this.object_5 = new lib.object_5_2_mc();
	this.object_5.setTransform(570,533);

	this.object_6 = new lib.object_6_2_mc();
	this.object_6.setTransform(432,188);

	this.object_7 = new lib.object_7_2_mc();
	this.object_7.setTransform(453,535);

	this.object_9 = new lib.object_9_2_mc();
	this.object_9.setTransform(458,517);

	this.object_11 = new lib.object_11_2_mc();
	this.object_11.setTransform(421,517);

	this.object_13 = new lib.object_13_2_mc();
	this.object_13.setTransform(341,530);

	this.object_14 = new lib.object_14_2_mc();
	this.object_14.setTransform(432,188);

	this.object_15 = new lib.object_15_2_mc();
	this.object_15.setTransform(253,503);

	this.object_17 = new lib.object_17_2_mc();
	this.object_17.setTransform(562,561);

	this.object_19 = new lib.object_19_2_mc();
	this.object_19.setTransform(383,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[]},1).to({state:[{t:this.object_17}]},1).to({state:[]},1).to({state:[{t:this.object_19}]},1).wait(1));

	// objects
	this.subject_1 = new lib.subject_1_2_mc();
	this.subject_1.setTransform(398,360.2);

	this.subject_2 = new lib.hero2_3();
	this.subject_2.setTransform(398,343.4);

	this.subject_3 = new lib.subject_3_2_mc();
	this.subject_3.setTransform(398,360.2);

	this.subject_4 = new lib.subject_4_2_mc();
	this.subject_4.setTransform(398,360.2);

	this.subject_5 = new lib.subject_5_2_mc();
	this.subject_5.setTransform(398,360.2);

	this.subject_6 = new lib.hero2_10();
	this.subject_6.setTransform(398,343.4);

	this.subject_7 = new lib.subject_7_2_mc();
	this.subject_7.setTransform(398,360.2);

	this.subject_8 = new lib.subject_8_2_mc();
	this.subject_8.setTransform(398,360.2);

	this.subject_9 = new lib.subject_9_2_mc();
	this.subject_9.setTransform(398,360.2);

	this.subject_10 = new lib.subject_10_2_mc();
	this.subject_10.setTransform(398,360.2);

	this.subject_11 = new lib.subject_11_2_mc();
	this.subject_11.setTransform(398,360.2);

	this.subject_12 = new lib.subject_12_2_mc();
	this.subject_12.setTransform(398,360.2);

	this.subject_13 = new lib.subject_13_2_mc();
	this.subject_13.setTransform(398,360.2);

	this.subject_14 = new lib.subject_14_2_mc();
	this.subject_14.setTransform(398,360.2);

	this.subject_15 = new lib.subject_15_2_mc();
	this.subject_15.setTransform(398,360.2);

	this.subject_16 = new lib.subject_16_2_mc();
	this.subject_16.setTransform(398,360.2);

	this.subject_17 = new lib.subject_17_2_mc();
	this.subject_17.setTransform(398,360.2);

	this.subject_18 = new lib.subject_18_2_mc();
	this.subject_18.setTransform(398,360.2);

	this.subject_19 = new lib.subject_19_2_mc();
	this.subject_19.setTransform(398,354.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-329.4,917,1022.6);
p.frameBounds = [rect, new cjs.Rectangle(-60.5,-139,917,832.2), rect=new cjs.Rectangle(-60.5,-329.4,917,1022.6), rect, rect, new cjs.Rectangle(-60.5,-139,917,832.2), rect=new cjs.Rectangle(-60.5,-329.4,917,1022.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60.5,-329.4,917,1022.7)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(146,470,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:45,x:146,y:470,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:45,x:148,y:470,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:75,x:258,y:397,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:639,y:445,skewX:-75,skewY:105,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:75,x:258,y:398,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:205,y:482,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:45,x:280,y:465,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:45,x:372,y:480,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:620,y:500.2,skewX:-30,skewY:150,regX:0.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:240,y:480,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:575,y:455,skewX:-45,skewY:135,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:470.1,y:250,skewX:45,skewY:-135,regX:-0.1,regY:-0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:580,y:540,skewX:-60,skewY:120,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-30,x:290,y:255,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_mc();
	this.object_2.setTransform(445.1,185.1,0.833,0.833,0,0,0,0.1,0.1);

	this.object_4 = new lib.arrow_2_mc();
	this.object_4.setTransform(470.1,260.1,0.667,0.667,-30,0,0,0,0.1);

	this.object_6 = new lib.arrow_3_mc();
	this.object_6.setTransform(445.1,183.1,0.833,0.833,0,0,0,0.1,0.1);

	this.object_8 = new lib.arrow_4_mc();
	this.object_8.setTransform(405,270,0.678,0.678,60);

	this.object_10 = new lib.arrow_5_mc();
	this.object_10.setTransform(420.1,240.1,0.833,0.833,0,0,0,0.1,0.1);

	this.object_12 = new lib.arrow_6_mc();
	this.object_12.setTransform(424.9,240,0.833,0.833,135,0,0,0.1,0.1);

	this.object_14 = new lib.arrow_7_mc();
	this.object_14.setTransform(355.2,240.2,0.833,0.833,15,0,0,0.2,0.1);

	this.object_18 = new lib.arrow_8_mc();
	this.object_18.setTransform(378,240,0.678,0.678,-45);

	this.object_20 = new lib.arrow_9_mc();
	this.object_20.setTransform(391,254,0.675,0.675);

	this.object_24 = new lib.arrow_10_mc();
	this.object_24.setTransform(393,122,0.678,0.678,0,150,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},1).to({state:[]},1).to({state:[{t:this.object_8}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},1).to({state:[]},1).to({state:[{t:this.object_12}]},1).to({state:[]},1).to({state:[{t:this.object_14}]},1).to({state:[]},1).to({state:[{t:this.object_18}]},3).to({state:[]},1).to({state:[{t:this.object_20}]},1).to({state:[]},1).to({state:[{t:this.object_24}]},3).to({state:[]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(382,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(382,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:420}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,y:100}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(181,525);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(181,525);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(261,478);

	this.object_7 = new lib.object_7_1_mc();
	this.object_7.setTransform(637,506);

	this.object_9 = new lib.object_9_1_mc();
	this.object_9.setTransform(262,478);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(230,480);

	this.object_13 = new lib.object_13_1_mc();
	this.object_13.setTransform(311,522);

	this.object_15 = new lib.object_15_1_mc();
	this.object_15.setTransform(422,533);

	this.object_16 = new lib.object_16_1_mc();
	this.object_16.setTransform(383,175);

	this.object_17 = new lib.object_17_1_mc();
	this.object_17.setTransform(600,510);

	this.object_19 = new lib.object_19_1_mc();
	this.object_19.setTransform(260,480);

	this.object_21 = new lib.object_21_1_mc();
	this.object_21.setTransform(526,517);

	this.object_22 = new lib.object_22_1_mc();
	this.object_22.setTransform(382,185);

	this.object_23 = new lib.object_23_1_mc();
	this.object_23.setTransform(580,566);

	this.object_25 = new lib.object_25_1_mc();
	this.object_25.setTransform(383,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[]},1).to({state:[{t:this.object_13}]},1).to({state:[]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[]},1).to({state:[{t:this.object_19}]},1).to({state:[]},1).to({state:[{t:this.object_21}]},1).to({state:[{t:this.object_22}]},1).to({state:[{t:this.object_23}]},1).to({state:[]},1).to({state:[{t:this.object_25}]},1).wait(1));

	// objects
	this.subject_1 = new lib.subject_1_1_mc();
	this.subject_1.setTransform(398,360.2);

	this.subject_2 = new lib.subject_2_1_mc();
	this.subject_2.setTransform(398,360.2);

	this.subject_3 = new lib.subject_3_1_mc();
	this.subject_3.setTransform(398,360.2);

	this.subject_4 = new lib.subject_4_1_mc();
	this.subject_4.setTransform(398,360.2);

	this.subject_5 = new lib.subject_5_1_mc();
	this.subject_5.setTransform(398,360.2);

	this.subject_6 = new lib.subject_6_1_mc();
	this.subject_6.setTransform(398,360.2);

	this.subject_7 = new lib.subject_7_1_mc();
	this.subject_7.setTransform(398,360.2);

	this.subject_8 = new lib.subject_8_1_mc();
	this.subject_8.setTransform(398,360.2);

	this.subject_9 = new lib.subject_9_1_mc();
	this.subject_9.setTransform(398,360.2);

	this.subject_10 = new lib.subject_10_1_mc();
	this.subject_10.setTransform(398,360.2);

	this.subject_11 = new lib.subject_11_1_mc();
	this.subject_11.setTransform(398,360.2);

	this.subject_12 = new lib.subject_12_1_mc();
	this.subject_12.setTransform(398,360.2);

	this.subject_13 = new lib.subject_13_1_mc();
	this.subject_13.setTransform(398,360.2);

	this.subject_14 = new lib.subject_14_1_mc();
	this.subject_14.setTransform(398,360.2);

	this.subject_15 = new lib.subject_15_1_mc();
	this.subject_15.setTransform(398,360.2);

	this.subject_16 = new lib.hero1_31();
	this.subject_16.setTransform(398,343.4);

	this.subject_17 = new lib.subject_17_1_mc();
	this.subject_17.setTransform(398,360.2);

	this.subject_18 = new lib.subject_18_1_mc();
	this.subject_18.setTransform(398,360.2);

	this.subject_19 = new lib.subject_19_1_mc();
	this.subject_19.setTransform(398,360.2);

	this.subject_20 = new lib.subject_20_1_mc();
	this.subject_20.setTransform(398,360.2);

	this.subject_21 = new lib.subject_21_1_mc();
	this.subject_21.setTransform(398,360.2);

	this.subject_22 = new lib.subject_22_1_mc();
	this.subject_22.setTransform(398,360.2);

	this.subject_23 = new lib.subject_23_1_mc();
	this.subject_23.setTransform(398,360.2);

	this.subject_24 = new lib.subject_24_1_mc();
	this.subject_24.setTransform(398,360.2);

	this.subject_25 = new lib.subject_25_1_mc();
	this.subject_25.setTransform(398,354.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-329.4,917,1022.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60.5,-139,917,832.3), rect=new cjs.Rectangle(-60.5,-329.4,917,1022.7), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60.5,-329.4,917,1022.8)];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.889,0.889);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,700,0.813,0.813);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.next_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1296.1);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.889,0.889);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,700,0.813,0.813);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.next_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1296.1);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.889,0.889);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,700,0.813,0.813);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.next_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1296.1);
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

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.ResultScreen();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(345,50);

	this.instance_10 = new lib.TrackMove();
	this.instance_10.setTransform(270,50);

	this.instance_11 = new lib.Cursor();
	this.instance_11.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_12 = new lib.CurtainScreen();

	this.instance_13 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_11},{t:this.instance_10},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1275.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1155.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1296.1), rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1180), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,353,100), new cjs.Rectangle(-1000,0,2800,600), rect=null, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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