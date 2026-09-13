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
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"},
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"},
		{src:"library/images/storage_atlas_21.png", id:"storage_atlas_21"},
		{src:"library/images/storage_atlas_22.png", id:"storage_atlas_22"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[573,0,517,957],[0,0,571,1055]]},
		{name:"storage_atlas_6", frames: [[0,0,565,861]]},
		{name:"storage_atlas_7", frames: [[0,602,800,600],[0,0,800,600]]},
		{name:"storage_atlas_8", frames: [[0,602,800,600],[0,0,800,600]]},
		{name:"storage_atlas_9", frames: [[0,0,800,600]]},
		{name:"storage_atlas_10", frames: [[0,0,607,783],[609,0,545,813]]},
		{name:"storage_atlas_11", frames: [[513,0,600,657],[0,0,511,791]]},
		{name:"storage_atlas_12", frames: [[441,581,600,600],[0,0,439,881],[441,0,627,579]]},
		{name:"storage_atlas_13", frames: [[0,0,393,860],[749,0,492,618],[395,0,352,903]]},
		{name:"storage_atlas_14", frames: [[0,898,530,363],[846,0,408,483],[0,0,434,694],[436,0,408,685],[0,696,1200,200],[532,898,640,280]]},
		{name:"storage_atlas_15", frames: [[450,784,420,280],[0,282,500,300],[0,966,448,289],[884,776,338,352],[884,402,357,372],[642,0,400,400],[502,402,380,380],[0,584,380,380],[0,0,640,280]]},
		{name:"storage_atlas_16", frames: [[422,846,420,280],[844,564,420,280],[422,282,420,280],[0,282,420,280],[0,0,420,280],[422,564,420,280],[844,846,420,280],[422,0,420,280],[0,564,420,280],[844,0,420,280],[0,846,420,280],[844,282,420,280]]},
		{name:"storage_atlas_17", frames: [[0,855,380,260],[0,577,359,276],[693,282,316,255],[0,282,387,293],[382,577,308,313],[389,282,302,271],[382,892,308,313],[1011,282,200,380],[693,539,200,380],[895,664,200,380],[1097,664,200,380],[422,0,420,280],[844,0,420,280],[0,0,420,280]]},
		{name:"storage_atlas_18", frames: [[677,0,310,226],[202,382,260,260],[202,644,260,260],[988,749,260,260],[726,228,260,260],[988,487,260,260],[726,1014,260,260],[726,752,260,260],[988,1011,260,260],[464,794,260,260],[202,906,260,260],[464,270,260,260],[989,225,260,260],[464,532,260,260],[726,490,260,260],[989,0,308,223],[404,0,271,268],[0,382,200,380],[0,0,200,380],[202,0,200,380],[0,764,200,380]]},
		{name:"storage_atlas_19", frames: [[1048,0,200,300],[1048,302,200,300],[301,1048,280,190],[0,1048,299,202],[885,604,300,173],[583,699,300,173],[885,779,300,173],[583,1046,300,170],[583,524,300,173],[583,874,300,170],[885,954,300,169],[885,1125,300,169],[786,0,260,260],[262,262,260,260],[0,524,260,260],[262,524,260,260],[0,0,260,260],[262,0,260,260],[262,786,260,260],[524,262,260,260],[0,262,260,260],[786,262,260,260],[0,786,260,260],[524,0,260,260]]},
		{name:"storage_atlas_20", frames: [[701,171,200,200],[453,171,246,163],[404,942,185,202],[213,171,238,177],[0,804,181,216],[0,171,211,227],[857,373,200,200],[213,350,200,200],[655,373,200,200],[202,552,200,200],[1059,373,200,200],[453,336,200,200],[0,400,200,200],[903,171,200,200],[415,538,200,200],[591,979,274,134],[867,1115,274,134],[867,979,274,134],[0,1022,274,134],[591,1115,274,134],[0,1158,274,134],[276,1146,274,134],[0,0,300,169],[604,0,300,169],[906,0,300,169],[302,0,300,169],[617,575,200,200],[808,777,200,200],[1021,575,200,200],[606,777,200,200],[819,575,200,200],[0,602,200,200],[404,740,200,200],[202,754,200,200],[1010,777,200,200]]},
		{name:"storage_atlas_21", frames: [[276,0,190,190],[972,456,180,180],[0,136,190,190],[1083,744,188,118],[1052,0,237,144],[392,844,180,180],[0,0,274,134],[0,914,180,180],[276,1187,250,104],[0,1096,274,107],[972,638,284,104],[784,758,297,112],[0,1205,264,77],[552,1026,133,201],[1164,265,133,201],[1052,146,241,117],[192,384,220,160],[876,1056,280,80],[192,192,190,190],[945,872,340,80],[784,568,186,188],[1058,1138,150,142],[968,276,194,178],[756,872,187,171],[687,1045,187,132],[364,1026,186,159],[806,368,160,160],[1154,468,140,140],[876,1138,180,120],[468,0,190,190],[0,328,190,190],[384,192,190,190],[182,914,180,180],[574,844,180,180],[576,276,390,90],[392,568,390,90],[414,476,390,90],[0,730,390,90],[392,660,390,90],[0,638,390,90],[392,752,390,90],[414,384,390,90],[660,92,390,90],[0,822,390,90],[660,0,390,90],[0,546,390,90],[660,184,390,90],[945,954,260,100]]},
		{name:"storage_atlas_22", frames: [[337,0,120,140],[703,240,120,120],[459,257,120,120],[984,678,160,32],[581,204,120,120],[1104,712,50,50],[924,222,120,120],[1046,222,120,120],[1168,222,120,120],[337,142,120,120],[459,135,120,120],[1168,100,120,120],[1046,100,120,120],[740,118,120,120],[113,153,120,120],[924,100,120,120],[826,939,74,34],[825,299,74,43],[113,82,90,50],[0,215,90,50],[0,275,120,120],[235,264,120,120],[581,326,120,120],[825,344,120,120],[1138,964,48,48],[76,954,48,48],[479,379,64,64],[0,519,256,44],[0,565,152,74],[357,501,111,110],[459,0,121,133],[924,0,149,98],[601,448,94,132],[1218,742,74,127],[1191,344,103,136],[258,516,82,137],[470,570,73,151],[980,812,39,157],[582,0,77,202],[1155,828,59,94],[342,613,70,38],[466,866,70,43],[902,939,74,34],[466,911,70,38],[1216,871,70,43],[285,941,74,34],[1216,916,70,38],[818,887,70,43],[538,944,74,34],[682,932,70,38],[186,896,70,43],[133,941,74,34],[1134,924,70,38],[890,894,70,43],[209,941,74,34],[754,932,70,38],[746,887,70,43],[0,954,74,34],[1256,482,36,107],[1075,0,149,98],[1160,482,94,132],[1079,770,74,127],[947,466,103,136],[154,565,82,137],[545,582,73,151],[1021,812,39,157],[661,0,77,202],[0,843,59,94],[330,896,70,43],[437,968,74,34],[594,854,74,43],[258,896,70,43],[978,971,74,34],[670,854,74,43],[610,899,70,43],[538,899,70,43],[361,968,74,34],[262,851,74,43],[1062,899,70,43],[1206,956,74,34],[186,851,74,43],[61,909,70,43],[1062,964,74,34],[338,851,74,43],[420,613,36,107],[1218,616,80,124],[947,344,120,120],[802,666,180,60],[620,661,180,60],[620,599,180,60],[802,604,180,60],[984,616,180,60],[238,655,180,60],[202,819,220,30],[666,972,40,40],[0,0,220,80],[825,240,40,55],[111,641,40,43],[205,82,10,11],[1226,0,69,94],[796,812,100,73],[127,843,57,60],[357,264,99,100],[513,951,23,38],[545,379,31,31],[614,944,50,50],[424,819,40,147],[1166,616,50,210],[872,0,50,297],[210,977,40,40],[168,977,40,40],[750,972,40,40],[918,975,40,40],[252,977,40,40],[792,975,40,40],[708,972,40,40],[126,977,40,40],[876,975,40,40],[834,975,40,40],[1069,344,120,120],[703,204,32,32],[898,812,80,80],[61,843,64,64],[122,386,120,120],[825,466,120,120],[0,397,120,120],[357,379,120,120],[703,362,120,120],[479,448,120,120],[0,759,240,40],[242,777,240,40],[353,735,240,40],[595,770,240,40],[620,728,240,40],[111,717,240,40],[862,728,240,40],[837,770,240,40],[594,812,200,40],[0,801,200,40],[122,275,111,99],[484,777,108,87],[222,0,113,151],[0,641,109,94],[1052,466,106,132],[740,0,130,116],[0,82,111,131],[697,484,109,113],[244,386,111,128],[235,153,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arrow_choose_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back_option_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_0_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.beam_title_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bottom8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bottom_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bottom_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bottom_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bottom_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bottom_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bottom_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bottom_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bottom_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.check_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.check_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.check_5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.check_6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.check_7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.check_8_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.check_9_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ero2_lips3_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ero2_lips3_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_all1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_all2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_all3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyes_all1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes_all1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes_all1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes_all1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes_all1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.frame_pic_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frame_pic_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frame_pic_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frame_pic_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.frame_pic_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.g1head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.g2bodmake_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory7 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory8 = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory9 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body_bottom_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body_up_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_base1 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_base2 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_base3 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_base4 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_base5 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_base6 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hip_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_leg_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero1_plecho_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_bottom_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_up_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_base1 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_base2 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_base3 = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_base4 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_base5 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_base6 = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hip_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_leg_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_1 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_2 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_3 = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_plecho_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero_bigtop_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.location_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.makeup_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.makeup_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.makeup_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.makeup_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.makeup_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.makeup_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.makeup_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.makeup_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.makeup_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.makeup_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.makeup_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.makeup_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.nav_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.question_location_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.select_hero_title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.shadow_location_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_en_tictok_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_tictok_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.top1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.top2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.top3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.top4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.top5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.top6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.top7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.top8_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.top9_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.top_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.top_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.top_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.top_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.top_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.top_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.top_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.top_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.top_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-130,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-50,260,100);
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


(lib.shadow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_location_img();
	this.instance.setTransform(-93,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-185,200,380);
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


(lib.question_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.question_location_img();
	this.instance.setTransform(-100,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-190,200,380);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
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


(lib.hero2_plecho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_plecho_img();
	this.instance.setTransform(-18,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-53.5,36,107);
p.frameBounds = [rect];


(lib.hero2_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_leg_img();
	this.instance.setTransform(-29.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.5,-47,59,94);
p.frameBounds = [rect];


(lib.hero2_hip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hip_img();
	this.instance.setTransform(-38.5,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-101,77,202);
p.frameBounds = [rect];


(lib.hero2_hand7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand7_img();
	this.instance.setTransform(-6.8,90.9,1,1,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.8,-68.9,96.7,159.9);
p.frameBounds = [rect];


(lib.hero2_hand6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand6_img();
	this.instance.setTransform(-25.1,90.6,1,1,-135.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.9,-68,158.1,158.6);
p.frameBounds = [rect];


(lib.hero2_hand5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand5_img();
	this.instance.setTransform(-21.4,80.5,1,1,-129.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-69.6,158,150.1);
p.frameBounds = [rect];


(lib.hero2_hand4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand4_img();
	this.instance.setTransform(105.4,78.3,1,1,-173.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3,-68.2,117.3,146.5);
p.frameBounds = [rect];


(lib.hero2_hand3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand3_img();
	this.instance.setTransform(-4.3,74,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.7,-68.1,142.2,142.1);
p.frameBounds = [rect];


(lib.hero2_hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand1_img();
	this.instance.setTransform(-47,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-66,94,132);
p.frameBounds = [rect];


(lib.hero2_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-135.5,-134);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-166.8,-202.7);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-214.9,-223.4);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-195.3,-195.5);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-270.5,-311.3);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-276.4,-338.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-134,271,268);
p.frameBounds = [rect, new cjs.Rectangle(-166.8,-202.7,352,903), new cjs.Rectangle(-214.9,-223.4,434,694), new cjs.Rectangle(-195.3,-195.5,408,685), new cjs.Rectangle(-270.5,-311.3,565,861), new cjs.Rectangle(-276.4,-338.4,571,1055)];


(lib.hero2_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-265,-181.5);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-260,-132);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-152.7,-126.8);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-281.9,-149.3);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-150.8,-168);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-215.1,-238.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-265,-181.5,530,363);
p.frameBounds = [rect, new cjs.Rectangle(-260,-132,517,957), new cjs.Rectangle(-152.7,-126.8,308,223), new cjs.Rectangle(-281.9,-149.3,511,791), new cjs.Rectangle(-150.8,-168,302,271), new cjs.Rectangle(-215.1,-238.9,408,483)];


(lib.hero2_body_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.top1_img();
	this.instance.setTransform(-55,-28.9);

	this.instance_1 = new lib.top2_img();
	this.instance_1.setTransform(-53,-21);

	this.instance_2 = new lib.top3_img();
	this.instance_2.setTransform(-56,-74.9);

	this.instance_3 = new lib.top4_img();
	this.instance_3.setTransform(-54,-20);

	this.instance_4 = new lib.top5_img();
	this.instance_4.setTransform(-51,-65.9);

	this.instance_5 = new lib.top6_img();
	this.instance_5.setTransform(-69,-68.9);

	this.instance_6 = new lib.top7_img();
	this.instance_6.setTransform(-53,-66.9);

	this.instance_7 = new lib.top8_img();
	this.instance_7.setTransform(-53,-66.9);

	this.instance_8 = new lib.top9_img();
	this.instance_8.setTransform(-56,-64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

	// graph
	this.instance_9 = new lib.hero2_body_up_img();
	this.instance_9.setTransform(-66.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-100.5,133,201);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-69,-100.5,135.5,201), rect=new cjs.Rectangle(-66.5,-100.5,133,201), rect, rect, rect];


(lib.hero2_body_bottom0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body_bottom_img();
	this.instance.setTransform(-74.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-49,149,98);
p.frameBounds = [rect];


(lib.hero2_body_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bottom1_img();
	this.instance.setTransform(-118,-20);

	this.instance_1 = new lib.bottom2_img();
	this.instance_1.setTransform(-92,-15);

	this.instance_2 = new lib.bottom3_img();
	this.instance_2.setTransform(-91,-20);

	this.instance_3 = new lib.bottom4_img();
	this.instance_3.setTransform(-124,-20);

	this.instance_4 = new lib.bottom5_img();
	this.instance_4.setTransform(-142,-22);

	this.instance_5 = new lib.bottom6_img();
	this.instance_5.setTransform(-90,-23);

	this.instance_6 = new lib.bottom7_img();
	this.instance_6.setTransform(-95,-16);

	this.instance_7 = new lib.bottom8_img();
	this.instance_7.setTransform(-114,-8);

	this.instance_8 = new lib.bottom9_img();
	this.instance_8.setTransform(-138,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-20,246,163);
p.frameBounds = [rect, new cjs.Rectangle(-92,-15,185,202), new cjs.Rectangle(-91,-20,188,118), new cjs.Rectangle(-124,-20,238,177), new cjs.Rectangle(-142,-22,310,226), new cjs.Rectangle(-90,-23,181,216), new cjs.Rectangle(-95,-16,211,227), new cjs.Rectangle(-114,-8,237,144), new cjs.Rectangle(-138,-19,280,190), null];


(lib.hero2_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1();
	this.instance.setTransform(-125,-52);

	this.instance_1 = new lib.hero1_accessory2();
	this.instance_1.setTransform(-138,-55);

	this.instance_2 = new lib.hero1_accessory3();
	this.instance_2.setTransform(-139,-48.5);

	this.instance_3 = new lib.hero1_accessory4();
	this.instance_3.setTransform(-127,5.5);

	this.instance_4 = new lib.hero1_accessory5_img();
	this.instance_4.setTransform(70.4,-221.4,1,1,45);

	this.instance_5 = new lib.hero1_accessory6();
	this.instance_5.setTransform(-153.4,-224.7);

	this.instance_6 = new lib.hero1_accessory7();
	this.instance_6.setTransform(-159.5,-207.6);

	this.instance_7 = new lib.hero1_accessory8();
	this.instance_7.setTransform(-135.8,-190.8);

	this.instance_8 = new lib.hero1_accessory9();
	this.instance_8.setTransform(3.3,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-52,250,104);
p.frameBounds = [rect, new cjs.Rectangle(-138,-55,274,107), new cjs.Rectangle(-139,-48.5,284,104), new cjs.Rectangle(-127,5.5,256,44), new cjs.Rectangle(18.1,-221.4,159.9,159.8), new cjs.Rectangle(-153.4,-224.7,297,112), new cjs.Rectangle(-159.5,-207.6,299,202), new cjs.Rectangle(-135.8,-190.8,264,77), new cjs.Rectangle(3.3,-235,121,133), null];


(lib.hero1_plecho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_plecho_img();
	this.instance.setTransform(-18,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-53.5,36,107);
p.frameBounds = [rect];


(lib.hero1_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_leg_img();
	this.instance.setTransform(-29.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.5,-47,59,94);
p.frameBounds = [rect];


(lib.hero1_hip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hip_img();
	this.instance.setTransform(-38.5,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-101,77,202);
p.frameBounds = [rect];


(lib.hero1_head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero1_head();
	this.instance.setTransform(189.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(189.3,39.1,308,313);
p.frameBounds = [rect];


(lib.hero1_hand7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand7_img();
	this.instance.setTransform(-6.8,90.9,1,1,-157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.8,-68.9,96.7,159.9);
p.frameBounds = [rect];


(lib.hero1_hand6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand6_img();
	this.instance.setTransform(-25.1,90.6,1,1,-135.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.9,-68,158.1,158.6);
p.frameBounds = [rect];


(lib.hero1_hand5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand5_img();
	this.instance.setTransform(-21.4,80.5,1,1,-129.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-69.6,158,150.1);
p.frameBounds = [rect];


(lib.hero1_hand4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand4_img();
	this.instance.setTransform(105.4,78.3,1,1,-173.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3,-68.2,117.3,146.5);
p.frameBounds = [rect];


(lib.hero1_hand3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand3_img();
	this.instance.setTransform(-4.3,74,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.7,-68.1,142.2,142.1);
p.frameBounds = [rect];


(lib.hero1_hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand1_img();
	this.instance.setTransform(-47,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-66,94,132);
p.frameBounds = [rect];


(lib.hero1_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-300,-328.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-304,-310.6);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-194,-304.3);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-245.6,-286.8);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-260.1,-310.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-328.5,600,657);
p.frameBounds = [rect, new cjs.Rectangle(-304,-310.6,607,783), new cjs.Rectangle(-194,-304.3,393,860), null, new cjs.Rectangle(-245.6,-286.8,492,618), new cjs.Rectangle(-260.1,-310.6,545,813)];


(lib.hero1_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-169,-176);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-161.6,-180.3);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-234,-181.1);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-191.9,-208.9);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-187.3,-202.2);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-293,-195.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169,-176,338,352);
p.frameBounds = [rect, new cjs.Rectangle(-161.6,-180.3,316,255), new cjs.Rectangle(-234,-181.1,439,881), new cjs.Rectangle(-191.9,-208.9,387,293), new cjs.Rectangle(-187.3,-202.2,357,372), new cjs.Rectangle(-293,-195.6,627,579)];


(lib.hero1_body_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.top1_img();
	this.instance.setTransform(-55,-28.9);

	this.instance_1 = new lib.top2_img();
	this.instance_1.setTransform(-53,-21);

	this.instance_2 = new lib.top3_img();
	this.instance_2.setTransform(-56,-74.9);

	this.instance_3 = new lib.top4_img();
	this.instance_3.setTransform(-54,-20);

	this.instance_4 = new lib.top5_img();
	this.instance_4.setTransform(-51,-65.9);

	this.instance_5 = new lib.top6_img();
	this.instance_5.setTransform(-69,-68.9);

	this.instance_6 = new lib.top7_img();
	this.instance_6.setTransform(-53,-66.9);

	this.instance_7 = new lib.top8_img();
	this.instance_7.setTransform(-53,-66.9);

	this.instance_8 = new lib.top9_img();
	this.instance_8.setTransform(-56,-64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

	// graph
	this.instance_9 = new lib.hero1_body_up_img();
	this.instance_9.setTransform(-66.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-100.5,133,201);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-69,-100.5,135.5,201), rect=new cjs.Rectangle(-66.5,-100.5,133,201), rect, rect, rect];


(lib.hero1_body_bottom0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body_bottom_img();
	this.instance.setTransform(-74.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-49,149,98);
p.frameBounds = [rect];


(lib.hero1_body_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bottom1_img();
	this.instance.setTransform(-118,-20);

	this.instance_1 = new lib.bottom2_img();
	this.instance_1.setTransform(-92,-15);

	this.instance_2 = new lib.bottom3_img();
	this.instance_2.setTransform(-91,-20);

	this.instance_3 = new lib.bottom4_img();
	this.instance_3.setTransform(-124,-20);

	this.instance_4 = new lib.bottom5_img();
	this.instance_4.setTransform(-142,-22);

	this.instance_5 = new lib.bottom6_img();
	this.instance_5.setTransform(-90,-23);

	this.instance_6 = new lib.bottom7_img();
	this.instance_6.setTransform(-95,-16);

	this.instance_7 = new lib.bottom8_img();
	this.instance_7.setTransform(-114,-8);

	this.instance_8 = new lib.bottom9_img();
	this.instance_8.setTransform(-138,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-20,246,163);
p.frameBounds = [rect, new cjs.Rectangle(-92,-15,185,202), new cjs.Rectangle(-91,-20,188,118), new cjs.Rectangle(-124,-20,238,177), new cjs.Rectangle(-142,-22,310,226), new cjs.Rectangle(-90,-23,181,216), new cjs.Rectangle(-95,-16,211,227), new cjs.Rectangle(-114,-8,237,144), new cjs.Rectangle(-138,-19,280,190), null];


(lib.hero1_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1();
	this.instance.setTransform(-125,-52);

	this.instance_1 = new lib.hero1_accessory2();
	this.instance_1.setTransform(-138,-55);

	this.instance_2 = new lib.hero1_accessory3();
	this.instance_2.setTransform(-139,-48.5);

	this.instance_3 = new lib.hero1_accessory4();
	this.instance_3.setTransform(-127,5.5);

	this.instance_4 = new lib.hero1_accessory5_img();
	this.instance_4.setTransform(70.4,-221.4,1,1,45);

	this.instance_5 = new lib.hero1_accessory6();
	this.instance_5.setTransform(-153.4,-224.7);

	this.instance_6 = new lib.hero1_accessory7();
	this.instance_6.setTransform(-159.5,-207.6);

	this.instance_7 = new lib.hero1_accessory8();
	this.instance_7.setTransform(-135.8,-190.8);

	this.instance_8 = new lib.hero1_accessory9();
	this.instance_8.setTransform(3.3,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-52,250,104);
p.frameBounds = [rect, new cjs.Rectangle(-138,-55,274,107), new cjs.Rectangle(-139,-48.5,284,104), new cjs.Rectangle(-127,5.5,256,44), new cjs.Rectangle(18.1,-221.4,159.9,159.8), new cjs.Rectangle(-153.4,-224.7,297,112), new cjs.Rectangle(-159.5,-207.6,299,202), new cjs.Rectangle(-135.8,-190.8,264,77), new cjs.Rectangle(3.3,-235,121,133), null];


(lib.head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero2_head2_img();
	this.instance.setTransform(189.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(189.3,39.1,308,313);
p.frameBounds = [rect];


(lib.h1_lips0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero1_lips1_1();
	this.instance.setTransform(-8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,5.7,70,38);
p.frameBounds = [rect];


(lib.g2_lips6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips6_2();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g2_lips6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips6_1();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g2_lips6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero2_lips6_3();
	this.instance.setTransform(-9.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,5.7,74,43);
p.frameBounds = [rect];


(lib.g2_lips5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips5_2();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g2_lips5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips5_1();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g2_lips5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero2_lips5_3();
	this.instance.setTransform(-9.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,5.7,74,43);
p.frameBounds = [rect];


(lib.g2_lips4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips4_2();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g2_lips4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero2_lips4_3();
	this.instance.setTransform(-9.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,5.7,74,43);
p.frameBounds = [rect];


(lib.g2_lips4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips4_1();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g2_lips3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.ero2_lips3_3();
	this.instance.setTransform(-9.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,5.7,74,43);
p.frameBounds = [rect];


(lib.g2_lips3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ero2_lips3_2();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g2_lips3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips3_1();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g2_lips2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero2_lips2_3();
	this.instance.setTransform(-9.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,5.7,74,43);
p.frameBounds = [rect];


(lib.g2_lips2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips2_2();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g2_lips2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips2_1();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g2_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero2_lips1_3();
	this.instance.setTransform(-9.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.7,5.7,74,43);
p.frameBounds = [rect];


(lib.g2_lips0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_2();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g2_lips0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_1();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g1_lips6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips6_3();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g1_lips6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips6_2();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g1_lips6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero1_lips6_1();
	this.instance.setTransform(-8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,5.7,70,38);
p.frameBounds = [rect];


(lib.g1_lips5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips5_3();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g1_lips5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips5_2();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g1_lips5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero1_lips5_1();
	this.instance.setTransform(-8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,5.7,70,38);
p.frameBounds = [rect];


(lib.g1_lips4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips4_3();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g1_lips4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips4_2();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g1_lips4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero1_lips4_1();
	this.instance.setTransform(-8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,5.7,70,38);
p.frameBounds = [rect];


(lib.g1_lips3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips3_3();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g1_lips3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips3_2();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g1_lips3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero1_lips3_1();
	this.instance.setTransform(-8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,5.7,70,38);
p.frameBounds = [rect];


(lib.g1_lips02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.hero1_lips2_1();
	this.instance.setTransform(-8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,5.7,70,38);
p.frameBounds = [rect];


(lib.g1_lips0_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips2_3();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g1_lips0_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips2_2();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
p.frameBounds = [rect];


(lib.g1_lips0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_3();
	this.instance.setTransform(-37.1,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.1,-16.9,74,34);
p.frameBounds = [rect];


(lib.g1_lips0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_2();
	this.instance.setTransform(-34.8,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.8,-21.7,70,43);
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


(lib.eyes2_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes2_all1_img();
	this.instance.setTransform(-4.6,-9.3);

	this.instance_1 = new lib.eyes2_all2_img();
	this.instance_1.setTransform(-4.6,-9.3);

	this.instance_2 = new lib.eyes2_all3_img();
	this.instance_2.setTransform(-4.6,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.6,-9.3,274,134);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes_all1_1_img();
	this.instance.setTransform(-5,-9.3);

	this.instance_1 = new lib.eyes_all1_2_img();
	this.instance_1.setTransform(-5,-9.3);

	this.instance_2 = new lib.eyes_all1_3_img();
	this.instance_2.setTransform(-5,-9.3);

	this.instance_3 = new lib.eyes_all1_4_img();
	this.instance_3.setTransform(-5,-9.3);

	this.instance_4 = new lib.eyes_all1_5_img();
	this.instance_4.setTransform(-5,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},41).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_3}]},42).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},19).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-9.3,274,134);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.circle_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmZGXQgJgCgHgGQgGgHgCgJIgbiiIhwgOQgJgBgHgGQgGgFgDgJQgDgIADgIQAniggoi0QgCgJADgIQAEgJAHgFQAHgFAJgBIBmgFIAaiqQACgJAGgHQAGgGAJgDQAJgCAJAEIPVF6QAJAEAFAHQAFAIAAAIQAAAJgFAHQgFAIgJAEIvMF6QgFACgFAAIgHgBgAmciyQgBAKgIAHQgIAIgLAAIhcAFQAcCdgcCOIBmANQAJABAIAHQAHAHACAKIAZCTINhlQItqlQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40.9,120,81.8);
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
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_0_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.body_title_tictok_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_tictok_img();
	this.instance.setTransform(-210,-140);

	this.instance_1 = new lib.title_ru_tictok_img();
	this.instance_1.setTransform(-210,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-140,420,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-210,-140);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-210,-140);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-210,-140);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-210,-140);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-210,-140);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-210,-140);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-210,-140);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-210,-140);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-210,-140);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-210,-140);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-210,-140);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-210,-140);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-210,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-140,420,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_select_hero_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.select_hero_title_en_img();
	this.instance.setTransform(-195,-45);

	this.instance_1 = new lib.select_hero_title_ru_img();
	this.instance_1.setTransform(-195,-45);

	this.instance_2 = new lib.select_hero_title_de_img();
	this.instance_2.setTransform(-195,-45);

	this.instance_3 = new lib.select_hero_title_fr_img();
	this.instance_3.setTransform(-195,-45);

	this.instance_4 = new lib.select_hero_title_it_img();
	this.instance_4.setTransform(-195,-45);

	this.instance_5 = new lib.select_hero_title_es_img();
	this.instance_5.setTransform(-195,-45);

	this.instance_6 = new lib.select_hero_title_pt_img();
	this.instance_6.setTransform(-195,-45);

	this.instance_7 = new lib.select_hero_title_tr_img();
	this.instance_7.setTransform(-195,-45);

	this.instance_8 = new lib.select_hero_title_ja_img();
	this.instance_8.setTransform(-195,-45);

	this.instance_9 = new lib.select_hero_title_hi_img();
	this.instance_9.setTransform(-195,-45);

	this.instance_10 = new lib.select_hero_title_ar_img();
	this.instance_10.setTransform(-195,-45);

	this.instance_11 = new lib.select_hero_title_id_img();
	this.instance_11.setTransform(-195,-45);

	this.instance_12 = new lib.select_hero_title_zh_img();
	this.instance_12.setTransform(-195,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-45,390,90);
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


(lib.body_nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.bg_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_1_img();
	this.instance.setTransform(-210,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-140,420,280);
p.frameBounds = [rect];


(lib.beam_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.beam_title_img();
	this.instance.setTransform(-13,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-9,160,32);
p.frameBounds = [rect];


(lib.back_option_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.back_option_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.arrow_choose_hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.arrow_choose_hero_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-70,120,140);
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
	this.shape.graphics.f("#FFCCFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.snowfall_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(600,250,1.5,0.833);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,500);
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
	this.instance_2.setTransform(-24,24,0.75,0.75,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-24,-24,48,48), rect, rect];


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


(lib.remove_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_2_img();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:360},0).to({y:240,alpha:1},10).wait(50).to({x:20},10).to({x:-10},15).to({x:0},10).wait(26).to({y:360,alpha:0.012},10).wait(60));

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,500);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,620), new cjs.Rectangle(-210,-210,420,608), new cjs.Rectangle(-210,-210,420,596), new cjs.Rectangle(-210,-210,420,584), new cjs.Rectangle(-210,-210,420,572), new cjs.Rectangle(-210,-210,420,560), new cjs.Rectangle(-210,-210,420,548), new cjs.Rectangle(-210,-210,420,536), new cjs.Rectangle(-210,-210,420,524), new cjs.Rectangle(-210,-210,420,512), rect=new cjs.Rectangle(-210,-210,420,500), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,512), new cjs.Rectangle(-210,-210,420,524), new cjs.Rectangle(-210,-210,420,536), new cjs.Rectangle(-210,-210,420,548), new cjs.Rectangle(-210,-210,420,560), new cjs.Rectangle(-210,-210,420,572), new cjs.Rectangle(-210,-210,420,584), new cjs.Rectangle(-210,-210,420,596), new cjs.Rectangle(-210,-210,420,608), rect=new cjs.Rectangle(-210,-210,420,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.title_tictok_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_tictok_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-140,420,280);
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
p.nominalBounds = rect = new cjs.Rectangle(-210,-140,420,280);
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


(lib.select_hero_title_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_select_hero_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-45,390,90);
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


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjfFtQgjgjAAgxQAAgwAjgjIDHjGIjHjFQgjgjAAgwQAAgyAjgiQAigjAyABQAwgBAjAjIEYEaQAjAiAAAwQAAAwgjAiIkYEbQgjAjgwgBQgyABgigjg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},30).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ao0I2QjrjrAAlLQAAlKDrjrQDqjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDrQjqDplLABQlKgBjqjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhrHWQgdgcAAgrQAAgqAdgdIFGlIIlGlHQgdgdAAgqQAAgqAdgdQAegeApAAQAoAAAdAeIGJGIQAfAggCAtQACAugfAgImJGIQgeAdgnABQgpgBgegdgAmoE3QgegdAAgqQAAgpAegeICpipIipipQgegdAAgqQAAgpAegeQAdgdApAAQAqAAAdAdIDxDyQAeAdAAAoQAAApgeAeIjxDwQgdAdgqABQgqgBgcgdg");

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


(lib.hero2_lipsall6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_lips6_2();
	this.instance.setTransform(1,0.7);

	this.instance_1 = new lib.g2_lips6_3();
	this.instance_1.setTransform(-0.1,-1);
	this.instance_1._off = true;

	this.instance_2 = new lib.g2_lips6_1();
	this.instance_2.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},1).wait(30).to({scaleX:0.86},10).to({_off:true,regX:25.8,regY:23.5,scaleX:1,x:-0.4,y:-1.3},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},1).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.8,-21,70,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34), new cjs.Rectangle(-36,-19.1,74,43), rect=new cjs.Rectangle(-36,-19,74,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36,-19.1,74,43), new cjs.Rectangle(-37.3,-19,76.9,43), new cjs.Rectangle(-38.7,-19,79.7,43), new cjs.Rectangle(-40,-19,82.5,43), new cjs.Rectangle(-41.4,-19,85.4,43), new cjs.Rectangle(-42.8,-19.1,88.2,43), new cjs.Rectangle(-41.1,-19,84.7,43), new cjs.Rectangle(-39.4,-19,81.1,43), new cjs.Rectangle(-37.7,-19,77.6,43), new cjs.Rectangle(-36,-19.1,74,43)];


(lib.hero2_lipsall5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_lips5_2();
	this.instance.setTransform(1,0.7);

	this.instance_1 = new lib.g2_lips5_3();
	this.instance_1.setTransform(-0.1,-1);
	this.instance_1._off = true;

	this.instance_2 = new lib.g2_lips5_1();
	this.instance_2.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},1).wait(30).to({scaleX:0.86},10).to({_off:true,regX:25.8,regY:23.5,scaleX:1,x:-0.4,y:-1.3},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},1).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.8,-21,70,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34), new cjs.Rectangle(-36,-19.1,74,43), rect=new cjs.Rectangle(-36,-19,74,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36,-19.1,74,43), new cjs.Rectangle(-37.3,-19,76.9,43), new cjs.Rectangle(-38.7,-19,79.7,43), new cjs.Rectangle(-40,-19,82.5,43), new cjs.Rectangle(-41.4,-19,85.4,43), new cjs.Rectangle(-42.8,-19.1,88.2,43), new cjs.Rectangle(-41.1,-19,84.7,43), new cjs.Rectangle(-39.4,-19,81.1,43), new cjs.Rectangle(-37.7,-19,77.6,43), new cjs.Rectangle(-36,-19.1,74,43)];


(lib.hero2_lipsall4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_lips4_1();
	this.instance.setTransform(1,0.7);

	this.instance_1 = new lib.g2_lips4_3();
	this.instance_1.setTransform(-0.1,-1);
	this.instance_1._off = true;

	this.instance_2 = new lib.g2_lips4_2();
	this.instance_2.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},1).wait(30).to({scaleX:0.86},10).to({_off:true,regX:25.8,regY:23.5,scaleX:1,x:-0.4,y:-1.3},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},1).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.8,-21,70,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34), new cjs.Rectangle(-36,-19.1,74,43), rect=new cjs.Rectangle(-36,-19,74,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36,-19.1,74,43), new cjs.Rectangle(-37.3,-19,76.9,43), new cjs.Rectangle(-38.7,-19,79.7,43), new cjs.Rectangle(-40,-19,82.5,43), new cjs.Rectangle(-41.4,-19,85.4,43), new cjs.Rectangle(-42.8,-19.1,88.2,43), new cjs.Rectangle(-41.1,-19,84.7,43), new cjs.Rectangle(-39.4,-19,81.1,43), new cjs.Rectangle(-37.7,-19,77.6,43), new cjs.Rectangle(-36,-19.1,74,43)];


(lib.hero2_lipsall3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_lips3_1();
	this.instance.setTransform(1,0.7);

	this.instance_1 = new lib.g2_lips3_2();
	this.instance_1.setTransform(-0.1,-1);
	this.instance_1._off = true;

	this.instance_2 = new lib.g2_lips3_3();
	this.instance_2.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},1).wait(30).to({scaleX:0.86},10).to({_off:true,regX:25.8,regY:23.5,scaleX:1,x:-0.4,y:-1.3},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},1).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.8,-21,70,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34), new cjs.Rectangle(-36,-19.1,74,43), rect=new cjs.Rectangle(-36,-19,74,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36,-19.1,74,43), new cjs.Rectangle(-37.3,-19,76.9,43), new cjs.Rectangle(-38.7,-19,79.7,43), new cjs.Rectangle(-40,-19,82.5,43), new cjs.Rectangle(-41.4,-19,85.4,43), new cjs.Rectangle(-42.8,-19.1,88.2,43), new cjs.Rectangle(-41.1,-19,84.7,43), new cjs.Rectangle(-39.4,-19,81.1,43), new cjs.Rectangle(-37.7,-19,77.6,43), new cjs.Rectangle(-36,-19.1,74,43)];


(lib.hero2_lipsall2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_lips2_1();
	this.instance.setTransform(1,0.7);

	this.instance_1 = new lib.g2_lips2_2();
	this.instance_1.setTransform(-0.1,-1);
	this.instance_1._off = true;

	this.instance_2 = new lib.g2_lips2_3();
	this.instance_2.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},1).wait(30).to({scaleX:0.86},10).to({_off:true,regX:25.8,regY:23.5,scaleX:1,x:-0.4,y:-1.3},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},1).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.8,-21,70,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34), new cjs.Rectangle(-36,-19.1,74,43), rect=new cjs.Rectangle(-36,-19,74,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36,-19.1,74,43), new cjs.Rectangle(-37.3,-19,76.9,43), new cjs.Rectangle(-38.7,-19,79.7,43), new cjs.Rectangle(-40,-19,82.5,43), new cjs.Rectangle(-41.4,-19,85.4,43), new cjs.Rectangle(-42.8,-19.1,88.2,43), new cjs.Rectangle(-41.1,-19,84.7,43), new cjs.Rectangle(-39.4,-19,81.1,43), new cjs.Rectangle(-37.7,-19,77.6,43), new cjs.Rectangle(-36,-19.1,74,43)];


(lib.hero2_lipsall1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_lips0_2();
	this.instance.setTransform(1,0.7);

	this.instance_1 = new lib.g2_lips0_3();
	this.instance_1.setTransform(-0.1,-1);
	this.instance_1._off = true;

	this.instance_2 = new lib.g2_lips1();
	this.instance_2.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},1).wait(30).to({scaleX:0.86},10).to({_off:true,regX:25.8,regY:23.5,scaleX:1,x:-0.4,y:-1.3},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},1).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.8,-21,70,43);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34), new cjs.Rectangle(-36,-19.1,74,43), rect=new cjs.Rectangle(-36,-19,74,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36,-19.1,74,43), new cjs.Rectangle(-37.3,-19,76.9,43), new cjs.Rectangle(-38.7,-19,79.7,43), new cjs.Rectangle(-40,-19,82.5,43), new cjs.Rectangle(-41.4,-19,85.4,43), new cjs.Rectangle(-42.8,-19.1,88.2,43), new cjs.Rectangle(-41.1,-19,84.7,43), new cjs.Rectangle(-39.4,-19,81.1,43), new cjs.Rectangle(-37.7,-19,77.6,43), new cjs.Rectangle(-36,-19.1,74,43)];


(lib.hero2_face6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_blink1
	this.instance = new lib.eyes2_all();
	this.instance.setTransform(1.1,-25.9,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g2_lips0
	this.instance_1 = new lib.hero2_lipsall6();
	this.instance_1.setTransform(6.2,55.3,1,1,0,0,0,1.8,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_rouge1
	this.instance_2 = new lib.hero2_face_base6();
	this.instance_2.setTransform(-145.2,-82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.2,-82.2,300,169);
p.frameBounds = [rect];


(lib.hero2_face5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_blink1
	this.instance = new lib.eyes2_all();
	this.instance.setTransform(1.1,-25.9,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g2_lips0
	this.instance_1 = new lib.hero2_lipsall5();
	this.instance_1.setTransform(6.2,55.3,1,1,0,0,0,1.8,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_rouge1
	this.instance_2 = new lib.hero2_face_base5();
	this.instance_2.setTransform(-145.2,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.2,-82.5,300,169);
p.frameBounds = [rect];


(lib.hero2_face4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_blink1
	this.instance = new lib.eyes2_all();
	this.instance.setTransform(1.1,-25.9,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g2_lips0
	this.instance_1 = new lib.hero2_lipsall4();
	this.instance_1.setTransform(6.2,55.3,1,1,0,0,0,1.8,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g2_shad1
	this.instance_2 = new lib.hero2_face_base4();
	this.instance_2.setTransform(-145.2,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.2,-82.5,300,169);
p.frameBounds = [rect];


(lib.hero2_face3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_blink1
	this.instance = new lib.eyes2_all();
	this.instance.setTransform(1.1,-25.9,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g2_lips0
	this.instance_1 = new lib.hero2_lipsall3();
	this.instance_1.setTransform(6.2,55.3,1,1,0,0,0,1.8,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_rouge1
	this.instance_2 = new lib.hero2_face_base3();
	this.instance_2.setTransform(-145.2,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.2,-82.5,300,169);
p.frameBounds = [rect];


(lib.hero2_face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_blink1
	this.instance = new lib.eyes2_all();
	this.instance.setTransform(1.1,-25.9,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g2_lips0
	this.instance_1 = new lib.hero2_lipsall2();
	this.instance_1.setTransform(6.2,55.3,1,1,0,0,0,1.8,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_rouge1
	this.instance_2 = new lib.hero2_face_base2();
	this.instance_2.setTransform(-145.2,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.2,-82.5,300,169);
p.frameBounds = [rect];


(lib.hero2_face1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_blink1
	this.instance = new lib.eyes2_all();
	this.instance.setTransform(1.1,-25.9,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g2_lips0
	this.instance_1 = new lib.hero2_lipsall1();
	this.instance_1.setTransform(6.2,55.3,1,1,0,0,0,1.8,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_rouge1
	this.instance_2 = new lib.hero2_face_base1();
	this.instance_2.setTransform(-145.2,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.2,-82.5,300,169);
p.frameBounds = [rect];


(lib.hero2_face_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_face1();
	this.instance.setTransform(4.5,2.1,1,1,0,0,0,4.5,2.1);

	this.instance_1 = new lib.hero2_face2();
	this.instance_1.setTransform(4.5,2.1,1,1,0,0,0,4.5,2.1);

	this.instance_2 = new lib.hero2_face3();
	this.instance_2.setTransform(4.5,2.1,1,1,0,0,0,4.5,2.1);

	this.instance_3 = new lib.hero2_face4();
	this.instance_3.setTransform(4.5,2.1,1,1,0,0,0,4.5,2.1);

	this.instance_4 = new lib.hero2_face5();
	this.instance_4.setTransform(4.5,2.1,1,1,0,0,0,4.5,2.1);

	this.instance_5 = new lib.hero2_face6();
	this.instance_5.setTransform(4.5,2.1,1,1,0,0,0,4.5,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.2,-82.5,300,169);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-145.2,-82.2,300,169)];


(lib.hero1_lipsall6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_lips6_1();
	this.instance.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);

	this.instance_1 = new lib.g1_lips6_2();
	this.instance_1.setTransform(1,0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.g1_lips6_3();
	this.instance_2.setTransform(-0.1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).to({_off:true,regX:0,regY:0,x:1,y:0.7},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},1).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},1).wait(30).to({scaleX:0.86},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-19.1,70,38);
p.frameBounds = [rect, rect=new cjs.Rectangle(-34.2,-19,70,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34.2,-19.1,70,38), new cjs.Rectangle(-35.5,-19,72.7,38), new cjs.Rectangle(-36.8,-19,75.4,38), new cjs.Rectangle(-38.1,-19,78.1,38), new cjs.Rectangle(-39.4,-19,80.7,38), new cjs.Rectangle(-40.7,-19.1,83.4,38), new cjs.Rectangle(-39,-19,80.1,38), new cjs.Rectangle(-37.5,-19,76.7,38), new cjs.Rectangle(-35.8,-19,73.4,38), new cjs.Rectangle(-34.2,-19.1,70,38), rect=new cjs.Rectangle(-33.8,-21,70,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34)];


(lib.hero1_lipsall5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_lips5_1();
	this.instance.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);

	this.instance_1 = new lib.g1_lips5_2();
	this.instance_1.setTransform(1,0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.g1_lips5_3();
	this.instance_2.setTransform(-0.1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).to({_off:true,regX:0,regY:0,x:1,y:0.7},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},1).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},1).wait(30).to({scaleX:0.86},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-19.1,70,38);
p.frameBounds = [rect, rect=new cjs.Rectangle(-34.2,-19,70,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34.2,-19.1,70,38), new cjs.Rectangle(-35.5,-19,72.7,38), new cjs.Rectangle(-36.8,-19,75.4,38), new cjs.Rectangle(-38.1,-19,78.1,38), new cjs.Rectangle(-39.4,-19,80.7,38), new cjs.Rectangle(-40.7,-19.1,83.4,38), new cjs.Rectangle(-39,-19,80.1,38), new cjs.Rectangle(-37.5,-19,76.7,38), new cjs.Rectangle(-35.8,-19,73.4,38), new cjs.Rectangle(-34.2,-19.1,70,38), rect=new cjs.Rectangle(-33.8,-21,70,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34)];


(lib.hero1_lipsall4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_lips4_1();
	this.instance.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);

	this.instance_1 = new lib.g1_lips4_2();
	this.instance_1.setTransform(1,0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.g1_lips4_3();
	this.instance_2.setTransform(-0.1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).to({_off:true,regX:0,regY:0,x:1,y:0.7},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},1).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},1).wait(30).to({scaleX:0.86},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-19.1,70,38);
p.frameBounds = [rect, rect=new cjs.Rectangle(-34.2,-19,70,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34.2,-19.1,70,38), new cjs.Rectangle(-35.5,-19,72.7,38), new cjs.Rectangle(-36.8,-19,75.4,38), new cjs.Rectangle(-38.1,-19,78.1,38), new cjs.Rectangle(-39.4,-19,80.7,38), new cjs.Rectangle(-40.7,-19.1,83.4,38), new cjs.Rectangle(-39,-19,80.1,38), new cjs.Rectangle(-37.5,-19,76.7,38), new cjs.Rectangle(-35.8,-19,73.4,38), new cjs.Rectangle(-34.2,-19.1,70,38), rect=new cjs.Rectangle(-33.8,-21,70,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34)];


(lib.hero1_lipsall3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_lips3_1();
	this.instance.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);

	this.instance_1 = new lib.g1_lips3_2();
	this.instance_1.setTransform(1,0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.g1_lips3_3();
	this.instance_2.setTransform(-0.1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).to({_off:true,regX:0,regY:0,x:1,y:0.7},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},1).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},1).wait(30).to({scaleX:0.86},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-19.1,70,38);
p.frameBounds = [rect, rect=new cjs.Rectangle(-34.2,-19,70,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34.2,-19.1,70,38), new cjs.Rectangle(-35.5,-19,72.7,38), new cjs.Rectangle(-36.8,-19,75.4,38), new cjs.Rectangle(-38.1,-19,78.1,38), new cjs.Rectangle(-39.4,-19,80.7,38), new cjs.Rectangle(-40.7,-19.1,83.4,38), new cjs.Rectangle(-39,-19,80.1,38), new cjs.Rectangle(-37.5,-19,76.7,38), new cjs.Rectangle(-35.8,-19,73.4,38), new cjs.Rectangle(-34.2,-19.1,70,38), rect=new cjs.Rectangle(-33.8,-21,70,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34)];


(lib.hero1_lipsall2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_lips02();
	this.instance.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);

	this.instance_1 = new lib.g1_lips0_21();
	this.instance_1.setTransform(1,0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.g1_lips0_31();
	this.instance_2.setTransform(-0.1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).to({_off:true,regX:0,regY:0,x:1,y:0.7},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},1).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},1).wait(30).to({scaleX:0.86},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-19.1,70,38);
p.frameBounds = [rect, rect=new cjs.Rectangle(-34.2,-19,70,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34.2,-19.1,70,38), new cjs.Rectangle(-35.5,-19,72.7,38), new cjs.Rectangle(-36.8,-19,75.4,38), new cjs.Rectangle(-38.1,-19,78.1,38), new cjs.Rectangle(-39.4,-19,80.7,38), new cjs.Rectangle(-40.7,-19.1,83.4,38), new cjs.Rectangle(-39,-19,80.1,38), new cjs.Rectangle(-37.5,-19,76.7,38), new cjs.Rectangle(-35.8,-19,73.4,38), new cjs.Rectangle(-34.2,-19.1,70,38), rect=new cjs.Rectangle(-33.8,-21,70,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34)];


(lib.hero1_lipsall1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_lips0_1();
	this.instance.setTransform(-0.4,-1.3,1,1,0,0,0,25.8,23.5);

	this.instance_1 = new lib.g1_lips0_2();
	this.instance_1.setTransform(1,0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.g1_lips0_3();
	this.instance_2.setTransform(-0.1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:1.19},5).to({scaleX:1},4).to({_off:true,regX:0,regY:0,x:1,y:0.7},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},1).wait(18).to({scaleX:1.09,scaleY:0.82},12).to({_off:true,scaleX:1,scaleY:1,x:-0.1,y:-1},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},1).wait(30).to({scaleX:0.86},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-19.1,70,38);
p.frameBounds = [rect, rect=new cjs.Rectangle(-34.2,-19,70,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34.2,-19.1,70,38), new cjs.Rectangle(-35.5,-19,72.7,38), new cjs.Rectangle(-36.8,-19,75.4,38), new cjs.Rectangle(-38.1,-19,78.1,38), new cjs.Rectangle(-39.4,-19,80.7,38), new cjs.Rectangle(-40.7,-19.1,83.4,38), new cjs.Rectangle(-39,-19,80.1,38), new cjs.Rectangle(-37.5,-19,76.7,38), new cjs.Rectangle(-35.8,-19,73.4,38), new cjs.Rectangle(-34.2,-19.1,70,38), rect=new cjs.Rectangle(-33.8,-21,70,43), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34,-20.7,70.5,42.3), new cjs.Rectangle(-34.3,-20.3,71,41.7), new cjs.Rectangle(-34.5,-20,71.5,41), new cjs.Rectangle(-34.8,-19.7,72,40.3), new cjs.Rectangle(-35,-19.3,72.5,39.7), new cjs.Rectangle(-35.3,-19,73,39.1), new cjs.Rectangle(-35.5,-18.7,73.5,38.4), new cjs.Rectangle(-35.8,-18.3,74,37.7), new cjs.Rectangle(-36,-18,74.5,37.1), new cjs.Rectangle(-36.3,-17.7,75,36.4), new cjs.Rectangle(-36.5,-17.3,75.5,35.8), new cjs.Rectangle(-36.8,-17,76,35.1), rect=new cjs.Rectangle(-37.2,-17.9,74,34), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-36.6,-17.9,73,34), new cjs.Rectangle(-36.1,-17.9,72,34), new cjs.Rectangle(-35.6,-17.9,71,34), new cjs.Rectangle(-35.1,-17.9,69.9,34), new cjs.Rectangle(-34.6,-17.9,68.9,34), new cjs.Rectangle(-34.1,-17.9,67.9,34), new cjs.Rectangle(-33.6,-17.9,66.9,34), new cjs.Rectangle(-33.1,-17.9,65.9,34), new cjs.Rectangle(-32.6,-17.9,64.9,34), new cjs.Rectangle(-32.1,-17.9,64,34)];


(lib.hero1_face6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_purp
	this.instance = new lib.eyes_all1();
	this.instance.setTransform(0,-24.8,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g1_lips0
	this.instance_1 = new lib.hero1_lipsall6();
	this.instance_1.setTransform(2.5,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_shad2
	this.instance_2 = new lib.hero1_face_base6();
	this.instance_2.setTransform(-145.5,-81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-81.1,300,170);
p.frameBounds = [rect];


(lib.hero1_face5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_purp
	this.instance = new lib.eyes_all1();
	this.instance.setTransform(0,-24.8,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g1_lips0
	this.instance_1 = new lib.hero1_lipsall5();
	this.instance_1.setTransform(2.5,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_shad2
	this.instance_2 = new lib.hero1_face_base5();
	this.instance_2.setTransform(-145.5,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-83.6,300,173);
p.frameBounds = [rect];


(lib.hero1_face4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_purp
	this.instance = new lib.eyes_all1();
	this.instance.setTransform(0,-24.8,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g1_lips0
	this.instance_1 = new lib.hero1_lipsall4();
	this.instance_1.setTransform(2.5,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_shad2
	this.instance_2 = new lib.hero1_face_base4();
	this.instance_2.setTransform(-145.5,-81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-81.1,300,170);
p.frameBounds = [rect];


(lib.hero1_face3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_purp
	this.instance = new lib.eyes_all1();
	this.instance.setTransform(0,-24.8,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g1_lips0
	this.instance_1 = new lib.hero1_lipsall3();
	this.instance_1.setTransform(2.5,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_shad2
	this.instance_2 = new lib.hero1_face_base3();
	this.instance_2.setTransform(-145.5,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-83.6,300,173);
p.frameBounds = [rect];


(lib.hero1_face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_purp
	this.instance = new lib.eyes_all1();
	this.instance.setTransform(0,-24.8,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g1_lips0
	this.instance_1 = new lib.hero1_lipsall2();
	this.instance_1.setTransform(2.5,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_shad2
	this.instance_2 = new lib.hero1_face_base2();
	this.instance_2.setTransform(-145.5,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-83.6,300,173);
p.frameBounds = [rect];


(lib.hero1_face1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes_purp
	this.instance = new lib.eyes_all1();
	this.instance.setTransform(0,-24.8,1,1,0,0,0,130.6,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// g1_lips0
	this.instance_1 = new lib.hero1_lipsall1();
	this.instance_1.setTransform(2.5,59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// g1_shad2
	this.instance_2 = new lib.hero1_face_base1();
	this.instance_2.setTransform(-145.5,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-83.6,300,173);
p.frameBounds = [rect];


(lib.hero1_face_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_face1();
	this.instance.setTransform(4.2,2.8,1,1,0,0,0,4.2,2.8);

	this.instance_1 = new lib.hero1_face2();
	this.instance_1.setTransform(4.2,2.8,1,1,0,0,0,4.2,2.8);

	this.instance_2 = new lib.hero1_face3();
	this.instance_2.setTransform(4.2,2.8,1,1,0,0,0,4.2,2.8);

	this.instance_3 = new lib.hero1_face4();
	this.instance_3.setTransform(4.2,2.8,1,1,0,0,0,4.2,2.8);

	this.instance_4 = new lib.hero1_face5();
	this.instance_4.setTransform(4.2,2.8,1,1,0,0,0,4.2,2.8);

	this.instance_5 = new lib.hero1_face6();
	this.instance_5.setTransform(4.2,2.8,1,1,0,0,0,4.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.5,-83.6,300,173);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-145.5,-81.1,300,170), new cjs.Rectangle(-145.5,-83.6,300,173), new cjs.Rectangle(-145.5,-81.1,300,170)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_accessory_all();
	this.accessory.setTransform(1,-193.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(44).to({rotation:1.8,x:20,y:-187.5},9).wait(35).to({rotation:0,x:1,y:-193.5},10).wait(5).to({y:-174.5},4).to({y:-193.5},4).to({y:-174.5},4).to({y:-193.5},4).wait(4).to({y:-174.5},3).to({y:-193.5},3).wait(4).to({x:-1,y:-191.5},15).to({x:1,y:-193.5},15).wait(117));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(-0.5,-237.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(44).to({rotation:1.8,x:20.5,y:-232.1},9).wait(35).to({rotation:0,x:-0.5,y:-237.1},10).wait(5).to({y:-217.1},4).to({y:-237.1},4).to({y:-217.1},4).to({y:-237.1},4).wait(4).to({y:-217.1},3).to({y:-237.1},3).wait(4).to({x:-1.5,y:-234.1},15).to({x:-0.5,y:-237.1},15).wait(117));

	// body
	this.instance = new lib.hero2_hand6();
	this.instance.setTransform(-89,-11.8,1,1,141.1,0,0,29.1,-49);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).to({regX:29,regY:-49.1,rotation:113.9,x:-78.9,y:-2.3},15).to({regX:29.1,regY:-49,rotation:141.1,x:-89,y:-11.8},15).to({regX:29,rotation:66.1,x:-73.1},7).to({regX:28.9,rotation:2.4,x:-68.6,y:-6.8},7).to({_off:true},1).wait(102));

	// body
	this.instance_1 = new lib.hero2_hand4();
	this.instance_1.setTransform(-69,0.2,1,1,25,0,0,29,-49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(178).to({_off:false},0).to({regX:28.9,regY:-48.9,rotation:-38.8,x:-50.7,y:-6.2},5).to({regY:-49,rotation:-75.7,x:-33.8,y:-8.9},5).wait(85).to({rotation:-10.7,x:-61.8,y:-2},5).to({_off:true},1).wait(1));

	// body
	this.instance_2 = new lib.hero2_hand5();
	this.instance_2.setTransform(-69,0.3,1,1,0,0,0,29,-49);

	this.instance_3 = new lib.hero2_hand3();
	this.instance_3.setTransform(-86.9,-7.7,1,1,-120.2,0,0,28.9,-49);
	this.instance_3._off = true;

	this.instance_4 = new lib.hero2_hand7();
	this.instance_4.setTransform(-87,-7.8,1,1,-177.7,0,0,29,-49);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({regY:-49.1,rotation:128.3,x:-77.2,y:-16.8},9).to({x:-107.1,y:-45.8},10).to({regX:28.9,rotation:162},5).to({regX:29,rotation:128.3},5).to({regX:28.9,rotation:162},5).to({regX:29,rotation:128.3},5).to({regX:28.9,rotation:162},5).to({regX:29,regY:-49,rotation:0,x:-69,y:0.3},10).to({_off:true,regX:28.9,rotation:-120.2,x:-86.9,y:-7.7},5).wait(176).to({_off:false,regX:29,rotation:0,x:-69,y:0.3},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},5).to({x:-59.9,y:4.3},4).to({x:-86.9,y:-7.7},4).to({x:-59.9,y:4.3},4).to({x:-86.9,y:-7.7},4).to({_off:true,regX:29,rotation:-177.7,x:-87,y:-7.8},4).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({_off:false},4).to({rotation:-173,x:-52,y:8.5},3).to({rotation:-177.7,x:-87,y:-7.8},3).to({rotation:-207.7,x:-90,y:-9.3},3).to({_off:true},1).wait(147));

	// body
	this.instance_5 = new lib.hero2_hand7();
	this.instance_5.setTransform(93.1,-5.7,1,1,0,174.9,-5.1,29,-49);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).to({skewX:171.7,skewY:-8.3,x:65.1,y:6.3},3).to({skewX:174.9,skewY:-5.1,x:93.1,y:-5.7},3).to({regX:28.9,skewX:51.2,skewY:-128.8,x:91.6,y:-10.8},3).to({_off:true},1).wait(147));

	// body
	this.instance_6 = new lib.hero2_hand3();
	this.instance_6.setTransform(93,-5.7,1,1,0,105,-75,29,-49);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({skewX:168.7,skewY:-11.3,x:92.6,y:-6.2},3).to({_off:true},1).wait(157));

	// body
	this.instance_7 = new lib.hero2_hand1();
	this.instance_7.setTransform(69,-5.7,1,1,0,0,180,29,-49);

	this.instance_8 = new lib.hero2_hand3();
	this.instance_8.setTransform(93,-5.7,1,1,0,105,-75,29,-49);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({skewX:13,skewY:193,x:52.6,y:12.4},9).wait(35).to({skewX:0,skewY:180,x:69,y:-5.7},10).to({_off:true,skewX:105,skewY:285,x:93},5).wait(30).to({_off:false,regY:-49.1,skewX:11.7,skewY:191.7,x:93.1,y:-5.8},0).to({skewX:11.7,y:-16.8},15).to({y:-5.8},15).to({regY:-49,skewX:0,skewY:180,x:69,y:-5.7},11).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},5).to({x:70,y:14.3},4).to({x:93,y:-5.7},4).to({x:70,y:14.3},4).to({x:93,y:-5.7},4).to({_off:true},1).wait(160));

	// makeup
	this.makeup = new lib.hero2_face_all();
	this.makeup.setTransform(0.8,-183.8,0.5,0.5,0,0,0,4.2,2.7);

	this.timeline.addTween(cjs.Tween.get(this.makeup).wait(44).to({regY:2.6,rotation:1.8,x:18.8,y:-177.8},9).wait(35).to({regY:2.7,rotation:0,x:0.8,y:-183.8},10).wait(5).to({y:-166.8},4).to({y:-183.8},4).to({y:-166.8},4).to({y:-183.8},4).wait(4).to({y:-166.8},3).to({y:-183.8},3).wait(4).to({x:-1.2,y:-181.8},15).to({x:0.8,y:-183.8},15).wait(117));

	// body
	this.instance_9 = new lib.head2();
	this.instance_9.setTransform(-1.2,-151.3,0.5,0.5,0,0,0,343.2,317.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({regX:343.3,rotation:1.8,x:16.9,y:-145.2},9).wait(35).to({regX:343.2,rotation:0,x:-1.2,y:-151.3},10).wait(5).to({y:-133.3},4).to({y:-151.3},4).to({y:-133.3},4).to({y:-151.3},4).wait(4).to({y:-134.3},3).to({y:-151.3},3).wait(4).to({x:-3.2,y:-149.3},15).to({x:-1.2,y:-151.3},15).wait(117));

	// bottom
	this.bottom = new lib.hero2_body_bottom();
	this.bottom.setTransform(2.4,43.6);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(44).to({rotation:-5.5,x:-20.6,y:44.6},9).wait(35).to({rotation:0,x:2.4,y:43.6},10).wait(5).to({y:61.6},4).to({y:43.6},4).to({y:61.6},4).to({y:43.6},4).wait(4).to({y:61.6},3).to({y:43.6},3).wait(4).to({rotation:4.1,x:19.4,y:44.6},15).to({rotation:0,x:2.4,y:43.6},15).wait(117));

	// top
	this.top = new lib.hero2_body_up();
	this.top.setTransform(1.4,31.3,1,1,0,0,0,0,87);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(44).to({regX:-0.1,rotation:13,x:-21.7,y:33.3},9).wait(35).to({regX:0,rotation:0,x:1.4,y:31.3},10).wait(5).to({y:49.3},4).to({y:31.3},4).to({y:49.3},4).to({y:31.3},4).wait(4).to({y:49.3},3).to({y:31.3},3).wait(4).to({regX:-0.1,rotation:-6,x:20.3},15).to({regX:0,rotation:0,x:1.4},15).wait(117));

	// body
	this.instance_10 = new lib.hero2_plecho();
	this.instance_10.setTransform(58,-101.3,1,1,0,0,180,4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({skewX:13,skewY:193,x:63.3,y:-83.2},9).wait(35).to({skewX:0,skewY:180,x:58,y:-101.3},10).to({skewX:-15,skewY:165,x:58.1},5).to({regX:4.2,regY:-47.1,skewX:0,skewY:180,x:57.9,y:-83.4},4).to({regX:4,regY:-47,skewX:-15,skewY:165,x:58.1,y:-101.3},4).to({regX:4.2,regY:-47.1,skewX:0,skewY:180,x:57.9,y:-83.4},4).to({regX:4,regY:-47,skewX:-15,skewY:165,x:58.1,y:-101.3},4).wait(4).to({skewX:-2.1,skewY:177.9,x:58,y:-84.3},3).to({skewX:-15,skewY:165,x:58.1,y:-101.3},3).wait(4).to({x:59.1,y:-108.3},15).to({x:58.1,y:-101.3},15).to({skewX:0,skewY:180,x:58},15).wait(102));

	// body
	this.instance_11 = new lib.hero2_body_bottom0();
	this.instance_11.setTransform(2.4,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({rotation:-5.5,x:-20.6,y:44.6},9).wait(35).to({rotation:0,x:2.4,y:43.6},10).wait(5).to({y:61.6},4).to({y:43.6},4).to({y:61.6},4).to({y:43.6},4).wait(4).to({y:61.6},3).to({y:43.6},3).wait(4).to({rotation:4.1,x:19.4,y:44.6},15).to({rotation:0,x:2.4,y:43.6},15).wait(117));

	// body
	this.instance_12 = new lib.hero2_plecho();
	this.instance_12.setTransform(-57,-96.3,1,1,0,0,0,4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({rotation:13,x:-49.9,y:-104.2},9).to({regY:-47.1,rotation:43,x:-43.8,y:-103.2},10).wait(25).to({regY:-47,rotation:0,x:-57,y:-96.3},10).to({rotation:15},5).to({scaleY:0.91,rotation:-1.2,x:-56.9,y:-78.4},4).to({scaleY:1,rotation:15,x:-57,y:-96.3},4).to({scaleY:0.91,rotation:-1.2,x:-56.9,y:-78.4},4).to({scaleY:1,rotation:15,x:-57,y:-96.3},4).wait(4).to({regX:4.1,rotation:-6.4,x:-53,y:-79.4},3).to({regX:4,rotation:15,x:-57,y:-96.3},3).wait(4).to({x:-45,y:-88.3},15).to({x:-57,y:-96.3},15).to({rotation:0},15).to({rotation:-17.2,x:-58,y:-96.4},10).wait(85).to({rotation:0,x:-57,y:-96.3},6).wait(1));

	// body
	this.instance_13 = new lib.hero2_hip();
	this.instance_13.setTransform(-42.6,64.6,1,1,0,0,0,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({rotation:-5.5,x:-63.9,y:69.9},9).wait(35).to({rotation:0,x:-42.6,y:64.6},10).wait(5).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).wait(4).to({scaleY:0.9,y:83.9},3).to({scaleY:1,y:64.6},3).wait(4).to({regX:0.1,rotation:4.2,x:-26.4,y:61.9},15).to({regX:0,rotation:0,x:-42.6,y:64.6},15).wait(117));

	// body
	this.instance_14 = new lib.hero2_hip();
	this.instance_14.setTransform(46.4,64.6,1,1,0,0,180,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({skewX:-5.5,skewY:174.5,x:24.7,y:61.5},9).wait(35).to({skewX:0,skewY:180,x:46.4,y:64.6},10).wait(5).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).wait(4).to({scaleY:0.9,y:83.9},3).to({scaleY:1,y:64.6},3).wait(4).to({regX:-0.1,skewX:4.2,skewY:184.2,x:62.4,y:68.4},15).to({regX:0,skewX:0,skewY:180,x:46.4,y:64.6},15).wait(117));

	// body
	this.instance_15 = new lib.hero2_leg();
	this.instance_15.setTransform(-39.6,212.6,1,1,0,0,0,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(44).to({rotation:-5.5,x:-46.8,y:217},9).wait(35).to({rotation:0,x:-39.6,y:212.6},10).wait(5).to({y:228.6},4).to({y:212.6},4).to({y:228.6},4).to({y:212.6},4).wait(4).to({y:219.6},3).to({y:212.6},3).wait(4).to({regX:-0.1,rotation:4.2,x:-34.4,y:209.7},15).to({regX:0,rotation:0,x:-39.6,y:212.6},15).wait(117));

	// body
	this.instance_16 = new lib.hero2_leg();
	this.instance_16.setTransform(45.4,212.6,1,1,0,0,180,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(44).to({skewX:-5.5,skewY:174.5,x:37.8,y:208.9},9).wait(35).to({skewX:0,skewY:180,x:45.4,y:212.6},10).wait(5).to({y:228.6},4).to({y:212.6},4).to({y:228.6},4).to({y:212.6},4).wait(4).to({y:219.6},3).to({y:212.6},3).wait(4).to({skewX:4.2,skewY:184.2,x:50.4,y:215.9},15).to({skewX:0,skewY:180,x:45.4,y:212.6},15).wait(117));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(-2.6,-185.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(44).to({rotation:1.8,x:18.4,y:-180.2},9).wait(35).to({rotation:0,x:-2.6,y:-185.2},10).wait(5).to({y:-165.2},4).to({y:-185.2},4).to({y:-165.2},4).to({y:-185.2},4).wait(4).to({y:-165.2},3).to({y:-185.2},3).wait(4).to({x:-3.6,y:-182.2},15).to({x:-2.6,y:-185.2},15).wait(117));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.2,-327.9,316.3,618.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-185.1,-327.4,328.7,618.8), new cjs.Rectangle(-192,-327.4,334.1,619.6), new cjs.Rectangle(-196.5,-327.4,337.1,620.3), new cjs.Rectangle(-208.5,-327.4,351.1,621.1), new cjs.Rectangle(-212.3,-326.9,357.2,621.4), new cjs.Rectangle(-207.4,-326.9,355,622.1), new cjs.Rectangle(-194.3,-326.9,344.7,622.9), new cjs.Rectangle(-173.9,-326.9,326.9,623.5), new cjs.Rectangle(-213.4,-326.9,369.2,624.4), new cjs.Rectangle(-150.5,-326.8,306.3,624.2), new cjs.Rectangle(-153.5,-326.8,309.3,624.2), new cjs.Rectangle(-156.5,-326.8,312.3,624.2), new cjs.Rectangle(-159.5,-326.8,315.3,624.2), new cjs.Rectangle(-162.4,-326.8,318.2,624.2), new cjs.Rectangle(-165.4,-326.8,321.2,624.2), new cjs.Rectangle(-168.4,-326.8,324.2,624.2), new cjs.Rectangle(-171.4,-326.8,327.2,624.2), new cjs.Rectangle(-174.4,-326.8,330.2,624.2), new cjs.Rectangle(-243.4,-326.8,399.2,624.2), new cjs.Rectangle(-176.9,-326.8,332.7,624.2), new cjs.Rectangle(-177.4,-326.8,333.2,624.2), new cjs.Rectangle(-177,-326.8,332.8,624.2), new cjs.Rectangle(-175.7,-326.8,331.5,624.2), new cjs.Rectangle(-200.2,-326.8,356,624.2), new cjs.Rectangle(-175.7,-326.8,331.5,624.2), new cjs.Rectangle(-177.1,-326.8,332.9,624.2), new cjs.Rectangle(-177.5,-326.8,333.3,624.2), new cjs.Rectangle(-176.9,-326.8,332.7,624.2), new cjs.Rectangle(-243.4,-326.8,399.2,624.2), new cjs.Rectangle(-176.9,-326.8,332.7,624.2), new cjs.Rectangle(-177.4,-326.8,333.2,624.2), new cjs.Rectangle(-177,-326.8,332.8,624.2), new cjs.Rectangle(-175.7,-326.8,331.5,624.2), new cjs.Rectangle(-200.2,-326.8,356,624.2), new cjs.Rectangle(-175.7,-326.8,331.5,624.2), new cjs.Rectangle(-177.1,-326.8,332.9,624.2), new cjs.Rectangle(-177.5,-326.8,333.3,624.2), new cjs.Rectangle(-176.9,-326.8,332.7,624.2), new cjs.Rectangle(-243.4,-326.8,399.2,624.2), new cjs.Rectangle(-176.9,-326.8,332.7,624.2), new cjs.Rectangle(-177.4,-326.8,333.2,624.2), new cjs.Rectangle(-177,-326.8,332.8,624.2), new cjs.Rectangle(-175.7,-326.8,331.5,624.2), new cjs.Rectangle(-200.2,-326.9,355.9,624.4), new cjs.Rectangle(-173.5,-326.9,326.9,623.6), new cjs.Rectangle(-168.1,-326.8,319,622.8), new cjs.Rectangle(-194.6,-326.8,343,622.3), new cjs.Rectangle(-214.2,-327.2,360.5,622), new cjs.Rectangle(-223.6,-327.2,367.5,621.2), new cjs.Rectangle(-222.7,-327.1,364.1,620.5), new cjs.Rectangle(-210.6,-327.5,351.6,620.2), new cjs.Rectangle(-198,-327.5,340.4,619.5), new cjs.Rectangle(-189.1,-327.4,332.8,618.8), new cjs.Rectangle(-171.2,-327.9,316.3,618.5), new cjs.Rectangle(-139,-327.9,289.8,618.5), new cjs.Rectangle(-133,-327.9,279.4,618.5), new cjs.Rectangle(-133,-327.9,266.1,618.5), rect=new cjs.Rectangle(-133,-327.9,265,618.5), rect, new cjs.Rectangle(-133,-322.9,265,617.5), new cjs.Rectangle(-133,-317.9,265,616.5), new cjs.Rectangle(-133,-312.9,265,615.5), new cjs.Rectangle(-133,-307.9,265,614.5), new cjs.Rectangle(-133,-312.9,265,615.5), new cjs.Rectangle(-133,-317.9,265,616.5), new cjs.Rectangle(-133,-322.9,265,617.5), new cjs.Rectangle(-133,-327.9,265,618.5), new cjs.Rectangle(-133,-322.9,265,617.5), new cjs.Rectangle(-133,-317.9,265,616.5), new cjs.Rectangle(-133,-312.9,265,615.5), new cjs.Rectangle(-133,-307.9,265,614.5), new cjs.Rectangle(-133,-312.9,265,615.5), new cjs.Rectangle(-133,-317.9,265,616.5), new cjs.Rectangle(-133,-322.9,265,617.5), rect=new cjs.Rectangle(-133,-327.9,265,618.5), rect, rect, new cjs.Rectangle(-133,-327.9,284.7,618.5), new cjs.Rectangle(-133,-327.9,265,618.5), new cjs.Rectangle(-133,-321.2,265,614.2), new cjs.Rectangle(-133,-314.5,265,609.8), new cjs.Rectangle(-133,-307.9,265,605.5), new cjs.Rectangle(-133,-314.5,265,609.8), new cjs.Rectangle(-133,-321.2,265,614.2), rect=new cjs.Rectangle(-133,-327.9,265,618.5), rect, rect, new cjs.Rectangle(-177,-327.9,329.1,618.5), new cjs.Rectangle(-217.1,-327.9,388.1,618.5), new cjs.Rectangle(-148.9,-327.7,319.7,618.6), new cjs.Rectangle(-147.8,-327.5,318.7,618.8), new cjs.Rectangle(-146.8,-327.3,317.6,619), new cjs.Rectangle(-149.4,-327.1,320.3,619.1), new cjs.Rectangle(-152.9,-326.9,323.7,619.2), new cjs.Rectangle(-156.7,-326.7,327.6,619.3), new cjs.Rectangle(-160.1,-326.5,331,619.6), new cjs.Rectangle(-163.4,-326.3,334.2,619.6), new cjs.Rectangle(-166.6,-326.1,337.4,619.9), new cjs.Rectangle(-170.1,-325.9,341,620), new cjs.Rectangle(-173.1,-325.7,344,620.1), new cjs.Rectangle(-176.1,-325.5,347,620.3), new cjs.Rectangle(-179,-325.3,349.9,620.4), new cjs.Rectangle(-182.1,-325.1,352.9,620.6), new cjs.Rectangle(-227.7,-324.9,398.7,620.7), new cjs.Rectangle(-182.1,-325.1,353,620.5), new cjs.Rectangle(-179,-325.3,349.9,620.4), new cjs.Rectangle(-176.2,-325.5,347,620.3), new cjs.Rectangle(-173.2,-325.7,344,620.1), new cjs.Rectangle(-170.2,-325.9,341,620), new cjs.Rectangle(-166.6,-326.1,337.5,619.9), new cjs.Rectangle(-163.4,-326.3,334.3,619.6), new cjs.Rectangle(-160.1,-326.5,331,619.5), new cjs.Rectangle(-156.7,-326.7,327.6,619.3), new cjs.Rectangle(-152.9,-326.9,323.8,619.2), new cjs.Rectangle(-149.4,-327.1,320.3,619.1), new cjs.Rectangle(-146.8,-327.3,317.7,619), new cjs.Rectangle(-147.9,-327.5,318.8,618.8), new cjs.Rectangle(-148.9,-327.7,319.8,618.6), new cjs.Rectangle(-217.1,-327.9,388.1,618.5), new cjs.Rectangle(-157.9,-327.9,326.5,618.5), new cjs.Rectangle(-179,-327.9,345.4,618.5), new cjs.Rectangle(-196.8,-327.9,360.9,618.5), new cjs.Rectangle(-210.3,-327.9,372.1,618.5), new cjs.Rectangle(-219.3,-327.9,378.8,618.5), new cjs.Rectangle(-223.5,-327.9,380.7,618.5), new cjs.Rectangle(-243.6,-327.9,398.4,618.5), new cjs.Rectangle(-218.8,-327.9,371.1,618.5), new cjs.Rectangle(-211.5,-327.9,361.4,618.5), new cjs.Rectangle(-208.9,-327.9,356.4,618.5), new cjs.Rectangle(-206.1,-327.9,351.1,618.5), new cjs.Rectangle(-199.9,-327.9,345,618.5), new cjs.Rectangle(-190.4,-327.9,335.5,618.5), new cjs.Rectangle(-180.2,-327.9,325.2,618.5), new cjs.Rectangle(-146.3,-327.9,291.4,618.5), rect=new cjs.Rectangle(-133,-327.9,278,618.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-171.2,-327.9,316.3,618.5)];


(lib.hero_2_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_accessory_all();
	this.accessory.setTransform(7,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(3.8,-165.8);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// makeup
	this.makeup = new lib.hero2_face_all();
	this.makeup.setTransform(4,-58.5,1,1,0,0,0,4.5,2.1);

	this.timeline.addTween(cjs.Tween.get(this.makeup).wait(1));

	// body
	this.instance = new lib.head2();
	this.instance.setTransform(3.7,-115.9,1,1,0,0,0,344,195.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero_bigtop_img();
	this.instance_1.setTransform(-114,173.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.g2bodmake_img();
	this.instance_2.setTransform(-179.5,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(-0.6,-61.9);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-261.2,-347.3,530,637.8);
p.frameBounds = [rect];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(58.6,-297.1,0.5,0.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// animation
	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-107.3,-302.1,0.5,0.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// animation
	this.instance_2 = new lib.hero2_hand5();
	this.instance_2.setTransform(-77.2,-16.8,1,1,128.3,0,0,29,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:28.9,rotation:87.6,y:-16.9},19).to({regX:29,rotation:128.3,y:-16.8},20).wait(1));

	// animation
	this.instance_3 = new lib.hero2_hand1();
	this.instance_3.setTransform(52.6,12.4,1,1,0,13,-167,29,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// animation
	this.instance_4 = new lib.hero2_face2();
	this.instance_4.setTransform(18.9,-178.1,0.5,0.5,1.8,0,0,4.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// animation
	this.instance_5 = new lib.head2();
	this.instance_5.setTransform(16.9,-145.2,0.5,0.5,1.8,0,0,343.3,317.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	// animation
	this.instance_6 = new lib.bottom7_img();
	this.instance_6.setTransform(-116.7,37.8,1,1,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

	// animation
	this.instance_7 = new lib.top5_img();
	this.instance_7.setTransform(-36.9,-127.1,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	// animation
	this.instance_8 = new lib.hero2_body_up_img();
	this.instance_8.setTransform(-44.2,-164.3,1,1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

	// animation
	this.instance_9 = new lib.hero2_plecho();
	this.instance_9.setTransform(63.3,-83.2,1,1,0,13,-167,4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	// animation
	this.instance_10 = new lib.hero2_body_bottom0();
	this.instance_10.setTransform(-20.6,44.6,1,1,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

	// animation
	this.instance_11 = new lib.hero2_plecho();
	this.instance_11.setTransform(-49.9,-104.2,1,1,13,0,0,4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40));

	// animation
	this.instance_12 = new lib.hero2_hip();
	this.instance_12.setTransform(-63.9,69.9,1,1,-5.5,0,0,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(40));

	// animation
	this.instance_13 = new lib.hero2_hip();
	this.instance_13.setTransform(24.7,61.5,1,1,0,-5.5,174.5,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40));

	// animation
	this.instance_14 = new lib.hero2_leg();
	this.instance_14.setTransform(-46.8,217,1,1,-5.5,0,0,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(40));

	// animation
	this.instance_15 = new lib.hero2_leg();
	this.instance_15.setTransform(37.8,208.9,1,1,0,-5.5,174.5,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40));

	// hair
	this.instance_16 = new lib.hero2_hair2_img();
	this.instance_16.setTransform(-74.5,-273.6,0.5,0.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-213.4,-302.1,364.5,599.6);
p.frameBounds = [rect, new cjs.Rectangle(-152.1,-302.1,303.1,599.6), new cjs.Rectangle(-156.6,-302.1,307.6,599.6), new cjs.Rectangle(-160.6,-302.1,311.6,599.6), new cjs.Rectangle(-164.8,-302.1,315.9,599.6), new cjs.Rectangle(-168.6,-302.1,319.7,599.6), new cjs.Rectangle(-172.6,-302.1,323.7,599.6), new cjs.Rectangle(-176.2,-302.1,327.2,599.6), new cjs.Rectangle(-179.8,-302.1,330.9,599.6), new cjs.Rectangle(-183.4,-302.1,334.5,599.6), new cjs.Rectangle(-186.5,-302.1,337.6,599.6), new cjs.Rectangle(-189.8,-302.1,340.8,599.6), new cjs.Rectangle(-192.6,-302.1,343.6,599.6), new cjs.Rectangle(-195.5,-302.1,346.6,599.6), new cjs.Rectangle(-198,-302.1,349.1,599.6), new cjs.Rectangle(-200.6,-302.1,351.7,599.6), new cjs.Rectangle(-203,-302.1,354.1,599.6), new cjs.Rectangle(-205.1,-302.1,356.1,599.6), new cjs.Rectangle(-206.9,-302.1,358,599.6), new cjs.Rectangle(-211,-302.1,362,599.6), new cjs.Rectangle(-207,-302.1,358,599.6), new cjs.Rectangle(-205.3,-302.1,356.3,599.6), new cjs.Rectangle(-203.3,-302.1,354.4,599.6), new cjs.Rectangle(-201.2,-302.1,352.2,599.6), new cjs.Rectangle(-198.8,-302.1,349.9,599.6), new cjs.Rectangle(-196.2,-302.1,347.3,599.6), new cjs.Rectangle(-193.6,-302.1,344.7,599.6), new cjs.Rectangle(-190.8,-302.1,341.9,599.6), new cjs.Rectangle(-188,-302.1,339,599.6), new cjs.Rectangle(-185,-302.1,336,599.6), new cjs.Rectangle(-181.8,-302.1,332.9,599.6), new cjs.Rectangle(-178.6,-302.1,329.6,599.6), new cjs.Rectangle(-174.9,-302.1,325.9,599.6), new cjs.Rectangle(-171.3,-302.1,322.3,599.6), new cjs.Rectangle(-167.7,-302.1,318.7,599.6), new cjs.Rectangle(-163.9,-302.1,314.9,599.6), new cjs.Rectangle(-160,-302.1,311.1,599.6), new cjs.Rectangle(-156,-302.1,307.1,599.6), new cjs.Rectangle(-152,-302.1,303,599.6), new cjs.Rectangle(-213.4,-302.1,364.5,599.6)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_accessory_all();
	this.accessory.setTransform(1,-193.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(44).to({rotation:1.8,x:20,y:-187.5},9).wait(35).to({rotation:0,x:1,y:-193.5},10).wait(5).to({y:-174.5},4).to({y:-193.5},4).to({y:-174.5},4).to({y:-193.5},4).wait(4).to({y:-174.5},3).to({y:-193.5},3).wait(4).to({x:-1,y:-191.5},15).to({x:1,y:-193.5},15).wait(117));

	// fringe
	this.fringe = new lib.hero1_fringe_all();
	this.fringe.setTransform(2.3,-213.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(44).to({rotation:1.8,x:23.3,y:-207.3},9).wait(35).to({rotation:0,x:2.3,y:-213.3},10).wait(5).to({y:-196.3},4).to({y:-213.3},4).to({y:-196.3},4).to({y:-213.3},4).wait(4).to({y:-196.3},3).to({y:-213.3},3).wait(4).to({x:-1.7,y:-211.3},15).to({x:2.3,y:-213.3},15).wait(117));

	// body
	this.instance = new lib.hero1_hand7();
	this.instance.setTransform(93.1,-5.7,1,1,0,174.9,-5.1,29,-49);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123).to({_off:false},0).to({regX:29.1,skewX:172.2,skewY:-7.8,x:65.7,y:7.5},3).to({regX:29,skewX:174.9,skewY:-5.1,x:93.1,y:-5.7},3).to({regX:28.9,regY:-49.1,skewX:106.7,skewY:-73.3},2).to({regY:-49,skewX:52.2,skewY:-127.8,y:-5.8},1).to({_off:true},1).wait(147));

	// body
	this.instance_1 = new lib.hero1_hand3();
	this.instance_1.setTransform(93,-5.7,1,1,0,105,-75,29,-49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({regX:29.1,regY:-49.1,skewX:165,skewY:-15,x:93.2,y:-5.6},3).to({_off:true},1).wait(157));

	// body
	this.instance_2 = new lib.hero1_hand1();
	this.instance_2.setTransform(69,-5.7,1,1,0,0,180,29,-49);

	this.instance_3 = new lib.hero1_hand3();
	this.instance_3.setTransform(93,-5.7,1,1,0,105,-75,29,-49);
	this.instance_3._off = true;

	this.instance_4 = new lib.hero1_hand4();
	this.instance_4.setTransform(69,-5.7,1,1,0,0,180,29,-49);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({skewX:13,skewY:193,x:52.6,y:12.4},9).wait(35).to({skewX:0,skewY:180,x:69,y:-5.7},10).to({_off:true,skewX:105,skewY:285,x:93},5).wait(30).to({_off:false,regY:-49.1,skewX:11.7,skewY:191.7,x:93.1,y:-5.8},0).to({skewX:11.7,y:-16.8},15).to({y:-5.8},15).to({_off:true,regY:-49,skewX:0,skewY:180,x:69,y:-5.7},15).wait(95).to({_off:false},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},5).to({x:70,y:14.3},4).to({x:93,y:-5.7},4).to({x:70,y:14.3},4).to({x:93,y:-5.7},4).to({_off:true},1).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(163).to({_off:false},15).to({skewX:75,skewY:255,x:44.6,y:-9.7},10).wait(85).to({_off:true,skewX:0,skewY:180,x:69,y:-5.7},6).wait(1));

	// body
	this.instance_5 = new lib.hero1_hand6();
	this.instance_5.setTransform(-89,-11.8,1,1,141.1,0,0,29.1,-49);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(133).to({_off:false},0).to({rotation:113.6,x:-78.9,y:-1.9},15).to({regY:-49.1,rotation:148.8,x:-87.5,y:-8.3},15).to({rotation:70.6,x:-76.9,y:-3.8},8).to({regX:29,rotation:9.5,x:-71.5,y:-2.4},6).to({_off:true},1).wait(102));

	// body
	this.instance_6 = new lib.hero1_hand5();
	this.instance_6.setTransform(-69,0.3,1,1,0,0,0,29,-49);

	this.instance_7 = new lib.hero1_hand3();
	this.instance_7.setTransform(-86.9,-7.7,1,1,-120.2,0,0,28.9,-49);
	this.instance_7._off = true;

	this.instance_8 = new lib.hero1_hand7();
	this.instance_8.setTransform(-87,-7.8,1,1,-177.7,0,0,29,-49);
	this.instance_8._off = true;

	this.instance_9 = new lib.hero1_hand1();
	this.instance_9.setTransform(-69,0.3,1,1,0,0,0,29,-49);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({regY:-49.1,rotation:128.3,x:-77.2,y:-16.8},9).to({x:-107.1,y:-45.8},10).to({regX:28.9,rotation:162},5).to({regX:29,rotation:128.3},5).to({regX:28.9,rotation:162},5).to({regX:29,rotation:128.3},5).to({regX:28.9,rotation:162},5).to({regX:29,regY:-49,rotation:0,x:-69,y:0.3},10).to({_off:true,regX:28.9,rotation:-120.2,x:-86.9,y:-7.7},5).wait(170).to({_off:false,regX:29,rotation:0,x:-69,y:0.3},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},5).to({x:-59.9,y:4.3},4).to({x:-86.9,y:-7.7},4).to({x:-59.9,y:4.3},4).to({x:-86.9,y:-7.7},4).to({_off:true,regX:29,rotation:-177.7,x:-87,y:-7.8},4).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},4).to({rotation:-173,x:-52,y:8.5},3).to({rotation:-177.7,x:-87,y:-7.8},3).to({regX:29.1,regY:-48.9,rotation:-210.1,x:-90.1,y:-7.7},3).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(178).to({_off:false},0).wait(95).to({_off:true},6).wait(1));

	// makeup
	this.makeup = new lib.hero1_face_all();
	this.makeup.setTransform(0.8,-183.8,0.5,0.5,0,0,0,4.2,2.7);

	this.timeline.addTween(cjs.Tween.get(this.makeup).wait(44).to({regY:2.6,rotation:1.8,x:18.8,y:-177.8},9).wait(35).to({regY:2.7,rotation:0,x:0.8,y:-183.8},10).wait(5).to({y:-166.8},4).to({y:-183.8},4).to({y:-166.8},4).to({y:-183.8},4).wait(4).to({y:-166.8},3).to({y:-183.8},3).wait(4).to({x:-1.2,y:-181.8},15).to({x:0.8,y:-183.8},15).wait(117));

	// body
	this.instance_10 = new lib.hero1_head1();
	this.instance_10.setTransform(-1.2,-151.3,0.5,0.5,0,0,0,343.2,317.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({regX:343.3,rotation:1.8,x:16.9,y:-145.2},9).wait(35).to({regX:343.2,rotation:0,x:-1.2,y:-151.3},10).wait(5).to({y:-133.3},4).to({y:-151.3},4).to({y:-133.3},4).to({y:-151.3},4).wait(4).to({y:-134.3},3).to({y:-151.3},3).wait(4).to({x:-3.2,y:-149.3},15).to({x:-1.2,y:-151.3},15).wait(117));

	// bottom
	this.bottom = new lib.hero1_body_bottom();
	this.bottom.setTransform(2.4,43.6);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(44).to({rotation:-5.5,x:-20.6,y:44.6},9).wait(35).to({rotation:0,x:2.4,y:43.6},10).wait(5).to({y:61.6},4).to({y:43.6},4).to({y:61.6},4).to({y:43.6},4).wait(4).to({y:61.6},3).to({y:43.6},3).wait(4).to({rotation:4.1,x:20.4,y:44.6},15).to({rotation:0,x:2.4,y:43.6},15).wait(117));

	// top
	this.top = new lib.hero1_body_up();
	this.top.setTransform(1.4,31.3,1,1,0,0,0,0,87);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(44).to({regX:-0.1,rotation:13,x:-21.7,y:33.3},9).wait(35).to({regX:0,rotation:0,x:1.4,y:31.3},10).wait(5).to({y:49.3},4).to({y:31.3},4).to({y:49.3},4).to({y:31.3},4).wait(4).to({y:49.3},3).to({y:31.3},3).wait(4).to({regX:-0.1,rotation:-6,x:20.3},15).to({regX:0,rotation:0,x:1.4},15).wait(117));

	// body
	this.instance_11 = new lib.hero1_plecho();
	this.instance_11.setTransform(58,-101.3,1,1,0,0,180,4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({skewX:13,skewY:193,x:63.3,y:-83.2},9).wait(35).to({skewX:0,skewY:180,x:58,y:-101.3},10).to({skewX:-15,skewY:165,x:58.1},5).to({regX:4.2,regY:-47.1,skewX:0,skewY:180,x:57.9,y:-83.4},4).to({regX:4,regY:-47,skewX:-15,skewY:165,x:58.1,y:-101.3},4).to({regX:4.2,regY:-47.1,skewX:0,skewY:180,x:57.9,y:-83.4},4).to({regX:4,regY:-47,skewX:-15,skewY:165,x:58.1,y:-101.3},4).wait(4).to({skewX:-2.1,skewY:177.9,x:58,y:-84.3},3).to({skewX:-15,skewY:165,x:58.1,y:-101.3},3).wait(4).to({x:59.1,y:-108.3},15).to({x:58.1,y:-101.3},15).to({skewX:0,skewY:180,x:58},15).to({skewX:13.5,skewY:193.5},10).wait(85).to({skewX:0,skewY:180},6).wait(1));

	// body
	this.instance_12 = new lib.hero1_body_bottom0();
	this.instance_12.setTransform(2.4,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({rotation:-5.5,x:-20.6,y:44.6},9).wait(35).to({rotation:0,x:2.4,y:43.6},10).wait(5).to({y:61.6},4).to({y:43.6},4).to({y:61.6},4).to({y:43.6},4).wait(4).to({y:61.6},3).to({y:43.6},3).wait(4).to({rotation:4.1,x:20.4,y:44.6},15).to({rotation:0,x:2.4,y:43.6},15).wait(117));

	// body
	this.instance_13 = new lib.hero1_plecho();
	this.instance_13.setTransform(-57,-96.3,1,1,0,0,0,4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({rotation:13,x:-49.9,y:-104.2},9).to({regY:-47.1,rotation:43,x:-43.8,y:-103.2},10).wait(25).to({regY:-47,rotation:0,x:-57,y:-96.3},10).to({rotation:15},5).to({scaleY:0.91,rotation:-1.2,x:-56.9,y:-78.4},4).to({scaleY:1,rotation:15,x:-57,y:-96.3},4).to({scaleY:0.91,rotation:-1.2,x:-56.9,y:-78.4},4).to({scaleY:1,rotation:15,x:-57,y:-96.3},4).wait(4).to({regX:4.1,rotation:-6.4,x:-53,y:-79.4},3).to({regX:4,rotation:15,x:-57,y:-96.3},3).wait(4).to({x:-45,y:-88.3},15).to({x:-57,y:-96.3},15).to({rotation:0},15).wait(102));

	// body
	this.instance_14 = new lib.hero1_hip();
	this.instance_14.setTransform(-42.6,64.6,1,1,0,0,0,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({rotation:-5.5,x:-63.9,y:69.9},9).wait(35).to({rotation:0,x:-42.6,y:64.6},10).wait(5).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).wait(4).to({scaleY:0.9,y:83.9},3).to({scaleY:1,y:64.6},3).wait(4).to({regX:0.1,rotation:4.2,x:-26.4,y:61.9},15).to({regX:0,rotation:0,x:-42.6,y:64.6},15).wait(117));

	// body
	this.instance_15 = new lib.hero1_hip();
	this.instance_15.setTransform(46.4,64.6,1,1,0,0,180,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(44).to({skewX:-5.5,skewY:174.5,x:24.7,y:61.5},9).wait(35).to({skewX:0,skewY:180,x:46.4,y:64.6},10).wait(5).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).to({scaleY:0.88,y:86.6},4).to({scaleY:1,y:64.6},4).wait(4).to({scaleY:0.9,y:83.9},3).to({scaleY:1,y:64.6},3).wait(4).to({regX:-0.1,skewX:4.2,skewY:184.2,x:62.4,y:68.4},15).to({regX:0,skewX:0,skewY:180,x:46.4,y:64.6},15).wait(117));

	// body
	this.instance_16 = new lib.hero1_leg();
	this.instance_16.setTransform(-39.6,212.6,1,1,0,0,0,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(44).to({rotation:-5.5,x:-46.8,y:217},9).wait(35).to({rotation:0,x:-39.6,y:212.6},10).wait(5).to({y:228.6},4).to({y:212.6},4).to({y:228.6},4).to({y:212.6},4).wait(4).to({y:219.6},3).to({y:212.6},3).wait(4).to({regX:-0.1,rotation:4.2,x:-34.4,y:209.7},15).to({regX:0,rotation:0,x:-39.6,y:212.6},15).wait(117));

	// body
	this.instance_17 = new lib.hero1_leg();
	this.instance_17.setTransform(45.4,212.6,1,1,0,0,180,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(44).to({skewX:-5.5,skewY:174.5,x:37.8,y:208.9},9).wait(35).to({skewX:0,skewY:180,x:45.4,y:212.6},10).wait(5).to({y:228.6},4).to({y:212.6},4).to({y:228.6},4).to({y:212.6},4).wait(4).to({y:219.6},3).to({y:212.6},3).wait(4).to({skewX:4.2,skewY:184.2,x:50.4,y:215.9},15).to({skewX:0,skewY:180,x:45.4,y:212.6},15).wait(117));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(3.6,-140.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(44).to({rotation:0.3,x:24.6,y:-134.5},9).wait(35).to({rotation:0,x:3.6,y:-140.5},10).wait(5).to({y:-123.5},4).to({y:-140.5},4).to({y:-123.5},4).to({y:-140.5},4).wait(4).to({y:-123.5},3).to({y:-140.5},3).wait(4).to({x:-0.4,y:-138.5},15).to({x:3.6,y:-140.5},15).wait(117));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.2,-304.7,324.8,595.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-185.1,-304.1,341.1,595.5), new cjs.Rectangle(-192,-303.4,350.4,595.6), new cjs.Rectangle(-196.5,-302.8,357.3,595.7), new cjs.Rectangle(-208.5,-302.2,371.6,595.8), new cjs.Rectangle(-212.3,-301.5,377.7,596), new cjs.Rectangle(-207.4,-300.8,375.1,596.1), new cjs.Rectangle(-194.3,-300.2,364.5,596.2), new cjs.Rectangle(-173.9,-299.5,346.3,596.2), new cjs.Rectangle(-213.4,-299.4,388.8,596.8), new cjs.Rectangle(-150.5,-299.4,325.9,596.7), new cjs.Rectangle(-153.5,-299.4,328.9,596.7), new cjs.Rectangle(-156.5,-299.4,331.9,596.7), new cjs.Rectangle(-159.5,-299.4,334.9,596.7), new cjs.Rectangle(-162.4,-299.4,337.8,596.7), new cjs.Rectangle(-165.4,-299.4,340.8,596.7), new cjs.Rectangle(-168.4,-299.4,343.8,596.7), new cjs.Rectangle(-171.4,-299.4,346.8,596.7), new cjs.Rectangle(-174.4,-299.4,349.8,596.7), new cjs.Rectangle(-243.4,-299.4,418.8,596.8), new cjs.Rectangle(-176.9,-299.4,352.3,596.7), new cjs.Rectangle(-177.4,-299.4,352.8,596.7), new cjs.Rectangle(-177,-299.4,352.4,596.7), new cjs.Rectangle(-175.7,-299.4,351,596.7), new cjs.Rectangle(-200.2,-299.4,375.5,596.8), new cjs.Rectangle(-175.7,-299.4,351,596.7), new cjs.Rectangle(-177.1,-299.4,352.5,596.7), new cjs.Rectangle(-177.5,-299.4,352.9,596.7), new cjs.Rectangle(-176.9,-299.4,352.3,596.7), new cjs.Rectangle(-243.4,-299.4,418.8,596.8), new cjs.Rectangle(-176.9,-299.4,352.3,596.7), new cjs.Rectangle(-177.4,-299.4,352.8,596.7), new cjs.Rectangle(-177,-299.4,352.4,596.7), new cjs.Rectangle(-175.7,-299.4,351,596.7), new cjs.Rectangle(-200.2,-299.4,375.5,596.8), new cjs.Rectangle(-175.7,-299.4,351,596.7), new cjs.Rectangle(-177.1,-299.4,352.5,596.7), new cjs.Rectangle(-177.5,-299.4,352.9,596.7), new cjs.Rectangle(-176.9,-299.4,352.3,596.7), new cjs.Rectangle(-243.4,-299.4,418.8,596.8), new cjs.Rectangle(-176.9,-299.4,352.3,596.7), new cjs.Rectangle(-177.4,-299.4,352.8,596.7), new cjs.Rectangle(-177,-299.4,352.4,596.7), new cjs.Rectangle(-175.7,-299.4,351,596.7), new cjs.Rectangle(-200.2,-299.4,375.5,596.8), new cjs.Rectangle(-173.5,-299.4,346.2,596.1), new cjs.Rectangle(-168.1,-300,338.7,596.1), new cjs.Rectangle(-194.6,-300.6,363,596.1), new cjs.Rectangle(-214.2,-301.2,380.5,596.1), new cjs.Rectangle(-223.6,-301.8,387.9,595.9), new cjs.Rectangle(-222.7,-302.4,384.8,595.8), new cjs.Rectangle(-210.6,-303,370.7,595.6), new cjs.Rectangle(-198,-303.6,355.9,595.6), new cjs.Rectangle(-189.1,-304.2,344.9,595.5), new cjs.Rectangle(-171.2,-304.7,324.8,595.4), rect=new cjs.Rectangle(-146.4,-304.7,300,595.4), rect, rect, rect, rect, new cjs.Rectangle(-146.4,-300.5,300,595.1), new cjs.Rectangle(-146.4,-296.2,300,594.9), new cjs.Rectangle(-146.4,-292,300,594.6), new cjs.Rectangle(-146.4,-287.7,300,594.4), new cjs.Rectangle(-146.4,-292,300,594.6), new cjs.Rectangle(-146.4,-296.2,300,594.9), new cjs.Rectangle(-146.4,-300.5,300,595.1), new cjs.Rectangle(-146.4,-304.7,300,595.4), new cjs.Rectangle(-146.4,-300.5,300,595.1), new cjs.Rectangle(-146.4,-296.2,300,594.9), new cjs.Rectangle(-146.4,-292,300,594.6), new cjs.Rectangle(-146.4,-287.7,300,594.4), new cjs.Rectangle(-146.4,-292,300,594.6), new cjs.Rectangle(-146.4,-296.2,300,594.9), new cjs.Rectangle(-146.4,-300.5,300,595.1), rect=new cjs.Rectangle(-146.4,-304.7,300,595.4), rect, rect, rect, rect, new cjs.Rectangle(-146.4,-299.1,300,592.1), new cjs.Rectangle(-146.4,-293.4,300,588.7), new cjs.Rectangle(-146.4,-287.7,300,585.4), new cjs.Rectangle(-146.4,-293.4,300,588.7), new cjs.Rectangle(-146.4,-299.1,300,592.1), rect=new cjs.Rectangle(-146.4,-304.7,300,595.4), rect, rect, new cjs.Rectangle(-181.7,-304.7,335.3,595.4), new cjs.Rectangle(-217.1,-304.7,388.1,595.4), new cjs.Rectangle(-148.9,-304.6,319.7,595.5), new cjs.Rectangle(-147.8,-304.5,318.7,595.8), new cjs.Rectangle(-147.2,-304.3,318.1,596), new cjs.Rectangle(-149.4,-304.2,320.3,596.2), new cjs.Rectangle(-153.4,-304.1,324.2,596.4), new cjs.Rectangle(-156.8,-303.9,327.6,596.6), new cjs.Rectangle(-160.2,-303.8,331,596.9), new cjs.Rectangle(-163.8,-303.7,334.7,597), new cjs.Rectangle(-167,-303.5,337.9,597.4), new cjs.Rectangle(-170.1,-303.4,341,597.5), new cjs.Rectangle(-173.6,-303.3,344.5,597.7), new cjs.Rectangle(-176.5,-303.1,347.3,598), new cjs.Rectangle(-179.4,-303,350.2,598.1), new cjs.Rectangle(-182.5,-302.9,353.3,598.3), new cjs.Rectangle(-227.7,-302.7,398.7,598.6), new cjs.Rectangle(-181.4,-302.9,352.3,598.3), new cjs.Rectangle(-177.1,-303,348,598.1), new cjs.Rectangle(-173.1,-303.1,344,598), new cjs.Rectangle(-168.5,-303.3,339.4,597.7), new cjs.Rectangle(-164.2,-303.4,335,597.5), new cjs.Rectangle(-159.7,-303.5,330.6,597.3), new cjs.Rectangle(-154.7,-303.7,325.6,597), new cjs.Rectangle(-150.1,-303.8,321,596.8), new cjs.Rectangle(-148,-303.9,318.9,596.6), new cjs.Rectangle(-147.8,-304.1,318.7,596.4), new cjs.Rectangle(-147.5,-304.2,318.4,596.2), new cjs.Rectangle(-147.2,-304.3,318.1,596), new cjs.Rectangle(-147.4,-304.5,318.3,595.8), new cjs.Rectangle(-148.1,-304.6,319,595.5), new cjs.Rectangle(-204.3,-304.7,375.3,595.4), new cjs.Rectangle(-146.7,-304.7,315.9,595.4), new cjs.Rectangle(-158.4,-304.7,326,595.4), new cjs.Rectangle(-178.6,-304.7,344.5,595.4), new cjs.Rectangle(-195.5,-304.7,359.8,595.4), new cjs.Rectangle(-209.2,-304.7,371.8,595.4), new cjs.Rectangle(-219.2,-304.7,380,595.4), new cjs.Rectangle(-224.9,-304.7,384,595.4), new cjs.Rectangle(-243.9,-304.7,401.3,595.4), new cjs.Rectangle(-224.1,-304.7,379.8,595.4), new cjs.Rectangle(-216.9,-304.7,370.8,595.4), new cjs.Rectangle(-212,-304.7,365.6,595.4), new cjs.Rectangle(-209.1,-304.7,362.7,595.4), new cjs.Rectangle(-201.8,-304.7,355.4,595.4), new cjs.Rectangle(-199.1,-304.7,352.7,595.4), rect=new cjs.Rectangle(-146.4,-304.7,300,595.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-171.2,-304.7,324.8,595.4)];


(lib.hero_1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_accessory_all();
	this.accessory.setTransform(-31,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all();
	this.fringe.setTransform(-32.9,-128.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// makeup
	this.makeup = new lib.hero1_face_all();
	this.makeup.setTransform(-31.7,-68.7,1,1,0,0,0,4.2,2.8);

	this.timeline.addTween(cjs.Tween.get(this.makeup).wait(1));

	// body
	this.instance = new lib.hero1_head1();
	this.instance.setTransform(-36.6,-129.7,1,1,0,0,0,340.1,191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero_bigtop_img();
	this.instance_1.setTransform(-164,167.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.g1head_img();
	this.instance_2.setTransform(-224,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(-30.4,17.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330.4,-311,600,657);
p.frameBounds = [rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_accessory1();
	this.instance.setTransform(-61.5,-208.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// animation
	this.instance_1 = new lib.hero1_fringe1_img();
	this.instance_1.setTransform(-82.2,-292.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	// animation
	this.instance_2 = new lib.hero1_hand7();
	this.instance_2.setTransform(67.1,-1.3,1,1,0,170.7,-9.3,29,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.1,skewX:191.4,skewY:11.4,x:67.2},12).to({regX:29,skewX:170.7,skewY:-9.3,x:67.1},12).wait(1));

	// animation
	this.instance_3 = new lib.hero1_hand7();
	this.instance_3.setTransform(-52,0.5,1,1,-173,0,0,29,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-194.7},12).to({rotation:-173},12).wait(1));

	// animation
	this.instance_4 = new lib.hero1_face1();
	this.instance_4.setTransform(0.8,-174.7,0.5,0.5,0,0,0,4.2,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.hero1_head1();
	this.instance_5.setTransform(-1.2,-142.3,0.5,0.5,0,0,0,343.2,317.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.bottom1_img();
	this.instance_6.setTransform(-115.6,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.top1_img();
	this.instance_7.setTransform(-53.6,-74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// animation
	this.instance_8 = new lib.hero1_body_up_img();
	this.instance_8.setTransform(-65.1,-146.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

	// animation
	this.instance_9 = new lib.hero1_plecho();
	this.instance_9.setTransform(58,-92.3,1,1,0,-2.1,177.9,4,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25));

	// animation
	this.instance_10 = new lib.hero1_body_bottom0();
	this.instance_10.setTransform(2.4,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25));

	// animation
	this.instance_11 = new lib.hero1_plecho();
	this.instance_11.setTransform(-53,-87.4,1,1,-6.4,0,0,4.1,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));

	// animation
	this.instance_12 = new lib.hero1_hip();
	this.instance_12.setTransform(-42.6,75.9,1,0.896,0,0,0,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25));

	// animation
	this.instance_13 = new lib.hero1_hip();
	this.instance_13.setTransform(46.4,75.9,1,0.896,0,0,180,0,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25));

	// animation
	this.instance_14 = new lib.hero1_leg();
	this.instance_14.setTransform(-39.6,211.6,1,1,0,0,0,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25));

	// animation
	this.instance_15 = new lib.hero1_leg();
	this.instance_15.setTransform(45.4,211.6,1,1,0,0,180,0,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(25));

	// animation
	this.instance_16 = new lib.hero1_hair1_img();
	this.instance_16.setTransform(-146.4,-295.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.4,-295.7,300,585.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.empty_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.instance = new lib.check_0_2_mc();
	this.instance.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
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


(lib.check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.check_1_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	// animation
	this.instance_1 = new lib.check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_9_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.check_8_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.check_7_img();
	this.instance_3.setTransform(-60,-60);

	this.instance_4 = new lib.check_6_img();
	this.instance_4.setTransform(-60,-60);

	this.instance_5 = new lib.check_5_img();
	this.instance_5.setTransform(-60,-60);

	this.instance_6 = new lib.check_4_img();
	this.instance_6.setTransform(-60,-60);

	this.instance_7 = new lib.check_3_img();
	this.instance_7.setTransform(-60,-60);

	this.instance_8 = new lib.check_2_img();
	this.instance_8.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.012}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_0_2_mc();

	this.instance_1 = new lib.check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect, rect];


(lib.bottom_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_9_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_8_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_7_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_6_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_5_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_4_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_3_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_2_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.bottom_1_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
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


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg_title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99));

	// animation
	this.instance_1 = new lib.beam_title_mc();
	this.instance_1.setTransform(-85,60.9,1,1,144,0,0,0,0.1);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(55));

	// animation
	this.instance_2 = new lib.beam_title_mc();
	this.instance_2.setTransform(-134.9,65.9,1,1,155.5,0,0,-0.1,0.1);
	this.instance_2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(50));

	// animation
	this.instance_3 = new lib.beam_title_mc();
	this.instance_3.setTransform(-85,-50,1,1,-126);
	this.instance_3.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(45));

	// animation
	this.instance_4 = new lib.beam_title_mc();
	this.instance_4.setTransform(-118,-35.1,1,1,-176.3,0,0,0,0.1);
	this.instance_4.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(40));

	// animation
	this.instance_5 = new lib.beam_title_mc();
	this.instance_5.setTransform(-146,-64,1,1,-156);
	this.instance_5.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(35));

	// animation
	this.instance_6 = new lib.beam_title_mc();
	this.instance_6.setTransform(90,57,1,1,30);
	this.instance_6.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(30));

	// animation
	this.instance_7 = new lib.beam_title_mc();
	this.instance_7.setTransform(85,30,1,1,15);
	this.instance_7.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(25));

	// animation
	this.instance_8 = new lib.beam_title_mc();
	this.instance_8.setTransform(129,-68,1,1,-9.2);
	this.instance_8.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(20));

	// animation
	this.instance_9 = new lib.beam_title_mc();
	this.instance_9.setTransform(162,-107,1,1,-25.4);
	this.instance_9.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(15));

	// animation
	this.instance_10 = new lib.beam_title_mc();
	this.instance_10.setTransform(-150,-5,1,1,0,0,180);
	this.instance_10.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(84).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(10));

	// animation
	this.instance_11 = new lib.beam_title_mc();
	this.instance_11.setTransform(155,-37);
	this.instance_11.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({alpha:1},0).wait(5).to({alpha:0.602},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-297,-182.4,601.7,337.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_tiktok_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_tictok_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({y:-9.5},10).to({y:0.5},10).to({y:-4.5},5).to({y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-140,420,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-141,420,280), new cjs.Rectangle(-210,-142,420,280), new cjs.Rectangle(-210,-143,420,280), new cjs.Rectangle(-210,-144,420,280), new cjs.Rectangle(-210,-145,420,280), new cjs.Rectangle(-210,-146,420,280), new cjs.Rectangle(-210,-147,420,280), new cjs.Rectangle(-210,-148,420,280), new cjs.Rectangle(-210,-149,420,280), new cjs.Rectangle(-210,-150,420,280), new cjs.Rectangle(-210,-149,420,280), new cjs.Rectangle(-210,-148,420,280), new cjs.Rectangle(-210,-147,420,280), new cjs.Rectangle(-210,-146,420,280), new cjs.Rectangle(-210,-145,420,280), new cjs.Rectangle(-210,-144,420,280), new cjs.Rectangle(-210,-143,420,280), new cjs.Rectangle(-210,-142,420,280), new cjs.Rectangle(-210,-141,420,280), new cjs.Rectangle(-210,-140,420,280), new cjs.Rectangle(-210,-141,420,280), new cjs.Rectangle(-210,-142,420,280), new cjs.Rectangle(-210,-143,420,280), new cjs.Rectangle(-210,-144,420,280), new cjs.Rectangle(-210,-145,420,280), new cjs.Rectangle(-210,-144,420,280), new cjs.Rectangle(-210,-143,420,280), new cjs.Rectangle(-210,-142,420,280), new cjs.Rectangle(-210,-141,420,280), new cjs.Rectangle(-210,-140,420,280)];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:0.602},10).to({alpha:1},10).to({alpha:0.602},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-140,420,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_select_hero_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// animation
	this.instance = new lib.arrow_choose_hero_1_mc();
	this.instance.setTransform(125,-95);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({alpha:1},5).wait(25).to({alpha:0.012},10).to({_off:true},1).wait(8).to({_off:false,skewY:180,x:5},0).to({alpha:1},5).wait(25).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.select_hero_title_mc();
	this.instance_1.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({y:150.5},0).to({y:-39.5,alpha:1},11).to({y:0.5},4).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-45,390,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-195,105,390,90), new cjs.Rectangle(-195,87.8,390,90), new cjs.Rectangle(-195,70.5,390,90), new cjs.Rectangle(-195,53.2,390,90), new cjs.Rectangle(-195,35.9,390,90), new cjs.Rectangle(-195,18.7,390,90), new cjs.Rectangle(-195,1.4,390,90), new cjs.Rectangle(-195,-15.9,390,90), new cjs.Rectangle(-195,-33.2,390,90), new cjs.Rectangle(-195,-50.4,390,90), new cjs.Rectangle(-195,-67.7,390,90), new cjs.Rectangle(-195,-85,390,90), new cjs.Rectangle(-195,-75,390,90), new cjs.Rectangle(-195,-65,390,90), new cjs.Rectangle(-195,-55,390,90), rect=new cjs.Rectangle(-195,-45,390,90), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-195,-165,390,210), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-195,-45,390,90), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-195,-165,390,210), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-195,-45,390,90)];


(lib.animation_question_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.question_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.95},10).to({scaleX:1,scaleY:0.95},10).to({scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-190,200,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-99.4,-190,199,380), new cjs.Rectangle(-99,-190,198,380), new cjs.Rectangle(-98.5,-190,197,380), new cjs.Rectangle(-97.9,-190,196,380), new cjs.Rectangle(-97.5,-190,195,380), new cjs.Rectangle(-97,-190,194,380), new cjs.Rectangle(-96.4,-190,193,380), new cjs.Rectangle(-95.9,-190,192,380), new cjs.Rectangle(-95.5,-190,191,380), new cjs.Rectangle(-95,-190,190,380), new cjs.Rectangle(-95.4,-188.9,191,378), new cjs.Rectangle(-95.9,-187.9,192,376), new cjs.Rectangle(-96.4,-186.9,193,374), new cjs.Rectangle(-96.9,-185.9,194,372), new cjs.Rectangle(-97.4,-185,195,370), new cjs.Rectangle(-97.9,-184,196,368), new cjs.Rectangle(-98.4,-183,197,366), new cjs.Rectangle(-98.9,-182,198,364), new cjs.Rectangle(-99.4,-181,199,362), new cjs.Rectangle(-100,-180,200,360), new cjs.Rectangle(-100,-180.9,200,362), new cjs.Rectangle(-100,-181.9,200,364), new cjs.Rectangle(-100,-182.9,200,366), new cjs.Rectangle(-100,-183.9,200,368), new cjs.Rectangle(-100,-184.9,200,370), new cjs.Rectangle(-100,-185.9,200,372), new cjs.Rectangle(-100,-186.9,200,374), new cjs.Rectangle(-100,-187.9,200,376), new cjs.Rectangle(-100,-188.9,200,378), new cjs.Rectangle(-100,-190,200,380)];


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


(lib.accessory_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory9();
	this.instance.setTransform(-55,-57,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory8();
	this.instance.setTransform(-75,-18,0.568,0.568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory7();
	this.instance.setTransform(-70,-42,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory6_2_img();
	this.instance.setTransform(-56,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(-75,-32,0.987,0.987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory4();
	this.instance.setTransform(-66,61.5,0.66,0.66,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory3();
	this.instance.setTransform(-75,-25,0.528,0.528);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory2();
	this.instance.setTransform(-75,-29,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hero1_accessory1();
	this.instance.setTransform(-75,-31,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.back_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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
		_createSnowflakesFunc(20);
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
	this.instance.setTransform(600,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,682);
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
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.801},15).wait(1));

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


(lib.remove_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.remove_2_2_mc();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ah+B+Qg1g0AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A0Qg1A1hKABQhJgBg1g1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, null];


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


(lib.top_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_9_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_8_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_7_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_6_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_5_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_4_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_3_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_2_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();
	this.check_mc.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.top_1_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.top_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.substrate_mc = new lib.remove_1_2_mc();
	this.substrate_mc.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
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
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-190.5,352.4,381);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-190.5,352.4,381);
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


(lib.pair_dance_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(318,335);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(177).to({x:328},11).wait(85).to({x:318},6).wait(1));

	// animation
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(512,335);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(177).to({x:502},11).wait(85).to({x:512},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(146.8,7.1,518.8,618.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(147.7,7.1,517,618.5), new cjs.Rectangle(148.6,7.1,515.2,618.5), new cjs.Rectangle(149.5,7.1,513.3,618.5), new cjs.Rectangle(150.4,7.1,511.5,618.5), new cjs.Rectangle(151.3,7.1,509.7,618.5), new cjs.Rectangle(152.2,7.1,507.9,618.5), new cjs.Rectangle(153.1,7.1,506.1,618.5), new cjs.Rectangle(154,7.1,504.3,618.5), new cjs.Rectangle(155,7.1,502.4,618.5), new cjs.Rectangle(155.9,7.1,500.6,618.5), rect=new cjs.Rectangle(156.8,7.1,498.8,618.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(155.1,7.1,502.1,618.5), new cjs.Rectangle(153.4,7.1,505.5,618.5), new cjs.Rectangle(151.8,7.1,508.8,618.5), new cjs.Rectangle(150.1,7.1,512.1,618.5), new cjs.Rectangle(148.4,7.1,515.5,618.5), new cjs.Rectangle(146.8,7.1,518.8,618.5)];


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


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292.4,-190.5,352.4,381);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292.4,-190.5,352.4,381);
p.frameBounds = [rect];


(lib.makeup_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.makeup_6_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.makeup_6_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.makeup_5_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.makeup_5_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.makeup_4_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.makeup_4_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.makeup_3_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.makeup_3_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.makeup_2_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.makeup_2_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.makeup_1_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.makeup_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.makeup_1_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_question_location_mc();

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(60,135,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_img();
	this.instance_2.setTransform(-100,-190);

	this.instance_3 = new lib.location_1_5_img();
	this.instance_3.setTransform(-100,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-190,207,385);
p.frameBounds = [rect, rect, new cjs.Rectangle(-100,-190,210,385)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_question_location_mc();

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(60,135,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_img();
	this.instance_2.setTransform(-100,-190);

	this.instance_3 = new lib.location_1_4_img();
	this.instance_3.setTransform(-100,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-190,207,385);
p.frameBounds = [rect, rect, new cjs.Rectangle(-100,-190,210,385)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_question_location_mc();

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(60,135,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_img();
	this.instance_2.setTransform(-100,-190);

	this.instance_3 = new lib.location_1_3_img();
	this.instance_3.setTransform(-100,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-190,207,385);
p.frameBounds = [rect, rect, new cjs.Rectangle(-100,-190,210,385)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_question_location_mc();

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(60,135,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_img();
	this.instance_2.setTransform(-100,-190);

	this.instance_3 = new lib.location_1_2_img();
	this.instance_3.setTransform(-100,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-190,207,385);
p.frameBounds = [rect, rect, new cjs.Rectangle(-100,-190,210,385)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_question_location_mc();

	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(60,135,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_img();
	this.instance_2.setTransform(-100,-190);

	this.instance_3 = new lib.location_1_1_img();
	this.instance_3.setTransform(-100,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-190,207,385);
p.frameBounds = [rect, rect, new cjs.Rectangle(-100,-190,210,385)];


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

	// frame
	this.instance = new lib.frame_pic_1_img();

	this.instance_1 = new lib.frame_pic_2_img();

	this.instance_2 = new lib.frame_pic_3_img();

	this.instance_3 = new lib.frame_pic_4_img();

	this.instance_4 = new lib.frame_pic_5_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(6));

	// heroes
	this.container_1_mc = new lib.pair_dance_mc();
	this.container_1_mc.setTransform(326.8,312.8,1,1,0,0,0,326.8,312.8);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(400,330);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(400,330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.container_1_mc}]}).to({state:[{t:this.hero_1}]},18).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).wait(1));

	// bg
	this.instance_5 = new lib.background_1_img();
	this.instance_5.setTransform(-200,0);

	this.instance_6 = new lib.background_2_img();
	this.instance_6.setTransform(-200,0);

	this.instance_7 = new lib.background_3_img();
	this.instance_7.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,625.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-200,0,1200,620.6), rect, rect, rect, rect, rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.hero_2_main_mc();
	this.instance.setTransform(275,325);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({x:-50},0).to({x:285,alpha:1},12).to({x:275},3).wait(1));

	// animation
	this.instance_1 = new lib.hero_1_main_mc();
	this.instance_1.setTransform(515,325);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({x:845},0).to({x:505,alpha:1},12).to({x:515},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(61.6,22.9,607,599.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-263.4,22.9,1262,599.6), new cjs.Rectangle(-169.7,22.9,1140,599.6), new cjs.Rectangle(-141.8,22.9,1083.7,599.6), new cjs.Rectangle(-113.9,22.9,1027.5,599.6), new cjs.Rectangle(-86,22.9,971.2,599.6), new cjs.Rectangle(-58,22.9,915,599.6), new cjs.Rectangle(-30.1,22.9,858.7,599.6), new cjs.Rectangle(-2.2,22.9,802.5,599.6), new cjs.Rectangle(25.7,22.9,746.3,599.6), new cjs.Rectangle(53.6,22.9,690,599.6), new cjs.Rectangle(81.5,22.9,633.8,599.6), new cjs.Rectangle(109.4,22.9,577.5,599.6), new cjs.Rectangle(71.6,22.9,587,599.6), new cjs.Rectangle(134,22.9,528,599.6), new cjs.Rectangle(130.7,22.9,534.6,599.6), new cjs.Rectangle(61.6,22.9,607,599.6)];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.container_animation_select_hero_title_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.animation_select_hero_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-45,390,90);
p.frameBounds = [rect];


(lib.bottom_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.substrate_mc = new lib.remove_1_2_mc();
	this.substrate_mc.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.body_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-220,20);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(19).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({regX:-0.1,regY:-0.1,scaleX:0.97,scaleY:0.97,y:79.9},14).to({regX:0,regY:0,scaleX:1,scaleY:1,y:20},6).wait(21));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,-20);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(39).to({y:-550,alpha:1},0).to({y:60},14).to({y:-20},6).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(220,20);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({regX:0.1,regY:-0.1,scaleX:0.97,scaleY:0.97,x:220.1,y:79.9},14).to({regX:0,regY:0,scaleX:1,scaleY:1,x:220,y:20},6).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-210,647,425);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-310,-671,637,886), new cjs.Rectangle(-310.5,-630.5,637.5,845.6), new cjs.Rectangle(-311,-590.1,638,805.1), new cjs.Rectangle(-311.5,-549.7,638.6,764.7), new cjs.Rectangle(-312,-509.2,639.1,724.3), new cjs.Rectangle(-312.5,-468.8,639.6,683.8), new cjs.Rectangle(-313.1,-428.4,640.1,643.4), new cjs.Rectangle(-313.6,-387.9,640.7,603), new cjs.Rectangle(-314.1,-347.5,641.2,562.6), new cjs.Rectangle(-314.7,-307.1,641.7,522.1), new cjs.Rectangle(-315.2,-671,631.5,846), new cjs.Rectangle(-315.7,-630.5,632.6,805.6), new cjs.Rectangle(-316.2,-590.1,633.7,775), new cjs.Rectangle(-316.8,-549.7,634.8,777), new cjs.Rectangle(-317.3,-509.2,635.9,779.1), new cjs.Rectangle(-317.7,-468.8,636.8,729.5), new cjs.Rectangle(-318.1,-428.4,637.8,680), new cjs.Rectangle(-318.5,-387.9,638.8,630.4), new cjs.Rectangle(-319,-347.5,639.8,580.9), new cjs.Rectangle(-319.4,-307.1,640.8,531.4), new cjs.Rectangle(-320,-740,641.9,955), new cjs.Rectangle(-320,-696.4,642.4,911.5), new cjs.Rectangle(-320,-652.8,643,867.9), new cjs.Rectangle(-320,-609.3,643.6,836.6), new cjs.Rectangle(-320,-565.7,644.1,835.5), new cjs.Rectangle(-320,-522.1,644.6,782.8), new cjs.Rectangle(-320,-478.5,645.1,730.2), new cjs.Rectangle(-320,-435,645.5,677.5), new cjs.Rectangle(-320,-391.4,645.9,624.8), new cjs.Rectangle(-320,-347.8,646.4,572.1), new cjs.Rectangle(-320,-304.3,647,519.3), new cjs.Rectangle(-320,-260.7,647,475.7), new cjs.Rectangle(-320,-217.1,647,432.2), new cjs.Rectangle(-320,-173.5,647,388.6), new cjs.Rectangle(-320,-170,647,425), new cjs.Rectangle(-320,-170,647,411.7), new cjs.Rectangle(-320,-170,647,398.4), new cjs.Rectangle(-320,-170,647,385), new cjs.Rectangle(-320,-183.3,647,398.4), new cjs.Rectangle(-320,-196.6,647,411.7), new cjs.Rectangle(-320,-210,647,425)];


(lib.body_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-296,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-98,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(21));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(98,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(296,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-396,-190,799,385);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-386,-671,789,866), new cjs.Rectangle(-386.6,-630.9,789.7,825.9), new cjs.Rectangle(-387.3,-590.8,790.4,785.9), new cjs.Rectangle(-388,-550.7,791.1,745.8), new cjs.Rectangle(-388.8,-510.6,791.8,705.7), new cjs.Rectangle(-389.5,-470.6,792.5,665.6), new cjs.Rectangle(-390.2,-430.5,793.2,625.5), new cjs.Rectangle(-390.9,-390.4,793.9,585.4), new cjs.Rectangle(-391.6,-350.4,794.6,545.4), new cjs.Rectangle(-392.3,-310.3,795.4,505.3), new cjs.Rectangle(-393,-671,796.1,866), new cjs.Rectangle(-393.7,-630.9,796.8,825.9), new cjs.Rectangle(-394.4,-590.8,797.5,785.9), new cjs.Rectangle(-395.1,-550.7,798.2,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,799,866), new cjs.Rectangle(-396,-630.9,799,825.9), new cjs.Rectangle(-396,-590.8,799,785.9), new cjs.Rectangle(-396,-550.7,799,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,788.3,866), new cjs.Rectangle(-396,-630.9,789,825.9), new cjs.Rectangle(-396,-590.8,789.8,785.9), new cjs.Rectangle(-396,-550.7,790.6,783), new cjs.Rectangle(-396,-510.6,791.3,785.7), new cjs.Rectangle(-396,-470.6,792.1,732.3), new cjs.Rectangle(-396,-430.5,792.8,678.9), new cjs.Rectangle(-396,-390.4,793.6,625.4), new cjs.Rectangle(-396,-350.4,794.3,572.1), new cjs.Rectangle(-396,-310.3,795.1,518.7), new cjs.Rectangle(-396,-270.2,795.9,465.3), new cjs.Rectangle(-396,-230.1,796.6,425.2), new cjs.Rectangle(-396,-190,797.4,385.1), new cjs.Rectangle(-396,-190,798.1,422.2), new cjs.Rectangle(-396,-190,799,465), new cjs.Rectangle(-396,-190,799,451.7), new cjs.Rectangle(-396,-190,799,438.4), new cjs.Rectangle(-396,-190,799,425), new cjs.Rectangle(-396,-190,799,411.7), new cjs.Rectangle(-396,-190,799,398.4), new cjs.Rectangle(-396,-190,799,385)];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-296,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-98,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(21));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(98,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(296,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-396,-190,799,385);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-386,-671,789,866), new cjs.Rectangle(-386.6,-630.9,789.7,825.9), new cjs.Rectangle(-387.3,-590.8,790.4,785.9), new cjs.Rectangle(-388,-550.7,791.1,745.8), new cjs.Rectangle(-388.8,-510.6,791.8,705.7), new cjs.Rectangle(-389.5,-470.6,792.5,665.6), new cjs.Rectangle(-390.2,-430.5,793.2,625.5), new cjs.Rectangle(-390.9,-390.4,793.9,585.4), new cjs.Rectangle(-391.6,-350.4,794.6,545.4), new cjs.Rectangle(-392.3,-310.3,795.4,505.3), new cjs.Rectangle(-393,-671,796.1,866), new cjs.Rectangle(-393.7,-630.9,796.8,825.9), new cjs.Rectangle(-394.4,-590.8,797.5,785.9), new cjs.Rectangle(-395.1,-550.7,798.2,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,799,866), new cjs.Rectangle(-396,-630.9,799,825.9), new cjs.Rectangle(-396,-590.8,799,785.9), new cjs.Rectangle(-396,-550.7,799,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,788.3,866), new cjs.Rectangle(-396,-630.9,789,825.9), new cjs.Rectangle(-396,-590.8,789.8,785.9), new cjs.Rectangle(-396,-550.7,790.6,783), new cjs.Rectangle(-396,-510.6,791.3,785.7), new cjs.Rectangle(-396,-470.6,792.1,732.3), new cjs.Rectangle(-396,-430.5,792.8,678.9), new cjs.Rectangle(-396,-390.4,793.6,625.4), new cjs.Rectangle(-396,-350.4,794.3,572.1), new cjs.Rectangle(-396,-310.3,795.1,518.7), new cjs.Rectangle(-396,-270.2,795.9,465.3), new cjs.Rectangle(-396,-230.1,796.6,425.2), new cjs.Rectangle(-396,-190,797.4,385.1), new cjs.Rectangle(-396,-190,798.1,422.2), new cjs.Rectangle(-396,-190,799,465), new cjs.Rectangle(-396,-190,799,451.7), new cjs.Rectangle(-396,-190,799,438.4), new cjs.Rectangle(-396,-190,799,425), new cjs.Rectangle(-396,-190,799,411.7), new cjs.Rectangle(-396,-190,799,398.4), new cjs.Rectangle(-396,-190,799,385)];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-296,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-98,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(21));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(98,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(296,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-396,-190,799,385);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-386,-671,789,866), new cjs.Rectangle(-386.6,-630.9,789.7,825.9), new cjs.Rectangle(-387.3,-590.8,790.4,785.9), new cjs.Rectangle(-388,-550.7,791.1,745.8), new cjs.Rectangle(-388.8,-510.6,791.8,705.7), new cjs.Rectangle(-389.5,-470.6,792.5,665.6), new cjs.Rectangle(-390.2,-430.5,793.2,625.5), new cjs.Rectangle(-390.9,-390.4,793.9,585.4), new cjs.Rectangle(-391.6,-350.4,794.6,545.4), new cjs.Rectangle(-392.3,-310.3,795.4,505.3), new cjs.Rectangle(-393,-671,796.1,866), new cjs.Rectangle(-393.7,-630.9,796.8,825.9), new cjs.Rectangle(-394.4,-590.8,797.5,785.9), new cjs.Rectangle(-395.1,-550.7,798.2,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,799,866), new cjs.Rectangle(-396,-630.9,799,825.9), new cjs.Rectangle(-396,-590.8,799,785.9), new cjs.Rectangle(-396,-550.7,799,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,788.3,866), new cjs.Rectangle(-396,-630.9,789,825.9), new cjs.Rectangle(-396,-590.8,789.8,785.9), new cjs.Rectangle(-396,-550.7,790.6,783), new cjs.Rectangle(-396,-510.6,791.3,785.7), new cjs.Rectangle(-396,-470.6,792.1,732.3), new cjs.Rectangle(-396,-430.5,792.8,678.9), new cjs.Rectangle(-396,-390.4,793.6,625.4), new cjs.Rectangle(-396,-350.4,794.3,572.1), new cjs.Rectangle(-396,-310.3,795.1,518.7), new cjs.Rectangle(-396,-270.2,795.9,465.3), new cjs.Rectangle(-396,-230.1,796.6,425.2), new cjs.Rectangle(-396,-190,797.4,385.1), new cjs.Rectangle(-396,-190,798.1,422.2), new cjs.Rectangle(-396,-190,799,465), new cjs.Rectangle(-396,-190,799,451.7), new cjs.Rectangle(-396,-190,799,438.4), new cjs.Rectangle(-396,-190,799,425), new cjs.Rectangle(-396,-190,799,411.7), new cjs.Rectangle(-396,-190,799,398.4), new cjs.Rectangle(-396,-190,799,385)];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-296,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-98,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(21));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(98,0);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(11));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(296,0);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({scaleX:0.9,scaleY:0.9,y:-500,alpha:1},0).to({scaleX:1,scaleY:1,y:80},14).to({y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-396,-190,799,385);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-386,-671,789,866), new cjs.Rectangle(-386.6,-630.9,789.7,825.9), new cjs.Rectangle(-387.3,-590.8,790.4,785.9), new cjs.Rectangle(-388,-550.7,791.1,745.8), new cjs.Rectangle(-388.8,-510.6,791.8,705.7), new cjs.Rectangle(-389.5,-470.6,792.5,665.6), new cjs.Rectangle(-390.2,-430.5,793.2,625.5), new cjs.Rectangle(-390.9,-390.4,793.9,585.4), new cjs.Rectangle(-391.6,-350.4,794.6,545.4), new cjs.Rectangle(-392.3,-310.3,795.4,505.3), new cjs.Rectangle(-393,-671,796.1,866), new cjs.Rectangle(-393.7,-630.9,796.8,825.9), new cjs.Rectangle(-394.4,-590.8,797.5,785.9), new cjs.Rectangle(-395.1,-550.7,798.2,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,799,866), new cjs.Rectangle(-396,-630.9,799,825.9), new cjs.Rectangle(-396,-590.8,799,785.9), new cjs.Rectangle(-396,-550.7,799,783), new cjs.Rectangle(-396,-510.6,799,785.7), new cjs.Rectangle(-396,-470.6,799,732.3), new cjs.Rectangle(-396,-430.5,799,678.9), new cjs.Rectangle(-396,-390.4,799,625.4), new cjs.Rectangle(-396,-350.4,799,572.1), new cjs.Rectangle(-396,-310.3,799,518.7), new cjs.Rectangle(-396,-671,788.3,866), new cjs.Rectangle(-396,-630.9,789,825.9), new cjs.Rectangle(-396,-590.8,789.8,785.9), new cjs.Rectangle(-396,-550.7,790.6,783), new cjs.Rectangle(-396,-510.6,791.3,785.7), new cjs.Rectangle(-396,-470.6,792.1,732.3), new cjs.Rectangle(-396,-430.5,792.8,678.9), new cjs.Rectangle(-396,-390.4,793.6,625.4), new cjs.Rectangle(-396,-350.4,794.3,572.1), new cjs.Rectangle(-396,-310.3,795.1,518.7), new cjs.Rectangle(-396,-270.2,795.9,465.3), new cjs.Rectangle(-396,-230.1,796.6,425.2), new cjs.Rectangle(-396,-190,797.4,385.1), new cjs.Rectangle(-396,-190,798.1,422.2), new cjs.Rectangle(-396,-190,799,465), new cjs.Rectangle(-396,-190,799,451.7), new cjs.Rectangle(-396,-190,799,438.4), new cjs.Rectangle(-396,-190,799,425), new cjs.Rectangle(-396,-190,799,411.7), new cjs.Rectangle(-396,-190,799,398.4), new cjs.Rectangle(-396,-190,799,385)];


(lib.animations_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.animation_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tictok
	this.instance_1 = new lib.animation_title_tiktok_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-296.9,-182.3,601.6,337);
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


(lib.accessory_closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(80,-180);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(5));

	// options
	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(0,100);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(0,-100);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(0,100);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(0,-100);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(0,100);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(0,-100);

	this.accessory_8 = new lib.accessory_8_1_mc();
	this.accessory_8.setTransform(0,100);

	this.accessory_7 = new lib.accessory_7_1_mc();
	this.accessory_7.setTransform(0,-100);

	this.instance = new lib.empty_mc();
	this.instance.setTransform(0,100);

	this.accessory_9 = new lib.accessory_9_1_mc();
	this.accessory_9.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2}]}).to({state:[{t:this.accessory_3},{t:this.accessory_4}]},1).to({state:[{t:this.accessory_5},{t:this.accessory_6}]},1).to({state:[{t:this.accessory_7},{t:this.accessory_8}]},1).to({state:[{t:this.accessory_9},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-204,204,404);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.accessory_closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(80,-180);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(5));

	// options
	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(0,100);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(0,-100);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(0,100);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(0,-100);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(0,100);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(0,-100);

	this.accessory_8 = new lib.accessory_8_1_mc();
	this.accessory_8.setTransform(0,100);

	this.accessory_7 = new lib.accessory_7_1_mc();
	this.accessory_7.setTransform(0,-100);

	this.instance = new lib.empty_mc();
	this.instance.setTransform(0,100);

	this.accessory_9 = new lib.accessory_9_1_mc();
	this.accessory_9.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2}]}).to({state:[{t:this.accessory_3},{t:this.accessory_4}]},1).to({state:[{t:this.accessory_5},{t:this.accessory_6}]},1).to({state:[{t:this.accessory_7},{t:this.accessory_8}]},1).to({state:[{t:this.accessory_9},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-204,204,404);
p.frameBounds = [rect, rect, rect, rect, rect];


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
	this.instance = new lib.animations_title_mc();
	this.instance.setTransform(409.6,489.1,0.857,0.857,0,0,0,-0.5,0.1);

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
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(160,575,0.824,0.823);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,625.6);
p.frameBounds = [rect];


(lib.makeup_closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.makeup_6 = new lib.makeup_6_2_mc();
	this.makeup_6.setTransform(300,190,0.769,0.769);

	this.makeup_5 = new lib.makeup_5_2_mc();
	this.makeup_5.setTransform(300,0,0.769,0.769);

	this.makeup_4 = new lib.makeup_4_2_mc();
	this.makeup_4.setTransform(300,-190,0.769,0.769);

	this.makeup_3 = new lib.makeup_3_2_mc();
	this.makeup_3.setTransform(-300,190,0.769,0.769);

	this.makeup_2 = new lib.makeup_2_2_mc();
	this.makeup_2.setTransform(-300,0,0.769,0.769);

	this.makeup_1 = new lib.makeup_1_2_mc();
	this.makeup_1.setTransform(-300,-190,0.769,0.769);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(300,190,0.769,0.769);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(300,0,0.769,0.769);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(300,-190,0.769,0.769);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-300,190,0.769,0.769);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(-300,0,0.769,0.769);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-300,-190,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.makeup_1},{t:this.makeup_2},{t:this.makeup_3},{t:this.makeup_4},{t:this.makeup_5},{t:this.makeup_6}]}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-290,800,580);
p.frameBounds = [rect, rect];


(lib.makeup_closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.makeup_6 = new lib.makeup_6_1_mc();
	this.makeup_6.setTransform(300,190,0.769,0.769);

	this.makeup_5 = new lib.makeup_5_1_mc();
	this.makeup_5.setTransform(300,0,0.769,0.769);

	this.makeup_4 = new lib.makeup_4_1_mc();
	this.makeup_4.setTransform(300,-190,0.769,0.769);

	this.makeup_3 = new lib.makeup_3_1_mc();
	this.makeup_3.setTransform(-300,190,0.769,0.769);

	this.makeup_2 = new lib.makeup_2_1_mc();
	this.makeup_2.setTransform(-300,0,0.769,0.769);

	this.makeup_1 = new lib.makeup_1_1_mc();
	this.makeup_1.setTransform(-300,-190,0.769,0.769);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(300,190,0.769,0.769);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(300,0,0.769,0.769);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(300,-190,0.769,0.769);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-300,190,0.769,0.769);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(-300,0,0.769,0.769);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-300,-190,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.makeup_1},{t:this.makeup_2},{t:this.makeup_3},{t:this.makeup_4},{t:this.makeup_5},{t:this.makeup_6}]}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-290,800,580);
p.frameBounds = [rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4});

	// body
	this.body_1_mc = new lib.body_locations_1_mc();

	this.body_2_mc = new lib.body_locations_2_mc();

	this.body_3_mc = new lib.body_locations_3_mc();

	this.body_4_mc = new lib.body_locations_4_mc();

	this.body_5_mc = new lib.body_locations_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-396,-190,799,385);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-320,-210,647,425)];


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


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.bottom_0 = new lib.bottom_0_mc();
	this.bottom_0.setTransform(234,279);
	this.bottom_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bottom_0).wait(1).to({_off:false},0).wait(2));

	// no
	this.top_0 = new lib.top_0_mc();
	this.top_0.setTransform(-326,279);

	this.timeline.addTween(cjs.Tween.get(this.top_0).to({_off:true},2).wait(1));

	// options
	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(280,190);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(280,0);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(280,-190);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-280,190);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(-280,0);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-280,-190);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(280,190);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(280,0);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(280,-190);

	this.top_9 = new lib.top_9_1_mc();
	this.top_9.setTransform(-280,190);

	this.top_8 = new lib.top_8_1_mc();
	this.top_8.setTransform(-280,0);

	this.top_7 = new lib.top_7_1_mc();
	this.top_7.setTransform(-280,-190);

	this.bottom_9 = new lib.bottom_9_1_mc();
	this.bottom_9.setTransform(280,190);

	this.bottom_8 = new lib.bottom_8_1_mc();
	this.bottom_8.setTransform(280,0);

	this.bottom_7 = new lib.bottom_7_1_mc();
	this.bottom_7.setTransform(280,-190);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(-280,190);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(-280,0);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(-280,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4},{t:this.top_5},{t:this.top_6}]}).to({state:[{t:this.top_7},{t:this.top_8},{t:this.top_9},{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_5},{t:this.bottom_6},{t:this.bottom_7},{t:this.bottom_8},{t:this.bottom_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-290,760,585);
p.frameBounds = [rect, rect, rect];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.bottom_0 = new lib.bottom_0_mc();
	this.bottom_0.setTransform(234,279);
	this.bottom_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bottom_0).wait(1).to({_off:false},0).wait(2));

	// no
	this.top_0 = new lib.top_0_mc();
	this.top_0.setTransform(-326,279);

	this.timeline.addTween(cjs.Tween.get(this.top_0).to({_off:true},2).wait(1));

	// options
	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(280,190);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(280,0);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(280,-190);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-280,190);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(-280,0);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-280,-190);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(280,190);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(280,0);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(280,-190);

	this.top_9 = new lib.top_9_1_mc();
	this.top_9.setTransform(-280,190);

	this.top_8 = new lib.top_8_1_mc();
	this.top_8.setTransform(-280,0);

	this.top_7 = new lib.top_7_1_mc();
	this.top_7.setTransform(-280,-190);

	this.bottom_9 = new lib.bottom_9_1_mc();
	this.bottom_9.setTransform(280,190);

	this.bottom_8 = new lib.bottom_8_1_mc();
	this.bottom_8.setTransform(280,0);

	this.bottom_7 = new lib.bottom_7_1_mc();
	this.bottom_7.setTransform(280,-190);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(-280,190);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(-280,0);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(-280,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4},{t:this.top_5},{t:this.top_6}]}).to({state:[{t:this.top_7},{t:this.top_8},{t:this.top_9},{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_5},{t:this.bottom_6},{t:this.bottom_7},{t:this.bottom_8},{t:this.bottom_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-290,760,585);
p.frameBounds = [rect, rect, rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.accessory_closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// hero_2
	this.hero_2 = new lib.accessory_closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-204,204,404);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-290,760,585);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.makeup_closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-290,800,580);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-290,760,585);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.makeup_closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-290,800,580);
p.frameBounds = [rect];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
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
	this.next_mc.setTransform(700,320);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(100,320);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(-5.5,230,1,1,90);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(0.5,-230,1,1,90);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196,-550,387,840);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,230);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-550,760,970.5);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,230);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-550,800,970.5);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,230);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-550,760,970.5);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110,230);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-550,800,970.5);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,673);
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
	this.locations_mc.setTransform(400,280);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.398;

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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_1_mc.setTransform(120,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// decor
	this.instance_1 = new lib.container_animation_select_hero_title_mc();
	this.instance_1.setTransform(420,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(375,350);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(595,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_1},{t:this.hero_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-329.4,824.6,970);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_1_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(400,325);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1049.9);
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

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_makeup_mc();
	this.hero_2.setTransform(396,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1049.9);
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

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(400,325);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1049.9);
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
	this.dressupPanel_1_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_makeup_mc();
	this.hero_1.setTransform(433,325);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,1049.9);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500);
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
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.2,0.75,0.75,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(120,-50,0.9,0.9);
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
p.nominalBounds = rect = new cjs.Rectangle(-215.4,-329.4,1215.4,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.2,0.75,0.75,0,0,0,0.1,0.2);
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
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.2,0.75,0.75,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(120,-50,0.9,0.9);
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
p.nominalBounds = rect = new cjs.Rectangle(-215.4,-329.4,1215.4,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.2,0.75,0.75,0,0,0,0.1,0.2);
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
	this.body_mc = new lib.quest_1_mc();

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

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_13},{t:this.instance_12},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).to({state:[{t:this.instance_16}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), new cjs.Rectangle(-215.4,-329.4,1215.4,1300.3), new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), new cjs.Rectangle(-215.4,-329.4,1215.4,1300.3), new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,353,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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