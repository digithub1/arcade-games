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
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,382],[602,384,542,542],[0,384,600,600]]},
		{name:"storage_atlas_6", frames: [[0,1047,1200,221],[0,0,527,523],[529,0,526,522],[0,525,521,520],[529,524,522,521]]},
		{name:"storage_atlas_7", frames: [[0,0,509,509],[510,511,508,508],[511,0,508,508],[0,511,508,508]]},
		{name:"storage_atlas_8", frames: [[0,510,1200,200],[0,0,508,508],[510,0,460,439],[422,712,470,420],[0,712,420,530]]},
		{name:"storage_atlas_9", frames: [[906,575,394,394],[472,0,432,411],[0,826,397,416],[906,0,296,573],[472,413,432,411],[399,826,397,416],[0,422,400,400],[0,0,470,420]]},
		{name:"storage_atlas_10", frames: [[396,0,500,300],[898,0,391,340],[382,396,211,652],[595,302,211,652],[808,684,360,360],[808,342,391,340],[0,0,394,394],[0,778,380,380],[0,396,380,380],[382,1050,595,221]]},
		{name:"storage_atlas_11", frames: [[945,604,193,595],[750,362,193,595],[555,362,193,595],[1086,0,191,602],[362,604,191,602],[555,959,380,260],[0,362,360,360],[724,0,360,360],[362,0,360,360],[0,724,360,360],[0,0,360,360]]},
		{name:"storage_atlas_12", frames: [[0,0,193,504],[0,506,191,487],[193,506,191,486],[808,666,420,220],[844,888,420,220],[422,888,420,220],[195,222,420,220],[0,995,420,220],[195,0,420,220],[386,666,420,220],[386,444,420,220],[808,444,420,220],[617,0,420,220],[617,222,420,220]]},
		{name:"storage_atlas_13", frames: [[844,444,420,220],[0,666,420,220],[844,0,420,220],[422,0,420,220],[0,222,420,220],[422,444,420,220],[422,222,420,220],[0,888,420,220],[844,222,420,220],[0,444,420,220],[0,0,420,220],[844,666,420,220],[422,666,420,220],[422,888,420,220],[844,888,420,220]]},
		{name:"storage_atlas_14", frames: [[844,222,420,220],[844,444,420,220],[422,444,420,220],[0,444,420,220],[0,666,420,220],[422,666,420,220],[422,222,420,220],[422,888,420,220],[0,888,420,220],[844,666,420,220],[0,222,420,220],[422,0,420,220],[844,0,420,220],[0,0,420,220]]},
		{name:"storage_atlas_15", frames: [[1104,1030,191,191],[964,728,200,300],[964,426,200,300],[0,489,480,140],[0,0,179,487],[1145,0,140,284],[482,994,224,214],[0,1057,190,190],[192,1057,190,190],[906,1030,196,208],[708,994,196,208],[482,710,480,140],[482,852,480,140],[0,773,480,140],[0,915,480,140],[482,426,480,140],[663,0,480,140],[663,142,480,140],[181,0,480,140],[663,284,480,140],[482,568,480,140],[0,631,480,140],[181,142,480,140],[181,284,480,140]]},
		{name:"storage_atlas_16", frames: [[192,0,190,190],[970,284,180,180],[401,995,120,120],[889,986,120,120],[0,0,190,190],[122,995,120,120],[960,0,127,282],[1089,0,127,282],[890,862,141,122],[606,192,180,180],[523,873,120,120],[364,466,195,166],[788,284,180,180],[0,1057,111,105],[645,923,120,120],[401,873,120,120],[767,1045,114,105],[788,192,151,89],[1202,1139,87,125],[767,923,120,120],[0,935,120,120],[1185,834,83,181],[0,698,150,150],[750,627,150,150],[584,639,150,150],[1100,682,150,150],[0,192,220,160],[1033,974,120,120],[289,1180,180,60],[653,1180,180,60],[162,564,180,60],[835,1180,180,60],[471,1180,180,60],[107,1180,180,60],[456,791,280,80],[0,1167,1200,11],[0,853,220,80],[938,466,340,80],[304,701,150,150],[152,701,150,150],[902,710,150,150],[222,192,186,188],[738,779,150,142],[1218,0,50,210],[349,853,50,297],[410,192,194,178],[561,466,187,171],[1100,548,187,132],[750,466,186,159],[0,536,160,160],[938,548,160,160],[384,0,190,190],[768,0,190,190],[576,0,190,190],[645,1045,120,120],[182,382,180,180],[0,354,180,180],[0,1180,105,105],[1017,1180,97,106],[162,639,420,60],[523,995,120,120],[1155,1017,120,120],[410,374,360,90],[1054,834,129,138],[1152,284,129,138],[222,853,125,140],[244,995,87,137]]},
		{name:"storage_atlas_17", frames: [[423,794,50,50],[194,102,100,100],[398,0,100,100],[194,0,100,100],[296,102,100,100],[296,0,100,100],[398,102,100,100],[0,796,90,50],[165,761,90,50],[0,474,62,151],[346,724,75,75],[461,549,48,48],[92,796,48,48],[99,0,93,109],[64,474,69,130],[0,702,107,57],[109,702,107,57],[102,111,80,124],[0,670,220,30],[257,809,40,40],[135,474,76,106],[291,474,76,106],[213,474,76,106],[257,752,40,55],[346,801,40,43],[500,0,10,11],[404,628,69,94],[369,474,100,73],[98,237,57,60],[184,204,99,100],[157,237,23,38],[475,628,31,31],[346,670,50,50],[304,670,40,147],[425,846,40,40],[142,813,40,40],[0,848,40,40],[467,846,40,40],[184,813,40,40],[92,846,40,40],[42,848,40,40],[383,846,40,40],[341,846,40,40],[299,819,40,40],[482,253,21,36],[0,761,163,33],[285,204,97,97],[222,670,80,80],[423,724,53,68],[226,851,39,28],[484,291,19,29],[0,0,97,106],[482,204,30,47],[471,507,38,31],[471,474,38,31],[0,213,96,80],[384,204,96,80],[369,549,90,54],[64,606,420,20],[0,390,240,40],[242,348,240,40],[242,390,240,40],[242,432,240,40],[0,432,240,40],[0,348,240,40],[242,306,240,40],[0,306,240,40],[0,628,200,40],[202,628,200,40],[0,111,100,100],[157,277,16,16]]}
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



(lib.background_0_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
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
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ban_select_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banka_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_help_windows_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.candy_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.doll_body_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.doll_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fall_head_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.fig1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fig2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fig3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fig4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.finishing_tape_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.forward_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
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
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_main_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_main_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_main_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jacket_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.jacket_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.line_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_de_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_id_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_it_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.loss_game_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.make1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.make2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.make3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.makeup1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.makeup2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.makeup3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.rastr1 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.rastr10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rastr11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.rastr12_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rastr13_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rastr14_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.rastr15_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rastr2 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rastr3 = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.rastr4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rastr5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.rastr6_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.rastr7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.rastr8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.rastr9_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.red_light_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
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
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.run_body_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.run_foot_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.run_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.run_head_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.run_head_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.run_head_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.run_leg_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.run_plucho1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.run_plucho_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.speech_cloud_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.speech_cloud_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.start_game_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.start_game_de_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.start_game_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.start_game_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.start_game_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.start_game_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.start_game_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.start_game_it_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.start_game_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.start_game_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.start_game_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.start_game_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.start_game_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.top1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.top2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.top3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.top4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.tree_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.win_game_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.win_game_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.win_game_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.win_game_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.win_game_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.win_game_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.win_game_id_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.win_game_it_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.win_game_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.win_game_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.win_game_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.win_game_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.win_game_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.zrachok_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-180,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
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
	this.shape.setTransform(400,300,1.167,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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


(lib.run_head_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.run_head_3_img();
	this.instance.setTransform(-49.8,-55.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-55.7,97,106);
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


(lib.zrachok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zrachok_img();
	this.instance.setTransform(-7.9,-7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.9,-7.9,16,16);
p.frameBounds = [rect];


(lib.wardrobe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_img();
	this.instance.setTransform(-210,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-265,420,530);
p.frameBounds = [rect];


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tree_img();
	this.instance.setTransform(-297.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-297.5,-110.5,595,221);
p.frameBounds = [rect];


(lib.top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top1_img();
	this.instance.setTransform(-64.3,-68.8);

	this.instance_1 = new lib.top2_img();
	this.instance_1.setTransform(-64.3,-68.8);

	this.instance_2 = new lib.top3_img();
	this.instance_2.setTransform(-61.7,-72.2);

	this.instance_3 = new lib.top4_img();
	this.instance_3.setTransform(-48.2,-70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.3,-68.8,129,138);
p.frameBounds = [rect, rect, new cjs.Rectangle(-61.7,-72.2,125,140), new cjs.Rectangle(-48.2,-70.7,87,137), null];


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
	this.instance.setTransform(-210,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,420,20);
p.frameBounds = [rect];


(lib.speech_cloud_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.speech_cloud_2_img();
	this.instance.setTransform(-235,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-210,470,420);
p.frameBounds = [rect];


(lib.speech_cloud_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.speech_cloud_1_img();
	this.instance.setTransform(-235,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-210,470,420);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-210,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-30,420,60);
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


(lib.run_plucho1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.run_plucho1_img();
	this.instance.setTransform(-19.3,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.3,-15.3,38,31);
p.frameBounds = [rect];


(lib.run_plucho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.run_plucho_img();
	this.instance.setTransform(-19.3,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.3,-15.3,38,31);
p.frameBounds = [rect];


(lib.run_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.run_leg_img();
	this.instance.setTransform(-15,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-22.9,30,47);
p.frameBounds = [rect];


(lib.run_head_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.run_head_2_img();
	this.instance.setTransform(-49.8,-55.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-55.7,97,106);
p.frameBounds = [rect];


(lib.run_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.run_head_1_img();
	this.instance.setTransform(-58.5,-54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-54.7,105,105);
p.frameBounds = [rect];


(lib.run_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.run_hand_img();
	this.instance.setTransform(-9.4,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.4,-14.9,19,29);
p.frameBounds = [rect];


(lib.run_foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.run_foot_img();
	this.instance.setTransform(-19.7,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.7,-13.7,39,28);
p.frameBounds = [rect];


(lib.run_body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.run_body_1_img();
	this.instance.setTransform(-26.5,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-34.3,53,68);
p.frameBounds = [rect];


(lib.red_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.red_light_img();
	this.instance.setTransform(-48.3,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.3,-48.3,97,97);
p.frameBounds = [rect];


(lib.rastr14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr14_img();
	this.instance.setTransform(-198.5,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.5,-208,397,416);
p.frameBounds = [rect];


(lib.rastr11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr11_img();
	this.instance.setTransform(-216,-205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216,-205.5,432,411);
p.frameBounds = [rect];


(lib.rastr8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr8_img();
	this.instance.setTransform(-197,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-197,394,394);
p.frameBounds = [rect];


(lib.rastr5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr5_img();
	this.instance.setTransform(-195.5,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195.5,-170,391,340);
p.frameBounds = [rect];


(lib.object_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjqAAlLQAAlKDrjrQDqjpFKgBQFLABDrDpQDpDrABFKQgBFLjpDqQjrDrlLAAQlKAAjqjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.makeup_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup1_img();
	this.instance.setTransform(-37.9,-53);

	this.instance_1 = new lib.makeup2_img();
	this.instance_1.setTransform(-37.9,-53);

	this.instance_2 = new lib.makeup3_img();
	this.instance_2.setTransform(-37.9,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.9,-53,76,106);
p.frameBounds = [rect, rect, rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.line_img();
	this.instance.setTransform(-600,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-5.5,1200,11);
p.frameBounds = [rect];


(lib.jacket_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jacket_1_img();
	this.instance.setTransform(-97.9,-104.1);

	this.instance_1 = new lib.jacket_2_img();
	this.instance_1.setTransform(-97.9,-104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.9,-104.1,196,208);
p.frameBounds = [rect, rect, null];


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


(lib.hero_3_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_3_main_img();
	this.instance.setTransform(-105.5,-326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-326,211,652);
p.frameBounds = [rect];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_2_main_img();
	this.instance.setTransform(-105.5,-326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-326,211,652);
p.frameBounds = [rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_1_main_img();
	this.instance.setTransform(-148,-286.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-286.5,296,573);
p.frameBounds = [rect];


(lib.hanger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(-53.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-28.5,107,57);
p.frameBounds = [rect];


(lib.hanger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger_img();
	this.instance.setTransform(-53.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-28.5,107,57);
p.frameBounds = [rect];


(lib.hair3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair3_img();
	this.instance.setTransform(-34.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-65,69,130);
p.frameBounds = [rect];


(lib.hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair2_img();
	this.instance.setTransform(-41.2,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-90.2,83,181);
p.frameBounds = [rect];


(lib.hair0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair0_img();
	this.instance.setTransform(-46.6,-54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-54.7,93,109);
p.frameBounds = [rect];


(lib.fringe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe3_img();
	this.instance.setTransform(-37.5,-37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-37.6,75,75);
p.frameBounds = [rect];


(lib.fringe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe2_img();
	this.instance.setTransform(-43.3,-62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-62.4,87,125);
p.frameBounds = [rect];


(lib.fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe1_img();
	this.instance.setTransform(-75.6,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.6,-44.2,151,89);
p.frameBounds = [rect];


(lib.fringe0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe0_img();
	this.instance.setTransform(-57.1,-52.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-52.7,114,105);
p.frameBounds = [rect];


(lib.finishing_tape_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.finishing_tape_img();
	this.instance.setTransform(-31,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-75.5,62,151);
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


(lib.fig4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fig4_img();
	this.instance.setTransform(-198.5,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.5,-208,397,416);
p.frameBounds = [rect];


(lib.fig3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fig3_img();
	this.instance.setTransform(-215.9,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215.9,-205.6,432,411);
p.frameBounds = [rect];


(lib.fig2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fig2_img();
	this.instance.setTransform(-197,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-197,394,394);
p.frameBounds = [rect];


(lib.fig1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fig1_img();
	this.instance.setTransform(-195.4,-169.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195.4,-169.9,391,340);
p.frameBounds = [rect];


(lib.fall_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.fall_head_1_img();
	this.instance.setTransform(-58.5,-54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-54.7,111,105);
p.frameBounds = [rect];


(lib.dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress8_img();
	this.instance.setTransform(-96.4,-187.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-187.6,191,486);
p.frameBounds = [rect];


(lib.dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress7_img();
	this.instance.setTransform(-96.8,-303.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.8,-303.6,191,602);
p.frameBounds = [rect];


(lib.dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress6_img();
	this.instance.setTransform(-96.5,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-189,191,487);
p.frameBounds = [rect];


(lib.dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dress5_img();
	this.instance.setTransform(-96.6,-304.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.6,-304.1,191,602);
p.frameBounds = [rect];


(lib.dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress4_img();
	this.instance.setTransform(-95.5,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-205.6,193,504);
p.frameBounds = [rect];


(lib.dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.dress3_img();
	this.instance.setTransform(-95,-298.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-298.5,193,595);
p.frameBounds = [rect];


(lib.dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.dress2_img();
	this.instance.setTransform(-96.1,-298.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.1,-298.2,193,595);
p.frameBounds = [rect];


(lib.dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.dress1_img();
	this.instance.setTransform(-96,-297.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-297.5,193,595);
p.frameBounds = [rect];


(lib.dot_outline_game_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhwBxQgugvgBhCQABhAAugwQAwguBAgBQBBABAwAuQAuAwABBAQgBBCguAvQgwAuhBABQhAgBgwgugAhihiQgpAqAAA4QAAA5ApApQAqAqA4AAQA5AAApgqQAqgpAAg5QAAg4gqgqQgpgpg5AAQg4AAgqApg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.dot_outline_game_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F36985").s().p("Ag3A4QgYgYAAggQAAgfAYgXQAYgZAfAAQAgAAAYAZQAYAXAAAfQAAAggYAYQgYAYggAAQgfAAgYgYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
p.frameBounds = [rect];


(lib.dot_outline_game_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF2249").s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-13,26,26);
p.frameBounds = [rect];


(lib.dot_outline_game_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74031D").s().p("AhwBxQgugvgBhCQABhBAugvQAvguBBgBQBCABAvAuQAuAvABBBQgBBCguAvQgvAuhCABQhBgBgvgug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.doll_head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.doll_head1_img();
	this.instance.setTransform(-111.7,-106.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.7,-106.7,224,214);
p.frameBounds = [rect];


(lib.doll_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doll_body_img();
	this.instance.setTransform(-97.6,-82.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-82.9,195,166);
p.frameBounds = [rect];


(lib.decor_background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.container_drawing_outline_game_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.choiceOutlineGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ban_select_img();
	this.instance.setTransform(-95.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-95.5,191,191);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.candy_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.candy_0_img();
	this.instance.setTransform(-254.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.5,-254.5,509,509);
p.frameBounds = [rect];


(lib.bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom1_img();
	this.instance.setTransform(-63.4,-140.8);

	this.instance_1 = new lib.bottom2_img();
	this.instance_1.setTransform(-63.4,-140.8);

	this.instance_2 = new lib.bottom3_img();
	this.instance_2.setTransform(-64.1,-140.8);

	this.instance_3 = new lib.bottom4_img();
	this.instance_3.setTransform(-71.4,-140.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// Слой 2
	this.instance_4 = new lib.shoes1_img();
	this.instance_4.setTransform(-28,127);

	this.instance_5 = new lib.shoes2_img();
	this.instance_5.setTransform(-28,127);

	this.instance_6 = new lib.shoes3_img();
	this.instance_6.setTransform(-29,147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.4,-140.8,131.5,347.9);
p.frameBounds = [rect, rect, new cjs.Rectangle(-64.1,-140.8,140,341.9), new cjs.Rectangle(-71.4,-140.3,141,341.4), null];


(lib.body1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_img();
	this.instance.setTransform(-89.3,-243.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.3,-243.5,179,487);
p.frameBounds = [rect];


(lib.body_win_game_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.win_game_en_img();
	this.instance.setTransform(-210,-110);

	this.instance_1 = new lib.win_game_ru_img();
	this.instance_1.setTransform(-210,-110);

	this.instance_2 = new lib.win_game_de_img();
	this.instance_2.setTransform(-210,-110);

	this.instance_3 = new lib.win_game_fr_img();
	this.instance_3.setTransform(-210,-110);

	this.instance_4 = new lib.win_game_it_img();
	this.instance_4.setTransform(-210,-110);

	this.instance_5 = new lib.win_game_es_img();
	this.instance_5.setTransform(-210,-110);

	this.instance_6 = new lib.win_game_pt_img();
	this.instance_6.setTransform(-210,-110);

	this.instance_7 = new lib.win_game_tr_img();
	this.instance_7.setTransform(-210,-110);

	this.instance_8 = new lib.win_game_ja_img();
	this.instance_8.setTransform(-210,-110);

	this.instance_9 = new lib.win_game_hi_img();
	this.instance_9.setTransform(-210,-110);

	this.instance_10 = new lib.win_game_ar_img();
	this.instance_10.setTransform(-210,-110);

	this.instance_11 = new lib.win_game_id_img();
	this.instance_11.setTransform(-210,-110);

	this.instance_12 = new lib.win_game_zh_img();
	this.instance_12.setTransform(-210,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-110,420,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-240,-70);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-240,-70);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-240,-70);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-240,-70);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-240,-70);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-240,-70);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-240,-70);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-240,-70);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-240,-70);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-240,-70);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-240,-70);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-240,-70);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-240,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-70,480,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_start_game_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.start_game_en_img();
	this.instance.setTransform(-210,-110);

	this.instance_1 = new lib.start_game_ru_img();
	this.instance_1.setTransform(-210,-110);

	this.instance_2 = new lib.start_game_de_img();
	this.instance_2.setTransform(-210,-110);

	this.instance_3 = new lib.start_game_fr_img();
	this.instance_3.setTransform(-210,-110);

	this.instance_4 = new lib.start_game_it_img();
	this.instance_4.setTransform(-210,-110);

	this.instance_5 = new lib.start_game_es_img();
	this.instance_5.setTransform(-210,-110);

	this.instance_6 = new lib.start_game_pt_img();
	this.instance_6.setTransform(-210,-110);

	this.instance_7 = new lib.start_game_tr_img();
	this.instance_7.setTransform(-210,-110);

	this.instance_8 = new lib.start_game_ja_img();
	this.instance_8.setTransform(-210,-110);

	this.instance_9 = new lib.start_game_hi_img();
	this.instance_9.setTransform(-210,-110);

	this.instance_10 = new lib.start_game_ar_img();
	this.instance_10.setTransform(-210,-110);

	this.instance_11 = new lib.start_game_id_img();
	this.instance_11.setTransform(-210,-110);

	this.instance_12 = new lib.start_game_zh_img();
	this.instance_12.setTransform(-210,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-110,420,220);
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


(lib.body_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_loss_game_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.loss_game_en_img();
	this.instance.setTransform(-210,-110);

	this.instance_1 = new lib.loss_game_ru_img();
	this.instance_1.setTransform(-210,-110);

	this.instance_2 = new lib.loss_game_de_img();
	this.instance_2.setTransform(-210,-110);

	this.instance_3 = new lib.loss_game_fr_img();
	this.instance_3.setTransform(-210,-110);

	this.instance_4 = new lib.loss_game_it_img();
	this.instance_4.setTransform(-210,-110);

	this.instance_5 = new lib.loss_game_es_img();
	this.instance_5.setTransform(-210,-110);

	this.instance_6 = new lib.loss_game_pt_img();
	this.instance_6.setTransform(-210,-110);

	this.instance_7 = new lib.loss_game_tr_img();
	this.instance_7.setTransform(-210,-110);

	this.instance_8 = new lib.loss_game_ja_img();
	this.instance_8.setTransform(-210,-110);

	this.instance_9 = new lib.loss_game_hi_img();
	this.instance_9.setTransform(-210,-110);

	this.instance_10 = new lib.loss_game_ar_img();
	this.instance_10.setTransform(-210,-110);

	this.instance_11 = new lib.loss_game_id_img();
	this.instance_11.setTransform(-210,-110);

	this.instance_12 = new lib.loss_game_zh_img();
	this.instance_12.setTransform(-210,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-110,420,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-240,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-70,480,140);
p.frameBounds = [rect];


(lib.bg_help_windows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_help_windows_img();
	this.instance.setTransform(-210,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-110,420,220);
p.frameBounds = [rect];


(lib.banka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banka_img();
	this.instance.setTransform(-271,-271);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-600,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-110.5,1200,221);
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
	this.shape.graphics.f("#FFC4CA").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(600,300,1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
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


(lib.forward_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,240);

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,495);
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
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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


(lib.win_game_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_win_game_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-110,420,220);
p.frameBounds = [rect];


(lib.top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.top4_img();
	this.instance.setTransform(-44.5,-56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.1,-83.4,107,163.8);
p.frameBounds = [rect];


(lib.top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.top3_img();
	this.instance.setTransform(-62.5,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-83.4,125,162.8);
p.frameBounds = [rect];


(lib.top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.top2_img();
	this.instance.setTransform(-64.5,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-83.4,129,166.8);
p.frameBounds = [rect];


(lib.top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.top1_img();
	this.instance.setTransform(-64.5,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-83.4,129,166.8);
p.frameBounds = [rect];


(lib.top_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top4();
	this.instance.setTransform(-0.3,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao4lbIHXn6IDmABIG1IAIiMSnItpADg");
	this.shape.setTransform(0.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.3,-3.9,114,170.8);
p.frameBounds = [rect];


(lib.top_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top3();
	this.instance.setTransform(0,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnRNIIjHtBIEjtSIHGACIHFGPICDHgIj/Mmg");
	this.shape.setTransform(-1.2,80.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-3.9,133.1,168.8);
p.frameBounds = [rect];


(lib.top_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top2();
	this.instance.setTransform(0.5,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AniNIIi7sOIEduFIL7AAIEkOkIkgLzg");
	this.shape.setTransform(1.9,81);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.2,-3.5,134.2,170.3);
p.frameBounds = [rect];


(lib.top_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top1();
	this.instance.setTransform(0.5,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnnNnIjYsTIEdu4INAgCIEiOrIlDMig");
	this.shape.setTransform(0.7,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-5.8,140.9,174.3);
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
p.nominalBounds = rect = new cjs.Rectangle(-240,-70,480,140);
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


(lib.start_game_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_start_game_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-110,420,220);
p.frameBounds = [rect];


(lib.stand_man3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho1();
	this.instance.setTransform(4.9,17.3,1,1,0,0,0,-11.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(28.2,31.3,1,1,90,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-16.1,72.8,1,1,-30,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(-14.9,46.9,1,1,0,0,0,1.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(-2.9,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// run_plucho1
	this.instance_5 = new lib.run_plucho1();
	this.instance_5.setTransform(1.6,10.7,1,1,141.8,0,0,-11.6,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// run_hand
	this.instance_6 = new lib.run_hand();
	this.instance_6.setTransform(-25.3,14.2,1,1,-154.5,0,0,-2.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// run_foot
	this.instance_7 = new lib.run_foot();
	this.instance_7.setTransform(20.2,68.1,1,1,-82,0,0,9.8,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// run_leg
	this.instance_8 = new lib.run_leg();
	this.instance_8.setTransform(-2.5,49.3,1,1,-60,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// run_head_1
	this.instance_9 = new lib.run_head_3();
	this.instance_9.setTransform(5.6,-2.2,1,1,0,0,0,-0.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-99,100.4,203.9);
p.frameBounds = [rect];


(lib.stand_man2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho1();
	this.instance.setTransform(4.9,17.3,1,1,0,0,0,-11.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(28.2,31.3,1,1,90,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-16.1,72.8,1,1,-30,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(-14.9,46.9,1,1,0,0,0,1.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(-2.9,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// run_plucho1
	this.instance_5 = new lib.run_plucho1();
	this.instance_5.setTransform(1.6,10.7,1,1,141.8,0,0,-11.6,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// run_hand
	this.instance_6 = new lib.run_hand();
	this.instance_6.setTransform(-25.3,14.2,1,1,-154.5,0,0,-2.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// run_foot
	this.instance_7 = new lib.run_foot();
	this.instance_7.setTransform(20.2,68.1,1,1,-82,0,0,9.8,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// run_leg
	this.instance_8 = new lib.run_leg();
	this.instance_8.setTransform(-2.5,49.3,1,1,-60,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// run_head_1
	this.instance_9 = new lib.run_head_2();
	this.instance_9.setTransform(5.6,-2.2,1,1,0,0,0,-0.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-99,100.4,203.9);
p.frameBounds = [rect];


(lib.stand_man1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho();
	this.instance.setTransform(4.9,17.3,1,1,0,0,0,-11.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(28.2,31.3,1,1,90,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-16.1,72.8,1,1,-30,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(-14.9,46.9,1,1,0,0,0,1.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(-2.9,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// run_plucho1
	this.instance_5 = new lib.run_plucho1();
	this.instance_5.setTransform(1.6,10.7,1,1,141.8,0,0,-11.6,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// run_hand
	this.instance_6 = new lib.run_hand();
	this.instance_6.setTransform(-25.3,14.2,1,1,-154.5,0,0,-2.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// run_foot
	this.instance_7 = new lib.run_foot();
	this.instance_7.setTransform(20.2,68.1,1,1,-82,0,0,9.8,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// run_leg
	this.instance_8 = new lib.run_leg();
	this.instance_8.setTransform(-2.5,49.3,1,1,-60,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// run_head_1
	this.instance_9 = new lib.run_head_1();
	this.instance_9.setTransform(5.6,-2.2,1,1,0,0,0,-0.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-98,105,202.9);
p.frameBounds = [rect];


(lib.run_man3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho1();
	this.instance.setTransform(13,7.6,1,1,0,0,0,-11.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:45,x:5.5,y:7.5},0).wait(2).to({regX:-11.4,rotation:105,y:7.6},0).wait(2).to({rotation:135,x:1},0).wait(4).to({rotation:97.9,y:7.5},0).wait(2).to({rotation:52.9},0).wait(2).to({rotation:17.5,x:2,y:7.6},0).wait(2));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(36.3,21.5,1,1,0,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({rotation:60,x:12.1,y:33.9},0).wait(2).to({regX:-2.4,rotation:150,x:-14,y:26.4},0).wait(2).to({rotation:195,x:-25.3,y:14.1},0).wait(2).to({regX:-2.5,rotation:165},0).wait(2).to({regY:9.1,rotation:127.9,x:-16.1,y:28.5},0).wait(2).to({rotation:82.9,x:3.7,y:34.4},0).wait(2).to({rotation:47.5,x:19.8,y:27.9},0).wait(2));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-17,69.1,1,1,0,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:-21,x:-1.5,y:64.9},0).wait(2).to({regY:-5.2,rotation:-75.5,x:8.9,y:50.9},0).wait(2).to({regX:11.1,regY:-5,rotation:-120.5,x:9,y:54.3},0).wait(2).to({regX:11,regY:-4.9,rotation:-66.2,x:2.3,y:63.6},0).wait(2).to({x:-3.8,y:68.1},0).wait(2).to({rotation:-30.3,x:-20.4,y:70.5},0).wait(2).to({regY:-5,rotation:29.7,x:-33.3,y:64.6},0).wait(2));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(-15.8,43.1,1,1,0,0,0,1.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({rotation:-36},0).wait(2).to({regX:1.6,rotation:-75.5},0).wait(4).to({regY:-12.9,rotation:-51.2,x:-15.7},0).wait(2).to({regX:1.5,rotation:-36.2,x:-16,y:43.7},0).wait(2).to({rotation:-0.3,x:-15.9},0).wait(2).to({regX:1.6,rotation:29.7,x:-15.8},0).wait(2));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(-3.8,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

	// Слой 11
	this.instance_5 = new lib.run_plucho1();
	this.instance_5.setTransform(0.7,7,1,1,141.8,0,0,-11.6,-6);

	this.instance_6 = new lib.run_hand();
	this.instance_6.setTransform(-26.2,10.5,1,1,-154.5,0,0,-2.6,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regX:-2.6,rotation:-154.5,x:-26.2,y:10.5}},{t:this.instance_5,p:{regX:-11.6,rotation:141.8,x:0.7,y:7}}]}).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:145.5,x:-18.8,y:22.1}},{t:this.instance_5,p:{regX:-11.5,rotation:111.8,x:2.9,y:5.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:100.5,x:0.6,y:28.9}},{t:this.instance_5,p:{regX:-11.6,rotation:66.8,x:4.3,y:1.8}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:55.5,x:28.4,y:32.3}},{t:this.instance_5,p:{regX:-11.6,rotation:21.8,x:11.9,y:10.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:65,x:23.9,y:34.8}},{t:this.instance_5,p:{regX:-11.6,rotation:31.3,x:11.2,y:10.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:80,x:3.7,y:34.2}},{t:this.instance_5,p:{regX:-11.6,rotation:76.3,x:11.8,y:8.1}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:133,x:-20.8,y:22.2}},{t:this.instance_5,p:{regX:-11.6,rotation:129.3,x:4.9,y:13}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:-174.1,x:-26.5,y:11}},{t:this.instance_5,p:{regX:-11.6,rotation:152.2,x:0.6,y:12.5}}]},2).wait(2));

	// run_foot
	this.instance_7 = new lib.run_foot();
	this.instance_7.setTransform(19.4,64.4,1,1,-37,0,0,9.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({rotation:-46.3,x:8.6,y:69.6},0).wait(2).to({rotation:-6,x:-13,y:75.5},0).wait(2).to({regY:-2,rotation:24,x:-26.9,y:69},0).wait(2).to({rotation:39,x:-18.8,y:73.2},0).wait(2).to({regX:9.9,rotation:0.5,x:3.5,y:69.2},0).wait(2).to({regY:-1.9,rotation:-59.5,x:15.8,y:60.3},0).wait(2).to({rotation:-113.5,x:29.9,y:67.4},0).wait(2));

	// run_leg
	this.instance_8 = new lib.run_leg();
	this.instance_8.setTransform(-3.4,45.6,1,1,-60,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({rotation:-39.3,x:-6.2,y:44},0).wait(2).to({rotation:1,x:-7.8,y:46.4},0).wait(2).to({rotation:31,x:-7.7},0).wait(2).to({regY:-13.2,rotation:16,x:-6.2,y:46.5},0).wait(2).to({rotation:-22.5,x:-3.3,y:40.5},0).wait(2).to({rotation:-52.5,x:-4.5,y:38.7},0).wait(2).to({rotation:-61.5,x:2.3,y:48},0).wait(2));

	// run_head_1
	this.instance_9 = new lib.run_head_3();
	this.instance_9.setTransform(4.7,-6,1,1,0,0,0,-0.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-102.7,100.2,198);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-44.6,-102.7,97,205), rect, rect=new cjs.Rectangle(-44.6,-102.7,97,197.6), rect, rect=new cjs.Rectangle(-60.5,-102.7,115.5,190.4), rect, rect=new cjs.Rectangle(-51.9,-102.7,104.3,202.2), rect, rect=new cjs.Rectangle(-44.6,-102.7,97,206.7), rect, rect=new cjs.Rectangle(-51.5,-102.7,103.9,205.3), rect, rect=new cjs.Rectangle(-69.5,-102.7,126.1,202.1), rect];


(lib.run_man2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho1();
	this.instance.setTransform(13,7.6,1,1,0,0,0,-11.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:45,x:5.5,y:7.5},0).wait(2).to({regX:-11.4,rotation:105,y:7.6},0).wait(2).to({rotation:135,x:1},0).wait(4).to({rotation:97.9,y:7.5},0).wait(2).to({rotation:52.9},0).wait(2).to({rotation:17.5,x:2,y:7.6},0).wait(2));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(36.3,21.5,1,1,0,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({rotation:60,x:12.1,y:33.9},0).wait(2).to({regX:-2.4,rotation:150,x:-14,y:26.4},0).wait(2).to({rotation:195,x:-25.3,y:14.1},0).wait(2).to({regX:-2.5,rotation:165},0).wait(2).to({regY:9.1,rotation:127.9,x:-16.1,y:28.5},0).wait(2).to({rotation:82.9,x:3.7,y:34.4},0).wait(2).to({rotation:47.5,x:19.8,y:27.9},0).wait(2));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-17,69.1,1,1,0,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:-21,x:-1.5,y:64.9},0).wait(2).to({regY:-5.2,rotation:-75.5,x:8.9,y:50.9},0).wait(2).to({regX:11.1,regY:-5,rotation:-120.5,x:9,y:54.3},0).wait(2).to({regX:11,regY:-4.9,rotation:-66.2,x:2.3,y:63.6},0).wait(2).to({x:-3.8,y:68.1},0).wait(2).to({rotation:-30.3,x:-20.4,y:70.5},0).wait(2).to({regY:-5,rotation:29.7,x:-33.3,y:64.6},0).wait(2));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(-15.8,43.1,1,1,0,0,0,1.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({rotation:-36},0).wait(2).to({regX:1.6,rotation:-75.5},0).wait(4).to({regY:-12.9,rotation:-51.2,x:-15.7},0).wait(2).to({regX:1.5,rotation:-36.2,x:-16,y:43.7},0).wait(2).to({rotation:-0.3,x:-15.9},0).wait(2).to({regX:1.6,rotation:29.7,x:-15.8},0).wait(2));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(-3.8,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

	// Слой 11
	this.instance_5 = new lib.run_plucho1();
	this.instance_5.setTransform(0.7,7,1,1,141.8,0,0,-11.6,-6);

	this.instance_6 = new lib.run_hand();
	this.instance_6.setTransform(-26.2,10.5,1,1,-154.5,0,0,-2.6,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regX:-2.6,rotation:-154.5,x:-26.2,y:10.5}},{t:this.instance_5,p:{regX:-11.6,rotation:141.8,x:0.7,y:7}}]}).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:145.5,x:-18.8,y:22.1}},{t:this.instance_5,p:{regX:-11.5,rotation:111.8,x:2.9,y:5.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:100.5,x:0.6,y:28.9}},{t:this.instance_5,p:{regX:-11.6,rotation:66.8,x:4.3,y:1.8}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:55.5,x:28.4,y:32.3}},{t:this.instance_5,p:{regX:-11.6,rotation:21.8,x:11.9,y:10.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:65,x:23.9,y:34.8}},{t:this.instance_5,p:{regX:-11.6,rotation:31.3,x:11.2,y:10.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:80,x:3.7,y:34.2}},{t:this.instance_5,p:{regX:-11.6,rotation:76.3,x:11.8,y:8.1}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:133,x:-20.8,y:22.2}},{t:this.instance_5,p:{regX:-11.6,rotation:129.3,x:4.9,y:13}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:-174.1,x:-26.5,y:11}},{t:this.instance_5,p:{regX:-11.6,rotation:152.2,x:0.6,y:12.5}}]},2).wait(2));

	// run_foot
	this.instance_7 = new lib.run_foot();
	this.instance_7.setTransform(19.4,64.4,1,1,-37,0,0,9.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({rotation:-46.3,x:8.6,y:69.6},0).wait(2).to({rotation:-6,x:-13,y:75.5},0).wait(2).to({regY:-2,rotation:24,x:-26.9,y:69},0).wait(2).to({rotation:39,x:-18.8,y:73.2},0).wait(2).to({regX:9.9,rotation:0.5,x:3.5,y:69.2},0).wait(2).to({regY:-1.9,rotation:-59.5,x:15.8,y:60.3},0).wait(2).to({rotation:-113.5,x:29.9,y:67.4},0).wait(2));

	// run_leg
	this.instance_8 = new lib.run_leg();
	this.instance_8.setTransform(-3.4,45.6,1,1,-60,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({rotation:-39.3,x:-6.2,y:44},0).wait(2).to({rotation:1,x:-7.8,y:46.4},0).wait(2).to({rotation:31,x:-7.7},0).wait(2).to({regY:-13.2,rotation:16,x:-6.2,y:46.5},0).wait(2).to({rotation:-22.5,x:-3.3,y:40.5},0).wait(2).to({rotation:-52.5,x:-4.5,y:38.7},0).wait(2).to({rotation:-61.5,x:2.3,y:48},0).wait(2));

	// run_head_1
	this.instance_9 = new lib.run_head_2();
	this.instance_9.setTransform(4.7,-6,1,1,0,0,0,-0.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-102.7,100.2,198);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-44.6,-102.7,97,205), rect, rect=new cjs.Rectangle(-44.6,-102.7,97,197.6), rect, rect=new cjs.Rectangle(-60.5,-102.7,115.5,190.4), rect, rect=new cjs.Rectangle(-51.9,-102.7,104.3,202.2), rect, rect=new cjs.Rectangle(-44.6,-102.7,97,206.7), rect, rect=new cjs.Rectangle(-51.5,-102.7,103.9,205.3), rect, rect=new cjs.Rectangle(-69.5,-102.7,126.1,202.1), rect];


(lib.run_man1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho();
	this.instance.setTransform(13,7.6,1,1,0,0,0,-11.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:45,x:5.5,y:7.5},0).wait(2).to({regX:-11.4,rotation:105,y:7.6},0).wait(2).to({rotation:135,x:1},0).wait(4).to({rotation:97.9,y:7.5},0).wait(2).to({rotation:52.9},0).wait(2).to({rotation:17.5,x:2,y:7.6},0).wait(2));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(36.3,21.5,1,1,0,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({rotation:60,x:12.1,y:33.9},0).wait(2).to({regX:-2.4,rotation:150,x:-14,y:26.4},0).wait(2).to({rotation:195,x:-25.3,y:14.1},0).wait(2).to({regX:-2.5,rotation:165},0).wait(2).to({regY:9.1,rotation:127.9,x:-16.1,y:28.5},0).wait(2).to({rotation:82.9,x:3.7,y:34.4},0).wait(2).to({rotation:47.5,x:19.8,y:27.9},0).wait(2));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-17,69.1,1,1,0,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:-21,x:-1.5,y:64.9},0).wait(2).to({regY:-5.2,rotation:-75.5,x:8.9,y:50.9},0).wait(2).to({regX:11.1,regY:-5,rotation:-120.5,x:9,y:54.3},0).wait(2).to({regX:11,regY:-4.9,rotation:-66.2,x:2.3,y:63.6},0).wait(2).to({x:-3.8,y:68.1},0).wait(2).to({rotation:-30.3,x:-20.4,y:70.5},0).wait(2).to({regY:-5,rotation:29.7,x:-33.3,y:64.6},0).wait(2));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(-15.8,43.1,1,1,0,0,0,1.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({rotation:-36},0).wait(2).to({regX:1.6,rotation:-75.5},0).wait(4).to({regY:-12.9,rotation:-51.2,x:-15.7},0).wait(2).to({regX:1.5,rotation:-36.2,x:-16,y:43.7},0).wait(2).to({rotation:-0.3,x:-15.9},0).wait(2).to({regX:1.6,rotation:29.7,x:-15.8},0).wait(2));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(-3.8,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

	// Слой 11
	this.instance_5 = new lib.run_plucho1();
	this.instance_5.setTransform(0.7,7,1,1,141.8,0,0,-11.6,-6);

	this.instance_6 = new lib.run_hand();
	this.instance_6.setTransform(-26.2,10.5,1,1,-154.5,0,0,-2.6,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regX:-2.6,rotation:-154.5,x:-26.2,y:10.5}},{t:this.instance_5,p:{regX:-11.6,rotation:141.8,x:0.7,y:7}}]}).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:145.5,x:-18.8,y:22.1}},{t:this.instance_5,p:{regX:-11.5,rotation:111.8,x:2.9,y:5.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:100.5,x:0.6,y:28.9}},{t:this.instance_5,p:{regX:-11.6,rotation:66.8,x:4.3,y:1.8}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:55.5,x:28.4,y:32.3}},{t:this.instance_5,p:{regX:-11.6,rotation:21.8,x:11.9,y:10.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:65,x:23.9,y:34.8}},{t:this.instance_5,p:{regX:-11.6,rotation:31.3,x:11.2,y:10.6}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:80,x:3.7,y:34.2}},{t:this.instance_5,p:{regX:-11.6,rotation:76.3,x:11.8,y:8.1}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:133,x:-20.8,y:22.2}},{t:this.instance_5,p:{regX:-11.6,rotation:129.3,x:4.9,y:13}}]},2).to({state:[{t:this.instance_6,p:{regX:-2.5,rotation:-174.1,x:-26.5,y:11}},{t:this.instance_5,p:{regX:-11.6,rotation:152.2,x:0.6,y:12.5}}]},2).wait(2));

	// run_foot
	this.instance_7 = new lib.run_foot();
	this.instance_7.setTransform(19.4,64.4,1,1,-37,0,0,9.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({rotation:-46.3,x:8.6,y:69.6},0).wait(2).to({rotation:-6,x:-13,y:75.5},0).wait(2).to({regY:-2,rotation:24,x:-26.9,y:69},0).wait(2).to({rotation:39,x:-18.8,y:73.2},0).wait(2).to({regX:9.9,rotation:0.5,x:3.5,y:69.2},0).wait(2).to({regY:-1.9,rotation:-59.5,x:15.8,y:60.3},0).wait(2).to({rotation:-113.5,x:29.9,y:67.4},0).wait(2));

	// run_leg
	this.instance_8 = new lib.run_leg();
	this.instance_8.setTransform(-3.4,45.6,1,1,-60,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({rotation:-39.3,x:-6.2,y:44},0).wait(2).to({rotation:1,x:-7.8,y:46.4},0).wait(2).to({rotation:31,x:-7.7},0).wait(2).to({regY:-13.2,rotation:16,x:-6.2,y:46.5},0).wait(2).to({rotation:-22.5,x:-3.3,y:40.5},0).wait(2).to({rotation:-52.5,x:-4.5,y:38.7},0).wait(2).to({rotation:-61.5,x:2.3,y:48},0).wait(2));

	// run_head_1
	this.instance_9 = new lib.run_head_1();
	this.instance_9.setTransform(4.7,-6,1,1,0,0,0,-0.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.3,-101.7,105,197);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-53.3,-101.7,105,204), rect, rect=new cjs.Rectangle(-53.3,-101.7,105,196.6), rect, rect=new cjs.Rectangle(-60.5,-101.7,115.5,189.4), rect, rect=new cjs.Rectangle(-53.3,-101.7,105,201.2), rect, rect=new cjs.Rectangle(-53.3,-101.7,105,205.7), rect, rect=new cjs.Rectangle(-53.3,-101.7,105,204.3), rect, rect=new cjs.Rectangle(-69.5,-101.7,126.1,201.1), rect];


(lib.rastr81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.rastr8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:55,y:41},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-197,394,394);
p.frameBounds = [rect, new cjs.Rectangle(-190.9,-192.4,394,394), new cjs.Rectangle(-184.8,-187.9,394,394), new cjs.Rectangle(-178.6,-183.3,394,394), new cjs.Rectangle(-172.5,-178.8,394,394), new cjs.Rectangle(-166.4,-174.2,394,394), new cjs.Rectangle(-160.3,-169.6,394,394), new cjs.Rectangle(-154.2,-165.1,394,394), new cjs.Rectangle(-148.1,-160.5,394,394), new cjs.Rectangle(-142,-156,394,394)];


(lib.rastr51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Слой 1
	this.instance = new lib.rastr5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12.7,x:86,y:15},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195.5,-170,391,340);
p.frameBounds = [rect, new cjs.Rectangle(-188.3,-173.7,401.3,351.9), new cjs.Rectangle(-181,-177.3,411.2,363.4), new cjs.Rectangle(-173.4,-180.8,420.6,374.6), new cjs.Rectangle(-166.1,-184.7,430.7,386.5), new cjs.Rectangle(-158.1,-187.7,439.3,396.9), new cjs.Rectangle(-150,-190.6,447.5,407), new cjs.Rectangle(-142.1,-193.9,456.3,417.8)];


(lib.rastr14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.rastr14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10.7,x:84,y:41},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-198.5,-208,397,416);
p.frameBounds = [rect, new cjs.Rectangle(-192.9,-207,404.5,423.2), new cjs.Rectangle(-187.9,-206.6,413.2,431.4), new cjs.Rectangle(-182.8,-206,421.7,439.5), new cjs.Rectangle(-177.6,-205.4,430,447.4), new cjs.Rectangle(-171.7,-204.1,436.9,453.9), new cjs.Rectangle(-166.3,-203.3,444.8,461.4), new cjs.Rectangle(-160.9,-202.3,452.6,468.6), new cjs.Rectangle(-155.3,-201.3,460.1,475.7), new cjs.Rectangle(-149.7,-200.2,467.5,482.5)];


(lib.rastr11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.rastr11();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:62,y:28},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216,-205.5,432,411);
p.frameBounds = [rect, new cjs.Rectangle(-214.5,-208.1,442.9,422.4), new cjs.Rectangle(-213.5,-211.2,454.7,434.9), new cjs.Rectangle(-211.7,-213.4,464.9,445.7), new cjs.Rectangle(-210.3,-216.2,475.9,457.4), new cjs.Rectangle(-208.7,-218.7,486.4,468.7), new cjs.Rectangle(-206.3,-220.5,495.5,478.4), new cjs.Rectangle(-204.4,-222.6,505.3,488.9), new cjs.Rectangle(-202.1,-224.5,514.5,498.9), new cjs.Rectangle(-199.8,-226.4,523.7,508.8)];


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


(lib.nav_1_mc = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.body_nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.loss_game_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_loss_game_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-110,420,220);
p.frameBounds = [rect];


(lib.jacket2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.jacket_2_img();
	this.instance.setTransform(-96.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69513A").s().p("AkSM2IAj0sICqk9ID3gTIA2BHIArZGg");
	this.shape.setTransform(-3.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-83.4,196,220.8);
p.frameBounds = [rect];


(lib.jacket1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.jacket_1_img();
	this.instance.setTransform(-96.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("AkXM0IADxOIDOoYID8gTIAzB1IhKMMIB5MKg");
	this.shape.setTransform(-3.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-83.4,196,220.8);
p.frameBounds = [rect];


(lib.jacket_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jacket2();
	this.instance.setTransform(0,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,0,196,220.8);
p.frameBounds = [rect];


(lib.jacket_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jacket1();
	this.instance.setTransform(0,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,0,196,220.8);
p.frameBounds = [rect];


(lib.jacket_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.instance = new lib.hero_1_main_mc();
	this.instance.setTransform(398,314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212));

	// hero
	this.instance_1 = new lib.hero_3_main_mc();
	this.instance_1.setTransform(600,365);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({alpha:0.012},15).wait(1).to({skewY:180,x:200},0).to({alpha:1},15).wait(70).to({skewY:0,x:600},0).to({alpha:0.012},15).wait(1).to({alpha:1},15).wait(1));

	// hero
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(200,365);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({alpha:0.012},15).wait(1).to({skewY:180,x:600},0).to({alpha:1},15).wait(70).to({skewY:0,x:200},0).to({alpha:0.012},15).wait(1).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(94.5,27.5,611,663.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair0();

	this.instance_1 = new lib.hair2();
	this.instance_1.setTransform(4,45.5);

	this.instance_2 = new lib.hair3();
	this.instance_2.setTransform(-10.2,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-54.7,93,109);
p.frameBounds = [rect, null, new cjs.Rectangle(-37.2,-44.7,83,181), new cjs.Rectangle(-44.7,-68,69,130)];


(lib.fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe0();

	this.instance_1 = new lib.fringe1();
	this.instance_1.setTransform(0.1,-12.2);

	this.instance_2 = new lib.fringe2();
	this.instance_2.setTransform(4.2,12.5);

	this.instance_3 = new lib.fringe3();
	this.instance_3.setTransform(-1,-12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.1,-52.7,114,105);
p.frameBounds = [rect, new cjs.Rectangle(-75.5,-56.5,151,89), new cjs.Rectangle(-39.1,-50,87,125), new cjs.Rectangle(-38.5,-50.2,75,75)];


(lib.finishing_tape_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.finishing_tape_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},19).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-75.5,62,151);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.fall_man3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho1();
	this.instance.setTransform(48.3,87.4,1,1,0,0,0,-11.5,-5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(71.6,101.3,1,1,90,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-4.3,96.8,1,1,0,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(18.9,84.8,1,1,60,0,0,1.5,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(38.4,87.4,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// run_foot
	this.instance_5 = new lib.run_foot();
	this.instance_5.setTransform(18,126,1,1,38,0,0,9.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// run_leg
	this.instance_6 = new lib.run_leg();
	this.instance_6.setTransform(22.9,96.8,1,1,0,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// run_head_1
	this.instance_7 = new lib.rastr1();
	this.instance_7.setTransform(98.1,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 2
	this.instance_8 = new lib.run_head_3();
	this.instance_8.setTransform(71.5,78.1,1,1,67.1,0,0,-0.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-5.1,214.4,149.8);
p.frameBounds = [rect];


(lib.fall_man2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho1();
	this.instance.setTransform(48.3,87.4,1,1,0,0,0,-11.5,-5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(71.6,101.3,1,1,90,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-4.3,96.8,1,1,0,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(18.9,84.8,1,1,60,0,0,1.5,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(38.4,87.4,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// run_foot
	this.instance_5 = new lib.run_foot();
	this.instance_5.setTransform(18,126,1,1,38,0,0,9.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// run_leg
	this.instance_6 = new lib.run_leg();
	this.instance_6.setTransform(22.9,96.8,1,1,0,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// run_head_1
	this.instance_7 = new lib.rastr1();
	this.instance_7.setTransform(98.1,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 2
	this.instance_8 = new lib.run_head_2();
	this.instance_8.setTransform(71.5,78.1,1,1,67.1,0,0,-0.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-5.1,214.4,149.8);
p.frameBounds = [rect];


(lib.fall_man1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// run_plucho
	this.instance = new lib.run_plucho();
	this.instance.setTransform(48.3,87.4,1,1,0,0,0,-11.5,-5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// run_hand
	this.instance_1 = new lib.run_hand();
	this.instance_1.setTransform(71.6,101.3,1,1,90,0,0,-2.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// run_foot
	this.instance_2 = new lib.run_foot();
	this.instance_2.setTransform(-4.3,96.8,1,1,0,0,0,11,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// run_leg
	this.instance_3 = new lib.run_leg();
	this.instance_3.setTransform(18.9,84.8,1,1,60,0,0,1.5,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// run_body_1
	this.instance_4 = new lib.run_body_1();
	this.instance_4.setTransform(38.4,87.4,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// run_foot
	this.instance_5 = new lib.run_foot();
	this.instance_5.setTransform(18,126,1,1,38,0,0,9.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// run_leg
	this.instance_6 = new lib.run_leg();
	this.instance_6.setTransform(22.9,96.8,1,1,0,0,0,2,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// run_head_1
	this.instance_7 = new lib.fall_head_1();
	this.instance_7.setTransform(71.5,78.1,1,1,67.1,0,0,-0.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-12.7,215.5,157.4);
p.frameBounds = [rect];


(lib.dress_open_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress4();

	this.instance_1 = new lib.dress6();

	this.instance_2 = new lib.dress8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},3).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-95.5,-205.6,193,504), null, new cjs.Rectangle(-96.5,-189,191,487), null, new cjs.Rectangle(-96.4,-187.6,191,486), null];


(lib.dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress1();

	this.instance_1 = new lib.dress2();

	this.instance_2 = new lib.dress3();

	this.instance_3 = new lib.dress5();

	this.instance_4 = new lib.dress7();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-297.5,193,595);
p.frameBounds = [rect, new cjs.Rectangle(-96.1,-298.2,193,595), new cjs.Rectangle(-95,-298.5,193,595), null, new cjs.Rectangle(-96.6,-304.1,191,602), null, new cjs.Rectangle(-96.8,-303.6,191,602), rect=null, rect];


(lib.dress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress8();
	this.instance.setTransform(1.2,-39.7,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjxbpMgHrgiOIF+1SILQAAIFrVsMgEIAiDg");
	this.shape.setTransform(-0.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.4,-180.9,146.7,356.9);
p.frameBounds = [rect];


(lib.dress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress7();
	this.instance.setTransform(1.4,1.8,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq+CHMAH9gkIIF7gCMAIFAheMgDQAifIqwAKg");
	this.shape.setTransform(-2.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-219.2,141.1,436);
p.frameBounds = [rect];


(lib.dress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress6();
	this.instance.setTransform(1.2,-39,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGbwMgIFgizIF00zIKgADIGDWNMgD6Ahdg");
	this.shape.setTransform(0.4,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.2,-179.8,143.3,356.7);
p.frameBounds = [rect];


(lib.dress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress5();
	this.instance.setTransform(1.3,2.2,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArGBgMAGngjwIH6AAMAHsAkRMgEEAgGIp3AKg");
	this.shape.setTransform(-0.6,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.6,-221.9,142.2,438.7);
p.frameBounds = [rect];


(lib.dress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress4();
	this.instance.setTransform(-0.2,-33.2,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArGjcIFz5xIKjgMIF4YwMgEbAh1IpSAOg");
	this.shape.setTransform(-1.8,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.9,-191.8,142.4,376.4);
p.frameBounds = [rect];


(lib.dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress3();
	this.instance.setTransform(-0.6,0.7,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgC0AhqIoR/yMAGggjpIH2AKMAH1AjAMgDhAgZg");
	this.shape.setTransform(-1.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-216.3,142.1,432.4);
p.frameBounds = [rect];


(lib.dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress2();
	this.instance.setTransform(0.2,0.5,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgDSAhtMgH7ggUMAGbgi8IIWgJMAHqAjlIkGf0g");
	this.shape.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.3,-215.5,143.6,431.5);
p.frameBounds = [rect];


(lib.dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1();
	this.instance.setTransform(0.1,0,0.716,0.716,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgDGAiQMgIOgghMAGvgj7II5gDMAHBAhSMgD6AjNg");
	this.shape.setTransform(-1.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.1,-216.4,145.1,438.5);
p.frameBounds = [rect];


(lib.dot_outline_game_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dot_outline_game_5_mc();
	this.instance.setTransform(2.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.dot_outline_game_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.dot_outline_game_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.doll4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// red_light
	this.instance = new lib.red_light();
	this.instance.setTransform(47.7,-9.4,0.358,0.358);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},19).to({scaleX:0.36,scaleY:0.36},20).wait(1));

	// red_light
	this.instance_1 = new lib.red_light();
	this.instance_1.setTransform(-83.7,-9.6,0.358,0.358);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},19).to({scaleX:0.36,scaleY:0.36},20).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHZB1QhLgSgsgYIgLgGQBniNAcgVIABAAQBQghBKgBIADAAQBYABBoA0QAqAUAlAWQArAXAlAXQg3Ang2AbQh7A6hiAAQhVAAhfgVgAtpBFQgjgQghgWQgUgMgVgPQBDgrBcgtQBng1BYgBIACAAQBHAABNAcIAEABQABAEADABQAcAVBoCOQgTAMgZAKQgkANgyANQhhAVhUAAQhiAAh6g7g");
	mask.setTransform(-16.7,-8.4);

	// zrachok
	this.instance_2 = new lib.rastr3();
	this.instance_2.setTransform(-101.1,-24.3);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// doll_head1
	this.instance_3 = new lib.rastr2();
	this.instance_3.setTransform(-242,-228.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242,-228.4,460,439);
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


(lib.choicesOutlineGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// choices
	this.instance = new lib.choiceOutlineGame_mc();
	this.instance.setTransform(100,100);

	this.instance_1 = new lib.choiceOutlineGame_mc();
	this.instance_1.setTransform(-100,100);

	this.instance_2 = new lib.choiceOutlineGame_mc();
	this.instance_2.setTransform(100,-100);

	this.instance_3 = new lib.choiceOutlineGame_mc();
	this.instance_3.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195.5,-195.5,391,391);
p.frameBounds = [rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_6_img();
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.check_5_img();
	this.instance_2.setTransform(-50,-50);

	this.instance_3 = new lib.check_4_img();
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.check_3_img();
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.check_2_img();
	this.instance_5.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.012}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.bottom4_img();
	this.instance.setTransform(-66.5,-59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-83.4,141,145.8);
p.frameBounds = [rect];


(lib.bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.bottom3_img();
	this.instance.setTransform(-57.5,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-83.4,140,308.8);
p.frameBounds = [rect];


(lib.bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.bottom2_img();
	this.instance.setTransform(-57.5,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-83.4,127,306.8);
p.frameBounds = [rect];


(lib.bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top1.png
	this.instance = new lib.bottom1_img();
	this.instance.setTransform(-57.5,-58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(1.4,-54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-83.4,127,306.8);
p.frameBounds = [rect];


(lib.bottom_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom4();
	this.instance.setTransform(0,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar0KiIDW3AIPqAMIEpWEIsiCtg");
	this.shape.setTransform(4.6,76.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.1,-3.4,151.6,159.8);
p.frameBounds = [rect];


(lib.bottom_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom3();
	this.instance.setTransform(0,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Arku6IEZqRIL0gIIC/M7MAD9AiZIzADTg");
	this.shape.setTransform(12.7,160.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.4,-1.8,148.3,324.2);
p.frameBounds = [rect];


(lib.bottom_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom2();
	this.instance.setTransform(0,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqpuEIEQqUIKcAEIDuIdIAMRsICtWhIxqADg");
	this.shape.setTransform(7.9,152.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-3.3,136.6,312.3);
p.frameBounds = [rect];


(lib.bottom_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom1();
	this.instance.setTransform(0,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjRX9IjfjoMgEDghkIEdrBILtgJIDXJfMACGAlHIh/CNg");
	this.shape.setTransform(5.2,154.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-1.4,138.5,312.5);
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


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finish
	this.instance = new lib.finishing_tape_2_mc();
	this.instance.setTransform(620,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(1200,-191,1,1,0,0,180);

	this.instance_2 = new lib.background_2_img();
	this.instance_2.setTransform(-1199.9,-191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1199.9,-191,2400,384.5);
p.frameBounds = [rect];


(lib.animOptionOutlineGame_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,game:1,win:2,loss:3});

	// animation
	this.instance = new lib.fig4();
	this.instance.setTransform(0,4.9);

	this.instance_1 = new lib.rastr14_1();
	this.instance_1.setTransform(-1,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// animation
	this.instance_2 = new lib.candy_0();
	this.instance_2.setTransform(0.5,-0.5);

	this.instance_3 = new lib.rastr13_img();
	this.instance_3.setTransform(-254.5,-254.5);

	this.instance_4 = new lib.rastr15_img();
	this.instance_4.setTransform(-260.5,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// animation
	this.instance_5 = new lib.banka();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect, rect, rect, rect];


(lib.animOptionOutlineGame_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"game":1,"win":2,"loss":3});

	// animation
	this.instance = new lib.fig3();
	this.instance.setTransform(1.6,-22.8);

	this.instance_1 = new lib.rastr11_1();
	this.instance_1.setTransform(0.7,-22.9);

	this.instance_2 = new lib.rastr12_img();
	this.instance_2.setTransform(-262,-264.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// animation
	this.instance_3 = new lib.candy_0();
	this.instance_3.setTransform(0.5,-0.5);

	this.instance_4 = new lib.rastr10_img();
	this.instance_4.setTransform(-254.5,-254.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

	// animation
	this.instance_5 = new lib.banka();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect, rect, rect, rect];


(lib.animOptionOutlineGame_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"game":1,"win":2,"loss":3});

	// animation
	this.instance = new lib.fig2();
	this.instance.setTransform(2.5,-1.5);

	this.instance_1 = new lib.rastr81();
	this.instance_1.setTransform(1.5,-1.5);

	this.instance_2 = new lib.rastr9_img();
	this.instance_2.setTransform(-261.5,-261.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// animation
	this.instance_3 = new lib.candy_0();
	this.instance_3.setTransform(0.5,-0.5);

	this.instance_4 = new lib.rastr7_img();
	this.instance_4.setTransform(-254.5,-254.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

	// animation
	this.instance_5 = new lib.banka();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect, rect, rect, rect];


(lib.animOptionOutlineGame_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"game":1,"win":2,"loss":3});

	// animation
	this.instance = new lib.fig1();
	this.instance.setTransform(1.1,-46.6);

	this.instance_1 = new lib.rastr51();
	this.instance_1.setTransform(1.1,-46.6);

	this.instance_2 = new lib.rastr6_img();
	this.instance_2.setTransform(-261.5,-262.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// animation
	this.instance_3 = new lib.candy_0();
	this.instance_3.setTransform(0.5,-0.5);

	this.instance_4 = new lib.rastr4_img();
	this.instance_4.setTransform(-253.5,-254.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

	// animation
	this.instance_5 = new lib.banka();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-240,-70,480,140);
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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.forward_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.trackFreezeGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.background_3_mc();
	this.instance.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-800},1000).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-799.9,-191,2400,384.5);
p.frameBounds = [rect, new cjs.Rectangle(-801.1,-191,2400,384.5), new cjs.Rectangle(-802.3,-191,2400,384.5), new cjs.Rectangle(-803.5,-191,2400,384.5), new cjs.Rectangle(-804.7,-191,2400,384.5), new cjs.Rectangle(-805.9,-191,2400,384.5), new cjs.Rectangle(-807.1,-191,2400,384.5), new cjs.Rectangle(-808.3,-191,2400,384.5), new cjs.Rectangle(-809.5,-191,2400,384.5), new cjs.Rectangle(-810.7,-191,2400,384.5), new cjs.Rectangle(-811.9,-191,2400,384.5), new cjs.Rectangle(-813.1,-191,2400,384.5), new cjs.Rectangle(-814.3,-191,2400,384.5), new cjs.Rectangle(-815.5,-191,2400,384.5), new cjs.Rectangle(-816.7,-191,2400,384.5), new cjs.Rectangle(-817.9,-191,2400,384.5), new cjs.Rectangle(-819.1,-191,2400,384.5), new cjs.Rectangle(-820.3,-191,2400,384.5), new cjs.Rectangle(-821.5,-191,2400,384.5), new cjs.Rectangle(-822.7,-191,2400,384.5), new cjs.Rectangle(-823.9,-191,2400,384.5), new cjs.Rectangle(-825.1,-191,2400,384.5), new cjs.Rectangle(-826.3,-191,2400,384.5), new cjs.Rectangle(-827.5,-191,2400,384.5), new cjs.Rectangle(-828.7,-191,2400,384.5), new cjs.Rectangle(-829.9,-191,2400,384.5), new cjs.Rectangle(-831.1,-191,2400,384.5), new cjs.Rectangle(-832.3,-191,2400,384.5), new cjs.Rectangle(-833.5,-191,2400,384.5), new cjs.Rectangle(-834.7,-191,2400,384.5), new cjs.Rectangle(-835.9,-191,2400,384.5), new cjs.Rectangle(-837.1,-191,2400,384.5), new cjs.Rectangle(-838.3,-191,2400,384.5), new cjs.Rectangle(-839.5,-191,2400,384.5), new cjs.Rectangle(-840.7,-191,2400,384.5), new cjs.Rectangle(-841.9,-191,2400,384.5), new cjs.Rectangle(-843.1,-191,2400,384.5), new cjs.Rectangle(-844.3,-191,2400,384.5), new cjs.Rectangle(-845.5,-191,2400,384.5), new cjs.Rectangle(-846.7,-191,2400,384.5), new cjs.Rectangle(-847.9,-191,2400,384.5), new cjs.Rectangle(-849.1,-191,2400,384.5), new cjs.Rectangle(-850.3,-191,2400,384.5), new cjs.Rectangle(-851.5,-191,2400,384.5), new cjs.Rectangle(-852.7,-191,2400,384.5), new cjs.Rectangle(-853.9,-191,2400,384.5), new cjs.Rectangle(-855.1,-191,2400,384.5), new cjs.Rectangle(-856.3,-191,2400,384.5), new cjs.Rectangle(-857.5,-191,2400,384.5), new cjs.Rectangle(-858.7,-191,2400,384.5), new cjs.Rectangle(-859.9,-191,2400,384.5), new cjs.Rectangle(-861.1,-191,2400,384.5), new cjs.Rectangle(-862.3,-191,2400,384.5), new cjs.Rectangle(-863.5,-191,2400,384.5), new cjs.Rectangle(-864.7,-191,2400,384.5), new cjs.Rectangle(-865.9,-191,2400,384.5), new cjs.Rectangle(-867.1,-191,2400,384.5), new cjs.Rectangle(-868.3,-191,2400,384.5), new cjs.Rectangle(-869.5,-191,2400,384.5), new cjs.Rectangle(-870.7,-191,2400,384.5), new cjs.Rectangle(-871.9,-191,2400,384.5), new cjs.Rectangle(-873.1,-191,2400,384.5), new cjs.Rectangle(-874.3,-191,2400,384.5), new cjs.Rectangle(-875.5,-191,2400,384.5), new cjs.Rectangle(-876.7,-191,2400,384.5), new cjs.Rectangle(-877.9,-191,2400,384.5), new cjs.Rectangle(-879.1,-191,2400,384.5), new cjs.Rectangle(-880.3,-191,2400,384.5), new cjs.Rectangle(-881.5,-191,2400,384.5), new cjs.Rectangle(-882.7,-191,2400,384.5), new cjs.Rectangle(-883.9,-191,2400,384.5), new cjs.Rectangle(-885.1,-191,2400,384.5), new cjs.Rectangle(-886.3,-191,2400,384.5), new cjs.Rectangle(-887.5,-191,2400,384.5), new cjs.Rectangle(-888.7,-191,2400,384.5), new cjs.Rectangle(-889.9,-191,2400,384.5), new cjs.Rectangle(-891.1,-191,2400,384.5), new cjs.Rectangle(-892.3,-191,2400,384.5), new cjs.Rectangle(-893.5,-191,2400,384.5), new cjs.Rectangle(-894.7,-191,2400,384.5), new cjs.Rectangle(-895.9,-191,2400,384.5), new cjs.Rectangle(-897.1,-191,2400,384.5), new cjs.Rectangle(-898.3,-191,2400,384.5), new cjs.Rectangle(-899.5,-191,2400,384.5), new cjs.Rectangle(-900.7,-191,2400,384.5), new cjs.Rectangle(-901.9,-191,2400,384.5), new cjs.Rectangle(-903.1,-191,2400,384.5), new cjs.Rectangle(-904.3,-191,2400,384.5), new cjs.Rectangle(-905.5,-191,2400,384.5), new cjs.Rectangle(-906.7,-191,2400,384.5), new cjs.Rectangle(-907.9,-191,2400,384.5), new cjs.Rectangle(-909.1,-191,2400,384.5), new cjs.Rectangle(-910.3,-191,2400,384.5), new cjs.Rectangle(-911.5,-191,2400,384.5), new cjs.Rectangle(-912.7,-191,2400,384.5), new cjs.Rectangle(-913.9,-191,2400,384.5), new cjs.Rectangle(-915.1,-191,2400,384.5), new cjs.Rectangle(-916.3,-191,2400,384.5), new cjs.Rectangle(-917.5,-191,2400,384.5), new cjs.Rectangle(-918.7,-191,2400,384.5), new cjs.Rectangle(-919.9,-191,2400,384.5), new cjs.Rectangle(-921.1,-191,2400,384.5), new cjs.Rectangle(-922.3,-191,2400,384.5), new cjs.Rectangle(-923.5,-191,2400,384.5), new cjs.Rectangle(-924.7,-191,2400,384.5), new cjs.Rectangle(-925.9,-191,2400,384.5), new cjs.Rectangle(-927.1,-191,2400,384.5), new cjs.Rectangle(-928.3,-191,2400,384.5), new cjs.Rectangle(-929.5,-191,2400,384.5), new cjs.Rectangle(-930.7,-191,2400,384.5), new cjs.Rectangle(-931.9,-191,2400,384.5), new cjs.Rectangle(-933.1,-191,2400,384.5), new cjs.Rectangle(-934.3,-191,2400,384.5), new cjs.Rectangle(-935.5,-191,2400,384.5), new cjs.Rectangle(-936.7,-191,2400,384.5), new cjs.Rectangle(-937.9,-191,2400,384.5), new cjs.Rectangle(-939.1,-191,2400,384.5), new cjs.Rectangle(-940.3,-191,2400,384.5), new cjs.Rectangle(-941.5,-191,2400,384.5), new cjs.Rectangle(-942.7,-191,2400,384.5), new cjs.Rectangle(-943.9,-191,2400,384.5), new cjs.Rectangle(-945.1,-191,2400,384.5), new cjs.Rectangle(-946.3,-191,2400,384.5), new cjs.Rectangle(-947.5,-191,2400,384.5), new cjs.Rectangle(-948.7,-191,2400,384.5), new cjs.Rectangle(-949.9,-191,2400,384.5), new cjs.Rectangle(-951.1,-191,2400,384.5), new cjs.Rectangle(-952.3,-191,2400,384.5), new cjs.Rectangle(-953.5,-191,2400,384.5), new cjs.Rectangle(-954.7,-191,2400,384.5), new cjs.Rectangle(-955.9,-191,2400,384.5), new cjs.Rectangle(-957.1,-191,2400,384.5), new cjs.Rectangle(-958.3,-191,2400,384.5), new cjs.Rectangle(-959.5,-191,2400,384.5), new cjs.Rectangle(-960.7,-191,2400,384.5), new cjs.Rectangle(-961.9,-191,2400,384.5), new cjs.Rectangle(-963.1,-191,2400,384.5), new cjs.Rectangle(-964.3,-191,2400,384.5), new cjs.Rectangle(-965.5,-191,2400,384.5), new cjs.Rectangle(-966.7,-191,2400,384.5), new cjs.Rectangle(-967.9,-191,2400,384.5), new cjs.Rectangle(-969.1,-191,2400,384.5), new cjs.Rectangle(-970.3,-191,2400,384.5), new cjs.Rectangle(-971.5,-191,2400,384.5), new cjs.Rectangle(-972.7,-191,2400,384.5), new cjs.Rectangle(-973.9,-191,2400,384.5), new cjs.Rectangle(-975.1,-191,2400,384.5), new cjs.Rectangle(-976.3,-191,2400,384.5), new cjs.Rectangle(-977.5,-191,2400,384.5), new cjs.Rectangle(-978.7,-191,2400,384.5), new cjs.Rectangle(-979.9,-191,2400,384.5), new cjs.Rectangle(-981.1,-191,2400,384.5), new cjs.Rectangle(-982.3,-191,2400,384.5), new cjs.Rectangle(-983.5,-191,2400,384.5), new cjs.Rectangle(-984.7,-191,2400,384.5), new cjs.Rectangle(-985.9,-191,2400,384.5), new cjs.Rectangle(-987.1,-191,2400,384.5), new cjs.Rectangle(-988.3,-191,2400,384.5), new cjs.Rectangle(-989.5,-191,2400,384.5), new cjs.Rectangle(-990.7,-191,2400,384.5), new cjs.Rectangle(-991.9,-191,2400,384.5), new cjs.Rectangle(-993.1,-191,2400,384.5), new cjs.Rectangle(-994.3,-191,2400,384.5), new cjs.Rectangle(-995.5,-191,2400,384.5), new cjs.Rectangle(-996.7,-191,2400,384.5), new cjs.Rectangle(-997.9,-191,2400,384.5), new cjs.Rectangle(-999.1,-191,2400,384.5), new cjs.Rectangle(-1000.3,-191,2400,384.5), new cjs.Rectangle(-1001.5,-191,2400,384.5), new cjs.Rectangle(-1002.7,-191,2400,384.5), new cjs.Rectangle(-1003.9,-191,2400,384.5), new cjs.Rectangle(-1005.1,-191,2400,384.5), new cjs.Rectangle(-1006.3,-191,2400,384.5), new cjs.Rectangle(-1007.5,-191,2400,384.5), new cjs.Rectangle(-1008.7,-191,2400,384.5), new cjs.Rectangle(-1009.9,-191,2400,384.5), new cjs.Rectangle(-1011.1,-191,2400,384.5), new cjs.Rectangle(-1012.3,-191,2400,384.5), new cjs.Rectangle(-1013.5,-191,2400,384.5), new cjs.Rectangle(-1014.7,-191,2400,384.5), new cjs.Rectangle(-1015.9,-191,2400,384.5), new cjs.Rectangle(-1017.1,-191,2400,384.5), new cjs.Rectangle(-1018.3,-191,2400,384.5), new cjs.Rectangle(-1019.5,-191,2400,384.5), new cjs.Rectangle(-1020.7,-191,2400,384.5), new cjs.Rectangle(-1021.9,-191,2400,384.5), new cjs.Rectangle(-1023.1,-191,2400,384.5), new cjs.Rectangle(-1024.3,-191,2400,384.5), new cjs.Rectangle(-1025.5,-191,2400,384.5), new cjs.Rectangle(-1026.7,-191,2400,384.5), new cjs.Rectangle(-1027.9,-191,2400,384.5), new cjs.Rectangle(-1029.1,-191,2400,384.5), new cjs.Rectangle(-1030.3,-191,2400,384.5), new cjs.Rectangle(-1031.5,-191,2400,384.5), new cjs.Rectangle(-1032.7,-191,2400,384.5), new cjs.Rectangle(-1033.9,-191,2400,384.5), new cjs.Rectangle(-1035.1,-191,2400,384.5), new cjs.Rectangle(-1036.3,-191,2400,384.5), new cjs.Rectangle(-1037.5,-191,2400,384.5), new cjs.Rectangle(-1038.7,-191,2400,384.5), new cjs.Rectangle(-1039.9,-191,2400,384.5), new cjs.Rectangle(-1041.1,-191,2400,384.5), new cjs.Rectangle(-1042.3,-191,2400,384.5), new cjs.Rectangle(-1043.5,-191,2400,384.5), new cjs.Rectangle(-1044.7,-191,2400,384.5), new cjs.Rectangle(-1045.9,-191,2400,384.5), new cjs.Rectangle(-1047.1,-191,2400,384.5), new cjs.Rectangle(-1048.3,-191,2400,384.5), new cjs.Rectangle(-1049.5,-191,2400,384.5), new cjs.Rectangle(-1050.7,-191,2400,384.5), new cjs.Rectangle(-1051.9,-191,2400,384.5), new cjs.Rectangle(-1053.1,-191,2400,384.5), new cjs.Rectangle(-1054.3,-191,2400,384.5), new cjs.Rectangle(-1055.5,-191,2400,384.5), new cjs.Rectangle(-1056.7,-191,2400,384.5), new cjs.Rectangle(-1057.9,-191,2400,384.5), new cjs.Rectangle(-1059.1,-191,2400,384.5), new cjs.Rectangle(-1060.3,-191,2400,384.5), new cjs.Rectangle(-1061.5,-191,2400,384.5), new cjs.Rectangle(-1062.7,-191,2400,384.5), new cjs.Rectangle(-1063.9,-191,2400,384.5), new cjs.Rectangle(-1065.1,-191,2400,384.5), new cjs.Rectangle(-1066.3,-191,2400,384.5), new cjs.Rectangle(-1067.5,-191,2400,384.5), new cjs.Rectangle(-1068.7,-191,2400,384.5), new cjs.Rectangle(-1069.9,-191,2400,384.5), new cjs.Rectangle(-1071.1,-191,2400,384.5), new cjs.Rectangle(-1072.3,-191,2400,384.5), new cjs.Rectangle(-1073.5,-191,2400,384.5), new cjs.Rectangle(-1074.7,-191,2400,384.5), new cjs.Rectangle(-1075.9,-191,2400,384.5), new cjs.Rectangle(-1077.1,-191,2400,384.5), new cjs.Rectangle(-1078.3,-191,2400,384.5), new cjs.Rectangle(-1079.5,-191,2400,384.5), new cjs.Rectangle(-1080.7,-191,2400,384.5), new cjs.Rectangle(-1081.9,-191,2400,384.5), new cjs.Rectangle(-1083.1,-191,2400,384.5), new cjs.Rectangle(-1084.3,-191,2400,384.5), new cjs.Rectangle(-1085.5,-191,2400,384.5), new cjs.Rectangle(-1086.7,-191,2400,384.5), new cjs.Rectangle(-1087.9,-191,2400,384.5), new cjs.Rectangle(-1089.1,-191,2400,384.5), new cjs.Rectangle(-1090.3,-191,2400,384.5), new cjs.Rectangle(-1091.5,-191,2400,384.5), new cjs.Rectangle(-1092.7,-191,2400,384.5), new cjs.Rectangle(-1093.9,-191,2400,384.5), new cjs.Rectangle(-1095.1,-191,2400,384.5), new cjs.Rectangle(-1096.3,-191,2400,384.5), new cjs.Rectangle(-1097.5,-191,2400,384.5), new cjs.Rectangle(-1098.7,-191,2400,384.5), new cjs.Rectangle(-1099.9,-191,2400,384.5), new cjs.Rectangle(-1101.1,-191,2400,384.5), new cjs.Rectangle(-1102.3,-191,2400,384.5), new cjs.Rectangle(-1103.5,-191,2400,384.5), new cjs.Rectangle(-1104.7,-191,2400,384.5), new cjs.Rectangle(-1105.9,-191,2400,384.5), new cjs.Rectangle(-1107.1,-191,2400,384.5), new cjs.Rectangle(-1108.3,-191,2400,384.5), new cjs.Rectangle(-1109.5,-191,2400,384.5), new cjs.Rectangle(-1110.7,-191,2400,384.5), new cjs.Rectangle(-1111.9,-191,2400,384.5), new cjs.Rectangle(-1113.1,-191,2400,384.5), new cjs.Rectangle(-1114.3,-191,2400,384.5), new cjs.Rectangle(-1115.5,-191,2400,384.5), new cjs.Rectangle(-1116.7,-191,2400,384.5), new cjs.Rectangle(-1117.9,-191,2400,384.5), new cjs.Rectangle(-1119.1,-191,2400,384.5), new cjs.Rectangle(-1120.3,-191,2400,384.5), new cjs.Rectangle(-1121.5,-191,2400,384.5), new cjs.Rectangle(-1122.7,-191,2400,384.5), new cjs.Rectangle(-1123.9,-191,2400,384.5), new cjs.Rectangle(-1125.1,-191,2400,384.5), new cjs.Rectangle(-1126.3,-191,2400,384.5), new cjs.Rectangle(-1127.5,-191,2400,384.5), new cjs.Rectangle(-1128.7,-191,2400,384.5), new cjs.Rectangle(-1129.9,-191,2400,384.5), new cjs.Rectangle(-1131.1,-191,2400,384.5), new cjs.Rectangle(-1132.3,-191,2400,384.5), new cjs.Rectangle(-1133.5,-191,2400,384.5), new cjs.Rectangle(-1134.7,-191,2400,384.5), new cjs.Rectangle(-1135.9,-191,2400,384.5), new cjs.Rectangle(-1137.1,-191,2400,384.5), new cjs.Rectangle(-1138.3,-191,2400,384.5), new cjs.Rectangle(-1139.5,-191,2400,384.5), new cjs.Rectangle(-1140.7,-191,2400,384.5), new cjs.Rectangle(-1141.9,-191,2400,384.5), new cjs.Rectangle(-1143.1,-191,2400,384.5), new cjs.Rectangle(-1144.3,-191,2400,384.5), new cjs.Rectangle(-1145.5,-191,2400,384.5), new cjs.Rectangle(-1146.7,-191,2400,384.5), new cjs.Rectangle(-1147.9,-191,2400,384.5), new cjs.Rectangle(-1149.1,-191,2400,384.5), new cjs.Rectangle(-1150.3,-191,2400,384.5), new cjs.Rectangle(-1151.5,-191,2400,384.5), new cjs.Rectangle(-1152.7,-191,2400,384.5), new cjs.Rectangle(-1153.9,-191,2400,384.5), new cjs.Rectangle(-1155.1,-191,2400,384.5), new cjs.Rectangle(-1156.3,-191,2400,384.5), new cjs.Rectangle(-1157.5,-191,2400,384.5), new cjs.Rectangle(-1158.7,-191,2400,384.5), new cjs.Rectangle(-1159.9,-191,2400,384.5), new cjs.Rectangle(-1161.1,-191,2400,384.5), new cjs.Rectangle(-1162.3,-191,2400,384.5), new cjs.Rectangle(-1163.5,-191,2400,384.5), new cjs.Rectangle(-1164.7,-191,2400,384.5), new cjs.Rectangle(-1165.9,-191,2400,384.5), new cjs.Rectangle(-1167.1,-191,2400,384.5), new cjs.Rectangle(-1168.3,-191,2400,384.5), new cjs.Rectangle(-1169.5,-191,2400,384.5), new cjs.Rectangle(-1170.7,-191,2400,384.5), new cjs.Rectangle(-1171.9,-191,2400,384.5), new cjs.Rectangle(-1173.1,-191,2400,384.5), new cjs.Rectangle(-1174.3,-191,2400,384.5), new cjs.Rectangle(-1175.5,-191,2400,384.5), new cjs.Rectangle(-1176.7,-191,2400,384.5), new cjs.Rectangle(-1177.9,-191,2400,384.5), new cjs.Rectangle(-1179.1,-191,2400,384.5), new cjs.Rectangle(-1180.3,-191,2400,384.5), new cjs.Rectangle(-1181.5,-191,2400,384.5), new cjs.Rectangle(-1182.7,-191,2400,384.5), new cjs.Rectangle(-1183.9,-191,2400,384.5), new cjs.Rectangle(-1185.1,-191,2400,384.5), new cjs.Rectangle(-1186.3,-191,2400,384.5), new cjs.Rectangle(-1187.5,-191,2400,384.5), new cjs.Rectangle(-1188.7,-191,2400,384.5), new cjs.Rectangle(-1189.9,-191,2400,384.5), new cjs.Rectangle(-1191.1,-191,2400,384.5), new cjs.Rectangle(-1192.3,-191,2400,384.5), new cjs.Rectangle(-1193.5,-191,2400,384.5), new cjs.Rectangle(-1194.7,-191,2400,384.5), new cjs.Rectangle(-1195.9,-191,2400,384.5), new cjs.Rectangle(-1197.1,-191,2400,384.5), new cjs.Rectangle(-1198.3,-191,2400,384.5), new cjs.Rectangle(-1199.5,-191,2400,384.5), new cjs.Rectangle(-1200.7,-191,2400,384.5), new cjs.Rectangle(-1201.9,-191,2400,384.5), new cjs.Rectangle(-1203.1,-191,2400,384.5), new cjs.Rectangle(-1204.3,-191,2400,384.5), new cjs.Rectangle(-1205.5,-191,2400,384.5), new cjs.Rectangle(-1206.7,-191,2400,384.5), new cjs.Rectangle(-1207.9,-191,2400,384.5), new cjs.Rectangle(-1209.1,-191,2400,384.5), new cjs.Rectangle(-1210.3,-191,2400,384.5), new cjs.Rectangle(-1211.5,-191,2400,384.5), new cjs.Rectangle(-1212.7,-191,2400,384.5), new cjs.Rectangle(-1213.9,-191,2400,384.5), new cjs.Rectangle(-1215.1,-191,2400,384.5), new cjs.Rectangle(-1216.3,-191,2400,384.5), new cjs.Rectangle(-1217.5,-191,2400,384.5), new cjs.Rectangle(-1218.7,-191,2400,384.5), new cjs.Rectangle(-1219.9,-191,2400,384.5), new cjs.Rectangle(-1221.1,-191,2400,384.5), new cjs.Rectangle(-1222.3,-191,2400,384.5), new cjs.Rectangle(-1223.5,-191,2400,384.5), new cjs.Rectangle(-1224.7,-191,2400,384.5), new cjs.Rectangle(-1225.9,-191,2400,384.5), new cjs.Rectangle(-1227.1,-191,2400,384.5), new cjs.Rectangle(-1228.3,-191,2400,384.5), new cjs.Rectangle(-1229.5,-191,2400,384.5), new cjs.Rectangle(-1230.7,-191,2400,384.5), new cjs.Rectangle(-1231.9,-191,2400,384.5), new cjs.Rectangle(-1233.1,-191,2400,384.5), new cjs.Rectangle(-1234.3,-191,2400,384.5), new cjs.Rectangle(-1235.5,-191,2400,384.5), new cjs.Rectangle(-1236.7,-191,2400,384.5), new cjs.Rectangle(-1237.9,-191,2400,384.5), new cjs.Rectangle(-1239.1,-191,2400,384.5), new cjs.Rectangle(-1240.3,-191,2400,384.5), new cjs.Rectangle(-1241.5,-191,2400,384.5), new cjs.Rectangle(-1242.7,-191,2400,384.5), new cjs.Rectangle(-1243.9,-191,2400,384.5), new cjs.Rectangle(-1245.1,-191,2400,384.5), new cjs.Rectangle(-1246.3,-191,2400,384.5), new cjs.Rectangle(-1247.5,-191,2400,384.5), new cjs.Rectangle(-1248.7,-191,2400,384.5), new cjs.Rectangle(-1249.9,-191,2400,384.5), new cjs.Rectangle(-1251.1,-191,2400,384.5), new cjs.Rectangle(-1252.3,-191,2400,384.5), new cjs.Rectangle(-1253.5,-191,2400,384.5), new cjs.Rectangle(-1254.7,-191,2400,384.5), new cjs.Rectangle(-1255.9,-191,2400,384.5), new cjs.Rectangle(-1257.1,-191,2400,384.5), new cjs.Rectangle(-1258.3,-191,2400,384.5), new cjs.Rectangle(-1259.5,-191,2400,384.5), new cjs.Rectangle(-1260.7,-191,2400,384.5), new cjs.Rectangle(-1261.9,-191,2400,384.5), new cjs.Rectangle(-1263.1,-191,2400,384.5), new cjs.Rectangle(-1264.3,-191,2400,384.5), new cjs.Rectangle(-1265.5,-191,2400,384.5), new cjs.Rectangle(-1266.7,-191,2400,384.5), new cjs.Rectangle(-1267.9,-191,2400,384.5), new cjs.Rectangle(-1269.1,-191,2400,384.5), new cjs.Rectangle(-1270.3,-191,2400,384.5), new cjs.Rectangle(-1271.5,-191,2400,384.5), new cjs.Rectangle(-1272.7,-191,2400,384.5), new cjs.Rectangle(-1273.9,-191,2400,384.5), new cjs.Rectangle(-1275.1,-191,2400,384.5), new cjs.Rectangle(-1276.3,-191,2400,384.5), new cjs.Rectangle(-1277.5,-191,2400,384.5), new cjs.Rectangle(-1278.7,-191,2400,384.5), new cjs.Rectangle(-1279.9,-191,2400,384.5), new cjs.Rectangle(-1281.1,-191,2400,384.5), new cjs.Rectangle(-1282.3,-191,2400,384.5), new cjs.Rectangle(-1283.5,-191,2400,384.5), new cjs.Rectangle(-1284.7,-191,2400,384.5), new cjs.Rectangle(-1285.9,-191,2400,384.5), new cjs.Rectangle(-1287.1,-191,2400,384.5), new cjs.Rectangle(-1288.3,-191,2400,384.5), new cjs.Rectangle(-1289.5,-191,2400,384.5), new cjs.Rectangle(-1290.7,-191,2400,384.5), new cjs.Rectangle(-1291.9,-191,2400,384.5), new cjs.Rectangle(-1293.1,-191,2400,384.5), new cjs.Rectangle(-1294.3,-191,2400,384.5), new cjs.Rectangle(-1295.5,-191,2400,384.5), new cjs.Rectangle(-1296.7,-191,2400,384.5), new cjs.Rectangle(-1297.9,-191,2400,384.5), new cjs.Rectangle(-1299.1,-191,2400,384.5), new cjs.Rectangle(-1300.3,-191,2400,384.5), new cjs.Rectangle(-1301.5,-191,2400,384.5), new cjs.Rectangle(-1302.7,-191,2400,384.5), new cjs.Rectangle(-1303.9,-191,2400,384.5), new cjs.Rectangle(-1305.1,-191,2400,384.5), new cjs.Rectangle(-1306.3,-191,2400,384.5), new cjs.Rectangle(-1307.5,-191,2400,384.5), new cjs.Rectangle(-1308.7,-191,2400,384.5), new cjs.Rectangle(-1309.9,-191,2400,384.5), new cjs.Rectangle(-1311.1,-191,2400,384.5), new cjs.Rectangle(-1312.3,-191,2400,384.5), new cjs.Rectangle(-1313.5,-191,2400,384.5), new cjs.Rectangle(-1314.7,-191,2400,384.5), new cjs.Rectangle(-1315.9,-191,2400,384.5), new cjs.Rectangle(-1317.1,-191,2400,384.5), new cjs.Rectangle(-1318.3,-191,2400,384.5), new cjs.Rectangle(-1319.5,-191,2400,384.5), new cjs.Rectangle(-1320.7,-191,2400,384.5), new cjs.Rectangle(-1321.9,-191,2400,384.5), new cjs.Rectangle(-1323.1,-191,2400,384.5), new cjs.Rectangle(-1324.3,-191,2400,384.5), new cjs.Rectangle(-1325.5,-191,2400,384.5), new cjs.Rectangle(-1326.7,-191,2400,384.5), new cjs.Rectangle(-1327.9,-191,2400,384.5), new cjs.Rectangle(-1329.1,-191,2400,384.5), new cjs.Rectangle(-1330.3,-191,2400,384.5), new cjs.Rectangle(-1331.5,-191,2400,384.5), new cjs.Rectangle(-1332.7,-191,2400,384.5), new cjs.Rectangle(-1333.9,-191,2400,384.5), new cjs.Rectangle(-1335.1,-191,2400,384.5), new cjs.Rectangle(-1336.3,-191,2400,384.5), new cjs.Rectangle(-1337.5,-191,2400,384.5), new cjs.Rectangle(-1338.7,-191,2400,384.5), new cjs.Rectangle(-1339.9,-191,2400,384.5), new cjs.Rectangle(-1341.1,-191,2400,384.5), new cjs.Rectangle(-1342.3,-191,2400,384.5), new cjs.Rectangle(-1343.5,-191,2400,384.5), new cjs.Rectangle(-1344.7,-191,2400,384.5), new cjs.Rectangle(-1345.9,-191,2400,384.5), new cjs.Rectangle(-1347.1,-191,2400,384.5), new cjs.Rectangle(-1348.3,-191,2400,384.5), new cjs.Rectangle(-1349.5,-191,2400,384.5), new cjs.Rectangle(-1350.7,-191,2400,384.5), new cjs.Rectangle(-1351.9,-191,2400,384.5), new cjs.Rectangle(-1353.1,-191,2400,384.5), new cjs.Rectangle(-1354.3,-191,2400,384.5), new cjs.Rectangle(-1355.5,-191,2400,384.5), new cjs.Rectangle(-1356.7,-191,2400,384.5), new cjs.Rectangle(-1357.9,-191,2400,384.5), new cjs.Rectangle(-1359.1,-191,2400,384.5), new cjs.Rectangle(-1360.3,-191,2400,384.5), new cjs.Rectangle(-1361.5,-191,2400,384.5), new cjs.Rectangle(-1362.7,-191,2400,384.5), new cjs.Rectangle(-1363.9,-191,2400,384.5), new cjs.Rectangle(-1365.1,-191,2400,384.5), new cjs.Rectangle(-1366.3,-191,2400,384.5), new cjs.Rectangle(-1367.5,-191,2400,384.5), new cjs.Rectangle(-1368.7,-191,2400,384.5), new cjs.Rectangle(-1369.9,-191,2400,384.5), new cjs.Rectangle(-1371.1,-191,2400,384.5), new cjs.Rectangle(-1372.3,-191,2400,384.5), new cjs.Rectangle(-1373.5,-191,2400,384.5), new cjs.Rectangle(-1374.7,-191,2400,384.5), new cjs.Rectangle(-1375.9,-191,2400,384.5), new cjs.Rectangle(-1377.1,-191,2400,384.5), new cjs.Rectangle(-1378.3,-191,2400,384.5), new cjs.Rectangle(-1379.5,-191,2400,384.5), new cjs.Rectangle(-1380.7,-191,2400,384.5), new cjs.Rectangle(-1381.9,-191,2400,384.5), new cjs.Rectangle(-1383.1,-191,2400,384.5), new cjs.Rectangle(-1384.3,-191,2400,384.5), new cjs.Rectangle(-1385.5,-191,2400,384.5), new cjs.Rectangle(-1386.7,-191,2400,384.5), new cjs.Rectangle(-1387.9,-191,2400,384.5), new cjs.Rectangle(-1389.1,-191,2400,384.5), new cjs.Rectangle(-1390.3,-191,2400,384.5), new cjs.Rectangle(-1391.5,-191,2400,384.5), new cjs.Rectangle(-1392.7,-191,2400,384.5), new cjs.Rectangle(-1393.9,-191,2400,384.5), new cjs.Rectangle(-1395.1,-191,2400,384.5), new cjs.Rectangle(-1396.3,-191,2400,384.5), new cjs.Rectangle(-1397.5,-191,2400,384.5), new cjs.Rectangle(-1398.7,-191,2400,384.5), new cjs.Rectangle(-1399.9,-191,2400,384.5), new cjs.Rectangle(-1401.1,-191,2400,384.5), new cjs.Rectangle(-1402.3,-191,2400,384.5), new cjs.Rectangle(-1403.5,-191,2400,384.5), new cjs.Rectangle(-1404.7,-191,2400,384.5), new cjs.Rectangle(-1405.9,-191,2400,384.5), new cjs.Rectangle(-1407.1,-191,2400,384.5), new cjs.Rectangle(-1408.3,-191,2400,384.5), new cjs.Rectangle(-1409.5,-191,2400,384.5), new cjs.Rectangle(-1410.7,-191,2400,384.5), new cjs.Rectangle(-1411.9,-191,2400,384.5), new cjs.Rectangle(-1413.1,-191,2400,384.5), new cjs.Rectangle(-1414.3,-191,2400,384.5), new cjs.Rectangle(-1415.5,-191,2400,384.5), new cjs.Rectangle(-1416.7,-191,2400,384.5), new cjs.Rectangle(-1417.9,-191,2400,384.5), new cjs.Rectangle(-1419.1,-191,2400,384.5), new cjs.Rectangle(-1420.3,-191,2400,384.5), new cjs.Rectangle(-1421.5,-191,2400,384.5), new cjs.Rectangle(-1422.7,-191,2400,384.5), new cjs.Rectangle(-1423.9,-191,2400,384.5), new cjs.Rectangle(-1425.1,-191,2400,384.5), new cjs.Rectangle(-1426.3,-191,2400,384.5), new cjs.Rectangle(-1427.5,-191,2400,384.5), new cjs.Rectangle(-1428.7,-191,2400,384.5), new cjs.Rectangle(-1429.9,-191,2400,384.5), new cjs.Rectangle(-1431.1,-191,2400,384.5), new cjs.Rectangle(-1432.3,-191,2400,384.5), new cjs.Rectangle(-1433.5,-191,2400,384.5), new cjs.Rectangle(-1434.7,-191,2400,384.5), new cjs.Rectangle(-1435.9,-191,2400,384.5), new cjs.Rectangle(-1437.1,-191,2400,384.5), new cjs.Rectangle(-1438.3,-191,2400,384.5), new cjs.Rectangle(-1439.5,-191,2400,384.5), new cjs.Rectangle(-1440.7,-191,2400,384.5), new cjs.Rectangle(-1441.9,-191,2400,384.5), new cjs.Rectangle(-1443.1,-191,2400,384.5), new cjs.Rectangle(-1444.3,-191,2400,384.5), new cjs.Rectangle(-1445.5,-191,2400,384.5), new cjs.Rectangle(-1446.7,-191,2400,384.5), new cjs.Rectangle(-1447.9,-191,2400,384.5), new cjs.Rectangle(-1449.1,-191,2400,384.5), new cjs.Rectangle(-1450.3,-191,2400,384.5), new cjs.Rectangle(-1451.5,-191,2400,384.5), new cjs.Rectangle(-1452.7,-191,2400,384.5), new cjs.Rectangle(-1453.9,-191,2400,384.5), new cjs.Rectangle(-1455.1,-191,2400,384.5), new cjs.Rectangle(-1456.3,-191,2400,384.5), new cjs.Rectangle(-1457.5,-191,2400,384.5), new cjs.Rectangle(-1458.7,-191,2400,384.5), new cjs.Rectangle(-1459.9,-191,2400,384.5), new cjs.Rectangle(-1461.1,-191,2400,384.5), new cjs.Rectangle(-1462.3,-191,2400,384.5), new cjs.Rectangle(-1463.5,-191,2400,384.5), new cjs.Rectangle(-1464.7,-191,2400,384.5), new cjs.Rectangle(-1465.9,-191,2400,384.5), new cjs.Rectangle(-1467.1,-191,2400,384.5), new cjs.Rectangle(-1468.3,-191,2400,384.5), new cjs.Rectangle(-1469.5,-191,2400,384.5), new cjs.Rectangle(-1470.7,-191,2400,384.5), new cjs.Rectangle(-1471.9,-191,2400,384.5), new cjs.Rectangle(-1473.1,-191,2400,384.5), new cjs.Rectangle(-1474.3,-191,2400,384.5), new cjs.Rectangle(-1475.5,-191,2400,384.5), new cjs.Rectangle(-1476.7,-191,2400,384.5), new cjs.Rectangle(-1477.9,-191,2400,384.5), new cjs.Rectangle(-1479.1,-191,2400,384.5), new cjs.Rectangle(-1480.3,-191,2400,384.5), new cjs.Rectangle(-1481.5,-191,2400,384.5), new cjs.Rectangle(-1482.7,-191,2400,384.5), new cjs.Rectangle(-1483.9,-191,2400,384.5), new cjs.Rectangle(-1485.1,-191,2400,384.5), new cjs.Rectangle(-1486.3,-191,2400,384.5), new cjs.Rectangle(-1487.5,-191,2400,384.5), new cjs.Rectangle(-1488.7,-191,2400,384.5), new cjs.Rectangle(-1489.9,-191,2400,384.5), new cjs.Rectangle(-1491.1,-191,2400,384.5), new cjs.Rectangle(-1492.3,-191,2400,384.5), new cjs.Rectangle(-1493.5,-191,2400,384.5), new cjs.Rectangle(-1494.7,-191,2400,384.5), new cjs.Rectangle(-1495.9,-191,2400,384.5), new cjs.Rectangle(-1497.1,-191,2400,384.5), new cjs.Rectangle(-1498.3,-191,2400,384.5), new cjs.Rectangle(-1499.5,-191,2400,384.5), new cjs.Rectangle(-1500.7,-191,2400,384.5), new cjs.Rectangle(-1501.9,-191,2400,384.5), new cjs.Rectangle(-1503.1,-191,2400,384.5), new cjs.Rectangle(-1504.3,-191,2400,384.5), new cjs.Rectangle(-1505.5,-191,2400,384.5), new cjs.Rectangle(-1506.7,-191,2400,384.5), new cjs.Rectangle(-1507.9,-191,2400,384.5), new cjs.Rectangle(-1509.1,-191,2400,384.5), new cjs.Rectangle(-1510.3,-191,2400,384.5), new cjs.Rectangle(-1511.5,-191,2400,384.5), new cjs.Rectangle(-1512.7,-191,2400,384.5), new cjs.Rectangle(-1513.9,-191,2400,384.5), new cjs.Rectangle(-1515.1,-191,2400,384.5), new cjs.Rectangle(-1516.3,-191,2400,384.5), new cjs.Rectangle(-1517.5,-191,2400,384.5), new cjs.Rectangle(-1518.7,-191,2400,384.5), new cjs.Rectangle(-1519.9,-191,2400,384.5), new cjs.Rectangle(-1521.1,-191,2400,384.5), new cjs.Rectangle(-1522.3,-191,2400,384.5), new cjs.Rectangle(-1523.5,-191,2400,384.5), new cjs.Rectangle(-1524.7,-191,2400,384.5), new cjs.Rectangle(-1525.9,-191,2400,384.5), new cjs.Rectangle(-1527.1,-191,2400,384.5), new cjs.Rectangle(-1528.3,-191,2400,384.5), new cjs.Rectangle(-1529.5,-191,2400,384.5), new cjs.Rectangle(-1530.7,-191,2400,384.5), new cjs.Rectangle(-1531.9,-191,2400,384.5), new cjs.Rectangle(-1533.1,-191,2400,384.5), new cjs.Rectangle(-1534.3,-191,2400,384.5), new cjs.Rectangle(-1535.5,-191,2400,384.5), new cjs.Rectangle(-1536.7,-191,2400,384.5), new cjs.Rectangle(-1537.9,-191,2400,384.5), new cjs.Rectangle(-1539.1,-191,2400,384.5), new cjs.Rectangle(-1540.3,-191,2400,384.5), new cjs.Rectangle(-1541.5,-191,2400,384.5), new cjs.Rectangle(-1542.7,-191,2400,384.5), new cjs.Rectangle(-1543.9,-191,2400,384.5), new cjs.Rectangle(-1545.1,-191,2400,384.5), new cjs.Rectangle(-1546.3,-191,2400,384.5), new cjs.Rectangle(-1547.5,-191,2400,384.5), new cjs.Rectangle(-1548.7,-191,2400,384.5), new cjs.Rectangle(-1549.9,-191,2400,384.5), new cjs.Rectangle(-1551.1,-191,2400,384.5), new cjs.Rectangle(-1552.3,-191,2400,384.5), new cjs.Rectangle(-1553.5,-191,2400,384.5), new cjs.Rectangle(-1554.7,-191,2400,384.5), new cjs.Rectangle(-1555.9,-191,2400,384.5), new cjs.Rectangle(-1557.1,-191,2400,384.5), new cjs.Rectangle(-1558.3,-191,2400,384.5), new cjs.Rectangle(-1559.5,-191,2400,384.5), new cjs.Rectangle(-1560.7,-191,2400,384.5), new cjs.Rectangle(-1561.9,-191,2400,384.5), new cjs.Rectangle(-1563.1,-191,2400,384.5), new cjs.Rectangle(-1564.3,-191,2400,384.5), new cjs.Rectangle(-1565.5,-191,2400,384.5), new cjs.Rectangle(-1566.7,-191,2400,384.5), new cjs.Rectangle(-1567.9,-191,2400,384.5), new cjs.Rectangle(-1569.1,-191,2400,384.5), new cjs.Rectangle(-1570.3,-191,2400,384.5), new cjs.Rectangle(-1571.5,-191,2400,384.5), new cjs.Rectangle(-1572.7,-191,2400,384.5), new cjs.Rectangle(-1573.9,-191,2400,384.5), new cjs.Rectangle(-1575.1,-191,2400,384.5), new cjs.Rectangle(-1576.3,-191,2400,384.5), new cjs.Rectangle(-1577.5,-191,2400,384.5), new cjs.Rectangle(-1578.7,-191,2400,384.5), new cjs.Rectangle(-1579.9,-191,2400,384.5), new cjs.Rectangle(-1581.1,-191,2400,384.5), new cjs.Rectangle(-1582.3,-191,2400,384.5), new cjs.Rectangle(-1583.5,-191,2400,384.5), new cjs.Rectangle(-1584.7,-191,2400,384.5), new cjs.Rectangle(-1585.9,-191,2400,384.5), new cjs.Rectangle(-1587.1,-191,2400,384.5), new cjs.Rectangle(-1588.3,-191,2400,384.5), new cjs.Rectangle(-1589.5,-191,2400,384.5), new cjs.Rectangle(-1590.7,-191,2400,384.5), new cjs.Rectangle(-1591.9,-191,2400,384.5), new cjs.Rectangle(-1593.1,-191,2400,384.5), new cjs.Rectangle(-1594.3,-191,2400,384.5), new cjs.Rectangle(-1595.5,-191,2400,384.5), new cjs.Rectangle(-1596.7,-191,2400,384.5), new cjs.Rectangle(-1597.9,-191,2400,384.5), new cjs.Rectangle(-1599.1,-191,2400,384.5), new cjs.Rectangle(-1600.3,-191,2400,384.5), new cjs.Rectangle(-1601.5,-191,2400,384.5), new cjs.Rectangle(-1602.7,-191,2400,384.5), new cjs.Rectangle(-1603.9,-191,2400,384.5), new cjs.Rectangle(-1605.1,-191,2400,384.5), new cjs.Rectangle(-1606.3,-191,2400,384.5), new cjs.Rectangle(-1607.5,-191,2400,384.5), new cjs.Rectangle(-1608.7,-191,2400,384.5), new cjs.Rectangle(-1609.9,-191,2400,384.5), new cjs.Rectangle(-1611.1,-191,2400,384.5), new cjs.Rectangle(-1612.3,-191,2400,384.5), new cjs.Rectangle(-1613.5,-191,2400,384.5), new cjs.Rectangle(-1614.7,-191,2400,384.5), new cjs.Rectangle(-1615.9,-191,2400,384.5), new cjs.Rectangle(-1617.1,-191,2400,384.5), new cjs.Rectangle(-1618.3,-191,2400,384.5), new cjs.Rectangle(-1619.5,-191,2400,384.5), new cjs.Rectangle(-1620.7,-191,2400,384.5), new cjs.Rectangle(-1621.9,-191,2400,384.5), new cjs.Rectangle(-1623.1,-191,2400,384.5), new cjs.Rectangle(-1624.3,-191,2400,384.5), new cjs.Rectangle(-1625.5,-191,2400,384.5), new cjs.Rectangle(-1626.7,-191,2400,384.5), new cjs.Rectangle(-1627.9,-191,2400,384.5), new cjs.Rectangle(-1629.1,-191,2400,384.5), new cjs.Rectangle(-1630.3,-191,2400,384.5), new cjs.Rectangle(-1631.5,-191,2400,384.5), new cjs.Rectangle(-1632.7,-191,2400,384.5), new cjs.Rectangle(-1633.9,-191,2400,384.5), new cjs.Rectangle(-1635.1,-191,2400,384.5), new cjs.Rectangle(-1636.3,-191,2400,384.5), new cjs.Rectangle(-1637.5,-191,2400,384.5), new cjs.Rectangle(-1638.7,-191,2400,384.5), new cjs.Rectangle(-1639.9,-191,2400,384.5), new cjs.Rectangle(-1641.1,-191,2400,384.5), new cjs.Rectangle(-1642.3,-191,2400,384.5), new cjs.Rectangle(-1643.5,-191,2400,384.5), new cjs.Rectangle(-1644.7,-191,2400,384.5), new cjs.Rectangle(-1645.9,-191,2400,384.5), new cjs.Rectangle(-1647.1,-191,2400,384.5), new cjs.Rectangle(-1648.3,-191,2400,384.5), new cjs.Rectangle(-1649.5,-191,2400,384.5), new cjs.Rectangle(-1650.7,-191,2400,384.5), new cjs.Rectangle(-1651.9,-191,2400,384.5), new cjs.Rectangle(-1653.1,-191,2400,384.5), new cjs.Rectangle(-1654.3,-191,2400,384.5), new cjs.Rectangle(-1655.5,-191,2400,384.5), new cjs.Rectangle(-1656.7,-191,2400,384.5), new cjs.Rectangle(-1657.9,-191,2400,384.5), new cjs.Rectangle(-1659.1,-191,2400,384.5), new cjs.Rectangle(-1660.3,-191,2400,384.5), new cjs.Rectangle(-1661.5,-191,2400,384.5), new cjs.Rectangle(-1662.7,-191,2400,384.5), new cjs.Rectangle(-1663.9,-191,2400,384.5), new cjs.Rectangle(-1665.1,-191,2400,384.5), new cjs.Rectangle(-1666.3,-191,2400,384.5), new cjs.Rectangle(-1667.5,-191,2400,384.5), new cjs.Rectangle(-1668.7,-191,2400,384.5), new cjs.Rectangle(-1669.9,-191,2400,384.5), new cjs.Rectangle(-1671.1,-191,2400,384.5), new cjs.Rectangle(-1672.3,-191,2400,384.5), new cjs.Rectangle(-1673.5,-191,2400,384.5), new cjs.Rectangle(-1674.7,-191,2400,384.5), new cjs.Rectangle(-1675.9,-191,2400,384.5), new cjs.Rectangle(-1677.1,-191,2400,384.5), new cjs.Rectangle(-1678.3,-191,2400,384.5), new cjs.Rectangle(-1679.5,-191,2400,384.5), new cjs.Rectangle(-1680.7,-191,2400,384.5), new cjs.Rectangle(-1681.9,-191,2400,384.5), new cjs.Rectangle(-1683.1,-191,2400,384.5), new cjs.Rectangle(-1684.3,-191,2400,384.5), new cjs.Rectangle(-1685.5,-191,2400,384.5), new cjs.Rectangle(-1686.7,-191,2400,384.5), new cjs.Rectangle(-1687.9,-191,2400,384.5), new cjs.Rectangle(-1689.1,-191,2400,384.5), new cjs.Rectangle(-1690.3,-191,2400,384.5), new cjs.Rectangle(-1691.5,-191,2400,384.5), new cjs.Rectangle(-1692.7,-191,2400,384.5), new cjs.Rectangle(-1693.9,-191,2400,384.5), new cjs.Rectangle(-1695.1,-191,2400,384.5), new cjs.Rectangle(-1696.3,-191,2400,384.5), new cjs.Rectangle(-1697.5,-191,2400,384.5), new cjs.Rectangle(-1698.7,-191,2400,384.5), new cjs.Rectangle(-1699.9,-191,2400,384.5), new cjs.Rectangle(-1701.1,-191,2400,384.5), new cjs.Rectangle(-1702.3,-191,2400,384.5), new cjs.Rectangle(-1703.5,-191,2400,384.5), new cjs.Rectangle(-1704.7,-191,2400,384.5), new cjs.Rectangle(-1705.9,-191,2400,384.5), new cjs.Rectangle(-1707.1,-191,2400,384.5), new cjs.Rectangle(-1708.3,-191,2400,384.5), new cjs.Rectangle(-1709.5,-191,2400,384.5), new cjs.Rectangle(-1710.7,-191,2400,384.5), new cjs.Rectangle(-1711.9,-191,2400,384.5), new cjs.Rectangle(-1713.1,-191,2400,384.5), new cjs.Rectangle(-1714.3,-191,2400,384.5), new cjs.Rectangle(-1715.5,-191,2400,384.5), new cjs.Rectangle(-1716.7,-191,2400,384.5), new cjs.Rectangle(-1717.9,-191,2400,384.5), new cjs.Rectangle(-1719.1,-191,2400,384.5), new cjs.Rectangle(-1720.3,-191,2400,384.5), new cjs.Rectangle(-1721.5,-191,2400,384.5), new cjs.Rectangle(-1722.7,-191,2400,384.5), new cjs.Rectangle(-1723.9,-191,2400,384.5), new cjs.Rectangle(-1725.1,-191,2400,384.5), new cjs.Rectangle(-1726.3,-191,2400,384.5), new cjs.Rectangle(-1727.5,-191,2400,384.5), new cjs.Rectangle(-1728.7,-191,2400,384.5), new cjs.Rectangle(-1729.9,-191,2400,384.5), new cjs.Rectangle(-1731.1,-191,2400,384.5), new cjs.Rectangle(-1732.3,-191,2400,384.5), new cjs.Rectangle(-1733.5,-191,2400,384.5), new cjs.Rectangle(-1734.7,-191,2400,384.5), new cjs.Rectangle(-1735.9,-191,2400,384.5), new cjs.Rectangle(-1737.1,-191,2400,384.5), new cjs.Rectangle(-1738.3,-191,2400,384.5), new cjs.Rectangle(-1739.5,-191,2400,384.5), new cjs.Rectangle(-1740.7,-191,2400,384.5), new cjs.Rectangle(-1741.9,-191,2400,384.5), new cjs.Rectangle(-1743.1,-191,2400,384.5), new cjs.Rectangle(-1744.3,-191,2400,384.5), new cjs.Rectangle(-1745.5,-191,2400,384.5), new cjs.Rectangle(-1746.7,-191,2400,384.5), new cjs.Rectangle(-1747.9,-191,2400,384.5), new cjs.Rectangle(-1749.1,-191,2400,384.5), new cjs.Rectangle(-1750.3,-191,2400,384.5), new cjs.Rectangle(-1751.5,-191,2400,384.5), new cjs.Rectangle(-1752.7,-191,2400,384.5), new cjs.Rectangle(-1753.9,-191,2400,384.5), new cjs.Rectangle(-1755.1,-191,2400,384.5), new cjs.Rectangle(-1756.3,-191,2400,384.5), new cjs.Rectangle(-1757.5,-191,2400,384.5), new cjs.Rectangle(-1758.7,-191,2400,384.5), new cjs.Rectangle(-1759.9,-191,2400,384.5), new cjs.Rectangle(-1761.1,-191,2400,384.5), new cjs.Rectangle(-1762.3,-191,2400,384.5), new cjs.Rectangle(-1763.5,-191,2400,384.5), new cjs.Rectangle(-1764.7,-191,2400,384.5), new cjs.Rectangle(-1765.9,-191,2400,384.5), new cjs.Rectangle(-1767.1,-191,2400,384.5), new cjs.Rectangle(-1768.3,-191,2400,384.5), new cjs.Rectangle(-1769.5,-191,2400,384.5), new cjs.Rectangle(-1770.7,-191,2400,384.5), new cjs.Rectangle(-1771.9,-191,2400,384.5), new cjs.Rectangle(-1773.1,-191,2400,384.5), new cjs.Rectangle(-1774.3,-191,2400,384.5), new cjs.Rectangle(-1775.5,-191,2400,384.5), new cjs.Rectangle(-1776.7,-191,2400,384.5), new cjs.Rectangle(-1777.9,-191,2400,384.5), new cjs.Rectangle(-1779.1,-191,2400,384.5), new cjs.Rectangle(-1780.3,-191,2400,384.5), new cjs.Rectangle(-1781.5,-191,2400,384.5), new cjs.Rectangle(-1782.7,-191,2400,384.5), new cjs.Rectangle(-1783.9,-191,2400,384.5), new cjs.Rectangle(-1785.1,-191,2400,384.5), new cjs.Rectangle(-1786.3,-191,2400,384.5), new cjs.Rectangle(-1787.5,-191,2400,384.5), new cjs.Rectangle(-1788.7,-191,2400,384.5), new cjs.Rectangle(-1789.9,-191,2400,384.5), new cjs.Rectangle(-1791.1,-191,2400,384.5), new cjs.Rectangle(-1792.3,-191,2400,384.5), new cjs.Rectangle(-1793.5,-191,2400,384.5), new cjs.Rectangle(-1794.7,-191,2400,384.5), new cjs.Rectangle(-1795.9,-191,2400,384.5), new cjs.Rectangle(-1797.1,-191,2400,384.5), new cjs.Rectangle(-1798.3,-191,2400,384.5), new cjs.Rectangle(-1799.5,-191,2400,384.5), new cjs.Rectangle(-1800.7,-191,2400,384.5), new cjs.Rectangle(-1801.9,-191,2400,384.5), new cjs.Rectangle(-1803.1,-191,2400,384.5), new cjs.Rectangle(-1804.3,-191,2400,384.5), new cjs.Rectangle(-1805.5,-191,2400,384.5), new cjs.Rectangle(-1806.7,-191,2400,384.5), new cjs.Rectangle(-1807.9,-191,2400,384.5), new cjs.Rectangle(-1809.1,-191,2400,384.5), new cjs.Rectangle(-1810.3,-191,2400,384.5), new cjs.Rectangle(-1811.5,-191,2400,384.5), new cjs.Rectangle(-1812.7,-191,2400,384.5), new cjs.Rectangle(-1813.9,-191,2400,384.5), new cjs.Rectangle(-1815.1,-191,2400,384.5), new cjs.Rectangle(-1816.3,-191,2400,384.5), new cjs.Rectangle(-1817.5,-191,2400,384.5), new cjs.Rectangle(-1818.7,-191,2400,384.5), new cjs.Rectangle(-1819.9,-191,2400,384.5), new cjs.Rectangle(-1821.1,-191,2400,384.5), new cjs.Rectangle(-1822.3,-191,2400,384.5), new cjs.Rectangle(-1823.5,-191,2400,384.5), new cjs.Rectangle(-1824.7,-191,2400,384.5), new cjs.Rectangle(-1825.9,-191,2400,384.5), new cjs.Rectangle(-1827.1,-191,2400,384.5), new cjs.Rectangle(-1828.3,-191,2400,384.5), new cjs.Rectangle(-1829.5,-191,2400,384.5), new cjs.Rectangle(-1830.7,-191,2400,384.5), new cjs.Rectangle(-1831.9,-191,2400,384.5), new cjs.Rectangle(-1833.1,-191,2400,384.5), new cjs.Rectangle(-1834.3,-191,2400,384.5), new cjs.Rectangle(-1835.5,-191,2400,384.5), new cjs.Rectangle(-1836.7,-191,2400,384.5), new cjs.Rectangle(-1837.9,-191,2400,384.5), new cjs.Rectangle(-1839.1,-191,2400,384.5), new cjs.Rectangle(-1840.3,-191,2400,384.5), new cjs.Rectangle(-1841.5,-191,2400,384.5), new cjs.Rectangle(-1842.7,-191,2400,384.5), new cjs.Rectangle(-1843.9,-191,2400,384.5), new cjs.Rectangle(-1845.1,-191,2400,384.5), new cjs.Rectangle(-1846.3,-191,2400,384.5), new cjs.Rectangle(-1847.5,-191,2400,384.5), new cjs.Rectangle(-1848.7,-191,2400,384.5), new cjs.Rectangle(-1849.9,-191,2400,384.5), new cjs.Rectangle(-1851.1,-191,2400,384.5), new cjs.Rectangle(-1852.3,-191,2400,384.5), new cjs.Rectangle(-1853.5,-191,2400,384.5), new cjs.Rectangle(-1854.7,-191,2400,384.5), new cjs.Rectangle(-1855.9,-191,2400,384.5), new cjs.Rectangle(-1857.1,-191,2400,384.5), new cjs.Rectangle(-1858.3,-191,2400,384.5), new cjs.Rectangle(-1859.5,-191,2400,384.5), new cjs.Rectangle(-1860.7,-191,2400,384.5), new cjs.Rectangle(-1861.9,-191,2400,384.5), new cjs.Rectangle(-1863.1,-191,2400,384.5), new cjs.Rectangle(-1864.3,-191,2400,384.5), new cjs.Rectangle(-1865.5,-191,2400,384.5), new cjs.Rectangle(-1866.7,-191,2400,384.5), new cjs.Rectangle(-1867.9,-191,2400,384.5), new cjs.Rectangle(-1869.1,-191,2400,384.5), new cjs.Rectangle(-1870.3,-191,2400,384.5), new cjs.Rectangle(-1871.5,-191,2400,384.5), new cjs.Rectangle(-1872.7,-191,2400,384.5), new cjs.Rectangle(-1873.9,-191,2400,384.5), new cjs.Rectangle(-1875.1,-191,2400,384.5), new cjs.Rectangle(-1876.3,-191,2400,384.5), new cjs.Rectangle(-1877.5,-191,2400,384.5), new cjs.Rectangle(-1878.7,-191,2400,384.5), new cjs.Rectangle(-1879.9,-191,2400,384.5), new cjs.Rectangle(-1881.1,-191,2400,384.5), new cjs.Rectangle(-1882.3,-191,2400,384.5), new cjs.Rectangle(-1883.5,-191,2400,384.5), new cjs.Rectangle(-1884.7,-191,2400,384.5), new cjs.Rectangle(-1885.9,-191,2400,384.5), new cjs.Rectangle(-1887.1,-191,2400,384.5), new cjs.Rectangle(-1888.3,-191,2400,384.5), new cjs.Rectangle(-1889.5,-191,2400,384.5), new cjs.Rectangle(-1890.7,-191,2400,384.5), new cjs.Rectangle(-1891.9,-191,2400,384.5), new cjs.Rectangle(-1893.1,-191,2400,384.5), new cjs.Rectangle(-1894.3,-191,2400,384.5), new cjs.Rectangle(-1895.5,-191,2400,384.5), new cjs.Rectangle(-1896.7,-191,2400,384.5), new cjs.Rectangle(-1897.9,-191,2400,384.5), new cjs.Rectangle(-1899.1,-191,2400,384.5), new cjs.Rectangle(-1900.3,-191,2400,384.5), new cjs.Rectangle(-1901.5,-191,2400,384.5), new cjs.Rectangle(-1902.7,-191,2400,384.5), new cjs.Rectangle(-1903.9,-191,2400,384.5), new cjs.Rectangle(-1905.1,-191,2400,384.5), new cjs.Rectangle(-1906.3,-191,2400,384.5), new cjs.Rectangle(-1907.5,-191,2400,384.5), new cjs.Rectangle(-1908.7,-191,2400,384.5), new cjs.Rectangle(-1909.9,-191,2400,384.5), new cjs.Rectangle(-1911.1,-191,2400,384.5), new cjs.Rectangle(-1912.3,-191,2400,384.5), new cjs.Rectangle(-1913.5,-191,2400,384.5), new cjs.Rectangle(-1914.7,-191,2400,384.5), new cjs.Rectangle(-1915.9,-191,2400,384.5), new cjs.Rectangle(-1917.1,-191,2400,384.5), new cjs.Rectangle(-1918.3,-191,2400,384.5), new cjs.Rectangle(-1919.5,-191,2400,384.5), new cjs.Rectangle(-1920.7,-191,2400,384.5), new cjs.Rectangle(-1921.9,-191,2400,384.5), new cjs.Rectangle(-1923.1,-191,2400,384.5), new cjs.Rectangle(-1924.3,-191,2400,384.5), new cjs.Rectangle(-1925.5,-191,2400,384.5), new cjs.Rectangle(-1926.7,-191,2400,384.5), new cjs.Rectangle(-1927.9,-191,2400,384.5), new cjs.Rectangle(-1929.1,-191,2400,384.5), new cjs.Rectangle(-1930.3,-191,2400,384.5), new cjs.Rectangle(-1931.5,-191,2400,384.5), new cjs.Rectangle(-1932.7,-191,2400,384.5), new cjs.Rectangle(-1933.9,-191,2400,384.5), new cjs.Rectangle(-1935.1,-191,2400,384.5), new cjs.Rectangle(-1936.3,-191,2400,384.5), new cjs.Rectangle(-1937.5,-191,2400,384.5), new cjs.Rectangle(-1938.7,-191,2400,384.5), new cjs.Rectangle(-1939.9,-191,2400,384.5), new cjs.Rectangle(-1941.1,-191,2400,384.5), new cjs.Rectangle(-1942.3,-191,2400,384.5), new cjs.Rectangle(-1943.5,-191,2400,384.5), new cjs.Rectangle(-1944.7,-191,2400,384.5), new cjs.Rectangle(-1945.9,-191,2400,384.5), new cjs.Rectangle(-1947.1,-191,2400,384.5), new cjs.Rectangle(-1948.3,-191,2400,384.5), new cjs.Rectangle(-1949.5,-191,2400,384.5), new cjs.Rectangle(-1950.7,-191,2400,384.5), new cjs.Rectangle(-1951.9,-191,2400,384.5), new cjs.Rectangle(-1953.1,-191,2400,384.5), new cjs.Rectangle(-1954.3,-191,2400,384.5), new cjs.Rectangle(-1955.5,-191,2400,384.5), new cjs.Rectangle(-1956.7,-191,2400,384.5), new cjs.Rectangle(-1957.9,-191,2400,384.5), new cjs.Rectangle(-1959.1,-191,2400,384.5), new cjs.Rectangle(-1960.3,-191,2400,384.5), new cjs.Rectangle(-1961.5,-191,2400,384.5), new cjs.Rectangle(-1962.7,-191,2400,384.5), new cjs.Rectangle(-1963.9,-191,2400,384.5), new cjs.Rectangle(-1965.1,-191,2400,384.5), new cjs.Rectangle(-1966.3,-191,2400,384.5), new cjs.Rectangle(-1967.5,-191,2400,384.5), new cjs.Rectangle(-1968.7,-191,2400,384.5), new cjs.Rectangle(-1969.9,-191,2400,384.5), new cjs.Rectangle(-1971.1,-191,2400,384.5), new cjs.Rectangle(-1972.3,-191,2400,384.5), new cjs.Rectangle(-1973.5,-191,2400,384.5), new cjs.Rectangle(-1974.7,-191,2400,384.5), new cjs.Rectangle(-1975.9,-191,2400,384.5), new cjs.Rectangle(-1977.1,-191,2400,384.5), new cjs.Rectangle(-1978.3,-191,2400,384.5), new cjs.Rectangle(-1979.5,-191,2400,384.5), new cjs.Rectangle(-1980.7,-191,2400,384.5), new cjs.Rectangle(-1981.9,-191,2400,384.5), new cjs.Rectangle(-1983.1,-191,2400,384.5), new cjs.Rectangle(-1984.3,-191,2400,384.5), new cjs.Rectangle(-1985.5,-191,2400,384.5), new cjs.Rectangle(-1986.7,-191,2400,384.5), new cjs.Rectangle(-1987.9,-191,2400,384.5), new cjs.Rectangle(-1989.1,-191,2400,384.5), new cjs.Rectangle(-1990.3,-191,2400,384.5), new cjs.Rectangle(-1991.5,-191,2400,384.5), new cjs.Rectangle(-1992.7,-191,2400,384.5), new cjs.Rectangle(-1993.9,-191,2400,384.5), new cjs.Rectangle(-1995.1,-191,2400,384.5), new cjs.Rectangle(-1996.3,-191,2400,384.5), new cjs.Rectangle(-1997.5,-191,2400,384.5), new cjs.Rectangle(-1998.7,-191,2400,384.5), new cjs.Rectangle(-1999.9,-191,2400,384.5)];


(lib.subject_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.forward_mc();
	this.instance.setTransform(425.1,485.1,0.737,0.737,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// speech
	this.instance_1 = new lib.speech_cloud_2_mc();
	this.instance_1.setTransform(250,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero
	this.instance_2 = new lib.hero_3_main_mc();
	this.instance_2.setTransform(600,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(15,34,690.5,652);
p.frameBounds = [rect];


(lib.subject_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.forward_mc();
	this.instance.setTransform(675.1,485.1,0.737,0.737,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// speech
	this.instance_1 = new lib.speech_cloud_1_mc();
	this.instance_1.setTransform(500,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(170,370);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(64.5,44,680.5,652);
p.frameBounds = [rect];


(lib.run_man3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.run_man3_0();
	this.instance.setTransform(0.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.2},4).to({y:3.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-99,100.2,198);
p.frameBounds = [rect, new cjs.Rectangle(-46.9,-100,100.2,197.9), new cjs.Rectangle(-46.9,-101,100.2,197.9), new cjs.Rectangle(-46.9,-102,100.2,197.9), new cjs.Rectangle(-46.9,-103,100.2,198), new cjs.Rectangle(-46.9,-101.6,100.2,197.9), new cjs.Rectangle(-46.9,-100.3,100.2,197.9), new cjs.Rectangle(-46.9,-99,100.2,198)];


(lib.run_man2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.run_man2_0();
	this.instance.setTransform(0.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.2},4).to({y:3.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-99,100.2,198);
p.frameBounds = [rect, new cjs.Rectangle(-46.9,-100,100.2,197.9), new cjs.Rectangle(-46.9,-101,100.2,197.9), new cjs.Rectangle(-46.9,-102,100.2,197.9), new cjs.Rectangle(-46.9,-103,100.2,198), new cjs.Rectangle(-46.9,-101.6,100.2,197.9), new cjs.Rectangle(-46.9,-100.3,100.2,197.9), new cjs.Rectangle(-46.9,-99,100.2,198)];


(lib.run_man1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.run_man1_0();
	this.instance.setTransform(0.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.2},4).to({y:3.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-98,105,197);
p.frameBounds = [rect, new cjs.Rectangle(-52.4,-99,105,196.9), new cjs.Rectangle(-52.4,-100,105,196.9), new cjs.Rectangle(-52.4,-101,105,196.9), new cjs.Rectangle(-52.4,-102,105,197), new cjs.Rectangle(-52.4,-100.6,105,196.9), new cjs.Rectangle(-52.4,-99.3,105,196.9), new cjs.Rectangle(-52.4,-98,105,197)];


(lib.run_man1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:0,freeze:1,"loss":2});

	// body
	this.instance = new lib.run_man1_1();
	this.instance.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_1 = new lib.stand_man1_1();
	this.instance_1.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_2 = new lib.fall_man1_1();
	this.instance_2.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-98,105,197);
p.frameBounds = [rect, new cjs.Rectangle(-52.4,-98,105,202.9), new cjs.Rectangle(-35,-12.7,215.5,157.4)];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(-1,0,0.875,0.875,0,0,180,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-222.2,411.3,444.5);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(1.1,0,0.875,0.875,0,0,0,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-341.2,-222.2,411.2,444.5);
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


(lib.messagesOutlineGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"loss":1,"win":2});

	// text
	this.instance = new lib.choicesOutlineGame_mc();
	this.instance.setTransform(0.5,-0.5,1,1,0,0,0,0.5,-0.5);

	this.instance_1 = new lib.loss_game_mc();
	this.instance_1.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.instance_2 = new lib.win_game_mc();
	this.instance_2.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_help_windows_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(2));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EhdvAu4MAAAhdvMC7fAAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600.1);
p.frameBounds = [rect, rect, rect];


(lib.messagesFreezeGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"loss":1,"win":2});

	// text
	this.instance = new lib.start_game_mc();
	this.instance.setTransform(199.5,-75.5,1,1,0,0,0,-0.5,-0.5);

	this.instance_1 = new lib.loss_game_mc();
	this.instance_1.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.instance_2 = new lib.win_game_mc();
	this.instance_2.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_help_windows_mc();
	this.instance_3.setTransform(200,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:0,y:0},0).wait(2));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EhdvAu4MAAAhdvMC7fAAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600.1);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(80,80);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-180,-180);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwAQAQmpmoABpYQgBpXGpmpQGpmoJXAAQJYAAGpGoQGoGpAAJXQAAJYmoGoQmpGppYAAQpXAAmpmpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(90,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-180,-180);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A7UXrMAbUgvVMAbVAvVg");
	this.shape.setTransform(0,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(85,75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-180,-180);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1FVGMAAAgqKMAqLAAAMAAAAqKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.leading_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{beginning:0,watching:79,turned:109,"loss":110});

	// tree
	this.instance = new lib.tree();
	this.instance.setTransform(-234.5,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},110).wait(1));

	// doll
	this.instance_1 = new lib.doll_body();
	this.instance_1.setTransform(-62.3,55.8);

	this.instance_2 = new lib.doll4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},110).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_1 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_2 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_3 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_4 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_5 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_6 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_7 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_8 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_9 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_10 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_11 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_12 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_13 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_14 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_15 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_16 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_17 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_18 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_19 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_20 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_21 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_22 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_23 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_24 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_25 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_26 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_27 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_28 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_29 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_30 = new cjs.Graphics().p("AAbhCQgigJgWgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApyhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_31 = new cjs.Graphics().p("AAdhCQgjgJgVgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApxhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_32 = new cjs.Graphics().p("AAehCQgigJgWgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApvhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_33 = new cjs.Graphics().p("AAghCQgjgJgVgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApuhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_34 = new cjs.Graphics().p("AAhhCQgigJgVgLIgGgDQAxhGANgKIAAAAQAngQAlAAIABAAQArAAAyAaQAUAJATAKQAVAMASAMQgbATgbANQg7AcgwAAQgpAAgvgKgApshZQgRgIgQgKIgUgOQAhgWAsgWQAygZAsgBIABAAQAhAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_35 = new cjs.Graphics().p("AAjhCQgjgJgVgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApqhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_36 = new cjs.Graphics().p("AAlhCQglgJgTgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApphZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_37 = new cjs.Graphics().p("AAmhCQgkgJgUgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApnhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_38 = new cjs.Graphics().p("AAohCQglgJgTgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApmhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_39 = new cjs.Graphics().p("AAphCQgkgJgTgLIgGgDQAwhGAOgKIAAAAQAngQAlAAIABAAQAqAAAzAaQAVAJARAKQAVAMATAMQgbATgaANQg8AcgwAAQgpAAgvgKgApkhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAjAAAlAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_40 = new cjs.Graphics().p("AArhCQgkgJgUgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApihZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_41 = new cjs.Graphics().p("AAthCQglgJgTgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAphhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_42 = new cjs.Graphics().p("AAuhCQgkgJgUgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApfhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_43 = new cjs.Graphics().p("AAwhCQglgJgTgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApehZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_44 = new cjs.Graphics().p("AAyhCQglgJgUgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQAsAAAzAaQATAJASAKQAWAMARAMQgaATgaANQg8AcgwAAQgpAAgugKgApchZQgRgIgQgKIgUgOQAggWAtgWQAzgZAqgBIABAAQAjAAAlAOIACABIACACQANAKA0BGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_45 = new cjs.Graphics().p("AAzhCQgkgJgUgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApahZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_46 = new cjs.Graphics().p("AA1hCQglgJgTgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApZhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_47 = new cjs.Graphics().p("AA2hCQgkgJgUgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApXhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_48 = new cjs.Graphics().p("AA4hCQglgJgTgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApWhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_49 = new cjs.Graphics().p("AA6hCQglgJgVgLIgEgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQAUAJASAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgApUhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIAAAAQAjAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_50 = new cjs.Graphics().p("AA7hCQgkgJgWgLIgDgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApShZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_51 = new cjs.Graphics().p("AA9hCQglgJgVgLIgEgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApRhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_52 = new cjs.Graphics().p("AA+hCQgkgJgWgLIgEgDQAxhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApPhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_53 = new cjs.Graphics().p("ABAhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApOhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_54 = new cjs.Graphics().p("ABBhCQgkgJgWgLIgFgDQAzhGANgKIABAAQAmgQAlAAIAAAAQAsAAAyAaQAUAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApMhZQgRgIgQgKIgUgOQAggWAtgWQAygZAsgBIABAAQAhAAAmAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_55 = new cjs.Graphics().p("ABDhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApKhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_56 = new cjs.Graphics().p("ABFhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApJhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_57 = new cjs.Graphics().p("ABGhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApHhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_58 = new cjs.Graphics().p("ABIhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApGhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_59 = new cjs.Graphics().p("ABJhCQgkgJgVgLIgGgDQAyhGAOgKIAAAAQAngQAlAAIABAAQAqAAAzAaQAVAJARAKQAVAMATAMQgbATgaANQg8AcgwAAQgpAAgvgKgApEhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIACAAQAhAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_60 = new cjs.Graphics().p("ABLhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApChZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_61 = new cjs.Graphics().p("ABNhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApBhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_62 = new cjs.Graphics().p("ABOhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAo/hZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_63 = new cjs.Graphics().p("ABQhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAo+hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_64 = new cjs.Graphics().p("ABRhCQgkgJgVgLIgGgDQAzhGANgKIAAAAQAngQAkAAIACAAQAqAAAzAaQAUAJASAKQAVAMATAMQgbATgaANQg8AcgwAAQgpAAgvgKgAo8hZQgRgIgQgKIgUgOQAggWAtgWQAzgZAqgBIABAAQAjAAAlAOIACABIACACQANAKA0BGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_65 = new cjs.Graphics().p("ABThCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAo6hZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_66 = new cjs.Graphics().p("ABVhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAo5hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_67 = new cjs.Graphics().p("ABWhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAo3hZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_68 = new cjs.Graphics().p("ABYhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAo2hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_69 = new cjs.Graphics().p("ABahCQglgJgWgLIgFgDQAyhGAOgKIABAAQAmgQAkAAIABAAQAsAAAzAaQATAJASAKQAWAMARAMQgaATgbANQg7AcgwAAQgpAAgugKgAo0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZAqgBIABAAQAjAAAlAOIACABIACACQANAKA0BGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_70 = new cjs.Graphics().p("ABbhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAoyhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_71 = new cjs.Graphics().p("ABdhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAoxhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_72 = new cjs.Graphics().p("ABehCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAovhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_73 = new cjs.Graphics().p("ABghCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAouhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_74 = new cjs.Graphics().p("ABihCQglgJgWgLIgFgDQAzhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAoshZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_75 = new cjs.Graphics().p("ABjhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAoqhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_76 = new cjs.Graphics().p("ABlhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAophZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_77 = new cjs.Graphics().p("ABmhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAonhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_78 = new cjs.Graphics().p("ABohCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAomhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_79 = new cjs.Graphics().p("ABphCQgkgJgVgLIgGgDQAzhGANgKIAAAAQAngQAlAAIABAAQArAAAyAaQAUAJATAKQAVAMASAMQgbATgbANQg7AcgwAAQgpAAgvgKgAokhZQgRgIgQgKIgUgOQAhgWAsgWQAygZAsgBIABAAQAhAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_80 = new cjs.Graphics().p("ABphCQgkgJgVgLIgGgDQAzhGANgKIAAAAQAngQAlAAIABAAQArAAAyAaQAUAJATAKQAVAMASAMQgbATgbANQg7AcgwAAQgpAAgvgKgAokhZQgRgIgQgKIgUgOQAhgWAsgWQAygZAsgBIABAAQAhAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_81 = new cjs.Graphics().p("ABjhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAorhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_82 = new cjs.Graphics().p("ABchCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgAoxhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_83 = new cjs.Graphics().p("ABWhCQglgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQAsAAAzAaQATAJASAKQAWAMARAMQgaATgaANQg8AcgwAAQgpAAgugKgAo4hZQgRgIgQgKIgUgOQAggWAtgWQAzgZAqgBIABAAQAjAAAlAOIACABIACACQANAKA0BGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_84 = new cjs.Graphics().p("ABPhCQglgJgVgLIgGgDQAzhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgAo/hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_85 = new cjs.Graphics().p("ABIhCQgkgJgWgLIgFgDQAyhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApFhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_86 = new cjs.Graphics().p("ABBhCQgkgJgWgLIgFgDQAzhGANgKIABAAQAmgQAlAAIAAAAQAsAAAyAaQAUAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApMhZQgRgIgQgKIgUgOQAggWAtgWQAygZAsgBIABAAQAhAAAmAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_87 = new cjs.Graphics().p("AA7hCQglgJgVgLIgEgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApThZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_88 = new cjs.Graphics().p("AA0hCQgkgJgUgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApZhZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_89 = new cjs.Graphics().p("AAthCQgkgJgTgLIgGgDQAxhGANgKIAAAAQAngQAkAAIACAAQAqAAAzAaQAUAJASAKQAVAMATAMQgbATgaANQg8AcgwAAQgpAAgvgKgApghZQgRgIgQgKIgUgOQAggWAtgWQAzgZAqgBIABAAQAjAAAlAOIACABIACACQANAKA0BGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_90 = new cjs.Graphics().p("AAnhCQglgJgTgLIgGgDQAxhGANgKIABAAQAmgQAlAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgbATgaANQg8AcgwAAQgpAAgugKgApnhZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAzBGQgKAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_91 = new cjs.Graphics().p("AAghCQgigJgWgLIgFgDQAwhGAOgKIAAAAQAngQAkAAIABAAQArAAAzAaQAUAJASAKQAVAMASAMQgaATgbANQg7AcgwAAQgpAAgvgKgApthZQgRgIgQgKIgUgOQAggWAtgWQAygZArgBIABAAQAiAAAmAOIACABIACACQANAKAzBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_92 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_93 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_94 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_95 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_96 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_97 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_98 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_99 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_100 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_101 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_102 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_103 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_104 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_105 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_106 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_107 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_108 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");
	var mask_graphics_109 = new cjs.Graphics().p("AAahCQgjgJgWgLIgFgDQAxhGANgKIABAAQAmgQAkAAIABAAQArAAA0AaQATAJATAKQAUAMASAMQgaATgbANQg7AcgwAAQgpAAgugKgAp0hZQgRgIgQgKIgUgOQAhgWAsgWQAzgZArgBIABAAQAiAAAlAOIACABIACACQAOAKAyBGQgJAGgMAEQgSAHgYAGQgvALgpAAQgwgBg7gcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_1,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_2,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_3,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_4,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_5,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_6,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_7,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_8,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_9,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_10,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_11,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_12,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_13,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_14,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_15,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_16,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_17,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_18,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_19,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_20,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_21,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_22,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_23,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_24,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_25,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_26,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_27,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_28,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_29,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_30,x:-68.1,y:-19.2}).wait(1).to({graphics:mask_graphics_31,x:-67.9,y:-19.2}).wait(1).to({graphics:mask_graphics_32,x:-67.8,y:-19.2}).wait(1).to({graphics:mask_graphics_33,x:-67.6,y:-19.2}).wait(1).to({graphics:mask_graphics_34,x:-67.4,y:-19.2}).wait(1).to({graphics:mask_graphics_35,x:-67.3,y:-19.2}).wait(1).to({graphics:mask_graphics_36,x:-67.1,y:-19.2}).wait(1).to({graphics:mask_graphics_37,x:-67,y:-19.2}).wait(1).to({graphics:mask_graphics_38,x:-66.8,y:-19.2}).wait(1).to({graphics:mask_graphics_39,x:-66.6,y:-19.2}).wait(1).to({graphics:mask_graphics_40,x:-66.5,y:-19.2}).wait(1).to({graphics:mask_graphics_41,x:-66.3,y:-19.2}).wait(1).to({graphics:mask_graphics_42,x:-66.2,y:-19.2}).wait(1).to({graphics:mask_graphics_43,x:-66,y:-19.2}).wait(1).to({graphics:mask_graphics_44,x:-65.8,y:-19.2}).wait(1).to({graphics:mask_graphics_45,x:-65.7,y:-19.2}).wait(1).to({graphics:mask_graphics_46,x:-65.5,y:-19.2}).wait(1).to({graphics:mask_graphics_47,x:-65.4,y:-19.2}).wait(1).to({graphics:mask_graphics_48,x:-65.2,y:-19.2}).wait(1).to({graphics:mask_graphics_49,x:-65,y:-19.2}).wait(1).to({graphics:mask_graphics_50,x:-64.9,y:-19.2}).wait(1).to({graphics:mask_graphics_51,x:-64.7,y:-19.2}).wait(1).to({graphics:mask_graphics_52,x:-64.6,y:-19.2}).wait(1).to({graphics:mask_graphics_53,x:-64.4,y:-19.2}).wait(1).to({graphics:mask_graphics_54,x:-64.2,y:-19.2}).wait(1).to({graphics:mask_graphics_55,x:-64.1,y:-19.2}).wait(1).to({graphics:mask_graphics_56,x:-63.9,y:-19.2}).wait(1).to({graphics:mask_graphics_57,x:-63.8,y:-19.2}).wait(1).to({graphics:mask_graphics_58,x:-63.6,y:-19.2}).wait(1).to({graphics:mask_graphics_59,x:-63.4,y:-19.2}).wait(1).to({graphics:mask_graphics_60,x:-63.3,y:-19.2}).wait(1).to({graphics:mask_graphics_61,x:-63.1,y:-19.2}).wait(1).to({graphics:mask_graphics_62,x:-63,y:-19.2}).wait(1).to({graphics:mask_graphics_63,x:-62.8,y:-19.2}).wait(1).to({graphics:mask_graphics_64,x:-62.6,y:-19.2}).wait(1).to({graphics:mask_graphics_65,x:-62.5,y:-19.2}).wait(1).to({graphics:mask_graphics_66,x:-62.3,y:-19.2}).wait(1).to({graphics:mask_graphics_67,x:-62.2,y:-19.2}).wait(1).to({graphics:mask_graphics_68,x:-62,y:-19.2}).wait(1).to({graphics:mask_graphics_69,x:-61.8,y:-19.2}).wait(1).to({graphics:mask_graphics_70,x:-61.7,y:-19.2}).wait(1).to({graphics:mask_graphics_71,x:-61.5,y:-19.2}).wait(1).to({graphics:mask_graphics_72,x:-61.4,y:-19.2}).wait(1).to({graphics:mask_graphics_73,x:-61.2,y:-19.2}).wait(1).to({graphics:mask_graphics_74,x:-61,y:-19.2}).wait(1).to({graphics:mask_graphics_75,x:-60.9,y:-19.2}).wait(1).to({graphics:mask_graphics_76,x:-60.7,y:-19.2}).wait(1).to({graphics:mask_graphics_77,x:-60.6,y:-19.2}).wait(1).to({graphics:mask_graphics_78,x:-60.4,y:-19.2}).wait(1).to({graphics:mask_graphics_79,x:-60.2,y:-19.2}).wait(1).to({graphics:mask_graphics_80,x:-60.2,y:-19.2}).wait(1).to({graphics:mask_graphics_81,x:-60.9,y:-19.2}).wait(1).to({graphics:mask_graphics_82,x:-61.6,y:-19.2}).wait(1).to({graphics:mask_graphics_83,x:-62.2,y:-19.2}).wait(1).to({graphics:mask_graphics_84,x:-62.9,y:-19.2}).wait(1).to({graphics:mask_graphics_85,x:-63.6,y:-19.2}).wait(1).to({graphics:mask_graphics_86,x:-64.2,y:-19.2}).wait(1).to({graphics:mask_graphics_87,x:-64.9,y:-19.2}).wait(1).to({graphics:mask_graphics_88,x:-65.6,y:-19.2}).wait(1).to({graphics:mask_graphics_89,x:-66.2,y:-19.2}).wait(1).to({graphics:mask_graphics_90,x:-66.9,y:-19.2}).wait(1).to({graphics:mask_graphics_91,x:-67.6,y:-19.2}).wait(1).to({graphics:mask_graphics_92,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_93,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_94,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_95,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_96,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_97,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_98,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_99,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_100,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_101,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_102,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_103,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_104,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_105,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_106,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_107,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_108,x:-68.2,y:-19.2}).wait(1).to({graphics:mask_graphics_109,x:-68.2,y:-19.2}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// animation
	this.instance_3 = new lib.zrachok();
	this.instance_3.setTransform(-125.8,-31.5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-114.8},29).to({x:-98.8},50).wait(1).to({x:-114.8},12).to({x:-125.8},17).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.zrachok();
	this.instance_4.setTransform(-62.3,-31.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-51.3},29).to({x:-35.3},50).wait(1).to({x:-51.3},12).to({x:-62.3},17).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.doll_head1();
	this.instance_5.setTransform(-86.5,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({x:-70.5},50).wait(1).to({x:-86.5},12).wait(17).to({_off:true},1).wait(1));

	// bg
	this.instance_6 = new lib.background_2_mc();
	this.instance_6.setTransform(0,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-138.6,1200,277.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-228.4,1200,439)];


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


(lib.hero1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dressSecond
	this.dressSecond = new lib.dress_all();
	this.dressSecond.setTransform(1,5.1);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(1));

	// fringe
	this.fringe = new lib.fringe_all();
	this.fringe.setTransform(-4.3,-240.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// dress
	this.dress = new lib.dress_open_all();
	this.dress.setTransform(1,5.1);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// makeup
	this.makeup = new lib.makeup_all();
	this.makeup.setTransform(-3.5,-234.6);

	this.timeline.addTween(cjs.Tween.get(this.makeup).wait(1));

	// jacket
	this.jacket = new lib.jacket_all();
	this.jacket.setTransform(-1.3,-80.8);

	this.timeline.addTween(cjs.Tween.get(this.jacket).wait(1));

	// bottom
	this.bottom = new lib.bottom_all();
	this.bottom.setTransform(0.2,96.1);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// top
	this.top = new lib.top_all();
	this.top.setTransform(-0.5,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// body
	this.instance = new lib.body1();
	this.instance.setTransform(0,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hair
	this.hair = new lib.hair_all();
	this.hair.setTransform(-3.1,-232.8);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.2,-292.8,197.2,595.9);
p.frameBounds = [rect];


(lib.dot_outline_game_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28));

	// animation
	this.instance = new lib.dot_outline_game_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// animation
	this.instance_1 = new lib.dot_outline_game_6_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.36,scaleY:1.36,alpha:0.801},4).to({scaleX:1.8,scaleY:1.8},5).to({scaleX:2.69,scaleY:2.69,alpha:0.012},10).wait(9));

	// animation
	this.instance_2 = new lib.dot_outline_game_6_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1.36,scaleY:1.36,alpha:0.801},4).to({scaleX:1.8,scaleY:1.8},5).to({scaleX:2.69,scaleY:2.69,alpha:0.012},10).wait(5));

	// animation
	this.instance_3 = new lib.dot_outline_game_6_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({scaleX:1.36,scaleY:1.36,alpha:0.801},4).to({scaleX:1.8,scaleY:1.8},5).to({scaleX:2.69,scaleY:2.69,alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect, new cjs.Rectangle(-17.4,-17.4,34.8,34.8), new cjs.Rectangle(-18.8,-18.8,37.7,37.7), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-21.7,-21.7,43.4,43.4), new cjs.Rectangle(-23.1,-23.1,46.2,46.2), new cjs.Rectangle(-24.5,-24.5,49.1,49.1), new cjs.Rectangle(-25.9,-25.9,51.9,51.9), new cjs.Rectangle(-27.3,-27.3,54.7,54.7), new cjs.Rectangle(-28.8,-28.8,57.6,57.6), new cjs.Rectangle(-30.2,-30.2,60.4,60.4), new cjs.Rectangle(-31.6,-31.6,63.3,63.3), new cjs.Rectangle(-33,-33,66.1,66.1), new cjs.Rectangle(-34.4,-34.4,68.9,68.9), new cjs.Rectangle(-35.9,-35.9,71.8,71.8), new cjs.Rectangle(-37.3,-37.3,74.6,74.6), new cjs.Rectangle(-38.7,-38.7,77.5,77.5), new cjs.Rectangle(-40.1,-40.1,80.3,80.3), new cjs.Rectangle(-41.6,-41.6,83.2,83.2), rect=new cjs.Rectangle(-43,-43,86,86), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect];


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


(lib.anim_fall_man3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		this.parent.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.run_man3_1();
	this.instance.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_1 = new lib.fall_man3_1();
	this.instance_1.setTransform(0,0.6,1,1,0,0,0,0,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(5).to({alpha:0.012},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-99,100.2,198);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-35,-5.1,214.4,149.8), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-35,-5.1,214.3,149.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-35,-5.1,214.4,149.8)];


(lib.anim_fall_man2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
		this.parent.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.run_man2_1();
	this.instance.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_1 = new lib.fall_man2_1();
	this.instance_1.setTransform(0,0.6,1,1,0,0,0,0,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(5).to({alpha:0.012},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-99,100.2,198);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-35,-5.1,214.4,149.8), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-35,-5.1,214.3,149.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-35,-5.1,214.4,149.8)];


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
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,800,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(100,520,0.727,0.727);
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
	this.instance.setTransform(400,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(321.7,301.7,1,1,0,0,0,321.7,301.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.run_man3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":0,"freeze":1,"loss":2});

	// body
	this.instance = new lib.run_man3_1();
	this.instance.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_1 = new lib.stand_man3_1();
	this.instance_1.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_2 = new lib.anim_fall_man3_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-99,100.2,198);
p.frameBounds = [rect, new cjs.Rectangle(-47.1,-99,100.4,203.9), new cjs.Rectangle(-46.9,-99,100.2,198)];


(lib.run_man2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":0,"freeze":1,"loss":2});

	// body
	this.instance = new lib.run_man2_1();
	this.instance.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_1 = new lib.stand_man2_1();
	this.instance_1.setTransform(0,0.6,1,1,0,0,0,0,0.6);

	this.instance_2 = new lib.anim_fall_man2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-99,100.2,198);
p.frameBounds = [rect, new cjs.Rectangle(-47.1,-99,100.4,203.9), new cjs.Rectangle(-46.9,-99,100.2,198)];


(lib.playersFreezeGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// players
	this.player_0_mc = new lib.run_man1();
	this.player_0_mc.setTransform(397,412.6,1,1,0,0,0,0,0.6);

	this.player_2_mc = new lib.run_man2();
	this.player_2_mc.setTransform(39,456.6,1,1,0,0,0,0,0.6);

	this.player_3_mc = new lib.run_man3();
	this.player_3_mc.setTransform(206,446.6,1,1,0,0,0,0,0.6);

	this.player_1_mc = new lib.run_man2();
	this.player_1_mc.setTransform(94,412.6,1,1,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player_1_mc},{t:this.player_3_mc},{t:this.player_2_mc},{t:this.player_0_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.9,313,457.5,242);
p.frameBounds = [rect];


(lib.makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(47,45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.make3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,162,160);
p.frameBounds = [rect];


(lib.makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(47,45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.make2_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,162,160);
p.frameBounds = [rect];


(lib.makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(47,45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.make1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,162,160);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(190,-100);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.56,scaleY:0.56},0).to({regX:0.1,regY:-0.1,scaleX:1.06,scaleY:1.06,x:190.1,y:-100.1,alpha:0.801},12).to({regX:0,regY:0,scaleX:1,scaleY:1,x:190,y:-100,alpha:1},3).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,100);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.56,scaleY:0.56},0).to({regY:0.1,scaleX:1.06,scaleY:1.06,y:100.1,alpha:0.801},12).to({regY:0,scaleX:1,scaleY:1,y:100,alpha:1},3).wait(11));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,-100);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.56,scaleY:0.56},0).to({regX:-0.1,regY:-0.1,scaleX:1.06,scaleY:1.06,x:-190.1,y:-100.1,alpha:0.801},12).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-190,y:-100,alpha:1},3).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-280,740,560);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-290,-280,660,560), new cjs.Rectangle(-297.4,-280,667.5,560), new cjs.Rectangle(-304.9,-280,675,560), new cjs.Rectangle(-312.4,-280,682.4,560), new cjs.Rectangle(-319.9,-280,690,560), new cjs.Rectangle(-327.4,-280,697.5,560), new cjs.Rectangle(-334.9,-280,705,560), new cjs.Rectangle(-342.5,-280,712.5,560), new cjs.Rectangle(-350,-280,720,560), new cjs.Rectangle(-357.5,-280,727.5,560), new cjs.Rectangle(-365,-280,735,480), new cjs.Rectangle(-372.5,-282.5,742.5,490.1), new cjs.Rectangle(-380,-290,750,505.1), new cjs.Rectangle(-376.6,-286.5,746.7,509.1), new cjs.Rectangle(-373.2,-283.2,743.3,513.3), new cjs.Rectangle(-370,-280,740,517.6), new cjs.Rectangle(-370,-280,740,525.1), new cjs.Rectangle(-370,-280,740,532.6), new cjs.Rectangle(-370,-280,740,540.1), new cjs.Rectangle(-370,-280,740,547.7), new cjs.Rectangle(-370,-280,660,555.2), new cjs.Rectangle(-370,-280,667.5,562.7), new cjs.Rectangle(-370,-280,675,570), new cjs.Rectangle(-370,-280,682.5,566.6), new cjs.Rectangle(-370,-280,690,563.3), new cjs.Rectangle(-370,-280,697.5,560), new cjs.Rectangle(-370,-280,705,560), new cjs.Rectangle(-370,-280,712.6,560), new cjs.Rectangle(-370,-280,720.1,560), new cjs.Rectangle(-370,-280,727.6,560), new cjs.Rectangle(-370,-280,735.1,560), new cjs.Rectangle(-370,-282.5,742.6,562.6), new cjs.Rectangle(-370,-290,750,570), new cjs.Rectangle(-370,-286.5,746.7,566.6), new cjs.Rectangle(-370,-283.2,743.3,563.2), new cjs.Rectangle(-370,-280,740,560)];


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
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.hero_1 = new lib.hero1();
	this.hero_1.setTransform(402,300,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:340},0).wait(1).to({x:455},0).wait(1).to({x:402},0).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_5_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_6_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_0_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect];


(lib.hair_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(47,45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle4_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,162,160);
p.frameBounds = [rect];


(lib.hair_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(47,45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,162,160);
p.frameBounds = [rect];


(lib.hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(47,45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle2_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,162,160);
p.frameBounds = [rect];


(lib.hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(47,45,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,162,160);
p.frameBounds = [rect];


(lib.freezeGame_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// messages
	this.messages_mc = new lib.messagesFreezeGame_mc();
	this.messages_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.messages_mc).wait(1));

	// decor
	this.instance = new lib.line();
	this.instance.setTransform(400,225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// players
	this.players_mc = new lib.playersFreezeGame_mc();

	this.timeline.addTween(cjs.Tween.get(this.players_mc).wait(1));

	// track
	this.track_mc = new lib.trackFreezeGame_mc();
	this.track_mc.setTransform(600,409);

	this.timeline.addTween(cjs.Tween.get(this.track_mc).wait(1));

	// leading
	this.leading_mc = new lib.leading_mc();
	this.leading_mc.setTransform(400,113);

	this.timeline.addTween(cjs.Tween.get(this.leading_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-25.6,2400,628.2);
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


(lib.dot_outline_game_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.animation_mc = new lib.dot_outline_game_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AioCpQhHhGAAhjQAAhiBHhGQBGhGBiAAQBjAABGBGQBHBGAABiQAABjhHBGQhGBHhjgBQhiABhGhHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.closet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.jacket_0 = new lib.jacket_0_mc();
	this.jacket_0.setTransform(196,-215);
	this.jacket_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jacket_0).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

	// options
	this.makeup_3 = new lib.makeup_3_mc();
	this.makeup_3.setTransform(80,38);

	this.makeup_2 = new lib.makeup_2_mc();
	this.makeup_2.setTransform(-80,38);

	this.makeup_1 = new lib.makeup_1_mc();
	this.makeup_1.setTransform(0,-142);

	this.hair_4 = new lib.hair_4_mc();
	this.hair_4.setTransform(80,40);

	this.hair_3 = new lib.hair_3_mc();
	this.hair_3.setTransform(-80,40);

	this.hair_2 = new lib.hair_2_mc();
	this.hair_2.setTransform(80,-140);

	this.hair_1 = new lib.hair_1_mc();
	this.hair_1.setTransform(-80,-140);

	this.top_2 = new lib.top_2_mc();
	this.top_2.setTransform(110,-227);

	this.top_4 = new lib.top_4_mc();
	this.top_4.setTransform(0,-227);

	this.top_3 = new lib.top_3_mc();
	this.top_3.setTransform(-110,-227);

	this.bottom_2 = new lib.bottom_2_mc();
	this.bottom_2.setTransform(110,-77);

	this.bottom_4 = new lib.bottom_4_mc();
	this.bottom_4.setTransform(0,-77);

	this.bottom_3 = new lib.bottom_3_mc();
	this.bottom_3.setTransform(-110,-77);

	this.top_1 = new lib.top_1_mc();
	this.top_1.setTransform(-80,-227);

	this.jacket_1 = new lib.jacket_1_mc();
	this.jacket_1.setTransform(80,-227);

	this.bottom_1 = new lib.bottom_1_mc();
	this.bottom_1.setTransform(-80,-77);

	this.jacket_2 = new lib.jacket_2_mc();
	this.jacket_2.setTransform(80,-77);

	this.dress_3 = new lib.dress_3_mc();
	this.dress_3.setTransform(120,-23);

	this.dress_2 = new lib.dress_2_mc();
	this.dress_2.setTransform(0,-23);

	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(-120,-23);

	this.dress_6 = new lib.dress_6_mc();
	this.dress_6.setTransform(120,18);

	this.dress_5 = new lib.dress_5_mc();
	this.dress_5.setTransform(0,-23);

	this.dress_4 = new lib.dress_4_mc();
	this.dress_4.setTransform(-120,12);

	this.dress_8 = new lib.dress_8_mc();
	this.dress_8.setTransform(70,18);

	this.dress_7 = new lib.dress_7_mc();
	this.dress_7.setTransform(-70,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.makeup_1},{t:this.makeup_2},{t:this.makeup_3}]}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_4},{t:this.bottom_2},{t:this.top_3},{t:this.top_4},{t:this.top_2}]},1).to({state:[{t:this.jacket_2},{t:this.bottom_1},{t:this.jacket_1},{t:this.top_1}]},1).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3}]},1).to({state:[{t:this.dress_4},{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.dress_7},{t:this.dress_8}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_mc();
	this.instance.setTransform(0,100);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.stick_mc();
	this.instance_2.setTransform(0,-60);

	this.instance_3 = new lib.stick_mc();
	this.instance_3.setTransform(0,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-222,420,352);
p.frameBounds = [rect, new cjs.Rectangle(-210,-220,420,350), new cjs.Rectangle(-210,-230.9,420,476.3), new cjs.Rectangle(-210,-233,424,467.1), new cjs.Rectangle(-194.1,-239.4,383.9,438.5), new cjs.Rectangle(-192.9,-244.9,385,441.5), new cjs.Rectangle(-142.7,-242.2,286,436.2)];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet1();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-222,420,352);
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


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_mc();
	this.object_1.setTransform(675,485);

	this.timeline.addTween(cjs.Tween.get(this.object_1).to({_off:true},1).wait(1));

	// objects
	this.subject_1 = new lib.subject_1_1_mc();
	this.subject_1.setTransform(1,-1,1,1,0,0,0,1,-1);

	this.freezeGame_2_mc = new lib.freezeGame_2_mc();
	this.freezeGame_2_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.freezeGame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(64.5,-329.4,690.5,1025.4);
p.frameBounds = [rect, new cjs.Rectangle(-200,-329.4,2400,931.9)];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();
	this.heroes_mc.setTransform(1.1,-1,1,1,0,0,0,1.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,750,0.875,0.875);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(210,30);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-210,30);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,-400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-450,540,715);
p.frameBounds = [rect];


(lib.dots_outline_game_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dot_14_mc = new lib.dot_outline_game_mc();
	this.dot_14_mc.setTransform(-134,-140);

	this.dot_13_mc = new lib.dot_outline_game_mc();
	this.dot_13_mc.setTransform(-190,-45);

	this.dot_12_mc = new lib.dot_outline_game_mc();
	this.dot_12_mc.setTransform(-108,-45);

	this.dot_11_mc = new lib.dot_outline_game_mc();
	this.dot_11_mc.setTransform(-22,-45);

	this.dot_10_mc = new lib.dot_outline_game_mc();
	this.dot_10_mc.setTransform(-22,65);

	this.dot_9_mc = new lib.dot_outline_game_mc();
	this.dot_9_mc.setTransform(-1,197);

	this.dot_8_mc = new lib.dot_outline_game_mc();
	this.dot_8_mc.setTransform(80,197);

	this.dot_7_mc = new lib.dot_outline_game_mc();
	this.dot_7_mc.setTransform(80,107);

	this.dot_6_mc = new lib.dot_outline_game_mc();
	this.dot_6_mc.setTransform(38,161);

	this.dot_5_mc = new lib.dot_outline_game_mc();
	this.dot_5_mc.setTransform(24,65);

	this.dot_4_mc = new lib.dot_outline_game_mc();
	this.dot_4_mc.setTransform(24,-45);

	this.dot_3_mc = new lib.dot_outline_game_mc();
	this.dot_3_mc.setTransform(107,-45);

	this.dot_2_mc = new lib.dot_outline_game_mc();
	this.dot_2_mc.setTransform(191,-45);

	this.dot_1_mc = new lib.dot_outline_game_mc();
	this.dot_1_mc.setTransform(130,-140);

	this.dot_0_mc = new lib.dot_outline_game_mc();
	this.dot_0_mc.setTransform(30,-190);

	this.dot_15_mc = new lib.dot_outline_game_mc();
	this.dot_15_mc.setTransform(-36,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot_15_mc},{t:this.dot_0_mc},{t:this.dot_1_mc},{t:this.dot_2_mc},{t:this.dot_3_mc},{t:this.dot_4_mc},{t:this.dot_5_mc},{t:this.dot_6_mc},{t:this.dot_7_mc},{t:this.dot_8_mc},{t:this.dot_9_mc},{t:this.dot_10_mc},{t:this.dot_11_mc},{t:this.dot_12_mc},{t:this.dot_13_mc},{t:this.dot_14_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214,-214,429,435);
p.frameBounds = [rect];


(lib.dots_outline_game_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dot_9_mc = new lib.dot_outline_game_mc();
	this.dot_9_mc.setTransform(-75,-105);

	this.dot_8_mc = new lib.dot_outline_game_mc();
	this.dot_8_mc.setTransform(-210,-70);

	this.dot_7_mc = new lib.dot_outline_game_mc();
	this.dot_7_mc.setTransform(-123,40);

	this.dot_6_mc = new lib.dot_outline_game_mc();
	this.dot_6_mc.setTransform(-132,180);

	this.dot_5_mc = new lib.dot_outline_game_mc();
	this.dot_5_mc.setTransform(0,125);

	this.dot_4_mc = new lib.dot_outline_game_mc();
	this.dot_4_mc.setTransform(132,180);

	this.dot_3_mc = new lib.dot_outline_game_mc();
	this.dot_3_mc.setTransform(123,40);

	this.dot_2_mc = new lib.dot_outline_game_mc();
	this.dot_2_mc.setTransform(210,-70);

	this.dot_1_mc = new lib.dot_outline_game_mc();
	this.dot_1_mc.setTransform(75,-105);

	this.dot_0_mc = new lib.dot_outline_game_mc();
	this.dot_0_mc.setTransform(0,-223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot_0_mc},{t:this.dot_1_mc},{t:this.dot_2_mc},{t:this.dot_3_mc},{t:this.dot_4_mc},{t:this.dot_5_mc},{t:this.dot_6_mc},{t:this.dot_7_mc},{t:this.dot_8_mc},{t:this.dot_9_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234,-247,468,451);
p.frameBounds = [rect];


(lib.dots_outline_game_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dot_7_mc = new lib.dot_outline_game_mc();
	this.dot_7_mc.setTransform(-147,-126);

	this.dot_6_mc = new lib.dot_outline_game_mc();
	this.dot_6_mc.setTransform(-192,0);

	this.dot_5_mc = new lib.dot_outline_game_mc();
	this.dot_5_mc.setTransform(-147,126);

	this.dot_4_mc = new lib.dot_outline_game_mc();
	this.dot_4_mc.setTransform(0,192);

	this.dot_3_mc = new lib.dot_outline_game_mc();
	this.dot_3_mc.setTransform(147,126);

	this.dot_2_mc = new lib.dot_outline_game_mc();
	this.dot_2_mc.setTransform(197,0);

	this.dot_1_mc = new lib.dot_outline_game_mc();
	this.dot_1_mc.setTransform(147,-126);

	this.dot_0_mc = new lib.dot_outline_game_mc();
	this.dot_0_mc.setTransform(0,-196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot_0_mc},{t:this.dot_1_mc},{t:this.dot_2_mc},{t:this.dot_3_mc},{t:this.dot_4_mc},{t:this.dot_5_mc},{t:this.dot_6_mc},{t:this.dot_7_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216,-220,437,436);
p.frameBounds = [rect];


(lib.dots_outline_game_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dot_2_mc = new lib.dot_outline_game_mc();
	this.dot_2_mc.setTransform(-190,118);

	this.dot_1_mc = new lib.dot_outline_game_mc();
	this.dot_1_mc.setTransform(190,118);

	this.dot_0_mc = new lib.dot_outline_game_mc();
	this.dot_0_mc.setTransform(4,-208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot_0_mc},{t:this.dot_1_mc},{t:this.dot_2_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214,-232,428,374);
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
	this.instance.alpha = 0.5;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_0_img();
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
	this.next_mc.setTransform(700,320);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(100,320);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

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
	this.instance.alpha = 0.199;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.optionOutlineGame_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dots_mc = new lib.dots_outline_game_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.dots_mc).wait(1));

	// drawing
	this.drawing_mc = new lib.container_drawing_outline_game_mc();

	this.timeline.addTween(cjs.Tween.get(this.drawing_mc).wait(1));

	// animation
	this.animation_mc = new lib.animOptionOutlineGame_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect];


(lib.optionOutlineGame_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dots_mc = new lib.dots_outline_game_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.dots_mc).wait(1));

	// drawing
	this.drawing_mc = new lib.container_drawing_outline_game_mc();

	this.timeline.addTween(cjs.Tween.get(this.drawing_mc).wait(1));

	// animation
	this.animation_mc = new lib.animOptionOutlineGame_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect];


(lib.optionOutlineGame_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dots_mc = new lib.dots_outline_game_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.dots_mc).wait(1));

	// drawing
	this.drawing_mc = new lib.container_drawing_outline_game_mc();

	this.timeline.addTween(cjs.Tween.get(this.drawing_mc).wait(1));

	// animation
	this.animation_mc = new lib.animOptionOutlineGame_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect];


(lib.optionOutlineGame_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dots
	this.dots_mc = new lib.dots_outline_game_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.dots_mc).wait(1));

	// drawing
	this.drawing_mc = new lib.container_drawing_outline_game_mc();

	this.timeline.addTween(cjs.Tween.get(this.drawing_mc).wait(1));

	// animation
	this.animation_mc = new lib.animOptionOutlineGame_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect];


(lib.joinDots_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(382,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(382,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.hero_1 = new lib.hero1();
	this.hero_1.setTransform(620,300,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_1_mc.setTransform(260,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-329.4,720.4,909.1);
p.frameBounds = [rect];


(lib.optionsOutlineGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.optionOutlineGame_1_mc();

	this.body_2_mc = new lib.optionOutlineGame_2_mc();

	this.body_3_mc = new lib.optionOutlineGame_3_mc();

	this.body_4_mc = new lib.optionOutlineGame_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271,-271,542,542);
p.frameBounds = [rect, rect, rect, rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260.1,510.1,1,1,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(260,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.joinDots_1_mc();
	this.body_mc.setTransform(0.1,-1,1,1,0,0,0,0.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1300.3);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// messages
	this.messages_mc = new lib.messagesOutlineGame_mc();
	this.messages_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.messages_mc).wait(1));

	// options
	this.options_mc = new lib.optionsOutlineGame_mc();
	this.options_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.options_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600.1);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(382,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(382,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{rotation:0,x:382,y:-160}},{t:this.instance}]}).to({state:[{t:this.indicator_mc,p:{rotation:-90,x:720,y:300}},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_mc();
	this.object_1.setTransform(425,485);

	this.timeline.addTween(cjs.Tween.get(this.object_1).to({_off:true},1).wait(1));

	// objects
	this.subject_1 = new lib.subject_1_2_mc();
	this.subject_1.setTransform(1,-1,1,1,0,0,0,1,-1);

	this.outlineGame_2_mc = new lib.quest_2_mc();
	this.outlineGame_2_mc.setTransform(0.1,1,1,1,0,0,0,0.1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.outlineGame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(15,-329.4,690.5,1015.4);
p.frameBounds = [rect, new cjs.Rectangle(-200,-329.4,1200,929.5)];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,510,0.875,0.875);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

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
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
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
	this.instance_2.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.instance_3 = new lib.SelectionScreen();
	this.instance_3.setTransform(0.1,1,1,1,0,0,0,0.1,1);

	this.instance_4 = new lib.LocationScreen_1();
	this.instance_4.setTransform(-1,-0.1,1,1,0,0,0,-1,-0.1);

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(-399.9,-301,1,1,0,0,0,-399.9,-301);

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.ResultScreen();

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

	this.instance_12 = new lib.OrientationLockScreen();

	this.instance_13 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_11},{t:this.instance_10},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_11},{t:this.instance_10},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-300,0,1400,600), new cjs.Rectangle(-200,0,1200,600), rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect, rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, new cjs.Rectangle(-200,-329.4,1200,1300.3), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), rect=new cjs.Rectangle(10,0,353,100), rect, new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect];


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