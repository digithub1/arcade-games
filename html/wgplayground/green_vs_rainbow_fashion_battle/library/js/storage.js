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
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,600,600],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,824,420,420],[422,824,420,420],[724,202,303,561],[0,0,1200,200],[402,202,320,620],[0,202,400,555]]},
		{name:"storage_atlas_6", frames: [[0,0,500,300],[618,545,352,339],[972,434,259,400],[918,0,298,432],[502,0,414,321],[258,545,358,334],[0,881,399,299],[0,302,256,571],[401,886,320,320],[723,886,320,320],[258,323,580,220]]},
		{name:"storage_atlas_7", frames: [[966,644,230,436],[644,644,320,320],[644,322,320,320],[322,644,320,320],[322,966,320,320],[322,322,320,320],[0,966,320,320],[966,0,320,320],[0,644,320,320],[966,322,320,320],[0,322,320,320],[644,966,320,320],[0,0,320,320],[644,0,320,320],[322,0,320,320]]},
		{name:"storage_atlas_8", frames: [[1013,822,228,318],[783,925,228,318],[1013,502,228,318],[0,785,323,270],[325,428,230,372],[325,802,221,369],[557,324,267,288],[826,484,168,439],[0,449,277,334],[212,0,208,426],[422,0,261,322],[548,802,233,348],[0,0,210,447],[1148,0,150,500],[0,1057,320,240],[685,0,320,240],[826,242,320,240]]},
		{name:"storage_atlas_9", frames: [[0,0,228,318],[165,878,165,242],[648,1053,148,239],[230,182,273,241],[798,1053,145,237],[1028,0,242,214],[1012,703,135,271],[714,499,153,282],[1146,986,132,269],[869,499,141,269],[1149,703,129,281],[869,770,129,281],[0,836,163,246],[332,878,155,250],[0,320,219,299],[819,0,207,264],[819,266,204,231],[0,621,204,213],[1025,476,206,225],[1000,976,144,248],[0,1130,223,155],[489,1053,157,228],[206,641,173,235],[435,553,173,235],[221,425,212,214],[505,329,207,222],[612,0,205,327],[1028,216,200,258],[230,0,380,180],[610,783,180,180]]},
		{name:"storage_atlas_10", frames: [[932,1028,240,120],[546,761,260,120],[364,0,180,180],[0,0,180,180],[182,182,180,180],[364,1092,180,180],[364,182,180,180],[0,182,180,180],[182,364,180,180],[546,0,180,180],[182,910,180,180],[0,728,180,180],[182,0,180,180],[364,728,180,180],[182,1092,180,180],[0,364,180,180],[0,1092,180,180],[546,182,180,180],[182,728,180,180],[0,910,180,180],[364,364,180,180],[364,910,180,180],[182,546,180,180],[0,546,180,180],[364,546,180,180],[546,364,180,180],[1174,958,89,278],[808,1150,212,132],[808,867,122,250],[1158,169,106,230],[808,668,155,197],[546,546,152,213],[932,867,187,159],[962,488,219,139],[1144,0,146,167],[990,0,152,177],[965,629,135,219],[1121,780,156,176],[990,179,166,154],[1102,629,198,149],[700,546,260,120],[546,1005,260,120],[728,0,260,120],[728,122,260,120],[728,244,260,120],[728,366,260,120],[546,883,260,120],[546,1127,260,120]]},
		{name:"storage_atlas_11", frames: [[411,544,180,100],[961,531,120,120],[593,612,120,120],[905,362,105,152],[603,317,105,152],[407,742,224,80],[560,199,141,116],[0,333,128,181],[439,191,119,155],[837,647,109,129],[715,778,91,142],[717,526,116,128],[518,918,98,180],[519,1100,191,92],[326,1132,191,92],[382,646,191,94],[407,824,194,92],[411,348,189,97],[519,1194,191,92],[298,973,122,157],[948,653,104,127],[189,206,164,141],[168,62,167,142],[0,62,166,143],[290,349,119,177],[0,898,129,169],[99,516,117,178],[422,918,94,188],[1012,362,91,167],[218,639,162,128],[633,734,80,162],[0,754,155,142],[717,427,155,97],[1188,254,96,178],[897,1010,106,111],[136,1047,160,123],[1225,0,73,252],[1057,1163,128,91],[804,0,155,138],[835,526,124,119],[585,59,135,138],[808,778,137,93],[439,59,144,130],[791,987,104,114],[309,769,96,202],[130,349,158,143],[712,239,191,92],[218,528,191,109],[411,447,190,95],[722,140,191,97],[905,268,191,92],[712,333,191,92],[1185,434,89,157],[0,207,187,124],[603,471,112,139],[136,1172,188,102],[0,1069,134,160],[1089,0,134,158],[355,62,82,232],[961,0,126,169],[0,516,97,236],[1105,399,78,182],[733,922,56,225],[1112,160,74,237],[131,909,146,136],[157,769,150,138],[0,0,400,60],[791,1123,360,32],[715,656,120,120],[947,782,113,112],[808,873,113,112],[923,896,113,112],[1054,653,113,112],[1062,767,113,112],[1169,593,113,112],[1177,707,113,112],[827,1163,113,112],[1177,821,113,112],[1062,881,113,112],[1177,935,113,112],[1153,1049,113,112],[618,922,113,112],[942,1163,113,112],[1038,995,113,112],[712,1163,113,112],[402,0,400,57],[915,171,195,95]]},
		{name:"storage_atlas_12", frames: [[304,570,80,100],[386,570,80,100],[1234,771,57,95],[0,618,75,104],[820,1021,83,35],[156,1021,83,35],[241,1022,83,35],[460,1017,83,35],[956,106,220,51],[0,87,220,51],[956,53,220,51],[444,87,220,51],[222,87,220,51],[956,0,220,51],[0,34,220,51],[222,34,220,51],[444,34,220,51],[372,410,160,60],[420,871,70,70],[1155,885,70,70],[151,816,98,66],[1144,216,98,66],[807,550,78,108],[1223,550,75,105],[887,550,77,108],[966,550,77,107],[792,201,60,58],[606,140,56,55],[1246,657,41,55],[492,937,85,37],[72,897,74,64],[580,884,99,54],[683,858,85,74],[591,525,93,98],[666,85,94,116],[1178,102,95,112],[148,949,76,39],[847,939,76,39],[925,951,76,39],[579,940,76,39],[1081,957,76,39],[1003,953,76,39],[606,203,184,54],[372,242,184,54],[0,256,184,54],[0,200,184,54],[186,200,184,54],[0,140,186,58],[762,85,95,114],[278,786,90,76],[724,0,136,83],[251,864,86,71],[235,937,102,41],[770,931,75,57],[1244,216,52,62],[813,846,76,83],[602,800,79,82],[724,774,87,82],[67,816,82,79],[1144,159,30,52],[1159,957,76,39],[0,969,76,39],[417,976,76,39],[339,939,76,40],[495,976,76,39],[226,980,76,39],[744,261,184,54],[930,287,184,54],[372,298,184,54],[186,256,184,54],[1116,287,184,54],[558,259,184,54],[840,429,86,88],[681,934,59,70],[686,527,119,76],[417,943,71,26],[859,124,77,28],[1001,866,69,83],[151,884,82,63],[493,861,85,74],[376,140,126,80],[686,605,101,79],[1103,399,95,102],[923,773,76,95],[78,990,76,39],[742,990,76,39],[847,980,76,39],[304,981,76,39],[925,992,76,39],[573,981,76,39],[558,315,184,54],[188,140,186,58],[744,317,184,54],[186,312,184,54],[0,312,184,54],[930,343,184,54],[862,0,92,122],[103,522,93,102],[1045,550,95,86],[923,737,38,34],[77,626,105,70],[591,625,64,120],[0,522,101,94],[1072,883,81,68],[198,522,104,91],[891,870,84,67],[930,399,89,111],[1178,0,112,100],[339,864,79,73],[813,774,98,70],[0,1010,76,39],[1159,998,76,39],[651,1006,76,39],[382,1017,76,39],[1003,994,76,39],[1081,998,76,39],[186,368,184,54],[0,368,184,54],[1116,343,184,54],[558,371,184,54],[372,354,184,54],[744,373,184,54],[1063,159,79,126],[510,525,79,116],[1021,399,80,123],[1142,550,79,103],[724,686,59,76],[362,0,360,32],[0,0,360,32],[306,424,40,40],[1100,769,65,112],[144,702,65,112],[535,747,65,112],[1112,655,65,112],[966,659,65,112],[1179,657,65,112],[789,660,65,112],[1045,638,65,112],[856,660,65,112],[1167,771,65,112],[292,672,65,112],[211,702,65,112],[359,672,65,112],[0,724,65,112],[657,686,65,112],[426,757,65,112],[77,698,65,112],[1033,752,65,112],[468,643,65,112],[923,660,30,75],[198,615,92,85],[666,34,44,45],[683,800,38,38],[859,159,100,100],[504,140,100,100],[468,570,40,57],[657,625,26,29],[1001,773,26,29],[535,643,40,57],[602,747,40,40],[535,702,40,40],[0,838,40,40],[1246,714,40,40],[426,714,40,40],[370,786,40,40],[493,799,40,40],[426,672,40,40],[493,757,40,40],[1242,497,40,40],[102,424,100,96],[204,424,100,96],[1200,399,100,96],[534,427,100,96],[636,427,100,96],[738,429,100,96],[0,424,100,96],[306,472,100,96],[408,472,100,96],[1227,885,70,70],[0,897,70,70],[840,524,400,24],[961,159,100,100]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.animation_rubbing_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
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



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ear1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ear2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ear3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ear4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyes4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.free_games_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.head1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.head1_new = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.head2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.head2_new = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.head3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.head3_new = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.head4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.head4_new = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bm1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeupfringe_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeuphair_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_1cl_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_2cl_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_3cl_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes_4cl_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bm = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2m_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2m_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero3_b0 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_1cl_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_2cl_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_3cl_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes_4cl_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero3_socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero3_socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero3big_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero3big_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.hero4_b0 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.hero4_socks1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero4_socks2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero4fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_4_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_21_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_24_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_27_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_28_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_29_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_42_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_43_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_45_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_46_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_47_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_51_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_57_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_58_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_59_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_60_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_61_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_62_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.nose1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.nose2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.nose3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.nose4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.rouge_19_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.rouge_21_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.rouge_22_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.rouge_24_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.rouge_25_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.rouge_26_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.rouge_27_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.rouge_28_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.rouge_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shadows10_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.shadows15_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.shadows16_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.shadows20_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.shadows21_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shadows23_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shadows29_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows2_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shadows31_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shadows34_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.shadows42_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.shadows46_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.shadows47_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.shadows48_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.shadows49_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.shelf_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.stick_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.tale_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.title_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
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
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgD5Au4MAAAhdvIHzAAMAAABdvg");
	this.shape.setTransform(25,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,600);
p.frameBounds = [rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCB9D5","#FEF5F9"],[0,1],5.7,-217.9,-4.2,159.7).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300,1.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,0.467,1],-49.9,0,50,0).s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,185,213,0.6)").s().p("AnzGPQilABh2h2Qh1h1AAilQAAikB1h1QB2h1ClAAIPnAAQClAAB1B1QB2B1AACkQAAClh2B1Qh1B2ilgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0044").s().p("ADkDHQgMAAgKgEQgKgEgHgJQgFgIgBgNQABgRAKgMQAJgLAPgIQAPgIAQgEIAEgWQgNAOgMAFQgMAEgKgBQgTABgMgMQgJgJgCgPIgIAKQgOAQgPAFQgOAFgLgBQgRAAgKgJQgKgJgDgSQgFAJgJAIQgJAJgLAFQgLAFgOAAQgMABgLgHQgNgGgHgOIgEgKIgJALQgPAPgPAGQgQAFgKgBQgTABgMgMQgMgMAAgYIAAgNIACgNIAsjHIA7gIIguDWIgCAHIAAAGQAAAIAEAEQAFADAHAAQAMgBAKgJQAFgFAEgHIAAgDQAAgVAGgWQAGgYANgWQANgWASgOQASgNAbAAQAQAAAJAFQAHAGABAJIAAADIAEgWIA5AAIgdCGIgBAHIAAAGQAAAJADAEQAFAEAIAAQAMAAAIgLQAIgLAFgPIAAAAIAbh/IA6AAIgdCGIgBAFIAAAFQAAAHACAGQADAFAHAAQAKAAAIgKQAJgJAEgOIAciBIA6AAIgpC4QANgEAJgHQAJgHAIgLQAGgLAGgRIARAAQgHAagNAPQgMAPgNAHQgNAIgNADIgGAdQgGAcgMAPQgMAPgOAFQgNAGgMAAIgDgBgADhCCQgJAEgFAHQgFAGAAAIQAAAEADAFQADAEAHAAQAGAAAHgJQAGgJAEgSIACgLQgKADgJAGgAAqhAQgKALgHASQgIARgEASQgEARAAAPQAAAPADAHQAEAGAEABQAGACADAAQAHAAAGgEQAHgEAFgIQAFgIADgLIAUhYQAAgDgCgEQgBgDgEgDQgDgDgHAAQgNAAgKAMgAlVBjIA2j8IA8gIIgdCGQAQgCANgJQAMgJAJgPQAKgOAFgRQAFgRAAgQQAAgPgEgMQgGgNgKgHQgMgHgRAAQgxAAgbAaQgbAZgBAtQAAALABAFIADAIIACAEQgVAAgLgIQgLgKAAgVQABgUAMgTQAMgSAUgPQAVgOAYgJQAZgJAZAAQAhABAVALQAVAKAJASQALASgBAVQABAUgJASQgHATgPAQQgPAPgVAKQgWAJgbAAIgCAAIgYBwg");
	this.shape.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.7,-17,75.5,40);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC7FA6","#FFFFFF"],[0,1],20,25,20,-25).s().rr(-75,-25,150,50,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-25,150,50);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().rr(-80,-30,160,60,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,185,213,0.898)").s().p("A1ED5QhoAAhKhJQhIhJAAhnQAAhmBIhKQBKhIBoAAMAqKAAAQBnAABJBIQBJBKAABmQAABnhJBJQhJBJhnAAg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,320,50);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
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

	// Слой 1
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
	this.shape.graphics.f("#000000").s().p("AQRZHQjYBFjTg0Qjjg4hTirQgsBJhZA0QhTAwhmAUQhmAUhggMQhjgLhCgrQg/AchfAYQiJAjhZgMQh+gQgxhrQgjApg6AkQg4AjhEAYQizA/iugfQjEgkg9iQQgkhPAUhTQA9j6Adj1QAjkvgejEQhKAXhBgCQh3gDhHhTQjjDOkWBZQktBhkQhJQl+hlgJjlQgEgwARhaQAYh0A2j9QiZg5hkiDQhxiVALi3IABAAQAGilB9iZQCPitEQiAQCwhTDNguQDhgzDLAHQHxARC1FZQDvhkCgBaQB2hPCBAAQCOAABVBlQCehuCwgeQB/gWB0AbQCBAeBSBUQBLg9BsgpQBugqBugKQEGgYBvCcQBVg1BtgeQBwgfBrADIAkhkQDEiXBLgkQCPhGC2AUQCTARBUBbQBVBcACCSQBsiID8AiQCRAUBbBAQBrBLAQB/QDAABBuB8QCbgvClA4QCYA0BUCLQBNCAAFCyQAFCshACtQhCCyh8CCIAAABQjIDvktBEIAeBjIhfBbIguAPQi9A9hJAOQiXAdhtgmQhYgfhChLIhDBIIghAAQAnDOhGDXQhIDaicCOQgxA4g4ArQidB2i+AOQgaACgZAAQijAAiQhSg");
	this.shape.setTransform(0,17.5,0.583,0.583);

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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD255E").s().p("AAUCVIgUgUIgSAUI0yAAQg/ABgrgtQgsgsgBg9QABg9AsgrQArgsA/gBIUxAAIATAUIAUgUIUyAAQA9ABAsAsQAtArgBA9QABA9gtAsQgsAtg9gBg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_3_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
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

	// Layer 2
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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().rr(-155,-20,310,40,20);
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,310,40);
p.frameBounds = [rect];


(lib.preloader_1_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuvEhQBujGAAjDIAAgOQgKjtigh1QiNhmj4gEIgZAAQieACivApQiqAoiSBEQh/A8hkBOQBuhhCdhKQCShECrgpQCugpCfgBIAZAAQD4ADCNBmQCfB1ALDuIAAANQAADQh7DRQhvC8i1CSQCmiRBiizgAooH6QANgQARgiIAYg2QAyhyAag5QAohUAggzQA1hTA2gjQgpAngoBGQgYApghBGQgbA4gxBzIgZA1QgQAjgNAPQgSAWghAXgAFZHgQg6ghgMg6QgJguAWgLQAVgLAHAhQALA7A7AhQA3AgA9gJQCwgaB6hcQiFB6jOAeQgNACgOAAQguAAgrgZgAbRHUQhUg1gphlQgKgRAWgOQAVgPALAWQAcBCAgAoQApAzA5AXQAeALAdAAQAeABAYgMIABAAQguAdgvAAQgxAAgxgfgAP7HNQhYgxguhVQgMgYASgVQASgWAMAYQAjBBAlAoQAuAyA1ATQBAAVAwgYQgpAigxAAQgsAAgzgcgEAizAD1QgGgqgRgoQgQgogxhCIg6hLQgkgygNggQgWg0AJgwQAJg0AsgQQgPAZAAAmQABAkAPAkQANAgAkAxQAUAcAmAvQAxBDAQAnQARAnAGArQgKA8gkA3QgiAyg2AnQBPhMAOhegAW3FMQAYghAMgtQAMgxgag5QgQgjgug/IhFhUQgtg5gLghQgSg3AJgrQAKgyArgRQgPAZgBAkQAAAiAMAkQALAiAtA4IBGBUQApA4ARApQAYA3gHA0QgJBIgjApQggAkhEAcQAsgeAYgjgAFehBQAghpBXg/QgxA9gZA+QgnBjALBzIBAgnIAygdQAdgSATgNIgFAGQgZAXgoAYIhFApIhAAnQABiDAXhIgEgkkAAqIACgLQgJgzAYg2QAag3A/gtQgfAfgRAkQgZA1AJA1QgEAdAEAcQgUgEgWgKgAlwiOQAEgwgFgYQgKgrgwgIQgigHgxAMQghAIgnAQQgcANgEgNQBVgrA7gOQAxgMAjAFQAvAJAKArQAFAYgEAwIgLB8IgrA3gANVjAQAChohlgmQhQgfhtATQiLAYh/BiQCPiACkgcQBsgTBRAfQBkAlgBBpQAAAmgVAJQgGADgEAAQgKAAAAgQgAAljmQgGgEAAgFQAAgmgagQQgVgNgnADQgwAEg1AnQBNhHBBgGQAlgDAWAOQAaAPAAAlQABAsgVAEIgDAAQgGAAgFgEgAe7laQA8gaBDgLQB8gQBCAZQAWAKAOAMQAVAWgYAQQgYAPgNgSQgNgOgXgJQhFgbh5ATQhxAQhUA7QAtgsBBgdgATklrQA7gbBBgMQB9gXBCAYQAdAKALAQQANASgYALQgYAMgGgJQgNgPgbgJQhEgZh6AYQhsAThUA8QAugsA+geg");
	this.shape.setTransform(-63.6,-18.2,0.576,0.576);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF66","#FFCC00"],[0,1],0,-9.7,0,20.3).s().p("Ay/gHIAbiPQg0ASgZAKQhHAagoAaQg4AjgVAqQgRAlAGAmIgCATQgXgJgPgPQgSgQgFgWQANhFBZhJQBDg4BYgpQBggtB4gbQCKgfByAHQCHAJBOA/QBaBIAGCLQADBWgkBdQmUAulaBWQAgiVAdicgAUNCkIgrgsQgagagMgVQgig5Ang+QAxhTB8gUQAxgIAoAGQAnAGAKAQQgIARgQAEQgPAEgQgJQg2ghgrAdQgrAdANA/QAIAlA3BCQA4BEAKAqQhagNhcgLgAldg9QAugXAmgJQA/gPAIAkQADANgHBKIgJBgIBVhyQBShvA9gGQAqgDAAAfQAAAegXAlQgRAZgeAjQgVgVgZACQhHAFhDByQhKAFhiAJQAbiLgNhHgAMNB8QgsgugKgjQgOgyAng4QA3hOB3gWQAvgJAlAFQAmAEAJAOQgKAYgSACQgNABgWgKQg0gZgnAcQgpAeAMA+QAIAlAvA0QA5A+AMAXQhggHh5gGgADrg1QBXhNBlgSQBFgMAvAUQAuATAIAnQAHApgnAtQgsA0heAtIgdAOIgqAAQAmgZANgMQAVgUAQgbQAPgbAEgkQAFgqgRgXQgZgigwAUQg2AWgoBTQgRAggGAeQgEAYAAAkIiSADQAthlBThHg");
	this.shape_1.setTransform(-66.9,-26.3,0.893,0.893);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBE0E").s().p("EghrALHQAdiRBIlJQBJlIAtkHIAJgnIgxASQiGA0g3A5QgXAXgNAcQgzBtA9BZQhhAAhPhFQhUhJAchSQAjhuB9hqQBtheCahIQCOhDCqgqQC6gtCpgCIAaAAQECADCYBuQCzCAALEEIAAAOQgHDkiKDgQiFDajXCbQjdCfjyAsQhVAQhRAAQirAAibhFgAsUIJQBNjVAxi8QA2jNAFiBQADgygFgWQgGgigcg1IApgVQBjgyA/gQQBHgRAyARQA4ASAOA7QADAOAAAdQABAYgCASQCQjDB7gLQA7gFAiAcQAjAbAEA3QgFBMg5BTQgiAzhRBYQgPgYgLgPQgVgbgOABQhhAHhxDoQgMAYhFCbQgpBegWAbQgzA/h2AyQhbAmg7AAQgSAAgPgDgAChF2QhshFgNiOQAEg1ANg6QAvjVCgiqQCoizDSgkQCFgXBbAtQBoAyAJB7QgIBbhkBcQhPBJhxA2QhvAzhuA9QgnAWgPArQgNAmAJAvQAIAqAtAYQAqAWAsgHQCrgZB1hbQBHg3A5hYQAtBjAgAwQA2BRA/AWQAhALAbgFQAagFARgTQAggmgIhFQgGhBghgqQgPgVgkgjQgnglgQgTQhAhNgLheQgEgjATg1QARgtAYgjQAwhEBRgwQBOgtBdgSQCHgYBNAbQBEAXAIA3QgFAegYAdQgYAfgnAXIghAUIgsgnQgdgVgbAAQgzAAgLApQgIAeAQAvQAPAtBpB4QBeCDgNCCQASgQAcgQIAxgYQAkBhAWAmQArBJA/AYQAmAPAegIQAdgJAPgbQAUgmgCg8QgBg8gWgjQgLgRhShTQhGhHgXhCQgLgfgDgfQgDgdAOgtQAMgoASgeQAuhMBWgyQBSgwBlgPQCGgSBNAeQBDAaAJA3QgFAdgYAdQgYAdgnAWIggATQgkgjgJgHQgcgWgbgCQg2gCgJArQgIAhATAtQALAdBGBdQBHBfAUAvQAUAuAGAzQgNBnhSBVQhQBThzAjQhkAehdgHQhngIhQg2QgtgfgfgpQgggsgIgvQg1BVhgA5QhbA3hqAPQhsAQhbgfQhighg3hRQhEBCiEAuQiIAviFABIgIAAQiQAAhbg7gAJcl1QgaAJgdAfQgiAlgdA6QgaA3gGAhQgBAJAAAvIBBgmQAngYAWgVQATgSAQgXQASgbAIgZQANgogCggQgDgjgZAAQgIAAgLAEg");
	this.shape_2.setTransform(-66.1,-9.6,0.576,0.576);

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


(lib.wardrobe_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_0_img();
	this.instance.setTransform(-200,-278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-278,400,555);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_img();
	this.instance.setTransform(-290,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-110,580,220);
p.frameBounds = [rect];


(lib.tale_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tale_img();
	this.instance.setTransform(-97,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-48,195,95);
p.frameBounds = [rect];


(lib.stick_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_0_img();
	this.instance.setTransform(-200,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-12,400,24);
p.frameBounds = [rect];


(lib.shoes_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes_4_img();
	this.instance.setTransform(-32,-41,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBINIAAwZIODAAIAAQZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-52.5,90,105);
p.frameBounds = [rect];


(lib.shoes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_4cl_img();
	this.instance.setTransform(-37,-41,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_2_img();
	this.instance.setTransform(-42,-44,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokI+IAAx8IRJAAIAAR8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-57.5,110,115);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes_4cl_img();
	this.instance.setTransform(41.2,-51,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmKG2IiGu2ILHh6IFaOTIhlDyIoBBwg");
	this.shape.setTransform(-2.1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65.8,105.9,127.2);
p.frameBounds = [rect];


(lib.shoes_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes_3_img();
	this.instance.setTransform(-32,-49,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBI+IAAx8IODAAIAAR8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-57.5,90,115);
p.frameBounds = [rect];


(lib.shoes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_3cl_img();
	this.instance.setTransform(-45,-56,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokKJIAA0SIRJAAIAAUSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_2_img();
	this.instance.setTransform(-38,-71,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokNSIAA6jIRJAAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-85,110,170);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes_3cl_img();
	this.instance.setTransform(36,-30,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmxEEIAYqGIGkhvIGnIoIhEE6In4CBg");
	this.shape.setTransform(1.1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.3,-59.3,86.9,99.8);
p.frameBounds = [rect];


(lib.shoes_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes_2_img();
	this.instance.setTransform(-32,-46,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOI+IAAx7IMdAAIAAR7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-57.5,80,115);
p.frameBounds = [rect];


(lib.shoes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_2cl_img();
	this.instance.setTransform(-37,-49,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzIlIAAxJIPnAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-55,100,110);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_2_img();
	this.instance.setTransform(-34,-35,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes_2cl_img();
	this.instance.setTransform(49.6,-63,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApQA0ICFqrILFhyIFXR6IiKDhIrMB4g");
	this.shape.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.6,-74.9,118.7,149.4);
p.frameBounds = [rect];


(lib.shoes_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes_1_img();
	this.instance.setTransform(-32,-50,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBJXIAAytIODAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.shoes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shoes_1cl_img();
	this.instance.setTransform(-36,-63,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKjIAA1EIODAAIAAVEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-67.5,90,135);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(-62,-57,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqTKOIhvnzIG+s2IPvBsIBYTLg");
	this.shape.setTransform(-0.6,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.8,-69.2,154.3,133.6);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes_1cl_img();
	this.instance.setTransform(38,-46,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An5EUIAqqVIGRjbIFCAtID2KsIhYEIIpKDYg");
	this.shape.setTransform(-0.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-59.1,101.3,121.2);
p.frameBounds = [rect];


(lib.shelf_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_1_img();
	this.instance.setTransform(-160,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-310,320,620);
p.frameBounds = [rect];


(lib.shelf_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_0_img();
	this.instance.setTransform(-200,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-29,400,57);
p.frameBounds = [rect];


(lib.shadows_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows31_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows20_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows49_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows46_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows29_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows15_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows20_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows16_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows20_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows31_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows48_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows1_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows10_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows34_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows47_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows2_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows23_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows46_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows15_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows20_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows21_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows16_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows42_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows29_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.shadow_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_decor_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
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


(lib.nose4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.nose4_img();
	this.instance.setTransform(-20.1,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.1,-43.5,40,57);
p.frameBounds = [rect];


(lib.nose3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose3_img();
	this.instance.setTransform(-13,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-14,26,29);
p.frameBounds = [rect];


(lib.nose2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nose2_img();
	this.instance.setTransform(-13.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.5,-14.5,26,29);
p.frameBounds = [rect];


(lib.lips_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_51_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_62_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_51_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_42_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_57_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_46_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_59_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_27_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_61_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_47_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_58_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_45_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_29_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_28_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_29_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_43_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_60_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_1_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_57_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_29_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_2_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_21_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_1_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_24_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.indicator_part_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_0_img();
	this.instance.setTransform(-200,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-30,400,60);
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


(lib.indicator_part_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.indicator_part_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.indicator_part_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.hero4_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_top1_img();
	this.instance.setTransform(129.6,-90.5);

	this.instance_1 = new lib.hero4_top2_img();
	this.instance_1.setTransform(128.8,-89.8);

	this.instance_2 = new lib.hero4_top3_img();
	this.instance_2.setTransform(168.5,-89);

	this.instance_3 = new lib.hero4_top4_img();
	this.instance_3.setTransform(109.6,-90.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(129.6,-90.5,146,136);
p.frameBounds = [rect, new cjs.Rectangle(128.8,-89.8,150,138), new cjs.Rectangle(168.5,-89,59,76), new cjs.Rectangle(109.6,-90.7,198,149), null];


(lib.hero4_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_socks1_img();
	this.instance.setTransform(161.8,64.3);

	this.instance_1 = new lib.hero4_socks2_img();
	this.instance_1.setTransform(144.1,52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(161.8,64.3,56,225);
p.frameBounds = [rect, new cjs.Rectangle(144.1,52.2,74,237), null];


(lib.hero4_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_shoes_1_img();
	this.instance.setTransform(57.6,-51.5);

	this.instance_1 = new lib.hero4_shoes_2_img();
	this.instance_1.setTransform(57.6,-41);

	this.instance_2 = new lib.hero4_shoes_3_img();
	this.instance_2.setTransform(57.2,-48.7);

	this.instance_3 = new lib.hero4_shoes_4_img();
	this.instance_3.setTransform(57.6,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(57.6,-51.5,79,126);
p.frameBounds = [rect, new cjs.Rectangle(57.6,-41,79,116), new cjs.Rectangle(57.2,-48.7,80,123), new cjs.Rectangle(57.6,-28.5,79,103), null];


(lib.hero4_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_shadows_1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero4_shadows_2_img();
	this.instance_1.setTransform(-90.2,-24.6);

	this.instance_2 = new lib.hero4_shadows_3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero4_shadows_4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero4_shadows_5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero4_shadows_6_img();
	this.instance_5.setTransform(-90.2,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero4_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero3_rouge2_img();
	this.instance_1.setTransform(-95.5,-62.8);

	this.instance_2 = new lib.hero3_rouge3_img();
	this.instance_2.setTransform(-95.5,-49.6);

	this.instance_3 = new lib.hero3_rouge4_img();
	this.instance_3.setTransform(-95.5,-51.1);

	this.instance_4 = new lib.hero3_rouge5_img();
	this.instance_4.setTransform(-95.5,-45.8);

	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-62.8,191,109), new cjs.Rectangle(-95.5,-49.6,190,95), new cjs.Rectangle(-95.5,-51.1,191,97), rect=new cjs.Rectangle(-95.5,-45.8,191,92), rect, null];


(lib.hero4_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_lips_1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero4_lips_2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero4_lips_3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero4_lips_4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero4_lips_5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero4_lips_6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero4_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_hair1_img();
	this.instance.setTransform(-100.4,-64);

	this.instance_1 = new lib.hero4_hair2_img();
	this.instance_1.setTransform(-74.4,-43.5);

	this.instance_2 = new lib.hero4_hair3_img();
	this.instance_2.setTransform(-67.9,-36);

	this.instance_3 = new lib.hero4_hair4_img();
	this.instance_3.setTransform(-76.9,-32);

	this.instance_4 = new lib.hero4_hair5_img();
	this.instance_4.setTransform(-75.9,-76.5);

	this.instance_5 = new lib.hero4_hair6_img();
	this.instance_5.setTransform(-39.5,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.4,-64,200,258);
p.frameBounds = [rect, new cjs.Rectangle(-74.4,-43.5,152,177), new cjs.Rectangle(-67.9,-36,135,219), new cjs.Rectangle(-76.9,-32,156,176), new cjs.Rectangle(-75.9,-76.5,166,154), new cjs.Rectangle(-39.5,-49,78,182)];


(lib.hero4_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_fringe1_img();
	this.instance.setTransform(-44.5,-55.5);

	this.instance_1 = new lib.hero4_fringe2_img();
	this.instance_1.setTransform(-65.9,-83);

	this.instance_2 = new lib.hero4_fringe3_img();
	this.instance_2.setTransform(-61.9,-61);

	this.instance_3 = new lib.hero4_fringe4_img();
	this.instance_3.setTransform(-39.5,-60.5);

	this.instance_4 = new lib.hero4_fringe5_img();
	this.instance_4.setTransform(-36.9,-68.5);

	this.instance_5 = new lib.hero4_fringe6_img();
	this.instance_5.setTransform(-54.9,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-55.5,89,111);
p.frameBounds = [rect, new cjs.Rectangle(-65.9,-83,112,100), new cjs.Rectangle(-61.9,-61,126,169), new cjs.Rectangle(-39.5,-60.5,79,73), new cjs.Rectangle(-36.9,-68.5,98,70), new cjs.Rectangle(-54.9,-59,97,236)];


(lib.hero4_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(97.3,-132.5);

	this.instance_1 = new lib.hero4_dress2_img();
	this.instance_1.setTransform(87.3,-135.3);

	this.instance_2 = new lib.hero4_dress3_img();
	this.instance_2.setTransform(76,-141.8);

	this.instance_3 = new lib.hero4_dress4_img();
	this.instance_3.setTransform(90.3,-130.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(97.3,-132.5,212,214);
p.frameBounds = [rect, new cjs.Rectangle(87.3,-135.3,207,222), new cjs.Rectangle(76,-141.8,233,348), new cjs.Rectangle(90.3,-130.5,205,327), null];


(lib.hero4_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_bottom1_img();
	this.instance.setTransform(147.4,4.5);

	this.instance_1 = new lib.hero4_bottom2_img();
	this.instance_1.setTransform(135.1,-10.5);

	this.instance_2 = new lib.hero4_bottom3_img();
	this.instance_2.setTransform(146.8,16);

	this.instance_3 = new lib.hero4_bottom4_img();
	this.instance_3.setTransform(146.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(147.4,4.5,81,68);
p.frameBounds = [rect, new cjs.Rectangle(135.1,-10.5,104,91), new cjs.Rectangle(146.8,16,82,232), new cjs.Rectangle(146.5,9.5,84,67), null];


(lib.hero4_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70707D").s().p("AgZe+QgEgSAEgjQAFgsgBgQQAAgigWiBQgXh9AAgnQAAg4APgbQARgeAkAAIAEAAIAZBlQAcCSAEBaQADBcAPAlIAAgBIAeBZQAKAeAEASQgiADgLAAQheAAgLg0gAmubkQgagzAAhPQAAhSAag6QAag8ApAAQAOAAAMAJQADBPAJBUQAKBuACAcIgTAXQghAqgSAAQgZAAgWgtgAimOXQgdhVgUhgQgah7AAhiQABjRBRgNIgBAGIAGgGIAGgBQAIAAAQAKQADEQASDdIAAABIABAHQAOCjAXCIIgEABQhMh/gVg7gAiyE8QgBACgBAAQAAABAAAAQAAgBABgBQABgBACgBQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAgAhkCuQgvAAhKkHQhGj8AAhzQABjfBIAAQARAAAnAeIACABQANCBAQCwIARDCQAVDsAAAoQAAAcgEATIgDAAgAgGgTQAAjLA7jyQA7jwAwAAQAjAAAYAkQgMCShCDUIgzCfIAAAAQgwCMgjBXQgMgmgBg5gAsYtVQAcgBBCgEQADAAACgCIACgDIAAAAQBLhHBOiHQBMiDCfidIADACIAJAKIgBAAIgEARIhNBNQguAsgdArIgtBEQgVAfgjAtIg5BHQgeAygOAUIgFAFQgJAHgFAKQgRANgVAAQglAAgwgJgAjru/QgrgnAAgkQAAgSAJgiQAIgeAIgSQAEgKAjggQAiggAKgXQAPglALg0QAKg4AFgYQAOg6AggPQgUAegBA1QgBAQAFA8QACAqgFAQQgDArgkAsQgiAqAAAvQAAAhAZAwQAaAwAAAGQgBAJgJAHQgMAIgQAAQggAAgogmgAgNvTIASguQAUgtAAgiQAAgggag6Qgeg7AAhGIACgWIAGgKQAFAWALAhQATBIAGAHQAlAwATAxQATAugBAoQABAkgLASQgRAeguAAQggAAAAgZgAEO0nIAIgJIACgDQASgTAUgUIADgDIADgCQAygsBcgoQA7gbBSgwIB3hFIADgDQAGgMAIgiIAAAAQAHghAIgZIABAAIAGgWIACABQgHAigBA1QgFAqgsAaQiUBMhfA4Qi1BpgcBBQgBgWANgXgAEW2aQgBhBALiqQAKipAAguQgBhfgRg2IANAHQAyAkgJA3QgIA6gDBhQgDBggKBdQgKBeAAA6QAAAfABAKQABAJADAJIABACQgPAOgMAPIgBhVgAlk4vQhDjjAAgnQABg0AjgkQgOAdAAAcQABA3AzDYQAhCKAOBDQgahVgchegAhQ7RQglgLgIAAIgtAFQgOAAgOgNQgRgPAAgVQgBgXAXgNQALgHANgDIAFgBQAIgBAIAAQAUABAeAKIAJADQAcAIAOAAQASAAAwgYQAzgYAZAAQAWAAASANQAWAPAAAcQAAAggbAKQgRAGgugBQgQgBgsATQgoATgCAAQgKAAgjgLgAMH8OIACgnQACgKAOgGQgEAMgCANQgDAfgKArIgDABIAEgtgAib+AQhtgXgzgSIAWAAIBHAIQAeAJAhACIAbAEIABAAIAFABQAaAGAMAKQAFAHAGAOIAEAIQgkgSgugKgAgG96QABgIAFgMIAAgEIAAACIABACIACgEQADgGAOgIQATgLAqgPIAQgGQA2gTAxgKIAUgBIAZABQAMAAALAEQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBABIAAABQhRAPg5AQQhqAfgbAog");
	this.shape.setTransform(-0.5,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C5C6A").s().p("EAArAgMQhYg0AAhDQAAgRAIgpQAHgoAAgMQAAgfgghbQghhcAAgfQAAhXAjhGQAmhMA6gJIAVBVIgEAAQgmAAgPAdQgPAcAAA3QAAAnAUB+QAWCAABAjQABAPgFAsQgEAjADASQALA1BhgBQAKAAAjgDQACAKAAAGQAAAOgSAYQgJAMgIAGQg1gPgvgbgAmzcQQgognAAgjQAAgmAVhGIAdhnQAHg/AJglQAThFAtgBQAYAAAfApIADAAIAAADIABAtQgMgIgOgBQgpABgbA7QgZA6AABTQAABOAZAzQAWAtAaAAQARAAAigqIATgWIAAAEQAAAbgEAXQggAzg5gBQgnAAgpgogAnOUZQAFglAaggIAAAAQAaghA0hiQATgnAPghQgMBMgdBLQgKAZhHBhQgOAUgKASQAAgUADgTgAhHRWQgzh2gwiBQgihZgbhlQgih9AAg+QAAhMAohHQAthQA8AAQAMgBALAKQgJAPgCAKIAAACQhSAMAADRQAABiAaB7QAUBhAdBUQAUA7BNB/IAEAAIACAKQAMBKAOBDIAJAmQgagbhEicgAg0MdIACADIgBAEgAgGK0QABgSAAhWIgBgUIgBgKIgIh9QAEhAAWg3IALgXQAEAwAOBFQALA6AAAgQgBBLg6CDIACgMgAhhEmIgGAAIAPgRIAOgVIAAAsIAAAEQgPgKgIAAgAhaDQQgsgUhgkxQhkk8AAiaQAAhTAZgtQAgg3BJAAQAsAAASAQQAEAEAPATIAJBTIgCgCQgmgegRAAQhJAAAADfQAABzBGD9QBKEHAugBIADAAQgDAPgGAKIgGAKgAAIA8QAAh+gFg7IgSjkQgKh9AAhNIABgdIAAgDQAFhVAgg5QAshMBRAAQBSAAA0BDIAAAQQAAAagCAbQgZgkgiABQgwgBg8DwQg8DzAADLQAAA4AOAmIgBADQgQArgKAiQgSgegEhBgAjbBsIAAgEIACAHIgCgDgAsDpYIADgBIgBAFIgCgEgAriqpQAsglgBgaQAAgLgKgGQADAAAGgHQgkglhsA4IhcA5IgHgBIBdhBIAAAAQAngdAigEQAigFAjgNIgEAAQgNgDgbADIAEgEQgJgIgOABIAOgEQgVABglgFQAIgDAPgNIABgBIAFABIALAAIgQgBIgBAAQgNAAgLACIgPgNIgJgJIAFABIALACQAOADAOABQATABAMADIABAAIATAAQAwAJAlAAQAVAAARgNQgLARgCAZQgFA0gEAJQgmAdgkAgQgsAngRAfQADgcAigdgAvHrGIAAAAIACACIAFgBIA+g6QAvgsAAgDIAAgCIAIgCIAAAAQgDACgSARQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIhWBTIgJACIgFABIADgDgAuMrgIACABIgKAIgArtr9IAOABIgDAAQgiABgKAEIgJACQAYgIASAAgAtZsCIABAAIgHAFIAGgFgAtOsLIAKgEIAEgCIgXAOIAJgIgAtZsSIADgCIAUgTIAAAAQAIgFAOgCIAOgBQgUAGgZAPIgPAJIABgBgAtwsjQAHgGAPgEQgNAGgTAQIAKgMgAtasuIACgBIgCABgAjsuWQgzgzgShEQAWgnApgrQA3g5AKgMQAfgnAGggQAGgdAChAQADg9AGgcQATheBjAAQA3AAAmAzQAjAtAAA5QAAAcgKAoQgKAoAAAPIArBjQAqBsAAAvQAAAygYAXQgYAYg+AJQgfAEg0AWQgtATgtAAQhPAAg+hAgAhO15QgFAYgLA4QgLA0gPAlQgJAYgjAfQgiAggEALQgIARgIAeQgJAjAAASQAAAkAqAmQApAmAgAAQAQAAALgHQAKgIAAgJQAAgGgZgvQgZgwAAgiQAAguAigqQAkgsADgsQAFgQgDgqQgEg7ABgRQABg1AUgeQggAPgOA6gAAU1CIgCAXQAABFAdA7QAdA7AAAfQAAAjgUAtIgUAtQAAAaAhAAQAvAAARgfQAKgRAAglQAAgogSguQgTgxgmgwQgFgHgWhIQgKghgFgWIgGAKgAg/xyQgiAtAAAaQAAAXANAPQAOAQAIAMIAKAJQASAQAEAOQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIABAAQAAgRAqgrQArgrAAgJQAAgIglg9Qghg6AKgYQgOAbgvA+gAuitoQgHgEgDgFIAEAAIAAACQABADAGAEIACACIgDgCgAoru2IA5hHQAjgtAVgfIAshEQAegrAugsIBNhNQgVBFg7BKIAGAGIgMANIAAAAIgGgFQiCCJg6BRQgPAVgaAZIghAcQAOgUAegygAEg0YQgKghAAhLQAAgkAShxQAMhPAEghQgGgOgKgNIAAgMQAAgkgMgZQgFgKgGgHQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgCgEIg7hDQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIA0BQIADADIABADQATAZABAnIgGgGQgrgqgiABQgmAAhLAqIhFAqQgRABg3gcQg3gbgngBQg8AAgeAXQAJgaATgjIAdg3IgcApIgRAaIgJAQIgFgDQgrAsAAAxQAAArAZBKQAZBKAABAQAAATgDASIgDgLIgCgDIAAgEIgIgXQgOhDghiLQg0jYAAg3QAAgcAOgdQASgTAcgPIAeAAIAiAGIACgEIAaAIIADABIAOAEIAKAEIhHgJIgXAAQA0ASBtAXQAuAKAjATIgDgIQgGgOgFgIIAGAHQACACADABIgBgEIgBgDIgBgDQgEgMgPgJQg1gth1gMIAngMQAwgOBBgPQgKAmgLAOIgGAFIAIgEQAbgSAKgrIgBgDIACgEQADgRABgVQAaAZAUAAQAngBAjgfQAJAcAPAQIAEADIACADQANALAVAFQgpAggTAfQgMAHgIAJQgGAGgDAHIgBAEIgCAFQgGALAAAIIAAAKQAdgoBqgfQA4gQBSgPIAAgBQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQgKgFgMAAIgZgBIgUABQAWgEAWgDIgKAAQgZAAgoAIIAHgDIBLgcQARAEAMAGQARA2AABfQAAAugKCpQgKCqAABBIACBWQgOARgHAUQgBACABAEIAAAAIADgDIAJgLQgNAXAAAWQAdhBC0hpQBgg3CUhNQArgaAGgqQAAg1AIgiIgCgBIAFgdIAEgBQAJgqAEggQACgNAEgMIALgCQAggHAXgJIAigOIABAAIAagLIgDAHQgOAGgLADQgfAGgbAOQgbAOgFANQgFAMgCAXQgBAWABASIgMAmQgIAdAAAIIABAKIACAAIAAAGQgBAUgCAIQgBACABADIACADIAEgNIACgEIACgFQAJgbAhg6IAEgHIABgEIADgDIAOgYIAGgMIACAKIABAGIABAEIgBAEQAAAXgWAfQgMAQgGASIgEAOQgCAJAAAIIgHgCQgpBWhIAfQgsATiiCLQiSB+grAAQgsABgQgygAge7RQAiALAJgBQADAAAqgTQAsgSAQAAQAuACARgHQAbgKAAgfQAAgcgWgQQgSgMgWAAQgZgBgzAYQgyAYgSAAQgMAAgcgIIgJgDQgegKgUgBQgJAAgHACIgFABQgOADgKAGQgXAOAAAWQAAAWASAPQAOAMANAAIAtgFQAJAAAkAMgAjw1CIgJgKIAJAIIAAAAIAEAEgADZ32QAGgCACgCIABgDIgDAKgANw5MIAIADQgHAPgIAKQAGgOABgOgANh5UIABADIgBADgEACHggDIAcgBIgIAFIgEAEIgQgIg");
	this.shape_1.setTransform(-5.6,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#50505D").s().p("EgAKAiRQgwgXgfgVQgwghgWgYIABAAQgdghABghQADhWgFhpIAAAAQgCgagOhdIgPhWQABghAthBIABAAQAVgdAJgbIABgDIAAgfQAAg7gdhoQgThAgghWIAAgBIgBgBIgohpIg3iMIAAAAIgsh0QgkhjABhZIAAgCQAChaAwhnQAphYAUgzQAJAeAXAbQgJglgOguIgCgIQgZhPgkhrIgZhGIghhkIgBgBIg/i/Qg8i0ADiHIAAAAQACh3AYhWIAAAAIAAgBIAHgUIAAAAQAehdCiixIAAABQBChAgHg2QgGg0gUhJQgLgigEgVQAQASAbAAIAEAAIgCgBQgggSgTggIAAAAIgEgGQgVglAAgxQAAgNAHgWQAfgWA7AAQAnAAA3AcQA3AbATAAIBDgrQBMgqAlAAQAiAAAsAqIAFAGIAAAEQAAAygVArIgEAIIgBAEIgDACIgoBDQgCADgPAJQgRAJARgDIAWgFIAGACIgRAxIAAABIgQAvIAAAAQgYBHAAAWQAAAXAFAuQAFAtAfAsQAsCBALBTQALBOgBCTQg0hChRAAQhQAAgrBLQgjA5gFBVIAAADIgBAeQABBNAJB8IAVDlQAEA5AAB/QAFBCARAeQgOAyAAAfQAAAGADANQACALAAAHIAAABIACARIgMAXQgXA2gFBBIAIB9IABAKIACAUQAABVgCASIgCANIgeBAQgRjDgDjpIAAgRIAAgHIgBhVIAOgXIACgDIADgEQAIgPADgWQACgRAAgVQAAgogUjsIgSjEQgPingNh7IgHhJIgLhdQAIgBBkgpIh3AcQgCAAgCADQgCADABACIAJBMQgPgTgFgDQgSgQgrAAQhKAAggA3QgZAsAABTQABCbBjE7QBgExAsAVIAcAAIgLASIAAABQgQAYgIAQQgLgJgLAAQg9AAgtBQQgnBHAABNQgBA+AiB8QAcBlAhBaQAwCAAzB3QBECcAdAaIAMA0Qg8AIgmBMQgiBHAABXQgBAfAhBbQAgBcABAeQAAAMgIApQgHApgBAQQAABDBaA0QAtAbA1APQgMAJgLAAQgVAAgygYgAi203QgGAcgDA9QgCBBgFAcQgHAhgfAmQgKAMg3A5QgoArgXAnQATBFAyAyQA/BABPAAQAsAAAugTQA2gVAdgFQA9gJAZgXQAXgYAAgxQAAgwgqhsIgqhjQgBgPALgoQAKgoAAgbQAAg5gkguQgkgyg4AAQhkAAgTBdgAnQfWQgZgIgfgPIgBgBIgBAAQg2ggAAhpQAAgsAchjQAbhlAAgzIgDg2QgBgXABgWQAKgSAOgUQBHhiAKgZQAdhKANhNQAWg2AKgsQAOg8AKhEIAtBzIAoBmIgDAGIAAgBQg6BtgYBPIAAABQgJAngIA1QgIAzAAAMIAAAVIgCAAQgggogXAAQguAAgSBGQgKAlgGA/IgeBmQgUBHgBAlQAAAjApAoQAoAoAoAAQA4AAAhgzQgHAlgQAZQgeAsg7AAQgLAAgRgEgAtAnxIAAAAQgCgGAAgKIAAgFQARgeAtgoQAjggAmgcQAEgJAFg0QADgZAKgSQAFgJAJgHIAFgFIAhgdQAagYAQgWQA5hRCDiJIAFAGQhYBtgWBDQgDAJgDALIiOB5IgDACIgBADQgCApgGAeQgGAUgHAGIg6ApIAAgBQhGArgZBAIgEABIgCgEgAvdpIIgCgBIBdg6QBrg4AkAlQgGAIgDAAIgDgBIgBAAQgJgEgRABIgOgBQgSAAgYAIIgEABIgJABQgPACgRANIABAAQgPAMgiATQgiARgKACIgCAAgAwBpbIgBgBQAxgtAYgfIABAAIACgEIABgBQATgQANgGIABAAIABgBIABAAIABAAIADgBIAAACQAAADgvArIg+A7IgEABIgCgCgAvHp1IAygwIABgCIAOgJQAZgOAUgGIAfgGQAOAAAJAHIgEAEIgbADIg0ATIgEACIgFACIgKAFIgJAIIgBABIAAAAIgHAEIgrAfgAt2rhQgWgSgJgBIgCAAQgNABgVAAIgCAAIgFAAIgFgBIAAAAIgBAAIgBAAIgBgBIgBAAIgIgCIgHgDIgCgBIgCgCQgFgEgCgDIAAgDIACAAIBGAMIABAAQAMAAAPAEIAJAJIAPANIABABIgCAAIgDAAIgJACIgCgDgAhvt2IgKgJQgHgMgOgQQgOgPAAgWQAAgbAigsQAvg/AOgbQgKAZAjA5QAkA+AAAIQAAAIgqAsQgrArgBAQIgBAAQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgFgOgSgQgAhjvKIACAPQAFAOAIAAIABAAIAAABIABAFIAEACQACgEAHgMIAGgOQAAgFgHgJIgJgKIAAgBQAIgQAAgCIAAgEIgBgBQgbATAAAWgAhRu+QgIgJABgDIAFgMIAEAHQAEALAAACIgDAKIgDgGgAmAw3QA8hKAUhFIAEgRIABAAIAFABIAAgBQACgDgBgDIgDgLQACgTAAgSQAAhAgZhLQgZhJAAgrQAAgyArgsIAFADQgUAkgEAXIgBAHIAAACQAAA0AXApIAEAHIAEAHIgCABQgBADAAADQAEAWAOAwQAUBIAGAzQAFAwg7A5IgBAAQgpAtghAogAC/zGQgahkgDgqIAfhaQABgDgBgDIgDgDIARgbIABgFIACgDIAFgIQATgpADgvQAKAOAGANQgDAhgNBQQgSBwAAAkQABBLAJAhQAQAyAtAAQAqAACSh+QCiiMAtgTQBHgeAphXIAHADIAAABIACAgIAAABIAAAGIAAAAQgCAcgXAYIABAAIgOALIgBABQgTAOgXAAQgIAAgDgCIgEgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBABQiRB+hYBKQiiCDg8ABQgbgCggh6gAM13iIgBgEIABgFIgCggIAAAAQABgcAUgeQAXgfACgaQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQALgKApgSQAqgSATgFIAAAAIATgIQgHAUgsAPQhFAYgIAfQgBADACADQABADADABIAGgBIAigUIgBAAQAWgMARABIAAAAQAUAAAXgIIAcgJQgLAcgrAIQgdAEgPADQgcAFgRAMQgOAJgMAbQgHAQgMAkIgJAWgAMA4oIgBgKQAAgIAIgdIAMgmQgBgRABgWQACgYAFgLQAFgNAcgOQAbgOAegHQALgCAPgHQgNAWgdAKQgqAMgIAIIAAgBQgNAJAAAdQAAAUAEAZIABAEIgEAFQgkBBAAAIgANe6fQAhgaA8gSQAsgOAUgMQgCAIgGAHIgGAHIgBABQgKAHgQAFQgVAGgqASQglAQgNALIgDgQgAil87IgBAAIg5gEQgigDgTgHQgCgBgEABIgBABIgCAFIgigHIgdAAIALgFQAHgEAJgDQASgHAbgJQB1AMA0AuQgTgLgngEgABT+JQAMACAPgBIABAAIgIgDIgLgGIAEgDIAIgGQBZgEAzAMIhMAcIgHAEQgcAEgjAIQgwAMgcAQQAUgeApghgAhm/DQABgUgCgWIgLhqIgCgqQAggKAzgQIAngOIgEBTIAAABQAABUAOAuIAAAAIACAJQggAfgnAAQgWAAgbgYg");
	this.shape_2.setTransform(0.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EAA/Ai6QgXAAg2gaQgygYgfgVQgygjgWgZQgigmACgnQADhUgFhpQgCgagOhbIgOhZQgBgkAyhGQATgbAJgZIAAgeQAAg6gdhlQgRg6gbhMQg2BogXBLIAAgBQgIAngJA0QgIAzAAAKIABAvIABAoQADBGAIBLIALB6IABAWIAAAPQgDBCgZAnQgiAyhEAAQgMAAgUgFQgagHgggQIgCgBIgBAAQg+gkAAhzQAAgtAchmQAbhiAAgyIgCg0IgBgPQgBgoAEghQAGgpAcgjIABAAQAZgiAzhfQAjhFATg4IAMgqQAQhHAMhSIgshyQglhmABhaIAAgDQAChdAyhqQAshfAUg1QABgDADgBIABAAIAAgDQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIgCgDQgYhPglhrIgYhFIgihlIhAjAQg8i3ACiJQAChqAThQIh8BpQgDApgGAeQgHAbgMAIIg6AoIAAAAQhIAtgXBCQgBADgCACIgDAAIgCACQgDABgCAAQgEgBgBgDIgDgEIAAAAIgFgJIgDgGIAAABQgDgIAAgOQAAgkArgkQAkgfABgVQAAgDgEgBQgHgDgQACIAAAAQgeABgKADIgBAAQgLADgNACIgBAAQgLABgLAKQgPAMglAUQgnAVgNAAIAAAAQgLgBgSgHIgDgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIABgEQgXADgEgJIgBgEIAAgCIABgDIACgDQA4gzAZghQAMgQAFgDQAIgHATgGIAAAAIAWgHQgNgLgHgBQgNABgVgBQgZAAgSgMIAAAAQgXgOAEgQQAAgDACgBQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAIAPgBIACAAIBHALQAOAAAUAGQATAFASABQATABAOADIAAgBQAMACBegFIABgCQBJhGBOiFQBMiECiifIACgCQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIgCgEQgfhggfhrQhEjmAAgoQAAhMBDgtIABgBIAEgDIANgHQAPgJATgIIAMgEIAxgQQA4gRBWgUIAEAAIAAgDQADgWAAgcIgBgZIgKhqIgEgyQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAIBZgbIAxgRQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIAEADIABAFIgEBdIAAABQAABRANAsIAAAAQAJAeAPARIACADIACABIAAAAQACgDADAAQAhgCAdgBQBcgBAwARIACAAQAQAGALAIQA6AqgKBAQgJA5gDBgQgDBggKBeQgKBdAAA5QAAAeABAJIACALQAZgWAkgVQAjgVAugUQA6gaBSgwIB1hEQAFgMAHgcQAHgiAJgaIAAAAQAIgZADgXIAEgrIADgoQAAgYAlgIIABAAQAfgHAWgJIAjgNIAAAAIAkgPQADgBACABQABAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAMIgBADQgMAjgqANIgBAAIgHACQgeAKgIAGQgHAGAAAUIACAbIATgfIgBAAIAEgGQACgCADgBQACgBADACIAAAAQACABABADIABAAQAhgZA8gSQA6gSAMgOIACgDQACgCADAAQADAAACACQACACAAADIAAABQABAagMAQIAAgBIgGAHQAFAlhDAYIgKADQAGgBAFABQARAAAUgHIApgOQADgBACABIAEADQACACgBADQgGAzg/ALIgBAAIgrAHQgYAEgQALQgKAHgKAXQgGAPgNAjIAAABQgWA7gmAVIAAABIgRAHQgYAQgaAAIgNgBQiPB8hYBIQipCJg/gBQgmACgjiJQgThHgHgrIgFARIgBAAQgXBDAAAWQAAAWAFAsQAFArAdAoIABACQAtCEALBUQALBUgBCgIAAAFQAAAhgEAmQgOCNg+DHIg0CfQgwCLgkBbIgFAMQgOAqgIAhQgLAoAAAaQAAAFADALIACASIAAADIAAAAQADAzAQBRQAJA8AAAhQABBhhhC/IgEAEIgBAAIgBAAIAAAFIgBADQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAQDAAcCaQAKA2AMAxIALAvIALAtIAUBYIAZBeIAAABQAbCUAEBbQAEBYANAjQANAkARA1IABAAIAOAzQADAMAAAGQAAASgWAdIgLANQgUAUgUAAIgBAAgEgBXAhmQAfAVAwAXQAyAYAVABQALgBAMgIQAJgHAIgLQASgYABgOQAAgGgDgKQgEgSgKgeIgehZIAAABQgOglgEhcQgEhagbiSIgahlIgThUIgMgzIgJgmQgQhDgNhLIgCgKQgWiIgOijIAAgEIgBgDIAAgBQgTjdgDkQIAAgDIgBgsIgOAUIgPASIgGAGIABgGIABgCQACgJAIgQQAJgQAPgYIAAgBIALgSIAGgKQAGgKAEgPQAEgTAAgcQAAgogUjsIgSjCQgQiwgNiBIgJhTIgJhMQgBgCACgDQACgCACgBIB3gcQhkApgIACIALBcIAHBJQANB8APCmIASDEQAUDsAAAoQAAAVgCARQgDAWgIAPIgDAFIgBACIgPAYIABBUIAAAHIAAARQAEDpAQDDIAfhAQA8iEAAhKQAAgggKg6QgOhFgEgwIgCgRIAAgBQAAgHgCgLQgDgNAAgGQAAgfAOgyQAKgiAPgsIABgCQAkhZAviKIAAAAIAzifQBCjUAMiSQACgcAAgZIAAgQQABiTgLhPQgLhSgsiCQgfgsgFgtQgFguAAgWQAAgXAYhHIAAAAIAQgvIAAgBIASgxIADgJIgCACQgBADgHACIgWAFQgRAEARgKQAQgJABgDIAphCIACgDIABgDIAFgIQAUgsAAgxIAAgFQgBgogSgZIgCgDIgDgCIgzhQQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIA7BEIABAEQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAGAIAEAKQAMAZAAAkIAAAMQgCAugUApIgFAJIgCADIgBAEIgRAbIAEADQABADgBADIggBaQADAqAaBkQAgB6AbACQA8gBCiiDQBZhKCRh+QAAAAABAAQAAgBABAAQABAAAAAAQABgBAAAAIAFABQADACAIAAQAWAAAUgOIAAAAIAOgMIgBAAQAXgYADgcIAAAAIABgDIgBgDIAAAAIgDghIAAgBQAAgIACgJIAEgPQAGgRANgRQAVgeAAgYIABgDIgBgEIAAgGIgCgKIgHAMIgOAYIgCADIgBAEIgEAGQgiA6gJAcIgBAEIgCAFIgFAMIgBgCQgCgDABgDQADgHAAgUIAAgHQAAgIAlhAIADgGIgBgDQgEgZAAgUQAAgeANgIIAAAAQAJgIApgMQAegKAMgVIADgHIgbALIAAAAIgiANQgYAJggAHIgLADQgOAGgBAKIgDAnIgEAtIgGAdIgGAWIAAAAQgJAZgHAhIAAAAQgIAigGAMIgDADIh3BFQhSAwg7AbQhbAogzAsIgDACIgCADQgVAUgSATIgCADIgIAJIgJALIgCADIgBgBQgBgDABgCQAIgUAOgSQALgPAPgOIgBgCQgDgJgBgJQgBgKAAgfQAAg6AKheQAKhdADhgQADhhAJg6QAIg3gygkIgMgHQgNgGgQgEQgygNhZAEIgdACIARAHIALAGIAHAEIAAAAQgQAAgMgCQgWgEgNgMIgCgDIgDgCQgPgRgKgbIgCgJIAAAAQgOguAAhUIAAAAIAEhTIgmANQg0ARggAJIADAqIAKBqQACAXgBATQAAAVgDARIgCADIAAAEQgKArgaARIgJAFIAGgGQALgOALglQhCAPgvAOIgnAMQgbAIgSAHQgJADgHAEIgLAGQgcAOgTAUQgjAkgBA0QAAAnBDDjQAcBeAbBVIAHAYIAAADIADAEIADALIAEAMQAAACgBADIgBACIgEgEIgBAAIgJgIIgCgCQigCdhLCDQhPCHhKBHIgBAAIgCADQgCACgDAAQhCAEgcABIgTgBIAAAAQgNgCgSgBQgOgBgOgDIgMgCIgEgCQgQgEgLAAIgBAAIhHgLIgBAAIgFAAQADAFAIAEIACACIACABIAIADIAHACIACABIABAAIAAAAIABAAIABAAIAEABIAFAAIACAAQAVABANgCIACAAQAKABAVASIADAEIAJgDIACAAIACAAIAAAAQAKgCAOAAIABAAIAPABIgLAAIgEgBIgBABQgPANgIACQAlAGAUgBIgOADIgfAGIgOABQgNACgIAFIgBAAIgTATIgEACIAAABIgBABIgxAwIgJAJIAKgIIAsgeIAGgFIACgBIAXgPIAEgCIA1gTIAagDQAbgDANADIAEABQgjAMghAFQgiAFgoAcIAAABIhcBBIAGABIACABIACAAQALgBAhgSQAjgTAOgLIAAAAQAQgOAPgBIAJgBIAFgBIAIgCQALgEAhgBIADAAQARgCAKAEIABAAIACABQALAGgBALQABAagrAlQgjAdgCAcIgBAEQAAAKACAGIAAABIACADIACAEIACgFQAZg/BHgsIAAABIA5goQAIgHAFgTQAHgeACgqIABgDIACgCICOh5QADgKAEgKQAVhDBZhtIAAAAIALgOQAhgoApgtIABAAQA8g5gGgwQgGgzgUhIQgOgwgEgWQAAgDACgCIACgCIgEgGIgFgHQgXgpAAg0IAAgDIABgHQAEgXAUgjIAJgQIASgaIAcgpIgeA2QgTAkgIAaQgIAVAAAOQAAAwAVAlIAEAGIAAABQATAfAgASIACABIgEAAQgbAAgQgSQAFAVAKAiQAUBJAGA0QAIA2hDBAIAAgBQiiCxgeBdIAAAAIgHAUIAAABIAAABQgYBWgCB2IAAABQgCCGA7C0IBADAIAAAAIAiBlIAYBFQAlBrAYBQIAAAEIACADQAOAuAJAlQgWgbgJgeQgVA0goBXQgxBngCBaIAAADQgBBYAkBjIAsB0IABAAIA2CMIApBpIABACIAAAAQAfBWATBAQAdBoAAA7IAAAgIgBACQgJAbgVAeIAAAAQguBAAAAhIAOBWQAOBdACAaIAAAAQAFBqgDBVQgBAhAdAhIAAAAQAVAYAwAhgAlWQSQgLAsgWA2QgPAigUAnQgzBhgbAiIAAAAQgaAggFAlQgCATgBAUQgBAWACAYIACA1QAAAzgbBlQgcBjAAAsQAABpA2AhIABAAIABABQAfAPAZAHQASAEAKAAQA8AAAdgsQAQgZAHglQADgWAAgbIAAgFQgBgcgLhuQgJhUgChPIgBgtIAAgEIgBgVQAAgLAIg0QAJg1AJgnIAAgBQAYhOA5huIAAABIADgGIgohmIgshyQgLBDgNA8gAuQrDIgCABIAAAAIgBABQgPAEgGAFIgLAMIAAABIgDAEIgBAAQgYAfgxAuIgDADIAGgBIAIgCIBXhUQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQASgSADgBIAAAAIgIACIgCABIgBAAIgBAAgAOb6bQgpASgKAKQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAagWAgQgVAegBAbIAAAAIADAhIgBAEIABAFQgCAOgGAOQAIgLAIgOIAJgWQANgkAGgPQAMgcAOgIQASgNAbgFQAPgDAdgEQArgIALgcIgcAJQgXAIgTAAIgBAAQgQgBgXAMIABAAIgiAVIgGAAQgDgBgBgDQgCgDABgCQAJggBFgXQArgPAIgVIgTAIIgBAAQgTAFgqASgAO97KQg8ASghAbIADAPQAOgKAkgQQArgTAUgGQAQgFALgHIAAgBIAHgHQAFgGACgIQgUAMgsANgAi4GnQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIgFAEIACgDgAhQumIAAgFIAAAAIgBAAQgJAAgFgPIgCgPQAAgVAbgTIABAAIAAAEQAAADgIAPIAAABIAJALQAHAIAAAFIgGAOQgGANgDADIgEgCgAhWvJQAAAEAHAJIADAFIADgKQAAgCgEgKIgDgIIgGAMgAhX8PIgHgHQgMgKgagGIgEgBIgCAAIgagEQgigCgegJIgJgDIgPgEIgCgBIgbgJIACgBQADgBADABQATAIAhACIA6AEIAAAAQAnAEATALQAPAIAFANIABADIAAADIABAEQgDgBgBgCgAgD8lIgBgCIABgEQADgHAFgGQAIgJAMgHQAbgRAwgLQAjgJAcgEQAogIAaAAIAKAAQgWACgXAFQgxAKg2ATIgQAGQgpAPgUALQgOAIgBAGIgBAEIgBgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.8,-223.4,209.6,446.9);
p.frameBounds = [rect];


(lib.hero4_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_accessory3_img();
	this.instance.setTransform(-32,-60);

	this.instance_1 = new lib.hero4_accessory4_img();
	this.instance_1.setTransform(-67.5,-44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-60,64,120);
p.frameBounds = [rect, new cjs.Rectangle(-67.5,-44.7,101,94), null];


(lib.hero4_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_accessory1_img();
	this.instance.setTransform(-19,-17);

	this.instance_1 = new lib.hero4_accessory2_img();
	this.instance_1.setTransform(-26,-68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-17,38,34);
p.frameBounds = [rect, new cjs.Rectangle(-26,-68.7,105,70), null];


(lib.hero3_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(134.8,-132.2);

	this.instance_1 = new lib.hero3_top2_img();
	this.instance_1.setTransform(130,-142.2);

	this.instance_2 = new lib.hero3_top3_img();
	this.instance_2.setTransform(134.8,-131.7);

	this.instance_3 = new lib.hero3_top4_img();
	this.instance_3.setTransform(177.3,-143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(134.8,-132.2,134,160);
p.frameBounds = [rect, new cjs.Rectangle(130,-142.2,146,167), new cjs.Rectangle(134.8,-131.7,134,158), new cjs.Rectangle(177.3,-143.2,95,86), null];


(lib.hero3_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_socks1_img();
	this.instance.setTransform(-86.5,-117.3);

	this.instance_1 = new lib.hero3_socks2_img();
	this.instance_1.setTransform(-86.5,-117.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-117.3,173,235);
p.frameBounds = [rect, rect, null];


(lib.hero3_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_shoes_1_img();
	this.instance.setTransform(34.5,-97.3);

	this.instance_1 = new lib.hero3_shoes_2_img();
	this.instance_1.setTransform(34.5,-63);

	this.instance_2 = new lib.hero3_shoes_3_img();
	this.instance_2.setTransform(14,-78.2);

	this.instance_3 = new lib.hero3_shoes_4_img();
	this.instance_3.setTransform(34.5,-40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(34.5,-97.3,187,159);
p.frameBounds = [rect, new cjs.Rectangle(34.5,-63,187,124), new cjs.Rectangle(14,-78.2,219,139), new cjs.Rectangle(34.5,-40.2,188,102), null];


(lib.hero3_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_shadows_1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero3_shadows_2_img();
	this.instance_1.setTransform(-91,-28.6);

	this.instance_2 = new lib.hero3_shadows_3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero3_shadows_4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero3_shadows_5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero3_shadows_6_img();
	this.instance_5.setTransform(-90.2,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, new cjs.Rectangle(-91,-28.6,186,58), rect=new cjs.Rectangle(-90.2,-24.6,184,54), rect, rect, rect, null];


(lib.hero3_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero3_rouge2_img();
	this.instance_1.setTransform(-95.5,-62.8);

	this.instance_2 = new lib.hero3_rouge3_img();
	this.instance_2.setTransform(-95.5,-49.6);

	this.instance_3 = new lib.hero3_rouge4_img();
	this.instance_3.setTransform(-95.5,-51.1);

	this.instance_4 = new lib.hero3_rouge5_img();
	this.instance_4.setTransform(-95.5,-45.8);

	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-62.8,191,109), new cjs.Rectangle(-95.5,-49.6,190,95), new cjs.Rectangle(-95.5,-51.1,191,97), rect=new cjs.Rectangle(-95.5,-45.8,191,92), rect, null];


(lib.hero3_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_lips_1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero3_lips_2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero3_lips_3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero3_lips_4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero3_lips_5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero3_lips_6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-46.4,-92);

	this.instance_1 = new lib.hero3_hair2_img();
	this.instance_1.setTransform(-76.9,-108);

	this.instance_2 = new lib.hero3_hair3_img();
	this.instance_2.setTransform(-75,-111);

	this.instance_3 = new lib.hero3_hair4_img();
	this.instance_3.setTransform(-49.9,-103.5);

	this.instance_4 = new lib.hero3_hair5_img();
	this.instance_4.setTransform(-34.4,-107);

	this.instance_5 = new lib.hero3_hair6_img();
	this.instance_5.setTransform(-109.9,-107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.4,-92,96,202);
p.frameBounds = [rect, new cjs.Rectangle(-76.9,-108,158,143), new cjs.Rectangle(-75,-111,152,213), new cjs.Rectangle(-49.9,-103.5,95,102), new cjs.Rectangle(-34.4,-107,76,95), new cjs.Rectangle(-109.9,-107,157,228)];


(lib.hero3_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-72,-124);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-110.9,-135.5);

	this.instance_2 = new lib.hero3_fringe3_img();
	this.instance_2.setTransform(-60.9,-136.5);

	this.instance_3 = new lib.hero3_fringe4_img();
	this.instance_3.setTransform(-72.4,-134);

	this.instance_4 = new lib.hero3_fringe5_img();
	this.instance_4.setTransform(-54.9,-121.5);

	this.instance_5 = new lib.hero3_fringe6_img();
	this.instance_5.setTransform(-50,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-124,144,248);
p.frameBounds = [rect, new cjs.Rectangle(-110.9,-135.5,223,155), new cjs.Rectangle(-60.9,-136.5,126,80), new cjs.Rectangle(-72.4,-134,144,130), new cjs.Rectangle(-54.9,-121.5,104,114), new cjs.Rectangle(-50,-125,101,79)];


(lib.hero3_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(104.6,-110.6);

	this.instance_1 = new lib.hero3_dress2_img();
	this.instance_1.setTransform(106.3,-101.8);

	this.instance_2 = new lib.hero3_dress3_img();
	this.instance_2.setTransform(118.6,-111.1);

	this.instance_3 = new lib.hero3_dress4_img();
	this.instance_3.setTransform(110.1,-88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(104.6,-110.6,207,264);
p.frameBounds = [rect, new cjs.Rectangle(106.3,-101.8,204,231), new cjs.Rectangle(118.6,-111.1,204,213), new cjs.Rectangle(110.1,-88,206,225), null];


(lib.hero3_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(129.9,-65.7);

	this.instance_1 = new lib.hero3_bottom2_img();
	this.instance_1.setTransform(127.2,-69.7);

	this.instance_2 = new lib.hero3_bottom3_img();
	this.instance_2.setTransform(124.3,-67.2);

	this.instance_3 = new lib.hero3_bottom4_img();
	this.instance_3.setTransform(149.8,-68.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(129.9,-65.7,124,119);
p.frameBounds = [rect, new cjs.Rectangle(127.2,-69.7,135,138), new cjs.Rectangle(124.3,-67.2,137,93), new cjs.Rectangle(149.8,-68.2,85,74), null];


(lib.hero3_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_body_img();
	this.instance.setTransform(-104,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-213,208,426);
p.frameBounds = [rect];


(lib.hero3_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory3_img();
	this.instance.setTransform(-34.5,-41.5);

	this.instance_1 = new lib.hero3_accessory4_img();
	this.instance_1.setTransform(-33.8,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-41.5,69,83);
p.frameBounds = [rect, new cjs.Rectangle(-33.8,-24.5,82,63), null];


(lib.hero3_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-35.5,-13);

	this.instance_1 = new lib.hero3_accessory2_img();
	this.instance_1.setTransform(-38.8,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-13,71,26);
p.frameBounds = [rect, new cjs.Rectangle(-38.8,-15.5,77,28), null];


(lib.hero2_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AyWKTIAA0lIYhAAIAADSIMMAAIAARTgAmKCYIA/BoIACgCQEpi3g2giQgBgKgPAAQg2AAjuB9g");
	var mask_graphics_1 = new cjs.Graphics().p("AyWKTIAA0lIYhAAIAADSIMMAAIAARTgAmKCYIA/BoIACgCQEpi3g2giQgBgKgPAAQg2AAjuB9g");
	var mask_graphics_2 = new cjs.Graphics().p("AyWKTIAA0lIYhAAIAADSIMMAAIAARTgAmKCYIA/BoIACgCQEpi3g2giQgBgKgPAAQg2AAjuB9g");
	var mask_graphics_3 = new cjs.Graphics().p("AyWKTIAA0lIYhAAIAADSIMMAAIAARTgAlTDKQAEAAAZgXQAZgWAYAAQAHAAApAWQCphzgqgbQgDgrkxCeIAUAgIADgCQAOAUASAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:157.5,y:-58.5}).wait(1).to({graphics:mask_graphics_1,x:157.5,y:-58.5}).wait(1).to({graphics:mask_graphics_2,x:157.5,y:-58.5}).wait(1).to({graphics:mask_graphics_3,x:157.5,y:-58.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(130.7,-95.7);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(95,-95.7);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(91.3,-98.2);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(82.7,-96.7);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(130.7,-95.7,59,70);
p.frameBounds = [rect, new cjs.Rectangle(95,-95.7,119,76), new cjs.Rectangle(91.3,-98.2,128,91), new cjs.Rectangle(82.7,-96.7,155,104.3), null];


(lib.hero2_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_socks1_img();
	this.instance.setTransform(104.8,4.3);

	this.instance_1 = new lib.hero2_socks2_img();
	this.instance_1.setTransform(187.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(104.8,4.3,155,250);
p.frameBounds = [rect, new cjs.Rectangle(187.6,2.4,73,252), null];


(lib.hero2_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(45.8,-69.5);

	this.instance_1 = new lib.hero2_shoes2_img();
	this.instance_1.setTransform(45.8,-24.9);

	this.instance_2 = new lib.hero2_shoes3_img();
	this.instance_2.setTransform(45.8,-124.2);

	this.instance_3 = new lib.hero2_shoes4_img();
	this.instance_3.setTransform(40.5,-50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(45.8,-69.5,155,142);
p.frameBounds = [rect, new cjs.Rectangle(45.8,-24.9,155,97), new cjs.Rectangle(45.8,-124.2,155,197), new cjs.Rectangle(40.5,-50.2,160,123), null];


(lib.hero2_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows_1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero2_shadows_2_img();
	this.instance_1.setTransform(-90.2,-24.6);

	this.instance_2 = new lib.hero2_shadows_3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero2_shadows_4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero2_shadows_5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero2_shadows_6_img();
	this.instance_5.setTransform(-90.2,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-95.5,-45.8);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-95.5,-48.2);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-95.5,-45.8);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-96.6,-48.7);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, rect, new cjs.Rectangle(-95.5,-48.2,191,94), new cjs.Rectangle(-95.5,-45.8,194,92), new cjs.Rectangle(-96.6,-48.7,189,97), new cjs.Rectangle(-95.5,-45.8,191,92), null];


(lib.hero2_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips_1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero2_lips_2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero2_lips_3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero2_lips_4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero2_lips_5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero2_lips_6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-38,-19.5,76,40), rect=new cjs.Rectangle(-38,-19.5,76,39), rect];


(lib.hero2_hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-41,-35.5);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-48.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-35.5,86,71);
p.frameBounds = [rect, new cjs.Rectangle(-48.5,15,102,41), null];


(lib.hero2_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand_img();
	this.instance.setTransform(-15.1,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.1,-25.9,30,52);
p.frameBounds = [rect];


(lib.hero2_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair3_img();
	this.instance.setTransform(-61,-67);

	this.instance_1 = new lib.hero2_hair4_img();
	this.instance_1.setTransform(-54,-75);

	this.instance_2 = new lib.hero2_hair6_img();
	this.instance_2.setTransform(-90,-113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, new cjs.Rectangle(-61,-67,106,230), new cjs.Rectangle(-54,-75,80,162), null, new cjs.Rectangle(-90,-113,163,246)];


(lib.hero2_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-58.5,-89);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-65,-87);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-67,-85);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-58,-84);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-94,-88);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-54,-89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-89,117,178);
p.frameBounds = [rect, new cjs.Rectangle(-65,-87,94,188), new cjs.Rectangle(-67,-85,122,250), new cjs.Rectangle(-58,-84,91,167), new cjs.Rectangle(-94,-88,162,128), new cjs.Rectangle(-54,-89,82,79)];


(lib.hero2_dress_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6sdhMAAAg13IImAAIAAlKMAs0AAAMAAAA7Bg");
	mask.setTransform(209,-15.5);

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(72.8,-170.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(72.8,-170.3,277,334);
p.frameBounds = [rect];


(lib.hero2_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6sdhMAAAg13IImAAIAAlKMAs0AAAMAAAA7Bg");
	var mask_graphics_1 = new cjs.Graphics().p("EggeAm5MAAAhNwMAy5AAAIAAWzIOEAAMAAAA29gAjc2eQAEACADADQAEgHAXgeQASgYAAgOQAAgegtAAQgdAAgfAUQADAXAQAeQAQAeAPgDg");
	var mask_graphics_2 = new cjs.Graphics().p("AvcUdMAAAgo5ISZAAIAAOrIMgAAIAAaOgAlImiIijBHIBTBfIA1goIAEgDIALgLQAmglAGgIQASgXAAgPQAAgdgtAAIgFAAg");
	var mask_graphics_3 = new cjs.Graphics().p("A7ebpMAAAg3RMArFAAAIAAJYIL4AAMAAAAt5gAjunKIijBHIBTBfIA1goIAEgDIALgLQAmglAGgIQASgXAAgPQAAgdgtAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:209,y:-15.5}).wait(1).to({graphics:mask_graphics_1,x:215.9,y:20.5}).wait(1).to({graphics:mask_graphics_2,x:226.9,y:-91.5}).wait(1).to({graphics:mask_graphics_3,x:217.9,y:-87.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(72.8,-170.3);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(84.2,-171.8);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(173,-173.5);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(165,-175.1);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(72.8,-170.3,277,334);
p.frameBounds = [rect, new cjs.Rectangle(84.2,-171.8,259,400), new cjs.Rectangle(173,-173.5,119,177), new cjs.Rectangle(165,-175.1,129,169), null];


(lib.hero2_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(139.9,-16.7);

	this.instance_1 = new lib.hero2_bottom2_img();
	this.instance_1.setTransform(77,-11.7);

	this.instance_2 = new lib.hero2_bottom3_img();
	this.instance_2.setTransform(136.5,-13.7);

	this.instance_3 = new lib.hero2_bottom4_img();
	this.instance_3.setTransform(135.8,-10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(139.9,-16.7,76,83);
p.frameBounds = [rect, new cjs.Rectangle(77,-11.7,212,132), new cjs.Rectangle(136.5,-13.7,79,82), new cjs.Rectangle(135.8,-10.6,87,82), null];


(lib.hero2_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-84,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-220,168,439);
p.frameBounds = [rect];


(lib.hero2_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-37.5,-28.5);

	this.instance_1 = new lib.hero2_accessory4_img();
	this.instance_1.setTransform(-47.5,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-28.5,75,57);
p.frameBounds = [rect, new cjs.Rectangle(-47.5,-45.5,52,62), null];


(lib.hero1_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(110.7,-161.4);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(129.1,-156.6);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(109.5,-162.9);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(111.3,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(110.7,-161.4,164,141);
p.frameBounds = [rect, new cjs.Rectangle(129.1,-156.6,136,83), new cjs.Rectangle(109.5,-162.9,167,142), new cjs.Rectangle(111.3,-165,166,143), null];


(lib.hero1_socks_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_socks1_img();
	this.instance.setTransform(98.9,-29.1);

	this.instance_1 = new lib.hero1_socks2_img();
	this.instance_1.setTransform(98.9,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(98.9,-29.1,129,281);
p.frameBounds = [rect, rect, null];


(lib.hero1_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shoes_1_img();
	this.instance.setTransform(-65.9,-136.6);

	this.instance_1 = new lib.hero1_shoes_2_img();
	this.instance_1.setTransform(-65.9,-147.1);

	this.instance_2 = new lib.hero1_shoes_3_img();
	this.instance_2.setTransform(-65.9,-134.6);

	this.instance_3 = new lib.hero1_shoes_4_img();
	this.instance_3.setTransform(-65.9,-134.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-136.6,135,271);
p.frameBounds = [rect, new cjs.Rectangle(-65.9,-147.1,153,282), new cjs.Rectangle(-65.9,-134.6,132,269), new cjs.Rectangle(-65.9,-134.6,141,269), null];


(lib.hero1_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows_1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero1_shadows_2_img();
	this.instance_1.setTransform(-90.2,-24.6);

	this.instance_2 = new lib.hero1_shadows_3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero1_shadows_4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero1_shadows_5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero1_shadows_6_img();
	this.instance_5.setTransform(-91,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-91,-28.6,186,58), null];


(lib.hero1_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-95.5,-45.8);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-95.5,-48.2);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-95.5,-45.8);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-96.6,-48.7);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, rect, new cjs.Rectangle(-95.5,-48.2,191,94), new cjs.Rectangle(-95.5,-45.8,194,92), new cjs.Rectangle(-96.6,-48.7,189,97), new cjs.Rectangle(-95.5,-45.8,191,92), null];


(lib.hero1_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips_1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero1_lips_2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero1_lips_3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero1_lips_4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero1_lips_5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero1_lips_6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-57.5,-60.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-58,-54.5);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-82,-76.5);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-143,-70.5);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-60,-58);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-76,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-60.5,98,180);
p.frameBounds = [rect, new cjs.Rectangle(-58,-54.5,94,116), new cjs.Rectangle(-82,-76.5,148,239), new cjs.Rectangle(-143,-70.5,273,241), new cjs.Rectangle(-60,-58,95,112), new cjs.Rectangle(-76,-37.5,145,237)];


(lib.hero1_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-59.5,-77.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-62,-70);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-50,-76);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-51,-73);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-72,-70);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-54,-68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-77.5,119,155);
p.frameBounds = [rect, new cjs.Rectangle(-62,-70,109,129), new cjs.Rectangle(-50,-76,85,74), new cjs.Rectangle(-51,-73,91,142), new cjs.Rectangle(-72,-70,116,128), new cjs.Rectangle(-54,-68,93,98)];


(lib.hero1_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-63.8,-90.2);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-117.5,-98);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-80.8,-89.3);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-98,-98.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.8,-90.2,128,181);
p.frameBounds = [rect, new cjs.Rectangle(-117.5,-98,230,372), new cjs.Rectangle(-80.8,-89.3,165,242), new cjs.Rectangle(-98,-98.8,221,369), null];


(lib.hero1_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(138.8,-87.9);

	this.instance_1 = new lib.hero1_bottom2_img();
	this.instance_1.setTransform(151.3,-88.9);

	this.instance_2 = new lib.hero1_bottom3_img();
	this.instance_2.setTransform(141.6,-88.9);

	this.instance_3 = new lib.hero1_bottom4_img();
	this.instance_3.setTransform(114.7,-91.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(138.8,-87.9,89,278);
p.frameBounds = [rect, new cjs.Rectangle(151.3,-88.9,74,64), new cjs.Rectangle(141.6,-88.9,99,54), new cjs.Rectangle(114.7,-91.9,141,116), null];


(lib.hero1_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-28,-27.5);

	this.instance_1 = new lib.hero1_accessory3_img();
	this.instance_1.setTransform(-28.5,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-27.5,56,55);
p.frameBounds = [rect, new cjs.Rectangle(-28.5,-27.5,41,55), null];


(lib.hero1_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-30,-29);

	this.instance_1 = new lib.hero1_accessory4_img();
	this.instance_1.setTransform(-12.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-29,60,58);
p.frameBounds = [rect, new cjs.Rectangle(-12.5,9.5,85,37), null];


(lib.hero_4_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_4_body_img();
	this.instance.setTransform(-105,-223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-223,210,447);
p.frameBounds = [rect];


(lib.headdress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory2_img();
	this.instance.setTransform(-52.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIH0IAAvmIURAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-50,130,100);
p.frameBounds = [rect];


(lib.headdress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory4_img();
	this.instance.setTransform(-41,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokHCIAAuDIRJAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-51,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIGPIAAsdIURAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-40,130,80);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-42.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXHCIAAuDISvAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.headdress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory1_img();
	this.instance.setTransform(-19,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.headdress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory3_img();
	this.instance.setTransform(-34.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHzIAAvmIODAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-50,90,100);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-43,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvmIRJAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,110,100);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-30,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.head4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.head4_img();
	this.instance.setTransform(-114.2,-158.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.2,-158.8,228,318);
p.frameBounds = [rect];


(lib.head3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.head3_img();
	this.instance.setTransform(-114.4,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.4,-158,228,318);
p.frameBounds = [rect];


(lib.head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.head2_img();
	this.instance.setTransform(-114.5,-158.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-158.6,228,318);
p.frameBounds = [rect];


(lib.head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.head1_img();
	this.instance.setTransform(-113.9,-158.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.9,-158.6,228,318);
p.frameBounds = [rect];


(lib.hanger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(-57.4,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.4,-38.5,98,66);
p.frameBounds = [rect];


(lib.hanger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger_img();
	this.instance.setTransform(-57.4,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.4,-38.5,98,66);
p.frameBounds = [rect];


(lib.eyes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.eyes4_1_img();
	this.instance.setTransform(-111,-25.4);

	this.instance_1 = new lib.eyes4_2_img();
	this.instance_1.setTransform(-111,-25.4);

	this.instance_2 = new lib.eyes2_3_img();
	this.instance_2.setTransform(-111,-25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-25.4,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.eyes3_1_img();
	this.instance.setTransform(-111,-25);

	this.instance_1 = new lib.eyes3_2_img();
	this.instance_1.setTransform(-111,-24.9);

	this.instance_2 = new lib.eyes2_3_img();
	this.instance_2.setTransform(-111,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-25,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-111,-24.9,220,51), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-111,-25,220,51), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eyes2_1_img();
	this.instance.setTransform(-111,-24.8);

	this.instance_1 = new lib.eyes2_2_img();
	this.instance_1.setTransform(-111,-24.5);

	this.instance_2 = new lib.eyes2_3_img();
	this.instance_2.setTransform(-110.9,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-24.8,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-111,-24.5,220,51), rect, rect=new cjs.Rectangle(-110.9,-25.2,220,51), rect, rect=new cjs.Rectangle(-111,-24.5,220,51), rect, rect=new cjs.Rectangle(-111,-24.8,220,51), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.eyes1_1_img();
	this.instance.setTransform(-111,-25);

	this.instance_1 = new lib.eyes1_2_img();
	this.instance_1.setTransform(-111,-25);

	this.instance_2 = new lib.eyes2_3_img();
	this.instance_2.setTransform(-111,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-25,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows4_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.eyebrows3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows3_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows2_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows1_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.ear4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear4_img();
	this.instance.setTransform(-52.6,-75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-75.8,105,152);
p.frameBounds = [rect];


(lib.ear3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear3_img();
	this.instance.setTransform(-37.4,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.4,-52,75,104);
p.frameBounds = [rect];


(lib.ear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear2_img();
	this.instance.setTransform(-28.2,-47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.2,-47.4,57,95);
p.frameBounds = [rect];


(lib.ear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear1_img();
	this.instance.setTransform(-52.6,-75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-75.8,105,152);
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


(lib.body1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_img();
	this.instance.setTransform(-115,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-218,230,436);
p.frameBounds = [rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_pointer_img();
	this.instance.setTransform(-55,-55,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.body_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_28_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_28_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_27_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_27_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_25_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_25_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_26_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_26_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_19_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_19_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_25_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_25_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_24_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_24_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_22_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_22_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.animation_rubbing_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_rubbing_2_img();
	this.instance.setTransform(-40,-50);

	this.instance_1 = new lib.animation_rubbing_3_img();
	this.instance_1.setTransform(-40,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_rubbing_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_rubbing_1_img();
	this.instance.setTransform(-90,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-50,180,100);
p.frameBounds = [rect];


(lib.accessory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory4_img();
	this.instance.setTransform(-50.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AliJSImEtKIHImtIMHCFID/LtIo1Hag");
	this.shape.setTransform(-5.8,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.1,-68.5,148.8,135.8);
p.frameBounds = [rect];


(lib.accessory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory2_img();
	this.instance.setTransform(-38.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-26,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-20.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.accessory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory3_img();
	this.instance.setTransform(19.8,-65,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq0HFIL3xhIFlAmIENHWIjsJcIvNDhg");
	this.shape.setTransform(0.1,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.2,-83.2,138.7,148.3);
p.frameBounds = [rect];


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-35.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-37.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-28,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHCIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.нос1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.nose1_img();
	this.instance.setTransform(-19.8,-43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,-43.9,40,57);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
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


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


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


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-35,-35,0.583,0.583);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,2,0,3).p("AAAAAIBQBQABQhPIhQBPAhPBQIBPhQIhPhP");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, null];


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.next_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.more_games_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_4_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,38,38);
p.frameBounds = [rect];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_3_2_img();
	this.instance.setTransform(6.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.8,0,44,45);
p.frameBounds = [rect];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_2_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,92,85);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,30,75);
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
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
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


(lib.free_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_img();
	this.instance.setTransform(0,0,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,200,71.5);
p.frameBounds = [rect];


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-80,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect, rect, rect, rect];


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
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.body_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,325,245);
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

	// Layer 15
	this.instance = new lib.preloader_5_tween("synched",0);
	this.instance.setTransform(10.8,0,0.011,0.011);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// Layer 14
	this.instance_1 = new lib.preloader_5_tween("synched",0);
	this.instance_1.setTransform(10.8,0,0.011,0.011);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// Layer 13
	this.instance_2 = new lib.preloader_5_tween("synched",0);
	this.instance_2.setTransform(10.8,0,0.011,0.011);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(51));

	// Layer 1
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
	this.instance_1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzkrIPnAAQApABAmAKQAmALAiATQAhAUAcAbQAbAcAUAhQATAiALAmQAKAmABAoIAAAAQgBApgKAmQgLAmgTAiQgUAhgbAcQgcAbghAUQgiATgmALQgmAKgpABIvnAAQg+gBg2gXQg3gXgpgpQgpgpgXg3QgXg2gBg+IAAAAQABgoAKgmQALgmATgiQAUghAbgcQAcgbAhgUQAigTAmgLQAmgKApgBg");

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
	this.instance_2.setTransform(-300,0,1,1,0,0,0,150,15);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0},99).wait(1));

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


(lib.stockings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.571,0.571,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();
	this.instance.cache(-57,-57,114,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14,x:10},9).to({scaleX:1,scaleY:1,x:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-54.7,-55.8,111.7,111.7), new cjs.Rectangle(-54.4,-56.7,113.5,113.5), new cjs.Rectangle(-54.2,-57.6,115.2,115.2), new cjs.Rectangle(-54,-58.4,117,117), new cjs.Rectangle(-53.7,-59.3,118.7,118.7), new cjs.Rectangle(-53.5,-60.2,120.5,120.5), new cjs.Rectangle(-53.3,-61.1,122.2,122.2), new cjs.Rectangle(-53,-61.9,124,124), new cjs.Rectangle(-52.8,-62.8,125.7,125.7), new cjs.Rectangle(-52.9,-62.3,124.7,124.7), new cjs.Rectangle(-53.1,-61.8,123.6,123.6), new cjs.Rectangle(-53.3,-61.2,122.6,122.6), new cjs.Rectangle(-53.4,-60.7,121.5,121.5), new cjs.Rectangle(-53.5,-60.2,120.5,120.5), new cjs.Rectangle(-53.7,-59.7,119.4,119.4), new cjs.Rectangle(-53.8,-59.1,118.4,118.4), new cjs.Rectangle(-54,-58.6,117.3,117.3), new cjs.Rectangle(-54.2,-58.1,116.3,116.3), new cjs.Rectangle(-54.3,-57.6,115.2,115.2), new cjs.Rectangle(-54.4,-57,114.2,114.2), new cjs.Rectangle(-54.6,-56.5,113.1,113.1), new cjs.Rectangle(-54.7,-56,112.1,112.1), new cjs.Rectangle(-54.9,-55.5,111,111), new cjs.Rectangle(-55,-55,110,110)];


(lib.hero4_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_accessory3_img();
	this.instance.setTransform(59.9,-198.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero4_accessory1_img();
	this.instance_1.setTransform(-60.7,-258.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero4_fringe2_img();
	this.instance_2.setTransform(-82.9,-291.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.eyes4();
	this.instance_3.setTransform(-15.8,-202.3,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero4_lips_1_img();
	this.instance_4.setTransform(-28.5,-175.1,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.eyebrows4();
	this.instance_5.setTransform(-36.6,-212.2,0.323,0.339,0,0.7,-175.6);

	this.instance_6 = new lib.eyebrows4();
	this.instance_6.setTransform(2.7,-212.9,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// graph
	this.instance_7 = new lib.hero4_shadows_5_img();
	this.instance_7.setTransform(-46.5,-210.3,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.nose4();
	this.instance_8.setTransform(-16.6,-181.8,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.head4();
	this.instance_9.setTransform(-15.5,-206.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.ear4();
	this.instance_10.setTransform(-46.6,-244.5,0.339,0.339,0,-4.7,175.3);

	this.instance_11 = new lib.ear4();
	this.instance_11.setTransform(20.2,-248.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// graph
	this.instance_12 = new lib.hero4_top2_img();
	this.instance_12.setTransform(-83.2,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero4_bottom2_img();
	this.instance_13.setTransform(-76.9,-73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.hero4_shoes_1_img();
	this.instance_14.setTransform(-73,160.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// graph
	this.instance_15 = new lib.hero4_socks1_img();
	this.instance_15.setTransform(-51.2,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// graph
	this.instance_16 = new lib.hero4_body();
	this.instance_16.setTransform(-9.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// graph
	this.instance_17 = new lib.tale_mc();
	this.instance_17.setTransform(16.7,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// graph
	this.instance_18 = new lib.hero4_hair2_img();
	this.instance_18.setTransform(-91.4,-251.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.1,-291.3,238,578);
p.frameBounds = [rect];


(lib.hero4_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero4fringe0_img();
	this.instance.setTransform(-124.9,-168.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.eyes4();
	this.instance_1.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrows4();
	this.instance_2.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrows4();
	this.instance_3.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_4 = new lib.nose4();
	this.instance_4.setTransform(-7,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_5 = new lib.head4();
	this.instance_5.setTransform(-3.6,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.ear4();
	this.instance_6.setTransform(-95.4,-91.3,1,1,0,-4.7,175.3);

	this.instance_7 = new lib.ear4();
	this.instance_7.setTransform(101.6,-103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// body
	this.instance_8 = new lib.hero4_b0();
	this.instance_8.setTransform(-117.1,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// body
	this.instance_9 = new lib.hero4hair0_img();
	this.instance_9.setTransform(-147.1,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.8,-179.1,435.8,599.3);
p.frameBounds = [rect];


(lib.hero3_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-17,-192.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero3_accessory3_img();
	this.instance_1.setTransform(-16.5,-302);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero3_fringe2_img();
	this.instance_2.setTransform(-93.1,-268.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.eyes1();
	this.instance_3.setTransform(18.1,-191.4,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero3_lips_5_img();
	this.instance_4.setTransform(5.2,-164,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.eyebrows1();
	this.instance_5.setTransform(-2.9,-201.4,0.326,0.342,0,0.7,-175.6);

	this.instance_6 = new lib.eyebrows1();
	this.instance_6.setTransform(36.7,-202.1,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// graph
	this.instance_7 = new lib.hero3_shadows_2_img();
	this.instance_7.setTransform(-12.9,-199.4,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.нос1();
	this.instance_8.setTransform(17.3,-170.7,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.head1();
	this.instance_9.setTransform(18.4,-195.6,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.ear1();
	this.instance_10.setTransform(-12.9,-233.9,0.342,0.342,0,-4.7,175.3);

	this.instance_11 = new lib.ear1();
	this.instance_11.setTransform(54.4,-238,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// graph
	this.instance_12 = new lib.hero3_dress1_img();
	this.instance_12.setTransform(-110.9,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero3_shoes_1_img();
	this.instance_13.setTransform(-89,116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.hero3_body();
	this.instance_14.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// graph
	this.instance_15 = new lib.hero3_hair2_img();
	this.instance_15.setTransform(-59.1,-241);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-302,240.8,577.6);
p.frameBounds = [rect];


(lib.hero3_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero3big_fringe0_img();
	this.instance.setTransform(-136,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.eyes1();
	this.instance_1.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrows1();
	this.instance_2.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrows1();
	this.instance_3.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.нос1();
	this.instance_4.setTransform(-7,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.head1();
	this.instance_5.setTransform(-3.6,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.ear1();
	this.instance_6.setTransform(-95.4,-91.3,1,1,0,-4.7,175.3);

	this.instance_7 = new lib.ear1();
	this.instance_7.setTransform(101.6,-103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// body
	this.instance_8 = new lib.hero3_b0();
	this.instance_8.setTransform(-284.4,131.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// body
	this.instance_9 = new lib.hero3big_hair0_img();
	this.instance_9.setTransform(-171.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.4,-179.1,470.9,631.5);
p.frameBounds = [rect];


(lib.hero2_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-29,-356.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_fringe3_img();
	this.instance_1.setTransform(-37.7,-315.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero2_hand();
	this.instance_2.setTransform(18.4,-187.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.eyes3();
	this.instance_3.setTransform(16.9,-253.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero2_lips_1_img();
	this.instance_4.setTransform(4,-226.4,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.eyebrows3();
	this.instance_5.setTransform(-4.1,-263.7,0.324,0.341,0,0.7,-175.6);

	this.instance_6 = new lib.eyebrows3();
	this.instance_6.setTransform(35.4,-264.3,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// graph
	this.instance_7 = new lib.hero2_shadows_4_img();
	this.instance_7.setTransform(-14,-261.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.nose3();
	this.instance_8.setTransform(15.8,-233.9,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.head3();
	this.instance_9.setTransform(17.2,-257.9,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.ear3();
	this.instance_10.setTransform(-26.1,-250.7,0.341,0.341,0,4.5,-175.5);

	this.instance_11 = new lib.ear3();
	this.instance_11.setTransform(60.8,-249.5,0.341,0.341,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// graph
	this.instance_12 = new lib.hero2_dress_main();
	this.instance_12.setTransform(41.1,-33.4,1,1,0,0,0,231,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero2_shoes1_img();
	this.instance_13.setTransform(-99.7,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.hero2_socks1_img();
	this.instance_14.setTransform(-85.2,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// graph
	this.instance_15 = new lib.hero2_body();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// graph
	this.instance_16 = new lib.hero2_hair3_img();
	this.instance_16.setTransform(-31.7,-297.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152,-356.5,342,584);
p.frameBounds = [rect];


(lib.hero2_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2m_fringe0_img();
	this.instance.setTransform(-159.5,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.eyes3();
	this.instance_1.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrows3();
	this.instance_2.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrows3();
	this.instance_3.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_4 = new lib.nose3();
	this.instance_4.setTransform(-7.7,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_5 = new lib.head3();
	this.instance_5.setTransform(-3.6,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.ear3();
	this.instance_6.setTransform(-130.6,41.9,1,1,0,4.5,-175.5);

	this.instance_7 = new lib.ear3();
	this.instance_7.setTransform(124.6,45.4,1,1,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// body
	this.instance_8 = new lib.hero2_bm();
	this.instance_8.setTransform(-180.5,147.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// body
	this.instance_9 = new lib.hero2m_hair0_img();
	this.instance_9.setTransform(-109.1,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-147,352,634);
p.frameBounds = [rect];


(lib.hero1_makeup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_makeupfringe_img();
	this.instance.setTransform(-126,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.eyes2();
	this.instance_1.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrows2();
	this.instance_2.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrows2();
	this.instance_3.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_4 = new lib.nose2();
	this.instance_4.setTransform(-7.7,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_5 = new lib.head2();
	this.instance_5.setTransform(-3.6,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.ear2();
	this.instance_6.setTransform(-120.1,27.6,1,1,0,0,180);

	this.instance_7 = new lib.ear2();
	this.instance_7.setTransform(112.9,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// body
	this.instance_8 = new lib.hero1_bm1_img();
	this.instance_8.setTransform(-201,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// body
	this.instance_9 = new lib.hero1_makeuphair_img();
	this.instance_9.setTransform(-137.5,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201,-154,342.6,540);
p.frameBounds = [rect];


(lib.hero1_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-36,-338);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_fringe1_img();
	this.instance_1.setTransform(-28.5,-316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.eyes2();
	this.instance_2.setTransform(23.6,-244.3,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero1_lips_2_img();
	this.instance_3.setTransform(11,-217.8,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.eyebrows2();
	this.instance_4.setTransform(3.2,-254,0.316,0.331,0,0.7,-175.6);

	this.instance_5 = new lib.eyebrows2();
	this.instance_5.setTransform(41.6,-254.7,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// graph
	this.instance_6 = new lib.hero1_shadows_5_img();
	this.instance_6.setTransform(-6.5,-252.1,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.nose2();
	this.instance_7.setTransform(22.5,-225.1,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.head2();
	this.instance_8.setTransform(23.9,-248.4,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.ear2();
	this.instance_9.setTransform(-14.8,-246.2,0.331,0.331,0,0,180);

	this.instance_10 = new lib.ear2();
	this.instance_10.setTransform(62.5,-246.2,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// graph
	this.instance_11 = new lib.hero1_dress2_img();
	this.instance_11.setTransform(-114.9,-199);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero1_shoes_3_img();
	this.instance_12.setTransform(-106.7,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.body1();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.hero1_hair1_img();
	this.instance_14.setTransform(-26.5,-299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-338,230.1,568.8);
p.frameBounds = [rect];


(lib.hero_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero4_accessory_all2();
	this.accessory.setTransform(91.9,-138.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero4_accessory_all1();
	this.headdress.setTransform(-41.7,-241.2);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero4_fringe_all();
	this.fringe.setTransform(-17,-208.3);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.eyes4();
	this.instance.setTransform(-15.8,-202.3,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all();
	this.lips.setTransform(-15.7,-168.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.eyebrows4();
	this.instance_1.setTransform(-36.6,-212.2,0.323,0.339,0,0.7,-175.6);

	this.instance_2 = new lib.eyebrows4();
	this.instance_2.setTransform(2.7,-212.9,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_all();
	this.shadows.setTransform(-15.9,-201.9,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_3 = new lib.nose4();
	this.instance_3.setTransform(-16.6,-181.8,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all();
	this.blush.setTransform(-15.6,-181.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.head4_new();
	this.instance_4.setTransform(-54,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.head4();
	this.instance_5.setTransform(-15.5,-206.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.ear4();
	this.instance_6.setTransform(-46.6,-244.5,0.339,0.339,0,-4.7,175.3);

	this.instance_7 = new lib.ear4();
	this.instance_7.setTransform(20.2,-248.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// dress
	this.dress = new lib.hero4_dress_all();
	this.dress.setTransform(-13.9,-47,1,1,0,0,0,199,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero4_top_all();
	this.top.setTransform(-9.6,-85,1,1,0,0,0,202.4,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero4_bottom_all();
	this.bottom.setTransform(-24.1,-24.4,1,1,0,0,0,187.9,38.3);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero4_shoes_all();
	this.shoes.setTransform(-33.6,229.2,1,1,0,0,0,97,17);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// stockings
	this.stockings = new lib.hero4_socks_all();
	this.stockings.setTransform(-23.1,161.9,1,1,0,0,0,189.8,176.8);

	this.timeline.addTween(cjs.Tween.get(this.stockings).wait(1));

	// body
	this.instance_8 = new lib.hero_4_body_mc();
	this.instance_8.setTransform(-9.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// body
	this.instance_9 = new lib.tale_mc();
	this.instance_9.setTransform(16.7,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hair
	this.hair = new lib.hero4_hair_all();
	this.hair.setTransform(-17,-208.3);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.4,-274.2,241.4,560.9);
p.frameBounds = [rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero3_accessory_all1();
	this.accessory.setTransform(18.5,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero3_accessory_all2();
	this.headdress.setTransform(18,-260.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all();
	this.fringe.setTransform(17.8,-133);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.eyes1();
	this.instance.setTransform(18.1,-191.4,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(18.2,-157.3,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.eyebrows1();
	this.instance_1.setTransform(-2.9,-201.4,0.326,0.342,0,0.7,-175.6);

	this.instance_2 = new lib.eyebrows1();
	this.instance_2.setTransform(36.7,-202.1,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(17.9,-191,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_3 = new lib.нос1();
	this.instance_3.setTransform(17.3,-170.7,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(17.7,-169.9,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.head1_new();
	this.instance_4.setTransform(-20,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.head1();
	this.instance_5.setTransform(18.4,-195.6,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.ear1();
	this.instance_6.setTransform(-12.9,-233.9,0.342,0.342,0,-4.7,175.3);

	this.instance_7 = new lib.ear1();
	this.instance_7.setTransform(54.4,-238,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// bottom
	this.bottom = new lib.hero3_bottom_all();
	this.bottom.setTransform(-3.8,-7.3,1,1,0,0,0,191.7,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// top
	this.top = new lib.hero3_top_all();
	this.top.setTransform(11.5,-52.1,1,1,0,0,0,207,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all();
	this.dress.setTransform(-16.5,-7.4,1,1,0,0,0,199,24);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.hero3_shoes_all();
	this.shoes.setTransform(8.4,195.9,1,1,0,0,0,131.9,-18);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// stockings
	this.stockings = new lib.hero3_socks_all();
	this.stockings.setTransform(3.8,147.6);

	this.timeline.addTween(cjs.Tween.get(this.stockings).wait(1));

	// body
	this.instance_8 = new lib.hero3_body();
	this.instance_8.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all();
	this.hair.setTransform(17.8,-133);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-302,215,577.6);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_accessory_all();
	this.accessory.setTransform(91.5,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero2_hat_all();
	this.headdress.setTransform(12,-321);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(29.3,-230);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero2_hand();
	this.instance.setTransform(18.4,-187.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.eyes3();
	this.instance_1.setTransform(16.9,-253.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(16.9,-219.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrows3();
	this.instance_2.setTransform(-4.1,-263.7,0.324,0.341,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrows3();
	this.instance_3.setTransform(35.4,-264.3,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(16.7,-253.3,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_4 = new lib.nose3();
	this.instance_4.setTransform(15.8,-233.9,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(17.4,-232,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_5 = new lib.head3_new();
	this.instance_5.setTransform(-22,-312);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.ear3();
	this.instance_6.setTransform(-26.1,-250.7,0.341,0.341,0,4.5,-175.5);

	this.instance_7 = new lib.ear3();
	this.instance_7.setTransform(60.8,-249.5,0.341,0.341,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all();
	this.dress.setTransform(41.1,-33.4,1,1,0,0,0,231,0);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero2_top_all();
	this.top.setTransform(19.3,-171.4,1,1,0,0,0,160.3,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all();
	this.bottom.setTransform(43,-81.5,1,1,0,0,0,184,29);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all();
	this.shoes.setTransform(-16.5,161,1,1,0,0,0,129,6);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// stockings
	this.stockings = new lib.hero2_socks_all();
	this.stockings.setTransform(-12.9,105.6,1,1,0,0,0,177,139);

	this.timeline.addTween(cjs.Tween.get(this.stockings).wait(1));

	// body
	this.instance_8 = new lib.hero2_body();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(29.3,-230);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152,-356.5,342,584);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_accessory_all2();
	this.accessory.setTransform(106,-72);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero1_accessory_all1();
	this.headdress.setTransform(-6,-309);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all();
	this.fringe.setTransform(31,-239);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.eyes2();
	this.instance.setTransform(23.6,-244.3,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(23.6,-211.3,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.eyebrows2();
	this.instance_1.setTransform(3.2,-254,0.316,0.331,0,0.7,-175.6);

	this.instance_2 = new lib.eyebrows2();
	this.instance_2.setTransform(41.6,-254.7,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(23.4,-244,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_3 = new lib.nose2();
	this.instance_3.setTransform(22.5,-225.1,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(23.7,-223.5,0.331,0.331,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.head2_new();
	this.instance_4.setTransform(-14,-301);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.ear2();
	this.instance_5.setTransform(-14.8,-246.2,0.331,0.331,0,0,180);

	this.instance_6 = new lib.ear2();
	this.instance_6.setTransform(62.5,-246.2,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all();
	this.dress.setTransform(2.6,-101);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero1_top_all();
	this.top.setTransform(12.1,-133.4,1,1,0,0,0,202,-100.1);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero1_bottom_all();
	this.bottom.setTransform(-6.4,17.6,1,1,0,0,0,183.5,50.9);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero1_shoes_all();
	this.shoes.setTransform(-40.8,96.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// stockings
	this.stockings = new lib.hero1_socks_all();
	this.stockings.setTransform(12.1,-133.4,1,1,0,0,0,202,-100.1);

	this.timeline.addTween(cjs.Tween.get(this.stockings).wait(1));

	// body
	this.instance_7 = new lib.body1();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(31,-239);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-338,249,568.8);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.571,0.571,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.h4_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top4_img();
	this.instance.setTransform(-94,-102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-121.1,198,167.1);
p.frameBounds = [rect];


(lib.h4_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top3_img();
	this.instance.setTransform(-35,-98.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-121.1,98,98.1);
p.frameBounds = [rect];


(lib.h4_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top2_img();
	this.instance.setTransform(-73,-99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-121.1,150,159.1);
p.frameBounds = [rect];


(lib.h4_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top1_img();
	this.instance.setTransform(-73,-99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-121.1,146,157.1);
p.frameBounds = [rect];


(lib.h4_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_socks2_img();
	this.instance.setTransform(-49.1,-72.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-121.1,98,285.2);
p.frameBounds = [rect];


(lib.h4_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_socks1_img();
	this.instance.setTransform(-27,-69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-121.1,98,276.2);
p.frameBounds = [rect];


(lib.h4_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress4_img();
	this.instance.setTransform(-111,-101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-121.1,205,346.2);
p.frameBounds = [rect];


(lib.h4_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress3_img();
	this.instance.setTransform(-129,-101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129,-121.1,233,367.2);
p.frameBounds = [rect];


(lib.h4_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress2_img();
	this.instance.setTransform(-115,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-121.1,207,255.2);
p.frameBounds = [rect];


(lib.h4_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(-106,-92.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-121.1,212,242.2);
p.frameBounds = [rect];


(lib.h4_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom4_img();
	this.instance.setTransform(-48,-85.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-121.1,98,102.1);
p.frameBounds = [rect];


(lib.h4_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom3_img();
	this.instance.setTransform(-46,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-121.1,98,265.2);
p.frameBounds = [rect];


(lib.h4_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom2_img();
	this.instance.setTransform(-61,-94.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-121.1,105.9,117.2);
p.frameBounds = [rect];


(lib.h4_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom1_img();
	this.instance.setTransform(-46,-84.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(-5.7,-89,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-121.1,98,104.2);
p.frameBounds = [rect];


(lib.h3_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top4_img();
	this.instance.setTransform(-12.5,-120.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.7,-144.4,103.3,109.8);
p.frameBounds = [rect];


(lib.h3_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top3_img();
	this.instance.setTransform(-52.5,-109.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-144.4,134,192.8);
p.frameBounds = [rect];


(lib.h3_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top2_img();
	this.instance.setTransform(-57.5,-119.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-144.4,146,191.8);
p.frameBounds = [rect];


(lib.h3_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(-54.5,-108.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-144.4,134,195.8);
p.frameBounds = [rect];


(lib.h3_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_socks2_img();
	this.instance.setTransform(-52.5,-108.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-144.4,173,270.8);
p.frameBounds = [rect];


(lib.h3_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_socks1_img();
	this.instance.setTransform(-52.5,-108.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-144.4,173,270.8);
p.frameBounds = [rect];


(lib.h3_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress4_img();
	this.instance.setTransform(-91.5,-105.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-144.4,206,263.8);
p.frameBounds = [rect];


(lib.h3_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress3_img();
	this.instance.setTransform(-91.5,-124.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-144.4,204,232.8);
p.frameBounds = [rect];


(lib.h3_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress2_img();
	this.instance.setTransform(-102.5,-111.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-144.4,204,263.8);
p.frameBounds = [rect];


(lib.h3_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-103.5,-119.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-144.4,207,288.8);
p.frameBounds = [rect];


(lib.h3_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom4_img();
	this.instance.setTransform(-20.5,-115.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.7,-144.4,98,102.8);
p.frameBounds = [rect];


(lib.h3_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom3_img();
	this.instance.setTransform(-45.5,-113.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-144.4,137,123.8);
p.frameBounds = [rect];


(lib.h3_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom2_img();
	this.instance.setTransform(-41.5,-115.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-144.4,135,166.8);
p.frameBounds = [rect];


(lib.h3_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(-39.5,-113.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(26.7,-112.3,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-144.4,124,149.8);
p.frameBounds = [rect];


(lib.h2_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top4_img();
	this.instance.setTransform(-53.4,-85.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-104.8,155,157.6);
p.frameBounds = [rect];


(lib.h2_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top3_img();
	this.instance.setTransform(-42.4,-84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-104.8,128,111.7);
p.frameBounds = [rect];


(lib.h2_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(-42.4,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-104.8,119,97.6);
p.frameBounds = [rect];


(lib.h2_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-4.4,-81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,98,93.6);
p.frameBounds = [rect];


(lib.h2_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_socks2_img();
	this.instance.setTransform(-15.4,-58.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,98,298.7);
p.frameBounds = [rect];


(lib.h2_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_socks1_img();
	this.instance.setTransform(-100.5,-36.6,1,1,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-104.8,195.2,314.6);
p.frameBounds = [rect];


(lib.h2_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-20.4,-87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,139.1,186.6);
p.frameBounds = [rect];


(lib.h2_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-12.4,-88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,137.1,193.6);
p.frameBounds = [rect];


(lib.h2_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-99.4,-81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.4,-104.8,259,423.7);
p.frameBounds = [rect];


(lib.h2_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-115.4,-87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.4,-104.8,277,351.7);
p.frameBounds = [rect];


(lib.h2_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom4_img();
	this.instance.setTransform(-24.4,-79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,98,107.7);
p.frameBounds = [rect];


(lib.h2_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom3_img();
	this.instance.setTransform(-20.4,-81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,98,105.7);
p.frameBounds = [rect];


(lib.h2_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom2_img();
	this.instance.setTransform(-84.4,-77.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-104.8,212,159.6);
p.frameBounds = [rect];


(lib.h2_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-20.4,-81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,98,106.7);
p.frameBounds = [rect];


(lib.h1_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top4_img();
	this.instance.setTransform(-84.5,-84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.5,-104.8,166,163.6);
p.frameBounds = [rect];


(lib.h1_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top3_img();
	this.instance.setTransform(-85.4,-81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.4,-104.8,167,165.6);
p.frameBounds = [rect];


(lib.h1_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top2_img();
	this.instance.setTransform(-67.5,-74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-104.8,136,113.7);
p.frameBounds = [rect];


(lib.h1_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-85.4,-81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.4,-104.8,164,164.6);
p.frameBounds = [rect];


(lib.h1_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_socks2_img();
	this.instance.setTransform(-77.4,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.4,-104.8,144.9,318.7);
p.frameBounds = [rect];


(lib.h1_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_socks1_img();
	this.instance.setTransform(-77.4,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.4,-104.8,144.9,318.7);
p.frameBounds = [rect];


(lib.h1_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-95.4,-76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.4,-104.8,221,397.7);
p.frameBounds = [rect];


(lib.h1_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-84.4,-80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-104.8,165,266.7);
p.frameBounds = [rect];


(lib.h1_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-121.4,-88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.4,-104.8,230,388.7);
p.frameBounds = [rect];


(lib.h1_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-67.4,-76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.4,-104.8,134.9,209.7);
p.frameBounds = [rect];


(lib.h1_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom4_img();
	this.instance.setTransform(-60.4,-82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-104.8,141,138.6);
p.frameBounds = [rect];


(lib.h1_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom3_img();
	this.instance.setTransform(-32.4,-78.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.4,-104.8,99.9,80.6);
p.frameBounds = [rect];


(lib.h1_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom2_img();
	this.instance.setTransform(-23.4,-78.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-104.8,98,90.6);
p.frameBounds = [rect];


(lib.h1_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(-34.4,-78.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(16.9,-72.8,1,1,0,0,0,-10,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.4,-104.8,101.9,304.7);
p.frameBounds = [rect];


(lib.dress_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d4();
	this.instance.setTransform(-3.5,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwPRLMAD6gisIG5qwIHnABIErGUIHiY4IB4PhIrQJYInBAdg");
	this.shape.setTransform(0.7,172.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.2,-8.4,210.8,362.1);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d4();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwdU7IhSlFMAJ2glqIL7ACMANuAnuIwXD5g");
	this.shape.setTransform(17.8,131.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.9,-8.4,227.4,279.4);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d4();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqQOtIiQzUIGDrkIHDABIL7YGIj/IQg");
	this.shape.setTransform(22.4,92.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.7,-10.9,160.4,207.4);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d4();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtBRIIi+s7IPa2bIH0ABIIxZtImXKvg");
	this.shape.setTransform(-13.5,110.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.9,-5.9,223,403.5);
p.frameBounds = [rect];


(lib.dress_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d3();
	this.instance.setTransform(-4.5,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjcQbIui6YIQkoxIE3gBIOibJIqRKWg");
	this.shape.setTransform(-5.2,112.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.3,-7.9,244.8,375.1);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d3();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApkRbIncnoIJc9PIHxgBIQ0abIkNHNIlcDHIpACMg");
	this.shape.setTransform(17,116.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.9,-8.2,217.9,249.3);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d3();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An3QxIkC2MIGIrfIIgAAIJLZiIhUITg");
	this.shape.setTransform(18.9,96.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.3,-11.5,152.5,216.8);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d3();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoBU1Ilt2zIOfz5IFiAAIHcUsIjlWLIpsA4g");
	this.shape.setTransform(-20.8,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.7,-8.5,175.9,280.2);
p.frameBounds = [rect];


(lib.dress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d2();
	this.instance.setTransform(-4,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsKS7IkxkVMAJtgjwIKdgBMANtAkKIimC9IqEC1InjAbg");
	this.shape.setTransform(7.5,129.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.9,-6.2,217,271.3);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d2();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvbSPMACPggJIFPn4IEBAAMATYAhrIgeEBIpiFSIrqAng");
	this.shape.setTransform(39,130.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-9,210.4,279.1);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d2();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AseAeIIjxjIF5ACIKhOQIkXT5g");
	this.shape.setTransform(1.8,100.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-9.3,259,433);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d2();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ay9DYIWO3DIC4AAIM1YGIi1GCI17JPg");
	this.shape.setTransform(-26.1,113.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.5,-12.5,242.9,401.2);
p.frameBounds = [rect];


(lib.dress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_d1();
	this.instance.setTransform(-4,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkySUIkZiEIkilSIjr1qIOAoqIGiAAIOPYgIgMD1IkjGmIo7Dyg");
	this.shape.setTransform(-3.1,116.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.4,-7,222.8,249.2);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_d1();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar9J3IAFuuIHEsAIIhgEIIRTBIiTLFIxyDxg");
	this.shape.setTransform(12.1,99.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-8.9,207,297.7);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_d1();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApujAIFnq6IIdACIFZMBIk5O5In0A5g");
	this.shape.setTransform(5.2,81.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.5,-7.8,277,359.5);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_d1();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am1P+IkPkWIEcx5IIxryIFAAHID8NkIisT1InkCng");
	this.shape.setTransform(-23.3,106.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.2,-9.6,143.7,231.4);
p.frameBounds = [rect];


(lib.bottom_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_b4();
	this.instance.setTransform(-3.9,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnmI/IgNqJIFboGIFKAEIFCKaIgfIDg");
	this.shape.setTransform(1.3,51.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-7.7,100.1,118.7);
p.frameBounds = [rect];


(lib.bottom_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b4();
	this.instance.setTransform(28.7,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AozJFIgcohIFjqBIFeAAIHeOOInSEtg");
	this.shape.setTransform(11.4,53.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-7.5,119.2,121.4);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b4();
	this.instance.setTransform(-18.4,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoGI7IAyqhIEgoJIEvABIE3IlIBVK5g");
	this.shape.setTransform(1.8,54.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.2,-7.8,104,124.9);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b4();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtMHKIJVzjIKdAAIGnWjIqDCQg");
	this.shape.setTransform(-10.2,72.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.7,-6.5,169.2,158.9);
p.frameBounds = [rect];


(lib.bottom_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_b3();
	this.instance.setTransform(-3.9,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkoWNMgDFgj2IFdojIE2ACIFIJhMgCYAi2g");
	this.shape.setTransform(0.7,132.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-9.8,99,284.3);
p.frameBounds = [rect];


(lib.bottom_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b3();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsLFvIJ3w8ID8AAIKkMsIg1E3IoLEcIrcAcg");
	this.shape.setTransform(3.8,60.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.3,-11,156.1,143.6);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b3();
	this.instance.setTransform(-17.9,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokJnIAerZIEin/IGrAAIFeJ+IgJJlg");
	this.shape.setTransform(3.2,53.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-9,109.9,125.3);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b3();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AotguIHGnAID7ADIGbKGIjDFNIs5AHg");
	this.shape.setTransform(0,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.8,-8.7,111.8,99.1);
p.frameBounds = [rect];


(lib.bottom_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_b2();
	this.instance.setTransform(-3.4,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap4H4IFxylIHbgDIGmRsIpqD0g");
	this.shape.setTransform(4.9,62.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.4,-6.4,126.8,137.8);
p.frameBounds = [rect];


(lib.bottom_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b2();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsOLiIIE6rIJ5AEIGgZuIs6Ehg");
	this.shape.setTransform(1.9,86.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.4,-10.3,156.7,194.1);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b2();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqALhIl4jzIiAlGIPIwlIFZACIPQOrIhIFmImjFnIqkCBg");
	this.shape.setTransform(3.1,78.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.4,-10.6,229.1,179);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b2();
	this.instance.setTransform(-17.9,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am0BNIGKpPIC9AAIEWI4IAMG4IsJAVg");
	this.shape.setTransform(-5.6,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.3,-7,98.8,103.2);
p.frameBounds = [rect];


(lib.bottom_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_b1();
	this.instance.setTransform(-3.4,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoMAGIGTp0IEUAAIFyM8IhmGbIt6AGg");
	this.shape.setTransform(1.1,53.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-9,105.1,124.7);
p.frameBounds = [rect];


(lib.bottom_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_b1();
	this.instance.setTransform(28,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArdJWIHV2gIIjAAIHDTuIibE+It9Bpg");
	this.shape.setTransform(2.8,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.6,-7.5,147,168.7);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_b1();
	this.instance.setTransform(-18.4,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnqKBIAGrHIFDo8IFrAAIEhKVIgXJwg");
	this.shape.setTransform(0.5,55.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-8.5,98.6,128.8);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_b1();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhfYbImQ59IBVuBIGOpbIC7AAIEDIHIA+aMIjAPqg");
	this.shape.setTransform(-7.4,149.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-10.8,106.5,320);
p.frameBounds = [rect];


(lib.body_check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.121},0).to({scaleX:1,scaleY:1,alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-33.7,-33.7,67.5,67.5), new cjs.Rectangle(-37.4,-37.4,75,75), new cjs.Rectangle(-41.2,-41.2,82.5,82.5), new cjs.Rectangle(-44.9,-44.9,90,90), new cjs.Rectangle(-48.7,-48.7,97.5,97.5), new cjs.Rectangle(-52.4,-52.4,105,105), new cjs.Rectangle(-56.2,-56.2,112.5,112.5), new cjs.Rectangle(-60,-60,120,120)];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.animation_rubbing_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_rubbing_2_mc();
	this.instance.setTransform(0,25,0.8,0.8,-45,0,0,0,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45},19).to({rotation:-45},20).wait(1));

	// bg
	this.instance_1 = new lib.animation_rubbing_1_mc();
	this.instance_1.cache(-92,-52,184,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect, new cjs.Rectangle(-90,-64.1,180,114.1), new cjs.Rectangle(-90,-66.5,180,116.6), new cjs.Rectangle(-90,-68.5,180,118.5), new cjs.Rectangle(-90,-69.7,180,119.8), new cjs.Rectangle(-90,-70.3,180,120.3), new cjs.Rectangle(-90,-70.2,180,120.3), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-68.2,180,118.2), rect=new cjs.Rectangle(-90,-66.1,180,116.2), rect, new cjs.Rectangle(-90,-68.1,180,118.2), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-70.2,180,120.3), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-69.7,180,119.8), new cjs.Rectangle(-90,-68.5,180,118.6), new cjs.Rectangle(-90,-66.6,180,116.7), new cjs.Rectangle(-90,-64.1,180,114.2), new cjs.Rectangle(-90,-61.3,180,111.4), new cjs.Rectangle(-90,-63.9,180,114), new cjs.Rectangle(-90,-66.3,180,116.4), new cjs.Rectangle(-90,-68.2,180,118.3), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-70.2,180,120.2), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-69.8,180,119.9), new cjs.Rectangle(-90,-68.8,180,118.8), new cjs.Rectangle(-90,-67.1,180,117.2), new cjs.Rectangle(-90,-64.9,180,115), new cjs.Rectangle(-90,-67.1,180,117.1), new cjs.Rectangle(-90,-68.7,180,118.8), new cjs.Rectangle(-90,-69.8,180,119.9), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-70.3,180,120.3), new cjs.Rectangle(-90,-69.6,180,119.6), new cjs.Rectangle(-90,-68.3,180,118.3), new cjs.Rectangle(-90,-66.5,180,116.5), new cjs.Rectangle(-90,-64.1,180,114.2), new cjs.Rectangle(-90,-61.3,180,111.4)];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.571,0.571,0,0,0,0.2,-0.1);

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


(lib.skip_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40.8,-40.8,81.7,81.7), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40.8,-40.8,81.7,81.7)];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.next_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},14).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect, new cjs.Rectangle(-129.2,-59.6,258.6,119.4), new cjs.Rectangle(-128.5,-59.3,257.2,118.7), new cjs.Rectangle(-127.8,-58.9,255.7,118), new cjs.Rectangle(-127.1,-58.6,254.3,117.4), new cjs.Rectangle(-126.4,-58.3,252.9,116.7), new cjs.Rectangle(-125.7,-57.9,251.5,116), new cjs.Rectangle(-125,-57.6,250,115.4), new cjs.Rectangle(-124.2,-57.3,248.6,114.7), new cjs.Rectangle(-123.5,-57,247.2,114), new cjs.Rectangle(-122.8,-56.7,245.7,113.3), new cjs.Rectangle(-122.1,-56.3,244.3,112.7), new cjs.Rectangle(-121.4,-56,242.9,112), new cjs.Rectangle(-120.7,-55.7,241.5,111.3), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-120.5,-55.6,241,111.1), new cjs.Rectangle(-121,-55.8,242,111.6), new cjs.Rectangle(-121.5,-56,243,112.1), new cjs.Rectangle(-122,-56.3,244,112.5), new cjs.Rectangle(-122.5,-56.5,245,113), new cjs.Rectangle(-123,-56.7,246,113.5), new cjs.Rectangle(-123.5,-57,247,113.9), new cjs.Rectangle(-124,-57.2,248,114.4), new cjs.Rectangle(-124.5,-57.4,249,114.9), new cjs.Rectangle(-125,-57.6,250,115.4), new cjs.Rectangle(-125.5,-57.8,251,115.8), new cjs.Rectangle(-126,-58.1,252,116.3), new cjs.Rectangle(-126.5,-58.3,253,116.8), new cjs.Rectangle(-127,-58.5,254,117.2), new cjs.Rectangle(-127.5,-58.8,255,117.7), new cjs.Rectangle(-127.9,-59,256,118.2), new cjs.Rectangle(-128.4,-59.2,257,118.6), new cjs.Rectangle(-128.9,-59.5,258,119.1), new cjs.Rectangle(-129.4,-59.7,259,119.6), new cjs.Rectangle(-130,-60,260,120)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5JYQhBAAguguQgvguAAhCIAAtzQAAhBAvgvQAuguBBAAINzAAQBBAAAvAuQAtAvABBBIAANzQgBBCgtAuQgvAuhBAAg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5JYQhBAAguguQgvguAAhCIAAtzQAAhBAvgvQAuguBBAAINzAAQBBAAAvAuQAtAvABBBIAANzQgBBCgtAuQgvAuhBAAg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,120,120);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.more_games_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_5_2_mc();
	this.instance.setTransform(46.5,11.1,0.992,0.992,0,0,0,19.2,19.3);

	this.instance_1 = new lib.more_games_5_2_mc();
	this.instance_1.setTransform(69.3,-7,1.295,1.295,0,0,0,19.2,19.3);

	this.instance_2 = new lib.more_games_5_2_mc();
	this.instance_2.setTransform(103.8,2.9,0.992,0.992,0,0,0,19.3,19.2);

	this.instance_3 = new lib.more_games_5_2_mc();
	this.instance_3.setTransform(38.1,14.6,0.799,0.799,0,0,0,19.2,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{regX:19.3,x:103.8,y:2.9,scaleX:0.992,scaleY:0.992}},{t:this.instance_1,p:{regY:19.3,scaleX:1.295,scaleY:1.295,x:69.3,y:-7,regX:19.2}},{t:this.instance,p:{regY:19.3,scaleX:0.992,scaleY:0.992,x:46.5,y:11.1}}]},62).to({state:[{t:this.instance_3},{t:this.instance_2,p:{regX:19.2,x:60.8,y:18.3,scaleX:0.992,scaleY:0.992}},{t:this.instance_1,p:{regY:19.2,scaleX:0.992,scaleY:0.992,x:82.5,y:-14.4,regX:19.2}},{t:this.instance,p:{regY:19.2,scaleX:0.799,scaleY:0.799,x:105.3,y:0.8}}]},2).to({state:[{t:this.instance_2,p:{regX:19.2,x:56.1,y:16.7,scaleX:0.799,scaleY:0.799}},{t:this.instance_1,p:{regY:19.2,scaleX:0.992,scaleY:0.992,x:59.8,y:-21.8,regX:19.2}},{t:this.instance,p:{regY:19.2,scaleX:0.799,scaleY:0.799,x:86.8,y:14.7}}]},2).to({state:[{t:this.instance_2,p:{regX:19.2,x:59.8,y:-12.4,scaleX:0.992,scaleY:0.992}},{t:this.instance_1,p:{regY:19.2,scaleX:1.295,scaleY:1.295,x:83.2,y:-25.1,regX:19.3}},{t:this.instance,p:{regY:19.3,scaleX:0.992,scaleY:0.992,x:82.5,y:20.1}}]},2).to({state:[{t:this.instance_2,p:{regX:19.3,x:103.8,y:2.9,scaleX:0.992,scaleY:0.992}},{t:this.instance_1,p:{regY:19.3,scaleX:1.295,scaleY:1.295,x:69.3,y:-7,regX:19.2}},{t:this.instance,p:{regY:19.3,scaleX:0.992,scaleY:0.992,x:46.5,y:11.1}}]},2).to({state:[{t:this.instance_3},{t:this.instance_2,p:{regX:19.2,x:60.8,y:18.3,scaleX:0.992,scaleY:0.992}},{t:this.instance_1,p:{regY:19.2,scaleX:0.992,scaleY:0.992,x:82.5,y:-14.4,regX:19.2}},{t:this.instance,p:{regY:19.2,scaleX:0.799,scaleY:0.799,x:105.3,y:0.8}}]},2).to({state:[{t:this.instance_2,p:{regX:19.2,x:56.1,y:16.7,scaleX:0.799,scaleY:0.799}},{t:this.instance_1,p:{regY:19.2,scaleX:0.992,scaleY:0.992,x:59.8,y:-21.8,regX:19.2}},{t:this.instance,p:{regY:19.2,scaleX:0.799,scaleY:0.799,x:86.8,y:14.7}}]},2).to({state:[{t:this.instance_2,p:{regX:19.2,x:59.8,y:-12.4,scaleX:0.992,scaleY:0.992}},{t:this.instance_1,p:{regY:19.2,scaleX:1.295,scaleY:1.295,x:83.2,y:-25.1,regX:19.3}},{t:this.instance,p:{regY:19.3,scaleX:0.992,scaleY:0.992,x:82.5,y:20.1}}]},2).to({state:[]},2).wait(30));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_40 = new cjs.Graphics().p("AkXHsQhwgdgNgnInzuuIcPgFIm4OxQgCAFgDAFQgWAhhkAbQiAAgi1AAQiyAAiBggg");
	var mask_graphics_77 = new cjs.Graphics().p("AkXHsQhwgdgNgnInzuuIcPgFIm4OxQgCAFgDAFQgWAhhkAbQiAAgi1AAQiyAAiBggg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_graphics_40,x:67.7,y:-22.4}).wait(37).to({graphics:mask_graphics_77,x:67.7,y:-22.4}).wait(11).to({graphics:null,x:0,y:0}).wait(20));

	// animation
	this.instance_4 = new lib.more_games_1_2_mc();
	this.instance_4.setTransform(94.8,75.2,1.108,1.108,0,0,0,14.8,37.3);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({y:34.5},15).wait(14).to({y:154.1},11).to({_off:true},1).wait(20));

	// animation
	this.instance_5 = new lib.more_games_1_2_mc();
	this.instance_5.setTransform(46.1,75.2,1.108,1.108,0,0,0,14.8,37.3);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).to({y:39.3},15).wait(21).to({y:158.9},11).to({_off:true},1).wait(20));

	// animation
	this.instance_6 = new lib.more_games_1_2_mc();
	this.instance_6.setTransform(72.1,75,1.108,1.108,0,0,0,14.8,37.3);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).to({y:10.4},16).wait(9).to({y:130},11).to({_off:true},1).wait(20));

	// animation
	this.instance_7 = new lib.more_games_2_2_mc();
	this.instance_7.setTransform(68.4,64.2,0.3,0.3,0,0,0,46,42.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).wait(1).to({scaleX:0.44,scaleY:0.44},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.69,scaleY:0.69},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:68.5},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:68.4},0).wait(48).to({scaleY:0.2,y:111.8},11).to({_off:true},1).wait(8));

	// animation
	this.instance_8 = new lib.more_games_3_2_mc();
	this.instance_8.setTransform(33.5,68.7,1.323,1.323,-90,0,0,29,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:28.8,scaleX:1.14,scaleY:1.09,x:39.4,y:68.8},0).wait(1).to({scaleX:0.98,scaleY:0.88,x:44.5},0).wait(1).to({scaleX:0.84,scaleY:0.7,x:49},0).wait(1).to({scaleX:0.73,scaleY:0.55,x:52.8,y:68.7},0).wait(1).to({scaleX:0.63,scaleY:0.42,x:55.9},0).wait(1).to({scaleX:0.56,scaleY:0.32,x:58.3},0).wait(1).to({scaleX:0.5,scaleY:0.25,x:60},0).wait(1).to({scaleX:0.47,scaleY:0.21,x:61},0).wait(1).to({regX:29,regY:22.6,scaleX:0.46,scaleY:0.2,x:61.4,y:68.6},0).to({regY:22.5,scaleX:1.32,scaleY:1.32,x:33.5,y:68.7},9).wait(1).to({regX:28.8,scaleX:1.26,scaleY:1.26,rotation:-82.1,x:36.6,y:65.4},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-75.3,x:39.3,y:62.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:-69.5,x:41.5,y:59.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-64.8,x:43.3,y:57.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-61.1,x:44.8,y:56},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-58.5,x:45.9,y:54.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-56.9,x:46.5,y:54},0).wait(1).to({regX:29,regY:22.4,scaleX:1.04,scaleY:1.04,rotation:-56.4,x:46.7,y:53.6},0).to({scaleX:2.41,scaleY:2.41,rotation:-45,x:23.8,y:25.4},8).to({regX:29.1,regY:22.3,scaleX:0.7,scaleY:0.7,x:54.5,y:55.9},5).to({_off:true},1).wait(59).to({_off:false,regX:28.8,regY:22.6,scaleX:0.22,scaleY:0.22,rotation:-180,x:67.1,y:74.1},0).wait(1).to({regY:22.5,scaleX:0.48,scaleY:0.48,rotation:-158.9,x:59.2,y:72.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-140.6,x:52.4,y:71.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-125.2,x:46.6,y:70.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-112.5,x:41.8,y:70},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-102.7,x:38.2,y:69.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:-95.6,x:35.6,y:69},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:-91.4,x:34,y:68.7},0).wait(1).to({regX:29,scaleX:1.32,scaleY:1.32,rotation:-90,x:33.5},0).wait(1));

	// animation
	this.instance_9 = new lib.more_games_3_2_mc();
	this.instance_9.setTransform(100.8,68.6,1.323,1.323,90,0,0,29,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:28.8,regY:22.5,scaleX:1.14,scaleY:1.09,x:94.8,y:68.4},0).wait(1).to({scaleX:0.98,scaleY:0.88,x:89.6},0).wait(1).to({scaleX:0.84,scaleY:0.7,x:85.2},0).wait(1).to({scaleX:0.73,scaleY:0.55,x:81.4,y:68.5},0).wait(1).to({scaleX:0.63,scaleY:0.42,x:78.4},0).wait(1).to({scaleX:0.56,scaleY:0.32,x:76},0).wait(1).to({scaleX:0.5,scaleY:0.25,x:74.3},0).wait(1).to({scaleX:0.47,scaleY:0.21,x:73.2},0).wait(1).to({regX:29,regY:22.4,scaleX:0.46,scaleY:0.2,x:72.9,y:68.6},0).to({scaleX:1.32,scaleY:1.32,x:100.8},9).wait(1).to({regX:28.8,regY:22.5,scaleX:1.26,scaleY:1.26,rotation:97.9,x:97.6,y:71.9},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:104.7,x:94.9,y:75},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:110.5,x:92.7,y:77.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:115.2,x:90.9,y:79.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:118.9,x:89.4,y:81.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:121.5,x:88.3,y:82.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:123.1,x:87.7,y:83.3},0).wait(1).to({regX:29,regY:22.4,scaleX:1.04,scaleY:1.04,rotation:123.6,x:87.5,y:83.8},0).to({regX:29.1,scaleX:2.41,scaleY:2.41,rotation:135,x:110.5,y:112.2},8).to({scaleX:0.7,scaleY:0.7,x:79.8,y:81.3},5).to({_off:true},1).wait(59).to({_off:false,regX:29,regY:22.6,scaleX:0.22,scaleY:0.22,rotation:0,x:67.1,y:63.1},0).wait(1).to({regX:28.8,regY:22.5,scaleX:0.48,scaleY:0.48,rotation:21.1,x:74.9,y:64.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:39.4,x:81.7,y:65.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:54.8,x:87.5,y:66.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:67.5,x:92.3,y:67},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:77.3,x:95.9,y:67.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:84.4,x:98.6,y:68},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:88.6,x:100.2,y:68.3},0).wait(1).to({regX:29,regY:22.4,scaleX:1.32,scaleY:1.32,rotation:90,x:100.8,y:68.6},0).wait(1));

	// animation
	this.instance_10 = new lib.more_games_3_2_mc();
	this.instance_10.setTransform(67.1,102.3,1.323,1.323,180,0,0,29,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:28.8,regY:22.5,scaleX:1.14,scaleY:1.1,x:67.3,y:96.6},0).wait(1).to({scaleX:0.98,scaleY:0.9,y:91.7},0).wait(1).to({scaleX:0.84,scaleY:0.73,y:87.5},0).wait(1).to({scaleX:0.73,scaleY:0.59,x:67.2,y:83.9},0).wait(1).to({scaleX:0.63,scaleY:0.47,y:81},0).wait(1).to({scaleX:0.56,scaleY:0.38,y:78.7},0).wait(1).to({scaleX:0.5,scaleY:0.31,y:77.1},0).wait(1).to({scaleX:0.47,scaleY:0.27,y:76.1},0).wait(1).to({regX:29,regY:22.4,scaleX:0.46,scaleY:0.26,x:67.1,y:75.8},0).to({scaleX:1.32,scaleY:1.32,y:102.3},9).wait(1).to({regX:28.8,regY:22.5,scaleX:1.26,scaleY:1.26,rotation:187.9,x:63.8,y:99.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:194.7,x:60.7,y:96.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:200.5,x:58.1,y:94.2},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:205.2,x:56,y:92.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:208.9,x:54.4,y:90.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:211.5,x:53.2,y:89.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:213.1,x:52.4,y:89.2},0).wait(1).to({regX:29.1,regY:22.4,scaleX:1.04,scaleY:1.04,rotation:213.6,x:52,y:89},0).to({scaleX:2.41,scaleY:2.41,rotation:225,x:23.6,y:111.9},8).to({scaleX:0.7,scaleY:0.7,x:54.4,y:81.2},5).to({_off:true},1).wait(59).to({_off:false,regX:29,scaleX:0.22,scaleY:0.22,rotation:90,x:72.7,y:68.6},0).wait(1).to({regX:28.8,regY:22.5,scaleX:0.48,scaleY:0.48,rotation:111.1,x:71.3,y:76.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:129.4,x:70.2,y:83.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:144.8,x:69.3,y:88.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:157.5,x:68.6,y:93.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:167.3,x:68.1,y:97.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:174.4,x:67.7,y:99.9},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:178.6,x:67.4,y:101.5},0).wait(1).to({regX:29,regY:22.4,scaleX:1.32,scaleY:1.32,rotation:180,x:67.1,y:102.3},0).wait(1));

	// animation
	this.instance_11 = new lib.more_games_3_2_mc();
	this.instance_11.setTransform(67.1,35,1.323,1.323,0,0,0,29,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:28.8,regY:22.5,scaleX:1.14,scaleY:1.11,x:66.9,y:40.5},0).wait(1).to({scaleX:0.98,scaleY:0.91,y:45.3},0).wait(1).to({scaleX:0.84,scaleY:0.75,y:49.4},0).wait(1).to({scaleX:0.73,scaleY:0.61,x:67,y:52.9},0).wait(1).to({scaleX:0.63,scaleY:0.49,x:66.9,y:55.8},0).wait(1).to({scaleX:0.56,scaleY:0.4,x:67,y:58},0).wait(1).to({scaleX:0.5,scaleY:0.34,y:59.6},0).wait(1).to({scaleX:0.47,scaleY:0.3,y:60.6},0).wait(1).to({regX:29.1,regY:22.4,scaleX:0.46,scaleY:0.28,x:67.1,y:60.9},0).to({regX:29,scaleX:1.32,scaleY:1.32,y:35},9).wait(1).to({regX:28.8,regY:22.5,scaleX:1.26,scaleY:1.26,rotation:7.9,x:70.3,y:38.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:14.7,x:73.4,y:40.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:20.5,x:76,y:43.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:25.2,x:78.1,y:44.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:28.9,x:79.8,y:46.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:31.5,x:81,y:47.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:33.1,x:81.7,y:48.1},0).wait(1).to({regX:29,scaleX:1.04,scaleY:1.04,rotation:33.6,x:82.2,y:48.4},0).to({regY:22.4,scaleX:2.41,scaleY:2.41,rotation:45,x:110.6,y:25.2},8).to({regX:29.1,scaleX:0.7,scaleY:0.7,x:79.9,y:56},5).to({_off:true},1).wait(59).to({_off:false,regX:29,regY:22.6,scaleX:0.22,scaleY:0.22,rotation:-90,x:61.6,y:68.6},0).wait(1).to({regX:28.8,regY:22.5,scaleX:0.48,scaleY:0.48,rotation:-68.9,x:62.8,y:60.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-50.6,x:63.9,y:54},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-35.2,x:64.8,y:48.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-22.5,x:65.5,y:43.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-12.7,x:66,y:39.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:-5.6,x:66.5,y:37.1},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:-1.4,x:66.7,y:35.5},0).wait(1).to({regX:29,regY:22.4,scaleX:1.32,scaleY:1.32,rotation:0,x:67.1,y:35},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3.8,5.3,126.7,126.6);
p.frameBounds = [rect, new cjs.Rectangle(15,15.7,104.3,105.7), new cjs.Rectangle(24.8,24.8,84.7,87.3), new cjs.Rectangle(33.3,32.6,67.6,71.4), new cjs.Rectangle(40.5,39.3,53.3,57.9), new cjs.Rectangle(46.4,44.8,41.4,46.8), new cjs.Rectangle(51.1,49.1,32.2,38.2), new cjs.Rectangle(54.3,52,25.7,32.1), new cjs.Rectangle(56.3,53.9,21.8,28.4), new cjs.Rectangle(56.9,54.5,20.5,27.2), new cjs.Rectangle(51,49.1,32.3,38.2), new cjs.Rectangle(45.1,43.6,44.1,49.2), new cjs.Rectangle(39.2,38.2,55.9,60.3), new cjs.Rectangle(33.2,32.7,67.7,71.4), new cjs.Rectangle(27.3,27.3,79.5,82.3), new cjs.Rectangle(21.4,21.8,91.3,93.4), new cjs.Rectangle(15.5,16.3,103.1,104.5), new cjs.Rectangle(9.5,10.9,115,115.5), new cjs.Rectangle(3.8,5.3,126.7,126.6), new cjs.Rectangle(4.9,6.4,124.5,124.4), new cjs.Rectangle(6.6,8.1,121.1,121.1), new cjs.Rectangle(8.5,10.1,117.3,117.2), new cjs.Rectangle(10.5,12,113.4,113.4), new cjs.Rectangle(12,13.6,110.2,110), new cjs.Rectangle(13.3,14.9,107.6,107.5), new cjs.Rectangle(14.2,15.8,105.9,105.7), new cjs.Rectangle(14.5,16,105.3,105.3), new cjs.Rectangle(6.1,7.7,122.1,122), new cjs.Rectangle(-2.2,-0.6,138.6,138.6), new cjs.Rectangle(-10.5,-9,155.4,155.5), new cjs.Rectangle(-19,-17.4,172.2,172.3), new cjs.Rectangle(-27.4,-25.8,189,189), new cjs.Rectangle(-35.7,-34.1,205.6,205.8), new cjs.Rectangle(-44.1,-42.4,222.3,222.4), new cjs.Rectangle(-52.4,-50.9,239.2,239.1), new cjs.Rectangle(-35.3,-33.8,205,205), new cjs.Rectangle(-18.4,-16.9,171.2,171.1), new cjs.Rectangle(-1.4,0,137.3,137.3), new cjs.Rectangle(8.6,8.8,119.8,111.6), new cjs.Rectangle(7.9,8.2,121.3,112.1), new cjs.Rectangle(7.6,8,121.8,112.5), rect=new cjs.Rectangle(7.5,7.9,121.8,112.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(7.5,7.5,121.8,112.9), new cjs.Rectangle(7.5,5.1,121.8,115.3), new cjs.Rectangle(7.5,2.7,121.8,117.7), new cjs.Rectangle(7.5,0.3,121.8,120.1), new cjs.Rectangle(7.5,-2.1,121.8,122.5), rect=new cjs.Rectangle(7.5,-2,121.8,122.4), rect, rect, rect, new cjs.Rectangle(7.5,-2.7,121.8,123.1), new cjs.Rectangle(7.5,-6.7,121.8,127.1), rect=new cjs.Rectangle(7.5,-32,121.8,152.4), rect, rect=new cjs.Rectangle(7.5,-33.5,121.8,153.9), rect, rect=new cjs.Rectangle(7.5,-40.9,121.8,161.3), rect, rect=new cjs.Rectangle(7.5,-50,121.8,170.4), rect, rect=new cjs.Rectangle(7.5,-32,121.8,152.4), rect, rect=new cjs.Rectangle(7.5,-33.5,121.8,153.9), rect, rect=new cjs.Rectangle(7.5,-40.9,121.8,161.3), rect, rect=new cjs.Rectangle(7.5,-50,121.8,170.4), rect, new cjs.Rectangle(7.5,-9.1,121.8,129.5), new cjs.Rectangle(7.5,1.7,121.8,118.7), rect=new cjs.Rectangle(7.5,7.9,121.8,112.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(7.6,8,121.8,112.5), new cjs.Rectangle(7.5,16.6,121.8,103.8), new cjs.Rectangle(7.5,25.3,121.8,95.2), new cjs.Rectangle(7.5,33.9,121.8,86.5), new cjs.Rectangle(7.5,42.6,121.8,77.9), new cjs.Rectangle(7.5,51.3,121.8,69.2), new cjs.Rectangle(7.5,59.9,121.8,60.5), new cjs.Rectangle(7.5,68.6,121.8,51.9), new cjs.Rectangle(7.5,77.3,121.8,43.2), new cjs.Rectangle(7.5,85.9,121.8,34.5), new cjs.Rectangle(7.5,94.6,121.8,25.9), new cjs.Rectangle(7.6,58.2,121.8,62.2), new cjs.Rectangle(45.6,47.3,42.9,42.8), new cjs.Rectangle(30.5,32.2,73.1,72.9), new cjs.Rectangle(18.9,20.6,96.2,95.9), new cjs.Rectangle(11.2,12.8,111.6,111.3), new cjs.Rectangle(6.9,8.5,120.3,120), new cjs.Rectangle(4.7,6.3,124.6,124.3), new cjs.Rectangle(3.9,5.4,126.4,126.1), new cjs.Rectangle(3.8,5.3,126.7,126.6)];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_4_2_mc();
	this.instance.setTransform(-63.3,-63.3,1,1,0,0,0,3.8,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.3,-63.3,126.7,126.6);
p.frameBounds = [rect];


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
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-55.3,240,110.7);
p.frameBounds = [rect, new cjs.Rectangle(-130,-60,260,120), new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
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
	this.shape.graphics.f("#FFFFFF").s().p("AhEFmQgjgbgaAAQgaAAgjAbQgVARg1A0QA0g1AQgUQAcgkAAgaQAAgagcgkQgQgUg0g1QA1A0AVARQAjAcAaAAQAaAAAjgcQAVgRAzg0QgyA1gRAUQgbAkAAAaQAAAaAbAkQARAUAyA1Qgzg0gVgRgADMgLQgQAAgrAoQAmglADgNQAEgSggghIgMALIAMgMIgOgNIAOANQAOgPgDgLQgDgHgUgVQAYAYAJAAQAJAAAYgYQgYAZAAAJQAAAIAYAZQgVgVgHgDQgKgDgQAOQAiAhARgEQAOgDAogmQgrArAAAPQAAAPAtAsQgugrgPAAgAhplcQgQgBgrArQAqgsAAgOQAAgQgtguQAuAtAQAAQAPAAAugtQgtAuAAAQQAAAOAqAsQgrgrgPABg");
	this.shape.setTransform(-156.1,-9.1,0.511,0.511);
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
	this.logo_mc.setTransform(-1.8,130.1,0.85,0.855,0,0,0,-2.1,152.1);

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
	this.indicator_mc.setTransform(150,15,1,1,0,0,0,150,15);

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


(lib.top_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_t4();
	this.instance.setTransform(-3.5,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABBHyIksB0Ii5l/IpylWIgRk2IPVnyIHXABIKjY2IjlD4g");
	this.shape.setTransform(-8.7,85.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.1,-6.4,212.9,184.1);
p.frameBounds = [rect];


(lib.top_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t4();
	this.instance.setTransform(28.7,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.8,0,103.3,109.8);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t4();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtLEoIA3mQIIoroIFMAAILsQAIg1Khg");
	this.shape.setTransform(6.6,77);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.8,-8,168.9,170);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t4();
	this.instance.setTransform(-17.4,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AEgH9ImgiAIpjE0IinhpIDSpIIMMt7IFUABIHjZmIkBCQg");
	this.shape.setTransform(-17.6,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.3,-7.9,181.5,178.5);
p.frameBounds = [rect];


(lib.top_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_t3();
	this.instance.setTransform(-3.9,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmTIyIi8nrIGhp/IGCgBIF8JpIjQIKg");
	this.shape.setTransform(1.3,49.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.9,-7.7,118.5,114.1);
p.frameBounds = [rect];


(lib.top_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t3();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArtOMIAoz0IHZqlID5AAILhS9IhGEwIw0Iug");
	this.shape.setTransform(14.5,97.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-6.2,150.1,207.8);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t3();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq8DjIHWt1IGvACIH0McIirHbIq0Asg");
	this.shape.setTransform(2.3,57.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.8,-8.8,140.4,132);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t3();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AJENtIjxp8InggqIoSI7Ii0gPIgzi6IOs21IGhAAIHAbBIiFA4g");
	this.shape.setTransform(-18.8,78.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.1,-10.5,180.7,178.7);
p.frameBounds = [rect];


(lib.top_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_t2();
	this.instance.setTransform(-4,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AseEGIgNkPIK5tdIIoAAIF2YIIjADFg");
	this.shape.setTransform(-5.2,80.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.4,-7,162.6,174.4);
p.frameBounds = [rect];


(lib.top_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t2();
	this.instance.setTransform(29,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsbPkICo3rIFAnnIFAAAIMPSvIhYFcIwZHSg");
	this.shape.setTransform(13.9,93.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.7,-7,159.3,201.5);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t2();
	this.instance.setTransform(-17.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq+COIG1r4IHoACIHgL1IjQFRIqoCNg");
	this.shape.setTransform(0,51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.3,-10.4,140.6,123.9);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t2();
	this.instance.setTransform(-17.4,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AosJnIjCi7IM7wXIEyAAIFwRPIieCIg");
	this.shape.setTransform(-19.1,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.2,-5.5,150.3,124.1);
p.frameBounds = [rect];


(lib.top_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_t1();
	this.instance.setTransform(-4,121.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArIEOIhHjYIKNuLIHsAAIGmX7IiiCwg");
	this.shape.setTransform(-5.4,76.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.8,-8.5,156.9,171);
p.frameBounds = [rect];


(lib.top_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_t1();
	this.instance.setTransform(28.5,144.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArcNkIA71JIGcpJIDiAAIMAUBIgtCyIzaKqg");
	this.shape.setTransform(16.7,100.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.6,-7,146.7,214.4);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_t1();
	this.instance.setTransform(-17.9,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApFB3IHCrUIEUAAIG1LJIijHqIs2AIg");
	this.shape.setTransform(1.5,49.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.7,-11.5,116.5,121.4);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_t1();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AEHFsIlxgeIpgHMIjwkSIP02EIHcACIGlatIkHBKg");
	this.shape.setTransform(-24,82.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-6.6,191.1,178.8);
p.frameBounds = [rect];


(lib.stockings_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_s2();
	this.instance.setTransform(4.1,121.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoNT0MgA0ghrIHUp9IEzACIF8K0MgDlAj0IiKA/g");
	this.shape.setTransform(-0.9,143.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.6,-8.7,115.6,305);
p.frameBounds = [rect];


(lib.stockings_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_s2();
	this.instance.setTransform(-27.5,144.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuhKyIFt62IF3l4IDwABIGfHhIHQZ9IguKKI6EAQg");
	this.shape.setTransform(5.4,134.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.6,-6.3,186.2,281.2);
p.frameBounds = [rect];


(lib.stockings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_s2();
	this.instance.setTransform(-17.9,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApjuiIHyqDIEsAAIGpLPMgFOAllInrAXg");
	this.shape.setTransform(-1.1,150.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-7.1,122.4,315);
p.frameBounds = [rect];


(lib.stockings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s2();
	this.instance.setTransform(-18.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsClgICqpBILBrtIEzgCIFnMEMgFTAnJIoVBTg");
	this.shape.setTransform(-28,160.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.1,-7.2,154.3,336.2);
p.frameBounds = [rect];


(lib.stockings_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h4_s1();
	this.instance.setTransform(4.1,121.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiuWJMgGsgi7IGfqaIHCACIFUK/MgC6AiTIhRBFg");
	this.shape.setTransform(0.6,140.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.7,-8.3,120.8,297.2);
p.frameBounds = [rect];


(lib.stockings_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3_s1();
	this.instance.setTransform(-28,144.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuzMLIFT66IG7n6ID7AAIGWIDIHIalIhYJ1I5VA2g");
	this.shape.setTransform(4.3,135);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.6,-10,189.8,290.1);
p.frameBounds = [rect];


(lib.stockings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2_s1();
	this.instance.setTransform(-18,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AskTKMAFWgiRIGqqDIF5AEIFRKEMAB/AlMI1/DBg");
	this.shape.setTransform(-12.8,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.5,-6.1,195.2,322.2);
p.frameBounds = [rect];


(lib.stockings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s1();
	this.instance.setTransform(-18.4,104.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhbZoIpp++IB5oSIL3sHIEcABIC7IGIBCQwIjqV7IjIEtg");
	this.shape.setTransform(-30.3,158.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-6.8,150.2,329.8);
p.frameBounds = [rect];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_8_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_8_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_7_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_7_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70.1,65.1,0.929,0.929,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4MWqIAAuEIC9AAQiMkRAAlGQABpEG2maQG4mZJsgBQJtABG3GZQG4GaAAJEQAAFGiMERIC9AAIAAOEg");
	this.shape.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect];


(lib.indicator_part_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.indicator_part_3_mc();
	this.instance.alpha = 0.5;
	this.instance.cache(-2,-2,364,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5mCgQhCAAgwgwQgugugBhCQABhAAugwQAwguBCgBIZbAAIALANIAMgNIZbAAQBCABAwAuQAuAwABBAQgBBCguAuQgwAwhCAAg");
	mask.setTransform(180,16);

	// text
	this.output_numbers_comp = new lib.output_numbers_1_mc();
	this.output_numbers_comp.setTransform(150.1,-39.4,0.6,0.6,0,0,0,0.1,1);

	this.output_numbers_comp.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.output_numbers_comp).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_part_2_mc();

	this.indicator_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance_1 = new lib.indicator_part_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.hint_rub_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.animation_rubbing_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect, rect];


(lib.hint_rub_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.body_mc)
		{
			if(createjs.Touch.isSupported())
			{
				this.body_mc.gotoAndStop(1);
			}
			else
			{
				this.body_mc.gotoAndStop(0);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.hint_rub_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(461,328);

	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(654,316,0.927,0.927);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(140,350,0.949,0.949);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(299,376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_2,p:{x:299,y:376}},{t:this.hero_1,p:{scaleX:0.949,scaleY:0.949,x:140,y:350}},{t:this.hero_4,p:{scaleX:0.927,scaleY:0.927,x:654,y:316}},{t:this.hero_3,p:{x:461,y:328}}]}).to({state:[{t:this.hero_1,p:{scaleX:1,scaleY:1,x:280,y:370}},{t:this.hero_3,p:{x:470.9,y:320}}]},1).to({state:[{t:this.hero_4,p:{scaleX:0.963,scaleY:0.963,x:310,y:320}},{t:this.hero_2,p:{x:450,y:370}}]},1).to({state:[{t:this.hero_1,p:{scaleX:1,scaleY:1,x:380,y:365}}]},1).to({state:[{t:this.hero_2,p:{x:384,y:375}}]},1).to({state:[{t:this.hero_3,p:{x:382,y:320}}]},1).to({state:[{t:this.hero_4,p:{scaleX:1,scaleY:1,x:416,y:330}}]},1).to({state:[{t:this.hero_1,p:{scaleX:0.949,scaleY:0.949,x:285,y:365}},{t:this.hero_3,p:{x:475,y:330}}]},1).to({state:[{t:this.hero_2,p:{x:260,y:370}},{t:this.hero_4,p:{scaleX:1,scaleY:1,x:535,y:340}}]},1).to({state:[{t:this.hero_1,p:{scaleX:1,scaleY:1,x:380,y:390}}]},1).to({state:[{t:this.hero_2,p:{x:384,y:390}}]},1).to({state:[{t:this.hero_3,p:{x:382,y:350}}]},1).to({state:[{t:this.hero_4,p:{scaleX:1,scaleY:1,x:416,y:325}}]},1).to({state:[{t:this.hero_2,p:{x:300,y:382}},{t:this.hero_1,p:{scaleX:0.949,scaleY:0.949,x:160,y:365}},{t:this.hero_4,p:{scaleX:0.927,scaleY:0.927,x:660,y:325}},{t:this.hero_3,p:{x:465,y:337}}]},1).to({state:[{t:this.hero_1,p:{scaleX:1,scaleY:1,x:290,y:390}},{t:this.hero_3,p:{x:480,y:350}}]},1).to({state:[{t:this.hero_4,p:{scaleX:0.927,scaleY:0.927,x:310,y:330}},{t:this.hero_2,p:{x:465,y:390}}]},1).to({state:[{t:this.hero_1,p:{scaleX:1,scaleY:1,x:380,y:390}}]},1).to({state:[{t:this.hero_2,p:{x:385,y:385}}]},1).to({state:[{t:this.hero_3,p:{x:390,y:350}}]},1).to({state:[{t:this.hero_4,p:{scaleX:1,scaleY:1,x:416,y:345}}]},1).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},6).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,603.6);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,600.8), rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-200,0,1200,602.5), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,0,1200,616.7), new cjs.Rectangle(-200,0,1200,605.6), new cjs.Rectangle(-200,0,1200,626.7), new cjs.Rectangle(-200,0,1200,620.8), new cjs.Rectangle(-200,0,1200,617.5), new cjs.Rectangle(-200,0,1200,625.6), new cjs.Rectangle(-200,0,1200,611.7), new cjs.Rectangle(-200,0,1200,612.6), new cjs.Rectangle(-200,0,1200,625.6), new cjs.Rectangle(-200,0,1200,617.5), new cjs.Rectangle(-200,0,1200,620.8), new cjs.Rectangle(-200,0,1200,612.5), new cjs.Rectangle(-200,0,1200,625.6), new cjs.Rectangle(-200,0,1200,631.7)];


(lib.heroes_2_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_main();
	this.instance.setTransform(283,326);

	this.instance_1 = new lib.hero4_main();
	this.instance_1.setTransform(516,315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(172.1,23.7,467.9,577.9);
p.frameBounds = [rect];


(lib.heroes_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_main();
	this.instance.setTransform(278,370);

	this.instance_1 = new lib.hero2_main();
	this.instance_1.setTransform(485,374);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(163,17.5,512,584);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heroes_1_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({x:-1000},20).to({_off:true},1).wait(49).to({_off:false,x:1000},0).to({x:0},20).wait(1));

	// animation
	this.instance_1 = new lib.heroes_2_0_mc();
	this.instance_1.setTransform(1000,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({x:0},20).wait(50).to({x:-1000},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(163,17.5,512,584);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(163,17.5,1476.9,584.2), new cjs.Rectangle(113,17.5,1476.9,584.2), new cjs.Rectangle(63,17.5,1476.9,584.2), new cjs.Rectangle(13,17.5,1476.9,584.2), new cjs.Rectangle(-37,17.5,1476.9,584.2), new cjs.Rectangle(-87,17.5,1476.9,584.2), new cjs.Rectangle(-137,17.5,1476.9,584.2), new cjs.Rectangle(-187,17.5,1476.9,584.2), new cjs.Rectangle(-237,17.5,1476.9,584.2), new cjs.Rectangle(-287,17.5,1476.9,584.2), new cjs.Rectangle(-337,17.5,1476.9,584.2), new cjs.Rectangle(-387,17.5,1476.9,584.2), new cjs.Rectangle(-437,17.5,1476.9,584.2), new cjs.Rectangle(-487,17.5,1476.9,584.2), new cjs.Rectangle(-537,17.5,1476.9,584.2), new cjs.Rectangle(-587,17.5,1476.9,584.2), new cjs.Rectangle(-637,17.5,1476.9,584.2), new cjs.Rectangle(-687,17.5,1476.9,584.2), new cjs.Rectangle(-737,17.5,1476.9,584.2), new cjs.Rectangle(-787,17.5,1476.9,584.2), new cjs.Rectangle(-837,17.5,1476.9,584.2), rect=new cjs.Rectangle(172.1,23.7,467.9,577.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(172.1,17.5,1503,584.2), new cjs.Rectangle(122.1,17.5,1472.8,584.2), new cjs.Rectangle(72.1,17.5,1472.8,584.2), new cjs.Rectangle(22.1,17.5,1472.8,584.2), new cjs.Rectangle(-27.9,17.5,1472.8,584.2), new cjs.Rectangle(-77.9,17.5,1472.8,584.2), new cjs.Rectangle(-127.9,17.5,1472.8,584.2), new cjs.Rectangle(-177.9,17.5,1472.8,584.2), new cjs.Rectangle(-227.9,17.5,1472.8,584.2), new cjs.Rectangle(-277.9,17.5,1472.8,584.2), new cjs.Rectangle(-327.9,17.5,1472.8,584.2), new cjs.Rectangle(-377.9,17.5,1472.8,584.2), new cjs.Rectangle(-427.9,17.5,1472.8,584.2), new cjs.Rectangle(-477.9,17.5,1472.8,584.2), new cjs.Rectangle(-527.9,17.5,1472.8,584.2), new cjs.Rectangle(-577.9,17.5,1472.8,584.2), new cjs.Rectangle(-627.9,17.5,1472.8,584.2), new cjs.Rectangle(-677.9,17.5,1472.8,584.2), new cjs.Rectangle(-727.9,17.5,1472.8,584.2), new cjs.Rectangle(-777.9,17.5,1472.8,584.2), new cjs.Rectangle(-827.9,17.5,1503,584.2)];


(lib.closet_makeup_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-380,-260);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-380,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_4_mc();
	this.blush_6.setTransform(240,90);

	this.blush_5 = new lib.blush_5_4_mc();
	this.blush_5.setTransform(280,-80);

	this.blush_4 = new lib.blush_4_4_mc();
	this.blush_4.setTransform(280,-235);

	this.blush_3 = new lib.blush_3_4_mc();
	this.blush_3.setTransform(-240,90);

	this.blush_2 = new lib.blush_2_4_mc();
	this.blush_2.setTransform(-280,-80);

	this.blush_1 = new lib.blush_1_4_mc();
	this.blush_1.setTransform(-280,-235);

	this.shadows_6 = new lib.shadows_6_4_mc();
	this.shadows_6.setTransform(240,80);

	this.shadows_5 = new lib.shadows_5_4_mc();
	this.shadows_5.setTransform(280,-85);

	this.shadows_4 = new lib.shadows_4_4_mc();
	this.shadows_4.setTransform(280,-240);

	this.shadows_3 = new lib.shadows_3_4_mc();
	this.shadows_3.setTransform(-240,80);

	this.shadows_2 = new lib.shadows_2_4_mc();
	this.shadows_2.setTransform(-280,-85);

	this.shadows_1 = new lib.shadows_1_4_mc();
	this.shadows_1.setTransform(-280,-240);

	this.lips_6 = new lib.lips_6_4_mc();
	this.lips_6.setTransform(-280,-240);

	this.lips_5 = new lib.lips_5_4_mc();
	this.lips_5.setTransform(280,-85);

	this.lips_4 = new lib.lips_4_4_mc();
	this.lips_4.setTransform(280,-240);

	this.lips_3 = new lib.lips_3_4_mc();
	this.lips_3.setTransform(-240,90);

	this.lips_2 = new lib.lips_2_4_mc();
	this.lips_2.setTransform(-280,-85);

	this.lips_1 = new lib.lips_1_4_mc();
	this.lips_1.setTransform(240,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(-290,0,1,1,0,0,180);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(290,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect, rect, rect];


(lib.closet_makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-380,-260);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-380,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_3_mc();
	this.blush_6.setTransform(240,90);

	this.blush_5 = new lib.blush_5_3_mc();
	this.blush_5.setTransform(280,-80);

	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(280,-230);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(-240,90);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(-280,-80);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(-280,-230);

	this.shadows_6 = new lib.shadows_6_3_mc();
	this.shadows_6.setTransform(240,90);

	this.shadows_5 = new lib.shadows_5_3_mc();
	this.shadows_5.setTransform(280,-85);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(280,-235);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(-240,90);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(-280,-85);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(-280,-235);

	this.lips_6 = new lib.lips_6_3_mc();
	this.lips_6.setTransform(-280,-240);

	this.lips_5 = new lib.lips_5_3_mc();
	this.lips_5.setTransform(280,-85);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(280,-240);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(-240,90);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(-280,-85);

	this.lips_1 = new lib.lips_1_3_mc();
	this.lips_1.setTransform(240,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(-290,0,1,1,0,0,180);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(290,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect, rect, rect];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-380,-260);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-380,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(240,90);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(280,-80);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(280,-230);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-240,90);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(-280,-80);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-280,-230);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(240,90);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(280,-85);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(280,-235);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-240,90);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-280,-85);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-280,-235);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(-280,-240);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(280,-85);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(280,-240);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-240,80);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-280,-85);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(240,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(-290,0,1,1,0,0,180);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(290,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect, rect, rect];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-380,-260);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-380,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(240,90);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(280,-75);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(280,-225);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-240,90);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(-280,-75);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-280,-225);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(240,90);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(280,-80);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(280,-235);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-240,90);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-280,-80);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-280,-235);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(-280,-240);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(280,-85);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(280,-240);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-240,80);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-280,-85);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(240,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_mc();
	this.instance.setTransform(-290,0,1,1,0,0,180);

	this.instance_1 = new lib.shelf_1_mc();
	this.instance_1.setTransform(290,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect, rect, rect];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.body_check_2_mc();
	this.instance_1.setTransform(0.1,0.1,0.929,0.929,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-55.7,-55.7,111.4,111.4)];


(lib.bodyDressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_makeup_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_makeup_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-310,900,620);
p.frameBounds = [rect];


(lib.body_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect];


(lib.body_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect];


(lib.body_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect];


(lib.body_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(160,120);
	this.location_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(29).to({x:600},0).to({x:140,alpha:1},15).to({x:160},5).wait(1));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(180,-130);
	this.location_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(19).to({x:600},0).to({x:140,alpha:1},15).to({x:180},5).wait(11));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-160,120);
	this.location_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(29).to({x:-600},0).to({x:-140,alpha:1},15).to({x:-160},5).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,-130);
	this.location_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(19).to({x:-600},0).to({x:-140,alpha:1},15).to({x:-180},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-760,-290,1520,570), new cjs.Rectangle(-729.3,-290,1458.7,570), new cjs.Rectangle(-698.6,-290,1397.3,570), new cjs.Rectangle(-668,-290,1336,570), new cjs.Rectangle(-637.3,-290,1274.7,570), new cjs.Rectangle(-606.6,-290,1213.3,570), new cjs.Rectangle(-576,-290,1152,570), new cjs.Rectangle(-545.3,-290,1090.7,570), new cjs.Rectangle(-514.6,-290,1029.3,570), new cjs.Rectangle(-484,-290,968,570), new cjs.Rectangle(-760,-290,1520,570), new cjs.Rectangle(-729.3,-290,1458.7,570), new cjs.Rectangle(-698.6,-290,1397.3,570), new cjs.Rectangle(-668,-290,1336,570), new cjs.Rectangle(-637.3,-290,1274.7,570), new cjs.Rectangle(-606.6,-290,1213.3,570), new cjs.Rectangle(-576,-290,1152,570), new cjs.Rectangle(-545.3,-290,1090.7,570), new cjs.Rectangle(-514.6,-290,1029.3,570), new cjs.Rectangle(-484,-290,968,570), new cjs.Rectangle(-453.3,-290,906.7,570), new cjs.Rectangle(-422.6,-290,845.3,570), new cjs.Rectangle(-392,-290,784,570), new cjs.Rectangle(-361.3,-290,722.7,570), rect=new cjs.Rectangle(-340,-290,680,570), rect, rect, rect, rect, rect, rect];


(lib.body_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-160,120);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,-130);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(160,120);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(29).to({x:600},0).to({x:140,alpha:1},15).to({x:160},5).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-160,120);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({x:-600},0).to({x:-140,alpha:1},15).to({x:-160},5).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(180,-130);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(19).to({x:600},0).to({x:140,alpha:1},15).to({x:180},5).wait(11));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,-130);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({x:-600},0).to({x:-140,alpha:1},15).to({x:-180},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-760,-290,1520,570), new cjs.Rectangle(-729.3,-290,1458.7,570), new cjs.Rectangle(-698.6,-290,1397.3,570), new cjs.Rectangle(-668,-290,1336,570), new cjs.Rectangle(-637.3,-290,1274.7,570), new cjs.Rectangle(-606.6,-290,1213.3,570), new cjs.Rectangle(-576,-290,1152,570), new cjs.Rectangle(-545.3,-290,1090.7,570), new cjs.Rectangle(-514.6,-290,1029.3,570), new cjs.Rectangle(-484,-290,968,570), new cjs.Rectangle(-760,-290,1520,570), new cjs.Rectangle(-729.3,-290,1458.7,570), new cjs.Rectangle(-698.6,-290,1397.3,570), new cjs.Rectangle(-668,-290,1336,570), new cjs.Rectangle(-637.3,-290,1274.7,570), new cjs.Rectangle(-606.6,-290,1213.3,570), new cjs.Rectangle(-576,-290,1152,570), new cjs.Rectangle(-545.3,-290,1090.7,570), new cjs.Rectangle(-514.6,-290,1029.3,570), new cjs.Rectangle(-484,-290,968,570), new cjs.Rectangle(-453.3,-290,906.7,570), new cjs.Rectangle(-422.6,-290,845.3,570), new cjs.Rectangle(-392,-290,784,570), new cjs.Rectangle(-361.3,-290,722.7,570), rect=new cjs.Rectangle(-340,-290,680,570), rect, rect, rect, rect, rect, rect];


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


(lib.prev_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,120,120);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,120,120);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45,90,90);
p.frameBounds = [rect];


(lib.next_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,120,120);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,120,120);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-45,90,90);
p.frameBounds = [rect];


(lib.next_2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_2_mc();

	this.instance_1 = new lib.next_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.923,scaleY:0.923,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
p.frameBounds = [rect, rect, new cjs.Rectangle(-120,-55.3,240,110.7), new cjs.Rectangle(-130,-60,260,120)];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnuHvQjMjOgBkhQABkgDMjOQDNjMEhgBQEiABDNDMQDMDOABEgQgBEhjMDOQjNDMkiABQkhgBjNjMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.3,-63.3,126.7,126.6);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-70,-70,140,140)];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_2_mc();
	this.instance.setTransform(-82.9,0,0.553,0.553,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-82.9,alpha:0.801},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270.7,-140.3,375.8,280.6);
p.frameBounds = [rect, new cjs.Rectangle(-283.6,-146.9,393.6,293.9), new cjs.Rectangle(-270.7,-140.3,375.8,280.6), new cjs.Rectangle(-283.6,-146.9,393.6,293.9)];


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
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(70,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(690,470,0.917,0.916);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(690,550,0.792,0.791);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.credits_btn},{t:this.instruction_btn},{t:this._moreGames_btn},{t:this.play_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(360,500,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.decor_background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();
	this.instance_3.setTransform(0,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.background_4_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,937);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logo_1_mc();
	this.logo_btn.setTransform(90.1,50.2,0.421,0.421,0,0,0,0.1,0.4);
	this.logo_btn.cache(-192,-92,384,184);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,603.6);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6,location_8:7});

	// body
	this.body_1_mc = new lib.body_locations_1_mc();

	this.body_2_mc = new lib.body_locations_2_mc();

	this.body_3_mc = new lib.body_locations_3_mc();

	this.body_4_mc = new lib.body_locations_4_mc();

	this.body_5_mc = new lib.body_locations_5_mc();

	this.body_6_mc = new lib.body_locations_6_mc();

	this.body_7_mc = new lib.body_locations_7_mc();

	this.body_8_mc = new lib.body_locations_8_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-290,680,570);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_part_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_part_1_mc();
	this.indicator_mc.setTransform(-180,-16);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_part_6_mc();
	this.instance.cache(-202,-32,404,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-68,400,98);
p.frameBounds = [rect];


(lib.hairstyle_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(55,50,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,185,180);
p.frameBounds = [rect];


(lib.dressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(150,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-150,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-550,900,860);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(150,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-150,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-550,900,860);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(150,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-150,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-550,900,860);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(150,160);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-150,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_1},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-550,900,860);
p.frameBounds = [rect];


(lib.closet_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.stockings_0 = new lib.stockings_0_mc();
	this.stockings_0.setTransform(188,-220);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-30);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(188,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stockings_0}]},6).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_4_mc();
	this.hair_3.setTransform(70,70);

	this.hair_2 = new lib.hairstyle_2_4_mc();
	this.hair_2.setTransform(-70,-40);

	this.hair_1 = new lib.hairstyle_1_4_mc();
	this.hair_1.setTransform(70,-150);

	this.hair_6 = new lib.hairstyle_6_4_mc();
	this.hair_6.setTransform(-70,70);

	this.hair_5 = new lib.hairstyle_5_4_mc();
	this.hair_5.setTransform(70,-40);

	this.hair_4 = new lib.hairstyle_4_4_mc();
	this.hair_4.setTransform(-70,-150);

	this.dress_2 = new lib.dress_2_4_mc();
	this.dress_2.setTransform(70,-235);

	this.dress_4 = new lib.dress_4_4_mc();
	this.dress_4.setTransform(-70,-235);

	this.shoes_3 = new lib.shoes_3_4_mc();
	this.shoes_3.setTransform(105,120);

	this.dress_3 = new lib.dress_3_4_mc();
	this.dress_3.setTransform(-70,-235);

	this.dress_1 = new lib.dress_1_4_mc();
	this.dress_1.setTransform(70,-235);

	this.shoes_2 = new lib.shoes_2_4_mc();
	this.shoes_2.setTransform(70,124);

	this.top_2 = new lib.top_2_4_mc();
	this.top_2.setTransform(70,-235);

	this.top_1 = new lib.top_1_4_mc();
	this.top_1.setTransform(-70,-235);

	this.bottom_2 = new lib.bottom_2_4_mc();
	this.bottom_2.setTransform(70,-93.1,1,1,0,0,0,0,1.9);

	this.bottom_1 = new lib.bottom_1_4_mc();
	this.bottom_1.setTransform(-70,-86.6,1,1,0,0,0,0,8.4);

	this.shoes_4 = new lib.shoes_4_4_mc();
	this.shoes_4.setTransform(-70,130);

	this.shoes_1 = new lib.shoes_1_4_mc();
	this.shoes_1.setTransform(-65,123);

	this.top_4 = new lib.top_4_4_mc();
	this.top_4.setTransform(-70,-235);

	this.top_3 = new lib.top_3_4_mc();
	this.top_3.setTransform(70,-223.6,1,1,0,0,0,0,11.4);

	this.bottom_4 = new lib.bottom_4_4_mc();
	this.bottom_4.setTransform(-70,-85.6,1,1,0,0,0,0,9.4);

	this.bottom_3 = new lib.bottom_3_4_mc();
	this.bottom_3.setTransform(70,-95);

	this.stockings_2 = new lib.stockings_2_4_mc();
	this.stockings_2.setTransform(-70,-235);

	this.stockings_1 = new lib.stockings_1_4_mc();
	this.stockings_1.setTransform(70,-235);

	this.accessory_2 = new lib.accessory_2_4_mc();
	this.accessory_2.setTransform(-65,30);

	this.accessory_1 = new lib.accessory_1_4_mc();
	this.accessory_1.setTransform(65,45);

	this.headdress_2 = new lib.headdress_2_4_mc();
	this.headdress_2.setTransform(70,-130);

	this.headdress_1 = new lib.headdress_1_4_mc();
	this.headdress_1.setTransform(-70,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_4},{t:this.dress_2}]},1).to({state:[{t:this.dress_1},{t:this.dress_3},{t:this.shoes_3}]},1).to({state:[{t:this.shoes_4},{t:this.bottom_1},{t:this.bottom_2},{t:this.top_1},{t:this.top_2},{t:this.shoes_2}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_4},{t:this.top_3},{t:this.top_4},{t:this.shoes_1}]},1).to({state:[{t:this.stockings_1},{t:this.stockings_2}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.accessory_1},{t:this.accessory_2}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_0_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,70);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-150);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-40);

	this.instance_4 = new lib.stick_0_mc();
	this.instance_4.setTransform(0,-220);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,-100);

	this.instance_6 = new lib.shelf_0_mc();
	this.instance_6.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_6},{t:this.instance_5},{t:this.instance,p:{y:40}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-243.4,400,431.5), new cjs.Rectangle(-200,-242.9,400,431), new cjs.Rectangle(-200,-243.5,400,431.6), new cjs.Rectangle(-200,-242.7,400,430.8), new cjs.Rectangle(-200,-243.7,408,431.8), new cjs.Rectangle(-200,-240,408,428)];


(lib.closet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.stockings_0 = new lib.stockings_0_mc();
	this.stockings_0.setTransform(188,-220);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-30);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(188,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stockings_0}]},6).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_3_mc();
	this.hair_3.setTransform(70,70);

	this.hair_2 = new lib.hairstyle_2_3_mc();
	this.hair_2.setTransform(-70,-40);

	this.hair_1 = new lib.hairstyle_1_3_mc();
	this.hair_1.setTransform(70,-150);

	this.hair_6 = new lib.hairstyle_6_3_mc();
	this.hair_6.setTransform(-70,70);

	this.hair_5 = new lib.hairstyle_5_3_mc();
	this.hair_5.setTransform(70,-40);

	this.hair_4 = new lib.hairstyle_4_3_mc();
	this.hair_4.setTransform(-70,-150);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(-80,-235);

	this.shoes_2 = new lib.shoes_2_3_mc();
	this.shoes_2.setTransform(0,115);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(60,-235);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(60,-235);

	this.shoes_3 = new lib.shoes_3_3_mc();
	this.shoes_3.setTransform(0,105);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(-80,-235);

	this.shoes_4 = new lib.shoes_4_3_mc();
	this.shoes_4.setTransform(0,120);

	this.top_2 = new lib.top_2_3_mc();
	this.top_2.setTransform(70,-235);

	this.top_1 = new lib.top_1_3_mc();
	this.top_1.setTransform(-70,-235);

	this.bottom_2 = new lib.bottom_2_3_mc();
	this.bottom_2.setTransform(70,-95);

	this.bottom_1 = new lib.bottom_1_3_mc();
	this.bottom_1.setTransform(-70,-95);

	this.top_4 = new lib.top_4_3_mc();
	this.top_4.setTransform(70,-217.7,1,1,0,0,0,0,17.3);

	this.top_3 = new lib.top_3_3_mc();
	this.top_3.setTransform(-70,-235);

	this.shoes_1 = new lib.shoes_1_3_mc();
	this.shoes_1.setTransform(0,100);

	this.bottom_4 = new lib.bottom_4_3_mc();
	this.bottom_4.setTransform(-70,-74.2,1,1,0,0,0,0,20.8);

	this.bottom_3 = new lib.bottom_3_3_mc();
	this.bottom_3.setTransform(70,-84.7,1,1,0,0,0,0,10.3);

	this.stockings_2 = new lib.stockings_2_3_mc();
	this.stockings_2.setTransform(55,-235);

	this.stockings_1 = new lib.stockings_1_3_mc();
	this.stockings_1.setTransform(-60,-235);

	this.headdress_2 = new lib.headdress_2_3_mc();
	this.headdress_2.setTransform(75,-120);

	this.headdress_1 = new lib.headdress_1_3_mc();
	this.headdress_1.setTransform(-75,-135);

	this.accessory_2 = new lib.accessory_2_3_mc();
	this.accessory_2.setTransform(70,35);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(-70,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_2},{t:this.shoes_2},{t:this.dress_4}]},1).to({state:[{t:this.dress_3},{t:this.shoes_3},{t:this.dress_1}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.top_1},{t:this.top_2},{t:this.shoes_4}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_4},{t:this.shoes_1},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.stockings_1},{t:this.stockings_2}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.headdress_1},{t:this.headdress_2}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_0_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,70);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-150);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-40);

	this.instance_4 = new lib.stick_0_mc();
	this.instance_4.setTransform(0,-220);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,-100);

	this.instance_6 = new lib.shelf_0_mc();
	this.instance_6.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_6},{t:this.instance_5},{t:this.instance,p:{y:40}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-244,400,432.1), new cjs.Rectangle(-200,-243.9,400,431.9), new cjs.Rectangle(-200,-242,400,430.1), new cjs.Rectangle(-200,-241.2,400,429.3), new cjs.Rectangle(-200,-245,408,433.1), new cjs.Rectangle(-200,-240,408,428)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.stockings_0 = new lib.stockings_0_mc();
	this.stockings_0.setTransform(188,-220);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-30);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(188,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stockings_0}]},6).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(70,70);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(-70,-40);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(70,-150);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(-70,70);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(70,-40);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(-70,-150);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-80,-235);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(-60,90);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(60,125);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(60,-235);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(60,-235);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-80,-235);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(0,105);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(60,-95);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(-80,-95);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(60,-231.4,1,1,0,0,0,0,3.6);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(-80,-229.5,1,1,0,0,0,0,5.5);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(0,115);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(60,-235);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(-80,-235);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(80,-95);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(-60,-95);

	this.stockings_2 = new lib.stockings_2_2_mc();
	this.stockings_2.setTransform(-70,-234.4);

	this.stockings_1 = new lib.stockings_1_2_mc();
	this.stockings_1.setTransform(70,-235);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(80,15);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-80,18);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(80,-112);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(-80,-127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_4},{t:this.shoes_2},{t:this.shoes_3},{t:this.dress_3}]},1).to({state:[{t:this.dress_2},{t:this.dress_1}]},1).to({state:[{t:this.top_1},{t:this.top_2},{t:this.bottom_1},{t:this.bottom_3},{t:this.shoes_1}]},1).to({state:[{t:this.bottom_2},{t:this.bottom_4},{t:this.top_3},{t:this.top_4},{t:this.shoes_4}]},1).to({state:[{t:this.stockings_1},{t:this.stockings_2}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.accessory_1},{t:this.accessory_2}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_0_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,70);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-150);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-40);

	this.instance_4 = new lib.stick_0_mc();
	this.instance_4.setTransform(0,-220);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,-100);

	this.instance_6 = new lib.shelf_0_mc();
	this.instance_6.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_6},{t:this.instance_5},{t:this.instance,p:{y:40}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-246.5,400,434.6), new cjs.Rectangle(-200,-244.3,403.5,433), new cjs.Rectangle(-200,-246.5,400,434.6), new cjs.Rectangle(-200,-243.8,400,431.9), new cjs.Rectangle(-200,-241.5,408,429.6), new cjs.Rectangle(-200,-240,408,428)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.stockings_0 = new lib.stockings_0_mc();
	this.stockings_0.setTransform(188,-220);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-30);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(188,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.stockings_0}]},6).to({state:[{t:this.headdress_0},{t:this.accessory_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(70,70);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(-70,-40);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(70,-150);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(-70,70);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(70,-40);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(-70,-150);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-70,-235);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(-75,105);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(70,-235);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-70,-235);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(-95,120);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(70,-235);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(70,-235);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-70,-235);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(0,115);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(70,-82.9,1,1,0,0,0,0,12.1);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(-70,-87.9,1,1,0,0,0,0,7.1);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(-70,-235);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(70,-235);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(0,135);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(0,-95);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(-90,-235);

	this.stockings_1 = new lib.stockings_1_1_mc();
	this.stockings_1.setTransform(0,-235);

	this.stockings_2 = new lib.stockings_2_1_mc();
	this.stockings_2.setTransform(90,-235);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(75,18);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(-75,18);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(75,-105);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-75,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_2},{t:this.shoes_2},{t:this.dress_3}]},1).to({state:[{t:this.dress_4},{t:this.shoes_1},{t:this.dress_1}]},1).to({state:[{t:this.bottom_2},{t:this.bottom_3},{t:this.shoes_4},{t:this.top_1},{t:this.top_2}]},1).to({state:[{t:this.bottom_4},{t:this.shoes_3},{t:this.top_4},{t:this.top_3}]},1).to({state:[{t:this.stockings_2},{t:this.stockings_1},{t:this.bottom_1}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.accessory_1},{t:this.accessory_2}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_0_mc();
	this.instance.setTransform(0,160);

	this.instance_1 = new lib.stick_0_mc();
	this.instance_1.setTransform(0,70);

	this.instance_2 = new lib.stick_0_mc();
	this.instance_2.setTransform(0,-150);

	this.instance_3 = new lib.stick_0_mc();
	this.instance_3.setTransform(0,-40);

	this.instance_4 = new lib.stick_0_mc();
	this.instance_4.setTransform(0,-220);

	this.instance_5 = new lib.shelf_0_mc();
	this.instance_5.setTransform(0,-100);

	this.instance_6 = new lib.shelf_0_mc();
	this.instance_6.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{y:-150}},{t:this.instance_1,p:{y:70}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_2,p:{y:-220}},{t:this.instance,p:{y:160}},{t:this.instance_1,p:{y:-80}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance,p:{y:160}}]},1).to({state:[{t:this.instance_1,p:{y:-220}},{t:this.instance_6},{t:this.instance_5},{t:this.instance,p:{y:40}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-247.5,400,435.6), new cjs.Rectangle(-200,-244.6,400,432.6), new cjs.Rectangle(-200,-241.6,400,429.7), new cjs.Rectangle(-200,-245.5,400,433.6), new cjs.Rectangle(-200,-245.8,408,433.8), new cjs.Rectangle(-200,-240,408,428)];


(lib.bodyDressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-240,400,428);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,300);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,837);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,550);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(100,460);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,-200);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,-100);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(690,475,0.833,0.833);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(690,550.1,0.833,0.833,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.freeGames_mc = new lib.free_games_mc();
	this.freeGames_mc.setTransform(300,620);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(350,540);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(450,540);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100.2,50.1,0.905,0.904,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.next_mc},{t:this.prev_mc},{t:this.freeGames_mc},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.next_btn},{t:this.moreGames_btn},{t:this.facebook_btn}]}).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1200,1181.5);
p.frameBounds = [rect];


(lib.quest_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_7_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_4 = new lib.hero4_head_1();
	this.hero_4.setTransform(398,210);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-261.3,900,951.4);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_3 = new lib.hero3_head_1();
	this.hero_3.setTransform(400,200);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-261.3,900,951.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.hero2_head_1();
	this.hero_2.setTransform(405,183);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-261.3,900,951.4);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_1_mc.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero1_makeup();
	this.hero_1.setTransform(403,220);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-261.3,900,951.4);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,530);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,530);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,530);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,530);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(400.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
p.frameBounds = [rect];


(lib.dressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242.5,-550,485,827);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242.5,-550,485,827);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242.5,-550,485,827);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.set_2},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242.5,-550,485,827);
p.frameBounds = [rect];


(lib.quest_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_8_mc();
	this.dressupPanel_1_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(620,310,0.981,0.981);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(17.5,-261.3,724,858.4);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_1_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(600,310,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(17.5,-261.3,681.5,858.4);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_1_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(590,360,0.942,0.942);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(17.5,-261.3,751.4,858.4);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_1_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(600.1,360.1,0.932,0.932,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(17.5,-261.3,707.4,858.4);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(730,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(260.1,540.1,0.846,0.846,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.skip_btn},{t:this.next_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1121.4);
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
	this.text = new cjs.Text("storage", "32px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 123;
	this.text.setTransform(63.5,2);

	this.instance = new lib.PreloaderScreen();
	this.instance.setTransform(-2,0.1,1,1,0,0,0,-2,0.1);

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_6();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.LocationScreen_7();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.LocationScreen_8();
	this.instance_11.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();

	this.instance_13 = new lib.InstructionScreen();
	this.instance_13.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_14 = new lib.TrackMove();
	this.instance_14.setTransform(361.4,68.4);

	this.instance_15 = new lib.Cursor();
	this.instance_15.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_16 = new lib.OrientationLockScreen();

	this.instance_17 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,932.3), new cjs.Rectangle(-200,-76.9,1200,832.3), rect=new cjs.Rectangle(-200,-261.3,1200,1116.7), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1200,1181.5), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,18.4,380.7,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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