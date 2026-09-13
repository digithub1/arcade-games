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
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"},
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"},
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"},
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"},
		{src:"library/images/storage_atlas_21.png", id:"storage_atlas_21"},
		{src:"library/images/storage_atlas_22.png", id:"storage_atlas_22"},
		{src:"library/images/storage_atlas_23.png", id:"storage_atlas_23"},
		{src:"library/images/storage_atlas_24.png", id:"storage_atlas_24"},
		{src:"library/images/storage_atlas_25.png", id:"storage_atlas_25"},
		{src:"library/images/storage_atlas_26.png", id:"storage_atlas_26"},
		{src:"library/images/storage_atlas_27.png", id:"storage_atlas_27"},
		{src:"library/images/storage_atlas_28.png", id:"storage_atlas_28"},
		{src:"library/images/storage_atlas_29.png", id:"storage_atlas_29"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,756,768]]},
		{name:"storage_atlas_6", frames: [[0,653,718,457],[0,0,631,651]]},
		{name:"storage_atlas_7", frames: [[0,0,723,423],[725,0,467,643],[462,645,496,518],[0,645,460,620]]},
		{name:"storage_atlas_8", frames: [[0,711,391,583],[393,711,467,437],[0,0,501,507],[503,0,451,489],[0,509,1200,200]]},
		{name:"storage_atlas_9", frames: [[0,325,281,703],[283,325,261,720],[614,0,586,318],[614,320,541,338],[0,0,612,323],[546,660,392,458]]},
		{name:"storage_atlas_10", frames: [[0,716,420,420],[422,864,541,318],[0,282,410,432],[0,0,640,280],[642,0,640,280],[422,282,300,580],[724,282,300,580]]},
		{name:"storage_atlas_11", frames: [[0,0,541,318],[411,448,465,356],[411,806,425,383],[543,0,385,446],[838,868,398,404],[878,448,393,418],[0,765,409,410],[0,320,379,443]]},
		{name:"storage_atlas_12", frames: [[780,725,500,300],[382,402,396,399],[402,0,390,395],[0,824,531,299],[794,0,426,360],[794,362,416,361],[0,0,400,400],[0,402,380,420]]},
		{name:"storage_atlas_13", frames: [[0,0,500,300],[0,302,500,300],[502,0,500,300],[502,302,726,205],[371,604,364,400],[0,604,369,396],[737,891,380,380],[737,509,380,380]]},
		{name:"storage_atlas_14", frames: [[0,399,347,399],[0,800,335,396],[351,0,542,247],[351,249,410,319],[0,0,349,397],[787,705,436,299],[349,570,436,299],[337,871,436,299],[787,404,436,299],[895,0,327,402]]},
		{name:"storage_atlas_15", frames: [[438,0,436,299],[0,903,436,299],[0,602,436,299],[0,301,436,299],[0,0,436,299],[438,301,436,299],[438,903,436,299],[438,602,436,299]]},
		{name:"storage_atlas_16", frames: [[438,0,436,299],[438,301,436,299],[438,602,436,299],[0,0,436,299],[0,903,436,299],[0,301,436,299],[0,602,436,299],[438,903,436,299]]},
		{name:"storage_atlas_17", frames: [[438,903,436,299],[438,0,436,299],[438,602,436,299],[0,602,436,299],[0,0,436,299],[438,301,436,299],[0,301,436,299],[0,903,436,299]]},
		{name:"storage_atlas_18", frames: [[876,367,333,388],[0,602,436,299],[438,602,436,299],[438,903,436,299],[438,301,436,299],[438,0,436,299],[0,301,436,299],[0,903,436,299],[0,0,436,299],[876,0,354,365],[876,757,380,340]]},
		{name:"storage_atlas_19", frames: [[382,0,380,340],[0,0,380,340],[764,0,380,340],[0,342,380,340],[764,342,380,340],[0,684,380,340],[382,684,380,340],[764,684,380,340],[382,342,380,340]]},
		{name:"storage_atlas_20", frames: [[322,740,319,396],[764,0,327,395],[643,763,313,402],[0,342,349,369],[678,397,353,364],[351,342,325,396],[0,713,320,399],[958,763,330,364],[382,0,380,340],[0,0,380,340]]},
		{name:"storage_atlas_21", frames: [[377,607,300,378],[0,321,375,317],[0,0,375,319],[679,607,293,374],[377,0,297,402],[0,640,281,401],[974,771,266,402],[1049,292,240,477],[676,292,371,313],[676,0,406,290],[283,987,460,240]]},
		{name:"storage_atlas_22", frames: [[325,0,380,260],[1013,0,221,427],[0,0,323,306],[0,308,406,237],[760,429,407,228],[0,1051,407,228],[0,591,407,228],[0,821,407,228],[409,659,407,228],[818,659,407,228],[818,889,407,228],[409,889,407,228],[707,0,304,318],[408,320,350,269]]},
		{name:"storage_atlas_23", frames: [[818,460,407,228],[409,690,407,228],[818,920,407,228],[818,690,407,228],[409,920,407,228],[409,230,407,228],[818,230,407,228],[409,0,407,228],[818,0,407,228],[0,460,407,228],[0,0,407,228],[0,230,407,228],[0,690,407,228],[0,920,407,228],[409,460,407,228]]},
		{name:"storage_atlas_24", frames: [[0,690,407,228],[409,690,407,228],[409,230,407,228],[0,920,407,228],[818,230,407,228],[409,460,407,228],[818,460,407,228],[0,460,407,228],[818,690,407,228],[409,0,407,228],[0,0,407,228],[818,0,407,228],[0,230,407,228],[409,920,369,251],[780,920,370,250]]},
		{name:"storage_atlas_25", frames: [[663,0,300,300],[965,0,300,300],[383,864,400,200],[0,1087,400,200],[663,302,300,300],[0,245,300,300],[302,329,300,300],[965,302,300,300],[0,864,381,221],[382,0,279,327],[604,604,330,258],[0,0,380,243],[402,1066,400,200],[804,1066,400,200],[0,631,400,200],[785,864,400,200]]},
		{name:"storage_atlas_26", frames: [[188,606,280,280],[0,1034,386,204],[470,606,379,193],[388,1108,391,186],[851,606,367,191],[736,801,333,214],[0,606,186,426],[781,1017,374,185],[388,888,346,218],[0,0,400,200],[402,0,400,200],[804,0,400,200],[0,202,400,200],[402,202,400,200],[804,202,400,200],[0,404,400,200],[402,404,400,200],[804,404,400,200]]},
		{name:"storage_atlas_27", frames: [[629,1006,240,240],[1014,975,240,240],[387,975,240,240],[530,733,240,240],[772,522,240,240],[772,764,240,240],[1020,491,240,240],[1014,733,240,240],[1032,249,240,240],[0,1141,385,159],[272,0,386,178],[0,959,367,180],[660,0,383,177],[0,257,260,264],[272,180,372,175],[262,357,376,154],[0,523,365,182],[660,179,370,172],[646,353,372,167],[1045,0,236,247],[267,707,261,242],[0,0,270,255],[0,707,265,250]]},
		{name:"storage_atlas_28", frames: [[702,385,190,190],[895,919,180,180],[702,577,190,190],[676,961,180,180],[0,0,240,240],[0,242,240,240],[0,484,240,240],[0,968,240,240],[0,726,240,240],[242,242,240,240],[242,726,240,240],[242,484,240,240],[242,0,240,240],[484,526,216,251],[706,0,373,104],[694,259,378,124],[484,259,208,265],[484,779,217,167],[484,0,220,257],[894,577,220,160],[703,769,190,190],[484,1143,340,80],[1086,380,186,188],[895,739,194,178],[858,1101,187,171],[1047,1101,187,132],[1091,752,186,159],[1074,188,190,190],[484,948,190,190],[894,385,190,190],[1077,919,180,180],[1116,570,180,180],[242,968,240,240],[706,106,460,80]]},
		{name:"storage_atlas_29", frames: [[261,474,120,120],[383,430,120,120],[261,596,120,120],[1087,769,90,90],[752,326,72,72],[505,509,120,120],[1116,437,90,50],[422,1230,90,50],[383,552,120,120],[627,509,120,120],[749,509,120,120],[826,161,120,120],[1245,802,50,50],[689,1027,50,50],[119,1250,50,50],[1245,903,50,50],[1071,1112,64,64],[997,1178,48,48],[170,315,88,42],[1179,735,115,65],[515,1167,93,91],[1163,985,75,82],[422,1134,91,94],[1156,1080,82,80],[1203,1162,65,53],[1249,854,44,38],[456,796,46,49],[1179,802,64,57],[339,1004,63,159],[0,1027,64,204],[138,1027,58,221],[627,753,61,193],[1099,0,69,178],[66,1027,70,186],[1233,187,53,180],[620,1100,45,191],[872,685,61,177],[211,0,196,112],[0,0,209,115],[409,0,191,109],[0,117,209,114],[434,111,193,99],[602,0,195,97],[0,315,168,112],[170,368,178,104],[282,258,180,108],[585,941,34,18],[1177,667,118,66],[464,311,139,55],[851,983,126,59],[1089,269,142,81],[505,430,124,75],[464,212,162,97],[934,1112,135,44],[948,258,139,84],[984,919,130,69],[598,1260,17,40],[1262,1217,31,45],[300,1109,30,47],[585,875,38,64],[772,1157,44,112],[715,1157,55,98],[1240,985,40,81],[1021,0,66,67],[851,1044,81,84],[1121,903,40,175],[795,983,54,154],[404,1004,48,104],[667,1100,46,182],[456,963,61,169],[1214,369,64,124],[1229,0,61,185],[742,983,51,172],[1170,0,55,167],[102,474,105,147],[0,602,90,170],[244,962,93,145],[729,161,95,163],[629,161,98,176],[0,429,100,171],[652,339,98,168],[92,623,92,158],[366,840,88,162],[1090,180,137,87],[948,82,149,85],[979,990,140,52],[948,169,140,87],[935,833,110,84],[935,769,150,62],[0,1233,117,67],[300,1165,120,81],[456,875,127,86],[742,815,80,124],[826,283,120,120],[752,437,180,60],[871,623,180,60],[934,437,180,60],[690,753,180,60],[871,499,180,60],[871,561,180,60],[0,233,280,80],[934,1080,220,30],[715,1257,40,40],[1137,1162,64,64],[799,0,220,80],[198,1027,40,55],[824,815,40,43],[977,1210,10,11],[211,114,69,94],[824,864,100,73],[1203,1217,57,60],[519,1065,99,100],[339,962,23,38],[1262,1264,31,31],[945,1158,50,50],[851,1130,40,147],[282,114,150,142],[690,815,50,210],[209,474,50,297],[244,840,120,120],[0,905,120,120],[122,905,120,120],[505,753,120,120],[1047,1220,40,40],[977,1228,40,40],[556,1260,40,40],[1047,1178,40,40],[1240,1120,40,40],[893,1210,40,40],[102,429,40,40],[383,796,40,40],[935,1210,40,40],[514,1260,40,40],[621,948,66,150],[261,718,120,120],[1163,903,80,80],[893,1158,50,50],[1240,1068,50,50],[749,631,120,120],[627,631,120,120],[505,631,120,120],[0,783,120,120],[122,783,120,120],[383,674,120,120],[742,941,240,40],[948,352,240,40],[935,685,240,40],[1053,499,240,40],[1053,541,240,40],[1053,583,240,40],[1053,625,240,40],[935,727,240,40],[198,1248,200,40],[1047,861,200,40],[198,1109,100,100],[519,963,100,100],[350,368,300,60],[629,99,300,60],[752,405,460,30]]}
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
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(1);
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
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.boy_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boy_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_location_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base8_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_base9_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dec9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow8_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyeshadow9_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fan9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_feathers9_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_handforfan_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_ornament9_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_uzor9_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_base9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dec9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyeshadow9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fan9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers5_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers7_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers8_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_feathers9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_ornament9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_uzor9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.little_golden_heart_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.podstavka_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.shadow_hairstyle_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.shadow_location_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(10);
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


(lib.wardrobe_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wardrobe_4_3_img();
	this.instance.setTransform(-230,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-120,460,240);
p.frameBounds = [rect];


(lib.wardrobe_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_3_img();
	this.instance.setTransform(-230,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-40,460,80);
p.frameBounds = [rect];


(lib.wardrobe_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_3_img();
	this.instance.setTransform(-230,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-15,460,30);
p.frameBounds = [rect];


(lib.wardrobe_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_2_img();
	this.instance.setTransform(-150,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-30,300,60);
p.frameBounds = [rect];


(lib.wardrobe_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_1_img();
	this.instance.setTransform(-150,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-30,300,60);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-230,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-310,460,620);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-150,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,580);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-150,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,580);
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
	this.instance.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect];


(lib.shadow_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_hairstyle_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.shadow_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300,1.017,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
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


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.little_golden_heart_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.little_golden_heart_img();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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


(lib.hero2_uzor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor9_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor8_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor7_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor6_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base2_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor5_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor4_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base2_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor3_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor2_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_uzor1_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_uzor_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_uzor1_img();
	this.instance.setTransform(-218,-149.5);

	this.instance_1 = new lib.hero2_uzor2_img();
	this.instance_1.setTransform(-218,-149.5);

	this.instance_2 = new lib.hero2_uzor3_img();
	this.instance_2.setTransform(-218,-149.5);

	this.instance_3 = new lib.hero2_uzor4_img();
	this.instance_3.setTransform(-218,-149.5);

	this.instance_4 = new lib.hero2_uzor5_img();
	this.instance_4.setTransform(-218,-149.5);

	this.instance_5 = new lib.hero2_uzor6_img();
	this.instance_5.setTransform(-218,-149.5);

	this.instance_6 = new lib.hero2_uzor7_img();
	this.instance_6.setTransform(-218,-149.5);

	this.instance_7 = new lib.hero2_uzor8_img();
	this.instance_7.setTransform(-218,-149.5);

	this.instance_8 = new lib.hero2_uzor9_img();
	this.instance_8.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_uzor_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor1_img();
	this.instance.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect];


(lib.hero2_ornament9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament9_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament8_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament7_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament6_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament5_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament4_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament3_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base2_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament2_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_ornament1_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_ornament_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_ornament1_img();
	this.instance.setTransform(-218,-149.5);

	this.instance_1 = new lib.hero2_ornament2_img();
	this.instance_1.setTransform(-218,-149.5);

	this.instance_2 = new lib.hero2_ornament3_img();
	this.instance_2.setTransform(-218,-149.5);

	this.instance_3 = new lib.hero2_ornament4_img();
	this.instance_3.setTransform(-218,-149.5);

	this.instance_4 = new lib.hero2_ornament5_img();
	this.instance_4.setTransform(-218,-149.5);

	this.instance_5 = new lib.hero2_ornament6_img();
	this.instance_5.setTransform(-218,-149.5);

	this.instance_6 = new lib.hero2_ornament7_img();
	this.instance_6.setTransform(-218,-149.5);

	this.instance_7 = new lib.hero2_ornament8_img();
	this.instance_7.setTransform(-218,-149.5);

	this.instance_8 = new lib.hero2_ornament9_img();
	this.instance_8.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_ornament_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament1_img();
	this.instance.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect];


(lib.hero2_necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(-68.5,-43.5);

	this.instance_1 = new lib.hero2_necklace2_img();
	this.instance_1.setTransform(-73.5,-38.5);

	this.instance_2 = new lib.hero2_necklace3_img();
	this.instance_2.setTransform(-68.5,-41.5);

	this.instance_3 = new lib.hero2_necklace4_img();
	this.instance_3.setTransform(-68.5,-42.5);

	this.instance_4 = new lib.hero2_necklace5_img();
	this.instance_4.setTransform(-56.5,-35.5);

	this.instance_5 = new lib.hero2_necklace6_img();
	this.instance_5.setTransform(-74.5,-36.5);

	this.instance_6 = new lib.hero2_necklace7_img();
	this.instance_6.setTransform(-60.5,-36.5);

	this.instance_7 = new lib.hero2_necklace8_img();
	this.instance_7.setTransform(-61.5,-36.5);

	this.instance_8 = new lib.hero2_necklace9_img();
	this.instance_8.setTransform(-62.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-43.5,137,87);
p.frameBounds = [rect, new cjs.Rectangle(-73.5,-38.5,149,85), new cjs.Rectangle(-68.5,-41.5,140,52), new cjs.Rectangle(-68.5,-42.5,140,87), new cjs.Rectangle(-56.5,-35.5,110,84), new cjs.Rectangle(-74.5,-36.5,150,62), new cjs.Rectangle(-60.5,-36.5,117,67), new cjs.Rectangle(-61.5,-36.5,120,81), new cjs.Rectangle(-62.5,-39.5,127,86), null];


(lib.hero2_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head1_img();
	this.instance.setTransform(-110,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-128.5,220,257);
p.frameBounds = [rect];


(lib.hero2_head0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head0_img();
	this.instance.setTransform(-196,-229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196,-229,392,458);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair2_img();
	this.instance.setTransform(-213,116);

	this.instance_1 = new lib.hero2_hair3_img();
	this.instance_1.setTransform(-111,27);

	this.instance_2 = new lib.hero2_hair4_img();
	this.instance_2.setTransform(-243,-170);

	this.instance_3 = new lib.hero2_hair6_img();
	this.instance_3.setTransform(-225,-191.9);

	this.instance_4 = new lib.hero2_hair7_img();
	this.instance_4.setTransform(-174,14);

	this.instance_5 = new lib.hero2_hair8_img();
	this.instance_5.setTransform(-192,-211.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-213,116,406,290), new cjs.Rectangle(-111,27,217,167), new cjs.Rectangle(-243,-170,496,518), null, new cjs.Rectangle(-225,-191.9,451,489), new cjs.Rectangle(-174,14,346,218), new cjs.Rectangle(-192,-211.9,379,443), null];


(lib.hero2_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-315.5,-325.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315.5,-325.5,631,651);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-177,-182.5);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-203,-160.9);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-210,-189.9);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-192,-169.9);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-219,-188.9);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-173,-190.9);

	this.instance_6 = new lib.hero2_fringe7_img();
	this.instance_6.setTransform(-181,-191);

	this.instance_7 = new lib.hero2_fringe8_img();
	this.instance_7.setTransform(-191,-167.9);

	this.instance_8 = new lib.hero2_fringe9_img();
	this.instance_8.setTransform(-189,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177,-182.5,354,365);
p.frameBounds = [rect, new cjs.Rectangle(-203,-160.9,393,418), new cjs.Rectangle(-210,-189.9,410,432), new cjs.Rectangle(-192,-169.9,416,361), new cjs.Rectangle(-219,-188.9,409,410), new cjs.Rectangle(-173,-190.9,330,258), new cjs.Rectangle(-181,-191,350,269), new cjs.Rectangle(-191,-167.9,380,243), new cjs.Rectangle(-189,-180,371,313)];


(lib.hero2_fringe_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-177,-182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177,-182.5,354,365);
p.frameBounds = [rect];


(lib.hero2_feathers9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers9_img();
	this.instance_1.setTransform(-81.4,-99.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-99.4,176.2,200.8);
p.frameBounds = [rect];


(lib.hero2_feathers8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers8_img();
	this.instance_1.setTransform(-41.4,-72.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-72.4,174.4,173.8);
p.frameBounds = [rect];


(lib.hero2_feathers7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers7_img();
	this.instance_1.setTransform(-54.4,-81.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-81.4,174.4,182.8);
p.frameBounds = [rect];


(lib.hero2_feathers6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers6_img();
	this.instance_1.setTransform(-42.4,-94.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-94.4,174.4,195.8);
p.frameBounds = [rect];


(lib.hero2_feathers5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers5_img();
	this.instance_1.setTransform(-145.4,-67.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.4,-67.4,287.2,182.8);
p.frameBounds = [rect];


(lib.hero2_feathers4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers4_img();
	this.instance_1.setTransform(-122.4,-29.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.4,-29.4,244.8,130.8);
p.frameBounds = [rect];


(lib.hero2_feathers3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers3_img();
	this.instance_1.setTransform(53.6,-67.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-67.4,236.8,190.8);
p.frameBounds = [rect];


(lib.hero2_feathers2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers2_img();
	this.instance_1.setTransform(-75.4,-99.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-99.4,174.4,200.8);
p.frameBounds = [rect];


(lib.hero2_feathers1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87.2,-18.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_feathers1_img();
	this.instance_1.setTransform(-62.4,-98.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.2,-98.4,174.4,199.8);
p.frameBounds = [rect];


(lib.hero2_feathers_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_feathers1_img();
	this.instance.setTransform(-152,-159);

	this.instance_1 = new lib.hero2_feathers2_img();
	this.instance_1.setTransform(-183,-171.6);

	this.instance_2 = new lib.hero2_feathers3_img();
	this.instance_2.setTransform(108,-67.5);

	this.instance_3 = new lib.hero2_feathers4_img();
	this.instance_3.setTransform(-302,29.8);

	this.instance_4 = new lib.hero2_feathers5_img();
	this.instance_4.setTransform(-354.6,-79.1);

	this.instance_5 = new lib.hero2_feathers6_img();
	this.instance_5.setTransform(-97.6,-131.1);

	this.instance_6 = new lib.hero2_feathers7_img();
	this.instance_6.setTransform(-126.5,-94.5);

	this.instance_7 = new lib.hero2_feathers8_img();
	this.instance_7.setTransform(-105.6,-67.1);

	this.instance_8 = new lib.hero2_feathers9_img();
	this.instance_8.setTransform(-191,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152,-159,304,318);
p.frameBounds = [rect, new cjs.Rectangle(-183,-171.6,330,364), new cjs.Rectangle(108,-67.5,240,477), new cjs.Rectangle(-302,29.8,612,323), new cjs.Rectangle(-354.6,-79.1,718,457), new cjs.Rectangle(-97.6,-131.1,208,265), new cjs.Rectangle(-126.5,-94.5,279,327), new cjs.Rectangle(-105.6,-67.1,236,247), new cjs.Rectangle(-191,-140,426,360), null];


(lib.hero2_feathers_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers1_img();
	this.instance.setTransform(-152,-159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152,-159,304,318);
p.frameBounds = [rect];


(lib.hero2_fan_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fan1_img();
	this.instance.setTransform(-31.6,-84.5,1,1,15);

	this.instance_1 = new lib.hero2_fan2_img();
	this.instance_1.setTransform(-36,-77);

	this.instance_2 = new lib.hero2_fan3_img();
	this.instance_2.setTransform(-37,-73);

	this.instance_3 = new lib.hero2_fan4_img();
	this.instance_3.setTransform(-36,-74);

	this.instance_4 = new lib.hero2_fan5_img();
	this.instance_4.setTransform(-36,-85);

	this.instance_5 = new lib.hero2_fan6_img();
	this.instance_5.setTransform(-31,-83);

	this.instance_6 = new lib.hero2_fan7_img();
	this.instance_6.setTransform(-47,-93);

	this.instance_7 = new lib.hero2_fan8_img();
	this.instance_7.setTransform(-38,-79);

	this.instance_8 = new lib.hero2_fan9_img();
	this.instance_8.setTransform(-31,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-84.5,139.5,169.1);
p.frameBounds = [rect, new cjs.Rectangle(-36,-77,90,170), new cjs.Rectangle(-37,-73,93,145), new cjs.Rectangle(-36,-74,95,163), new cjs.Rectangle(-36,-85,98,176), new cjs.Rectangle(-31,-83,100,171), new cjs.Rectangle(-47,-93,98,168), new cjs.Rectangle(-38,-79,92,158), new cjs.Rectangle(-31,-79,88,162), null];


(lib.hero2_fan_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan1_img();
	this.instance.setTransform(-31.6,-84.5,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-84.5,139.5,169.1);
p.frameBounds = [rect];


(lib.hero2_eyeshadow9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow9_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow8_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow7_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow6_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow5_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow4_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow3_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow2_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_eyeshadow1_img();
	this.instance.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_eyeshadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyeshadow1_img();
	this.instance.setTransform(-218,-149.5);

	this.instance_1 = new lib.hero2_eyeshadow2_img();
	this.instance_1.setTransform(-218,-149.5);

	this.instance_2 = new lib.hero2_eyeshadow3_img();
	this.instance_2.setTransform(-218,-149.5);

	this.instance_3 = new lib.hero2_eyeshadow4_img();
	this.instance_3.setTransform(-218,-149.5);

	this.instance_4 = new lib.hero2_eyeshadow5_img();
	this.instance_4.setTransform(-218,-149.5);

	this.instance_5 = new lib.hero2_eyeshadow6_img();
	this.instance_5.setTransform(-218,-149.5);

	this.instance_6 = new lib.hero2_eyeshadow7_img();
	this.instance_6.setTransform(-218,-149.5);

	this.instance_7 = new lib.hero2_eyeshadow8_img();
	this.instance_7.setTransform(-218,-149.5);

	this.instance_8 = new lib.hero2_eyeshadow9_img();
	this.instance_8.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_eyeshadow_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow1_img();
	this.instance.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect];


(lib.hero2_earrings_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(-186,-87.5);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-187,-87.5);

	this.instance_2 = new lib.hero2_earrings3_img();
	this.instance_2.setTransform(-186,-87.5);

	this.instance_3 = new lib.hero2_earrings4_img();
	this.instance_3.setTransform(-186,-87.5);

	this.instance_4 = new lib.hero2_earrings8_img();
	this.instance_4.setTransform(-186,-87.5);

	this.instance_5 = new lib.hero2_earrings6_img();
	this.instance_5.setTransform(-189,-71.5);

	this.instance_6 = new lib.hero2_earrings7_img();
	this.instance_6.setTransform(-187,-83.5);

	this.instance_7 = new lib.hero2_earrings9_img();
	this.instance_7.setTransform(-186,-72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186,-87.5,372,175);
p.frameBounds = [rect, new cjs.Rectangle(-187,-87.5,376,154), new cjs.Rectangle(-186,-87.5,373,104), new cjs.Rectangle(-186,-87.5,365,182), new cjs.Rectangle(-186,-87.5,370,172), new cjs.Rectangle(-189,-71.5,378,124), new cjs.Rectangle(-187,-83.5,374,185), new cjs.Rectangle(-186,-87.5,370,172), new cjs.Rectangle(-186,-72.5,372,167), null];


(lib.hero2_earrings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(-186,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186,-87.5,372,175);
p.frameBounds = [rect];


(lib.hero2_earring9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring9_img();
	this.instance.setTransform(8.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring9_img();
	this.instance_1.setTransform(-42.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-75.3,84,154.7);
p.frameBounds = [rect];


(lib.hero2_earring8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring8_img();
	this.instance.setTransform(7.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring8_img();
	this.instance_1.setTransform(-38.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.4,-75.3,76.6,154.7);
p.frameBounds = [rect];


(lib.hero2_earring7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring7_img();
	this.instance.setTransform(3.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring7_img();
	this.instance_1.setTransform(-40.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.4,-75.3,80.6,154.7);
p.frameBounds = [rect];


(lib.hero2_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_img();
	this.instance.setTransform(4.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring6_img();
	this.instance_1.setTransform(-39.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-75.3,82.4,154.7);
p.frameBounds = [rect];


(lib.hero2_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_img();
	this.instance.setTransform(6.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring5_img();
	this.instance_1.setTransform(-41.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-75.3,84.6,154.7);
p.frameBounds = [rect];


(lib.hero2_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_img();
	this.instance.setTransform(10.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring4_img();
	this.instance_1.setTransform(-37.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.4,-75.3,75.6,154.7);
p.frameBounds = [rect];


(lib.hero2_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_img();
	this.instance.setTransform(9.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring3_img();
	this.instance_1.setTransform(-38.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.4,-75.3,76.8,154.7);
p.frameBounds = [rect];


(lib.hero2_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_img();
	this.instance.setTransform(6.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring2_img();
	this.instance_1.setTransform(-41.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-75.3,80.4,154.7);
p.frameBounds = [rect];


(lib.hero2_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_img();
	this.instance.setTransform(12.6,-75.3,0.6,0.6);

	this.instance_1 = new lib.hero2_earring1_img();
	this.instance_1.setTransform(-35.4,-75.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.4,-75.3,72,154.7);
p.frameBounds = [rect];


(lib.hero2_dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress9_img();
	this.instance.setTransform(-106.8,-154.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.8,-170.3,318.4,338.6);
p.frameBounds = [rect];


(lib.hero2_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress8_img();
	this.instance.setTransform(-74.8,-154.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-170.3,212.8,337);
p.frameBounds = [rect];


(lib.hero2_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress7_img();
	this.instance.setTransform(-85.8,-154.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-170.3,256,334.6);
p.frameBounds = [rect];


(lib.hero2_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-109.8,-154.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-170.3,295.2,332.2);
p.frameBounds = [rect];


(lib.hero2_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-82.8,-153.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.8,-170.3,224.8,337.2);
p.frameBounds = [rect];


(lib.hero2_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-103.8,-154.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.8,-170.3,291.2,335.4);
p.frameBounds = [rect];


(lib.hero2_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-80.8,-153.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-170.3,260,333.2);
p.frameBounds = [rect];


(lib.hero2_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-91.8,-152.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.8,-170.3,237.6,339);
p.frameBounds = [rect];


(lib.hero2_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-92.8,-154.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-170.3,261.6,337);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-163.5,-201);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-161,-201.9);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-143,-195.9);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-177,-199.9);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-148,-199.9);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-184,-197);

	this.instance_6 = new lib.hero2_dress7_img();
	this.instance_6.setTransform(-159,-199.9);

	this.instance_7 = new lib.hero2_dress8_img();
	this.instance_7.setTransform(-142,-199.9);

	this.instance_8 = new lib.hero2_dress9_img();
	this.instance_8.setTransform(-177,-202.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-201,327,402);
p.frameBounds = [rect, new cjs.Rectangle(-161,-201.9,297,402), new cjs.Rectangle(-143,-195.9,325,396), new cjs.Rectangle(-177,-199.9,364,400), new cjs.Rectangle(-148,-199.9,281,401), new cjs.Rectangle(-184,-197,369,396), new cjs.Rectangle(-159,-199.9,320,399), new cjs.Rectangle(-142,-199.9,266,402), new cjs.Rectangle(-177,-202.9,398,404), null];


(lib.hero2_dress_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-163.5,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-201,327,402);
p.frameBounds = [rect];


(lib.hero2_dec9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec9_img();
	this.instance.setTransform(-20,-65.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec8_img();
	this.instance.setTransform(-17,-61.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec7_img();
	this.instance.setTransform(-10,-59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec6_img();
	this.instance.setTransform(-14,-59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec5_img();
	this.instance.setTransform(-11,-59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec4_img();
	this.instance.setTransform(-9,-59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec3_img();
	this.instance.setTransform(-8,-59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec2_img();
	this.instance.setTransform(-8,-59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dec1_img();
	this.instance.setTransform(-5,-59.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_base1_img();
	this.instance_1.setTransform(-109,-74.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-74.7,218,149.5);
p.frameBounds = [rect];


(lib.hero2_dec_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dec1_img();
	this.instance.setTransform(-8.5,-20);

	this.instance_1 = new lib.hero2_dec2_img();
	this.instance_1.setTransform(-15.5,-20);

	this.instance_2 = new lib.hero2_dec3_img();
	this.instance_2.setTransform(-15.5,-21);

	this.instance_3 = new lib.hero2_dec4_img();
	this.instance_3.setTransform(-18.5,-20);

	this.instance_4 = new lib.hero2_dec5_img();
	this.instance_4.setTransform(-22.5,-20);

	this.instance_5 = new lib.hero2_dec6_img();
	this.instance_5.setTransform(-27.5,-20);

	this.instance_6 = new lib.hero2_dec7_img();
	this.instance_6.setTransform(-19.5,-22);

	this.instance_7 = new lib.hero2_dec8_img();
	this.instance_7.setTransform(-33.5,-24);

	this.instance_8 = new lib.hero2_dec9_img();
	this.instance_8.setTransform(-40.5,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-20,17,40);
p.frameBounds = [rect, new cjs.Rectangle(-15.5,-20,31,45), new cjs.Rectangle(-15.5,-21,30,47), new cjs.Rectangle(-18.5,-20,38,64), new cjs.Rectangle(-22.5,-20,44,112), new cjs.Rectangle(-27.5,-20,55,98), new cjs.Rectangle(-19.5,-22,40,81), new cjs.Rectangle(-33.5,-24,66,67), new cjs.Rectangle(-40.5,-32,81,84), null];


(lib.hero2_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body1_img();
	this.instance.setTransform(-93,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-213,186,426);
p.frameBounds = [rect];


(lib.hero2_body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body0_img();
	this.instance.setTransform(-166.5,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-107,333,214);
p.frameBounds = [rect];


(lib.hero2_base_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-218,-149.5);

	this.instance_1 = new lib.hero2_base2_img();
	this.instance_1.setTransform(-218,-149.5);

	this.instance_2 = new lib.hero2_base3_img();
	this.instance_2.setTransform(-218,-149.5);

	this.instance_3 = new lib.hero2_base4_img();
	this.instance_3.setTransform(-218,-149.5);

	this.instance_4 = new lib.hero2_base5_img();
	this.instance_4.setTransform(-218,-149.5);

	this.instance_5 = new lib.hero2_base6_img();
	this.instance_5.setTransform(-218,-149.5);

	this.instance_6 = new lib.hero2_base7_img();
	this.instance_6.setTransform(-218,-149.5);

	this.instance_7 = new lib.hero2_base8_img();
	this.instance_7.setTransform(-218,-149.5);

	this.instance_8 = new lib.hero2_base9_img();
	this.instance_8.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_base_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-218,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-149.5,436,299);
p.frameBounds = [rect];


(lib.hero1_uzor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor9_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor8_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor7_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor6_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor5_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor4_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor3_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor2_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_uzor1_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_uzor_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_uzor1_img();
	this.instance.setTransform(-203.5,-114);

	this.instance_1 = new lib.hero1_uzor2_img();
	this.instance_1.setTransform(-203.5,-114);

	this.instance_2 = new lib.hero1_uzor3_img();
	this.instance_2.setTransform(-203.5,-114);

	this.instance_3 = new lib.hero1_uzor4_img();
	this.instance_3.setTransform(-203.5,-114);

	this.instance_4 = new lib.hero1_uzor5_img();
	this.instance_4.setTransform(-203.5,-114);

	this.instance_5 = new lib.hero1_uzor6_img();
	this.instance_5.setTransform(-203.5,-114);

	this.instance_6 = new lib.hero1_uzor7_img();
	this.instance_6.setTransform(-203.5,-114);

	this.instance_7 = new lib.hero1_uzor8_img();
	this.instance_7.setTransform(-203.5,-114);

	this.instance_8 = new lib.hero1_uzor9_img();
	this.instance_8.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero1_uzor_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor1_img();
	this.instance.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
p.frameBounds = [rect];


(lib.hero1_ornament9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament9_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament8_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament7_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament6_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament5_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament4_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament3_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament2_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_ornament1_img();
	this.instance.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_ornament_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_ornament1_img();
	this.instance.setTransform(-203.5,-114);

	this.instance_1 = new lib.hero1_ornament2_img();
	this.instance_1.setTransform(-203.5,-114);

	this.instance_2 = new lib.hero1_ornament3_img();
	this.instance_2.setTransform(-203.5,-114);

	this.instance_3 = new lib.hero1_ornament4_img();
	this.instance_3.setTransform(-203.5,-114);

	this.instance_4 = new lib.hero1_ornament5_img();
	this.instance_4.setTransform(-203.5,-114);

	this.instance_5 = new lib.hero1_ornament6_img();
	this.instance_5.setTransform(-203.5,-114);

	this.instance_6 = new lib.hero1_ornament7_img();
	this.instance_6.setTransform(-203.5,-114);

	this.instance_7 = new lib.hero1_ornament8_img();
	this.instance_7.setTransform(-203.5,-114);

	this.instance_8 = new lib.hero1_ornament9_img();
	this.instance_8.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero1_ornament_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament1_img();
	this.instance.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
p.frameBounds = [rect];


(lib.hero1_necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-59,-33);

	this.instance_1 = new lib.hero1_necklace2_img();
	this.instance_1.setTransform(-66.1,-27.1);

	this.instance_2 = new lib.hero1_necklace3_img();
	this.instance_2.setTransform(-63,-33.1);

	this.instance_3 = new lib.hero1_necklace4_img();
	this.instance_3.setTransform(-65.6,-33.5);

	this.instance_4 = new lib.hero1_necklace5_img();
	this.instance_4.setTransform(-60.6,-34.5);

	this.instance_5 = new lib.hero1_necklace6_img();
	this.instance_5.setTransform(-83,-31.1);

	this.instance_6 = new lib.hero1_necklace7_img();
	this.instance_6.setTransform(-63.5,-24.6);

	this.instance_7 = new lib.hero1_necklace8_img();
	this.instance_7.setTransform(-60.1,-36);

	this.instance_8 = new lib.hero1_necklace9_img();
	this.instance_8.setTransform(-55.6,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-33,118,66);
p.frameBounds = [rect, new cjs.Rectangle(-66.1,-27.1,139,55), new cjs.Rectangle(-63,-33.1,126,59), new cjs.Rectangle(-65.6,-33.5,142,81), new cjs.Rectangle(-60.6,-34.5,124,75), new cjs.Rectangle(-83,-31.1,162,97), new cjs.Rectangle(-63.5,-24.6,135,44), new cjs.Rectangle(-60.1,-36,139,84), new cjs.Rectangle(-55.6,-33.5,130,69), null];


(lib.hero1_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head1_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero1_head0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head0_img();
	this.instance.setTransform(-192.5,-223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-223,385,446);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-203,-118.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-134,98);

	this.instance_2 = new lib.hero1_hair4_img();
	this.instance_2.setTransform(-161,23);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-204,-129);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-226,-145);

	this.instance_5 = new lib.hero1_hair7_img();
	this.instance_5.setTransform(-247,-106);

	this.instance_6 = new lib.hero1_hair8_img();
	this.instance_6.setTransform(-272,-187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203,-118.5,425,383);
p.frameBounds = [rect, new cjs.Rectangle(-134,98,293,374), null, new cjs.Rectangle(-161,23,349,397), new cjs.Rectangle(-204,-129,467,643), new cjs.Rectangle(-226,-145,467,437), new cjs.Rectangle(-247,-106,501,507), new cjs.Rectangle(-272,-187,541,338), null];


(lib.hero1_hair_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-203,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203,-118.5,425,383);
p.frameBounds = [rect];


(lib.hero1_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-361.5,-211.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-361.5,-211.5,723,423);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-203,-118.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-180,-108);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-170,-196);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-180,-120);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-194,-128);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-226,-146);

	this.instance_6 = new lib.hero1_fringe7_img();
	this.instance_6.setTransform(-206,-132);

	this.instance_7 = new lib.hero1_fringe8_img();
	this.instance_7.setTransform(-176,-154);

	this.instance_8 = new lib.hero1_fringe9_img();
	this.instance_8.setTransform(-178,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203,-118.5,406,237);
p.frameBounds = [rect, new cjs.Rectangle(-180,-108,369,251), new cjs.Rectangle(-170,-196,349,369), new cjs.Rectangle(-180,-120,370,250), new cjs.Rectangle(-194,-128,391,583), new cjs.Rectangle(-226,-146,465,356), new cjs.Rectangle(-206,-132,410,319), new cjs.Rectangle(-176,-154,375,319), new cjs.Rectangle(-178,-175,353,364)];


(lib.hero1_fringe_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-203,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203,-118.5,406,237);
p.frameBounds = [rect];


(lib.hero1_feathers9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers9_img();
	this.instance_1.setTransform(-48.2,-94.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-94.4,162.8,174.8);
p.frameBounds = [rect];


(lib.hero1_feathers8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers8_img();
	this.instance_1.setTransform(-106.2,-95.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.2,-95.4,216.4,175.8);
p.frameBounds = [rect];


(lib.hero1_feathers7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers7_img();
	this.instance_1.setTransform(-106.2,-95.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.2,-95.4,216.4,175.8);
p.frameBounds = [rect];


(lib.hero1_feathers6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers6_img();
	this.instance_1.setTransform(-51.2,-101.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-101.4,162.8,181.8);
p.frameBounds = [rect];


(lib.hero1_feathers5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers5_img();
	this.instance_1.setTransform(-111.2,-90.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.2,-90.4,234.4,170.8);
p.frameBounds = [rect];


(lib.hero1_feathers4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers4_img();
	this.instance_1.setTransform(-106.2,-72.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.2,-72.4,216.8,152.8);
p.frameBounds = [rect];


(lib.hero1_feathers3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers3_img();
	this.instance_1.setTransform(29.8,-82.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-82.4,261,162.8);
p.frameBounds = [rect];


(lib.hero1_feathers2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers2_img();
	this.instance_1.setTransform(-146.2,-54.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.2,-54.4,290.4,134.8);
p.frameBounds = [rect];


(lib.hero1_feathers1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-81.2,-10.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_feathers1_img();
	this.instance_1.setTransform(-106.2,-80.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.2,-80.4,212.4,160.8);
p.frameBounds = [rect];


(lib.hero1_feathers_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_feathers1_img();
	this.instance.setTransform(-265.5,-149.5);

	this.instance_1 = new lib.hero1_feathers2_img();
	this.instance_1.setTransform(-370,-76.1);

	this.instance_2 = new lib.hero1_feathers3_img();
	this.instance_2.setTransform(63.5,-129.1);

	this.instance_3 = new lib.hero1_feathers4_img();
	this.instance_3.setTransform(-267.6,-111.1);

	this.instance_4 = new lib.hero1_feathers5_img();
	this.instance_4.setTransform(-295.6,-181);

	this.instance_5 = new lib.hero1_feathers6_img();
	this.instance_5.setTransform(-138.1,-187);

	this.instance_6 = new lib.hero1_feathers7_img();
	this.instance_6.setTransform(-266.1,-166);

	this.instance_7 = new lib.hero1_feathers8_img();
	this.instance_7.setTransform(-266.1,-166);

	this.instance_8 = new lib.hero1_feathers9_img();
	this.instance_8.setTransform(-122.6,-149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-265.5,-149.5,531,299);
p.frameBounds = [rect, new cjs.Rectangle(-370,-76.1,726,205), new cjs.Rectangle(63.5,-129.1,375,317), new cjs.Rectangle(-267.6,-111.1,542,247), new cjs.Rectangle(-295.6,-181,586,318), new cjs.Rectangle(-138.1,-187,323,306), rect=new cjs.Rectangle(-266.1,-166,541,318), rect, new cjs.Rectangle(-122.6,-149,260,264), null];


(lib.hero1_feathers_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers1_img();
	this.instance.setTransform(-265.5,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-265.5,-149.5,531,299);
p.frameBounds = [rect];


(lib.hero1_fan_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_handforfan_img();
	this.instance.setTransform(-17,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(1));

	// graph
	this.instance_1 = new lib.hero1_fan1_img();
	this.instance_1.setTransform(-110.2,-103);

	this.instance_2 = new lib.hero1_fan2_img();
	this.instance_2.setTransform(-113.7,-108);

	this.instance_3 = new lib.hero1_fan3_img();
	this.instance_3.setTransform(-102.2,-98.5);

	this.instance_4 = new lib.hero1_fan4_img();
	this.instance_4.setTransform(-116.7,-110);

	this.instance_5 = new lib.hero1_fan5_img();
	this.instance_5.setTransform(-104.7,-89.5);

	this.instance_6 = new lib.hero1_fan6_img();
	this.instance_6.setTransform(-106.2,-91);

	this.instance_7 = new lib.hero1_fan7_img();
	this.instance_7.setTransform(-86.5,-91);

	this.instance_8 = new lib.hero1_fan8_img();
	this.instance_8.setTransform(-100.2,-91.7);

	this.instance_9 = new lib.hero1_fan9_img();
	this.instance_9.setTransform(-101.2,-97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.2,-103,196,112);
p.frameBounds = [rect, new cjs.Rectangle(-113.7,-108,209,117), new cjs.Rectangle(-102.2,-98.5,191,109), new cjs.Rectangle(-116.7,-110,209,119), new cjs.Rectangle(-104.7,-89.5,193,99), new cjs.Rectangle(-106.2,-91,195,100), new cjs.Rectangle(-86.5,-91,168,112), new cjs.Rectangle(-100.2,-91.7,178,104), new cjs.Rectangle(-101.2,-97,180,108), null];


(lib.hero1_fan_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_handforfan_img();
	this.instance.setTransform(-17,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_fan1_img();
	this.instance_1.setTransform(-110.2,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.2,-103,196,112);
p.frameBounds = [rect];


(lib.hero1_eyeshadow9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow9_img();
	this.instance.setTransform(-101.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,204.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow8_img();
	this.instance.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow7_img();
	this.instance.setTransform(-101.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,204.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow6_img();
	this.instance.setTransform(-101.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,204.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow5_img();
	this.instance.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow4_img();
	this.instance.setTransform(-101.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,204.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow3_img();
	this.instance.setTransform(-101.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,204.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow2_img();
	this.instance.setTransform(-101.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,204.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_eyeshadow1_img();
	this.instance.setTransform(-101.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-102.2,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-57,204.5,114);
p.frameBounds = [rect];


(lib.hero1_eyeshadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyeshadow1_img();
	this.instance.setTransform(-203.5,-114);

	this.instance_1 = new lib.hero1_eyeshadow2_img();
	this.instance_1.setTransform(-203.5,-114);

	this.instance_2 = new lib.hero1_eyeshadow3_img();
	this.instance_2.setTransform(-203.5,-114);

	this.instance_3 = new lib.hero1_eyeshadow4_img();
	this.instance_3.setTransform(-203.5,-114);

	this.instance_4 = new lib.hero1_eyeshadow5_img();
	this.instance_4.setTransform(-203.5,-114);

	this.instance_5 = new lib.hero1_eyeshadow6_img();
	this.instance_5.setTransform(-203.5,-114);

	this.instance_6 = new lib.hero1_eyeshadow7_img();
	this.instance_6.setTransform(-203.5,-114);

	this.instance_7 = new lib.hero1_eyeshadow8_img();
	this.instance_7.setTransform(-203.5,-114);

	this.instance_8 = new lib.hero1_eyeshadow9_img();
	this.instance_8.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero1_eyeshadow_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow1_img();
	this.instance.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(-192.5,-79.5);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-192.5,-79.5);

	this.instance_2 = new lib.hero1_earrings3_img();
	this.instance_2.setTransform(-192.5,-79.5);

	this.instance_3 = new lib.hero1_earrings4_img();
	this.instance_3.setTransform(-192.7,-74.5);

	this.instance_4 = new lib.hero1_earrings5_img();
	this.instance_4.setTransform(-193.1,-66.5);

	this.instance_5 = new lib.hero1_earrings6_img();
	this.instance_5.setTransform(-194.5,-78.5);

	this.instance_6 = new lib.hero1_earrings7_img();
	this.instance_6.setTransform(-188.5,-79.5);

	this.instance_7 = new lib.hero1_earrings8_img();
	this.instance_7.setTransform(-190.5,-79.5);

	this.instance_8 = new lib.hero1_earrings9_img();
	this.instance_8.setTransform(-193.5,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-79.5,385,159);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-79.5,386,204), new cjs.Rectangle(-192.5,-79.5,381,221), new cjs.Rectangle(-192.7,-74.5,379,193), new cjs.Rectangle(-193.1,-66.5,386,178), new cjs.Rectangle(-194.5,-78.5,391,186), new cjs.Rectangle(-188.5,-79.5,367,180), new cjs.Rectangle(-190.5,-79.5,367,191), new cjs.Rectangle(-193.5,-78.5,383,177), null];


(lib.hero1_earrings_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(-192.5,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-79.5,385,159);
p.frameBounds = [rect];


(lib.hero1_earring9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring9_img();
	this.instance.setTransform(3.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring9_img();
	this.instance_1.setTransform(-40.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.4,-79.3,80.6,158.7);
p.frameBounds = [rect];


(lib.hero1_earring8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring8_img();
	this.instance.setTransform(9.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring8_img();
	this.instance_1.setTransform(-38.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.4,-79.3,75,158.7);
p.frameBounds = [rect];


(lib.hero1_earring7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring7_img();
	this.instance.setTransform(8.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring7_img();
	this.instance_1.setTransform(-37.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.4,-79.3,77.8,158.7);
p.frameBounds = [rect];


(lib.hero1_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_img();
	this.instance.setTransform(1.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring6_img();
	this.instance_1.setTransform(-42.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-79.3,86,158.7);
p.frameBounds = [rect];


(lib.hero1_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_img();
	this.instance.setTransform(1.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring5_img();
	this.instance_1.setTransform(-41.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-79.3,84.4,158.7);
p.frameBounds = [rect];


(lib.hero1_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_img();
	this.instance.setTransform(1.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring4_img();
	this.instance_1.setTransform(-39.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-79.3,77.6,158.7);
p.frameBounds = [rect];


(lib.hero1_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_img();
	this.instance.setTransform(1.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring3_img();
	this.instance_1.setTransform(-39.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-79.3,75.8,158.7);
p.frameBounds = [rect];


(lib.hero1_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_img();
	this.instance.setTransform(1.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring2_img();
	this.instance_1.setTransform(-39.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-79.3,79.4,158.7);
p.frameBounds = [rect];


(lib.hero1_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(1.6,-79.3,0.6,0.6);

	this.instance_1 = new lib.hero1_earring1_img();
	this.instance_1.setTransform(-39.4,-79.3,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.4,-79.3,78.8,158.7);
p.frameBounds = [rect];


(lib.hero1_dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress9_img();
	this.instance.setTransform(-153.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.8,-170.3,312,337.4);
p.frameBounds = [rect];


(lib.hero1_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress8_img();
	this.instance.setTransform(-129.8,-149.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.8,-170.3,250.4,342);
p.frameBounds = [rect];


(lib.hero1_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress7_img();
	this.instance.setTransform(-127.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.8,-170.3,261.6,337.4);
p.frameBounds = [rect];


(lib.hero1_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-138.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.8,-170.3,266.4,331.8);
p.frameBounds = [rect];


(lib.hero1_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress5_img();
	this.instance.setTransform(-131.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.8,-170.3,240,323.8);
p.frameBounds = [rect];


(lib.hero1_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-132.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.8,-170.3,268,338.2);
p.frameBounds = [rect];


(lib.hero1_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-125.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.8,-170.3,255.2,338.2);
p.frameBounds = [rect];


(lib.hero1_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-158.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.8,-170.3,316.8,340.6);
p.frameBounds = [rect];


(lib.hero1_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-138.8,-148.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_img();
	this.instance_1.setTransform(-34.8,-170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.8,-170.3,277.6,340.6);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-173.5,-199.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-193,-198.9);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-150,-196.9);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-159,-195.9);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-155,-177.9);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-162,-186.9);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-146,-194.9);

	this.instance_7 = new lib.hero1_dress8_img();
	this.instance_7.setTransform(-160,-201.9);

	this.instance_8 = new lib.hero1_dress9_img();
	this.instance_8.setTransform(-184,-196.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.5,-199.5,347,399);
p.frameBounds = [rect, new cjs.Rectangle(-193,-198.9,396,399), new cjs.Rectangle(-150,-196.9,319,396), new cjs.Rectangle(-159,-195.9,335,396), new cjs.Rectangle(-155,-177.9,300,378), new cjs.Rectangle(-162,-186.9,333,388), new cjs.Rectangle(-146,-194.9,327,395), new cjs.Rectangle(-160,-201.9,313,402), new cjs.Rectangle(-184,-196.9,390,395), null];


(lib.hero1_dress_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-173.5,-199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.5,-199.5,347,399);
p.frameBounds = [rect];


(lib.hero1_dec9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec9_img();
	this.instance.setTransform(-15.7,-52,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_dec8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec8_img();
	this.instance.setTransform(-10.7,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_dec7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec7_img();
	this.instance.setTransform(-10.7,-51,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_dec6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec6_img();
	this.instance.setTransform(-14.7,-61,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-61,203.5,118);
p.frameBounds = [rect];


(lib.hero1_dec5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec5_img();
	this.instance.setTransform(-20.7,-55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_dec4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec4_img();
	this.instance.setTransform(-20.7,-66,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-66,203.5,123);
p.frameBounds = [rect];


(lib.hero1_dec3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec3_img();
	this.instance.setTransform(-20.7,-61,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-61,203.5,118);
p.frameBounds = [rect];


(lib.hero1_dec2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec2_img();
	this.instance.setTransform(-24.7,-53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_dec1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dec1_img();
	this.instance.setTransform(-27.7,-51,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_base6_img();
	this.instance_1.setTransform(-101.7,-57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.7,-57,203.5,114);
p.frameBounds = [rect];


(lib.hero1_dec_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dec1_img();
	this.instance.setTransform(-57.5,-32.5);

	this.instance_1 = new lib.hero1_dec2_img();
	this.instance_1.setTransform(-47.5,-26.5);

	this.instance_2 = new lib.hero1_dec3_img();
	this.instance_2.setTransform(-41.5,-38.5);

	this.instance_3 = new lib.hero1_dec4_img();
	this.instance_3.setTransform(-40.5,-47.5);

	this.instance_4 = new lib.hero1_dec5_img();
	this.instance_4.setTransform(-38.5,-32.5);

	this.instance_5 = new lib.hero1_dec6_img();
	this.instance_5.setTransform(-33.5,-37.5);

	this.instance_6 = new lib.hero1_dec7_img();
	this.instance_6.setTransform(-23.5,-14.5);

	this.instance_7 = new lib.hero1_dec8_img();
	this.instance_7.setTransform(-24.5,-18.5);

	this.instance_8 = new lib.hero1_dec9_img();
	this.instance_8.setTransform(-33.5,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-32.5,115,65);
p.frameBounds = [rect, new cjs.Rectangle(-47.5,-26.5,93,91), new cjs.Rectangle(-41.5,-38.5,75,82), new cjs.Rectangle(-40.5,-47.5,91,94), new cjs.Rectangle(-38.5,-32.5,82,80), new cjs.Rectangle(-33.5,-37.5,65,53), new cjs.Rectangle(-23.5,-14.5,44,38), new cjs.Rectangle(-24.5,-18.5,46,49), new cjs.Rectangle(-33.5,-25.5,64,57), null];


(lib.hero1_dec_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec1_img();
	this.instance.setTransform(-57.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-32.5,115,65);
p.frameBounds = [rect];


(lib.hero1_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body1_img();
	this.instance.setTransform(-110.5,-213.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.5,-213.5,221,427);
p.frameBounds = [rect];


(lib.hero1_body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body0_img();
	this.instance.setTransform(-378,-384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-378,-384,756,768);
p.frameBounds = [rect];


(lib.hero1_base_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_base1_img();
	this.instance.setTransform(-203.5,-114);

	this.instance_1 = new lib.hero1_base2_img();
	this.instance_1.setTransform(-203.5,-114);

	this.instance_2 = new lib.hero1_base3_img();
	this.instance_2.setTransform(-203.5,-114);

	this.instance_3 = new lib.hero1_base4_img();
	this.instance_3.setTransform(-203.5,-114);

	this.instance_4 = new lib.hero1_base5_img();
	this.instance_4.setTransform(-203.5,-114);

	this.instance_5 = new lib.hero1_base6_img();
	this.instance_5.setTransform(-203.5,-114);

	this.instance_6 = new lib.hero1_base7_img();
	this.instance_6.setTransform(-203.5,-114);

	this.instance_7 = new lib.hero1_base8_img();
	this.instance_7.setTransform(-203.5,-114);

	this.instance_8 = new lib.hero1_base9_img();
	this.instance_8.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero1_base_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base1_img();
	this.instance.setTransform(-203.5,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-114,407,228);
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


(lib.fan_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan9_img();
	this.instance.setTransform(-89.6,21.6,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan9_img();
	this.instance.setTransform(-90,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan8_img();
	this.instance.setTransform(-88.2,24,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan8_img();
	this.instance.setTransform(-89,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan7_img();
	this.instance.setTransform(-93.8,25.6,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan7_img();
	this.instance.setTransform(-84,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan6_img();
	this.instance.setTransform(-95.5,26.2,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan6_img();
	this.instance.setTransform(-97.5,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan5_img();
	this.instance.setTransform(-97.6,24.6,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan5_img();
	this.instance.setTransform(-96.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan4_img();
	this.instance.setTransform(-91,24.8,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan4_img();
	this.instance.setTransform(-104.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan3_img();
	this.instance.setTransform(-82,26.2,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan3_img();
	this.instance.setTransform(-95.5,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan2_img();
	this.instance.setTransform(-93.7,21.5,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan2_img();
	this.instance.setTransform(-104.5,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fan1_img();
	this.instance.setTransform(-84.6,31.7,1,1,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.fan_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fan1_img();
	this.instance.setTransform(-98,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuLtIAA3ZMAldAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-75,240,150);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-36,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect];


(lib.boy_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boy_2_img();
	this.instance.setTransform(-130.5,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-360,261,720);
p.frameBounds = [rect];


(lib.boy_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boy_1_img();
	this.instance.setTransform(-140.5,-351.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-351.5,281,703);
p.frameBounds = [rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.body_current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.body_current_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-200,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-100,400,200);
p.frameBounds = [rect];


(lib.bg_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_2_img();
	this.instance.setTransform(-200,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-100,400,200);
p.frameBounds = [rect];


(lib.beads_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace9_img();
	this.instance.setTransform(51.7,-35,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace9_img();
	this.instance.setTransform(-43,-22.8,0.661,0.661);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace8_img();
	this.instance.setTransform(49,-33,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace8_img();
	this.instance.setTransform(-51.9,-31.3,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace7_img();
	this.instance.setTransform(47.5,-27,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace7_img();
	this.instance.setTransform(-47.5,-15.5,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace6_img();
	this.instance.setTransform(61.4,-25,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace6_img();
	this.instance.setTransform(-53.5,-32,0.661,0.661);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace5_img();
	this.instance.setTransform(44.8,-34,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace5_img();
	this.instance.setTransform(-46.3,-28,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace4_img();
	this.instance.setTransform(57.3,-36,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace4_img();
	this.instance.setTransform(-50,-28.5,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace3_img();
	this.instance.setTransform(57.3,-21,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace3_img();
	this.instance.setTransform(-48,-22.5,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace2_img();
	this.instance.setTransform(60.6,-35,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace2_img();
	this.instance.setTransform(-51.9,-20.5,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(55.8,-36,0.816,0.816,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.beads_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-59,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.base_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base9_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base9_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base8_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base8_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base7_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base7_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base6_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base6_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base5_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base5_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base4_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base4_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base3_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base3_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base2_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base2_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_base1_img();
	this.instance.setTransform(-87,-60,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.base_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_base1_img();
	this.instance.setTransform(-92,-51,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.area_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgTrAiYQkJAAi7i8Qi8i8ABkIMAAAgwuQgBkKC8i7QC7i8EJABMAnXAAAQEJgBC7C8QC8C7gBEKMAAAAwuQABEIi8C8Qi7C8kJAAg");
	this.shape.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-200,380,440);
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


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.copyright_body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// text
	this.instance = new lib.copyright_title_en_img();
	this.instance.setTransform(-250,-150);

	this.instance_1 = new lib.copyright_title_ru_img();
	this.instance_1.setTransform(-250,-150);

	this.instance_2 = new lib.copyright_title_tr_img();
	this.instance_2.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.copyright_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_1_img();
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


(lib.shine_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_2_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_1_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
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


(lib.photoflash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvnHzIAAvmIfOAAIAAPmg");
	this.shape.setTransform(400,150,4,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,300);
p.frameBounds = [rect];


(lib.photoflash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		try
		{
			app.addSoundFunc("photo_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.photoflash_1_img();
	this.instance.setTransform(-94,-87,0.72,0.72);

	this.instance_1 = new lib.photoflash_2_img();
	this.instance_1.setTransform(-93,-92,0.72,0.72);

	this.instance_2 = new lib.photoflash_3_img();
	this.instance_2.setTransform(-95,-90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-87,187.9,174.3);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-93,-92,194.4,183.6), rect, rect=new cjs.Rectangle(-95,-90,190.8,180), rect, rect=new cjs.Rectangle(-93,-92,194.4,183.6), rect, rect=new cjs.Rectangle(-94,-87,187.9,174.3), rect, rect=null, rect, rect, rect, rect];


(lib.photoflash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18,0.562,0.562);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-18,-18,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect];


(lib.glitter_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_2_img();
	this.instance.setTransform(-25,-25);

	this.instance_1 = new lib.glitter_2_2_img();
	this.instance_1.setTransform(-25,-25);

	this.instance_2 = new lib.glitter_3_2_img();
	this.instance_2.setTransform(-25,-25);

	this.instance_3 = new lib.glitter_4_2_img();
	this.instance_3.setTransform(-9.1,-34.1,1,1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:-25,y:-25}}]}).to({state:[{t:this.instance_1,p:{rotation:0,x:-25}}]},2).to({state:[{t:this.instance_2,p:{rotation:0,x:-25}}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2,p:{rotation:90,x:25}}]},2).to({state:[{t:this.instance_1,p:{rotation:90,x:25}}]},2).to({state:[{t:this.instance,p:{rotation:60,x:9.2,y:-34.1}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-34.1,-34.1,68.3,68.3), rect, rect=new cjs.Rectangle(-25,-25,50,50), rect, rect, rect, rect=new cjs.Rectangle(-34.1,-34.1,68.3,68.3), rect];


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


(lib.bubble_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(400,300,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
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


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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
	this.shape.setTransform(400,300,1.017,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_5_mc();
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_2 = new lib.redirect_4_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_3 = new lib.redirect_3_mc();
	this.instance_3.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,520);
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


(lib.plume_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers9_mc();
	this.instance.setTransform(0.9,0.9,0.9,0.9,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApHPFImGvNINdu8IKwAAIGOQFIk9OEg");
	this.shape.setTransform(-3.3,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.8,-98.9,194.9,193);
p.frameBounds = [rect];


(lib.plume_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers9_mc();
	this.instance.setTransform(-0.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar2PpIi7tLIMXyrIHYAGIJ0SMIiFOJg");
	this.shape.setTransform(-0.2,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.8,-108.2,189.3,207.7);
p.frameBounds = [rect];


(lib.plume_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers8_mc();
	this.instance.setTransform(0.1,13.1,0.9,0.9,0,0,0,0.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AphM9IkysIILutxIJOAAIHrN1Ik2MEg");
	this.shape.setTransform(-1,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.6,-68.9,183.3,166);
p.frameBounds = [rect];


(lib.plume_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers8_mc();
	this.instance.setTransform(-2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArXOJIolu1IKXucIU+AAIIkNXIqXQ6g");
	this.shape.setTransform(-0.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.2,-97.9,255.5,193.9);
p.frameBounds = [rect];


(lib.plume_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers7_mc();
	this.instance.setTransform(0.1,9,0.9,0.9,0,0,0,0.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AusC4ILJxrIGWAAIL6P+IlRNiIyYAHg");
	this.shape.setTransform(-0.3,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.4,-88.9,188.3,189.7);
p.frameBounds = [rect];


(lib.plume_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers7_mc();
	this.instance.setTransform(-2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzJgJIGpt+IVWhqIJBGrIBTKCIpxOpIzRANg");
	this.shape.setTransform(-2.7,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.3,-103.4,245.3,202.1);
p.frameBounds = [rect];


(lib.plume_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers6_mc();
	this.instance.setTransform(0.1,3.2,0.9,0.9,0,0,0,0.1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au9C/IMWyUIGSAAILTRXIlDNIIz4AMg");
	this.shape.setTransform(-1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.8,-95.9,191.7,196.6);
p.frameBounds = [rect];


(lib.plume_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers6_mc();
	this.instance.setTransform(-0.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqpPkIkdqEIIBxxIN4kBIIUL3Ih9QIIkHEmg");
	this.shape.setTransform(-0.5,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.2,-111.5,193.5,208.8);
p.frameBounds = [rect];


(lib.plume_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers5_mc();
	this.instance.setTransform(-1.6,21.6,0.9,0.9,0,0,0,-1.8,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqMNUItMvQIIYrmMAhfgAKIE6ODIq5NWg");
	this.shape.setTransform(-7.7,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.4,-68.2,299.5,175.6);
p.frameBounds = [rect];


(lib.plume_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers5_mc();
	this.instance.setTransform(-6,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar+NiIpoxUIL1qEISzgWIMlNMItGPNg");
	this.shape.setTransform(-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.9,-90.8,276.8,182);
p.frameBounds = [rect];


(lib.plume_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers4_mc();
	this.instance.setTransform(0.1,32.4,0.9,0.9,0,0,0,0.1,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3BrbMAuDgAFIoVW9I9/AEg");
	this.shape.setTransform(4.8,32.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.6,-41.5,294.8,147.5);
p.frameBounds = [rect];


(lib.plume_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers4_mc();
	this.instance.setTransform(-2.2,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqXMWInTooIAOpnIJYnJINrgBIMDIoIgOFeIoCMBg");
	this.shape.setTransform(2.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.6,-84.6,226.2,167.3);
p.frameBounds = [rect];


(lib.plume_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers3_mc();
	this.instance.setTransform(28.1,25.2,0.9,0.9,0,0,0,31.2,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvZKIIjxuLMAhNgLfIFIIzInGWSg");
	this.shape.setTransform(27.5,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.3,-75,245.6,199.2);
p.frameBounds = [rect];


(lib.plume_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers3_mc();
	this.instance.setTransform(-49.3,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0RNPIihtWIc3uvIKTB7IGbM2Ij9IEI4JG4g");
	this.shape.setTransform(4,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-97.6,291.9,190.4);
p.frameBounds = [rect];


(lib.plume_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers2_mc();
	this.instance.setTransform(0.1,0.9,0.9,0.9,0,0,0,0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApiPjIl7vGIIFv+IM8AAIJ6SnIlSMdg");
	this.shape.setTransform(-2.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.8,-98.9,198.1,199);
p.frameBounds = [rect];


(lib.plume_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers2_mc();
	this.instance.setTransform(1,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AveLCIrIvoILamIMAhEgAcIIvHTIsPPCg");
	this.shape.setTransform(0.4,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.9,-74.6,340.6,143.1);
p.frameBounds = [rect];


(lib.plume_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_feathers1_mc();
	this.instance.setTransform(0,1.4,0.9,0.9,0,0,0,0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApWPfIkhqdIEvunIPhmFIHfTUIkiMCg");
	this.shape.setTransform(-0.9,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-104.1,177.7,200.8);
p.frameBounds = [rect];


(lib.plume_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_feathers1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApGNpIqGrZIBYoPILRmsIIbhAIKrC1IGqKYIo2OKg");
	this.shape.setTransform(2.1,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.9,-94.5,246,175.3);
p.frameBounds = [rect];


(lib.plume_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.pattern_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor9_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor9_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor8_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor8_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor7_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor7_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor6_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor6_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor5_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor5_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor4_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor4_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor3_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor3_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor2_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor2_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_uzor1_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_uzor1_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.pattern_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.ornament_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament9_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament9_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament8_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament8_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament7_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament7_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament6_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament6_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament5_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament5_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament4_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament4_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament3_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament3_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament2_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament2_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_ornament1_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_ornament1_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.ornament_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.little_golden_heart_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.little_golden_heart_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},29).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, new cjs.Rectangle(-31.8,-31.8,63.7,63.7), new cjs.Rectangle(-31.7,-31.7,63.5,63.5), new cjs.Rectangle(-31.5,-31.5,63.2,63.2), new cjs.Rectangle(-31.4,-31.4,62.9,62.9), new cjs.Rectangle(-31.3,-31.3,62.6,62.6), new cjs.Rectangle(-31.1,-31.1,62.4,62.4), new cjs.Rectangle(-31,-31,62.1,62.1), new cjs.Rectangle(-30.8,-30.8,61.8,61.8), new cjs.Rectangle(-30.7,-30.7,61.5,61.5), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-30.4,-30.4,61,61), new cjs.Rectangle(-30.3,-30.3,60.7,60.7), new cjs.Rectangle(-30.2,-30.2,60.4,60.4), new cjs.Rectangle(-30,-30,60.2,60.2), new cjs.Rectangle(-29.9,-29.9,59.9,59.9), new cjs.Rectangle(-29.7,-29.7,59.6,59.6), new cjs.Rectangle(-29.6,-29.6,59.3,59.3), new cjs.Rectangle(-29.5,-29.5,59.1,59.1), new cjs.Rectangle(-29.3,-29.3,58.8,58.8), new cjs.Rectangle(-29.2,-29.2,58.5,58.5), new cjs.Rectangle(-29.1,-29.1,58.2,58.2), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-28.8,-28.8,57.7,57.7), new cjs.Rectangle(-28.6,-28.6,57.4,57.4), new cjs.Rectangle(-28.5,-28.5,57.1,57.1), new cjs.Rectangle(-28.4,-28.4,56.9,56.9), new cjs.Rectangle(-28.2,-28.2,56.6,56.6), new cjs.Rectangle(-28.1,-28.1,56.3,56.3), new cjs.Rectangle(-28,-28,56,56), new cjs.Rectangle(-28.1,-28.1,56.3,56.3), new cjs.Rectangle(-28.2,-28.2,56.6,56.6), new cjs.Rectangle(-28.3,-28.3,56.8,56.8), new cjs.Rectangle(-28.5,-28.5,57.1,57.1), new cjs.Rectangle(-28.6,-28.6,57.4,57.4), new cjs.Rectangle(-28.7,-28.7,57.6,57.6), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-29,-29,58.2,58.2), new cjs.Rectangle(-29.1,-29.1,58.4,58.4), new cjs.Rectangle(-29.3,-29.3,58.7,58.7), new cjs.Rectangle(-29.4,-29.4,59,59), new cjs.Rectangle(-29.5,-29.5,59.2,59.2), new cjs.Rectangle(-29.7,-29.7,59.5,59.5), new cjs.Rectangle(-29.8,-29.8,59.8,59.8), new cjs.Rectangle(-29.9,-29.9,60,60), new cjs.Rectangle(-30.1,-30.1,60.3,60.3), new cjs.Rectangle(-30.2,-30.2,60.6,60.6), new cjs.Rectangle(-30.3,-30.3,60.8,60.8), new cjs.Rectangle(-30.5,-30.5,61.1,61.1), new cjs.Rectangle(-30.6,-30.6,61.4,61.4), new cjs.Rectangle(-30.7,-30.7,61.6,61.6), new cjs.Rectangle(-30.9,-30.9,61.9,61.9), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-31.1,-31.1,62.4,62.4), new cjs.Rectangle(-31.3,-31.3,62.7,62.7), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-31.5,-31.5,63.2,63.2), new cjs.Rectangle(-31.7,-31.7,63.5,63.5), new cjs.Rectangle(-31.8,-31.8,63.8,63.8), new cjs.Rectangle(-32,-32,64,64)];


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


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curl
	this.curl = new lib.hero2_dec_all_mc();
	this.curl.setTransform(3.1,-245,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.curl).to({y:-265},49).to({y:-245},50).wait(1));

	// ornament
	this.ornament = new lib.hero2_ornament_all_mc();
	this.ornament.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.ornament).to({y:-217},49).to({y:-197},50).wait(1));

	// eyeshadow
	this.eyeshadow = new lib.hero2_eyeshadow_all_mc();
	this.eyeshadow.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow).to({y:-217},49).to({y:-197},50).wait(1));

	// pattern
	this.pattern = new lib.hero2_uzor_all_mc();
	this.pattern.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.pattern).to({y:-217},49).to({y:-197},50).wait(1));

	// base
	this.base = new lib.hero2_base_all_mc();
	this.base.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.base).to({y:-217},49).to({y:-197},50).wait(1));

	// plume
	this.plume = new lib.hero2_feathers_all_mc();
	this.plume.setTransform(0.3,-313.8,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.plume).to({y:-333.8},49).to({y:-313.8},50).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_mc();
	this.earrings.setTransform(0.5,-151.6,0.55,0.55,0,2.4,0,0,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({regX:-0.1,skewX:-1.7,x:0.4,y:-171.6},49).to({regX:0,skewX:2.4,x:0.5,y:-151.6},50).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-1.9,-348,1,1,0,0.5,0,-6,-131);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({skewX:-0.6,x:-0.9,y:-368},49).to({skewX:0.5,x:-1.9,y:-348},50).wait(1));

	// body
	this.instance = new lib.hero2_head1_mc();
	this.instance.setTransform(-0.5,-203.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-223.2},49).to({y:-203.2},50).wait(1));

	// beads
	this.beads = new lib.hero2_necklace_all_mc();
	this.beads.setTransform(4.4,-45,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:-65},49).to({y:-45},50).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(31,132);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:112},49).to({y:132},50).wait(1));

	// fan
	this.fan = new lib.hero2_fan_all_mc();
	this.fan.setTransform(131.5,191.9);

	this.timeline.addTween(cjs.Tween.get(this.fan).to({rotation:-7.7,x:126.5,y:169.4},49).to({rotation:0,x:131.5,y:191.9},50).wait(1));

	// body
	this.instance_1 = new lib.hero2_body1_mc();
	this.instance_1.setTransform(17.5,118.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98.7},49).to({y:118.7},50).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(0.1,-343,1,1,0,0.5,0,-4,-126);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({skewX:-0.6,x:1.1,y:-363},49).to({skewX:0.5,x:0.1,y:-343},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175.5,-401.3,376.7,734.3);
p.frameBounds = [rect, new cjs.Rectangle(-174.5,-401.6,375.6,734.2), new cjs.Rectangle(-174.5,-402,375.3,734.2), new cjs.Rectangle(-174.5,-402.4,375.1,734.2), new cjs.Rectangle(-174.4,-402.8,374.7,734.2), new cjs.Rectangle(-174.3,-403.2,374.3,734.2), new cjs.Rectangle(-174.4,-403.6,374.2,734.2), new cjs.Rectangle(-174.3,-404,373.8,734.2), new cjs.Rectangle(-174.2,-404.4,373.4,734.2), new cjs.Rectangle(-174.1,-404.8,373.2,734.2), new cjs.Rectangle(-173,-405.3,371.7,734.2), new cjs.Rectangle(-173,-405.7,371.6,734.2), new cjs.Rectangle(-173,-406.1,371.2,734.2), new cjs.Rectangle(-173,-406.5,370.8,734.2), new cjs.Rectangle(-172.8,-406.9,370.5,734.2), new cjs.Rectangle(-172.8,-407.3,370.2,734.2), new cjs.Rectangle(-172.8,-407.7,369.8,734.2), new cjs.Rectangle(-172.7,-408.1,369.5,734.2), new cjs.Rectangle(-172.7,-408.5,369.2,734.2), new cjs.Rectangle(-172.6,-408.9,369,734.2), new cjs.Rectangle(-172.6,-409.3,368.7,734.2), new cjs.Rectangle(-172.5,-409.7,368.2,734.2), new cjs.Rectangle(-172.5,-410.2,368.1,734.2), new cjs.Rectangle(-172.5,-410.6,367.7,734.2), new cjs.Rectangle(-172.4,-411,367.3,734.2), new cjs.Rectangle(-172.5,-411.4,367.2,734.2), new cjs.Rectangle(-172.4,-411.8,366.9,734.2), new cjs.Rectangle(-172.4,-412.2,367,734.2), new cjs.Rectangle(-172.4,-412.6,367,734.2), new cjs.Rectangle(-172.4,-413,366.9,734.2), new cjs.Rectangle(-172.4,-413.4,366.9,734.2), new cjs.Rectangle(-172.3,-413.8,366.9,734.2), new cjs.Rectangle(-172.3,-414.2,366.9,734.2), new cjs.Rectangle(-172.5,-414.6,367.1,734.2), new cjs.Rectangle(-172.5,-415.1,367,734.2), new cjs.Rectangle(-172.4,-415.5,367,734.2), new cjs.Rectangle(-172.4,-415.9,367,734.2), new cjs.Rectangle(-172.4,-416.3,367,734.2), new cjs.Rectangle(-172.4,-416.7,367,734.2), new cjs.Rectangle(-172.4,-417.1,366.9,734.2), new cjs.Rectangle(-172.4,-417.5,366.9,734.2), new cjs.Rectangle(-172.4,-417.9,366.9,734.2), new cjs.Rectangle(-172.3,-418.3,366.9,734.2), new cjs.Rectangle(-172.3,-418.7,366.9,734.2), new cjs.Rectangle(-172.5,-419.1,367,734.2), new cjs.Rectangle(-172.5,-419.5,367.1,734.2), new cjs.Rectangle(-172.4,-420,367,734.2), new cjs.Rectangle(-172.5,-420.4,367,734.2), new cjs.Rectangle(-172.4,-420.8,367,734.2), new cjs.Rectangle(-172.5,-421.3,379.4,734.3), new cjs.Rectangle(-172.4,-420.8,367,734.3), new cjs.Rectangle(-172.5,-420.4,367.1,734.3), new cjs.Rectangle(-172.4,-420,367,734.3), new cjs.Rectangle(-172.5,-419.6,367.1,734.3), new cjs.Rectangle(-172.5,-419.2,367.1,734.3), new cjs.Rectangle(-172.3,-418.8,366.8,734.3), new cjs.Rectangle(-172.3,-418.4,366.9,734.3), new cjs.Rectangle(-172.4,-418,366.9,734.3), new cjs.Rectangle(-172.4,-417.6,366.9,734.3), new cjs.Rectangle(-172.4,-417.2,366.9,734.3), new cjs.Rectangle(-172.4,-416.8,366.9,734.3), new cjs.Rectangle(-172.4,-416.4,367,734.3), new cjs.Rectangle(-172.4,-416,366.9,734.3), new cjs.Rectangle(-172.5,-415.6,367,734.3), new cjs.Rectangle(-172.4,-415.2,367,734.3), new cjs.Rectangle(-172.5,-414.8,367,734.3), new cjs.Rectangle(-172.5,-414.4,367,734.3), new cjs.Rectangle(-172.3,-414,366.8,734.3), new cjs.Rectangle(-172.4,-413.6,366.9,734.3), new cjs.Rectangle(-172.4,-413.2,366.9,734.3), new cjs.Rectangle(-172.3,-412.8,366.9,734.3), new cjs.Rectangle(-172.4,-412.4,367,734.3), new cjs.Rectangle(-172.4,-412,367,734.3), new cjs.Rectangle(-172.4,-411.6,367,734.3), new cjs.Rectangle(-172.4,-411.2,367.2,734.3), new cjs.Rectangle(-172.4,-410.8,367.5,734.3), new cjs.Rectangle(-172.4,-410.4,367.7,734.3), new cjs.Rectangle(-172.5,-410,368.1,734.3), new cjs.Rectangle(-172.5,-409.6,368.4,734.3), new cjs.Rectangle(-172.6,-409.2,368.7,734.3), new cjs.Rectangle(-172.6,-408.8,369,734.3), new cjs.Rectangle(-172.6,-408.4,369.2,734.3), new cjs.Rectangle(-172.7,-408,369.7,734.3), new cjs.Rectangle(-172.8,-407.6,370,734.3), new cjs.Rectangle(-172.8,-407.2,370.1,734.3), new cjs.Rectangle(-172.8,-406.8,370.5,734.3), new cjs.Rectangle(-172.9,-406.4,370.8,734.3), new cjs.Rectangle(-172.9,-406,371.1,734.3), new cjs.Rectangle(-173,-405.6,371.6,734.3), new cjs.Rectangle(-174.1,-405.2,372.8,734.3), new cjs.Rectangle(-174.1,-404.8,373,734.3), new cjs.Rectangle(-174.2,-404.4,373.5,734.3), new cjs.Rectangle(-174.3,-404,373.8,734.3), new cjs.Rectangle(-174.3,-403.6,374.2,734.3), new cjs.Rectangle(-174.3,-403.2,374.3,734.3), new cjs.Rectangle(-174.3,-402.8,374.6,734.3), new cjs.Rectangle(-174.5,-402.4,375.1,734.3), new cjs.Rectangle(-174.5,-402,375.3,734.3), new cjs.Rectangle(-174.5,-401.6,375.6,734.3), new cjs.Rectangle(-175.5,-401.3,376.7,734.3)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_ornament_all_2_mc();
	this.instance.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-217},49).to({y:-197},50).wait(1));

	// animation
	this.instance_1 = new lib.hero2_eyeshadow_all_2_mc();
	this.instance_1.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-217},49).to({y:-197},50).wait(1));

	// animation
	this.instance_2 = new lib.hero2_uzor_all_2_mc();
	this.instance_2.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-217},49).to({y:-197},50).wait(1));

	// animation
	this.instance_3 = new lib.hero2_base_all_2_mc();
	this.instance_3.setTransform(3.4,-197,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-217},49).to({y:-197},50).wait(1));

	// animation
	this.instance_4 = new lib.hero2_feathers_all_2_mc();
	this.instance_4.setTransform(0.3,-313.8,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-333.8},49).to({y:-313.8},50).wait(1));

	// animation
	this.instance_5 = new lib.hero2_earrings_2_mc();
	this.instance_5.setTransform(0.5,-151.6,0.55,0.55,0,2.4,0,0,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,skewX:-1.7,x:0.4,y:-171.6},49).to({regX:0,skewX:2.4,x:0.5,y:-151.6},50).wait(1));

	// animation
	this.instance_6 = new lib.hero2_fringe_all_2_mc();
	this.instance_6.setTransform(-1.9,-348,1,1,0,0.5,0,-6,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:-0.6,x:-0.9,y:-368},49).to({skewX:0.5,x:-1.9,y:-348},50).wait(1));

	// animation
	this.instance_7 = new lib.hero2_head1_mc();
	this.instance_7.setTransform(-0.5,-203.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-223.2},49).to({y:-203.2},50).wait(1));

	// animation
	this.instance_8 = new lib.hero2_dress_all_2_mc();
	this.instance_8.setTransform(31,132);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:112},49).to({y:132},50).wait(1));

	// animation
	this.instance_9 = new lib.hero2_fan_all_2_mc();
	this.instance_9.setTransform(131.5,191.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-7.7,x:126.5,y:169.4},49).to({rotation:0,x:131.5,y:191.9},50).wait(1));

	// animation
	this.instance_10 = new lib.hero2_body1_mc();
	this.instance_10.setTransform(17.5,118.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:98.7},49).to({y:118.7},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175.5,-401.3,376.7,734.3);
p.frameBounds = [rect, new cjs.Rectangle(-174.5,-401.6,375.6,734.2), new cjs.Rectangle(-174.5,-402,375.3,734.2), new cjs.Rectangle(-174.5,-402.4,375.1,734.2), new cjs.Rectangle(-174.4,-402.8,374.7,734.2), new cjs.Rectangle(-174.3,-403.2,374.3,734.2), new cjs.Rectangle(-174.4,-403.6,374.2,734.2), new cjs.Rectangle(-174.3,-404,373.8,734.2), new cjs.Rectangle(-174.2,-404.4,373.4,734.2), new cjs.Rectangle(-174.1,-404.8,373.2,734.2), new cjs.Rectangle(-173,-405.3,371.7,734.2), new cjs.Rectangle(-173,-405.7,371.6,734.2), new cjs.Rectangle(-173,-406.1,371.2,734.2), new cjs.Rectangle(-173,-406.5,370.8,734.2), new cjs.Rectangle(-172.8,-406.9,370.5,734.2), new cjs.Rectangle(-172.8,-407.3,370.2,734.2), new cjs.Rectangle(-172.8,-407.7,369.8,734.2), new cjs.Rectangle(-172.7,-408.1,369.5,734.2), new cjs.Rectangle(-172.7,-408.5,369.2,734.2), new cjs.Rectangle(-172.6,-408.9,369,734.2), new cjs.Rectangle(-172.6,-409.3,368.7,734.2), new cjs.Rectangle(-172.5,-409.7,368.2,734.2), new cjs.Rectangle(-172.5,-410.2,368.1,734.2), new cjs.Rectangle(-172.5,-410.6,367.7,734.2), new cjs.Rectangle(-172.4,-411,367.3,734.2), new cjs.Rectangle(-172.5,-411.4,367.2,734.2), new cjs.Rectangle(-172.4,-411.8,366.9,734.2), new cjs.Rectangle(-172.4,-412.2,367,734.2), new cjs.Rectangle(-172.4,-412.6,367,734.2), new cjs.Rectangle(-172.4,-413,366.9,734.2), new cjs.Rectangle(-172.4,-413.4,366.9,734.2), new cjs.Rectangle(-172.3,-413.8,366.9,734.2), new cjs.Rectangle(-172.3,-414.2,366.9,734.2), new cjs.Rectangle(-172.5,-414.6,367.1,734.2), new cjs.Rectangle(-172.5,-415.1,367,734.2), new cjs.Rectangle(-172.4,-415.5,367,734.2), new cjs.Rectangle(-172.4,-415.9,367,734.2), new cjs.Rectangle(-172.4,-416.3,367,734.2), new cjs.Rectangle(-172.4,-416.7,367,734.2), new cjs.Rectangle(-172.4,-417.1,366.9,734.2), new cjs.Rectangle(-172.4,-417.5,366.9,734.2), new cjs.Rectangle(-172.4,-417.9,366.9,734.2), new cjs.Rectangle(-172.3,-418.3,366.9,734.2), new cjs.Rectangle(-172.3,-418.7,366.9,734.2), new cjs.Rectangle(-172.5,-419.1,367,734.2), new cjs.Rectangle(-172.5,-419.5,367.1,734.2), new cjs.Rectangle(-172.4,-420,367,734.2), new cjs.Rectangle(-172.5,-420.4,367,734.2), new cjs.Rectangle(-172.4,-420.8,367,734.2), new cjs.Rectangle(-172.5,-421.3,379.4,734.3), new cjs.Rectangle(-172.4,-420.8,367,734.3), new cjs.Rectangle(-172.5,-420.4,367.1,734.3), new cjs.Rectangle(-172.4,-420,367,734.3), new cjs.Rectangle(-172.5,-419.6,367.1,734.3), new cjs.Rectangle(-172.5,-419.2,367.1,734.3), new cjs.Rectangle(-172.3,-418.8,366.8,734.3), new cjs.Rectangle(-172.3,-418.4,366.9,734.3), new cjs.Rectangle(-172.4,-418,366.9,734.3), new cjs.Rectangle(-172.4,-417.6,366.9,734.3), new cjs.Rectangle(-172.4,-417.2,366.9,734.3), new cjs.Rectangle(-172.4,-416.8,366.9,734.3), new cjs.Rectangle(-172.4,-416.4,367,734.3), new cjs.Rectangle(-172.4,-416,366.9,734.3), new cjs.Rectangle(-172.5,-415.6,367,734.3), new cjs.Rectangle(-172.4,-415.2,367,734.3), new cjs.Rectangle(-172.5,-414.8,367,734.3), new cjs.Rectangle(-172.5,-414.4,367,734.3), new cjs.Rectangle(-172.3,-414,366.8,734.3), new cjs.Rectangle(-172.4,-413.6,366.9,734.3), new cjs.Rectangle(-172.4,-413.2,366.9,734.3), new cjs.Rectangle(-172.3,-412.8,366.9,734.3), new cjs.Rectangle(-172.4,-412.4,367,734.3), new cjs.Rectangle(-172.4,-412,367,734.3), new cjs.Rectangle(-172.4,-411.6,367,734.3), new cjs.Rectangle(-172.4,-411.2,367.2,734.3), new cjs.Rectangle(-172.4,-410.8,367.5,734.3), new cjs.Rectangle(-172.4,-410.4,367.7,734.3), new cjs.Rectangle(-172.5,-410,368.1,734.3), new cjs.Rectangle(-172.5,-409.6,368.4,734.3), new cjs.Rectangle(-172.6,-409.2,368.7,734.3), new cjs.Rectangle(-172.6,-408.8,369,734.3), new cjs.Rectangle(-172.6,-408.4,369.2,734.3), new cjs.Rectangle(-172.7,-408,369.7,734.3), new cjs.Rectangle(-172.8,-407.6,370,734.3), new cjs.Rectangle(-172.8,-407.2,370.1,734.3), new cjs.Rectangle(-172.8,-406.8,370.5,734.3), new cjs.Rectangle(-172.9,-406.4,370.8,734.3), new cjs.Rectangle(-172.9,-406,371.1,734.3), new cjs.Rectangle(-173,-405.6,371.6,734.3), new cjs.Rectangle(-174.1,-405.2,372.8,734.3), new cjs.Rectangle(-174.1,-404.8,373,734.3), new cjs.Rectangle(-174.2,-404.4,373.5,734.3), new cjs.Rectangle(-174.3,-404,373.8,734.3), new cjs.Rectangle(-174.3,-403.6,374.2,734.3), new cjs.Rectangle(-174.3,-403.2,374.3,734.3), new cjs.Rectangle(-174.3,-402.8,374.6,734.3), new cjs.Rectangle(-174.5,-402.4,375.1,734.3), new cjs.Rectangle(-174.5,-402,375.3,734.3), new cjs.Rectangle(-174.5,-401.6,375.6,734.3), new cjs.Rectangle(-175.5,-401.3,376.7,734.3)];


(lib.hero_2_for_mask_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curl
	this.curl = new lib.hero2_dec_all_mc();
	this.curl.setTransform(-3.6,-119.6);

	this.timeline.addTween(cjs.Tween.get(this.curl).to({y:-115.6},19).to({y:-119.6},20).wait(61));

	// ornament
	this.ornament = new lib.hero2_ornament_all_mc();
	this.ornament.setTransform(-3,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.ornament).to({y:-22.5},19).to({y:-26.5},20).wait(61));

	// eyeshadow
	this.eyeshadow = new lib.hero2_eyeshadow_all_mc();
	this.eyeshadow.setTransform(-3,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow).to({y:-22.5},19).to({y:-26.5},20).wait(61));

	// pattern
	this.pattern = new lib.hero2_uzor_all_mc();
	this.pattern.setTransform(-3,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.pattern).to({y:-22.5},19).to({y:-26.5},20).wait(61));

	// base
	this.base = new lib.hero2_base_all_mc();
	this.base.setTransform(-3,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.base).to({y:-22.5},19).to({y:-26.5},20).wait(61));

	// plume
	this.plume = new lib.hero2_feathers_all_mc();
	this.plume.setTransform(-8.6,-239);

	this.timeline.addTween(cjs.Tween.get(this.plume).to({y:-235},19).to({y:-239},20).wait(61));

	// earrings
	this.earrings = new lib.hero2_earrings_mc();
	this.earrings.setTransform(-8.3,143.4);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({y:147.4},19).to({y:143.4},20).to({skewX:1.3,x:-10.3},20).to({scaleY:1,skewX:-3.9,x:-4.3},20).to({scaleY:1,skewX:0,x:-8.3},20).wait(1));

	// body
	this.instance = new lib.hero2_fringe0_mc();
	this.instance.setTransform(0,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-56.9},19).to({y:-60.9},20).wait(61));

	// body
	this.instance_1 = new lib.hero2_head0_mc();
	this.instance_1.setTransform(-9,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-31.5},19).to({y:-35.5},20).wait(61));

	// beads
	this.beads = new lib.hero2_necklace_all_mc();
	this.beads.setTransform(-4.9,246.1);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(100));

	// body
	this.instance_2 = new lib.hero2_body0_mc();
	this.instance_2.setTransform(-4.8,279.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315.5,-398,631,784.4);
p.frameBounds = [rect, new cjs.Rectangle(-315.5,-397.8,631,784.2), new cjs.Rectangle(-315.5,-397.6,631,784), new cjs.Rectangle(-315.5,-397.3,631,783.8), new cjs.Rectangle(-315.5,-397.1,631,783.6), new cjs.Rectangle(-315.5,-396.9,631,783.3), new cjs.Rectangle(-315.5,-396.7,631,783.2), new cjs.Rectangle(-315.5,-396.5,631,783), new cjs.Rectangle(-315.5,-396.3,631,782.7), new cjs.Rectangle(-315.5,-396.1,631,782.5), new cjs.Rectangle(-315.5,-395.9,631,782.3), new cjs.Rectangle(-315.5,-395.7,631,782.1), new cjs.Rectangle(-315.5,-395.4,631,781.8), new cjs.Rectangle(-315.5,-395.2,631,781.7), new cjs.Rectangle(-315.5,-395,631,781.5), new cjs.Rectangle(-315.5,-394.8,631,781.3), new cjs.Rectangle(-315.5,-394.6,631,781.1), new cjs.Rectangle(-315.5,-394.4,631,780.8), new cjs.Rectangle(-315.5,-394.2,631,780.6), new cjs.Rectangle(-315.5,-394,631,780.4), new cjs.Rectangle(-315.5,-394.2,631,780.6), new cjs.Rectangle(-315.5,-394.4,631,780.8), new cjs.Rectangle(-315.5,-394.6,631,781), new cjs.Rectangle(-315.5,-394.8,631,781.2), new cjs.Rectangle(-315.5,-395,631,781.4), new cjs.Rectangle(-315.5,-395.2,631,781.6), new cjs.Rectangle(-315.5,-395.4,631,781.8), new cjs.Rectangle(-315.5,-395.6,631,782), new cjs.Rectangle(-315.5,-395.8,631,782.2), new cjs.Rectangle(-315.5,-396,631,782.4), new cjs.Rectangle(-315.5,-396.2,631,782.6), new cjs.Rectangle(-315.5,-396.4,631,782.8), new cjs.Rectangle(-315.5,-396.6,631,783), new cjs.Rectangle(-315.5,-396.8,631,783.2), new cjs.Rectangle(-315.5,-397,631,783.4), new cjs.Rectangle(-315.5,-397.2,631,783.6), new cjs.Rectangle(-315.5,-397.4,631,783.8), new cjs.Rectangle(-315.5,-397.6,631,784), new cjs.Rectangle(-315.5,-397.8,631,784.2), rect=new cjs.Rectangle(-315.5,-398,631,784.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero_2_for_jewelry_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earrings
	this.earrings = new lib.hero2_earrings_mc();
	this.earrings.setTransform(-8.3,143.4);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({y:147.4},19).to({y:143.4},20).to({skewX:1.3,x:-10.3},20).to({scaleY:1,skewX:-3.9,x:-4.3},20).to({scaleY:1,skewX:0,x:-8.3},20).wait(1));

	// body
	this.instance = new lib.hero2_fringe0_mc();
	this.instance.setTransform(0,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-56.9},19).to({y:-60.9},20).wait(61));

	// body
	this.instance_1 = new lib.hero2_head0_mc();
	this.instance_1.setTransform(-9,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-31.5},19).to({y:-35.5},20).wait(61));

	// beads
	this.beads = new lib.hero2_necklace_all_mc();
	this.beads.setTransform(-4.9,246.1);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(100));

	// body
	this.instance_2 = new lib.hero2_body0_mc();
	this.instance_2.setTransform(-4.8,279.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315.5,-386.4,631,772.8);
p.frameBounds = [rect, new cjs.Rectangle(-315.5,-386.2,631,772.6), new cjs.Rectangle(-315.5,-386,631,772.4), new cjs.Rectangle(-315.5,-385.7,631,772.2), new cjs.Rectangle(-315.5,-385.5,631,772), new cjs.Rectangle(-315.5,-385.3,631,771.8), new cjs.Rectangle(-315.5,-385.1,631,771.6), new cjs.Rectangle(-315.5,-384.9,631,771.3), new cjs.Rectangle(-315.5,-384.7,631,771.1), new cjs.Rectangle(-315.5,-384.5,631,770.9), new cjs.Rectangle(-315.5,-384.3,631,770.7), new cjs.Rectangle(-315.5,-384.1,631,770.5), new cjs.Rectangle(-315.5,-383.8,631,770.3), new cjs.Rectangle(-315.5,-383.6,631,770.1), new cjs.Rectangle(-315.5,-383.4,631,769.8), new cjs.Rectangle(-315.5,-383.2,631,769.7), new cjs.Rectangle(-315.5,-383,631,769.5), new cjs.Rectangle(-315.5,-382.8,631,769.2), new cjs.Rectangle(-315.5,-382.6,631,769), new cjs.Rectangle(-315.5,-382.4,631,768.8), new cjs.Rectangle(-315.5,-382.6,631,769), new cjs.Rectangle(-315.5,-382.8,631,769.2), new cjs.Rectangle(-315.5,-383,631,769.4), new cjs.Rectangle(-315.5,-383.2,631,769.6), new cjs.Rectangle(-315.5,-383.4,631,769.8), new cjs.Rectangle(-315.5,-383.6,631,770), new cjs.Rectangle(-315.5,-383.8,631,770.2), new cjs.Rectangle(-315.5,-384,631,770.4), new cjs.Rectangle(-315.5,-384.2,631,770.6), new cjs.Rectangle(-315.5,-384.4,631,770.8), new cjs.Rectangle(-315.5,-384.6,631,771), new cjs.Rectangle(-315.5,-384.8,631,771.2), new cjs.Rectangle(-315.5,-385,631,771.4), new cjs.Rectangle(-315.5,-385.2,631,771.6), new cjs.Rectangle(-315.5,-385.4,631,771.8), new cjs.Rectangle(-315.5,-385.6,631,772), new cjs.Rectangle(-315.5,-385.8,631,772.2), new cjs.Rectangle(-315.5,-386,631,772.4), new cjs.Rectangle(-315.5,-386.2,631,772.6), rect=new cjs.Rectangle(-315.5,-386.4,631,772.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_fan_all_2_mc();
	this.instance.setTransform(84.5,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,y:-173.5},39).to({rotation:0,y:-155.5},40).wait(1));

	// animation
	this.instance_1 = new lib.hero1_dec_all_2_mc();
	this.instance_1.setTransform(-3.9,-344.6,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-362.6},39).to({y:-344.6},40).wait(1));

	// animation
	this.instance_2 = new lib.hero1_ornament_all_2_mc();
	this.instance_2.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// animation
	this.instance_3 = new lib.hero1_eyeshadow_all_2_mc();
	this.instance_3.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// animation
	this.instance_4 = new lib.hero1_uzor_all_2_mc();
	this.instance_4.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// animation
	this.instance_5 = new lib.hero1_base_all_2_mc();
	this.instance_5.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// animation
	this.instance_6 = new lib.hero1_feathers_all_2_mc();
	this.instance_6.setTransform(-2.5,-385.9,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-403.9},39).to({y:-385.9},40).wait(1));

	// animation
	this.instance_7 = new lib.hero1_earrings_all_2_mc();
	this.instance_7.setTransform(-4.8,-269.1,0.55,0.553,0,6,0,0.1,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,scaleY:0.55,skewX:-1.8,x:-4.9,y:-287.1},39).to({regX:0.1,scaleY:0.55,skewX:6,x:-4.8,y:-269.1},40).wait(1));

	// animation
	this.instance_8 = new lib.hero1_fringe_all_2_mc();
	this.instance_8.setTransform(-12.4,-382,1,1,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:-0.6,x:-10.2,y:-400},39).to({skewX:0.4,x:-12.4,y:-382},40).wait(1));

	// animation
	this.instance_9 = new lib.hero1_head1_mc();
	this.instance_9.setTransform(-7.5,-318);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-336},39).to({y:-318},40).wait(1));

	// animation
	this.instance_10 = new lib.hero1_dress_all_2_mc();
	this.instance_10.setTransform(-21.5,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-4.1},39).to({y:13.9},40).wait(1));

	// animation
	this.instance_11 = new lib.hero1_body1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:-18},39).to({y:0},40).wait(1));

	// animation
	this.instance_12 = new lib.hero1_hair_all_2_mc();
	this.instance_12.setTransform(-12.4,-382,1,1,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:-0.6,x:-10.2,y:-400},39).to({skewX:0.4,x:-12.4,y:-382},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.4,-500.5,428,714.1);
p.frameBounds = [rect, new cjs.Rectangle(-216.6,-501,427,714.1), new cjs.Rectangle(-216.6,-501.5,426.9,714.1), new cjs.Rectangle(-216.5,-502,426.9,714.1), new cjs.Rectangle(-216.4,-502.4,426.9,714.1), new cjs.Rectangle(-216.3,-502.9,426.8,714.1), new cjs.Rectangle(-216.2,-503.3,426.8,714.1), new cjs.Rectangle(-216.1,-503.8,426.7,714.1), new cjs.Rectangle(-215.1,-504.3,425.4,714.1), new cjs.Rectangle(-215,-504.7,425.4,714.1), new cjs.Rectangle(-215,-505.2,425.3,714.1), new cjs.Rectangle(-214.9,-505.7,425.3,714.1), new cjs.Rectangle(-214.8,-506.1,425.2,714.1), new cjs.Rectangle(-214.8,-506.6,425.2,714.1), new cjs.Rectangle(-214.7,-507,425.2,714.1), new cjs.Rectangle(-214.6,-507.4,425.1,714.1), new cjs.Rectangle(-214.5,-507.9,425.1,714.1), new cjs.Rectangle(-214.4,-508.4,425,714.1), new cjs.Rectangle(-214.3,-508.8,425.1,714.1), new cjs.Rectangle(-214.3,-509.3,425.1,714.1), new cjs.Rectangle(-214.3,-509.8,425.2,714.1), new cjs.Rectangle(-214.3,-510.3,425.2,714.1), new cjs.Rectangle(-214.2,-510.7,425.3,714.1), new cjs.Rectangle(-214.2,-511.2,425.3,714.1), new cjs.Rectangle(-214.2,-511.7,425.4,714.1), new cjs.Rectangle(-214.1,-512.1,425.4,714.1), new cjs.Rectangle(-214,-512.6,425.4,714.1), new cjs.Rectangle(-214.3,-513,426.7,714.1), new cjs.Rectangle(-214.3,-513.5,426.8,714.1), new cjs.Rectangle(-214.3,-514,426.8,714.1), new cjs.Rectangle(-214.3,-514.4,426.9,714.1), new cjs.Rectangle(-214.2,-514.9,426.9,714.1), new cjs.Rectangle(-214.2,-515.3,427,714.1), new cjs.Rectangle(-214.2,-515.8,427,714.1), new cjs.Rectangle(-214.1,-516.3,427.1,714.1), new cjs.Rectangle(-214,-516.7,427.1,714.1), new cjs.Rectangle(-214.4,-517.2,428.4,714.1), new cjs.Rectangle(-214.4,-517.7,428.4,714.1), new cjs.Rectangle(-214.3,-518.1,428.5,714.1), new cjs.Rectangle(-214.5,-518.5,429,714.1), new cjs.Rectangle(-214.3,-518.1,428.5,714.1), new cjs.Rectangle(-214.4,-517.7,428.4,714.1), new cjs.Rectangle(-214.4,-517.2,428.4,714.1), new cjs.Rectangle(-214,-516.8,427.1,714.1), new cjs.Rectangle(-214.1,-516.3,427.1,714.1), new cjs.Rectangle(-214.1,-515.9,427,714.1), new cjs.Rectangle(-214.2,-515.4,427,714.1), new cjs.Rectangle(-214.2,-515,426.9,714.1), new cjs.Rectangle(-214.3,-514.5,426.9,714.1), new cjs.Rectangle(-214.3,-514.1,426.8,714.1), new cjs.Rectangle(-214.3,-513.6,426.8,714.1), new cjs.Rectangle(-214.3,-513.2,426.8,714.1), new cjs.Rectangle(-214.4,-512.7,426.7,714.1), new cjs.Rectangle(-214,-512.3,425.4,714.1), new cjs.Rectangle(-214.1,-511.8,425.4,714.1), new cjs.Rectangle(-214.1,-511.4,425.3,714.1), new cjs.Rectangle(-214.1,-510.9,425.3,714.1), new cjs.Rectangle(-214.2,-510.5,425.2,714.1), new cjs.Rectangle(-214.3,-510,425.2,714.1), new cjs.Rectangle(-214.3,-509.6,425.2,714.1), new cjs.Rectangle(-214.4,-509.1,425.1,714.1), new cjs.Rectangle(-214.4,-508.6,425.1,714.1), new cjs.Rectangle(-214.4,-508.2,425,714.1), new cjs.Rectangle(-214.5,-507.7,425.1,714.1), new cjs.Rectangle(-214.6,-507.3,425.1,714.1), new cjs.Rectangle(-214.7,-506.9,425.2,714.1), new cjs.Rectangle(-214.7,-506.4,425.2,714.1), new cjs.Rectangle(-214.8,-506,425.2,714.1), new cjs.Rectangle(-214.9,-505.5,425.3,714.1), new cjs.Rectangle(-215,-505.1,425.3,714.1), new cjs.Rectangle(-215.1,-504.6,425.4,714.1), new cjs.Rectangle(-215.2,-504.2,425.4,714.1), new cjs.Rectangle(-216.1,-503.7,426.7,714.1), new cjs.Rectangle(-216.3,-503.3,426.8,714.1), new cjs.Rectangle(-216.3,-502.8,426.8,714.1), new cjs.Rectangle(-216.4,-502.4,426.9,714.1), new cjs.Rectangle(-216.5,-501.9,426.9,714.1), new cjs.Rectangle(-216.6,-501.5,426.9,714.1), new cjs.Rectangle(-216.6,-501,427,714.1), new cjs.Rectangle(-217.4,-500.5,428,714.1)];


(lib.hero_1_for_mask_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curl
	this.curl = new lib.hero1_dec_all_mc();
	this.curl.setTransform(-3.6,-105.6);

	this.timeline.addTween(cjs.Tween.get(this.curl).to({y:-121.6},39).to({y:-105.6},40).wait(1));

	// ornament
	this.ornament = new lib.hero1_ornament_all_mc();
	this.ornament.setTransform(-4.4,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.ornament).to({y:-39.9},39).to({y:-23.9},40).wait(1));

	// eyeshadow
	this.eyeshadow = new lib.hero1_eyeshadow_all_mc();
	this.eyeshadow.setTransform(-4.4,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow).to({y:-39.9},39).to({y:-23.9},40).wait(1));

	// pattern
	this.pattern = new lib.hero1_uzor_all_mc();
	this.pattern.setTransform(-4.4,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.pattern).to({y:-39.9},39).to({y:-23.9},40).wait(1));

	// base
	this.base = new lib.hero1_base_all_mc();
	this.base.setTransform(-4.4,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.base).to({y:-39.9},39).to({y:-23.9},40).wait(1));

	// plume
	this.plume = new lib.hero1_feathers_all_mc();
	this.plume.setTransform(-1,-180.6);

	this.timeline.addTween(cjs.Tween.get(this.plume).to({y:-196.6},39).to({y:-180.6},40).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-5.4,31.5,1,1.001,0,2.2,0,0,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({skewX:-2.9,y:15.5},39).to({skewX:2.2,y:31.5},40).wait(1));

	// body
	this.instance = new lib.hero1_fringe0_mc();
	this.instance.setTransform(-16.7,-171.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-187.9},39).to({y:-171.9},40).wait(1));

	// body
	this.instance_1 = new lib.hero1_head0_mc();
	this.instance_1.setTransform(-9.4,-56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-72.6},39).to({y:-56.6},40).wait(1));

	// beads
	this.beads = new lib.hero1_necklace_all_mc();
	this.beads.setTransform(-0.4,217);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:201},39).to({y:217},40).wait(1));

	// body
	this.instance_2 = new lib.hero1_body0_mc();
	this.instance_2.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-16},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-378.2,-384,756.5,768);
p.frameBounds = [rect, new cjs.Rectangle(-378.2,-384.4,756.5,768), new cjs.Rectangle(-378.2,-384.8,756.5,768), new cjs.Rectangle(-378.2,-385.2,756.5,768), new cjs.Rectangle(-378.2,-385.6,756.5,768), new cjs.Rectangle(-378.2,-386,756.5,768), new cjs.Rectangle(-378.2,-386.4,756.5,768), new cjs.Rectangle(-378.2,-386.8,756.5,768), new cjs.Rectangle(-378.2,-387.3,756.5,768), new cjs.Rectangle(-378.2,-387.7,756.5,768), new cjs.Rectangle(-378.2,-388.1,756.5,768), new cjs.Rectangle(-378.2,-388.5,756.5,768), new cjs.Rectangle(-378.2,-388.9,756.5,768), new cjs.Rectangle(-378.2,-389.3,756.5,768), new cjs.Rectangle(-378.2,-389.7,756.5,768), new cjs.Rectangle(-378.2,-390.1,756.5,768), new cjs.Rectangle(-378.2,-390.5,756.5,768), new cjs.Rectangle(-378.2,-390.9,756.5,768), new cjs.Rectangle(-378.2,-391.4,756.5,768), new cjs.Rectangle(-378.2,-391.8,756.5,768), new cjs.Rectangle(-378.2,-392.2,756.5,768), new cjs.Rectangle(-378.2,-392.6,756.5,768), new cjs.Rectangle(-378.2,-393,756.5,768), new cjs.Rectangle(-378.2,-393.4,756.5,768), new cjs.Rectangle(-378.2,-393.8,756.5,768), new cjs.Rectangle(-378.2,-394.2,756.5,768), new cjs.Rectangle(-378.2,-394.6,756.5,768), new cjs.Rectangle(-378.2,-395.1,756.5,768), new cjs.Rectangle(-378.2,-395.5,756.5,768), new cjs.Rectangle(-378.2,-395.9,756.5,768), new cjs.Rectangle(-378.2,-396.3,756.5,768), new cjs.Rectangle(-378.2,-396.7,756.5,768), new cjs.Rectangle(-378.2,-397.1,756.5,768), new cjs.Rectangle(-378.2,-397.5,756.5,768), new cjs.Rectangle(-378.2,-397.9,756.5,768), new cjs.Rectangle(-378.2,-398.3,756.5,768), new cjs.Rectangle(-378.2,-398.7,756.5,768), new cjs.Rectangle(-378.2,-399.2,756.5,768), new cjs.Rectangle(-378.2,-399.6,756.5,768), new cjs.Rectangle(-378.2,-400,756.5,768), new cjs.Rectangle(-378.2,-399.6,756.5,768), new cjs.Rectangle(-378.2,-399.2,756.5,768), new cjs.Rectangle(-378.2,-398.8,756.5,768), new cjs.Rectangle(-378.2,-398.4,756.5,768), new cjs.Rectangle(-378.2,-398,756.5,768), new cjs.Rectangle(-378.2,-397.6,756.5,768), new cjs.Rectangle(-378.2,-397.2,756.5,768), new cjs.Rectangle(-378.2,-396.8,756.5,768), new cjs.Rectangle(-378.2,-396.4,756.5,768), new cjs.Rectangle(-378.2,-396,756.5,768), new cjs.Rectangle(-378.2,-395.6,756.5,768), new cjs.Rectangle(-378.2,-395.2,756.5,768), new cjs.Rectangle(-378.2,-394.8,756.5,768), new cjs.Rectangle(-378.2,-394.4,756.5,768), new cjs.Rectangle(-378.2,-394,756.5,768), new cjs.Rectangle(-378.2,-393.6,756.5,768), new cjs.Rectangle(-378.2,-393.2,756.5,768), new cjs.Rectangle(-378.2,-392.8,756.5,768), new cjs.Rectangle(-378.2,-392.4,756.5,768), new cjs.Rectangle(-378.2,-392,756.5,768), new cjs.Rectangle(-378.2,-391.6,756.5,768), new cjs.Rectangle(-378.2,-391.2,756.5,768), new cjs.Rectangle(-378.2,-390.8,756.5,768), new cjs.Rectangle(-378.2,-390.4,756.5,768), new cjs.Rectangle(-378.2,-390,756.5,768), new cjs.Rectangle(-378.2,-389.6,756.5,768), new cjs.Rectangle(-378.2,-389.2,756.5,768), new cjs.Rectangle(-378.2,-388.8,756.5,768), new cjs.Rectangle(-378.2,-388.4,756.5,768), new cjs.Rectangle(-378.2,-388,756.5,768), new cjs.Rectangle(-378.2,-387.6,756.5,768), new cjs.Rectangle(-378.2,-387.2,756.5,768), new cjs.Rectangle(-378.2,-386.8,756.5,768), new cjs.Rectangle(-378.2,-386.4,756.5,768), new cjs.Rectangle(-378.2,-386,756.5,768), new cjs.Rectangle(-378.2,-385.6,756.5,768), new cjs.Rectangle(-378.2,-385.2,756.5,768), new cjs.Rectangle(-378.2,-384.8,756.5,768), new cjs.Rectangle(-378.2,-384.4,756.5,768), new cjs.Rectangle(-378.2,-384,756.5,768)];


(lib.hero_1_for_jewelry_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-5.4,31.5,1,1.001,0,2.2,0,0,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({skewX:-2.9,y:15.5},39).to({skewX:2.2,y:31.5},40).wait(1));

	// body
	this.instance = new lib.hero1_fringe0_mc();
	this.instance.setTransform(-16.7,-171.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-187.9},39).to({y:-171.9},40).wait(1));

	// body
	this.instance_1 = new lib.hero1_head0_mc();
	this.instance_1.setTransform(-9.4,-56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-72.6},39).to({y:-56.6},40).wait(1));

	// beads
	this.beads = new lib.hero1_necklace_all_mc();
	this.beads.setTransform(-0.4,217);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:201},39).to({y:217},40).wait(1));

	// body
	this.instance_2 = new lib.hero1_body0_mc();
	this.instance_2.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-16},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-378.2,-384,756.5,768);
p.frameBounds = [rect, new cjs.Rectangle(-378.2,-384.4,756.5,768), new cjs.Rectangle(-378.2,-384.8,756.5,768), new cjs.Rectangle(-378.2,-385.2,756.5,768), new cjs.Rectangle(-378.2,-385.6,756.5,768), new cjs.Rectangle(-378.2,-386,756.5,768), new cjs.Rectangle(-378.2,-386.4,756.5,768), new cjs.Rectangle(-378.2,-386.8,756.5,768), new cjs.Rectangle(-378.2,-387.3,756.5,768), new cjs.Rectangle(-378.2,-387.7,756.5,768), new cjs.Rectangle(-378.2,-388.1,756.5,768), new cjs.Rectangle(-378.2,-388.5,756.5,768), new cjs.Rectangle(-378.2,-388.9,756.5,768), new cjs.Rectangle(-378.2,-389.3,756.5,768), new cjs.Rectangle(-378.2,-389.7,756.5,768), new cjs.Rectangle(-378.2,-390.1,756.5,768), new cjs.Rectangle(-378.2,-390.5,756.5,768), new cjs.Rectangle(-378.2,-390.9,756.5,768), new cjs.Rectangle(-378.2,-391.4,756.5,768), new cjs.Rectangle(-378.2,-391.8,756.5,768), new cjs.Rectangle(-378.2,-392.2,756.5,768), new cjs.Rectangle(-378.2,-392.6,756.5,768), new cjs.Rectangle(-378.2,-393,756.5,768), new cjs.Rectangle(-378.2,-393.4,756.5,768), new cjs.Rectangle(-378.2,-393.8,756.5,768), new cjs.Rectangle(-378.2,-394.2,756.5,768), new cjs.Rectangle(-378.2,-394.6,756.5,768), new cjs.Rectangle(-378.2,-395.1,756.5,768), new cjs.Rectangle(-378.2,-395.5,756.5,768), new cjs.Rectangle(-378.2,-395.9,756.5,768), new cjs.Rectangle(-378.2,-396.3,756.5,768), new cjs.Rectangle(-378.2,-396.7,756.5,768), new cjs.Rectangle(-378.2,-397.1,756.5,768), new cjs.Rectangle(-378.2,-397.5,756.5,768), new cjs.Rectangle(-378.2,-397.9,756.5,768), new cjs.Rectangle(-378.2,-398.3,756.5,768), new cjs.Rectangle(-378.2,-398.7,756.5,768), new cjs.Rectangle(-378.2,-399.2,756.5,768), new cjs.Rectangle(-378.2,-399.6,756.5,768), new cjs.Rectangle(-378.2,-400,756.5,768), new cjs.Rectangle(-378.2,-399.6,756.5,768), new cjs.Rectangle(-378.2,-399.2,756.5,768), new cjs.Rectangle(-378.2,-398.8,756.5,768), new cjs.Rectangle(-378.2,-398.4,756.5,768), new cjs.Rectangle(-378.2,-398,756.5,768), new cjs.Rectangle(-378.2,-397.6,756.5,768), new cjs.Rectangle(-378.2,-397.2,756.5,768), new cjs.Rectangle(-378.2,-396.8,756.5,768), new cjs.Rectangle(-378.2,-396.4,756.5,768), new cjs.Rectangle(-378.2,-396,756.5,768), new cjs.Rectangle(-378.2,-395.6,756.5,768), new cjs.Rectangle(-378.2,-395.2,756.5,768), new cjs.Rectangle(-378.2,-394.8,756.5,768), new cjs.Rectangle(-378.2,-394.4,756.5,768), new cjs.Rectangle(-378.2,-394,756.5,768), new cjs.Rectangle(-378.2,-393.6,756.5,768), new cjs.Rectangle(-378.2,-393.2,756.5,768), new cjs.Rectangle(-378.2,-392.8,756.5,768), new cjs.Rectangle(-378.2,-392.4,756.5,768), new cjs.Rectangle(-378.2,-392,756.5,768), new cjs.Rectangle(-378.2,-391.6,756.5,768), new cjs.Rectangle(-378.2,-391.2,756.5,768), new cjs.Rectangle(-378.2,-390.8,756.5,768), new cjs.Rectangle(-378.2,-390.4,756.5,768), new cjs.Rectangle(-378.2,-390,756.5,768), new cjs.Rectangle(-378.2,-389.6,756.5,768), new cjs.Rectangle(-378.2,-389.2,756.5,768), new cjs.Rectangle(-378.2,-388.8,756.5,768), new cjs.Rectangle(-378.2,-388.4,756.5,768), new cjs.Rectangle(-378.2,-388,756.5,768), new cjs.Rectangle(-378.2,-387.6,756.5,768), new cjs.Rectangle(-378.2,-387.2,756.5,768), new cjs.Rectangle(-378.2,-386.8,756.5,768), new cjs.Rectangle(-378.2,-386.4,756.5,768), new cjs.Rectangle(-378.2,-386,756.5,768), new cjs.Rectangle(-378.2,-385.6,756.5,768), new cjs.Rectangle(-378.2,-385.2,756.5,768), new cjs.Rectangle(-378.2,-384.8,756.5,768), new cjs.Rectangle(-378.2,-384.4,756.5,768), new cjs.Rectangle(-378.2,-384,756.5,768)];


(lib.hero_1_for_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fan
	this.fan = new lib.hero1_fan_all_mc();
	this.fan.setTransform(84.5,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.fan).to({rotation:15,y:-173.5},39).to({rotation:0,y:-155.5},40).wait(1));

	// curl
	this.curl = new lib.hero1_dec_all_mc();
	this.curl.setTransform(-3.9,-344.6,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.curl).to({y:-362.6},39).to({y:-344.6},40).wait(1));

	// ornament
	this.ornament = new lib.hero1_ornament_all_mc();
	this.ornament.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.ornament).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// eyeshadow
	this.eyeshadow = new lib.hero1_eyeshadow_all_mc();
	this.eyeshadow.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// pattern
	this.pattern = new lib.hero1_uzor_all_mc();
	this.pattern.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.pattern).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// base
	this.base = new lib.hero1_base_all_mc();
	this.base.setTransform(-4.3,-299.7,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.base).to({y:-317.7},39).to({y:-299.7},40).wait(1));

	// plume
	this.plume = new lib.hero1_feathers_all_mc();
	this.plume.setTransform(-2.5,-385.9,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.plume).to({y:-403.9},39).to({y:-385.9},40).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-4.8,-269.1,0.55,0.553,0,6,0,0.1,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({regX:0,scaleY:0.55,skewX:-1.8,x:-4.9,y:-287.1},39).to({regX:0.1,scaleY:0.55,skewX:6,x:-4.8,y:-269.1},40).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-12.4,-382,1,1,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({skewX:-0.6,x:-10.2,y:-400},39).to({skewX:0.4,x:-12.4,y:-382},40).wait(1));

	// body
	this.instance = new lib.hero1_head1_mc();
	this.instance.setTransform(-7.5,-318);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-336},39).to({y:-318},40).wait(1));

	// beads
	this.beads = new lib.hero1_necklace_all_mc();
	this.beads.setTransform(-2.1,-167.1,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:-185.1},39).to({y:-167.1},40).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(-21.5,13.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:-4.1},39).to({y:13.9},40).wait(1));

	// body
	this.instance_1 = new lib.hero1_body1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-18},39).to({y:0},40).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-12.4,-382,1,1,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({skewX:-0.6,x:-10.2,y:-400},39).to({skewX:0.4,x:-12.4,y:-382},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.4,-500.5,428,714.1);
p.frameBounds = [rect, new cjs.Rectangle(-216.6,-501,427,714.1), new cjs.Rectangle(-216.6,-501.5,426.9,714.1), new cjs.Rectangle(-216.5,-502,426.9,714.1), new cjs.Rectangle(-216.4,-502.4,426.9,714.1), new cjs.Rectangle(-216.3,-502.9,426.8,714.1), new cjs.Rectangle(-216.2,-503.3,426.8,714.1), new cjs.Rectangle(-216.1,-503.8,426.7,714.1), new cjs.Rectangle(-215.1,-504.3,425.4,714.1), new cjs.Rectangle(-215,-504.7,425.4,714.1), new cjs.Rectangle(-215,-505.2,425.3,714.1), new cjs.Rectangle(-214.9,-505.7,425.3,714.1), new cjs.Rectangle(-214.8,-506.1,425.2,714.1), new cjs.Rectangle(-214.8,-506.6,425.2,714.1), new cjs.Rectangle(-214.7,-507,425.2,714.1), new cjs.Rectangle(-214.6,-507.4,425.1,714.1), new cjs.Rectangle(-214.5,-507.9,425.1,714.1), new cjs.Rectangle(-214.4,-508.4,425,714.1), new cjs.Rectangle(-214.3,-508.8,425.1,714.1), new cjs.Rectangle(-214.3,-509.3,425.1,714.1), new cjs.Rectangle(-214.3,-509.8,425.2,714.1), new cjs.Rectangle(-214.3,-510.3,425.2,714.1), new cjs.Rectangle(-214.2,-510.7,425.3,714.1), new cjs.Rectangle(-214.2,-511.2,425.3,714.1), new cjs.Rectangle(-214.2,-511.7,425.4,714.1), new cjs.Rectangle(-214.1,-512.1,425.4,714.1), new cjs.Rectangle(-214,-512.6,425.4,714.1), new cjs.Rectangle(-214.3,-513,426.7,714.1), new cjs.Rectangle(-214.3,-513.5,426.8,714.1), new cjs.Rectangle(-214.3,-514,426.8,714.1), new cjs.Rectangle(-214.3,-514.4,426.9,714.1), new cjs.Rectangle(-214.2,-514.9,426.9,714.1), new cjs.Rectangle(-214.2,-515.3,427,714.1), new cjs.Rectangle(-214.2,-515.8,427,714.1), new cjs.Rectangle(-214.1,-516.3,427.1,714.1), new cjs.Rectangle(-214,-516.7,427.1,714.1), new cjs.Rectangle(-214.4,-517.2,428.4,714.1), new cjs.Rectangle(-214.4,-517.7,428.4,714.1), new cjs.Rectangle(-214.3,-518.1,428.5,714.1), new cjs.Rectangle(-214.5,-518.5,429,714.1), new cjs.Rectangle(-214.3,-518.1,428.5,714.1), new cjs.Rectangle(-214.4,-517.7,428.4,714.1), new cjs.Rectangle(-214.4,-517.2,428.4,714.1), new cjs.Rectangle(-214,-516.8,427.1,714.1), new cjs.Rectangle(-214.1,-516.3,427.1,714.1), new cjs.Rectangle(-214.1,-515.9,427,714.1), new cjs.Rectangle(-214.2,-515.4,427,714.1), new cjs.Rectangle(-214.2,-515,426.9,714.1), new cjs.Rectangle(-214.3,-514.5,426.9,714.1), new cjs.Rectangle(-214.3,-514.1,426.8,714.1), new cjs.Rectangle(-214.3,-513.6,426.8,714.1), new cjs.Rectangle(-214.3,-513.2,426.8,714.1), new cjs.Rectangle(-214.4,-512.7,426.7,714.1), new cjs.Rectangle(-214,-512.3,425.4,714.1), new cjs.Rectangle(-214.1,-511.8,425.4,714.1), new cjs.Rectangle(-214.1,-511.4,425.3,714.1), new cjs.Rectangle(-214.1,-510.9,425.3,714.1), new cjs.Rectangle(-214.2,-510.5,425.2,714.1), new cjs.Rectangle(-214.3,-510,425.2,714.1), new cjs.Rectangle(-214.3,-509.6,425.2,714.1), new cjs.Rectangle(-214.4,-509.1,425.1,714.1), new cjs.Rectangle(-214.4,-508.6,425.1,714.1), new cjs.Rectangle(-214.4,-508.2,425,714.1), new cjs.Rectangle(-214.5,-507.7,425.1,714.1), new cjs.Rectangle(-214.6,-507.3,425.1,714.1), new cjs.Rectangle(-214.7,-506.9,425.2,714.1), new cjs.Rectangle(-214.7,-506.4,425.2,714.1), new cjs.Rectangle(-214.8,-506,425.2,714.1), new cjs.Rectangle(-214.9,-505.5,425.3,714.1), new cjs.Rectangle(-215,-505.1,425.3,714.1), new cjs.Rectangle(-215.1,-504.6,425.4,714.1), new cjs.Rectangle(-215.2,-504.2,425.4,714.1), new cjs.Rectangle(-216.1,-503.7,426.7,714.1), new cjs.Rectangle(-216.3,-503.3,426.8,714.1), new cjs.Rectangle(-216.3,-502.8,426.8,714.1), new cjs.Rectangle(-216.4,-502.4,426.9,714.1), new cjs.Rectangle(-216.5,-501.9,426.9,714.1), new cjs.Rectangle(-216.6,-501.5,426.9,714.1), new cjs.Rectangle(-216.6,-501,427,714.1), new cjs.Rectangle(-217.4,-500.5,428,714.1)];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.fan_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.eyeshadow_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow9_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow9_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow8_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow8_mc();
	this.instance.setTransform(0.5,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow7_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow7_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow6_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow6_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow5_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow5_mc();
	this.instance.setTransform(0.5,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow4_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow4_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow3_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow3_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow2_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow2_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyeshadow1_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyeshadow1_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.eyeshadow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.earrings_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_mc();
	this.instance.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_mc();
	this.instance.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzOEIAA8HIPnAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-90,100,180);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress9_mc();
	this.instance.setTransform(7.6,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aik7dITZgOMAIOA3DMgyFAAUg");
	this.shape.setTransform(-46.9,167.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207.2,-9.6,321.7,354.5);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress9_mc();
	this.instance.setTransform(-9.2,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Amm77IMXAAIFzFlMAOQAx4MgznAAag");
	this.shape.setTransform(-6.2,165.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.4,-12.9,330.5,357.8);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress8_mc();
	this.instance.setTransform(7.4,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnG7xIQKgVIGcHNMACTAwnMgjlAAZg");
	this.shape.setTransform(-28.8,165.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.7,-14.1,227.9,359.9);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress8_mc();
	this.instance.setTransform(-8.4,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0xbQMAORg28IS9gGMAIVA3lg");
	this.shape.setTransform(-12.3,171.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.3,-6.8,266,356);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress7_mc();
	this.instance.setTransform(7.8,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Alc7hIVjgTMAE8A3hMgqFAAIg");
	this.shape.setTransform(-35,165.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.8,-12.3,269.6,356.3);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress7_mc();
	this.instance.setTransform(-7,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2KbsMAMTg3rITNgGMAM1A4Lg");
	this.shape.setTransform(-2.5,168.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.4,-11.7,283.9,359.7);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress6_mc();
	this.instance.setTransform(7.2,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3qbiMAS/g2+IR0gMMAKiA3Rg");
	this.shape.setTransform(-29.6,162.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.1,-14.1,303.1,353.8);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_mc();
	this.instance.setTransform(-8.4,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmL7KIQ0AAMALZA2OMgsDAAHg");
	this.shape.setTransform(-15.7,166);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.8,-7.9,282.2,347.9);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress5_mc();
	this.instance.setTransform(7.4,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AysbxMALxg3nIUvAAMAE4A3tg");
	this.shape.setTransform(-22.2,167.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.9,-10.9,239.4,356.7);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress5_mc();
	this.instance.setTransform(-8.2,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aon6sIT5AAMAI1A1SMgoNAAHg");
	this.shape.setTransform(-18.9,162);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.7,-8.9,257.5,341.9);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4_mc();
	this.instance.setTransform(7.2,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3+cEMAThg4OITgAAMAI8A4Vg");
	this.shape.setTransform(-36,164.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.6,-15.9,307.2,360.7);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress4_mc();
	this.instance.setTransform(-7.2,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1Vb2MANag3nISZgEMAK4A3rg");
	this.shape.setTransform(-6.7,165.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.3,-12.4,273.2,356.5);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_mc();
	this.instance.setTransform(7.8,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aid7BISjgNMAFOA2XMgqnAAGg");
	this.shape.setTransform(-43,165.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.4,-8.7,272.9,348.7);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3_mc();
	this.instance.setTransform(-7.8,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am67sIOxgDMAN3A3SMgrbAANg");
	this.shape.setTransform(-5.9,168.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144.9,-9.3,278.1,355.3);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2_mc();
	this.instance.setTransform(8,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnL8PITggDMAHcA4gMgngAAFg");
	this.shape.setTransform(-19.4,168.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.8,-12.4,253,362.3);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2_mc();
	this.instance.setTransform(-9.6,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5qboMASYg3JIRGgGMAP3A3Pg");
	this.shape.setTransform(-9.6,168.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.9,-8.6,328.8,353.7);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_mc();
	this.instance.setTransform(8,170.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Alg8JIUFAAMAGbA3qMgp/AApg");
	this.shape.setTransform(-29.3,170.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.7,-9.9,268.9,360.4);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1_mc();
	this.instance.setTransform(-9,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoF7uIV5gLMAJZA3nMguZAAMg");
	this.shape.setTransform(-10.3,169.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.7,-9.3,297,357.3);
p.frameBounds = [rect];


(lib.current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_hairstyle_mc();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.102},29).to({alpha:0.398},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body_current_hairstyle_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_hairstyle_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect];


(lib.curl_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec9_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec9_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec8_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec8_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec7_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec7_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec6_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec6_mc();
	this.instance.setTransform(0,1.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec5_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec5_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec4_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec4_mc();
	this.instance.setTransform(0,4.1,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec3_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec3_mc();
	this.instance.setTransform(0,1.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec2_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec2_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dec1_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dec1_mc();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJXIAAyuIfNAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.curl_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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


(lib.closet_makeup_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.pattern_0 = new lib.pattern_0_mc();
	this.pattern_0.setTransform(130,-50);

	this.eyeshadow_0 = new lib.eyeshadow_0_mc();
	this.eyeshadow_0.setTransform(130,-50);

	this.ornament_0 = new lib.ornament_0_mc();
	this.ornament_0.setTransform(130,-50);

	this.curl_0 = new lib.curl_0_mc();
	this.curl_0.setTransform(130,-50);

	this.plume_0 = new lib.plume_0_mc();
	this.plume_0.setTransform(130,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pattern_0}]},3).to({state:[{t:this.eyeshadow_0}]},3).to({state:[{t:this.ornament_0}]},3).to({state:[{t:this.curl_0}]},3).to({state:[{t:this.plume_0}]},3).wait(5));

	// options
	this.base_3 = new lib.base_3_2_mc();
	this.base_3.setTransform(0,80);

	this.base_9 = new lib.base_9_2_mc();
	this.base_9.setTransform(0,-50);

	this.base_2 = new lib.base_2_2_mc();
	this.base_2.setTransform(0,-180);

	this.base_6 = new lib.base_6_2_mc();
	this.base_6.setTransform(0,80);

	this.base_5 = new lib.base_5_2_mc();
	this.base_5.setTransform(0,-50);

	this.base_4 = new lib.base_4_2_mc();
	this.base_4.setTransform(0,-180);

	this.base_8 = new lib.base_8_2_mc();
	this.base_8.setTransform(0,80);

	this.base_1 = new lib.base_1_2_mc();
	this.base_1.setTransform(0,-50);

	this.base_7 = new lib.base_7_2_mc();
	this.base_7.setTransform(0,-180);

	this.pattern_3 = new lib.pattern_3_2_mc();
	this.pattern_3.setTransform(0,80);

	this.pattern_2 = new lib.pattern_2_2_mc();
	this.pattern_2.setTransform(0,-50);

	this.pattern_1 = new lib.pattern_1_2_mc();
	this.pattern_1.setTransform(0,-180);

	this.pattern_6 = new lib.pattern_6_2_mc();
	this.pattern_6.setTransform(0,80);

	this.pattern_5 = new lib.pattern_5_2_mc();
	this.pattern_5.setTransform(0,-50);

	this.pattern_4 = new lib.pattern_4_2_mc();
	this.pattern_4.setTransform(0,-180);

	this.pattern_9 = new lib.pattern_9_2_mc();
	this.pattern_9.setTransform(0,80);

	this.pattern_8 = new lib.pattern_8_2_mc();
	this.pattern_8.setTransform(0,-50);

	this.pattern_7 = new lib.pattern_7_2_mc();
	this.pattern_7.setTransform(0,-180);

	this.eyeshadow_3 = new lib.eyeshadow_3_2_mc();
	this.eyeshadow_3.setTransform(0,80);

	this.eyeshadow_2 = new lib.eyeshadow_2_2_mc();
	this.eyeshadow_2.setTransform(0,-50);

	this.eyeshadow_1 = new lib.eyeshadow_1_2_mc();
	this.eyeshadow_1.setTransform(0,-180);

	this.eyeshadow_6 = new lib.eyeshadow_6_2_mc();
	this.eyeshadow_6.setTransform(0,80);

	this.eyeshadow_5 = new lib.eyeshadow_5_2_mc();
	this.eyeshadow_5.setTransform(0,-50);

	this.eyeshadow_4 = new lib.eyeshadow_4_2_mc();
	this.eyeshadow_4.setTransform(0,-180);

	this.eyeshadow_9 = new lib.eyeshadow_9_2_mc();
	this.eyeshadow_9.setTransform(0,80);

	this.eyeshadow_8 = new lib.eyeshadow_8_2_mc();
	this.eyeshadow_8.setTransform(0,-50);

	this.eyeshadow_7 = new lib.eyeshadow_7_2_mc();
	this.eyeshadow_7.setTransform(0,-180);

	this.ornament_3 = new lib.ornament_3_2_mc();
	this.ornament_3.setTransform(0,80);

	this.ornament_2 = new lib.ornament_2_2_mc();
	this.ornament_2.setTransform(0,-50);

	this.ornament_1 = new lib.ornament_1_2_mc();
	this.ornament_1.setTransform(0,-180);

	this.ornament_6 = new lib.ornament_6_2_mc();
	this.ornament_6.setTransform(0,80);

	this.ornament_5 = new lib.ornament_5_2_mc();
	this.ornament_5.setTransform(0,-50);

	this.ornament_4 = new lib.ornament_4_2_mc();
	this.ornament_4.setTransform(0,-180);

	this.ornament_9 = new lib.ornament_9_2_mc();
	this.ornament_9.setTransform(0,80);

	this.ornament_8 = new lib.ornament_8_2_mc();
	this.ornament_8.setTransform(0,-50);

	this.ornament_7 = new lib.ornament_7_2_mc();
	this.ornament_7.setTransform(0,-180);

	this.curl_3 = new lib.curl_3_2_mc();
	this.curl_3.setTransform(0,80);

	this.curl_2 = new lib.curl_2_2_mc();
	this.curl_2.setTransform(0,-50);

	this.curl_1 = new lib.curl_1_2_mc();
	this.curl_1.setTransform(0,-180);

	this.curl_6 = new lib.curl_6_2_mc();
	this.curl_6.setTransform(0,80);

	this.curl_5 = new lib.curl_5_2_mc();
	this.curl_5.setTransform(0,-50);

	this.curl_4 = new lib.curl_4_2_mc();
	this.curl_4.setTransform(0,-180);

	this.curl_9 = new lib.curl_9_2_mc();
	this.curl_9.setTransform(0,80);

	this.curl_8 = new lib.curl_8_2_mc();
	this.curl_8.setTransform(0,-50);

	this.curl_7 = new lib.curl_7_2_mc();
	this.curl_7.setTransform(0,-180);

	this.plume_5 = new lib.plume_5_2_mc();
	this.plume_5.setTransform(0,40);

	this.plume_7 = new lib.plume_7_2_mc();
	this.plume_7.setTransform(0,-145);

	this.plume_6 = new lib.plume_6_2_mc();
	this.plume_6.setTransform(0,-145);

	this.plume_4 = new lib.plume_4_2_mc();
	this.plume_4.setTransform(0,40);

	this.plume_8 = new lib.plume_8_2_mc();
	this.plume_8.setTransform(0,40);

	this.plume_2 = new lib.plume_2_2_mc();
	this.plume_2.setTransform(0,-145);

	this.plume_3 = new lib.plume_3_2_mc();
	this.plume_3.setTransform(0,40);

	this.plume_9 = new lib.plume_9_2_mc();
	this.plume_9.setTransform(0,-145);

	this.plume_1 = new lib.plume_1_2_mc();
	this.plume_1.setTransform(0,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base_2},{t:this.base_9},{t:this.base_3}]}).to({state:[{t:this.base_4},{t:this.base_5},{t:this.base_6}]},1).to({state:[{t:this.base_7},{t:this.base_1},{t:this.base_8}]},1).to({state:[{t:this.pattern_1},{t:this.pattern_2},{t:this.pattern_3}]},1).to({state:[{t:this.pattern_4},{t:this.pattern_5},{t:this.pattern_6}]},1).to({state:[{t:this.pattern_7},{t:this.pattern_8},{t:this.pattern_9}]},1).to({state:[{t:this.eyeshadow_1},{t:this.eyeshadow_2},{t:this.eyeshadow_3}]},1).to({state:[{t:this.eyeshadow_4},{t:this.eyeshadow_5},{t:this.eyeshadow_6}]},1).to({state:[{t:this.eyeshadow_7},{t:this.eyeshadow_8},{t:this.eyeshadow_9}]},1).to({state:[{t:this.ornament_1},{t:this.ornament_2},{t:this.ornament_3}]},1).to({state:[{t:this.ornament_4},{t:this.ornament_5},{t:this.ornament_6}]},1).to({state:[{t:this.ornament_7},{t:this.ornament_8},{t:this.ornament_9}]},1).to({state:[{t:this.curl_1},{t:this.curl_2},{t:this.curl_3}]},1).to({state:[{t:this.curl_4},{t:this.curl_5},{t:this.curl_6}]},1).to({state:[{t:this.curl_7},{t:this.curl_8},{t:this.curl_9}]},1).to({state:[{t:this.plume_7},{t:this.plume_5}]},1).to({state:[{t:this.plume_4},{t:this.plume_6}]},1).to({state:[{t:this.plume_2},{t:this.plume_8}]},1).to({state:[{t:this.plume_9},{t:this.plume_3}]},1).to({state:[{t:this.plume_1}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_2_mc();
	this.instance.setTransform(0,130);

	this.instance_1 = new lib.wardrobe_2_2_mc();

	this.instance_2 = new lib.wardrobe_2_2_mc();
	this.instance_2.setTransform(0,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-240,300,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-157.4,-233.9,307.4,394), new cjs.Rectangle(-150,-240.9,302.2,401), new cjs.Rectangle(-150,-243.9,300,404), new cjs.Rectangle(-150,-243.9,300.3,408.2), new cjs.Rectangle(-150,-249.1,300,409.2)];


(lib.closet_makeup_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.pattern_0 = new lib.pattern_0_mc();
	this.pattern_0.setTransform(130,-50);

	this.eyeshadow_0 = new lib.eyeshadow_0_mc();
	this.eyeshadow_0.setTransform(130,-50);

	this.ornament_0 = new lib.ornament_0_mc();
	this.ornament_0.setTransform(130,-50);

	this.curl_0 = new lib.curl_0_mc();
	this.curl_0.setTransform(130,-50);

	this.plume_0 = new lib.plume_0_mc();
	this.plume_0.setTransform(130,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pattern_0}]},3).to({state:[{t:this.eyeshadow_0}]},3).to({state:[{t:this.ornament_0}]},3).to({state:[{t:this.curl_0}]},3).to({state:[{t:this.plume_0}]},3).wait(5));

	// options
	this.base_9 = new lib.base_9_1_mc();
	this.base_9.setTransform(0,-170);

	this.base_3 = new lib.base_3_1_mc();
	this.base_3.setTransform(0,90);

	this.base_2 = new lib.base_2_1_mc();
	this.base_2.setTransform(0,-40);

	this.base_6 = new lib.base_6_1_mc();
	this.base_6.setTransform(0,90);

	this.base_5 = new lib.base_5_1_mc();
	this.base_5.setTransform(0,-40);

	this.base_4 = new lib.base_4_1_mc();
	this.base_4.setTransform(0,-170);

	this.base_1 = new lib.base_1_1_mc();
	this.base_1.setTransform(0,90);

	this.base_8 = new lib.base_8_1_mc();
	this.base_8.setTransform(0,-40);

	this.base_7 = new lib.base_7_1_mc();
	this.base_7.setTransform(0,-170);

	this.pattern_3 = new lib.pattern_3_1_mc();
	this.pattern_3.setTransform(0,90);

	this.pattern_2 = new lib.pattern_2_1_mc();
	this.pattern_2.setTransform(0,-40);

	this.pattern_1 = new lib.pattern_1_1_mc();
	this.pattern_1.setTransform(0,-170);

	this.pattern_6 = new lib.pattern_6_1_mc();
	this.pattern_6.setTransform(0,90);

	this.pattern_5 = new lib.pattern_5_1_mc();
	this.pattern_5.setTransform(0,-40);

	this.pattern_4 = new lib.pattern_4_1_mc();
	this.pattern_4.setTransform(0,-170);

	this.pattern_9 = new lib.pattern_9_1_mc();
	this.pattern_9.setTransform(0,90);

	this.pattern_8 = new lib.pattern_8_1_mc();
	this.pattern_8.setTransform(0,-40);

	this.pattern_7 = new lib.pattern_7_1_mc();
	this.pattern_7.setTransform(0,-170);

	this.eyeshadow_3 = new lib.eyeshadow_3_1_mc();
	this.eyeshadow_3.setTransform(0,90);

	this.eyeshadow_2 = new lib.eyeshadow_2_1_mc();
	this.eyeshadow_2.setTransform(0,-40);

	this.eyeshadow_1 = new lib.eyeshadow_1_1_mc();
	this.eyeshadow_1.setTransform(0,-170);

	this.eyeshadow_6 = new lib.eyeshadow_6_1_mc();
	this.eyeshadow_6.setTransform(0,90);

	this.eyeshadow_5 = new lib.eyeshadow_5_1_mc();
	this.eyeshadow_5.setTransform(0,-40);

	this.eyeshadow_4 = new lib.eyeshadow_4_1_mc();
	this.eyeshadow_4.setTransform(0,-170);

	this.eyeshadow_9 = new lib.eyeshadow_9_1_mc();
	this.eyeshadow_9.setTransform(0,90);

	this.eyeshadow_8 = new lib.eyeshadow_8_1_mc();
	this.eyeshadow_8.setTransform(0,-40);

	this.eyeshadow_7 = new lib.eyeshadow_7_1_mc();
	this.eyeshadow_7.setTransform(0,-170);

	this.ornament_3 = new lib.ornament_3_1_mc();
	this.ornament_3.setTransform(0,90);

	this.ornament_2 = new lib.ornament_2_1_mc();
	this.ornament_2.setTransform(0,-40);

	this.ornament_1 = new lib.ornament_1_1_mc();
	this.ornament_1.setTransform(0,-170);

	this.ornament_6 = new lib.ornament_6_1_mc();
	this.ornament_6.setTransform(0,90);

	this.ornament_5 = new lib.ornament_5_1_mc();
	this.ornament_5.setTransform(0,-40);

	this.ornament_4 = new lib.ornament_4_1_mc();
	this.ornament_4.setTransform(0,-170);

	this.ornament_9 = new lib.ornament_9_1_mc();
	this.ornament_9.setTransform(0,90);

	this.ornament_8 = new lib.ornament_8_1_mc();
	this.ornament_8.setTransform(0,-40);

	this.ornament_7 = new lib.ornament_7_1_mc();
	this.ornament_7.setTransform(0,-170);

	this.curl_3 = new lib.curl_3_1_mc();
	this.curl_3.setTransform(0,90);

	this.curl_2 = new lib.curl_2_1_mc();
	this.curl_2.setTransform(0,-40);

	this.curl_1 = new lib.curl_1_1_mc();
	this.curl_1.setTransform(0,-170);

	this.curl_6 = new lib.curl_6_1_mc();
	this.curl_6.setTransform(0,90);

	this.curl_5 = new lib.curl_5_1_mc();
	this.curl_5.setTransform(0,-40);

	this.curl_4 = new lib.curl_4_1_mc();
	this.curl_4.setTransform(0,-173);

	this.curl_9 = new lib.curl_9_1_mc();
	this.curl_9.setTransform(0,90);

	this.curl_8 = new lib.curl_8_1_mc();
	this.curl_8.setTransform(0,-40);

	this.curl_7 = new lib.curl_7_1_mc();
	this.curl_7.setTransform(0,-170);

	this.plume_2 = new lib.plume_2_1_mc();
	this.plume_2.setTransform(0,70);

	this.plume_1 = new lib.plume_1_1_mc();
	this.plume_1.setTransform(0,-130);

	this.plume_8 = new lib.plume_8_1_mc();
	this.plume_8.setTransform(0,-140);

	this.plume_4 = new lib.plume_4_1_mc();
	this.plume_4.setTransform(3,60);

	this.plume_5 = new lib.plume_5_1_mc();
	this.plume_5.setTransform(8,50);

	this.plume_6 = new lib.plume_6_1_mc();
	this.plume_6.setTransform(0,-140);

	this.plume_3 = new lib.plume_3_1_mc();
	this.plume_3.setTransform(50,55);

	this.plume_7 = new lib.plume_7_1_mc();
	this.plume_7.setTransform(0,-140);

	this.plume_9 = new lib.plume_9_1_mc();
	this.plume_9.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base_2},{t:this.base_3},{t:this.base_9}]}).to({state:[{t:this.base_4},{t:this.base_5},{t:this.base_6}]},1).to({state:[{t:this.base_7},{t:this.base_8},{t:this.base_1}]},1).to({state:[{t:this.pattern_1},{t:this.pattern_2},{t:this.pattern_3}]},1).to({state:[{t:this.pattern_4},{t:this.pattern_5},{t:this.pattern_6}]},1).to({state:[{t:this.pattern_7},{t:this.pattern_8},{t:this.pattern_9}]},1).to({state:[{t:this.eyeshadow_1},{t:this.eyeshadow_2},{t:this.eyeshadow_3}]},1).to({state:[{t:this.eyeshadow_4},{t:this.eyeshadow_5},{t:this.eyeshadow_6}]},1).to({state:[{t:this.eyeshadow_7},{t:this.eyeshadow_8},{t:this.eyeshadow_9}]},1).to({state:[{t:this.ornament_1},{t:this.ornament_2},{t:this.ornament_3}]},1).to({state:[{t:this.ornament_4},{t:this.ornament_5},{t:this.ornament_6}]},1).to({state:[{t:this.ornament_7},{t:this.ornament_8},{t:this.ornament_9}]},1).to({state:[{t:this.curl_1},{t:this.curl_2},{t:this.curl_3}]},1).to({state:[{t:this.curl_4},{t:this.curl_5},{t:this.curl_6}]},1).to({state:[{t:this.curl_7},{t:this.curl_8},{t:this.curl_9}]},1).to({state:[{t:this.plume_1},{t:this.plume_2}]},1).to({state:[{t:this.plume_4},{t:this.plume_8}]},1).to({state:[{t:this.plume_6},{t:this.plume_5}]},1).to({state:[{t:this.plume_7},{t:this.plume_3}]},1).to({state:[{t:this.plume_9}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_2_mc();
	this.instance.setTransform(0,130);

	this.instance_1 = new lib.wardrobe_2_2_mc();

	this.instance_2 = new lib.wardrobe_2_2_mc();
	this.instance_2.setTransform(0,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{y:-60}},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-230,300,390);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-150,-233,300,393), new cjs.Rectangle(-150,-230,300,390), new cjs.Rectangle(-169.9,-224.5,340.6,384.5), new cjs.Rectangle(-150,-237.9,300,398), new cjs.Rectangle(-150,-251.5,300,411.6), new cjs.Rectangle(-150,-243.4,350,403.5), new cjs.Rectangle(-150,-248.2,300,408.2)];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.199},0).to({scaleX:1.19,scaleY:1.19,alpha:0.75},9).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect, new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-25.2,-25.2,50.5,50.5), new cjs.Rectangle(-27.7,-27.7,55.5,55.5), new cjs.Rectangle(-30.2,-30.2,60.5,60.5), new cjs.Rectangle(-32.7,-32.7,65.5,65.5), new cjs.Rectangle(-35.2,-35.2,70.5,70.5), new cjs.Rectangle(-37.7,-37.7,75.5,75.5), new cjs.Rectangle(-40.2,-40.2,80.5,80.5), new cjs.Rectangle(-42.7,-42.7,85.5,85.5), new cjs.Rectangle(-41,-41,82.1,82.1), new cjs.Rectangle(-39.3,-39.3,78.8,78.8), new cjs.Rectangle(-37.6,-37.6,75.4,75.4), new cjs.Rectangle(-36,-36,72,72)];


(lib.boy_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.boy_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16},41).to({y:0},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-360,261,720);
p.frameBounds = [rect, new cjs.Rectangle(-130.5,-360.4,261,720), new cjs.Rectangle(-130.5,-360.8,261,720), new cjs.Rectangle(-130.5,-361.1,261,720), new cjs.Rectangle(-130.5,-361.5,261,720), new cjs.Rectangle(-130.5,-361.9,261,720), new cjs.Rectangle(-130.5,-362.3,261,720), new cjs.Rectangle(-130.5,-362.7,261,720), new cjs.Rectangle(-130.5,-363.1,261,720), new cjs.Rectangle(-130.5,-363.5,261,720), new cjs.Rectangle(-130.5,-363.9,261,720), new cjs.Rectangle(-130.5,-364.3,261,720), new cjs.Rectangle(-130.5,-364.7,261,720), new cjs.Rectangle(-130.5,-365,261,720), new cjs.Rectangle(-130.5,-365.4,261,720), new cjs.Rectangle(-130.5,-365.8,261,720), new cjs.Rectangle(-130.5,-366.2,261,720), new cjs.Rectangle(-130.5,-366.6,261,720), new cjs.Rectangle(-130.5,-367,261,720), new cjs.Rectangle(-130.5,-367.4,261,720), new cjs.Rectangle(-130.5,-367.8,261,720), new cjs.Rectangle(-130.5,-368.2,261,720), new cjs.Rectangle(-130.5,-368.6,261,720), new cjs.Rectangle(-130.5,-369,261,720), new cjs.Rectangle(-130.5,-369.3,261,720), new cjs.Rectangle(-130.5,-369.7,261,720), new cjs.Rectangle(-130.5,-370.1,261,720), new cjs.Rectangle(-130.5,-370.5,261,720), new cjs.Rectangle(-130.5,-370.9,261,720), new cjs.Rectangle(-130.5,-371.3,261,720), new cjs.Rectangle(-130.5,-371.7,261,720), new cjs.Rectangle(-130.5,-372.1,261,720), new cjs.Rectangle(-130.5,-372.5,261,720), new cjs.Rectangle(-130.5,-372.9,261,720), new cjs.Rectangle(-130.5,-373.2,261,720), new cjs.Rectangle(-130.5,-373.6,261,720), new cjs.Rectangle(-130.5,-374,261,720), new cjs.Rectangle(-130.5,-374.4,261,720), new cjs.Rectangle(-130.5,-374.8,261,720), new cjs.Rectangle(-130.5,-375.2,261,720), new cjs.Rectangle(-130.5,-375.6,261,720), new cjs.Rectangle(-130.5,-376,261,720), new cjs.Rectangle(-130.5,-375.6,261,720), new cjs.Rectangle(-130.5,-375.2,261,720), new cjs.Rectangle(-130.5,-374.9,261,720), new cjs.Rectangle(-130.5,-374.5,261,720), new cjs.Rectangle(-130.5,-374.1,261,720), new cjs.Rectangle(-130.5,-373.7,261,720), new cjs.Rectangle(-130.5,-373.4,261,720), new cjs.Rectangle(-130.5,-373,261,720), new cjs.Rectangle(-130.5,-372.6,261,720), new cjs.Rectangle(-130.5,-372.3,261,720), new cjs.Rectangle(-130.5,-371.9,261,720), new cjs.Rectangle(-130.5,-371.5,261,720), new cjs.Rectangle(-130.5,-371.1,261,720), new cjs.Rectangle(-130.5,-370.8,261,720), new cjs.Rectangle(-130.5,-370.4,261,720), new cjs.Rectangle(-130.5,-370,261,720), new cjs.Rectangle(-130.5,-369.6,261,720), new cjs.Rectangle(-130.5,-369.3,261,720), new cjs.Rectangle(-130.5,-368.9,261,720), new cjs.Rectangle(-130.5,-368.5,261,720), new cjs.Rectangle(-130.5,-368.2,261,720), new cjs.Rectangle(-130.5,-367.8,261,720), new cjs.Rectangle(-130.5,-367.4,261,720), new cjs.Rectangle(-130.5,-367,261,720), new cjs.Rectangle(-130.5,-366.7,261,720), new cjs.Rectangle(-130.5,-366.3,261,720), new cjs.Rectangle(-130.5,-365.9,261,720), new cjs.Rectangle(-130.5,-365.6,261,720), new cjs.Rectangle(-130.5,-365.2,261,720), new cjs.Rectangle(-130.5,-364.8,261,720), new cjs.Rectangle(-130.5,-364.4,261,720), new cjs.Rectangle(-130.5,-364.1,261,720), new cjs.Rectangle(-130.5,-363.7,261,720), new cjs.Rectangle(-130.5,-363.3,261,720), new cjs.Rectangle(-130.5,-363,261,720), new cjs.Rectangle(-130.5,-362.6,261,720), new cjs.Rectangle(-130.5,-362.2,261,720), new cjs.Rectangle(-130.5,-361.8,261,720), new cjs.Rectangle(-130.5,-361.5,261,720), new cjs.Rectangle(-130.5,-361.1,261,720), new cjs.Rectangle(-130.5,-360.7,261,720), new cjs.Rectangle(-130.5,-360.3,261,720), new cjs.Rectangle(-130.5,-360,261,720)];


(lib.boy_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.boy_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-13},49).to({y:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.5,-351.5,281,703);
p.frameBounds = [rect, new cjs.Rectangle(-140.5,-351.7,281,703), new cjs.Rectangle(-140.5,-352,281,703), new cjs.Rectangle(-140.5,-352.3,281,703), new cjs.Rectangle(-140.5,-352.5,281,703), new cjs.Rectangle(-140.5,-352.8,281,703), new cjs.Rectangle(-140.5,-353.1,281,703), new cjs.Rectangle(-140.5,-353.3,281,703), new cjs.Rectangle(-140.5,-353.6,281,703), new cjs.Rectangle(-140.5,-353.9,281,703), new cjs.Rectangle(-140.5,-354.1,281,703), new cjs.Rectangle(-140.5,-354.4,281,703), new cjs.Rectangle(-140.5,-354.7,281,703), new cjs.Rectangle(-140.5,-354.9,281,703), new cjs.Rectangle(-140.5,-355.2,281,703), new cjs.Rectangle(-140.5,-355.5,281,703), new cjs.Rectangle(-140.5,-355.7,281,703), new cjs.Rectangle(-140.5,-356,281,703), new cjs.Rectangle(-140.5,-356.3,281,703), new cjs.Rectangle(-140.5,-356.5,281,703), new cjs.Rectangle(-140.5,-356.8,281,703), new cjs.Rectangle(-140.5,-357,281,703), new cjs.Rectangle(-140.5,-357.3,281,703), new cjs.Rectangle(-140.5,-357.6,281,703), new cjs.Rectangle(-140.5,-357.8,281,703), new cjs.Rectangle(-140.5,-358.1,281,703), new cjs.Rectangle(-140.5,-358.4,281,703), new cjs.Rectangle(-140.5,-358.6,281,703), new cjs.Rectangle(-140.5,-358.9,281,703), new cjs.Rectangle(-140.5,-359.2,281,703), new cjs.Rectangle(-140.5,-359.4,281,703), new cjs.Rectangle(-140.5,-359.7,281,703), new cjs.Rectangle(-140.5,-360,281,703), new cjs.Rectangle(-140.5,-360.2,281,703), new cjs.Rectangle(-140.5,-360.5,281,703), new cjs.Rectangle(-140.5,-360.8,281,703), new cjs.Rectangle(-140.5,-361,281,703), new cjs.Rectangle(-140.5,-361.3,281,703), new cjs.Rectangle(-140.5,-361.6,281,703), new cjs.Rectangle(-140.5,-361.8,281,703), new cjs.Rectangle(-140.5,-362.1,281,703), new cjs.Rectangle(-140.5,-362.4,281,703), new cjs.Rectangle(-140.5,-362.6,281,703), new cjs.Rectangle(-140.5,-362.9,281,703), new cjs.Rectangle(-140.5,-363.1,281,703), new cjs.Rectangle(-140.5,-363.4,281,703), new cjs.Rectangle(-140.5,-363.7,281,703), new cjs.Rectangle(-140.5,-363.9,281,703), new cjs.Rectangle(-140.5,-364.2,281,703), new cjs.Rectangle(-140.5,-364.5,281,703), new cjs.Rectangle(-140.5,-364.2,281,703), new cjs.Rectangle(-140.5,-364,281,703), new cjs.Rectangle(-140.5,-363.7,281,703), new cjs.Rectangle(-140.5,-363.4,281,703), new cjs.Rectangle(-140.5,-363.2,281,703), new cjs.Rectangle(-140.5,-362.9,281,703), new cjs.Rectangle(-140.5,-362.7,281,703), new cjs.Rectangle(-140.5,-362.4,281,703), new cjs.Rectangle(-140.5,-362.1,281,703), new cjs.Rectangle(-140.5,-361.9,281,703), new cjs.Rectangle(-140.5,-361.6,281,703), new cjs.Rectangle(-140.5,-361.4,281,703), new cjs.Rectangle(-140.5,-361.1,281,703), new cjs.Rectangle(-140.5,-360.8,281,703), new cjs.Rectangle(-140.5,-360.6,281,703), new cjs.Rectangle(-140.5,-360.3,281,703), new cjs.Rectangle(-140.5,-360.1,281,703), new cjs.Rectangle(-140.5,-359.8,281,703), new cjs.Rectangle(-140.5,-359.5,281,703), new cjs.Rectangle(-140.5,-359.3,281,703), new cjs.Rectangle(-140.5,-359,281,703), new cjs.Rectangle(-140.5,-358.8,281,703), new cjs.Rectangle(-140.5,-358.5,281,703), new cjs.Rectangle(-140.5,-358.2,281,703), new cjs.Rectangle(-140.5,-358,281,703), new cjs.Rectangle(-140.5,-357.7,281,703), new cjs.Rectangle(-140.5,-357.5,281,703), new cjs.Rectangle(-140.5,-357.2,281,703), new cjs.Rectangle(-140.5,-356.9,281,703), new cjs.Rectangle(-140.5,-356.7,281,703), new cjs.Rectangle(-140.5,-356.4,281,703), new cjs.Rectangle(-140.5,-356.2,281,703), new cjs.Rectangle(-140.5,-355.9,281,703), new cjs.Rectangle(-140.5,-355.6,281,703), new cjs.Rectangle(-140.5,-355.4,281,703), new cjs.Rectangle(-140.5,-355.1,281,703), new cjs.Rectangle(-140.5,-354.9,281,703), new cjs.Rectangle(-140.5,-354.6,281,703), new cjs.Rectangle(-140.5,-354.3,281,703), new cjs.Rectangle(-140.5,-354.1,281,703), new cjs.Rectangle(-140.5,-353.8,281,703), new cjs.Rectangle(-140.5,-353.6,281,703), new cjs.Rectangle(-140.5,-353.3,281,703), new cjs.Rectangle(-140.5,-353,281,703), new cjs.Rectangle(-140.5,-352.8,281,703), new cjs.Rectangle(-140.5,-352.5,281,703), new cjs.Rectangle(-140.5,-352.3,281,703), new cjs.Rectangle(-140.5,-352,281,703), new cjs.Rectangle(-140.5,-351.7,281,703), new cjs.Rectangle(-140.5,-351.5,281,703)];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-240,300,400);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-230,300,390);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.little_golden_heart_2_mc();
	this.instance.setTransform(113,-22,0.75,0.75,0,45,-135);

	this.instance_1 = new lib.little_golden_heart_2_mc();
	this.instance_1.setTransform(-115,-22,0.75,0.75,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:0,regY:0,rotation:-45,x:-115,y:-22}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:113,y:-22,skewX:45,skewY:-135}}]}).to({state:[{t:this.instance_1,p:{regX:0.1,regY:-0.3,rotation:-15,x:-80,y:-53.2}},{t:this.instance,p:{regX:-0.1,regY:-0.1,scaleX:0.656,scaleY:0.656,x:127.1,y:9,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance_1,p:{regX:-0.1,regY:-0.1,rotation:-15,x:-61,y:-53}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:126,y:-3,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance_1,p:{regX:0,regY:0,rotation:-45,x:-119,y:-22}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:117,y:-22,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance_1,p:{regX:-0.1,regY:-0.1,rotation:-15,x:-70,y:-50}},{t:this.instance,p:{regX:-0.1,regY:-0.1,scaleX:0.562,scaleY:0.562,x:127.1,y:-14,skewX:60,skewY:-120}}]},1).to({state:[{t:this.instance_1,p:{regX:-0.1,regY:-0.1,rotation:0,x:-54,y:-54}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:118,y:-22,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance_1,p:{regX:0,regY:0,rotation:-45,x:-112,y:-22}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:110,y:-22,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance_1,p:{regX:0,regY:0,rotation:-45,x:-107,y:-19}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:106,y:-20,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance_1,p:{regX:0,regY:0,rotation:-45,x:-115,y:0}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:115,y:0,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:-9,y:-37,skewX:0,skewY:0}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{regX:0,regY:0,rotation:-45,x:-111,y:-19}},{t:this.instance,p:{regX:0,regY:0,scaleX:0.75,scaleY:0.75,x:119,y:2,skewX:45,skewY:-135}}]},1).to({state:[{t:this.instance,p:{regX:-0.1,regY:-0.1,scaleX:0.75,scaleY:0.75,x:0,y:-48,skewX:0,skewY:0}}]},1).wait(1));

	// graph
	this.instance_2 = new lib.title_en_img();
	this.instance_2.setTransform(-200,-100);

	this.instance_3 = new lib.title_ru_img();
	this.instance_3.setTransform(-200,-100);

	this.instance_4 = new lib.title_de_img();
	this.instance_4.setTransform(-200,-100);

	this.instance_5 = new lib.title_fr_img();
	this.instance_5.setTransform(-200,-100);

	this.instance_6 = new lib.title_it_img();
	this.instance_6.setTransform(-200,-100);

	this.instance_7 = new lib.title_es_img();
	this.instance_7.setTransform(-200,-100);

	this.instance_8 = new lib.title_pt_img();
	this.instance_8.setTransform(-200,-100);

	this.instance_9 = new lib.title_tr_img();
	this.instance_9.setTransform(-200,-100);

	this.instance_10 = new lib.title_ja_img();
	this.instance_10.setTransform(-200,-100);

	this.instance_11 = new lib.title_hi_img();
	this.instance_11.setTransform(-200,-100);

	this.instance_12 = new lib.title_ar_img();
	this.instance_12.setTransform(-200,-100);

	this.instance_13 = new lib.title_id_img();
	this.instance_13.setTransform(-200,-100);

	this.instance_14 = new lib.title_zh_img();
	this.instance_14.setTransform(-200,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-100,400,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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


(lib.copyright_title_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.copyright_body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.copyright_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.copyright_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


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


(lib.shine_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_2_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-12.7,-13.2,26.5,26.5), new cjs.Rectangle(-15,-15.4,31.1,31.1), new cjs.Rectangle(-17.2,-17.6,35.7,35.7), new cjs.Rectangle(-19.4,-19.7,40,40), new cjs.Rectangle(-21.4,-21.7,44,44), new cjs.Rectangle(-23.3,-23.4,47.7,47.7), new cjs.Rectangle(-24.9,-24.9,50.8,50.8), new cjs.Rectangle(-26.1,-26,53.3,53.3), new cjs.Rectangle(-27.1,-26.8,55.1,55.1), new cjs.Rectangle(-27.6,-27.1,56,56), new cjs.Rectangle(-27.7,-27.1,56,56), new cjs.Rectangle(-27.2,-26.5,55,55), new cjs.Rectangle(-26.3,-25.5,53,53), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27,-25.9,53.8,53.8), new cjs.Rectangle(-28,-26.9,55.7,55.7), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.3,-26.2,53.7,53.7), new cjs.Rectangle(-25.6,-24.6,50.3,50.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-20.6,-19.8,40.2,40.2), new cjs.Rectangle(-17.5,-16.8,34,34), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.1,-10.6,21.3,21.3), new cjs.Rectangle(-10.9,-10.6,21.1,21.1), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-8.8,-8.6,17.1,17), new cjs.Rectangle(-7,-6.9,13.7,13.7), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_1_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_2_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_1_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
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


(lib.photoflash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// photoflash
	this.photoflash_mc = new lib.photoflash_3_mc();
	this.photoflash_mc.setTransform(400,-300);

	this.timeline.addTween(cjs.Tween.get(this.photoflash_mc).wait(1));

	// area
	this.area_mc = new lib.photoflash_4_mc();
	this.area_mc.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

	// whiteBackground
	this.whiteBackground_mc = new lib.photoflash_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.whiteBackground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-387,1200,987);
p.frameBounds = [rect];


(lib.photoflash_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2018 edapskov v 1.1
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _photoflash_mc = this.body_mc.photoflash_mc;
		_photoflash_mc.gotoAndStop(0);
		_photoflash_mc.visible = false;
		var _area_mc = this.body_mc.area_mc;
		_area_mc.gotoAndStop(0);
		var _area_bounds_obj = _area_mc.getBounds();
		_area_mc.visible = false;
		var _whiteBackground_mc = this.body_mc.whiteBackground_mc;
		_whiteBackground_mc.gotoAndStop(0);
		_whiteBackground_mc.visible = false;
		/*
		константы
		*/
		var _INTERVAL = 15;
		/*
		переменные
		*/
		var _currentUpdate_num = 0;
		var _totalUpdates_num = 50;
		var _interval_id = setInterval(_updateFunc, _INTERVAL);
		/*
		обновляем эффект
		*/
		function _updateFunc()
		{
			/*
			
			*/
			var randomScale_num = 1;
			/*
			
			*/
			try
			{
				/*
				
				*/
				_currentUpdate_num++;
				/*
				
				*/
				if (_currentUpdate_num == 1)
				{
					randomScale_num = Math.random() * (1 - 0.3) + 0.7;
					_photoflash_mc.scaleX = randomScale_num;
					_photoflash_mc.scaleY = randomScale_num;
					_photoflash_mc.x = _area_mc.x + (Math.random() * _area_bounds_obj.width);
					_photoflash_mc.y = _area_mc.y + (Math.random() * _area_bounds_obj.height);
					_photoflash_mc.rotation = 360 * Math.random();
					_photoflash_mc.visible = true;
					_photoflash_mc.gotoAndPlay(0);
				}
				else if (_currentUpdate_num == 4)
				{
					_whiteBackground_mc.visible = true;
				}
				else if (_currentUpdate_num == 6)
				{
					_photoflash_mc.visible = false;
					_whiteBackground_mc.visible = false;
				}
				else if (_currentUpdate_num >= _totalUpdates_num)
				{
					_totalUpdates_num = Math.round(Math.random() * 20) + 30;
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.photoflash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-387,1200,987);
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


(lib.Glitter_2 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.glitter_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.62,alpha:0.012},29).wait(20).to({scaleY:0.63},0).to({scaleX:1,scaleY:1,alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.4,-44.4,88.9,88.9), new cjs.Rectangle(-43.8,-43.8,87.7,87.7), new cjs.Rectangle(-43.2,-43.2,86.5,86.5), new cjs.Rectangle(-42.6,-42.6,85.4,85.4), new cjs.Rectangle(-42,-42,84.2,84.2), new cjs.Rectangle(-41.5,-41.5,83,83), new cjs.Rectangle(-40.9,-40.9,81.9,81.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-39.7,-39.7,79.6,79.5), new cjs.Rectangle(-39.1,-39.1,78.4,78.4), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-38,-38,76.1,76), new cjs.Rectangle(-37.4,-37.4,74.9,74.9), new cjs.Rectangle(-36.8,-36.8,73.7,73.7), new cjs.Rectangle(-36.2,-36.3,72.6,72.5), new cjs.Rectangle(-35.6,-35.7,71.4,71.4), new cjs.Rectangle(-35.1,-35.1,70.2,70.2), new cjs.Rectangle(-34.5,-34.5,69.1,69), new cjs.Rectangle(-33.9,-33.9,67.9,67.9), new cjs.Rectangle(-33.3,-33.3,66.7,66.7), new cjs.Rectangle(-32.7,-32.8,65.6,65.5), new cjs.Rectangle(-32.1,-32.2,64.4,64.4), new cjs.Rectangle(-31.6,-31.6,63.3,63.2), new cjs.Rectangle(-31,-31,62.1,62), new cjs.Rectangle(-30.4,-30.4,60.9,60.9), new cjs.Rectangle(-29.8,-29.8,59.8,59.7), new cjs.Rectangle(-29.2,-29.3,58.6,58.5), new cjs.Rectangle(-28.7,-28.7,57.4,57.4), rect=new cjs.Rectangle(-28.1,-28.1,56.3,56.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-28.5,-28.5,57.1,57.1), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-29.3,-29.3,58.8,58.8), new cjs.Rectangle(-29.8,-29.8,59.6,59.6), new cjs.Rectangle(-30.2,-30.2,60.5,60.5), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-31.9,-31.9,63.9,63.9), new cjs.Rectangle(-32.3,-32.3,64.7,64.7), new cjs.Rectangle(-32.7,-32.7,65.6,65.5), new cjs.Rectangle(-33.1,-33.1,66.4,66.4), new cjs.Rectangle(-33.6,-33.6,67.2,67.2), new cjs.Rectangle(-34,-34,68.1,68.1), new cjs.Rectangle(-34.4,-34.4,68.9,68.9), new cjs.Rectangle(-34.8,-34.8,69.8,69.8), new cjs.Rectangle(-35.2,-35.2,70.6,70.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-36.1,-36.1,72.3,72.3), new cjs.Rectangle(-36.5,-36.5,73.1,73.1), new cjs.Rectangle(-36.9,-36.9,74,74), new cjs.Rectangle(-37.4,-37.4,74.8,74.8), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-38.2,-38.2,76.5,76.5), new cjs.Rectangle(-38.6,-38.6,77.4,77.4), new cjs.Rectangle(-39,-39,78.2,78.2), new cjs.Rectangle(-39.5,-39.5,79.1,79.1), new cjs.Rectangle(-39.9,-39.9,79.9,79.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-40.7,-40.7,81.6,81.6), new cjs.Rectangle(-41.2,-41.2,82.4,82.4), new cjs.Rectangle(-41.6,-41.6,83.3,83.3), new cjs.Rectangle(-42,-42,84.1,84.1), new cjs.Rectangle(-42.4,-42.4,85,85), new cjs.Rectangle(-42.8,-42.8,85.8,85.8), new cjs.Rectangle(-43.3,-43.3,86.6,86.6), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-44.1,-44.1,88.3,88.3), new cjs.Rectangle(-44.5,-44.5,89.2,89.2), new cjs.Rectangle(-45,-45,90,90)];


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

	// decor
	this.shine_mc = new lib.shine_1_1_mc();
	this.shine_mc.setTransform(-50,-43);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(160));

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_1_mc();
	this.shine_mc.setTransform(-50,-43);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(90));

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({rotation:10},10).to({rotation:-10},15).to({rotation:0},10).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96.6,-96.6,193.3,193.3), new cjs.Rectangle(-98.2,-98.2,196.5,196.5), new cjs.Rectangle(-99.8,-99.8,199.6,199.6), new cjs.Rectangle(-101.3,-101.3,202.8,202.8), new cjs.Rectangle(-102.8,-102.8,205.8,205.8), new cjs.Rectangle(-104.3,-104.3,208.8,208.8), new cjs.Rectangle(-105.8,-105.8,211.7,211.7), new cjs.Rectangle(-107.2,-107.2,214.5,214.5), new cjs.Rectangle(-108.6,-108.6,217.3,217.3), new cjs.Rectangle(-110,-110,220.1,220.1), new cjs.Rectangle(-107.9,-108,216,216), new cjs.Rectangle(-106.2,-106.2,212.5,212.5), new cjs.Rectangle(-104.3,-104.3,208.8,208.8), new cjs.Rectangle(-102.2,-102.1,204.4,204.4), new cjs.Rectangle(-100.2,-100.2,200.5,200.5), new cjs.Rectangle(-98.2,-98.2,196.5,196.5), rect=new cjs.Rectangle(-95.8,-95.8,191.8,191.8), rect, new cjs.Rectangle(-98.2,-98.2,196.5,196.5), new cjs.Rectangle(-100.2,-100.2,200.5,200.5), new cjs.Rectangle(-102.1,-102.2,204.4,204.4), new cjs.Rectangle(-104.3,-104.3,208.8,208.8), new cjs.Rectangle(-106.2,-106.2,212.5,212.5), new cjs.Rectangle(-108,-107.9,216,216), new cjs.Rectangle(-110,-110,220.1,220.1), new cjs.Rectangle(-108.6,-108.6,217.3,217.3), new cjs.Rectangle(-107.2,-107.2,214.5,214.5), new cjs.Rectangle(-105.8,-105.8,211.7,211.7), new cjs.Rectangle(-104.3,-104.3,208.8,208.8), new cjs.Rectangle(-102.8,-102.8,205.8,205.8), new cjs.Rectangle(-101.3,-101.3,202.8,202.8), new cjs.Rectangle(-99.8,-99.8,199.6,199.6), new cjs.Rectangle(-98.2,-98.2,196.5,196.5), new cjs.Rectangle(-96.6,-96.6,193.3,193.3), new cjs.Rectangle(-95,-95,190,190)];


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_1_mc();
	this.shine_mc.setTransform(-50,-43);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(160));

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(116));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEiABDNDMQDNDOAAEgQAAEhjNDOQjNDMkiABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.039)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEiABDNDMQDNDOAAEgQAAEhjNDOQjNDMkiABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_2_mc();
	this.shine_mc.setTransform(-50,-43);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,610);
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

	// bg
	this.instance = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-100,400,200);
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


(lib.location_fake_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect];


(lib.location_fake_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect];


(lib.location_fake_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect];


(lib.location_fake_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-190,-170);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decor
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.instance_5 = new lib.area_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,450);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,450), new cjs.Rectangle(-190,-210,380,450)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-190,-170);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decor
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.instance_5 = new lib.area_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,450);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,450), new cjs.Rectangle(-190,-210,380,450)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-190,-170);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decor
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.instance_5 = new lib.area_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,450);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,450), new cjs.Rectangle(-190,-210,380,450)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-190,-170);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decor
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.instance_5 = new lib.area_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,450);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,450), new cjs.Rectangle(-190,-210,380,450)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-190,-170);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decor
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.instance_5 = new lib.area_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,450);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,450), new cjs.Rectangle(-190,-210,380,450)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(50,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-190,-170);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-190,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.current_location_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decor
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.instance_5 = new lib.area_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,450);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,450), new cjs.Rectangle(-190,-210,380,450)];


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
	this.hero_1 = new lib.hero_1_for_dressup_mc();
	this.hero_1.setTransform(255,510);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(550,400);

	this.instance = new lib.boy_1_mc();
	this.instance.setTransform(0,360);

	this.instance_1 = new lib.boy_2_mc();
	this.instance_1.setTransform(800,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:800}},{t:this.instance,p:{x:0}},{t:this.hero_2,p:{x:550}},{t:this.hero_1,p:{x:255}}]}).to({state:[{t:this.instance,p:{x:210}},{t:this.hero_1,p:{x:500}}]},1).to({state:[{t:this.hero_1,p:{x:400}}]},1).to({state:[{t:this.instance_1,p:{x:610}},{t:this.hero_2,p:{x:300}}]},1).to({state:[{t:this.hero_2,p:{x:395}}]},1).to({state:[{t:this.hero_2,p:{x:250}},{t:this.hero_1,p:{x:550}}]},1).to({state:[{t:this.instance_1,p:{x:610}},{t:this.hero_2,p:{x:300}}]},1).to({state:[{t:this.hero_2,p:{x:400}}]},1).to({state:[{t:this.instance,p:{x:210}},{t:this.hero_1,p:{x:500}}]},1).to({state:[{t:this.hero_1,p:{x:400}}]},1).to({state:[{t:this.instance_1,p:{x:800}},{t:this.instance,p:{x:0}},{t:this.hero_2,p:{x:550}},{t:this.hero_1,p:{x:255}}]},1).to({state:[{t:this.instance,p:{x:210}},{t:this.hero_1,p:{x:500}}]},1).to({state:[{t:this.hero_1,p:{x:400}}]},1).to({state:[{t:this.instance_1,p:{x:610}},{t:this.hero_2,p:{x:300}}]},1).to({state:[{t:this.hero_2,p:{x:400}}]},1).wait(1));

	// bg
	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_5_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_6_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-1.3,1200,734.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,723.5), rect, rect=new cjs.Rectangle(-200,-1.3,1200,734.3), rect, rect, rect, rect, rect=new cjs.Rectangle(-200,0,1200,723.5), rect, new cjs.Rectangle(-200,-1.3,1200,734.3), rect=new cjs.Rectangle(-200,0,1200,723.5), rect, rect=new cjs.Rectangle(-200,-1.3,1200,734.3), rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.boy_2_mc();
	this.instance.setTransform(1200,370);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({x:515},16).to({x:555},4).wait(1));

	// animation
	this.instance_1 = new lib.hero_1_main_mc();
	this.instance_1.setTransform(-500,500);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).to({x:355},16).to({x:305},4).wait(1));

	// animation
	this.instance_2 = new lib.boy_1_mc();
	this.instance_2.setTransform(-400,380);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({x:315},16).to({x:265},4).wait(50).to({x:-400},15).to({_off:true},1).wait(10));

	// animation
	this.instance_3 = new lib.hero_2_main_mc();
	this.instance_3.setTransform(1200,400);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({x:445},16).to({x:495},4).wait(50).to({x:1200},15).to({_off:true},1).wait(10));

	// animation
	this.instance_4 = new lib.boy_2_mc();
	this.instance_4.setTransform(555,370);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({x:1200},15).to({_off:true},1).wait(85));

	// animation
	this.instance_5 = new lib.hero_1_main_mc();
	this.instance_5.setTransform(305,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({x:-500},15).to({_off:true},1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(87.6,-0.5,598,730.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(33.9,-0.5,694.7,730.6), new cjs.Rectangle(-19.8,-0.5,791.3,730.6), new cjs.Rectangle(-73.4,-0.5,888,730.6), new cjs.Rectangle(-127.1,-0.5,984.6,730.6), new cjs.Rectangle(-540.5,-1.3,1941.7,734.3), new cjs.Rectangle(-495.8,-1.2,1849.8,734.3), new cjs.Rectangle(-451.1,-1.2,1758,734.3), new cjs.Rectangle(-406.4,-1.2,1666.1,734.3), new cjs.Rectangle(-395.4,-1.2,1607.9,734.3), new cjs.Rectangle(-449.1,-1.2,1614.4,734.3), new cjs.Rectangle(-502.8,-1.2,1661.3,734.3), new cjs.Rectangle(-556.4,-1.2,1758,734.3), new cjs.Rectangle(-610.1,-1.2,1854.6,734.3), new cjs.Rectangle(-663.8,-1.2,1951.3,734.3), new cjs.Rectangle(-717.4,-1.2,2048,734.3), new cjs.Rectangle(-48.9,-1.2,931.1,734.3), new cjs.Rectangle(-4.2,-1.2,839.2,734.3), new cjs.Rectangle(40.5,-1.2,747.3,734.3), new cjs.Rectangle(85.1,-1.2,655.4,734.3), new cjs.Rectangle(129.8,-1.2,563.6,734.3), new cjs.Rectangle(174.5,-1.3,471.7,734.3), new cjs.Rectangle(162,-1.2,496.7,734.3), new cjs.Rectangle(149.5,-1.2,521.7,734.3), new cjs.Rectangle(137,-1.2,546.7,734.3), rect=new cjs.Rectangle(124.5,-1.3,571.7,734.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(80.2,-1.2,663.1,734.3), new cjs.Rectangle(35.9,-1.2,754.4,734.3), new cjs.Rectangle(-8.5,-1.2,845.7,734.3), new cjs.Rectangle(-52.8,-1.2,937.1,734.3), new cjs.Rectangle(-717.4,-1.2,2048,734.3), new cjs.Rectangle(-664,-1.2,1951.7,734.3), new cjs.Rectangle(-610.6,-1.2,1855.5,734.3), new cjs.Rectangle(-557.1,-1.2,1759.2,734.3), new cjs.Rectangle(-503.7,-1.2,1663,734.3), new cjs.Rectangle(-450.2,-1.2,1616.5,734.3), new cjs.Rectangle(-396.8,-1.2,1610,734.3), new cjs.Rectangle(-407.5,-1.2,1667.7,734.3), new cjs.Rectangle(-451.8,-1.2,1759.1,734.3), new cjs.Rectangle(-496.1,-1.2,1850.4,734.3), new cjs.Rectangle(-540.5,-1.3,1941.7,734.3), new cjs.Rectangle(-129.6,-0.5,989.2,730.6), new cjs.Rectangle(-76.2,-0.5,893,730.6), new cjs.Rectangle(-22.7,-0.5,796.7,730.6), new cjs.Rectangle(30.6,-0.5,700.6,730.6), new cjs.Rectangle(84.1,-0.5,604.3,730.6), new cjs.Rectangle(137.6,-0.5,508,730.6), new cjs.Rectangle(125,-0.5,530.5,730.6), new cjs.Rectangle(112.5,-0.5,553,730.6), new cjs.Rectangle(100,-0.5,575.5,730.6), new cjs.Rectangle(87.6,-0.5,598,730.6)];


(lib.hairstyle_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:74,end:104});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(29).to({rotation:-5},5).to({rotation:5},10).to({rotation:0},5).wait(56));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(44).to({rotation:-5},5).to({rotation:5},10).to({rotation:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,760,450);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383.6,-213.2,763.6,455.4), new cjs.Rectangle(-387.1,-216.4,767.2,460.8), new cjs.Rectangle(-390.7,-219.6,770.7,466), new cjs.Rectangle(-394.1,-222.6,774.2,471), new cjs.Rectangle(-397.6,-225.7,777.6,481.4), new cjs.Rectangle(-394.1,-222.7,774.1,471), new cjs.Rectangle(-390.6,-219.6,770.6,466), new cjs.Rectangle(-387.1,-216.4,767.2,460.7), new cjs.Rectangle(-383.6,-213.2,763.6,455.4), new cjs.Rectangle(-379.9,-210,760,450), new cjs.Rectangle(-383.5,-213.2,763.6,455.4), new cjs.Rectangle(-387.1,-216.4,767.2,460.7), new cjs.Rectangle(-390.7,-219.6,770.7,466), new cjs.Rectangle(-394.1,-222.6,774.1,471), new cjs.Rectangle(-400.2,-225.7,780.2,481.4), new cjs.Rectangle(-394.1,-222.6,777.8,471), new cjs.Rectangle(-390.6,-219.6,777.9,465.9), new cjs.Rectangle(-387.1,-219.6,777.9,466), new cjs.Rectangle(-383.5,-222.6,777.8,471), new cjs.Rectangle(-380,-225.7,780.2,481.4), new cjs.Rectangle(-380,-222.6,774.2,471), new cjs.Rectangle(-380,-219.6,770.7,466), new cjs.Rectangle(-380,-216.4,767.2,460.7), new cjs.Rectangle(-380,-213.2,763.7,455.4), new cjs.Rectangle(-380,-210,760,450), new cjs.Rectangle(-380,-213.2,763.5,455.4), new cjs.Rectangle(-380,-216.4,767.2,460.7), new cjs.Rectangle(-380,-219.6,770.7,466), new cjs.Rectangle(-380,-222.6,774.2,471), new cjs.Rectangle(-380,-225.7,777.6,481.4), new cjs.Rectangle(-380,-222.7,774.2,471), new cjs.Rectangle(-380,-219.6,770.6,465.9), new cjs.Rectangle(-380,-216.4,767.1,460.7), new cjs.Rectangle(-380,-213.2,763.6,455.4), rect=new cjs.Rectangle(-380,-210,760,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":119});

	// timeline functions:
	this.frame_69 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(51));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:190},0).wait(43).to({x:-240},10).to({x:-190},5).wait(61));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(58).to({y:50},15).to({y:0},5).wait(41));

	// animation
	this.instance = new lib.location_fake_4_mc();
	this.instance.setTransform(-190,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(23).to({y:-50},5).to({y:600},15).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,760,450);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-810,760,1050), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-810,760,1056.7), new cjs.Rectangle(-380,-810,760,1100), new cjs.Rectangle(-380,-810,760,1143.4), new cjs.Rectangle(-380,-810,760,1186.7), new cjs.Rectangle(-380,-810,760,1230), new cjs.Rectangle(-380,-810,760,1273.4), new cjs.Rectangle(-380,-810,760,1316.7), new cjs.Rectangle(-380,-810,760,1360), new cjs.Rectangle(-380,-810,760,1403.4), new cjs.Rectangle(-380,-810,760,1446.7), new cjs.Rectangle(-380,-810,760,1490), new cjs.Rectangle(-380,-810,760,1533.4), new cjs.Rectangle(-380,-810,760,1576.7), new cjs.Rectangle(-380,-810,760,1620), new cjs.Rectangle(-43,-810,423,1050), new cjs.Rectangle(-86,-810,466,1050), new cjs.Rectangle(-129,-810,509,1050), new cjs.Rectangle(-172,-810,552,1050), new cjs.Rectangle(-215,-810,595,1050), new cjs.Rectangle(-258,-810,638,1050), new cjs.Rectangle(-301,-810,681,1050), new cjs.Rectangle(-344,-810,724,1050), new cjs.Rectangle(-387,-810,767,1050), new cjs.Rectangle(-430,-810,810,1050), new cjs.Rectangle(-420,-810,800,1050), new cjs.Rectangle(-410,-810,790,1050), new cjs.Rectangle(-400,-810,780,1050), new cjs.Rectangle(-390,-810,770,1050), new cjs.Rectangle(-380,-810,760,1050), new cjs.Rectangle(-380,-766.6,760,1006.7), new cjs.Rectangle(-380,-723.3,760,963.4), new cjs.Rectangle(-380,-680,760,920), new cjs.Rectangle(-380,-636.6,760,876.7), new cjs.Rectangle(-380,-593.3,760,833.4), new cjs.Rectangle(-380,-550,760,790), new cjs.Rectangle(-380,-506.6,760,746.7), new cjs.Rectangle(-380,-463.3,760,703.4), new cjs.Rectangle(-380,-420,760,660), new cjs.Rectangle(-380,-376.6,760,616.7), new cjs.Rectangle(-380,-333.3,760,573.4), new cjs.Rectangle(-380,-290,760,530), new cjs.Rectangle(-380,-246.6,760,486.7), new cjs.Rectangle(-380,-210,760,456.7), new cjs.Rectangle(-380,-210,760,500), new cjs.Rectangle(-380,-210,760,490), new cjs.Rectangle(-380,-210,760,480), new cjs.Rectangle(-380,-210,760,470), new cjs.Rectangle(-380,-210,760,460), rect=new cjs.Rectangle(-380,-210,760,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":114,"end":144});

	// timeline functions:
	this.frame_74 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_94 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(20).call(this.frame_94).wait(51));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(63).to({y:50},15).to({y:0},5).wait(61));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(83).to({y:50},15).to({y:0},5).wait(41));

	// animation
	this.instance = new lib.location_fake_2_mc();
	this.instance.setTransform(-190,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(23).to({y:-50},5).to({y:600},15).to({_off:true},1).wait(100));

	// animation
	this.instance_1 = new lib.location_fake_3_mc();
	this.instance_1.setTransform(190,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(43).to({y:-50},5).to({y:600},15).to({_off:true},1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,760,450);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-810,760,1020), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-810,760,1056.7), new cjs.Rectangle(-380,-810,760,1100), new cjs.Rectangle(-380,-810,760,1143.4), new cjs.Rectangle(-380,-810,760,1186.7), new cjs.Rectangle(-380,-810,760,1230), new cjs.Rectangle(-380,-810,760,1273.4), new cjs.Rectangle(-380,-810,760,1316.7), new cjs.Rectangle(-380,-810,760,1360), new cjs.Rectangle(-380,-810,760,1403.4), new cjs.Rectangle(-380,-810,760,1446.7), new cjs.Rectangle(-380,-810,760,1490), new cjs.Rectangle(-380,-810,760,1533.4), new cjs.Rectangle(-380,-810,760,1576.7), new cjs.Rectangle(-380,-810,760,1620), new cjs.Rectangle(-380,-810,760,1010), new cjs.Rectangle(-380,-810,760,1000), new cjs.Rectangle(-380,-810,760,990), new cjs.Rectangle(-380,-810,760,980), new cjs.Rectangle(-380,-810,760,970), new cjs.Rectangle(-380,-810,760,1013.4), new cjs.Rectangle(-380,-810,760,1056.7), new cjs.Rectangle(-380,-810,760,1100), new cjs.Rectangle(-380,-810,760,1143.4), new cjs.Rectangle(-380,-810,760,1186.7), new cjs.Rectangle(-380,-810,760,1230), new cjs.Rectangle(-380,-810,760,1273.4), new cjs.Rectangle(-380,-810,760,1316.7), new cjs.Rectangle(-380,-810,760,1360), new cjs.Rectangle(-380,-810,760,1403.4), new cjs.Rectangle(-380,-810,760,1446.7), new cjs.Rectangle(-380,-810,760,1490), new cjs.Rectangle(-380,-810,760,1533.4), new cjs.Rectangle(-380,-810,760,1576.7), new cjs.Rectangle(-380,-810,760,1620), new cjs.Rectangle(-380,-810,760,493.4), new cjs.Rectangle(-380,-810,760,536.7), new cjs.Rectangle(-380,-810,760,580), new cjs.Rectangle(-380,-810,760,623.4), new cjs.Rectangle(-380,-810,760,666.7), new cjs.Rectangle(-380,-810,760,710), new cjs.Rectangle(-380,-810,760,753.4), new cjs.Rectangle(-380,-810,760,796.7), new cjs.Rectangle(-380,-810,760,840), new cjs.Rectangle(-380,-810,760,883.4), new cjs.Rectangle(-380,-810,760,926.7), new cjs.Rectangle(-380,-810,760,970), new cjs.Rectangle(-380,-810,760,1013.4), new cjs.Rectangle(-380,-810,760,1056.7), new cjs.Rectangle(-380,-810,760,1100), new cjs.Rectangle(-380,-810,760,1090), new cjs.Rectangle(-380,-810,760,1080), new cjs.Rectangle(-380,-810,760,1070), new cjs.Rectangle(-380,-810,760,1060), new cjs.Rectangle(-380,-810,760,1050), new cjs.Rectangle(-380,-766.6,760,1006.7), new cjs.Rectangle(-380,-723.3,760,963.4), new cjs.Rectangle(-380,-680,760,920), new cjs.Rectangle(-380,-636.6,760,876.7), new cjs.Rectangle(-380,-593.3,760,833.4), new cjs.Rectangle(-380,-550,760,790), new cjs.Rectangle(-380,-506.6,760,746.7), new cjs.Rectangle(-380,-463.3,760,703.4), new cjs.Rectangle(-380,-420,760,660), new cjs.Rectangle(-380,-376.6,760,616.7), new cjs.Rectangle(-380,-333.3,760,573.4), new cjs.Rectangle(-380,-290,760,530), new cjs.Rectangle(-380,-246.6,760,486.7), new cjs.Rectangle(-380,-210,760,456.7), new cjs.Rectangle(-380,-210,760,500), new cjs.Rectangle(-380,-210,760,490), new cjs.Rectangle(-380,-210,760,480), new cjs.Rectangle(-380,-210,760,470), new cjs.Rectangle(-380,-210,760,460), rect=new cjs.Rectangle(-380,-210,760,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":74,"end":104});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(44).to({regX:0.1,x:190.1},0).to({regX:0,rotation:-5,x:190},5).to({rotation:5},10).to({rotation:0},5).wait(41));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({rotation:-5},5).to({rotation:5},10).to({rotation:0},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,760,450);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383.6,-213.2,763.6,455.4), new cjs.Rectangle(-387.1,-216.4,767.2,460.8), new cjs.Rectangle(-390.7,-219.6,770.7,466), new cjs.Rectangle(-394.1,-222.6,774.2,471), new cjs.Rectangle(-397.6,-225.7,777.6,481.4), new cjs.Rectangle(-394.1,-222.7,774.1,471), new cjs.Rectangle(-390.6,-219.6,770.6,466), new cjs.Rectangle(-387.1,-216.4,767.2,460.7), new cjs.Rectangle(-383.6,-213.2,763.6,455.4), new cjs.Rectangle(-379.9,-210,760,450), new cjs.Rectangle(-383.5,-213.2,763.6,455.4), new cjs.Rectangle(-387.1,-216.4,767.2,460.7), new cjs.Rectangle(-390.7,-219.6,770.7,466), new cjs.Rectangle(-394.1,-222.6,774.1,471), new cjs.Rectangle(-400.2,-225.7,780.2,481.4), new cjs.Rectangle(-394.1,-222.6,777.8,471), new cjs.Rectangle(-390.6,-219.6,777.8,465.9), new cjs.Rectangle(-387.1,-219.6,777.8,466), new cjs.Rectangle(-383.5,-222.6,777.7,471), new cjs.Rectangle(-380,-225.7,780.2,481.4), new cjs.Rectangle(-380,-222.6,774.2,471), new cjs.Rectangle(-380,-219.6,770.7,466), new cjs.Rectangle(-380,-216.4,767.2,460.7), new cjs.Rectangle(-380,-213.2,763.7,455.4), new cjs.Rectangle(-380,-210,760,450), new cjs.Rectangle(-380,-213.2,763.5,455.4), new cjs.Rectangle(-380,-216.4,767.2,460.7), new cjs.Rectangle(-380,-219.6,770.7,466), new cjs.Rectangle(-380,-222.6,774.2,471), new cjs.Rectangle(-380,-225.7,777.6,481.4), new cjs.Rectangle(-380,-222.7,774.2,471), new cjs.Rectangle(-380,-219.6,770.6,465.9), new cjs.Rectangle(-380,-216.4,767.1,460.7), new cjs.Rectangle(-380,-213.2,763.6,455.4), rect=new cjs.Rectangle(-380,-210,760,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":119});

	// timeline functions:
	this.frame_69 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(51));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:190},0).wait(43).to({x:-240},10).to({x:-190},5).wait(61));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(58).to({y:50},15).to({y:0},5).wait(41));

	// animation
	this.instance = new lib.location_fake_1_mc();
	this.instance.setTransform(-190,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(23).to({y:-50},5).to({y:600},15).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,760,450);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-810,760,1050), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-810,760,1056.7), new cjs.Rectangle(-380,-810,760,1100), new cjs.Rectangle(-380,-810,760,1143.4), new cjs.Rectangle(-380,-810,760,1186.7), new cjs.Rectangle(-380,-810,760,1230), new cjs.Rectangle(-380,-810,760,1273.4), new cjs.Rectangle(-380,-810,760,1316.7), new cjs.Rectangle(-380,-810,760,1360), new cjs.Rectangle(-380,-810,760,1403.4), new cjs.Rectangle(-380,-810,760,1446.7), new cjs.Rectangle(-380,-810,760,1490), new cjs.Rectangle(-380,-810,760,1533.4), new cjs.Rectangle(-380,-810,760,1576.7), new cjs.Rectangle(-380,-810,760,1620), new cjs.Rectangle(-43,-810,423,1050), new cjs.Rectangle(-86,-810,466,1050), new cjs.Rectangle(-129,-810,509,1050), new cjs.Rectangle(-172,-810,552,1050), new cjs.Rectangle(-215,-810,595,1050), new cjs.Rectangle(-258,-810,638,1050), new cjs.Rectangle(-301,-810,681,1050), new cjs.Rectangle(-344,-810,724,1050), new cjs.Rectangle(-387,-810,767,1050), new cjs.Rectangle(-430,-810,810,1050), new cjs.Rectangle(-420,-810,800,1050), new cjs.Rectangle(-410,-810,790,1050), new cjs.Rectangle(-400,-810,780,1050), new cjs.Rectangle(-390,-810,770,1050), new cjs.Rectangle(-380,-810,760,1050), new cjs.Rectangle(-380,-766.6,760,1006.7), new cjs.Rectangle(-380,-723.3,760,963.4), new cjs.Rectangle(-380,-680,760,920), new cjs.Rectangle(-380,-636.6,760,876.7), new cjs.Rectangle(-380,-593.3,760,833.4), new cjs.Rectangle(-380,-550,760,790), new cjs.Rectangle(-380,-506.6,760,746.7), new cjs.Rectangle(-380,-463.3,760,703.4), new cjs.Rectangle(-380,-420,760,660), new cjs.Rectangle(-380,-376.6,760,616.7), new cjs.Rectangle(-380,-333.3,760,573.4), new cjs.Rectangle(-380,-290,760,530), new cjs.Rectangle(-380,-246.6,760,486.7), new cjs.Rectangle(-380,-210,760,456.7), new cjs.Rectangle(-380,-210,760,500), new cjs.Rectangle(-380,-210,760,490), new cjs.Rectangle(-380,-210,760,480), new cjs.Rectangle(-380,-210,760,470), new cjs.Rectangle(-380,-210,760,460), rect=new cjs.Rectangle(-380,-210,760,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":74,"end":104});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_54 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(51));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(23).to({y:50},15).to({y:0},5).wait(61));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(43).to({y:50},15).to({y:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,760,450);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-810,760,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-810,760,493.4), new cjs.Rectangle(-380,-810,760,536.7), new cjs.Rectangle(-380,-810,760,580), new cjs.Rectangle(-380,-810,760,623.4), new cjs.Rectangle(-380,-810,760,666.7), new cjs.Rectangle(-380,-810,760,710), new cjs.Rectangle(-380,-810,760,753.4), new cjs.Rectangle(-380,-810,760,796.7), new cjs.Rectangle(-380,-810,760,840), new cjs.Rectangle(-380,-810,760,883.4), new cjs.Rectangle(-380,-810,760,926.7), new cjs.Rectangle(-380,-810,760,970), new cjs.Rectangle(-380,-810,760,1013.4), new cjs.Rectangle(-380,-810,760,1056.7), new cjs.Rectangle(-380,-810,760,1100), new cjs.Rectangle(-380,-810,760,1090), new cjs.Rectangle(-380,-810,760,1080), new cjs.Rectangle(-380,-810,760,1070), new cjs.Rectangle(-380,-810,760,1060), new cjs.Rectangle(-380,-810,760,1050), new cjs.Rectangle(-380,-766.6,760,1006.7), new cjs.Rectangle(-380,-723.3,760,963.4), new cjs.Rectangle(-380,-680,760,920), new cjs.Rectangle(-380,-636.6,760,876.7), new cjs.Rectangle(-380,-593.3,760,833.4), new cjs.Rectangle(-380,-550,760,790), new cjs.Rectangle(-380,-506.6,760,746.7), new cjs.Rectangle(-380,-463.3,760,703.4), new cjs.Rectangle(-380,-420,760,660), new cjs.Rectangle(-380,-376.6,760,616.7), new cjs.Rectangle(-380,-333.3,760,573.4), new cjs.Rectangle(-380,-290,760,530), new cjs.Rectangle(-380,-246.6,760,486.7), new cjs.Rectangle(-380,-210,760,456.7), new cjs.Rectangle(-380,-210,760,500), new cjs.Rectangle(-380,-210,760,490), new cjs.Rectangle(-380,-210,760,480), new cjs.Rectangle(-380,-210,760,470), new cjs.Rectangle(-380,-210,760,460), rect=new cjs.Rectangle(-380,-210,760,450), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
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

	// bg
	this.instance = new lib.bg_title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-100,400,200);
p.frameBounds = [rect];


(lib.closet_makeup_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-132,-150);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(-132,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_0}]}).to({state:[{t:this.beads_0}]},3).wait(3));

	// options
	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(0,55);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(55,-135);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(-55,-135);

	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(0,-135);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(-55,55);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(55,55);

	this.earrings_9 = new lib.earrings_9_2_mc();
	this.earrings_9.setTransform(0,55);

	this.earrings_8 = new lib.earrings_8_2_mc();
	this.earrings_8.setTransform(55,-135);

	this.earrings_7 = new lib.earrings_7_2_mc();
	this.earrings_7.setTransform(-55,-135);

	this.beads_3 = new lib.beads_3_2_mc();
	this.beads_3.setTransform(0,115);

	this.beads_2 = new lib.beads_2_2_mc();
	this.beads_2.setTransform(0,2);

	this.beads_1 = new lib.beads_1_2_mc();
	this.beads_1.setTransform(0,-117);

	this.beads_6 = new lib.beads_6_2_mc();
	this.beads_6.setTransform(0,116);

	this.beads_5 = new lib.beads_5_2_mc();
	this.beads_5.setTransform(0,8);

	this.beads_4 = new lib.beads_4_2_mc();
	this.beads_4.setTransform(0,-118);

	this.beads_9 = new lib.beads_9_2_mc();
	this.beads_9.setTransform(0,-115);

	this.beads_8 = new lib.beads_8_2_mc();
	this.beads_8.setTransform(0,3);

	this.beads_7 = new lib.beads_7_2_mc();
	this.beads_7.setTransform(0,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]}).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3}]},1).to({state:[{t:this.beads_4},{t:this.beads_5},{t:this.beads_6}]},1).to({state:[{t:this.beads_7},{t:this.beads_8},{t:this.beads_9}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_1_mc();
	this.instance.setTransform(0,-60);

	this.instance_1 = new lib.wardrobe_2_1_mc();
	this.instance_1.setTransform(0,130);

	this.instance_2 = new lib.wardrobe_2_1_mc();
	this.instance_2.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]}).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:-120}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:-120}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:-120}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-225,300,385);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-150,-167,300,332), new cjs.Rectangle(-150,-168,300,334), new cjs.Rectangle(-150,-165,300,334)];


(lib.closet_makeup_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-132,-150);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(-132,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_0}]}).to({state:[{t:this.beads_0}]},3).wait(3));

	// options
	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(0,55);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(55,-136.3);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(-55,-135);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(55,55);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(-55,55);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(0,-135);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(0,55);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(55,-135);

	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(-55,-135);

	this.beads_3 = new lib.beads_3_1_mc();
	this.beads_3.setTransform(0,-5);

	this.beads_2 = new lib.beads_2_1_mc();
	this.beads_2.setTransform(2,115);

	this.beads_1 = new lib.beads_1_1_mc();
	this.beads_1.setTransform(0,-118);

	this.beads_6 = new lib.beads_6_1_mc();
	this.beads_6.setTransform(0,6);

	this.beads_5 = new lib.beads_5_1_mc();
	this.beads_5.setTransform(0,121);

	this.beads_4 = new lib.beads_4_1_mc();
	this.beads_4.setTransform(0,-118);

	this.beads_9 = new lib.beads_9_1_mc();
	this.beads_9.setTransform(0,-4);

	this.beads_8 = new lib.beads_8_1_mc();
	this.beads_8.setTransform(0,-117);

	this.beads_7 = new lib.beads_7_1_mc();
	this.beads_7.setTransform(0,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]}).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3}]},1).to({state:[{t:this.beads_4},{t:this.beads_5},{t:this.beads_6}]},1).to({state:[{t:this.beads_7},{t:this.beads_8},{t:this.beads_9}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_1_mc();
	this.instance.setTransform(0,-60);

	this.instance_1 = new lib.wardrobe_2_1_mc();
	this.instance_1.setTransform(0,130);

	this.instance_2 = new lib.wardrobe_2_1_mc();
	this.instance_2.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]}).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:-120}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:-120}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:-120}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-226.3,300,386.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-150,-225,300,385), rect, new cjs.Rectangle(-150,-168,300,333), new cjs.Rectangle(-150,-168,300,339), new cjs.Rectangle(-150,-167,300,332)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.fan_0 = new lib.fan_0_mc();
	this.fan_0.setTransform(-160,170);
	this.fan_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fan_0).wait(3).to({_off:false},0).wait(9));

	// options
	this.fan_1 = new lib.fan_1_2_mc();
	this.fan_1.setTransform(0,195);

	this.fan_2 = new lib.fan_2_2_mc();
	this.fan_2.setTransform(5,190);

	this.fan_3 = new lib.fan_3_2_mc();
	this.fan_3.setTransform(5,190);

	this.fan_4 = new lib.fan_4_2_mc();
	this.fan_4.setTransform(5,190);

	this.fan_5 = new lib.fan_5_2_mc();
	this.fan_5.setTransform(5,195);

	this.fan_6 = new lib.fan_6_2_mc();
	this.fan_6.setTransform(5,190);

	this.fan_7 = new lib.fan_7_2_mc();
	this.fan_7.setTransform(5,200);

	this.fan_8 = new lib.fan_8_2_mc();
	this.fan_8.setTransform(5,195);

	this.fan_9 = new lib.fan_9_2_mc();
	this.fan_9.setTransform(5,195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fan_1}]},3).to({state:[{t:this.fan_2}]},1).to({state:[{t:this.fan_3}]},1).to({state:[{t:this.fan_4}]},1).to({state:[{t:this.fan_5}]},1).to({state:[{t:this.fan_6}]},1).to({state:[{t:this.fan_7}]},1).to({state:[{t:this.fan_8}]},1).to({state:[{t:this.fan_9}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_4_3_mc();
	this.instance.setTransform(0,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(9));

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-80,135);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(80,0);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-80,-135);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(80,135);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(-80,0);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(80,-135);

	this.hair_9 = new lib.hairstyle_9_2_mc();
	this.hair_9.setTransform(-80,135);

	this.hair_8 = new lib.hairstyle_8_2_mc();
	this.hair_8.setTransform(80,0);

	this.hair_7 = new lib.hairstyle_7_2_mc();
	this.hair_7.setTransform(-80,-135);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(20,-238);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(20,-238);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(20,-238);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(30,-238);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(20,-238);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(30,-238);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(20,-238);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(40,-238);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(20,-238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_6},{t:this.hair_5},{t:this.hair_4}]},1).to({state:[{t:this.hair_7},{t:this.hair_8},{t:this.hair_9}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

	// decor
	this.instance_1 = new lib.wardrobe_3_3_mc();
	this.instance_1.setTransform(0,-35);

	this.instance_2 = new lib.wardrobe_3_3_mc();
	this.instance_2.setTransform(0,95);

	this.instance_3 = new lib.wardrobe_2_3_mc();
	this.instance_3.setTransform(0,-230);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-275,460,550);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-230,-252.1,460,572.2), new cjs.Rectangle(-230,-250.4,460,570.4), new cjs.Rectangle(-230,-246.7,460,566.8), new cjs.Rectangle(-230,-253.9,460,574), new cjs.Rectangle(-230,-248.9,460,569), new cjs.Rectangle(-230,-252.1,460,572.2), new cjs.Rectangle(-230,-250.3,460,570.3), new cjs.Rectangle(-230,-247.6,460,567.7), new cjs.Rectangle(-230,-247.9,460,568)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.fan_0 = new lib.fan_0_mc();
	this.fan_0.setTransform(-160,170);
	this.fan_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fan_0).wait(3).to({_off:false},0).wait(9));

	// options
	this.fan_1 = new lib.fan_1_1_mc();
	this.fan_1.setTransform(0,190);

	this.fan_2 = new lib.fan_2_1_mc();
	this.fan_2.setTransform(5,190);

	this.fan_3 = new lib.fan_3_1_mc();
	this.fan_3.setTransform(0,190);

	this.fan_4 = new lib.fan_4_1_mc();
	this.fan_4.setTransform(5,190);

	this.fan_5 = new lib.fan_5_1_mc();
	this.fan_5.setTransform(0,190);

	this.fan_6 = new lib.fan_6_1_mc();
	this.fan_6.setTransform(0,190);

	this.fan_7 = new lib.fan_7_1_mc();
	this.fan_7.setTransform(5,195);

	this.fan_8 = new lib.fan_8_1_mc();
	this.fan_8.setTransform(0,190);

	this.fan_9 = new lib.fan_9_1_mc();
	this.fan_9.setTransform(5,190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fan_1}]},3).to({state:[{t:this.fan_2}]},1).to({state:[{t:this.fan_3}]},1).to({state:[{t:this.fan_4}]},1).to({state:[{t:this.fan_5}]},1).to({state:[{t:this.fan_6}]},1).to({state:[{t:this.fan_7}]},1).to({state:[{t:this.fan_8}]},1).to({state:[{t:this.fan_9}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_4_3_mc();
	this.instance.setTransform(0,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(9));

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-80,135);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(80,0);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-80,-135);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(80,135);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-80,0);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(80,-135);

	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(-80,135);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(80,0);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(-80,-135);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(10,-238);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(10,-238);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(10,-238);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(10,-238);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(10,-238);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(10,-238);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(10,-238);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(10,-238);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(10,-238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.hair_7},{t:this.hair_9},{t:this.hair_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

	// decor
	this.instance_1 = new lib.wardrobe_3_3_mc();
	this.instance_1.setTransform(0,-35);

	this.instance_2 = new lib.wardrobe_3_3_mc();
	this.instance_2.setTransform(0,95);

	this.instance_3 = new lib.wardrobe_2_3_mc();
	this.instance_3.setTransform(0,-230);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-275,460,550);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-230,-250.9,460,571), new cjs.Rectangle(-230,-246.6,460,566.7), new cjs.Rectangle(-230,-247.3,460,567.4), new cjs.Rectangle(-230,-250.4,460,570.5), new cjs.Rectangle(-230,-246.9,460,567), new cjs.Rectangle(-230,-245.9,460,566), new cjs.Rectangle(-230,-249.7,460,569.8), new cjs.Rectangle(-230,-245,460,565), new cjs.Rectangle(-230,-247.3,460,567.4)];


(lib.bodyDressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-275,460,550);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-225,300,385);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-275,460,550);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-226.3,300,386.4);
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


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":99});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(400.5,700.5,1,1,0,0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:460.5},11).to({y:510.5},4).wait(35).to({y:700.5},9).to({_off:true},1).wait(21));

	// curtain
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(60).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,800), new cjs.Rectangle(-200,0,1200,778.2), new cjs.Rectangle(-200,0,1200,756.4), new cjs.Rectangle(-200,0,1200,734.6), new cjs.Rectangle(-200,0,1200,712.8), new cjs.Rectangle(-200,0,1200,690.9), new cjs.Rectangle(-200,0,1200,669.1), new cjs.Rectangle(-200,0,1200,647.3), new cjs.Rectangle(-200,0,1200,625.5), new cjs.Rectangle(-200,0,1200,603.7), rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect=new cjs.Rectangle(-200,0,1200,610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,631.1), new cjs.Rectangle(-200,0,1200,652.2), new cjs.Rectangle(-200,0,1200,673.4), new cjs.Rectangle(-200,0,1200,694.5), new cjs.Rectangle(-200,0,1200,715.6), new cjs.Rectangle(-200,0,1200,736.7), new cjs.Rectangle(-200,0,1200,757.8), new cjs.Rectangle(-200,0,1200,778.9), new cjs.Rectangle(-200,0,1200,800), rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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


(lib.blinking_light_3_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.blinking_light_2_2_mc();

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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.714,0.714,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.714,0.714,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


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
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,610);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-1.3,1200,734.3);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,760,450);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


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


(lib.dressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(200,50);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-200,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_3}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-310,500,760);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,210);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,740);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,210);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,740);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(200,50);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-200,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_3}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-310,500,760);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,210);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,740);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(50,210);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-50,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-290,300,740);
p.frameBounds = [rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect];


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


(lib.Bubble_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
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
	this.instance.setTransform(400,800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,830);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1100.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,520);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,1200,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(120,530,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(400.5,510.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1524.4);
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
	this.locations_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.199;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
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
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(450,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(350,540);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,520);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,520);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.social_network_mc},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":259});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(460,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:470},10).to({y:520},5).wait(25).to({y:700},10).wait(161));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_7_mc();
	this.dressupPanel_mc.setTransform(240,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-800},0).wait(28).to({x:290},16).to({x:240},4).wait(40).to({x:-800},20).wait(151));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},71).wait(80));

	// boy
	this.instance = new lib.boy_1_mc();
	this.instance.setTransform(-600,360);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({_off:false},0).to({x:300},25).to({x:260},4).wait(51));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(610,375);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1400},0).wait(28).to({x:560},16).to({x:610},4).wait(60).to({x:400},20).wait(51).to({x:500},29).wait(51));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},20).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-26.3,821.2,786.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1050,-26.3,2651.2,816.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-981.8,-26.2,2530.6,816.3), new cjs.Rectangle(-913.7,-26.2,2410,816.2), new cjs.Rectangle(-845.6,-26.2,2289.4,816.3), new cjs.Rectangle(-777.5,-26.2,2168.7,816.2), new cjs.Rectangle(-709.3,-26.2,2048.1,816.3), new cjs.Rectangle(-641.2,-26.2,1927.5,816.2), new cjs.Rectangle(-573.1,-26.2,1806.9,816.3), new cjs.Rectangle(-505,-26.2,1686.2,816.2), new cjs.Rectangle(-436.8,-26.2,1565.6,816.3), new cjs.Rectangle(-368.7,-26.2,1445,816.2), new cjs.Rectangle(-300.6,-26.2,1324.3,816.3), new cjs.Rectangle(-232.5,-26.2,1203.7,816.2), new cjs.Rectangle(-164.4,-26.2,1083.1,816.3), new cjs.Rectangle(-96.2,-26.2,962.5,816.2), new cjs.Rectangle(-28.1,-26.2,841.9,816.3), new cjs.Rectangle(40,-26.3,721.2,816.3), new cjs.Rectangle(27.5,-26.2,746.2,816.3), new cjs.Rectangle(15,-26.2,771.2,816.2), new cjs.Rectangle(2.5,-26.2,796.2,816.3), new cjs.Rectangle(-10,-26.3,821.2,816.3), new cjs.Rectangle(-10,-26.3,821.2,793.3), rect=new cjs.Rectangle(-10,-26.3,821.2,786.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-26.3,873.2,786.3), new cjs.Rectangle(-114,-26.3,925.2,786.3), new cjs.Rectangle(-166,-26.3,977.2,786.3), new cjs.Rectangle(-218,-26.3,1029.2,786.3), new cjs.Rectangle(-270,-26.3,1081.2,786.3), new cjs.Rectangle(-322,-26.3,1133.2,786.3), new cjs.Rectangle(-374,-26.3,1185.2,786.3), new cjs.Rectangle(-426,-26.3,1237.2,786.3), new cjs.Rectangle(-478,-26.3,1289.2,798.3), new cjs.Rectangle(-530,-26.3,1341.2,816.3), new cjs.Rectangle(-582,-26.3,1393.2,816.3), new cjs.Rectangle(-634,-26.3,1445.2,816.3), new cjs.Rectangle(-686,-26.3,1497.2,816.3), new cjs.Rectangle(-738,-26.3,1549.2,816.3), new cjs.Rectangle(-790,-26.3,1601.2,816.3), new cjs.Rectangle(-842,-26.3,1653.2,816.3), new cjs.Rectangle(-894,-26.3,1705.2,816.3), new cjs.Rectangle(-946,-26.3,1757.2,816.3), new cjs.Rectangle(-998,-26.3,1809.2,816.3), rect=new cjs.Rectangle(-1050,-387,2060,1177), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1050,-26.3,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), new cjs.Rectangle(-1050,-26.2,2060,816.2), new cjs.Rectangle(-1050,-26.2,2060,816.3), rect=new cjs.Rectangle(-1050,-26.3,2060,816.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(90,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:470},10).to({y:520},5).wait(25).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(640,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1400},0).wait(28).to({x:590},15).to({x:640},5).wait(40).to({x:1400},20).wait(101));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},71).wait(30));

	// hero
	this.hero_2 = new lib.hero_2_for_mask_mc();
	this.hero_2.setTransform(260,270);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-800},0).wait(28).to({x:310},15).to({x:260},5).wait(60).to({x:400},20).wait(81));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-128,845.5,888);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1115.5,-128,2665.5,918), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1041.5,-128,2537.5,918), new cjs.Rectangle(-967.5,-128,2409.5,918), new cjs.Rectangle(-893.5,-128,2281.5,918), new cjs.Rectangle(-819.5,-128,2153.5,918), new cjs.Rectangle(-745.5,-128,2025.5,918), new cjs.Rectangle(-671.5,-128,1897.5,918), new cjs.Rectangle(-597.5,-128,1769.5,918), new cjs.Rectangle(-523.5,-128,1641.5,918), new cjs.Rectangle(-449.5,-128,1513.5,918), new cjs.Rectangle(-375.5,-128,1385.5,918), new cjs.Rectangle(-301.5,-128,1257.5,918), new cjs.Rectangle(-227.5,-128,1129.5,918), new cjs.Rectangle(-153.5,-128,1001.5,918), new cjs.Rectangle(-79.5,-128,873.5,918), new cjs.Rectangle(-5.5,-128,745.5,918), new cjs.Rectangle(-15.5,-128,765.5,918), new cjs.Rectangle(-25.5,-128,785.5,918), new cjs.Rectangle(-35.5,-128,805.5,918), new cjs.Rectangle(-45.5,-128,825.5,918), new cjs.Rectangle(-55.5,-128,845.5,918), new cjs.Rectangle(-55.5,-128,845.5,895), rect=new cjs.Rectangle(-55.5,-128,845.5,888), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-55.5,-128,883.5,888), new cjs.Rectangle(-55.5,-128,921.5,888), new cjs.Rectangle(-55.5,-128,959.5,888), new cjs.Rectangle(-55.5,-128,997.5,888), new cjs.Rectangle(-55.5,-128,1035.5,888), new cjs.Rectangle(-55.5,-128,1073.5,888), new cjs.Rectangle(-55.5,-128,1111.5,888), new cjs.Rectangle(-55.5,-128,1149.5,888), new cjs.Rectangle(-55.5,-128,1187.5,900), new cjs.Rectangle(-55.5,-128,1225.5,918), new cjs.Rectangle(-55.5,-128,1263.5,918), new cjs.Rectangle(-55.5,-128,1301.5,918), new cjs.Rectangle(-55.5,-128,1339.5,918), new cjs.Rectangle(-55.5,-128,1377.5,918), new cjs.Rectangle(-55.5,-128,1415.5,918), new cjs.Rectangle(-55.5,-128,1453.5,918), new cjs.Rectangle(-55.5,-128,1491.5,918), new cjs.Rectangle(-55.5,-128,1529.5,918), new cjs.Rectangle(-55.5,-128,1567.5,918), rect=new cjs.Rectangle(-210,-387,1760,1177), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-128,1760,918), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:470},10).to({y:520},5).wait(25).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(160,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600},0).wait(28).to({x:210},16).to({x:160},4).wait(40).to({x:-600},20).wait(101));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},71).wait(30));

	// hero
	this.hero_2 = new lib.hero_2_for_jewelry_mc();
	this.hero_2.setTransform(550,220);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1600},0).wait(28).to({x:490},16).to({x:550},4).wait(60).to({x:400},20).wait(81));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-166.4,855.5,926.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-750,-166.4,2665.5,956.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-699.3,-166.4,2545.5,956.4), new cjs.Rectangle(-648.7,-166.4,2425.5,956.4), new cjs.Rectangle(-598.1,-166.4,2305.6,956.4), new cjs.Rectangle(-547.5,-166.4,2185.5,956.4), new cjs.Rectangle(-496.8,-166.4,2065.5,956.4), new cjs.Rectangle(-446.2,-166.4,1945.5,956.4), new cjs.Rectangle(-395.6,-166.4,1825.6,956.4), new cjs.Rectangle(-345,-166.4,1705.5,956.4), new cjs.Rectangle(-294.3,-166.4,1585.4,956.4), new cjs.Rectangle(-243.7,-166.4,1465.5,956.4), new cjs.Rectangle(-193.1,-166.4,1345.4,956.4), new cjs.Rectangle(-142.5,-166.4,1225.5,956.4), new cjs.Rectangle(-91.9,-166.4,1105.6,956.4), new cjs.Rectangle(-41.2,-166.4,985.5,956.4), new cjs.Rectangle(9.4,-166.4,865.6,956.4), new cjs.Rectangle(60,-166.4,745.5,956.4), new cjs.Rectangle(47.5,-166.4,773,956.4), new cjs.Rectangle(35,-166.4,800.5,956.4), new cjs.Rectangle(22.5,-166.4,828,956.4), new cjs.Rectangle(10,-166.4,855.5,956.4), new cjs.Rectangle(10,-166.4,855.5,933.4), rect=new cjs.Rectangle(10,-166.4,855.5,926.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-28,-166.4,893.5,926.4), new cjs.Rectangle(-66,-166.4,931.5,926.4), new cjs.Rectangle(-104,-166.4,969.5,926.4), new cjs.Rectangle(-142,-166.4,1007.5,926.4), new cjs.Rectangle(-180,-166.4,1045.5,926.4), new cjs.Rectangle(-218,-166.4,1083.5,926.4), new cjs.Rectangle(-256,-166.4,1121.5,926.4), new cjs.Rectangle(-294,-166.4,1159.5,926.4), new cjs.Rectangle(-332,-166.4,1197.5,938.4), new cjs.Rectangle(-370,-166.4,1235.5,956.4), new cjs.Rectangle(-408,-166.4,1273.5,956.4), new cjs.Rectangle(-446,-166.4,1311.5,956.4), new cjs.Rectangle(-484,-166.4,1349.5,956.4), new cjs.Rectangle(-522,-166.4,1387.5,956.4), new cjs.Rectangle(-560,-166.4,1425.5,956.4), new cjs.Rectangle(-598,-166.4,1463.5,956.4), new cjs.Rectangle(-636,-166.4,1501.5,956.4), new cjs.Rectangle(-674,-166.4,1539.5,956.4), new cjs.Rectangle(-712,-166.4,1577.5,956.4), rect=new cjs.Rectangle(-750,-387,1760,1177), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-750,-166.4,1760,956.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":259});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:470},10).to({y:520},5).wait(25).to({y:700},10).wait(161));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(240,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-800},0).wait(28).to({x:290},16).to({x:240},4).wait(40).to({x:-800},20).wait(151));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},71).wait(80));

	// boy
	this.instance = new lib.boy_2_mc();
	this.instance.setTransform(1400,360);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({_off:false},0).to({x:510},25).to({x:560},4).wait(51));

	// hero
	this.hero_1 = new lib.hero_1_for_dressup_mc();
	this.hero_1.setTransform(620,485);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1400},0).wait(28).to({x:570},16).to({x:620},4).wait(60).to({x:400},20).wait(51).to({x:320},29).wait(51));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},20).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-15.5,840.6,775.6);
p.frameBounds = [rect, new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-1050,-15.5,2660.6,805.6), new cjs.Rectangle(-1050,-15.5,2660.6,805.5), new cjs.Rectangle(-981.8,-15.5,2540.5,805.6), new cjs.Rectangle(-913.7,-15.5,2420.5,805.5), new cjs.Rectangle(-845.6,-15.5,2300.6,805.6), new cjs.Rectangle(-777.5,-15.5,2180.5,805.5), new cjs.Rectangle(-709.3,-15.5,2060.5,805.6), new cjs.Rectangle(-641.2,-15.5,1940.5,805.5), new cjs.Rectangle(-573.1,-15.5,1820.6,805.6), new cjs.Rectangle(-505,-15.5,1700.5,805.5), new cjs.Rectangle(-436.8,-15.5,1580.5,805.6), new cjs.Rectangle(-368.7,-15.5,1460.5,805.5), new cjs.Rectangle(-300.6,-15.5,1340.4,805.6), new cjs.Rectangle(-232.5,-15.5,1220.5,805.5), new cjs.Rectangle(-164.4,-15.5,1100.6,805.6), new cjs.Rectangle(-96.2,-15.5,980.5,805.5), new cjs.Rectangle(-28.1,-15.5,860.6,805.6), new cjs.Rectangle(40,-15.5,760,805.5), new cjs.Rectangle(27.5,-15.5,772.5,805.6), new cjs.Rectangle(15,-15.5,790.5,805.5), new cjs.Rectangle(2.5,-15.5,815.5,805.6), new cjs.Rectangle(-10,-15.5,840.6,805.5), new cjs.Rectangle(-10,-15.5,840.6,782.5), rect=new cjs.Rectangle(-10,-15.5,840.6,775.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-15.5,892.6,775.6), new cjs.Rectangle(-114,-15.5,944.6,775.6), new cjs.Rectangle(-166,-15.5,996.6,775.6), new cjs.Rectangle(-218,-15.5,1048.6,775.6), new cjs.Rectangle(-270,-15.5,1100.6,775.6), new cjs.Rectangle(-322,-15.5,1152.6,775.6), new cjs.Rectangle(-374,-15.5,1204.6,775.6), new cjs.Rectangle(-426,-15.5,1256.6,775.6), new cjs.Rectangle(-478,-15.5,1308.6,787.5), new cjs.Rectangle(-530,-15.5,1360.6,805.5), new cjs.Rectangle(-582,-15.5,1412.6,805.6), new cjs.Rectangle(-634,-15.5,1464.6,805.5), new cjs.Rectangle(-686,-15.5,1516.6,805.6), new cjs.Rectangle(-738,-15.5,1568.6,805.5), new cjs.Rectangle(-790,-15.5,1620.6,805.6), new cjs.Rectangle(-842,-15.5,1672.6,805.5), new cjs.Rectangle(-894,-15.5,1724.6,805.6), new cjs.Rectangle(-946,-15.5,1776.6,805.5), new cjs.Rectangle(-998,-15.5,1828.6,805.6), rect=new cjs.Rectangle(-1050,-387,2060,1177), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1050,-15.5,2580.5,805.6), new cjs.Rectangle(-1050,-15.5,2544.9,805.5), new cjs.Rectangle(-1050,-15.5,2509.3,805.6), new cjs.Rectangle(-1050,-15.5,2473.7,805.5), new cjs.Rectangle(-1050,-15.5,2438.1,805.6), new cjs.Rectangle(-1050,-15.5,2402.5,805.5), new cjs.Rectangle(-1050,-15.5,2366.9,805.6), new cjs.Rectangle(-1050,-15.5,2331.3,805.5), new cjs.Rectangle(-1050,-15.5,2295.7,805.6), new cjs.Rectangle(-1050,-15.5,2260.1,805.5), new cjs.Rectangle(-1050,-15.5,2224.5,805.6), new cjs.Rectangle(-1050,-15.5,2188.9,805.5), new cjs.Rectangle(-1050,-15.5,2153.3,805.6), new cjs.Rectangle(-1050,-15.5,2117.7,805.5), new cjs.Rectangle(-1050,-15.5,2082.1,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5), new cjs.Rectangle(-1050,-15.5,2060,805.6), new cjs.Rectangle(-1050,-15.5,2060,805.5)];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(90,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:470},10).to({y:520},5).wait(25).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(640,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1400},0).wait(28).to({x:590},15).to({x:640},5).wait(40).to({x:1400},20).wait(101));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},71).wait(30));

	// hero
	this.hero_1 = new lib.hero_1_for_mask_mc();
	this.hero_1.setTransform(260,280);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-800},0).wait(28).to({x:310},15).to({x:260},5).wait(60).to({x:400},20).wait(81));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.2,-104,908.3,864);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1178.2,-104,2728.3,894), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1104.2,-104,2600.3,894), new cjs.Rectangle(-1030.2,-104,2472.3,894), new cjs.Rectangle(-956.2,-104,2344.3,894), new cjs.Rectangle(-882.2,-104,2216.3,894), new cjs.Rectangle(-808.2,-104,2088.3,894), new cjs.Rectangle(-734.2,-104,1960.3,894), new cjs.Rectangle(-660.2,-104,1832.3,894), new cjs.Rectangle(-586.2,-104,1704.3,894), new cjs.Rectangle(-512.2,-104,1576.3,894), new cjs.Rectangle(-438.2,-104,1448.3,894), new cjs.Rectangle(-364.2,-104,1320.3,894), new cjs.Rectangle(-290.2,-104,1192.3,894), new cjs.Rectangle(-216.2,-104,1064.3,894), new cjs.Rectangle(-142.2,-104,936.3,894), new cjs.Rectangle(-68.2,-104,808.3,894), new cjs.Rectangle(-78.2,-104,828.3,894), new cjs.Rectangle(-88.2,-104,848.3,894), new cjs.Rectangle(-98.2,-104,868.3,894), new cjs.Rectangle(-108.2,-104,888.3,894), new cjs.Rectangle(-118.2,-104,908.3,894), new cjs.Rectangle(-118.2,-104,908.3,871), rect=new cjs.Rectangle(-118.2,-104,908.3,864), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-118.2,-104,946.3,864), new cjs.Rectangle(-118.2,-104,984.3,864), new cjs.Rectangle(-118.2,-104,1022.3,864), new cjs.Rectangle(-118.2,-104,1060.3,864), new cjs.Rectangle(-118.2,-104,1098.3,864), new cjs.Rectangle(-118.2,-104,1136.3,864), new cjs.Rectangle(-118.2,-104,1174.3,864), new cjs.Rectangle(-118.2,-104,1212.3,864), new cjs.Rectangle(-118.2,-104,1250.3,876), new cjs.Rectangle(-118.2,-104,1288.3,894), new cjs.Rectangle(-118.2,-104,1326.3,894), new cjs.Rectangle(-118.2,-104,1364.3,894), new cjs.Rectangle(-118.2,-104,1402.3,894), new cjs.Rectangle(-118.2,-104,1440.3,894), new cjs.Rectangle(-118.2,-104,1478.3,894), new cjs.Rectangle(-118.2,-104,1516.3,894), new cjs.Rectangle(-118.2,-104,1554.3,894), new cjs.Rectangle(-118.2,-104,1592.3,894), new cjs.Rectangle(-118.2,-104,1630.3,894), rect=new cjs.Rectangle(-210,-387,1760,1177), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-104,1760,894), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(710,520);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({y:470},10).to({y:520},5).wait(25).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(160,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600},0).wait(28).to({x:200},16).to({x:160},4).wait(40).to({x:-600},20).wait(101));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(109).to({_off:false},0).to({_off:true},71).wait(30));

	// hero
	this.hero_1 = new lib.hero_1_for_jewelry_mc();
	this.hero_1.setTransform(555,240);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1600},0).wait(28).to({x:500},16).to({x:555},4).wait(60).to({x:400},20).wait(81));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-144,923.3,904);
p.frameBounds = [rect, rect=new cjs.Rectangle(-750,-144,2728.3,934), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-700,-144,2609.5,934), new cjs.Rectangle(-650,-144,2490.8,934), new cjs.Rectangle(-600,-144,2372,934), new cjs.Rectangle(-550,-144,2253.3,934), new cjs.Rectangle(-500,-144,2134.5,934), new cjs.Rectangle(-450,-144,2015.8,934), new cjs.Rectangle(-400,-144,1897,934), new cjs.Rectangle(-350,-144,1778.3,934), new cjs.Rectangle(-300,-144,1659.5,934), new cjs.Rectangle(-250,-144,1540.8,934), new cjs.Rectangle(-200,-144,1422,934), new cjs.Rectangle(-150,-144,1303.3,934), new cjs.Rectangle(-100,-144,1184.5,934), new cjs.Rectangle(-50,-144,1065.8,934), new cjs.Rectangle(0,-144,947,934), new cjs.Rectangle(50,-144,828.3,934), new cjs.Rectangle(40,-144,852,934), new cjs.Rectangle(30,-144,875.8,934), new cjs.Rectangle(20,-144,899.5,934), new cjs.Rectangle(10,-144,923.3,934), new cjs.Rectangle(10,-144,923.3,911), rect=new cjs.Rectangle(10,-144,923.3,904), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-28,-144,961.3,904), new cjs.Rectangle(-66,-144,999.3,904), new cjs.Rectangle(-104,-144,1037.3,904), new cjs.Rectangle(-142,-144,1075.3,904), new cjs.Rectangle(-180,-144,1113.3,904), new cjs.Rectangle(-218,-144,1151.3,904), new cjs.Rectangle(-256,-144,1189.3,904), new cjs.Rectangle(-294,-144,1227.3,904), new cjs.Rectangle(-332,-144,1265.3,916), new cjs.Rectangle(-370,-144,1303.3,934), new cjs.Rectangle(-408,-144,1341.3,934), new cjs.Rectangle(-446,-144,1379.3,934), new cjs.Rectangle(-484,-144,1417.3,934), new cjs.Rectangle(-522,-144,1455.3,934), new cjs.Rectangle(-560,-144,1493.3,934), new cjs.Rectangle(-598,-144,1531.3,934), new cjs.Rectangle(-636,-144,1569.3,934), new cjs.Rectangle(-674,-144,1607.3,934), new cjs.Rectangle(-712,-144,1645.3,934), rect=new cjs.Rectangle(-750,-387,1760,1177), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-750,-144,1760,934), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
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

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-329.4,821.2,1089.4);
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

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-329.4,845.5,1089.4);
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

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,855.5,1089.4);
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

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-329.4,840.6,1089.4);
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

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.2,-329.4,908.3,1089.4);
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

	// objects
	this.frame_1_mc = new lib.quest_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,923.3,1089.4);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
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

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.LocationScreen_6();

	this.instance_10 = new lib.RedirectScreen();

	this.instance_11 = new lib.ResultScreen();

	this.instance_12 = new lib.InstructionScreen();

	this.instance_13 = new lib.Glitter_2();
	this.instance_13.setTransform(500,50);

	this.instance_14 = new lib.FlashAnimation();
	this.instance_14.setTransform(150,280);

	this.instance_15 = new lib.TrackMove_2();
	this.instance_15.setTransform(350,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_16 = new lib.TrackMove();
	this.instance_16.setTransform(270,50);

	this.instance_17 = new lib.Cursor();
	this.instance_17.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_18 = new lib.OrientationLockScreen();

	this.instance_19 = new lib.CurtainScreen();

	this.instance_20 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_17},{t:this.instance_16},{t:this.gravity_explosion_comp},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1520.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4), rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,610), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,0,525,430), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,600,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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