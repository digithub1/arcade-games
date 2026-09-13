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
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_8", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_9", frames: [[0,602,800,600],[0,0,800,600]]},
		{name:"storage_atlas_10", frames: [[0,578,658,600],[0,0,689,576]]},
		{name:"storage_atlas_11", frames: [[667,574,563,572],[0,576,554,556],[667,0,588,572],[0,0,665,574]]},
		{name:"storage_atlas_12", frames: [[590,0,582,456],[0,0,588,488],[0,490,555,467],[590,458,522,506],[0,966,1200,200]]},
		{name:"storage_atlas_13", frames: [[910,0,350,450],[0,0,506,365],[508,0,400,400],[492,452,490,320],[492,774,490,320],[0,689,490,320],[0,367,490,320]]},
		{name:"storage_atlas_14", frames: [[492,0,490,320],[492,322,500,300],[492,1006,445,294],[874,624,380,380],[492,624,380,380],[0,322,490,320],[0,644,490,320],[0,0,490,320],[0,966,490,320]]},
		{name:"storage_atlas_15", frames: [[1077,746,190,190],[0,624,200,300],[0,322,200,300],[910,373,190,190],[0,0,320,320],[1102,554,190,190],[481,371,210,190],[674,0,320,185],[693,187,264,184],[693,373,215,182],[202,735,204,177],[719,749,139,239],[202,371,277,160],[959,219,332,141],[408,749,309,111],[0,926,275,164],[279,1206,333,91],[0,1092,277,162],[322,222,369,147],[1081,1077,219,137],[1081,938,219,137],[663,1163,219,137],[860,939,219,137],[860,757,180,180],[1102,362,190,190],[277,914,360,100],[279,1016,186,188],[467,1016,194,178],[663,990,187,171],[404,563,224,141],[996,0,259,217],[693,557,190,190],[885,565,190,190],[322,0,350,220],[202,533,200,200]]},
		{name:"storage_atlas_16", frames: [[0,919,150,150],[1130,593,150,150],[596,740,150,150],[0,1071,150,150],[444,838,150,150],[748,740,150,150],[0,767,150,150],[978,593,150,150],[140,615,150,150],[444,686,150,150],[140,463,150,150],[292,567,150,150],[826,588,150,150],[674,588,150,150],[763,436,150,150],[522,534,150,150],[292,719,150,150],[1126,1154,120,120],[596,892,235,84],[640,1154,240,62],[1072,253,152,176],[915,436,98,148],[1165,745,103,176],[152,1002,178,122],[615,1060,184,92],[0,463,138,174],[1072,106,186,145],[486,990,127,165],[663,138,209,131],[884,0,285,104],[900,745,140,144],[663,0,219,136],[0,0,219,137],[221,0,219,137],[442,0,219,137],[882,1153,120,120],[1004,1154,120,120],[1152,1032,120,120],[837,1031,120,120],[615,978,220,80],[334,990,150,142],[1226,253,50,297],[333,433,187,132],[884,106,186,159],[152,1126,180,120],[501,139,158,125],[522,433,239,99],[467,1157,171,106],[0,639,137,108],[900,891,127,138],[167,301,164,160],[501,271,165,160],[1036,431,165,160],[668,271,165,160],[0,301,165,160],[167,139,165,160],[334,139,165,160],[0,139,165,160],[640,1218,226,65],[1029,911,121,144],[1152,923,140,107],[333,301,139,130],[334,1134,131,154],[1042,745,121,164],[874,267,160,167],[152,871,173,129]]},
		{name:"storage_atlas_17", frames: [[892,573,100,86],[0,0,120,120],[122,0,120,120],[249,791,60,60],[608,246,180,80],[220,739,100,50],[364,246,120,120],[187,791,60,60],[457,649,80,80],[322,745,99,48],[273,368,120,99],[222,584,198,46],[222,520,76,62],[80,469,221,49],[395,429,214,52],[315,632,69,101],[912,0,84,155],[834,366,138,87],[244,632,69,105],[0,387,78,140],[0,286,140,99],[608,533,140,68],[0,592,140,62],[750,557,140,66],[422,585,140,62],[790,246,120,118],[80,520,140,70],[547,772,48,48],[599,699,48,48],[405,483,100,99],[0,748,61,68],[303,483,100,99],[656,603,90,89],[656,694,90,63],[63,811,60,41],[486,286,80,40],[80,387,60,41],[138,707,80,68],[880,661,80,73],[748,715,56,90],[395,368,80,53],[0,656,71,90],[929,455,40,55],[929,512,40,43],[998,40,10,11],[386,649,69,94],[142,632,100,73],[311,795,57,60],[507,483,99,100],[998,0,23,38],[304,122,31,31],[972,157,50,50],[838,625,40,147],[974,361,50,210],[723,807,53,59],[486,328,123,99],[661,759,60,60],[868,776,60,60],[423,772,60,60],[63,749,60,60],[806,774,60,60],[485,772,60,60],[930,776,60,60],[962,661,60,60],[0,529,60,60],[125,777,60,60],[599,759,60,60],[244,0,120,120],[611,328,140,35],[457,731,140,39],[880,736,140,38],[80,432,140,32],[611,481,214,50],[611,366,221,55],[611,423,212,56],[182,122,120,120],[827,455,100,100],[486,164,120,120],[564,603,90,94],[142,328,129,102],[748,625,88,88],[912,246,108,113],[73,656,63,91],[0,122,180,80],[608,164,180,80],[730,0,180,80],[366,82,180,80],[304,164,180,80],[548,82,180,80],[548,0,180,80],[790,164,180,80],[366,0,180,80],[0,204,180,80],[182,246,180,80],[730,82,180,80]]}
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



(lib.arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_11_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_12_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_13_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_14_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_15_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_16_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
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
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_category_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bg_icon9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_long_button_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_option_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_category_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.decor_tale8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.done_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_uzord_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dragon_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dragon_face8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ears_1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ears_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ears_2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ears_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.ears_3_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.ears_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.ears_4_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ears_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ears_5_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ears_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.ears_6_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ears_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ears_7_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ears_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.ears_8_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ears_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes4_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.eyes5_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.eyes6_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.eyes7_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes8_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.icon_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.icon_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.icon_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.icon_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.icon_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.mouth_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.neck1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.neck2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.neck3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.neck4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.neck5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.neck6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.neck7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.neck8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.numbers_separator_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.pattern_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.pattern_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.pattern_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.pattern_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.pattern_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.pattern_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.pattern_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.pattern_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.podium_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shoes_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.shoes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.shoes_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.shoes_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.shoes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.star_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.star_title_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.tale10_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.tale11_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.tale12_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.tale1_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.tale2_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.tale3_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.tale4_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.tale5_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.tale6_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.tale7_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.tale8_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.tale9_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_random_de_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.title_random_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.title_random_es_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.title_random_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.title_random_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.title_random_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_de_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_es_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.title_reset_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
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
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],13.4,-23,0,17,-23,112.1).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
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


(lib.tale12_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale12_decor_img();
	this.instance.setTransform(-50.6,-39,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-39,100.8,77.1);
p.frameBounds = [rect];


(lib.tale12_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkzF/QgDgCgBgEQgBgDABgDIACgFIAAABIALgjIABgDIgrAhIgFACQgDABgDgCQgCgBgCgCQiBjEgPjVQgMiXAtigIADgEIAEgDIAGAAQAuAPAoAcIAYASIAAAAQAfAaAbAkIARgPIgBAAQAggcAegWIAAAAQAYgRAYgOQA3ggAzgLQACgBADABQADABACACQABADABACQAMB7gMBoQgGAygLAtQAfggAgggIAAABQA9g4BHg0IABAAIADgDQADgCADAAQAEABADACIADAFQAKASAHATIAAAAIAIAcIAAAAQAIAggBAkQAAAagFAcIAFgBQB+gFBiApIAAAAQAbAMAaAQQARAKAQAMQACACABADQABADgBADQgBAEgCABQimB8i2BNIgBAAQiiBFixAgIhTAMIAAAAIgMACIgBAAIgPABIgBABQgDAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.3,-38.5,100.6,77);
p.frameBounds = [rect];


(lib.tale11_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale11_decor_img();
	this.instance.setTransform(-31.9,-33.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.9,-33.9,64.8,67.7);
p.frameBounds = [rect];


(lib.tale11_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABkFSQgEgBgCgDQgDgDABgFIAjjoQAAgEAEgDICxh+QADgCAEAAQAEABADADQACADAAAEIgLDSIgCAFIgCADIjJCUQgDACgEAAIgBAAgAkRFMQgEgBgCgDQgDgDABgEIAKilIACgFIADgDICShfQADgCAEABQAEAAADAEQACADAAAEIgYCiQgBAEgDACIiFBjQgDACgEAAIgBAAgAk8BUQgEgBgCgDQgCgDABgEIAnipIACgEIADgDIDtiDQADgCADAAQAEABACACQACADABADQAAADgBADIhyDfQgCADgDABIiiBOIgEABIgDgBgABPAKQgEgBgCgEQgCgEABgCIAvivQABgDADgCIC2iaQACgCADAAQADAAADABQADACABACQABADAAADIgeDWIgCAEIgDAEIjHBxIgFABIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.4,-33.8,64.9,67.7);
p.frameBounds = [rect];


(lib.tale10_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale10_decor_img();
	this.instance.setTransform(-43.7,-51.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-51.8,87.1,103.7);
p.frameBounds = [rect];


(lib.tale10_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABtIGQgDgBgCgDQgCgDAAgEQANhOgngXQgqgXhhAjQhKAahpA5IgEADQgDABgEgCQgDgCgCgDQgCgEACgEIAAAAIAAgBQA9iUgbgxQgagrhwAwQgEACgEgBQgDgCgCgDQgJgQgGgQIAAABQhnjrCKjLQB4i1EyifQADgCADABQAEABACADQACACAAAEQAAAEgDADQjLDWgoBqQgRAvASAYQAUAXA6AAQAEAAACADQADACABAEQAAAEgCADQg3BJAJA7QALA5BJAqQBpgQA0i8QABgDADgCQACgCADAAQAEgBACACQA0AfAmgFQAmgHAZgpQA4hZACj0QAAgEADgCQACgDAEgBQAEAAADACQADACABADQBiFHgsDcQg0EHj9BzIgEAAIgDAAgACZHIIABgEIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-51.9,87.1,103.8);
p.frameBounds = [rect];


(lib.tale9_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale9_decor_img();
	this.instance.setTransform(-62.4,-45.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.4,-45.9,124.6,92.9);
p.frameBounds = [rect];


(lib.tale9_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AlJGsQhJggg7gCIgBAAIgHgBIgeAKIAAgBQg2AQgsgDIAAAAIgCAAIgCAAIgCgBIgCAAIgGgBQgEgBgDgCQgCgDAAgEQAAgEACgDQAmgtAchDIAAAAQANggAUg4QADgfAEgZQgIgOgMgkIAAgBQgRg2AHgwQAHgxAwhsQAzh1AcAKQASAEAIARQAaghBEguIAAAAQBjhDA5AAQAVAAALAGIAEADIACAFQABAQgEAOQBzhQA/gLQBHgOBoABQBoAACIBMQA1AdAkAgQAlAhgBAVQABATgmAoIgBAAIgzAwQgHASgEAvQgCAygLALQgNAQguAWQglARgFAHIgbAxQgNAUgTALQA9A0gBBEQACA4hLAOIAAAAQgNADguAEQgiAEgRAFIABAAQgKADhQAkIAAAAQhTAkgegBQgTAAgkgIIgBAAIgjgIQgRAhgIANIAAAAQgbAxhPAAIgBAAQgtAAhUgjgAgsAbQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAAgCIgEAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.1,-46.3,124.3,92.8);
p.frameBounds = [rect];


(lib.tale8_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tale8_decor_img();
	this.instance.setTransform(-57.6,-60.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.6,-60.1,115.2,120.3);
p.frameBounds = [rect];


(lib.tale8_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al+JXQgkgKgTgMIgJAEQgEABgDgBQgDgBgCgDQgCgCAAgEIAAgRQhBg1AFgXQABgWgCg/IgBgaQgEhSgFgaQgEgPgDgZIAAABIgGgrQgDgegIgTIAAgBIgFgJIgBgBQgMgVgBgQIAAgBQgCgRANgnQABgDAEgCQADgCADABIAtAGIgjglQgCgCAAgDQgBgDACgDQAkhaBbg6QADgCAEAAQAEABACADIAWAeQgEgtgOgZIABAAIgDgDIABAAQgQgdAAgVIAAgBQgBgYAUgxQABgDADgCQADgCAEABIBFAMIgzg/QgCgCAAgDQgBgCACgDQARgkAXggQA0hJBXgzQADgCAEABQAEABACADQAyBIANAXQAnBIAYA7QAQgWAjgfQADgCADAAQAEAAADACIBCA3IgRhhQgBgCACgDQABgDACgBQA5gqBDgXQBLgbBZgDQAEAAADADQADACAAAEQAKBlAAAeQAAAogBAlQgEBTgLA/QgFAcgGAZIgBAAIgEAOIgEAOQAcgDAcABQBXACBYAnQAEACACADQABAEgBADQgeBRgLAYIAAgBQgpBUgmA6QgXAkgXAaIAAAAQgiAogoAdQgdAvgLAPQgfAqgdAhQgnAtgiAbQgTAPgTAMIAAAAQgtAcgzAMQgwAMhTAEIAAAAIgjABIgBAAQiPgBhhACIgBAAIgCAAgAnCIZIAAgFIgGAAIAGAFgAnGIAIAAAGQAJghAIgnQgMAYgFAqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-60,115.2,120);
p.frameBounds = [rect];


(lib.tale7_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale7_decor_img();
	this.instance.setTransform(-22.7,-32.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.7,-32.5,45.4,65.5);
p.frameBounds = [rect];


(lib.tale7_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AhGE9QhkgbgkhAQglhBAchpQAQg4A1gyIAAAAQAxgsAIgbQALgsgjgwQgZgjgfgQIAAgBIgBAAIgCgBIgHgEQgEgCgCgDQgBgEABgEQAIgYAogNQAjgMAcAIIAAAAQAZAGAvAwIAAABIAJAMIACgCQACgDAEAAQAYgGAQAFQAmAKAXAqIAAAAQAPAdACAgQAFgDAVAGIAAAAQAqALAHAhQAGAVgLAoQgMAsgWAgIAAgBIgIAMQAVgHATAFQAVAGADAKQAGAIgHAaQgLArg4ApIAAAAQgfAWgdAMQAJAGAJALIABAAQAdAegHATQgKAshTAGIgfABQgrAAgpgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.8,-32.8,45.7,65.8);
p.frameBounds = [rect];


(lib.tale6_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale6_decor_img();
	this.instance.setTransform(-39,-41.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-41.1,77.8,81.4);
p.frameBounds = [rect];


(lib.tale6_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ah1GVQgDAAgDgCQgCgCgBgDQgGgYgEgYIAAgBIAAgHIgEAHIAAABQgMARgSAWQgCADgEABQgDABgDgCQgDgBgCgDQgBgDAAgDIAGgwIABAAIABgIIgGAGIAAAAQgQAQgVASQgCACgDAAQgEABgCgCQgDgCgBgDQgBgDAAgDQAHgVAKgaIADgHIgHAFIgqAaQgDACgDAAQgDAAgDgDQgCgCgBgDQAAgEABgDQAKgTAOgYIABAAIAEgGIgIADIABAAQgSAIgdALQgDABgDgBQgDgBgCgDQgCgCAAgEQAAgDACgDQAOgRASgUIAAAAIAFgGIgIADIAAAAIgwALQgDABgEgBQgDgCgBgDQgBgDAAgEQABgDACgCIAlggIABgBIAFgEIgHABIAAAAQgZAEgZAAQgDABgDgCQgDgCgBgEQgBgDABgDQABgDADgCIAqgaIAHgEIgIAAQgfAAgTgCQgDgBgDgCQgCgCgBgEQAAgDABgDQACgDADgCIAugUIAGgDIgHgBIAAAAQgZgEgYgGQgDgBgCgDQgCgCAAgDQAAgEACgDQACgCADgCQATgGAegGIAHgCIgHgCIgvgSQgDgBgCgDQgBgDAAgDQAAgDADgDQACgCADgBQAagEAZgCIAIgBIgHgDQgagMgSgJQgDgCgBgDQgBgDABgDQABgDACgCQADgCADgBIAxABIABAAIAIAAIgGgEIgBAAIgmgdQgDgCgBgDQAAgDABgDQABgDADgCQADgCADAAQAXADAaAFIABAAIAIACIgGgGIAAAAQgPgNgSgWQgDgCAAgEQAAgDACgDQACgDADgBQADgBADABIAuAPIABAAIAIADIgFgGIgbgoQgBgCAAgEQAAgDACgCQADgDADgBQADAAADABIAsAVIAAABIAHAEIgEgHIAAAAQgLgVgKgWQgBgDABgDQAAgEADgCQADgCADAAQADAAADACQAZARAPALIAIAHIgDgKIAAABQgJgWgHgZQgBgDABgDQABgDADgCQADgCADABQAEAAACACQAPANAVAVIAAAAIAHAHIgDgJIAAgBQgGgXgEgYQAAgDACgDQABgDADgCQADgBADABQAEAAACADQAHAIAJARIABgOIABgBIAMguQABgDACgCQADgDADAAQAEAAADADQACACABADIAMAtIAAABIACAIIADgIIAAAAQAKgaAIgTQACgDADgCQADgBADAAQADABACACQADACAAAEIAGAvIAAAAIABAHIADgHIABAAIAagqQACgCADgCQACgBADABIACABIgBgDQgBgDACgDQABgDADgCQAEgBADABIAXAGIgMgPQgBgDgBgDQABgDABgDQADgDADAAQADgCADACIAVAIIgIgRQgBgDABgDQAAgDADgCQACgCAEgBQADAAADACIATAMIgHgSQgBgDABgEQACgDACgCQADgBADgBQADABADABIASAPIgEgUQAAgDABgDQACgDACgBQADgCAEABQADAAACACIAGAGIAHgZQABgDADgCQACgCAEAAQADAAADACQACADABADIAGAUIAKgWQACgDADgCQADgBADABQADAAACADQADACAAADIACAUIAOgUQACgCADgBQADgBADABQADABACADQACADAAADIgCATIARgQQADgCADgBQADAAADACQADABABADQABADAAADIgFATIATgOQACgCAEAAQADABADACQACACABADQABADgBADIgIARIATgKQADgCAEABQADAAACADQADACAAAEQAAADgCADIgKAPIAUgIQADgBADABQAEABACADQACADgBADQAAAEgCACIgMANIAUgGQAEgBADACQADABABADQACADgBADQAAADgDACIgMAMIAUgDQADgBADACQADABACADQABAEgBADQgBADgDACIgOALIAUgCQADAAADACQADACABADQABAEgBADQgBADgDACIgRAKIAUABQADAAACADQADACAAADQABAEgCADQgBADgDABIgUAIIATAFQADABACADQACADAAADQAAADgCADQgCADgEAAIgVAFIARAHQADACACADQABADAAADQgBAEgDACQgCACgEAAIgWABIAQAJQADACABAEQABADgBADQgBADgDACQgDACgDAAIgWgCIANAMQADACAAAEQABADgBADQgCADgDABQgDACgEgBIgXgFIAMAPQACADgBADQAAADgCADQgCADgDAAQgDABgDgBIgXgJQAGALACAIQABADgBADQAAADgDACQgCACgEAAQgDAAgDgCIgTgNIAEAVQABADgCADQgBADgDABQgDACgEgBIgBAAQAAADgBACQgBAEgDABIgqAYIAAAAIgGADIAHAAIAAAAIAyAFQAEABACACQACADABADQAAADgBADQgCADgDABQgWALgZAIIgIACIAIACQAbAGAVAIQADABACADQACADgBADQAAADgCADQgCACgDABQgdAHgVACIgIACIAHADIABAAIArAXQADABABADQACAEgBADQgBADgCACQgDACgDAAIgyAAIgJAAIAGAEIABABIAoAbQADACABADQABADgBADQgBAEgDABQgDACgEAAIgxgGIgIgBIAFAEIABAAIAjAiQACADAAADQABAEgCACQgBADgDACQgEABgDgBQgYgFgYgJIABAAIgJgDIAEAGIABABQAPATANAUQACADgBADQAAADgCADQgCADgDAAQgDABgEgBQgXgKgVgMIABAAIgJgEIAFAHIAAABQAMAbAGAQQACAEgCADQAAADgDACQgDACgDAAQgDAAgDgCQgWgQgQgNIAAgBIgIgHIADAJQAGAXADAZQABADgCADQgBADgDACQgEABgDgBQgDgBgCgCIglguIABAKIAAAAIAFAwQAAADgCADQgBADgEABQgDABgDgBQgDgBgCgDIgcgmIAAAAIgFgHIABAIIgBAvQAAADgBADQgBADgDABQgDABgDgCQgDgBgCgDQgMgSgMgXIgBgBIgDgHIgBAJIgHAwQAAADgDADQgCACgEAAQgDAAgDgCQgDgBgBgDIgRgtIAAAAIgDgIIgCAIIAAABIgPAuQgBADgDACQgDACgDAAIAAgBgACbgMIAHgCIAAgDIgHAFgADXgfIABAAIgBgCIAAACgAD1ghIAHAAIADAAIgLgMIABAMgAAKkWIAAAEIALABIgMgLQACADgBADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-40.6,78.1,81.2);
p.frameBounds = [rect];


(lib.tale5_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale5_decor_img();
	this.instance.setTransform(-43.2,-58.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.2,-58.5,87.1,118.1);
p.frameBounds = [rect];


(lib.tale5_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkeJBQhjgMgRgLIAAABQgSgKgIgXQgMgbAMgVQAAgCAQgLQAGgFBAghIAAAAQAxgWA8g0QBehTA1hbQAdgzAkiTQAiiTgBg6IAAgBQgBgogIg9IgKhZQgCgOgTgyIAAAAQgQg3ASgfQANgYAmALQAXAFAbAPQAuAbAXA0IABAAQALAbAEAGIAAABQAJAPAPAIIARAHIAAAAQARAGAEADQA1AdAKBOIABgDQANgXAdgBQAUAAARAJQAbAQATAuQASAsAEA7QALCLg/BqQgQAbgWAeIAEAAQASAAANAIQAkAUgPA7QgIAjgbAvQguBQhCApQg8AmhiAZQglBQjYAIIgHAAQgkAAhUgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-58.7,87.1,117.4);
p.frameBounds = [rect];


(lib.tale4_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale4_decor_img();
	this.instance.setTransform(-46.6,-54.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-54.2,94.3,110.9);
p.frameBounds = [rect];


(lib.tale4_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AnSImIATgWQArguAehtQAQg9gFgmIAAAAQgBgNgEgJQgMgegggJQgLgDgKABIgLABIAAgLQAAgJACgKIAAAAQAHgaAggWQABgDAFAAQALgHALgEIAAABQAVgIATAFQAIACAIAGIAAgBQgUgvAUgvQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQgDgYACgYQACgeAIgfQAGgZADgEQADgMAFgIIAAgCQgHgjAFgRQACgIAJgSQAAgZAHgYQANgxBNh7QBSiBAVAIIAAAAQAbAFASBIQAPA9AFBcQAFBdgGBcQgHBjgSBBQgEAOgMAeQCIilBZg9QBohIBIgZQBJgaARADQAXACAJAYQAIARgHAdQgcBlg/BUQgUAagXAXQgPAsgRAVQgWAZglAMIABAAIgyAQQAIAAAHACIgCAAQAPACAFADQALAGgCAPIgBAFIAAABQgEAQgWATIgBAAQgOANgNAIQgWAMgEADIAAABQgLAHgJAOIAAABQgPAWg7APIAAAAIgRAEQAYANAPAXIAAAAQAWAjgKAoIAAAAQgGATgLATIAAAAQgIAOgLANIAAABIgBABIgGAHQgVAXgXAKIgOAIIABgRQACgbgHgOIABABQgEgHgFgEQgMgLgVgFQhKgUh6AnQglALhCAZIhTAfIgbAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.8,-55.4,93.6,111);
p.frameBounds = [rect];


(lib.tale3_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale3_decor_img();
	this.instance.setTransform(-49.1,-46.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-46.5,100.1,93.6);
p.frameBounds = [rect];


(lib.tale3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmDHAQAMgoARggIAAABQAIgXADglIAAgBQAGhFgYhFQgNgngshVQgqhRgQg1QgYhTAHhZQAHhNAgg3IAOgZIANAGIgJAcQgLAfgDAWQgJB1AhBeIAAABQALAhAYAtIAAABIAHAOIABgQQAHhXAzhxQAWgyAcgrQAfgzAlgnIAIgJIAHAKQAsA8AVAqQAcA3AKA0QAmgzA7g7QBahYBYg2IANgJIACAQQAHAzAEA4QAGBhgGBFQgBAPgKAuIgEASQAVgFAYgDQBHgIBEAGQAZACA3ANIAXAGIATADIgOAOQhDA/gxA/IgBAAIgFAHIAAAAIgwBCQgbAhgdAZIghAcIgBAAIgQANIAAAAQgmAcgsAbQg5AmgvAWIAAAAIAAAAIABAAQBPgOApgMQA/gTA2gfQBOguBbheIAVgUIAKAIIgPAYQhJB7hiBAQheBAiJARQhMALibAFQhwAIhLAeIgUAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-46.8,100,93.6);
p.frameBounds = [rect];


(lib.tale2_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale2_decor_img();
	this.instance.setTransform(-31.3,-31.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.3,-31.8,63.4,63.4);
p.frameBounds = [rect];


(lib.tale2_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ak0E9QgDgBgCgDQgCgDABgEIAFgWQAIgpAPgrQAehYA1hhIAAAAQAZgpA3g4QBBhABPg0QCKhYCQgfQAEgBADADQAEACABADQABAEgCAEQgfA1gNAlIAAAAQgLAigEA5QgBAZAAAcQAAA3AHA0IAAAAIADAUIgBAEIgCAEQicCViNAwQg7AUhZAMIgEAAQhOAJgjAMIgDABIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-31.8,63.2,63.7);
p.frameBounds = [rect];


(lib.tale1_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tale1_decor_img();
	this.instance.setTransform(-46.1,-36.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.1,-36.6,92.9,73.4);
p.frameBounds = [rect];


(lib.tale1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2D640").s().p("AirFqIABAAQhhgOg4hNQgIgKgHgMQgohEgYhNQhAjLAFjXQABgkAdgOIAFgBQAIABAHADIAAAAQAeAMAXAaQBSBeBKBmIAMgcQAOglAZgdQAHgIAKAAIAEABIADADQAaAcALAoIAAgBIAIAZIAKgNQA3hRBIhBIAAAAQAQgOATgFIABAAQAJgCAIAGQAZAPgDAjQgDAygIAzQgMBJgOBJQA8gyAwgEQADgBADACIAMAHQAEACABADQAPAqgKAqIAAABQgGAWgIAUQA0ADBfAfQA3ATAYAOQAhAWgRATIgBACQgaAZgfARIAAABQisBhjEAbQg4AJg6ADIguABQgVAAgVgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-36.6,92.7,73.3);
p.frameBounds = [rect];


(lib.star_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.star_title_img();
	this.instance.setTransform(-63,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-62,120,120);
p.frameBounds = [rect];


(lib.shoes_decor4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor4_img();
	this.instance.setTransform(-75.8,-20.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.8,-20.1,152.6,40.3);
p.frameBounds = [rect];


(lib.shoes_decor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor3_img();
	this.instance.setTransform(-81.6,-23.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.6,-23.1,162.7,46.8);
p.frameBounds = [rect];


(lib.shoes_decor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_decor2_img();
	this.instance.setTransform(-79.5,-19.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-19.8,159.1,39.6);
p.frameBounds = [rect];


(lib.shoes_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoes_decor1_img();
	this.instance.setTransform(-77,-18.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-18.1,154.1,36);
p.frameBounds = [rect];


(lib.shoes_base4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C0070").s().p("AjBC5QgDgBgDgDQgug/AjhSQACgDADgCQAEgBAEABQADABACAEQAXApBBAhQCCgcCfhYQADgCADAAQADABADACQACACABADQAZCjhhARQhjAUhTAAQhKAAhBgPgArYCqQgDgBgDgDQgug/AjhSQACgDADgCQAEgBAEABQADABACAEQAXApBBAhQCEgcCShYQADgCADAAQADABADACQACACABADQATBOgOAsQgPAxgxAJQhjAUhVAAQhKAAhBgPgAGKgMQgEgBgCgDQgug/AjhSQACgDADgCQAEgBAEABQADABACAEQAXApBBAhQCDgcB/hSQADgCADAAQAEAAACADQADACAAADQAcCpiEAWQgxAHgyAAQhOAAhRgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-20,152.4,40.2);
p.frameBounds = [rect];


(lib.shoes_base3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C0070").s().p("ApVDLIgBgBIgOABQhBAlgxgLQgygKghg7IgCgFIABgEQAQggAPgMQAJgIAKAAQgHgsAJg8QAAgCACgDQACgCADgBQADgBADABQBiAeAhCFQAMgiARgfQARgfAZgbQAYgaAbgPIgBAAQAbgRAggHQAegHA4AAQADAAADACIADAEQACACgBADQgDAtgRAsIAEACQBAA5gSAWIAAAAQhIBhhjAAQg3AAg/gegAg5DLIgCgBIgNABQhBAlgxgLQgygKghg7IgCgFIABgEQAQggAPgMQAJgIAKAAQgHgsAJg8QAAgCACgDQACgCADgBQADgBADABQBiAeAhCFQAMgiARgfQARgfAZgbQAWgaAbgPIgBAAQAbgRAggHQAegHA4AAQADAAADACIADAEQACACgBADQgDAtgRAsIAEACQBAA5gSAWIAAAAQhIBhhjAAQg3AAg9gegAIIARIgDgCIgBAAIgNABQhBAkgwgKQgzgKghg6IgBgEIABgFQAPggAPgLQAKgIAJgBQgGgrAIg+QABgDACgCQACgCADgBQADgBACABQBjAfAhCGQALgiARggQARgfAZgaQAZgbAagRIAAAAQAbgRAfgHQAegHA5ABIAFABIAEAEIABAGQgDAvgRAsIADACQBBA5gTAWIAAAAQhIBfhjAAQg2AAg+gdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-23.3,162.4,46.7);
p.frameBounds = [rect];


(lib.shoes_base2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C0070").s().p("AmsDFQgDgBgBgDIgYg5Qg1gTg2gLIgcAaIgFACQgDAAgDAAIgEgEIgagiQg8gHg8AFQgEAAgDgCQgigZAAgZQgDgaAggXQACgCACAAIAcgEIAegzQACgDADgBQADgBAEAAQADABACAEIAhAvQBRACBPAXIArgeQACgCAEAAQADAAADACQACABABAEIAUA4QAhAQAhAUIABABQAgAZgCAaQgBAagiAZIgFABIgGgBIgVgLIggAeQgDACgDAAIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBgACBC7QgEgCgBgCIggg0Qg4gMg1gCIgXAdIgFAEIgFAAIgFgDIgggeQg7ADg8AOQgEAAgDgBQglgTgEgZQgGgZAbgdIAEgDIAbgIIAXg2QABgDADgCQADgCADABQAEAAACADIAnAoQBQgKBQAMIAmgkQACgCAEAAQADgCADACQADABABADIAdA1QAjAKAjAQIABABQAkAUACAaQADAZgfAeIgFADQgDAAgCgBIgXgIIgbAiQgCACgDACIgCAAIgEgBgAK8AMQgEgBgBgDIgegvQg1gKg0gCIgWAcIgFADQgCABgDAAIgFgDIgegcQg4AEg4ANQgEABgDgCQgjgSgFgYQgGgYAagcIAEgDIAZgIIAVg0QABgEADgCQADgCADABQAEAAACADIAmAoQBLgMBOAMIAjgkQACgCAEgBQADAAADABIAEAFIAbAzQAiAJAiAPIABABQAiASACAZQADAYgdAcIgFADQgDABgCgBIgVgHIgaAeQgCADgDABIgCAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.4,-19.9,159,39.9);
p.frameBounds = [rect];


(lib.shoes_base1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C0070").s().p("AlXCyQgfgGhfgZIgpgJIAAAAQgmgHgsgEQgegEgeAFIAAAAQgmAGglASIgEABQgSACgMghQgIgYAAgYQAAgRAEgfIAEgaIAAAAQAAgEADgCQACgDAEgBIAMgBIgBABQAggHATgCIAIgBQAigFAlAAQAzAABBAMQAeAFAhAIQB0AZgKAmIAAAAQgDAKgBAQIAAABQgCAdABAxQAAADgCADQgCACgCACIgEAAIgCAAgADGCuQgDAAgCgCQgWgPgLgEIAAAAQgwgRgRgDIABAAIgfgFIABAAIgDAAIg/gPQgegHgdAAIgZABQgXADgcAGQgpAIgaALQgDABgDAAQgDgBgDgCQgCgCAAgDQgDgOgCgjIgBgVQgCgmgJgiIAAgFIACgEQAigjAugFIAsgDQAXgBAXAAQA9AAA7APIADABIAAAAQAdAIAeAMQAbAKAUAMQA+AigBAuQAAAngFATQgFARgMAXQgBACgDACIgFABIAAAAgAJ/gDIgBAAIgDAAIgBAAQgzgCg2gEIgBAAIgQgBIgBAAQg7gGgUABIAAAAQgiACgQgfIgBgBIgBgDQgLgWAAgjQAAgqASgPQAQgPAsAAQAMAAA+AHIBKAKIAzAGQBKAKAaAGIAFABIABAAQADAAAIAJIAAAAQAFAEABAcIABAYQgBA0goAKQgcAHgtAAIgRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-17.8,154.1,35.8);
p.frameBounds = [rect];


(lib.podium_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.podium_img();
	this.instance.setTransform(-150,-94,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-94,300,188.6);
p.frameBounds = [rect];


(lib.neck8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck8_img();
	this.instance.setTransform(-45.5,-50,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-50,91.4,99.4);
p.frameBounds = [rect];


(lib.neck7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck7_img();
	this.instance.setTransform(-49.7,-39.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.7,-39.5,98.7,77.8);
p.frameBounds = [rect];


(lib.neck6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck6_img();
	this.instance.setTransform(-61,-38.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-38.3,123.1,76.3);
p.frameBounds = [rect];


(lib.neck5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck5_img();
	this.instance.setTransform(-85.4,-34.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.4,-34.8,172.1,71.3);
p.frameBounds = [rect];


(lib.neck4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck4_img();
	this.instance.setTransform(-43.8,-35.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.8,-35.7,88.6,71.3);
p.frameBounds = [rect];


(lib.neck3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck3_img();
	this.instance.setTransform(-57.2,-44.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-44.7,113.8,90);
p.frameBounds = [rect];


(lib.neck2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck2_img();
	this.instance.setTransform(-93,-78.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-78.1,186.5,156.3);
p.frameBounds = [rect];


(lib.neck1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.neck1_img();
	this.instance.setTransform(-80.7,-50.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-50.7,161.3,101.5);
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


(lib.hero_3_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_3_0_img();
	this.instance.setTransform(-287,-240,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-287,-240,574.2,480);
p.frameBounds = [rect];


(lib.hero_2_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_2_0_img();
	this.instance.setTransform(-278,-240,0.836,0.836);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-278,-240,556.1,480);
p.frameBounds = [rect];


(lib.hero_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_1_0_img();
	this.instance.setTransform(-263.2,-240,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-263.2,-240,526.4,480);
p.frameBounds = [rect];


(lib.eyes8_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes8_decor_img();
	this.instance.setTransform(-79,-49.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-49.5,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes8_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ApeE0QhJhogSgpQgihLAAhrQAAhSAghrQAahXAbgdQASARASAUQAXAaAWAgQAlA3AgBGQApBcAhB1QAWBQASBdIAJAxIAHAoQgIAHgJAGQgOAJgTAIQh6gkhEg1gAETDnQg1hUgEh1QATgwAYgsQArhRA7hAQBehnCGg5QAZgKAagJIAfgKQALAbAJAbQAzCbgQCGQgFAtgNApQgnB/hqBpQgTASgUASIgKAIIgDADIhFAYQhqgGg/hjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-39.7,146.5,79.6);
p.frameBounds = [rect];


(lib.eyes7_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes7_decor_img();
	this.instance.setTransform(-79.2,-49.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-49.3,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes7_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ApeE0QhJhogSgpQgihLAAhrQAAhSAghrQAahXAbgdQASARASAUQAXAaAWAgQAlA3AgBGQApBcAhB1QAWBQASBdIAJAxIAHAoQgIAHgJAGQgOAJgTAIQh6gkhEg1gAETDnQg1hUgEh1QATgwAYgsQArhRA7hAQBehnCGg5QAZgKAagJIAfgKQALAbAJAbQAzCbgQCGQgFAtgNApQgnB/hqBpQgTASgUASIgKAIIgDADIhFAYQhqgGg/hjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-39.7,146.5,79.6);
p.frameBounds = [rect];


(lib.eyes6_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes6_decor_img();
	this.instance.setTransform(-79.2,-49.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-49.3,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes6_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ACcGDQAPjWA/igQASgwAZgtQArhRA7g/QBehnCFg5QAagLAagJIAfgKQAKAcAKAbQAnB4AABrIAAABQgBAegDAeIAAABQgFAtgNApQgoB+hpBqQgTASgVARIgEADIgHADIACADIgDACIhFAZQhkAfgLgBIi7BBIgDABQAAgMgDgQgAlaGKIg3gOQhEgVg0gZIACgDIgCADQgogUgegXQghgbgVgeQiaklBQlZQAvAYAqAmQASARASAUQAXAbAWAgQAlA2AfBHQAqBcAhB0QAWBRASBdIAJAxIgDADIADgBIAHAmIACARIACAbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-41.5,149.6,83.1);
p.frameBounds = [rect];


(lib.eyes5_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes5_decor_img();
	this.instance.setTransform(-79.3,-49,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.3,-49,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes5_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ApeE0QhJhogSgpQgihLAAhrQAAhSAghrQAahXAbgdQASARASAUQAXAaAWAgQAlA3AgBGQApBcAhB1QAWBQASBdIAJAxIAHAoQgIAHgJAGQgOAJgTAIQh6gkhEg1gAETDnQg1hUgEh1QATgwAYgsQArhRA7hAQBehnCGg5QAZgKAagJIAfgKQALAbAJAbQAzCbgQCGQgFAtgNApQgnB/hqBpQgTASgUASIgKAIIgDADIhFAYQhqgGg/hjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-39.7,146.5,79.6);
p.frameBounds = [rect];


(lib.eyes4_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes4_decor_img();
	this.instance.setTransform(-79.2,-48.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-48.9,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes4_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AnsEZQgSgdgKgZQgihWAAh9QAAhYAehZQAQgxAag3IAHALQAiBPAJAmQAJAlAABrQAABtgVBIQgVBIgLAdIgQgIgAHuEVIg+hhQgshIAEh4QAEh6AbhAQAbhAAIgaQBCCVAKAfQAUA8ABBTQAABfg0CUIgJgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-28.9,111,58);
p.frameBounds = [rect];


(lib.eyes3_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes3_decor_img();
	this.instance.setTransform(-79.1,-48.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.1,-48.8,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AmZErIgBAAIgBAAQh8gIhbhaQgbgcgUgfQgzhPAAhjQAAiMBihjIAFgFIAFAGQAXAaAWAgIADAFQAjA1AfBDQApBbAhB2QAWBQASBdIABAJIgWgBgAEWCxQgrgrgUg1QgDgSAAgUQATgwAYgsQArhRA7hAQA3g8BFgtQBxACBQBQQAfAfATAjQAEA5gGA2QgFArgNArQgfBihGBWQg5AdhGAAQh0AAhShSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.6,-30,145.2,60.1);
p.frameBounds = [rect];


(lib.eyes2_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes2_decor_img();
	this.instance.setTransform(-79.2,-48.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-48.8,157.7,97.9);
p.frameBounds = [rect];


(lib.eyes2_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AphETQgigagUgfQgWgqgRgqQgMhCAAhKQAAihAzhyQAPgjARgYIASATQAXAbAWAgQAlA2AgBHQApBcAhB0QAQA7AOBDQgKAlgPAiQgXAzgbAdQhWggg1gpgAEEDgQg1hDgRhWQALgmAOgiQATgyAYgtQArhRA7g/QA4g9BHguQBWAOBABSQBKBeAECCIgIAbQgnB/hqBpQgTASgUASIgKAIIgDACIhFAZIgtAOQhOgTg6hKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-34.8,143.1,69.6);
p.frameBounds = [rect];


(lib.eyes1_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes1_decor_img();
	this.instance.setTransform(-79,-48.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-48.8,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("ApeE0QhJhogSgpQgihLAAhrQAAhSAghrQAahXAbgdQASARASAUQAXAaAWAgQAlA3AgBGQApBcAhB1QAWBQASBdIAJAxIAHAoQgIAHgJAGQgOAJgTAIQh6gkhEg1gAETDnQg1hUgEh1QATgwAYgsQArhRA7hAQBehnCGg5QAZgKAagJIAfgKQALAbAJAbQAzCbgQCGQgFAtgNApQgnB/hqBpQgTASgUASIgKAIIgDADIhFAYQhqgGg/hjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-39.7,146.5,79.6);
p.frameBounds = [rect];


(lib.ears_8_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_8_decor_img();
	this.instance.setTransform(-133.4,-53,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.4,-53,265.7,105.9);
p.frameBounds = [rect];


(lib.ears_8_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("Aw5IPQgDAAgDgCQgCgCgBgDIgOg9QgiiZgEiMIAAgeQAAgYACglIgJAFIAAAAQgbARgoAJQgxANgXjCQgSiRgPi/IgIhpQAAgEADgDQACgDAEAAQAEgBADACQADACABAEIAAAAIABACIANAYIAAAAQA1BlASAcQAkA6AZAEIABAAQAQgBAZgYIAAAAQALgMAqgxQBPhfA0ABQBQgCDDE7IA2BZQBoCsA0B4QABAEgBADQgBAEgEACQgDACgEgBQhEgTg8gBIgMAAQg8ABg1AMIgiAIQhNAVg/ArIAAAAQgeAUgZAZQgdAcgaAhIgTAbQgfAtgUA0QgBADgDACQgDABgCAAIgBAAgALxF4QgDgBgCgDQgUghgagbQgtgzhBgoIgfgSIgUgKQiFhCipgQIgegCQgmgDgoAAIgZAAIgUAAQgEAAgDgCQgDgDAAgEQAAgEADgDQAqgxBFg7QAtgnAwgmQA+gyBGgwQEmjMCJAAQAlAAAaAuQAdA2ADBzIABABQALAJAaAAQAoAABKgsIAAAAQBYg1BEgnIAkgVIAegQQADgBADAAQAEABACACQACADABADQAAAEgCACQhUB/hMBmQinDig3gDQgcAAgNgOIAAgBQgEgEgYgsQgVBUgOAvIgNAmIAAAAQgcBRgkA/QgCADgDACIgEAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-52.8,266,105.6);
p.frameBounds = [rect];


(lib.ears_7_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_7_decor_img();
	this.instance.setTransform(-99.8,-58.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.8,-58.2,199.5,116.7);
p.frameBounds = [rect];


(lib.ears_7_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("AsXJHIgFgCIgCAAQiRhfgahyQgUhUgEhhQgCggAAghIAAAAQAAiEAokaQAgjgAvgzQAPgTASAAIAAAAQAUgCAWAJQAzATA/BJQAsAyAfAyQABADAAADQAAADgCADQgCACgCABQgDABgDgBQgNgDgQAAQgJAAgQADIgCAAIgEABQgEgBgCgCQgDgDgBgEQgCgigUgXIAAgBQgUgZgegBIgCAAQgfAAgQAVQgNASAAAdQAAAFACAGQABACgBADQgBADgBACQgCACgDABIgFACIAAAAQgPAGgJAPQgQAbAAA9QAAAXAMAeQAIAVAIALQACADAAADQAAADgCADQgCACgDACQgbAKgSAdQgXAnAAArQAAAkALAYIAAAAQAKAWASALQADACABACQACADgBADQAAADgCACIgLANIAAAAQgfApAAAnQAAAtAeAnQAUAZAYAJQAEABACAEQABAEAAADQgGAUAAAWIAAAIIAAAAQADAtAiAjQAkAlAvAAQALAAATgGQAEgBADABQAEACABADQACAEgBADQgBAEgDACQgpAagXAeQgRAWgJAZIgDAEIgFADIgBAAIgEgBgAKkHSQgEgBgCgCQgbgZgkgZIgggUQgDgCgBgDQgBgDAAgDQAAgDADgCQACgCADgBQAjgHAagWQAZgWAMgiQAKgdAAgmQAAgKgGgVIAAgFIACgEIAFgDQAggJAcgZIAAAAQAngjAAgtQAAgdgLgYQgBgDABgEQABgEADgBQAYgNAXgbIAAAAQAngwABgtQAAgdgMgUIAAgBIgGgIQgCgEAAgEQABgEADgCQARgNAIgOQAIgPACgZIABgVQAAgdgHgRIAAAAIgFgHQgHgJgNgHQgDgCgBgDQgCgEABgDQAHgRAAgHQAAgMgEgJQgEgMgJgHQgPgNgXAAQgPAAgQANQgDADgEAAQgDgBgDgCIAAgBIgIgEQgOgIgQgDQgDgBgCgCQgCgCgBgCQgBgDABgDIABgDQABgEAEgCIANgHQCfhZAxABQAfAAAOAcIAAAAQAFAIADAMIAAAAQACALACAVIABAmQAACLgYCOQgVBzgjBzQgVBEgYA7QhOC/huBXQgDADgEAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.6,-58.4,199.3,116.8);
p.frameBounds = [rect];


(lib.ears_6_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_6_decor_img();
	this.instance.setTransform(-118.9,-33,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-33,239.8,65.5);
p.frameBounds = [rect];


(lib.ears_6_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("AM2FGQgEAAgDgDIgXgcQgHgIgIgOIgWANIAAAAQgVAKgNAFQgEACgEgCQgDgBgCgEQgIgRgGgRIgIgZIgYAHIgBAAIglAFQgEAAgDgCQgDgDAAgEQgDgTgBgSIgBgZIgYgDIgBAAQgTgDgSgGQgEgBgCgDQgCgDABgEQAEgTAHgRIAAgBIAKgXQgNgGgJgHIgBAAIgdgWQgDgDgBgEQAAgEACgDQANgRALgMIABAAIARgRIgQgTIABABQgMgPgJgRQgCgDABgEQABgDADgDQAOgKARgJIAYgMIgJgXIAAAAQgFgOgFgWQgBgEACgEQACgDAEgBQAXgHANgCIgBAAIAagEIgCgaIAAAAIABglQAAgEADgCQADgDAEAAQATAAASACIAZAEIAHgYIAAgBQAGgRAJgSQABgDAEgBQAEgCADACQARAGASAKIAAAAIATAOIAEgJIAAgBQAGgOANgTQADgDADgBQAEgBADACIAUAMIABAAIALAJIABABIASASIAUgQIAAAAQANgJATgLQADgCAEABQAEABACAEIASAgIAKAYIAZgIIAjgJQAEgBAEACQADACABAEQAFAUADAQIAAAAIAEAaIAZgCIAlAAQAEABADACQADADAAAEQAAATgCATIAAAAIgEAZIAYAGIAAAAQASAGASAHQADACACADQABAEgBADQgGATgIAQIgMAXQALAHAKAIIgBAAQAPALANAPQADADAAADQAAADgDACQgQARgLAJIAAABIgUAPIAOAVIAAABIAQAhQACAEgBADQgCAEgDACIgiAPIgBAAIgYAIIAFAZQADASACATQAAAEgDADQgCAEgEAAIglACIgBAAIgZgBIgEAZIAAABIgJAjQgBAEgDACQgEACgEgBIgjgKIgBAAIgXgJIgLAWIgBABIgTAfQgCADgEABQgEABgDgCIgfgUIgBAAIgTgQIgSASIAAABQgRAPgLAJQgDACgEAAIAAAAgAtxFGQgEAAgDgDIgXgcQgHgIgIgOIgWANIAAAAQgVAKgNAFQgEACgEgCQgDgBgCgEQgIgRgGgRIgIgZIgYAHIgBAAIglAFQgEAAgDgCQgDgDAAgEQgDgTgBgSIgBgZIgYgDIgBAAQgTgDgSgGQgEgBgCgDQgCgDABgEQAEgTAHgRIAAgBIAKgXQgNgGgJgHIgBAAIgdgWQgDgDgBgEQAAgEACgDQANgRALgMIABAAIARgRIgQgTIABABQgMgPgJgRQgCgDABgEQABgDADgDQAOgKARgJIAYgMIgJgXIAAAAQgFgOgFgWQgBgEACgEQACgDAEgBQAXgHANgCIgBAAIAagEIgCgaIAAAAIABglQAAgEADgCQADgDAEAAQATAAASACIAZAEIAHgYIAAgBQAGgRAJgSQABgDAEgBQAEgCADACQARAGASAKIAAAAIATAOIAEgJIAAgBQAGgOANgTQADgDADgBQAEgBADACIAUAMIABABIALAJIABAAIASASIAUgQIAAAAQANgJATgLQADgCAEABQAEABACAEIASAgIAKAYIAZgIIAjgJQAEgBAEACQADACABAEQAFAUADAQIAAAAIAEAaIAZgCIAlAAQAEABADACQADADAAAEQAAATgCATIAAAAIgEAZIAYAGIAAAAQASAGASAHQADACACADQABAEgBADQgGATgIAQIgMAXQALAHAKAIIgBAAQAPALANAPQADADAAADQAAADgDACQgQARgLAJIAAABIgUAPIAOAVIAAABIAQAhQACAEgBADQgCAEgDACIgiAPIgBAAIgYAIIAFAZQADASACATQAAAEgDADQgCAEgEAAIglACIgBAAIgZgBIgEAZIAAABIgJAjQgBAEgDACQgEACgEgBIgjgKIgBAAIgXgJIgLAWIgBABIgTAfQgCADgEABQgEABgDgCIgfgUIgBAAIgTgQIgSASIAAABQgRAPgLAJQgDACgEAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.9,-32.6,239.9,65.3);
p.frameBounds = [rect];


(lib.ears_5_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_5_decor_img();
	this.instance.setTransform(-99.6,-59,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.6,-59,198,118.1);
p.frameBounds = [rect];


(lib.ears_5_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("AsNJOIgFgCQgqgXgzg/Qgyg+gdhAQgdhAAAi+QAArICMACQBCgCCJCVIAAAAQBBBHAsBDQACADAAADIAAAAQAAADgCADQgXAggqABQgpgBgVgeQgJgOgPgvQgMgngOgQQgWgXgpAAQgaAAgSAaQgSAYAAAeQAAAgABAGQADALANAOQACACAAADQABADgBADQgCADgCABQgcAQgRAgQgUAiAAAqQAABnAyAfQADACABADQABADgBAEIgFANIgCADQgWAcgLAUQgTAgAAAdQAAAwAuAeIgBAAQAnAYAcgKQAEgCAEACQADABACAEQACADgBAEQgBADgEADQgIAGgPAbQgSAjAAAWQAAAbAQAQIAAAAQAKAJAeAMQAhAPANAPQAXAXAAArQAAApgWAeQgaAigqAAgAIpHDQgXgeABgdQgBgqAhggIAAAAQAQgPAzgeQAtgbATgWIgBAAQAcggAAgtQAAghgCgFIAAgBIgKgRQgBgDAAgDQAAgEADgCQACgCADgBQAwgMAggdQAogjAAg4QgBgggTggQgFgJgGgHQgDgDAAgEQAAgEADgCQAWgXATgdQAdgsABgfQgBgkghgYQgJgGgKgEQgDgBgBgCQgCgDAAgCQgBgDACgDIAEgIIAAAAQAIgQABgMQAAgNgHgHQgIgIgNABQgSAAgfAdQgmAlgSgBQgWAAgJgVQgGgNAAgQQAAgIABgJQABgEAEgCIAWgPQAlgXA0gdQCEhMASABQAhAAANAZQALATADBHQADBFgSC3QgSC3gcBNIAAABQgcBOhwCdIAAAAQg4BNhcBvIgEADQgMAEgKAAIgBAAQgiAAgZgig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.9,-59,197.8,118);
p.frameBounds = [rect];


(lib.ears_4_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_4_decor_img();
	this.instance.setTransform(-111.5,-40.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-40.4,222.5,79.9);
p.frameBounds = [rect];


(lib.ears_4_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("AoGGHIAAAAQgWgJgIgQIgCgFQgGADgGgBQgLAAgLgOQgPgSgOgxQgZAMgUgVQgRgQgMgtIgHACQgMAEgOgKQgUgOgcg0IgBgDQgKgogCgEIAAAAIgGgGIgDgCQgMgLgWgIIABAAQgOgFhgAMQhnAOg0gVIAAAAIgMgFQgEgBgBgDQgCgDAAgEQAAgDADgDQATgTAYgbQArgvAbgXQgdgGgLgFQgrgRgjgmQgDgCAAgEQAAgDABgDQACgDADgBQANgGAPgIIAAAAQA3ghAPgFIAAAAQApgPAmAOQgXg2gHgyQAAgDABgDQABgCADgCQACgCADAAIAAAAIAAAAIAIgCIAFABQCDA0A8B6IAFAKQAGgcAMgfQARgqAYghIAJgKQACgDADAAQACgBADABQADABACACQATAaALAaQAZA4AIBiQANgWAXgYIAAAAQAOgOAPgLQADgCAEAAQAEABADADQACADAAAEQgBAvAIAqQAIAmAaA2QAYA2ADAeIAAAAQAEAdgHAhIAwgtQADgCADgBQAEAAADADQADACAAAEQAWCHgTAwIAAAAQgSAugsAOQgSAGgRAAQgUAAgUgIgADfDIIAAAAQgnggAAg1QgBg4BNh+QABgDAEgBQAEgBADABQADACACADIAgBCQAGglAPgcQAQgeAugtQAwgvAXgiQAagnASgxQABgEAEgBQADgCAEABQADABADADQAKARAJATQAPAjAEAdQAuhhAxgwQAVgVAegTQACgCADAAQAEAAACACQACACABADIAFAOIAAAAQALArAAAwQAAAmgFAgIAKgKIAAABQBuhlCZAAQACAAADACIAIAFIAEAEIABAFIAAAAIgBAFQgcAwgtAuQAtABAkAgQANAMAqA2QAMAPALALQADADAAADQAAADgBADQgCADgDABQgzAYgxAAQgOAAgggEQASAhAZBCIAAAAQANAlALAcQACADgBADQgBADgDACQgDACgDAAIgPAAQg9ABhig2QhdgzgPgBQgaAAgQAGIgDABIgJAEIgBAAQgDADgbAlIgBACQgxAqgaAGQgSAEgKgIQgEgCgCgEQgfAqgYAJQgcANgUgXQgiAtgWAMQgRAKgMgFQgGgBgFgFIgEAEIAAAAQgPANgZAAQgrAAghgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.3,-39.9,222.7,79.9);
p.frameBounds = [rect];


(lib.ears_3_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_3_decor_img();
	this.instance.setTransform(-101.9,-37.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.9,-37.3,205.2,74.9);
p.frameBounds = [rect];


(lib.ears_3_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("AllF3QgDgCgBgEQgOgsgigiQgsgthGgWQg2gRiMgHQiPgGhTgbQgggLgWgLQgDgCgBgCQgthSAug0QghhEAvgtQgRg3AyghQgVg2A0gdQAAgGACgHIABgCIAIgUQAPglAPgNIABAAQAWgUAjAMQAaAIAsAqQAeAdAPAVQAjAPAeAiQAfAjAKAjQAeARAbAaIAAgBQAsAoAVAyQATAMAPANQA4A2ASBcIgBAFIAAAAQAOAQAMAUQA7Bhg3BRQgDAEgDABIgCAAIgGgBgABNFEQgDgCgBgEQgZhxBthXQAWgSAXgOIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQA8hfBWgpIAAAAQAXgLAbgIQAsgwBEgeQApgSAqgJQAagkAygcIAAAAQAxgcAugEQAagTAugVQBCggAhAAQAsAAAPAfQALATAAAwIAAAcIAAAAIgFARQAuA0gwA0QAoA5grA3QAfBEhEBDQAcBMhVBMIgFACQgeAFgpAAQhnAAihgtQiegthEAAQhYAAhFAjQg2AagjAuQgDADgEABIgBAAQgDAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-37.6,205,75.2);
p.frameBounds = [rect];


(lib.ears_2_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_2_decor_img();
	this.instance.setTransform(-119.6,-51.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.6,-51.1,239.1,101.5);
p.frameBounds = [rect];


(lib.ears_2_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("AkzH4QgDgCgBgEQgRhJhwghQgtgNhggQQh1gUgtgKQjOguhnhjQgTgTgRgUQgPgTgMgUIgTgjIAAABIgGgLIgBgBIgdhQIgBgBQgFgUgEgWQgJgugEg0IAAgXIgBgcIAAgBQABhRARg6QAKgjAQgcIAAAAQAphDArgPIAGgCIABAAIAEgBIAFgBIAEAAIAEgBIADAAIADgBQAXgCAQADQALACAIAFIAAAAQAXAMALAKIAAAAQANANARAqQACADgBADQgBADgDACQgDACgDAAIgKgBIgDgBIgCAAIgBAAIgMgDQgeAAgYAYIABACQABADgBAEQgGAPAAAKQACA1BjAUQAyAJBKAAQA6AAAxAiQA1AkAYBHIAaAKIARAIIADACIAHADIABABIA5AgIAAABIADABIAGAFIAAgBQA4AnAsA0IAAgBQAXAbASAfQAgAzATA2QAaBMAABRQgBAlgJA0QgGAigGARIgBACIgBACIgHALQgCADgEABIgCAAQgDAAgCgCgAknHjIgBACIAAACIgDAFIAHACIgDgLgAk1HpIAGACIgCgIIAAACIAAgCIgEAGgACFH1QgEAAgDgDQgEgEgFgHIAAgBIgBgDIAAAAQgIgSgIgiQgLg0AAglQAAhRAghMQAWg3AlgzQAXgeAagbQA1g0BDgmIAAAAIAHgEIAEgCIBDghIAAAAIAHgDQACgCAEAAIAVgIIAAAAIAfgKQAchHBAglQA5ghBFAAQBYAAA8gJQB3gUADg1QgBgKgHgOQgBgEABgEIABgCQgdgYglAAQgGAAgJADIgBAAIgDABIgDAAIgLABQgEAAgCgCQgDgCgBgDQgBgEACgDQAUgqAQgNIABAAQALgKAcgMIAAAAQAJgFAMgBIAAAAQATgDAbACIABAAIADABIADAAIAFABIAFAAIAEABIAGABIABAAIAHACQAzAPAwBDQATAbAMAjQAWA7AABRIAAABIgBAcIAAAAIgBAXIAAABQgEAzgKAvQgFAVgHAUIAAABIgkBQIgBACIgGAKIAAAAIgYAjQgOAUgSASIAAAAQgTAVgXASQh7Bjj0AuQg3AKiLAUQhyAQg2AOIAAAAQiHAggTBJQgBAEgDACQgDACgDAAIAAAAgAB0HkIABABIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-50.6,239,101.3);
p.frameBounds = [rect];


(lib.ears_1_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ears_1_decor_img();
	this.instance.setTransform(-99.7,-57.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.7,-57.4,199.5,115.2);
p.frameBounds = [rect];


(lib.ears_1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE2C88").s().p("AtGI9Qg4gegjg2Qgig2gLhDIAAABQgEgRgMhuQgGg4gBhKIAAgBQgBhGADhUQAFixA0i0QA3i/A4ATQAxANB8CIQB4CEA1BuIAAAAQApBQAfBGQAZA6ASA1QAoB0gOBcQAAADgDADQgCACgEAAQgDABgDgCQgDgCgBgDQgMghgWgaQgvg5hohhQhmhdg2gBQgzACgyCcQg2ClAABYQAAArAKAtIAAAAQANAzAIAdQABAEgCADQgCAEgEABIgDAAIgEgBgAJ8HkQgCgCgBgDQgBgEACgDQATgnAEggQADgiAEhHQAEhIgUiEQgci2gvgCQidAAilBWQiQBIgYBYQgCAEgDACQgDACgDAAQgEgBgCgCQgDgDAAgEQgEhfBwh5QBWhfCIhlQAagUAdgUQCXhqCXhNQCUhKA3AAQAdgCALA9QAFAdAAAlQAABygaCXQgbCZhGDDIgKAYIAAABQhIC1iRBiQgCACgEAAQgDAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.9,-57.5,199.8,115);
p.frameBounds = [rect];


(lib.dragon_wing12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing12_img();
	this.instance.setTransform(-65.9,-33,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-33,132.5,66.3);
p.frameBounds = [rect];


(lib.dragon_wing11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing11_img();
	this.instance.setTransform(-49.6,-31,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.6,-31,99.4,62.7);
p.frameBounds = [rect];


(lib.dragon_wing10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing10_img();
	this.instance.setTransform(-63.9,-44.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.9,-44.2,128.2,87.9);
p.frameBounds = [rect];


(lib.dragon_wing9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing9_img();
	this.instance.setTransform(-27.6,-50.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.6,-50.6,56.2,100.8);
p.frameBounds = [rect];


(lib.dragon_wing8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing8_img();
	this.instance.setTransform(-74.8,-47,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-47,150.5,94.3);
p.frameBounds = [rect];


(lib.dragon_wing7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing7_img();
	this.instance.setTransform(-50.1,-86.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.1,-86.2,100.1,172.1);
p.frameBounds = [rect];


(lib.dragon_wing6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing6_img();
	this.instance.setTransform(-73,-63.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-63.7,146.9,127.5);
p.frameBounds = [rect];


(lib.dragon_wing5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing5_img();
	this.instance.setTransform(-45.2,-58.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.2,-58.8,91.5,118.8);
p.frameBounds = [rect];


(lib.dragon_wing4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing4_img();
	this.instance.setTransform(-66.5,-51.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-51.7,133.9,104.4);
p.frameBounds = [rect];


(lib.dragon_wing3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing3_img();
	this.instance.setTransform(-49.3,-62.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.3,-62.9,99.4,125.3);
p.frameBounds = [rect];


(lib.dragon_wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing2_img();
	this.instance.setTransform(-77.4,-65.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.4,-65.7,154.8,131.1);
p.frameBounds = [rect];


(lib.dragon_wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_wing1_img();
	this.instance.setTransform(-25.7,-37.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-37.9,49.7,75.6);
p.frameBounds = [rect];


(lib.dragon_face8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face8_img();
	this.instance.setTransform(-37.6,-63.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.6,-63.6,74.2,126.7);
p.frameBounds = [rect];


(lib.dragon_face7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face7_img();
	this.instance.setTransform(-30.2,-56.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.2,-56.2,60.5,111.6);
p.frameBounds = [rect];


(lib.dragon_face6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face6_img();
	this.instance.setTransform(-94.6,-65.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.6,-65.7,190.1,132.5);
p.frameBounds = [rect];


(lib.dragon_face5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face5_img();
	this.instance.setTransform(-35.3,-53.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.3,-53.3,70.6,106.6);
p.frameBounds = [rect];


(lib.dragon_face4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face4_img();
	this.instance.setTransform(-115.2,-67.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.2,-67.3,230.4,133.2);
p.frameBounds = [rect];


(lib.dragon_face3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face3_img();
	this.instance.setTransform(-54.5,-63.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-63.3,109.5,126.7);
p.frameBounds = [rect];


(lib.dragon_face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face2_img();
	this.instance.setTransform(-76.1,-68.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-68.9,151.2,136.8);
p.frameBounds = [rect];


(lib.dragon_face1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_face1_img();
	this.instance.setTransform(-25.7,-36.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-36.4,49.7,72.7);
p.frameBounds = [rect];


(lib.dragon_decor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dragon_decor_img();
	this.instance.setTransform(-211.2,-206.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.2,-206.2,423.4,411.9);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AI1DsQgDgPgPAAQgHAAgDACQgfgRgagaQglglgSgtQAPgIAAgKQAAgTgYAAIgCAAQgEgYAAgbQAAhhBGhHQBGhGBkAAQBjAABHBGQBCBCAEBbIgOAbIAAABQgiBGgkArIgIAKIgHAIIgGAHIg4A+IgBACIgPAOQgeAIghAAQguAAgngPgAtEDMIgFgKIAAAAQgxhsAAigQABg9AFhMQA5gnBJAAQBiAABEBFQBFBFAABhQAABghFBEQhEBFhiAAQgsAAgmgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.1,-25.1,178.2,50.3);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AmuUiQgDgDgEAAIgDABQgCgCgEAAIgngGQgDgBgDABQgDgCgDAAIgEAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQg5gKgtgJQgDgBgDABIgCgBQgEgCgDABIgBAAQgCgCgDgBIglgJIgJgCIg3gQQh9gqhbhJQhchJgohjQgphkALiIQAKiLAfh5QAgh6AJghIAAAAQAQg9ACg/IAxADIAyABIADAAIADAAIADAAQAugBAzgHIAJgBIAigGICGgiQA4gSA7gYIAPADQggChgTB3QgnEEAACvIgRADQALBaAKA9QAHAuAIAeQAPBAAOAiQAJAWAIAKIgTAPIgCAEIAagNIABgBIAVAXQAPAPASAPQAtAmAAAOQAAARgLAKIgCACIgCgDgABVSkIgVgGQAjhdALhBQAegQAhAAQAaAAAOAoQAKAeAAAeIAAAEQgeAUgzAbIAAAAQgVAOggASIgEgDgAHcQBIgBgEQgTgnAAgxQAAg2ABgMIAAAAQAcAKAoAUQBhAyAsASQDmBdFbAAQCfAADQggQCXgYCTgkQhXAxhkAiIgTAHIgTAGQjUBBkGAAQlHAAmWhmgAsgixQAekjBvj1QCKkuD5jFQAegZAhgWIgHAGIAAABIgRANQAagPAWgPIADgCQARgNAPgNIAGgFIAWgOIAHAJIAJALQCKCzAnDxQAAADACADQACACAEABQADAAADgBQAYgMAogLQBMgVA1AAQAHAAAKACIgBAAIAEACQgWA4g8CMIgTAuQgCADABADQAAACACADIAFADIA8AQQAZAJAKANIgWAPIgiAXQgEABgBADQgCADAAADQABAEADACQAFAFAFAJIADAIIgjALQggALgIAOQgCADABAEQAAAEAEACQAdAVAXAdQAaAhAGAhQgoAPgzAKQg2ALgpAAIgfgBIgCAAQgJAAgBAIQgdBJgvA7Qg7BFhXAwQiRBQhqAvIgHAEIgsAUIgcALIg2AVIgoAOIgJADIAAABQgFAAgEACIgtAOQg1APgzAIIgEABIgXACQgPieAUi1gA2EAuIgwgaQh9hGg5hEQgkgrgJgpQgBgEgDgCQgCgCgEAAQgEAAgCACQgsAngdACIgCAAIAAgCIgCgMQgDgKABgGQAAgFABgFQADgJAAgGQAAgEgDgDQgCgDgFAAQhBAAgggDQAKgaAZgrQARgfALgXIABgFIAEgFQAFgOAEgMQABgDgBgDQgBgEgCgBQgEgCgCAAQgPAAgJgCQAEgKALgIQAZgSgBgRIAAAAQABgSg0hSQgphEgNgcIAKgCIAWgCQBGAAApAWQAYANAUAZQABACADABQADABAEgBIAEgEQACgDAAgDIABhiQAAh2BSjRQAOgmAQgjQAPgiAQgeQBdA9ArA+QAiAxAcBTQAqB8AOAgQBnDuAZCIQAWBxAAD9QAAAlgSBtIgEAMQh2gfh1g9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190.9,-131.7,381.8,263.5);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("ApwfIQgmgJgMgBQgNAAgWANIAAgVQATgOAbgIQAqgNA+AEQAPgLAQgXIAbgkQAjgoA+AAQAdgBAXAHIAAANIAAAnQgagIgagBQg6AAgnA9QgVAggIAJQgTASgZABQgNAAglgLgAuyetQgcgNhzABQgVAAgSgNIgigbQgigdgpgIIgKhEIgKg2IADAAQAvAAA6BKQAeAmAPAOQAbAXAcgBQBSACBAAxIAGAGIAAABIgCAQIgIAWQgRgXgWgKgAhkbQIAAAAQADgXAAgMQAOgGAQgDQBhgLAngPQAlgNAbgcQAJgKAegoQAagjAkgOQgDAogHA0QgiAIggAtQgmA3gkAAQgNAAgZgKQgZgKgMAAQgiAAg1AXIgXALgAN9WsQhZg1hmhFQg2gng6gqIjGiVQhvhShLgvQjKh/iUAAQhKAAg9AVIgCgCIgGAFIAIgDQAIAKAHAMQAZAtAABSQAACNhkCLQhsCWiEAAQg7AAgsgXQgOgIgKgIIAEgKQABgDgBgDIgCgEQgCgCgDgBIgUgFIAAgBQA4gcAhgVQATgLAQgNIARgPQAjggAUgoQACgDgBgCIgCgGIgEgDQgOgEgngIQgtgIgSgBIgHgFQAygyAihEQAVgpALgoQANgxAAgvQAAgfgFgQQgBgEgDgCQgDgBgDAAIgZAAQghgCgjAMQg6AUg9A1IgUgBQADgoATgnQANgbAjgxQAjgxANgcQAUgpACgrIAAAAIArggQBOgtBJgeQBWghBPgMIAIgBQCNgRB3A7QCJBDBsCqIABABIADADQAAAEAEADQJ0HQIWhQQEHgpDxitIAKgGIAZgMQAUgHANAGQALAGAFATQAFAPAAAYIgFAHQjPEvlbB4IgTAHIgUAFQjUBBkGAAIgfAAgA1wQcQAIhrAVhgIATAEQAtBLAABRQAABOgZBEQgUA5ggAgQgYhWAIhqgAylHwIg0gBQgfgBgdgCQgtgEgtgIQACghAAgrQAAibgVi0Qgbjmg0i2QgmiDgwhiIAGgCIgHAAQiUADhfCTQhHBtgIBzIgBAAQgUhxAAhWQAAg0AThMQAXhVAlhHQAlhGArgsQgWgOgXgJIAEgNQADACAEgBIgGgFQgPgOgXgYIAAgBIAAAAIgOgJIADgVQAKhCAAhrQAAi0gEg8QgHhpgbhYQgchehaioQAkjiAvgCQA5ACB4CSQBYBqA0BWQBXCXAhBaIAIAWIAGAXQASBCAFBIIAAAAQABAYAAAZIAAAAQANBxACAlIAAgDIAAgEQAAgrAEhHIABgcIAAgBIgBgrIAQgGQCUg2CHAAQA+AAA6AGIgBAIQgCATAAAUIAAAAQAFBmAAAyIAAACQACghANh5IAAgBQAAgbAEgbIAAAAQAFgiAKggQA4i3DiiWQBjhBDniCQBzhAA8gZQAdgMARgCIAJgBQACADAEACQAGAEAAAMIgCA2Qh7CqhQCnQh9EHAADBQAABpACAVIAAADIglApQgNAPgOAMIAAABIgQAMQAagOAWgQIACgBQASgNAPgNIAAgBQAGAcALAZQhNAQhFAmQBzAuBFB9QBQCQAAC/QAAB9gqBPQgaAwhJBRQAVg6AAg8QAAhFgXhUQgYhbgshMQhti+iqAAIgEgCIgCACQhEBeg4B/QhRC2gsDfQgjCyAACGQAAAZAGBfIAGBSIhvAKIgLAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199.6,-200.3,399.4,400.6);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("ArQQZQgegPgKAAQgPAAgoAOIAAgIIAAgJIAAgkQA1gfAbAAQAQAAAeAUIAeAUQAYAAA7gjQA7gjAwAAIAMAJQAAAogCAgQgngLgMAAQgqAAgxAeQgxAegYAAQgPAAgfgPgA06QOIgCguIAAAAIgDgeQBQATAaAHQBYAYBAAgQhKAAhIAFQhKAFggAAIgBgQgAzyNnQg0gQgugQIgBgIQgNg9gVhSQBEA0BVA3QCvBuAlAdIgDAJQg1gUiwg0gAjUNmIAAgCIAEgRIACgQIAAAAIADgZQAXgOAfgOIB8gvQAdgLBng5IASACQgGAzgKBAIgVANQhYA3gjADQhFAGhUAXIgcAIIAEgWgArCM4QArglBAgdQBFgeATgLQAtgaAVgkIA5hMQAqg7AMgtQAQhXAMgwIALgDQADAPAAAXIAAAFIAAAFQAABNg2COQgBAEABAEQACAEADABQAEABAEgBIABAAIADACIAPAEIgBAGQhgBVgiApQgJAMgSAHQgFgNABAOQgKADgMACIgCAAIAAAAIhOAGQhTAGgoAkgAxbJdQgagLgsgxQgjgognAAQgfAAgQAWQgGAKgLAXIgMgJIgRgOQADgQAJgQQAQgaAAgYQg2gBg3goQgRgMgMgNIgEgKQgRgpgIguQAIggAcgwQAphFAAg6QAAgLgEgXQAqADArAdQBCA4AhAQIAFgBQgDALArgoQAqgoAmAAIAzAAQAOAAAlhEIAHgMIAFAFQAXBmgNAVQgMAWARAlQAQAmAAAjQAAA3gSAqQgMAbgfAoQhDBagVBXgA1yEiQAAA8A9ArICeBcQAIAAA/hfQA8hXAAgrQgBgugJgSQgSgfg0AAQgwAAgjAqQgJAKgGALQgaghgpAAQhpAAAABfgAI1ISQAjguAYg2QAwiIAphFQAAAcgKBAQgKBAAAAJQAAANAKAeQAKAeAAAMQABAdgHAlQhGgEhIgHgAkQGHQBKhUAzhuQA7iQAshWQAthhALiJIAEg+QAzAzAvBEIgKAbQguCCg/CUQguB8hDBjQhNBzhhBGQAThCABgugAquHeQBSg6AAgyQgBgMgJgSQgLgRAAgNQAohrAoh0QBQjnAAg2QAAgOggiOIgShPQBCgYA/gIIAJgBQATgDAUAAIAEALQAdBdAAARQABAIh4EqIh5EpQABBPgFAdQgGAjgUAUQgTAVhXAvgARnGGIAvhIQAjg3AOgyIA6gGIggBBQhICAhTA3QAIgaAZgngAMjGpQA1gqAdhKQARgqAPhHQBAAMA/AFQgQAigOAWQhIBziHAygAWjEJQAAgXgEhFIAjgLQADBJAQBGQAKApAGArQgnAUgoATQANhCAAhhgAt/E4QAUgYBmhhQAjghAagdIAMALQgrBVhGA3QgCACgCADQgBADABADQABADAEACQACACADAAQAIAAASgDIAVgCIAGAAIgBAMQhFAUhJAsQgeATgUAQQANgtAngvgADmETQA2hEAegqQAagmB9hgQBWAtBVAjIgDAEQgUArhBAUQhGAPgZAMQguAXhhBDQhUA5hTAhIBXhugAZiEoQAKg8AAgpQAGAAADgGIABgOQAYAqARAqQgbAXgcAWgAkIifQBFjlAAgjQABgJgFgYQAqALAoAUIAGACQgtCqi7FYIBPj6gA0PmaIg0gBQgegBgdgDQgugEgugIQgNgdgNgmQgphuAAgdQAAhaA9g8QA8g8BZAAQBKAABCBaQA9BTAABIQAAAtgWBIQgLAkgKAbIhWAIIgMAAgAxSneQAVgkAAhPQAAiKhGhlQhNhvh7AAQh/AAhTBRQhQBOAAB0QABAnAcBMQATA0AbA6QgfgJgdgKQgXgngOgkQgbhHAAhGQAAhuBFh8QBViXB4AAQCsAAByB5QBtB0AACjQAABFg3CZQgcAIgaAFIAcgyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169.6,-106.4,339.2,212.9);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AnwaSIABgCIAAg0IgFABIgCABIgBACIgBADIgKAoQgBADACAEIhgAAIAAg2QgDgBgEACQgDACgBAFIgJAtIAAAAQgwgFgEgYIgBgdQgCgbABglIAAgJQgBgeABgXQCZg1CUhPIAqgYIABABIAGAIIAAAFIAAgCIAEA6IAEAzQAAAygEAlQgFAwgKAaQgbA7hPAAIguAAgAwYZIIgEADQgDADAAAEIABAWIAAAEIABAcQgwgBgegEIgBgBIgIgoIgBgGIgDgRIgDACIgBACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAACIgCAyIAAAAIgBAAQgfgKgLgSQgHgRgDgjIgBgZIgCguIAAAAQgFgqgIgzIgMhEIALgNQAVARAVAQQCnB/CSAZIgCAgIgCARIgCAPIgQAtQgGAJgLAHIAAAAQgnAXhYACgABZXUIgNguQgCACgBADIgEAoQghgDgogGIAAABIgJgCIAAgwIgBAAQgEACgBAFIgOAlIgBAAQg3gLgBgJQgBgTALgxIAAgCIADgRIADgPIAAgBQADgZAAgMQAAgrgBgJQgEgVgNgPQAUgQgCgOQABgOgOgOQAmgeAkgfQBwhjBPhlQAFAeANAaIAEAEIABAFQACADAEACIAAAAIAAAAQgBAEADAEIALAOQAVAbAHAMQAMAWgBAgQABBWgeClIgBAEIAAABIgBAFIgDAMIgbBUIgGAJQgbAfhCAAIgNAAgADaPBIgBgEQgQgggDglQAUgbARgaQBaiMAAhpQAAgxgahAQgbhBgvg6QhxiLiRAAQioAAhcBkQhaBhAACyQAAAfAJAeIAGATIgIALIAKgFIgCgGIBtiNIAFC/IC1BAIhZAgQgKgJgQAAQg8gCg8BtIAAAAIgOAZIgFANIgxhAIi4A3IBtifIhtieICUAsQgtg2gWgrQgshWAAhwQAAisBJhdQBnguBdgMIAJgBQCNgSB0A7QCMBDBsCrIAAAAIADAEQABAEADADQCbByCWBSIg6BKIhwghIBCBhIhCBgIBwgiIBHBdIADh1IBvgmIhvgnIgChbQEMCOD5AlIgjAzIBSgZIA0BFIAChVQBzAHBugRQEIgpDwisIAKgGIAZgMQAUgHANAFQALAHAFASQAFAPABAYIgGAIQjOEvlcB4IgTAGIgUAGQjTBBkGAAQlHAAmWhmgANgPYIABhDIBAgXIhAgWIgBhEIgpA2IhBgTIAnA3IgnA4IBBgUgAXSOZIABg5IA3gTIg3gUIgBg6IgjAuIg3gQIAgAwIggAuIA3gQgAAXNdIg0ABIAngjIgQgzIAsAcIArghIgMA1IAsAfIg2ADIgPA0gACnJ6Ig2ACIApgjIgSg0IAuAdIArghIgMA0IAsAfIg2AEIgPA0gAiRItIg2ACIApgjIgSgzIAuAdIArgiIgMA1IAsAeIg2AFIgQA0gAnfklIiOAFIBshcIgwiGIB5BKIBwhXIghCLIBmBGIgHAMIh4AJIgnCIgA9YklIiOAFIBshcIgviGIB5BKIBxhXIgiCLIB1BQIiOALIgoCIgA0FonIiOAEIBshcIgwiGIBnBAQgDizgYjxQgbkRgtjlQCNgyCBAAIAsABQhWD+gpEYQgaCvgJD2IBOg8IgiCKIB1BRIiNAKIgoCIgAxF0qQAjjIAxidIAlAEIgBAIQgCASgBAVIAAAAIAFB5QguB6gqCUQgZBeggCPIgIBgQAFkGAaicgA1YzCQgUhwgVhfIANgDIABgDIAAgFQAAgeABgtQAGgrADguQAnCfAPDDQAIBwABClQgeiWgQhjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.3,-168.2,404.6,336.5);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BD9FD").s().p("An2f1IABgCIAAg1IgEACIgDACIgBACIgBACIgKAoQgBAEACADIhfgBIAAg1QgEgBgDADQgDACgBADIgJAuIgBgBQgrgDgHgVIgBgEIgCgcQgBgcAAgkIAAgGIAEgCQArgkAygIQAQgnALgLQAWgYAxABIAQAAQASgZAlgVQArgYAlgBIAFABIAEAuIACAkIABAPQAAAygDAlQgGAwgKAaQgbA7hPAAIguAAgAwderIgFADQgDACAAAFIABAWIAAAEIABAcQgvAAgegFIgCAAIgHgpIgCgHIgDgPIgCABIgBABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgBACIgCAyIAAgBIgBAAQgfgJgKgTQgIgQgDgkIgBgXIgCgvIAAAAQgEgrgIgyIAKgKIgMgJIgCgCIgJguQgLgzgQhAQA0AIA2BKQARAXANAYIAMgBQAsAAAmA8QANAVAPAjQAtANArAnQAbAZAPAaIgBADIgPAuQgHAIgKAHIAAAAQgLAGgOAGQgnAMhAABgABTc3IgMgvQgDADAAAEIgFAmQgggCgogGIAAAAIgJgBIAAgwIgBABQgFACgBADIgNAnIgBAAQg3gLgCgKIAAgGQABgVAJgpIAAgBIAEgSIACgPIAAgBIACgQQARgEAXABQAKAAAdAJQAGguAPgSQAUgZA5AAIAQAAQARg2AWgWQAgggBFgJQgBAigGApQgHA7gOBJIgBAGIAAAAIgBAFIgCANIgbBTIgHAJQgaAfhCAAIgOAAgAw3WLQg6gjgQgqQgNAHgDABQgsgBgagnQgUgeAAgeIABgHQAEAKAEADQAEADAXABQASAAARgVQAGgHAWglQAWglAYgQQATgMAWAAQAtgBAUAMQAOAJAGAWQAMAjAFAKIAIALQAFAqAHAOQARAjAtABQAWAAAngfQgNAfgpAbQgkAWgUAAQgYAAglgTIgOgIQgDAXgHAfIgLAsQgWgJgXgMgANPWHIABgRQgRAJgSAHQhHgFhLgIQgWgRgSgbIgJAKQgMAMgQAAQgOAAgXgPQgVgPgIgTIAKAAQAogBAYgbIgHgSQgTg2gIgzQhQgEg3hQQgshBAAhMQhdgTg0hgQgzhcAAh/IAAgZQAiApAfAwIAEADIAAACQAAAEADACIAyAkQBcBCBbA2QA0AfAzAbQG2DlGEg7QEIgoDwitIAKgGIAZgMQAVgIANAGQALAGAFATQAEAPABAYIgFAHQixEEkXB9QgwAVgyARIAAAAIgTAHIgUAGQjTBBkFAAQgxAAgzgDgA1WSGQgKhBAFhMIAFg2QAbAkAaAAQAiABAIgWQADgIAAgpIAdAYQALAGAFABQAXAAAVgfQAQgVADgVIAIAGQAsAqAAAnQAAAqgVAiQgXAogqgBQgHABgQgKQgKATgOAQQgmAtg2AAQgVgBgMgBgAuVRWQgHgDgUgSIgFAAQgtAAgigdQgogjgBg3QAAgfAXgeQAFAXAXASQAZAUAOAAQAZgBATgNQATAiA5AAQAvgBAXgdQAOgSAFgYIACgCIAdgXQATgPATgMIABAIQACALgBAoQABBagfAtQgpA7hnAAQgcAAgQgJgAsBN+QABgggLgcIgWg4QAFACAHAAQAoAAAyhQQAyhSABhFIAAgCQAIAIALAEQADACADgBIAEgCIAsgfQA9glA6gZQAIAugBA2QAACJhJBbIgEgBIgZAAQhKgChSA9QgQALgPAOIgfAcIAAgKgAyHpJQgwg/gfhWIgVg+QhJDjiMBmQhsBPiKAAQiOAAhMhDQgOgLgLgNQAKhCAbhUIAGgTQAOgtAVgyQAOgmAQgjQAQgmATgiIAlAVQAEABAEAAIgHgGQgOgNgXgZIAAAAIAAAAQgXgOgTgRIgIgGQg6gzgjhHIgHgPIgBAAQgwhsAAiiQAAiTAejkQAokxA3gCQA4ACB5CRIAgAnQBCBTAqBHQBXCWAgBaIAIAXIAHAXQASBCAEBHIAAABQACAYAAAYIAAABQANBwABAmIABgDIAAgFQAAgqAEhIIABgcIAAAAIgBgsIAPgFQCUg2CIAAQA9AAA7AFIgBAIQgCATAAAUIAAABQAFBmAAAyIAAABQACghANh5IAAAAQAAgbAEgbIAAgBQAEghAKghQA4i2DjiWQBeg/FNi2IABgDIAkgSIApgTQAdgMARgCIAJAAQABADAEABQAHAEgBAMIgDBkQgEBRgVCeQgZC6grBbQgrBhgVAqIAAAAQghBGglArIgHALIgHAHIgHAHIg4A+IgBACQgQAPgoAtIgHAJIgUASIAAABIgQANQAXgNAUgOIAEgDIADgCQASgNAPgNIAYgXIALANIAJALQBNBjAvB2QAjBYARBjQg0Avg8AlQhqBEh2AjQhaAahGAAQlAAAiWjFgAk29+IAEgCQArgVALgIIABgBQgDAAg4Agg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201.7,-203.7,403.5,407.5);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BD9FD").s().p("AqAa0QAVgcAPgnQABgCAAgDIgDgFQgCgCgDgBIgVgFQA5gdAhgVQATgLARgNQAvgmAZgxQABgCAAgDIgDgFQgBgDgDgBQgOgEgngHQgtgJgSAAIgQABQA4g0AmhJQAthZAAhXQAAgggGgQQgBgDgCgCQgEgCgDAAIgZAAQhLgChUA/QgRgVgYgSQgRgNgjgXQg3grAAhWQAAhQA8hdQAHgLBOhjIACAZQAFAsAKAiQAWBEAuAWQACACADgBIAFgCIArggQCqhjCSgUIAJgBQCNgSB0A7QCMBDBsCqIADADIAAACQABAEADACQCfB2CYBSQA6AgA6AaQgpBAgwBAQh+Csh7BfQhEgPhGgRIgBgEQgUgnABgxQAAg2AAgMIAAAAIAAgFQgFg1ABgbIgBABIgIAeIAAABQgEATgCAVIAAAMQgBANAAA2QgBA2AWArIAEAEIABAFQACADAEACIAAAAIAAAAQgBAEADAEIALAOIAWAeQgjgFg8gNQhbgUgiAAQhVAAg4AXQgcAMgXARQAbhXgBg3IAAgMQgBgfgDgRIgBAAQgKgmggABQg8gCg8BtIAAgBIgOAaIgdBIQgdAPghAUQhfA6hLAAQhRAAgwgggAB0PdIgCAEQgGAFgKAAIATAAIAAgJIgBAAgAIoZ+QA2geAzgiQCxh2CKieQDCA7C4gBQgyAugsAoQirCYiLBXQi5gGjRglgAVYYJQA/hIBRhrQCBgVB7g1QgoBKgvBGQhJBuhPBXIgJADIgUAGQiAAniSAQQBFhBBNhXgAdiToIALghQA1gfAzglIAKgGIAZgMQAUgIANAGQALAGAFATQAFAPABAYIgGAHQh7C1itB0QA1h1AsiCgA4+JyIgwgaQhRgvg0gsQgcgZgVgYQgkgrgJgpQgBgEgDgCQgDgCgDAAQgEAAgCACQgsAngdACIgBAAIgBgCIgCgMQgCgKgBgGQAAgFACgFQAEgJAAgGQAAgEgEgDQgDgDgDAAQhCAAgfgDQAJgaAZgrQARgfALgXIABgFIADgFQAHgOADgMQABgDgBgDQgBgEgCgBQgEgCgDAAQgOAAgIgCQADgKALgIQAYgSAAgRIAAAAQAAgSgzhSQgphCgOgcIALgCIAWgCQBGAAAoAWQAZANATAZQACACAEABQADABACgBIAFgEQACgDAAgDIAAhiQABh2BSjRQAOgmARgjQAQgmASgiIAmAVQADABAEAAIgGgGQgPgOgWgYIAAgBIgBAAQgWgOgTgQIgJgHQg6gzgihGIgHgPIgBAAQgwhsgBiiQABiTAejlQAnkwA3gCQA5ABB4CSQBZBqAzBXQBXCWAhBaIAIAXIAGAXQASBBAFBIIAAABQACAXgBAZIAAAAQANBxACAmIABgDIAAgFQgBgqAEhIIABgcIAAgBIgBgrIAQgFQCUg2CHAAQA+AAA7AFIgBAIQgCATgBAUIAAABQAGBmgBAyIAAABQACghAOh5IAAAAQAAgcADgaIAAgBQAFgiAKggQA4i3DiiWQBjhBDniBQBzhBA8gZQAegMAQgCIAJgBQACAEAEABQAHAEgBAMIgEBkQgEBRgVCeQgYC6grBbQgrBggVAqIAAABQgiBGgkArIgIAKIgHAIIgGAHIg5A+IgBACQgQAPgoAtQgNAPgOAMIAAABIgQANQAbgPAVgPIADgCQARgNAPgNIAYgXIALANIAJALQCMCzAnDxQAAADADADQABACAEABQADAAADgBQAYgMAogLQBKgVA1AAQAHAAAJACIAAAAIAFACQgXA4g8CMIgUAuQgBADABADQAAACACADIAFADIA8AQQAZAJAKANIgWAPIgiAVQgDABgCADQgCADABADQAAAEADACQAFAFAEAJIAEAIIgiALQggALgHAOQgCADABAEQAAAEAEACQAaAVAXAdQAaAhAIAhQgpAPgwAKQg3ALgpAAIgegBIgDAAQgJAAgBAIQgdBJgxA7QgYAbgbAYQgqAlg1AdQiKBMhmAxIAGgWQAuiSAAhHQAAjRjJhpQiYhPjPAAQj4AAiOBjQiWBpAADCQAACfBPBXIgQgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.5,-174.9,419,349.8);
p.frameBounds = [rect];


(lib.dragon_body_uzorbase_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AlaZfIidgTID3gjIgBANQgDAdgFAWIhRgKgAv8ZAIBqgZQBCgQAqgJIAMgCIgDAuIgCARIgBAHIjcgSgApjY3IAAgsQA0AEB4AEQBCABApAAQg5AKhjAOIh7AQgAxwYQIAAgBIgEghICIAMIBTAIIjWAeIgBgQgAqiXBIAAgrIAVgDIAZgFIABAXIAAARIAAAGIgRACIgeAFIAAgCgAC+WlQgxgJgrgJIBngQIBmgQIAAABIgDANIgQAyQgrgFgzgJgAgFWDIADgQIAAAAIACgcIA/gEQBHgEAtABIhYAbIheAfgAimV7IAAAAQgqgBgJgBQgNgDgKgMIAAAAIgBgBQAWAAASgKQAUgKAAgPQAAgNgKgQQgKgQAAgKQBLgiAPgQQgKAAAAgKQhDAHgXglQATgkARg2QAYhKAAguQAAgMgFgaQgFgbAAgPQgYALgXATQAvhMAtgCQARACAGAVIAAAAQADAQABAdIAAAEIAAAGQAABMg2CPQgBAEABADQACAFAEABQAEABADgBIABAAIAEACIATAFQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAFACQADABADgBQABADADACIARAIIAAgBQAwAXADASQgCAIgQALIgCABIAAAAIgBAAQgPAKgXAKQg4AbgUAAQgFAAgDAEQgCADAAADQAAAFACACQAJAIAPAWQARAZACAIIAAAFQgCAJgFACIgMABIgdgBgAqVQ9QAAgHgYgZQgdgcgaAAQAGAAACgFIABgFQAxgNA5goQA2goAogvQgTAJg6gJIhJgKQBDhcAig6QAwhQAfhQIgCAAIgIALQgdAngVAAQgaAAgOgeIgBgCIg1AUIgyAUIAOgLIAdgXQAbgVAZgPQBGgsA7gCIAHAAIASAAQACAOAAAVQAAAXgDAXQgJA8geA+IgEAHQgqBQhEA0QgCACgBAEQgBADABADQABADADACQADABADAAQAIAAASgCIAVgCQARAAAqAIIABAAIAmAIQgUAiggAbIgMALIgKAHIgVANQgoAYhJAmIgBAAQgEAAgDACQgDADAAAFQAAADADAEQADADAEAAQAMAAAcAHQgOAggWAcQACgNAAgMgALbNSQg7gng6goQDABjEQBLQBdAaBZATQhvhGhwhcQhCg3g9g6QgpgXghgXIAtASQArAQApANQEXBYEBgnQC+geCzhhQBEgmBDgxIAKgFIAZgNQAUgHANAFQALAHAFATQAFAPABAXIgGAIQhfCLh8BmIgxAkQg0APgzACQhFgEghAAQh2AAiSgcQiXgdiIgzIgZgKQBZA+B2A/QCIBHCJAzIgEALIgKACIgJAAIgBADQgzARg2AMQhgAUhpAKQjPhUj8ijgA1WPhQhGgwgMgwIADgBQAKgGAQgBIAGgCIADABIA9AAQAEAAADgDQACgCABgCQABgEgBgDQgBgDgCgBQgYgSgagbIgGgHIgIgKIgIgKQgNgRgNgRQhEhggBhOQABgQADgGIAAAAQAFgFAOAAQApAAA4AdQAxAaAYAbQADACAEAAIAAAAIgCAVIgBAMIgBALIAAAIIAAACIAAABQgigQgigLIg8AAQASAqA6BAIA3A3QADAVAEAUQgRAFgOAOIgDACIgVAZQgLAPgMAHIBEArQAoAYAbADIAAARIgNAAQgwAAg7gngAARMHQAAgPANgZIADgFQAJgFAKAAQASAAAcALQAnAPAAAYQAAAVgKAUQgPAdgeAAQhBgdAAgpgAnDL9IgjgpIAIgPQAlhLAHhJQAMgGAaAAQAOAAAVAKQALAFAGAFQANALAAAOQAAAOgIAKQgHAMgPAJQgeATAAAaQAAAOAFAEQAFAEAAADQB6AMAIAvIAAAGQAAAagdATQgfAUgoAAQgcAAhIhQgAsTL0QgCgEAAgPQAAgmArAAQArgBAAAmQgBAWgUAJQgLAGgLAAQgggBgJgQgAjvLtQgNgQgJgjQgRhFgbgTQAFgGAGgDQAIgGAKAAQAdAAAjAeQApAhAAAlQAAAfgKATQgLAUgTAAQgPAAgNgQgAFFJJIgFgbQAAgtAqADQArADAAAtQAAAwgmAAQgeABgMgcgAshIrQgUgrAAg+QAAgmAGgUIADgIIAEgCIAjgGIAMgCIAUgGIAAAbIAJAAIgDArQgCAnAGASIAyAAQAPgIAOAAQAOAAAHAIIgSAmIgPAfQgSAQgQAQQgRAJgVAAQgqAAgXgygApgH2QAFgIAHgJIAMgOQAYgaATAAIAKABQARABANAJQAOAIAEANQg9AChDAsQAAgJADgMgAjTHvQgKgQAAgnIAAgMQAOgNAQAAQAdAAAUAUQAVATAAAaQAAAjgtAAQghAAgMgUgAgBHHQgegoAAgoQAAgdAWgqIAJgQQAGgQAKgJQAFgFAGgDIgNgMQAJgOAJgDIAFgBQA3AAgCArQgBANgEAgQgDAeAFAWQAOAEAjAGQAeAFALAFIAAA8QgUACgPAGQgMADgIAGQgKAFgGAIQgRAUggAAQgeAAgcgogAqQFtQgPgagJgIQgPgQgVAAQgFAAgKAHIgKAIIAAgFIACgDQAKgjALgSQAUgiAqAAQAqAAAqApQApAlAAAbQAAAZgKAUIgBADQgQAbgcAAQgqAAgcgygAnhFZQgUgnAAhRIADgNIAlgVQAcgPAcgNIgGAWQgKAmAAAMQAAAxAYAOQAHAFAkAFIArAHIAAAUQgKAOgiAXQggAXgEAAQhAAAgagygADtGBQgRgig2hRIgxhLQAAgHAIgKIAMgNIACgCQAUAOAUAQQA5AuAzBDIAZAiIgHANQgQAbgVAHQgGABgHAAQgIAAgKgDgAk0E5IgDgBQgNgFgHgMIgCgGQgIgPAAgdQAAgXABgJIABgHQAegWAIgJQgQgBgLgDQgPgFgFgKQgCgDAAgOQAXgKAWgGIAegKQAagIAagGQAMAXAAAhQAAAxgVAzQgXA8gkAAQgJAAgIgCgArMCgQgCgFgBgZQAAgqAmAAQAlAAAAAqQAAAeglAMgAiNBZQBCgEA+ANQgXAvgZAAQglAAgrg4gA8kiOQgkgqgJgpQgBgEgDgCQgDgDgDABQgEgBgCADQgsAngdACIgBAAIgBgCIgCgMQgCgKgBgHQAAgEACgGQAEgIAAgGQAAgFgEgCQgDgDgDgBQhCAAgfgDQAJgZAZgsQARgeALgXIABgFIADgFQAHgPADgMQABgDgBgCQgBgEgCgCQgEgCgDAAQgOAAgIgBQADgKALgIQAYgSAAgRIAAAAQAAgSgzhSQgphEgOgdIALgBIAWgCQBGgBAoAWQAZANATAZQACACAEACQADABACgBIAFgEQACgDAAgDIAAhUIAAgOQABh2BSjSIACgCIANAFQBpBQAzBVQAXAoAQAsQAOArAHAvQAFAqAAAuQAACahECIIgWAnQg7BlhaBNIgTgVgAnTkoQh8hkAAjKQAAg5AKg9QAIgsAOguQAriRBnigQBChmBKhRIABAAQB7CrAkDgQAAADADADQABACAEABQADAAADgBQAYgMAogLQBKgWA1ABQAHgBAJADIAAAAIAFABIg1B+IgeBHIgJATIgLAaQgBADABAEQAAACACACIAFAEIA8AQQAZAJAKAMIgWAQIgiAWQgDABgCAEQgCACABAEQAAADADADQAFAFAEAJIAEAIIgiALQggAKgHAOQgCAEABADQAAAFAEACQAaAVAXAcQAaAiAIAhQgpAOgwALQg3ALgpAAIgegBIgDAAQgJgBgBAJQgdBJgxA6IgOAQQiNgXhVhDgAyAveQhEj4AAlYIABgfQBPgVBMgFQg4ERAABpQABDCATClQAHA2AGAnQgohXgZhegA0FxNQgciFgKidIAAgEQgBgrAEhIIABgcIAAAAIgBgrIAQgFQAegLAdgJQgOBtgJBzQgNCtACCCIgGgWgAv716QgBhhAZiNQAoABAmACQgrCvgNA5QgaBxAACGIAABGQgVi/ABh7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.5,-164.1,419,328.3);
p.frameBounds = [rect];


(lib.dragon_body_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2D640").s().p("EgIWAgJQgDAAgDgCIAAAAQgEACgEAAIgDgCIgGABQhDgGgCgpQgDgnAAhAQgBgqACgbQgYAGgOgJQgRgIgGgaQgBgDABgDQgCgCAAgEIAAixIgBAAIhjgSQAMA0AFAkIABAaQACAmAABNQAACMgbAkIAAAAQgIAMgOAJQgqAbhgABIgFgBIgFABIgFgBIgGABQgyAAgfgFQgCgBgCgCIgFABQgDAAgDgDIgFAAIgFgBQgpgNgMgZQgNgYAAg9IgDgtQgEgqgIgxIgMhDQgOg+gUhRQgfh6AChPQg6AIhLgyQhVg4gHg7QgBgFADgDQADgDAEgBIAAAAIAEgEQANgHAWgDQADAAADABQACgCADAAIAgAAQgmghgpg7QhJhnABhSQAAgYAHgJQAIgPAbAAQAtAAA+AgQAvAZAaAaQAMhiAYhZIAoicQAQg6ABg9IAAgBQjWgVjUh2IgRgJQiBhLg6hGQghgngMgmQgwAnghgEQgDAAgDgDIgCgDIgDgCQgDgDAAgEIgCgOQgDgOAAgHQAAgHACgIQhGAAgdgFQgDAAgBgCIgDgFQgCgCACgDQAGgdAhg2QARgdAKgXIADgEQAAgDABgCIAFgMQgRgBgJgFIgDgEQgCgCAAgDQABgXAYgSIAAAAQANgKACgIIAAgBQgBgPguhKQg3hZgHgXQgBgEABgDQAAgDADgCQADgCADAAQAIAAAPgCIAYgDQBNAAArAZQARAJAQAOIAAhJQAAh5BUjVQAfhSAkhCQhlhDgyhuQgyhwAAimQAAiVAejmQAqlGBJACQA/gBCBCcIAAgBQBaBtA0BXIAAAAQBZCYAgBcQAeBTAHBcIALgEIgBAAQCYg3CLAAQA/AAA7AGQAjjgEOi0QBjhCDoiBQBzhCA/gZQAggNARgCQAYgEAFALQAOAHgBAaIgDBkQgEBRgTCgQgaC+gsBdIAAgBQgrBigVAqQgiBIgmAuQgpAwggAhQCfC6AsEBQAWgKAhgJQBNgWA4AAQAKAAALAEQANAEAFAFIADAFIgBAGQgUA0g+CRIgSArIAzAOIAAAAQApAPAIAYIABAEIgBAEQAAACggAXIAAAAIgaASIAFAKIAAABIAIARIABAFIgCAFQgBACgCABIgvAQQgOAEgJAGQAaATAUAbQAfAnAHAnQABAEgCAEQgCACgDABIgBACQgCAEgDACQgqAPgzALQg4ALgsAAIgaAAQgdBHgyA7IAAAAQg+BIhaAyQh5BChdAuIgoATIABAEQAJCNA8AlIAngdIABgBQIjlBE1HmQACACgBADIABABQJtHKIPhPQEDgnDtiqQA6gnAeASIAHAEQAZATAAA9QAAADgCACIgXAiQjbEzlwBxQnaCSrSixIAEAEIAAAAQAXAeAGAMQAPAbAAAkQAABYgeCmIgBAGQgRBZgYAeQggAmhMAAIgPAAQgDAAgDgBQgCABgDAAIgFgCIgEABQghgDgsgGIgKgBIgEgCQgEABgDgBIgEgCIgFAAQhJgPACgZQAAgUAKg0IAHgiIAAAAQADgWAAgMQAAgogBgIQgDgRgLgLIgiARQgrAUgYAGIAOASIAAAAQAXAhgBAMIAAAGIAAABQgDAZgUADQgKACgigCIgBAAQguAAgJgCIgBAAQgJgCgIgFIADAlIADA0QAAB7gUAuQggBHhdAAIieAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.7,-205.7,423.5,411.5);
p.frameBounds = [rect];


(lib.decor_tale8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale8_img();
	this.instance.setTransform(-77,-18.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-18.8,154.1,37.5);
p.frameBounds = [rect];


(lib.decor_tale7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale7_img();
	this.instance.setTransform(-79.5,-16.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-16.6,159.1,35.3);
p.frameBounds = [rect];


(lib.decor_tale6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale6_img();
	this.instance.setTransform(-27.2,-22.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.2,-22.4,54.7,44.7);
p.frameBounds = [rect];


(lib.decor_tale5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale5_img();
	this.instance.setTransform(-71,-16.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-16.8,142.6,33.1);
p.frameBounds = [rect];


(lib.decor_tale4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale4_img();
	this.instance.setTransform(-85.3,-21,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.3,-21,172.8,44.7);
p.frameBounds = [rect];


(lib.decor_tale3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale3_img();
	this.instance.setTransform(-85.1,-29.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.1,-29.8,169.2,60.5);
p.frameBounds = [rect];


(lib.decor_tale2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale2_img();
	this.instance.setTransform(-43.2,-35.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.2,-35.1,86.4,71.3);
p.frameBounds = [rect];


(lib.decor_tale1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.decor_tale1_img();
	this.instance.setTransform(-34.7,-17.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.7,-17.6,71.3,34.6);
p.frameBounds = [rect];


(lib.color_picker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,320,320);
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
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,es:4,pt:5,tr:6,ja:7});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-245,-160);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-245,-160);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-245,-160);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-245,-160);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-245,-160);

	this.instance_5 = new lib.title_pt_img();
	this.instance_5.setTransform(-245,-160);

	this.instance_6 = new lib.title_tr_img();
	this.instance_6.setTransform(-245,-160);

	this.instance_7 = new lib.title_ja_img();
	this.instance_7.setTransform(-245,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-160,490,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();
	this.instance.setTransform(-175,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-225,350,450);
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
	this.shape.graphics.f("#FFB1D8").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.body_title_random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(0,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// image_1
	this.instance_1 = new lib.redirect_4_mc();
	this.instance_1.setTransform(0,0,0.474,0.474);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(1));

	// image_2
	this.instance_2 = new lib.redirect_5_mc();
	this.instance_2.setTransform(0,0,0.474,0.474);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(51));

	// image_1
	this.instance_3 = new lib.redirect_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:true},1).wait(51));

	// bg
	this.instance_4 = new lib.redirect_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,480.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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
p.nominalBounds = rect = new cjs.Rectangle(-245,-160,490,320);
p.frameBounds = [rect];


(lib.tale12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale12_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale12_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-39,100.9,77.6);
p.frameBounds = [rect];


(lib.tale11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale11_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale11_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.4,-33.9,65.3,67.8);
p.frameBounds = [rect];


(lib.tale10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale10_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale10_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-51.9,87.3,103.8);
p.frameBounds = [rect];


(lib.tale9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale9_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale9_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.4,-46.3,124.6,93.4);
p.frameBounds = [rect];


(lib.tale8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale8_decor();
	this.instance.setTransform(0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale8_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-60.6,115.2,120.6);
p.frameBounds = [rect];


(lib.tale7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale7_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale7_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.8,-32.8,45.7,65.8);
p.frameBounds = [rect];


(lib.tale6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale6_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale6_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-41.1,78.1,81.8);
p.frameBounds = [rect];


(lib.tale5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale5_decor();
	this.instance.setTransform(-0.1,0.2,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale5_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.6,-58.7,87.5,118.3);
p.frameBounds = [rect];


(lib.tale4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale4_decor();
	this.instance.setTransform(-0.7,0.4,1,1,0,0,0,-0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale4_base();
	this.body_mc.setTransform(-0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-55,95.2,111.7);
p.frameBounds = [rect];


(lib.tale3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale3_decor();
	this.instance.setTransform(0.6,-0.1,1,1,0,0,0,0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale3_base();
	this.body_mc.setTransform(0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.4,-46.8,100.4,93.9);
p.frameBounds = [rect];


(lib.tale2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale2_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale2_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.5,-31.8,63.6,63.7);
p.frameBounds = [rect];


(lib.tale1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.tale1_decor();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.tale1_base();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-36.6,93.1,73.4);
p.frameBounds = [rect];


(lib.tale_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.tale1();

	this.body_2 = new lib.tale2();
	this.body_2.setTransform(-42.9,25);

	this.body_3 = new lib.tale3();
	this.body_3.setTransform(9.9,-4.6,1,1,0,0,0,0.6,-0.1);

	this.body_4 = new lib.tale4();
	this.body_4.setTransform(9.9,-10.6,1,1,0,0,0,-0.7,0.4);

	this.body_5 = new lib.tale5();
	this.body_5.setTransform(-2.4,-5.2,1,1,0,0,0,-0.1,0.2);

	this.body_6 = new lib.tale6();
	this.body_6.setTransform(-4.2,13.1);

	this.body_7 = new lib.tale7();
	this.body_7.setTransform(-4,12.3);

	this.body_8 = new lib.tale8();
	this.body_8.setTransform(20.5,-14.6);

	this.body_9 = new lib.tale9();
	this.body_9.setTransform(21.4,5.7);

	this.body_10 = new lib.tale10();
	this.body_10.setTransform(-3,-7.5);

	this.body_11 = new lib.tale11();
	this.body_11.setTransform(-32.5,36.7);

	this.body_12 = new lib.tale12();
	this.body_12.setTransform(4.2,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-36.6,93.1,73.4);
p.frameBounds = [rect, new cjs.Rectangle(-74.5,-6.9,63.6,63.7), new cjs.Rectangle(-40.1,-51.3,100.4,93.9), new cjs.Rectangle(-36.9,-66,95.2,111.7), new cjs.Rectangle(-45.9,-64.1,87.4,118.3), new cjs.Rectangle(-43.2,-28.1,78.1,81.8), new cjs.Rectangle(-26.8,-20.6,45.7,65.8), new cjs.Rectangle(-37,-75.2,115.2,120.6), new cjs.Rectangle(-41,-40.6,124.6,93.4), new cjs.Rectangle(-46.7,-59.4,87.3,103.8), new cjs.Rectangle(-65,2.8,65.3,67.8), new cjs.Rectangle(-46.4,-36.5,100.9,77.6), null];


(lib.tail_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.star_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.star_title_1_mc();
	this.instance.setTransform(85,0,0.667,0.667,10);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.79,scaleY:0.79,rotation:9.8,x:85.1,alpha:0.672},10).to({scaleX:0.67,scaleY:0.67,rotation:10,x:85,alpha:1},5).wait(25).to({alpha:0.012},5).wait(1));

	// animation
	this.instance_1 = new lib.star_title_1_mc();
	this.instance_1.setTransform(-0.2,0,0.833,0.833,-10,0,0,-0.3,-0.1);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:1.01,scaleY:1.01,rotation:-9.8,x:-0.3,alpha:0.672},10).to({scaleX:0.83,scaleY:0.83,rotation:-10,x:-0.2,alpha:1},5).wait(35).to({alpha:0.012},5).wait(11));

	// animation
	this.instance_2 = new lib.star_title_1_mc();
	this.instance_2.setTransform(-80.1,29.9,0.667,0.667,-30,0,0,-0.1,-0.3);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.79,scaleY:0.79,rotation:-29.9,alpha:0.648},9).to({scaleX:0.67,scaleY:0.67,rotation:-30,alpha:1},5).wait(45).to({alpha:0.012},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137,-59.1,266.6,143.7);
p.frameBounds = [rect, new cjs.Rectangle(-138.1,-59.1,267.8,144.6), new cjs.Rectangle(-139.3,-59.1,268.9,145.8), new cjs.Rectangle(-140.4,-59.1,270,146.9), new cjs.Rectangle(-141.6,-59.1,271.3,148.1), new cjs.Rectangle(-142.9,-59.1,272.5,149.2), new cjs.Rectangle(-144.1,-59.1,273.8,150.4), new cjs.Rectangle(-145.3,-59.1,275,151.5), new cjs.Rectangle(-146.5,-59.1,276.2,152.7), new cjs.Rectangle(-147.8,-59.1,277.5,154), new cjs.Rectangle(-145.5,-59.1,275.2,151.8), new cjs.Rectangle(-143.4,-59.1,273,149.7), new cjs.Rectangle(-141.2,-59.1,270.9,147.6), new cjs.Rectangle(-139,-59.1,268.6,145.6), rect=new cjs.Rectangle(-137,-59.1,266.6,143.7), rect, rect, rect, rect, rect, new cjs.Rectangle(-137,-60.2,266.6,144.8), new cjs.Rectangle(-137,-61.5,266.6,146), new cjs.Rectangle(-137,-62.7,266.6,147.3), new cjs.Rectangle(-137,-63.9,266.6,148.5), new cjs.Rectangle(-137,-65.2,266.6,149.7), new cjs.Rectangle(-137,-66.4,266.6,151), new cjs.Rectangle(-137,-67.7,266.6,152.2), new cjs.Rectangle(-137,-68.9,266.6,153.5), new cjs.Rectangle(-137,-70.1,266.6,154.7), new cjs.Rectangle(-137,-71.4,266.6,156), new cjs.Rectangle(-137,-68.9,266.6,153.5), new cjs.Rectangle(-137,-66.4,266.6,151), new cjs.Rectangle(-137,-63.9,266.6,148.5), new cjs.Rectangle(-137,-61.5,266.6,146), rect=new cjs.Rectangle(-137,-59.1,266.6,143.7), rect, rect, rect, rect, rect, new cjs.Rectangle(-137,-59.1,267.3,143.7), new cjs.Rectangle(-137,-59.1,268.2,143.7), new cjs.Rectangle(-137,-59.1,269,143.7), new cjs.Rectangle(-137,-59.1,269.9,143.7), new cjs.Rectangle(-137,-59.1,270.8,143.7), new cjs.Rectangle(-137,-59.1,271.6,143.7), new cjs.Rectangle(-137,-59.1,272.4,143.7), new cjs.Rectangle(-137,-59.1,273.2,143.7), new cjs.Rectangle(-137,-59.1,274.1,143.7), new cjs.Rectangle(-137,-59.1,275,143.7), new cjs.Rectangle(-137,-59.1,273.2,143.7), new cjs.Rectangle(-137,-59.1,271.6,143.7), new cjs.Rectangle(-137,-59.1,269.9,143.7), new cjs.Rectangle(-137,-59.1,268.1,143.7), rect=new cjs.Rectangle(-137,-59.1,266.6,143.7), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-136.9,-59.1,266.5,143.5), rect, rect, rect, rect=new cjs.Rectangle(-137,-59.1,266.6,143.7), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-137,-59,266.6,143.5), rect, rect, rect, rect=new cjs.Rectangle(-137,-59.1,266.6,143.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shoes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base4();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-20.1,153,40.3);
p.frameBounds = [rect];


(lib.shoes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base3();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.6,-23.3,162.8,47);
p.frameBounds = [rect];


(lib.shoes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor2();
	this.instance.setTransform(0.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base2();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.4,-19.9,159.8,40.3);
p.frameBounds = [rect];


(lib.shoes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shoes_decor1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.shoes_base1();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-18.1,154.1,36);
p.frameBounds = [rect];


(lib.shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.shoes1();

	this.body_2 = new lib.shoes2();
	this.body_2.setTransform(0.4,2);

	this.body_3 = new lib.shoes3();
	this.body_3.setTransform(0.4,8.4);

	this.body_4 = new lib.shoes4();
	this.body_4.setTransform(0.2,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-18.1,154.1,36);
p.frameBounds = [rect, new cjs.Rectangle(-79,-18,159.8,40.4), new cjs.Rectangle(-81.2,-15,162.8,47), new cjs.Rectangle(-76,-8.8,153,40.3), null];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.pattern_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.option_wings_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing12();
	this.instance.setTransform(0,0.4,0.8,0.8,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing11();
	this.instance.setTransform(0.1,0.4,0.893,0.893,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing10();
	this.instance.setTransform(0.1,0.4,0.702,0.702,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing9();
	this.instance.setTransform(0.1,0.4,0.938,0.938,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing8();
	this.instance.setTransform(0.1,0.4,0.702,0.702,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing7();
	this.instance.setTransform(0,-7.6,0.755,0.755,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing6();
	this.instance.setTransform(-0.9,-0.6,0.702,0.702,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing5();
	this.instance.setTransform(0,0.4,0.926,0.926,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing4();
	this.instance.setTransform(-0.9,0.4,0.833,0.833,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing3();
	this.instance.setTransform(0.1,0.4,0.88,0.88,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing2();
	this.instance.setTransform(-2.9,0.4,0.702,0.702,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_wings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_wing1();
	this.instance.setTransform(0.1,-0.6,1.291,1.291,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.pattern_8_img();
	this.instance.setTransform(-62,-65,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.pattern_7_img();
	this.instance.setTransform(-62,-65,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 4
	this.instance = new lib.pattern_6_img();
	this.instance.setTransform(-62,-65,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 4
	this.instance = new lib.pattern_5_img();
	this.instance.setTransform(-62,-65,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 4
	this.instance = new lib.pattern_4_img();
	this.instance.setTransform(-62,-65,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 4
	this.instance = new lib.pattern_3_img();
	this.instance.setTransform(-62,-65,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 4
	this.instance = new lib.pattern_2_img();
	this.instance.setTransform(-62,-65,0.812,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_uzor_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.pattern_1_img();
	this.instance.setTransform(-62,-65,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale12();
	this.instance.setTransform(7.1,0.1,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale11();
	this.instance.setTransform(-0.9,-2.9,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale10();
	this.instance.setTransform(0.4,0.1,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale9();
	this.instance.setTransform(0.4,1.8,0.887,0.887,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale8();
	this.instance.setTransform(3.1,0.1,0.862,0.862,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale7();
	this.instance.setTransform(0.4,0.1,1.216,1.216,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale6();
	this.instance.setTransform(0.3,1.4,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale5();
	this.instance.setTransform(-1.9,-0.9,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale4();
	this.instance.setTransform(3.1,-0.9,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale3();
	this.instance.setTransform(3.1,-0.9,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale2();
	this.instance.setTransform(1.1,-1.9,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_tail_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.tale1();
	this.instance.setTransform(3.1,0.1,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.shoes_4_img();
	this.instance.setTransform(-55,-8,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.shoes_3_img();
	this.instance.setTransform(-55,-10,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.shoes_2_img();
	this.instance.setTransform(-55,-10,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_shoes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.shoes_1_img();
	this.instance.setTransform(-55,-9,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck8();
	this.instance.setTransform(-0.2,0.3,0.966,0.966,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck7();
	this.instance.setTransform(0.3,2.7,1.016,1.016,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck6();
	this.instance.setTransform(-0.5,0.3,0.893,0.893,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck5();
	this.instance.setTransform(-0.6,1.5,0.697,0.696,0,0,0,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck4();
	this.instance.setTransform(1.4,-1.9,1.129,1.129,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck3();
	this.instance.setTransform(0.2,-0.1,0.967,0.967,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck2();
	this.instance.setTransform(-1.1,1.1,0.59,0.59,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_neck_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.neck1();
	this.instance.setTransform(0,6,0.744,0.744,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face8();
	this.instance.setTransform(-0.1,0.2,0.735,0.735,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face7();
	this.instance.setTransform(-0.6,0.3,0.735,0.735,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face6();
	this.instance.setTransform(-0.7,1.8,0.579,0.579,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face5();
	this.instance.setTransform(-0.5,1,0.735,0.735,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face4();
	this.instance.setTransform(-0.3,0.4,0.477,0.477,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face3();
	this.instance.setTransform(-0.7,0,0.735,0.735,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face2();
	this.instance.setTransform(1.9,2.4,0.661,0.661,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_face_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.dragon_face1();
	this.instance.setTransform(0.1,0,1,1,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_8_img();
	this.instance.setTransform(-58,-30,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_7_img();
	this.instance.setTransform(-51,-50,0.847,0.847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_6_img();
	this.instance.setTransform(-60,-27,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_5_img();
	this.instance.setTransform(-49,-50,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_4_img();
	this.instance.setTransform(-60,-28,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_3_img();
	this.instance.setTransform(-60,-27,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_2_img();
	this.instance.setTransform(-60,-29,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_ears_deco_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.ears_1_img();
	this.instance.setTransform(-60,-42,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale8();
	this.instance.setTransform(1.7,-0.3,0.779,0.777,0,0,0,0.9,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale7();
	this.instance.setTransform(0.8,-1,0.754,0.753,0,0,0,1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale6();
	this.instance.setTransform(1.2,-0.4,1.28,1.279,0,0,0,1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale5();
	this.instance.setTransform(1.5,-0.1,0.802,0.802,0,0,0,0.8,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale4();
	this.instance.setTransform(1,-1.2,0.695,0.694,0,0,0,1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale3();
	this.instance.setTransform(2.9,-1,0.688,0.688,0,0,0,0.8,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale2();
	this.instance.setTransform(0.9,-0.9,1,1,0,0,0,0.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_decor_tale_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.decor_tale1();
	this.instance.setTransform(0.1,-0.1,1.262,1.262,0,0,0,1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon16_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon15_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon14_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon13_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon12_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon11_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon10_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon9_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon8_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon7_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon6_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon5_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon4_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon2_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.option_bg_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.bg_icon1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.bg_mc = new lib.bg_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.1,156.3,156.2);
p.frameBounds = [rect];


(lib.neck_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.neck1();

	this.instance_1 = new lib.neck2();
	this.instance_1.setTransform(43.9,18.3,1,1,0,0,0,-0.2,0);

	this.instance_2 = new lib.neck3();
	this.instance_2.setTransform(18.5,11.4);

	this.instance_3 = new lib.neck4();
	this.instance_3.setTransform(37.4,-1.3,1,1,0,0,0,0,0.2);

	this.instance_4 = new lib.neck5();
	this.instance_4.setTransform(53.4,-10.3);

	this.instance_5 = new lib.neck6();
	this.instance_5.setTransform(33.5,-4.4,1,1,0,0,0,0,0.3);

	this.instance_6 = new lib.neck7();
	this.instance_6.setTransform(38.3,43.5);

	this.instance_7 = new lib.neck8();
	this.instance_7.setTransform(36.7,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-50.7,161.3,101.5);
p.frameBounds = [rect, new cjs.Rectangle(-49,-59.8,186.5,156.3), new cjs.Rectangle(-38.7,-33.4,113.8,90), new cjs.Rectangle(-6.4,-37.3,88.6,71.3), new cjs.Rectangle(-32,-45.1,172.1,71.3), new cjs.Rectangle(-27.6,-43,123.1,76.3), new cjs.Rectangle(-11.5,4,98.7,77.8), new cjs.Rectangle(-8.8,-40.5,91.4,99.4), null];


(lib.neck_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.instance = new lib.hero_2_0_mc();
	this.instance.setTransform(780,320,0.833,0.833);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,x:540,y:340.1},15).wait(1));

	// hero_2
	this.instance_1 = new lib.hero_1_0_mc();
	this.instance_1.setTransform(780,320,0.833,0.833);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({scaleX:1,scaleY:1,x:540,y:340},15).wait(20).to({scaleX:0.83,scaleY:0.83,x:265,y:320},15).wait(1));

	// hero_3
	this.instance_2 = new lib.hero_3_0_mc();
	this.instance_2.setTransform(780,320,0.833,0.833);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,x:540,y:340.1},15).wait(20).to({scaleX:0.83,scaleY:0.83,x:265,y:320.1},15).wait(20).to({x:780},15).wait(1));

	// hero_1
	this.instance_3 = new lib.hero_2_0_mc();
	this.instance_3.setTransform(540,340);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({scaleX:0.83,scaleY:0.83,x:265,y:320},15).wait(20).to({x:780},15).wait(19).to({_off:true},1).wait(16));

	// hero_2
	this.instance_4 = new lib.hero_1_0_mc();
	this.instance_4.setTransform(265,320,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({x:780},15).wait(19).to({_off:true},1).wait(51));

	// hero_3
	this.instance_5 = new lib.hero_3_0_mc();
	this.instance_5.setTransform(780,320,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:true},1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(45.7,100,973.6,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(45.7,100,973.5,480), new cjs.Rectangle(80,101.3,926.3,474.7), new cjs.Rectangle(114.3,102.7,879.3,469.4), new cjs.Rectangle(148.7,104,832.1,464), new cjs.Rectangle(183,105.4,784.9,458.7), new cjs.Rectangle(185.8,106.7,769.4,453.4), new cjs.Rectangle(170.5,108,771.9,448), new cjs.Rectangle(155.3,109.4,774.3,442.7), new cjs.Rectangle(140,109.4,776.7,442.7), new cjs.Rectangle(124.8,108.1,779.1,448), new cjs.Rectangle(109.5,106.7,781.6,453.3), new cjs.Rectangle(94.3,105.4,784,458.7), new cjs.Rectangle(79.1,104.1,817.3,464), new cjs.Rectangle(63.8,102.7,866.9,469.3), new cjs.Rectangle(48.6,101.4,916.4,474.7), rect=new cjs.Rectangle(33.3,100,966,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(67.7,101.3,918.6,474.7), new cjs.Rectangle(102,102.7,871.2,469.3), new cjs.Rectangle(136.3,104,823.8,464), new cjs.Rectangle(170.7,105.3,776.3,458.7), new cjs.Rectangle(177.3,106.7,756.7,453.3), new cjs.Rectangle(162.2,108,758.7,448), new cjs.Rectangle(147,109.4,760.8,442.7), new cjs.Rectangle(131.9,109.4,762.8,442.7), new cjs.Rectangle(116.7,108.1,764.9,448), new cjs.Rectangle(101.6,106.7,767,453.3), new cjs.Rectangle(86.4,105.4,788,458.7), new cjs.Rectangle(71.3,104.1,837.5,464), new cjs.Rectangle(56.1,102.7,887,469.3), new cjs.Rectangle(41,101.4,936.4,474.7), rect=new cjs.Rectangle(25.9,100,985.9,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(60.2,101.3,938.6,474.7), new cjs.Rectangle(94.5,102.7,891.4,469.3), new cjs.Rectangle(128.8,104,844.1,464), new cjs.Rectangle(163.2,105.3,796.9,458.7), new cjs.Rectangle(197.5,106.7,749.7,453.3), new cjs.Rectangle(184.4,108,749.9,448), new cjs.Rectangle(169,109.4,752.3,442.7), new cjs.Rectangle(153.6,109.4,754.8,442.7), new cjs.Rectangle(138.2,108.1,757.3,448), new cjs.Rectangle(122.8,106.7,759.8,453.3), new cjs.Rectangle(107.4,105.4,774.4,458.7), new cjs.Rectangle(92,104.1,824.2,464), new cjs.Rectangle(76.5,102.7,874,469.3), new cjs.Rectangle(61.2,101.4,923.6,474.7), new cjs.Rectangle(45.7,100,973.5,480)];


(lib.hero_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.7,-206.2,423.9,412);
p.frameBounds = [rect];


(lib.faceart_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.eyes8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes8_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes8_base();
	this.body_mc.setTransform(0.9,6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-49.5,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes7_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes7_base();
	this.body_mc.setTransform(0.9,6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-49.3,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes6_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes6_base();
	this.body_mc.setTransform(-0.6,7.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-49.3,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes5_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes5_base();
	this.body_mc.setTransform(0.9,6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.3,-49,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes4_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes4_base();
	this.body_mc.setTransform(-6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-48.9,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes3_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes3_base();
	this.body_mc.setTransform(1.6,4.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.1,-48.8,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes2_decor();
	this.instance.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes2_base();
	this.body_mc.setTransform(1.2,9.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.2,-48.9,157.7,97.9);
p.frameBounds = [rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.eyes1_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.eyes1_base();
	this.body_mc.setTransform(0.9,6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-48.8,157.7,98.7);
p.frameBounds = [rect];


(lib.eyes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.eyes1();

	this.body_2 = new lib.eyes2();

	this.body_3 = new lib.eyes3();

	this.body_4 = new lib.eyes4();

	this.body_5 = new lib.eyes5();

	this.body_6 = new lib.eyes6();

	this.body_7 = new lib.eyes7();

	this.body_8 = new lib.eyes8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-48.8,157.7,98.7);
p.frameBounds = [rect, new cjs.Rectangle(-79.2,-48.9,157.7,97.9), new cjs.Rectangle(-79.1,-48.8,157.7,98.7), new cjs.Rectangle(-79.2,-48.9,157.7,98.7), new cjs.Rectangle(-79.3,-49,157.7,98.7), rect=new cjs.Rectangle(-79.2,-49.3,157.7,98.7), rect, new cjs.Rectangle(-79,-49.5,157.7,98.7)];


(lib.ears_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_8_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_8_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.4,-53,266.4,105.9);
p.frameBounds = [rect];


(lib.ears_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_7_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_7_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.8,-58.4,199.5,116.8);
p.frameBounds = [rect];


(lib.ears_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_6_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_6_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.9,-33,240.8,65.7);
p.frameBounds = [rect];


(lib.ears_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_5_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_5_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.6,-59,198.6,118.1);
p.frameBounds = [rect];


(lib.ears_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_4_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_4_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-40.4,222.9,80.3);
p.frameBounds = [rect];


(lib.ears_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_3_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_3_base();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.4,-37.6,205.8,75.2);
p.frameBounds = [rect];


(lib.ears_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_2_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_2_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.6,-51.1,239.1,101.8);
p.frameBounds = [rect];


(lib.ears_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ears_1_decor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ears_1_base();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.9,-57.5,199.8,115.3);
p.frameBounds = [rect];


(lib.ears_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.dragon_wing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dragon_wing1();

	this.instance_1 = new lib.dragon_wing2();
	this.instance_1.setTransform(66.3,-29.9);

	this.instance_2 = new lib.dragon_wing3();
	this.instance_2.setTransform(33.3,-2.2);

	this.instance_3 = new lib.dragon_wing4();
	this.instance_3.setTransform(42.3,1.3);

	this.instance_4 = new lib.dragon_wing5();
	this.instance_4.setTransform(33.3,2.4);

	this.instance_5 = new lib.dragon_wing6();
	this.instance_5.setTransform(51.2,-26.5);

	this.instance_6 = new lib.dragon_wing7();
	this.instance_6.setTransform(49,-35.8);

	this.instance_7 = new lib.dragon_wing8();
	this.instance_7.setTransform(74.3,-16.5);

	this.instance_8 = new lib.dragon_wing9();
	this.instance_8.setTransform(27.2,6.3);

	this.instance_9 = new lib.dragon_wing10();
	this.instance_9.setTransform(74,-9.9);

	this.instance_10 = new lib.dragon_wing11();
	this.instance_10.setTransform(32.9,29.1);

	this.instance_11 = new lib.dragon_wing12();
	this.instance_11.setTransform(24.7,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-37.9,49.7,75.6);
p.frameBounds = [rect, new cjs.Rectangle(-11.1,-95.6,154.8,131.1), new cjs.Rectangle(-16,-65.1,99.4,125.3), new cjs.Rectangle(-24.2,-50.5,133.9,104.4), new cjs.Rectangle(-11.9,-56.4,91.5,118.8), new cjs.Rectangle(-21.8,-90.2,146.9,127.5), new cjs.Rectangle(-1.2,-122.1,100.1,172.1), new cjs.Rectangle(-0.5,-63.5,150.5,94.3), new cjs.Rectangle(-0.5,-44.4,56.2,100.8), new cjs.Rectangle(10.1,-54.1,128.1,87.9), new cjs.Rectangle(-16.7,-1.9,99.4,62.7), new cjs.Rectangle(-41.2,4,132.5,66.3), null];


(lib.dragon_face_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dragon_face1();

	this.instance_1 = new lib.dragon_face2();
	this.instance_1.setTransform(80.3,-53.3);

	this.instance_2 = new lib.dragon_face3();
	this.instance_2.setTransform(4.1,5.7);

	this.instance_3 = new lib.dragon_face4();
	this.instance_3.setTransform(12.8,-20.7);

	this.instance_4 = new lib.dragon_face5();
	this.instance_4.setTransform(6.3,-8.7);

	this.instance_5 = new lib.dragon_face6();
	this.instance_5.setTransform(13.5,-48.7);

	this.instance_6 = new lib.dragon_face7();
	this.instance_6.setTransform(9.3,-63.6);

	this.instance_7 = new lib.dragon_face8();
	this.instance_7.setTransform(9,-63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.7,-36.4,49.7,72.7);
p.frameBounds = [rect, new cjs.Rectangle(4.2,-122.3,151.2,136.8), new cjs.Rectangle(-50.4,-57.7,109.5,126.7), new cjs.Rectangle(-102.4,-88,230.4,133.2), new cjs.Rectangle(-29,-62,70.6,106.6), new cjs.Rectangle(-81.1,-114.5,190.1,132.5), new cjs.Rectangle(-20.9,-119.8,60.5,111.6), new cjs.Rectangle(-28.6,-127.2,74.2,126.7), null];


(lib.dragon_body_uzor_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_8_img();
	this.instance.setTransform(-210.9,-165.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_8();
	this.body_mc.setTransform(-104.6,-127.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210.9,-165.5,375.9,364.3);
p.frameBounds = [rect];


(lib.dragon_body_uzor_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_7_img();
	this.instance.setTransform(-208.7,-101.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_7();
	this.body_mc.setTransform(-18.3,29.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.2,-102.6,381.8,263.7);
p.frameBounds = [rect];


(lib.dragon_body_uzor_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_6_img();
	this.instance.setTransform(-190.2,-203.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_6();
	this.body_mc.setTransform(10.1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190.2,-203.7,400,400.6);
p.frameBounds = [rect];


(lib.dragon_body_uzor_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_5_img();
	this.instance.setTransform(-149.8,-17.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_5();
	this.body_mc.setTransform(20.6,87.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.8,-19,340,213.6);
p.frameBounds = [rect];


(lib.dragon_body_uzor_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_4_img();
	this.instance.setTransform(-194.7,-132.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_4();
	this.body_mc.setTransform(7.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.8,-132.7,404.6,336.5);
p.frameBounds = [rect];


(lib.dragon_body_uzor_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_3_img();
	this.instance.setTransform(-193.2,-205.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_3();
	this.body_mc.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.7,-205.8,405.9,411.9);
p.frameBounds = [rect];


(lib.dragon_body_uzor_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_2_img();
	this.instance.setTransform(-210.8,-205.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_2();
	this.body_mc.setTransform(0.3,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210.8,-205.5,423.4,351.5);
p.frameBounds = [rect];


(lib.dragon_body_uzor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.dragon_body_uzord_1_img();
	this.instance.setTransform(-211.3,-132.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.dragon_body_uzorbase_1();
	this.body_mc.setTransform(0.3,31.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.3,-132.7,421.1,328.3);
p.frameBounds = [rect];


(lib.dragon_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.hero_body_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.7,-206.2,423.9,412);
p.frameBounds = [rect];


(lib.decor_tale_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.decor_tale1();

	this.instance_1 = new lib.decor_tale2();
	this.instance_1.setTransform(68.1,13.6);

	this.instance_2 = new lib.decor_tale3();
	this.instance_2.setTransform(40.9,-27.4);

	this.instance_3 = new lib.decor_tale4();
	this.instance_3.setTransform(45.1,-21.3,1,1,0,0,0,0,-0.2);

	this.instance_4 = new lib.decor_tale5();
	this.instance_4.setTransform(42.8,-8.7);

	this.instance_5 = new lib.decor_tale6();
	this.instance_5.setTransform(58.1,16.8);

	this.instance_6 = new lib.decor_tale7();
	this.instance_6.setTransform(45.5,-14.7);

	this.instance_7 = new lib.decor_tale8();
	this.instance_7.setTransform(42.9,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.7,-17.6,71.3,34.6);
p.frameBounds = [rect, new cjs.Rectangle(24.9,-21.5,86.4,71.3), new cjs.Rectangle(-44.2,-57.3,169.2,60.5), new cjs.Rectangle(-40.2,-42.1,172.8,44.7), new cjs.Rectangle(-28.3,-25.5,142.6,33.1), new cjs.Rectangle(30.8,-5.6,54.7,44.7), new cjs.Rectangle(-34.1,-31.3,159.1,35.3), new cjs.Rectangle(-34.1,-31.2,154.1,37.5), null];


(lib.comb_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


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


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.star_title_2_mc();
	this.instance.setTransform(-45,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_title_img();
	this.instance_1.setTransform(-245,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-199.1,490,359.2);
p.frameBounds = [rect];


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_bg_panel_mc();
	this.instance.setTransform(175,225);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,450);
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
p.nominalBounds = rect = new cjs.Rectangle(-245,-199.1,490,359.2);
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
	this.instance.setTransform(0,0,1.167,1.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


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


(lib.panel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.bg_2 = new lib.option_bg_2_mc();
	this.bg_2.setTransform(255,95);

	this.bg_1 = new lib.option_bg_1_mc();
	this.bg_1.setTransform(95,95);

	this.bg_4 = new lib.option_bg_4_mc();
	this.bg_4.setTransform(255,255);

	this.bg_3 = new lib.option_bg_3_mc();
	this.bg_3.setTransform(95,255);

	this.bg_6 = new lib.option_bg_6_mc();
	this.bg_6.setTransform(255,95);

	this.bg_5 = new lib.option_bg_5_mc();
	this.bg_5.setTransform(95,95);

	this.bg_8 = new lib.option_bg_8_mc();
	this.bg_8.setTransform(255,255);

	this.bg_7 = new lib.option_bg_7_mc();
	this.bg_7.setTransform(95,255);

	this.bg_10 = new lib.option_bg_10_mc();
	this.bg_10.setTransform(255,95);

	this.bg_9 = new lib.option_bg_9_mc();
	this.bg_9.setTransform(95,95);

	this.bg_12 = new lib.option_bg_12_mc();
	this.bg_12.setTransform(255,255);

	this.bg_11 = new lib.option_bg_11_mc();
	this.bg_11.setTransform(95,255);

	this.bg_16 = new lib.option_bg_16_mc();
	this.bg_16.setTransform(256,255);

	this.bg_14 = new lib.option_bg_14_mc();
	this.bg_14.setTransform(255,95);

	this.bg_13 = new lib.option_bg_13_mc();
	this.bg_13.setTransform(95,95);

	this.bg_15 = new lib.option_bg_15_mc();
	this.bg_15.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_3},{t:this.bg_4},{t:this.bg_1},{t:this.bg_2}]}).to({state:[{t:this.bg_7},{t:this.bg_8},{t:this.bg_5},{t:this.bg_6}]},1).to({state:[{t:this.bg_11},{t:this.bg_12},{t:this.bg_9},{t:this.bg_10}]},1).to({state:[{t:this.bg_15},{t:this.bg_13},{t:this.bg_14},{t:this.bg_16}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,450);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.comb_0 = new lib.comb_0_mc();
	this.comb_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.comb_0).wait(2));

	// options
	this.comb_2 = new lib.option_decor_tale_2_mc();
	this.comb_2.setTransform(255,95);

	this.comb_1 = new lib.option_decor_tale_1_mc();
	this.comb_1.setTransform(95,95);

	this.comb_4 = new lib.option_decor_tale_4_mc();
	this.comb_4.setTransform(255,255);

	this.comb_3 = new lib.option_decor_tale_3_mc();
	this.comb_3.setTransform(95,255);

	this.comb_6 = new lib.option_decor_tale_6_mc();
	this.comb_6.setTransform(255,95);

	this.comb_5 = new lib.option_decor_tale_5_mc();
	this.comb_5.setTransform(95,95);

	this.comb_8 = new lib.option_decor_tale_8_mc();
	this.comb_8.setTransform(255,255);

	this.comb_7 = new lib.option_decor_tale_7_mc();
	this.comb_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.comb_3},{t:this.comb_4},{t:this.comb_1},{t:this.comb_2}]}).to({state:[{t:this.comb_7},{t:this.comb_8},{t:this.comb_5},{t:this.comb_6}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.faceart_0).wait(2));

	// options
	this.faceart_2 = new lib.option_face_2_mc();
	this.faceart_2.setTransform(255,95);

	this.faceart_1 = new lib.option_face_1_mc();
	this.faceart_1.setTransform(95,95);

	this.faceart_4 = new lib.option_face_4_mc();
	this.faceart_4.setTransform(255,255);

	this.faceart_3 = new lib.option_face_3_mc();
	this.faceart_3.setTransform(95,255);

	this.faceart_6 = new lib.option_face_6_mc();
	this.faceart_6.setTransform(255,95);

	this.faceart_5 = new lib.option_face_5_mc();
	this.faceart_5.setTransform(95,95);

	this.faceart_8 = new lib.option_face_8_mc();
	this.faceart_8.setTransform(255,255);

	this.faceart_7 = new lib.option_face_7_mc();
	this.faceart_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_3},{t:this.faceart_4},{t:this.faceart_1},{t:this.faceart_2}]}).to({state:[{t:this.faceart_7},{t:this.faceart_8},{t:this.faceart_5},{t:this.faceart_6}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.neck_0 = new lib.neck_0_mc();
	this.neck_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.neck_0).wait(2));

	// options
	this.neck_2 = new lib.option_neck_2_mc();
	this.neck_2.setTransform(255,95);

	this.neck_1 = new lib.option_neck_1_mc();
	this.neck_1.setTransform(95,95);

	this.neck_4 = new lib.option_neck_4_mc();
	this.neck_4.setTransform(255,255);

	this.neck_3 = new lib.option_neck_3_mc();
	this.neck_3.setTransform(95,255);

	this.neck_6 = new lib.option_neck_6_mc();
	this.neck_6.setTransform(255,95);

	this.neck_5 = new lib.option_neck_5_mc();
	this.neck_5.setTransform(95,95);

	this.neck_8 = new lib.option_neck_8_mc();
	this.neck_8.setTransform(255,255);

	this.neck_7 = new lib.option_neck_7_mc();
	this.neck_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.neck_3},{t:this.neck_4},{t:this.neck_1},{t:this.neck_2}]}).to({state:[{t:this.neck_7},{t:this.neck_8},{t:this.neck_5},{t:this.neck_6}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.shoes_0).to({_off:true},1).wait(1));

	// options
	this.shoes_2 = new lib.option_shoes_2_mc();
	this.shoes_2.setTransform(255,95);

	this.shoes_1 = new lib.option_shoes_1_mc();
	this.shoes_1.setTransform(95,95);

	this.shoes_4 = new lib.option_shoes_4_mc();
	this.shoes_4.setTransform(255,255);

	this.shoes_3 = new lib.option_shoes_3_mc();
	this.shoes_3.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_1},{t:this.shoes_2}]}).to({state:[]},1).wait(1));

	// palette
	this.color_shoes = new lib.color_picker_mc();
	this.color_shoes.setTransform(15,20);
	this.color_shoes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(1).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, new cjs.Rectangle(0,0,350,450)];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// no
	this.tail_0 = new lib.tail_0_mc();
	this.tail_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.tail_0).to({_off:true},3).wait(1));

	// options
	this.tail_2 = new lib.option_tail_2_mc();
	this.tail_2.setTransform(255,95);

	this.tail_1 = new lib.option_tail_1_mc();
	this.tail_1.setTransform(95,95);

	this.tail_4 = new lib.option_tail_4_mc();
	this.tail_4.setTransform(255,255);

	this.tail_3 = new lib.option_tail_3_mc();
	this.tail_3.setTransform(95,255);

	this.tail_6 = new lib.option_tail_6_mc();
	this.tail_6.setTransform(255,95);

	this.tail_5 = new lib.option_tail_5_mc();
	this.tail_5.setTransform(95,95);

	this.tail_8 = new lib.option_tail_8_mc();
	this.tail_8.setTransform(255,255);

	this.tail_7 = new lib.option_tail_7_mc();
	this.tail_7.setTransform(95,255);

	this.tail_10 = new lib.option_tail_10_mc();
	this.tail_10.setTransform(255,95);

	this.tail_9 = new lib.option_tail_9_mc();
	this.tail_9.setTransform(95,95);

	this.tail_12 = new lib.option_tail_12_mc();
	this.tail_12.setTransform(255,255);

	this.tail_11 = new lib.option_tail_11_mc();
	this.tail_11.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tail_3},{t:this.tail_4},{t:this.tail_1},{t:this.tail_2}]}).to({state:[{t:this.tail_7},{t:this.tail_8},{t:this.tail_5},{t:this.tail_6}]},1).to({state:[{t:this.tail_11},{t:this.tail_12},{t:this.tail_9},{t:this.tail_10}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_tail = new lib.color_picker_mc();
	this.color_tail.setTransform(15,20);
	this.color_tail._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_tail).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,350,450)];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.wings_0).wait(3));

	// options
	this.wings_2 = new lib.option_wings_2_mc();
	this.wings_2.setTransform(255,95);

	this.wings_1 = new lib.option_wings_1_mc();
	this.wings_1.setTransform(95,95);

	this.wings_4 = new lib.option_wings_4_mc();
	this.wings_4.setTransform(255,255);

	this.wings_3 = new lib.option_wings_3_mc();
	this.wings_3.setTransform(95,255);

	this.wings_6 = new lib.option_wings_6_mc();
	this.wings_6.setTransform(255,95);

	this.wings_5 = new lib.option_wings_5_mc();
	this.wings_5.setTransform(95,95);

	this.wings_8 = new lib.option_wings_8_mc();
	this.wings_8.setTransform(255,255);

	this.wings_7 = new lib.option_wings_7_mc();
	this.wings_7.setTransform(95,255);

	this.wings_10 = new lib.option_wings_10_mc();
	this.wings_10.setTransform(255,95);

	this.wings_9 = new lib.option_wings_9_mc();
	this.wings_9.setTransform(95,95);

	this.wings_12 = new lib.option_wings_12_mc();
	this.wings_12.setTransform(255,255);

	this.wings_11 = new lib.option_wings_11_mc();
	this.wings_11.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wings_3},{t:this.wings_4},{t:this.wings_1},{t:this.wings_2}]}).to({state:[{t:this.wings_7},{t:this.wings_8},{t:this.wings_5},{t:this.wings_6}]},1).to({state:[{t:this.wings_11},{t:this.wings_12},{t:this.wings_9},{t:this.wings_10}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, rect, rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.ears_0 = new lib.ears_0_mc();
	this.ears_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.ears_0).to({_off:true},2).wait(1));

	// options
	this.ears_2 = new lib.option_ears_deco_2_mc();
	this.ears_2.setTransform(255,95);

	this.ears_1 = new lib.option_ears_deco_1_mc();
	this.ears_1.setTransform(95,95);

	this.ears_4 = new lib.option_ears_deco_4_mc();
	this.ears_4.setTransform(255,255);

	this.ears_3 = new lib.option_ears_deco_3_mc();
	this.ears_3.setTransform(95,255);

	this.ears_6 = new lib.option_ears_deco_6_mc();
	this.ears_6.setTransform(255,95);

	this.ears_5 = new lib.option_ears_deco_5_mc();
	this.ears_5.setTransform(95,95);

	this.ears_8 = new lib.option_ears_deco_8_mc();
	this.ears_8.setTransform(255,255);

	this.ears_7 = new lib.option_ears_deco_7_mc();
	this.ears_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ears_3},{t:this.ears_4},{t:this.ears_1},{t:this.ears_2}]}).to({state:[{t:this.ears_7},{t:this.ears_8},{t:this.ears_5},{t:this.ears_6}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_ears = new lib.color_picker_mc();
	this.color_ears.setTransform(15,20);
	this.color_ears._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_ears).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, rect, new cjs.Rectangle(0,0,350,450)];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.pattern_0 = new lib.pattern_0_mc();
	this.pattern_0.setTransform(339,95);

	this.timeline.addTween(cjs.Tween.get(this.pattern_0).to({_off:true},2).wait(1));

	// options
	this.pattern_2 = new lib.option_uzor_2_mc();
	this.pattern_2.setTransform(255,95);

	this.pattern_1 = new lib.option_uzor_1_mc();
	this.pattern_1.setTransform(95,95);

	this.pattern_4 = new lib.option_uzor_4_mc();
	this.pattern_4.setTransform(255,255);

	this.pattern_3 = new lib.option_uzor_3_mc();
	this.pattern_3.setTransform(95,255);

	this.pattern_6 = new lib.option_uzor_6_mc();
	this.pattern_6.setTransform(255,95);

	this.pattern_5 = new lib.option_uzor_5_mc();
	this.pattern_5.setTransform(95,95);

	this.pattern_8 = new lib.option_uzor_8_mc();
	this.pattern_8.setTransform(255,255);

	this.pattern_7 = new lib.option_uzor_7_mc();
	this.pattern_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pattern_3},{t:this.pattern_4},{t:this.pattern_1},{t:this.pattern_2}]}).to({state:[{t:this.pattern_7},{t:this.pattern_8},{t:this.pattern_5},{t:this.pattern_6}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_pattern = new lib.color_picker_mc();
	this.color_pattern.setTransform(15,20);
	this.color_pattern._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_pattern).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,359,450);
p.frameBounds = [rect, rect, new cjs.Rectangle(0,0,350,450)];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_skin = new lib.color_picker_mc();
	this.color_skin.setTransform(15,20);

	this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,450);
p.frameBounds = [rect];


(lib.option_eyes_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(65,-65);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.eyes8();
	this.instance.setTransform(0.1,0.5,0.698,0.697,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Слой 2
	this.instance = new lib.eyes7();
	this.instance.setTransform(0.3,0.3,0.698,0.697,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Слой 2
	this.instance = new lib.eyes6();
	this.instance.setTransform(0.3,0.3,0.698,0.697,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Слой 2
	this.instance = new lib.eyes5();
	this.instance.setTransform(0.3,0.2,0.698,0.697,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Слой 2
	this.instance = new lib.eyes4();
	this.instance.setTransform(0.3,0,0.698,0.697,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Слой 2
	this.instance = new lib.eyes3();
	this.instance.setTransform(0.1,0,0.698,0.697,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Слой 2
	this.instance = new lib.eyes2();
	this.instance.setTransform(0.3,0.4,0.698,0.697,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Слой 2
	this.instance = new lib.eyes1();
	this.instance.setTransform(0.1,0,0.698,0.697,0,0,0,-0.1,0.5);

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


(lib.ears_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.ears_1();
	this.body_1.setTransform(0,0.1);

	this.body_2 = new lib.ears_2();
	this.body_2.setTransform(-5,-10.2);

	this.body_3 = new lib.ears_3();
	this.body_3.setTransform(0.2,-21);

	this.body_4 = new lib.ears_4();
	this.body_4.setTransform(2.6,-37.7);

	this.body_5 = new lib.ears_5();
	this.body_5.setTransform(0.4,2.5);

	this.body_6 = new lib.ears_6();
	this.body_6.setTransform(3.5,-41.6);

	this.body_7 = new lib.ears_7();
	this.body_7.setTransform(-0.1,1.3);

	this.body_8 = new lib.ears_8();
	this.body_8.setTransform(10.4,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.9,-57.5,199.8,115.3);
p.frameBounds = [rect, new cjs.Rectangle(-124.6,-61.4,239.1,101.8), new cjs.Rectangle(-102.2,-58.6,205.8,75.2), new cjs.Rectangle(-108.9,-78.1,222.9,80.3), new cjs.Rectangle(-99.2,-56.5,198.6,118.1), new cjs.Rectangle(-116.4,-74.6,240.8,65.6), new cjs.Rectangle(-99.9,-57.1,199.5,116.8), new cjs.Rectangle(-123,-70.7,266.4,105.9), null];


(lib.dragon_body_uzor_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.mouth_img();
	this.instance.setTransform(-134,-1,0.717,0.717);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},3).wait(2));

	// body
	this.body_1 = new lib.dragon_body_uzor_1();

	this.body_2 = new lib.dragon_body_uzor_2();

	this.body_3 = new lib.dragon_body_uzor_3();

	this.body_4 = new lib.dragon_body_uzor_4();

	this.body_5 = new lib.dragon_body_uzor_5();

	this.body_6 = new lib.dragon_body_uzor_6();

	this.body_7 = new lib.dragon_body_uzor_7();

	this.body_8 = new lib.dragon_body_uzor_8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.3,-132.7,421.1,328.3);
p.frameBounds = [rect, new cjs.Rectangle(-210.8,-205.5,423.4,351.5), new cjs.Rectangle(-193.7,-205.8,405.9,411.9), new cjs.Rectangle(-194.8,-132.7,404.6,336.5), new cjs.Rectangle(-149.8,-19,340,213.6), new cjs.Rectangle(-190.2,-203.7,400,400.6), new cjs.Rectangle(-209.2,-102.6,381.8,263.7), new cjs.Rectangle(-210.9,-165.5,375.9,364.3), null];


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


(lib.category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_img();
	this.instance.setTransform(-24,-20,0.588,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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
	this.instance.setTransform(-25,-17,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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
	this.instance.setTransform(-23,-24,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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
	this.instance.setTransform(400.1,120.1,0.653,0.653,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.602;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(25,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_8_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1281.9,1281.9);
p.frameBounds = [rect];


(lib.subcategory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_img();
	this.instance.setTransform(-24,-20,0.588,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_4_2_img();
	this.instance.setTransform(-15,-22,0.555,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_2_img();
	this.instance.setTransform(-25,-17,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_2_img();
	this.instance.setTransform(-24,-17,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_2_img();
	this.instance.setTransform(-20,-21,0.661,0.662);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_4_1_img();
	this.instance.setTransform(-23,-21,0.562,0.562);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_6_1_img();
	this.instance.setTransform(-9.9,-30.2,0.555,0.556,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_5_1_img();
	this.instance.setTransform(-29,-19,0.725,0.726);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_3_1_img();
	this.instance.setTransform(-25,-13,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_2_1_img();
	this.instance.setTransform(-23,-24,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.subcategory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// icon
	this.instance = new lib.icon_1_1_img();
	this.instance.setTransform(-23,-24,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-150,90,300);
p.frameBounds = [rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(175,380);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.eyes_2 = new lib.option_eyes_2_mc();
	this.eyes_2.setTransform(255,95);

	this.eyes_1 = new lib.option_eyes_1_mc();
	this.eyes_1.setTransform(95,95);

	this.eyes_4 = new lib.option_eyes_4_mc();
	this.eyes_4.setTransform(255,255);

	this.eyes_3 = new lib.option_eyes_3_mc();
	this.eyes_3.setTransform(95,255);

	this.eyes_6 = new lib.option_eyes_6_mc();
	this.eyes_6.setTransform(255,95);

	this.eyes_5 = new lib.option_eyes_5_mc();
	this.eyes_5.setTransform(95,95);

	this.eyes_8 = new lib.option_eyes_8_mc();
	this.eyes_8.setTransform(255,255);

	this.eyes_7 = new lib.option_eyes_7_mc();
	this.eyes_7.setTransform(95,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_1},{t:this.eyes_2}]}).to({state:[{t:this.eyes_7},{t:this.eyes_8},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_eyes = new lib.color_picker_mc();
	this.color_eyes.setTransform(15,20);
	this.color_eyes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_eyes).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,350,450);
p.frameBounds = [rect, rect, rect];


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.eyes = new lib.eyes_all();
	this.eyes.setTransform(-133.7,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// faceart
	this.faceart = new lib.dragon_face_all();
	this.faceart.setTransform(-150.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.faceart).wait(1));

	// ears
	this.ears = new lib.ears_all();
	this.ears.setTransform(-127.2,-151.2);

	this.timeline.addTween(cjs.Tween.get(this.ears).wait(1));

	// neck
	this.neck = new lib.neck_all();
	this.neck.setTransform(-161.2,78.8);

	this.timeline.addTween(cjs.Tween.get(this.neck).wait(1));

	// wings
	this.wings = new lib.dragon_wing();
	this.wings.setTransform(-51.2,40.2);

	this.timeline.addTween(cjs.Tween.get(this.wings).wait(1));

	// comb
	this.comb = new lib.decor_tale_all();
	this.comb.setTransform(51.2,106.4);

	this.timeline.addTween(cjs.Tween.get(this.comb).wait(1));

	// shoes
	this.shoes = new lib.shoes_all();
	this.shoes.setTransform(-71.9,176.1);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// pattern
	this.pattern = new lib.dragon_body_uzor_all();
	this.pattern.setTransform(-30.2,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.pattern).wait(1));

	// skin
	this.skin = new lib.dragon_body();
	this.skin.setTransform(-30.2,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// tail
	this.tail = new lib.tale_all();
	this.tail.setTransform(196.1,55.5);

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242,-208.7,484.9,413.7);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(400,700,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(2));

	// heroes
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(480.4,338.1,1,1,0,0,0,0.4,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({skewY:180,x:314.6},0).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,733.4);
p.frameBounds = [rect, rect];


(lib.panels_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hero_1_category_1_subcategory_1:0,hero_1_category_1_subcategory_2:1,hero_1_category_1_subcategory_3:2,hero_1_category_1_subcategory_4:3,hero_1_category_1_subcategory_5:4,hero_1_category_1_subcategory_6:5,hero_1_category_2_subcategory_1:6,hero_1_category_2_subcategory_2:7,hero_1_category_2_subcategory_3:8,hero_1_category_2_subcategory_4:9,hero_1_category_3_subcategory_1:10});

	// category
	this.category_3 = new lib.category_3_mc();
	this.category_3.setTransform(-40,175);

	this.category_2 = new lib.category_2_mc();
	this.category_2.setTransform(-40,105);

	this.category_1 = new lib.category_1_mc();
	this.category_1.setTransform(-40,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.category_1},{t:this.category_2},{t:this.category_3}]}).wait(11));

	// subcategory
	this.subcategory_4_1 = new lib.subcategory_1_41_mc();
	this.subcategory_4_1.setTransform(170,-40);

	this.subcategory_6_1 = new lib.subcategory_1_5_mc();
	this.subcategory_6_1.setTransform(310,-40);

	this.subcategory_5_1 = new lib.subcategory_1_4_mc();
	this.subcategory_5_1.setTransform(240,-40);

	this.subcategory_3_1 = new lib.subcategory_1_3_mc();
	this.subcategory_3_1.setTransform(100,-40);

	this.subcategory_2_1 = new lib.subcategory_1_2_mc();
	this.subcategory_2_1.setTransform(30,-40);

	this.subcategory_1_1 = new lib.subcategory_1_1_mc();
	this.subcategory_1_1.setTransform(-40,-40);

	this.subcategory_4_2 = new lib.subcategory_2_4_mc();
	this.subcategory_4_2.setTransform(240,-40);

	this.subcategory_3_2 = new lib.subcategory_2_3_mc();
	this.subcategory_3_2.setTransform(170,-40);

	this.subcategory_2_2 = new lib.subcategory_2_2_mc();
	this.subcategory_2_2.setTransform(100,-40);

	this.subcategory_1_2 = new lib.subcategory_2_1_mc();
	this.subcategory_1_2.setTransform(30,-40);

	this.subcategory_1_3 = new lib.subcategory_4_1_mc();
	this.subcategory_1_3.setTransform(30,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subcategory_1_1},{t:this.subcategory_2_1},{t:this.subcategory_3_1},{t:this.subcategory_5_1},{t:this.subcategory_6_1},{t:this.subcategory_4_1}]}).to({state:[{t:this.subcategory_1_2},{t:this.subcategory_2_2},{t:this.subcategory_3_2},{t:this.subcategory_4_2}]},6).to({state:[{t:this.subcategory_1_3}]},4).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel_1}]}).to({state:[{t:this.panel_2}]},1).to({state:[{t:this.panel_3}]},1).to({state:[{t:this.panel_4}]},1).to({state:[{t:this.panel_5}]},1).to({state:[{t:this.panel_6}]},1).to({state:[{t:this.panel_7}]},1).to({state:[{t:this.panel_8}]},1).to({state:[{t:this.panel_9}]},1).to({state:[{t:this.panel_10}]},1).to({state:[{t:this.panel_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-190,440,640);
p.frameBounds = [rect, new cjs.Rectangle(-85,-190,444,640), new cjs.Rectangle(-85,-190,440,640), rect=new cjs.Rectangle(-85,-190,444,640), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,-190,435,640)];


(lib.ConstructorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.reset_btn = new lib.reset_btn();
	this.reset_btn.setTransform(535,540);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

	this.random_btn = new lib.random_btn();
	this.random_btn.setTransform(695,540);
	new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(220.1,540.1,0.625,0.625,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn},{t:this.random_btn},{t:this.reset_btn}]}).wait(1));

	// panels
	this.panels_mc = new lib.panels_mc();
	this.panels_mc.setTransform(440,90);

	this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

	// heroes
	this.hero_1 = new lib.hero_mc();
	this.hero_1.setTransform(300.4,283.1,1,1,0,0,0,0.4,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// podium
	this.podium_mc = new lib.podium_mc();
	this.podium_mc.setTransform(220,460,1,1,0,0,0,0,-60);

	this.timeline.addTween(cjs.Tween.get(this.podium_mc).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(220.1,700.1,0.833,0.833,0,0,0,0.1,0.1);
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
	this.instance.alpha = 0.301;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1078.3);
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
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();
	this.instance_2.setTransform(-1,1,1,1,0,0,0,-1,1);

	this.instance_3 = new lib.ConstructorScreen();
	this.instance_3.setTransform(-1,1,1,1,0,0,0,-1,1);

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

	this.instance_8 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_7},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1281.9,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1251.8), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1070), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,15,250,70), new cjs.Rectangle(-1000,0,2800,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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