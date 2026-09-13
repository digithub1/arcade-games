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
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,600,600],[0,602,580,580],[582,602,580,580]]},
		{name:"storage_atlas_5", frames: [[797,202,500,300],[0,580,393,438],[0,202,578,376],[0,0,1200,200],[395,580,400,400],[797,504,380,380],[797,886,343,400]]},
		{name:"storage_atlas_6", frames: [[345,0,343,400],[690,0,343,400],[345,402,343,400],[345,804,343,400],[690,402,343,400],[690,804,343,400],[0,804,343,400],[0,0,343,400],[0,402,343,400]]},
		{name:"storage_atlas_7", frames: [[0,0,343,400],[0,402,343,400],[0,804,343,400],[345,0,343,400],[690,0,343,400],[345,402,343,400],[690,402,343,400],[690,804,343,400],[345,804,343,400]]},
		{name:"storage_atlas_8", frames: [[690,0,343,400],[690,402,343,400],[0,804,343,400],[0,0,343,400],[345,402,343,400],[345,0,343,400],[0,402,343,400],[345,804,343,400],[690,804,343,400]]},
		{name:"storage_atlas_9", frames: [[0,402,343,400],[345,0,343,400],[690,0,490,240],[690,242,490,240],[0,804,490,240],[492,968,490,240],[0,1046,490,240],[345,484,490,240],[492,726,490,240],[0,0,343,400]]},
		{name:"storage_atlas_10", frames: [[0,726,490,240],[492,968,490,240],[0,968,490,240],[492,726,490,240],[492,484,490,240],[0,0,490,240],[0,484,490,240],[492,242,490,240],[0,242,490,240],[492,0,490,240]]},
		{name:"storage_atlas_11", frames: [[984,0,277,389],[492,968,380,260],[0,242,490,240],[0,0,490,240],[492,0,490,240],[492,242,490,240],[0,484,490,240],[492,726,490,240],[492,484,490,240],[0,726,490,240],[0,968,490,240],[984,773,280,380],[984,391,280,380]]},
		{name:"storage_atlas_12", frames: [[0,229,300,300],[738,0,300,300],[738,302,300,300],[302,305,300,300],[302,909,300,300],[302,607,300,300],[0,531,300,300],[0,833,300,300],[0,0,422,227],[604,604,320,233],[424,0,312,303],[1040,0,240,280],[1040,564,240,280],[1040,282,240,280],[846,846,240,280],[604,846,240,280]]},
		{name:"storage_atlas_13", frames: [[0,0,240,280],[232,848,230,210],[928,424,230,210],[464,848,230,210],[464,636,230,210],[0,494,230,210],[696,636,230,210],[928,636,230,210],[0,706,230,210],[696,848,230,210],[232,636,230,210],[696,1060,230,210],[464,1060,230,210],[928,1060,230,210],[928,848,230,210],[0,918,230,210],[232,1060,230,210],[232,424,230,210],[938,0,230,210],[464,424,230,210],[938,212,230,210],[0,282,230,210],[696,424,230,210],[242,212,230,210],[474,212,230,210],[706,212,230,210],[242,0,230,210],[474,0,230,210],[706,0,230,210]]},
		{name:"storage_atlas_14", frames: [[958,364,262,158],[958,1100,190,190],[958,524,190,190],[958,716,190,190],[0,636,230,210],[0,0,230,210],[0,424,230,210],[0,212,230,210],[0,848,230,210],[0,1060,230,210],[232,0,240,180],[232,728,240,180],[716,364,240,180],[232,1092,240,180],[474,910,240,180],[716,546,240,180],[716,728,240,180],[474,0,240,180],[232,182,240,180],[716,910,240,180],[716,0,240,180],[716,182,240,180],[232,546,240,180],[474,182,240,180],[958,182,240,180],[232,364,240,180],[716,1092,240,180],[232,910,240,180],[958,0,240,180],[474,728,240,180],[474,364,240,180],[474,546,240,180],[474,1092,240,180],[958,908,190,190]]},
		{name:"storage_atlas_15", frames: [[0,192,190,190],[0,766,180,180],[800,806,97,139],[1118,684,120,120],[678,771,120,120],[0,0,190,190],[434,1015,120,120],[678,893,120,120],[556,893,120,120],[434,771,120,120],[312,928,120,120],[312,806,120,120],[434,893,120,120],[556,771,120,120],[1118,562,120,120],[0,948,180,180],[556,1015,120,120],[192,0,190,190],[580,264,160,160],[434,1137,120,120],[678,1015,120,120],[312,1050,120,120],[556,1137,120,120],[1001,792,100,100],[192,566,133,116],[800,947,119,107],[1204,236,91,108],[618,529,116,91],[182,766,76,279],[384,0,220,160],[342,1172,80,124],[996,446,120,120],[800,652,180,60],[800,590,180,60],[800,1056,180,60],[188,684,180,60],[800,1180,180,60],[800,1118,180,60],[922,236,280,80],[453,447,220,80],[580,182,340,80],[0,576,186,188],[1103,806,99,100],[844,446,150,142],[188,1047,50,210],[260,771,50,297],[384,162,194,178],[788,0,187,171],[977,102,187,132],[0,1130,186,159],[1021,318,180,120],[192,192,190,190],[0,384,190,190],[374,447,77,255],[742,264,100,255],[678,1137,120,120],[453,529,163,106],[384,342,192,103],[1166,102,130,132],[453,637,130,132],[585,637,130,132],[606,0,180,180],[192,384,180,180],[844,318,175,126],[1118,440,120,120],[240,1172,100,100],[982,992,240,40],[800,1242,240,40],[982,950,240,40],[982,908,240,40],[982,1034,240,40],[982,1076,240,40],[982,1118,240,40],[717,714,240,40],[1042,1202,200,40],[982,1160,200,40],[977,0,300,100],[899,792,100,100],[982,690,100,100],[996,568,120,120]]},
		{name:"storage_atlas_16", frames: [[276,32,34,141],[143,177,50,50],[0,75,90,50],[312,96,90,50],[195,181,48,48],[312,148,56,56],[102,0,220,30],[287,206,40,40],[102,32,42,143],[146,32,42,143],[190,32,42,143],[444,82,28,129],[477,0,28,172],[245,181,40,55],[0,189,40,43],[312,32,10,11],[324,0,69,94],[0,0,100,73],[0,127,57,60],[486,174,23,38],[370,148,31,31],[91,177,50,50],[234,32,40,147],[133,229,40,40],[0,234,40,40],[301,248,40,40],[343,248,40,40],[329,206,40,40],[444,213,40,40],[91,229,40,40],[175,231,40,40],[217,238,40,40],[259,248,40,40],[59,127,14,206],[75,127,14,206],[424,82,18,220],[404,82,18,220],[395,0,80,80]]}
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



(lib.applicator1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.applicator2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
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
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
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
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.check_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.check_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.check_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.check_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.check_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.check_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.check_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cl_mk1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cosmet_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.first_title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.first_title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.first_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.first_title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.first_title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.first_title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.first_title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.first_title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.first_title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.first_title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.first_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.first_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.first_title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand1_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hand1_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hand2_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hand2_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hand_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hand_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hand_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hand_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.head_wensday_rodinka_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.head_wensday_small_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_body_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_body_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero_body_makeup_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lipstick1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.lipstick2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.lipstick3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mascara1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mascara2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.plecho1_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.plecho1_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.podvodka1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.podvodka2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.predplecho1_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.predplecho1_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.r1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.r2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.r3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.second_title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.second_title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.second_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.second_title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.second_title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.second_title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.second_title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.second_title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.second_title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.second_title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.second_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.second_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.second_title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.shadow_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.shadows_palette_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.video_play_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.vk_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyebrows0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyes0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyes0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyes0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyes3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wensday_eyes3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wensday_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wensday_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wensday_lips2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wensday_lips2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wensday_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wensday_rouge0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wensday_rouge1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wensday_rouge1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wensday_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wensday_shadow3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-150,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-50,300,100);
p.frameBounds = [rect];


(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-290,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,580);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-290,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,580);
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


(lib.wensday_shadow3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow3_3_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow3_2_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow3_1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow2_4_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow2_3_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow2_2_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow2_1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow1_3_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow1_2_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_shadow1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_shadow1_1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_rouge3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_rouge3_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_rouge1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_rouge1_2_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_rouge1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_rouge1_1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_lips3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_lips3_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_lips2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_lips2_2_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_lips2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_lips2_1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_lips1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_lips0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_lips0_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_eyes_closed_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyes0_3_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_eyes_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyes3_1_img();
	this.instance.setTransform(-171.5,-200);

	this.instance_1 = new lib.wensday_eyes3_2_img();
	this.instance_1.setTransform(-171.5,-200);

	this.instance_2 = new lib.wensday_eyes3_3_img();
	this.instance_2.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},79).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.wensday_eyes_all2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyes3_1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_eyes_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyes0_1_img();
	this.instance.setTransform(-171.5,-200);

	this.instance_1 = new lib.wensday_eyes0_2_img();
	this.instance_1.setTransform(-171.5,-200);

	this.instance_2 = new lib.wensday_eyes0_3_img();
	this.instance_2.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},79).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.wensday_eyebrows3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyebrows3_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_eyebrows2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyebrows1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_eyebrows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyebrows1_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.wensday_eyebrows0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wensday_eyebrows0_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.video_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.video_play_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
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


(lib.shadows_palette_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_palette_img();
	this.instance.setTransform(-87.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-63,175,126);
p.frameBounds = [rect];


(lib.shadow_video_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhtXA2sMAAAhtXMDavAAAMAAABtXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-700,-350,1400,700);
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


(lib.r3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.r3_img();
	this.instance.setTransform(-65,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-66,130,132);
p.frameBounds = [rect];


(lib.r2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.r2_img();
	this.instance.setTransform(-65,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-66,130,132);
p.frameBounds = [rect];


(lib.r1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.r1_img();
	this.instance.setTransform(-65,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-66,130,132);
p.frameBounds = [rect];


(lib.predplecho1_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.predplecho1_1_2_img();
	this.instance.setTransform(-96,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-51.5,192,103);
p.frameBounds = [rect];


(lib.predplecho1_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.predplecho1_1_1_img();
	this.instance.setTransform(-81.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-53,163,106);
p.frameBounds = [rect];


(lib.podvodka2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka2_img();
	this.instance.setTransform(-9,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-110,18,220);
p.frameBounds = [rect];


(lib.podvodka1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka1_img();
	this.instance.setTransform(-9,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-110,18,220);
p.frameBounds = [rect];


(lib.plecho1_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho1_1_2_img();
	this.instance.setTransform(-50,-127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-127.5,100,255);
p.frameBounds = [rect];


(lib.plecho1_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho1_1_1_img();
	this.instance.setTransform(-38.5,-127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-127.5,77,255);
p.frameBounds = [rect];


(lib.pencil2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_img();
	this.instance.setTransform(-7,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,-103,14,206);
p.frameBounds = [rect];


(lib.pencil1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_img();
	this.instance.setTransform(-7,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7,-103,14,206);
p.frameBounds = [rect];


(lib.object_17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIQIPAALoQAALpoQIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.object_16_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqVHTnWQHWnTKVgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_16_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Az3T4QoPoPgBrpQABrpIPoPQIPoOLoAAQLpAAIPIOQIPIPABLpQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.object_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHUpnKWABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqWABnUpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_14_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpnAAtmQAAtkHVpoQHUpnKWABQKWgBHVJnQHUJoABNkQgBNmnUJnQnVJmqWAAQqWAAnUpmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_14_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHVpnKVABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqVABnVpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHUpnKWABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqWABnUpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_12_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpnAAtmQAAtkHVpoQHUpnKWABQKWgBHVJnQHUJoABNkQgBNmnUJnQnVJmqWAAQqWAAnUpmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHVpnKVABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqVABnVpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_10_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpnAAtmQAAtkHVpoQHUpnKWABQKWgBHVJnQHUJoABNkQgBNmnUJnQnVJmqWAAQqWAAnUpmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHVpnKVABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqVABnVpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHUpnKWABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqWABnUpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHVpnKVABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqVABnVpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpnAAtmQAAtkHVpoQHUpnKWABQKWgBHVJnQHUJoABNkQgBNmnUJnQnVJmqWAAQqWAAnUpmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHUpnKWABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqWABnUpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpnAAtmQAAtkHVpoQHUpnKWABQKWgBHVJnQHUJoABNkQgBNmnUJnQnVJmqWAAQqWAAnUpmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHVpnKVABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqVABnVpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHUpnKWABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqWABnUpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpnAAtmQAAtkHVpoQHUpnKWABQKWgBHVJnQHUJoABNkQgBNmnUJnQnVJmqWAAQqWAAnUpmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHVpnKVABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqVABnVpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqXNQnVpoAAtlQAAtkHVpoQHUpnKWABQKXgBHUJnQHVJoAANkQAANlnVJoQnUJnqXgBQqWABnUpng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-210,320,420);
p.frameBounds = [rect];


(lib.object_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/RLMAAAgiVMAx/AAAMAAAAiVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-110,320,220);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/SvMAAAgldMAx/AAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/QaMAAAggzMAx/AAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-105,320,210);
p.frameBounds = [rect];


(lib.mascara2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara2_img();
	this.instance.setTransform(-14,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-86,28,172);
p.frameBounds = [rect];


(lib.mascara1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara1_img();
	this.instance.setTransform(-14,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-64.5,28,129);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lipstick3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick3_img();
	this.instance.setTransform(-21,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-71.5,42,143);
p.frameBounds = [rect];


(lib.lipstick2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick2_img();
	this.instance.setTransform(-21,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-71.5,42,143);
p.frameBounds = [rect];


(lib.lipstick1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick1_img();
	this.instance.setTransform(-21,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-71.5,42,143);
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


(lib.hero_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_fringe1_img();
	this.instance.setTransform(-156,-151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156,-151.5,312,303);
p.frameBounds = [rect];


(lib.hero_body_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_fringe0_img();
	this.instance.setTransform(-166,-304.7);

	this.instance_1 = new lib.head_wensday_small_img();
	this.instance_1.setTransform(-175.5,-300.2);

	this.instance_2 = new lib.hero_body_makeup_img();
	this.instance_2.setTransform(-289,-71.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-289,-304.7,578,609.5);
p.frameBounds = [rect];


(lib.hero_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_body_2_img();
	this.instance.setTransform(-211,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-113.5,422,227);
p.frameBounds = [rect];


(lib.hero_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_body_1_img();
	this.instance.setTransform(-196.5,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196.5,-219,393,438);
p.frameBounds = [rect];


(lib.head_wensday_small_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head_wensday_small_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.head_wensday_rodinka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head_wensday_rodinka_img();
	this.instance.setTransform(-171.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-200,343,400);
p.frameBounds = [rect];


(lib.hand2_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2_2_1_img();
	this.instance.setTransform(-58,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-45.5,116,91);
p.frameBounds = [rect];


(lib.hand2_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2_1_1_img();
	this.instance.setTransform(-45.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-54,91,108);
p.frameBounds = [rect];


(lib.hand1_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand1_1_2_img();
	this.instance.setTransform(-59.5,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-53.5,119,107);
p.frameBounds = [rect];


(lib.hand1_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand1_1_1_img();
	this.instance.setTransform(-66.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-58,133,116);
p.frameBounds = [rect];


(lib.hand_arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hand_arrow_4_img();
	this.instance.setTransform(-38,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-140,76,279);
p.frameBounds = [rect];


(lib.hand_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hand_arrow_3_img();
	this.instance.setTransform(-28,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.hand_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hand_arrow_2_img();
	this.instance.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-190,280,380);
p.frameBounds = [rect];


(lib.hand_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hand_arrow_1_img();
	this.instance.setTransform(-140,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-190,280,380);
p.frameBounds = [rect];


(lib.frame_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmZmbgBpDQABpDGZmZQGambJDAAQJEAAGaGbQGZGZABJDQgBJDmZGbQmaGZpEAAQpDAAmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.frame_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPdQmamZAApEQAApCGambQGbmaJCAAQJEAAGZGaQGbGbAAJCQAAJEmbGZQmZGbpEAAQpCAAmbmbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.frame_13_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.frame_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmamaAApEQAApDGamaQGamaJDAAQJEAAGaGaQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
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


(lib.decor_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_2_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.decor_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.cosmet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cosmet_img();
	this.instance.setTransform(-131,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-79,262,158);
p.frameBounds = [rect];


(lib.cl_mk1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cl_mk1_img();
	this.instance.setTransform(-138.5,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-194.5,277,389);
p.frameBounds = [rect];


(lib.circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCFF").s().p("AmZGXQgJgCgHgGQgGgHgCgJIgbiiIhwgOQgJgBgHgGQgGgFgDgJQgDgIADgIQAniggoi0QgCgJADgIQAEgJAHgFQAHgFAJgBIBmgFIAaiqQACgJAGgHQAGgGAJgDQAJgCAJAEIPVF6QAJAEAFAHQAFAIAAAIQAAAJgFAHQgFAIgJAEIvMF6QgFACgFAAIgHgBgAmciyQgBAKgIAHQgIAIgLAAIhcAFQAcCdgcCOIBmANQAJABAIAHQAHAHACAKIAZCTINhlQItqlQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40.9,120,81.8);
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


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.body_second_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.second_title_en_img();
	this.instance.setTransform(-245,-120);

	this.instance_1 = new lib.second_title_ru_img();
	this.instance_1.setTransform(-245,-120);

	this.instance_2 = new lib.second_title_de_img();
	this.instance_2.setTransform(-245,-120);

	this.instance_3 = new lib.second_title_fr_img();
	this.instance_3.setTransform(-245,-120);

	this.instance_4 = new lib.second_title_it_img();
	this.instance_4.setTransform(-245,-120);

	this.instance_5 = new lib.second_title_es_img();
	this.instance_5.setTransform(-245,-120);

	this.instance_6 = new lib.second_title_pt_img();
	this.instance_6.setTransform(-245,-120);

	this.instance_7 = new lib.second_title_tr_img();
	this.instance_7.setTransform(-245,-120);

	this.instance_8 = new lib.second_title_ja_img();
	this.instance_8.setTransform(-245,-120);

	this.instance_9 = new lib.second_title_hi_img();
	this.instance_9.setTransform(-245,-120);

	this.instance_10 = new lib.second_title_ar_img();
	this.instance_10.setTransform(-245,-120);

	this.instance_11 = new lib.second_title_id_img();
	this.instance_11.setTransform(-245,-120);

	this.instance_12 = new lib.second_title_zh_img();
	this.instance_12.setTransform(-245,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-120,490,240);
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

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_first_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.first_title_en_img();
	this.instance.setTransform(-245,-120);

	this.instance_1 = new lib.first_title_ru_img();
	this.instance_1.setTransform(-245,-120);

	this.instance_2 = new lib.first_title_de_img();
	this.instance_2.setTransform(-245,-120);

	this.instance_3 = new lib.first_title_fr_img();
	this.instance_3.setTransform(-245,-120);

	this.instance_4 = new lib.first_title_it_img();
	this.instance_4.setTransform(-245,-120);

	this.instance_5 = new lib.first_title_es_img();
	this.instance_5.setTransform(-245,-120);

	this.instance_6 = new lib.first_title_pt_img();
	this.instance_6.setTransform(-245,-120);

	this.instance_7 = new lib.first_title_tr_img();
	this.instance_7.setTransform(-245,-120);

	this.instance_8 = new lib.first_title_ja_img();
	this.instance_8.setTransform(-245,-120);

	this.instance_9 = new lib.first_title_hi_img();
	this.instance_9.setTransform(-245,-120);

	this.instance_10 = new lib.first_title_ar_img();
	this.instance_10.setTransform(-245,-120);

	this.instance_11 = new lib.first_title_id_img();
	this.instance_11.setTransform(-245,-120);

	this.instance_12 = new lib.first_title_zh_img();
	this.instance_12.setTransform(-245,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-120,490,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_4_img();
	this.instance.setTransform(1000,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.applicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.applicator2_img();
	this.instance.setTransform(-48.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-69.5,97,139);
p.frameBounds = [rect];


(lib.applicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.applicator1_img();
	this.instance.setTransform(-17,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17,-70.5,34,141);
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
	this.shape.graphics.f("#CC66FF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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
	this.instance.setTransform(-38,-38,0.75,0.75);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-38,75,75);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,275,1,0.917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,550);
p.frameBounds = [rect];


(lib.bubble_2_2_mc = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.vk_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.vk_img();
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


(lib.shadow_large_buttons_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.decor_large_buttons_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.body_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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
	this.instance.setTransform(0,245);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:370,alpha:1},0).to({y:220},11).to({y:245},4).wait(45).to({scaleX:1.07,scaleY:1.07},5).to({scaleX:1,scaleY:1},5).to({scaleX:1.07,scaleY:1.07},5).to({scaleX:1,scaleY:1},5).wait(30).to({y:370,alpha:0.012},10).wait(21));

	// image_1
	this.instance_1 = new lib.redirect_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({alpha:0.012},20).to({_off:true},1).wait(80));

	// image_2
	this.instance_2 = new lib.redirect_5_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).wait(80).to({alpha:0.012},20).wait(1));

	// image_1
	this.instance_3 = new lib.redirect_4_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({_off:false},0).wait(21));

	// bg
	this.instance_4 = new lib.redirect_3_mc();
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,585);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-290,-290,580,710), new cjs.Rectangle(-290,-290,580,696.4), new cjs.Rectangle(-290,-290,580,682.8), new cjs.Rectangle(-290,-290,580,669.1), new cjs.Rectangle(-290,-290,580,655.5), new cjs.Rectangle(-290,-290,580,641.8), new cjs.Rectangle(-290,-290,580,628.2), new cjs.Rectangle(-290,-290,580,614.6), new cjs.Rectangle(-290,-290,580,600.9), new cjs.Rectangle(-290,-290,580,587.3), rect=new cjs.Rectangle(-290,-290,580,580), rect, rect, rect, rect, rect=new cjs.Rectangle(-290,-290,580,585), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-290,-290,580,585.7), new cjs.Rectangle(-290,-290,580,586.3), new cjs.Rectangle(-290,-290,580,587.1), new cjs.Rectangle(-290,-290,580,587.7), new cjs.Rectangle(-290,-290,580,588.3), new cjs.Rectangle(-290,-290,580,587.6), new cjs.Rectangle(-290,-290,580,587), new cjs.Rectangle(-290,-290,580,586.3), new cjs.Rectangle(-290,-290,580,585.6), new cjs.Rectangle(-290,-290,580,585), new cjs.Rectangle(-290,-290,580,585.7), new cjs.Rectangle(-290,-290,580,586.3), new cjs.Rectangle(-290,-290,580,587.1), new cjs.Rectangle(-290,-290,580,587.7), new cjs.Rectangle(-290,-290,580,588.3), new cjs.Rectangle(-290,-290,580,587.6), new cjs.Rectangle(-290,-290,580,587), new cjs.Rectangle(-290,-290,580,586.3), new cjs.Rectangle(-290,-290,580,585.6), rect=new cjs.Rectangle(-290,-290,580,585), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-290,-290,580,597.5), new cjs.Rectangle(-290,-290,580,610), new cjs.Rectangle(-290,-290,580,622.5), new cjs.Rectangle(-290,-290,580,635), new cjs.Rectangle(-290,-290,580,647.5), new cjs.Rectangle(-290,-290,580,660), new cjs.Rectangle(-290,-290,580,672.5), new cjs.Rectangle(-290,-290,580,685), new cjs.Rectangle(-290,-290,580,697.5), rect=new cjs.Rectangle(-290,-290,580,710), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.semicircular_arrow_checks_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(30,-60,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-100,40,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-70,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.second_title_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_second_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-120,490,240);
p.frameBounds = [rect];


(lib.round_arrow_checks_mc = function(mode,startPosition,loop) {
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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,200,360);
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


(lib.head3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wensday_eyes_all1
	this.instance = new lib.wensday_eyes_all2_mc();
	this.instance.setTransform(0.3,-0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wensday_eyebrows3
	this.instance_1 = new lib.wensday_eyebrows3_mc();
	this.instance_1.setTransform(0.3,-0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// wensday_lips3
	this.instance_2 = new lib.wensday_lips3_mc();
	this.instance_2.setTransform(0.3,-0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// wensday_shadow3_3
	this.instance_3 = new lib.wensday_shadow3_3_mc();
	this.instance_3.setTransform(0.3,-0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// wensday_shadow3_2
	this.instance_4 = new lib.wensday_shadow3_2_mc();
	this.instance_4.setTransform(0.3,-0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// wensday_shadow3_1
	this.instance_5 = new lib.wensday_shadow3_1_mc();
	this.instance_5.setTransform(0.3,-0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// wensday_rouge3
	this.instance_6 = new lib.wensday_rouge3_mc();
	this.instance_6.setTransform(0.3,-0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// head_wensday_small
	this.instance_7 = new lib.head_wensday_small_mc();
	this.instance_7.setTransform(-0.2,0.5,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.3,-127.8,218.7,255.6);
p.frameBounds = [rect];


(lib.head2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wensday_eyes_all1
	this.instance = new lib.wensday_eyes_all1_mc();
	this.instance.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wensday_eyebrows2
	this.instance_1 = new lib.wensday_eyebrows2_mc();
	this.instance_1.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// wensday_lips2_2
	this.instance_2 = new lib.wensday_lips2_2_mc();
	this.instance_2.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// wensday_lips2_1
	this.instance_3 = new lib.wensday_lips2_1_mc();
	this.instance_3.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// wensday_shadow2_4
	this.instance_4 = new lib.wensday_shadow2_4_mc();
	this.instance_4.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// wensday_shadow2_3
	this.instance_5 = new lib.wensday_shadow2_3_mc();
	this.instance_5.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// wensday_shadow2_2
	this.instance_6 = new lib.wensday_shadow2_2_mc();
	this.instance_6.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// wensday_shadow2_1
	this.instance_7 = new lib.wensday_shadow2_1_mc();
	this.instance_7.setTransform(0,0.6,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// head_wensday_small
	this.instance_8 = new lib.head_wensday_small_mc();
	this.instance_8.setTransform(-0.2,0.5,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.3,-126.8,218.4,254.6);
p.frameBounds = [rect];


(lib.head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wensday_eyes_all1_mc();
	this.instance.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wensday_eyebrows1
	this.instance_1 = new lib.wensday_eyebrows1_mc();
	this.instance_1.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// head_wensday_rodinka
	this.instance_2 = new lib.head_wensday_rodinka_mc();
	this.instance_2.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// wensday_lips1
	this.instance_3 = new lib.wensday_lips1_mc();
	this.instance_3.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// wensday_shadow1_3
	this.instance_4 = new lib.wensday_shadow1_3_mc();
	this.instance_4.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// wensday_shadow1_2
	this.instance_5 = new lib.wensday_shadow1_2_mc();
	this.instance_5.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// wensday_shadow1_1
	this.instance_6 = new lib.wensday_shadow1_1_mc();
	this.instance_6.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// wensday_rouge1_2
	this.instance_7 = new lib.wensday_rouge1_2_mc();
	this.instance_7.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// head_wensday_small
	this.instance_8 = new lib.head_wensday_small_mc();
	this.instance_8.setTransform(-0.2,0.5,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.3,-127.7,218.7,255.5);
p.frameBounds = [rect];


(lib.head0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wensday_eyes_all1_mc();
	this.instance.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// wensday_eyebrows1
	this.instance_1 = new lib.wensday_eyebrows0_img();
	this.instance_1.setTransform(-108.9,-127.7,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// wensday_lips1
	this.instance_2 = new lib.wensday_lips0_mc();
	this.instance_2.setTransform(0.2,-0.4,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// wensday_shadow1_1
	this.instance_3 = new lib.wensday_shadow0_img();
	this.instance_3.setTransform(-108.9,-127.7,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// wensday_rouge1_2
	this.instance_4 = new lib.wensday_rouge0_img();
	this.instance_4.setTransform(-108.9,-127.7,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// head_wensday_small
	this.instance_5 = new lib.head_wensday_small_mc();
	this.instance_5.setTransform(-0.2,0.5,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.3,-127.7,218.7,255.5);
p.frameBounds = [rect];


(lib.hand_click_hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_arrow_1_mc();

	this.instance_1 = new lib.hand_arrow_2_mc();
	this.instance_1.setTransform(0,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:-200},20).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},15).wait(5).to({_off:false},0).to({y:0},15).wait(1));

	// animation
	this.instance_2 = new lib.animation_for_pointer_2_mc();
	this.instance_2.setTransform(-96,-360,0.111,0.111);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({scaleX:0.44,scaleY:0.44,alpha:0.801},5).to({alpha:0.012},5).to({_off:true},1).wait(8).to({_off:false,scaleX:0.11,scaleY:0.11},0).to({scaleX:0.44,scaleY:0.44,alpha:0.801},5).to({alpha:0.012},6).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-190,280,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-140,-200,280,380), new cjs.Rectangle(-140,-210,280,380), new cjs.Rectangle(-140,-220,280,380), new cjs.Rectangle(-140,-230,280,380), new cjs.Rectangle(-140,-240,280,380), new cjs.Rectangle(-140,-250,280,380), new cjs.Rectangle(-140,-260,280,380), new cjs.Rectangle(-140,-270,280,380), new cjs.Rectangle(-140,-280,280,380), new cjs.Rectangle(-140,-290,280,380), new cjs.Rectangle(-140,-300,280,380), new cjs.Rectangle(-140,-310,280,380), new cjs.Rectangle(-140,-320,280,380), new cjs.Rectangle(-140,-330,280,380), new cjs.Rectangle(-140,-340,280,380), new cjs.Rectangle(-140,-350,280,380), new cjs.Rectangle(-140,-360,280,380), new cjs.Rectangle(-140,-370,280,380), new cjs.Rectangle(-140,-380,280,380), rect=new cjs.Rectangle(-140,-390,280,380), rect, rect, rect, new cjs.Rectangle(-140,-393.9,280,384), new cjs.Rectangle(-140,-400,280,390), rect=new cjs.Rectangle(-140,-399.9,280,390), rect, rect, rect, new cjs.Rectangle(-140,-400,280,390), rect=new cjs.Rectangle(-140,-390,280,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-140,-393.9,280,384), new cjs.Rectangle(-140,-400,280,390), new cjs.Rectangle(-140,-399.9,280,390), new cjs.Rectangle(-140,-399.9,280,403.3), new cjs.Rectangle(-140,-399.9,280,416.6), new cjs.Rectangle(-140,-399.9,280,430), new cjs.Rectangle(-140,-399.9,280,443.3), new cjs.Rectangle(-140,-400,280,456.7), new cjs.Rectangle(-140,-310,280,380), new cjs.Rectangle(-140,-296.6,280,380), new cjs.Rectangle(-140,-283.3,280,380), new cjs.Rectangle(-140,-270,280,380), new cjs.Rectangle(-140,-256.6,280,380), new cjs.Rectangle(-140,-243.3,280,380), new cjs.Rectangle(-140,-230,280,380), new cjs.Rectangle(-140,-216.6,280,380), new cjs.Rectangle(-140,-203.3,280,380), new cjs.Rectangle(-140,-190,280,380)];


(lib.hand_arrow_checks_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(0,0,1,2,90);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(0,-90,1,2,-90);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-130,400,170);
p.frameBounds = [rect];


(lib.hand_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_arrow_1_mc();
	this.instance.setTransform(160,400,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({x:175,y:81,alpha:0.012},0).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-44.9,x:175.1,y:50.2,alpha:1},5).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-45,x:175,y:-160},34).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.hand_arrow_3_mc();
	this.instance_1.setTransform(1.5,10.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({y:-170.4},33).to({y:-193.4,alpha:0.012},5).to({_off:true},1).wait(11));

	// animation
	this.instance_2 = new lib.hand_arrow_4_mc();
	this.instance_2.setTransform(1.5,-92.9);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({alpha:1},6).wait(27).to({alpha:0.012},5).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.3,166.7,466.7,466.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-58.3,-232.9,466.7,547.3), new cjs.Rectangle(-57.7,-232.9,465.6,540.7), new cjs.Rectangle(-57.7,-232.9,465.4,534.5), new cjs.Rectangle(-57.5,-232.9,465.3,528.2), new cjs.Rectangle(-57.5,-232.9,465.1,521.9), new cjs.Rectangle(-57.8,-232.9,465.8,516.1), new cjs.Rectangle(-57.4,-232.9,465,509.5), new cjs.Rectangle(-57.4,-232.9,465,503.3), new cjs.Rectangle(-57.4,-232.9,465.1,497.2), new cjs.Rectangle(-57.4,-232.9,465.1,491.1), new cjs.Rectangle(-57.4,-232.9,465.1,484.9), new cjs.Rectangle(-57.5,-232.9,465.1,478.7), new cjs.Rectangle(-57.4,-232.9,465.1,472.5), new cjs.Rectangle(-57.4,-232.9,465.1,466.4), new cjs.Rectangle(-57.4,-238.2,465.2,465.4), new cjs.Rectangle(-57.5,-244.4,465.2,465.5), new cjs.Rectangle(-57.5,-250.6,465.2,465.5), new cjs.Rectangle(-57.5,-256.7,465.3,465.5), new cjs.Rectangle(-57.5,-262.9,465.3,465.5), new cjs.Rectangle(-57.5,-269.1,465.3,465.6), new cjs.Rectangle(-57.6,-275.3,465.4,465.6), new cjs.Rectangle(-57.6,-281.5,465.4,465.6), new cjs.Rectangle(-57.6,-287.7,465.4,465.6), new cjs.Rectangle(-57.6,-293.9,465.4,465.7), new cjs.Rectangle(-57.6,-300.1,465.4,465.7), new cjs.Rectangle(-57.6,-306.2,465.4,465.7), new cjs.Rectangle(-57.7,-312.4,465.5,465.7), new cjs.Rectangle(-57.7,-318.7,465.5,465.8), new cjs.Rectangle(-57.7,-324.9,465.5,465.8), new cjs.Rectangle(-57.7,-331,465.6,465.8), new cjs.Rectangle(-57.7,-337.2,465.6,465.8), new cjs.Rectangle(-57.7,-343.4,465.6,465.9), new cjs.Rectangle(-57.7,-349.6,465.6,465.9), new cjs.Rectangle(-57.8,-355.8,465.6,465.9), new cjs.Rectangle(-57.8,-362,465.7,465.9), new cjs.Rectangle(-57.8,-368.3,465.7,466), new cjs.Rectangle(-57.8,-374.4,465.7,466), new cjs.Rectangle(-57.8,-380.6,465.7,466), new cjs.Rectangle(-57.8,-386.7,465.8,466), new cjs.Rectangle(-58.3,-393.3,466.7,466.7), rect=new cjs.Rectangle(-57.8,-392.9,465.8,466), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-58.3,-393.3,466.7,466.7)];


(lib.h3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_fringe1
	this.instance = new lib.hero_fringe1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// head1
	this.instance_1 = new lib.head3_mc();
	this.instance_1.setTransform(7.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156,-151.5,312,303);
p.frameBounds = [rect];


(lib.h2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_fringe1
	this.instance = new lib.hero_fringe1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// head1
	this.instance_1 = new lib.head2_mc();
	this.instance_1.setTransform(7.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156,-151.5,312,303);
p.frameBounds = [rect];


(lib.h1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_fringe1_mc();

	this.instance_1 = new lib.head1_mc();
	this.instance_1.setTransform(7.2,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156,-151.5,312,303);
p.frameBounds = [rect];


(lib.h0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero_fringe1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.head0_mc();
	this.instance_1.setTransform(7.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156,-151.5,312,303);
p.frameBounds = [rect];


(lib.first_title_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_first_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-120,490,240);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.decor_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_1_mc();
	this.instance.setTransform(-63,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.88,scaleY:0.88},20).to({scaleX:1.13,scaleY:1.13},20).to({scaleX:1,scaleY:1},20).wait(61));

	// animation
	this.instance_1 = new lib.decor_title_2_mc();
	this.instance_1.setTransform(-140,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({scaleX:0.84,scaleY:0.84},20).to({scaleX:1.11,scaleY:1.11},20).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-113,252,228);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-235,-113,251.6,227.6), new cjs.Rectangle(-235,-113,251,227), new cjs.Rectangle(-235,-113,250.6,226.6), new cjs.Rectangle(-235,-113,250,226), new cjs.Rectangle(-235,-113,249.5,225.5), new cjs.Rectangle(-235,-113,249.1,225.1), new cjs.Rectangle(-235,-113,248.5,224.5), new cjs.Rectangle(-235,-113,248.1,224.1), new cjs.Rectangle(-235,-113,247.5,223.5), new cjs.Rectangle(-235,-113,247,223.1), new cjs.Rectangle(-235,-113,246.6,222.6), new cjs.Rectangle(-235,-113,246,222.1), new cjs.Rectangle(-235,-113,245.6,221.6), new cjs.Rectangle(-235,-113,245,221.1), new cjs.Rectangle(-235,-113,244.5,220.6), new cjs.Rectangle(-235,-113,244.1,220.1), new cjs.Rectangle(-235,-113,243.5,219.6), new cjs.Rectangle(-235,-113,243.1,219.1), new cjs.Rectangle(-235,-113,242.5,218.6), new cjs.Rectangle(-235,-113,242,218), new cjs.Rectangle(-235,-113,243.1,219.1), new cjs.Rectangle(-235,-113,244.1,220.1), new cjs.Rectangle(-235,-113,245.1,221.1), new cjs.Rectangle(-235,-113,246.1,222.1), new cjs.Rectangle(-235,-113,247.1,223.1), new cjs.Rectangle(-235,-113,248.1,224.1), new cjs.Rectangle(-235,-113,249.1,225.1), new cjs.Rectangle(-235,-113,250.1,226.1), new cjs.Rectangle(-235,-113,251.1,227.1), new cjs.Rectangle(-235,-113,252.1,228), new cjs.Rectangle(-235,-113,253.1,229), new cjs.Rectangle(-235,-113,254.1,230.1), new cjs.Rectangle(-235,-113,255.1,231.1), new cjs.Rectangle(-235,-113,256.1,232), new cjs.Rectangle(-235,-113,257.1,233), new cjs.Rectangle(-235,-113,258.1,234), new cjs.Rectangle(-235,-113,259.1,235.1), new cjs.Rectangle(-235,-113,260.1,236), new cjs.Rectangle(-235,-113,261.1,237), new cjs.Rectangle(-235,-113,262,238), new cjs.Rectangle(-235,-113,261.6,237.6), new cjs.Rectangle(-235,-113,261.1,237.1), new cjs.Rectangle(-235,-113,260.6,236.6), new cjs.Rectangle(-235,-113,260.1,236.1), new cjs.Rectangle(-235,-113,259.6,235.6), new cjs.Rectangle(-235,-113,259.1,235.1), new cjs.Rectangle(-235,-113,258.6,234.6), new cjs.Rectangle(-235,-113,258.1,234.1), new cjs.Rectangle(-235,-113,257.6,233.6), new cjs.Rectangle(-235,-113,257.1,233.1), new cjs.Rectangle(-235,-113,256.6,232.5), new cjs.Rectangle(-235,-113,256.1,232), new cjs.Rectangle(-235,-113,255.6,231.5), new cjs.Rectangle(-235,-113,255.1,231), new cjs.Rectangle(-235,-113,254.6,230.5), new cjs.Rectangle(-235,-113,254.1,230), new cjs.Rectangle(-235,-113,253.6,229.5), new cjs.Rectangle(-235,-113,253.1,229), new cjs.Rectangle(-235,-113,252.6,228.6), new cjs.Rectangle(-235,-113,252,228), new cjs.Rectangle(-234.2,-112.2,251.3,227.3), new cjs.Rectangle(-233.4,-111.4,250.5,226.5), new cjs.Rectangle(-232.7,-110.7,249.8,225.8), new cjs.Rectangle(-231.9,-109.9,249,225), new cjs.Rectangle(-231.2,-109.2,248.2,224.2), new cjs.Rectangle(-230.4,-108.4,247.5,223.5), new cjs.Rectangle(-229.7,-107.7,246.7,222.7), new cjs.Rectangle(-228.9,-106.9,246,222), new cjs.Rectangle(-228.2,-106.2,245.2,221.2), new cjs.Rectangle(-227.4,-105.4,244.5,220.5), new cjs.Rectangle(-226.7,-104.7,243.7,219.8), new cjs.Rectangle(-225.9,-104,243,219), new cjs.Rectangle(-225.2,-103.2,242.2,218.3), new cjs.Rectangle(-224.4,-102.5,241.5,217.5), new cjs.Rectangle(-223.7,-101.7,240.7,216.8), new cjs.Rectangle(-222.9,-101,240,216), new cjs.Rectangle(-222.2,-100.2,239.2,215.3), new cjs.Rectangle(-221.4,-99.5,238.5,214.5), new cjs.Rectangle(-220.7,-98.7,237.7,213.8), new cjs.Rectangle(-220,-98,237,213), new cjs.Rectangle(-221.2,-99.2,238.2,214.2), new cjs.Rectangle(-222.4,-100.4,239.5,215.5), new cjs.Rectangle(-223.7,-101.6,240.7,216.7), new cjs.Rectangle(-225,-102.9,242,218), new cjs.Rectangle(-226.2,-104.2,243.2,219.2), new cjs.Rectangle(-227.4,-105.4,244.5,220.4), new cjs.Rectangle(-228.7,-106.7,245.7,221.7), new cjs.Rectangle(-230,-107.9,247,223), new cjs.Rectangle(-231.2,-109.1,248.2,224.2), new cjs.Rectangle(-232.4,-110.4,249.5,225.5), new cjs.Rectangle(-233.7,-111.6,250.8,226.7), new cjs.Rectangle(-235,-112.9,252,227.9), new cjs.Rectangle(-236.2,-114.2,253.3,229.2), new cjs.Rectangle(-237.5,-115.4,254.5,230.4), new cjs.Rectangle(-238.7,-116.7,255.8,231.7), new cjs.Rectangle(-240,-117.9,257.1,233), new cjs.Rectangle(-241.2,-119.1,258.3,234.2), new cjs.Rectangle(-242.5,-120.4,259.5,235.5), new cjs.Rectangle(-243.7,-121.6,260.8,236.7), new cjs.Rectangle(-245,-123,262,238), new cjs.Rectangle(-244.4,-122.4,261.5,237.5), new cjs.Rectangle(-243.9,-121.9,261,237), new cjs.Rectangle(-243.4,-121.4,260.5,236.4), new cjs.Rectangle(-242.9,-120.9,260,236), new cjs.Rectangle(-242.4,-120.4,259.5,235.5), new cjs.Rectangle(-241.9,-119.9,259,234.9), new cjs.Rectangle(-241.4,-119.4,258.5,234.4), new cjs.Rectangle(-240.9,-118.9,258,234), new cjs.Rectangle(-240.4,-118.4,257.5,233.5), new cjs.Rectangle(-239.9,-117.8,256.9,232.9), new cjs.Rectangle(-239.4,-117.4,256.4,232.4), new cjs.Rectangle(-238.9,-116.9,255.9,231.9), new cjs.Rectangle(-238.4,-116.3,255.4,231.4), new cjs.Rectangle(-237.9,-115.8,254.9,230.9), new cjs.Rectangle(-237.4,-115.4,254.4,230.4), new cjs.Rectangle(-236.9,-114.9,253.9,229.9), new cjs.Rectangle(-236.4,-114.3,253.4,229.4), new cjs.Rectangle(-235.9,-113.9,252.9,228.9), new cjs.Rectangle(-235.4,-113.4,252.4,228.4), new cjs.Rectangle(-235,-113,252,228)];


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


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_8_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.check_7_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.check_6_img();
	this.instance_3.setTransform(-60,-60);

	this.instance_4 = new lib.check_5_img();
	this.instance_4.setTransform(-60,-60);

	this.instance_5 = new lib.check_4_img();
	this.instance_5.setTransform(-60,-60);

	this.instance_6 = new lib.check_3_img();
	this.instance_6.setTransform(-60,-60);

	this.instance_7 = new lib.check_2_img();
	this.instance_7.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.012}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.body_animation_circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_nav_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.circle_nav_mc();
	this.instance_1.alpha = 0.801;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.circle_nav_mc();
	this.instance_2.alpha = 0.801;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,x:25,alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40.9,120,81.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-63.2,-44,129,87.9), new cjs.Rectangle(-66.5,-47,138,94), new cjs.Rectangle(-69.7,-50.1,147,100.2), new cjs.Rectangle(-73,-53.2,156,106.3), new cjs.Rectangle(-76.2,-56.2,165,112.4), new cjs.Rectangle(-79.5,-59.3,174,118.6), new cjs.Rectangle(-82.7,-62.4,183,124.7), new cjs.Rectangle(-85.9,-65.4,192,130.8), new cjs.Rectangle(-89.2,-68.5,201,137), new cjs.Rectangle(-92.4,-71.6,210,143.1), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4), new cjs.Rectangle(-95.7,-74.7,219,149.2), new cjs.Rectangle(-98.9,-77.8,228,155.3), new cjs.Rectangle(-102.2,-80.8,237,161.4), new cjs.Rectangle(-105.4,-83.9,246,167.6), new cjs.Rectangle(-108.7,-86.9,255,173.7), new cjs.Rectangle(-111.9,-90,264,179.9), new cjs.Rectangle(-115.2,-93.1,273,186), new cjs.Rectangle(-118.4,-96.1,282,192.1), new cjs.Rectangle(-121.7,-99.2,291,198.3), new cjs.Rectangle(-125,-102.2,300,204.4)];


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


(lib.animation_circle_nav_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.body_animation_circle_nav_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.3,-36.3,106.6,72.7);
p.frameBounds = [rect];


(lib.animation_background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},60).to({alpha:1},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_16_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil1_mc();
	this.instance.setTransform(-69.6,14.4,1,1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-99.6,y:-15.6},9).to({x:-186.6,y:-27.6},20).to({x:-215.6,y:-12.6},10).to({x:-45.6,y:-16.6},10).to({x:39.4,y:-28.6},20).to({x:69.4,y:-16.6},10).to({x:-18.6,y:300.3,alpha:0.012},15).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96));

	// animation
	this.instance_2 = new lib.wensday_eyebrows1_mc();
	this.instance_2.setTransform(1.4,-55.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({alpha:1},70).wait(17));

	// animation
	this.instance_3 = new lib.wensday_eyebrows0_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},79).wait(17));

	// animation
	this.instance_4 = new lib.wensday_lips1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.instance_5 = new lib.wensday_shadow1_3_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.instance_7 = new lib.wensday_shadow1_2_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow1_1_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_rouge1_2_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_rouge1_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(96));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,611.8), new cjs.Rectangle(-414.1,-260.1,825,633), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_15_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mascara2_mc();
	this.instance.setTransform(125.4,112.4,1,1,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-99.2,x:-38.6,y:-58.6},9).to({x:-52.6,y:-70.6},5).to({x:-38.6,y:-58.6},5).to({rotation:-78.8,x:182.4,y:-37.6},13).to({x:183.4,y:-47.6},8).to({x:182.4,y:-37.6},9).to({rotation:-57,x:149.4,y:377.4,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all2_1_mc();
	this.instance_1.setTransform(1.4,-55.6);
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.wensday_eyes_all2_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},40).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({alpha:1},40).wait(14).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.wensday_eyes0_1_img();
	this.instance_3.setTransform(-170.1,-255.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},49).wait(16));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65));

	// animation
	this.instance_5 = new lib.wensday_lips3_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65));

	// animation
	this.instance_7 = new lib.wensday_shadow3_3_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow3_2_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow3_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_rouge3_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(65));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,633), new cjs.Rectangle(-414.1,-260.1,825,664.5), new cjs.Rectangle(-414.1,-260.1,825,696.1), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_15_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick1_mc();
	this.instance.setTransform(-99,143.4,1,1,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-66,y:129.4},7).to({x:-43,y:118.4},7).to({x:-29,y:124.4},6).to({x:-21,y:113.4},7).to({x:12,y:128.4},7).to({x:-31,y:145.4},10).to({x:-70,y:128.4},10).to({x:-117,y:315.3,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// animation
	this.instance_2 = new lib.wensday_eyebrows2_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	// animation
	this.instance_3 = new lib.wensday_lips2_2_mc();
	this.instance_3.setTransform(1.4,-55.6);
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({alpha:1},47).wait(16));

	// animation
	this.instance_4 = new lib.wensday_lips2_1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// animation
	this.instance_5 = new lib.wensday_lips0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

	// animation
	this.instance_6 = new lib.wensday_shadow2_3_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.instance_7 = new lib.wensday_shadow2_2_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow2_4_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow2_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(70));

	// animation
	this.instance_10 = new lib.hero_body_makeup_mc();
	this.instance_10.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// animation
	this.instance_11 = new lib.cl_mk1_mc();
	this.instance_11.setTransform(272.4,-28.6);
	this.instance_11.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(-275.6,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,617.8), new cjs.Rectangle(-414.1,-260.1,825,631.2), new cjs.Rectangle(-414.1,-260.1,825,644.6), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil1_mc();
	this.instance.setTransform(273.4,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:49.2,x:-69.6,y:14.4},9).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.wensday_eyebrows1_mc();
	this.instance_2.setTransform(1.4,-55.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyebrows0_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_lips1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.instance_5 = new lib.wensday_shadow1_3_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.instance_7 = new lib.wensday_shadow1_2_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow1_1_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_rouge1_2_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_rouge1_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_14_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mascara2_mc();
	this.instance.setTransform(289.4,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-43.5,x:125.4,y:112.4},14).wait(1));

	// animation
	this.instance_1 = new lib.mascara1_mc();
	this.instance_1.setTransform(252.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:413.8,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_eyebrows3_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_lips3_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_lips0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_shadow3_3_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.instance_7 = new lib.wensday_shadow3_2_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow3_1_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_rouge3_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(15));

	// animation
	this.instance_10 = new lib.hero_body_makeup_mc();
	this.instance_10.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.cl_mk1_mc();
	this.instance_11.setTransform(272.4,-28.6);
	this.instance_11.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(-275.6,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,639.3), new cjs.Rectangle(-414.1,-260.1,825,672.3), new cjs.Rectangle(-414.1,-260.1,825,705.4), new cjs.Rectangle(-414.1,-260.1,825,738.5), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_14_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick1_mc();
	this.instance.setTransform(-274,-30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:38.2,x:-99,y:143.4},9).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.wensday_eyebrows2_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_lips2_2_mc();
	this.instance_3.setTransform(1.4,-55.6);
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_lips2_1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_lips0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_shadow2_3_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.instance_7 = new lib.wensday_shadow2_2_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow2_4_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow2_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// animation
	this.instance_10 = new lib.hero_body_makeup_mc();
	this.instance_10.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.cl_mk1_mc();
	this.instance_11.setTransform(272.4,-28.6);
	this.instance_11.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(-275.6,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick1_mc();
	this.instance.setTransform(-99,143.4,1,1,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-66,y:129.4},7).to({x:-43,y:118.4},7).to({x:-29,y:124.4},6).to({x:-21,y:113.4},7).to({x:12,y:128.4},7).to({x:-31,y:145.4},10).to({x:-70,y:128.4},10).to({x:-117,y:315.3,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.pencil1_mc();
	this.instance_1.setTransform(273.4,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	// animation
	this.instance_3 = new lib.wensday_eyebrows1_mc();
	this.instance_3.setTransform(1.4,-55.6);
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

	// animation
	this.instance_4 = new lib.wensday_eyebrows0_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// animation
	this.instance_5 = new lib.wensday_lips1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({alpha:1},47).wait(16));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},54).wait(16));

	// animation
	this.instance_7 = new lib.wensday_shadow1_3_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.head_wensday_rodinka_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow1_2_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_shadow1_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.instance_11 = new lib.wensday_rouge1_2_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.instance_12 = new lib.wensday_rouge1_1_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(70));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(70));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,617.8), new cjs.Rectangle(-414.1,-260.1,825,631.2), new cjs.Rectangle(-414.1,-260.1,825,644.6), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_13_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick3_mc();
	this.instance.setTransform(-99,143.4,1,1,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-66,y:129.4},7).to({x:-43,y:118.4},7).to({x:-29,y:124.4},6).to({x:-21,y:113.4},7).to({x:12,y:128.4},7).to({x:-31,y:145.4},10).to({x:-70,y:128.4},10).to({x:-117,y:315.3,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.mascara2_mc();
	this.instance_1.setTransform(289.4,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// animation
	this.instance_2 = new lib.mascara1_mc();
	this.instance_2.setTransform(252.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// animation
	this.instance_5 = new lib.wensday_lips3_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({alpha:1},47).wait(16));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

	// animation
	this.instance_7 = new lib.wensday_shadow3_3_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow3_2_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow3_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_rouge3_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(70));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,617.8), new cjs.Rectangle(-414.1,-260.1,825,631.2), new cjs.Rectangle(-414.1,-260.1,825,644.6), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_13_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick2_mc();
	this.instance.setTransform(-88.6,164.3,1,1,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:33.2,x:-58.6,y:136.4},9).to({x:-41.6,y:119.4},8).to({x:-23.6,y:135.3},6).to({x:-6.6,y:112.3},8).to({x:14.8,y:135.8},8).to({x:-26.7,y:152.8},10).to({x:-62.2,y:139.3},13).to({x:-23.2,y:131.3},13).to({x:7.3,y:132.3},15).to({y:416.3},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.lipstick1_mc();
	this.instance_1.setTransform(-274,-30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106));

	// animation
	this.instance_3 = new lib.wensday_eyebrows2_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106));

	// animation
	this.instance_4 = new lib.wensday_lips2_2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(106));

	// animation
	this.instance_5 = new lib.wensday_lips2_1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({alpha:1},81).wait(16));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(106));

	// animation
	this.instance_7 = new lib.wensday_shadow2_3_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow2_2_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_shadow2_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(106));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(106));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(106));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,626), new cjs.Rectangle(-414.1,-260.1,825,646.2), new cjs.Rectangle(-414.1,-260.1,825,666.5), new cjs.Rectangle(-414.1,-260.1,825,686.8), new cjs.Rectangle(-414.1,-260.1,825,707.1), new cjs.Rectangle(-414.1,-260.1,825,727.3), new cjs.Rectangle(-414.1,-260.1,825,747.8), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick1_mc();
	this.instance.setTransform(-273,-25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:38.2,x:-99,y:143.4},9).wait(1));

	// animation
	this.instance_1 = new lib.pencil1_mc();
	this.instance_1.setTransform(273.4,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyebrows1_mc();
	this.instance_3.setTransform(1.4,-55.6);
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_eyebrows0_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_lips1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.wensday_shadow1_3_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.head_wensday_rodinka_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow1_2_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_shadow1_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.instance_11 = new lib.wensday_rouge1_2_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.instance_12 = new lib.wensday_rouge1_1_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(10));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_12_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick3_mc();
	this.instance.setTransform(-273,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:38.2,x:-99,y:143.4},9).wait(1));

	// animation
	this.instance_1 = new lib.mascara2_mc();
	this.instance_1.setTransform(289.4,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.mascara1_mc();
	this.instance_2.setTransform(252.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_lips3_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.wensday_shadow3_3_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow3_2_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow3_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_rouge3_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(10));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lipstick2_mc();
	this.instance.setTransform(273.4,-30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:32,x:-88.6,y:164.3},14).wait(1));

	// animation
	this.instance_1 = new lib.lipstick1_mc();
	this.instance_1.setTransform(-274,-30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_eyebrows2_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_lips2_2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_lips2_1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_shadow2_3_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow2_2_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_shadow2_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(15));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka1_mc();
	this.instance.setTransform(150,118.4,1,1,-41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:48,y:75.4},11).to({x:0,y:21.4},8).to({rotation:-103.4,x:-34,y:-80.6},10).to({x:-20,y:-40.6},5).to({x:1,y:-17.6},5).to({rotation:-58.2,x:67.8,y:54.4},10).to({x:121.8},10).to({rotation:-45,x:138.8,y:23.4},10).to({x:212.8,y:18.4},12).to({x:191.8,y:81.4},9).to({x:108.8,y:73.4},13).to({x:126.8,y:369.3,alpha:0.012},9).to({_off:true},1).wait(32));

	// animation
	this.instance_1 = new lib.cosmet_mc();
	this.instance_1.setTransform(-0.6,374.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({y:221.3},10).wait(10).to({y:385.3,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.pencil1_mc();
	this.instance_2.setTransform(-3.6,221.3,1,1,56.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(123).to({_off:false},0).to({rotation:40.7,x:53.4,y:180.3},10).to({rotation:0,x:273.4,y:-28.6},11).wait(1));

	// animation
	this.instance_3 = new lib.lipstick1_mc();
	this.instance_3.setTransform(-25,223.3,1,1,-20.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(123).to({_off:false},0).to({x:-36,y:175.3},10).to({rotation:0,x:-273,y:-25.6},11).wait(1));

	// animation
	this.instance_4 = new lib.wensday_eyes_all1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(145));

	// animation
	this.instance_5 = new lib.wensday_eyebrows1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(145));

	// animation
	this.instance_6 = new lib.wensday_eyebrows0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145));

	// animation
	this.instance_7 = new lib.wensday_lips1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(145));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(145));

	// animation
	this.instance_9 = new lib.wensday_shadow1_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({alpha:1},92).wait(42));

	// animation
	this.instance_10 = new lib.head_wensday_rodinka_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.instance_11 = new lib.wensday_shadow1_2_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.instance_12 = new lib.wensday_shadow1_1_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.instance_13 = new lib.wensday_rouge1_2_mc();
	this.instance_13.setTransform(1.4,-55.6);

	this.instance_14 = new lib.wensday_rouge1_1_mc();
	this.instance_14.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(145));

	// animation
	this.instance_15 = new lib.hero_body_makeup_mc();
	this.instance_15.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(145));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(272.4,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(145));

	// animation
	this.instance_17 = new lib.cl_mk1_mc();
	this.instance_17.setTransform(-275.6,-28.6);
	this.instance_17.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,614.9), new cjs.Rectangle(-414.1,-260.1,825,647.8), new cjs.Rectangle(-414.1,-260.1,825,680.7), new cjs.Rectangle(-414.1,-260.1,825,713.6), new cjs.Rectangle(-414.1,-260.1,825,713.4), new cjs.Rectangle(-414.1,-260.1,825,698.1), new cjs.Rectangle(-414.1,-260.1,825,682.8), new cjs.Rectangle(-414.1,-260.1,825,667.5), new cjs.Rectangle(-414.1,-260.1,825,652.2), new cjs.Rectangle(-414.1,-260.1,825,637), new cjs.Rectangle(-414.1,-260.1,825,621.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,609.7), new cjs.Rectangle(-414.1,-260.1,825,626.1), new cjs.Rectangle(-414.1,-260.1,825,642.5), new cjs.Rectangle(-414.1,-260.1,825,658.8), new cjs.Rectangle(-414.1,-260.1,825,675.3), new cjs.Rectangle(-414.1,-260.1,825,691.7), new cjs.Rectangle(-414.1,-260.1,825,708.1), new cjs.Rectangle(-414.1,-260.1,825,724.5), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_11_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-0.6,374.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({y:221.3},10).wait(10).to({y:385.3,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.lipstick3_mc();
	this.instance_1.setTransform(3,222.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({rotation:-29.2,x:-39,y:153.3},10).to({rotation:0,x:-273,y:-27.6},10).wait(1));

	// animation
	this.instance_2 = new lib.mascara2_mc();
	this.instance_2.setTransform(23.4,207.8,1,1,-53.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({rotation:8.5,x:60.3,y:146.8},10).to({rotation:0,x:289.4,y:-37.5},10).wait(1));

	// animation
	this.instance_3 = new lib.mascara1_mc();
	this.instance_3.setTransform(-11.6,229.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105).to({_off:false},0).to({rotation:20,x:46.2,y:171.3},10).to({rotation:0,x:252.4,y:-16},10).wait(1));

	// animation
	this.instance_4 = new lib.pencil2_mc();
	this.instance_4.setTransform(-69.6,14.4,1,1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-99.6,y:-15.6},9).to({x:-186.6,y:-27.6},20).to({x:-215.6,y:-12.6},10).to({x:-45.6,y:-16.6},10).to({x:39.4,y:-28.6},20).to({x:69.4,y:-16.6},10).to({x:-18.6,y:300.3,alpha:0.012},15).to({_off:true},1).wait(31));

	// animation
	this.instance_5 = new lib.wensday_eyes_all1_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(126));

	// animation
	this.instance_6 = new lib.wensday_eyebrows3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({alpha:1},70).wait(47));

	// animation
	this.instance_7 = new lib.wensday_eyebrows0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},79).wait(47));

	// animation
	this.instance_8 = new lib.wensday_lips3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(126));

	// animation
	this.instance_9 = new lib.wensday_lips0_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(126));

	// animation
	this.instance_10 = new lib.wensday_shadow3_3_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.instance_11 = new lib.wensday_shadow3_2_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.instance_12 = new lib.wensday_shadow3_1_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.instance_13 = new lib.wensday_rouge3_mc();
	this.instance_13.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(126));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(126));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(126));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,611.8), new cjs.Rectangle(-414.1,-260.1,825,633), new cjs.Rectangle(-414.1,-260.1,825,713.4), new cjs.Rectangle(-414.1,-260.1,825,698.1), new cjs.Rectangle(-414.1,-260.1,825,682.8), new cjs.Rectangle(-414.1,-260.1,825,667.5), new cjs.Rectangle(-414.1,-260.1,825,652.2), new cjs.Rectangle(-414.1,-260.1,825,637), new cjs.Rectangle(-414.1,-260.1,825,621.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,609.7), new cjs.Rectangle(-414.1,-260.1,825,626.1), new cjs.Rectangle(-414.1,-260.1,825,642.5), new cjs.Rectangle(-414.1,-260.1,825,658.8), new cjs.Rectangle(-414.1,-260.1,825,675.3), new cjs.Rectangle(-414.1,-260.1,825,691.7), new cjs.Rectangle(-414.1,-260.1,825,708.1), new cjs.Rectangle(-414.1,-260.1,825,724.5)];


(lib.animation_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka1_mc();
	this.instance.setTransform(118,108.4,1,1,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:53,y:69.4},9).to({x:33,y:34.4},5).to({rotation:-6.5,x:-67,y:51.4},10).to({x:-109,y:55.6},10).to({x:-127,y:47.6},5).to({rotation:41.8,x:-35,y:70.6},10).to({rotation:103,x:-37,y:-76.4},6).to({x:31,y:-71.4},12).to({x:43,y:-79.4},6).to({rotation:38.8,x:58,y:416.5,alpha:0.012},10).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.cosmet_mc();
	this.instance_1.setTransform(-0.6,374.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).to({y:221.3},10).wait(10).to({y:385.3,alpha:0.012},10).wait(1));

	// animation
	this.instance_2 = new lib.lipstick1_mc();
	this.instance_2.setTransform(5,221.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({rotation:-16.5,x:-24,y:159.3},10).to({rotation:0,x:-274,y:-30.6},10).wait(1));

	// animation
	this.instance_3 = new lib.lipstick2_mc();
	this.instance_3.setTransform(5,221.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(93).to({_off:false},0).to({rotation:22.2,x:35.4,y:168.3},10).to({rotation:0,x:273.4,y:-30.6},10).wait(1));

	// animation
	this.instance_4 = new lib.wensday_eyes_all1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114));

	// animation
	this.instance_5 = new lib.wensday_eyebrows2_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(114));

	// animation
	this.instance_6 = new lib.wensday_lips2_2_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114));

	// animation
	this.instance_7 = new lib.wensday_lips2_1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114));

	// animation
	this.instance_9 = new lib.wensday_shadow2_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({alpha:1},62).wait(41));

	// animation
	this.instance_10 = new lib.wensday_shadow2_2_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114));

	// animation
	this.instance_11 = new lib.wensday_shadow2_4_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.instance_12 = new lib.wensday_shadow2_1_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(114));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(114));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(114));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,652.5), new cjs.Rectangle(-414.1,-260.1,825,710.7), new cjs.Rectangle(-414.1,-260.1,825,768.1), new cjs.Rectangle(-414.1,-260.1,825,698.1), new cjs.Rectangle(-414.1,-260.1,825,682.8), new cjs.Rectangle(-414.1,-260.1,825,667.5), new cjs.Rectangle(-414.1,-260.1,825,652.2), new cjs.Rectangle(-414.1,-260.1,825,637), new cjs.Rectangle(-414.1,-260.1,825,621.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,609.7), new cjs.Rectangle(-414.1,-260.1,825,626.1), new cjs.Rectangle(-414.1,-260.1,825,642.5), new cjs.Rectangle(-414.1,-260.1,825,658.8), new cjs.Rectangle(-414.1,-260.1,825,675.3), new cjs.Rectangle(-414.1,-260.1,825,691.7), new cjs.Rectangle(-414.1,-260.1,825,708.1), new cjs.Rectangle(-414.1,-260.1,825,724.5)];


(lib.animation_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka1_mc();
	this.instance.setTransform(150,118.4,1,1,-41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-99.6,x:160,y:44.4},9).to({rotation:-62.7,x:148,y:112.4},10).to({rotation:-99.6,x:160,y:44.4},10).to({rotation:-62.7,x:148,y:112.4},10).to({rotation:-41.7,x:150,y:118.4},10).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// animation
	this.instance_2 = new lib.wensday_eyebrows1_mc();
	this.instance_2.setTransform(1.4,-55.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.wensday_eyebrows0_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// animation
	this.instance_4 = new lib.wensday_lips1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// animation
	this.instance_5 = new lib.wensday_lips0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.wensday_shadow1_3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.head_wensday_rodinka_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({alpha:1},30).wait(11));

	// animation
	this.instance_8 = new lib.wensday_shadow1_2_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow1_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_rouge1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.instance_11 = new lib.wensday_rouge1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(50));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_10_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil2_mc();
	this.instance.setTransform(273.4,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:44.3,x:-70.6,y:4.3},9).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.wensday_eyebrows3_mc();
	this.instance_2.setTransform(1.4,-55.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyebrows0_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_lips3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_lips0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_shadow3_3_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.instance_7 = new lib.wensday_shadow3_2_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.instance_8 = new lib.wensday_shadow3_1_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_rouge3_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// animation
	this.instance_10 = new lib.hero_body_makeup_mc();
	this.instance_10.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.cl_mk1_mc();
	this.instance_11.setTransform(272.4,-28.6);
	this.instance_11.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(-275.6,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka1_mc();
	this.instance.setTransform(275,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-44.7,x:118,y:108.4},14).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.wensday_eyebrows2_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_lips2_2_mc();
	this.instance_3.setTransform(1.4,-55.6);
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_lips2_1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_lips0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_shadow2_3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_shadow2_2_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_shadow2_4_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow2_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(15));

	// animation
	this.instance_10 = new lib.hero_body_makeup_mc();
	this.instance_10.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.cl_mk1_mc();
	this.instance_11.setTransform(272.4,-28.6);
	this.instance_11.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(-275.6,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka1_mc();
	this.instance.setTransform(270,-32.6,1,1,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-41.7,x:150,y:118.4},9).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.wensday_eyebrows1_mc();
	this.instance_2.setTransform(1.4,-55.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyebrows0_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.head_wensday_rodinka_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_lips1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.wensday_shadow1_3_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.wensday_shadow1_2_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.instance_9 = new lib.wensday_shadow1_1_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_rouge1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.instance_11 = new lib.wensday_rouge1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(11.4,166,1,1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-125.9,x:-92.6,y:102},9).to({scaleX:0.83,scaleY:0.83,x:-101.6,y:108},2).to({scaleX:1,scaleY:1,x:-92.6,y:102},2).to({scaleX:0.83,scaleY:0.83,x:-101.6,y:108},2).to({scaleX:1,scaleY:1,x:-92.6,y:102},2).to({rotation:-45.6,x:-73.6,y:4},12).to({rotation:-45.6,x:-40.6,y:-11},7).to({x:-2.6,y:24},9).to({x:-44.6,y:20},8).to({x:97.4,y:19},11).to({x:120.4,y:-11},7).to({x:160.4,y:-1},9).to({x:124.4,y:29},8).to({x:225.4,y:368.9,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-153.6,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({y:415,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.pencil2_mc();
	this.instance_2.setTransform(273.4,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102));

	// animation
	this.instance_3 = new lib.wensday_eyes_closed_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.instance_4 = new lib.wensday_eyes_all1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},101).wait(1));

	// animation
	this.instance_5 = new lib.wensday_eyebrows3_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102));

	// animation
	this.instance_6 = new lib.wensday_eyebrows0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(102));

	// animation
	this.instance_7 = new lib.wensday_lips3_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102));

	// animation
	this.instance_9 = new lib.wensday_shadow3_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({alpha:1},59).wait(14));

	// animation
	this.instance_10 = new lib.wensday_shadow3_2_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.instance_11 = new lib.wensday_shadow3_1_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.instance_12 = new lib.wensday_rouge3_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(102));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(102));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(102));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,626.8), new cjs.Rectangle(-414.1,-260.1,825,649.1), new cjs.Rectangle(-414.1,-260.1,825,671.3), new cjs.Rectangle(-414.1,-260.1,825,693.6), new cjs.Rectangle(-414.1,-260.1,825,715.8), new cjs.Rectangle(-414.1,-260.1,825,738.1), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka2_mc();
	this.instance.setTransform(-207.6,84.2,1,1,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:70.5,x:-228.6,y:-7.8},9).to({x:-196.6,y:45.3},11).to({rotation:30.2,x:-121.6,y:105.3},5).to({rotation:-11,x:-2.6,y:105.7},4).to({rotation:37.7,x:-26.6,y:85.7},10).to({x:24.4,y:98.7},8).to({rotation:9.5,x:100.4,y:106.7},7).to({rotation:-31.2,x:204.4,y:41.7},10).to({rotation:-31.2,x:222.4,y:359.7,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.podvodka1_mc();
	this.instance_1.setTransform(275,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.wensday_eyebrows2_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.wensday_lips2_2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.wensday_lips2_1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// animation
	this.instance_7 = new lib.wensday_shadow2_3_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.wensday_shadow2_2_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({alpha:1},55).wait(16));

	// animation
	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_shadow2_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(80));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,627.7), new cjs.Rectangle(-414.1,-260.1,825,650.3), new cjs.Rectangle(-414.1,-260.1,825,673.1), new cjs.Rectangle(-414.1,-260.1,825,695.8), new cjs.Rectangle(-414.1,-260.1,825,718.5), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(17.4,162,1,1,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-125.3,x:-93.6,y:147},9).to({scaleX:0.9,scaleY:0.9,rotation:-125.3,x:-97.6,y:149},2).to({scaleX:1,scaleY:1,x:-93.6,y:147},2).to({scaleX:0.9,scaleY:0.9,x:-97.6,y:149},2).to({scaleX:1,scaleY:1,x:-93.6,y:147},2).to({rotation:-45.6,x:-73.6,y:4},12).to({rotation:-45.6,x:-40.6,y:-11},7).to({x:-2.6,y:24},9).to({x:-44.6,y:20},8).to({x:97.4,y:19},11).to({x:120.4,y:-11},7).to({x:160.4,y:-1},9).to({x:124.4,y:29},8).to({x:225.4,y:368.9,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-153.6,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({y:375,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.podvodka1_mc();
	this.instance_2.setTransform(270,-32.6,1,1,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102));

	// animation
	this.instance_3 = new lib.wensday_eyes_closed_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.instance_4 = new lib.wensday_eyes_all1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},101).wait(1));

	// animation
	this.instance_5 = new lib.wensday_eyebrows1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102));

	// animation
	this.instance_6 = new lib.wensday_eyebrows0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(102));

	// animation
	this.instance_7 = new lib.head_wensday_rodinka_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102));

	// animation
	this.instance_8 = new lib.wensday_lips1_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102));

	// animation
	this.instance_9 = new lib.wensday_lips0_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(102));

	// animation
	this.instance_10 = new lib.wensday_shadow1_3_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(102));

	// animation
	this.instance_11 = new lib.wensday_shadow1_2_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({alpha:1},59).wait(14));

	// animation
	this.instance_12 = new lib.wensday_shadow1_1_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(102));

	// animation
	this.instance_13 = new lib.wensday_rouge1_2_mc();
	this.instance_13.setTransform(1.4,-55.6);

	this.instance_14 = new lib.wensday_rouge1_1_mc();
	this.instance_14.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(102));

	// animation
	this.instance_15 = new lib.hero_body_makeup_mc();
	this.instance_15.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(102));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(272.4,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(102));

	// animation
	this.instance_17 = new lib.cl_mk1_mc();
	this.instance_17.setTransform(-275.6,-28.6);
	this.instance_17.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,622.5), new cjs.Rectangle(-414.1,-260.1,825,641.3), new cjs.Rectangle(-414.1,-260.1,825,660.3), new cjs.Rectangle(-414.1,-260.1,825,679.2), new cjs.Rectangle(-414.1,-260.1,825,698.1), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(11.4,166,1,1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-125.9,x:-153.6,y:100},9).to({scaleX:0.84,scaleY:0.84,x:-163.6,y:104},2).to({scaleX:1,scaleY:1,x:-153.6,y:100},2).to({scaleX:0.84,scaleY:0.84,x:-163.6,y:104},2).to({scaleX:1,scaleY:1,x:-153.6,y:100},2).to({rotation:-51.2,x:-84.6,y:-25},12).to({rotation:-21.5,x:-73.6,y:-26},5).to({rotation:-51.2,x:-84.6,y:-25},5).to({rotation:-21.5,x:-73.6,y:-26},5).to({rotation:-32.2,x:134.4,y:-25},11).to({x:171.4,y:-15},6).to({rotation:-47.6,x:140.4,y:-33},5).to({x:17.4,y:162},11).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-153.6,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78));

	// animation
	this.instance_2 = new lib.pencil2_mc();
	this.instance_2.setTransform(273.4,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(78));

	// animation
	this.instance_3 = new lib.wensday_eyes_closed_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(78));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(78));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(78));

	// animation
	this.instance_6 = new lib.wensday_lips3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(78));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78));

	// animation
	this.instance_8 = new lib.wensday_shadow3_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(78));

	// animation
	this.instance_9 = new lib.wensday_shadow3_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({alpha:1},38).wait(12));

	// animation
	this.instance_10 = new lib.wensday_shadow3_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78));

	// animation
	this.instance_11 = new lib.wensday_rouge3_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(78));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(78));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.podvodka2_mc();
	this.instance.setTransform(-274.6,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:47,x:-207.6,y:84.2},14).wait(1));

	// animation
	this.instance_1 = new lib.podvodka1_mc();
	this.instance_1.setTransform(275,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_eyebrows2_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_lips2_2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_lips2_1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_shadow2_3_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_shadow2_2_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.instance_10 = new lib.wensday_shadow2_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(15));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(11.4,166,1,1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-125.9,x:-153.6,y:100},9).to({scaleX:0.84,scaleY:0.84,x:-163.6,y:104},2).to({scaleX:1,scaleY:1,x:-153.6,y:100},2).to({scaleX:0.84,scaleY:0.84,x:-163.6,y:104},2).to({scaleX:1,scaleY:1,x:-153.6,y:100},2).to({rotation:-51.2,x:-84.6,y:-25},12).to({rotation:-21.5,x:-73.6,y:-26},5).to({rotation:-51.2,x:-84.6,y:-25},5).to({x:-4.6,y:12},5).to({x:-2.6,y:29},6).to({x:-4.6,y:12},6).to({rotation:-126.2,x:85.4,y:-47},8).to({rotation:-105.5,x:108.4,y:-41},6).to({rotation:-126.2,x:85.4,y:-47},6).to({rotation:-32.2,x:134.4,y:-25},12).to({x:171.4,y:-15},6).to({rotation:-47.6,x:140.4,y:-33},5).to({x:17.4,y:162},11).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-153.6,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(111));

	// animation
	this.instance_2 = new lib.podvodka1_mc();
	this.instance_2.setTransform(270,-32.6,1,1,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(111));

	// animation
	this.instance_3 = new lib.wensday_eyes_closed_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(111));

	// animation
	this.instance_4 = new lib.wensday_eyebrows1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111));

	// animation
	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(111));

	// animation
	this.instance_7 = new lib.wensday_lips1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(111));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(111));

	// animation
	this.instance_9 = new lib.wensday_shadow1_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(111));

	// animation
	this.instance_10 = new lib.wensday_shadow1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(111));

	// animation
	this.instance_11 = new lib.wensday_shadow1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({alpha:1},70).wait(12));

	// animation
	this.instance_12 = new lib.wensday_rouge1_2_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.instance_13 = new lib.wensday_rouge1_1_mc();
	this.instance_13.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(111));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(111));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(111));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(219.4,356,1,1,-44.2);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:11.4,y:166,alpha:1},8).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-273.6,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-153.6,y:148},9).wait(6));

	// animation
	this.instance_2 = new lib.pencil2_mc();
	this.instance_2.setTransform(273.4,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_lips3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_shadow3_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow3_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.wensday_shadow3_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.wensday_rouge3_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,678.5), new cjs.Rectangle(-414.1,-260.1,825,654.7), new cjs.Rectangle(-414.1,-260.1,825,630.9), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect];


(lib.animation_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil1_mc();
	this.instance.setTransform(-69.6,14.4,1,1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-99.6,y:-15.6},9).to({x:-186.6,y:-27.6},20).to({x:-215.6,y:-12.6},10).to({x:-45.6,y:-16.6},10).to({x:39.4,y:-28.6},20).to({x:69.4,y:-16.6},10).to({x:-18.6,y:300.3,alpha:0.012},15).to({_off:true},1).wait(25));

	// animation
	this.instance_1 = new lib.cosmet_mc();
	this.instance_1.setTransform(-0.6,374.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({y:221.3},10).wait(10).to({y:385.3,alpha:0.012},10).wait(1));

	// animation
	this.instance_2 = new lib.podvodka1_mc();
	this.instance_2.setTransform(10,227.7,1,1,51.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({rotation:34,x:41,y:196.7},10).to({rotation:0,x:275,y:-29.6},10).wait(1));

	// animation
	this.instance_3 = new lib.podvodka2_mc();
	this.instance_3.setTransform(8.1,216.6,1,1,-50);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({rotation:-35,x:-37.6,y:197.6},10).to({rotation:0,x:-274.6,y:-29.6},10).wait(1));

	// animation
	this.instance_4 = new lib.wensday_eyes_all1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// animation
	this.instance_5 = new lib.wensday_eyebrows2_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({alpha:1},70).wait(41));

	// animation
	this.instance_6 = new lib.wensday_eyebrows0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},79).wait(41));

	// animation
	this.instance_7 = new lib.wensday_lips2_2_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// animation
	this.instance_8 = new lib.wensday_lips2_1_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// animation
	this.instance_9 = new lib.wensday_lips0_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// animation
	this.instance_10 = new lib.wensday_shadow2_3_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// animation
	this.instance_11 = new lib.wensday_shadow2_2_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// animation
	this.instance_12 = new lib.wensday_shadow2_4_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.instance_13 = new lib.wensday_shadow2_1_mc();
	this.instance_13.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(120));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,713.4), new cjs.Rectangle(-414.1,-260.1,825,698.1), new cjs.Rectangle(-414.1,-260.1,825,682.8), new cjs.Rectangle(-414.1,-260.1,825,667.5), new cjs.Rectangle(-414.1,-260.1,825,652.2), new cjs.Rectangle(-414.1,-260.1,825,637), new cjs.Rectangle(-414.1,-260.1,825,621.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,609.7), new cjs.Rectangle(-414.1,-260.1,825,626.1), new cjs.Rectangle(-414.1,-260.1,825,642.5), new cjs.Rectangle(-414.1,-260.1,825,658.8), new cjs.Rectangle(-414.1,-260.1,825,675.3), new cjs.Rectangle(-414.1,-260.1,825,691.7), new cjs.Rectangle(-414.1,-260.1,825,708.1), new cjs.Rectangle(-414.1,-260.1,825,724.5)];


(lib.animation_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(219.4,356,1,1,-44.2);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:11.4,y:166,alpha:1},8).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-273.6,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-153.6,y:148},9).wait(6));

	// animation
	this.instance_2 = new lib.podvodka1_mc();
	this.instance_2.setTransform(270,-32.6,1,1,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_eyebrows1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_lips1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow1_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.wensday_shadow1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.wensday_shadow1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.wensday_rouge1_2_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.instance_13 = new lib.wensday_rouge1_1_mc();
	this.instance_13.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(15));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,678.5), new cjs.Rectangle(-414.1,-260.1,825,654.7), new cjs.Rectangle(-414.1,-260.1,825,630.9), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect];


(lib.animation_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-0.6,374.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).to({y:221.3},10).wait(10).to({y:385.3,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(5.4,223.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).to({rotation:-9.5,x:-19.6,y:138},10).to({rotation:0,x:-273.6,y:-24},10).wait(1));

	// animation
	this.instance_2 = new lib.pencil2_mc();
	this.instance_2.setTransform(6.4,223.3,1,1,88.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).to({rotation:34.5,x:28.4,y:191.3},10).to({rotation:0,x:273.4,y:-27.6},10).wait(1));

	// animation
	this.instance_3 = new lib.pencil1_mc();
	this.instance_3.setTransform(-147.6,134.3,1,1,44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-144.6,y:96.3},9).to({rotation:91,x:-173.6,y:21.3},5).to({rotation:44.3,x:-144.6,y:96.3},5).to({rotation:91,x:-173.6,y:21.3},5).to({rotation:44.3,x:-144.6,y:96.3},5).to({x:15.4},15).to({rotation:80.5,x:-14.6,y:39.3},5).to({rotation:44.3,x:15.4,y:96.3},5).to({rotation:80.5,x:-14.6,y:39.3},5).to({rotation:44.3,x:15.4,y:96.3},5).to({rotation:80.5,x:-14.6,y:39.3},5).to({rotation:35.6,x:96.4,y:351.3,alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.wensday_eyes_all1_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109));

	// animation
	this.instance_5 = new lib.wensday_eyebrows3_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109));

	// animation
	this.instance_6 = new lib.wensday_eyebrows0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109));

	// animation
	this.instance_7 = new lib.wensday_lips3_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109));

	// animation
	this.instance_9 = new lib.wensday_shadow3_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(109));

	// animation
	this.instance_10 = new lib.wensday_shadow3_2_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(109));

	// animation
	this.instance_11 = new lib.wensday_shadow3_1_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({alpha:1},60).wait(40));

	// animation
	this.instance_12 = new lib.wensday_rouge3_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(109));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(109));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(109));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,619.1), new cjs.Rectangle(-414.1,-260.1,825,659.4), new cjs.Rectangle(-414.1,-260.1,825,713.4), new cjs.Rectangle(-414.1,-260.1,825,698.1), new cjs.Rectangle(-414.1,-260.1,825,682.8), new cjs.Rectangle(-414.1,-260.1,825,667.5), new cjs.Rectangle(-414.1,-260.1,825,652.2), new cjs.Rectangle(-414.1,-260.1,825,637), new cjs.Rectangle(-414.1,-260.1,825,621.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,609.7), new cjs.Rectangle(-414.1,-260.1,825,626.1), new cjs.Rectangle(-414.1,-260.1,825,642.5), new cjs.Rectangle(-414.1,-260.1,825,658.8), new cjs.Rectangle(-414.1,-260.1,825,675.3), new cjs.Rectangle(-414.1,-260.1,825,691.7), new cjs.Rectangle(-414.1,-260.1,825,708.1), new cjs.Rectangle(-414.1,-260.1,825,724.5)];


(lib.animation_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil1_mc();
	this.instance.setTransform(-69.6,14.4,1,1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:66.4,x:-225.6,y:-31.6},14).to({scaleX:0.95,scaleY:0.95,x:-217.6},2).to({scaleX:1,scaleY:1,x:-225.6},2).to({rotation:39.2,x:-180.6,y:18.4},2).to({scaleX:0.97,scaleY:0.97,y:14.4},2).to({scaleX:1,scaleY:1,y:18.4},2).to({x:-199.6,y:11.4},2).to({scaleX:0.84,scaleY:0.84,x:-190.6,y:0.4},2).to({scaleX:1,scaleY:1,x:-199.6,y:11.4},2).to({rotation:-42.7,x:193.4,y:13.4},14).to({scaleX:0.95,scaleY:0.95,x:187.4,y:9.4},2).to({scaleX:1,scaleY:1,x:193.4,y:13.4},2).to({rotation:-67.7,x:236.4,y:-28.6},2).to({scaleX:0.86,scaleY:0.86,x:216.4,y:-36.6},2).to({scaleX:1,scaleY:1,x:236.4,y:-28.6},2).to({rotation:-48.4,x:212.7,y:-0.6},2).to({scaleX:0.81,scaleY:0.81,x:196.7,y:-8.6},2).to({scaleX:1,scaleY:1,x:212.7,y:-0.6},2).to({rotation:49.2,x:-69.6,y:14.4},12).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_closed_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},72).wait(1));

	// animation
	this.instance_3 = new lib.wensday_eyebrows2_mc();
	this.instance_3.setTransform(1.4,-55.6);
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(73));

	// animation
	this.instance_4 = new lib.wensday_eyebrows0_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73));

	// animation
	this.instance_5 = new lib.wensday_lips2_2_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(73));

	// animation
	this.instance_6 = new lib.wensday_lips2_1_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(73));

	// animation
	this.instance_8 = new lib.wensday_shadow2_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73));

	// animation
	this.instance_9 = new lib.wensday_shadow2_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73));

	// animation
	this.instance_10 = new lib.wensday_shadow2_4_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({alpha:1},46).wait(13));

	// animation
	this.instance_11 = new lib.wensday_shadow2_1_mc();
	this.instance_11.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(73));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(73));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(73));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-0.6,374.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({y:221.3},10).wait(10).to({y:385.3,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.podvodka1_mc();
	this.instance_1.setTransform(-4,227.3,1,1,62.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({rotation:45.2,x:50,y:153.4},10).to({rotation:18.3,x:270,y:-32.6},11).wait(1));

	// animation
	this.instance_2 = new lib.shadows_palette_mc();
	this.instance_2.setTransform(3.4,228);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({x:-4.6,y:128},10).to({x:-273.6,y:-24},11).wait(1));

	// animation
	this.instance_3 = new lib.applicator_2_mc();
	this.instance_3.setTransform(-88.6,166.3,1,1,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:130.4,y:187.3},6).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({x:1.4,y:26.3},10).to({scaleX:0.79,scaleY:0.79},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.79,scaleY:0.79},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.79,scaleY:0.79},2).to({scaleX:1,scaleY:1},2).to({rotation:-6,x:-70.6,y:34.3},8).to({rotation:31.2,x:1.4,y:26.3},5).to({rotation:50.5,x:75.4,y:34.3},5).to({x:122.4,y:381.3,alpha:0.012},14).to({_off:true},1).wait(32));

	// animation
	this.instance_4 = new lib.r2_mc();
	this.instance_4.setTransform(139.8,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({y:392.4,alpha:0.012},10).to({_off:true},1).wait(76));

	// animation
	this.instance_5 = new lib.wensday_eyes_all1_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(101));

	// animation
	this.instance_6 = new lib.wensday_eyebrows1_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(101));

	// animation
	this.instance_7 = new lib.wensday_eyebrows0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101));

	// animation
	this.instance_8 = new lib.head_wensday_rodinka_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(101));

	// animation
	this.instance_9 = new lib.wensday_lips1_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(101));

	// animation
	this.instance_10 = new lib.wensday_lips0_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(101));

	// animation
	this.instance_11 = new lib.wensday_shadow1_3_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101));

	// animation
	this.instance_12 = new lib.wensday_shadow1_2_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(101));

	// animation
	this.instance_13 = new lib.wensday_shadow1_1_mc();
	this.instance_13.setTransform(1.4,-55.6);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(101));

	// animation
	this.instance_14 = new lib.wensday_rouge1_2_mc();
	this.instance_14.setTransform(1.4,-55.6);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({alpha:1},31).wait(46));

	// animation
	this.instance_15 = new lib.wensday_rouge1_1_mc();
	this.instance_15.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(101));

	// animation
	this.instance_16 = new lib.hero_body_makeup_mc();
	this.instance_16.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(101));

	// animation
	this.instance_17 = new lib.cl_mk1_mc();
	this.instance_17.setTransform(272.4,-28.6);
	this.instance_17.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(101));

	// animation
	this.instance_18 = new lib.cl_mk1_mc();
	this.instance_18.setTransform(-275.6,-28.6);
	this.instance_18.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,631), new cjs.Rectangle(-414.1,-260.1,825,652.8), new cjs.Rectangle(-414.1,-260.1,825,674.8), new cjs.Rectangle(-414.1,-260.1,825,696.7), new cjs.Rectangle(-414.1,-260.1,825,718.6), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,623.8), new cjs.Rectangle(-414.1,-260.1,825,648.6), new cjs.Rectangle(-414.1,-260.1,825,673.4), new cjs.Rectangle(-414.1,-260.1,825,698.2), new cjs.Rectangle(-414.1,-260.1,825,723.1), new cjs.Rectangle(-414.1,-260.1,825,713.4), new cjs.Rectangle(-414.1,-260.1,825,698.1), new cjs.Rectangle(-414.1,-260.1,825,682.8), new cjs.Rectangle(-414.1,-260.1,825,667.5), new cjs.Rectangle(-414.1,-260.1,825,652.2), new cjs.Rectangle(-414.1,-260.1,825,637), new cjs.Rectangle(-414.1,-260.1,825,621.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,609.7), new cjs.Rectangle(-414.1,-260.1,825,626.1), new cjs.Rectangle(-414.1,-260.1,825,642.5), new cjs.Rectangle(-414.1,-260.1,825,658.8), new cjs.Rectangle(-414.1,-260.1,825,675.3), new cjs.Rectangle(-414.1,-260.1,825,691.7), new cjs.Rectangle(-414.1,-260.1,825,708.1), new cjs.Rectangle(-414.1,-260.1,825,724.5), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil1_mc();
	this.instance.setTransform(275.4,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:44.3,x:-147.6,y:134.3},9).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_all1_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.wensday_eyebrows3_mc();
	this.instance_2.setTransform(1.4,-55.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyebrows0_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_lips3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_lips0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_shadow3_3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.wensday_shadow3_2_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.wensday_shadow3_1_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.wensday_rouge3_mc();
	this.instance_9.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.hero_body_makeup_mc();
	this.instance_10.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.cl_mk1_mc();
	this.instance_11.setTransform(272.4,-28.6);
	this.instance_11.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(-275.6,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil1_mc();
	this.instance.setTransform(273.4,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:49.2,x:-69.6,y:14.4},9).wait(1));

	// animation
	this.instance_1 = new lib.wensday_eyes_closed_mc();
	this.instance_1.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.wensday_eyebrows2_mc();
	this.instance_2.setTransform(1.4,-55.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyebrows0_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_lips2_2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_lips2_1_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_lips0_mc();
	this.instance_6.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.wensday_shadow2_4_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.wensday_shadow2_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.wensday_shadow2_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.wensday_shadow2_1_mc();
	this.instance_10.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.hero_body_makeup_mc();
	this.instance_11.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.cl_mk1_mc();
	this.instance_12.setTransform(272.4,-28.6);
	this.instance_12.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(-275.6,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_2_mc();
	this.instance.setTransform(-171.6,371.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:31.2,x:-88.6,y:166.3,alpha:1},14).wait(1));

	// animation
	this.instance_1 = new lib.r2_mc();
	this.instance_1.setTransform(271.8,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:139.8,y:173.5},9).wait(6));

	// animation
	this.instance_2 = new lib.wensday_eyes_all1_mc();
	this.instance_2.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_eyebrows1_mc();
	this.instance_3.setTransform(1.4,-55.6);
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_eyebrows0_mc();
	this.instance_4.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.head_wensday_rodinka_mc();
	this.instance_5.setTransform(1.4,-55.6);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_lips1_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_shadow1_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow1_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.wensday_shadow1_1_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.wensday_rouge1_2_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.wensday_rouge1_1_mc();
	this.instance_12.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,701);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-260.1,825,688), new cjs.Rectangle(-414.1,-260.1,825,675.1), new cjs.Rectangle(-414.1,-260.1,825,662), new cjs.Rectangle(-414.1,-260.1,825,649), new cjs.Rectangle(-414.1,-260.1,825,635.7), new cjs.Rectangle(-414.1,-260.1,825,622.3), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect];


(lib.animation_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_2_mc();
	this.instance.setTransform(125.4,163.3,1,1,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47.1,x:-101.6,y:180.3},8).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({x:-103.6,y:57.4},13).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1,scaleY:1},2).to({rotation:39.3,x:113.4,y:43.9},13).to({scaleX:0.87,scaleY:0.87,rotation:39.3},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},3).to({x:156.4,y:399.8,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.r3_mc();
	this.instance_1.setTransform(-113.6,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({y:412.4,alpha:0.012},13).to({_off:true},1).wait(50));

	// animation
	this.instance_2 = new lib.pencil1_mc();
	this.instance_2.setTransform(275.4,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.wensday_lips3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.wensday_shadow3_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.wensday_shadow3_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// animation
	this.instance_10 = new lib.wensday_shadow3_1_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.wensday_rouge3_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({alpha:1},38).wait(13));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,612.1), new cjs.Rectangle(-414.1,-260.1,825,630.1), new cjs.Rectangle(-414.1,-260.1,825,648.2), new cjs.Rectangle(-414.1,-260.1,825,666.3), new cjs.Rectangle(-414.1,-260.1,825,684.3), new cjs.Rectangle(-414.1,-260.1,825,702.4), new cjs.Rectangle(-414.1,-260.1,825,720.5), new cjs.Rectangle(-414.1,-260.1,825,738.6), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,614.8), new cjs.Rectangle(-414.1,-260.1,825,647.3), new cjs.Rectangle(-414.1,-260.1,825,679.6), new cjs.Rectangle(-414.1,-260.1,825,712), new cjs.Rectangle(-414.1,-260.1,825,744.5), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(11.4,166,1,1,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-125.9,x:-58.6,y:145},9).to({scaleX:0.83,scaleY:0.83,x:-70.6,y:151},2).to({scaleX:1,scaleY:1,x:-58.6,y:145},2).to({scaleX:0.83,scaleY:0.83,x:-70.6,y:151},2).to({scaleX:1,scaleY:1,x:-58.6,y:145},2).to({rotation:-45.6,x:-73.6,y:4},12).to({rotation:-45.6,x:-40.6,y:-11},7).to({x:-2.6,y:24},9).to({x:-44.6,y:20},8).to({x:97.4,y:19},11).to({x:120.4,y:-11},7).to({x:160.4,y:-1},9).to({x:124.4,y:29},8).to({x:225.4,y:368.9,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-153.6,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({y:415,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.pencil1_mc();
	this.instance_2.setTransform(273.4,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102));

	// animation
	this.instance_3 = new lib.wensday_eyes_closed_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102));

	// animation
	this.instance_4 = new lib.wensday_eyebrows2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(102));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102));

	// animation
	this.instance_6 = new lib.wensday_lips2_2_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(102));

	// animation
	this.instance_7 = new lib.wensday_lips2_1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102));

	// animation
	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(102));

	// animation
	this.instance_10 = new lib.wensday_shadow2_3_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(102));

	// animation
	this.instance_11 = new lib.wensday_shadow2_2_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(102));

	// animation
	this.instance_12 = new lib.wensday_shadow2_1_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({alpha:1},59).wait(14));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(102));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(102));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,626.8), new cjs.Rectangle(-414.1,-260.1,825,649.1), new cjs.Rectangle(-414.1,-260.1,825,671.3), new cjs.Rectangle(-414.1,-260.1,825,693.6), new cjs.Rectangle(-414.1,-260.1,825,715.8), new cjs.Rectangle(-414.1,-260.1,825,738.1), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_2_mc();
	this.instance.setTransform(125.4,163.3,1,1,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47.1,x:-101.6,y:180.3},8).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({x:-103.6,y:57.4},13).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1,scaleY:1},2).to({rotation:39.3,x:113.4,y:43.9},13).to({scaleX:0.87,scaleY:0.87,rotation:39.3},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.87,scaleY:0.87},2).to({scaleX:1,scaleY:1},3).to({x:156.4,y:399.8,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.r1_mc();
	this.instance_1.setTransform(-113.6,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({y:412.4,alpha:0.012},13).to({_off:true},1).wait(50));

	// animation
	this.instance_2 = new lib.r2_mc();
	this.instance_2.setTransform(271.8,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.wensday_eyebrows1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// animation
	this.instance_7 = new lib.wensday_lips1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.wensday_shadow1_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// animation
	this.instance_10 = new lib.wensday_shadow1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.wensday_shadow1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// animation
	this.instance_12 = new lib.wensday_rouge1_2_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// animation
	this.instance_13 = new lib.wensday_rouge1_1_mc();
	this.instance_13.setTransform(1.4,-55.6);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({alpha:1},38).wait(13));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(80));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,612.1), new cjs.Rectangle(-414.1,-260.1,825,630.1), new cjs.Rectangle(-414.1,-260.1,825,648.2), new cjs.Rectangle(-414.1,-260.1,825,666.3), new cjs.Rectangle(-414.1,-260.1,825,684.3), new cjs.Rectangle(-414.1,-260.1,825,702.4), new cjs.Rectangle(-414.1,-260.1,825,720.5), new cjs.Rectangle(-414.1,-260.1,825,738.6), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,614.8), new cjs.Rectangle(-414.1,-260.1,825,647.3), new cjs.Rectangle(-414.1,-260.1,825,679.6), new cjs.Rectangle(-414.1,-260.1,825,712), new cjs.Rectangle(-414.1,-260.1,825,744.5), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_2_mc();
	this.instance.setTransform(243.4,376.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30.5,x:125.4,y:163.3,alpha:1},9).wait(1));

	// animation
	this.instance_1 = new lib.r3_mc();
	this.instance_1.setTransform(-275.4,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-113.6,y:177.5},9).wait(1));

	// animation
	this.instance_2 = new lib.pencil1_mc();
	this.instance_2.setTransform(275.4,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.wensday_lips3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.wensday_shadow3_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.wensday_shadow3_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.wensday_shadow3_1_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.wensday_rouge3_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,706);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-260.1,825,685), new cjs.Rectangle(-414.1,-260.1,825,663.8), new cjs.Rectangle(-414.1,-260.1,825,642.3), new cjs.Rectangle(-414.1,-260.1,825,620.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect];


(lib.animation_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_1_mc();
	this.instance.setTransform(219.4,356,1,1,-44.2);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:11.4,y:166,alpha:1},8).wait(1));

	// animation
	this.instance_1 = new lib.shadows_palette_mc();
	this.instance_1.setTransform(-273.6,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-153.6,y:148},9).wait(6));

	// animation
	this.instance_2 = new lib.pencil1_mc();
	this.instance_2.setTransform(273.4,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_eyebrows2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_lips2_2_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_lips2_1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.wensday_shadow2_3_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.wensday_shadow2_2_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.wensday_shadow2_1_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,678.5), new cjs.Rectangle(-414.1,-260.1,825,654.7), new cjs.Rectangle(-414.1,-260.1,825,630.9), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect];


(lib.animation_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.applicator_2_mc();
	this.instance.setTransform(243.4,376.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30.5,x:125.4,y:163.3,alpha:1},9).wait(1));

	// animation
	this.instance_1 = new lib.r1_mc();
	this.instance_1.setTransform(-273.6,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-113.6,y:177.5},9).wait(1));

	// animation
	this.instance_2 = new lib.r2_mc();
	this.instance_2.setTransform(271.8,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.wensday_eyebrows1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.wensday_lips1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.wensday_shadow1_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.wensday_shadow1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.wensday_shadow1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.wensday_rouge1_2_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// animation
	this.instance_13 = new lib.wensday_rouge1_1_mc();
	this.instance_13.setTransform(1.4,-55.6);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,706);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-260.1,825,685), new cjs.Rectangle(-414.1,-260.1,825,663.8), new cjs.Rectangle(-414.1,-260.1,825,642.3), new cjs.Rectangle(-414.1,-260.1,825,620.7), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect];


(lib.animation_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-3.6,216.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:420.3,alpha:0.012},10).to({_off:true},1).wait(4));

	// animation
	this.instance_1 = new lib.r3_mc();
	this.instance_1.setTransform(-28.4,146,1,1,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:-275.4,y:-31},14).wait(1));

	// animation
	this.instance_2 = new lib.pencil1_mc();
	this.instance_2.setTransform(40.4,162.3,1,1,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:275.4,y:-30.3},14).wait(1));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_lips3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_shadow3_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow3_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.wensday_shadow3_1_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.wensday_rouge3_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,616.7), new cjs.Rectangle(-414.1,-260.1,825,637.1), new cjs.Rectangle(-414.1,-260.1,825,657.5), new cjs.Rectangle(-414.1,-260.1,825,677.8), new cjs.Rectangle(-414.1,-260.1,825,698.3), new cjs.Rectangle(-414.1,-260.1,825,718.7), new cjs.Rectangle(-414.1,-260.1,825,739.1), new cjs.Rectangle(-414.1,-260.1,825,759.5), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect];


(lib.animation_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-3.6,216.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:402.8,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.pencil1_mc();
	this.instance_1.setTransform(33.4,167.3,1,1,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:273.4,y:-27.6},14).wait(1));

	// animation
	this.instance_2 = new lib.shadows_palette_mc();
	this.instance_2.setTransform(-19.6,138,1,1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:-273.6,y:-24},14).wait(1));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_eyebrows2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.wensday_lips2_2_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_lips2_1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.wensday_shadow2_3_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.wensday_shadow2_2_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.wensday_shadow2_1_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,612.8), new cjs.Rectangle(-414.1,-260.1,825,627.2), new cjs.Rectangle(-414.1,-260.1,825,641.6), new cjs.Rectangle(-414.1,-260.1,825,655.8), new cjs.Rectangle(-414.1,-260.1,825,670.2), new cjs.Rectangle(-414.1,-260.1,825,684.6), new cjs.Rectangle(-414.1,-260.1,825,698.9), new cjs.Rectangle(-414.1,-260.1,825,713.2), new cjs.Rectangle(-414.1,-260.1,825,727.6), new cjs.Rectangle(-414.1,-260.1,825,741.9), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-3.6,216.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:397.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.r2_mc();
	this.instance_1.setTransform(44.8,147,1,1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:271.8,y:-27.5},9).wait(6));

	// animation
	this.instance_2 = new lib.r1_mc();
	this.instance_2.setTransform(-41.6,139.5,1,1,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:-273.6,y:-27.5},9).wait(6));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.wensday_eyebrows1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.wensday_lips1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.wensday_shadow1_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// animation
	this.instance_10 = new lib.wensday_shadow1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// animation
	this.instance_11 = new lib.wensday_shadow1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.wensday_rouge1_2_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.wensday_rouge1_1_mc();
	this.instance_13.setTransform(1.4,-55.6);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,609.5);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-414.1,-260.1,825,611.2), new cjs.Rectangle(-414.1,-260.1,825,625.1), new cjs.Rectangle(-414.1,-260.1,825,639), new cjs.Rectangle(-414.1,-260.1,825,653), new cjs.Rectangle(-414.1,-260.1,825,666.8), new cjs.Rectangle(-414.1,-260.1,825,680.8), new cjs.Rectangle(-414.1,-260.1,825,694.7), new cjs.Rectangle(-414.1,-260.1,825,708.6), new cjs.Rectangle(-414.1,-260.1,825,722.6), new cjs.Rectangle(-414.1,-260.1,825,736.5), new cjs.Rectangle(-414.1,-260.1,825,609.5)];


(lib.animation_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-3.6,387.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:216.4,alpha:1},14).to({y:194.4},2).to({y:216.4},2).wait(7));

	// animation
	this.instance_1 = new lib.r3_mc();
	this.instance_1.setTransform(1.9,218);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({rotation:-26.7,x:-28.4,y:146},6).wait(1));

	// animation
	this.instance_2 = new lib.pencil1_mc();
	this.instance_2.setTransform(7.4,218.3,1,1,88.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({rotation:34,x:40.4,y:162.3},6).wait(1));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// animation
	this.instance_4 = new lib.wensday_eyebrows3_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.wensday_lips3_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.wensday_lips0_mc();
	this.instance_7.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// animation
	this.instance_8 = new lib.wensday_shadow3_3_mc();
	this.instance_8.setTransform(1.4,-55.6);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

	// animation
	this.instance_9 = new lib.wensday_shadow3_2_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25));

	// animation
	this.instance_10 = new lib.wensday_shadow3_1_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25));

	// animation
	this.instance_11 = new lib.wensday_rouge3_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));

	// animation
	this.instance_12 = new lib.hero_body_makeup_mc();
	this.instance_12.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25));

	// animation
	this.instance_13 = new lib.cl_mk1_mc();
	this.instance_13.setTransform(272.4,-28.6);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:0.898},24).wait(1));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(-275.6,-28.6);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:0.898},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,726.4);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-260.1,825,714.2), new cjs.Rectangle(-414.1,-260.1,825,702), new cjs.Rectangle(-414.1,-260.1,825,689.8), new cjs.Rectangle(-414.1,-260.1,825,677.6), new cjs.Rectangle(-414.1,-260.1,825,665.3), new cjs.Rectangle(-414.1,-260.1,825,653.2), new cjs.Rectangle(-414.1,-260.1,825,641), new cjs.Rectangle(-414.1,-260.1,825,628.8), new cjs.Rectangle(-414.1,-260.1,825,616.6), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-3.6,387.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:216.4,alpha:1},14).to({y:194.4},2).to({y:216.4},2).wait(7));

	// animation
	this.instance_1 = new lib.pencil1_mc();
	this.instance_1.setTransform(1.4,222.3,1,1,46.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:33.4,y:167.3},10).wait(1));

	// animation
	this.instance_2 = new lib.shadows_palette_mc();
	this.instance_2.setTransform(2.4,223);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({rotation:-9.5,x:-19.6,y:138},10).wait(1));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// animation
	this.instance_4 = new lib.wensday_eyebrows2_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.wensday_lips2_2_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.wensday_lips2_1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

	// animation
	this.instance_9 = new lib.wensday_shadow2_4_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25));

	// animation
	this.instance_10 = new lib.wensday_shadow2_3_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25));

	// animation
	this.instance_11 = new lib.wensday_shadow2_2_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));

	// animation
	this.instance_12 = new lib.wensday_shadow2_1_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25));

	// animation
	this.instance_13 = new lib.hero_body_makeup_mc();
	this.instance_13.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25));

	// animation
	this.instance_14 = new lib.cl_mk1_mc();
	this.instance_14.setTransform(272.4,-28.6);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:0.898},24).wait(1));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(-275.6,-28.6);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:0.898},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,726.4);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-260.1,825,714.2), new cjs.Rectangle(-414.1,-260.1,825,702), new cjs.Rectangle(-414.1,-260.1,825,689.8), new cjs.Rectangle(-414.1,-260.1,825,677.6), new cjs.Rectangle(-414.1,-260.1,825,665.3), new cjs.Rectangle(-414.1,-260.1,825,653.2), new cjs.Rectangle(-414.1,-260.1,825,641), new cjs.Rectangle(-414.1,-260.1,825,628.8), new cjs.Rectangle(-414.1,-260.1,825,616.6), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cosmet_mc();
	this.instance.setTransform(-3.6,387.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:216.4,alpha:1},14).to({y:194.4},2).to({y:216.4},2).wait(7));

	// animation
	this.instance_1 = new lib.r2_mc();
	this.instance_1.setTransform(4.4,214);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({rotation:11.2,x:44.8,y:147},6).wait(1));

	// animation
	this.instance_2 = new lib.r1_mc();
	this.instance_2.setTransform(8.4,210.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({rotation:-21,x:-41.6,y:139.5},6).wait(1));

	// animation
	this.instance_3 = new lib.wensday_eyes_all1_mc();
	this.instance_3.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// animation
	this.instance_4 = new lib.wensday_eyebrows1_mc();
	this.instance_4.setTransform(1.4,-55.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.wensday_eyebrows0_mc();
	this.instance_5.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.head_wensday_rodinka_mc();
	this.instance_6.setTransform(1.4,-55.6);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.wensday_lips1_mc();
	this.instance_7.setTransform(1.4,-55.6);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// animation
	this.instance_8 = new lib.wensday_lips0_mc();
	this.instance_8.setTransform(1.4,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

	// animation
	this.instance_9 = new lib.wensday_shadow1_3_mc();
	this.instance_9.setTransform(1.4,-55.6);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25));

	// animation
	this.instance_10 = new lib.wensday_shadow1_2_mc();
	this.instance_10.setTransform(1.4,-55.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25));

	// animation
	this.instance_11 = new lib.wensday_shadow1_1_mc();
	this.instance_11.setTransform(1.4,-55.6);
	this.instance_11.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));

	// animation
	this.instance_12 = new lib.wensday_rouge1_2_mc();
	this.instance_12.setTransform(1.4,-55.6);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25));

	// animation
	this.instance_13 = new lib.wensday_rouge1_1_mc();
	this.instance_13.setTransform(1.4,-55.6);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25));

	// animation
	this.instance_14 = new lib.hero_body_makeup_mc();
	this.instance_14.setTransform(5.4,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25));

	// animation
	this.instance_15 = new lib.cl_mk1_mc();
	this.instance_15.setTransform(272.4,-28.6);
	this.instance_15.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:0.898},24).wait(1));

	// animation
	this.instance_16 = new lib.cl_mk1_mc();
	this.instance_16.setTransform(-275.6,-28.6);
	this.instance_16.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:0.898},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-414.1,-260.1,825,726.4);
p.frameBounds = [rect, new cjs.Rectangle(-414.1,-260.1,825,714.2), new cjs.Rectangle(-414.1,-260.1,825,702), new cjs.Rectangle(-414.1,-260.1,825,689.8), new cjs.Rectangle(-414.1,-260.1,825,677.6), new cjs.Rectangle(-414.1,-260.1,825,665.3), new cjs.Rectangle(-414.1,-260.1,825,653.2), new cjs.Rectangle(-414.1,-260.1,825,641), new cjs.Rectangle(-414.1,-260.1,825,628.8), new cjs.Rectangle(-414.1,-260.1,825,616.6), rect=new cjs.Rectangle(-414.1,-260.1,825,609.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-38,-38,75,75);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.102},19).to({scaleX:1,scaleY:1,alpha:0.602},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-24.4,-24.4,49,49), new cjs.Rectangle(-24.2,-24.2,48.4,48.4), new cjs.Rectangle(-23.9,-23.9,47.9,47.9), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.4,-23.4,46.8,46.8), new cjs.Rectangle(-23.1,-23.1,46.3,46.3), new cjs.Rectangle(-22.8,-22.8,45.8,45.8), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.1,-22.1,44.2,44.2), new cjs.Rectangle(-21.8,-21.8,43.7,43.7), new cjs.Rectangle(-21.5,-21.5,43.2,43.2), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21,-21,42.1,42.1), new cjs.Rectangle(-20.7,-20.7,41.6,41.6), new cjs.Rectangle(-20.5,-20.5,41.1,41.1), new cjs.Rectangle(-20.2,-20.2,40.6,40.6), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.2,-22.2,44.5,44.5), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-23.4,-23.4,47,47), new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.2,-24.2,48.5,48.5), new cjs.Rectangle(-24.4,-24.4,49,49), new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-25,-25,50,50)];


(lib.vk_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.vk_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


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


(lib.shadow_large_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shadow_large_buttons_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


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


(lib.decor_large_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_large_buttons_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},49).to({alpha:1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.bg_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_large_buttons_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.body_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_large_buttons_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// first
	this.instance = new lib.first_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({alpha:0.801},10).to({alpha:1},10).to({alpha:0.801},10).to({alpha:1},10).wait(1));

	// decor
	this.instance_1 = new lib.decor_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// second
	this.instance_2 = new lib.second_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-120,490,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.semicircular_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.semicircular_arrow_checks_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.semicircular_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.round_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.round_arrow_checks_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.round_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
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
	this.instance.setTransform(-133.3,0,0.889,0.889,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_circle_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(90,80,0.833,0.833);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-120,-140);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-120,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuVGMAAAgqLMAldAAAMAAAAqLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-140,240,280);
p.frameBounds = [rect, rect, new cjs.Rectangle(-120,-140,260,280)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(90,80,0.833,0.833);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-120,-140);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-120,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuVGMAAAgqLMAldAAAMAAAAqLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-140,240,280);
p.frameBounds = [rect, rect, new cjs.Rectangle(-120,-140,260,280)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(90,80,0.833,0.833);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-120,-140);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-120,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuVGMAAAgqLMAldAAAMAAAAqLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-140,240,280);
p.frameBounds = [rect, rect, new cjs.Rectangle(-120,-140,260,280)];


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


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(301));

	// hint
	this.instance = new lib.hand_click_hint_mc();
	this.instance.setTransform(110,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(300));

	// animation
	this.instance_1 = new lib.hand2_2_1_mc();
	this.instance_1.setTransform(174.4,-256.6,1,1,0,0,0,42,32);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({skewY:180,x:-153.6},1).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({skewY:0,x:174.4},1).wait(1));

	// animation
	this.instance_2 = new lib.hand2_1_1_mc();
	this.instance_2.setTransform(115.4,183.1,1,1,0,0,0,-29,35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({skewY:180,x:-94.6},1).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({skewY:0,x:115.4},1).wait(1));

	// animation
	this.instance_3 = new lib.hand1_1_2_mc();
	this.instance_3.setTransform(26.4,155.7,1,1,0,0,0,42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({skewY:180,x:-4.1,y:160.7},1).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},15).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},16).to({skewY:0,x:26.4,y:155.7},1).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({_off:true},1).wait(121));

	// animation
	this.instance_4 = new lib.predplecho1_1_2_mc();
	this.instance_4.setTransform(190,223.3,1,1,0,0,0,74,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewY:180,x:-167.8,y:228.3},1).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},15).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},16).to({skewY:0,x:190,y:223.3},1).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewX:-97.8,skewY:82.2,x:261,y:-110.7},1).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({rotation:97.8,skewX:0,skewY:0,x:-240.3},1).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:0,skewX:-97.8,skewY:82.2,x:261},1).wait(1));

	// animation
	this.instance_5 = new lib.h3_mc();
	this.instance_5.setTransform(12,-39,1,1,0,0,0,10,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-50},14).to({y:-39},15).to({y:-50},14).to({y:-39},16).wait(1).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-47},15).to({y:-39},14).to({y:-47},15).to({y:-39},14).wait(1).to({y:-45},15).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(2));

	// animation
	this.instance_6 = new lib.predplecho1_1_1_mc();
	this.instance_6.setTransform(-14.7,250.4,1,1,0,-1.5,178.5,62.1,24.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({rotation:1.5,skewX:0,skewY:0,x:35.5},1).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:0,skewX:-1.5,skewY:178.5,x:-14.7},1).wait(1));

	// animation
	this.instance_7 = new lib.hero_body_2_mc();
	this.instance_7.setTransform(19.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:180,x:2.9,y:45.4},1).to({y:34.4},14).to({y:45.4},15).to({y:34.4},14).to({y:45.4},16).to({skewY:0,x:19.4,y:40.4},1).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).wait(1).to({y:32.4},15).to({y:40.4},14).to({y:32.4},15).to({y:40.4},14).to({skewY:180,x:1.4},1).to({y:34.4},15).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:0,x:19.4},1).wait(1));

	// animation
	this.instance_8 = new lib.plecho1_1_2_mc();
	this.instance_8.setTransform(139.4,28.7,1,1,0,0,0,-21,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewY:180,x:-117.1,y:33.7},1).to({y:22.7},14).to({y:33.7},15).to({y:22.7},14).to({y:33.7},16).to({skewY:0,x:139.4,y:28.7},1).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewX:-148.3,skewY:31.7,x:122.4,y:25.8},1).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({rotation:148.3,skewX:0,skewY:0,x:-101.6},1).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({rotation:0,skewX:-148.3,skewY:31.7,x:122.4},1).wait(1));

	// animation
	this.instance_9 = new lib.plecho1_1_1_mc();
	this.instance_9.setTransform(-103.6,68.1,1,1,0,-34.1,145.9,-12.1,-98.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180).to({_off:false},0).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({rotation:34.1,skewX:0,skewY:0,x:124.3},1).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:0,skewX:-34.1,skewY:145.9,x:-103.6},1).wait(1));

	// animation
	this.instance_10 = new lib.hero_body_1_mc();
	this.instance_10.setTransform(28,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:180,x:-5.8,y:134.9},1).to({y:123.9},14).to({y:134.9},15).to({y:123.9},14).to({y:134.9},16).to({skewY:0,x:28,y:129.9},1).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).wait(1).to({y:121.9},15).to({y:129.9},14).to({y:121.9},15).to({y:129.9},14).to({skewY:180,x:-7.3},1).to({y:123.9},15).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:0,x:28},1).wait(1));

	// animation
	this.instance_11 = new lib.hand1_1_1_mc();
	this.instance_11.setTransform(-202.6,210.3,1,1,0,0,0,36,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({skewY:180,x:224.9,y:212.3},1).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},15).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},16).to({skewY:0,x:-202.6,y:210.3},1).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_12 = new lib.predplecho1_1_1_mc();
	this.instance_12.setTransform(-65.6,268.3,1,1,0,0,0,62,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({skewY:180,x:87.9,y:273.3},1).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},15).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},16).to({skewY:0,x:-65.6,y:268.3},1).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_13 = new lib.plecho1_1_1_mc();
	this.instance_13.setTransform(-98.6,71,1,1,0,0,0,-12,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({skewY:180,x:120.9,y:76},1).to({y:65},14).to({y:76},15).to({y:65},14).to({y:76},16).to({skewY:0,x:-98.6,y:71},1).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-305.1,-322.5,555.2,1012.5);
p.frameBounds = [rect, new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.1,676.4), new cjs.Rectangle(-208.1,-325.6,539.2,676.4), new cjs.Rectangle(-208.1,-326.4,539.8,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.4,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.5,676.4), new cjs.Rectangle(-208.1,-332,546.5,676.4), new cjs.Rectangle(-208.1,-331.3,545.6,676.4), new cjs.Rectangle(-208.1,-330.5,545,676.4), new cjs.Rectangle(-208.1,-329.8,544.1,676.4), new cjs.Rectangle(-208.1,-329.1,543.1,676.4), new cjs.Rectangle(-208.1,-328.3,542.2,676.4), new cjs.Rectangle(-208.1,-327.6,541.5,676.4), new cjs.Rectangle(-208.1,-326.9,540.6,676.4), new cjs.Rectangle(-208.1,-326.1,539.6,676.4), new cjs.Rectangle(-208.1,-325.4,538.7,676.4), new cjs.Rectangle(-208.1,-324.7,538.1,676.4), new cjs.Rectangle(-208.1,-323.9,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.2,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.2,676.4), new cjs.Rectangle(-208.1,-325.6,539.1,676.4), new cjs.Rectangle(-208.1,-326.4,539.9,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.5,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.8,547.5,676.4), new cjs.Rectangle(-208.1,-332.1,546.6,676.4), new cjs.Rectangle(-208.1,-331.4,546,676.4), new cjs.Rectangle(-208.1,-330.7,545.2,676.4), new cjs.Rectangle(-208.1,-330,544.2,676.4), new cjs.Rectangle(-208.1,-329.3,543.3,676.4), new cjs.Rectangle(-208.1,-328.7,542.7,676.4), new cjs.Rectangle(-208.1,-328,541.9,676.4), new cjs.Rectangle(-208.1,-327.3,540.9,676.4), new cjs.Rectangle(-208.1,-326.6,540.3,676.4), new cjs.Rectangle(-208.1,-325.9,539.4,676.4), new cjs.Rectangle(-208.1,-325.2,538.5,676.4), new cjs.Rectangle(-208.1,-324.5,537.9,676.4), new cjs.Rectangle(-208.1,-323.8,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.1,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-191.6,-334.1,485.1,683)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(301));

	// hint
	this.instance = new lib.hand_click_hint_mc();
	this.instance.setTransform(110,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(300));

	// animation
	this.instance_1 = new lib.hand2_2_1_mc();
	this.instance_1.setTransform(174.4,-256.6,1,1,0,0,0,42,32);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({skewY:180,x:-153.6},1).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({skewY:0,x:174.4},1).wait(1));

	// animation
	this.instance_2 = new lib.hand2_1_1_mc();
	this.instance_2.setTransform(115.4,183.1,1,1,0,0,0,-29,35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({skewY:180,x:-94.6},1).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({skewY:0,x:115.4},1).wait(1));

	// animation
	this.instance_3 = new lib.hand1_1_2_mc();
	this.instance_3.setTransform(26.4,155.7,1,1,0,0,0,42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({skewY:180,x:-4.1,y:160.7},1).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},15).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},16).to({skewY:0,x:26.4,y:155.7},1).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({_off:true},1).wait(121));

	// animation
	this.instance_4 = new lib.predplecho1_1_2_mc();
	this.instance_4.setTransform(190,223.3,1,1,0,0,0,74,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewY:180,x:-167.8,y:228.3},1).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},15).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},16).to({skewY:0,x:190,y:223.3},1).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewX:-97.8,skewY:82.2,x:261,y:-110.7},1).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({rotation:97.8,skewX:0,skewY:0,x:-240.3},1).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:0,skewX:-97.8,skewY:82.2,x:261},1).wait(1));

	// animation
	this.instance_5 = new lib.h2_mc();
	this.instance_5.setTransform(12,-39,1,1,0,0,0,10,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-50},14).to({y:-39},15).to({y:-50},14).to({y:-39},16).wait(1).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-47},15).to({y:-39},14).to({y:-47},15).to({y:-39},14).wait(1).to({y:-45},15).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(2));

	// animation
	this.instance_6 = new lib.predplecho1_1_1_mc();
	this.instance_6.setTransform(-14.7,250.4,1,1,0,-1.5,178.5,62.1,24.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({rotation:1.5,skewX:0,skewY:0,x:35.5},1).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:0,skewX:-1.5,skewY:178.5,x:-14.7},1).wait(1));

	// animation
	this.instance_7 = new lib.hero_body_2_mc();
	this.instance_7.setTransform(19.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:180,x:2.9,y:45.4},1).to({y:34.4},14).to({y:45.4},15).to({y:34.4},14).to({y:45.4},16).to({skewY:0,x:19.4,y:40.4},1).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).wait(1).to({y:32.4},15).to({y:40.4},14).to({y:32.4},15).to({y:40.4},14).to({skewY:180,x:1.4},1).to({y:34.4},15).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:0,x:19.4},1).wait(1));

	// animation
	this.instance_8 = new lib.plecho1_1_2_mc();
	this.instance_8.setTransform(139.4,28.7,1,1,0,0,0,-21,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewY:180,x:-117.1,y:33.7},1).to({y:22.7},14).to({y:33.7},15).to({y:22.7},14).to({y:33.7},16).to({skewY:0,x:139.4,y:28.7},1).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewX:-148.3,skewY:31.7,x:122.4,y:25.8},1).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({rotation:148.3,skewX:0,skewY:0,x:-101.6},1).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({rotation:0,skewX:-148.3,skewY:31.7,x:122.4},1).wait(1));

	// animation
	this.instance_9 = new lib.plecho1_1_1_mc();
	this.instance_9.setTransform(-103.6,68.1,1,1,0,-34.1,145.9,-12.1,-98.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180).to({_off:false},0).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({rotation:34.1,skewX:0,skewY:0,x:124.3},1).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:0,skewX:-34.1,skewY:145.9,x:-103.6},1).wait(1));

	// animation
	this.instance_10 = new lib.hero_body_1_mc();
	this.instance_10.setTransform(28,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:180,x:-5.8,y:134.9},1).to({y:123.9},14).to({y:134.9},15).to({y:123.9},14).to({y:134.9},16).to({skewY:0,x:28,y:129.9},1).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).wait(1).to({y:121.9},15).to({y:129.9},14).to({y:121.9},15).to({y:129.9},14).to({skewY:180,x:-7.3},1).to({y:123.9},15).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:0,x:28},1).wait(1));

	// animation
	this.instance_11 = new lib.hand1_1_1_mc();
	this.instance_11.setTransform(-202.6,210.3,1,1,0,0,0,36,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({skewY:180,x:224.9,y:212.3},1).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},15).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},16).to({skewY:0,x:-202.6,y:210.3},1).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_12 = new lib.predplecho1_1_1_mc();
	this.instance_12.setTransform(-65.6,268.3,1,1,0,0,0,62,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({skewY:180,x:87.9,y:273.3},1).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},15).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},16).to({skewY:0,x:-65.6,y:268.3},1).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_13 = new lib.plecho1_1_1_mc();
	this.instance_13.setTransform(-98.6,71,1,1,0,0,0,-12,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({skewY:180,x:120.9,y:76},1).to({y:65},14).to({y:76},15).to({y:65},14).to({y:76},16).to({skewY:0,x:-98.6,y:71},1).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-305.1,-322.5,555.2,1012.5);
p.frameBounds = [rect, new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.1,676.4), new cjs.Rectangle(-208.1,-325.6,539.2,676.4), new cjs.Rectangle(-208.1,-326.4,539.8,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.4,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.5,676.4), new cjs.Rectangle(-208.1,-332,546.5,676.4), new cjs.Rectangle(-208.1,-331.3,545.6,676.4), new cjs.Rectangle(-208.1,-330.5,545,676.4), new cjs.Rectangle(-208.1,-329.8,544.1,676.4), new cjs.Rectangle(-208.1,-329.1,543.1,676.4), new cjs.Rectangle(-208.1,-328.3,542.2,676.4), new cjs.Rectangle(-208.1,-327.6,541.5,676.4), new cjs.Rectangle(-208.1,-326.9,540.6,676.4), new cjs.Rectangle(-208.1,-326.1,539.6,676.4), new cjs.Rectangle(-208.1,-325.4,538.7,676.4), new cjs.Rectangle(-208.1,-324.7,538.1,676.4), new cjs.Rectangle(-208.1,-323.9,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.2,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.2,676.4), new cjs.Rectangle(-208.1,-325.6,539.1,676.4), new cjs.Rectangle(-208.1,-326.4,539.9,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.5,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.8,547.5,676.4), new cjs.Rectangle(-208.1,-332.1,546.6,676.4), new cjs.Rectangle(-208.1,-331.4,546,676.4), new cjs.Rectangle(-208.1,-330.7,545.2,676.4), new cjs.Rectangle(-208.1,-330,544.2,676.4), new cjs.Rectangle(-208.1,-329.3,543.3,676.4), new cjs.Rectangle(-208.1,-328.7,542.7,676.4), new cjs.Rectangle(-208.1,-328,541.9,676.4), new cjs.Rectangle(-208.1,-327.3,540.9,676.4), new cjs.Rectangle(-208.1,-326.6,540.3,676.4), new cjs.Rectangle(-208.1,-325.9,539.4,676.4), new cjs.Rectangle(-208.1,-325.2,538.5,676.4), new cjs.Rectangle(-208.1,-324.5,537.9,676.4), new cjs.Rectangle(-208.1,-323.8,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.1,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-191.6,-334.1,485.1,683)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(301));

	// hint
	this.instance = new lib.hand_click_hint_mc();
	this.instance.setTransform(110,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(300));

	// animation
	this.instance_1 = new lib.hand2_2_1_mc();
	this.instance_1.setTransform(174.4,-256.6,1,1,0,0,0,42,32);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({skewY:180,x:-153.6},1).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({skewY:0,x:174.4},1).wait(1));

	// animation
	this.instance_2 = new lib.hand2_1_1_mc();
	this.instance_2.setTransform(115.4,183.1,1,1,0,0,0,-29,35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({skewY:180,x:-94.6},1).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({skewY:0,x:115.4},1).wait(1));

	// animation
	this.instance_3 = new lib.hand1_1_2_mc();
	this.instance_3.setTransform(26.4,155.7,1,1,0,0,0,42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({skewY:180,x:-4.1,y:160.7},1).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},15).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},16).to({skewY:0,x:26.4,y:155.7},1).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({_off:true},1).wait(121));

	// animation
	this.instance_4 = new lib.predplecho1_1_2_mc();
	this.instance_4.setTransform(190,223.3,1,1,0,0,0,74,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewY:180,x:-167.8,y:228.3},1).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},15).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},16).to({skewY:0,x:190,y:223.3},1).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewX:-97.8,skewY:82.2,x:261,y:-110.7},1).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({rotation:97.8,skewX:0,skewY:0,x:-240.3},1).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:0,skewX:-97.8,skewY:82.2,x:261},1).wait(1));

	// animation
	this.instance_5 = new lib.h1_mc();
	this.instance_5.setTransform(12,-39,1,1,0,0,0,10,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-50},14).to({y:-39},15).to({y:-50},14).to({y:-39},16).wait(1).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-47},15).to({y:-39},14).to({y:-47},15).to({y:-39},14).wait(1).to({y:-45},15).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(2));

	// animation
	this.instance_6 = new lib.predplecho1_1_1_mc();
	this.instance_6.setTransform(-14.7,250.4,1,1,0,-1.5,178.5,62.1,24.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({rotation:1.5,skewX:0,skewY:0,x:35.5},1).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:0,skewX:-1.5,skewY:178.5,x:-14.7},1).wait(1));

	// animation
	this.instance_7 = new lib.hero_body_2_mc();
	this.instance_7.setTransform(19.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:180,x:2.9,y:45.4},1).to({y:34.4},14).to({y:45.4},15).to({y:34.4},14).to({y:45.4},16).to({skewY:0,x:19.4,y:40.4},1).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).wait(1).to({y:32.4},15).to({y:40.4},14).to({y:32.4},15).to({y:40.4},14).to({skewY:180,x:1.4},1).to({y:34.4},15).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:0,x:19.4},1).wait(1));

	// animation
	this.instance_8 = new lib.plecho1_1_2_mc();
	this.instance_8.setTransform(139.4,28.7,1,1,0,0,0,-21,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewY:180,x:-117.1,y:33.7},1).to({y:22.7},14).to({y:33.7},15).to({y:22.7},14).to({y:33.7},16).to({skewY:0,x:139.4,y:28.7},1).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewX:-148.3,skewY:31.7,x:122.4,y:25.8},1).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({rotation:148.3,skewX:0,skewY:0,x:-101.6},1).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({rotation:0,skewX:-148.3,skewY:31.7,x:122.4},1).wait(1));

	// animation
	this.instance_9 = new lib.plecho1_1_1_mc();
	this.instance_9.setTransform(-103.6,68.1,1,1,0,-34.1,145.9,-12.1,-98.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180).to({_off:false},0).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({rotation:34.1,skewX:0,skewY:0,x:124.3},1).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:0,skewX:-34.1,skewY:145.9,x:-103.6},1).wait(1));

	// animation
	this.instance_10 = new lib.hero_body_1_mc();
	this.instance_10.setTransform(28,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:180,x:-5.8,y:134.9},1).to({y:123.9},14).to({y:134.9},15).to({y:123.9},14).to({y:134.9},16).to({skewY:0,x:28,y:129.9},1).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).wait(1).to({y:121.9},15).to({y:129.9},14).to({y:121.9},15).to({y:129.9},14).to({skewY:180,x:-7.3},1).to({y:123.9},15).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:0,x:28},1).wait(1));

	// animation
	this.instance_11 = new lib.hand1_1_1_mc();
	this.instance_11.setTransform(-202.6,210.3,1,1,0,0,0,36,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({skewY:180,x:224.9,y:212.3},1).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},15).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},16).to({skewY:0,x:-202.6,y:210.3},1).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_12 = new lib.predplecho1_1_1_mc();
	this.instance_12.setTransform(-65.6,268.3,1,1,0,0,0,62,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({skewY:180,x:87.9,y:273.3},1).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},15).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},16).to({skewY:0,x:-65.6,y:268.3},1).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_13 = new lib.plecho1_1_1_mc();
	this.instance_13.setTransform(-98.6,71,1,1,0,0,0,-12,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({skewY:180,x:120.9,y:76},1).to({y:65},14).to({y:76},15).to({y:65},14).to({y:76},16).to({skewY:0,x:-98.6,y:71},1).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-305.1,-322.5,555.2,1012.5);
p.frameBounds = [rect, new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.1,676.4), new cjs.Rectangle(-208.1,-325.6,539.2,676.4), new cjs.Rectangle(-208.1,-326.4,539.8,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.4,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.5,676.4), new cjs.Rectangle(-208.1,-332,546.5,676.4), new cjs.Rectangle(-208.1,-331.3,545.6,676.4), new cjs.Rectangle(-208.1,-330.5,545,676.4), new cjs.Rectangle(-208.1,-329.8,544.1,676.4), new cjs.Rectangle(-208.1,-329.1,543.1,676.4), new cjs.Rectangle(-208.1,-328.3,542.2,676.4), new cjs.Rectangle(-208.1,-327.6,541.5,676.4), new cjs.Rectangle(-208.1,-326.9,540.6,676.4), new cjs.Rectangle(-208.1,-326.1,539.6,676.4), new cjs.Rectangle(-208.1,-325.4,538.7,676.4), new cjs.Rectangle(-208.1,-324.7,538.1,676.4), new cjs.Rectangle(-208.1,-323.9,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.2,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.2,676.4), new cjs.Rectangle(-208.1,-325.6,539.1,676.4), new cjs.Rectangle(-208.1,-326.4,539.9,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.5,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.8,547.5,676.4), new cjs.Rectangle(-208.1,-332.1,546.6,676.4), new cjs.Rectangle(-208.1,-331.4,546,676.4), new cjs.Rectangle(-208.1,-330.7,545.2,676.4), new cjs.Rectangle(-208.1,-330,544.2,676.4), new cjs.Rectangle(-208.1,-329.3,543.3,676.4), new cjs.Rectangle(-208.1,-328.7,542.7,676.4), new cjs.Rectangle(-208.1,-328,541.9,676.4), new cjs.Rectangle(-208.1,-327.3,540.9,676.4), new cjs.Rectangle(-208.1,-326.6,540.3,676.4), new cjs.Rectangle(-208.1,-325.9,539.4,676.4), new cjs.Rectangle(-208.1,-325.2,538.5,676.4), new cjs.Rectangle(-208.1,-324.5,537.9,676.4), new cjs.Rectangle(-208.1,-323.8,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.1,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-191.6,-334.1,485.1,683)];


(lib.hero_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand2_2_1_mc();
	this.instance.setTransform(174.4,-256.6,1,1,0,0,0,42,32);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208).to({_off:false},0).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({skewY:180,x:-153.6},1).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({skewY:0,x:174.4},1).wait(1));

	// animation
	this.instance_1 = new lib.hand2_1_1_mc();
	this.instance_1.setTransform(115.4,183.1,1,1,0,0,0,-29,35);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(208).to({_off:false},0).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({skewY:180,x:-94.6},1).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({skewY:0,x:115.4},1).wait(1));

	// animation
	this.instance_2 = new lib.hand1_1_2_mc();
	this.instance_2.setTransform(26.4,155.7,1,1,0,0,0,42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({rotation:0.1,x:25.7,y:157.8},0).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},13).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({skewY:180,x:-4.1,y:160.7},1).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},15).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},16).to({skewY:0,x:26.4,y:155.7},1).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({_off:true},1).wait(121));

	// animation
	this.instance_3 = new lib.predplecho1_1_2_mc();
	this.instance_3.setTransform(190,223.3,1,1,0,0,0,74,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({rotation:-0.8,x:190.1,y:222.9},0).to({rotation:-11.7,x:190.7,y:217.9},13).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewY:180,x:-167.8,y:228.3},1).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},15).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},16).to({skewY:0,x:190,y:223.3},1).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewX:-97.8,skewY:82.2,x:261,y:-110.7},1).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({rotation:97.8,skewX:0,skewY:0,x:-240.3},1).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:0,skewX:-97.8,skewY:82.2,x:261},1).wait(1));

	// animation
	this.instance_4 = new lib.h0_mc();
	this.instance_4.setTransform(12,-39,1,1,0,0,0,10,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({y:-39.4},0).to({y:-45},13).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-50},14).to({y:-39},15).to({y:-50},14).to({y:-39},16).wait(1).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-47},15).to({y:-39},14).to({y:-47},15).to({y:-39},14).wait(1).to({y:-45},15).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(2));

	// animation
	this.instance_5 = new lib.predplecho1_1_1_mc();
	this.instance_5.setTransform(-14.7,250.4,1,1,0,-1.5,178.5,62.1,24.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208).to({_off:false},0).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({rotation:1.5,skewX:0,skewY:0,x:35.5},1).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:0,skewX:-1.5,skewY:178.5,x:-14.7},1).wait(1));

	// animation
	this.instance_6 = new lib.hero_body_2_mc();
	this.instance_6.setTransform(19.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({y:39.9},0).to({y:34.4},13).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:180,x:2.9,y:45.4},1).to({y:34.4},14).to({y:45.4},15).to({y:34.4},14).to({y:45.4},16).to({skewY:0,x:19.4,y:40.4},1).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).wait(1).to({y:32.4},15).to({y:40.4},14).to({y:32.4},15).to({y:40.4},14).to({skewY:180,x:1.4},1).to({y:34.4},15).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:0,x:19.4},1).wait(1));

	// animation
	this.instance_7 = new lib.plecho1_1_2_mc();
	this.instance_7.setTransform(139.4,28.7,1,1,0,0,0,-21,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({y:28.2},0).to({y:22.7},13).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewY:180,x:-117.1,y:33.7},1).to({y:22.7},14).to({y:33.7},15).to({y:22.7},14).to({y:33.7},16).to({skewY:0,x:139.4,y:28.7},1).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewX:-148.3,skewY:31.7,x:122.4,y:25.8},1).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({rotation:148.3,skewX:0,skewY:0,x:-101.6},1).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({rotation:0,skewX:-148.3,skewY:31.7,x:122.4},1).wait(1));

	// animation
	this.instance_8 = new lib.plecho1_1_1_mc();
	this.instance_8.setTransform(-103.6,68.1,1,1,0,-34.1,145.9,-12.1,-98.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(208).to({_off:false},0).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({rotation:34.1,skewX:0,skewY:0,x:124.3},1).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:0,skewX:-34.1,skewY:145.9,x:-103.6},1).wait(1));

	// animation
	this.instance_9 = new lib.hero_body_1_mc();
	this.instance_9.setTransform(28,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({y:129.5},0).to({y:123.9},13).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:180,x:-5.8,y:134.9},1).to({y:123.9},14).to({y:134.9},15).to({y:123.9},14).to({y:134.9},16).to({skewY:0,x:28,y:129.9},1).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).wait(1).to({y:121.9},15).to({y:129.9},14).to({y:121.9},15).to({y:129.9},14).to({skewY:180,x:-7.3},1).to({y:123.9},15).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:0,x:28},1).wait(1));

	// animation
	this.instance_10 = new lib.hand1_1_1_mc();
	this.instance_10.setTransform(-202.6,210.3,1,1,0,0,0,36,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({rotation:1,x:-203.3,y:212.2},0).to({rotation:15,x:-211.5,y:236.1},13).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({skewY:180,x:224.9,y:212.3},1).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},15).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},16).to({skewY:0,x:-202.6,y:210.3},1).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_11 = new lib.predplecho1_1_1_mc();
	this.instance_11.setTransform(-65.6,268.3,1,1,0,0,0,62,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({rotation:-1,x:-65.5,y:267.8},0).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},13).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({skewY:180,x:87.9,y:273.3},1).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},15).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},16).to({skewY:0,x:-65.6,y:268.3},1).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_12 = new lib.plecho1_1_1_mc();
	this.instance_12.setTransform(-98.6,71,1,1,0,0,0,-12,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({y:70.6},0).to({y:65},13).to({y:71},15).to({y:65},15).to({y:71},15).to({skewY:180,x:120.9,y:76},1).to({y:65},14).to({y:76},15).to({y:65},14).to({y:76},16).to({skewY:0,x:-98.6,y:71},1).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-305.1,-322.5,535.5,671.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-307.6,-322.9,538,671.4), new cjs.Rectangle(-309.8,-323.4,540.2,671.4), new cjs.Rectangle(-312.1,-323.8,542.5,671.4), new cjs.Rectangle(-314.4,-324.2,544.8,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319.1,-325.1,549.5,671.4), new cjs.Rectangle(-321.3,-325.5,551.7,671.4), new cjs.Rectangle(-323.6,-325.9,554,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.7,-326.8,558.1,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-331.9,-327.6,562.3,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.1,676.4), new cjs.Rectangle(-208.1,-325.6,539.2,676.4), new cjs.Rectangle(-208.1,-326.4,539.8,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.4,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.5,676.4), new cjs.Rectangle(-208.1,-332,546.5,676.4), new cjs.Rectangle(-208.1,-331.3,545.6,676.4), new cjs.Rectangle(-208.1,-330.5,545,676.4), new cjs.Rectangle(-208.1,-329.8,544.1,676.4), new cjs.Rectangle(-208.1,-329.1,543.1,676.4), new cjs.Rectangle(-208.1,-328.3,542.2,676.4), new cjs.Rectangle(-208.1,-327.6,541.5,676.4), new cjs.Rectangle(-208.1,-326.9,540.6,676.4), new cjs.Rectangle(-208.1,-326.1,539.6,676.4), new cjs.Rectangle(-208.1,-325.4,538.7,676.4), new cjs.Rectangle(-208.1,-324.7,538.1,676.4), new cjs.Rectangle(-208.1,-323.9,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.2,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.2,676.4), new cjs.Rectangle(-208.1,-325.6,539.1,676.4), new cjs.Rectangle(-208.1,-326.4,539.9,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.5,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.8,547.5,676.4), new cjs.Rectangle(-208.1,-332.1,546.6,676.4), new cjs.Rectangle(-208.1,-331.4,546,676.4), new cjs.Rectangle(-208.1,-330.7,545.2,676.4), new cjs.Rectangle(-208.1,-330,544.2,676.4), new cjs.Rectangle(-208.1,-329.3,543.3,676.4), new cjs.Rectangle(-208.1,-328.7,542.7,676.4), new cjs.Rectangle(-208.1,-328,541.9,676.4), new cjs.Rectangle(-208.1,-327.3,540.9,676.4), new cjs.Rectangle(-208.1,-326.6,540.3,676.4), new cjs.Rectangle(-208.1,-325.9,539.4,676.4), new cjs.Rectangle(-208.1,-325.2,538.5,676.4), new cjs.Rectangle(-208.1,-324.5,537.9,676.4), new cjs.Rectangle(-208.1,-323.8,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.1,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-191.6,-334.1,485.1,683)];


(lib.hero_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("dance_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(300));

	// animation
	this.instance = new lib.video_play_mc();
	this.instance.setTransform(0,0,0.632,0.632);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.801},4).to({scaleX:0.53,scaleY:0.53,alpha:0.012},15).to({_off:true},1).wait(309));

	// animation
	this.instance_1 = new lib.shadow_video_play_mc();
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},9).to({_off:true},1).wait(319));

	// animation
	this.instance_2 = new lib.hand2_2_1_mc();
	this.instance_2.setTransform(174.4,-256.6,1,1,0,0,0,42,32);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(208).to({_off:false},0).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({skewY:180,x:-153.6},1).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({skewY:0,x:174.4},1).wait(1));

	// animation
	this.instance_3 = new lib.hand2_1_1_mc();
	this.instance_3.setTransform(115.4,183.1,1,1,0,0,0,-29,35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(208).to({_off:false},0).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({skewY:180,x:-94.6},1).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({skewY:0,x:115.4},1).wait(1));

	// animation
	this.instance_4 = new lib.hand1_1_2_mc();
	this.instance_4.setTransform(26.4,155.7,1,1,0,0,0,42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({rotation:0.1,x:25.7,y:157.8},0).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},13).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({skewY:180,x:-4.1,y:160.7},1).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},15).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},16).to({skewY:0,x:26.4,y:155.7},1).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({_off:true},1).wait(121));

	// animation
	this.instance_5 = new lib.predplecho1_1_2_mc();
	this.instance_5.setTransform(190,223.3,1,1,0,0,0,74,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({rotation:-0.8,x:190.1,y:222.9},0).to({rotation:-11.7,x:190.7,y:217.9},13).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewY:180,x:-167.8,y:228.3},1).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},15).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},16).to({skewY:0,x:190,y:223.3},1).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewX:-97.8,skewY:82.2,x:261,y:-110.7},1).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({rotation:97.8,skewX:0,skewY:0,x:-240.3},1).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:0,skewX:-97.8,skewY:82.2,x:261},1).wait(1));

	// animation
	this.instance_6 = new lib.h3_mc();
	this.instance_6.setTransform(12,-39,1,1,0,0,0,10,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({y:-39.4},0).to({y:-45},13).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-50},14).to({y:-39},15).to({y:-50},14).to({y:-39},16).wait(1).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-47},15).to({y:-39},14).to({y:-47},15).to({y:-39},14).wait(1).to({y:-45},15).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(2));

	// animation
	this.instance_7 = new lib.predplecho1_1_1_mc();
	this.instance_7.setTransform(-14.7,250.4,1,1,0,-1.5,178.5,62.1,24.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(208).to({_off:false},0).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({rotation:1.5,skewX:0,skewY:0,x:35.5},1).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:0,skewX:-1.5,skewY:178.5,x:-14.7},1).wait(1));

	// animation
	this.instance_8 = new lib.hero_body_2_mc();
	this.instance_8.setTransform(19.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({y:39.9},0).to({y:34.4},13).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:180,x:2.9,y:45.4},1).to({y:34.4},14).to({y:45.4},15).to({y:34.4},14).to({y:45.4},16).to({skewY:0,x:19.4,y:40.4},1).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).wait(1).to({y:32.4},15).to({y:40.4},14).to({y:32.4},15).to({y:40.4},14).to({skewY:180,x:1.4},1).to({y:34.4},15).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:0,x:19.4},1).wait(1));

	// animation
	this.instance_9 = new lib.plecho1_1_2_mc();
	this.instance_9.setTransform(139.4,28.7,1,1,0,0,0,-21,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({y:28.2},0).to({y:22.7},13).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewY:180,x:-117.1,y:33.7},1).to({y:22.7},14).to({y:33.7},15).to({y:22.7},14).to({y:33.7},16).to({skewY:0,x:139.4,y:28.7},1).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewX:-148.3,skewY:31.7,x:122.4,y:25.8},1).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({rotation:148.3,skewX:0,skewY:0,x:-101.6},1).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({rotation:0,skewX:-148.3,skewY:31.7,x:122.4},1).wait(1));

	// animation
	this.instance_10 = new lib.plecho1_1_1_mc();
	this.instance_10.setTransform(-103.6,68.1,1,1,0,-34.1,145.9,-12.1,-98.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(208).to({_off:false},0).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({rotation:34.1,skewX:0,skewY:0,x:124.3},1).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:0,skewX:-34.1,skewY:145.9,x:-103.6},1).wait(1));

	// animation
	this.instance_11 = new lib.hero_body_1_mc();
	this.instance_11.setTransform(28,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({y:129.5},0).to({y:123.9},13).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:180,x:-5.8,y:134.9},1).to({y:123.9},14).to({y:134.9},15).to({y:123.9},14).to({y:134.9},16).to({skewY:0,x:28,y:129.9},1).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).wait(1).to({y:121.9},15).to({y:129.9},14).to({y:121.9},15).to({y:129.9},14).to({skewY:180,x:-7.3},1).to({y:123.9},15).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:0,x:28},1).wait(1));

	// animation
	this.instance_12 = new lib.hand1_1_1_mc();
	this.instance_12.setTransform(-202.6,210.3,1,1,0,0,0,36,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({rotation:1,x:-203.3,y:212.2},0).to({rotation:15,x:-211.5,y:236.1},13).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({skewY:180,x:224.9,y:212.3},1).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},15).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},16).to({skewY:0,x:-202.6,y:210.3},1).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_13 = new lib.predplecho1_1_1_mc();
	this.instance_13.setTransform(-65.6,268.3,1,1,0,0,0,62,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({rotation:-1,x:-65.5,y:267.8},0).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},13).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({skewY:180,x:87.9,y:273.3},1).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},15).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},16).to({skewY:0,x:-65.6,y:268.3},1).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_14 = new lib.plecho1_1_1_mc();
	this.instance_14.setTransform(-98.6,71,1,1,0,0,0,-12,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({y:70.6},0).to({y:65},13).to({y:71},15).to({y:65},15).to({y:71},15).to({skewY:180,x:120.9,y:76},1).to({y:65},14).to({y:76},15).to({y:65},14).to({y:76},16).to({skewY:0,x:-98.6,y:71},1).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-700,-350,1400,700);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-305.1,-322.5,535.5,671.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-307.6,-322.9,538,671.4), new cjs.Rectangle(-309.8,-323.4,540.2,671.4), new cjs.Rectangle(-312.1,-323.8,542.5,671.4), new cjs.Rectangle(-314.4,-324.2,544.8,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319.1,-325.1,549.5,671.4), new cjs.Rectangle(-321.3,-325.5,551.7,671.4), new cjs.Rectangle(-323.6,-325.9,554,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.7,-326.8,558.1,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-331.9,-327.6,562.3,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.1,676.4), new cjs.Rectangle(-208.1,-325.6,539.2,676.4), new cjs.Rectangle(-208.1,-326.4,539.8,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.4,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.5,676.4), new cjs.Rectangle(-208.1,-332,546.5,676.4), new cjs.Rectangle(-208.1,-331.3,545.6,676.4), new cjs.Rectangle(-208.1,-330.5,545,676.4), new cjs.Rectangle(-208.1,-329.8,544.1,676.4), new cjs.Rectangle(-208.1,-329.1,543.1,676.4), new cjs.Rectangle(-208.1,-328.3,542.2,676.4), new cjs.Rectangle(-208.1,-327.6,541.5,676.4), new cjs.Rectangle(-208.1,-326.9,540.6,676.4), new cjs.Rectangle(-208.1,-326.1,539.6,676.4), new cjs.Rectangle(-208.1,-325.4,538.7,676.4), new cjs.Rectangle(-208.1,-324.7,538.1,676.4), new cjs.Rectangle(-208.1,-323.9,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.2,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.2,676.4), new cjs.Rectangle(-208.1,-325.6,539.1,676.4), new cjs.Rectangle(-208.1,-326.4,539.9,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.5,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.8,547.5,676.4), new cjs.Rectangle(-208.1,-332.1,546.6,676.4), new cjs.Rectangle(-208.1,-331.4,546,676.4), new cjs.Rectangle(-208.1,-330.7,545.2,676.4), new cjs.Rectangle(-208.1,-330,544.2,676.4), new cjs.Rectangle(-208.1,-329.3,543.3,676.4), new cjs.Rectangle(-208.1,-328.7,542.7,676.4), new cjs.Rectangle(-208.1,-328,541.9,676.4), new cjs.Rectangle(-208.1,-327.3,540.9,676.4), new cjs.Rectangle(-208.1,-326.6,540.3,676.4), new cjs.Rectangle(-208.1,-325.9,539.4,676.4), new cjs.Rectangle(-208.1,-325.2,538.5,676.4), new cjs.Rectangle(-208.1,-324.5,537.9,676.4), new cjs.Rectangle(-208.1,-323.8,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.1,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-191.6,-334.1,485.1,683)];


(lib.hero_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("dance_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(300));

	// animation
	this.instance = new lib.video_play_mc();
	this.instance.setTransform(0,0,0.632,0.632);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.801},4).to({scaleX:0.53,scaleY:0.53,alpha:0.012},15).to({_off:true},1).wait(309));

	// animation
	this.instance_1 = new lib.shadow_video_play_mc();
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},9).to({_off:true},1).wait(319));

	// animation
	this.instance_2 = new lib.hand2_2_1_mc();
	this.instance_2.setTransform(174.4,-256.6,1,1,0,0,0,42,32);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(208).to({_off:false},0).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({skewY:180,x:-153.6},1).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({skewY:0,x:174.4},1).wait(1));

	// animation
	this.instance_3 = new lib.hand2_1_1_mc();
	this.instance_3.setTransform(115.4,183.1,1,1,0,0,0,-29,35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(208).to({_off:false},0).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({skewY:180,x:-94.6},1).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({skewY:0,x:115.4},1).wait(1));

	// animation
	this.instance_4 = new lib.hand1_1_2_mc();
	this.instance_4.setTransform(26.4,155.7,1,1,0,0,0,42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({rotation:0.1,x:25.7,y:157.8},0).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},13).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({skewY:180,x:-4.1,y:160.7},1).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},15).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},16).to({skewY:0,x:26.4,y:155.7},1).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({_off:true},1).wait(121));

	// animation
	this.instance_5 = new lib.predplecho1_1_2_mc();
	this.instance_5.setTransform(190,223.3,1,1,0,0,0,74,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({rotation:-0.8,x:190.1,y:222.9},0).to({rotation:-11.7,x:190.7,y:217.9},13).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewY:180,x:-167.8,y:228.3},1).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},15).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},16).to({skewY:0,x:190,y:223.3},1).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewX:-97.8,skewY:82.2,x:261,y:-110.7},1).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({rotation:97.8,skewX:0,skewY:0,x:-240.3},1).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:0,skewX:-97.8,skewY:82.2,x:261},1).wait(1));

	// animation
	this.instance_6 = new lib.h2_mc();
	this.instance_6.setTransform(12,-39,1,1,0,0,0,10,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({y:-39.4},0).to({y:-45},13).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-50},14).to({y:-39},15).to({y:-50},14).to({y:-39},16).wait(1).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-47},15).to({y:-39},14).to({y:-47},15).to({y:-39},14).wait(1).to({y:-45},15).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(2));

	// animation
	this.instance_7 = new lib.predplecho1_1_1_mc();
	this.instance_7.setTransform(-14.7,250.4,1,1,0,-1.5,178.5,62.1,24.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(208).to({_off:false},0).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({rotation:1.5,skewX:0,skewY:0,x:35.5},1).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:0,skewX:-1.5,skewY:178.5,x:-14.7},1).wait(1));

	// animation
	this.instance_8 = new lib.hero_body_2_mc();
	this.instance_8.setTransform(19.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({y:39.9},0).to({y:34.4},13).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:180,x:2.9,y:45.4},1).to({y:34.4},14).to({y:45.4},15).to({y:34.4},14).to({y:45.4},16).to({skewY:0,x:19.4,y:40.4},1).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).wait(1).to({y:32.4},15).to({y:40.4},14).to({y:32.4},15).to({y:40.4},14).to({skewY:180,x:1.4},1).to({y:34.4},15).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:0,x:19.4},1).wait(1));

	// animation
	this.instance_9 = new lib.plecho1_1_2_mc();
	this.instance_9.setTransform(139.4,28.7,1,1,0,0,0,-21,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({y:28.2},0).to({y:22.7},13).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewY:180,x:-117.1,y:33.7},1).to({y:22.7},14).to({y:33.7},15).to({y:22.7},14).to({y:33.7},16).to({skewY:0,x:139.4,y:28.7},1).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewX:-148.3,skewY:31.7,x:122.4,y:25.8},1).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({rotation:148.3,skewX:0,skewY:0,x:-101.6},1).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({rotation:0,skewX:-148.3,skewY:31.7,x:122.4},1).wait(1));

	// animation
	this.instance_10 = new lib.plecho1_1_1_mc();
	this.instance_10.setTransform(-103.6,68.1,1,1,0,-34.1,145.9,-12.1,-98.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(208).to({_off:false},0).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({rotation:34.1,skewX:0,skewY:0,x:124.3},1).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:0,skewX:-34.1,skewY:145.9,x:-103.6},1).wait(1));

	// animation
	this.instance_11 = new lib.hero_body_1_mc();
	this.instance_11.setTransform(28,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({y:129.5},0).to({y:123.9},13).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:180,x:-5.8,y:134.9},1).to({y:123.9},14).to({y:134.9},15).to({y:123.9},14).to({y:134.9},16).to({skewY:0,x:28,y:129.9},1).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).wait(1).to({y:121.9},15).to({y:129.9},14).to({y:121.9},15).to({y:129.9},14).to({skewY:180,x:-7.3},1).to({y:123.9},15).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:0,x:28},1).wait(1));

	// animation
	this.instance_12 = new lib.hand1_1_1_mc();
	this.instance_12.setTransform(-202.6,210.3,1,1,0,0,0,36,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({rotation:1,x:-203.3,y:212.2},0).to({rotation:15,x:-211.5,y:236.1},13).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({skewY:180,x:224.9,y:212.3},1).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},15).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},16).to({skewY:0,x:-202.6,y:210.3},1).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_13 = new lib.predplecho1_1_1_mc();
	this.instance_13.setTransform(-65.6,268.3,1,1,0,0,0,62,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({rotation:-1,x:-65.5,y:267.8},0).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},13).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({skewY:180,x:87.9,y:273.3},1).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},15).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},16).to({skewY:0,x:-65.6,y:268.3},1).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_14 = new lib.plecho1_1_1_mc();
	this.instance_14.setTransform(-98.6,71,1,1,0,0,0,-12,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({y:70.6},0).to({y:65},13).to({y:71},15).to({y:65},15).to({y:71},15).to({skewY:180,x:120.9,y:76},1).to({y:65},14).to({y:76},15).to({y:65},14).to({y:76},16).to({skewY:0,x:-98.6,y:71},1).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-700,-350,1400,700);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-305.1,-322.5,535.5,671.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-307.6,-322.9,538,671.4), new cjs.Rectangle(-309.8,-323.4,540.2,671.4), new cjs.Rectangle(-312.1,-323.8,542.5,671.4), new cjs.Rectangle(-314.4,-324.2,544.8,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319.1,-325.1,549.5,671.4), new cjs.Rectangle(-321.3,-325.5,551.7,671.4), new cjs.Rectangle(-323.6,-325.9,554,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.7,-326.8,558.1,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-331.9,-327.6,562.3,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.1,676.4), new cjs.Rectangle(-208.1,-325.6,539.2,676.4), new cjs.Rectangle(-208.1,-326.4,539.8,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.4,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.5,676.4), new cjs.Rectangle(-208.1,-332,546.5,676.4), new cjs.Rectangle(-208.1,-331.3,545.6,676.4), new cjs.Rectangle(-208.1,-330.5,545,676.4), new cjs.Rectangle(-208.1,-329.8,544.1,676.4), new cjs.Rectangle(-208.1,-329.1,543.1,676.4), new cjs.Rectangle(-208.1,-328.3,542.2,676.4), new cjs.Rectangle(-208.1,-327.6,541.5,676.4), new cjs.Rectangle(-208.1,-326.9,540.6,676.4), new cjs.Rectangle(-208.1,-326.1,539.6,676.4), new cjs.Rectangle(-208.1,-325.4,538.7,676.4), new cjs.Rectangle(-208.1,-324.7,538.1,676.4), new cjs.Rectangle(-208.1,-323.9,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.2,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.2,676.4), new cjs.Rectangle(-208.1,-325.6,539.1,676.4), new cjs.Rectangle(-208.1,-326.4,539.9,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.5,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.8,547.5,676.4), new cjs.Rectangle(-208.1,-332.1,546.6,676.4), new cjs.Rectangle(-208.1,-331.4,546,676.4), new cjs.Rectangle(-208.1,-330.7,545.2,676.4), new cjs.Rectangle(-208.1,-330,544.2,676.4), new cjs.Rectangle(-208.1,-329.3,543.3,676.4), new cjs.Rectangle(-208.1,-328.7,542.7,676.4), new cjs.Rectangle(-208.1,-328,541.9,676.4), new cjs.Rectangle(-208.1,-327.3,540.9,676.4), new cjs.Rectangle(-208.1,-326.6,540.3,676.4), new cjs.Rectangle(-208.1,-325.9,539.4,676.4), new cjs.Rectangle(-208.1,-325.2,538.5,676.4), new cjs.Rectangle(-208.1,-324.5,537.9,676.4), new cjs.Rectangle(-208.1,-323.8,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.1,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-191.6,-334.1,485.1,683)];


(lib.hero_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("dance_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(300));

	// animation
	this.instance = new lib.video_play_mc();
	this.instance.setTransform(0,0,0.632,0.632);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.801},4).to({scaleX:0.53,scaleY:0.53,alpha:0.012},15).to({_off:true},1).wait(309));

	// animation
	this.instance_1 = new lib.shadow_video_play_mc();
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},9).to({_off:true},1).wait(319));

	// animation
	this.instance_2 = new lib.hand2_2_1_mc();
	this.instance_2.setTransform(174.4,-256.6,1,1,0,0,0,42,32);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(208).to({_off:false},0).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({regX:42.1,rotation:-11.7,x:191.8,y:-235.7},15).to({regX:42,rotation:0,x:174.4,y:-256.6},14).to({skewY:180,x:-153.6},1).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({regX:42.1,skewX:10.7,skewY:190.7,x:-162.6,y:-230},15).to({regX:42,skewX:0,skewY:180,x:-153.6,y:-256.6},15).to({skewY:0,x:174.4},1).wait(1));

	// animation
	this.instance_3 = new lib.hand2_1_1_mc();
	this.instance_3.setTransform(115.4,183.1,1,1,0,0,0,-29,35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(208).to({_off:false},0).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({regY:34.9,rotation:33.7,x:92.9,y:249.8},15).to({regY:35,rotation:0,x:115.4,y:183.1},14).to({skewY:180,x:-94.6},1).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({regX:-28.9,skewX:-40.5,skewY:139.5,x:-60,y:255},15).to({regX:-29,skewX:0,skewY:180,x:-94.6,y:183.1},15).to({skewY:0,x:115.4},1).wait(1));

	// animation
	this.instance_4 = new lib.hand1_1_2_mc();
	this.instance_4.setTransform(26.4,155.7,1,1,0,0,0,42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({rotation:0.1,x:25.7,y:157.8},0).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},13).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({skewY:180,x:-4.1,y:160.7},1).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},15).to({regX:42.1,regY:-41.1,skewX:-4.5,skewY:175.5,x:5.4,y:180.6},14).to({regX:42,regY:-41,skewX:0,skewY:180,x:-4.1,y:160.7},16).to({skewY:0,x:26.4,y:155.7},1).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},14).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({regY:-41.1,rotation:3.3,x:16.7,y:184.9},15).to({regY:-41,rotation:0,x:26.4,y:155.7},15).to({_off:true},1).wait(121));

	// animation
	this.instance_5 = new lib.predplecho1_1_2_mc();
	this.instance_5.setTransform(190,223.3,1,1,0,0,0,74,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({rotation:-0.8,x:190.1,y:222.9},0).to({rotation:-11.7,x:190.7,y:217.9},13).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewY:180,x:-167.8,y:228.3},1).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},15).to({skewX:10.5,skewY:190.5,y:217.3},14).to({skewX:0,skewY:180,y:228.3},16).to({skewY:0,x:190,y:223.3},1).to({rotation:-11.7,x:190.7,y:217.9},14).to({rotation:0,x:190,y:223.3},15).to({rotation:-11.7,x:190.7,y:217.9},15).to({rotation:0,x:190,y:223.3},15).to({skewX:-97.8,skewY:82.2,x:261,y:-110.7},1).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({regY:25.9,skewX:-98.5,skewY:81.5,x:280.3,y:-91.1},15).to({regY:26,skewX:-97.8,skewY:82.2,x:261,y:-110.7},14).to({rotation:97.8,skewX:0,skewY:0,x:-240.3},1).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:101.8,x:-259.2,y:-90.4},15).to({rotation:97.8,x:-240.3,y:-110.7},15).to({rotation:0,skewX:-97.8,skewY:82.2,x:261},1).wait(1));

	// animation
	this.instance_6 = new lib.h1_mc();
	this.instance_6.setTransform(12,-39,1,1,0,0,0,10,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({y:-39.4},0).to({y:-45},13).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-50},14).to({y:-39},15).to({y:-50},14).to({y:-39},16).wait(1).to({y:-45},14).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(1).to({y:-47},15).to({y:-39},14).to({y:-47},15).to({y:-39},14).wait(1).to({y:-45},15).to({y:-39},15).to({y:-45},15).to({y:-39},15).wait(2));

	// animation
	this.instance_7 = new lib.predplecho1_1_1_mc();
	this.instance_7.setTransform(-14.7,250.4,1,1,0,-1.5,178.5,62.1,24.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(208).to({_off:false},0).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({regX:62,skewX:22.2,skewY:202.2,x:-53.2,y:259.1},15).to({regX:62.1,skewX:-1.5,skewY:178.5,x:-14.7,y:250.4},14).to({rotation:1.5,skewX:0,skewY:0,x:35.5},1).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:-22.2,x:86.3,y:264.2},15).to({rotation:1.5,x:35.5,y:250.4},15).to({rotation:0,skewX:-1.5,skewY:178.5,x:-14.7},1).wait(1));

	// animation
	this.instance_8 = new lib.hero_body_2_mc();
	this.instance_8.setTransform(19.4,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({y:39.9},0).to({y:34.4},13).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:180,x:2.9,y:45.4},1).to({y:34.4},14).to({y:45.4},15).to({y:34.4},14).to({y:45.4},16).to({skewY:0,x:19.4,y:40.4},1).to({y:34.4},14).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).wait(1).to({y:32.4},15).to({y:40.4},14).to({y:32.4},15).to({y:40.4},14).to({skewY:180,x:1.4},1).to({y:34.4},15).to({y:40.4},15).to({y:34.4},15).to({y:40.4},15).to({skewY:0,x:19.4},1).wait(1));

	// animation
	this.instance_9 = new lib.plecho1_1_2_mc();
	this.instance_9.setTransform(139.4,28.7,1,1,0,0,0,-21,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({y:28.2},0).to({y:22.7},13).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewY:180,x:-117.1,y:33.7},1).to({y:22.7},14).to({y:33.7},15).to({y:22.7},14).to({y:33.7},16).to({skewY:0,x:139.4,y:28.7},1).to({y:22.7},14).to({y:28.7},15).to({y:22.7},15).to({y:28.7},15).to({skewX:-148.3,skewY:31.7,x:122.4,y:25.8},1).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({regX:-20.9,skewX:-136.6,skewY:43.4,x:116.9,y:14.5},15).to({regX:-21,skewX:-148.3,skewY:31.7,x:122.4,y:25.8},14).to({rotation:148.3,skewX:0,skewY:0,x:-101.6},1).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({regX:-21.1,rotation:137.8,x:-98,y:18},15).to({regX:-21,rotation:148.3,x:-101.6,y:25.8},15).to({rotation:0,skewX:-148.3,skewY:31.7,x:122.4},1).wait(1));

	// animation
	this.instance_10 = new lib.plecho1_1_1_mc();
	this.instance_10.setTransform(-103.6,68.1,1,1,0,-34.1,145.9,-12.1,-98.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(208).to({_off:false},0).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({skewX:-20.6,skewY:159.4,x:-97.6,y:61},15).to({skewX:-34.1,skewY:145.9,x:-103.6,y:68.1},14).to({rotation:34.1,skewX:0,skewY:0,x:124.3},1).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:18.1,x:121.4,y:64.6},15).to({rotation:34.1,x:124.3,y:68.1},15).to({rotation:0,skewX:-34.1,skewY:145.9,x:-103.6},1).wait(1));

	// animation
	this.instance_11 = new lib.hero_body_1_mc();
	this.instance_11.setTransform(28,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({y:129.5},0).to({y:123.9},13).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:180,x:-5.8,y:134.9},1).to({y:123.9},14).to({y:134.9},15).to({y:123.9},14).to({y:134.9},16).to({skewY:0,x:28,y:129.9},1).to({y:123.9},14).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).wait(1).to({y:121.9},15).to({y:129.9},14).to({y:121.9},15).to({y:129.9},14).to({skewY:180,x:-7.3},1).to({y:123.9},15).to({y:129.9},15).to({y:123.9},15).to({y:129.9},15).to({skewY:0,x:28},1).wait(1));

	// animation
	this.instance_12 = new lib.hand1_1_1_mc();
	this.instance_12.setTransform(-202.6,210.3,1,1,0,0,0,36,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({rotation:1,x:-203.3,y:212.2},0).to({rotation:15,x:-211.5,y:236.1},13).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({skewY:180,x:224.9,y:212.3},1).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},15).to({skewX:-2.8,skewY:177.2,x:233.1,y:230.1},14).to({skewX:0,skewY:180,x:224.9,y:213.3},16).to({skewY:0,x:-202.6,y:210.3},1).to({rotation:15,x:-211.5,y:236.1},14).to({rotation:0,x:-202.6,y:210.3},15).to({rotation:15,x:-211.5,y:235.1},15).to({rotation:0,x:-202.6,y:210.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_13 = new lib.predplecho1_1_1_mc();
	this.instance_13.setTransform(-65.6,268.3,1,1,0,0,0,62,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({rotation:-1,x:-65.5,y:267.8},0).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},13).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({skewY:180,x:87.9,y:273.3},1).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},15).to({skewX:12.2,skewY:192.2,x:86.9,y:260.8},14).to({skewX:0,skewY:180,x:87.9,y:273.3},16).to({skewY:0,x:-65.6,y:268.3},1).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},14).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({regY:23.9,rotation:-15,x:-64.1,y:261.6},15).to({regY:24,rotation:0,x:-65.6,y:268.3},15).to({_off:true},1).wait(121));

	// animation
	this.instance_14 = new lib.plecho1_1_1_mc();
	this.instance_14.setTransform(-98.6,71,1,1,0,0,0,-12,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({y:70.6},0).to({y:65},13).to({y:71},15).to({y:65},15).to({y:71},15).to({skewY:180,x:120.9,y:76},1).to({y:65},14).to({y:76},15).to({y:65},14).to({y:76},16).to({skewY:0,x:-98.6,y:71},1).to({y:65},14).to({y:71},15).to({y:65},15).to({y:71},15).to({_off:true},1).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-700,-350,1400,700);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-305.1,-322.5,535.5,671.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-307.6,-322.9,538,671.4), new cjs.Rectangle(-309.8,-323.4,540.2,671.4), new cjs.Rectangle(-312.1,-323.8,542.5,671.4), new cjs.Rectangle(-314.4,-324.2,544.8,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319.1,-325.1,549.5,671.4), new cjs.Rectangle(-321.3,-325.5,551.7,671.4), new cjs.Rectangle(-323.6,-325.9,554,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.7,-326.8,558.1,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-331.9,-327.6,562.3,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.1,676.4), new cjs.Rectangle(-208.1,-325.6,539.2,676.4), new cjs.Rectangle(-208.1,-326.4,539.8,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.4,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.5,676.4), new cjs.Rectangle(-208.1,-332,546.5,676.4), new cjs.Rectangle(-208.1,-331.3,545.6,676.4), new cjs.Rectangle(-208.1,-330.5,545,676.4), new cjs.Rectangle(-208.1,-329.8,544.1,676.4), new cjs.Rectangle(-208.1,-329.1,543.1,676.4), new cjs.Rectangle(-208.1,-328.3,542.2,676.4), new cjs.Rectangle(-208.1,-327.6,541.5,676.4), new cjs.Rectangle(-208.1,-326.9,540.6,676.4), new cjs.Rectangle(-208.1,-326.1,539.6,676.4), new cjs.Rectangle(-208.1,-325.4,538.7,676.4), new cjs.Rectangle(-208.1,-324.7,538.1,676.4), new cjs.Rectangle(-208.1,-323.9,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.2,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-208.1,-323.3,536.2,676.4), new cjs.Rectangle(-208.1,-324,537.2,676.4), new cjs.Rectangle(-208.1,-324.8,538.2,676.4), new cjs.Rectangle(-208.1,-325.6,539.1,676.4), new cjs.Rectangle(-208.1,-326.4,539.9,676.4), new cjs.Rectangle(-208.1,-327.2,540.8,676.4), new cjs.Rectangle(-208.1,-328,541.8,676.4), new cjs.Rectangle(-208.1,-328.8,542.8,676.4), new cjs.Rectangle(-208.1,-329.5,543.8,676.4), new cjs.Rectangle(-208.1,-330.3,544.5,676.4), new cjs.Rectangle(-208.1,-331.1,545.5,676.4), new cjs.Rectangle(-208.1,-331.9,546.4,676.4), new cjs.Rectangle(-208.1,-332.7,547.4,676.4), new cjs.Rectangle(-208.1,-333.5,548.4,676.4), new cjs.Rectangle(-208.1,-332.8,547.5,676.4), new cjs.Rectangle(-208.1,-332.1,546.6,676.4), new cjs.Rectangle(-208.1,-331.4,546,676.4), new cjs.Rectangle(-208.1,-330.7,545.2,676.4), new cjs.Rectangle(-208.1,-330,544.2,676.4), new cjs.Rectangle(-208.1,-329.3,543.3,676.4), new cjs.Rectangle(-208.1,-328.7,542.7,676.4), new cjs.Rectangle(-208.1,-328,541.9,676.4), new cjs.Rectangle(-208.1,-327.3,540.9,676.4), new cjs.Rectangle(-208.1,-326.6,540.3,676.4), new cjs.Rectangle(-208.1,-325.9,539.4,676.4), new cjs.Rectangle(-208.1,-325.2,538.5,676.4), new cjs.Rectangle(-208.1,-324.5,537.9,676.4), new cjs.Rectangle(-208.1,-323.8,537.1,676.4), new cjs.Rectangle(-208.1,-323.2,536.1,676.4), new cjs.Rectangle(-208.1,-322.5,535.5,676.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.5,-322.9,537.9,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-312.2,-323.8,542.6,671.4), new cjs.Rectangle(-314.6,-324.2,545,671.4), new cjs.Rectangle(-316.9,-324.6,547.3,671.4), new cjs.Rectangle(-319,-325,549.4,671.4), new cjs.Rectangle(-321.5,-325.5,551.9,671.4), new cjs.Rectangle(-323.7,-325.9,554.1,671.4), new cjs.Rectangle(-325.7,-326.3,556.1,671.4), new cjs.Rectangle(-327.8,-326.8,558.2,671.4), new cjs.Rectangle(-330,-327.2,560.4,671.4), new cjs.Rectangle(-332,-327.6,562.4,671.4), new cjs.Rectangle(-333.8,-328,564.2,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.4,-327.3,560.8,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.2,-324.5,546.6,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-309.6,-323.3,540,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-318.4,-324.9,548.8,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-324.6,-326.1,555,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-332.3,-327.7,562.7,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-336.1,-328.5,566.5,671.4), new cjs.Rectangle(-334.2,-328.1,564.6,671.4), new cjs.Rectangle(-332.4,-327.7,562.8,671.4), new cjs.Rectangle(-330.5,-327.3,560.9,671.4), new cjs.Rectangle(-328.6,-326.9,559,671.4), new cjs.Rectangle(-326.6,-326.5,557,671.4), new cjs.Rectangle(-324.7,-326.1,555.1,671.4), new cjs.Rectangle(-322.6,-325.7,553,671.4), new cjs.Rectangle(-320.5,-325.3,550.9,671.4), new cjs.Rectangle(-318.3,-324.9,548.7,671.4), new cjs.Rectangle(-316.3,-324.5,546.7,671.4), new cjs.Rectangle(-314.1,-324.1,544.5,671.4), new cjs.Rectangle(-311.9,-323.7,542.3,671.4), new cjs.Rectangle(-309.7,-323.3,540.1,671.4), new cjs.Rectangle(-307.4,-322.9,537.8,671.4), new cjs.Rectangle(-305.1,-322.5,535.5,671.4), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-191.6,-332.9,486.5,681.3), new cjs.Rectangle(-191.6,-331.6,488,679.5), new cjs.Rectangle(-191.6,-330.5,489.4,677.8), new cjs.Rectangle(-191.6,-329.2,490.8,676), new cjs.Rectangle(-191.6,-328,492.2,674.3), new cjs.Rectangle(-191.6,-326.7,493.5,672.4), new cjs.Rectangle(-191.6,-326.2,494.8,671.4), new cjs.Rectangle(-191.6,-326.7,496.1,671.4), new cjs.Rectangle(-191.6,-327.3,497.8,671.4), new cjs.Rectangle(-191.6,-327.8,498.9,671.4), new cjs.Rectangle(-191.6,-328.3,500,671.4), new cjs.Rectangle(-191.6,-328.9,501.2,671.4), new cjs.Rectangle(-191.6,-329.4,502.3,671.4), new cjs.Rectangle(-191.6,-329.9,503.4,671.4), new cjs.Rectangle(-191.6,-330.5,504.8,671.4), new cjs.Rectangle(-191.6,-329.9,503.3,671.4), new cjs.Rectangle(-191.6,-329.3,502.3,671.4), new cjs.Rectangle(-191.6,-328.8,500.8,671.4), new cjs.Rectangle(-191.6,-328.2,499.6,671.4), new cjs.Rectangle(-191.6,-327.6,498.5,671.4), new cjs.Rectangle(-191.6,-327,496.9,671.4), new cjs.Rectangle(-191.6,-326.5,495.6,671.4), new cjs.Rectangle(-191.6,-326.2,494.3,671.7), new cjs.Rectangle(-191.6,-327.5,492.6,673.6), new cjs.Rectangle(-191.6,-328.9,491.2,675.6), new cjs.Rectangle(-191.6,-330.2,489.4,677.5), new cjs.Rectangle(-191.6,-331.5,487.9,679.3), new cjs.Rectangle(-191.6,-332.8,486.5,681.2), new cjs.Rectangle(-191.6,-334.1,485.1,683), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-273.8,-332.4,486.2,681), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-278.3,-327.6,490.7,674.9), new cjs.Rectangle(-279.3,-326,491.7,673), new cjs.Rectangle(-280.7,-324.9,493.1,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-283.6,-325.7,496,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-292,-328.5,504.4,673.8), new cjs.Rectangle(-290.4,-328.1,502.8,671.4), new cjs.Rectangle(-289.6,-327.7,502,671.4), new cjs.Rectangle(-288.3,-327.3,500.7,671.4), new cjs.Rectangle(-287.1,-326.9,499.5,671.4), new cjs.Rectangle(-285.8,-326.5,498.2,671.4), new cjs.Rectangle(-284.9,-326.1,497.3,671.4), new cjs.Rectangle(-283.5,-325.7,495.9,671.4), new cjs.Rectangle(-282.2,-325.3,494.6,671.4), new cjs.Rectangle(-280.8,-324.9,493.2,671.4), new cjs.Rectangle(-279.2,-326,491.6,673), new cjs.Rectangle(-278.3,-327.6,490.7,675), new cjs.Rectangle(-276.8,-329.3,489.2,677), new cjs.Rectangle(-275.3,-330.8,487.7,679), new cjs.Rectangle(-273.8,-332.5,486.2,681), new cjs.Rectangle(-272.7,-334.1,485.1,683), new cjs.Rectangle(-191.6,-334.1,485.1,683)];


(lib.hand_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.hand_arrow_checks_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.hand_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-130,593.4,763.4);
p.frameBounds = [rect];


(lib.container_hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		управление анимацией
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		this.addEventListener("click", _onClickContainerHeroMcFunc, false);
		var animation_mc = this.body_mc;
		animation_mc.gotoAndStop(0);
		function _onClickContainerHeroMcFunc(event)
		{
			animation_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.hero_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgsLAsMQyTyTAA55QAA54STyTQSTyTZ4AAQZ4AASTSTQSUSTAAZ4QAAZ5yUSTQyTSU54gBQ54AByTyUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-400,800,1090);
p.frameBounds = [rect];


(lib.container_hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		управление анимацией
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		this.addEventListener("click", _onClickContainerHeroMcFunc, false);
		var animation_mc = this.body_mc;
		animation_mc.gotoAndStop(0);
		function _onClickContainerHeroMcFunc(event)
		{
			animation_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.hero_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgsLAsMQyTyTAA55QAA54STyTQSTyTZ4AAQZ4AASTSTQSUSTAAZ4QAAZ5yUSTQyTSU54gBQ54AByTyUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-400,800,1090);
p.frameBounds = [rect];


(lib.container_hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		управление анимацией
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		this.addEventListener("click", _onClickContainerHeroMcFunc, false);
		var animation_mc = this.body_mc;
		animation_mc.gotoAndStop(0);
		function _onClickContainerHeroMcFunc(event)
		{
			animation_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.hero_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgsLAsMQyTyTAA55QAA54STyTQSTyTZ4AAQZ4AASTSTQSUSTAAZ4QAAZ5yUSTQyTSU54gBQ54AByTyUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-400,800,1090);
p.frameBounds = [rect];


(lib.arrow_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_2_1_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-159,328,298);
p.frameBounds = [rect];


(lib.arrow_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.hand_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-130,593.4,763.4);
p.frameBounds = [rect];


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
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:250,alpha:1},0).wait(23).to({y:-50},15).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-120,490,240);
p.frameBounds = [rect, rect=new cjs.Rectangle(-245,130,490,240), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-245,110,490,240), new cjs.Rectangle(-245,90,490,240), new cjs.Rectangle(-245,70,490,240), new cjs.Rectangle(-245,50,490,240), new cjs.Rectangle(-245,30,490,240), new cjs.Rectangle(-245,10,490,240), new cjs.Rectangle(-245,-10,490,240), new cjs.Rectangle(-245,-30,490,240), new cjs.Rectangle(-245,-50,490,240), new cjs.Rectangle(-245,-70,490,240), new cjs.Rectangle(-245,-90,490,240), new cjs.Rectangle(-245,-110,490,240), new cjs.Rectangle(-245,-130,490,240), new cjs.Rectangle(-245,-150,490,240), new cjs.Rectangle(-245,-170,490,240), new cjs.Rectangle(-245,-160,490,240), new cjs.Rectangle(-245,-150,490,240), new cjs.Rectangle(-245,-140,490,240), new cjs.Rectangle(-245,-130,490,240), new cjs.Rectangle(-245,-120,490,240)];


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
p.nominalBounds = rect = new cjs.Rectangle(-38,-38,75,75);
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


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":139});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,40);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:500,alpha:1},0).wait(23).to({scaleX:0.75,scaleY:0.75,x:0,y:180,alpha:0.012},0).to({scaleX:1,scaleY:1,x:-250,y:40,alpha:1},15).to({regX:-0.1,regY:0.1,scaleX:1.17,scaleY:1.17,x:-250.1,y:40.1},5).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-250,y:40},5).wait(40).to({scaleX:1.17,scaleY:1.17},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.75,scaleY:0.75,x:0,y:180,alpha:0.012},10).wait(1).to({x:-250,y:500,alpha:1},0).wait(30));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-60);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:500,alpha:1},0).wait(33).to({scaleX:0.75,scaleY:0.75,y:180,alpha:0.012},0).to({scaleX:1,scaleY:1,y:-60,alpha:1},15).to({scaleX:1.17,scaleY:1.17},5).to({scaleX:1,scaleY:1},5).wait(40).to({scaleX:1.17,scaleY:1.17},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.75,scaleY:0.75,y:180,alpha:0.012},10).wait(1).to({y:500,alpha:1},0).wait(20));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,40);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:500,alpha:1},0).wait(43).to({scaleX:0.75,scaleY:0.75,x:0,y:180,alpha:0.012},0).to({scaleX:1,scaleY:1,x:250,y:40,alpha:1},15).to({regX:0.1,regY:0.1,scaleX:1.17,scaleY:1.17,x:250.1,y:40.1},5).to({regX:0,regY:0,scaleX:1,scaleY:1,x:250,y:40},5).wait(40).to({scaleX:1.17,scaleY:1.17},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.75,scaleY:0.75,x:0,y:180,alpha:0.012},11).wait(1).to({x:250,y:500,alpha:1},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-200,740,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,360,740,280), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-120,75,490,565), new cjs.Rectangle(-120,63.3,490,576.7), new cjs.Rectangle(-127.3,51.7,497.4,588.4), new cjs.Rectangle(-146,40,516,600.1), new cjs.Rectangle(-164.6,28.3,534.7,611.7), new cjs.Rectangle(-183.3,16.7,553.4,623.4), new cjs.Rectangle(-202,5,572,635.1), new cjs.Rectangle(-220.6,-6.7,590.7,646.7), new cjs.Rectangle(-239.3,-18.3,609.4,658.3), new cjs.Rectangle(-258,-30,628,670), new cjs.Rectangle(-276.6,-41.7,646.7,681.7), new cjs.Rectangle(-295.3,-53.3,665.4,693.4), new cjs.Rectangle(-314,-64.9,684,705), new cjs.Rectangle(-332.6,-76.6,702.7,716.7), new cjs.Rectangle(-351.3,-88.3,721.4,728.3), new cjs.Rectangle(-370,-100,740,740), new cjs.Rectangle(-374,-104.6,744,744.7), new cjs.Rectangle(-378,-109.2,748.1,749.3), new cjs.Rectangle(-382,-113.9,752.1,753.9), new cjs.Rectangle(-386.1,-118.5,756.1,758.5), new cjs.Rectangle(-390,-123.3,500.1,408.3), new cjs.Rectangle(-386,-126.7,498.1,404.7), new cjs.Rectangle(-382,-144.9,509.4,415.9), new cjs.Rectangle(-378,-163.2,524.1,427.2), new cjs.Rectangle(-373.9,-181.6,538.7,438.6), new cjs.Rectangle(-370,-200,553.4,450), new cjs.Rectangle(-370,-204.6,572.1,447.6), new cjs.Rectangle(-370,-209.3,590.7,445.3), new cjs.Rectangle(-370,-214,609.4,443.1), new cjs.Rectangle(-370,-218.6,628,440.7), new cjs.Rectangle(-370,-223.3,646.7,438.3), new cjs.Rectangle(-370,-218.5,665.4,426.6), new cjs.Rectangle(-370,-213.9,684,415), new cjs.Rectangle(-370,-209.2,702.7,403.3), new cjs.Rectangle(-370,-204.6,721.4,391.7), new cjs.Rectangle(-370,-200,740,380), new cjs.Rectangle(-370,-200,744,384.7), new cjs.Rectangle(-370,-200,748.1,389.4), new cjs.Rectangle(-370,-200,752.1,394.1), new cjs.Rectangle(-370,-200,756.1,398.8), new cjs.Rectangle(-370,-200,760,403.3), new cjs.Rectangle(-370,-200,756.1,398.7), new cjs.Rectangle(-370,-200,752,394), new cjs.Rectangle(-370,-200,748,389.3), new cjs.Rectangle(-370,-200,744,384.6), rect=new cjs.Rectangle(-370,-200,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-374,-200,744,384.7), new cjs.Rectangle(-378,-200,748,389.4), new cjs.Rectangle(-382,-200,752,394.1), new cjs.Rectangle(-386,-200,756,398.7), new cjs.Rectangle(-390,-200,760,403.4), new cjs.Rectangle(-386,-200,756,398.7), new cjs.Rectangle(-382,-200,752,394.1), new cjs.Rectangle(-378,-200,748,389.4), new cjs.Rectangle(-374,-200,744,384.7), new cjs.Rectangle(-370,-200,740,380), new cjs.Rectangle(-342,-204.6,712,395.2), new cjs.Rectangle(-314,-209.3,684,410.4), new cjs.Rectangle(-286,-214,656,425.5), new cjs.Rectangle(-258,-218.7,628,440.7), new cjs.Rectangle(-230,-223.3,600,455.9), new cjs.Rectangle(-202,-218.6,572,461.6), new cjs.Rectangle(-174,-214,544,467.5), new cjs.Rectangle(-146,-209.3,516,473.3), new cjs.Rectangle(-124,-204.6,494,479.1), new cjs.Rectangle(-120,-200,490,485), new cjs.Rectangle(-340,-172.5,714,777.5), new cjs.Rectangle(-340,-144.9,718,750), new cjs.Rectangle(-340,-117.5,722,722.6), new cjs.Rectangle(-340,-118.6,726,723.7), new cjs.Rectangle(-340,-123.3,730,728.4), new cjs.Rectangle(-340,-118.6,726,723.7), new cjs.Rectangle(-340,-113.9,722,719), new cjs.Rectangle(-340,-109.3,718,714.3), new cjs.Rectangle(-340,-104.6,714,709.7), new cjs.Rectangle(-340,-100,710,705), new cjs.Rectangle(-340,-84,684.5,689.1), new cjs.Rectangle(-340,-68.1,659.1,673.2), new cjs.Rectangle(-340,-52.2,633.6,657.3), new cjs.Rectangle(-340,-36.3,608.2,641.4), new cjs.Rectangle(-340,-20.4,582.7,625.4), new cjs.Rectangle(-340,-4.5,557.3,609.6), new cjs.Rectangle(-340,11.4,531.8,593.7), new cjs.Rectangle(-340,27.3,506.4,577.8), new cjs.Rectangle(-340,43.2,480.9,561.9), new cjs.Rectangle(-340,59.1,455.5,546), new cjs.Rectangle(-340,75,430,530), rect=new cjs.Rectangle(-340,395,680,210), rect, rect, rect, rect, rect, rect, rect, rect];


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

	// hero
	this.instance = new lib.container_hero_1_mc();
	this.instance.setTransform(385,325);

	this.instance_1 = new lib.container_hero_2_mc();
	this.instance_1.setTransform(385,325);

	this.instance_2 = new lib.container_hero_3_mc();
	this.instance_2.setTransform(385,325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_2_img();
	this.instance_4.setTransform(-200,0);

	this.instance_5 = new lib.background_3_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-75,1200,1090);
p.frameBounds = [rect, rect, rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_0_mc();
	this.instance.setTransform(400,325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.89,scaleY:0.89,x:500,y:300},60).to({x:300},180).to({scaleX:1,scaleY:1,x:400,y:324.9},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(94.9,2.5,535.5,671.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(97,2.7,534.6,670.2), new cjs.Rectangle(99.2,2.8,533.6,669), new cjs.Rectangle(101.5,3,532.6,667.8), new cjs.Rectangle(103.6,3.1,531.7,666.7), new cjs.Rectangle(105.9,3.2,530.8,665.4), new cjs.Rectangle(108.1,3.4,529.8,664.3), new cjs.Rectangle(110.3,3.6,528.9,663.1), new cjs.Rectangle(112.5,3.7,527.9,662), new cjs.Rectangle(114.7,3.9,526.9,660.7), new cjs.Rectangle(116.9,4,526,659.5), new cjs.Rectangle(119.1,4.2,525.1,658.3), new cjs.Rectangle(121.3,4.3,524.1,657.2), new cjs.Rectangle(123.5,4.5,523.3,655.9), new cjs.Rectangle(125.7,4.6,522.3,654.8), new cjs.Rectangle(127.9,4.8,521.3,653.6), new cjs.Rectangle(130.1,4.9,520.4,652.5), new cjs.Rectangle(132.4,5.1,519.4,651.1), new cjs.Rectangle(134.6,5.3,518.4,650), new cjs.Rectangle(136.7,5.5,517.5,648.8), new cjs.Rectangle(139,5.6,516.5,647.6), new cjs.Rectangle(141.2,5.7,515.6,646.4), new cjs.Rectangle(143.4,5.9,514.6,645.2), new cjs.Rectangle(145.6,6,513.7,644.1), new cjs.Rectangle(147.8,6.2,512.7,642.9), new cjs.Rectangle(150,6.4,511.8,641.7), new cjs.Rectangle(152.2,6.5,510.9,640.4), new cjs.Rectangle(154.4,6.6,509.9,639.3), new cjs.Rectangle(156.6,6.8,508.9,638.1), new cjs.Rectangle(158.9,6.9,507.9,637), new cjs.Rectangle(161,7.1,507.1,635.7), new cjs.Rectangle(163.3,7.3,506,634.6), new cjs.Rectangle(165.5,7.4,505.2,633.4), new cjs.Rectangle(167.7,7.6,504.2,632.2), new cjs.Rectangle(169.9,7.8,503.2,630.9), new cjs.Rectangle(172.1,7.9,502.2,629.8), new cjs.Rectangle(174.3,8.1,501.4,628.6), new cjs.Rectangle(176.5,8.2,500.3,627.3), new cjs.Rectangle(178.7,8.4,499.5,626.2), new cjs.Rectangle(180.9,8.5,498.6,625), new cjs.Rectangle(183.1,8.7,497.6,623.8), new cjs.Rectangle(185.3,8.8,496.6,622.6), new cjs.Rectangle(187.6,9,495.7,621.4), new cjs.Rectangle(189.7,9.1,494.7,620.3), new cjs.Rectangle(192,9.3,493.8,619.1), new cjs.Rectangle(194.2,9.4,492.8,617.9), new cjs.Rectangle(196.4,9.6,491.9,616.7), new cjs.Rectangle(198.6,9.7,490.9,615.4), new cjs.Rectangle(200.8,9.9,490,614.3), new cjs.Rectangle(203,10.1,489,613.1), new cjs.Rectangle(205.2,10.2,488.1,611.9), new cjs.Rectangle(207.4,10.4,487.1,610.7), new cjs.Rectangle(209.6,10.6,486.2,609.5), new cjs.Rectangle(211.8,10.7,485.2,608.3), new cjs.Rectangle(214,10.8,484.2,607.2), new cjs.Rectangle(216.2,11,483.3,605.9), new cjs.Rectangle(218.5,11.1,482.3,604.8), new cjs.Rectangle(220.7,11.3,481.4,603.6), new cjs.Rectangle(222.8,11.5,480.5,602.3), new cjs.Rectangle(225.1,11.6,479.4,601.3), new cjs.Rectangle(227.3,11.8,478.6,600), new cjs.Rectangle(226.2,11.7,478.5,599.9), new cjs.Rectangle(225.1,11.7,478.5,599.9), new cjs.Rectangle(223.9,11.7,478.5,599.9), new cjs.Rectangle(222.8,11.7,478.5,599.9), new cjs.Rectangle(221.7,11.7,478.5,599.9), new cjs.Rectangle(220.6,11.7,478.5,599.9), new cjs.Rectangle(219.5,11.7,478.5,599.9), new cjs.Rectangle(218.4,11.7,478.5,599.9), new cjs.Rectangle(217.3,11.7,478.5,599.9), new cjs.Rectangle(216.2,11.7,478.5,599.9), new cjs.Rectangle(215.1,11.7,478.5,599.9), new cjs.Rectangle(213.9,11.7,478.5,599.9), new cjs.Rectangle(212.8,11.7,478.5,599.9), new cjs.Rectangle(211.7,11.7,478.5,599.9), new cjs.Rectangle(210.6,11.7,478.5,599.9), new cjs.Rectangle(209.5,11.7,478.5,599.9), new cjs.Rectangle(208.4,11.7,478.5,599.9), new cjs.Rectangle(207.3,11.7,478.5,599.9), new cjs.Rectangle(206.2,11.7,478.5,599.9), new cjs.Rectangle(205.1,11.7,478.5,599.9), new cjs.Rectangle(203.9,11.7,478.5,599.9), new cjs.Rectangle(202.8,11.7,478.5,599.9), new cjs.Rectangle(201.7,11.7,478.5,599.9), new cjs.Rectangle(200.6,11.7,478.5,599.9), new cjs.Rectangle(199.5,11.7,478.5,599.9), new cjs.Rectangle(198.4,11.7,478.5,599.9), new cjs.Rectangle(197.3,11.7,478.5,599.9), new cjs.Rectangle(196.2,11.7,478.5,599.9), new cjs.Rectangle(195.1,11.7,478.5,599.9), new cjs.Rectangle(193.9,11.7,478.5,599.9), new cjs.Rectangle(192.8,11.7,478.5,599.9), new cjs.Rectangle(191.7,11.7,478.5,599.9), new cjs.Rectangle(190.6,11.7,478.5,599.9), new cjs.Rectangle(189.5,11.7,478.5,599.9), new cjs.Rectangle(188.4,11.7,478.5,599.9), new cjs.Rectangle(187.3,11.7,478.5,599.9), new cjs.Rectangle(186.2,11.7,478.5,599.9), new cjs.Rectangle(185.1,11.7,478.5,599.9), new cjs.Rectangle(183.9,11.7,478.5,599.9), new cjs.Rectangle(182.8,11.7,478.5,599.9), new cjs.Rectangle(181.7,11.7,478.5,599.9), new cjs.Rectangle(180.6,11.7,478.5,599.9), new cjs.Rectangle(179.5,11.7,478.5,599.9), new cjs.Rectangle(178.4,11.7,478.5,599.9), new cjs.Rectangle(177.3,11.7,478.5,599.9), new cjs.Rectangle(176.2,11.7,478.5,599.9), new cjs.Rectangle(175.1,11.7,478.5,599.9), new cjs.Rectangle(173.9,11.7,478.5,599.9), new cjs.Rectangle(172.8,11.7,478.5,599.9), new cjs.Rectangle(171.7,11.7,478.5,599.9), new cjs.Rectangle(170.6,11.7,478.5,599.9), new cjs.Rectangle(169.5,11.7,478.5,599.9), new cjs.Rectangle(168.4,11.7,478.5,599.9), new cjs.Rectangle(167.3,11.7,478.5,599.9), new cjs.Rectangle(166.2,11.7,478.5,599.9), new cjs.Rectangle(165.1,11.7,478.5,599.9), new cjs.Rectangle(163.9,11.7,478.5,599.9), new cjs.Rectangle(162.8,11.7,478.5,599.9), new cjs.Rectangle(161.7,11.7,478.5,599.9), new cjs.Rectangle(160.6,11.7,478.5,599.9), new cjs.Rectangle(159.5,11.7,478.5,599.9), new cjs.Rectangle(158.4,11.7,478.5,599.9), new cjs.Rectangle(157.3,11.7,478.5,599.9), new cjs.Rectangle(156.2,11.7,478.5,599.9), new cjs.Rectangle(155.1,11.7,478.5,599.9), new cjs.Rectangle(153.9,11.7,478.5,599.9), new cjs.Rectangle(152.8,11.7,478.5,599.9), new cjs.Rectangle(151.7,11.7,478.5,599.9), new cjs.Rectangle(150.6,11.7,478.5,599.9), new cjs.Rectangle(149.5,11.7,478.5,599.9), new cjs.Rectangle(148.4,11.7,478.5,599.9), new cjs.Rectangle(147.3,11.7,478.5,599.9), new cjs.Rectangle(146.2,11.7,478.5,599.9), new cjs.Rectangle(145.1,11.7,478.5,599.9), new cjs.Rectangle(143.9,11.7,478.5,599.9), new cjs.Rectangle(142.8,11.7,478.5,599.9), new cjs.Rectangle(141.7,11.7,478.5,599.9), new cjs.Rectangle(140.6,11.7,478.5,599.9), new cjs.Rectangle(139.5,11.7,478.5,599.9), new cjs.Rectangle(138.4,11.7,478.5,599.9), new cjs.Rectangle(137.3,11.7,478.5,599.9), new cjs.Rectangle(136.2,11.7,478.5,599.9), new cjs.Rectangle(135.1,11.7,478.5,599.9), new cjs.Rectangle(133.9,11.7,478.5,599.9), new cjs.Rectangle(132.8,11.7,478.5,599.9), new cjs.Rectangle(131.7,11.7,478.5,599.9), new cjs.Rectangle(130.6,11.7,478.5,599.9), new cjs.Rectangle(129.5,11.7,478.5,599.9), new cjs.Rectangle(128.4,11.7,478.5,599.9), new cjs.Rectangle(127.3,11.7,478.5,599.9), new cjs.Rectangle(126.2,11.7,478.5,599.9), new cjs.Rectangle(125.1,11.7,478.5,599.9), new cjs.Rectangle(123.9,11.7,478.5,599.9), new cjs.Rectangle(122.8,11.7,478.5,599.9), new cjs.Rectangle(121.7,11.7,478.5,599.9), new cjs.Rectangle(120.6,11.7,478.5,599.9), new cjs.Rectangle(119.5,11.7,478.5,599.9), new cjs.Rectangle(118.4,11.7,478.5,599.9), new cjs.Rectangle(117.3,11.7,478.5,599.9), new cjs.Rectangle(116.2,11.7,478.5,599.9), new cjs.Rectangle(115.1,11.7,478.5,599.9), new cjs.Rectangle(113.9,11.7,478.5,599.9), new cjs.Rectangle(112.8,11.7,478.5,599.9), new cjs.Rectangle(111.7,11.7,478.5,599.9), new cjs.Rectangle(110.6,11.7,478.5,599.9), new cjs.Rectangle(109.5,11.7,478.5,599.9), new cjs.Rectangle(108.4,11.7,478.5,599.9), new cjs.Rectangle(107.3,11.7,478.5,599.9), new cjs.Rectangle(106.2,11.7,478.5,599.9), new cjs.Rectangle(105.1,11.7,478.5,599.9), new cjs.Rectangle(103.9,11.7,478.5,599.9), new cjs.Rectangle(102.8,11.7,478.5,599.9), new cjs.Rectangle(101.7,11.7,478.5,599.9), new cjs.Rectangle(100.6,11.7,478.5,599.9), new cjs.Rectangle(99.5,11.7,478.5,599.9), new cjs.Rectangle(98.4,11.7,478.5,599.9), new cjs.Rectangle(97.3,11.7,478.5,599.9), new cjs.Rectangle(96.2,11.7,478.5,599.9), new cjs.Rectangle(95.1,11.7,478.5,599.9), new cjs.Rectangle(93.9,11.7,478.5,599.9), new cjs.Rectangle(92.8,11.7,478.5,599.9), new cjs.Rectangle(91.7,11.7,478.5,599.9), new cjs.Rectangle(90.6,11.7,478.5,599.9), new cjs.Rectangle(89.5,11.7,478.5,599.9), new cjs.Rectangle(88.4,11.7,478.5,599.9), new cjs.Rectangle(87.3,11.7,478.5,599.9), new cjs.Rectangle(86.2,11.7,478.5,599.9), new cjs.Rectangle(85.1,11.7,478.5,599.9), new cjs.Rectangle(83.9,11.7,478.5,599.9), new cjs.Rectangle(82.8,11.7,478.5,599.9), new cjs.Rectangle(81.7,11.7,478.5,599.9), new cjs.Rectangle(80.6,11.7,478.5,599.9), new cjs.Rectangle(79.5,11.7,478.5,599.9), new cjs.Rectangle(78.4,11.7,478.5,599.9), new cjs.Rectangle(77.3,11.7,478.5,599.9), new cjs.Rectangle(76.2,11.7,478.5,599.9), new cjs.Rectangle(75.1,11.7,478.5,599.9), new cjs.Rectangle(73.9,11.7,478.5,599.9), new cjs.Rectangle(72.8,11.7,478.5,599.9), new cjs.Rectangle(71.7,11.7,478.5,599.9), new cjs.Rectangle(70.6,11.7,478.5,599.9), new cjs.Rectangle(69.5,11.7,478.5,599.9), new cjs.Rectangle(68.4,11.7,478.5,599.9), new cjs.Rectangle(67.3,11.7,478.5,599.9), new cjs.Rectangle(66.2,11.7,478.5,599.9), new cjs.Rectangle(65.1,11.7,478.5,599.9), new cjs.Rectangle(63.9,11.7,478.5,599.9), new cjs.Rectangle(62.8,11.7,478.5,599.9), new cjs.Rectangle(61.7,11.7,478.5,599.9), new cjs.Rectangle(60.6,11.7,478.5,599.9), new cjs.Rectangle(59.5,11.7,478.5,599.9), new cjs.Rectangle(58.4,11.7,478.5,599.9), new cjs.Rectangle(57.3,11.7,478.5,599.9), new cjs.Rectangle(56.2,11.7,478.5,599.9), new cjs.Rectangle(55.1,11.7,478.5,599.9), new cjs.Rectangle(53.9,11.7,478.5,599.9), new cjs.Rectangle(52.8,11.7,478.5,599.9), new cjs.Rectangle(51.7,11.7,478.5,599.9), new cjs.Rectangle(50.6,11.7,478.5,599.9), new cjs.Rectangle(49.5,11.7,478.5,599.9), new cjs.Rectangle(48.4,11.7,478.5,599.9), new cjs.Rectangle(47.3,11.7,478.5,599.9), new cjs.Rectangle(46.2,11.7,478.5,599.9), new cjs.Rectangle(45.1,11.7,478.5,599.9), new cjs.Rectangle(43.9,11.7,478.5,599.9), new cjs.Rectangle(42.8,11.7,478.5,599.9), new cjs.Rectangle(41.7,11.7,478.5,599.9), new cjs.Rectangle(40.6,11.7,478.5,599.9), new cjs.Rectangle(39.5,11.7,478.5,599.9), new cjs.Rectangle(38.4,11.7,478.5,599.9), new cjs.Rectangle(37.3,11.7,478.5,599.9), new cjs.Rectangle(36.2,11.7,478.5,599.9), new cjs.Rectangle(35.1,11.7,478.5,599.9), new cjs.Rectangle(33.9,11.7,478.5,599.9), new cjs.Rectangle(32.8,11.7,478.5,599.9), new cjs.Rectangle(31.7,11.7,478.5,599.9), new cjs.Rectangle(30.6,11.7,478.5,599.9), new cjs.Rectangle(29.5,11.7,478.5,599.9), new cjs.Rectangle(28.4,11.7,478.5,599.9), new cjs.Rectangle(27.3,11.8,478.6,600), new cjs.Rectangle(28.4,11.5,479.5,601.2), new cjs.Rectangle(29.6,11.5,480.5,602.4), new cjs.Rectangle(30.7,11.3,481.5,603.7), new cjs.Rectangle(31.9,11.2,482.4,604.8), new cjs.Rectangle(33,10.9,483.4,606.1), new cjs.Rectangle(34.2,10.8,484.3,607.3), new cjs.Rectangle(35.3,10.7,485.3,608.5), new cjs.Rectangle(36.4,10.5,486.3,609.7), new cjs.Rectangle(37.6,10.4,487.2,610.8), new cjs.Rectangle(38.7,10.1,488.2,612.1), new cjs.Rectangle(39.9,10,489.2,613.4), new cjs.Rectangle(41,9.8,490.2,614.6), new cjs.Rectangle(42.1,9.7,491.1,615.8), new cjs.Rectangle(43.3,9.5,492.1,617), new cjs.Rectangle(44.4,9.4,493,618.1), new cjs.Rectangle(45.6,9.2,493.9,619.3), new cjs.Rectangle(46.7,9,495,620.6), new cjs.Rectangle(47.9,8.9,495.9,621.8), new cjs.Rectangle(49,8.7,496.9,622.9), new cjs.Rectangle(50.1,8.6,497.8,624.2), new cjs.Rectangle(51.4,8.4,498.8,625.4), new cjs.Rectangle(52.4,8.3,499.8,626.6), new cjs.Rectangle(53.6,8.1,500.7,627.9), new cjs.Rectangle(54.7,8,501.7,629.1), new cjs.Rectangle(55.9,7.8,502.7,630.3), new cjs.Rectangle(57.1,7.6,503.6,631.4), new cjs.Rectangle(58.2,7.5,504.6,632.7), new cjs.Rectangle(59.3,7.3,505.6,633.8), new cjs.Rectangle(60.5,7.1,506.6,635.1), new cjs.Rectangle(61.6,7,507.5,636.3), new cjs.Rectangle(62.7,6.8,508.5,637.6), new cjs.Rectangle(63.9,6.7,509.4,638.8), new cjs.Rectangle(65,6.6,510.4,639.9), new cjs.Rectangle(66.2,6.4,511.4,641.1), new cjs.Rectangle(67.3,6.2,512.4,642.4), new cjs.Rectangle(68.5,6,513.3,643.6), new cjs.Rectangle(69.6,5.9,514.3,644.7), new cjs.Rectangle(70.8,5.7,515.2,645.9), new cjs.Rectangle(71.9,5.5,516.2,647.2), new cjs.Rectangle(73,5.4,517.2,648.4), new cjs.Rectangle(74.2,5.2,518.1,649.7), new cjs.Rectangle(75.3,5.1,519.1,650.9), new cjs.Rectangle(76.5,4.9,520,652.1), new cjs.Rectangle(77.6,4.7,521.1,653.3), new cjs.Rectangle(78.8,4.6,522,654.4), new cjs.Rectangle(79.9,4.5,522.9,655.7), new cjs.Rectangle(81,4.3,523.9,656.9), new cjs.Rectangle(82.2,4.1,524.9,658.1), new cjs.Rectangle(83.3,3.9,525.9,659.3), new cjs.Rectangle(84.5,3.8,526.8,660.5), new cjs.Rectangle(85.6,3.6,527.8,661.8), new cjs.Rectangle(86.8,3.5,528.8,662.9), new cjs.Rectangle(87.9,3.3,529.7,664.1), new cjs.Rectangle(89.1,3.2,530.7,665.4), new cjs.Rectangle(90.2,3,531.7,666.6), new cjs.Rectangle(91.3,2.9,532.6,667.7), new cjs.Rectangle(92.5,2.7,533.6,668.9), new cjs.Rectangle(93.6,2.6,534.6,670.2), new cjs.Rectangle(94.8,2.4,535.5,671.4)];


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


(lib.Bubble_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.bubble_1_2_mc = function(mode,startPosition,loop) {
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
		_createBubblesFunc(8);
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
				var bubble_mc = new lib.Bubble_2();
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
	this.instance = new lib.Bubble_2();
	this.instance.setTransform(600,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,675);
p.frameBounds = [rect];


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


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:30,x:315,y:465,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:180,y:330,skewX:45,skewY:-135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-15,x:655,y:285,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:180,y:315,skewX:45,skewY:-135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-15,x:650,y:280,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:155,y:260,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:700,y:260,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:40}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:408,y:315}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_0_mc();
	this.object_1.setTransform(410,450);

	this.object_2 = new lib.object_2_3_mc();
	this.object_2.setTransform(400,510);

	this.object_3 = new lib.object_3_3_mc();
	this.object_3.setTransform(125,275);

	this.object_4 = new lib.arrow_1_3_mc();
	this.object_4.setTransform(330,357,0.746,0.746,45);

	this.object_5 = new lib.object_5_3_mc();
	this.object_5.setTransform(675,270);

	this.object_6 = new lib.arrow_2_3_mc();
	this.object_6.setTransform(425,370,0.858,0.858,45);

	this.object_7 = new lib.object_7_3_mc();
	this.object_7.setTransform(125,275);

	this.object_8 = new lib.arrow_3_3_mc();
	this.object_8.setTransform(419.1,190,0.859,0.859,0,135,-45,0.1,-0.1);

	this.object_9 = new lib.arrow_4_3_mc();
	this.object_9.setTransform(343,260,0.854,0.853,45);

	this.object_10 = new lib.object_10_3_mc();
	this.object_10.setTransform(675,270);

	this.object_11 = new lib.arrow_5_3_mc();
	this.object_11.setTransform(350,240,0.854,0.854,0,0,180);

	this.object_12 = new lib.object_12_3_mc();
	this.object_12.setTransform(125,270);

	this.object_13 = new lib.frame_13_3_mc();
	this.object_13.setTransform(408,383);

	this.object_14 = new lib.object_14_3_mc();
	this.object_14.setTransform(675,270);

	this.object_15 = new lib.arrow_6_3_mc();
	this.object_15.setTransform(303.2,237.1,0.854,0.854,-20,0,0,0.1,0.1);

	this.object_16 = new lib.object_16_3_mc();
	this.object_16.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation_1_3_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation_2_3_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation_3_3_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation_4_3_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation_5_3_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation_6_3_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation_7_3_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation_8_3_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation_9_3_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation_10_3_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation_11_3_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation_12_3_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation_13_3_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation_14_3_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation_15_3_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.hero_0_3_mc();
	this.subject_16.setTransform(400,300,0.894,0.894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-329.4,825,1412.8);
p.frameBounds = [rect, new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-35,-329.4,845.9,1075.2), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-14.1,-329.4,849.2,978.7), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-35,-329.4,845.9,978.7), rect=new cjs.Rectangle(-14.1,-329.4,825,978.7), rect, new cjs.Rectangle(-14.1,-329.4,849.2,978.7), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-35,-329.4,845.9,978.7), new cjs.Rectangle(-14.1,-139,825,788.3), new cjs.Rectangle(-14.1,-329.4,849.2,978.7), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-225.5,-329.4,1251.1,942.2)];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{regX:0.1,rotation:30,x:315.1,y:475.1,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:180,y:317,skewX:45,skewY:-135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:645,y:275,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:150,y:290,skewX:15,skewY:-165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:-15,x:650,y:290,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:15,x:645,y:250,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:155,y:255,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:40}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:408,y:310}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:40}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:408,y:320}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_0_mc();
	this.object_1.setTransform(410,450);

	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(400,520);

	this.object_3 = new lib.object_3_2_mc();
	this.object_3.setTransform(125,270);

	this.object_4 = new lib.arrow_1_2_mc();
	this.object_4.setTransform(420.1,180.1,0.854,0.854,0,135,-45,0,-0.1);

	this.object_5 = new lib.object_5_2_mc();
	this.object_5.setTransform(675,270);

	this.object_6 = new lib.arrow_2_2_mc();
	this.object_6.setTransform(500,265,0.881,0.881);

	this.object_7 = new lib.arrow_3_2_mc();
	this.object_7.setTransform(350,240,0.854,0.854,0,0,180);

	this.object_8 = new lib.object_8_2_mc();
	this.object_8.setTransform(125,270);

	this.object_9 = new lib.arrow_4_2_mc();
	this.object_9.setTransform(325,285,0.854,0.854,0,180,0);

	this.object_10 = new lib.object_10_2_mc();
	this.object_10.setTransform(675,270);

	this.object_11 = new lib.arrow_5_2_mc();
	this.object_11.setTransform(320,260,0.854,0.854,0,0,180);

	this.object_12 = new lib.object_12_2_mc();
	this.object_12.setTransform(675,270);

	this.object_13 = new lib.frame_13_1_mc();
	this.object_13.setTransform(408,383);

	this.object_14 = new lib.object_14_2_mc();
	this.object_14.setTransform(125,275);

	this.object_15 = new lib.frame_15_1_mc();
	this.object_15.setTransform(409,384);

	this.object_16 = new lib.object_16_2_mc();
	this.object_16.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation_1_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation_2_2_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation_3_2_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation_4_2_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation_5_2_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation_6_2_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation_7_2_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation_8_2_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation_9_2_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation_10_2_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation_11_2_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation_12_2_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation_13_2_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation_14_2_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation_15_2_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.hero_0_2_mc();
	this.subject_16.setTransform(400,300,0.894,0.894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-329.4,825,1412.8);
p.frameBounds = [rect, new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-35,-329.4,845.9,978.7), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-14.1,-329.4,849.2,978.7), rect=new cjs.Rectangle(-14.1,-329.4,825,978.7), rect, new cjs.Rectangle(-35,-329.4,845.9,978.7), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-14.1,-329.4,849.2,978.7), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-14.1,-329.4,849.2,978.7), new cjs.Rectangle(-14.1,-139,825,788.3), new cjs.Rectangle(-35,-329.4,845.9,978.7), new cjs.Rectangle(-14.1,-139,825,788.3), new cjs.Rectangle(-225.5,-329.4,1251.1,942.2)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:45,x:330,y:480,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:180,y:330,skewX:45,skewY:-135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-15,x:600,y:295,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:180,y:310,skewX:30,skewY:-150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:640,y:260,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:470,y:365,skewX:15,skewY:-165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:155,y:260,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:650,y:280,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:40}},{t:this.instance,p:{scaleX:0.694,scaleY:0.694,x:408,y:310}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_0_mc();
	this.object_1.setTransform(410,450);

	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(400,510);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(125,275);

	this.object_4 = new lib.arrow_1_1_mc();
	this.object_4.setTransform(420,360,1,1,45);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(675,275);

	this.object_6 = new lib.arrow_2_1_mc();
	this.object_6.setTransform(408,360,1,1,90);

	this.object_7 = new lib.object_7_1_mc();
	this.object_7.setTransform(125,275);

	this.object_8 = new lib.arrow_3_1_mc();
	this.object_8.setTransform(418.1,200.1,0.813,0.813,0,135,-45,0,-0.1);

	this.object_9 = new lib.arrow_4_1_mc();
	this.object_9.setTransform(425,350,0.813,0.813,45);

	this.object_10 = new lib.object_10_1_mc();
	this.object_10.setTransform(675,270);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(450,360);

	this.object_12 = new lib.arrow_5_1_mc();
	this.object_12.setTransform(419.1,180.1,0.813,0.813,0,135,-45,0,-0.1);

	this.object_13 = new lib.object_13_1_mc();
	this.object_13.setTransform(125,275);

	this.object_14 = new lib.frame_14_1_mc();
	this.object_14.setTransform(409,384);

	this.object_15 = new lib.object_15_1_mc();
	this.object_15.setTransform(675,270);

	this.object_16 = new lib.arrow_6_1_mc();
	this.object_16.setTransform(470,215,0.793,0.793);

	this.object_17 = new lib.object_17_1_mc();
	this.object_17.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation_1_1_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation_2_1_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation_3_1_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation_4_1_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation_5_1_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation_6_1_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation_7_1_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation_8_1_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation_9_1_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation_10_1_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation_11_1_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation_12_1_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation_13_1_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation_14_1_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation_15_1_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.animation_16_1_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.hero_0_1_mc();
	this.subject_17.setTransform(400,300,0.894,0.894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-329.4,825,1412.8);
p.frameBounds = [rect, new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-35,-329.4,845.9,1075.2), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-14.1,-329.4,849.2,1070.2), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-35,-329.4,845.9,978.7), rect=new cjs.Rectangle(-14.1,-329.4,825,978.7), rect, new cjs.Rectangle(-14.1,-329.4,849.2,978.7), rect=new cjs.Rectangle(-14.1,-329.4,825,978.7), rect, new cjs.Rectangle(-35,-329.4,845.9,978.7), new cjs.Rectangle(-14.1,-139,825,788.3), new cjs.Rectangle(-14.1,-329.4,849.2,978.7), new cjs.Rectangle(-14.1,-329.4,825,978.7), new cjs.Rectangle(-225.5,-329.4,1251.1,942.2)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-75,1200,1090);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1412.8);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1412.8);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1412.8);
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
		_createBubblesFunc(16);
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
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(740,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(210,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(90,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,510);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(315.2,336.9,1,1,0,0,0,315.2,336.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
p.frameBounds = [rect];


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
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// decor
	this.instance_1 = new lib.animation_background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1161.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.vk_btn = new lib.vk_btn();
	this.vk_btn.setTransform(220,700,0.818,0.818);
	new cjs.ButtonHelper(this.vk_btn, 0, 1, 2, false, new lib.vk_btn(), 3);

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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.vk_btn}]}).wait(1));

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

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.ResultScreen();

	this.instance_9 = new lib.InstructionScreen();

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_10 = new lib.TrackMove_2();
	this.instance_10.setTransform(350,50);

	this.instance_11 = new lib.FlashAnimation();
	this.instance_11.setTransform(150,280);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_13},{t:this.instance_12},{t:this.gravity_explosion_comp},{t:this.instance_11},{t:this.instance_10},{t:this.next_btn}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1161.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1412.8), rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-10,810,440), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect];


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