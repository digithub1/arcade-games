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
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,600,600],[602,602,490,591]]},
		{name:"storage_atlas_4", frames: [[790,202,418,426],[0,802,540,384],[0,202,422,566],[0,0,1200,200],[424,202,364,598],[931,630,285,607],[542,802,387,484]]},
		{name:"storage_atlas_5", frames: [[0,804,500,300],[0,0,400,400],[502,594,249,592],[1004,594,249,592],[653,0,249,592],[402,0,249,592],[753,594,249,592],[904,0,249,592],[0,402,400,400]]},
		{name:"storage_atlas_6", frames: [[0,594,380,380],[0,0,249,592],[251,0,380,380],[633,0,380,380],[764,764,380,380],[764,382,380,380],[382,382,380,380],[382,764,380,380]]},
		{name:"storage_atlas_7", frames: [[382,382,380,260],[764,382,277,350],[382,644,277,350],[661,734,277,350],[940,734,277,350],[0,0,380,380],[0,382,380,380],[0,764,380,380],[382,0,380,380],[764,0,380,380]]},
		{name:"storage_atlas_8", frames: [[0,560,236,400],[0,0,277,350],[541,0,260,330],[500,332,260,330],[238,560,260,330],[279,0,260,330],[0,962,260,330],[262,892,260,330],[500,664,493,167],[0,352,469,206],[995,614,280,280],[524,833,280,280],[806,896,280,280],[803,0,280,280],[762,332,280,280]]},
		{name:"storage_atlas_9", frames: [[846,846,200,300],[1048,846,200,300],[0,564,280,280],[282,282,280,280],[0,282,280,280],[282,0,280,280],[846,0,280,280],[564,0,280,280],[0,846,280,280],[282,564,280,280],[564,846,280,280],[846,282,280,280],[564,282,280,280],[564,564,280,280],[282,846,280,280],[846,564,280,280],[0,0,280,280]]},
		{name:"storage_atlas_10", frames: [[0,636,230,210],[0,848,230,210],[0,1060,230,210],[232,212,230,210],[464,212,230,210],[464,424,230,210],[696,424,230,210],[232,424,230,210],[232,636,230,210],[232,848,230,210],[232,1060,230,210],[696,636,230,210],[928,636,230,210],[464,1060,230,210],[696,848,230,210],[696,1060,230,210],[928,848,230,210],[464,636,230,210],[928,424,230,210],[464,848,230,210],[928,0,230,210],[696,0,230,210],[464,0,230,210],[928,212,230,210],[696,212,230,210],[232,0,230,210],[0,0,230,210],[0,424,230,210],[0,212,230,210],[928,1060,230,210]]},
		{name:"storage_atlas_11", frames: [[868,910,190,190],[1060,910,190,190],[626,1102,220,160],[434,1102,190,190],[848,1102,186,188],[1036,1102,194,178],[242,1092,190,190],[676,910,190,190],[484,910,190,190],[0,212,230,210],[0,636,230,210],[0,424,230,210],[0,0,230,210],[968,364,240,180],[474,0,240,180],[716,182,240,180],[0,848,240,180],[716,0,240,180],[474,182,240,180],[484,728,240,180],[232,0,240,180],[726,728,240,180],[968,728,240,180],[242,910,240,180],[726,546,240,180],[968,546,240,180],[958,0,240,180],[232,182,240,180],[726,364,240,180],[242,546,240,180],[484,364,240,180],[242,364,240,180],[242,728,240,180],[0,1030,240,180],[958,182,240,180],[484,546,240,180]]},
		{name:"storage_atlas_12", frames: [[888,0,180,180],[603,408,120,120],[222,465,120,120],[481,386,120,120],[954,650,50,50],[306,701,156,33],[1123,703,172,65],[189,102,136,75],[954,703,167,67],[476,840,135,27],[0,275,166,114],[344,457,120,120],[1045,459,120,120],[466,508,120,120],[1167,459,120,120],[923,406,120,120],[1045,581,120,120],[923,528,120,120],[588,530,120,120],[1070,0,180,180],[344,579,120,120],[706,0,180,180],[710,534,90,50],[1045,406,90,50],[1167,581,120,120],[0,473,120,120],[122,587,120,120],[710,594,120,120],[657,1197,48,48],[707,1197,48,48],[725,408,80,124],[0,595,120,120],[588,716,180,60],[0,717,180,60],[306,752,180,60],[770,772,180,60],[488,778,180,60],[952,772,180,60],[1012,182,280,80],[912,834,220,30],[883,1197,40,40],[568,960,34,200],[532,960,34,200],[460,960,34,200],[496,960,34,200],[1254,911,34,200],[815,316,54,276],[1154,264,97,193],[377,182,102,273],[344,343,30,58],[1094,956,50,139],[1146,956,50,139],[356,940,50,139],[1236,770,50,139],[304,940,50,139],[408,940,50,139],[886,956,50,139],[678,956,50,139],[834,956,50,139],[1202,911,50,139],[938,956,50,139],[730,956,50,139],[101,779,50,139],[1042,956,50,139],[990,956,50,139],[782,956,50,139],[0,391,220,80],[481,182,340,80],[1253,314,40,55],[168,343,40,43],[327,102,10,11],[122,473,69,94],[202,940,100,73],[265,1181,57,60],[0,779,99,100],[344,403,23,38],[1252,149,31,31],[770,716,50,50],[1252,0,40,147],[663,264,150,142],[182,709,50,210],[871,316,50,297],[0,102,187,171],[823,182,187,132],[189,182,186,159],[0,1163,51,98],[604,1160,51,98],[477,1162,51,98],[530,1162,51,98],[1134,1097,51,98],[159,1115,51,98],[424,1162,51,98],[1081,1097,51,98],[212,1115,51,98],[1187,1152,51,98],[1240,1152,51,98],[0,1063,51,98],[53,1063,51,98],[604,1060,51,98],[106,1063,51,98],[265,1081,51,98],[318,1081,51,98],[816,1097,51,98],[371,1081,51,98],[657,1097,51,98],[710,1097,51,98],[763,1097,51,98],[869,1097,51,98],[922,1097,51,98],[975,1097,51,98],[1028,1097,51,98],[106,963,51,98],[604,960,51,98],[1198,1052,51,98],[159,1015,51,98],[0,963,51,98],[53,963,51,98],[212,1015,51,98],[1012,264,140,140],[481,264,180,120],[1253,371,40,40],[159,963,40,40],[116,1163,40,40],[376,1181,40,40],[799,1197,40,40],[757,1197,40,40],[841,1197,40,40],[1253,413,40,40],[721,778,40,40],[1154,872,40,40],[222,343,120,120],[342,0,180,180],[524,0,180,180],[923,316,80,80],[654,652,53,53],[1253,264,47,48],[670,778,49,50],[324,1181,50,49],[588,652,64,62],[53,1163,61,59],[244,587,60,220],[466,630,120,120],[832,650,120,120],[234,814,240,40],[234,856,240,40],[912,872,240,40],[718,914,240,40],[670,834,240,40],[476,876,240,40],[234,898,240,40],[960,914,240,40],[0,921,200,40],[476,918,200,40],[0,0,340,100],[1134,770,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bracelet_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bracelet_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bracelet_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bracelet_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bracelet_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bracelet_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.braslet1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.braslet2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.braslet3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.braslet4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.braslet5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.braslet6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.check_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.check_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.check_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.check_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.check_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.check_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.check_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cup_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.halo_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hand0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hand0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand1_meh1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hand1_meh2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hand1_meh3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand1_meh4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hand1_meh5_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hand1_meh6_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hand2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.instrument1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.instrument1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.instrument1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.instrument1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.instrument1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.instrument2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.instrument3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.instrument4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.kapla2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lak10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lak11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lak12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lak13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lak14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lak15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lak16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.lak1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lak2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.lak3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.lak4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.lak5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.lak6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.lak7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.lak8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.lak9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mehendi_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mehendi_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mehendi_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mehendi_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.mehendi_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mehendi_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
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
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.nail_color10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.nail_color11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.nail_color12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.nail_color13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.nail_color14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.nail_color15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.nail_color16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.nail_color1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.nail_color2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.nail_color3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.nail_color4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.nail_color5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.nail_color6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.nail_color7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.nail_color8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.nail_color9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.nail_uzor9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pillow_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.rastr1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.rastr2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.rastr3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.ring1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.ring2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.ring3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.ring4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.ring5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.ring6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.ring_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ring_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ring_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ring_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ring_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ring_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.shadow_instrument_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.towel_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-170,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-50,340,100);
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


(lib.instrument2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.instrument2_img();
	this.instance.setTransform(-27,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-138,54,276);
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


(lib.towel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.towel_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,387,484);
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


(lib.texture_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nail_uzor1_img();
	this.instance.setTransform(5.5,0);

	this.instance_1 = new lib.nail_uzor2_img();
	this.instance_1.setTransform(5.5,0);

	this.instance_2 = new lib.nail_uzor3_img();
	this.instance_2.setTransform(5.5,0);

	this.instance_3 = new lib.nail_uzor4_img();
	this.instance_3.setTransform(5.5,0);

	this.instance_4 = new lib.nail_uzor5_img();
	this.instance_4.setTransform(5.5,0);

	this.instance_5 = new lib.nail_uzor6_img();
	this.instance_5.setTransform(5.5,0);

	this.instance_6 = new lib.nail_uzor7_img();
	this.instance_6.setTransform(5.5,0);

	this.instance_7 = new lib.nail_uzor8_img();
	this.instance_7.setTransform(5.5,0);

	this.instance_8 = new lib.nail_uzor9_img();
	this.instance_8.setTransform(5.5,0);

	this.instance_9 = new lib.nail_uzor10_img();
	this.instance_9.setTransform(5.5,0);

	this.instance_10 = new lib.nail_uzor11_img();
	this.instance_10.setTransform(5.5,0);

	this.instance_11 = new lib.nail_uzor12_img();
	this.instance_11.setTransform(5.5,0);

	this.instance_12 = new lib.nail_uzor13_img();
	this.instance_12.setTransform(5.5,0);

	this.instance_13 = new lib.nail_uzor14_img();
	this.instance_13.setTransform(5.5,0);

	this.instance_14 = new lib.nail_uzor15_img();
	this.instance_14.setTransform(5.5,0);

	this.instance_15 = new lib.nail_uzor16_img();
	this.instance_15.setTransform(5.5,0);

	this.instance_16 = new lib.nail_uzor17_img();
	this.instance_16.setTransform(5.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(5.5,0,51,98);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.texture_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor17_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor16_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor15_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor14_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor13_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor12_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor11_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor10_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor9_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor8_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor7_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor6_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor5_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor4_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor3_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor2_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.texture_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nail_uzor1_img();
	this.instance.setTransform(-25.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-49,51,98);
p.frameBounds = [rect];


(lib.shadow_mehendi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#451E00").s().p("ArCLCQkkklgBmdQABmdEkklQElkkGdgBQGeABEkEkQEmElAAGdQAAGdkmElQkkEmmeAAQmdAAklkmg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnGFClCQFClDHGAAQHHAAFCFDQFCFCAAHGQAAHHlCFCQlCFDnHAAQnGAAlClDg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.shadow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(109,117,31,0.498)").s().p("AtzN0QltlvAAoFQAAoEFtlvQFultIFAAQIFAAFuFtQFuFvAAIEQAAIFluFvQluFtoFAAQoFAAlultg");
	this.shape.setTransform(5,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-85,250,250);
p.frameBounds = [rect];


(lib.shadow_instrument_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_instrument_img();
	this.instance.setTransform(-30,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-110,60,220);
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


(lib.ring_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ring1_img();
	this.instance.setTransform(-26.5,-26.5);

	this.instance_1 = new lib.ring2_img();
	this.instance_1.setTransform(-25,-26.5);

	this.instance_2 = new lib.ring3_img();
	this.instance_2.setTransform(-28,-25.5);

	this.instance_3 = new lib.ring4_img();
	this.instance_3.setTransform(-26,-24.5);

	this.instance_4 = new lib.ring5_img();
	this.instance_4.setTransform(-34,-24.5);

	this.instance_5 = new lib.ring6_img();
	this.instance_5.setTransform(-33,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-26.5,53,53);
p.frameBounds = [rect, new cjs.Rectangle(-25,-26.5,47,48), new cjs.Rectangle(-28,-25.5,49,50), new cjs.Rectangle(-26,-24.5,50,49), new cjs.Rectangle(-34,-24.5,64,62), new cjs.Rectangle(-33,-30.5,61,59), null];


(lib.rastr1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr1_img();
	this.instance.setTransform(-234.5,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234.5,-103,469,206);
p.frameBounds = [rect];


(lib.pillow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pillow_img();
	this.instance.setTransform(-246.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-246.5,-83.5,493,167);
p.frameBounds = [rect];


(lib.object_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgjVAjWQuqupAA0tQAA0sOqupQOpuqUsAAQUtAAOpOqQOpOpABUsQgBUtupOpQupOp0tABQ0sgBupupg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-320,640,640);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.object_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtyNzQlulugBoFQABoEFuluQFuluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlulug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125,250,250);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElklGdABQGegBElElQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.nail_base_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nail_color1_img();
	this.instance.setTransform(5.5,0);

	this.instance_1 = new lib.nail_color2_img();
	this.instance_1.setTransform(5.5,0);

	this.instance_2 = new lib.nail_color3_img();
	this.instance_2.setTransform(5.5,0);

	this.instance_3 = new lib.nail_color4_img();
	this.instance_3.setTransform(5.5,0);

	this.instance_4 = new lib.nail_color5_img();
	this.instance_4.setTransform(5.5,0);

	this.instance_5 = new lib.nail_color6_img();
	this.instance_5.setTransform(5.5,0);

	this.instance_6 = new lib.nail_color7_img();
	this.instance_6.setTransform(5.5,0);

	this.instance_7 = new lib.nail_color8_img();
	this.instance_7.setTransform(5.5,0);

	this.instance_8 = new lib.nail_color9_img();
	this.instance_8.setTransform(5.5,0);

	this.instance_9 = new lib.nail_color10_img();
	this.instance_9.setTransform(5.5,0);

	this.instance_10 = new lib.nail_color11_img();
	this.instance_10.setTransform(5.5,0);

	this.instance_11 = new lib.nail_color12_img();
	this.instance_11.setTransform(5.5,0);

	this.instance_12 = new lib.nail_color13_img();
	this.instance_12.setTransform(5.5,0);

	this.instance_13 = new lib.nail_color14_img();
	this.instance_13.setTransform(5.5,0);

	this.instance_14 = new lib.nail_color15_img();
	this.instance_14.setTransform(5.5,0);

	this.instance_15 = new lib.nail_color16_img();
	this.instance_15.setTransform(5.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(5.5,0,51,98);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lacquer_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak16_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak15_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak14_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak13_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak12_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak11_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak10_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak9_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak8_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak7_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak6_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak5_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak4_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak3_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak2_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.lacquer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lak1_img();
	this.instance.setTransform(-25,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqLtIAA3ZIJVAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-75,60,150);
p.frameBounds = [rect];


(lib.kapla2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kapla2_img();
	this.instance.setTransform(-15,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-29,30,58);
p.frameBounds = [rect];


(lib.instrument4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.instrument4_img();
	this.instance.setTransform(-51,-136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-136.5,102,273);
p.frameBounds = [rect];


(lib.instrument3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.instrument3_img();
	this.instance.setTransform(-48.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-96.5,97,193);
p.frameBounds = [rect];


(lib.instrument1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.instrument1_img();
	this.instance.setTransform(-17,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17,-100,34,200);
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


(lib.hand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2_img();
	this.instance.setTransform(-211,-283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-283,422,566);
p.frameBounds = [rect];


(lib.hand1_meh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand1_meh1_img();
	this.instance.setTransform(-124.5,-296);

	this.instance_1 = new lib.hand1_meh2_img();
	this.instance_1.setTransform(-124.5,-296);

	this.instance_2 = new lib.hand1_meh3_img();
	this.instance_2.setTransform(-124.5,-296);

	this.instance_3 = new lib.hand1_meh4_img();
	this.instance_3.setTransform(-124.5,-296);

	this.instance_4 = new lib.hand1_meh5_img();
	this.instance_4.setTransform(-124.5,-296);

	this.instance_5 = new lib.hand1_meh6_img();
	this.instance_5.setTransform(-124.5,-296);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.5,-296,249,592);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hand0_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand0_6_img();
	this.instance.setTransform(-138.5,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-175,277,350);
p.frameBounds = [rect];


(lib.hand0_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand0_5_img();
	this.instance.setTransform(-138.5,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-175,277,350);
p.frameBounds = [rect];


(lib.hand0_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand0_4_img();
	this.instance.setTransform(-138.5,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-175,277,350);
p.frameBounds = [rect];


(lib.hand0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand0_3_img();
	this.instance.setTransform(-138.5,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-175,277,350);
p.frameBounds = [rect];


(lib.hand0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand0_2_img();
	this.instance.setTransform(-138.5,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.5,-175,277,350);
p.frameBounds = [rect];


(lib.hand0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand0_1_img();
	this.instance.setTransform(-245,-295.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-295.5,490,591);
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


(lib.cup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup_img();
	this.instance.setTransform(-270,-192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-192,540,384);
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


(lib.check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_0_2_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.braslet_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.braslet1_img();
	this.instance.setTransform(-78,-16.5);

	this.instance_1 = new lib.braslet2_img();
	this.instance_1.setTransform(-86,-26);

	this.instance_2 = new lib.braslet3_img();
	this.instance_2.setTransform(-68,-27);

	this.instance_3 = new lib.braslet4_img();
	this.instance_3.setTransform(-83,-25);

	this.instance_4 = new lib.braslet5_img();
	this.instance_4.setTransform(-69,5);

	this.instance_5 = new lib.braslet6_img();
	this.instance_5.setTransform(-77,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-16.5,156,33);
p.frameBounds = [rect, new cjs.Rectangle(-86,-26,172,65), new cjs.Rectangle(-68,-27,136,75), new cjs.Rectangle(-83,-25,167,67), new cjs.Rectangle(-69,5,135,27), new cjs.Rectangle(-77,-61,166,114), null];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,es:4,pt:5,tr:6,ja:7,hi:8});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-190,-190);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-190,-190);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-190,-190);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-190,-190);

	this.instance_5 = new lib.title_pt_img();
	this.instance_5.setTransform(-190,-190);

	this.instance_6 = new lib.title_tr_img();
	this.instance_6.setTransform(-190,-190);

	this.instance_7 = new lib.title_ja_img();
	this.instance_7.setTransform(-190,-190);

	this.instance_8 = new lib.title_hi_img();
	this.instance_8.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.body_halo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.halo_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.arm_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rastr2_img();
	this.instance.setTransform(-182,-299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-299,364,598);
p.frameBounds = [rect];


(lib.arm_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rastr3_img();
	this.instance.setTransform(-143,-304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143,-304,285,607);
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
	this.shape.graphics.f("#D5E100").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.slider_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBjIAAjFIARAAIAADFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-10,2,20);
p.frameBounds = [rect];


(lib.slider_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#999999"],[0,1],0,0,0,0,0,16.2).s().p("AhxBwQgtgugBhCQABhAAtgxQAxgtBAgBQBCABAtAtQAxAxAABAQAABCgxAuQgtAwhCAAQhAAAgxgwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AiNCNQg5g8AAhRQAAhRA5g8QA8g5BRAAQBRAAA8A5QA6A8AABRQAABRg6A8Qg8A6hRAAQhRAAg8g6g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.slider_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Aw3DHQh4ABABh4IAAifQgBh4B4ABMAhuAAAQB4gBAAB4IAACfQAAB4h4gBg");
	this.shape.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,240,40);
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
	this.instance.setTransform(0,185);

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
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,480.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
		else if (lang_str == "hi")
		{
			this.body_mc.gotoAndStop("hi");
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
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
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


(lib.thirdNail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIFwQiAgOguh1Qguh1AIimQAIinA7hMQA7hLBZgEQBYgEBAA+QBBA9AJDJQAJDHg4BzQgyBnhrAAIgZgBg");
	mask.setTransform(-0.8,7.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-29.8,44.6,73.9);
p.frameBounds = [rect];


(lib.thirdNail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCGaQh/gLgyh3Qgxh3ALi6QAMi8AYiNQAxhBCsAKQCCAOANBKQAOBKASDcQATDag4BzQgzBphtAAIgUgBg");
	mask.setTransform(-1.1,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-38.1,44.1,82.4);
p.frameBounds = [rect];


(lib.thirdNail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCG5Qh4gKgzh3Qgzh3AMioQALimBAiNQBBiNBBgQQA+gRBICNQBHCOAODEQAPDGg4BzQgzBqhpAAIgRgBg");
	mask.setTransform(-0.5,0.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-44.1,43.2,88.6);
p.frameBounds = [rect];


(lib.thirdNail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBGbQh4gKgzh3Qgzh3AEinQAEipA9h1QA8h1BagEQBXgDA/BmQA/BnAKDJQAJDGg4B0QgzBqhpAAIgRgBg");
	mask.setTransform(-0.6,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.6,-38,44.2,82.4);
p.frameBounds = [rect];


(lib.texture_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
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


(lib.secondNail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIFwQiAgOguh1Qguh1AIimQAIinA7hMQA7hLBZgEQBYgEBAA+QBBA9AJDJQAJDHg4BzQgyBnhrAAIgZgBg");
	mask.setTransform(-0.8,7.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-29.8,44.6,73.9);
p.frameBounds = [rect];


(lib.secondNail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCGaQh/gLgyh3Qgxh3ALi6QAMi8AYiNQAxhBCsAKQCCAOANBKQAOBKASDcQATDag4BzQgzBphtAAIgUgBg");
	mask.setTransform(-1.1,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-38.1,44.1,82.4);
p.frameBounds = [rect];


(lib.secondNail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCG5Qh4gKgzh3Qgzh3AMioQALimBAiNQBBiNBBgQQA+gRBICNQBHCOAODEQAPDGg4BzQgzBqhpAAIgRgBg");
	mask.setTransform(-0.5,0.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-44.1,43.2,88.6);
p.frameBounds = [rect];


(lib.secondNail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBGbQh4gKgzh3Qgzh3AEinQAEipA9h1QA8h1BagEQBXgDA/BmQA/BnAKDJQAJDGg4B0QgzBqhpAAIgRgBg");
	mask.setTransform(-0.6,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.6,-38,44.2,82.4);
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


(lib.ring_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
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


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah6GhQggggAAguQAAgtAgghIEDkFIkDkEQggghAAgtQAAguAgggQAgggAugBQAsABAgAgIFUFTQAgAhAAAsQAAAtggAhIlUFTQggAggsABQgugBgggggAl6ENQgZgZAAgkQAAgjAZgYICViVIiViTQgZgZAAgjQAAgkAZgYQAZgaAjAAQAkAAAZAaIDQDQQAZAZAAAiQAAAjgZAZIjQDRQgZAZgkAAQgjAAgZgZg");
	mask.setTransform(0.2,0);

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},30).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao0I2QjrjrAAlLQAAlKDrjrQDqjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDrQjqDplLABQlKgBjqjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mehendi_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.lacquer_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.horizontal_gallery_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.texture_0 = new lib.texture_0_mc();
	this.texture_0.setTransform(-30,-240);

	this.timeline.addTween(cjs.Tween.get(this.texture_0).wait(1));

	// graph
	this.texture_17 = new lib.texture_17_mc();
	this.texture_17.setTransform(-70,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_17).wait(1));

	// graph
	this.texture_15 = new lib.texture_15_mc();
	this.texture_15.setTransform(-130,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_15).wait(1));

	// graph
	this.texture_14 = new lib.texture_14_mc();
	this.texture_14.setTransform(-190,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_14).wait(1));

	// graph
	this.texture_13 = new lib.texture_13_mc();
	this.texture_13.setTransform(-250,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_13).wait(1));

	// graph
	this.texture_12 = new lib.texture_12_mc();
	this.texture_12.setTransform(-310,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_12).wait(1));

	// graph
	this.texture_11 = new lib.texture_11_mc();
	this.texture_11.setTransform(-370,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_11).wait(1));

	// graph
	this.texture_10 = new lib.texture_10_mc();
	this.texture_10.setTransform(-100,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_10).wait(1));

	// graph
	this.texture_9 = new lib.texture_9_mc();
	this.texture_9.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_9).wait(1));

	// graph
	this.texture_8 = new lib.texture_8_mc();
	this.texture_8.setTransform(-220,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_8).wait(1));

	// graph
	this.texture_7 = new lib.texture_7_mc();
	this.texture_7.setTransform(-280,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_7).wait(1));

	// graph
	this.texture_6 = new lib.texture_6_mc();
	this.texture_6.setTransform(-340,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_6).wait(1));

	// graph
	this.texture_16 = new lib.texture_16_mc();
	this.texture_16.setTransform(-70,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_16).wait(1));

	// graph
	this.texture_5 = new lib.texture_5_mc();
	this.texture_5.setTransform(-130,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_5).wait(1));

	// graph
	this.texture_4 = new lib.texture_4_mc();
	this.texture_4.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_4).wait(1));

	// graph
	this.texture_3 = new lib.texture_3_mc();
	this.texture_3.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_3).wait(1));

	// graph
	this.texture_2 = new lib.texture_2_mc();
	this.texture_2.setTransform(-310,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_2).wait(1));

	// graph
	this.texture_1 = new lib.texture_1_mc();
	this.texture_1.setTransform(-370,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.texture_0 = new lib.texture_0_mc();
	this.texture_0.setTransform(-30,-240);

	this.timeline.addTween(cjs.Tween.get(this.texture_0).wait(1));

	// graph
	this.texture_17 = new lib.texture_17_mc();
	this.texture_17.setTransform(-70,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_17).wait(1));

	// graph
	this.texture_15 = new lib.texture_15_mc();
	this.texture_15.setTransform(-130,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_15).wait(1));

	// graph
	this.texture_14 = new lib.texture_14_mc();
	this.texture_14.setTransform(-190,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_14).wait(1));

	// graph
	this.texture_13 = new lib.texture_13_mc();
	this.texture_13.setTransform(-250,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_13).wait(1));

	// graph
	this.texture_12 = new lib.texture_12_mc();
	this.texture_12.setTransform(-310,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_12).wait(1));

	// graph
	this.texture_11 = new lib.texture_11_mc();
	this.texture_11.setTransform(-370,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_11).wait(1));

	// graph
	this.texture_10 = new lib.texture_10_mc();
	this.texture_10.setTransform(-100,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_10).wait(1));

	// graph
	this.texture_9 = new lib.texture_9_mc();
	this.texture_9.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_9).wait(1));

	// graph
	this.texture_8 = new lib.texture_8_mc();
	this.texture_8.setTransform(-220,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_8).wait(1));

	// graph
	this.texture_7 = new lib.texture_7_mc();
	this.texture_7.setTransform(-280,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_7).wait(1));

	// graph
	this.texture_6 = new lib.texture_6_mc();
	this.texture_6.setTransform(-340,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_6).wait(1));

	// graph
	this.texture_16 = new lib.texture_16_mc();
	this.texture_16.setTransform(-70,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_16).wait(1));

	// graph
	this.texture_5 = new lib.texture_5_mc();
	this.texture_5.setTransform(-130,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_5).wait(1));

	// graph
	this.texture_4 = new lib.texture_4_mc();
	this.texture_4.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_4).wait(1));

	// graph
	this.texture_3 = new lib.texture_3_mc();
	this.texture_3.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_3).wait(1));

	// graph
	this.texture_2 = new lib.texture_2_mc();
	this.texture_2.setTransform(-310,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_2).wait(1));

	// graph
	this.texture_1 = new lib.texture_1_mc();
	this.texture_1.setTransform(-370,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.texture_0 = new lib.texture_0_mc();
	this.texture_0.setTransform(-30,-240);

	this.timeline.addTween(cjs.Tween.get(this.texture_0).wait(1));

	// graph
	this.texture_17 = new lib.texture_17_mc();
	this.texture_17.setTransform(-70,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_17).wait(1));

	// graph
	this.texture_15 = new lib.texture_15_mc();
	this.texture_15.setTransform(-130,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_15).wait(1));

	// graph
	this.texture_14 = new lib.texture_14_mc();
	this.texture_14.setTransform(-190,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_14).wait(1));

	// graph
	this.texture_13 = new lib.texture_13_mc();
	this.texture_13.setTransform(-250,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_13).wait(1));

	// graph
	this.texture_12 = new lib.texture_12_mc();
	this.texture_12.setTransform(-310,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_12).wait(1));

	// graph
	this.texture_11 = new lib.texture_11_mc();
	this.texture_11.setTransform(-370,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_11).wait(1));

	// graph
	this.texture_10 = new lib.texture_10_mc();
	this.texture_10.setTransform(-100,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_10).wait(1));

	// graph
	this.texture_9 = new lib.texture_9_mc();
	this.texture_9.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_9).wait(1));

	// graph
	this.texture_8 = new lib.texture_8_mc();
	this.texture_8.setTransform(-220,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_8).wait(1));

	// graph
	this.texture_7 = new lib.texture_7_mc();
	this.texture_7.setTransform(-280,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_7).wait(1));

	// graph
	this.texture_6 = new lib.texture_6_mc();
	this.texture_6.setTransform(-340,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_6).wait(1));

	// graph
	this.texture_16 = new lib.texture_16_mc();
	this.texture_16.setTransform(-70,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_16).wait(1));

	// graph
	this.texture_5 = new lib.texture_5_mc();
	this.texture_5.setTransform(-130,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_5).wait(1));

	// graph
	this.texture_4 = new lib.texture_4_mc();
	this.texture_4.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_4).wait(1));

	// graph
	this.texture_3 = new lib.texture_3_mc();
	this.texture_3.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_3).wait(1));

	// graph
	this.texture_2 = new lib.texture_2_mc();
	this.texture_2.setTransform(-310,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_2).wait(1));

	// graph
	this.texture_1 = new lib.texture_1_mc();
	this.texture_1.setTransform(-370,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.texture_0 = new lib.texture_0_mc();
	this.texture_0.setTransform(-30,-240);

	this.timeline.addTween(cjs.Tween.get(this.texture_0).wait(1));

	// graph
	this.texture_17 = new lib.texture_17_mc();
	this.texture_17.setTransform(-70,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_17).wait(1));

	// graph
	this.texture_15 = new lib.texture_15_mc();
	this.texture_15.setTransform(-130,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_15).wait(1));

	// graph
	this.texture_14 = new lib.texture_14_mc();
	this.texture_14.setTransform(-190,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_14).wait(1));

	// graph
	this.texture_13 = new lib.texture_13_mc();
	this.texture_13.setTransform(-250,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_13).wait(1));

	// graph
	this.texture_12 = new lib.texture_12_mc();
	this.texture_12.setTransform(-310,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_12).wait(1));

	// graph
	this.texture_11 = new lib.texture_11_mc();
	this.texture_11.setTransform(-370,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_11).wait(1));

	// graph
	this.texture_10 = new lib.texture_10_mc();
	this.texture_10.setTransform(-100,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_10).wait(1));

	// graph
	this.texture_9 = new lib.texture_9_mc();
	this.texture_9.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_9).wait(1));

	// graph
	this.texture_8 = new lib.texture_8_mc();
	this.texture_8.setTransform(-220,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_8).wait(1));

	// graph
	this.texture_7 = new lib.texture_7_mc();
	this.texture_7.setTransform(-280,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_7).wait(1));

	// graph
	this.texture_6 = new lib.texture_6_mc();
	this.texture_6.setTransform(-340,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_6).wait(1));

	// graph
	this.texture_16 = new lib.texture_16_mc();
	this.texture_16.setTransform(-70,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_16).wait(1));

	// graph
	this.texture_5 = new lib.texture_5_mc();
	this.texture_5.setTransform(-130,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_5).wait(1));

	// graph
	this.texture_4 = new lib.texture_4_mc();
	this.texture_4.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_4).wait(1));

	// graph
	this.texture_3 = new lib.texture_3_mc();
	this.texture_3.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_3).wait(1));

	// graph
	this.texture_2 = new lib.texture_2_mc();
	this.texture_2.setTransform(-310,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_2).wait(1));

	// graph
	this.texture_1 = new lib.texture_1_mc();
	this.texture_1.setTransform(-370,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.texture_0 = new lib.texture_0_mc();
	this.texture_0.setTransform(-30,-240);

	this.timeline.addTween(cjs.Tween.get(this.texture_0).wait(1));

	// graph
	this.texture_17 = new lib.texture_17_mc();
	this.texture_17.setTransform(-70,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_17).wait(1));

	// graph
	this.texture_15 = new lib.texture_15_mc();
	this.texture_15.setTransform(-130,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_15).wait(1));

	// graph
	this.texture_14 = new lib.texture_14_mc();
	this.texture_14.setTransform(-190,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_14).wait(1));

	// graph
	this.texture_13 = new lib.texture_13_mc();
	this.texture_13.setTransform(-250,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_13).wait(1));

	// graph
	this.texture_12 = new lib.texture_12_mc();
	this.texture_12.setTransform(-310,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_12).wait(1));

	// graph
	this.texture_11 = new lib.texture_11_mc();
	this.texture_11.setTransform(-370,40);

	this.timeline.addTween(cjs.Tween.get(this.texture_11).wait(1));

	// graph
	this.texture_10 = new lib.texture_10_mc();
	this.texture_10.setTransform(-100,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_10).wait(1));

	// graph
	this.texture_9 = new lib.texture_9_mc();
	this.texture_9.setTransform(-160,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_9).wait(1));

	// graph
	this.texture_8 = new lib.texture_8_mc();
	this.texture_8.setTransform(-220,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_8).wait(1));

	// graph
	this.texture_7 = new lib.texture_7_mc();
	this.texture_7.setTransform(-280,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_7).wait(1));

	// graph
	this.texture_6 = new lib.texture_6_mc();
	this.texture_6.setTransform(-340,-50);

	this.timeline.addTween(cjs.Tween.get(this.texture_6).wait(1));

	// graph
	this.texture_16 = new lib.texture_16_mc();
	this.texture_16.setTransform(-70,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_16).wait(1));

	// graph
	this.texture_5 = new lib.texture_5_mc();
	this.texture_5.setTransform(-130,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_5).wait(1));

	// graph
	this.texture_4 = new lib.texture_4_mc();
	this.texture_4.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_4).wait(1));

	// graph
	this.texture_3 = new lib.texture_3_mc();
	this.texture_3.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_3).wait(1));

	// graph
	this.texture_2 = new lib.texture_2_mc();
	this.texture_2.setTransform(-310,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_2).wait(1));

	// graph
	this.texture_1 = new lib.texture_1_mc();
	this.texture_1.setTransform(-370,-140);

	this.timeline.addTween(cjs.Tween.get(this.texture_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.content_mc = new lib.horizontal_gallery_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.content_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.content_mc = new lib.horizontal_gallery_5_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.content_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.content_mc = new lib.horizontal_gallery_5_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.content_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.content_mc = new lib.horizontal_gallery_5_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.content_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
p.frameBounds = [rect];


(lib.horizontal_gallery_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.content_mc = new lib.horizontal_gallery_5_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.content_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,359);
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

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.arm_main_2_mc();
	this.instance.setTransform(376,420);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:400,y:915,alpha:1},0).to({x:376,y:420},20).wait(1));

	// animation
	this.instance_1 = new lib.arm_main_1_mc();
	this.instance_1.setTransform(242,324);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:250,y:920,alpha:1},0).to({x:242,y:324},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(99,20,459,699);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(107,121,451,1102), new cjs.Rectangle(106.6,121,451.4,1072.2), new cjs.Rectangle(106.2,121,451.8,1042.4), new cjs.Rectangle(105.8,121,452.2,1012.6), new cjs.Rectangle(105.4,121,452.6,982.8), new cjs.Rectangle(105,121,453,953), new cjs.Rectangle(104.6,121,453.4,923.2), new cjs.Rectangle(104.2,121,453.8,893.4), new cjs.Rectangle(103.8,121,454.2,863.6), new cjs.Rectangle(103.4,121,454.6,833.8), new cjs.Rectangle(103,121,455,804), new cjs.Rectangle(102.6,121,455.4,774.2), new cjs.Rectangle(102.2,121,455.8,744.4), new cjs.Rectangle(101.8,121,456.2,714.6), new cjs.Rectangle(101.4,121,456.6,684.8), new cjs.Rectangle(101,121,457,655), new cjs.Rectangle(100.6,121,457.4,625.2), new cjs.Rectangle(100.2,109.4,457.8,609.6), new cjs.Rectangle(99.8,79.6,458.2,639.4), new cjs.Rectangle(99.4,49.8,458.6,669.2), new cjs.Rectangle(99,20,483,1194), new cjs.Rectangle(99,20,481.8,1169.3), new cjs.Rectangle(99,20,480.6,1144.5), new cjs.Rectangle(99,20,479.4,1119.8), new cjs.Rectangle(99,20,478.2,1095), new cjs.Rectangle(99,20,477,1070.3), new cjs.Rectangle(99,20,475.8,1045.5), new cjs.Rectangle(99,20,474.6,1020.8), new cjs.Rectangle(99,20,473.4,996), new cjs.Rectangle(99,20,472.2,971.3), new cjs.Rectangle(99,20,471,946.5), new cjs.Rectangle(99,20,469.8,921.8), new cjs.Rectangle(99,20,468.6,897), new cjs.Rectangle(99,20,467.4,872.3), new cjs.Rectangle(99,20,466.2,847.5), new cjs.Rectangle(99,20,465,822.8), new cjs.Rectangle(99,20,463.8,798), new cjs.Rectangle(99,20,462.6,773.3), new cjs.Rectangle(99,20,461.4,748.5), new cjs.Rectangle(99,20,460.2,723.8), new cjs.Rectangle(99,20,459,699)];


(lib.halo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_halo_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.fourthNail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIFwQiAgOguh1Qguh1AIimQAIinA7hMQA7hLBZgEQBYgEBAA+QBBA9AJDJQAJDHg4BzQgyBnhrAAIgZgBg");
	mask.setTransform(-0.8,7.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-29.8,44.6,73.9);
p.frameBounds = [rect];


(lib.fourthNail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCGaQh/gLgyh3Qgxh3ALi6QAMi8AYiNQAxhBCsAKQCCAOANBKQAOBKASDcQATDag4BzQgzBphtAAIgUgBg");
	mask.setTransform(-1.1,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-38.1,44.1,82.4);
p.frameBounds = [rect];


(lib.fourthNail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCG5Qh4gKgzh3Qgzh3AMioQALimBAiNQBBiNBBgQQA+gRBICNQBHCOAODEQAPDGg4BzQgzBqhpAAIgRgBg");
	mask.setTransform(-0.5,0.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-44.1,43.2,88.6);
p.frameBounds = [rect];


(lib.fourthNail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBGbQh4gKgzh3Qgzh3AEinQAEipA9h1QA8h1BagEQBXgDA/BmQA/BnAKDJQAJDGg4B0QgzBqhpAAIgRgBg");
	mask.setTransform(-0.6,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.6,-38,44.2,82.4);
p.frameBounds = [rect];


(lib.firstNail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIFwQiAgOguh1Qguh1AIimQAIinA7hMQA7hLBZgEQBYgEBAA+QBBA9AJDJQAJDHg4BzQgyBnhrAAIgZgBg");
	mask.setTransform(-0.8,7.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-29.8,44.6,73.9);
p.frameBounds = [rect];


(lib.firstNail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCGaQh/gLgyh3Qgxh3ALi6QAMi8AYiNQAxhBCsAKQCCAOANBKQAOBKASDcQATDag4BzQgzBphtAAIgUgBg");
	mask.setTransform(-1.1,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-38.1,44.1,82.4);
p.frameBounds = [rect];


(lib.firstNail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCG5Qh4gKgzh3Qgzh3AMioQALimBAiNQBBiNBBgQQA+gRBICNQBHCOAODEQAPDGg4BzQgzBqhpAAIgRgBg");
	mask.setTransform(-0.5,0.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-44.1,43.2,88.6);
p.frameBounds = [rect];


(lib.firstNail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBGbQh4gKgzh3Qgzh3AEinQAEipA9h1QA8h1BagEQBXgDA/BmQA/BnAKDJQAJDGg4B0QgzBqhpAAIgRgBg");
	mask.setTransform(-0.6,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.6,-38,44.2,82.4);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.fifthNail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIFwQiAgOguh1Qguh1AIimQAIinA7hMQA7hLBZgEQBYgEBAA+QBBA9AJDJQAJDHg4BzQgyBnhrAAIgZgBg");
	mask.setTransform(-0.8,7.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-29.8,44.6,73.9);
p.frameBounds = [rect];


(lib.fifthNail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCGaQh/gLgyh3Qgxh3ALi6QAMi8AYiNQAxhBCsAKQCCAOANBKQAOBKASDcQATDag4BzQgzBphtAAIgUgBg");
	mask.setTransform(-1.1,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-38.1,44.1,82.4);
p.frameBounds = [rect];


(lib.fifthNail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCG5Qh4gKgzh3Qgzh3AMioQALimBAiNQBBiNBBgQQA+gRBICNQBHCOAODEQAPDGg4BzQgzBqhpAAIgRgBg");
	mask.setTransform(-0.5,0.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-44.1,43.2,88.6);
p.frameBounds = [rect];


(lib.fifthNail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBGbQh4gKgzh3Qgzh3AEinQAEipA9h1QA8h1BagEQBXgDA/BmQA/BnAKDJQAJDGg4B0QgzBqhpAAIgRgBg");
	mask.setTransform(-0.6,3.1);

	// texture
	this.texture_mc = new lib.texture_mc();
	this.texture_mc.setTransform(0.4,-1.2,1,1,0,0,0,31,49);

	this.texture_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.texture_mc).wait(1));

	// body
	this.body_mc = new lib.nail_base_mc();
	this.body_mc.setTransform(-0.5,-4.7,1,1,0,0,0,31,49);

	this.body_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.6,-38,44.2,82.4);
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


(lib.color_picker_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.color_0 = new lib.lacquer_0_mc();
	this.color_0.setTransform(-230,-380);

	this.timeline.addTween(cjs.Tween.get(this.color_0).wait(1));

	// graph
	this.color_16 = new lib.lacquer_16_mc();
	this.color_16.setTransform(295,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_16).wait(1));

	// graph
	this.color_15 = new lib.lacquer_15_mc();
	this.color_15.setTransform(360,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_15).wait(1));

	// graph
	this.color_10 = new lib.lacquer_10_mc();
	this.color_10.setTransform(-360,100);

	this.timeline.addTween(cjs.Tween.get(this.color_10).wait(1));

	// graph
	this.color_14 = new lib.lacquer_14_mc();
	this.color_14.setTransform(-80,100);

	this.timeline.addTween(cjs.Tween.get(this.color_14).wait(1));

	// graph
	this.color_13 = new lib.lacquer_13_mc();
	this.color_13.setTransform(-150,100);

	this.timeline.addTween(cjs.Tween.get(this.color_13).wait(1));

	// graph
	this.color_12 = new lib.lacquer_12_mc();
	this.color_12.setTransform(-220,100);

	this.timeline.addTween(cjs.Tween.get(this.color_12).wait(1));

	// graph
	this.color_11 = new lib.lacquer_11_mc();
	this.color_11.setTransform(-290,100);

	this.timeline.addTween(cjs.Tween.get(this.color_11).wait(1));

	// graph
	this.color_9 = new lib.lacquer_9_mc();
	this.color_9.setTransform(-115,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_9).wait(1));

	// graph
	this.color_8 = new lib.lacquer_8_mc();
	this.color_8.setTransform(-185,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_8).wait(1));

	// graph
	this.color_7 = new lib.lacquer_7_mc();
	this.color_7.setTransform(-255,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_7).wait(1));

	// graph
	this.color_6 = new lib.lacquer_6_mc();
	this.color_6.setTransform(-325,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_6).wait(1));

	// graph
	this.color_5 = new lib.lacquer_5_mc();
	this.color_5.setTransform(-80,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_5).wait(1));

	// graph
	this.color_4 = new lib.lacquer_4_mc();
	this.color_4.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_4).wait(1));

	// graph
	this.color_3 = new lib.lacquer_3_mc();
	this.color_3.setTransform(-220,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_3).wait(1));

	// graph
	this.color_2 = new lib.lacquer_2_mc();
	this.color_2.setTransform(-290,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_2).wait(1));

	// graph
	this.color_1 = new lib.lacquer_1_mc();
	this.color_1.setTransform(-360,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-410,780,585);
p.frameBounds = [rect];


(lib.color_picker_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.color_0 = new lib.lacquer_0_mc();
	this.color_0.setTransform(-230,-380);

	this.timeline.addTween(cjs.Tween.get(this.color_0).wait(1));

	// graph
	this.color_16 = new lib.lacquer_16_mc();
	this.color_16.setTransform(295,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_16).wait(1));

	// graph
	this.color_15 = new lib.lacquer_15_mc();
	this.color_15.setTransform(360,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_15).wait(1));

	// graph
	this.color_10 = new lib.lacquer_10_mc();
	this.color_10.setTransform(-360,100);

	this.timeline.addTween(cjs.Tween.get(this.color_10).wait(1));

	// graph
	this.color_14 = new lib.lacquer_14_mc();
	this.color_14.setTransform(-80,100);

	this.timeline.addTween(cjs.Tween.get(this.color_14).wait(1));

	// graph
	this.color_13 = new lib.lacquer_13_mc();
	this.color_13.setTransform(-150,100);

	this.timeline.addTween(cjs.Tween.get(this.color_13).wait(1));

	// graph
	this.color_12 = new lib.lacquer_12_mc();
	this.color_12.setTransform(-220,100);

	this.timeline.addTween(cjs.Tween.get(this.color_12).wait(1));

	// graph
	this.color_11 = new lib.lacquer_11_mc();
	this.color_11.setTransform(-290,100);

	this.timeline.addTween(cjs.Tween.get(this.color_11).wait(1));

	// graph
	this.color_9 = new lib.lacquer_9_mc();
	this.color_9.setTransform(-115,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_9).wait(1));

	// graph
	this.color_8 = new lib.lacquer_8_mc();
	this.color_8.setTransform(-185,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_8).wait(1));

	// graph
	this.color_7 = new lib.lacquer_7_mc();
	this.color_7.setTransform(-255,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_7).wait(1));

	// graph
	this.color_6 = new lib.lacquer_6_mc();
	this.color_6.setTransform(-325,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_6).wait(1));

	// graph
	this.color_5 = new lib.lacquer_5_mc();
	this.color_5.setTransform(-80,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_5).wait(1));

	// graph
	this.color_4 = new lib.lacquer_4_mc();
	this.color_4.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_4).wait(1));

	// graph
	this.color_3 = new lib.lacquer_3_mc();
	this.color_3.setTransform(-220,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_3).wait(1));

	// graph
	this.color_2 = new lib.lacquer_2_mc();
	this.color_2.setTransform(-290,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_2).wait(1));

	// graph
	this.color_1 = new lib.lacquer_1_mc();
	this.color_1.setTransform(-360,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-410,780,585);
p.frameBounds = [rect];


(lib.color_picker_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.color_0 = new lib.lacquer_0_mc();
	this.color_0.setTransform(-230,-380);

	this.timeline.addTween(cjs.Tween.get(this.color_0).wait(1));

	// graph
	this.color_16 = new lib.lacquer_16_mc();
	this.color_16.setTransform(295,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_16).wait(1));

	// graph
	this.color_15 = new lib.lacquer_15_mc();
	this.color_15.setTransform(360,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_15).wait(1));

	// graph
	this.color_10 = new lib.lacquer_10_mc();
	this.color_10.setTransform(-360,100);

	this.timeline.addTween(cjs.Tween.get(this.color_10).wait(1));

	// graph
	this.color_14 = new lib.lacquer_14_mc();
	this.color_14.setTransform(-80,100);

	this.timeline.addTween(cjs.Tween.get(this.color_14).wait(1));

	// graph
	this.color_13 = new lib.lacquer_13_mc();
	this.color_13.setTransform(-150,100);

	this.timeline.addTween(cjs.Tween.get(this.color_13).wait(1));

	// graph
	this.color_12 = new lib.lacquer_12_mc();
	this.color_12.setTransform(-220,100);

	this.timeline.addTween(cjs.Tween.get(this.color_12).wait(1));

	// graph
	this.color_11 = new lib.lacquer_11_mc();
	this.color_11.setTransform(-290,100);

	this.timeline.addTween(cjs.Tween.get(this.color_11).wait(1));

	// graph
	this.color_9 = new lib.lacquer_9_mc();
	this.color_9.setTransform(-115,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_9).wait(1));

	// graph
	this.color_8 = new lib.lacquer_8_mc();
	this.color_8.setTransform(-185,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_8).wait(1));

	// graph
	this.color_7 = new lib.lacquer_7_mc();
	this.color_7.setTransform(-255,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_7).wait(1));

	// graph
	this.color_6 = new lib.lacquer_6_mc();
	this.color_6.setTransform(-325,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_6).wait(1));

	// graph
	this.color_5 = new lib.lacquer_5_mc();
	this.color_5.setTransform(-80,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_5).wait(1));

	// graph
	this.color_4 = new lib.lacquer_4_mc();
	this.color_4.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_4).wait(1));

	// graph
	this.color_3 = new lib.lacquer_3_mc();
	this.color_3.setTransform(-220,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_3).wait(1));

	// graph
	this.color_2 = new lib.lacquer_2_mc();
	this.color_2.setTransform(-290,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_2).wait(1));

	// graph
	this.color_1 = new lib.lacquer_1_mc();
	this.color_1.setTransform(-360,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-410,780,585);
p.frameBounds = [rect];


(lib.color_picker_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.color_0 = new lib.lacquer_0_mc();
	this.color_0.setTransform(-230,-380);

	this.timeline.addTween(cjs.Tween.get(this.color_0).wait(1));

	// graph
	this.color_16 = new lib.lacquer_16_mc();
	this.color_16.setTransform(295,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_16).wait(1));

	// graph
	this.color_15 = new lib.lacquer_15_mc();
	this.color_15.setTransform(360,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_15).wait(1));

	// graph
	this.color_10 = new lib.lacquer_10_mc();
	this.color_10.setTransform(-360,100);

	this.timeline.addTween(cjs.Tween.get(this.color_10).wait(1));

	// graph
	this.color_14 = new lib.lacquer_14_mc();
	this.color_14.setTransform(-80,100);

	this.timeline.addTween(cjs.Tween.get(this.color_14).wait(1));

	// graph
	this.color_13 = new lib.lacquer_13_mc();
	this.color_13.setTransform(-150,100);

	this.timeline.addTween(cjs.Tween.get(this.color_13).wait(1));

	// graph
	this.color_12 = new lib.lacquer_12_mc();
	this.color_12.setTransform(-220,100);

	this.timeline.addTween(cjs.Tween.get(this.color_12).wait(1));

	// graph
	this.color_11 = new lib.lacquer_11_mc();
	this.color_11.setTransform(-290,100);

	this.timeline.addTween(cjs.Tween.get(this.color_11).wait(1));

	// graph
	this.color_9 = new lib.lacquer_9_mc();
	this.color_9.setTransform(-115,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_9).wait(1));

	// graph
	this.color_8 = new lib.lacquer_8_mc();
	this.color_8.setTransform(-185,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_8).wait(1));

	// graph
	this.color_7 = new lib.lacquer_7_mc();
	this.color_7.setTransform(-255,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_7).wait(1));

	// graph
	this.color_6 = new lib.lacquer_6_mc();
	this.color_6.setTransform(-325,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_6).wait(1));

	// graph
	this.color_5 = new lib.lacquer_5_mc();
	this.color_5.setTransform(-80,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_5).wait(1));

	// graph
	this.color_4 = new lib.lacquer_4_mc();
	this.color_4.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_4).wait(1));

	// graph
	this.color_3 = new lib.lacquer_3_mc();
	this.color_3.setTransform(-220,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_3).wait(1));

	// graph
	this.color_2 = new lib.lacquer_2_mc();
	this.color_2.setTransform(-290,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_2).wait(1));

	// graph
	this.color_1 = new lib.lacquer_1_mc();
	this.color_1.setTransform(-360,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-410,780,585);
p.frameBounds = [rect];


(lib.color_picker_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.color_0 = new lib.lacquer_0_mc();
	this.color_0.setTransform(-230,-380);

	this.timeline.addTween(cjs.Tween.get(this.color_0).wait(1));

	// graph
	this.color_16 = new lib.lacquer_16_mc();
	this.color_16.setTransform(295,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_16).wait(1));

	// graph
	this.color_15 = new lib.lacquer_15_mc();
	this.color_15.setTransform(360,-90);

	this.timeline.addTween(cjs.Tween.get(this.color_15).wait(1));

	// graph
	this.color_10 = new lib.lacquer_10_mc();
	this.color_10.setTransform(-360,100);

	this.timeline.addTween(cjs.Tween.get(this.color_10).wait(1));

	// graph
	this.color_14 = new lib.lacquer_14_mc();
	this.color_14.setTransform(-80,100);

	this.timeline.addTween(cjs.Tween.get(this.color_14).wait(1));

	// graph
	this.color_13 = new lib.lacquer_13_mc();
	this.color_13.setTransform(-150,100);

	this.timeline.addTween(cjs.Tween.get(this.color_13).wait(1));

	// graph
	this.color_12 = new lib.lacquer_12_mc();
	this.color_12.setTransform(-220,100);

	this.timeline.addTween(cjs.Tween.get(this.color_12).wait(1));

	// graph
	this.color_11 = new lib.lacquer_11_mc();
	this.color_11.setTransform(-290,100);

	this.timeline.addTween(cjs.Tween.get(this.color_11).wait(1));

	// graph
	this.color_9 = new lib.lacquer_9_mc();
	this.color_9.setTransform(-115,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_9).wait(1));

	// graph
	this.color_8 = new lib.lacquer_8_mc();
	this.color_8.setTransform(-185,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_8).wait(1));

	// graph
	this.color_7 = new lib.lacquer_7_mc();
	this.color_7.setTransform(-255,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_7).wait(1));

	// graph
	this.color_6 = new lib.lacquer_6_mc();
	this.color_6.setTransform(-325,-25);

	this.timeline.addTween(cjs.Tween.get(this.color_6).wait(1));

	// graph
	this.color_5 = new lib.lacquer_5_mc();
	this.color_5.setTransform(-80,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_5).wait(1));

	// graph
	this.color_4 = new lib.lacquer_4_mc();
	this.color_4.setTransform(-150,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_4).wait(1));

	// graph
	this.color_3 = new lib.lacquer_3_mc();
	this.color_3.setTransform(-220,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_3).wait(1));

	// graph
	this.color_2 = new lib.lacquer_2_mc();
	this.color_2.setTransform(-290,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_2).wait(1));

	// graph
	this.color_1 = new lib.lacquer_1_mc();
	this.color_1.setTransform(-360,-145);

	this.timeline.addTween(cjs.Tween.get(this.color_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-410,780,585);
p.frameBounds = [rect];


(lib.check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},9).wait(1));

	// graph
	this.instance_1 = new lib.check_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_0_2_mc();

	this.instance_1 = new lib.check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect];


(lib.bracelet_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bracelet_6_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.bracelet_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bracelet_5_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.bracelet_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bracelet_4_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.bracelet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bracelet_3_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.bracelet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bracelet_2_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.bracelet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bracelet_1_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.bracelet_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
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


(lib.arrow_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
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
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
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
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.animation1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Слой 6
	this.instance = new lib.rastr1();
	this.instance.setTransform(403.5,406.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},13).to({_off:true},1).wait(76));

	// Слой 5
	this.instance_1 = new lib.towel();
	this.instance_1.setTransform(20,337.4,0.607,1,0,0,0,193.5,242);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({scaleX:1,x:229,y:370.4},13).to({x:581},13).to({x:201,y:379.4},16).to({x:-29,y:784.3,alpha:0.012},9).to({_off:true},1).wait(1));

	// hand0_2.png
	this.instance_2 = new lib.hand0_2();
	this.instance_2.setTransform(380,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:112},13).wait(10).to({x:323,y:392},14).wait(53));

	// Layer 3
	this.instance_3 = new lib.hand0_1();
	this.instance_3.setTransform(495,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-10.5},13).wait(10).to({x:438,y:269.5},14).wait(53));

	// Слой 4
	this.instance_4 = new lib.cup();
	this.instance_4.setTransform(400,378);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({y:757,alpha:0.012},10).to({_off:true},1).wait(66));

	// body1
	this.instance_5 = new lib.back0_2_img();
	this.instance_5.setTransform(755,71);

	this.instance_6 = new lib.back0_1_img();
	this.instance_6.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-106,1191,685.4);
p.frameBounds = [rect, new cjs.Rectangle(-200,-121.4,1191,700.8), new cjs.Rectangle(-200,-136.7,1191,716.1), new cjs.Rectangle(-200,-152.1,1191,731.5), new cjs.Rectangle(-200,-167.5,1191,746.9), new cjs.Rectangle(-200,-182.9,1191,762.3), new cjs.Rectangle(-200,-198.3,1191,777.7), new cjs.Rectangle(-200,-213.7,1191,793.1), new cjs.Rectangle(-200,-229.1,1191,808.5), new cjs.Rectangle(-200,-244.4,1191,823.8), new cjs.Rectangle(-200,-259.8,1191,839.2), new cjs.Rectangle(-200,-275.2,1191,854.6), new cjs.Rectangle(-200,-290.6,1191,870), new cjs.Rectangle(-200,-306,1191,885.4), new cjs.Rectangle(-200,-306,1191,913.9), new cjs.Rectangle(-200,-306,1191,951.8), new cjs.Rectangle(-200,-306,1191,989.7), new cjs.Rectangle(-200,-306,1191,1027.6), new cjs.Rectangle(-200,-306,1191,1065.5), new cjs.Rectangle(-200,-306,1191,1103.4), new cjs.Rectangle(-200,-306,1191,1141.3), new cjs.Rectangle(-200,-306,1191,1179.2), new cjs.Rectangle(-200,-306,1191,1217.1), new cjs.Rectangle(-200,-306,1191,1255), new cjs.Rectangle(-200,-286,1191,865.4), new cjs.Rectangle(-200,-266,1191,845.4), new cjs.Rectangle(-200,-246,1191,825.4), new cjs.Rectangle(-200,-226,1191,805.4), new cjs.Rectangle(-200,-206,1191,785.4), new cjs.Rectangle(-200,-186,1191,765.4), new cjs.Rectangle(-200,-166,1191,745.4), new cjs.Rectangle(-200,-146,1191,725.4), new cjs.Rectangle(-200,-126,1191,705.4), new cjs.Rectangle(-200,-106,1191,685.4), new cjs.Rectangle(-200,-86,1191,665.4), new cjs.Rectangle(-200,-66,1191,645.4), new cjs.Rectangle(-200,-46,1191,625.4), new cjs.Rectangle(-200,-26,1191,605.4), new cjs.Rectangle(-200,-26,1191,607.9), new cjs.Rectangle(-200,-26,1191,610.5), new cjs.Rectangle(-200,-26,1191,613), new cjs.Rectangle(-200,-26,1191,615.6), new cjs.Rectangle(-200,-26,1191,618.1), new cjs.Rectangle(-200,-26,1191,620.7), new cjs.Rectangle(-200,-26,1191,623.2), new cjs.Rectangle(-200,-26,1191,625.7), new cjs.Rectangle(-200,-26,1191,628.3), new cjs.Rectangle(-200,-26,1191,630.8), new cjs.Rectangle(-200,-26,1191,633.3), new cjs.Rectangle(-200,-26,1191,635.8), rect=new cjs.Rectangle(-200,-26,1191,638.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-26,1191,638.9), new cjs.Rectangle(-200,-26,1191,639.6), new cjs.Rectangle(-200,-26,1191,640.1), new cjs.Rectangle(-200,-26,1191,640.7), new cjs.Rectangle(-200,-26,1191,641.2), new cjs.Rectangle(-200,-26,1191,641.8), new cjs.Rectangle(-200,-26,1191,642.3), new cjs.Rectangle(-200,-26,1191,642.9), new cjs.Rectangle(-200,-26,1191,643.4), new cjs.Rectangle(-200,-26,1191,644.1), new cjs.Rectangle(-200,-26,1191,644.6), new cjs.Rectangle(-200,-26,1191,645.2), new cjs.Rectangle(-200,-26,1191,645.7), new cjs.Rectangle(-200,-26,1191,646.3), new cjs.Rectangle(-200,-26,1191,646.8), new cjs.Rectangle(-200,-26,1191,647.4), new cjs.Rectangle(-200,-26,1191,692.4), new cjs.Rectangle(-200,-26,1191,737.4), new cjs.Rectangle(-200,-26,1191,782.3), new cjs.Rectangle(-200,-26,1191,827.4), new cjs.Rectangle(-200,-26,1191,872.4), new cjs.Rectangle(-200,-26,1191,917.4), new cjs.Rectangle(-200,-26,1191,962.3), new cjs.Rectangle(-200,-26,1191,1007.3), new cjs.Rectangle(-222.5,-26,1213.5,1052.3), new cjs.Rectangle(-200,-26,1191,593)];


(lib.animation1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_157 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(157).call(this.frame_157).wait(1));

	// instrument4
	this.instance = new lib.instrument4();
	this.instance.setTransform(140.7,230.9,1,1,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.97},3).to({scaleY:1},3).wait(8).to({x:177.7,y:468.8},7).to({scaleY:0.96},3).to({scaleY:1},3).wait(8).to({x:233.7,y:520.8},8).to({scaleY:0.92},3).to({scaleY:1},3).wait(8).to({x:274.7,y:511.1},7).to({scaleY:0.93},3).to({scaleY:1},3).wait(8).to({x:364.7,y:464.1},11).to({scaleY:0.94},3).to({scaleY:1},3).wait(9).to({y:732.1,alpha:0.012},9).to({_off:true},1).wait(44));

	// Слой 3
	this.instance_1 = new lib.kapla2();
	this.instance_1.setTransform(231.9,133,0.333,0.333,0,0,0,-3,-27);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:0.67,scaleY:0.67},3).to({regY:-26.9,scaleX:1.17,scaleY:0.31,x:229.9,y:162,alpha:0.012},6).to({_off:true},1).wait(11).to({_off:false,regY:-27,scaleX:0.33,scaleY:0.33,x:265.9,y:375,alpha:1},0).to({scaleX:0.67,scaleY:0.67,x:267.9,y:371},3).to({regY:-26.9,scaleX:1.17,scaleY:0.31,x:264.9,y:396,alpha:0.012},6).to({_off:true},1).wait(12).to({_off:false,regY:-27,scaleX:0.33,scaleY:0.33,x:319.9,y:429,alpha:1},0).to({scaleX:0.67,scaleY:0.67,x:324.4,y:423},3).to({regY:-26.9,scaleX:1.17,scaleY:0.31,x:320.9,y:450.9,alpha:0.012},6).to({_off:true},1).wait(11).to({_off:false,regY:-27,scaleX:0.33,scaleY:0.33,x:362.9,y:420,alpha:1},0).to({scaleX:0.67,scaleY:0.67,x:363.4,y:409},3).to({regY:-26.9,scaleX:1.17,scaleY:0.31,x:361.9,y:442.9,alpha:0.012},6).to({_off:true},1).wait(15).to({_off:false,regY:-27,scaleX:0.33,scaleY:0.33,x:452.9,y:372,alpha:1},0).to({scaleX:0.67,scaleY:0.67,x:455.4,y:363},3).to({regY:-26.9,scaleX:1.17,scaleY:0.31,x:449.9,y:390,alpha:0.012},6).to({_off:true},1).wait(56));

	// Слой 6
	this.instance_2 = new lib.rastr1();
	this.instance_2.setTransform(403.5,406.3);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).to({alpha:1},12).wait(1));

	// hand0_2.png
	this.instance_3 = new lib.hand0_2();
	this.instance_3.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({y:45},10).wait(16).to({x:380,y:312},12).wait(1));

	// hand0_6.png
	this.instance_4 = new lib.hand0_6();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({alpha:0.012},14).to({_off:true},1).wait(44));

	// Layer 3
	this.instance_5 = new lib.hand0_1();
	this.instance_5.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({y:-77.5},10).wait(16).to({x:495,y:189.5},12).wait(1));

	// Слой 13
	this.instance_6 = new lib.pillow();
	this.instance_6.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({x:1032.9,alpha:0.012},15).to({_off:true},1).wait(23));

	// Слой 5
	this.instance_7 = new lib.towel();
	this.instance_7.setTransform(-209,337.4,0.607,1,0,0,0,193.5,242);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(134).to({_off:false},0).to({x:20,alpha:1},11).wait(13));

	// Слой 4
	this.instance_8 = new lib.cup();
	this.instance_8.setTransform(400,774.9);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(134).to({_off:false},0).to({y:378,alpha:1},11).wait(13));

	// body1
	this.instance_9 = new lib.back0_2_img();
	this.instance_9.setTransform(755,71);

	this.instance_10 = new lib.back0_1_img();
	this.instance_10.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(158));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,593);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,601.8), new cjs.Rectangle(-200,-90,1191,635.8), new cjs.Rectangle(-200,-90,1191,669.8), new cjs.Rectangle(-200,-90,1191,704), new cjs.Rectangle(-200,-90,1191,702.1), new cjs.Rectangle(-200,-90,1191,700.2), new cjs.Rectangle(-200,-90,1191,698.4), new cjs.Rectangle(-200,-90,1191,700.2), new cjs.Rectangle(-200,-90,1191,701.9), new cjs.Rectangle(-200,-90,1191,704), rect=new cjs.Rectangle(-200,-90,1191,703.8), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,704), new cjs.Rectangle(-200,-90,1191,710.3), new cjs.Rectangle(-200,-90,1191,716.8), new cjs.Rectangle(-200,-90,1191,723.3), new cjs.Rectangle(-200,-90,1191,729.8), new cjs.Rectangle(-200,-90,1191,736.3), new cjs.Rectangle(-200,-90,1191,742.8), new cjs.Rectangle(-200,-90,1191,749.3), new cjs.Rectangle(-200,-90,1191,755.9), new cjs.Rectangle(-200,-90,1191,752.4), new cjs.Rectangle(-200,-90,1191,749.1), new cjs.Rectangle(-200,-90,1191,745.9), new cjs.Rectangle(-200,-90,1191,749.1), new cjs.Rectangle(-200,-90,1191,752.4), new cjs.Rectangle(-200,-90,1191,755.9), rect=new cjs.Rectangle(-200,-90,1191,755.8), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,755.9), new cjs.Rectangle(-200,-90,1191,754.3), new cjs.Rectangle(-200,-90,1191,753), new cjs.Rectangle(-200,-90,1191,751.6), new cjs.Rectangle(-200,-90,1191,750.3), new cjs.Rectangle(-200,-90,1191,748.8), new cjs.Rectangle(-200,-90,1191,747.5), new cjs.Rectangle(-200,-90,1191,746.3), new cjs.Rectangle(-200,-90,1191,743.4), new cjs.Rectangle(-200,-90,1191,740.5), new cjs.Rectangle(-200,-90,1191,737.8), new cjs.Rectangle(-200,-90,1191,740.5), new cjs.Rectangle(-200,-90,1191,743.4), new cjs.Rectangle(-200,-90,1191,746.3), rect=new cjs.Rectangle(-200,-90,1191,746.1), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,746.3), new cjs.Rectangle(-200,-90,1191,741.8), new cjs.Rectangle(-200,-90,1191,737.6), new cjs.Rectangle(-200,-90,1191,733.3), new cjs.Rectangle(-200,-90,1191,729), new cjs.Rectangle(-200,-90,1191,724.8), new cjs.Rectangle(-200,-90,1191,720.4), new cjs.Rectangle(-200,-90,1191,716.2), new cjs.Rectangle(-200,-90,1191,711.9), new cjs.Rectangle(-200,-90,1191,707.7), new cjs.Rectangle(-200,-90,1191,703.3), new cjs.Rectangle(-200,-90,1191,699.3), new cjs.Rectangle(-200,-90,1191,696.8), new cjs.Rectangle(-200,-90,1191,694.3), new cjs.Rectangle(-200,-90,1191,692.1), new cjs.Rectangle(-200,-90,1191,694.4), new cjs.Rectangle(-200,-90,1191,696.8), new cjs.Rectangle(-200,-90,1191,699.3), rect=new cjs.Rectangle(-200,-90,1191,699.1), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,699.3), new cjs.Rectangle(-200,-90,1191,728.8), new cjs.Rectangle(-200,-90,1191,758.7), new cjs.Rectangle(-200,-90,1191,788.4), new cjs.Rectangle(-200,-90,1191,818.2), new cjs.Rectangle(-200,-90,1191,848), new cjs.Rectangle(-200,-90,1191,877.8), new cjs.Rectangle(-200,-90,1191,907.5), new cjs.Rectangle(-200,-90,1191,937.3), new cjs.Rectangle(-200,-90,1191,967.3), rect=new cjs.Rectangle(-200,-90,1191,593), rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-118.3,1191,593.3), new cjs.Rectangle(-200,-146.6,1191,621.6), new cjs.Rectangle(-200,-174.9,1191,649.9), new cjs.Rectangle(-200,-203.2,1191,678.2), new cjs.Rectangle(-200,-231.5,1191,706.5), new cjs.Rectangle(-200,-259.8,1191,734.8), new cjs.Rectangle(-200,-288.1,1191,763.1), new cjs.Rectangle(-200,-316.4,1191,791.3), new cjs.Rectangle(-200,-344.7,1223.8,819.7), new cjs.Rectangle(-200,-373,1266.4,848), new cjs.Rectangle(-200,-373,1309,848), new cjs.Rectangle(-200,-373,1351.6,848), new cjs.Rectangle(-200,-373,1394.2,848), new cjs.Rectangle(-200,-373,1436.8,848), new cjs.Rectangle(-326.5,-373,1606,1339.9), new cjs.Rectangle(-305.7,-373,1296.8,1303.8), new cjs.Rectangle(-284.9,-373,1275.9,1267.7), new cjs.Rectangle(-264.1,-373,1255.1,1231.7), new cjs.Rectangle(-243.3,-373,1234.3,1195.6), new cjs.Rectangle(-222.4,-373,1213.5,1159.5), new cjs.Rectangle(-201.6,-373,1192.7,1123.4), new cjs.Rectangle(-200,-373,1191,1087.3), new cjs.Rectangle(-200,-373,1191,1051.2), new cjs.Rectangle(-200,-373,1191,1015.2), new cjs.Rectangle(-200,-373,1191,979.1), new cjs.Rectangle(-200,-373,1191,952.4), new cjs.Rectangle(-200,-350.7,1191,930.1), new cjs.Rectangle(-200,-328.5,1191,907.9), new cjs.Rectangle(-200,-306.2,1191,885.6), new cjs.Rectangle(-200,-284,1191,863.4), new cjs.Rectangle(-200,-261.7,1191,841.1), new cjs.Rectangle(-200,-239.5,1191,818.9), new cjs.Rectangle(-200,-217.2,1191,796.6), new cjs.Rectangle(-200,-195,1191,774.4), new cjs.Rectangle(-200,-172.7,1191,752.1), new cjs.Rectangle(-200,-150.5,1191,729.9), new cjs.Rectangle(-200,-128.2,1191,707.6), new cjs.Rectangle(-200,-106,1191,685.4)];


(lib.animation1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// instrument4
	this.instance = new lib.instrument4();
	this.instance.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:25.5,x:140.7,y:230.9},9).wait(1));

	// hand0_2.png
	this.instance_1 = new lib.hand0_2();
	this.instance_1.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// hand0_6.png
	this.instance_2 = new lib.hand0_6();
	this.instance_2.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Layer 3
	this.instance_3 = new lib.hand0_1();
	this.instance_3.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// Слой 13
	this.instance_4 = new lib.pillow();
	this.instance_4.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// body1
	this.instance_5 = new lib.back0_2_img();
	this.instance_5.setTransform(755,71);

	this.instance_6 = new lib.back0_1_img();
	this.instance_6.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,667.1);
p.frameBounds = [rect, new cjs.Rectangle(-200,-90,1191,645.6), new cjs.Rectangle(-200,-90,1191,624), new cjs.Rectangle(-200,-90,1191,602.3), rect=new cjs.Rectangle(-200,-90,1191,593), rect, rect, rect, rect, rect];


(lib.animation1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// instrument2
	this.instance = new lib.instrument2();
	this.instance.setTransform(98.2,107,1,1,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:147.2,x:171.2,y:66},9).to({x:136.2,y:81},7).to({rotation:123.2,x:170.2,y:345},9).to({x:157.2,y:376.7},8).to({x:170.2,y:345},8).to({x:205.2,y:437},6).to({x:213.2,y:394},7).to({x:205.2,y:437},7).to({rotation:108,x:239.2,y:439},7).to({x:250.2,y:412},7).to({x:239.2,y:439},7).to({x:324.2,y:400},7).to({x:342.2,y:364},6).to({x:324.2,y:400},5).to({rotation:80.3,x:317.2,y:641,alpha:0.012},8).to({_off:true},1).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgO6AonMAAAg4/MA2qAAAIAACgIDcAAMAAAA2fg");
	var mask_graphics_1 = new cjs.Graphics().p("EgNyAonMAAAg4/MA1nAAAIAACgIDXAAMAAAA2fg");
	var mask_graphics_2 = new cjs.Graphics().p("EgMpAonMAAAg4/MA0iAAAIAACgIDTAAMAAAA2fg");
	var mask_graphics_3 = new cjs.Graphics().p("EgLhAonMAAAg4/MAzeAAAIAACgIDPAAMAAAA2fg");
	var mask_graphics_4 = new cjs.Graphics().p("EgKZAonMAAAg4/MAyaAAAIAACgIDLAAMAAAA2fg");
	var mask_graphics_5 = new cjs.Graphics().p("EgJRAonMAAAg4/MAxXAAAIAACgIDGAAMAAAA2fg");
	var mask_graphics_6 = new cjs.Graphics().p("EgIIAonMAAAg4/MAwSAAAIAACgIDCAAMAAAA2fg");
	var mask_graphics_7 = new cjs.Graphics().p("EgHAAonMAAAg4/MAvOAAAIAACgIC+AAMAAAA2fg");
	var mask_graphics_8 = new cjs.Graphics().p("EgF4AonMAAAg4/MAuKAAAIAACgIC6AAMAAAA2fg");
	var mask_graphics_9 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_10 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_11 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_12 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_13 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_14 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_15 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_16 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_17 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_18 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_19 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_20 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_21 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_22 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_23 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_24 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_25 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_26 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_27 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_28 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_29 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_30 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_31 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_32 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_33 = new cjs.Graphics().p("EgEwAonMAAAg4/MAtHAAAIAACgIC1AAMAAAA2fg");
	var mask_graphics_34 = new cjs.Graphics().p("EgD5AonMAAAg4/MAsTAAAIAACgICyAAMAAAA2fg");
	var mask_graphics_35 = new cjs.Graphics().p("EgDCAonMAAAg4/MArfAAAIAACgICvAAMAAAA2fg");
	var mask_graphics_36 = new cjs.Graphics().p("EgCLAonMAAAg4/MAqsAAAIAACgICrAAMAAAA2fg");
	var mask_graphics_37 = new cjs.Graphics().p("EgBUAonMAAAg4/MAp4AAAIAACgICoAAMAAAA2fg");
	var mask_graphics_38 = new cjs.Graphics().p("EgAcAonMAAAg4/MApDAAAIAACgIClAAMAAAA2fg");
	var mask_graphics_39 = new cjs.Graphics().p("EAAZAonMAAAg4/MAoRAAAIAACgICiAAMAAAA2fg");
	var mask_graphics_40 = new cjs.Graphics().p("EABQAonMAAAg4/MAneAAAIAACgICeAAMAAAA2fg");
	var mask_graphics_41 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_42 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_43 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_44 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_45 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_46 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_47 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_48 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_49 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_50 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_51 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_52 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_53 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_54 = new cjs.Graphics().p("EACHAonMAAAg4/MAmqAAAIAACgICbAAMAAAA2fg");
	var mask_graphics_55 = new cjs.Graphics().p("EADIAonMAAAg4/MAltAAAIAACgICXAAMAAAA2fg");
	var mask_graphics_56 = new cjs.Graphics().p("EAEIAonMAAAg4/MAkxAAAIAACgICUAAMAAAA2fg");
	var mask_graphics_57 = new cjs.Graphics().p("EAFJAonMAAAg4/MAj0AAAIAACgICQAAMAAAA2fg");
	var mask_graphics_58 = new cjs.Graphics().p("EAGKAonMAAAg4/MAi2AAAIAACgICNAAMAAAA2fg");
	var mask_graphics_59 = new cjs.Graphics().p("EAHLAonMAAAg4/MAh5AAAIAACgICJAAMAAAA2fg");
	var mask_graphics_60 = new cjs.Graphics().p("EAIMAonMAAAg4/MAg8AAAIAACgICFAAMAAAA2fg");
	var mask_graphics_61 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_62 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_63 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_64 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_65 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_66 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_67 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_68 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_69 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_70 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_71 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_72 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_73 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_74 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_75 = new cjs.Graphics().p("EAJMAonMAAAg4/MAgAAAAIAACgICBAAMAAAA2fg");
	var mask_graphics_76 = new cjs.Graphics().p("EAKOAonMAAAg4/IfCAAIAACgIB9AAMAAAA2fg");
	var mask_graphics_77 = new cjs.Graphics().p("EALQAonMAAAg4/IeEAAIAACgIB5AAMAAAA2fg");
	var mask_graphics_78 = new cjs.Graphics().p("EAMRAonMAAAg4/IdHAAIAACgIB1AAMAAAA2fg");
	var mask_graphics_79 = new cjs.Graphics().p("EANTAonMAAAg4/IcIAAIAACgIByAAMAAAA2fg");
	var mask_graphics_80 = new cjs.Graphics().p("EAOVAonMAAAg4/IbKAAIAACgIBuAAMAAAA2fg");
	var mask_graphics_81 = new cjs.Graphics().p("EAPXAonMAAAg4/IaMAAIAACgIBqAAMAAAA2fg");
	var mask_graphics_82 = new cjs.Graphics().p("EAQYAonMAAAg4/IZPAAIAACgIBmAAMAAAA2fg");
	var mask_graphics_83 = new cjs.Graphics().p("EARUAonMAAAg4/IYXAAIAACgIBiAAMAAAA2fg");
	var mask_graphics_84 = new cjs.Graphics().p("EASQAonMAAAg4/IXeAAIAACgIBfAAMAAAA2fg");
	var mask_graphics_85 = new cjs.Graphics().p("EATMAonMAAAg4/IWmAAIAACgIBbAAMAAAA2fg");
	var mask_graphics_86 = new cjs.Graphics().p("EAUIAonMAAAg4/IVtAAIAACgIBYAAMAAAA2fg");
	var mask_graphics_87 = new cjs.Graphics().p("EAVEAonMAAAg4/IU1AAIAACgIBUAAMAAAA2fg");
	var mask_graphics_88 = new cjs.Graphics().p("EAWAAonMAAAg4/IT8AAIAACgIBRAAMAAAA2fg");
	var mask_graphics_89 = new cjs.Graphics().p("EAW8AonMAAAg4/ITEAAIAACgIBNAAMAAAA2fg");
	var mask_graphics_90 = new cjs.Graphics().p("EAW8AonMAAAg4/ITEAAIAACgIBNAAMAAAA2fg");
	var mask_graphics_91 = new cjs.Graphics().p("EAW8AonMAAAg4/ITEAAIAACgIBNAAMAAAA2fg");
	var mask_graphics_92 = new cjs.Graphics().p("EAW8AonMAAAg4/ITEAAIAACgIBNAAMAAAA2fg");
	var mask_graphics_93 = new cjs.Graphics().p("EAW8AonMAAAg4/ITEAAIAACgIBNAAMAAAA2fg");
	var mask_graphics_94 = new cjs.Graphics().p("EAW8AonMAAAg4/ITEAAIAACgIBNAAMAAAA2fg");
	var mask_graphics_95 = new cjs.Graphics().p("EAW8AonMAAAg4/ITEAAIAACgIBNAAMAAAA2fg");
	var mask_graphics_96 = new cjs.Graphics().p("EAYSAonMAAAg4/IRzAAIAACgIBIAAMAAAA2fg");
	var mask_graphics_97 = new cjs.Graphics().p("EAZoAonMAAAg4/IQiAAIAACgIBDAAMAAAA2fg");
	var mask_graphics_98 = new cjs.Graphics().p("EAa+AonMAAAg4/IPRAAIAACgIA+AAMAAAA2fg");
	var mask_graphics_99 = new cjs.Graphics().p("EAcUAonMAAAg4/IOAAAIAACgIA5AAMAAAA2fg");
	var mask_graphics_100 = new cjs.Graphics().p("EAdqAonMAAAg4/IMvAAIAACgIA0AAMAAAA2fg");
	var mask_graphics_101 = new cjs.Graphics().p("EAdqAonMAAAg4/IMvAAIAACgIA0AAMAAAA2fg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_1,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_2,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_3,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_4,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_5,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_6,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_7,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_8,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_9,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_10,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_11,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_12,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_13,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_14,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_15,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_16,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_17,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_18,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_19,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_20,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_21,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_22,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_23,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_24,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_25,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_26,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_27,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_28,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_29,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_30,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_31,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_32,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_33,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_34,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_35,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_36,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_37,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_38,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_39,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_40,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_41,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_42,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_43,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_44,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_45,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_46,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_47,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_48,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_49,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_50,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_51,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_52,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_53,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_54,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_55,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_56,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_57,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_58,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_59,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_60,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_61,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_62,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_63,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_64,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_65,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_66,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_67,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_68,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_69,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_70,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_71,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_72,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_73,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_74,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_75,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_76,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_77,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_78,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_79,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_80,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_81,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_82,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_83,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_84,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_85,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_86,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_87,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_88,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_89,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_90,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_91,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_92,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_93,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_94,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_95,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_96,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_97,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_98,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_99,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_100,x:276.5,y:260}).wait(1).to({graphics:mask_graphics_101,x:276.5,y:260}).wait(9));

	// hand0_3.png
	this.instance_2 = new lib.hand0_3();
	this.instance_2.setTransform(333,328);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110));

	// hand0_2.png
	this.instance_3 = new lib.hand0_2();
	this.instance_3.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110));

	// hand0_6.png
	this.instance_4 = new lib.hand0_6();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));

	// Layer 3
	this.instance_5 = new lib.hand0_1();
	this.instance_5.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110));

	// Слой 13
	this.instance_6 = new lib.pillow();
	this.instance_6.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110));

	// body1
	this.instance_7 = new lib.back0_2_img();
	this.instance_7.setTransform(755,71);

	this.instance_8 = new lib.back0_1_img();
	this.instance_8.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,667.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,669), new cjs.Rectangle(-200,-90,1191,704.4), new cjs.Rectangle(-200,-90,1191,742.3), new cjs.Rectangle(-200,-90,1191,780.8), new cjs.Rectangle(-200,-90,1191,667.1)];


(lib.animation1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// instrument2
	this.instance = new lib.instrument2();
	this.instance.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:128.5,x:98.2,y:107},9).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// hand0_3.png
	this.instance_2 = new lib.hand0_3();
	this.instance_2.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// hand0_2.png
	this.instance_3 = new lib.hand0_2();
	this.instance_3.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// hand0_6.png
	this.instance_4 = new lib.hand0_6();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Layer 3
	this.instance_5 = new lib.hand0_1();
	this.instance_5.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// Слой 13
	this.instance_6 = new lib.pillow();
	this.instance_6.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// body1
	this.instance_7 = new lib.back0_2_img();
	this.instance_7.setTransform(755,71);

	this.instance_8 = new lib.back0_1_img();
	this.instance_8.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,667.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// instrument3
	this.instance = new lib.instrument3();
	this.instance.setTransform(408.4,512.9,1,1,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:425.8,y:477.9},6).to({x:408.8,y:508.9},6).to({x:425.8,y:477.9},6).to({x:408.8,y:508.9},6).to({x:383.8,y:708.9,alpha:0.012},9).to({_off:true},1).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// instrument2
	this.instance_2 = new lib.instrument2();
	this.instance_2.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmONWIAA6rIKbAAIAAEiICCAAIAAWJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:464,y:426.5}).wait(18).to({graphics:null,x:0,y:0}).wait(17));

	// hand0_4.png
	this.instance_3 = new lib.hand0_4();
	this.instance_3.setTransform(333,328);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},18).wait(17));

	// hand0_3.png
	this.instance_4 = new lib.hand0_3();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// hand0_2.png
	this.instance_5 = new lib.hand0_2();
	this.instance_5.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// hand0_6.png
	this.instance_6 = new lib.hand0_6();
	this.instance_6.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// Layer 3
	this.instance_7 = new lib.hand0_1();
	this.instance_7.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// Слой 13
	this.instance_8 = new lib.pillow();
	this.instance_8.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// body1
	this.instance_9 = new lib.back0_2_img();
	this.instance_9.setTransform(755,71);

	this.instance_10 = new lib.back0_1_img();
	this.instance_10.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,710.4);
p.frameBounds = [rect, new cjs.Rectangle(-200,-90,1191,704.4), new cjs.Rectangle(-200,-90,1191,698.7), new cjs.Rectangle(-200,-90,1191,692.8), new cjs.Rectangle(-200,-90,1191,686.9), new cjs.Rectangle(-200,-90,1191,681.2), new cjs.Rectangle(-200,-90,1191,675.4), new cjs.Rectangle(-200,-90,1191,680.5), new cjs.Rectangle(-200,-90,1191,685.7), new cjs.Rectangle(-200,-90,1191,690.8), new cjs.Rectangle(-200,-90,1191,696), new cjs.Rectangle(-200,-90,1191,701.2), new cjs.Rectangle(-200,-90,1191,706.4), new cjs.Rectangle(-200,-90,1191,701.2), new cjs.Rectangle(-200,-90,1191,696), new cjs.Rectangle(-200,-90,1191,690.8), new cjs.Rectangle(-200,-90,1191,685.7), new cjs.Rectangle(-200,-90,1191,680.5), new cjs.Rectangle(-200,-90,1191,675.4), new cjs.Rectangle(-200,-90,1191,680.5), new cjs.Rectangle(-200,-90,1191,685.7), new cjs.Rectangle(-200,-90,1191,690.8), new cjs.Rectangle(-200,-90,1191,696), new cjs.Rectangle(-200,-90,1191,701.2), new cjs.Rectangle(-200,-90,1191,706.4), new cjs.Rectangle(-200,-90,1191,728.6), new cjs.Rectangle(-200,-90,1191,750.8), new cjs.Rectangle(-200,-90,1191,773), new cjs.Rectangle(-200,-90,1191,795.3), new cjs.Rectangle(-200,-90,1191,817.4), new cjs.Rectangle(-200,-90,1191,839.7), new cjs.Rectangle(-200,-90,1191,861.9), new cjs.Rectangle(-200,-90,1191,884.2), new cjs.Rectangle(-200,-90,1191,906.5), new cjs.Rectangle(-200,-90,1191,667.1)];


(lib.animation1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// instrument3
	this.instance = new lib.instrument3();
	this.instance.setTransform(325.4,567.4,1,1,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:339.4,y:528.4},7).to({x:324.4,y:565.9},7).to({x:339.4,y:528.4},7).to({x:324.4,y:565.9},6).to({rotation:21.3,x:408.4,y:512.9},7).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// instrument2
	this.instance_2 = new lib.instrument2();
	this.instance_2.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AszNWIAA6rIXkAAIAAEiICCAAIAAWJg");
	var mask_graphics_21 = new cjs.Graphics().p("AmONWIAA6rIKbAAIAAEiICCAAIAAWJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:422,y:426.5}).wait(21).to({graphics:mask_graphics_21,x:464,y:426.5}).wait(14));

	// hand0_4.png
	this.instance_3 = new lib.hand0_4();
	this.instance_3.setTransform(333,328);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// hand0_3.png
	this.instance_4 = new lib.hand0_3();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// hand0_2.png
	this.instance_5 = new lib.hand0_2();
	this.instance_5.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// hand0_6.png
	this.instance_6 = new lib.hand0_6();
	this.instance_6.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// Layer 3
	this.instance_7 = new lib.hand0_1();
	this.instance_7.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// Слой 13
	this.instance_8 = new lib.pillow();
	this.instance_8.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// body1
	this.instance_9 = new lib.back0_2_img();
	this.instance_9.setTransform(755,71);

	this.instance_10 = new lib.back0_1_img();
	this.instance_10.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,764.3);
p.frameBounds = [rect, new cjs.Rectangle(-200,-90,1191,758.6), new cjs.Rectangle(-200,-90,1191,753), new cjs.Rectangle(-200,-90,1191,747.4), new cjs.Rectangle(-200,-90,1191,741.8), new cjs.Rectangle(-200,-90,1191,736.3), new cjs.Rectangle(-200,-90,1191,730.7), new cjs.Rectangle(-200,-90,1191,725.3), new cjs.Rectangle(-200,-90,1191,730.6), new cjs.Rectangle(-200,-90,1191,735.9), new cjs.Rectangle(-200,-90,1191,741.3), new cjs.Rectangle(-200,-90,1191,746.7), new cjs.Rectangle(-200,-90,1191,752), new cjs.Rectangle(-200,-90,1191,757.3), new cjs.Rectangle(-200,-90,1191,762.8), new cjs.Rectangle(-200,-90,1191,757.3), new cjs.Rectangle(-200,-90,1191,752), new cjs.Rectangle(-200,-90,1191,746.7), new cjs.Rectangle(-200,-90,1191,741.3), new cjs.Rectangle(-200,-90,1191,735.9), new cjs.Rectangle(-200,-90,1191,730.6), new cjs.Rectangle(-200,-90,1191,725.3), new cjs.Rectangle(-200,-90,1191,731.4), new cjs.Rectangle(-200,-90,1191,737.7), new cjs.Rectangle(-200,-90,1191,743.9), new cjs.Rectangle(-200,-90,1191,750.2), new cjs.Rectangle(-200,-90,1191,756.4), new cjs.Rectangle(-200,-90,1191,762.8), new cjs.Rectangle(-200,-90,1191,755.2), new cjs.Rectangle(-200,-90,1191,747.8), new cjs.Rectangle(-200,-90,1191,740.2), new cjs.Rectangle(-200,-90,1191,732.8), new cjs.Rectangle(-200,-90,1191,725.3), new cjs.Rectangle(-200,-90,1191,717.8), new cjs.Rectangle(-200,-90,1191,710.4)];


(lib.animation1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// instrument3
	this.instance = new lib.instrument3();
	this.instance.setTransform(276.4,587.4,1,1,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:291.4,y:539.4},7).to({x:277.4,y:583.4},7).to({x:291.4,y:539.4},8).to({x:277.4,y:583.4},8).to({x:325.4,y:567.4},4).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// instrument2
	this.instance_2 = new lib.instrument2();
	this.instance_2.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aw8NWIAA6rIf2AAIAAEiICCAAIAAWJg");
	var mask_graphics_22 = new cjs.Graphics().p("AszNWIAA6rIXkAAIAAEiICCAAIAAWJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:395.5,y:426.5}).wait(22).to({graphics:mask_graphics_22,x:422,y:426.5}).wait(13));

	// hand0_4.png
	this.instance_3 = new lib.hand0_4();
	this.instance_3.setTransform(333,328);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// hand0_3.png
	this.instance_4 = new lib.hand0_3();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// hand0_2.png
	this.instance_5 = new lib.hand0_2();
	this.instance_5.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// hand0_6.png
	this.instance_6 = new lib.hand0_6();
	this.instance_6.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// Layer 3
	this.instance_7 = new lib.hand0_1();
	this.instance_7.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// Слой 13
	this.instance_8 = new lib.pillow();
	this.instance_8.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// body1
	this.instance_9 = new lib.back0_2_img();
	this.instance_9.setTransform(755,71);

	this.instance_10 = new lib.back0_1_img();
	this.instance_10.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,784.3);
p.frameBounds = [rect, new cjs.Rectangle(-200,-90,1191,777.3), new cjs.Rectangle(-200,-90,1191,770.5), new cjs.Rectangle(-200,-90,1191,763.7), new cjs.Rectangle(-200,-90,1191,756.8), new cjs.Rectangle(-200,-90,1191,749.9), new cjs.Rectangle(-200,-90,1191,743.1), new cjs.Rectangle(-200,-90,1191,736.3), new cjs.Rectangle(-200,-90,1191,742.5), new cjs.Rectangle(-200,-90,1191,748.8), new cjs.Rectangle(-200,-90,1191,755.1), new cjs.Rectangle(-200,-90,1191,761.3), new cjs.Rectangle(-200,-90,1191,767.7), new cjs.Rectangle(-200,-90,1191,773.9), new cjs.Rectangle(-200,-90,1191,780.3), new cjs.Rectangle(-200,-90,1191,774.7), new cjs.Rectangle(-200,-90,1191,769.2), new cjs.Rectangle(-200,-90,1191,763.7), new cjs.Rectangle(-200,-90,1191,758.2), new cjs.Rectangle(-200,-90,1191,752.7), new cjs.Rectangle(-200,-90,1191,747.2), new cjs.Rectangle(-200,-90,1191,741.7), new cjs.Rectangle(-200,-90,1191,736.3), new cjs.Rectangle(-200,-90,1191,741.7), new cjs.Rectangle(-200,-90,1191,747.2), new cjs.Rectangle(-200,-90,1191,752.7), new cjs.Rectangle(-200,-90,1191,758.2), new cjs.Rectangle(-200,-90,1191,763.7), new cjs.Rectangle(-200,-90,1191,769.2), new cjs.Rectangle(-200,-90,1191,774.7), new cjs.Rectangle(-200,-90,1191,780.3), new cjs.Rectangle(-200,-90,1191,776.2), new cjs.Rectangle(-200,-90,1191,772.2), new cjs.Rectangle(-200,-90,1191,768.2), new cjs.Rectangle(-200,-90,1191,764.3)];


(lib.animation1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// instrument3
	this.instance = new lib.instrument3();
	this.instance.setTransform(228.4,538.4,1,1,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:242.4,y:484.4},7).to({x:230.4,y:530.4},7).to({x:242.4,y:484.4},7).to({x:230.4,y:530.4},7).to({x:276.4,y:587.4},6).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// instrument2
	this.instance_2 = new lib.instrument2();
	this.instance_2.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A23NWIAA6rMArtAAAIAAEiICCAAIAAWJg");
	var mask_graphics_21 = new cjs.Graphics().p("Aw8NWIAA6rIf2AAIAAEiICCAAIAAWJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:357.5,y:426.5}).wait(21).to({graphics:mask_graphics_21,x:395.5,y:426.5}).wait(14));

	// hand0_4.png
	this.instance_3 = new lib.hand0_4();
	this.instance_3.setTransform(333,328);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// hand0_3.png
	this.instance_4 = new lib.hand0_3();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// hand0_2.png
	this.instance_5 = new lib.hand0_2();
	this.instance_5.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// hand0_6.png
	this.instance_6 = new lib.hand0_6();
	this.instance_6.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// Layer 3
	this.instance_7 = new lib.hand0_1();
	this.instance_7.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// Слой 13
	this.instance_8 = new lib.pillow();
	this.instance_8.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// body1
	this.instance_9 = new lib.back0_2_img();
	this.instance_9.setTransform(755,71);

	this.instance_10 = new lib.back0_1_img();
	this.instance_10.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,735.3);
p.frameBounds = [rect, new cjs.Rectangle(-200,-90,1191,727.5), new cjs.Rectangle(-200,-90,1191,719.8), new cjs.Rectangle(-200,-90,1191,712.1), new cjs.Rectangle(-200,-90,1191,704.3), new cjs.Rectangle(-200,-90,1191,696.7), new cjs.Rectangle(-200,-90,1191,688.9), new cjs.Rectangle(-200,-90,1191,681.3), new cjs.Rectangle(-200,-90,1191,687.8), new cjs.Rectangle(-200,-90,1191,694.4), new cjs.Rectangle(-200,-90,1191,700.9), new cjs.Rectangle(-200,-90,1191,707.5), new cjs.Rectangle(-200,-90,1191,714.1), new cjs.Rectangle(-200,-90,1191,720.7), new cjs.Rectangle(-200,-90,1191,727.3), new cjs.Rectangle(-200,-90,1191,720.7), new cjs.Rectangle(-200,-90,1191,714.1), new cjs.Rectangle(-200,-90,1191,707.5), new cjs.Rectangle(-200,-90,1191,700.9), new cjs.Rectangle(-200,-90,1191,694.4), new cjs.Rectangle(-200,-90,1191,687.8), new cjs.Rectangle(-200,-90,1191,681.3), new cjs.Rectangle(-200,-90,1191,687.8), new cjs.Rectangle(-200,-90,1191,694.4), new cjs.Rectangle(-200,-90,1191,700.9), new cjs.Rectangle(-200,-90,1191,707.5), new cjs.Rectangle(-200,-90,1191,714.1), new cjs.Rectangle(-200,-90,1191,720.7), new cjs.Rectangle(-200,-90,1191,727.3), new cjs.Rectangle(-200,-90,1191,736.7), new cjs.Rectangle(-200,-90,1191,746.2), new cjs.Rectangle(-200,-90,1191,755.7), new cjs.Rectangle(-200,-90,1191,765.2), new cjs.Rectangle(-200,-90,1191,774.7), new cjs.Rectangle(-200,-90,1191,784.3)];


(lib.animation1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// instrument3
	this.instance = new lib.instrument3();
	this.instance.setTransform(107.4,226.4,1,1,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:162.4,y:199.4},7).to({x:125.4,y:212.4},6).to({x:162.4,y:199.4},6).to({x:125.4,y:212.4},6).to({rotation:18.5,x:228.4,y:538.4},9).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// instrument2
	this.instance_2 = new lib.instrument2();
	this.instance_2.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("A23NWIAA6rMArtAAAIAAEiICCAAIAAWJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:357.5,y:426.5}).wait(17));

	// hand0_4.png
	this.instance_3 = new lib.hand0_4();
	this.instance_3.setTransform(333,328);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// hand0_3.png
	this.instance_4 = new lib.hand0_3();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// hand0_2.png
	this.instance_5 = new lib.hand0_2();
	this.instance_5.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// hand0_6.png
	this.instance_6 = new lib.hand0_6();
	this.instance_6.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// Layer 3
	this.instance_7 = new lib.hand0_1();
	this.instance_7.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// Слой 13
	this.instance_8 = new lib.pillow();
	this.instance_8.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// body1
	this.instance_9 = new lib.back0_2_img();
	this.instance_9.setTransform(755,71);

	this.instance_10 = new lib.back0_1_img();
	this.instance_10.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,667.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,699.9), new cjs.Rectangle(-200,-90,1191,735.3)];


(lib.animation1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// instrument3
	this.instance = new lib.instrument3();
	this.instance.setTransform(595.5,506,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:69.5,x:107.4,y:226.4},9).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// instrument2
	this.instance_2 = new lib.instrument2();
	this.instance_2.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// hand0_4.png
	this.instance_3 = new lib.hand0_4();
	this.instance_3.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// hand0_3.png
	this.instance_4 = new lib.hand0_3();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// hand0_2.png
	this.instance_5 = new lib.hand0_2();
	this.instance_5.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// hand0_6.png
	this.instance_6 = new lib.hand0_6();
	this.instance_6.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Layer 3
	this.instance_7 = new lib.hand0_1();
	this.instance_7.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 13
	this.instance_8 = new lib.pillow();
	this.instance_8.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// body1
	this.instance_9 = new lib.back0_2_img();
	this.instance_9.setTransform(755,71);

	this.instance_10 = new lib.back0_1_img();
	this.instance_10.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,678.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,-90,1191,667.1), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// instrument1
	this.instance = new lib.instrument1();
	this.instance.setTransform(145,217.9,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:181,y:201.9},4).to({x:164,y:241.9},5).to({x:181,y:211.9},5).to({rotation:135,x:209,y:414.8},10).to({x:180,y:388.3},5).to({x:220,y:421.2},5).to({x:180,y:388.3},6).to({x:220,y:421.2},5).to({rotation:120,x:256,y:473.2},10).to({x:287,y:489.2},6).to({x:256,y:473.2},5).to({x:287,y:489.2},6).to({x:256,y:473.2},5).to({rotation:105,x:311,y:469.2},7).to({x:356,y:482.2},6).to({x:311,y:469.2},6).to({x:356,y:482.2},7).to({rotation:90,x:392,y:434.2},7).to({x:435},6).to({x:392},6).to({x:435},6).to({x:392},7).to({x:435},6).to({rotation:60,x:341,y:666.2,alpha:0.52},7).to({_off:true},1).wait(1));

	// instrument4
	this.instance_1 = new lib.instrument4();
	this.instance_1.setTransform(719.7,467.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// instrument3
	this.instance_2 = new lib.instrument3();
	this.instance_2.setTransform(595.5,506,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// instrument2
	this.instance_3 = new lib.instrument2();
	this.instance_3.setTransform(506.5,483.7,0.8,0.8,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

	// hand0_5.png
	this.instance_4 = new lib.hand0_5();
	this.instance_4.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({alpha:0.012},137).wait(9));

	// hand0_4.png
	this.instance_5 = new lib.hand0_4();
	this.instance_5.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150));

	// hand0_3.png
	this.instance_6 = new lib.hand0_3();
	this.instance_6.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150));

	// hand0_2.png
	this.instance_7 = new lib.hand0_2();
	this.instance_7.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150));

	// hand0_6.png
	this.instance_8 = new lib.hand0_6();
	this.instance_8.setTransform(333,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150));

	// Layer 3
	this.instance_9 = new lib.hand0_1();
	this.instance_9.setTransform(448,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

	// Слой 13
	this.instance_10 = new lib.pillow();
	this.instance_10.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150));

	// body1
	this.instance_11 = new lib.back0_2_img();
	this.instance_11.setTransform(755,71);

	this.instance_12 = new lib.back0_1_img();
	this.instance_12.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,1191,678.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90,1191,702.3), new cjs.Rectangle(-200,-90,1191,742.1), new cjs.Rectangle(-200,-90,1191,781.6), new cjs.Rectangle(-200,-90,1191,820.9), new cjs.Rectangle(-200,-90,1191,678.1)];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.title_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
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
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.slider_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// band
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvnATIAAglIfOAAIAAAlg");
	this.shape.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// title
	this.instance = new lib.slider_4_mc();
	this.instance.setTransform(150.1,0,0.65,0.4,0,0,0,0.1,0);

	this.instance_1 = new lib.slider_4_mc();
	this.instance_1.setTransform(50.1,0,0.65,0.4,0,0,0,0.1,0);

	this.instance_2 = new lib.slider_4_mc();
	this.instance_2.setTransform(100,0,1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-6,200,12);
p.frameBounds = [rect];


(lib.slider_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.1
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
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
		var slider_mc = this.slider_mc;
		slider_mc.gotoAndStop(0);
		slider_mc.mouseChildren = false;
		slider_mc.mouseEnabled = false;
		/*
		
		*/
		var band_mc = this.band_mc;
		band_mc.gotoAndStop(0);
		band_mc.mouseChildren = false;
		band_mc.mouseEnabled = false;
		band_mc.x = 0;
		band_mc.y = 0;
		/*
		
		*/
		var bounds = band_mc.getBounds();
		/*
		
		*/
		var hitAreaSlider_mc = this.hitAreaSlider_mc;
		hitAreaSlider_mc.gotoAndStop(0);
		hitAreaSlider_mc.addEventListener("mousedown", _onMouseDownSliderFunc, false);
		hitAreaSlider_mc.addEventListener("pressup", _onPressUpSliderFunc, false);
		function _onMouseDownSliderFunc(event)
		{
			hitAreaSlider_mc.addEventListener("pressmove", _onPressMoveSliderFunc, false);
		}
		function _onPressUpSliderFunc(event)
		{
			hitAreaSlider_mc.removeEventListener("pressmove", _onPressMoveSliderFunc, false);
		}
		function _onPressMoveSliderFunc(event)
		{
			_updateValueFunc(event.localX / bounds.width);
		}
		/*
		
		*/
		function _updateSliderFunc()
		{
			slider_mc.x = bounds.width * _value_num;
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
			else if(value_num > 1)
			{
				value_num = 1;
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateSliderFunc();
			/*
			
			*/
			var user_event = new createjs.Event("change_slider");
			user_event.numberValue = _trimNumberFunc(_value_num);
			_that.dispatchEvent(user_event);
		}
		/*
		
		*/
		function _getValueFunc()
		{
			return _trimNumberFunc(_value_num);
		}
		/*
		
		*/
		function _trimNumberFunc(number_num, dec_num)
		{
			/*
			
			*/
			if(dec_num === undefined)
			{
				dec_num = 2;
			}
			else
			{
				dec_num = Number(dec_num);
			}
			/*
			
			*/
			var result_num = number_num;
			/*
			
			*/
			if(dec_num >= 0)
			{
				var temp_num = Math.pow(10, dec_num);
				result_num = Math.round(number_num * temp_num) / temp_num;
			}
			/*
			
			*/
			return result_num;
		}
		/*
		
		*/
		_updateValueFunc(_value_num);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// slider
	this.slider_mc = new lib.slider_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.slider_mc).wait(1));

	// band
	this.band_mc = new lib.slider_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.band_mc).wait(1));

	// area
	this.hitAreaSlider_mc = new lib.slider_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hitAreaSlider_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,240,40);
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


(lib.thirdNail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.thirdNail_1_mc();
	this.body_1_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_2_mc = new lib.thirdNail_2_mc();
	this.body_2_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_3_mc = new lib.thirdNail_3_mc();
	this.body_3_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_4_mc = new lib.thirdNail_4_mc();
	this.body_4_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-53.7,51.9,101.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.secondNail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.secondNail_1_mc();
	this.body_1_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_2_mc = new lib.secondNail_2_mc();
	this.body_2_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_3_mc = new lib.secondNail_3_mc();
	this.body_3_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_4_mc = new lib.secondNail_4_mc();
	this.body_4_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-53.7,51.9,101.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.ring_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.ring_6_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.ring_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.ring_5_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.ring_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.ring_4_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.ring_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.ring_3_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.ring_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.ring_2_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.ring_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.ring_1_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
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


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.813,0.813,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-206.3,381.8,412.7);
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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-316.8,-206.3,381.8,412.7);
p.frameBounds = [rect];


(lib.mehendi_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.mehendi_6_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.mehendi_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.mehendi_5_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.mehendi_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.mehendi_4_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.mehendi_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.mehendi_3_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.mehendi_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.mehendi_2_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.mehendi_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.mehendi_1_img();
	this.instance.setTransform(-110,-110,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_mehendi_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(95,110,0.667,0.667);

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(108,112.8,0.007,0.007,0,0,0,7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	// graph
	this.instance_2 = new lib.location_0_3_img();
	this.instance_2.setTransform(-130,-165);

	this.instance_3 = new lib.location_1_3_img();
	this.instance_3.setTransform(-130,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-165,260,330);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-165,265,330)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(95,110,0.667,0.667);

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(108,112.8,0.007,0.007,0,0,0,7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	// graph
	this.instance_2 = new lib.location_0_2_img();
	this.instance_2.setTransform(-130,-165);

	this.instance_3 = new lib.location_1_2_img();
	this.instance_3.setTransform(-130,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-165,260,330);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-165,265,330)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(95,110,0.667,0.667);

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(108,112.8,0.007,0.007,0,0,0,7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	// graph
	this.instance_2 = new lib.location_0_1_img();
	this.instance_2.setTransform(-130,-165);

	this.instance_3 = new lib.location_1_1_img();
	this.instance_3.setTransform(-130,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-165,260,330);
p.frameBounds = [rect, rect, new cjs.Rectangle(-130,-165,265,330)];


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


(lib.horizontal_gallery_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slider
	this.slider_comp = new lib.slider_2_mc();
	this.slider_comp.setTransform(-320,130,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.slider_comp).wait(1));

	// container
	this.container_mc = new lib.horizontal_gallery_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,420);
p.frameBounds = [rect];


(lib.horizontal_gallery_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slider
	this.slider_comp = new lib.slider_2_mc();
	this.slider_comp.setTransform(-320,130,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.slider_comp).wait(1));

	// container
	this.container_mc = new lib.horizontal_gallery_4_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,420);
p.frameBounds = [rect];


(lib.horizontal_gallery_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slider
	this.slider_comp = new lib.slider_2_mc();
	this.slider_comp.setTransform(-320,130,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.slider_comp).wait(1));

	// container
	this.container_mc = new lib.horizontal_gallery_4_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,420);
p.frameBounds = [rect];


(lib.horizontal_gallery_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slider
	this.slider_comp = new lib.slider_2_mc();
	this.slider_comp.setTransform(-320,130,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.slider_comp).wait(1));

	// container
	this.container_mc = new lib.horizontal_gallery_4_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,420);
p.frameBounds = [rect];


(lib.horizontal_gallery_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slider
	this.slider_comp = new lib.slider_2_mc();
	this.slider_comp.setTransform(-320,130,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.slider_comp).wait(1));

	// container
	this.container_mc = new lib.horizontal_gallery_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395.5,-270,395.5,420);
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


(lib.fourthNail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.fourthNail_1_mc();
	this.body_1_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_2_mc = new lib.fourthNail_2_mc();
	this.body_2_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_3_mc = new lib.fourthNail_3_mc();
	this.body_3_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_4_mc = new lib.fourthNail_4_mc();
	this.body_4_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-53.7,51.9,101.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.firstNail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.firstNail_1_mc();
	this.body_1_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_2_mc = new lib.firstNail_2_mc();
	this.body_2_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_3_mc = new lib.firstNail_3_mc();
	this.body_3_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_4_mc = new lib.firstNail_4_mc();
	this.body_4_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-53.7,51.9,101.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.fifthNail_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.fifthNail_1_mc();
	this.body_1_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_2_mc = new lib.fifthNail_2_mc();
	this.body_2_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_3_mc = new lib.fifthNail_3_mc();
	this.body_3_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.body_4_mc = new lib.fifthNail_4_mc();
	this.body_4_mc.setTransform(-0.1,-3,1,1,0,0,0,-0.1,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-53.7,51.9,101.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.mehendi_0 = new lib.mehendi_0_mc();
	this.mehendi_0.setTransform(190,-230);

	this.ring_0 = new lib.ring_0_mc();
	this.ring_0.setTransform(190,-230);

	this.bracelet_0 = new lib.bracelet_0_mc();
	this.bracelet_0.setTransform(190,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mehendi_0}]}).to({state:[{t:this.ring_0}]},1).to({state:[{t:this.bracelet_0}]},1).wait(1));

	// options
	this.mehendi_6 = new lib.mehendi_6_mc();
	this.mehendi_6.setTransform(290,190);

	this.mehendi_5 = new lib.mehendi_5_mc();
	this.mehendi_5.setTransform(240,30);

	this.mehendi_4 = new lib.mehendi_4_mc();
	this.mehendi_4.setTransform(290,-130);

	this.mehendi_3 = new lib.mehendi_3_mc();
	this.mehendi_3.setTransform(-290,190);

	this.mehendi_2 = new lib.mehendi_2_mc();
	this.mehendi_2.setTransform(-240,30);

	this.mehendi_1 = new lib.mehendi_1_mc();
	this.mehendi_1.setTransform(-290,-130);

	this.ring_6 = new lib.ring_6_mc();
	this.ring_6.setTransform(290,190);

	this.ring_5 = new lib.ring_5_mc();
	this.ring_5.setTransform(240,30);

	this.ring_4 = new lib.ring_4_mc();
	this.ring_4.setTransform(290,-130);

	this.ring_3 = new lib.ring_3_mc();
	this.ring_3.setTransform(-290,190);

	this.ring_2 = new lib.ring_2_mc();
	this.ring_2.setTransform(-240,30);

	this.ring_1 = new lib.ring_1_mc();
	this.ring_1.setTransform(-290,-130);

	this.bracelet_6 = new lib.bracelet_6_mc();
	this.bracelet_6.setTransform(290,190);

	this.bracelet_5 = new lib.bracelet_5_mc();
	this.bracelet_5.setTransform(240,30);

	this.bracelet_4 = new lib.bracelet_4_mc();
	this.bracelet_4.setTransform(290,-130);

	this.bracelet_3 = new lib.bracelet_3_mc();
	this.bracelet_3.setTransform(-290,190);

	this.bracelet_2 = new lib.bracelet_2_mc();
	this.bracelet_2.setTransform(-240,30);

	this.bracelet_1 = new lib.bracelet_1_mc();
	this.bracelet_1.setTransform(-290,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mehendi_1},{t:this.mehendi_2},{t:this.mehendi_3},{t:this.mehendi_4},{t:this.mehendi_5},{t:this.mehendi_6}]}).to({state:[{t:this.ring_1},{t:this.ring_2},{t:this.ring_3},{t:this.ring_4},{t:this.ring_5},{t:this.ring_6}]},1).to({state:[{t:this.bracelet_1},{t:this.bracelet_2},{t:this.bracelet_3},{t:this.bracelet_4},{t:this.bracelet_5},{t:this.bracelet_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-260,800,560);
p.frameBounds = [rect, rect, rect];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-260,800,560);
p.frameBounds = [rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,-100);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(49).to({y:0},0).to({y:-100,alpha:1},10).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(250,30);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(34).to({x:0,y:0},0).to({x:250,y:30,alpha:1},15).wait(11));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,30);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({x:0,y:0},0).to({x:-250,y:30,alpha:1},15).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-265,760,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-130,-265,510,460), new cjs.Rectangle(-146.6,-265,526.7,460), new cjs.Rectangle(-163.3,-265,543.4,460), new cjs.Rectangle(-180,-265,560,460), new cjs.Rectangle(-196.6,-265,576.7,460), new cjs.Rectangle(-213.3,-265,593.4,460), new cjs.Rectangle(-230,-265,610,460), new cjs.Rectangle(-246.6,-265,626.7,460), new cjs.Rectangle(-263.3,-265,643.4,460), new cjs.Rectangle(-280,-265,660,460), new cjs.Rectangle(-296.6,-265,676.7,460), new cjs.Rectangle(-313.3,-265,693.4,460), new cjs.Rectangle(-330,-265,710,460), new cjs.Rectangle(-346.6,-265,726.7,460), new cjs.Rectangle(-363.3,-265,743.4,460), new cjs.Rectangle(-380,-265,510,460), new cjs.Rectangle(-380,-265,526.7,460), new cjs.Rectangle(-380,-265,543.4,460), new cjs.Rectangle(-380,-265,560,460), new cjs.Rectangle(-380,-265,576.7,460), new cjs.Rectangle(-380,-265,593.4,460), new cjs.Rectangle(-380,-265,610,460), new cjs.Rectangle(-380,-265,626.7,460), new cjs.Rectangle(-380,-265,643.4,460), new cjs.Rectangle(-380,-265,660,460), new cjs.Rectangle(-380,-265,676.7,460), new cjs.Rectangle(-380,-265,693.4,460), new cjs.Rectangle(-380,-265,710,460), new cjs.Rectangle(-380,-265,726.7,460), new cjs.Rectangle(-380,-265,743.4,460), new cjs.Rectangle(-380,-165,760,360), new cjs.Rectangle(-380,-175,760,370), new cjs.Rectangle(-380,-185,760,380), new cjs.Rectangle(-380,-195,760,390), new cjs.Rectangle(-380,-205,760,400), new cjs.Rectangle(-380,-215,760,410), new cjs.Rectangle(-380,-225,760,420), new cjs.Rectangle(-380,-235,760,430), new cjs.Rectangle(-380,-245,760,440), new cjs.Rectangle(-380,-255,760,450), new cjs.Rectangle(-380,-265,760,460)];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-100);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(39).to({y:-500,alpha:1},0).to({y:-50},12).to({y:-100},3).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,30);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({y:500,alpha:1},0).to({y:-20},12).to({y:30},3).wait(21));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,30);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({y:500,alpha:1},0).to({y:-20},12).to({y:30},3).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-265,760,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-265,760,930), new cjs.Rectangle(-380,-265,760,886.7), new cjs.Rectangle(-380,-265,760,843.4), new cjs.Rectangle(-380,-265,760,800), new cjs.Rectangle(-380,-265,760,756.7), new cjs.Rectangle(-380,-265,760,713.4), new cjs.Rectangle(-380,-265,760,670), new cjs.Rectangle(-380,-265,760,626.7), new cjs.Rectangle(-380,-265,760,583.4), new cjs.Rectangle(-380,-265,760,540), new cjs.Rectangle(-380,-265,760,930), new cjs.Rectangle(-380,-265,760,886.7), new cjs.Rectangle(-380,-265,760,843.4), new cjs.Rectangle(-380,-265,760,800), new cjs.Rectangle(-380,-265,760,756.7), new cjs.Rectangle(-380,-265,760,713.4), new cjs.Rectangle(-380,-265,760,670), new cjs.Rectangle(-380,-265,760,626.7), new cjs.Rectangle(-380,-265,760,583.4), new cjs.Rectangle(-380,-265,760,540), new cjs.Rectangle(-380,-665,760,896.7), new cjs.Rectangle(-380,-627.5,760,822.5), new cjs.Rectangle(-380,-590,760,785), new cjs.Rectangle(-380,-552.5,760,747.5), new cjs.Rectangle(-380,-515,760,710), new cjs.Rectangle(-380,-477.5,760,672.5), new cjs.Rectangle(-380,-440,760,635), new cjs.Rectangle(-380,-402.5,760,597.5), new cjs.Rectangle(-380,-365,760,560), new cjs.Rectangle(-380,-327.5,760,522.5), new cjs.Rectangle(-380,-290,760,485), new cjs.Rectangle(-380,-252.5,760,447.5), new cjs.Rectangle(-380,-215,760,410), new cjs.Rectangle(-380,-231.6,760,426.7), new cjs.Rectangle(-380,-248.3,760,443.4), new cjs.Rectangle(-380,-265,760,460)];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(0,-100);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(39).to({scaleX:0.85,scaleY:0.85},0).to({scaleX:1.08,scaleY:1.08,alpha:0.738},11).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-250,30);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(19).to({scaleX:0.85,scaleY:0.85},0).to({regX:-0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:-250.1,y:30.1,alpha:0.738},11).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-250,y:30,alpha:1},4).wait(21));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,30);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({scaleX:0.85,scaleY:0.85},0).to({regX:0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:250.1,y:30.1,alpha:0.738},11).to({regX:0,regY:0,scaleX:1,scaleY:1,x:250,y:30,alpha:1},4).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-265,760,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-265,740,460), new cjs.Rectangle(-362.7,-265,742.7,460), new cjs.Rectangle(-365.4,-265,745.5,460), new cjs.Rectangle(-368.2,-265,748.2,460), new cjs.Rectangle(-370.9,-265,751,460), new cjs.Rectangle(-373.6,-265,753.7,460), new cjs.Rectangle(-376.4,-265,756.4,460), new cjs.Rectangle(-379,-265,759.1,460), new cjs.Rectangle(-381.8,-265,761.9,462.4), new cjs.Rectangle(-384.6,-265,764.7,465.9), new cjs.Rectangle(-387.3,-265,747.4,469.3), new cjs.Rectangle(-390,-265,752.8,472.7), new cjs.Rectangle(-387.4,-265,752.9,469.6), new cjs.Rectangle(-384.9,-265,753.2,466.4), new cjs.Rectangle(-382.4,-265,753.3,463.2), new cjs.Rectangle(-380,-265,753.7,460), new cjs.Rectangle(-380,-265,756.4,460), new cjs.Rectangle(-380,-265,759.1,460), new cjs.Rectangle(-380,-265,761.9,462.4), new cjs.Rectangle(-380,-265,764.7,465.9), new cjs.Rectangle(-380,-239.6,767.4,443.9), new cjs.Rectangle(-380,-243,770,450.8), new cjs.Rectangle(-380,-246.5,767.5,451.1), new cjs.Rectangle(-380,-249.9,765,451.3), new cjs.Rectangle(-380,-253.4,762.4,451.6), new cjs.Rectangle(-380,-256.9,760,451.9), new cjs.Rectangle(-380,-260.4,760,455.4), new cjs.Rectangle(-380,-263.8,760,458.9), new cjs.Rectangle(-380,-267.3,760,462.3), new cjs.Rectangle(-380,-270.8,760,465.8), new cjs.Rectangle(-380,-274.2,760,469.3), new cjs.Rectangle(-380,-277.7,760,472.7), new cjs.Rectangle(-380,-274.5,760,469.5), new cjs.Rectangle(-380,-271.2,760,466.3), new cjs.Rectangle(-380,-268.1,760,463.1), new cjs.Rectangle(-380,-265,760,460)];


(lib.animation1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));

	// pointer
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(397,490,1,1,45);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(23).to({_off:false},0).to({scaleX:1.06,scaleY:1.06,alpha:1},8).to({scaleX:1,scaleY:1,y:507},2).wait(1));

	// instrument4
	this.instance = new lib.instrument4();
	this.instance.setTransform(719.7,705.8,0.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:467.8},6).to({y:453.8},2).to({y:467.8},2).wait(1));

	// instrument3
	this.instance_1 = new lib.instrument3();
	this.instance_1.setTransform(595.5,744,0.8,0.8,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({y:506},6).to({y:492},2).to({y:506},2).wait(1));

	// instrument2
	this.instance_2 = new lib.instrument2();
	this.instance_2.setTransform(506.5,721.7,0.8,0.8,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({y:483.7},6).to({y:469.7},2).to({y:483.7},2).wait(1));

	// instrument1
	this.instance_3 = new lib.instrument1();
	this.instance_3.setTransform(402,748.9,0.8,0.8,45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({y:510.9},6).to({y:496.9},2).to({y:510.9},2).wait(1));

	// hand0_5.png
	this.instance_4 = new lib.hand0_5();
	this.instance_4.setTransform(422,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({x:333,y:328},8).wait(11));

	// hand0_4.png
	this.instance_5 = new lib.hand0_4();
	this.instance_5.setTransform(422,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({x:333,y:328},8).wait(11));

	// hand0_3.png
	this.instance_6 = new lib.hand0_3();
	this.instance_6.setTransform(422,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({x:333,y:328},8).wait(11));

	// hand0_2.png
	this.instance_7 = new lib.hand0_2();
	this.instance_7.setTransform(422,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({x:333,y:328},8).wait(11));

	// hand0_6.png
	this.instance_8 = new lib.hand0_6();
	this.instance_8.setTransform(422,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({x:333,y:328},8).wait(11));

	// Layer 3
	this.instance_9 = new lib.hand0_1();
	this.instance_9.setTransform(537,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({x:448,y:205.5},8).wait(11));

	// Слой 13
	this.instance_10 = new lib.pillow();
	this.instance_10.setTransform(394,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34));

	// body1
	this.instance_11 = new lib.back0_2_img();
	this.instance_11.setTransform(755,71);

	this.instance_12 = new lib.back0_1_img();
	this.instance_12.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-595,1191,1070);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-531.9,1191,1006.9), new cjs.Rectangle(-200,-468.7,1191,943.7), new cjs.Rectangle(-200,-405.6,1191,880.6), new cjs.Rectangle(-200,-342.5,1191,817.5), new cjs.Rectangle(-200,-279.4,1191,754.3), new cjs.Rectangle(-200,-216.3,1191,691.3), new cjs.Rectangle(-200,-153.1,1191,628.1), new cjs.Rectangle(-200,-90,1191,916.1), new cjs.Rectangle(-200,-90,1191,876.4), new cjs.Rectangle(-200,-90,1191,836.7), new cjs.Rectangle(-200,-90,1191,797), new cjs.Rectangle(-200,-90,1191,757.3), new cjs.Rectangle(-200,-90,1191,717.7), new cjs.Rectangle(-200,-90,1191,678.1), new cjs.Rectangle(-200,-90,1191,670.9), new cjs.Rectangle(-200,-90,1191,664.1), new cjs.Rectangle(-200,-90,1191,670.9), new cjs.Rectangle(-200,-90,1191,678.1)];


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
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2});

	// body
	this.body_1_mc = new lib.body_locations_1_mc();

	this.body_2_mc = new lib.body_locations_2_mc();

	this.body_3_mc = new lib.body_locations_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-265,760,460);
p.frameBounds = [rect, rect, rect];


(lib.thirdNail_icon_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_4_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.thirdNail_icon_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_3_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.thirdNail_icon_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_2_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.thirdNail_icon_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_1_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.secondNail_icon_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_4_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.secondNail_icon_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_3_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.secondNail_icon_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_2_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.secondNail_icon_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_1_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
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


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bracelet
	this.bracelet = new lib.braslet_all();
	this.bracelet.setTransform(-18,250.4);

	this.timeline.addTween(cjs.Tween.get(this.bracelet).wait(1));

	// ring
	this.ring = new lib.ring_all();
	this.ring.setTransform(-60.8,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.ring).wait(1));

	// fifthNail
	this.fifthNail = new lib.fifthNail_mc();
	this.fifthNail.setTransform(114.1,-96.8,0.436,0.629,19.2);

	this.timeline.addTween(cjs.Tween.get(this.fifthNail).wait(1));

	// firstNail
	this.firstNail = new lib.firstNail_mc();
	this.firstNail.setTransform(-107.7,-173.8,0.415,0.415,1.8);

	this.timeline.addTween(cjs.Tween.get(this.firstNail).wait(1));

	// fourthNail
	this.fourthNail = new lib.fourthNail_mc();
	this.fourthNail.setTransform(26.3,-253.3,0.534,0.534,-3);

	this.timeline.addTween(cjs.Tween.get(this.fourthNail).wait(1));

	// secondNail
	this.secondNail = new lib.secondNail_mc();
	this.secondNail.setTransform(-55.8,-239.1,0.534,0.534,2);

	this.timeline.addTween(cjs.Tween.get(this.secondNail).wait(1));

	// thirdNail
	this.thirdNail = new lib.thirdNail_mc();
	this.thirdNail.setTransform(-16.6,-279.9,0.593,0.593);

	this.timeline.addTween(cjs.Tween.get(this.thirdNail).wait(1));

	// mehendi
	this.mehendi = new lib.hand1_meh();

	this.timeline.addTween(cjs.Tween.get(this.mehendi).wait(1));

	// body
	this.instance = new lib.hand1_img();
	this.instance.setTransform(-124.5,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.5,-311.7,260,607.7);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fifthNail
	this.fifthNail = new lib.fifthNail_mc();
	this.fifthNail.setTransform(184.4,63.6,0.735,1.061,19.2);

	this.timeline.addTween(cjs.Tween.get(this.fifthNail).wait(1));

	// firstNail
	this.firstNail = new lib.firstNail_mc();
	this.firstNail.setTransform(-189.6,-66.4,0.7,0.7,1.8);

	this.timeline.addTween(cjs.Tween.get(this.firstNail).wait(1));

	// fourthNail
	this.fourthNail = new lib.fourthNail_mc();
	this.fourthNail.setTransform(36.4,-200.4,0.9,0.9,-3);

	this.timeline.addTween(cjs.Tween.get(this.fourthNail).wait(1));

	// secondNail
	this.secondNail = new lib.secondNail_mc();
	this.secondNail.setTransform(-102.1,-176.4,0.9,0.9,2);

	this.timeline.addTween(cjs.Tween.get(this.secondNail).wait(1));

	// thirdNail
	this.thirdNail = new lib.thirdNail_mc();
	this.thirdNail.setTransform(-36.1,-245.2);

	this.timeline.addTween(cjs.Tween.get(this.thirdNail).wait(1));

	// body
	this.instance = new lib.hand2();
	this.instance.setTransform(-8.1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-219.1,-298.9,439.5,593.3);
p.frameBounds = [rect];


(lib.fourthNaill_icon_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_4_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.fourthNail_icon_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_3_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.fourthNail_icon_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_2_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.fourthNail_icon_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_1_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.firstNail_icon_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_4_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.firstNail_icon_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_3_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.firstNail_icon_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_2_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.firstNail_icon_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_1_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
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


(lib.fifthNail_icon_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_4_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.fifthNail_icon_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_3_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.fifthNail_icon_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_2_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.fifthNail_icon_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.instrument1_1_img();
	this.instance.setTransform(92.2,-42.3,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_instrument_mc();
	this.instance_1.setTransform(0,0,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxzgEMAhLgI5ICcJCMghLAI5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-57.4,228.1,114.9);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(100,230);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-100,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-450,800,886.4);
p.frameBounds = [rect];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-235,-100,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).to({_off:true},1).wait(14));

	// options
	this.firstNail_4 = new lib.firstNail_icon_4_mc();
	this.firstNail_4.setTransform(-220,120);

	this.firstNail_3 = new lib.firstNail_icon_3_mc();
	this.firstNail_3.setTransform(-220,60);

	this.firstNail_2 = new lib.firstNail_icon_2_mc();
	this.firstNail_2.setTransform(-220,0);

	this.firstNail_1 = new lib.firstNail_icon_1_mc();
	this.firstNail_1.setTransform(-220,-60);

	this.color_firstNail = new lib.color_picker_1_mc();

	this.texture_firstNail = new lib.horizontal_gallery_1_mc();

	this.secondNail_4 = new lib.secondNail_icon_4_mc();
	this.secondNail_4.setTransform(-220,120);

	this.secondNail_3 = new lib.secondNail_icon_3_mc();
	this.secondNail_3.setTransform(-220,60);

	this.secondNail_2 = new lib.secondNail_icon_2_mc();
	this.secondNail_2.setTransform(-220,0);

	this.secondNail_1 = new lib.secondNail_icon_1_mc();
	this.secondNail_1.setTransform(-220,-60);

	this.color_secondNail = new lib.color_picker_2_mc();

	this.texture_secondNail = new lib.horizontal_gallery_1_2_mc();

	this.thirdNail_4 = new lib.thirdNail_icon_4_mc();
	this.thirdNail_4.setTransform(-220,120);

	this.thirdNail_3 = new lib.thirdNail_icon_3_mc();
	this.thirdNail_3.setTransform(-220,60);

	this.thirdNail_2 = new lib.thirdNail_icon_2_mc();
	this.thirdNail_2.setTransform(-220,0);

	this.thirdNail_1 = new lib.thirdNail_icon_1_mc();
	this.thirdNail_1.setTransform(-220,-60);

	this.color_thirdNail = new lib.color_picker_3_mc();

	this.texture_thirdNail = new lib.horizontal_gallery_1_3_mc();

	this.fourthNail_4 = new lib.fourthNaill_icon_4_mc();
	this.fourthNail_4.setTransform(-220,120);

	this.fourthNail_3 = new lib.fourthNail_icon_3_mc();
	this.fourthNail_3.setTransform(-220,60);

	this.fourthNail_2 = new lib.fourthNail_icon_2_mc();
	this.fourthNail_2.setTransform(-220,0);

	this.fourthNail_1 = new lib.fourthNail_icon_1_mc();
	this.fourthNail_1.setTransform(-220,-60);

	this.color_fourthNail = new lib.color_picker_4_mc();

	this.texture_fourthNail = new lib.horizontal_gallery_1_4_mc();

	this.fifthNail_4 = new lib.fifthNail_icon_4_mc();
	this.fifthNail_4.setTransform(-220,120);

	this.fifthNail_3 = new lib.fifthNail_icon_3_mc();
	this.fifthNail_3.setTransform(-220,60);

	this.fifthNail_2 = new lib.fifthNail_icon_2_mc();
	this.fifthNail_2.setTransform(-220,0);

	this.fifthNail_1 = new lib.fifthNail_icon_1_mc();
	this.fifthNail_1.setTransform(-220,-60);

	this.color_fifthNail = new lib.color_picker_5_mc();

	this.texture_fifthNail = new lib.horizontal_gallery_1_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.firstNail_1},{t:this.firstNail_2},{t:this.firstNail_3},{t:this.firstNail_4}]}).to({state:[{t:this.color_firstNail}]},1).to({state:[{t:this.texture_firstNail}]},1).to({state:[{t:this.secondNail_1},{t:this.secondNail_2},{t:this.secondNail_3},{t:this.secondNail_4}]},1).to({state:[{t:this.color_secondNail}]},1).to({state:[{t:this.texture_secondNail}]},1).to({state:[{t:this.thirdNail_1},{t:this.thirdNail_2},{t:this.thirdNail_3},{t:this.thirdNail_4}]},1).to({state:[{t:this.color_thirdNail}]},1).to({state:[{t:this.texture_thirdNail}]},1).to({state:[{t:this.fourthNail_1},{t:this.fourthNail_2},{t:this.fourthNail_3},{t:this.fourthNail_4}]},1).to({state:[{t:this.color_fourthNail}]},1).to({state:[{t:this.texture_fourthNail}]},1).to({state:[{t:this.fifthNail_1},{t:this.fifthNail_2},{t:this.fifthNail_3},{t:this.fifthNail_4}]},1).to({state:[{t:this.color_fifthNail}]},1).to({state:[{t:this.texture_fifthNail}]},1).wait(1));

	// decor
	this.instance = new lib.halo_mc();
	this.instance.setTransform(-20.1,-52.1,0.556,0.556,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:0.7,regY:-0.6,scaleX:0.61,scaleY:0.61,x:66.5,y:-161.3},0).wait(3).to({regX:-0.2,regY:-0.2,scaleX:0.56,scaleY:0.56,x:131.9,y:-226.1},0).wait(3).to({regX:-0.1,regY:-0.1,scaleX:0.61,scaleY:0.61,x:206,y:-185},0).wait(3).to({scaleX:0.67,scaleY:0.67,x:342,y:85},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-357.3,-220.9,437.4,398.4);
p.frameBounds = [rect, new cjs.Rectangle(-390,-410,780,585), new cjs.Rectangle(-395.5,-270,475.5,420), new cjs.Rectangle(-334,-271,510.1,448.5), new cjs.Rectangle(-390,-410,780,585), new cjs.Rectangle(-395.5,-271,571.5,421), new cjs.Rectangle(-334,-326,566.1,503.5), new cjs.Rectangle(-390,-410,780,585), new cjs.Rectangle(-395.5,-326,627.5,476), new cjs.Rectangle(-334,-295,650.1,472.5), new cjs.Rectangle(-390,-410,780,585), new cjs.Rectangle(-395.5,-295,711.5,445), new cjs.Rectangle(-334,-117.4,796.1,322.5), new cjs.Rectangle(-390,-410,852,615), new cjs.Rectangle(-395.5,-270,857.5,475)];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-357.3,-220.9,437.4,398.4);
p.frameBounds = [rect];


(lib.animation1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.animation1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.instrument1();
	this.instance_1.setTransform(402,510.9,0.8,0.8,45,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:30,x:145,y:217.9},8).wait(1));

	// graph
	this.instance_2 = new lib.instrument4();
	this.instance_2.setTransform(719.7,467.8,0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_3 = new lib.instrument3();
	this.instance_3.setTransform(595.5,506,0.8,0.8,45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_4 = new lib.instrument2();
	this.instance_4.setTransform(506.5,483.7,0.8,0.8,45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_5 = new lib.hand0_5();
	this.instance_5.setTransform(333,328);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_6 = new lib.hand0_4();
	this.instance_6.setTransform(333,328);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_7 = new lib.hand0_3();
	this.instance_7.setTransform(333,328);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_8 = new lib.hand0_2();
	this.instance_8.setTransform(333,328);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_9 = new lib.hand0_6();
	this.instance_9.setTransform(333,328);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_10 = new lib.hand0_1();
	this.instance_10.setTransform(448,205.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_11 = new lib.pillow();
	this.instance_11.setTransform(394,282.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(9));

	// graph
	this.instance_12 = new lib.back0_2_img();
	this.instance_12.setTransform(755,71);

	this.instance_13 = new lib.back0_1_img();
	this.instance_13.setTransform(-200,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13},{t:this.instance_12}]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-595,1191,1070);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,-90,1191,678.1), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
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
	this.dressupPanel_1_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_2_mc();
	this.hero_1.setTransform(415,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-329.4,800,1065.8);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:587,y:498,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:490.1,y:485.2,regX:0.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:695.1,y:480.2,regX:0.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_0_mc();
	this.object_2.setTransform(395,225,1,1,0,135,-45);

	this.object_4 = new lib.arrow_1_mc();
	this.object_4.setTransform(240,170,1,1,-45);

	this.object_5 = new lib.arrow_2_mc();
	this.object_5.setTransform(262.1,422.1,1,1,-90,0,0,-0.1,0.1);

	this.object_6 = new lib.arrow_3_mc();
	this.object_6.setTransform(300,475,1,1,180);

	this.object_7 = new lib.arrow_4_mc();
	this.object_7.setTransform(357,454,1,1,-90);

	this.object_8 = new lib.arrow_5_mc();
	this.object_8.setTransform(435,406,1,1,-135);

	this.object_10 = new lib.arrow_6_mc();
	this.object_10.setTransform(370,250,1,1,0,90,-90);

	this.object_12 = new lib.arrow_7_mc();
	this.object_12.setTransform(170,220,0.859,0.859,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},1).to({state:[]},1).to({state:[{t:this.object_12}]},1).to({state:[]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:50}},{t:this.instance,p:{rotation:15,x:415,y:250}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(400,509);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(600,500);

	this.object_9 = new lib.object_9_1_mc();
	this.object_9.setTransform(505,483);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(722,465);

	this.object_13 = new lib.object_13_1_mc();
	this.object_13.setTransform(455,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_9}]},5).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[]},1).to({state:[{t:this.object_13}]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation1_3();

	this.subject_2 = new lib.animation1_4();

	this.subject_3 = new lib.animation1_6();

	this.subject_4 = new lib.animation1_7();

	this.subject_5 = new lib.animation1_8();

	this.subject_6 = new lib.animation1_9();

	this.subject_7 = new lib.animation1_10();

	this.subject_8 = new lib.animation1_11();

	this.subject_9 = new lib.animation1_12();

	this.subject_10 = new lib.animation1_13();

	this.subject_11 = new lib.animation1_15();

	this.subject_12 = new lib.animation1_16();

	this.subject_13 = new lib.animation1_17();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-595,1191,1204);
p.frameBounds = [rect, new cjs.Rectangle(-200,-329.4,1191,917.4), new cjs.Rectangle(-200,-329.4,1191,929.4), new cjs.Rectangle(-200,-329.4,1191,906.4), new cjs.Rectangle(-200,-329.4,1191,974.7), new cjs.Rectangle(-200,-329.4,1191,1023.7), new cjs.Rectangle(-200,-329.4,1191,1003.7), new cjs.Rectangle(-200,-329.4,1191,949.8), new cjs.Rectangle(-200,-329.4,1191,937.4), new cjs.Rectangle(-200,-329.4,1191,906.4), new cjs.Rectangle(-200,-329.4,1191,934.4), new cjs.Rectangle(-200,-329.4,1191,832.4), new cjs.Rectangle(-200,-139,1191,718.4)];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.1,0.688,0.688,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,900.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-595,1262.7,1565.9);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.hero_1 = new lib.hero_2_mc();
	this.hero_1.setTransform(416,285,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({skewX:0,skewY:180,x:380,y:315},0).wait(1).to({skewX:180,skewY:0,x:416,y:285},0).wait(1).to({skewX:0,skewY:180,x:380,y:315},0).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-11,1200,611);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,611), new cjs.Rectangle(-200,-11,1200,611), new cjs.Rectangle(-200,0,1200,611)];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(-160,230);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-280,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-476.8,-450,556.8,886.4);
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
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(610,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(278.9,359.4,1,1,0,0,0,278.9,359.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
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
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_1_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(571,309.6,1,1,0,0,0,1,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.8,-329.4,867.2,1065.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-11,1200,611);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(535,510,0.938,0.938);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
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
	this.next_mc.setTransform(700,300);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(100,300);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
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

	this.ikNode_1 = new lib.LocationScreen_1();

	this.instance_4 = new lib.LocationScreen_2();
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_3();

	this.instance_6 = new lib.RedirectScreen();

	this.instance_7 = new lib.ResultScreen();

	this.instance_8 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(345,50);

	this.instance_9 = new lib.TrackMove();
	this.instance_9.setTransform(270,50);

	this.instance_10 = new lib.Cursor();
	this.instance_10.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_11 = new lib.OrientationLockScreen();

	this.instance_12 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_10},{t:this.instance_9},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-262.6,-595,1262.7,1565.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,353,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect];


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