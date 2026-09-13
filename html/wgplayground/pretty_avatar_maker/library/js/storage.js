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
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"},
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_8", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_9", frames: [[0,602,900,600],[0,0,1200,600]]},
		{name:"storage_atlas_10", frames: [[0,0,900,600],[0,804,480,480],[482,804,480,480],[0,602,1200,200]]},
		{name:"storage_atlas_11", frames: [[0,0,480,480],[0,482,480,480],[482,0,463,459],[482,461,490,430]]},
		{name:"storage_atlas_12", frames: [[0,483,395,481],[397,483,386,485],[785,427,453,411],[785,840,489,379],[0,0,430,481],[432,0,484,425]]},
		{name:"storage_atlas_13", frames: [[900,0,360,460],[824,462,387,411],[422,0,476,360],[770,875,417,369],[422,764,346,454],[0,844,420,420],[0,0,420,420],[0,422,420,420],[422,362,400,400]]},
		{name:"storage_atlas_14", frames: [[464,0,500,300],[846,642,374,350],[0,717,331,378],[382,684,327,387],[711,994,416,294],[846,302,389,338],[0,0,462,333],[464,302,380,380],[0,335,380,380]]},
		{name:"storage_atlas_15", frames: [[301,0,313,351],[0,0,299,409],[0,411,309,362],[0,775,480,220],[311,444,480,220],[482,666,480,220],[482,888,480,220],[0,997,480,220],[793,444,480,220],[616,222,480,220],[616,0,480,220]]},
		{name:"storage_atlas_16", frames: [[1089,923,200,300],[747,444,247,382],[0,666,320,320],[964,0,320,320],[482,0,480,220],[482,222,480,220],[0,444,480,220],[482,444,263,366],[996,322,287,305],[824,923,263,277],[996,629,296,292],[356,812,305,261],[0,988,354,287],[356,1075,466,159],[0,222,480,220],[0,0,480,220]]},
		{name:"storage_atlas_17", frames: [[0,694,190,190],[0,0,200,300],[0,886,190,190],[192,787,190,190],[612,977,180,180],[939,341,255,188],[737,0,234,231],[202,0,253,227],[457,0,278,206],[697,341,240,200],[973,0,237,223],[0,302,265,222],[939,531,236,199],[457,208,238,223],[697,233,461,106],[549,543,374,112],[641,657,190,190],[833,732,360,100],[267,229,186,188],[192,979,194,178],[833,834,187,171],[915,1158,187,132],[1022,834,186,159],[449,657,190,190],[0,1078,190,190],[247,585,200,200],[384,849,266,126],[0,526,245,166],[1022,995,176,158],[192,1159,273,122],[388,977,222,148],[701,1159,212,132],[794,1007,179,149],[467,1159,232,137],[267,433,280,150]]},
		{name:"storage_atlas_18", frames: [[743,1050,100,86],[152,837,120,120],[486,152,120,120],[640,986,60,60],[0,0,150,150],[0,912,150,150],[0,152,150,150],[0,304,150,150],[0,456,150,150],[0,608,150,150],[0,760,150,150],[0,1064,150,150],[152,0,150,150],[304,0,150,150],[456,0,150,150],[152,152,150,150],[608,0,150,150],[760,0,150,150],[912,0,150,150],[1064,0,150,150],[475,557,180,80],[1117,904,100,50],[152,304,150,150],[456,274,120,120],[1154,152,60,60],[821,802,80,80],[845,980,80,80],[396,1001,120,120],[363,1245,225,55],[545,1142,201,55],[844,545,209,60],[346,418,226,69],[662,642,223,57],[1055,543,210,59],[346,489,221,66],[608,234,228,63],[1124,299,120,120],[1120,421,120,120],[518,1020,120,120],[518,898,120,120],[838,234,215,60],[748,1138,169,46],[271,654,207,78],[1055,604,235,51],[731,1199,115,87],[738,701,227,52],[738,755,188,45],[152,456,192,114],[871,884,80,80],[967,689,80,80],[919,1062,80,80],[903,802,80,80],[927,966,80,80],[1009,966,80,80],[985,771,80,80],[953,884,80,80],[1001,1048,80,80],[950,1144,80,80],[1136,1192,60,60],[1198,1192,60,60],[1049,657,80,80],[1035,853,80,80],[1067,739,80,80],[1131,657,80,80],[1213,657,80,80],[152,755,220,80],[800,884,69,94],[848,1186,100,73],[640,884,99,100],[1032,1130,40,147],[304,274,150,142],[1246,299,50,210],[1216,0,50,297],[304,152,180,120],[845,1062,60,60],[1145,1068,60,60],[1083,1068,60,60],[1136,1130,60,60],[1074,1192,60,60],[1219,916,60,60],[1074,1130,60,60],[1021,463,60,60],[1207,1068,60,60],[1198,1130,60,60],[1229,854,60,60],[1055,234,133,48],[1117,854,110,48],[1149,739,110,48],[1091,956,104,48],[152,572,117,181],[152,1041,120,120],[741,884,57,164],[152,1163,87,46],[1091,1041,175,25],[1117,821,173,31],[1091,1006,150,33],[241,1163,120,120],[274,1041,120,120],[640,1050,101,88],[638,803,181,79],[887,607,133,80],[0,1216,239,82],[590,1199,139,76],[271,572,202,80],[574,478,79,77],[848,1261,156,37],[756,381,180,80],[972,152,180,80],[662,560,180,80],[760,299,180,80],[334,919,180,80],[556,721,180,80],[839,463,180,80],[938,381,180,80],[363,1163,180,80],[456,816,180,80],[942,299,180,80],[790,152,180,80],[574,396,180,80],[480,639,180,80],[608,152,180,80],[578,299,180,80],[374,734,180,80],[152,959,180,80],[657,478,180,80],[274,837,180,80]]},
		{name:"storage_atlas_19", frames: [[338,34,66,49],[392,120,36,58],[430,120,40,50],[44,0,42,82],[0,0,42,84],[359,85,31,78],[105,255,26,27],[258,167,36,45],[0,86,29,80],[204,66,45,67],[198,135,46,44],[83,255,20,43],[170,119,26,79],[88,34,136,25],[78,119,48,48],[303,115,48,48],[146,61,56,56],[406,62,56,56],[88,61,56,56],[63,176,68,25],[102,229,56,24],[321,239,53,23],[133,200,59,27],[254,235,65,20],[338,208,51,29],[373,180,63,26],[0,169,61,28],[376,242,45,25],[471,211,39,35],[423,248,51,19],[42,203,58,27],[198,181,58,28],[194,211,58,25],[303,165,68,26],[42,232,39,33],[128,119,40,55],[472,166,40,43],[496,0,10,11],[415,0,57,60],[476,248,23,38],[0,241,31,31],[251,115,50,50],[302,77,23,5],[133,255,18,27],[275,66,25,11],[133,176,17,18],[251,66,22,17],[338,193,22,7],[102,203,20,7],[302,66,23,9],[251,85,106,28],[226,34,110,30],[208,238,38,27],[391,208,46,32],[160,238,46,27],[439,172,30,47],[439,221,29,25],[474,0,20,164],[306,0,107,32],[197,0,107,32],[88,0,107,32],[508,0,4,4],[44,84,32,83],[296,193,40,40],[0,199,40,40]]}
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



(lib.arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_11_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_12_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_13_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_14_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_15_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_16_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.beloc_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_category_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_16_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_long_button_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bg_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bg_option_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bg_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.body_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_category_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.check_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.done_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.earring10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.earring11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.earring12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.eyes4_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.eyes5_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.eyes6_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.eyes7_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.eyes8_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.fringe10_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fringe11_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fringe12_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fringe13_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.fringe14_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fringe15_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fringe16_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.fringe17_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.fringe18_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fringe19_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fringe1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.fringe20_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fringe2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.fringe3_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.fringe4_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringe5_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.fringe6_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fringe7_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fringe8_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.fringe9_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.glass_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glass_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.glass_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glass_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glasses7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.glasses8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hair10_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hair11_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair12_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair13_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hair14_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hair15_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hair16_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hair17_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hair18_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair19_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair20_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hair3_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair4_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hair5_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hair6_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair7_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair8_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair9_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.icon_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.lips10_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.lips11_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.lips12_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.lips13_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.lips14_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.lips15_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.lips16_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.lips1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.lips2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.lips3_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.lips4_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.lips5_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.lips6_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.lips7_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.lips8_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.lips9_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(72);
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



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.nose_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.nose_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.nose_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.nose_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.nose_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.nose_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.nose_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.nose_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.numbers_separator_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.percent_100_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.percent_25_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.percent_50_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.percent_75_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.podl1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.podl2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.podl3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.scars10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.scars11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.scars12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.scars13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.scars14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.scars15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.scars16_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.scars1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.scars2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.scars3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.scars4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.scars5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.scars6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.scars7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.scars8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.scars9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.star_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.tiara10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.tiara11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.tiara12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.tiara13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.tiara14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.tiara15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.tiara16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.tiara1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.tiara2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.tiara3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.tiara4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.tiara5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.tiara6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.tiara7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.tiara8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.tiara9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.title_random_de_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.title_random_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_random_es_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_random_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.title_random_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.title_random_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.title_random_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_de_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_es_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.zrachok_1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.zrachok_2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-120,-64,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-64,240,128.6);
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


(lib.zrachok_2_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zrachok_2_decor_img();
	this.instance.setTransform(-20,-19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-19.8,40,40);
p.frameBounds = [rect];


(lib.zrachok_2_base_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900CC").s().p("AiVCIQgyg5AAhPQAAhVA+g+QAlglAugPQC0BkBKDEQgPAcgZAZQgiAjgrAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40.1,40.1);
p.frameBounds = [rect];


(lib.zrachok_1_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zrachok_1_decor_img();
	this.instance.setTransform(-20,-19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-19.8,40,40);
p.frameBounds = [rect];


(lib.zrachok_1_base_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AiVCIQgyg5AAhPQAAhVA+g+QAlglAugPQC0BkBKDEQgPAcgZAZQgiAjgrAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40.1,40.1);
p.frameBounds = [rect];


(lib.tiara16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara16_img();
	this.instance.setTransform(-88,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-79,176,158);
p.frameBounds = [rect];


(lib.tiara15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara15_img();
	this.instance.setTransform(-119.4,-40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.4,-40.9,239,82);
p.frameBounds = [rect];


(lib.tiara14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara14_img();
	this.instance.setTransform(-66.7,-39.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.7,-39.7,133,80);
p.frameBounds = [rect];


(lib.tiara13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara13_img();
	this.instance.setTransform(-90.2,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-39.5,181,79);
p.frameBounds = [rect];


(lib.tiara12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara12_img();
	this.instance.setTransform(-122.5,-83.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-83.1,245,166);
p.frameBounds = [rect];


(lib.tiara11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara11_img();
	this.instance.setTransform(-133,-62.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-62.8,266,126);
p.frameBounds = [rect];


(lib.tiara10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara10_img();
	this.instance.setTransform(-50.3,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.3,-44.2,101,88);
p.frameBounds = [rect];


(lib.tiara9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara9_img();
	this.instance.setTransform(-116.4,-67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.4,-67.8,232,137);
p.frameBounds = [rect];


(lib.tiara8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara8_img();
	this.instance.setTransform(-89.8,-74.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.8,-74.9,179,149);
p.frameBounds = [rect];


(lib.tiara7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara7_img();
	this.instance.setTransform(-78,-18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-18.3,156,37);
p.frameBounds = [rect];


(lib.tiara6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara6_img();
	this.instance.setTransform(-39.6,-38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.6,-38.6,79,77);
p.frameBounds = [rect];


(lib.tiara5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara5_img();
	this.instance.setTransform(-103.4,-67.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.4,-67.6,212,132);
p.frameBounds = [rect];


(lib.tiara4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara4_img();
	this.instance.setTransform(-101.1,-40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.1,-40.1,202,80);
p.frameBounds = [rect];


(lib.tiara3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara3_img();
	this.instance.setTransform(-110.3,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.3,-74.5,222,148);
p.frameBounds = [rect];


(lib.tiara2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara2_img();
	this.instance.setTransform(-136.3,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.3,-61,273,122);
p.frameBounds = [rect];


(lib.tiara1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tiara1_img();
	this.instance.setTransform(-69.3,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.3,-38.2,139,76);
p.frameBounds = [rect];


(lib.scars16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars16_img();
	this.instance.setTransform(-28.6,-81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.6,-81.9,57,164);
p.frameBounds = [rect];


(lib.scars15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars15_img();
	this.instance.setTransform(-10.1,-81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.1,-81.9,20,164);
p.frameBounds = [rect];


(lib.scars14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars14_img();
	this.instance.setTransform(-12.6,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-13.3,29,25);
p.frameBounds = [rect];


(lib.scars13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars13_img();
	this.instance.setTransform(-14.9,-23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.9,-23.7,30,47);
p.frameBounds = [rect];


(lib.scars12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars12_img();
	this.instance.setTransform(-22.9,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.9,-13.7,46,27);
p.frameBounds = [rect];


(lib.scars11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars11_img();
	this.instance.setTransform(-22.9,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.9,-15.7,46,32);
p.frameBounds = [rect];


(lib.scars10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars10_img();
	this.instance.setTransform(-25.2,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.2,-10.6,38,27);
p.frameBounds = [rect];


(lib.scars9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars9_img();
	this.instance.setTransform(-74.7,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.7,-16.5,150,33);
p.frameBounds = [rect];


(lib.scars8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars8_img();
	this.instance.setTransform(-15.7,-41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.7,-41.7,32,83);
p.frameBounds = [rect];


(lib.scars7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars7_img();
	this.instance.setTransform(-86.5,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-15.7,173,31);
p.frameBounds = [rect];


(lib.scars6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars6_img();
	this.instance.setTransform(-87.4,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.4,-12.4,175,25);
p.frameBounds = [rect];


(lib.scars5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars5_img();
	this.instance.setTransform(-43.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-23,87,46);
p.frameBounds = [rect];


(lib.scars4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars4_img();
	this.instance.setTransform(-2.1,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.1,-1.8,4,4);
p.frameBounds = [rect];


(lib.scars3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars3_img();
	this.instance.setTransform(-53.4,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-15.9,107,32);
p.frameBounds = [rect];


(lib.scars2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars2_img();
	this.instance.setTransform(-53.4,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-15.9,107,32);
p.frameBounds = [rect];


(lib.scars1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.scars1_img();
	this.instance.setTransform(-53.4,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-15.9,107,32);
p.frameBounds = [rect];


(lib.podl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podl3_img();
	this.instance.setTransform(-55.1,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.1,-14.9,110,30);
p.frameBounds = [rect];


(lib.podl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podl2_img();
	this.instance.setTransform(-53.2,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.2,-14.1,106,28);
p.frameBounds = [rect];


(lib.podl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podl1_img();
	this.instance.setTransform(-58.4,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.4,-90.5,117,181);
p.frameBounds = [rect];


(lib.nose_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_8_img();
	this.instance.setTransform(-8.2,-3.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.2,-3.4,16.6,6.5);
p.frameBounds = [rect];


(lib.nose_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_7_img();
	this.instance.setTransform(-7.4,-2.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.4,-2.1,14.4,5.1);
p.frameBounds = [rect];


(lib.nose_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_6_img();
	this.instance.setTransform(-7.9,-2.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.9,-2.2,15.9,5.1);
p.frameBounds = [rect];


(lib.nose_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_5_img();
	this.instance.setTransform(-8.1,-6.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.1,-6.3,15.9,12.3);
p.frameBounds = [rect];


(lib.nose_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_4_img();
	this.instance.setTransform(-6,-6.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6,-6.7,12.3,13);
p.frameBounds = [rect];


(lib.nose_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_3_img();
	this.instance.setTransform(-9.4,-4.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.4,-4.2,18,7.9);
p.frameBounds = [rect];


(lib.nose_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_2_img();
	this.instance.setTransform(-6.6,-10,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.6,-10,13,19.5);
p.frameBounds = [rect];


(lib.nose_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose_1_img();
	this.instance.setTransform(-8.1,-1.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.1,-1.8,16.6,3.6);
p.frameBounds = [rect];


(lib.nav_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.arrow_img();
	this.instance.setTransform(32,-28,0.64,0.64,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjlErQhZAAgBhaIAAmhQABhaBZAAIHLAAQBZAAABBaIAAGhQgBBahZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-30,64,60);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lips16_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AgRCBQgygEg0gpQgzgng8hCIgCgEQgUgDgSgIQghgPgLgbQAVAXAYAEQAWAEAQABQAtgoAXgPQAogcAoAAQAVgBAkARIABAAIAZANIAOgLIAAgBQAZgSAWABQAmAAAYAIQAdAKBNBAIAUgEIgBAAQAygPANgeIAEgLQgDA4g6ATQgMAEgOACIgCAAIgLABQgUAhgXAfQgZAigcAUQgcAVgfAKQgVAGgeAAIgagBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-13.1,63.1,26.2);
p.frameBounds = [rect];


(lib.lips15_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips15_decor_img();
	this.instance.setTransform(-25.4,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.4,-14.6,51,29);
p.frameBounds = [rect];


(lib.lips15_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AgjCOQgegEgQgEIgBgBQgSgEgvhAQgng1gJgRIgIgCIAAgBQg1gQADglIABgTQAAADADAIQADALASAOQAUgDA4guQA9g0AZABQAbAAAZAQIAWAPIAfgTQASgLAVADQAUACApAjQAiAdAuAbIADAEQABgCALgIQALgKACgKQACgLgCgCIACABQAEADAAAEQAFAdgUASQgBABAAAAQAAAAAAAAQAAAAABAAQABgBABAAIgMAHQgOAJgUAFIgCAEQgrBSgaAgQgdAkg1ABIgTAAQgiAAgXgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.4,-14.6,51,29.2);
p.frameBounds = [rect];


(lib.lips14_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips14_decor_img();
	this.instance.setTransform(-32.6,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.6,-9.8,65,20);
p.frameBounds = [rect];


(lib.lips14_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AhmBNQg6gYg5g8QgCgDAAgEIgSgDIgDAAIgBgBIgTgEQgzgNgKgMQgDgDAAgEQAQAHAgAFIAkAEIAEABQAcgIAtgZQAugbAoABQANAAAgAGQAcAGAPAAQAiAAAZgHIAAABQAdgJAdAIIAAAAQAcAIApATIA6AdIABAAIAAAAQApgDAWgJIAGgCIgCAEQgXAYgqAGIgBAAIgBAAIgDAAIgBAAIgagBQg6BAgmAWQgnAWhFAFIgWAAQg2AAgwgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.6,-9.8,65.2,19.6);
p.frameBounds = [rect];


(lib.lips13_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips13_decor_img();
	this.instance.setTransform(-29.3,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.3,-13.3,59,27);
p.frameBounds = [rect];


(lib.lips13_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AhyBcIAAgBQg2gygphGIgVgFIgBAAIgFgCIgCgBIgBAAQgsgSgJgrQgBgEADgDQACgEAEAAQAEgBADACQAEACABAEQAGAgAgANQAZgFAughIgBAAQA1gmAXABQAaAAAhAPQAaAMAKAAQAEAAAbgMQAhgPAUAAQAigBAyAfIA5AkIAKAGQAigQgFgaQgBgEACgEQACgDAEgBQAEgBAEACQADACACAEQAMAsg+AWIAAAAIgGACIABAAQgPAEgRAEIAAAEQgpBbgqAhQguAkhEAAQhQAAgpgpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.3,-13.3,58.7,26.8);
p.frameBounds = [rect];


(lib.lips12_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips12_decor_img();
	this.instance.setTransform(-26.4,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.4,-11.7,53,23);
p.frameBounds = [rect];


(lib.lips12_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AgEB0QhIgBgpgfQglgbgfhJIgBgCQgUgGgRgMQgKgBgJgFIgBAAQgUgKAAgQQAAgEADgDQADgDAEAAQAEAAADACQADADAAAEQACAFAHAEIAAAAQAIAEAHAAIADAAQAVAAAlgaIgBAAQArggAhABQAZAAAfAVQAXAQAHAAQAAgBAZgRQAhgWAgAAQAeAAArAfIAAAAQAdAVAUAFIACAAIAAAAIAAAAIAGABQAIAAAHgIIAAAAQAHgIgCgJQgBgEACgEQADgDAEgBQAEgBADACQAEACABAEQAEAUgPAQIAAAAQgOAOgPAAIgCAAQgGAPgOAHIAAAAIgLAEQguBwgqAJIAAAAQgiAIg3AAIgRgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.4,-11.7,52.9,23.4);
p.frameBounds = [rect];


(lib.lips11_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips11_decor_img();
	this.instance.setTransform(-28,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-11.7,56,24);
p.frameBounds = [rect];


(lib.lips11_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("Ah6BXIgBAAQgKgKgfgiQgZgbgSgVQgUgGgcgOIgBAAQgDgBgQgPQgDgDAAgEQgBgEADgDQADgDAEAAQAEgBADADIANAMIACABIANAAQAcgBAxgiQA5gnASABQAOgBAkAVQAeARACABQAEgCAYgPQAfgWALABQAcgBBAAnIAAAAQAxAdAYAFIABAAIABAAIAFABQANAAAIgHQACgDAFAAQAEAAADADQACACABAFQgBAEgCADQgNAMgWABIgEAAIgRALQg8BXgoAVQgmAVhSAAIgBAAQhYAAgigeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-11.7,56,23.5);
p.frameBounds = [rect];


(lib.lips10_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips10_decor_img();
	this.instance.setTransform(-34.1,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.1,-12.7,68,25);
p.frameBounds = [rect];


(lib.lips10_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AiEBXQgXgShEhSQgBgCgBgDQhLgQgmguQgCgDAAgEQADAFAOALQAWASBCAMIADgCIBOgxQAzggAjAAQAbAAATAPQAOAKAJAAQALAAAYgOIAAAAQAfgTAlAKIAAAAQAhAJAiAUIAAAAQAgASAgAiQAQgFAQgIIAAAAQAygUAXgQIABAAIAAAAQAAAEgCADQgUAagrAVIAAAAQgTAKgTAFQhRBugwAVIAAAAQgjARhJAAIAAAAQhSAAgzgog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.1,-12.7,68.3,25.4);
p.frameBounds = [rect];


(lib.lips9_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips9_decor_img();
	this.instance.setTransform(-19.2,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.2,-16.7,39,33);
p.frameBounds = [rect];


(lib.lips9_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AgeCkQgqgIgkgUIgBAAQgMgHgig4Qglg8ABgYQgBgYA7hBQA8hDAdABQARAAARAGQALAFAIAGQAWgSAdAHQAdAHAlAlIABACIAQAWIAAAAQAyBFgBAcQABAMgcArQgdAugHAOIAAAAQgIAPgQALIAAAAQgPAKgtAHQgWAEgVAAQgQAAgQgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.2,-16.7,38.5,33.5);
p.frameBounds = [rect];


(lib.lips8_decor16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips16_decor_img();
	this.instance.setTransform(-31.5,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-13.1,63,26);
p.frameBounds = [rect];


(lib.lips8_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips8_decor_img();
	this.instance.setTransform(-34.2,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-12.8,68,26);
p.frameBounds = [rect];


(lib.lips8_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AiABFQg+gwgrhCIgIgKQg5gSgTgRQgLAHACAHQACAIgDgCQgDgBgGgLQgGgKABgJQABgLAIgGQAIgHASgCQATgBgKADQgKADgCAEQgCAEABACIADAEQAHAJAeANQgBACATABQASABAQgEIBUgUQBFgRAVADQAVADAXAKIAAAAQASAHAQAAQAFAAAXgJQAcgLAZACQAZABApANIgBAAQAjALAkAEIAhAEIAAgCIAMgIIgEACIAVgRQAEgCgHgGIgJgIIAIABQAQACAEACIAGADIAEAGQADAGAAAQIAAAJQgEgKgDgCQgEgDgDAAIAAgBQgMALgMAJIgMAJIAEgDQgSAOgTALIgDAGQhIBpg1AgQgxAfg2AAQhNAAhPg7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-12.8,68.5,25.8);
p.frameBounds = [rect];


(lib.lips7_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips7_decor_img();
	this.instance.setTransform(-29,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-12.4,58,25);
p.frameBounds = [rect];


(lib.lips7_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AhvBkQgegUhTh2IgCgDIgpgIQgRAJgDADQgCgDABgEIAEgSQACgQAEgJQABgDADgCQANARgCAHIAwAJIBYgqQAvgWAPAAQAQgBAcARIAAAAIAbATIATgPQASgQAQgDIAAAAQAPgGBFAhQA5AbAQAVQAUgIAXgPQgCgEAEgIIAEgKIACABQAEABACAEIAGAOIAAAAIABABIACAFIAGAPIABAFQgNgCgKgDQgaARgWAIQg/BXgZAXQgqAohCAAIAAAAQhjAAgigYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-12.4,58,25);
p.frameBounds = [rect];


(lib.lips6_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips6_decor_img();
	this.instance.setTransform(-28.9,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.9,-14.1,58,28);
p.frameBounds = [rect];


(lib.lips6_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AiEBXIAAABQgXgWhHiEQgQgNgZgbQgLgNgGAYIgBAAIgCgDQgCgJACgLQACgLAFgEQAFgEAHgBIAJgBIAPAGIAAABIgGAEQgGAEAFAFQAWAYAOAMIAUAAQAXAAAigTQAmgWAhgEQAjgEAVAVIAUAUIAYgRIAAAAQAbgVAnAKQAiAIAlAZQAcAUATAGIABgBQAcgWARgbQgHgKgIgEIACAAIAYAAQARABgDAZQgBAJAAAHIgCgCIgJgKQgSAbgbAWIgDACQgxBsgyAlQg0Amg6AAQhiAAg1g1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.9,-14.1,57.9,28.2);
p.frameBounds = [rect];


(lib.lips5_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips5_decor_img();
	this.instance.setTransform(-28.9,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.9,-13.6,58,27);
p.frameBounds = [rect];


(lib.lips5_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("Ah7BcQgzgog4hvQgTgLgXgUIAAABIgPAGIAAgBQAAgVACgFIABgBIAAgBQAIgMALgEQAEgBAEACIABAAIgBAFQgDAOgBABQAWAUASAKQAvgMAogVQAugYAVAAQAXgCAbAUIAWARQASgPAbgLQAggQAmATQAgAQA+AcIALgHIABgBQAUgMAMgLIgDgFQgCgEgEgEQgFgEABgCQABgDAQAHQARAGABADIACADIAFAPQADALgDAFQgDAEgEgFQgCgGgDgDIgEgDQgNAMgTAMQhZCqgnAPQgmAQhDAEIgMABQg/AAg2gsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.9,-13.6,57.8,27.2);
p.frameBounds = [rect];


(lib.lips4_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lips4_decor_img();
	this.instance.setTransform(-25.4,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.4,-9.4,51,19);
p.frameBounds = [rect];


(lib.lips4_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AhzA2Qgqgbg0hFIgVgKIgDAHQgCAEgEABQgEACgEgCQgDgCgCgEQgBgEACgEIAIgSIAAAAQAIgQAFgCQAEgDAEACQAEABACADQACAEgBAEQgBAEgEACIgCADIAYALIABABIADABIAzgVIABAAQAigLAbAAQARAAAeAMQAWAJAGABIAigOIAAAAQAsgRAZAHQAXAGAhAMIAAAAQAeAKAaAEIAOgHIgCgEQgDgDAAgFQABgEADgCQADgDAEAAQAEABADADQAFAGALAYQACADgBAEQgCAEgDACQgEACgEgCQgEgBgCgEIgCgEIgPAIIgCABIgUAJQgpA4gWAXIAAAAQgqAuhKAAIAAAAQhGAAg9gog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.4,-9.4,50.8,18.9);
p.frameBounds = [rect];


(lib.lips3_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lips3_decor_img();
	this.instance.setTransform(-19.3,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.3,-17.3,39,35);
p.frameBounds = [rect];


(lib.lips3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AA+CtIg2gBQhngBgZgZIAAAAQgRgOgRglIAAAAIglhZQgCgEACgCIACgEIABgDQAggrANg4QAPhCA+ABQAZgBAtAbQALgFAOgJIAAAAQAVgPApAJQAoAKAOAmIAvB6IABAAIAAACIAAACIAAAEQg7CGgeAQIAAAAQgPAJgaABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.3,-17.3,38.8,34.6);
p.frameBounds = [rect];


(lib.lips2_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips2_decor_img();
	this.instance.setTransform(-22.4,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-12.7,45,25);
p.frameBounds = [rect];


(lib.lips2_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("Ag8B6QgrgJgPgZIAAAAQgHgLgSgyQgLgdgTgVIgIgDIAAAAIgHgDIgBAAIgBgBIgBAAQgVgMgJgWQgCgEACgEIAAAAIAAABQAUANASAKQAXgGAbgdQAigmAhABQAZAAATALIABABQAPAKAIAFIAUgUQAUgTAbAKQAXAHAaAZQAWAVAWAZIAPgCIAPgCQANgDAJgGQAIgHgBgLQACADAAAEQABAdgmALQgCABgTADQggBOgKAgQgMAnhNACIgVAAQg0AAgVgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-12.7,44.8,25.4);
p.frameBounds = [rect];


(lib.lips1_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips1_decor_img();
	this.instance.setTransform(-30.5,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-14.1,61,28);
p.frameBounds = [rect];


(lib.lips1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape.setTransform(30.4,-10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3399").s().p("Ah1BiQg7gug7hvQgVAAgNgGIAAAAQgOgGgJgTIgFgMIAOAHIAWALQALAFAQAAIALgCIABAAQAVgGAhgVIAAAAQAyggAiABQAWgBAlARQAcANAGABQAHgBAfgLQAjgNAYgDQAYgDAyAfQAiAWAZADIAJAAIABAAQAZgCATgIIAFgDIgDAGQgMAZghACIgGABQhKCIgiAeQgkAhhQAEIgMAAQhFAAg4gqg");
	this.shape_1.setTransform(-0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-14.1,61,28.2);
p.frameBounds = [rect];


(lib.hero_main_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_3_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.hero_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_2_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.hero_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_1_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.hair20_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair20_decor_img();
	this.instance.setTransform(-194.6,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.6,-169,389,338);
p.frameBounds = [rect];


(lib.hair20_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AO6aaQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIADAAQAVhAgNgpQgggCg7AjQg3AggXgHQglgKgThdQgRhNgYhRQghhvgcgrQgCAdgEAfQgGApAMBDQAKA2gMBYIgBASQgDAZgOA6IgKAzQADAAADADQADADAAAEQAAAEgDADQgDADgEAAIkbAAQgEAAgDgDQgDgDAAgEQAAgEADgDQgrglg+giQhWgugmgtQglgtgniKQgiiBgBhBIgaA9QgOAdgUAVQg2BFhkAwQhcAtgmA6QAbAkBaAwQBlA3ATApQAFAMADANIACAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIhGAAQgEAAgDgDQgDgDAAgEQAAgEADgDIADgCQgbg4hag5QghgUgNgKQg7gugHguQgBgFgDgCIgBgBIgMAMQgjApgRAwQgMAggUAUQgfAehWAsQgQAJgPAKQACACAAAEQAAAEgDADQgDADgEAAIhJAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAQAAIAogWQBYgsAJhXQAGg1gdh4QggiGAKg7IAQhQQADgPgBgFQgHgVgEg2QgxBMglCVQghCDgpAsQgkgFgxgfQgugfgeAEQgcAPAZBIQAiBjgEBKQg3ACgCgUQgDgVgjgGQACAoAwA9QARAWAJATIAFAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgpAAQgEAAgDgDQgDgDAAgEQAAgEADgDIACgBQgVgegngfQhlhUBChUQAxgGAKALQAKAJAZAEQgjhEgKgmQgShEAggnQA6g1BZBbQA1A1AdACQAAhUgEggQgGgqgYhCIgUg1QghhXgLg1QgLgxADgXIADgcIABgMQACgcgOgbQgKgUgFgQQgKgjAGgtQAGg4gkgxQhhA5AKB2QADAlARApQAHAQAAATQACAtgjA7QCGBHiOBbQgXAOg2ASQhiAhgBAyIAaACQAPACALgPIAIgMIgXgHIANgKQARgNAVAMIAJAFQgfBthLg/QgpgzBkhAQBKguAKggQgggRgCAKQgDAKgcgPQAWgcAhgjQAlgngBgXQgBgQgSgtIgdg+Qgbg6ATgnQAOgagEgaQgDgXgUg6QgOgqgFgTIhfBpQgnAugUAZQhIBdgTBUIgFAmQgFA8AcBeQAdBcgOAtQgiBth3gvQh3gvBgheQBAAggyA3IgKAaQAsANAYgiQASgaAKgyQAMhIhGhcQgvg8gFgqQgCgKABgIQABgUANglQAWg/gUgcIgDAEIgCACIgJAMIgKANIgBAAQgQAPgVAJQgtAXhEgQQhVgRg5BJIAEAYIAEAAQAGgBAMADIALgaIAYABQAVABAQAQIALAMIgMASQgiArgvAEQg2AEgjgzIgJgMQAMhOAwgXQAegOBJABQBMACAhgQQAPgzglhMQgPgegHgRQgXg8AAiUQgBiKAQguQAJgZAhg9QAYgpAIgSQAJgVAKgzQANhIATgmQAWgsAlgpQAgglAtgjQA4grB9hGIAugcQDhiCAfhVQAVg9goiGIgSiDQACgigEglIgCgWQgBgPADgaIADgkQACguAPg3QAPg9AehJQAzh7BDhZIAKgOIAQAAQAAgEADgDQADgDAEAAIdCAAQAEAAADADQADADAAAEIAAACQAEAfASA/QApCPAABtIAAAMQgDC6hdDuQhdDvA4ByQANAcAhAeQA3A1BvA/QBAAlA4AlQB+BTBPBQQBGBIAYB4QAOBNAXAnQAjA7AVBIQAXBSgIA/IgBAFQgDAbACAVIACAQQAPB8g4B9QgmBTARAzQAfALA7gCQBOgCAtAZQBiA2hBBaQg2AXgwgMQg3gOgIg0IAHgGQAngfAjAdIg7AOIAWADQAgAFAcgVQACg7g5gPQgogMhDAMQhHAMg9g3QgHgHgFgHQgDgFgRgEQgFA9AYAzQAPAigGAbQgKAog8BXQg/BdAZBcQAZBbBKgYIgVgaQhIg8BigeQA7BNg7A4Qg8A4hUg4QgsgdADhHQABgpAXhWQALgtADgRQAShshZiRQg4hdh4iFIgTA/QgXBBgCAYQgCAZAMAdQAUArgaA1QgwBmgBAdQgBAaAoArQAgAjAVAaQgZANgEgHQgFgHggAbQASAWA5ApQBtBPgnAxQhKA8gihqIAJgEQAXgNASAPIAMAKIgYAGIAIAKQALARAQgDIAZgDQgBgyhhgiQh8gsgVhOQAFg2AtgWIAJgFQgwhQAXhHQANgqADggQAHhdg+hAQgXgXgNgQIgZBnQAHBfgTAaQgSAaADBHQAEBbhACxQhKDJAvBBQAdgUAcgnQAsg9BnAAQAgA/gJA7QgEAZgTAwIAEACQADADAAAEQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.6,-169,389.3,338.1);
p.frameBounds = [rect];


(lib.hair19_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair19_decor_img();
	this.instance.setTransform(-244.3,-189.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-244.3,-189.4,489,379);
p.frameBounds = [rect];


(lib.hair19_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ANHdmQgEAAgDgDQgDgDAAgEQAAgEADgDIAEgCQhvksgmmBQgXj0ABk4QABi6APlrQANlfAAijIgOAJIAEgXQB+iIgEg3QgEgyAZhsQANhBAmiMQAoiNAIgwQAljEiGipQgvg7hIg8IgBgNIzPgCIgDAPQhHA8gwA7QiGCpAlDEQAJAwAnCNQAmCMAOBBQAYBsgEAyQgDA3B9CIIAEAXIgOgJQAACjAOFfQAOFrABC6QACE4gYD0QgmGBhuEsIADACQADADAAAEQAAAEgDADQgDADgEAAI7yAAQgEAAgDgDQgDgDAAgEIAA1KQAAgEADgDQADgDAEAAQAEAAACACIAmgoQBlhkDji4QCWh8BIhAQB4hnBOhfQD5kmCIlKQBQi+BKk6QA8kFA2hXQA3haCjhOQCnhRBTAcQARAzgUBLQgHAWgDARIBOgBQBWAAAAgCIQ9AAIgJgkQgVhLARgzQBUgcCmBRQCkBOA3BaQA2BXA8EFQBJE6BQC+QCIFKD5EmQBPBfB4BnQBHBACXB8QBkBRBLBBIAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAxIACG8IgBIJIgBABIAAIRQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-244.4,-189.4,488.8,378.8);
p.frameBounds = [rect];


(lib.hair18_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair18_decor_img();
	this.instance.setTransform(-208.3,-184.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.3,-184.6,417,369);
p.frameBounds = [rect];


(lib.hair18_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AZeY3QAdhbBuivIAwhRQBbiggwhCQgdgoiJgkQh7gfg5gfQjliCAWi5QAOhwCYjmQCskFgKh4QgogSg5gUQhigghJhMQiViYguisQgchngCjVQgBjuggiLQgQhFgQg7QgMgRgWgnQgpg0g+AAQipAAg9CYQAFgjABgSQgGAZAAAdQgGAPgFARQgJAhgFAmQAAAGgWBgQAEADACADQACADAAAOI0vAAIAAgDQgch0AAgGQgFgmgJghQg2i5i7AAQg+AAgpA0QgWAngMARQgQA7gQBFQggCLgCDuQgBDVgcBnQguCsiVCYQhJBMhiAgQg5AUgoASQgKB4CsEFQCYDmAOBwQAWC5jlCCQg5Afh7AfQiJAkgdAoQgwBCBbCgIAwBRQBuCvAdBbQAxCfhaBfQhggBhnh9Qhih1gGheQBAgKAxAUQA9AXAEA7QgdgKgVgWQgbgag0gIQAFBBBQA2QBPA2BDgPQBKiQkCjGQj9jEA8iMQAqhhA7glQAmgXBWgOQBOgOAvgQQCGg1gdhvQgXhbhshXQjpi2gpiPQgyi0DTjGQA/g6BphRQCRhxAmhMQA5h2gUj4QgOiiALhRQARh7BNhkQAaggANgqIgCABQAWhyA+hfQBviqDBAAQC2AABUC0QA1BxAAB/IgBAXQALA4AAA/QABAvgEAkIA4gBQBHAAAAgCIRsAAQgEgjABgtQgBgkAEghQADgaAFgYIgBgXQAAh/A1hxQBUi0C2AAQDBAABvCqQA+BfAWByIgCgBQANAqAaAgQBNBkARB7QALBRgOCiQgUD4A5B2QAmBMCRBxQBpBRA/A6QDTDGgyC0QgpCPjpC2QhsBXgXBbQgdBvCGA1QAvAQBOAOQBWAOAmAXQA7AlAqBhQA8CMj9DEQkCDGBKCQQBDAPBPg2QBQg2AFhBQg0AIgbAaQgVAWgdAKQAEg7A9gXQAxgUBAAKQgGBehiB1QhnB9hgABQhahfAxifg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.3,-184.6,416.6,369.2);
p.frameBounds = [rect];


(lib.hair17_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair17_decor_img();
	this.instance.setTransform(-226.6,-205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.6,-205.5,453,411);
p.frameBounds = [rect];


(lib.hair17_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EAdIAgBQgvgxAdhDQASgyA6g4QATgTAkggQBghSAFhEQgxgch6gpQiNgvgzgjQhTg6AOhVQAOhTCNhlQCJhkAHhMQgagQg8gZQhlgsgtgiQhRg6gdhTQgghYAGi0QAHjeg9hrQgLgUgugrQhDg0gRgiQgbgrAEg5QACgygfgmQhWhbAshWQhwhQgJhRQgFgtgmgaIgcgTQg+gngQgtIgLgjQgHgYgQgJQgcgNgjgaQg0glgIg4IgHgXQgCgKgJgMQgsgYg0h8QgghNgjh4IgEgDIgBAAQg2hLhrhyQgPgLgTgTQgOgPgOgLIsSAAIhvgEQgRAMgRASQgTATgPALQhrByg2BLIgBAAIgEADQgjB4ggBNQg0B8gsAYQgJAMgCAKIgHAXQgIA4g0AlQgjAagcANQgQAJgIAYIgKAjQgQAtg+AnIgcATQgmAagFAtQgJBRhwBQQAsBWhWBbQgfAmACAyQAEA5gbArQgRAihDA0QguArgLAUQg9BrAHDeQAGC0ggBYQgdBThRA6QgtAihlAsQg8AZgaAQQAHBMCJBkQCNBlAOBTQAOBVhTA6QgzAjiNAvQh6ApgyAcQAGBEBgBSQAkAgATATQA6A4ASAyQAcBDguAxQhOAXhhhCQhVg/gGg1QBOgLBOAiQghANgTgFQgagJgmABQBUBABtgIIgFg/QgRgkiWhHQiUhKgxgrQAtiICygjQCIgcAUhRQgigyiYhFQiohOgVg6QgghiDfigIBIgyQBgg/AZgiQAtg7gLhcQAAgggTgtQgYhFAQg8QAOgqA5hIQAXgeACgIQAIgTgLgcQgOhAAzhEIAqgzQAYgXgHgHQgKgUADgxQAEglAhgtQAkgtgIgjQgXhpA8hFQAjgmAhgXQAVgNAEhGQACgHgBgHQAEg3A7gmQAggUAQgTQANgMAGgdQAKg0A0goQAVgPAMgQQATgvAkgxQA2hJAHgzQAOhRg7h+QgSgpgVhPQgNgxgKgeQgph8BPhOQAfgcAahDQAVg1AQgUQAYgaAogKQAbgFASgKQAUgMAUgXQAVgXAVgQQCchxCUCfQBVBdBWDEQAXA3AIAMIgBABIAogBQA4AAAAgCIL+AAQAHgOAWgzQBWjEBVhdQCUifCcBxQAVAQAVAXQAUAXAUAMQASAKAbAFQAoAKAYAaQAQAUAVA1QAaBDAfAcQBPBOgpB8QgKAegNAxQgVBPgSApQg7B+AOBRQAHAzA2BJQAkAxATAvQAMAQAVAPQA0AoAKA0QAGAdANAMQAQATAgAUQA7AmAEA3QgBAHABAHQAFBGAVANQAhAXAjAmQA8BFgXBpQgIAjAkAtQAhAtAEAlQADAxgKAUQgHAHAYAXIAqAzQAzBEgOBAQgLAcAIATQACAIAXAeQA5BIAOAqQAQA8gYBFQgTAtAAAgQgLBcAtA7QAZAiBgA/IBIAyQDfCgggBiQgVA6ioBOQiYBFgiAyQAUBRCIAcQCyAjAtCIQgxAriUBKQiWBHgRAkIgFA/QBtAIBUhAQgmgBgaAJQgUAFgggNQBOgiBOALQgGA1hVA/QhIAxg9AAQgWAAgUgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.6,-205.5,453.3,411.1);
p.frameBounds = [rect];


(lib.hair16_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair16_decor_img();
	this.instance.setTransform(-237.9,-179.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.9,-179.8,476,360);
p.frameBounds = [rect];


(lib.hair16_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AcJb7QgfgUAfgsQAMABAKgBQAGgBAEAFIAKARIglAIQAjApBEghQAwgygmhNQglhRheAAQgMANgMAdQggBDhPgUQiPghgjiSQgjiUB8hVQArgdBPgaQBzgmgRhdQgQhfAcgcQARgRBDABQBPABAqgRQgIgagZgmQgpg+ARg4QAegsBWgbQA+gUAQgXQghgehNggQh4gwgchTQAZg/BFgVQBIgVAYhFQgmgYhLgZQhfgggsgqQhBg/BBhhQAWghABgOQgPgKgkgNQgxgSgVgWQgWgXAAgjQAAgegJgUQgWgIgwgFQhZgKg0giQg+gpAHhFQADghgFgQQgTgKgsgLQg2gOgdgQQhzg9gZhfQgNg2hiAWQh/Aeh/g7Qhxg0hbhtQg4hCgPgMQgOgJgWAGQgsAOg3gHQhSgKhHguIgIANIgCAEQgCAAAAgPIABgKIgGgEIAHgTIACABQAOhKBBjSQBJjoA4hyIstAAIAMAlIgBgBQAqBXAoCGIA3C4IASA4IAHAWIAAAAIASA0IADAJIAQArIgBAHIABgBIAHATQhOA5hcALQg3AHgsgOQgWgGgOAJQgPAMg4BCQhbBthxA0Qh/A7h/geQhigWgNA2QgZBfhzA9QgdAQg2AOQgsALgUAKQgEAQADAhQAHBFg+ApQg0AihZAKQgwAFgWAIQgJAUAAAeQAAAjgWAXQgVAWgyASQgjANgPAKQABAOAWAhQBBBhhBA/QgsAqhfAgQhLAZgmAYQAYBFBIAVQBFAVAZA/QgcBTh4AwQhNAgghAeQAQAXA+AUQBWAbAeAsQARA4gpA+QgZAmgIAaQAqARBPgBQBDgBARARQAcAcgQBfQgRBdBzAmQBPAaArAdQB8BVgjCUQgjCSiPAhQhPAUgghDQgMgdgMgNQheAAglBRQgmBNAwAyQBEAhAjgpIglgIIAKgRQAEgFAGABQAKABAMgBQAfAsgfAUQggATg3gPQiVgnAqiSQAghrCGg2QB+gyAkApQASAugnAnQgoApABAuQBiA+A+h5QA/h4hthBQgkgVg9gJQg2gHgcgPQg8ggAChbQABgogEgTQglgThEgFQg0gDgUgLQg4gaALhLQAGgvgJgYQgVgHgxgEQh7gLgShXQgMg1AuhMQAlg8AFgpQgQgag7geQhjgyAJhKQAEgwAwgnQAbgXBFglQAlgTAQgKQhihlgEhXQgEhlCEg0QgzkNEMgqQhDjeDUhXQgih5BYhBQBKg2BaAMQAthdApgnQAYgXAlgMQAqgOARgwQA3ieDKg0QAqgLBUAGQBCAFAegGQgdi/B5htQAzguBMgNQArgHBcADQBCADAfgDIgCgZIASAzINGAAIARgzIgCAZQAfADBCgDQBcgDArAHQBMANAzAuQB5BtgdC/QAeAGBCgFQBUgGAqALQDKA0A3CeQARAwAqAOQAlAMAYAXQApAnAtBdQBagMBKA2QBYBBgiB5QDUBXhDDeQEMAqgzENQCEA0gEBlQgEBXhiBlQAQAKAlATQBFAlAbAXQAwAnAEAwQAJBKhjAyQg7AegQAaQAFApAlA8QAuBMgMA1QgSBXh7ALQgxAEgVAHQgJAYAGAvQALBLg4AaQgUALg0ADQhEAFglATQgEATABAoQACBbg8AgQgcAPg2AHQg9AJgkAVQhtBBA/B4QA+B5Big+QAAgugngpQgngnASguQAkgpB+AyQCGA2AgBrQAqCSiVAnQgYAHgTAAQgaAAgSgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.9,-179.8,475.9,359.7);
p.frameBounds = [rect];


(lib.hair15_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair15_decor_img();
	this.instance.setTransform(-187,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187,-55.9,374,112);
p.frameBounds = [rect];


(lib.hair15_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AQuHvQhPg7hRibQgagvgKgQQhABehmgaQgXg3AFgzQAHg/BEA3QAqhahtiyQhChthUhdIovAAQmxgChhgEQhYBghEBwQhtCyAqBaQBEg3AHA/QAFAzgXA3QhmAahAheQgKAQgaAvQhRCbhQA7QiNBrjRhHQg5gUgFgTIgDgHQAWgBAxAFQCVAQBEhEIg6gCQhSgDgjgIQgugMhUgqQhCgjhUgfQhsgpgqAEQgaAjAFADQAGAEACAIIA7ggQAMARALAGQACACAAAGQgCAVAAAcQhXAhgihEQggg9AkhSQAwgUA3gCQA9gBAshHQgLgNgdgUQhUg7A/hdIAzA2QAOgiARhNQAeimBlggQA4gUB9AJQBjAHArgIIhBgeQhSgkhLhKQAJAGADgGQAAgBAAAAQABAAAAAAQABAAABAAQAAABABAAQATAOAjAOQB/A2BigOQA7gJBaguQBHgmAugiQARAABiBVQB5BrAvAjIRGgCQAwglB1hnQBihVARAAQAuAiBHAmQBaAuA7AJQBiAOB/g2QAjgOATgOQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAABQADAGAJgGQhLBKhSAkIhBAeQArAIBjgHQB9gJA4AUQBlAgAeCmQARBNAOAiIAzg2QA/BdhUA7QgdAUgLANQAsBHA9ABQA3ACAwAUQAkBSggA9QgiBEhXghQAAgcgCgVQAAgGACgCQALgGAMgRIA7AgQABgIAHgEQAFgDgagjQgqgEhsApQhUAfhCAjQhUAqguAMQgjAIhSADIg6ACQBEBECVgQQAxgFAWABIgDAHQgFATg5AUQhTAchJAAQhtAAhWhAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187,-55.9,374.1,112);
p.frameBounds = [rect];


(lib.hair14_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair14_decor_img();
	this.instance.setTransform(-230.3,-52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.3,-52.8,461,106);
p.frameBounds = [rect];


(lib.hair14_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EAhCAINQhvgMhfgoQgrgSiVACQjcADiGgdQjqgzjCigQgbgWgsg5Qgxg6gZgSQAyC7B1BrQBCA8ByAxQAnAQAKAIQh4AVi+imQjNixg9jaQgYhZgKhOQgKhDADgoIxvAAQADAogKBDQgKBOgYBZQg9DajNCxQi+Cmh4gVQAKgIAngQQBygxBCg8QB1hrAyi7QgZASgxA6QgsA5gbAWQjCCgjqAzQiGAdjcgDQiVgCgrASQhfAohvAMQiSAPgrg+QAXgIAFAEQANAKAiAFQCOASCFhlQBZhEBtiTIBmiKQA6hEA4hAQAVgZBahVQBshnAKgSQhkAihRA2QguAgg/A6Qg6A2gbAJQBii0DziFQDmh9DmgRIARgCQA2gEAcAOIACgIIAPAAQANAMADAaQAEAjAEAKQAKAXAfASIAMgLIgEAPQAQAIAVAHIABgBIAAABQAfAKApAHIACgDIADAEIAJABIAEAKII/ACQHGADBrADQgDgBAAgDIAEgOIAJgBIADgEIACADQApgHAfgKIAAgBIABABQAVgHAQgIIgEgPIAMALQAfgSAKgXQAEgKAEgjQADgaANgMIAPAAIACAIQAcgOA2AEIARACQDmARDmB9QDzCFBiC0QgbgJg6g2Qg/g6guggQhRg2hkgiQAKASBsBnQBaBVAVAZQA4BAA6BEIBmCKQBtCTBZBEQCFBlCOgSQAigFANgKQAFgEAXAIQgjAyhkAAQgZAAgdgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.3,-52.8,460.6,105.7);
p.frameBounds = [rect];


(lib.hair13_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair13_decor_img();
	this.instance.setTransform(-176.9,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.9,-143.5,354,287);
p.frameBounds = [rect];


(lib.hair13_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A7eWbQgEAAgDgDQgDgDAAgEIAA35QAAgEADgDQADgDAEAAQAEAAADADIABABIA8grQBzhSDriaQE0jICOhsQF2kdBih+QBDhYBRjbIgEgCQgDgDAAgEQAAgEADgDQADgDAEAAIGwAAQAEAAADADQADADAAAEQAAAEgDADIgEADQAZBiAMA9QAKA5gDBWQgGCOBzBYIApAhQCfB9BSA0IAnAbQChBzBvg4QB7hAC0iFQDcimAThOQAKgrgOgsQgTgzAQhEQAFgcAahMQATg1AHgZIgEgCQgDgDAAgEQAAgEADgDQADgDAEAAID6AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgBAAQgYHUiyHSQiRF0hXFpQhyHaAkETQAeDnA2C2IADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.9,-143.5,353.9,287.2);
p.frameBounds = [rect];


(lib.hair12_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair12_decor_img();
	this.instance.setTransform(-193.5,-205.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.5,-205.7,387,411);
p.frameBounds = [rect];


(lib.hair12_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EgeEAgIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIABAAQAHgpAJgqQAThVA0hcQAig8ANgpQAMgtgqh2QgihegEgwQgRiwAdiQQARhTAwh3QAnhgAFgvQAEgzADhfQAFiBALhKQBRoMFopOQFDoSG1mZQBihdCDhiQCbh1BdgmQB0gxB5CXIAIAJQBXBuA/hCIAngmQBdhYDSCVQDDCKDoEnQDqEpCwFPQC9FtA7ElQArDWgECZQgFBoAkBhQAVA+ALAwQAyDchMCtQgzB6A4BwQBJCSgHDKQgECsg7C2QgQAugdA4QgSAhgIAlQADAAACACQADADAAAEQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.5,-205.7,387.1,411.4);
p.frameBounds = [rect];


(lib.hair11_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair11_decor_img();
	this.instance.setTransform(-193,-242.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-242.5,386,485);
p.frameBounds = [rect];


(lib.hair11_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EgQmAl5QgEAAgDgDQgDgDAAgEIABgEQglgOgWgNQivhmgejVQgajIBsiuQATgeAsg4QBriGABhfQAAillQjOIgXgOQkpi5heiZQjZlkELmKQBeiKCGhQQBRgyDDhFIBggkQD7hggNiaQgJhgifjjQh8i1gZioQgWiMBaibIAnhFQAWgqAUhSQAhiNBXguQA1gbA/gUQBRgYBVhxQBeh8B1gcQBGgRCMARQBKAKAlABQA0ACA2gSQAfgLAYgEQBygWCHBOQA9AkAmAQQA3AWB6AFQCJAEBCAeQBIAhBLCPQApBNAZAhQAjAuBWBGQBdBMAkAzQCFC+gaC6QgQBxhuDMQhzDXgOB3QgXDHCaDQQBXB1BiBbQA7A5CDBmQBWBDAxApQCoCJA/CmQBIC/haC3QgeA/g/BDQgaAbgfAcQhBA4iQBoQhxBSgvAnQjTCxAcCPQASBWCWCLIAoAkQBhBcCJC4QBiCDAvBWIAFAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-242.5,386.1,485.1);
p.frameBounds = [rect];


(lib.hair10_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair10_decor_img();
	this.instance.setTransform(-197.4,-240.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.4,-240.3,395,481);
p.frameBounds = [rect];


(lib.hair10_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EgeaAljQgEAAgDgDIgBgBIgCABQgDADgEAAQgEAAgDgDQgDgDAAgEIAAoyQAAgEADgDQADgDAEAAQAEAAADADIACACICthzQC3huCiixQCNiaCBjPQDallAYmzQAOkEhGnxQhVpiBAkZQALgzAlhDQAgg8ALgoQBJj8CIiVQBPhXCbhbQBhg6AggiQDIjQDXBuQC2BcB9EKQBACKALBAQAHAtgQBMQgSBVgFBKQABAdAVCyQkFgEh9CpQinDmAyEKQAWB5A/D3QALAoAaBIIAUA7QAXBKgLAdQgMAeAAAyQACBnC9CVQCEBlCaBSQB6BCCahpIAkgYQEQi3BChOQATgWBqg4QgVAxAaC5QAwDsAoCuQBfGSEuNeICCF4IAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.4,-240.4,394.9,480.8);
p.frameBounds = [rect];


(lib.hair9_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair9_decor_img();
	this.instance.setTransform(-232.9,-79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.9,-79.2,466,159);
p.frameBounds = [rect];


(lib.hair9_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AV+K5QiShPhAg2Qj0jFhsjxIgPAHQAeBEAmByQAwCUAwBLQBNB5CiCDQgsAIhqhgQhGhAg/hLQjvkVgommQgYj1Akh3QgaAUgcAVQjvCrk2AAQmGgBjmhkQhIggg0goIgHgCQAYB2gVDRQgoGmjvEVQg/BLhGBAQhqBggtgIQCjiDBNh5QAwhLAwiUQAmhyAehEIgPgHQhsDxj0DFQhAA2iSBPQidBVg/AKQAZgsBPgcQAxgTAcgQQBMgvBUhSQC5ixBhjZQgQAMgtA8Qg4BMgpArQhFBNhSA5QitB7i5A3IAQg2QAqh/AIg1QAMhHgHiKQB0guB8haQCMhkAzhcQgzAXhXBFQiHBnhZAPIhVAiQgcgdgTg5QgihdhZgpQhugzhOAjQg0AWgtgHQA8hOCRgyQBVgcC7gmQDVgqA5gkQhugRjPAaQjfAdhyA5QgYAOgsAhQhJA8gogKIA9gsQBxhTARgvQAYhIhrhxQg1g5hWgIQg5gHgggQQBngxCWASQBXALCxAxQDSA+BKgLIhggsQj2hwhsgWQiYgfj6AnQAdglCEgbQBvgXBNAAQDUgDEGBRQCSAuBMAGQB7AKCLgwQAegMAzgfQAngYAWgJIAAAAIASgEIACgIIAFAAIgFgIIAHAIIAKAAIAJAXIAPAWQATAegdgoIAGANQArBDAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgBABgBAAQAbAqAnAyIABABIACACQAaAjAiAnQBCAhBfAhQEOBfEtABQDvAACehYQAtgZBphIIA8gpIBKh0QAgguAhgZQAMgSALgOIAMgNIgKANIgTAaIAFgDIAPgWIAdAGIAAAAQAWAJAnAYQAzAfAeAMQCLAwB7gKQBMgGCSguQEGhRDUADQBNAABvAXQCEAbAdAlQj6gniYAfQhsAWj2BwIhgAsQBKALDSg+QCxgxBXgLQCWgSBnAxQggAQg5AHQhWAIg1A5QhrBxAYBIQARAvBxBTIA9AsQgoAKhJg8QgsghgYgOQhyg5jfgdQjPgahuARQA5AkDVAqQC7AmBVAcQCRAyA8BOQguAHgzgWQhOgjhuAzQhZApgiBdQgTA5gcAdIhVgiQhZgPiHhnQhXhFgzgXQAzBcCMBkQB8BaB0AuQgHCKAMBHQAIA1AqB/IAQA2Qi6g3ish7QhSg5hGhNQgogrg4hMQgtg8gQgMQBhDZC5CxQBUBSBMAvQAcAQAxATQBPAcAZAsQg/gKidhVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.9,-79.2,465.8,158.5);
p.frameBounds = [rect];


(lib.hair8_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair8_decor_img();
	this.instance.setTransform(-245,-215.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-215.2,490,430);
p.frameBounds = [rect];


(lib.hair8_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EAd0AhnQgEAAgDgDQgDgDAAgEQAAgEADgDIACgBQgLgTgOgTQhOhygWhnQgIgngFhaQgFhfgKgfQgKgbgfgqQgsg8gRg2QgThAAChmQAChLgJgpQgIgtgug9QgigugOgeQgbg/AEhdQADhBgHglQgGglgohDQggg3gMgiQgZhQAKhrQAFg4AAgkQgCgqglg7QgegugKggQgtiFAkiMQAUhTAEg6Qgrgtg7g0QhfhPg2ibQgsh8gzhNQgkg4gngfIgFgFQgngegqgEQgBAIg6AGQgbhvhBhYQjCkDlRitQiOhJhjA+QgsAdgcARQkkCviDCVQgzA7gkA9IgyACQiyAuhhDiQg4CEhdBAQg8ApgmArQAIAmARApQAZA6gRBaQgPBVgnAzQgZAggKAbQgRAsAFBdQAFBVgOAoQgPA1glAZQgkAYAABEQgBCfhLBeQgyA/gBBHQgCCEhTB+Qg6BYgFBDQgKCGgqBQQgZAwg1AvQgrAmgHAZQgEAUgEArQgHBYgiA5QgXAogdAZQgZAWAGBtQAJCdhyBfQgYAVgQAUIAAAAQADADAAAEQAAAEgDADQgDADgEAAIklAAIgBgUIABAAIAAgHIgBAAIgJoSQAAgEADgDQADgDAEAAIAAAAIABgKIACgxQAEh0BOhgQA8hJAKhAIAHg1QAKhXAag7QAQgnArguQAlgqAJgeQAIggAAg0QAAhHAVg4QAXhCAlgsQAagbAPgYQAcgpAEhCQACg0AMgkQAOgwAsg5QAcgnALgWQASguAAhMQAAg6AFghQAWh+Beh5QAug7AEggQAHgjgDhEQgFhaAPg3QAMgmARgfQATgfgFhMIgJhiQgWkJAOiEQAXjlB+hVQAvggAzhEQBGhhBggoQBEgfBGgDQAvgCAkgHQAggHAugUQA5gZAwgGQDvgcCZB6QCcB9gDDuQAbgOA2giQCNhZBPAGQA6AGBsBCQBQAvApAMQgHi5AuhRQAthUCehVQArgXBDgsQBjhBA0gFQBOgIB5BOQAvAeBYACQClAEB1CdQAYAgAZArQAiA5A6A3QBwBlAWC7QANBsgTDkQgIBpgBAvQgHDeAoC/QAYBuACBMQAAAlgHAzQgKBSA0BMQBkCQAJDRQAFBsAMBEQAJAuAtBRQAkBAAMAiQAPAuAIBhQAJBdAQAgQAQAdAdAqQAuBFAUBFQARA4AABiQAABfAPAuQAKAbAnA6QA1BMARAxQARA1ACBiQABBdATAsQANAkAkAnIAQASIABAAQAEAAADADQADADAAAEIAABUIADACQADADAAAEQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-215.2,490,430.4);
p.frameBounds = [rect];


(lib.hair7_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair7_decor_img();
	this.instance.setTransform(-241.8,-212.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-241.8,-212.5,484,425);
p.frameBounds = [rect];


(lib.hair7_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A0ZfxQArg4ApgOQApgRAwhnQgrgwhcg8Qg8gngfgaQgKhSAHgYIAAgDIgFgJQgVgkgfg8QgRgigsg1Qgwg/gEghQgMheCBhPQB9hLAIhXQgzhFjbg1Qk4hLhXiQIA8iOQgugfhzgdQg/gRgagKQjxhUBVifQAthWCriCQApggAFgHQgRg6ichqQlKjiC8jFQCVicE0hBQC+gpA8g8QAFhNgsg6QgwhBAFhbQADheBAgzQA1goAggsQA+hWBggMQA9gFAkgTQAMgIATgOQAmgfAwgUQCKg0BuAVQAtAHAdADQBEAFAkgMQAYgKChBBQAtATAxAAQAmADAfAEQBZAUAuBZQAbA1AcAaIAYAWQA1AtAVBIQBcBFBCAjQCABECvAAQB5AAAXgJQAPgGAhgYQAog/gCguQgEhNh6iHQi+jSCliDQBPg/Atg/IAJgJQAbgeAngLQAqgOA7AJQA0AFAigLIA0gVQA0gUBqANQAgAFA/gHQCpgNCKBYIAZAQQAtAdAbAHIBCAWQA/AXBdBwQBKBbAMAbQArBqhEBjQg9BbAABWQBYAtCaArQEGBMCDCoQBsCJhLBmQgqA7ijBWQiKBGgdArQANA2BkBcQCMCBgXBdQgZBoklA4QhPAQgcAJQAHAnAQAfQASAngJBRQhzBajrAnQjLAihfA9QASBKBzBbQB4BjgbBNQgHAUgyAwQg7A4gWAkQhIBvASAHQAPAEgYA0QgXAkhEAgQhaArgpA/QASBPA7AgQAvAbAJA2QhBA5hEggIACgEIAAgDQAFgrgZgJIgHgCIgGgEQgTgKgbgJQgmgJgbgUQgggZgfhYQgchNgGg2QAog0BNgyQBdg6AJhfQgJgrjXhkQiuhPg4gPQAmhmAAhdQAAg6ACgrQADhUBBjQQAVg9AGgbQAbhmAFiXQAAhmALg2QAeighriqQhYiFigh6QgSgOgYgQQgGABgMABIhXAEQnwBei2CLQhRA+gpBUQgaA2gRBVQgQDEBREXQBhFDgNCjQgBAUAEAVQhGCHirBFQAAB2AwA/QAiAuAYAtQCCDzldBgQjoA/g1BUQAVBXBZBDQBDAzAiAtQgDAwgfBZQgkBjgfAYQgkAdgrAFQgiAFgVAOQgsAaADAMQAFARgxApg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-241.8,-212.5,483.7,425);
p.frameBounds = [rect];


(lib.hair6_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair6_decor_img();
	this.instance.setTransform(-172.7,-227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172.7,-227,346,454);
p.frameBounds = [rect];


(lib.hair6_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EgL4AjeQhegDgXhjQAwgxAeAAQAfAAAjgOQCGgygyhoQgcg9h+h0Qg2gxgPgUQAIgyAPgOQASgSARgdQg3hFgFg9QgFgsgSgoQgPgggagaQgggjgUhUQBViACfgoQCUgjBLhjQhCh0lBiLQmKirgrioICNiOQgog6jAhUQkeh4gCh3QgCiCDKhpQAwgXBBgUQBbggBbhDQgrhliuiLQjFiagFh0QgIiaDYh0QChhUCkgUQBSgJDEADQBvADAzAAQFBgDhOjrQhUj8DZhaQAfgOAggJQAhgJArglQB1hjByAUQBCAJAyAAQAegDAmgUQBbgyDAADQBlADB0AyQBKAfArADQAtAEA4AAQBOgEB/BdQA3AsBlAXQBtAXA6AuQBJA6AAA1QgBA/BSBPQBKBCAABpQADCLjnBoQhaAsgdAXQgRAggPAgQhFhGjqiNQjriNi9BRQi8BRjsDwQjrDwAAEOQAAEEAUCdQAPBlAxCyQAwCuAeCGQAQBFgFBpQgICIAyBUQA6BlCsCOIgWAjQAZDlgmA3QgeAvinAXIhbAOQgwAJhtAAQklAJhWBiQAKBdBvBxQB+CDhVBlQibC3hvAGQhjAFhbAVIAhAmQADADAAACIgkAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172.7,-227,345.5,454.1);
p.frameBounds = [rect];


(lib.hair5_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair5_decor_img();
	this.instance.setTransform(-230.7,-166.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.7,-166.4,462,333);
p.frameBounds = [rect];


(lib.hair5_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AupaAQgEAAgDgDQgDgEAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIhCgnQm9kKiyjsQjhkjAAnBQgDi8BZjDQAqhcAWhAQj9CjhSFqQg5ESDEEhIAuBDQhyg5hyioQhZiDhDihQikmYELlmQCgjWH6lvQCVhrBHg1QDWijAuj2QALg6ArhuQASBNAYBbIAPA5QA1C1ASC9QAOCOBABAQBEBEFyDzQCHBYC0h8IAngZQB5hLCriHQCShygShrQgLhHAEg2QAHhHAyiKQAVg5ASg9QAdhrARhrQAyBZAWAyQAOAkAcAnQCWDnILGWQHEFdCrC8QEkE/gHErQgHEalBD1QjZColnCVQASgrA4gdQBogxBjhoQEIkShnl9QhLkjh5hNIAOA9QA5DXgyCuQhVErkED9QiZCSlPDdQknDFhgCMIABABQADADAAAFQAAADgDAEQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.7,-166.4,461.5,332.8);
p.frameBounds = [rect];


(lib.hair4_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair4_decor_img();
	this.instance.setTransform(-231.4,-229.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-231.4,-229.6,463,459);
p.frameBounds = [rect];


(lib.hair4_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EgkIAj3QEBg8CigwQH/iXERjLQFrkNDNkHQEFlTAqlxQAjgpAcgkQAMAFAKgHIAtgeQBuhJCFhtQB5hngPhSQgMg8AGgwQAJhKArhzQBXjyADksQADivhwiOQhmiGihhwQhihFh2g9Qh2g8iLBbIgwAAQhtiMhziIQjRj1BehkQA8hCBzgiIA6gSQASgbAJghQAJgoBJgeQBCgbCFgMQCVgPDVBUQDfBYCqAAQCsgDC8BnQDmCCEiETQEOD/CpDsQF0ICB5HtQCPI6jFIVQg5CahbCeQh5DThbAiQASglAxg/QAzhJASgnQCtmKhMn2QghkEiJkIQghhDhhiXQhtiqghgYQASBVA6B8QBICgAlCOQA8D0AbGPQAoIFkRJYQh5EQivCyIgGAGQgrArgfApg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-231.4,-229.6,462.8,459.2);
p.frameBounds = [rect];


(lib.hair3_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair3_decor_img();
	this.instance.setTransform(-214.9,-240.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.9,-240.4,430,481);
p.frameBounds = [rect];


(lib.hair3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EghZAlkIgDgBIgEAAIAAgCIAAAAQgDgDAAgEQAAgEADgDQADgDAEAAIAAgBQAehNBGg3QAjgbAVgTQiXjZAUijQAPhvCUj8IAdgxQBmisCyhjQBqg+BqgVQCAgXBJA0QAIBDgjA5QgeAzARA4QDEBBA9jAQA7i6h8iSQgsgXiDBNQjfCDhkhpIhZiLQiFktBLj+QBEjmD+jjQCciOBmAdQA3ARAvBOIAKASQBeALBFgnQBRgsgEhbQgsgDgkANQglANg6gUQgKggAHgnIADgMIACgNIhVgxQgDhtCXhYQBCgnAcgYIg9AAQjeAChSgkQiKg7AHjBQAEhlBRhjQAug6BshbQBShFAQgaQAjg3AEh6QAEh1AZg8QArhoB/hSQB5hOCQg4QAkgNBUgWQBVgVAxgTQAVgIAPgIQAWgMApgYQCahYBKgHQB3gLBiCEIASAaQASAgAWAyQAuBqAuAiQBeBGB8hGIA0gdQBQgpBJgVQBfgcBBAKQC3AdAaCfQAVB9hPCtQgmBSg1BEQgkAuAMAsQB3AoBXiaQAyhaApgaQCgg2AbEdQAaEdi0BuQgcgQgnggQg2gugwgBQgHBsCAAgQBKASCxgFQBjgDAiAEQCrCpgjErQgNByhIBnQhQB2hqAOIhfh0QhGAygSA9QgnEcCihLQA0gYBIg8QAkghAqgrIAEgFQBig/BeA4QBOAuAvBpQBVC9hFDiQhMD8jggYIhlh+QhPAKh/BtQiGBzAQBIQA1ArB1gXQA3gKAdAAQDjgDh3DYQhfCqiLBnQgsAhhXBEQiJBshOA1QjLCJgygqQgdgXAVhqQAIgiAAgKQhlgFh/BcQgtAfgaAQQgoAahrA9QkACRhvBYQi+CYAECAQAmAbAwAKQA4ALAmA7IAGAKIgEAKIgnAAIgDABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.9,-240.4,429.8,480.9);
p.frameBounds = [rect];


(lib.hair2_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair2_decor_img();
	this.instance.setTransform(-96,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-56.7,192,114);
p.frameBounds = [rect];


(lib.hair2_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AJrHSQhuhLhKglQgcgNg2giQhEgogigPIgFgDIgLgEIgEgFQgfgQgugbQgTgNgngNIgrgPIgNgJQgqgQg/AZIgHAGQgTAJgfAKQgwATgcARIgwAdQgpAWgUAOQggAVhHAlQhaAtgkAcIgFAEIgMAFIgEADQhHAlhtBRIgVAQIgagiQgNgTgsgmQiDhuAPiJQAEgtAagXQARgQALgPQAAgdgGggQgGgzAXhDQAmhyCUhgQAbgTAbgmQAWghATgNQBPg6AygTQAPgEAfgHQAZgEAKgEQAIgDAPgIQBBgjB+gkQBBgSB4AAQB5ACBCARQBaAYBbAuQAaANAGAAQAKAEARACQAeAFAWALQB8A9AoA8QAXAkAnAWQBGArAlAxQBHBeAQBCQAJAjgJAvQgHAhAFAQQAwBIAJAkQAMA2gkBFQgZAxhHBFQgPANhKBVQhlhTgbgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-56.7,192,113.5);
p.frameBounds = [rect];


(lib.hair1_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair1_decor_img();
	this.instance.setTransform(-208.1,-146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.1,-146.9,416,294);
p.frameBounds = [rect];


(lib.hair1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EggVAW9QgEAAgEgDIgBgBQgBgCAAgEQAAgDABgDIABgBQAEgDAEAAIAAAAIAKhGQAmjsBrmJQBHkCBhk1QA6i6BHjOQDoq8CEolIAKAAQAAgEADgDQADgDAEAAIf1AAQAEAAADADQADADAAAEIAMAAQCOElEdIDQIlPdCfI0QBCDpAjDzIAKBGQADABADACQACADAAAEQAAAEgCADQgEADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.1,-146.9,416.2,294);
p.frameBounds = [rect];


(lib.glasses8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses8_img();
	this.instance.setTransform(-94,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-22.5,188,45);
p.frameBounds = [rect];


(lib.glasses7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses7_img();
	this.instance.setTransform(-113.3,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.3,-26,227,52);
p.frameBounds = [rect];


(lib.glasses6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses6_img();
	this.instance.setTransform(-67,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-12.3,136,25);
p.frameBounds = [rect];


(lib.glasses5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.glasses5_img();
	this.instance.setTransform(-57.2,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-43.5,115,87);
p.frameBounds = [rect];


(lib.glasses4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses4_img();
	this.instance.setTransform(-117.5,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-25.2,235,51);
p.frameBounds = [rect];


(lib.glasses3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.glasses3_img();
	this.instance.setTransform(-102.3,-38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.3,-38.8,207,78);
p.frameBounds = [rect];


(lib.glasses2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses2_img();
	this.instance.setTransform(-84.2,-23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.2,-23.2,169,46);
p.frameBounds = [rect];


(lib.glasses1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses1_img();
	this.instance.setTransform(-107.4,-30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.4,-30.2,215,60);
p.frameBounds = [rect];


(lib.glass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glass_1_img();
	this.instance.setTransform(-240,-240);

	this.instance_1 = new lib.glass_2_img();
	this.instance_1.setTransform(-240,-240);

	this.instance_2 = new lib.glass_3_img();
	this.instance_2.setTransform(-240,-240);

	this.instance_3 = new lib.glass_4_img();
	this.instance_3.setTransform(-240,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-240,480,480);
p.frameBounds = [rect, rect, rect, rect, null];


(lib.fringe20_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe20_decor_img();
	this.instance.setTransform(-187.2,-174.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187.2,-174.8,374,350);
p.frameBounds = [rect];


(lib.fringe20_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AQkbTQjegHhkjYQANgqAdgpQAlg2gchVQgpA0gSBQQgVBKgoAzQiDBgiYkHQiYkKBTikQBQhTAngEQAwgFA7gSIALiSQgwAPgQAgQgTAmhLAaQiEjQBChiQAjg4CSgpQAkgLAOgDQAGgsgHgoQgJg3gjgvQhEhZhiAcQgMBAAjA0QAQAVALAYQAQAgADAhQhqB1hpgyIgggPIAAABQgLhXgiiZQgxALhDAwQhnBLhpghQglgxgFhAQgDhGgghAQhuABhvAFQgQgOgNgQQgjgogUgrQgrhYAThnQAPhNAAg9IgDgzIgfAJQiJAohYAFQhhhYgpiYQgfAWhlgKIgegCQgugBgoADQi2B4gtC1QgSBIgFCAIgFBnIAPAxQAJApA0FpIgHADIAAADQBDEdhLjpQhMjpgiiiQgkifhChIQgMgPgNgMQi/jBgTiIQgJhMBIhuQAjgwAKgZIACgFQBAixBBhqQAqhEA0g/QApgwAwgtIA9g5IB8hmQAfgaAdgWQEJjQCQg0QBNgcBpADQBSAEBhAdIALAEQBOAWBfAGQBRAGAoAcQA5AkBOBrIAcAnQCggoDcBQIAGACQDzBbAVCfQhNAlhHAmQBFAyA+g4QBDg9BvAsQAvAUA1AnQBVBBA+BmQBGB3gMBUQg+AxgfgPQglgTgzgBQAKBhBPgIQA4gEAuAYQA+AhArBcQB1D2gJCKQgEAwgSAhQglBLiHAcQgkAHgIAHQAABhBJA7QAyAnAcApQAUEaiSBvQgxgJgKgUQgNgWgfgSQguCoBYDXQBhDxC1g5QARgzAHg+QAJhTBOhKIAmAKQBaASA0AAQA1hUhBhiQgtCZipiRQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAQk3C7BAQCxBBAlDqQAjDFgyBPQgbArhPATQgeAHgIAHQATDLg+A5QgmAghogLQhKgJgbANQgxAvgrBMQgyBaisAAIgmgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187.2,-174.8,374.4,349.8);
p.frameBounds = [rect];


(lib.fringe19_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe19_decor_img();
	this.instance.setTransform(-147.9,-145.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.9,-145.8,296,292);
p.frameBounds = [rect];


(lib.fringe19_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ALsWyQgIgVAsgnIAPgOQAVgVAmg1QAmg0APgeQAzhcATg+QAOgrARhoIAIguQAKg1AAg1QgNhugFgSIgGgUQgJgpgMgQQgdg6gKgOQgagnhBg3QgoghhUg9IhEgzQgxgnhvhLQichpg3g0IgmgjQhshlgrhAIhpiVIhQB4IgEAEIgFAFIAAADIgCAFIgEAEQgwA+gcAeQgSAUggAdQgmAkggAfQg7A5hjA+QguAdgXARIhIA0QiLBhhDA1QhAA0gqAsIAAgCIgCADQggAigTAcIACAIQgsBDgIAhIgEAOQgGAbAFAVIgEADQgLAIgDANQgFAiAHBVQAGBWAJAgQAGASAGAjIALA1IAKAZQAHAQACAHIADASQADALAIARQAIAUAYAtQAcAzAKAJIAWAeQA8BXA9A7IgHALIgFAAQgOgCgigaQgXgQgLgGIgDgEIgtgfQhwhPgwgoIgvgmQhUhGgpgkQhHhAghgtIgegoQhJhigfhRQgHgTgIg4QgVh2A1hzQAwhoBihSIAXgXQAPgQAHgHIAUgNQASgJAGgTIAPgmQAYg+AFghQARhfAEh9QADhsANhHQACgNAAgZQABgZACgNIAAgfQAIgsAIgeIADgFQAXhCAnhDQAqhMArgrIgGgMIgCgSQAJhSBFhWQA6hGBSg4QBJgvA5AOIAIABICRhnICHhIIAQgKQB1hMA+geQBUgnAogBQAfgCBIAeQBLAeBtBEQA3AjAYALQCGBDByBdIAUgDQAagGAdAMQBlAnBXBpQBdBxgHBhIAGAFIANAUIAGADIADAHIADAIIAGADIAHAGIADAHQAHATAiAyIAPAXQAeAxALAyIAOAoIAEAgQAAAlAJAuQAFAZgBBWQgCBiAFAmQAIA0AFA2QADAnAGAbQAJAlAdBaIAAABQAJAeAPAJIAQALICHCEQCcDFhGDQQgLAdgfA8QggA/gSAXIiACMQhOBOhxBZQhSA/h8BXIgFAEQgIAFgUAPQgqAfgQAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.9,-145.8,295.8,291.7);
p.frameBounds = [rect];


(lib.fringe18_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe18_decor_img();
	this.instance.setTransform(-156.7,-175.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.7,-175.4,313,351);
p.frameBounds = [rect];


(lib.fringe18_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Av+a4QANgKAFgHQBZhrAei7QAShzgBjPQgBi6hhlQQg9jQgXh1QgnjFAAjCQgMAIgQASIgQASQgRAQggAWQgiAZhKAgIgBABQhkAsh+gEIgxgBQAbgRAngPQAvgUAYgZQAnglA6hlQBLiDAxiSQAfhaAwjBIAYhiQAtiyA5g7QA+hBCqgjQAigHAhgCQAhgBA6g0QBEg6CLhrIByhXQEjjgBcgNQBegMERCWIAoAWQC4BkDOCpQCaB+DEDBQB2BzBdCTQB7DDgbBsQgVBRhNCBQghA4gQAeQgGALgNAUQgtBEBCAZIByAjQA1ARAAACQgDAMgxACQgwABgjgJIiBgUQgEATgMAjQgSA6gFAfQgNBoAYBAIAHATQAaBJAbAcIAYAaIAUATIAOANQAWASACARQgbgHgwguQgbgZgzg2IgbgeQgjglghhFIgEgIQgQgigEgVIgEgQIgGgcQgjiUAEgqQAEgtgsgVQhjgvhghzQhbhugnhxQgHgUgRhUQgPhKgDgGQgLABgWAnIgOAUQgMAPgeAdIgRARQiZCUjoBnQjqBojOAEQg4ABg4BVIgMATQhmCPgqBWQg2BvgbCRQgOBEgKDzQgCA6gJBeQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBAWIgHBHIgEAbIgJBLQgCATgXBeIgNAsIgEAQQgMAvgZAxQg6BtgrA6QgnA3hTBaQgnApgcAZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.7,-173.5,313.5,347.1);
p.frameBounds = [rect];


(lib.fringe17_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe17_decor_img();
	this.instance.setTransform(-131.6,-138.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.6,-138.3,263,277);
p.frameBounds = [rect];


(lib.fringe17_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFgCQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIgDABIgGABg");
	this.shape.setTransform(-51.6,-112.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ATMVSQAQgJALggQAQgngkhaQgfhPgigoQg1hBg3g3QhKhNgugcIgEADIgQgTQglgehGgtIg0giQgggWhKgiQgvgWgWgMQhJgnhvgvQhygwhOgZQjIhChggoIgDgCIgKgEIgJgEQgkgPgdgUQhGgxgdgaIgxgoQgRgOg0g/Qgrg1gKgHQgFAKAHArQADAYAJAqIACAKQAJAqAqCJQAtCUAOAZQAMAVASAmQArBZAtAtIAJAKQA0A0AgAWQA2AmAvgFQAFgUgUgSQgFAGgCAIQgDAJgUgBQgRgUAXgdQA+gGAKArQAIApgmASQhDAGhTglIgPgHQhegohahFQg9guhdhbQhBg+hAhwQhAhwgShTIgGgeQgUhqgMgPQAAAJgMBEQgOBTgFAsQgLBQgBAuIgDCJQgBAKACAXIACAbQgBBRAjBfQAdBLA2BYQALARAaAdQAZAaAEANQgTAEgQgNIgEgCIhYhSQgLgNgngmQhZhnhQhCQgGAuAVBKQAPA1BHBrQAPAlAmAsIALAMQALANAXAOIAUAKQAEABABAIIABAJQgeAAgXgQIgVgOQgqgZABgIQAAgCgRgEIAAACIhahMQgggcgsgxIgdgeQgogmgWgdQgRgYgUgYIgDgDQgNgXgcgpQgdgsgNgWQguhSgPg6QgZhYAuiNQAnhyBDhqQAlg5AHgXQAFgTgFgmIgBgJQgCgQABgnQABgegBgOQAAgMgCgOQgEgYAAgqIAMiuIAEgFQAVhWBQhxQBFhhBNhHQAVgSASgWIB7hxQAngkBQg8QAlgaATgPIAFgFIALgHIAHgFIAJgBQAAAAABAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgFIAHgDQAPgHAagPIAKgGQAkgWAVgKQAzgXA3gfIAYgNQB4hDBEgdIAKgDQA+gXArADQAjACBFAYQAdALBBAjQA2AfAZAKIAFAEQAaATA3AYQAnASARALIBDAoQBYA1AiAYQAtAfBgBOQAHAGAEAHQAFAIAGAEQBmBYBnB2QCDCWAWBRIANAhQABASAIAkQANA0gEAeIgCANIABARQAHAzgHBbQgDA1gNBpIgIBJQgFA1gbBrQgQA5gGAcQgOA7AXAqIAIAOQAeA4APBrQAOBjgKA+QgKA5AbAmQAXAhANAiQA6CZAOBaQAVCehVA2IgNAHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.6,-138,263.3,276);
p.frameBounds = [rect];


(lib.fringe16_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe16_decor_img();
	this.instance.setTransform(-120.2,-99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.2,-99.9,240,200);
p.frameBounds = [rect];


(lib.fringe16_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("APeNfQgGg5hDhwQgqhHACgSQADgSAvhKIASgdQgRAEgcAHQhCARg/AAQAAglAQg1IAMgjQgwAXhKgiQgLgFgEAAIgBAAIgBgCIgIgLQgLgaAghxQATg/ACgVQgRAMgbAeIgRAPQgWAYhPAyQhSAzgcAHIgBgCQgagnAAg5QgQAFgFAKQgNASg7AVQgTAHgWAWQgWAVgRAJQgUALgSAAQgUABgbAPQguAcgfABQgXgBgRgHQgJgFgIABQgEgCgQAGQgwAQg9ggIgfgSQgIgDgPgBQgRgDgPgGQgXgKgVgXQgVgVgUgHIgVgEQgPgDgOgMQgIgHgJgKQgKgKgKgHQAAAugiAyIgBACQgmgJhXg+QhLgzgqgpIgKgJIgUgRQANA1ASA4QALAmACAoIACAWIgCAJIAAACIgCADIgDANIgBABIgGAAQgIACgLAEQgqARgqgBIgbAAQABARANAgIAIAWQARA8h+gWQgPgDgWgIIgcgIIAEAHQAaAlANAXQAYApABASQACAWg4BXIgJANQgrBNgHA+QgCAOAIAYIAABQIhkkZQgHgbgLg8QgQhVgKgkQgXhKgGhjQgFg8AAh1IAAgWQAAgUAFgaQADgYAAgVQhAgQARhMQAOg6BDgBQAahrBpiKQBliEBnhEQAAgMgCgYQgGg2AbgYQAigdA2AkIAEACIE1jAQAbgSAygYIBVgkIAIgDQAZgLA4gPQAsgNASgHIAUgGQAJgEAAgDIgCgCIANAAQAYAAAaAJQAfANAiAHQA1AMBTAmQBNAiAwAfIExC+IALgFQA0gcAiAbQALAJAEALQAWAtgXAuIAZARIAEADQCtCFBwDmQADAGAFAQIALAXIAEAJQAGAIAEAAQAJAAALAEQAzAPAAAsQAABHgxAZIAJBfQAHA6gCAhQgBApgOByIhJFmQgFAPgEAHQgDAFgFAMQgDAHgCAQIgGAWQgIAhgPAwIgmBag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.2,-99.9,240.4,199.9);
p.frameBounds = [rect];


(lib.fringe15_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe15_decor_img();
	this.instance.setTransform(-138.8,-103.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.8,-103.2,278,206);
p.frameBounds = [rect];


(lib.fringe15_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AwoOEQgHgYgJguQgHgwgIgaQgtiJgPj/QgSkXArhgQAZg5BPhbIAsgzIgXAAQizAAhSgiQhAgcgagsQhIh+BciSQA8hjCQh1QB0hfCzg2QDYhBAlByQASA3gVB2QgMBCghB3IgLAnQBWg3A5gwQBQhCC0hcIBFgjQBggxBKAAQBXAACrBaQB2A/B8BXIA9AuQA2AqAZARIgVhRQgtisAAhJQADh7BpgSQClgbD+CvQENC7ASDMQAOCQiKAwQhgAhiZAAIgbAAQB9CRAdBVQAdBYgQDCIgHBqQgGBzgHA5QgMBbgbBWQgIAYgJAvQgHAugiBFIgKAAQABhygahsQgeh5gvhmQgehChYhhQhKhPhMg/QhLg/hYAKQg1AGhpAwQhAAeggALIhJAbQhsAogiAJQg1AMjDhVQiRhAhGgSQhygeg/AkQg7AjhbBfQhPBUgzBGQgrA7gxCiQgvCaACA2QABAXAXBRQgyg9gGgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.8,-97.9,277.7,195.8);
p.frameBounds = [rect];


(lib.fringe14_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe14_decor_img();
	this.instance.setTransform(-143.4,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.4,-152.5,287,305);
p.frameBounds = [rect];


(lib.fringe14_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AI1W5QAbgSAUgTQAvgoAphFQAagoAqhWQAbg2ANgYQgHACgxBrQCBk0gikNQgrlSjmirQk2jkhnh2QhChLgdhqQgbhogwhXQgIARgUBEQgbBmgTAoQg1B0hIBMQhJBPisCBQiXBzhCBBQhuBvgzB6QgjBVgFBkQgDA9AKB6QAJBsgBA4QAfByAwBXQAPA3AjAzQAfAtBOBKQBIBDAdAoQhNgXhvhVQg/gxhoheQgygvgbgcQgVgXgvg6Qghgpg9gjQgxgdgbgbQjZjegXjGQgOh0BDi1QAbhEAIgiQhFhRgNgrQgHgbAPggQAXgzgPg5IgJgiQgXhVAFglQAFg2A2hYQAcgrBTg+QBUg+AWgtQBVisCui1QClirC2hxQB3hJClhQQDahrBAAIQA9AGDfB1QDCBmBXA7QDgCZClDGQBbBtBYCUQAdAwAGAFQAZASAoAaQA0AiAVAWQAeAhAkBHQAvBhgBAyQgBAegZAfQgdAhACAiQAFA6AZAuQARAfgJAXQgNAehKBTQAOApAaBFQApBqAHA4QANBZghB0QgjB7hdBrQg1A/hyBbQhPBBgZAcQh1CGhpBfQicCLhrAfQAQgmAhgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.4,-152.5,286.9,305.1);
p.frameBounds = [rect];


(lib.fringe13_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe13_decor_img();
	this.instance.setTransform(-131.2,-183.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.2,-183.1,263,366);
p.frameBounds = [rect];


(lib.fringe13_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ANdadQgFhZAfg/QAZgyA1hNQBciEAEhiQAGiViBkPIgLgXIgHAKIgKgtQgsi2AEg3QAEg3AtiCQBAi4gBhdQgBhyglhvQgchShEh/QhzD+ijByQiGBck1BPIhCARQiKAjhPAWQiMAnhqAmQkZBohUBzIgyAdQg7AxgzBfQgtBWgUBYQgWBmAKBQQAFAyAeBYQAWBGAKApQhLgyhBiqQg1iPgOh3QgDgfgEiBIgGj3QgFjbgCgDQgPghgdgpQgzhJgKhkQgHhBAGgyQAHg2gchkQgShFAChOQAChMgFhIQgJiABwj7QBqjvBgheIBEhFQBchhAygsQBVhIBPgiQBrgtCngtQDCg2BTAEQBuAFBrA4QA9AhBeBKQA9AvAZAOQCLhYBaAXQBXAVBuCNQCgDRBJBxQB0CzA1CeQCAGHjUGzQiJEWAHCBQAEBUBjBsQCNCcA0CxQAsCXglB1QgiBqh1BzIghAgQhcBYglAzQg+BTACBHQABA3gKAxQgvgrgFhfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.2,-183.1,262.5,366.4);
p.frameBounds = [rect];


(lib.fringe12_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe12_decor_img();
	this.instance.setTransform(-126.5,-113.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.5,-113.6,253,227);
p.frameBounds = [rect];


(lib.fringe12_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AQ+RwIgOgeQgcg9gXgeQgqgzg+gMIg6gWQAaAHACgEQgZgLg1gRQgpgNgUgIIgcgMQgagNgOgFIhEgVQhxgohyhBQg8gighgOQgdgMgSAAIgfgBIg9gEQhOgEgmgGQg2gIhVgWQgZgFgxgPIhJgVQANAUBeAkQBdAjAqABIAIAAQA6gBAQAZQhFAQhPgDIgygCQglgCgcgEQiTgYiehgQiJhSh4h3IhGhLIgGgLQgFgHgKgLQgOgNgdgxQgcgsgJgHIAFAfQABAOACAHQAMA0AsBYQAqBUAjAwQA7BOA3ArQAhAYAvAWQAsAUAOAWQgsAAh2gsQhtgpg1ggIgygiIgggWIgTgNIhXhMIgOgOQgOgQgKgJQhFhZgOgVQgSgbgOgdQgfg7gMguQgJgegIg7IgKg4QgDgTAIg/QAHg8AFgUQAchfAjg/QA5hlBCAEQAKABAQANIAKAIIEFkgIAcgXQAYgSAIgJIAcgbIBdhKIADgDQAXgLAmgZIA7goQASgMAvgYQApgVATgLIAIgFIAKgIIABgBIAAgBIABgBIBlg5QAVgOAvgSQAogQAdgJQA5gSBeAsQA3AZBnBBQBBAoAUAJQAgAOBEAoIAWANID4DGQAIAHAIALQAGAKAFAGQAJAJAWATQAaAXAIALQARAVA0A6QBKBSAYAjQAOAUAaAsQAlA9AUAaQAUAZATATQATAUAXAkIAKAOQAoA6ANAaQAQAgAZBJQAfBfAABBQAAAdAEAVIAAA2QgDAPgDA8QgHBugKAxIhVEoIgIATQgGAOgEAQIgoDKQAAALgCAIIgCAOIAAADIABAAIAAABIgDAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.5,-113.6,253,227.3);
p.frameBounds = [rect];


(lib.fringe11_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe11_decor_img();
	this.instance.setTransform(-116.8,-115.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.8,-115.6,234,231);
p.frameBounds = [rect];


(lib.fringe11_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("APjQ0IAHgXQARg4ghhGQgbg5gygxIgCgDIgEgCIgOgNQgbgWgGgUIASgIQA5gYARggQgrAKhYAIQhpAJgYgMQAGgRA1gnQAlgaAJgLIATgVQAQgSAKgOIAGgGQASgYAQgdQgaAHg0ATQg5AVgeAHIhcAUQgVAEgYACQgVACgOADIAAgVQAlgKBJheQBFhYAKgnQgbAGg1AkIgTAMQgXAOgnASIjRBUQgmANgOACQgcAEAWgaQBFhOAuhvIAPgcIAJgSIAVg4QAOgpABgPIgRATQgXAagLARQgKAQgVARIgVATIiwCbQgyAngvAfQhJAwgcAAQgpABiPhwQh0hZhBhBIg/g/IgCgFIgugvQAWBgBTCQQAJAQAYAeQAnAxAGAfQgNgCgfgKIgWgGQh5gliWhOQgQgIgdgSIg1geQAJAlA1BGIAYAfQAKAQApAmQAwAtAFAPQjEgRiOhEQAQA5B9BnQAqAjAHAKQgbAMhCgJQgcgEgMAAQg+gBgcgHQgVgEgXgCQAgAwBCAQIAAANQgoAPg3BUQgyBNgIArQgEAaAMA5IAABGQg0hsgOg2IgQhDQgtirgQiFQgCgQgFgOQgGgRAAgeQAAgXgEgbQgDgUAAgPQgKiyAXiRQARhcAegxIAGgHQAqhHBRhKQAugrBbhGQBXhEAPgWQgcgIhPhDQgTgRgIgFQhUhDAAhSQAAg/A3hIQBMhkB3hMQAkgXAwgSIArgPQAOgHAHgJQAIgNAVgOQAkgXBYgoQB5g3DAgFQAQAAAVgDQAYgFAXAAQBqgBBiAPQBzARBUAjQBPAiArAcQAXAOASASQAJAKAIAEIBfAnQBlA3BMBMQBiBhAABWQAABkhVBDQgKAIgWAVQg9A3ghAJIAAAPQAPADANALIAOAOIAOAJIAXAQQATARAmAeQA5AuAbAbQAKAKASAOQAYATAOARIALAMQBJBYAVA2QAkBaADCNQADBUgLCYIgDAxIgUB8QgOBOghCRQgeB8hACHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.8,-115.6,233.6,231.3);
p.frameBounds = [rect];


(lib.fringe10_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe10_decor_img();
	this.instance.setTransform(-127.4,-93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.4,-93.7,255,188);
p.frameBounds = [rect];


(lib.fringe10_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Aw2NZQgHgUgGgLQgPgggmg7QhaiUAIheQABgTAHgeQAOhEgagtQgzhdAKhhQAKhWA5hNIACgDQAggqAShIQAIgjAHgVQAWg6BOhNQBIhHA/ggIAmgRQBHgfAhgtQANgPAQgXQAigyAxgkQCdh2CIg7QDxhtByAAQB5AADzBxQCJA/CcB1QAqAgAgAwQATAdAPATQAdAkBFAdQAgAOARAJQBCAlBCBEQBIBOAUBAIAOArQAVBIAkAyQA4BMAKBdQAHBNgmBIQgMAWgGANQgTAnAMBOQAHAlAAAVQABBahcCPQgnA/gQAfIgFARIg+BGQAUhyg/hUQg4hNgLgpQgDgLgBgYQgBgngOgOQgJgJgfgMQgggOgMgJQhihHgwhUQgVgigQgPQgNgMgwgVQhCgcgogcQhGgvg1hQQgJAGgnAqIgZAcQg1A1iKBVQg0AigLAKQgUgPghgUQgZgPgNgJIgngcQiBhfg7hJIgaAcQhEBJglAaQgWAPhPAlQg9AcgHAHQgRARgUAlQggA6gpAjQgnAjghAWQgLAIgZAJQgmANgKAPQgLAPgFAsQgDAggFAOQgKAfglAzQgHAMgRAVQgxBAAlCAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.4,-93.7,254.9,187.5);
p.frameBounds = [rect];


(lib.fringe9_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe9_decor_img();
	this.instance.setTransform(-163.4,-193.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-193.3,327,387);
p.frameBounds = [rect];


(lib.fringe9_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AvecsQgJgEgRgDQgggKgVgLQhDgjg+g9QhGhHgPhAQgWhaBThnQA6hJgFguQgXgSg7ghIgXgOQhVgzgwhKQg/hfA0hJQAyhKBRglQAwgXBrgZIApgJQAHgDAQgCQBFgOAMgkQgMgRhYg5QhFgsgtgaQgqgUg8g1QgrglgzgyQhBhAhMilQhKidgOhhQgokUDnjmQBBhBCphEQB3gwCMgoQACh8AqhOQAkhCBkhbQEdkCFNjIIDMh8QB3hHAHgBQApgJEcC1QDzCZBdBJIAdAXICHBsQBKA8A5A0QBdBTArBCQA6BagCBjQAABbA8AVQAnAPAcARQBiA8AmBJQAtBegLB+QgJB2g1BiQgqBNg9A+QgnAlhaBHIgfAZQhmBSgdAyQgKAQg9A7QAFgXAIgYQBUkhAMg2QAdiJAJhWQgNgMgSgGIhtggQhtgmhagtQhwg5hAg7QiAh4g4hbQg1hVgxihIAAgDIgGgNQABBMgyCbQgxCSgsBKQiADTiqBXImfCyIhEAaQh6Aug7AYQgqAVghATIAAABQgtAbgaAZIABABIABACQgcAUgKAFQidBrBQB+QASAdBMBCQBNBFCtB6QBQBUgbBJQgPAqhAAxQgJAGgEAGQhRAOgUAFIgJACQgYAFggABQgXABgQADQhnANg/ASQhsAeghAyQAFAyB2AxQBnAsARAnQAZA7gtAsQgXAZhBAlQg9AkgWAWQiHCDCLCgQBCBMBMgHQBWgLAAhuQg1gYgLA4IgMAFQghg8BAgxQBHg2AmBGQASAjgLAxQgTBMhlAfQgZAIgXAAQgaAAgZgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-184.5,326.8,369);
p.frameBounds = [rect];


(lib.fringe8_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe8_decor_img();
	this.instance.setTransform(-118.8,-111.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.8,-111.3,238,223);
p.frameBounds = [rect];


(lib.fringe8_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape.setTransform(-19.3,-51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_1.setTransform(-19.3,-20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ARrQ8IgEgDQgMAHiChIIgXgIIgBAGQhUgSgYgDQhggLh5AUIgmAKQgeAIgMACQAAhMhNh5QgthJhXhsQhPhhg4hnQggg5gehKQgMgcgEgFQAABaAbBZQALAiACARQAIAzAGAPQAHAQAHAbQAzC2CCCrIAYAdQAZAbACAXIhyAFIhvgQQgUgFgzgIQhqgUglgQQgqgPhfgeQiyg2hHglQgcicgChbIgLiqQgBgRAFgLQAGgOABgYQADhhAKgbQAFgOACgaQgVAYgcBzQgXBbgIA1IgYDyQgCAZAAAfQgCAXgPgGQgWgIgUgDQhxgWiGgLQiYgOh5AjQAbgLgOgIQgXgDgiAGQgoAIAShbQAUhhgDhNQgDg5gViCIgJgkQgIgigCgSIgBgsQgBgngDgTQgSi4BCiKQAqhZCTisIAQgUQDdkCDeijQBFgyCYhTIA2gdQBig1A5gFQBAgGBdAuQA9AdB9BQIBXA2QDdCDCcCJQC0CgB1C/QBkCjAHC4QAEB3gsD3QgNBIgRBIQgMA2APArQATAxAOAyQAdBfATBVQAeCIgPAhIgBAAQgLAAgogdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.8,-111.3,237.7,222.7);
p.frameBounds = [rect];


(lib.fringe7_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe7_decor_img();
	this.instance.setTransform(-154.6,-181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.6,-181,309,362);
p.frameBounds = [rect];


(lib.fringe7_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ApMcRIkuiKQjhhbiPiWQipiwgMjZQgFhZAZhNQAIgaABgNQABgIhBhoIgUggQgphNgIh1QgJh8AmhLQAag1AfglQATgYgKgpQgVhlAbhYQAchiAwg+QCBiqCZgWQgMgaAFgzIACgRIACgTIgBgbQADg8A3hkQAmhCA5hNQBChXBRhKQAxguB0haIABgBQDaiqDag4QEBhBDcBwQAAgOgCgfQgIhTATgpQAdhIBvgxQAjgPAWgHQAHgBABgEQACgHAEgHIADgFQAXgnASgWQCojQAAEPQBtAABoA1QBRAoAjApQAXAaA8AGIAOAAQAYABATAFQBjAZgBA4QgBAig2BTIgKANQAsBigQBnQgCATABADQANASAfAeQAcAbAMAPQAgAsAfADQAcACAaAIQBnAggLAyQgGAcg5AwIgTARQAYBEgJBKQgJBZg0AkQhFAviqgcQgsgIgUgCQgBAUAEAjQAEAfAAASIAAAkIgCCFQgEA8gJBcQgGAyAVAUQAdAaAWAtQBGCTgzBuQgeA9hbBKQgSAOgMALIgJgLQgHiXhshMQg1gliYhZQjTh5g3gvQhbhQhAhQQgWgdgNAaQgSAjgTAdQhoCWiGB4QhSBIiiBvQjgCchjBxQimC7g5CUQhGC3A1DaQAJArANAhQALAbAMAWQAeBGABATQAKAgApA1QAYAeArAvIAQASQAUAZANAJIAWAQQgDABgBADQgBACgIAAIgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.6,-181,309.3,362);
p.frameBounds = [rect];


(lib.fringe6_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe6_decor_img();
	this.instance.setTransform(-149.4,-204.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.4,-204.6,299,409);
p.frameBounds = [rect];


(lib.fringe6_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AoaczQhOhXiSi0IhchwQgbggg1hJQgyhFgbgfIiXjZQiJjVhNicQh1jvAAiSQAAhuBaiKQBPh5BnhQQAegYAGijQAEiEAMhIQATh7A0hUQA/hoDqiSQCrhsDChcIBBgcQCohHARgRIg8gjQhjg8hmgOQiGgShUAXIhOATQAEgRBIgzQAngcBMgxIAWgPQAggVBNgmIAigRQAUgLASgHIADgBQB5gtApAKQAsAJBzBkIAQAPIAIAFIAPAPICHCKQAAgcAIg1QAJhHgEgkQgUjBhTiEQgog+glgZQgTgMgGgPQAsAABTAgQAyASBKAiQCYBEBABCQBcBhg7B2QhBCDg5BFIDVCVQBgBFAYAUQDOC3B2B4QDCDDBNCFQAOAaAjAwQAdAoANAVQBVCTAbBnQAcBnAACpQAABdgyElQg2E8gjAhQgJgOAIgaQAFgPACgKQAFgrgIhLQgFg6gMg9IgJgwQgOhJgJgpQgCgpgXg7QgyiFgjhGQgihFgVgWQAAAxAMA+IAEAUIAeEmQAMAUAABqQgEAXADAlIAAACQAEAvgGAfQgWCGg/B1IggBAQg0BpgKAHIk3HuQgGAWgoA9QgPANgMASIgfA1IhmCfQhDBlgPAIQABgZAZgxQAUgkAGgTQAEgPANgfQAWg5ADgaQgBgYBCibIAnh4IAviNQAahWAiilIAShPQBMlZgQloQgGiNgdjdQglkggkgmQgMAxgLBUQgdCwgqBUQgeBAhtCKIghArQguA7hqBgQhhBZhHAyQhuBQi8BmQjPByhbAVQABgbAVgHQAMgDAIgEQAlgQBuhhQBqhdAfgpIAkgrQBWhqAog5QBHhjAOgwQglAchAA+QhOBKgvAiQi5CIjnBPQgOAFgeAIQhQAVgFAzQgSDFAWCYQAbDKAjCKIAOA+QAYBlARAaQAHAKANAOIAJA8QATBHBeCKQAdArANAVQAJAPATATQAZAZACAdQhQg2iGiVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.4,-204.6,299,409.3);
p.frameBounds = [rect];


(lib.fringe5_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe5_decor_img();
	this.instance.setTransform(-117.9,-99.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.9,-99.7,236,199);
p.frameBounds = [rect];


(lib.fringe5_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("APuMCQgEgrgVhBQgSg4gWguQgSgogug3QggglgPgYQgLgQgHgSQgJgVgkgVIhWg8IgKgDQgMgDgWgKQhMghgQAKQgOAJgpgKIgBADQgiBGgeAIIgoANIgJADIgDADIgCAAQgMAIgLAVQgLATgKAFQgTAKgcgBQgpgCgbAlQhFBhhOgnQgqgVgZAAQgHAAgsATIgJAEQhWAfgwhKIgOgTIgBgDQgRgXgggHQgLgCgTAAQgYgCgLgGQgLgFgKgTQgIgQgIgHQgGgFgYgIQhWgagFhCIgGABQgYAHgYgFIgQgDQgTgEgOAFIhlArIgWARQgdAZgdAOQgXANglA5QghA1gcAhQhmB8gOCqIgCAPQgDAcADAKQAFANADAQIAABrIgJAAQgOg9g0hvQhFiSgShlQgThsABhgQABh5AfhQIANgZQALgVgHgZQgYhcAlhuQAKgfAPgeQAbg5Apg3QAOgUAZgYQAjgiAEgkQAMheBchuQBhh1BTAAQADgzBIgSQAYgFAWgCQAVgBAhgcQAzgrB8AJQAjACATAAQAmAABdg5IAegSQAHgFAJgEQBfgrCABMQBjA7BugKQBWgHA4AuQAIAGAGAHQAIAIAWADQBZANARAXIABACQALARAOANQAEAEAOAGQBBAdBNBGIAQARQBUBdASBlQAHAzAMAJQAQAJAPASQCACQAVCvQADAXgOAuQgIAWgCALQgCAKASAoQANAeACAKQAaBkgFBtQgDBOgYCAQgNBLgiBNIhCCGQgpA6gZAtQApiAgHhOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.9,-97.6,235.9,195.2);
p.frameBounds = [rect];


(lib.fringe4_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe4_decor_img();
	this.instance.setTransform(-165.4,-188.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.4,-188.8,331,378);
p.frameBounds = [rect];


(lib.fringe4_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AQidgQgKgCAMgbIC3mBIAph0QAXhIAHg2IAKg7IAHgbQAGgVABgJIACgPQANhYAAgfIgCACIgCAEIglBQQgJAWgWAeIgOAXQgnA/g0BJQgfAshDBYIhaBvQgEAHgnALQAEgIACgDQAJgGAGgJQAVgaAXhNIAMgmQAlhrAEh3QADiBgphaIgDgHQg0h3gwggQAAADgGgCIgQgkIndmmQgxgnhGhFQgzgyhsiBQiAiagGgmIgBgCIgCgCIgDgLQgDgQgBgQQgFAMgCAQIgCAOIinDoQgzA+g8A8Ii3CqQgLALgVAPIghAYIgmAkQhfBcg1AoIh5BwQhDBOgRAJQgdAUgiA6QgKARgOAfQg1B1gCCDQAABBAjCCIAJAfQAdBpASA8IgEADIgIgOIgOgTIgZgdQgWgVgMgRIgigtQh6iig0hYIgKgRIgNgYQgKgOgRgmQgWgxgQgTQACAhAPBbIADANQAQBmAOA4QAPA4AfBbIAhBeQASAuALAZIB6D5IglgVIgegbQgigkhBhdQg6hUgeg2QgGgNgJgLIgLgOIilkfQgQgcgYg1IgOghQgshkgPg5QgVhcAEiEQAFiIAfhNQAmhgA3hJQAMgQAVgYIAagdQANgQAcgWIAagXIBZhYQAkghAygiQA8gngDhTQgEhgAEiWQAFiXAKhaQAFg2AfhdIARg3QARg6AmhBQAVgjAEgQIgpADQhIAFgpgEQhIgHgxgiQhFguAdh9QAShNA7h0QBZixBGhZQA/hOA5gyQBbhQBsgnQCGgvBbAyIAfAWQAJAIAGAJQA0A+gKCSQgFBSgfCAIBDgnIBEgyQBPg7AfgRICGhYQBbg8AfACQAiABBmBFIACACIA6AkIEACyQAeAWAOADQgJglgKhQIgIhEQgYiqBAhHQATgVAegOQBPgkBcAWQA4AOBdAzQAuAZBaBUIAFAFQA6A4BFBoIASAcQASAbALAVQBTCLAjBmQA9CuhPA8QgvAjhHAHQgoAEhMgEIgugDIAfA5QAgA8ANAgQASAtATBTIAYBlIAQHPQgJBpBHAvQBcBABPBWIANAOIAcAXIAKAKQAOAMASAXQARAUALALIA0BMQA1BXAUBmQAkCtgmCyQgSBUhRClQhBCFhBBoQg0BShFBoQhXCFgaAcIgbAeQgkAngXAlQgRAagJAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.4,-188.8,330.9,377.6);
p.frameBounds = [rect];


(lib.fringe3_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe3_decor_img();
	this.instance.setTransform(-132.3,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.3,-111,265,222);
p.frameBounds = [rect];


(lib.fringe3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("APROzQAFgLAAgDIAAgpQAAgqgCgGQgHgMgHgjQgOhHhMhKQgUgWgZgPQgzgiA2hZQAPgZACgKIgRAAQgTAAgIAFIgPANQg8AqhkgaQhYgYAXhcIAIgXQAGgRACgPQgrgKgNATQgSAbgtALQg+APhLguIgKgGQgLgHgMgDQgJgBgHgTQgbg5AVgoQgNADgSAHQgUAJgVAFQgtAIgYAZQgdAchKAIQhjALhBg1IgGgEQgTgQgSgDIgZgFQgUgFgRgJQgQgGgNgDQAGANgEAkIgBANQgFAwgXAKQgTAIgPALQgmAahCAAQg8AAgZghQgTgZgpAKQABANAKAhQAaBVgqAYQhQArhUgXQgdgHgOgQQgOgPgrAAQAEAQAPAVQAYAiADArQABAYgbAUQgcATgSASQhDBDgWBTIgJAiQgCAIgDAAQgDAAAAAUIAAARQAAA0AEAHQAGANAIAhIAABUIgfg8QgOgugTgbIhEhuIgYgfQgZgrgbhJQgehTAAgkQg8AAgjgxQgmgzAogqQAHgJAGgCIALgGQgwhIAAgtIAAgcQAAgbADgEQAEgGAEgIIAegzIgHgLQgjgzgDgdQgEgzBGgjQgWgtAZhFQAGgPAOgaQASgdAEgUIAHgqQABgNANgMIAXgUQAPgOAVhFQANgrAIgQQAFgOAKgPIAHgMQAnhGA2gjIAXgPQA2gjAwgLQAAg4AggrQAng3AzAHIAXACQAOg0BCgbQAvgUBCgFIAAgEQACgQAFgIIAFgIIARgfQAJgVAggiQAOgQAggVIAIgGQBZhECVBGQBQAnApAAQAQAAAOgEQAKgCAIAAQAMAAASACQAkAGA6gVQATgHAlgQQBpgwA5ANQBAAOA6BBQAcAcAOAbIAXAoQAEAIACATQBGAGAsATQBBAaAOA1QAPgBAGgFQAGgCAHAAQAuAAAiA2QAfAwAAAzQBpAYBNBZIAnA6QAjA+APA/QAJAmAVATQAjAgAAAPQABAUAFAWQAFARASAkQAuBbgaA2QBGAjgEA0QgCAegjAxIgIALIALAPQAfApAAAbQAABXgxBHQBBAjgeA/QgdA9hLAAQAAA7gtBeIgUArIgGASQgIAUgOARIgEAGIgCAAIgBABIgFAIQgZAjgXAlQghA1gEARIgDARIgEAYIgoBkQACiEAKgfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.3,-111,264.8,222.1);
p.frameBounds = [rect];


(lib.fringe2_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe2_decor_img();
	this.instance.setTransform(-118.4,-111.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-111.7,237,223);
p.frameBounds = [rect];


(lib.fringe2_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AwXQWIhxnjQgoi8AcihQAWhwA4hyQA9h+BKhAQARgNAaggQAUgYANgMIDTi0QhFgPhBg6QhCg5AJhYIABgOQAGgsASgYQBkiEC1hbQCshVCHgaQBtgSDiAAQCkgBCvBEQCcA9CGBmIAGAEQA6ArAbAcQAtAvAIAtIACALQAGAfAAAVQAAA/hDA9Qg8A1hCAPID+DfIClDoQBNB+ANCZQAKB9ggCtQgmDbgyCgQgKAhg1B9IAAg8QALg3gEgXQgShkhLg+QgRgOgEgHQAIgOAMgIIANgPIAKgNIAOgiIAMgeIgfAJQhoAfgigTQAFgOAQgJQAhgUAfg4IAEgJQAPgbAKgbIAGgOQAMgiADgYQhWA6grAQQg/AZhcAAQAFgRAYgbQAPgPAHgKQA7heAPhYIAQhLQgHAGggAhQg7BBgpAiQhIA9hCAVIgZAJQgSAJgUAEIgSAEQgeAJgQABQACgTALgJQAegWAjhBQAjg/ARgoQAfhDACgqIg3BBQhDBUhzBTIiTBVIgdAMQhzA2gZAAQgTAAg+gaQgigOg0gaIgagLQgggOgVgPIiJhiQhAgzg1hBIg1g/QAKA5AaA4IBJCNQAIAPAOAMIALALQA4A3hrglQhoghgtghQgngehLhKIhEhFIAIAvIAKA3QAQA8AmBAQARAeAeAmQAVAYACAIQhcAAhAgZQgrgQhVg6QAFA+AsBKQAoBAAcAOQAMAFAGAPQgIAEAAACIgBABIgMAAQg6AAgugPQgagJgUgEQAGAKAIAUQAJAYAGAKQAKAVALAHQALAGALAQQgHAJgSAPQgpAggVAqQgkBJAPCgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-111.7,237,223.4);
p.frameBounds = [rect];


(lib.fringe1_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe1_decor_img();
	this.instance.setTransform(-152.6,-130.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.6,-130.4,305,261);
p.frameBounds = [rect];


(lib.fringe1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("APNTNIAghwQAWg6AEgdQALhBAfhlQAbhUAMg4QgPgJgVgRInimUQgmgggUgbIgyg/Qgwg9gXggQgig1gmhPIg8hbQAAApgcA2QgQAgglA1IgIANIhTBfIg6AyQgnAfiLBQIhXAzImIDzQhJA4gnAvIgsA0QhwB7AABbQAAAGAKAZQAVBBgtgvQABAfAXA8QAKAYADAMIAKAkIAGAUIh+hJIkcitQiKhShVh1QhjiIBDiGQAeg5AZgnQAdgqgIgMQgKgSgDgcQgBgRgGgjQgIg4AAgcQAAgpAfhmIABgDQAchjCPhFQAtgVARgMQAggVA0gHQA0gGgCgxQgBgUAMg2IAGgbQAKg2BKhgQA0hDBChDICUiYQASgWAjgdQAbgVANgOQA0g1CNhqICZhuQAjgYAxgdQA/glATAAQAaABAzApQAbAXA6A3QAoAmAKAGIAYgaQAUgVAwgfIAWgPQAYgQAsgWQBagwBQBGIBkBXQAJAHAKAOIAKAOQAaAfBAA7QBEA/AaAhIDgD8QBXBjAjA2IAaAoQBTB6AZBAQAnBmgTB5QgFArAlAcQARANAJAKIAkAkQAyA9AUBTQAZBdgaBOQgOAnAkAvQArA6AABAQAACmh7CEQg4A7h0BgQhpBXhOA1QgMAJgOADQgFABg1ArQAEgQAFgPgAl1DVImwDVQhOAogwAkIgNAJQg4AoALBMQAJA4AQAyIAPA3IAiCKIABAAIADAIIACACIACADIAAghQgBhbAPgpQAihdBahlQA1g8B3hpIAXgUIDHiYIALgHQBLgsALgZQgNABhSAtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.6,-126,305.3,252);
p.frameBounds = [rect];


(lib.eyes8_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes8_decor_img();
	this.instance.setTransform(-113.8,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.8,-31.6,228,63);
p.frameBounds = [rect];


(lib.eyes8_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AEUCyQARg/A9iBQA8iEByhPQBzhQBUAIQBVAIA+BJIAMAPIAJAOQAlA2AIBAQg+gxhVgqQhUgrhlAUQhTAWhTBXQhzB2hADZIgPAlQAKg6ASg+gAkGEFQhAjZhzh2QhThXhTgWQhlgUhUArQhVAqg+AxQAIhAAlg2IAJgOIAMgPQA+hJBVgIQBUgIBzBQQByBPA8CEQA9CBARA/QASA+AKA6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-29.9,188.1,59.8);
p.frameBounds = [rect];


(lib.eyes7_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes7_decor_img();
	this.instance.setTransform(-110.6,-32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.6,-32.8,221,66);
p.frameBounds = [rect];


(lib.eyes7_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AESCyQARg/A9iBQA8iEByhPQBzhQBUAIQBVAIA+BJIAMAPIAJAOQAlA2AIBAQgfhCgagtQgIgPgLgMQgggjg3gGQhJgIhJAfQhJAfh0B4QhzB2hADZIgPAlQAKg6ASg+gAkEEFQhAjZhzh2Qh0h4hJgfQhJgfhJAIQg3AGggAjQgLAMgIAPQgaAtgfBCQAIhAAlg2IAJgOIAMgPQA+hJBVgIQBUgIBzBQQByBPA8CEQA9CBARA/QASA+AKA6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.9,-29.9,187.8,59.8);
p.frameBounds = [rect];


(lib.eyes6_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes6_decor_img();
	this.instance.setTransform(-104.8,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.8,-29.7,210,59);
p.frameBounds = [rect];


(lib.eyes6_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGch6QA3g+BJg2IAygjQBrATBNApIgCAEQgcAAgWgMIgVgNIgPAAQgTAAg0AaQhMAmh1B4Qh1B2gsCcIAEACQgKAXgGAUIgBAFQARjjCTipgAj4ENQgGgUgKgXIAEgCQgsich1h2Qh1h4hMgmQg0gagTAAIgPAAIgVANQgWAMgcAAIgCgEQBNgpBrgTIAyAjQBJA2A3A+QCTCpARDjIgBgFgANMinIALAJIgQAEIAFgNgAtWieIALgJIAFANIgQgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-27.4,171.1,54.9);
p.frameBounds = [rect];


(lib.eyes5_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes5_decor_img();
	this.instance.setTransform(-111.7,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.7,-28.2,223,57);
p.frameBounds = [rect];


(lib.eyes5_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AGzATQCDiqBeAAQBNAAA4AgQAYAOAdAZQhCgVg4AAQhYAAhWA1QhWAyhfB5IgQAWIgFAHQAxhTAmgygAlgCRIgQgWQhfh5hWgyQhWg1hYAAQg4AAhCAVQAdgZAYgOQA4ggBNAAQBeAACDCqQAmAyAxBTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.7,-15.3,169.4,30.6);
p.frameBounds = [rect];


(lib.eyes4_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes4_decor_img();
	this.instance.setTransform(-113,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-34.3,226,69);
p.frameBounds = [rect];


(lib.eyes4_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AIKAPIAAAAQBLggBjAAQAzAAA5AUQhCAPh1AAQguAAg1gDgAsjADQA5gUAzAAQBjAABLAgIAAAAQg1ADguAAQh1AAhCgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-1.8,161,3.6);
p.frameBounds = [rect];


(lib.eyes3_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes3_decor_img();
	this.instance.setTransform(-104.4,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.4,-30.1,209,60);
p.frameBounds = [rect];


(lib.eyes3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ADxE3QgFhQAlhyQAlhyBUh3QBVh5BjguQBlgvBKAiQBLAiAiAxQAiAxAVAyQgXgdgigZQgbgVgggRQgyAVhZA+Qh5BUhhBdQhQBOhKBtQgaAngTAfgAj0E3QgTgfgagnQhKhthQhOQhhhdh5hUQhZg+gygVQggARgbAVQgiAZgYAdQAWgyAigxQAigxBLgiQBKgiBlAvQBjAuBVB5QBUB3AlByQAlBygFBQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.8,-31.1,183.6,62.3);
p.frameBounds = [rect];


(lib.eyes2_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes2_decor_img();
	this.instance.setTransform(-100.5,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-27.7,201,55);
p.frameBounds = [rect];


(lib.eyes2_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AEICDQAOgwARgsQAUgwAYgrQAshRBrhFQBqhGBBAAQA6AAAzAlQAXARApAnQgQgCgQgEQhbgZhhgBQg7gCiSB7Qg/A2goBLQgyBigLCIQgLgmAehogAkxAnQgohLg/g2QiSh7g7ACQhhABhbAZQgQAEgQACQApgnAXgRQAzglA6AAQBBAABqBGQBrBFAsBRQAYArAUAwQARAsAOAwQAeBogLAmQgLiIgyhig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-27.4,167,54.8);
p.frameBounds = [rect];


(lib.eyes1_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes1_decor_img();
	this.instance.setTransform(-112.5,-27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-27.7,225,55);
p.frameBounds = [rect];


(lib.eyes1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AEQDCQAihoAthYQCGkDCfAAQBqAABNBCQBQBEAABoQAAAMgIAnIgCALIgKAFQgNgXgdgdQgwgygrgVQgWgLgYgEQgnhEhCBIIgHAIIgSAIQgbAMgtAaQgKgNgTADQglAFg1A0Qg1A2gkBIQgZAygKAsIgLAXQAHgcANgkgAkEDvQgJgmgWgwQgghHgtg4Qgvg4gfgFQgVgEgJAZIgVgNQgzgegdgNIgSgIIgHgIQhChIgnBEQgYAEgWALQgrAVgwAyQgdAdgNAXIgKgFIgCgLQgIgnAAgMQAAhoBQhEQBNhCBqAAQCfAACGEDQAtBYAiBoQANAkAHAcIgJgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-25.8,181.5,51.6);
p.frameBounds = [rect];


(lib.earring12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring12_img();
	this.instance.setTransform(-21,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-41.2,42,82);
p.frameBounds = [rect];


(lib.earring11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring11_img();
	this.instance.setTransform(-19.9,-25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.9,-25.2,40,50);
p.frameBounds = [rect];


(lib.earring10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring10_img();
	this.instance.setTransform(-17.9,-29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.9,-29.1,36,58);
p.frameBounds = [rect];


(lib.earring9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring9_img();
	this.instance.setTransform(-12.9,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.9,-39.5,26,79);
p.frameBounds = [rect];


(lib.earring8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring8_img();
	this.instance.setTransform(-10,-21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-21.2,20,43);
p.frameBounds = [rect];


(lib.earring7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring7_img();
	this.instance.setTransform(-22.7,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.7,-21.9,46,44);
p.frameBounds = [rect];


(lib.earring6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring6_img();
	this.instance.setTransform(-22.7,-33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.7,-33.7,45,67);
p.frameBounds = [rect];


(lib.earring5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring5_img();
	this.instance.setTransform(-14.1,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.1,-40.2,29,80);
p.frameBounds = [rect];


(lib.earring4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring4_img();
	this.instance.setTransform(-17.5,-10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-10.2,36,45);
p.frameBounds = [rect];


(lib.earring3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring3_img();
	this.instance.setTransform(-12.9,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.9,-13.4,26,27);
p.frameBounds = [rect];


(lib.earring2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring2_img();
	this.instance.setTransform(-15.6,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.6,-38.4,31,78);
p.frameBounds = [rect];


(lib.earring1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_img();
	this.instance.setTransform(-24,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-39.3,42,84);
p.frameBounds = [rect];


(lib.decor_title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_3_img();
	this.instance.setTransform(-240,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-110,480,220);
p.frameBounds = [rect];


(lib.decor_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_2_img();
	this.instance.setTransform(-240,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-110,480,220);
p.frameBounds = [rect];


(lib.decor_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_1_img();
	this.instance.setTransform(-240,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-110,480,220);
p.frameBounds = [rect];


(lib.decor_background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.decor_background_1_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.color_picker_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,320,320);
p.frameBounds = [rect];


(lib.color_picker_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,320,320);
p.frameBounds = [rect];


(lib.color_eyebrows_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AORBpQhTgag5gNQhlgbhrgKIhggIQhygBgrgTQhLgZghhRQAWACA9APQBIAUAoAHIBbAKQBdAGAwAIQBWAMA9APQCiAsAtBcQgQgBg4gUgAr8gdQBIgRBfgLQA5gJBYgHIAxgEQAqgEBPgcQA3gOAUgCQgXBThNAcQguANh1ABQg/AAgfADQhfAJhfAZQg6ARhUAgQhHAbgRACQAVhgDHgwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-12.7,197.1,25.4);
p.frameBounds = [rect];


(lib.color_eyebrows_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("ADRA5IAOgGQAmgCAdgIQAqgOBjgoQBfgsAvgTQBUggBEgLQCvgjBxBUQgdANhvAFQhZADguAGQhOAKg5AWQgjALhRAsQhIAlgkARQg7AbgqAFgAl6BiQgfgOhAgjQhgg3gygOQgugNhKgHQgsgHhXgFQh5gIgVgKQB2haDTAuQBLAUBfAiQAzAWBcApQBLAkAVAFQAYAIAIAAIAkAHIAAAAIhLBEQgtgFg0gYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.3,-13.1,202.7,26.2);
p.frameBounds = [rect];


(lib.color_eyebrows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("ADRBgQAAgUAagLIAlgRIE0hUQBQgFCFAvQA+AVAuAcQA0AfAVAfIhJgVIg6gWQhCgagqgJQhAgMhbAAQhCAAg9ATQgjAJhAAfIhDAcQgpAQgnAIQACgVAAgVgAuTAkQAnglA2gjQBxhOBRgQQAqgGBIgBQA6ADA+AFQB0AIAYAHQATAJADAXQADAVAFAMQgiAAgngDIhJgMQhPgJgpgDQhDgCg3ALQhaAUg6AbQglATg2AkQggAYgVANQgfAWgmATQAPgjArgqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.4,-13.8,194.9,27.7);
p.frameBounds = [rect];


(lib.color_eyebrows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AGzgcQBPggBtgCQBtgDBcAcQBiAeAoA1QglgJg8gTQhDgSgkgFQg6gJhLADQgwACgqAJQgXAHgpAUQgoATgWAHQglALgqAAQARg8BUgggAu/A2QAVgiAcgQQCOhKCkAIQCrAIBxBjQgbARgsgJQgbgGg9gXQgygRgagHQgrgKgigCQhggEhMAQQhFAQhYAuIACgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-6.5,192.4,13);
p.frameBounds = [rect];


(lib.color_eyebrows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AnkAoQgqgSghgKQgqgMgbgGQhXgVhDARQgnAJgyASQhEAZg3gPQCBhEBKgSQBpgcBnAgIBMAZIAUAFQBVAZAUADQAXAFAegFQAqgIA0gBQgWBYhDABIgBAAQguAAhxgrgAEsgKIA1AFQAeAFAUgCQAeABAsgNQAWgGAdgLQARgFAVgKQBCgdA1gFQASgCAQABQBnAFCtBZQgzAQhNgdQg8gRgogEQg2gFhCARIgnAJIgLAEQgUAGgjAPQhpAogqAAIgFAAQhGAAgUhLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-8.3,199.1,16.7);
p.frameBounds = [rect];


(lib.color_eyebrows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("ACPB9QgegTgFgMQgFgNAFg8IACgSIBOCWQgSgOgbgOgAhugQIgFBmIhTBAgACqAVQAXgGAIACQAMACAvgQIEVh0QBfgkB9gDQCYAAAxBEIhcgLIgQAAQiDAAhzAnQhFAYhvA1Qh+A+hAALgAlvA0QgdgMgpgZQhAgpg2gSQhXgcikgRQg2gGgzADQgiACgJACIgDgKQBLg2CFAAQB9AABhAvQByA2BVAcQAvAQA8AKQAgAHALAHIhUBJQg6gPgvgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.8,-15.3,191.7,30.6);
p.frameBounds = [rect];


(lib.color_eyebrows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AMwAeQg2gwghgQQg3gahDAJQhRAPg+AcQglAOgwAgQhDAtgrgPQgMgmBCgzQBFg0BigTQB1gYBpApQB+AwBWCAQgpgLhDg8gArIhLQBqgpB0AYQBhATBGA0QBAAzgMAmQgqAPhBgtQgygggkgOQhAgchQgPQhBgJg3AaQgiAQg2AwQhDA8goALQBViAB+gwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-10.2,185,20.4);
p.frameBounds = [rect];


(lib.color_eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("Ak9BeQgOgPgTgJQgggWgxgXQiXhChqAKQg/AHhmA0QhWAsg2AOQAzhOB9g4QB4g4BhAFQA0AEA1AUQAgAOBCAhIAPAHQBcAsASASQARAOgDAhIAAAGIgKACQgPAFgMAAQgOAAgIgHgAEGBeQgFglArgkQAogfBHgdQA6gbBCgQQA7gRAaAAQBegDByA6QB1A5AxBJQgugMhVgsQhMgkgqgNQhFgUhEALQgkAEg/AYQgmANhLAgQg7AbgYAJQgjAOgNAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.4,-10.1,199,20.3);
p.frameBounds = [rect];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.star_img();
	this.instance.setTransform(-16.2,-16.1,0.162,0.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.2,-16.1,32.5,32.5);
p.frameBounds = [rect, null];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,es:4,pt:5,tr:6,ja:7,hi:8,ar:9});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-240,-110);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-240,-110);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-240,-110);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-240,-110);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-240,-110);

	this.instance_5 = new lib.title_pt_img();
	this.instance_5.setTransform(-240,-110);

	this.instance_6 = new lib.title_tr_img();
	this.instance_6.setTransform(-240,-110);

	this.instance_7 = new lib.title_ja_img();
	this.instance_7.setTransform(-240,-110);

	this.instance_8 = new lib.title_hi_img();
	this.instance_8.setTransform(-240,-110);

	this.instance_9 = new lib.title_ar_img();
	this.instance_9.setTransform(-240,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-110,480,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.body_decor_img();
	this.instance.setTransform(-123.4,-190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.4,-190.5,247,382);
p.frameBounds = [rect];


(lib.body_base_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AzCdrQgGAAgFgEQgEgEAAgHQAAgFADgEQgBgEABgEQAljKArhMQBOiNC/AAIABAAIDZAKQDjAABug/QCAhKAAiwQAAg/gBgLQgCgQgQhMIlZjgIABABQkAiLhCkZIAAgCIgDgfQhMgCg7hBQgvgzgYhNIAAAAQghhcgSg6QgkhvABgyQAAg2ARgnIgBAAQAZg8A2ABQARAAAQAHIgKgbIgBgCQiHpnE6noIACgCQFimOIOgSIABAAIACAAQIPASFiGOIABACQE7HoiIJnIAAACIgKAbQAQgHARAAQA1gBAZA8IAAAAQARAnAAA2QAAAygkBvQgSA6ggBcIAAAAQgZBNguAzQg7BBhMACIgDAfIgBACQhCEZj/CLIABgBIlZDgQgQBMgCAQQgBALAAA/QAACwB/BKQBvA/DjAAIDYgKIABAAQC/AABPCNQArBMAlDKQABAGgEAFIgDAEIAAABQAAAHgFAEQgEAEgGAAMgl9AABIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.4,-190,247,380);
p.frameBounds = [rect];


(lib.bg_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_subcategory_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();
	this.instance.setTransform(-5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect];


(lib.bg_option_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_option_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
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


(lib.bg_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_category_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.beloc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.beloc_img();
	this.instance.setTransform(-33.2,-24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.2,-24.4,66,49);
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

	this.instance_8 = new lib.background_9_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_10_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_11_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_12_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_13_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_14_img();
	this.instance_13.setTransform(-200,0);

	this.instance_14 = new lib.background_15_img();
	this.instance_14.setTransform(-200,0);

	this.instance_15 = new lib.background_16_img();
	this.instance_15.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01DAFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-300,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,0,900,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,900,600);
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


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-15,-15,0.625,0.625);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-15,-15,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect, rect];


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
	this.instance.setTransform(-180,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-50,360,100);
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


(lib.done_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_1_img();
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


(lib.body_title_reset_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5,"tr":6,"ja":7,"hi":8,"ar":9});

	// graph
	this.instance = new lib.title_reset_en_img();
	this.instance.setTransform(-90,-40);

	this.instance_1 = new lib.title_reset_ru_img();
	this.instance_1.setTransform(-90,-40);

	this.instance_2 = new lib.title_reset_de_img();
	this.instance_2.setTransform(-90,-40);

	this.instance_3 = new lib.title_reset_fr_img();
	this.instance_3.setTransform(-90,-40);

	this.instance_4 = new lib.title_reset_es_img();
	this.instance_4.setTransform(-90,-40);

	this.instance_5 = new lib.title_reset_pt_img();
	this.instance_5.setTransform(-90,-40);

	this.instance_6 = new lib.title_reset_tr_img();
	this.instance_6.setTransform(-90,-40);

	this.instance_7 = new lib.title_reset_ja_img();
	this.instance_7.setTransform(-90,-40);

	this.instance_8 = new lib.title_reset_hi_img();
	this.instance_8.setTransform(-90,-40);

	this.instance_9 = new lib.title_reset_ar_img();
	this.instance_9.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5,"tr":6,"ja":7,"hi":8,"ar":9});

	// graph
	this.instance = new lib.title_random_en_img();
	this.instance.setTransform(-90,-40);

	this.instance_1 = new lib.title_random_ru_img();
	this.instance_1.setTransform(-90,-40);

	this.instance_2 = new lib.title_random_de_img();
	this.instance_2.setTransform(-90,-40);

	this.instance_3 = new lib.title_random_fr_img();
	this.instance_3.setTransform(-90,-40);

	this.instance_4 = new lib.title_random_es_img();
	this.instance_4.setTransform(-90,-40);

	this.instance_5 = new lib.title_random_pt_img();
	this.instance_5.setTransform(-90,-40);

	this.instance_6 = new lib.title_random_tr_img();
	this.instance_6.setTransform(-90,-40);

	this.instance_7 = new lib.title_random_ja_img();
	this.instance_7.setTransform(-90,-40);

	this.instance_8 = new lib.title_random_hi_img();
	this.instance_8.setTransform(-90,-40);

	this.instance_9 = new lib.title_random_ar_img();
	this.instance_9.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
		else if (lang_str == "ar")
		{
			this.body_mc.gotoAndStop("ar");
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
p.nominalBounds = rect = new cjs.Rectangle(-240,-110,480,220);
p.frameBounds = [rect];


(lib.tiara_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tiara1();
	this.instance.setTransform(218.4,-6.4);

	this.instance_1 = new lib.tiara2();
	this.instance_1.setTransform(214,4);

	this.instance_2 = new lib.tiara3();
	this.instance_2.setTransform(213.4,26.6,1,1,0,0,0,-0.4,-0.5);

	this.instance_3 = new lib.tiara4();
	this.instance_3.setTransform(217.4,7.3);

	this.instance_4 = new lib.tiara5();
	this.instance_4.setTransform(216.7,-6.6,1,1,0,0,0,0,-0.5);

	this.instance_5 = new lib.tiara6();
	this.instance_5.setTransform(299,32.5);

	this.instance_6 = new lib.tiara7();
	this.instance_6.setTransform(219.2,5.1);

	this.instance_7 = new lib.tiara8();
	this.instance_7.setTransform(194.2,3.5,1,1,0,0,0,-0.6,-0.6);

	this.instance_8 = new lib.tiara9();
	this.instance_8.setTransform(215.9,41.4,1,1,0,0,0,-0.5,0.5);

	this.instance_9 = new lib.tiara10();
	this.instance_9.setTransform(216.9,-0.4);

	this.instance_10 = new lib.tiara11();
	this.instance_10.setTransform(208.1,-4.7);

	this.instance_11 = new lib.tiara12();
	this.instance_11.setTransform(211.6,34.6);

	this.instance_12 = new lib.tiara13();
	this.instance_12.setTransform(218.6,0);

	this.instance_13 = new lib.tiara14();
	this.instance_13.setTransform(215.2,-22.1);

	this.instance_14 = new lib.tiara15();
	this.instance_14.setTransform(211.4,16.5);

	this.instance_15 = new lib.tiara16();
	this.instance_15.setTransform(209.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(149.1,-44.6,139,76);
p.frameBounds = [rect, new cjs.Rectangle(77.6,-57,273,122), new cjs.Rectangle(103.4,-47.5,222,148), new cjs.Rectangle(116.3,-32.9,202,80), new cjs.Rectangle(113.3,-73.7,212,132), new cjs.Rectangle(259.4,-6.1,79,77), new cjs.Rectangle(141.2,-13.3,156,37), new cjs.Rectangle(104.9,-70.8,179,149), new cjs.Rectangle(100,-27,232,137), new cjs.Rectangle(166.6,-44.6,101,88), new cjs.Rectangle(75,-67.6,266,126), new cjs.Rectangle(89.1,-48.5,245,166), new cjs.Rectangle(128.3,-39.5,181,79), new cjs.Rectangle(148.5,-61.8,133,80), new cjs.Rectangle(92,-24.5,239,82), new cjs.Rectangle(121.2,-74.7,176,158), null];


(lib.scars_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.scars1();

	this.instance_1 = new lib.scars2();

	this.instance_2 = new lib.scars3();

	this.instance_3 = new lib.scars4();
	this.instance_3.setTransform(23.2,30.5);

	this.instance_4 = new lib.scars5();
	this.instance_4.setTransform(-1.3,-91.9);

	this.instance_5 = new lib.scars6();
	this.instance_5.setTransform(-1.7,-10.2);

	this.instance_6 = new lib.scars7();
	this.instance_6.setTransform(-1.8,-4.9);

	this.instance_7 = new lib.scars8();
	this.instance_7.setTransform(-2.1,-70.1);

	this.instance_8 = new lib.scars9();
	this.instance_8.setTransform(-2.1,2.6);

	this.instance_9 = new lib.scars10();
	this.instance_9.setTransform(64.8,2.1);

	this.instance_10 = new lib.scars11();
	this.instance_10.setTransform(0.2,-79.3);

	this.instance_11 = new lib.scars12();
	this.instance_11.setTransform(0.3,-81.4);

	this.instance_12 = new lib.scars13();
	this.instance_12.setTransform(-0.1,-85.6);

	this.instance_13 = new lib.scars14();
	this.instance_13.setTransform(60.5,8.9);

	this.instance_14 = new lib.scars15();
	this.instance_14.setTransform(-55.8,-42.6);

	this.instance_15 = new lib.scars16();
	this.instance_15.setTransform(-58.4,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-15.9,107,32);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(21.1,28.6,4,4), new cjs.Rectangle(-44.8,-114.9,87,46), new cjs.Rectangle(-89.2,-22.6,175,25), new cjs.Rectangle(-88.4,-20.7,173,31), new cjs.Rectangle(-17.9,-111.8,32,83), new cjs.Rectangle(-76.9,-13.9,150,33), new cjs.Rectangle(39.5,-8.6,38,27), new cjs.Rectangle(-22.7,-95.1,46,32), new cjs.Rectangle(-22.6,-95.1,46,27), new cjs.Rectangle(-15,-109.3,30,47), new cjs.Rectangle(47.9,-4.4,29,25), new cjs.Rectangle(-66,-124.5,20,164), new cjs.Rectangle(-87,-124.5,57,164), null];


(lib.scars_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.option_scars_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars16();
	this.instance_1.setTransform(-25.5,17.5,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars15();
	this.instance_1.setTransform(-24.5,14.5,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars14();
	this.instance_1.setTransform(29.2,37.1,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars13();
	this.instance_1.setTransform(-0.5,-3.5,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars12();
	this.instance_1.setTransform(-0.5,-2.5,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars11();
	this.instance_1.setTransform(-0.5,-2.5,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars10();
	this.instance_1.setTransform(31.2,36.1,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars9();
	this.instance_1.setTransform(-0.8,36.9,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars8();
	this.instance_1.setTransform(-1.8,7.9,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars7();
	this.instance_1.setTransform(-0.8,34.9,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars6();
	this.instance_1.setTransform(-0.8,31.9,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars5();
	this.instance_1.setTransform(-0.8,-10.1,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars4();
	this.instance_1.setTransform(12.4,48,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars3();
	this.instance_1.setTransform(-0.6,35,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars2();
	this.instance_1.setTransform(-0.6,35,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_scars_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.8,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.scars1();
	this.instance_1.setTransform(-0.6,35,0.47,0.47);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.6,21.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses8();
	this.instance.setTransform(0.1,1,0.611,0.611,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses7();
	this.instance.setTransform(0,2,0.573,0.572,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses6();
	this.instance.setTransform(-0.6,0.9,0.611,0.611,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses5();
	this.instance.setTransform(0.9,1,0.611,0.611,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses4();
	this.instance.setTransform(0,-0.2,0.553,0.553,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses3();
	this.instance.setTransform(-0.6,-0.1,0.58,0.579,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses2();
	this.instance.setTransform(-0.1,2.1,0.611,0.611,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glasses_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.glasses1();
	this.instance.setTransform(0,2.1,0.558,0.557,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glass_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.percent_100_img();
	this.instance.setTransform(-56.3,-4.7,0.8,0.8,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glass_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.percent_75_img();
	this.instance.setTransform(-45.1,-7.7,0.8,0.8,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glass_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.percent_50_img();
	this.instance.setTransform(-47.4,-7.1,0.8,0.8,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_glass_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.percent_25_img();
	this.instance.setTransform(-47.4,-7.1,0.8,0.8,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring12();
	this.instance.setTransform(23.6,12.4,1,1,0,0,180,0.5,12.3);

	this.instance_1 = new lib.earring12();
	this.instance_1.setTransform(-20.6,12.4,1,1,0,0,0,0.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring11();
	this.instance.setTransform(22.9,1,1,1,0,0,180);

	this.instance_1 = new lib.earring11();
	this.instance_1.setTransform(-24.9,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring10();
	this.instance.setTransform(24,4.6,1,1,0,0,0,0,0.5);

	this.instance_1 = new lib.earring10();
	this.instance_1.setTransform(-26,4.6,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring9();
	this.instance.setTransform(16.1,5.4,1,1,0,0,0,-3.1,2.4);

	this.instance_1 = new lib.earring9();
	this.instance_1.setTransform(-21.9,5.4,1,1,0,0,0,-3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring8();
	this.instance.setTransform(-16.5,14.4,1,1,0,0,180,0.5,12.3);

	this.instance_1 = new lib.earring8();
	this.instance_1.setTransform(15.4,14.4,1,1,0,0,0,0.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring7();
	this.instance.setTransform(25.1,1);

	this.instance_1 = new lib.earring7();
	this.instance_1.setTransform(-25.9,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring6();
	this.instance.setTransform(-25.9,4.6,1,1,0,0,180,0,0.5);

	this.instance_1 = new lib.earring6();
	this.instance_1.setTransform(25.1,4.6,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring5();
	this.instance.setTransform(25,1.4,1,1,0,0,180,-3.1,2.4);

	this.instance_1 = new lib.earring5();
	this.instance_1.setTransform(-24.9,1.4,1,1,0,0,0,-3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring4();
	this.instance.setTransform(24.3,1.4,1,1,0,0,0,0.5,12.3);

	this.instance_1 = new lib.earring4();
	this.instance_1.setTransform(-24.6,1.4,1,1,0,0,0,0.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring3();
	this.instance.setTransform(21,2,1,1,0,0,180);

	this.instance_1 = new lib.earring3();
	this.instance_1.setTransform(-18.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring2();
	this.instance.setTransform(19,4.6,1,1,0,0,180,0,0.5);

	this.instance_1 = new lib.earring2();
	this.instance_1.setTransform(-22,4.6,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_earrings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.earring1();
	this.instance.setTransform(20.8,0.4,1,1,0,0,180,-3.1,2.4);

	this.instance_1 = new lib.earring1();
	this.instance_1.setTransform(-21.9,0.4,1,1,0,0,0,-3.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara16();
	this.instance.setTransform(-5,3.1,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara15();
	this.instance.setTransform(0,0,0.502,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara14();
	this.instance.setTransform(0.2,-0.1,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara13();
	this.instance.setTransform(-0.2,0,0.635,0.635,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara12();
	this.instance.setTransform(0,0.1,0.49,0.49,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara11();
	this.instance.setTransform(0,-0.1,0.451,0.451,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara10();
	this.instance.setTransform(-0.1,5.2,0.841,0.841);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara9();
	this.instance.setTransform(0.2,-0.3,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara8();
	this.instance.setTransform(3.2,3.3,0.614,0.614,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara7();
	this.instance.setTransform(0,-0.1,0.737,0.736,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara6();
	this.instance.setTransform(0.1,0.1,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara5();
	this.instance.setTransform(-1.4,0.9,0.566,0.566,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara4();
	this.instance.setTransform(0.1,0.1,0.594,0.594,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara3();
	this.instance.setTransform(-0.3,1,0.53,0.53,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara2();
	this.instance.setTransform(-0.1,0,0.462,0.461,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_crown_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.tiara1();
	this.instance.setTransform(-0.1,0.1,0.654,0.654,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_16_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_15_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_14_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_13_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_12_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_11_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_10_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_9_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_8_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_7_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_6_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_5_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_4_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_2_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_back_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bg_icon_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.nose_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nose_1();

	this.instance_1 = new lib.nose_2();
	this.instance_1.setTransform(-0.7,-6.9);

	this.instance_2 = new lib.nose_3();
	this.instance_2.setTransform(0.7,-0.7);

	this.instance_3 = new lib.nose_4();
	this.instance_3.setTransform(0.1,-2.1);

	this.instance_4 = new lib.nose_5();
	this.instance_4.setTransform(0.3,-1.2);

	this.instance_5 = new lib.nose_6();
	this.instance_5.setTransform(-0.1,-4.1);

	this.instance_6 = new lib.nose_7();
	this.instance_6.setTransform(-1.1,3.1);

	this.instance_7 = new lib.nose_8();
	this.instance_7.setTransform(0.5,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.1,-1.8,16.6,3.6);
p.frameBounds = [rect, new cjs.Rectangle(-7.4,-16.9,13,19.5), new cjs.Rectangle(-8.7,-4.9,18,7.9), new cjs.Rectangle(-5.9,-8.8,12.3,13), new cjs.Rectangle(-7.8,-7.5,15.9,12.3), new cjs.Rectangle(-8,-6.4,15.9,5.1), new cjs.Rectangle(-8.5,1,14.4,5.1), new cjs.Rectangle(-7.7,-0.5,16.6,6.5)];


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


(lib.lips16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips8_decor16();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips16_base();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-13.1,63.1,26.2);
p.frameBounds = [rect];


(lib.lips15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips15_decor();
	this.instance.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips15_base();
	this.body_mc.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.1,-14.6,51,29.2);
p.frameBounds = [rect];


(lib.lips14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips14_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips14_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.6,-9.8,65.2,20);
p.frameBounds = [rect];


(lib.lips13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips13_decor();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips13_base();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.3,-13.3,59,27);
p.frameBounds = [rect];


(lib.lips12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips12_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips12_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.4,-11.7,53,23.4);
p.frameBounds = [rect];


(lib.lips11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips11_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips11_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-11.7,56,24);
p.frameBounds = [rect];


(lib.lips10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips10_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips10_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.1,-12.7,68.3,25.4);
p.frameBounds = [rect];


(lib.lips9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips9_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips9_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.2,-16.7,39,33.5);
p.frameBounds = [rect];


(lib.lips8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips8_decor();
	this.instance.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips8_base();
	this.body_mc.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.4,-12.7,68.5,26);
p.frameBounds = [rect];


(lib.lips7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips7_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips7_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-12.4,58,25);
p.frameBounds = [rect];


(lib.lips6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips6_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips6_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-14.1,58,28.2);
p.frameBounds = [rect];


(lib.lips5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips5_decor();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips5_base();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.8,-13.6,58,27.2);
p.frameBounds = [rect];


(lib.lips4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips4_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips4_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.4,-9.4,51,19);
p.frameBounds = [rect];


(lib.lips3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips3_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips3_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.3,-17.3,39,35);
p.frameBounds = [rect];


(lib.lips2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips2_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips2_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.4,-12.7,45,25.4);
p.frameBounds = [rect];


(lib.lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.lips1_decor();
	this.instance.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.lips1_base();
	this.body_mc.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-14.1,61,28.2);
p.frameBounds = [rect];


(lib.lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.lips1();

	this.body_2 = new lib.lips2();
	this.body_2.setTransform(-0.1,0.2);

	this.body_3 = new lib.lips3();
	this.body_3.setTransform(0.9,-0.9);

	this.body_4 = new lib.lips4();
	this.body_4.setTransform(-0.6,-1.9);

	this.body_5 = new lib.lips5();
	this.body_5.setTransform(0.5,0.3);

	this.body_6 = new lib.lips6();
	this.body_6.setTransform(0.4,2.2);

	this.body_7 = new lib.lips7();
	this.body_7.setTransform(0,1.3);

	this.body_8 = new lib.lips8();
	this.body_8.setTransform(-1.3,0.3);

	this.body_9 = new lib.lips9();
	this.body_9.setTransform(0.8,1.7);

	this.body_10 = new lib.lips10();
	this.body_10.setTransform(-0.6,-0.9);

	this.body_11 = new lib.lips11();
	this.body_11.setTransform(1,3);

	this.body_12 = new lib.lips12();
	this.body_12.setTransform(-0.5,-1);

	this.body_13 = new lib.lips13();
	this.body_13.setTransform(0.3,0.6);

	this.body_14 = new lib.lips14();
	this.body_14.setTransform(0.4,-0.4);

	this.body_15 = new lib.lips15();
	this.body_15.setTransform(-0.2,-1.4);

	this.body_16 = new lib.lips16();
	this.body_16.setTransform(0.4,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.3,-14.1,61,28.2);
p.frameBounds = [rect, new cjs.Rectangle(-22.5,-12.5,45,25.4), new cjs.Rectangle(-18.5,-18.2,39,35), new cjs.Rectangle(-26,-11.3,51,19), new cjs.Rectangle(-28.3,-13.3,58,27.2), new cjs.Rectangle(-28.6,-11.9,58,28.2), new cjs.Rectangle(-29,-11.2,58,25), new cjs.Rectangle(-35.8,-12.5,68.4,26), new cjs.Rectangle(-18.5,-15,39,33.5), new cjs.Rectangle(-34.7,-13.6,68.3,25.4), new cjs.Rectangle(-27,-8.7,56,24), new cjs.Rectangle(-27,-12.7,53,23.4), new cjs.Rectangle(-29,-12.7,59,27), new cjs.Rectangle(-32.2,-10.2,65.2,20), new cjs.Rectangle(-25.3,-16,51,29.2), new cjs.Rectangle(-31.1,-12.2,63.1,26.2)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_main_1_mc();
	this.instance.setTransform(280.1,30.1,0.762,0.762,15,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({regY:0,scaleX:0.86,scaleY:0.86,rotation:0,x:0.1,y:0},15).wait(1));

	// animation
	this.instance_1 = new lib.hero_main_2_mc();
	this.instance_1.setTransform(280,30.1,0.762,0.762,15,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({regX:0.1,scaleX:0.86,scaleY:0.86,rotation:0,x:0.1,y:0.1},15).wait(30).to({scaleX:0.76,scaleY:0.76,rotation:-15,x:-279.9,y:30.1},15).wait(1));

	// animation
	this.instance_2 = new lib.hero_main_3_mc();
	this.instance_2.setTransform(280.2,30.1,0.762,0.762,15,0,0,0.3,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.86,scaleY:0.86,rotation:0,x:0.4,y:0},15).wait(30).to({regX:0.3,regY:0.1,scaleX:0.76,scaleY:0.76,rotation:-15,x:-279.8,y:30},15).wait(30).to({regX:0.4,rotation:15,x:280.3,y:30.2},15).wait(1));

	// animation
	this.instance_3 = new lib.hero_main_1_mc();
	this.instance_3.setTransform(0,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({regX:0.1,regY:0.1,scaleX:0.76,scaleY:0.76,rotation:-15,x:-279.9,y:30.1},15).wait(30).to({rotation:15,x:280.1},15).wait(29).to({_off:true},1).wait(16));

	// animation
	this.instance_4 = new lib.hero_main_3_mc();
	this.instance_4.setTransform(280.2,30.1,0.762,0.762,15,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:true},1).wait(106));

	// animation
	this.instance_5 = new lib.hero_main_2_mc();
	this.instance_5.setTransform(-280,30.1,0.762,0.762,-15,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({rotation:15,x:280},15).wait(29).to({_off:true},1).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-475.9,-180,951.9,406);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-434,-179.1,890.4,402.2), new cjs.Rectangle(-392.4,-178.7,829.6,399.3), new cjs.Rectangle(-350.5,-178.3,768.5,396.4), new cjs.Rectangle(-308.4,-177.7,707.1,393.1), new cjs.Rectangle(-280.5,-177.1,659.7,389.7), new cjs.Rectangle(-300.4,-176.4,660.1,386.1), new cjs.Rectangle(-320.2,-175.5,660.2,382.2), new cjs.Rectangle(-339.9,-175.6,660.3,382.5), new cjs.Rectangle(-359.6,-176.5,660.2,386.4), new cjs.Rectangle(-379.1,-177.2,659.7,389.9), new cjs.Rectangle(-398.5,-177.9,707,393.3), new cjs.Rectangle(-417.9,-178.4,768.3,396.5), new cjs.Rectangle(-437.1,-178.9,829.5,399.6), new cjs.Rectangle(-456.3,-179.2,890.3,402.4), rect=new cjs.Rectangle(-475.9,-180,951.9,406), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-434,-179.1,890.5,402.2), new cjs.Rectangle(-392.4,-178.7,829.8,399.4), new cjs.Rectangle(-350.5,-178.3,768.6,396.4), new cjs.Rectangle(-308.4,-177.8,707,393.2), new cjs.Rectangle(-280.4,-177.2,659.6,389.7), new cjs.Rectangle(-300.4,-176.4,660.1,386), new cjs.Rectangle(-320.2,-175.6,660.3,382.3), new cjs.Rectangle(-339.9,-175.7,660.3,382.4), new cjs.Rectangle(-359.5,-176.4,660.1,386.1), new cjs.Rectangle(-379.1,-177.2,659.8,389.9), new cjs.Rectangle(-398.5,-177.9,707.4,393.3), new cjs.Rectangle(-417.9,-178.4,768.8,396.5), new cjs.Rectangle(-437.1,-178.9,829.9,399.5), new cjs.Rectangle(-456.3,-179.2,890.7,402.3), rect=new cjs.Rectangle(-475.9,-180,951.9,406), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-434,-179,890.8,402.5), new cjs.Rectangle(-392.4,-178.6,830,399.6), new cjs.Rectangle(-350.5,-178.2,768.9,396.6), new cjs.Rectangle(-308.4,-177.7,707.5,393.4), new cjs.Rectangle(-280.4,-177.1,660.2,390), new cjs.Rectangle(-300.3,-176.3,660.5,386.4), new cjs.Rectangle(-320.2,-175.5,660.7,382.6), new cjs.Rectangle(-339.9,-176.2,660.7,383), new cjs.Rectangle(-359.5,-177,660.6,386.8), new cjs.Rectangle(-379.1,-177.8,660.2,390.4), new cjs.Rectangle(-398.5,-178.4,706.9,393.9), new cjs.Rectangle(-417.8,-179,768.3,397.1), new cjs.Rectangle(-437.1,-179.5,829.5,400.2), new cjs.Rectangle(-456.3,-179.8,890.3,403), new cjs.Rectangle(-475.9,-180,951.9,406)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.hair20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair20_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair20_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.6,-169,389.3,338.1);
p.frameBounds = [rect];


(lib.hair19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair19_decor();
	this.instance.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair19_base();
	this.body_mc.setTransform(-0.3,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAAgeIAAA9IAAAAQAAhCAAAFg");
	this.shape.setTransform(244.4,132.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.body_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-244.7,-189.4,489.2,379);
p.frameBounds = [rect];


(lib.hair18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair18_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair18_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.3,-184.6,417,369.2);
p.frameBounds = [rect];


(lib.hair17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair17_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair17_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.6,-205.5,453.3,411.1);
p.frameBounds = [rect];


(lib.hair16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair16_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair16_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.9,-179.8,476,360);
p.frameBounds = [rect];


(lib.hair15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair15_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair15_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187,-55.9,374.1,112);
p.frameBounds = [rect];


(lib.hair14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair14_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair14_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.3,-52.8,461,106);
p.frameBounds = [rect];


(lib.hair13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair13_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair13_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.9,-143.5,354,287.2);
p.frameBounds = [rect];


(lib.hair12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair12_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair12_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.5,-205.7,387.1,411.4);
p.frameBounds = [rect];


(lib.hair11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair11_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair11_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-242.5,386.1,485.1);
p.frameBounds = [rect];


(lib.hair10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair10_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair10_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197.4,-240.4,395,481.1);
p.frameBounds = [rect];


(lib.hair9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair9_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair9_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.9,-79.2,466,159);
p.frameBounds = [rect];


(lib.hair8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair8_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair8_base();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgBAGQgCgDAAgDQAAgDACgDIABgCIAFARQgEAAgCgDg");
	this.shape.setTransform(-244.5,214.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.body_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-215.2,490,430.4);
p.frameBounds = [rect];


(lib.hair7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair7_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair7_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-241.8,-212.5,484,425);
p.frameBounds = [rect];


(lib.hair6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair6_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair6_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172.7,-227,346,454.1);
p.frameBounds = [rect];


(lib.hair5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair5_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair5_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.7,-166.4,462,333);
p.frameBounds = [rect];


(lib.hair4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair4_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair4_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-231.4,-229.6,463,459.2);
p.frameBounds = [rect];


(lib.hair3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair3_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair3_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.9,-240.4,430,481);
p.frameBounds = [rect];


(lib.hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair2_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair2_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-56.7,192,114);
p.frameBounds = [rect];


(lib.hair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.hair1_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.hair1_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.1,-146.9,416.2,294);
p.frameBounds = [rect];


(lib.hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hair1();

	this.body_2 = new lib.hair2();
	this.body_2.setTransform(-23.5,-243.4);

	this.body_3 = new lib.hair3();
	this.body_3.setTransform(-43.7,-94.3);

	this.body_4 = new lib.hair4();
	this.body_4.setTransform(-17.9,-82.5);

	this.body_5 = new lib.hair5();
	this.body_5.setTransform(-17,-21.4);

	this.body_6 = new lib.hair6();
	this.body_6.setTransform(-86.7,-81.7);

	this.body_7 = new lib.hair7();
	this.body_7.setTransform(-29.7,-105.3);

	this.body_8 = new lib.hair8();
	this.body_8.setTransform(-29.8,-70.2);

	this.body_9 = new lib.hair9();
	this.body_9.setTransform(-25.4,33);

	this.body_10 = new lib.hair10();
	this.body_10.setTransform(-76.4,-94.3);

	this.body_11 = new lib.hair11();
	this.body_11.setTransform(-24.7,-94.5);

	this.body_12 = new lib.hair12();
	this.body_12.setTransform(-37.7,-57.6);

	this.body_13 = new lib.hair13();
	this.body_13.setTransform(-96.6,3.6);

	this.body_14 = new lib.hair14();
	this.body_14.setTransform(-24.6,37.8);

	this.body_15 = new lib.hair15();
	this.body_15.setTransform(-25.7,37.7);

	this.body_16 = new lib.hair16();
	this.body_16.setTransform(-29.7,-45);

	this.body_17 = new lib.hair17();
	this.body_17.setTransform(-24.4,-65.8);

	this.body_18 = new lib.hair18();
	this.body_18.setTransform(-22.7,-81.2);

	this.body_19 = new lib.hair19();
	this.body_19.setTransform(-29.7,-43.4);

	this.body_20 = new lib.hair20();
	this.body_20.setTransform(-33.3,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).to({state:[{t:this.body_17}]},1).to({state:[{t:this.body_18}]},1).to({state:[{t:this.body_19}]},1).to({state:[{t:this.body_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.1,-146.9,416.2,294);
p.frameBounds = [rect, new cjs.Rectangle(-119.5,-300.2,192,114), new cjs.Rectangle(-258.6,-334.8,430,481), new cjs.Rectangle(-249.3,-312.1,463,459.2), new cjs.Rectangle(-247.7,-187.8,462,333), new cjs.Rectangle(-259.5,-308.8,346,454.1), new cjs.Rectangle(-271.6,-317.8,484,425), new cjs.Rectangle(-274.8,-285.4,490,430.4), new cjs.Rectangle(-258.3,-46.2,466,159), new cjs.Rectangle(-273.8,-334.7,395,481.1), new cjs.Rectangle(-217.8,-337,386.1,485.1), new cjs.Rectangle(-231.3,-263.3,387.1,411.4), new cjs.Rectangle(-273.6,-139.9,354,287.2), new cjs.Rectangle(-254.9,-15,461,106), new cjs.Rectangle(-212.8,-18.2,374.1,112), new cjs.Rectangle(-267.7,-224.8,476,360), new cjs.Rectangle(-251.1,-271.3,453.3,411.1), new cjs.Rectangle(-231,-265.8,417,369.2), new cjs.Rectangle(-274.4,-232.8,489.2,379), new cjs.Rectangle(-228,-192.1,389.3,338.1)];


(lib.glasses_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glasses1();
	this.instance.setTransform(268.9,-23.5);

	this.instance_1 = new lib.glasses2();
	this.instance_1.setTransform(270.2,-22.2);

	this.instance_2 = new lib.glasses3();
	this.instance_2.setTransform(268.1,-30.5);

	this.instance_3 = new lib.glasses4();
	this.instance_3.setTransform(269.9,-24.7);

	this.instance_4 = new lib.glasses5();
	this.instance_4.setTransform(344.1,-39.5);

	this.instance_5 = new lib.glasses6();
	this.instance_5.setTransform(268.8,-9.2);

	this.instance_6 = new lib.glasses7();
	this.instance_6.setTransform(267.2,-26.9);

	this.instance_7 = new lib.glasses8();
	this.instance_7.setTransform(266.6,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(161.5,-53.7,215,60);
p.frameBounds = [rect, new cjs.Rectangle(185.9,-45.5,169,46), new cjs.Rectangle(165.8,-69.3,207,78), new cjs.Rectangle(152.4,-50,235,51), new cjs.Rectangle(286.9,-83,115,87), new cjs.Rectangle(201.8,-21.5,136,25), new cjs.Rectangle(153.8,-52.9,227,52), new cjs.Rectangle(172.5,-37.9,188,45), null];


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.glass_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.fringe20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe20_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe20_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187.2,-174.8,374.4,350);
p.frameBounds = [rect];


(lib.fringe19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe19_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe19_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.9,-145.8,296,292);
p.frameBounds = [rect];


(lib.fringe18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe18_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe18_base();
	this.body_mc.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.7,-175.4,313.5,351);
p.frameBounds = [rect];


(lib.fringe17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe17_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe17_base();
	this.body_mc.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.6,-138.3,263.3,277);
p.frameBounds = [rect];


(lib.fringe16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe16_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe16_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.2,-99.9,240.4,200);
p.frameBounds = [rect];


(lib.fringe15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe15_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe15_base();
	this.body_mc.setTransform(0,5.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(11.2,-102.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.body_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.8,-103.2,278,206.4);
p.frameBounds = [rect];


(lib.fringe14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe14_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe14_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.4,-152.5,287,305.1);
p.frameBounds = [rect];


(lib.fringe13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe13_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe13_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.2,-183.1,263,366.4);
p.frameBounds = [rect];


(lib.fringe12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe12_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe12_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.5,-113.6,253,227.3);
p.frameBounds = [rect];


(lib.fringe11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe11_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe11_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.8,-115.6,234,231.3);
p.frameBounds = [rect];


(lib.fringe10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe10_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe10_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.4,-93.7,255,188);
p.frameBounds = [rect];


(lib.fringe9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe9_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe9_base();
	this.body_mc.setTransform(0,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.4,-193.3,327,387);
p.frameBounds = [rect];


(lib.fringe8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe8_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe8_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.8,-111.3,238,223);
p.frameBounds = [rect];


(lib.fringe7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe7_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe7_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.6,-181,309.3,362);
p.frameBounds = [rect];


(lib.fringe6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe6_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe6_base();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape.setTransform(62.5,-203.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.body_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.4,-204.6,299,409.3);
p.frameBounds = [rect];


(lib.fringe5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe5_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe5_base();
	this.body_mc.setTransform(0,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.9,-99.7,236,199);
p.frameBounds = [rect];


(lib.fringe4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe4_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe4_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.4,-188.8,331,378);
p.frameBounds = [rect];


(lib.fringe3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe3_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe3_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.3,-111,265,222.1);
p.frameBounds = [rect];


(lib.fringe2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe2_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe2_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-111.7,237,223.4);
p.frameBounds = [rect];


(lib.fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.fringe1_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.fringe1_base();
	this.body_mc.setTransform(0,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.6,-130.4,305.3,261);
p.frameBounds = [rect];


(lib.fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.fringe1();

	this.body_2 = new lib.fringe2();
	this.body_2.setTransform(8.5,-27.5);

	this.body_3 = new lib.fringe3();
	this.body_3.setTransform(6.5,-11.2);

	this.body_4 = new lib.fringe4();
	this.body_4.setTransform(8.5,42.5);

	this.body_5 = new lib.fringe5();
	this.body_5.setTransform(7.5,-5);

	this.body_6 = new lib.fringe6();
	this.body_6.setTransform(9.4,24.5);

	this.body_7 = new lib.fringe7();
	this.body_7.setTransform(9.7,24.9);

	this.body_8 = new lib.fringe8();
	this.body_8.setTransform(9.6,-3);

	this.body_9 = new lib.fringe9();
	this.body_9.setTransform(-9.3,84.5);

	this.body_10 = new lib.fringe10();
	this.body_10.setTransform(7.5,-11);

	this.body_11 = new lib.fringe11();
	this.body_11.setTransform(8,-24.1);

	this.body_12 = new lib.fringe12();
	this.body_12.setTransform(11.5,9);

	this.body_13 = new lib.fringe13();
	this.body_13.setTransform(12.4,65.5);

	this.body_14 = new lib.fringe14();
	this.body_14.setTransform(10.6,36.9);

	this.body_15 = new lib.fringe15();
	this.body_15.setTransform(7.5,-20);

	this.body_16 = new lib.fringe16();
	this.body_16.setTransform(7.5,-6.4);

	this.body_17 = new lib.fringe17();
	this.body_17.setTransform(7,15.2);

	this.body_18 = new lib.fringe18();
	this.body_18.setTransform(-9.4,61.7);

	this.body_19 = new lib.fringe19();
	this.body_19.setTransform(7,22.7);

	this.body_20 = new lib.fringe20();
	this.body_20.setTransform(49,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[{t:this.body_13}]},1).to({state:[{t:this.body_14}]},1).to({state:[{t:this.body_15}]},1).to({state:[{t:this.body_16}]},1).to({state:[{t:this.body_17}]},1).to({state:[{t:this.body_18}]},1).to({state:[{t:this.body_19}]},1).to({state:[{t:this.body_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.6,-130.4,305.3,261);
p.frameBounds = [rect, new cjs.Rectangle(-109.9,-139.2,237,223.4), new cjs.Rectangle(-125.9,-122.2,265,222.1), new cjs.Rectangle(-156.9,-146.3,331,378), new cjs.Rectangle(-110.4,-104.8,236,199), new cjs.Rectangle(-140,-180.1,299,409.3), new cjs.Rectangle(-144.9,-156.1,309.3,362), new cjs.Rectangle(-109.2,-114.3,238,223), new cjs.Rectangle(-172.7,-108.9,327,387), new cjs.Rectangle(-119.9,-104.7,255,188), new cjs.Rectangle(-108.8,-139.8,234,231.3), new cjs.Rectangle(-115,-104.6,253,227.3), new cjs.Rectangle(-118.8,-117.6,263,366.4), new cjs.Rectangle(-132.8,-115.6,287,305.1), new cjs.Rectangle(-131.3,-123.2,278,206.4), new cjs.Rectangle(-112.7,-106.4,240.4,200), new cjs.Rectangle(-124.6,-123.1,263.3,277), new cjs.Rectangle(-166.2,-113.8,313.5,351), new cjs.Rectangle(-140.9,-123.1,296,292), new cjs.Rectangle(-138.2,-135.1,374.4,350)];


(lib.eyes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes8_decor();
	this.instance.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes8_base();
	this.body_mc.setTransform(0,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.8,-32.8,228,65.3);
p.frameBounds = [rect];


(lib.eyes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes7_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes7_base();
	this.body_mc.setTransform(0,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.6,-32.8,221,66);
p.frameBounds = [rect];


(lib.eyes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes6_decor();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes6_base();
	this.body_mc.setTransform(0,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.8,-29.8,210,59.3);
p.frameBounds = [rect];


(lib.eyes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes5_decor();
	this.instance.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes5_base();
	this.body_mc.setTransform(0,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.7,-30.7,223,62);
p.frameBounds = [rect];


(lib.eyes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes4_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes4_base();
	this.body_mc.setTransform(0,-26.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-34.3,226,69);
p.frameBounds = [rect];


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes3_decor();
	this.instance.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes3_base();
	this.body_mc.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.4,-31.3,209,62.4);
p.frameBounds = [rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes2_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes2_base();
	this.body_mc.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-27.7,201,55);
p.frameBounds = [rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes1_decor();
	this.instance.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes1_base();
	this.body_mc.setTransform(-0.2,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-32,225,58.8);
p.frameBounds = [rect];


(lib.eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.eyes1();

	this.body_2 = new lib.eyes2();
	this.body_2.setTransform(-0.1,-2);

	this.body_3 = new lib.eyes3();
	this.body_3.setTransform(-0.3,-4.5);

	this.body_4 = new lib.eyes4();
	this.body_4.setTransform(0,2.8);

	this.body_5 = new lib.eyes5();
	this.body_5.setTransform(0,-3.7);

	this.body_6 = new lib.eyes6();
	this.body_6.setTransform(0,-4);

	this.body_7 = new lib.eyes7();
	this.body_7.setTransform(-0.1,-6.2);

	this.body_8 = new lib.eyes8();
	this.body_8.setTransform(0.1,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-32,225,58.8);
p.frameBounds = [rect, new cjs.Rectangle(-100.6,-29.7,201,55), new cjs.Rectangle(-104.7,-35.8,209,62.4), new cjs.Rectangle(-113,-31.6,226,69), new cjs.Rectangle(-111.7,-34.5,223,62), new cjs.Rectangle(-104.8,-33.9,210,59.3), new cjs.Rectangle(-110.7,-39.1,221,66), new cjs.Rectangle(-113.8,-39.1,228,65.3)];


(lib.eyebrows8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-12.7,197.1,25.4);
p.frameBounds = [rect];


(lib.eyebrows7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.3,-13.1,202.7,26.2);
p.frameBounds = [rect];


(lib.eyebrows6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.4,-13.8,194.9,27.7);
p.frameBounds = [rect];


(lib.eyebrows5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.2,-6.5,192.4,13);
p.frameBounds = [rect];


(lib.eyebrows4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-8.3,199.1,16.7);
p.frameBounds = [rect];


(lib.eyebrows3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.8,-15.3,191.7,30.6);
p.frameBounds = [rect];


(lib.eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-10.2,185,20.4);
p.frameBounds = [rect];


(lib.eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.color_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.4,-10.1,199,20.3);
p.frameBounds = [rect];


(lib.eyebrows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.eyebrows1();

	this.body_2 = new lib.eyebrows2();
	this.body_2.setTransform(0,-3);

	this.body_3 = new lib.eyebrows3();
	this.body_3.setTransform(0.7,3.7);

	this.body_4 = new lib.eyebrows4();
	this.body_4.setTransform(-1.3,-1.7);

	this.body_5 = new lib.eyebrows5();
	this.body_5.setTransform(0,-1.7);

	this.body_6 = new lib.eyebrows6();
	this.body_6.setTransform(0.7,-3.9);

	this.body_7 = new lib.eyebrows7();
	this.body_7.setTransform(-1.2,-0.2);

	this.body_8 = new lib.eyebrows8();
	this.body_8.setTransform(-1.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.4,-10.1,199,20.3);
p.frameBounds = [rect, new cjs.Rectangle(-92.5,-13.2,185,20.4), new cjs.Rectangle(-95.1,-11.6,191.7,30.6), new cjs.Rectangle(-100.8,-10,199.1,16.7), new cjs.Rectangle(-96.2,-8.2,192.4,13), new cjs.Rectangle(-96.7,-17.7,194.9,27.7), new cjs.Rectangle(-102.6,-13.3,202.7,26.2), new cjs.Rectangle(-99.7,-13.8,197.1,25.4)];


(lib.earrings_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring1();
	this.instance.setTransform(-49.8,-1,1,1,0,0,180,-0.4,0.5);

	this.instance_1 = new lib.earring1();
	this.instance_1.setTransform(-244.2,-1,1,1,0,0,0,-0.4,0.5);

	this.instance_2 = new lib.earring2();
	this.instance_2.setTransform(-240.8,-5.5,1,1,0,7,-173,0,0.5);

	this.instance_3 = new lib.earring2();
	this.instance_3.setTransform(-50.3,-5.5,1,1,-7,0,0,0,0.5);

	this.instance_4 = new lib.earring3();
	this.instance_4.setTransform(-242.1,-23.3);

	this.instance_5 = new lib.earring3();
	this.instance_5.setTransform(-48.6,-23.3);

	this.instance_6 = new lib.earring4();
	this.instance_6.setTransform(-242.6,-23.9);

	this.instance_7 = new lib.earring4();
	this.instance_7.setTransform(-49.6,-23.9);

	this.instance_8 = new lib.earring5();
	this.instance_8.setTransform(-39,-24.6,1,1,0,0,180);

	this.instance_9 = new lib.earring5();
	this.instance_9.setTransform(-254.9,-24.6);

	this.instance_10 = new lib.earring6();
	this.instance_10.setTransform(-244.4,-1.8,1,1,0,0,180);

	this.instance_11 = new lib.earring6();
	this.instance_11.setTransform(-46.9,-1.8);

	this.instance_12 = new lib.earring7();
	this.instance_12.setTransform(-249.8,-15,1,1,30);

	this.instance_13 = new lib.earring7();
	this.instance_13.setTransform(-42.3,-14.6,1,1,-15);

	this.instance_14 = new lib.earring8();
	this.instance_14.setTransform(-244.6,-13.4,1,1,0,0,180);

	this.instance_15 = new lib.earring8();
	this.instance_15.setTransform(-49.1,-13.4);

	this.instance_16 = new lib.earring9();
	this.instance_16.setTransform(-243.7,0,1,1,0,0,180);

	this.instance_17 = new lib.earring9();
	this.instance_17.setTransform(-48.9,1.8);

	this.instance_18 = new lib.earring10();
	this.instance_18.setTransform(-242,-8.1);

	this.instance_19 = new lib.earring10();
	this.instance_19.setTransform(-50.5,-8.1);

	this.instance_20 = new lib.earring11();
	this.instance_20.setTransform(-240.9,-10.3,1,1,0,0,180);

	this.instance_21 = new lib.earring11();
	this.instance_21.setTransform(-49.3,-10.3);

	this.instance_22 = new lib.earring12();
	this.instance_22.setTransform(-242,3.4);

	this.instance_23 = new lib.earring12();
	this.instance_23.setTransform(-51.5,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8}]},1).to({state:[{t:this.instance_11},{t:this.instance_10}]},1).to({state:[{t:this.instance_13},{t:this.instance_12}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_17},{t:this.instance_16}]},1).to({state:[{t:this.instance_19},{t:this.instance_18}]},1).to({state:[{t:this.instance_21},{t:this.instance_20}]},1).to({state:[{t:this.instance_23},{t:this.instance_22}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-267.8,-40.9,241.7,84);
p.frameBounds = [rect, new cjs.Rectangle(-260.9,-46,230.6,81.2), new cjs.Rectangle(-255,-36.7,219.5,27), new cjs.Rectangle(-260.1,-34.2,229,45), new cjs.Rectangle(-269,-64.9,244.2,80), new cjs.Rectangle(-266.7,-35.5,242.1,67), new cjs.Rectangle(-280.5,-45.3,266.4,61.1), new cjs.Rectangle(-254.6,-34.7,215.5,43), new cjs.Rectangle(-256.8,-39.5,220.9,80.8), new cjs.Rectangle(-259.9,-37.3,227.5,58), new cjs.Rectangle(-261,-35.5,231.8,50), new cjs.Rectangle(-263,-37.8,232.5,82), null];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.decor_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_3_mc();
	this.instance.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},39).to({y:-5},40).wait(1));

	// animation
	this.instance_1 = new lib.decor_title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:5},39).to({y:0},40).wait(1));

	// animation
	this.instance_2 = new lib.decor_title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-5},39).to({y:0},40).wait(1));

	// animation
	this.instance_3 = new lib.decor_title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:5},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-115,480,225);
p.frameBounds = [rect, new cjs.Rectangle(-240,-114.7,480,224.9), new cjs.Rectangle(-240,-114.5,480,224.8), new cjs.Rectangle(-240,-114.2,480,224.7), new cjs.Rectangle(-240,-113.9,480,224.5), new cjs.Rectangle(-240,-113.7,480,224.4), new cjs.Rectangle(-240,-113.4,480,224.2), new cjs.Rectangle(-240,-113.2,480,224.1), new cjs.Rectangle(-240,-112.9,480,224), new cjs.Rectangle(-240,-112.7,480,223.9), new cjs.Rectangle(-240,-112.4,480,223.8), new cjs.Rectangle(-240,-112.2,480,223.6), new cjs.Rectangle(-240,-111.9,480,223.5), new cjs.Rectangle(-240,-111.6,480,223.3), new cjs.Rectangle(-240,-111.8,480,223.6), new cjs.Rectangle(-240,-111.9,480,223.8), new cjs.Rectangle(-240,-112,480,224.1), new cjs.Rectangle(-240,-112.2,480,224.4), new cjs.Rectangle(-240,-112.3,480,224.6), new cjs.Rectangle(-240,-112.4,480,224.9), new cjs.Rectangle(-240,-112.5,480,225.1), new cjs.Rectangle(-240,-112.7,480,225.4), new cjs.Rectangle(-240,-112.8,480,225.6), new cjs.Rectangle(-240,-112.9,480,225.9), new cjs.Rectangle(-240,-113.1,480,226.2), new cjs.Rectangle(-240,-113.2,480,226.4), new cjs.Rectangle(-240,-113.3,480,226.7), new cjs.Rectangle(-240,-113.4,480,226.9), new cjs.Rectangle(-240,-113.6,480,227.2), new cjs.Rectangle(-240,-113.7,480,227.4), new cjs.Rectangle(-240,-113.8,480,227.7), new cjs.Rectangle(-240,-113.9,480,227.9), new cjs.Rectangle(-240,-114.1,480,228.2), new cjs.Rectangle(-240,-114.2,480,228.5), new cjs.Rectangle(-240,-114.3,480,228.7), new cjs.Rectangle(-240,-114.5,480,229), new cjs.Rectangle(-240,-114.6,480,229.2), new cjs.Rectangle(-240,-114.7,480,229.5), new cjs.Rectangle(-240,-114.8,480,229.7), new cjs.Rectangle(-240,-115,480,230), new cjs.Rectangle(-240,-114.8,480,229.8), new cjs.Rectangle(-240,-114.7,480,229.5), new cjs.Rectangle(-240,-114.6,480,229.3), new cjs.Rectangle(-240,-114.5,480,229), new cjs.Rectangle(-240,-114.3,480,228.8), new cjs.Rectangle(-240,-114.2,480,228.5), new cjs.Rectangle(-240,-114.1,480,228.3), new cjs.Rectangle(-240,-114,480,228), new cjs.Rectangle(-240,-113.8,480,227.8), new cjs.Rectangle(-240,-113.7,480,227.5), new cjs.Rectangle(-240,-113.6,480,227.3), new cjs.Rectangle(-240,-113.5,480,227), new cjs.Rectangle(-240,-113.3,480,226.8), new cjs.Rectangle(-240,-113.2,480,226.5), new cjs.Rectangle(-240,-113.1,480,226.3), new cjs.Rectangle(-240,-113,480,226), new cjs.Rectangle(-240,-112.8,480,225.8), new cjs.Rectangle(-240,-112.7,480,225.5), new cjs.Rectangle(-240,-112.6,480,225.3), new cjs.Rectangle(-240,-112.5,480,225), new cjs.Rectangle(-240,-112.3,480,224.8), new cjs.Rectangle(-240,-112.2,480,224.5), new cjs.Rectangle(-240,-112.1,480,224.3), new cjs.Rectangle(-240,-112,480,224), new cjs.Rectangle(-240,-111.8,480,223.8), new cjs.Rectangle(-240,-111.7,480,223.5), new cjs.Rectangle(-240,-111.7,480,223.4), new cjs.Rectangle(-240,-112,480,223.5), new cjs.Rectangle(-240,-112.2,480,223.7), new cjs.Rectangle(-240,-112.5,480,223.8), new cjs.Rectangle(-240,-112.7,480,223.9), new cjs.Rectangle(-240,-113,480,224), new cjs.Rectangle(-240,-113.2,480,224.2), new cjs.Rectangle(-240,-113.5,480,224.3), new cjs.Rectangle(-240,-113.7,480,224.4), new cjs.Rectangle(-240,-114,480,224.5), new cjs.Rectangle(-240,-114.2,480,224.7), new cjs.Rectangle(-240,-114.5,480,224.8), new cjs.Rectangle(-240,-114.7,480,224.9), new cjs.Rectangle(-240,-115,480,225)];


(lib.decor_background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_background_2_mc();
	this.instance.setTransform(600,0);

	this.instance_1 = new lib.decor_background_2_mc();
	this.instance_1.setTransform(-600,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,-300,2400,600);
p.frameBounds = [rect];


(lib.decor_background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_background_3_mc();
	this.instance.setTransform(600,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-600},299).wait(1));

	// graph
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,2400,600);
p.frameBounds = [rect, new cjs.Rectangle(-604,-300,2400,600), new cjs.Rectangle(-608,-300,2400,600), new cjs.Rectangle(-612,-300,2400,600), new cjs.Rectangle(-616,-300,2400,600), new cjs.Rectangle(-620,-300,2400,600), new cjs.Rectangle(-624.1,-300,2400,600), new cjs.Rectangle(-628.1,-300,2400,600), new cjs.Rectangle(-632.1,-300,2400,600), new cjs.Rectangle(-636.1,-300,2400,600), new cjs.Rectangle(-640.1,-300,2400,600), new cjs.Rectangle(-644.1,-300,2400,600), new cjs.Rectangle(-648.1,-300,2400,600), new cjs.Rectangle(-652.1,-300,2400,600), new cjs.Rectangle(-656.2,-300,2400,600), new cjs.Rectangle(-660.2,-300,2400,600), new cjs.Rectangle(-664.2,-300,2400,600), new cjs.Rectangle(-668.2,-300,2400,600), new cjs.Rectangle(-672.2,-300,2400,600), new cjs.Rectangle(-676.2,-300,2400,600), new cjs.Rectangle(-680.3,-300,2400,600), new cjs.Rectangle(-684.3,-300,2400,600), new cjs.Rectangle(-688.3,-300,2400,600), new cjs.Rectangle(-692.3,-300,2400,600), new cjs.Rectangle(-696.3,-300,2400,600), new cjs.Rectangle(-700.3,-300,2400,600), new cjs.Rectangle(-704.3,-300,2400,600), new cjs.Rectangle(-708.3,-300,2400,600), new cjs.Rectangle(-712.3,-300,2400,600), new cjs.Rectangle(-716.4,-300,2400,600), new cjs.Rectangle(-720.4,-300,2400,600), new cjs.Rectangle(-724.4,-300,2400,600), new cjs.Rectangle(-728.4,-300,2400,600), new cjs.Rectangle(-732.4,-300,2400,600), new cjs.Rectangle(-736.4,-300,2400,600), new cjs.Rectangle(-740.4,-300,2400,600), new cjs.Rectangle(-744.5,-300,2400,600), new cjs.Rectangle(-748.5,-300,2400,600), new cjs.Rectangle(-752.5,-300,2400,600), new cjs.Rectangle(-756.5,-300,2400,600), new cjs.Rectangle(-760.5,-300,2400,600), new cjs.Rectangle(-764.5,-300,2400,600), new cjs.Rectangle(-768.5,-300,2400,600), new cjs.Rectangle(-772.5,-300,2400,600), new cjs.Rectangle(-776.6,-300,2400,600), new cjs.Rectangle(-780.6,-300,2400,600), new cjs.Rectangle(-784.6,-300,2400,600), new cjs.Rectangle(-788.6,-300,2400,600), new cjs.Rectangle(-792.6,-300,2400,600), new cjs.Rectangle(-796.6,-300,2400,600), new cjs.Rectangle(-800.6,-300,2400,600), new cjs.Rectangle(-804.6,-300,2400,600), new cjs.Rectangle(-808.7,-300,2400,600), new cjs.Rectangle(-812.7,-300,2400,600), new cjs.Rectangle(-816.7,-300,2400,600), new cjs.Rectangle(-820.7,-300,2400,600), new cjs.Rectangle(-824.7,-300,2400,600), new cjs.Rectangle(-828.7,-300,2400,600), new cjs.Rectangle(-832.8,-300,2400,600), new cjs.Rectangle(-836.8,-300,2400,600), new cjs.Rectangle(-840.8,-300,2400,600), new cjs.Rectangle(-844.8,-300,2400,600), new cjs.Rectangle(-848.8,-300,2400,600), new cjs.Rectangle(-852.8,-300,2400,600), new cjs.Rectangle(-856.8,-300,2400,600), new cjs.Rectangle(-860.8,-300,2400,600), new cjs.Rectangle(-864.9,-300,2400,600), new cjs.Rectangle(-868.9,-300,2400,600), new cjs.Rectangle(-872.9,-300,2400,600), new cjs.Rectangle(-876.9,-300,2400,600), new cjs.Rectangle(-880.9,-300,2400,600), new cjs.Rectangle(-884.9,-300,2400,600), new cjs.Rectangle(-888.9,-300,2400,600), new cjs.Rectangle(-892.9,-300,2400,600), new cjs.Rectangle(-897,-300,2400,600), new cjs.Rectangle(-901,-300,2400,600), new cjs.Rectangle(-905,-300,2400,600), new cjs.Rectangle(-909,-300,2400,600), new cjs.Rectangle(-913,-300,2400,600), new cjs.Rectangle(-917,-300,2400,600), new cjs.Rectangle(-921,-300,2400,600), new cjs.Rectangle(-925.1,-300,2400,600), new cjs.Rectangle(-929.1,-300,2400,600), new cjs.Rectangle(-933.1,-300,2400,600), new cjs.Rectangle(-937.1,-300,2400,600), new cjs.Rectangle(-941.1,-300,2400,600), new cjs.Rectangle(-945.1,-300,2400,600), new cjs.Rectangle(-949.1,-300,2400,600), new cjs.Rectangle(-953.1,-300,2400,600), new cjs.Rectangle(-957.2,-300,2400,600), new cjs.Rectangle(-961.2,-300,2400,600), new cjs.Rectangle(-965.2,-300,2400,600), new cjs.Rectangle(-969.2,-300,2400,600), new cjs.Rectangle(-973.2,-300,2400,600), new cjs.Rectangle(-977.2,-300,2400,600), new cjs.Rectangle(-981.2,-300,2400,600), new cjs.Rectangle(-985.3,-300,2400,600), new cjs.Rectangle(-989.3,-300,2400,600), new cjs.Rectangle(-993.3,-300,2400,600), new cjs.Rectangle(-997.3,-300,2400,600), new cjs.Rectangle(-1001.3,-300,2400,600), new cjs.Rectangle(-1005.3,-300,2400,600), new cjs.Rectangle(-1009.3,-300,2400,600), new cjs.Rectangle(-1013.3,-300,2400,600), new cjs.Rectangle(-1017.4,-300,2400,600), new cjs.Rectangle(-1021.4,-300,2400,600), new cjs.Rectangle(-1025.4,-300,2400,600), new cjs.Rectangle(-1029.4,-300,2400,600), new cjs.Rectangle(-1033.4,-300,2400,600), new cjs.Rectangle(-1037.4,-300,2400,600), new cjs.Rectangle(-1041.4,-300,2400,600), new cjs.Rectangle(-1045.5,-300,2400,600), new cjs.Rectangle(-1049.5,-300,2400,600), new cjs.Rectangle(-1053.5,-300,2400,600), new cjs.Rectangle(-1057.5,-300,2400,600), new cjs.Rectangle(-1061.5,-300,2400,600), new cjs.Rectangle(-1065.5,-300,2400,600), new cjs.Rectangle(-1069.5,-300,2400,600), new cjs.Rectangle(-1073.6,-300,2400,600), new cjs.Rectangle(-1077.6,-300,2400,600), new cjs.Rectangle(-1081.6,-300,2400,600), new cjs.Rectangle(-1085.6,-300,2400,600), new cjs.Rectangle(-1089.6,-300,2400,600), new cjs.Rectangle(-1093.6,-300,2400,600), new cjs.Rectangle(-1097.6,-300,2400,600), new cjs.Rectangle(-1101.6,-300,2400,600), new cjs.Rectangle(-1105.7,-300,2400,600), new cjs.Rectangle(-1109.7,-300,2400,600), new cjs.Rectangle(-1113.7,-300,2400,600), new cjs.Rectangle(-1117.7,-300,2400,600), new cjs.Rectangle(-1121.7,-300,2400,600), new cjs.Rectangle(-1125.7,-300,2400,600), new cjs.Rectangle(-1129.7,-300,2400,600), new cjs.Rectangle(-1133.7,-300,2400,600), new cjs.Rectangle(-1137.8,-300,2400,600), new cjs.Rectangle(-1141.8,-300,2400,600), new cjs.Rectangle(-1145.8,-300,2400,600), new cjs.Rectangle(-1149.8,-300,2400,600), new cjs.Rectangle(-1153.8,-300,2400,600), new cjs.Rectangle(-1157.8,-300,2400,600), new cjs.Rectangle(-1161.9,-300,2400,600), new cjs.Rectangle(-1165.9,-300,2400,600), new cjs.Rectangle(-1169.9,-300,2400,600), new cjs.Rectangle(-1173.9,-300,2400,600), new cjs.Rectangle(-1177.9,-300,2400,600), new cjs.Rectangle(-1181.9,-300,2400,600), new cjs.Rectangle(-1185.9,-300,2400,600), new cjs.Rectangle(-1189.9,-300,2400,600), new cjs.Rectangle(-1193.9,-300,2400,600), new cjs.Rectangle(-1198,-300,2400,600), new cjs.Rectangle(-1202,-300,2400,600), new cjs.Rectangle(-1206,-300,2400,600), new cjs.Rectangle(-1210,-300,2400,600), new cjs.Rectangle(-1214,-300,2400,600), new cjs.Rectangle(-1218,-300,2400,600), new cjs.Rectangle(-1222.1,-300,2400,600), new cjs.Rectangle(-1226.1,-300,2400,600), new cjs.Rectangle(-1230.1,-300,2400,600), new cjs.Rectangle(-1234.1,-300,2400,600), new cjs.Rectangle(-1238.1,-300,2400,600), new cjs.Rectangle(-1242.1,-300,2400,600), new cjs.Rectangle(-1246.1,-300,2400,600), new cjs.Rectangle(-1250.1,-300,2400,600), new cjs.Rectangle(-1254.2,-300,2400,600), new cjs.Rectangle(-1258.2,-300,2400,600), new cjs.Rectangle(-1262.2,-300,2400,600), new cjs.Rectangle(-1266.2,-300,2400,600), new cjs.Rectangle(-1270.2,-300,2400,600), new cjs.Rectangle(-1274.2,-300,2400,600), new cjs.Rectangle(-1278.2,-300,2400,600), new cjs.Rectangle(-1282.2,-300,2400,600), new cjs.Rectangle(-1286.3,-300,2400,600), new cjs.Rectangle(-1290.3,-300,2400,600), new cjs.Rectangle(-1294.3,-300,2400,600), new cjs.Rectangle(-1298.3,-300,2400,600), new cjs.Rectangle(-1302.3,-300,2400,600), new cjs.Rectangle(-1306.3,-300,2400,600), new cjs.Rectangle(-1310.3,-300,2400,600), new cjs.Rectangle(-1314.4,-300,2400,600), new cjs.Rectangle(-1318.4,-300,2400,600), new cjs.Rectangle(-1322.4,-300,2400,600), new cjs.Rectangle(-1326.4,-300,2400,600), new cjs.Rectangle(-1330.4,-300,2400,600), new cjs.Rectangle(-1334.4,-300,2400,600), new cjs.Rectangle(-1338.4,-300,2400,600), new cjs.Rectangle(-1342.4,-300,2400,600), new cjs.Rectangle(-1346.5,-300,2400,600), new cjs.Rectangle(-1350.5,-300,2400,600), new cjs.Rectangle(-1354.5,-300,2400,600), new cjs.Rectangle(-1358.5,-300,2400,600), new cjs.Rectangle(-1362.5,-300,2400,600), new cjs.Rectangle(-1366.5,-300,2400,600), new cjs.Rectangle(-1370.5,-300,2400,600), new cjs.Rectangle(-1374.6,-300,2400,600), new cjs.Rectangle(-1378.6,-300,2400,600), new cjs.Rectangle(-1382.6,-300,2400,600), new cjs.Rectangle(-1386.6,-300,2400,600), new cjs.Rectangle(-1390.6,-300,2400,600), new cjs.Rectangle(-1394.6,-300,2400,600), new cjs.Rectangle(-1398.6,-300,2400,600), new cjs.Rectangle(-1402.7,-300,2400,600), new cjs.Rectangle(-1406.7,-300,2400,600), new cjs.Rectangle(-1410.7,-300,2400,600), new cjs.Rectangle(-1414.7,-300,2400,600), new cjs.Rectangle(-1418.7,-300,2400,600), new cjs.Rectangle(-1422.7,-300,2400,600), new cjs.Rectangle(-1426.7,-300,2400,600), new cjs.Rectangle(-1430.7,-300,2400,600), new cjs.Rectangle(-1434.8,-300,2400,600), new cjs.Rectangle(-1438.8,-300,2400,600), new cjs.Rectangle(-1442.8,-300,2400,600), new cjs.Rectangle(-1446.8,-300,2400,600), new cjs.Rectangle(-1450.8,-300,2400,600), new cjs.Rectangle(-1454.8,-300,2400,600), new cjs.Rectangle(-1458.8,-300,2400,600), new cjs.Rectangle(-1462.9,-300,2400,600), new cjs.Rectangle(-1466.9,-300,2400,600), new cjs.Rectangle(-1470.9,-300,2400,600), new cjs.Rectangle(-1474.9,-300,2400,600), new cjs.Rectangle(-1478.9,-300,2400,600), new cjs.Rectangle(-1482.9,-300,2400,600), new cjs.Rectangle(-1486.9,-300,2400,600), new cjs.Rectangle(-1490.9,-300,2400,600), new cjs.Rectangle(-1495,-300,2400,600), new cjs.Rectangle(-1499,-300,2400,600), new cjs.Rectangle(-1503,-300,2400,600), new cjs.Rectangle(-1507,-300,2400,600), new cjs.Rectangle(-1511,-300,2400,600), new cjs.Rectangle(-1515,-300,2400,600), new cjs.Rectangle(-1519,-300,2400,600), new cjs.Rectangle(-1523,-300,2400,600), new cjs.Rectangle(-1527.1,-300,2400,600), new cjs.Rectangle(-1531.1,-300,2400,600), new cjs.Rectangle(-1535.1,-300,2400,600), new cjs.Rectangle(-1539.1,-300,2400,600), new cjs.Rectangle(-1543.1,-300,2400,600), new cjs.Rectangle(-1547.1,-300,2400,600), new cjs.Rectangle(-1551.2,-300,2400,600), new cjs.Rectangle(-1555.2,-300,2400,600), new cjs.Rectangle(-1559.2,-300,2400,600), new cjs.Rectangle(-1563.2,-300,2400,600), new cjs.Rectangle(-1567.2,-300,2400,600), new cjs.Rectangle(-1571.2,-300,2400,600), new cjs.Rectangle(-1575.2,-300,2400,600), new cjs.Rectangle(-1579.2,-300,2400,600), new cjs.Rectangle(-1583.2,-300,2400,600), new cjs.Rectangle(-1587.3,-300,2400,600), new cjs.Rectangle(-1591.3,-300,2400,600), new cjs.Rectangle(-1595.3,-300,2400,600), new cjs.Rectangle(-1599.3,-300,2400,600), new cjs.Rectangle(-1603.3,-300,2400,600), new cjs.Rectangle(-1607.3,-300,2400,600), new cjs.Rectangle(-1611.3,-300,2400,600), new cjs.Rectangle(-1615.4,-300,2400,600), new cjs.Rectangle(-1619.4,-300,2400,600), new cjs.Rectangle(-1623.4,-300,2400,600), new cjs.Rectangle(-1627.4,-300,2400,600), new cjs.Rectangle(-1631.4,-300,2400,600), new cjs.Rectangle(-1635.4,-300,2400,600), new cjs.Rectangle(-1639.4,-300,2400,600), new cjs.Rectangle(-1643.5,-300,2400,600), new cjs.Rectangle(-1647.5,-300,2400,600), new cjs.Rectangle(-1651.5,-300,2400,600), new cjs.Rectangle(-1655.5,-300,2400,600), new cjs.Rectangle(-1659.5,-300,2400,600), new cjs.Rectangle(-1663.5,-300,2400,600), new cjs.Rectangle(-1667.5,-300,2400,600), new cjs.Rectangle(-1671.5,-300,2400,600), new cjs.Rectangle(-1675.6,-300,2400,600), new cjs.Rectangle(-1679.6,-300,2400,600), new cjs.Rectangle(-1683.6,-300,2400,600), new cjs.Rectangle(-1687.6,-300,2400,600), new cjs.Rectangle(-1691.6,-300,2400,600), new cjs.Rectangle(-1695.6,-300,2400,600), new cjs.Rectangle(-1699.6,-300,2400,600), new cjs.Rectangle(-1703.7,-300,2400,600), new cjs.Rectangle(-1707.7,-300,2400,600), new cjs.Rectangle(-1711.7,-300,2400,600), new cjs.Rectangle(-1715.7,-300,2400,600), new cjs.Rectangle(-1719.7,-300,2400,600), new cjs.Rectangle(-1723.7,-300,2400,600), new cjs.Rectangle(-1727.7,-300,2400,600), new cjs.Rectangle(-1731.7,-300,2400,600), new cjs.Rectangle(-1735.8,-300,2400,600), new cjs.Rectangle(-1739.8,-300,2400,600), new cjs.Rectangle(-1743.8,-300,2400,600), new cjs.Rectangle(-1747.8,-300,2400,600), new cjs.Rectangle(-1751.8,-300,2400,600), new cjs.Rectangle(-1755.8,-300,2400,600), new cjs.Rectangle(-1759.8,-300,2400,600), new cjs.Rectangle(-1763.8,-300,2400,600), new cjs.Rectangle(-1767.9,-300,2400,600), new cjs.Rectangle(-1771.9,-300,2400,600), new cjs.Rectangle(-1775.9,-300,2400,600), new cjs.Rectangle(-1779.9,-300,2400,600), new cjs.Rectangle(-1783.9,-300,2400,600), new cjs.Rectangle(-1787.9,-300,2400,600), new cjs.Rectangle(-1792,-300,2400,600), new cjs.Rectangle(-1796,-300,2400,600), new cjs.Rectangle(-1800,-300,2400,600)];


(lib.body_zrachok_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.zrachok_2_decor_mc();
	this.instance.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.zrachok_2_base_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40.1,40.1);
p.frameBounds = [rect];


(lib.body_zrachok_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.zrachok_1_decor_mc();
	this.instance.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.zrachok_1_base_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40.1,40.1);
p.frameBounds = [rect];


(lib.body_skin_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_decor_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.body_base_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.4,-190.5,247,382);
p.frameBounds = [rect];


(lib.body_check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitFAQiSAAAAiSIAAlbQAAiSCSAAIFbAAQCSAAAACSIAAFbQAACSiSAAgAkEitIAAFbQAABXBXAAIFbAAQBXAAAAhXIAAlbQAAhXhXAAIlbAAQhXAAAABXg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},14).to({rotation:180},15).to({rotation:270},15).to({rotation:360},15).wait(1));

	// graph
	this.instance_1 = new lib.check_subcategory_img();
	this.instance_1.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitFAQiSAAAAiSIAAlbQAAiSCSAAIFbAAQCSAAAACSIAAFbQAACSiSAAgAkEitIAAFbQAABXBXAAIFbAAQBXAAAAhXIAAlbQAAhXhXAAIlbAAQhXAAAABXg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},14).to({rotation:180},15).to({rotation:270},15).to({rotation:360},15).wait(1));

	// graph
	this.instance_1 = new lib.check_category_img();
	this.instance_1.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.backgrounds_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_background_1_mc();
	this.instance.setTransform(400,300);

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

	this.instance_8 = new lib.background_9_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_10_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_11_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_12_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_13_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_14_img();
	this.instance_13.setTransform(-200,0);

	this.instance_14 = new lib.background_15_img();
	this.instance_14.setTransform(-200,0);

	this.instance_15 = new lib.background_16_img();
	this.instance_15.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,2400,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-115,480,225);
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


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.title_reset_mc = function(mode,startPosition,loop) {
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
		else if (lang_str == "ar")
		{
			this.body_mc.gotoAndStop("ar");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_reset_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-39.5,180,80);
p.frameBounds = [rect];


(lib.title_random_mc = function(mode,startPosition,loop) {
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
		else if (lang_str == "ar")
		{
			this.body_mc.gotoAndStop("ar");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_random_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-39.5,180,80);
p.frameBounds = [rect];


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


(lib.reset_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_reset_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_long_button_img();
	this.instance_1.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.reset_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.reset_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35.5,160,71.1);
p.frameBounds = [rect, new cjs.Rectangle(-90,-40,180,80), new cjs.Rectangle(-80,-35.5,160,71.1), new cjs.Rectangle(-90,-40,180,80)];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-26.2,-26.2,52.5,52.5), new cjs.Rectangle(-30,-30,60,60)];


(lib.random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_random_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_long_button_img();
	this.instance_1.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180.5,80.5);
p.frameBounds = [rect];


(lib.random_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.random_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35.5,160.4,71.5);
p.frameBounds = [rect, new cjs.Rectangle(-90,-40,180.5,80.5), new cjs.Rectangle(-80,-35.5,160.4,71.5), new cjs.Rectangle(-90,-40,180.5,80.5)];


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


(lib.navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.nav_navigation_mc();
	this.prev_mc.setTransform(-90,0,1,1,0,0,180);

	this.next_mc = new lib.nav_navigation_mc();
	this.next_mc.setTransform(90,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// text
	this.title_mc = new lib.title_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

	// bg
	this.instance = new lib.bg_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122,-30,244,60);
p.frameBounds = [rect];


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


(lib.done_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.done_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


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


(lib.zrachok_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.body_zrachok_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40.1,40.1);
p.frameBounds = [rect];


(lib.zrachok_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.body_zrachok_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40.1,40.1);
p.frameBounds = [rect];


(lib.skin_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.body_skin_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.4,-190.5,247,382);
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


(lib.panel_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// no
	this.glass_0 = new lib.glass_0_mc();
	this.glass_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.glass_0).wait(1));

	// options
	this.glass_2 = new lib.option_glass_2_mc();
	this.glass_2.setTransform(255,95);

	this.glass_4 = new lib.option_glass_4_mc();
	this.glass_4.setTransform(255,255);

	this.glass_3 = new lib.option_glass_3_mc();
	this.glass_3.setTransform(95,255);

	this.glass_1 = new lib.option_glass_1_mc();
	this.glass_1.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.glass_1},{t:this.glass_3},{t:this.glass_4},{t:this.glass_2}]}).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect];


(lib.panel_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.bg_2 = new lib.option_back_2_mc();
	this.bg_2.setTransform(255,95);

	this.bg_1 = new lib.option_back_1_mc();
	this.bg_1.setTransform(95,95);

	this.bg_4 = new lib.option_back_4_mc();
	this.bg_4.setTransform(255,255);

	this.bg_3 = new lib.option_back_3_mc();
	this.bg_3.setTransform(95,255);

	this.bg_6 = new lib.option_back_6_mc();
	this.bg_6.setTransform(255,95);

	this.bg_5 = new lib.option_back_5_mc();
	this.bg_5.setTransform(95,95);

	this.bg_8 = new lib.option_back_8_mc();
	this.bg_8.setTransform(255,255);

	this.bg_7 = new lib.option_back_7_mc();
	this.bg_7.setTransform(95,255);

	this.bg_10 = new lib.option_back_10_mc();
	this.bg_10.setTransform(255,95);

	this.bg_9 = new lib.option_back_9_mc();
	this.bg_9.setTransform(95,95);

	this.bg_12 = new lib.option_back_12_mc();
	this.bg_12.setTransform(255,255);

	this.bg_11 = new lib.option_back_11_mc();
	this.bg_11.setTransform(95,255);

	this.bg_14 = new lib.option_back_14_mc();
	this.bg_14.setTransform(255,95);

	this.bg_13 = new lib.option_back_13_mc();
	this.bg_13.setTransform(95,95);

	this.bg_16 = new lib.option_back_16_mc();
	this.bg_16.setTransform(255,255);

	this.bg_15 = new lib.option_back_15_mc();
	this.bg_15.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_3},{t:this.bg_4},{t:this.bg_1},{t:this.bg_2}]}).to({state:[{t:this.bg_7},{t:this.bg_8},{t:this.bg_5},{t:this.bg_6}]},1).to({state:[{t:this.bg_11},{t:this.bg_12},{t:this.bg_9},{t:this.bg_10}]},1).to({state:[{t:this.bg_15},{t:this.bg_16},{t:this.bg_13},{t:this.bg_14}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.glasses_0).wait(2));

	// options
	this.glasses_2 = new lib.option_glasses_2_mc();
	this.glasses_2.setTransform(255,95);

	this.glasses_4 = new lib.option_glasses_4_mc();
	this.glasses_4.setTransform(255,255);

	this.glasses_3 = new lib.option_glasses_3_mc();
	this.glasses_3.setTransform(95,255);

	this.glasses_1 = new lib.option_glasses_1_mc();
	this.glasses_1.setTransform(95,95);

	this.glasses_6 = new lib.option_glasses_6_mc();
	this.glasses_6.setTransform(255,95);

	this.glasses_8 = new lib.option_glasses_8_mc();
	this.glasses_8.setTransform(255,255);

	this.glasses_7 = new lib.option_glasses_7_mc();
	this.glasses_7.setTransform(95,255);

	this.glasses_5 = new lib.option_glasses_5_mc();
	this.glasses_5.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.glasses_1},{t:this.glasses_3},{t:this.glasses_4},{t:this.glasses_2}]}).to({state:[{t:this.glasses_5},{t:this.glasses_7},{t:this.glasses_8},{t:this.glasses_6}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect];


(lib.panel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(4));

	// options
	this.headdress_2 = new lib.option_crown_2_mc();
	this.headdress_2.setTransform(255,95);

	this.headdress_4 = new lib.option_crown_4_mc();
	this.headdress_4.setTransform(255,255);

	this.headdress_3 = new lib.option_crown_3_mc();
	this.headdress_3.setTransform(95,255);

	this.headdress_1 = new lib.option_crown_1_mc();
	this.headdress_1.setTransform(95,95);

	this.headdress_6 = new lib.option_crown_6_mc();
	this.headdress_6.setTransform(255,95);

	this.headdress_8 = new lib.option_crown_8_mc();
	this.headdress_8.setTransform(255,255);

	this.headdress_7 = new lib.option_crown_7_mc();
	this.headdress_7.setTransform(95,255);

	this.headdress_5 = new lib.option_crown_5_mc();
	this.headdress_5.setTransform(95,95);

	this.headdress_10 = new lib.option_crown_10_mc();
	this.headdress_10.setTransform(255,95);

	this.headdress_12 = new lib.option_crown_12_mc();
	this.headdress_12.setTransform(255,255);

	this.headdress_11 = new lib.option_crown_11_mc();
	this.headdress_11.setTransform(95,255);

	this.headdress_9 = new lib.option_crown_9_mc();
	this.headdress_9.setTransform(95,95);

	this.headdress_14 = new lib.option_crown_14_mc();
	this.headdress_14.setTransform(255,95);

	this.headdress_16 = new lib.option_crown_16_mc();
	this.headdress_16.setTransform(255,255);

	this.headdress_15 = new lib.option_crown_15_mc();
	this.headdress_15.setTransform(95,255);

	this.headdress_13 = new lib.option_crown_13_mc();
	this.headdress_13.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_1},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_2}]}).to({state:[{t:this.headdress_5},{t:this.headdress_7},{t:this.headdress_8},{t:this.headdress_6}]},1).to({state:[{t:this.headdress_9},{t:this.headdress_11},{t:this.headdress_12},{t:this.headdress_10}]},1).to({state:[{t:this.headdress_13},{t:this.headdress_15},{t:this.headdress_16},{t:this.headdress_14}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(3));

	// options
	this.earrings_2 = new lib.option_earrings_2_mc();
	this.earrings_2.setTransform(255,95);

	this.earrings_4 = new lib.option_earrings_4_mc();
	this.earrings_4.setTransform(255,255);

	this.earrings_3 = new lib.option_earrings_3_mc();
	this.earrings_3.setTransform(95,255);

	this.earrings_1 = new lib.option_earrings_1_mc();
	this.earrings_1.setTransform(95,95);

	this.earrings_6 = new lib.option_earrings_6_mc();
	this.earrings_6.setTransform(255,95);

	this.earrings_8 = new lib.option_earrings_8_mc();
	this.earrings_8.setTransform(255,255);

	this.earrings_7 = new lib.option_earrings_7_mc();
	this.earrings_7.setTransform(95,255);

	this.earrings_5 = new lib.option_earrings_5_mc();
	this.earrings_5.setTransform(95,95);

	this.earrings_10 = new lib.option_earrings_10_mc();
	this.earrings_10.setTransform(255,95);

	this.earrings_12 = new lib.option_earrings_12_mc();
	this.earrings_12.setTransform(255,255);

	this.earrings_11 = new lib.option_earrings_11_mc();
	this.earrings_11.setTransform(95,255);

	this.earrings_9 = new lib.option_earrings_9_mc();
	this.earrings_9.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_2}]}).to({state:[{t:this.earrings_5},{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_9},{t:this.earrings_11},{t:this.earrings_12},{t:this.earrings_10}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_rightEye = new lib.color_picker_2_mc();
	this.color_rightEye.setTransform(15,20);

	this.timeline.addTween(cjs.Tween.get(this.color_rightEye).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_leftEye = new lib.color_picker_2_mc();
	this.color_leftEye.setTransform(15,20);

	this.timeline.addTween(cjs.Tween.get(this.color_leftEye).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.scars_0 = new lib.scars_0_mc();
	this.scars_0.setTransform(340,95);

	this.timeline.addTween(cjs.Tween.get(this.scars_0).wait(4));

	// options
	this.scars_2 = new lib.option_scars_2_mc();
	this.scars_2.setTransform(255,95);

	this.scars_1 = new lib.option_scars_1_mc();
	this.scars_1.setTransform(95,95);

	this.scars_4 = new lib.option_scars_4_mc();
	this.scars_4.setTransform(255,255);

	this.scars_3 = new lib.option_scars_3_mc();
	this.scars_3.setTransform(95,255);

	this.scars_6 = new lib.option_scars_6_mc();
	this.scars_6.setTransform(255,95);

	this.scars_5 = new lib.option_scars_5_mc();
	this.scars_5.setTransform(95,95);

	this.scars_8 = new lib.option_scars_8_mc();
	this.scars_8.setTransform(255,255);

	this.scars_7 = new lib.option_scars_7_mc();
	this.scars_7.setTransform(95,255);

	this.scars_10 = new lib.option_scars_10_mc();
	this.scars_10.setTransform(255,95);

	this.scars_9 = new lib.option_scars_9_mc();
	this.scars_9.setTransform(95,95);

	this.scars_12 = new lib.option_scars_12_mc();
	this.scars_12.setTransform(255,255);

	this.scars_11 = new lib.option_scars_11_mc();
	this.scars_11.setTransform(95,255);

	this.scars_14 = new lib.option_scars_14_mc();
	this.scars_14.setTransform(255,95);

	this.scars_13 = new lib.option_scars_13_mc();
	this.scars_13.setTransform(95,95);

	this.scars_16 = new lib.option_scars_16_mc();
	this.scars_16.setTransform(255,255);

	this.scars_15 = new lib.option_scars_15_mc();
	this.scars_15.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scars_3},{t:this.scars_4},{t:this.scars_1},{t:this.scars_2}]}).to({state:[{t:this.scars_7},{t:this.scars_8},{t:this.scars_5},{t:this.scars_6}]},1).to({state:[{t:this.scars_11},{t:this.scars_12},{t:this.scars_9},{t:this.scars_10}]},1).to({state:[{t:this.scars_15},{t:this.scars_16},{t:this.scars_13},{t:this.scars_14}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,365,460);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_skin = new lib.color_picker_1_mc();
	this.color_skin.setTransform(15,20);

	this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect];


(lib.option_nose_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_8();
	this.instance.setTransform(0.1,46.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_nose_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_7();
	this.instance.setTransform(0.1,46.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_nose_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_6();
	this.instance.setTransform(0.1,46.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_nose_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_5();
	this.instance.setTransform(0.1,46.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_nose_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_4();
	this.instance.setTransform(0.1,46.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_nose_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_3();
	this.instance.setTransform(0.1,46.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_nose_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_2();
	this.instance.setTransform(0.1,43.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_nose_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.nose_1();
	this.instance.setTransform(0.1,45.8,0.473,0.473);

	this.instance_1 = new lib.skin_mc();
	this.instance_1.setTransform(0.3,21.2,0.473,0.473,0,0,0,0,0.7);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips16();
	this.instance.setTransform(0,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips15();
	this.instance.setTransform(-0.2,5.1,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips14();
	this.instance.setTransform(0.1,4.8,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips13();
	this.instance.setTransform(-0.1,4.9,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips12();
	this.instance.setTransform(0.1,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips11();
	this.instance.setTransform(0.1,4.8,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips10();
	this.instance.setTransform(0.1,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips9();
	this.instance.setTransform(-0.1,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips8();
	this.instance.setTransform(0.3,4.8,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips7();
	this.instance.setTransform(0.1,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips6();
	this.instance.setTransform(0.1,5.1,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips5();
	this.instance.setTransform(0,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips4();
	this.instance.setTransform(0,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips3();
	this.instance.setTransform(0,4.8,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips2();
	this.instance.setTransform(0,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_mouth_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.lips1();
	this.instance.setTransform(0,5,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.4,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(-0.9,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.4,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair20();
	this.instance_3.setTransform(-1.1,15.4,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(0.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair19();
	this.instance_3.setTransform(-3.9,10.4,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair18();
	this.instance_3.setTransform(0.1,5.4,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(0.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair17();
	this.instance_3.setTransform(1,4,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.4,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(-0.9,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.4,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair16();
	this.instance_3.setTransform(0.9,1.4,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(0.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair15();
	this.instance_3.setTransform(2.1,32.4,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(0.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair14();
	this.instance_3.setTransform(2.2,37.5,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair13();
	this.instance_3.setTransform(-16.6,26,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair12();
	this.instance_3.setTransform(-0.1,5,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair11();
	this.instance_3.setTransform(-3.9,-6.6,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.4,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(-0.9,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.4,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair10();
	this.instance_3.setTransform(-10.7,-6.1,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(0.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair9();
	this.instance_3.setTransform(-0.1,30.7,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-1.4,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(-1.9,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-1.4,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair8();
	this.instance_3.setTransform(-3.1,2.4,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair7();
	this.instance_3.setTransform(-3.9,-6.6,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair6();
	this.instance_3.setTransform(-18.4,-1.9,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(0.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair5();
	this.instance_3.setTransform(6.4,18,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair4();
	this.instance_3.setTransform(5.9,-1.6,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair3();
	this.instance_3.setTransform(-3.9,-6.6,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair2();
	this.instance_3.setTransform(1.1,-52.6,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(1.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(1.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(1.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hair1();
	this.instance_3.setTransform(9.4,24,0.326,0.326);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(-0.4,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe20();
	this.instance_1.setTransform(14.8,-5.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(-0.4,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe19();
	this.instance_1.setTransform(-0.2,-10.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe18();
	this.instance_1.setTransform(-5.2,-4.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe17();
	this.instance_1.setTransform(1.1,-20.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe16();
	this.instance_1.setTransform(1.1,-24.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe15();
	this.instance_1.setTransform(1.1,-29.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe14();
	this.instance_1.setTransform(0.1,-11.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe13();
	this.instance_1.setTransform(0.1,-2.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe12();
	this.instance_1.setTransform(0.1,-23.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe11();
	this.instance_1.setTransform(0.1,-31.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe10();
	this.instance_1.setTransform(0.1,-26.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe9();
	this.instance_1.setTransform(-4.4,0.9,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe8();
	this.instance_1.setTransform(0.1,-24.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe7();
	this.instance_1.setTransform(-0.9,-13.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe6();
	this.instance_1.setTransform(-0.9,-9.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe5();
	this.instance_1.setTransform(0.1,-24.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe4();
	this.instance_1.setTransform(0.1,-9.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe3();
	this.instance_1.setTransform(0.1,-28.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe2();
	this.instance_1.setTransform(0.1,-30.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_fringe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALGQjFAAAAjCIAAn8IAJgIIgJgHIAAn8QAAjCDFAAIQCAAQDDAAABDCIAAQHQgBDCjDAAg");

	// graph
	this.instance = new lib.podl2();
	this.instance.setTransform(0.6,10.6,0.688,0.688);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.fringe1();
	this.instance_1.setTransform(-1.9,-23.1,0.326,0.326);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.podl1();
	this.instance_2.setTransform(0.6,12.9,0.688,0.688);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes8();
	this.instance.setTransform(-1.8,-4.9,0.57,0.571,0,0,0,-0.1,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(-1.1,2.2,0.936,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes7();
	this.instance.setTransform(-0.2,-3.9,0.566,0.566,0,0,0,-0.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(0.6,3,0.929,0.93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes6();
	this.instance.setTransform(0.7,-2.7,0.572,0.572,0,0,0,-0.1,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(1.4,2.5,0.938,0.94);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes5();
	this.instance.setTransform(-0.3,-2.4,0.583,0.583,0,0,0,-0.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(0.4,3.8,0.957,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes4();
	this.instance.setTransform(-1.2,0.3,0.575,0.574,0,0,0,-0.1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(-0.5,1.8,0.944,0.943,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes3();
	this.instance.setTransform(0,-3.7,0.574,0.575,0,0,0,-0.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(0.7,2.5,0.943,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes2();
	this.instance.setTransform(0.4,-2,0.597,0.598,0,0,0,-0.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(1.2,2.4,0.98,0.981);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyes1();
	this.instance.setTransform(-0.9,-1.6,0.578,0.578,0,0,0,-0.1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.podl3();
	this.instance_1.setTransform(-0.1,1.8,0.949,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows8();
	this.instance.setTransform(0,0,0.609,0.609,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows7();
	this.instance.setTransform(0,0,0.592,0.591,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows6();
	this.instance.setTransform(0,0,0.616,0.616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows5();
	this.instance.setTransform(0,0,0.623,0.623,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows4();
	this.instance.setTransform(0,0,0.603,0.602,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows3();
	this.instance.setTransform(0,0,0.626,0.625,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows2();
	this.instance.setTransform(0,0,0.649,0.648,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.eyebrows1();
	this.instance.setTransform(0,0,0.603,0.603,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
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


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglfAlgMAAAhKWIApAAIAAgpMBKWAAAMAAABK/g");

	// glasses
	this.glasses = new lib.glasses_all();
	this.glasses.setTransform(6.5,65.6,1,1,0,0,0,266.9,-26);

	this.glasses.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

	// headdress
	this.headdress = new lib.tiara_all();
	this.headdress.setTransform(13.6,-113.7,1,1,0,0,0,218,-10.1);

	this.headdress.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// shadows
	this.shadows = new lib.eyes_all();
	this.shadows.setTransform(6.4,49.2);

	this.shadows.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// rightEye
	this.rightEye = new lib.zrachok_2_mc();
	this.rightEye.setTransform(54.2,52.2,1,1,0,0,180);

	this.rightEye.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rightEye).wait(1));

	// leftEye
	this.leftEye = new lib.zrachok_1_mc();
	this.leftEye.setTransform(-41.4,52.2);

	this.leftEye.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.leftEye).wait(1));

	// body
	this.instance = new lib.beloc();
	this.instance.setTransform(63.7,52.3,1,1,0,0,180);

	this.instance_1 = new lib.beloc();
	this.instance_1.setTransform(-51.1,52.3);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// fringe
	this.fringe = new lib.fringe_all();
	this.fringe.setTransform(-1.3,-56.2);

	this.fringe.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// lips
	this.lips = new lib.lips_all();
	this.lips.setTransform(7,129.5);

	this.lips.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// scars
	this.scars = new lib.scars_all();
	this.scars.setTransform(8.9,82);

	this.scars.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.scars).wait(1));

	// eyebrows
	this.eyebrows = new lib.eyebrows_all();
	this.eyebrows.setTransform(6.2,9.6);

	this.eyebrows.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// nose
	this.nose = new lib.nose_all();
	this.nose.setTransform(7,104.6);

	this.nose.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.nose).wait(1));

	// earrings
	this.earrings = new lib.earrings_all();
	this.earrings.setTransform(153.1,110.2);

	this.earrings.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// skin
	this.skin = new lib.skin_mc();
	this.skin.setTransform(6.5,54.2);

	this.skin.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// hair
	this.hair = new lib.hair_all();
	this.hair.setTransform(29.9,98);

	this.hair.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// glass
	this.glass = new lib.glass_mc();

	this.timeline.addTween(cjs.Tween.get(this.glass).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-240,480,480);
p.frameBounds = [rect];


(lib.check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.body_check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect, null];


(lib.check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.body_check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect, null];


(lib.category_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_5_img();
	this.instance.setTransform(-30,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_4_img();
	this.instance.setTransform(-23,-23,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_img();
	this.instance.setTransform(-22,-22,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_img();
	this.instance.setTransform(-26,-26,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_img();
	this.instance.setTransform(-28,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
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
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
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


(lib.done_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,460);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(400,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.decor_background_1_mc();
	this.instance_3.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,2462.7,1261.9);
p.frameBounds = [rect];


(lib.subcategory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_5_img();
	this.instance.setTransform(-24,-24,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_5_img();
	this.instance.setTransform(-30,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_4_img();
	this.instance.setTransform(-26,-26,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_4_img();
	this.instance.setTransform(-24,-24,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_4_img();
	this.instance.setTransform(-23,-23,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_3_img();
	this.instance.setTransform(-24,-23,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_3_img();
	this.instance.setTransform(-24,-23,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_4_2_img();
	this.instance.setTransform(-26,-26,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_2_img();
	this.instance.setTransform(-22,-20,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_2_img();
	this.instance.setTransform(-22,-20,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_2_img();
	this.instance.setTransform(-24,-24,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_4_1_img();
	this.instance.setTransform(-21,-20,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_1_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_1_img();
	this.instance.setTransform(-28,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_1_img();
	this.instance.setTransform(-28,-28,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(400,700,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.bg = new lib.backgrounds_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,2400,733.4);
p.frameBounds = [rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(6));

	// options
	this.hair_2 = new lib.option_hair_2_mc();
	this.hair_2.setTransform(255,95);

	this.hair_4 = new lib.option_hair_4_mc();
	this.hair_4.setTransform(255,255);

	this.hair_3 = new lib.option_hair_3_mc();
	this.hair_3.setTransform(95,255);

	this.hair_1 = new lib.option_hair_1_mc();
	this.hair_1.setTransform(95,95);

	this.hair_6 = new lib.option_hair_6_mc();
	this.hair_6.setTransform(255,95);

	this.hair_8 = new lib.option_hair_8_mc();
	this.hair_8.setTransform(255,255);

	this.hair_7 = new lib.option_hair_7_mc();
	this.hair_7.setTransform(95,255);

	this.hair_5 = new lib.option_hair_5_mc();
	this.hair_5.setTransform(95,95);

	this.hair_10 = new lib.option_hair_10_mc();
	this.hair_10.setTransform(255,95);

	this.hair_12 = new lib.option_hair_12_mc();
	this.hair_12.setTransform(255,255);

	this.hair_11 = new lib.option_hair_11_mc();
	this.hair_11.setTransform(95,255);

	this.hair_9 = new lib.option_hair_9_mc();
	this.hair_9.setTransform(95,95);

	this.hair_14 = new lib.option_hair_14_mc();
	this.hair_14.setTransform(255,95);

	this.hair_16 = new lib.option_hair_16_mc();
	this.hair_16.setTransform(255,255);

	this.hair_15 = new lib.option_hair_15_mc();
	this.hair_15.setTransform(95,255);

	this.hair_13 = new lib.option_hair_13_mc();
	this.hair_13.setTransform(95,95);

	this.hair_18 = new lib.option_hair_18_mc();
	this.hair_18.setTransform(255,95);

	this.hair_20 = new lib.option_hair_20_mc();
	this.hair_20.setTransform(255,255);

	this.hair_19 = new lib.option_hair_19_mc();
	this.hair_19.setTransform(95,255);

	this.hair_17 = new lib.option_hair_17_mc();
	this.hair_17.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_3},{t:this.hair_4},{t:this.hair_2}]}).to({state:[{t:this.hair_5},{t:this.hair_7},{t:this.hair_8},{t:this.hair_6}]},1).to({state:[{t:this.hair_9},{t:this.hair_11},{t:this.hair_12},{t:this.hair_10}]},1).to({state:[{t:this.hair_13},{t:this.hair_15},{t:this.hair_16},{t:this.hair_14}]},1).to({state:[{t:this.hair_17},{t:this.hair_19},{t:this.hair_20},{t:this.hair_18}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_hair = new lib.color_picker_2_mc();
	this.color_hair.setTransform(15,20);
	this.color_hair._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(5).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(6));

	// options
	this.fringe_2 = new lib.option_fringe_2_mc();
	this.fringe_2.setTransform(255,95);

	this.fringe_1 = new lib.option_fringe_1_mc();
	this.fringe_1.setTransform(95,95);

	this.fringe_4 = new lib.option_fringe_4_mc();
	this.fringe_4.setTransform(255,255);

	this.fringe_3 = new lib.option_fringe_3_mc();
	this.fringe_3.setTransform(95,255);

	this.fringe_6 = new lib.option_fringe_6_mc();
	this.fringe_6.setTransform(255,95);

	this.fringe_5 = new lib.option_fringe_5_mc();
	this.fringe_5.setTransform(95,95);

	this.fringe_8 = new lib.option_fringe_8_mc();
	this.fringe_8.setTransform(255,255);

	this.fringe_7 = new lib.option_fringe_7_mc();
	this.fringe_7.setTransform(95,255);

	this.fringe_10 = new lib.option_fringe_10_mc();
	this.fringe_10.setTransform(255,95);

	this.fringe_9 = new lib.option_fringe_9_mc();
	this.fringe_9.setTransform(95,95);

	this.fringe_12 = new lib.option_fringe_12_mc();
	this.fringe_12.setTransform(255,255);

	this.fringe_11 = new lib.option_fringe_11_mc();
	this.fringe_11.setTransform(95,255);

	this.fringe_14 = new lib.option_fringe_14_mc();
	this.fringe_14.setTransform(255,95);

	this.fringe_13 = new lib.option_fringe_13_mc();
	this.fringe_13.setTransform(95,95);

	this.fringe_16 = new lib.option_fringe_16_mc();
	this.fringe_16.setTransform(255,255);

	this.fringe_15 = new lib.option_fringe_15_mc();
	this.fringe_15.setTransform(95,255);

	this.fringe_18 = new lib.option_fringe_18_mc();
	this.fringe_18.setTransform(255,95);

	this.fringe_17 = new lib.option_fringe_17_mc();
	this.fringe_17.setTransform(95,95);

	this.fringe_20 = new lib.option_fringe_20_mc();
	this.fringe_20.setTransform(255,255);

	this.fringe_19 = new lib.option_fringe_19_mc();
	this.fringe_19.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fringe_3},{t:this.fringe_4},{t:this.fringe_1},{t:this.fringe_2}]}).to({state:[{t:this.fringe_7},{t:this.fringe_8},{t:this.fringe_5},{t:this.fringe_6}]},1).to({state:[{t:this.fringe_11},{t:this.fringe_12},{t:this.fringe_9},{t:this.fringe_10}]},1).to({state:[{t:this.fringe_15},{t:this.fringe_16},{t:this.fringe_13},{t:this.fringe_14}]},1).to({state:[{t:this.fringe_19},{t:this.fringe_20},{t:this.fringe_17},{t:this.fringe_18}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_fringe = new lib.color_picker_2_mc();
	this.color_fringe.setTransform(15,20);
	this.color_fringe._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_fringe).wait(5).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.eyebrows_2 = new lib.option_eyebrows_2_mc();
	this.eyebrows_2.setTransform(255,95);

	this.eyebrows_1 = new lib.option_eyebrows_1_mc();
	this.eyebrows_1.setTransform(95,95);

	this.eyebrows_4 = new lib.option_eyebrows_4_mc();
	this.eyebrows_4.setTransform(255,255);

	this.eyebrows_3 = new lib.option_eyebrows_3_mc();
	this.eyebrows_3.setTransform(95,255);

	this.eyebrows_6 = new lib.option_eyebrows_6_mc();
	this.eyebrows_6.setTransform(255,95);

	this.eyebrows_5 = new lib.option_eyebrows_5_mc();
	this.eyebrows_5.setTransform(95,95);

	this.eyebrows_8 = new lib.option_eyebrows_8_mc();
	this.eyebrows_8.setTransform(255,255);

	this.eyebrows_7 = new lib.option_eyebrows_7_mc();
	this.eyebrows_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_1},{t:this.eyebrows_2}]}).to({state:[{t:this.eyebrows_7},{t:this.eyebrows_8},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_eyebrows = new lib.color_picker_2_mc();
	this.color_eyebrows.setTransform(15,20);
	this.color_eyebrows._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_eyebrows).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.shadows_2 = new lib.option_eyes_2_mc();
	this.shadows_2.setTransform(255,95);

	this.shadows_1 = new lib.option_eyes_1_mc();
	this.shadows_1.setTransform(95,95);

	this.shadows_4 = new lib.option_eyes_4_mc();
	this.shadows_4.setTransform(255,255);

	this.shadows_3 = new lib.option_eyes_3_mc();
	this.shadows_3.setTransform(95,255);

	this.shadows_6 = new lib.option_eyes_6_mc();
	this.shadows_6.setTransform(255,95);

	this.shadows_5 = new lib.option_eyes_5_mc();
	this.shadows_5.setTransform(95,95);

	this.shadows_8 = new lib.option_eyes_8_mc();
	this.shadows_8.setTransform(255,255);

	this.shadows_7 = new lib.option_eyes_7_mc();
	this.shadows_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_1},{t:this.shadows_2}]}).to({state:[{t:this.shadows_7},{t:this.shadows_8},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_shadows = new lib.color_picker_2_mc();
	this.color_shadows.setTransform(15,20);
	this.color_shadows._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shadows).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

	// options
	this.lips_2 = new lib.option_mouth_2_mc();
	this.lips_2.setTransform(255,95);

	this.lips_1 = new lib.option_mouth_1_mc();
	this.lips_1.setTransform(95,95);

	this.lips_4 = new lib.option_mouth_4_mc();
	this.lips_4.setTransform(255,255);

	this.lips_3 = new lib.option_mouth_3_mc();
	this.lips_3.setTransform(95,255);

	this.lips_6 = new lib.option_mouth_6_mc();
	this.lips_6.setTransform(255,95);

	this.lips_5 = new lib.option_mouth_5_mc();
	this.lips_5.setTransform(95,95);

	this.lips_8 = new lib.option_mouth_8_mc();
	this.lips_8.setTransform(255,255);

	this.lips_7 = new lib.option_mouth_7_mc();
	this.lips_7.setTransform(95,255);

	this.lips_10 = new lib.option_mouth_10_mc();
	this.lips_10.setTransform(255,95);

	this.lips_9 = new lib.option_mouth_9_mc();
	this.lips_9.setTransform(95,95);

	this.lips_12 = new lib.option_mouth_12_mc();
	this.lips_12.setTransform(255,255);

	this.lips_11 = new lib.option_mouth_11_mc();
	this.lips_11.setTransform(95,255);

	this.lips_14 = new lib.option_mouth_14_mc();
	this.lips_14.setTransform(255,95);

	this.lips_13 = new lib.option_mouth_13_mc();
	this.lips_13.setTransform(95,95);

	this.lips_16 = new lib.option_mouth_16_mc();
	this.lips_16.setTransform(255,255);

	this.lips_15 = new lib.option_mouth_15_mc();
	this.lips_15.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_3},{t:this.lips_4},{t:this.lips_1},{t:this.lips_2}]}).to({state:[{t:this.lips_7},{t:this.lips_8},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.lips_11},{t:this.lips_12},{t:this.lips_9},{t:this.lips_10}]},1).to({state:[{t:this.lips_15},{t:this.lips_16},{t:this.lips_13},{t:this.lips_14}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_lips = new lib.color_picker_2_mc();
	this.color_lips.setTransform(15,20);
	this.color_lips._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_lips).wait(4).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.nose_2 = new lib.option_nose_2_mc();
	this.nose_2.setTransform(255,95);

	this.nose_1 = new lib.option_nose_1_mc();
	this.nose_1.setTransform(95,95);

	this.nose_4 = new lib.option_nose_4_mc();
	this.nose_4.setTransform(255,255);

	this.nose_3 = new lib.option_nose_3_mc();
	this.nose_3.setTransform(95,255);

	this.nose_6 = new lib.option_nose_6_mc();
	this.nose_6.setTransform(255,95);

	this.nose_5 = new lib.option_nose_5_mc();
	this.nose_5.setTransform(95,95);

	this.nose_8 = new lib.option_nose_8_mc();
	this.nose_8.setTransform(255,255);

	this.nose_7 = new lib.option_nose_7_mc();
	this.nose_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nose_3},{t:this.nose_4},{t:this.nose_1},{t:this.nose_2}]}).to({state:[{t:this.nose_7},{t:this.nose_8},{t:this.nose_5},{t:this.nose_6}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,360,460);
p.frameBounds = [rect, rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,900,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(640,700);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(160,700);

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

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,2462.7,1263.6);
p.frameBounds = [rect];


(lib.panels_mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hero_1_category_1_subcategory_1:0,hero_1_category_1_subcategory_2:1,hero_1_category_1_subcategory_3:2,hero_1_category_1_subcategory_4:3,hero_1_category_2_subcategory_1:4,hero_1_category_2_subcategory_2:5,hero_1_category_2_subcategory_3:6,hero_1_category_2_subcategory_4:7,hero_1_category_3_subcategory_1:8,hero_1_category_3_subcategory_2:9,hero_1_category_4_subcategory_1:10,hero_1_category_4_subcategory_2:11,hero_1_category_4_subcategory_3:12,hero_1_category_5_subcategory_1:13,hero_1_category_5_subcategory_2:14});

	// category
	this.category_5 = new lib.category_5_mc();
	this.category_5.setTransform(-40,315);

	this.category_4 = new lib.category_4_mc();
	this.category_4.setTransform(-40,245);

	this.category_3 = new lib.category_3_mc();
	this.category_3.setTransform(-40,175);

	this.category_2 = new lib.category_2_mc();
	this.category_2.setTransform(-40,105);

	this.category_1 = new lib.category_1_mc();
	this.category_1.setTransform(-40,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.category_1},{t:this.category_2},{t:this.category_3},{t:this.category_4},{t:this.category_5}]}).wait(15));

	// subcategory
	this.subcategory_4_1 = new lib.subcategory_1_4_mc();
	this.subcategory_4_1.setTransform(240,-40);

	this.subcategory_3_1 = new lib.subcategory_1_3_mc();
	this.subcategory_3_1.setTransform(170,-40);

	this.subcategory_2_1 = new lib.subcategory_1_2_mc();
	this.subcategory_2_1.setTransform(100,-40);

	this.subcategory_1_1 = new lib.subcategory_1_1_mc();
	this.subcategory_1_1.setTransform(30,-40);

	this.subcategory_4_2 = new lib.subcategory_2_4_mc();
	this.subcategory_4_2.setTransform(240,-40);

	this.subcategory_3_2 = new lib.subcategory_2_3_mc();
	this.subcategory_3_2.setTransform(170,-40);

	this.subcategory_2_2 = new lib.subcategory_2_2_mc();
	this.subcategory_2_2.setTransform(100,-40);

	this.subcategory_1_2 = new lib.subcategory_2_1_mc();
	this.subcategory_1_2.setTransform(30,-40);

	this.subcategory_2_3 = new lib.subcategory_3_2_mc();
	this.subcategory_2_3.setTransform(100,-40);

	this.subcategory_1_3 = new lib.subcategory_3_1_mc();
	this.subcategory_1_3.setTransform(30,-40);

	this.subcategory_3_4 = new lib.subcategory_4_3_mc();
	this.subcategory_3_4.setTransform(170,-40);

	this.subcategory_2_4 = new lib.subcategory_4_2_mc();
	this.subcategory_2_4.setTransform(100,-40);

	this.subcategory_1_4 = new lib.subcategory_4_1_mc();
	this.subcategory_1_4.setTransform(30,-40);

	this.subcategory_2_5 = new lib.subcategory_5_2_mc();
	this.subcategory_2_5.setTransform(100,-40);

	this.subcategory_1_5 = new lib.subcategory_5_1_mc();
	this.subcategory_1_5.setTransform(30,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subcategory_1_1},{t:this.subcategory_2_1},{t:this.subcategory_3_1},{t:this.subcategory_4_1}]}).to({state:[{t:this.subcategory_1_2},{t:this.subcategory_2_2},{t:this.subcategory_3_2},{t:this.subcategory_4_2}]},4).to({state:[{t:this.subcategory_1_3},{t:this.subcategory_2_3}]},4).to({state:[{t:this.subcategory_1_4},{t:this.subcategory_2_4},{t:this.subcategory_3_4}]},2).to({state:[{t:this.subcategory_1_5},{t:this.subcategory_2_5}]},3).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel_1}]}).to({state:[{t:this.panel_2}]},1).to({state:[{t:this.panel_3}]},1).to({state:[{t:this.panel_4}]},1).to({state:[{t:this.panel_5}]},1).to({state:[{t:this.panel_6}]},1).to({state:[{t:this.panel_7}]},1).to({state:[{t:this.panel_8}]},1).to({state:[{t:this.panel_9}]},1).to({state:[{t:this.panel_10}]},1).to({state:[{t:this.panel_11}]},1).to({state:[{t:this.panel_12}]},1).to({state:[{t:this.panel_13}]},1).to({state:[{t:this.panel_14}]},1).to({state:[{t:this.panel_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-190,440,655);
p.frameBounds = [rect, rect, new cjs.Rectangle(-85,-190,445,655), rect=new cjs.Rectangle(-85,-190,440,655), rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-85,-190,445,655), rect, rect, new cjs.Rectangle(-85,-190,440,655), new cjs.Rectangle(-85,-190,445,655)];


(lib.ConstructorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(190,530,0.688,0.688);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.setTransform(535,540);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

	this.random_btn = new lib.random_btn();
	this.random_btn.setTransform(695,540);
	new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.random_btn},{t:this.reset_btn},{t:this.done_btn}]}).wait(1));

	// panels
	this.panels_mc = new lib.panels_mc1();
	this.panels_mc.setTransform(440,90);

	this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(190,270);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8);
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

	this.instance_3 = new lib.ConstructorScreen();

	this.instance_4 = new lib.RedirectScreen();

	this.instance_5 = new lib.ResultScreen();

	this.instance_6 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(245,50);

	this.instance_7 = new lib.Cursor();
	this.instance_7.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_8 = new lib.OrientationLockScreen();

	this.instance_9 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_7},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,2462.7,1261.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,2462.7,1260), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,15,250,70), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1000,0,2800,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect];


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