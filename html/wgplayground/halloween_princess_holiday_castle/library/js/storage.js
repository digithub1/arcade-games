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
		{src:"library/images/castle_main_1_img.png", id:"castle_main_1_img"},
		{src:"library/images/front_house_1_img.png", id:"front_house_1_img"},
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
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,800,600]]},
		{name:"storage_atlas_3", frames: [[0,0,800,600]]},
		{name:"storage_atlas_4", frames: [[702,0,472,572],[0,0,700,458]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,200]]},
		{name:"storage_atlas_6", frames: [[572,0,570,420],[0,0,570,420]]},
		{name:"storage_atlas_7", frames: [[0,0,410,459],[412,0,400,407]]},
		{name:"storage_atlas_8", frames: [[402,0,500,300],[0,0,400,400]]},
		{name:"storage_atlas_9", frames: [[0,0,380,380],[382,0,380,380]]},
		{name:"storage_atlas_10", frames: [[0,0,620,220],[0,222,390,300],[392,222,390,300],[784,0,390,300]]},
		{name:"storage_atlas_11", frames: [[502,0,500,226],[0,228,500,226],[0,0,500,226],[502,228,500,226]]},
		{name:"storage_atlas_12", frames: [[0,0,394,254],[0,256,500,200],[396,0,500,200],[502,202,500,200]]},
		{name:"storage_atlas_13", frames: [[0,202,280,280],[282,202,280,280],[564,202,280,280],[846,202,280,280],[0,0,500,200],[502,0,500,200]]},
		{name:"storage_atlas_14", frames: [[282,0,280,280],[846,282,280,280],[282,282,280,280],[0,0,280,280],[0,282,280,280],[564,282,280,280],[846,0,280,280],[564,0,280,280]]},
		{name:"storage_atlas_15", frames: [[0,0,280,280],[846,0,280,280],[846,282,280,280],[282,282,280,280],[564,0,280,280],[0,282,280,280],[282,0,280,280],[564,282,280,280]]},
		{name:"storage_atlas_16", frames: [[0,0,280,280],[282,0,280,280],[564,0,280,280],[846,0,280,280],[0,282,280,280],[282,282,280,280],[564,282,390,200]]},
		{name:"storage_atlas_17", frames: [[796,404,190,190],[392,202,200,300],[594,202,200,300],[988,404,190,190],[0,404,280,177],[796,202,280,200],[0,0,390,200],[0,202,390,200],[392,0,390,200],[784,0,390,200]]},
		{name:"storage_atlas_18", frames: [[0,0,190,190],[192,192,180,180],[192,374,280,109],[192,485,280,97],[960,324,207,120],[1022,162,171,138],[474,354,160,160],[546,0,160,160],[536,162,160,160],[384,0,160,160],[0,384,190,190],[636,486,255,97],[960,446,180,120],[374,192,160,160],[0,192,190,190],[192,0,190,190],[708,0,160,160],[798,324,160,160],[870,0,160,160],[860,162,160,160],[636,324,160,160],[698,162,160,160],[1032,0,160,160]]},
		{name:"storage_atlas_19", frames: [[126,294,120,120],[359,172,120,120],[237,172,120,120],[248,294,120,120],[1091,166,89,140],[1087,308,89,140],[972,397,89,140],[1063,450,89,140],[370,294,120,120],[126,416,120,120],[248,416,120,120],[370,416,120,120],[727,0,174,100],[903,0,105,151],[980,275,105,119],[0,142,147,140],[0,0,147,140],[1114,0,86,164],[149,0,86,224],[0,284,124,141],[858,397,112,114],[0,427,121,140],[1010,0,102,142],[237,0,266,68],[237,70,178,100],[505,0,220,80],[847,153,120,120],[969,153,120,120],[492,448,120,120],[492,326,120,120],[614,224,120,120],[614,468,120,120],[736,275,120,120],[492,204,120,120],[725,102,120,120],[614,346,120,120],[481,82,120,120],[736,397,120,120],[858,275,120,120],[603,82,120,120]]},
		{name:"storage_atlas_20", frames: [[85,142,90,90],[0,345,80,41],[485,102,96,96],[387,48,96,96],[759,102,96,96],[289,48,96,96],[583,108,96,96],[1145,0,30,30],[1120,266,80,80],[177,310,86,80],[91,0,89,140],[0,0,89,140],[857,174,90,90],[375,146,90,90],[949,174,90,90],[965,38,94,101],[863,0,280,36],[182,0,105,115],[844,266,90,90],[177,218,90,90],[947,358,115,38],[1061,38,109,86],[361,238,90,90],[559,206,90,90],[857,141,280,31],[271,146,102,80],[467,200,90,90],[681,108,69,120],[1064,358,87,50],[269,228,90,90],[752,200,90,90],[1041,174,90,90],[651,230,90,90],[85,234,90,90],[182,117,87,99],[453,292,90,90],[357,330,90,65],[759,0,102,100],[547,0,108,100],[0,142,83,100],[545,298,90,90],[743,292,90,90],[936,266,90,90],[1028,266,90,90],[1133,174,64,50],[499,384,35,50],[1153,348,38,50],[863,38,100,99],[265,320,90,75],[657,0,100,106],[449,384,48,48],[289,0,256,46],[0,244,81,99],[835,358,110,52],[637,322,90,67],[83,326,90,66],[485,48,51,47]]}
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



(lib.animal_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animal_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.animal_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.animal_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.animal_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.animal_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.animal_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.background_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.background_counter_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blinking_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.blinking_star_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.castle_main_1_img = function() {
	this.initialize(img.castle_main_1_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,917,902);


(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.done_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.door_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.door_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.door_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.door_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.door_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.door_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.elsa_main_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.front_house_1_img = function() {
	this.initialize(img.front_house_1_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,640);


(lib.front_house_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.furniture_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.furniture_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.furniture_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.furniture_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.furniture_14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.furniture_15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.furniture_16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.furniture_17_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.furniture_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.furniture_19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.furniture_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.furniture_20_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.furniture_21_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.furniture_22_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.furniture_23_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.furniture_24_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.furniture_25_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.furniture_26_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.furniture_27_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.furniture_28_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.furniture_29_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.furniture_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.furniture_30_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.furniture_31_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.furniture_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.furniture_42_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.furniture_43_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.furniture_44_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.furniture_45_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.furniture_46_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.furniture_47_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.furniture_48_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.furniture_49_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.furniture_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.furniture_50_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.furniture_51_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.furniture_52_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.furniture_53_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.furniture_54_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.furniture_55_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.furniture_56_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.furniture_57_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.furniture_58_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.furniture_59_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.furniture_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.furniture_60_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.furniture_61_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.furniture_62_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.furniture_63_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.furniture_64_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.furniture_65_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.furniture_66_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.furniture_67_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.furniture_68_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.furniture_69_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.furniture_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.furniture_70_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.furniture_71_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.furniture_72_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.furniture_73_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.furniture_74_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.furniture_75_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.furniture_76_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.furniture_77_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.furniture_78_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.furniture_79_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.furniture_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.furniture_80_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.furniture_81_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.furniture_82_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.furniture_83_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.furniture_84_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.furniture_85_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.furniture_86_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.furniture_87_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.furniture_88_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.furniture_89_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.furniture_8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.furniture_90_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.furniture_91_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.furniture_92_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.furniture_93_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.furniture_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.icon_set_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.number_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.number_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.number_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.number_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.number_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.number_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.number_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.number_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.number_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.number_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.separator_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.substrate_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.substrate_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_help_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_help_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wallpaper_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
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


(lib.wallpapers_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wallpaper_11_img();
	this.instance.setTransform(10,0);

	this.instance_1 = new lib.wallpaper_15_img();
	this.instance_1.setTransform(0,1);

	this.instance_2 = new lib.wallpaper_12_img();
	this.instance_2.setTransform(8,3);

	this.instance_3 = new lib.wallpaper_13_img();
	this.instance_3.setTransform(10,0);

	this.instance_4 = new lib.wallpaper_14_img();
	this.instance_4.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");
	this.shape.setTransform(90,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,0,160,160);
p.frameBounds = [rect, new cjs.Rectangle(0,0,170,161), new cjs.Rectangle(8,0,162,163), rect=new cjs.Rectangle(10,0,160,160), rect];


(lib.wallpapers_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wallpaper_6_img();

	this.instance_1 = new lib.wallpaper_10_img();

	this.instance_2 = new lib.wallpaper_7_img();

	this.instance_3 = new lib.wallpaper_8_img();

	this.instance_4 = new lib.wallpaper_9_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.wallpapers_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wallpaper_6_img();

	this.instance_1 = new lib.wallpaper_10_img();

	this.instance_2 = new lib.wallpaper_7_img();

	this.instance_3 = new lib.wallpaper_8_img();

	this.instance_4 = new lib.wallpaper_9_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.wallpapers_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wallpaper_1_img();

	this.instance_1 = new lib.wallpaper_2_img();

	this.instance_2 = new lib.wallpaper_3_img();

	this.instance_3 = new lib.wallpaper_4_img();

	this.instance_4 = new lib.wallpaper_5_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,200);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_img();
	this.instance.setTransform(-330,-215.9,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-215.9,660,431.8);
p.frameBounds = [rect];


(lib.substrate_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_0_img();
	this.instance.setTransform(-80,-80);

	this.instance_1 = new lib.substrate_1_img();
	this.instance_1.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.shine_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(255,255,255,0)","rgba(255,255,255,0.4)","rgba(255,255,255,0)"],[0,0.004,0.463,1],-49.9,0,50,0).s().p("AnzXcMAAAgu3IPnAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-150,100,300);
p.frameBounds = [rect];


(lib.separator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.separator_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.objects_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.object_90_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_93_img();
	this.instance.setTransform(58,-117,0.429,0.429,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjaJwIiUp8IEGp0IHXA9Ih3TEg");
	this.shape.setTransform(-2.9,-58.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-122.3,120,128.3);
p.frameBounds = [rect];


(lib.object_89_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_92_img();
	this.instance.setTransform(59,-109,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlAI8IgqmWIEYrtIBgAAIDQEdICNMLIhDBng");
	this.shape.setTransform(4.5,-54.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-112.6,110,116.9);
p.frameBounds = [rect];


(lib.object_88_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_91_img();
	this.instance.setTransform(61,-119,0.429,0.429,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjmJsIAux5IBThvIDnAeIA+BzIAnRog");
	this.shape.setTransform(-0.8,-58.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-122.1,120,127.5);
p.frameBounds = [rect];


(lib.object_87_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_90_img();
	this.instance.setTransform(62,-119,0.429,0.429,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkBJnIAAt0ICdlrIDXAAIBjEOIAsG/IhKIkg");
	this.shape.setTransform(1.4,-58.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-121.6,120,126.8);
p.frameBounds = [rect];


(lib.object_86_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_89_img();
	this.instance.setTransform(50.1,-102,0.365,0.365,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjPIQIg/lLIBZp5ICahqIEqEHIilM2g");
	this.shape.setTransform(3,-51.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-106,102.1,108.8);
p.frameBounds = [rect];


(lib.object_85_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_88_img();
	this.instance.setTransform(52,-100,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai+IoIihnhIDjptIFVgQICHJEIhWHOIjfBbg");
	this.shape.setTransform(-3,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-101.8,110,113.6);
p.frameBounds = [rect];


(lib.object_84_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_87_img();
	this.instance.setTransform(57,-118,0.429,0.429,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al5o6IA5hCIKCgMIA4BjIhcSKIobAkg");
	this.shape.setTransform(-3,-57.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-122.3,120,130);
p.frameBounds = [rect];


(lib.object_83_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_86_img();
	this.instance.setTransform(54,-103,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqjUIAxj6IElhJIDCBWIA9CaIh4M9IkJACg");
	this.shape.setTransform(-4.6,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-103,110,110);
p.frameBounds = [rect];


(lib.object_82_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_85_img();
	this.instance.setTransform(55,-104,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhmHvIiCs2IAmhsICMguIC/gSIBgCQIAAEEIhrJTg");
	this.shape.setTransform(-1.9,-46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-104,110,110);
p.frameBounds = [rect];


(lib.object_81_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_84_img();
	this.instance.setTransform(56,-104,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ah/HwIi6muIBQnDICVhzIDuAAIBsCNIA0DoIjPJ0g");
	this.shape.setTransform(-0.1,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-104,110,110);
p.frameBounds = [rect];


(lib.object_80_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_83_img();
	this.instance.setTransform(57,-104,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiCH7IiVjQIAKpbICgjKIDRACIC0EkIjWLPg");
	this.shape.setTransform(2.3,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-104,110,110);
p.frameBounds = [rect];


(lib.object_79_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_82_img();
	this.instance.setTransform(57,-103,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiQH2IjgsFIAThvIEuh+ICqAtID1G3IklIVg");
	this.shape.setTransform(3.2,-46);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-103,110,110);
p.frameBounds = [rect];


(lib.object_78_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_81_img();
	this.instance.setTransform(57,-103,0.393,0.393,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiaIIIiknpIArl9ICkiuID7AAICCCBIAxEMIjBKMg");
	this.shape.setTransform(0.8,-49.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-103,110,110);
p.frameBounds = [rect];


(lib.object_77_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animal_7_img();
	this.instance.setTransform(48,-64,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoCigIIKjSIFtCEICOI2IpiArg");
	this.shape.setTransform(-1,-16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-64,103.1,96);
p.frameBounds = [rect];


(lib.object_76_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animal_6_img();
	this.instance.setTransform(48,-60,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoBEGIANnuIJgjgIGWEZIkKJlImEATg");
	this.shape.setTransform(2,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.4,-60,102.9,100.5);
p.frameBounds = [rect];


(lib.object_75_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animal_5_img();
	this.instance.setTransform(35,-79,0.833,0.833,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlrEZIg/iRIB8oyIJfAjIB6DWIinJYInVAEg");
	this.shape.setTransform(-6.6,-40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.3,-82.8,85.4,85.6);
p.frameBounds = [rect];


(lib.object_74_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animal_4_img();
	this.instance.setTransform(54,-114,1.146,1.146,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj4JMIgeq1IB8nlICaABIBNBrIDKQxg");
	this.shape.setTransform(5.2,-59.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-118.9,110,118.2);
p.frameBounds = [rect];


(lib.object_73_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animal_3_img();
	this.instance.setTransform(59,-89,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am+GlIgopjIB8jmINRJ0IgMDVg");
	this.shape.setTransform(10.1,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.6,-89,97.6,98);
p.frameBounds = [rect];


(lib.object_72_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animal_2_img();
	this.instance.setTransform(-37,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnFjFIEOgpII7EGIBCCkIo7Azg");
	this.shape.setTransform(2.7,-11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.7,-34.9,90.8,48);
p.frameBounds = [rect];


(lib.object_71_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animal_1_img();
	this.instance.setTransform(47,-85,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkHHMIiNjMIAkn/IJujMICXDUIhhIRIiNCyg");
	this.shape.setTransform(2.9,-40.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-86.5,90,92);
p.frameBounds = [rect];


(lib.object_70_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_8_img();
	this.instance.setTransform(-39,-80,0.773,0.774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkcF0Ih0izIgGi9ICWlVICfhOIE6AHIC+HIIhVEoIl9BIg");
	this.shape.setTransform(-1.2,-39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.9,-81.6,81.6,83.6);
p.frameBounds = [rect];


(lib.object_69_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_7_img();
	this.instance.setTransform(-42,-78,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjuF2IiDkRIgtkdICpjqIE9AMIElEHIAyFcIi6C8IkRAag");
	this.shape.setTransform(-2.3,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-80.4,83,83.9);
p.frameBounds = [rect];


(lib.object_68_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_80_img();
	this.instance.setTransform(-45,-54,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmpkEIFIhqIHtDoIAeGzIqbBCg");
	this.shape.setTransform(-8.9,-21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-57.8,85.3,73.5);
p.frameBounds = [rect];


(lib.object_67_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_79_img();
	this.instance.setTransform(-17,-30,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17,-30,34.2,45);
p.frameBounds = [rect];


(lib.object_66_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_78_img();
	this.instance.setTransform(-18,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiuD5IAAnxIFdAAIAAHxg");
	this.shape.setTransform(-0.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-37,35,50);
p.frameBounds = [rect];


(lib.object_65_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_77_img();
	this.instance.setTransform(-39,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-25,64,50);
p.frameBounds = [rect];


(lib.object_64_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_76_img();
	this.instance.setTransform(-38,-74,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AisF2IiEiwIgIlFIDRj4IDeAAIDCETIAAE/IiaCdg");
	this.shape.setTransform(-0.5,-31.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-74,76.5,79.9);
p.frameBounds = [rect];


(lib.object_63_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_75_img();
	this.instance.setTransform(-38,-65,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ag4GLIkphuIAdmdIC0kLIHRBaIAhK8g");
	this.shape.setTransform(-0.4,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-67.1,76.5,79.2);
p.frameBounds = [rect];


(lib.object_62_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_74_img();
	this.instance.setTransform(-38,-65,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmCDLIE+mgIC7g+IB/ARICNGlIg0BcIq1AVg");
	this.shape.setTransform(0.9,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-65,77.7,79.6);
p.frameBounds = [rect];


(lib.object_61_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_73_img();
	this.instance.setTransform(-35,-68,0.779,0.779);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-68,70.1,70.1);
p.frameBounds = [rect];


(lib.object_60_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_72_img();
	this.instance.setTransform(-33,-78,0.801,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiAEnIjZmqIA6gtIImh2IBTCOIiFG/g");
	this.shape.setTransform(-4,-53.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.6,-82.8,72.1,84.9);
p.frameBounds = [rect];


(lib.object_59_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_71_img();
	this.instance.setTransform(-41,-75,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-75,86.4,80);
p.frameBounds = [rect];


(lib.object_58_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_70_img();
	this.instance.setTransform(-36,-69,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-69,71.4,70);
p.frameBounds = [rect];


(lib.object_57_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_69_img();
	this.instance.setTransform(-35,-15,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjaFnIAArOIG2AAIAALOg");
	this.shape.setTransform(0.3,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-15,72,75.8);
p.frameBounds = [rect];


(lib.object_56_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_68_img();
	this.instance.setTransform(-35.1,-40,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjvGeIignxIGrljIF0F6IiRHzg");
	this.shape.setTransform(-0.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-44.7,80.1,87.8);
p.frameBounds = [rect];


(lib.object_55_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_67_img();
	this.instance.setTransform(-58,-59,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-59,115.7,65);
p.frameBounds = [rect];


(lib.object_54_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_66_img();
	this.instance.setTransform(-31,-49,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjODHICYorICigCIBjKiIk0Arg");
	this.shape.setTransform(-1,-18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-54,60,72);
p.frameBounds = [rect];


(lib.object_53_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_65_img();
	this.instance.setTransform(-23,-36,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AizDgIAAnAIFmAAIAAHAg");
	this.shape.setTransform(0.1,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-36,45,46.3);
p.frameBounds = [rect];


(lib.object_52_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_64_img();
	this.instance.setTransform(-21,-36,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AieDcIAAm2IE9AAIAAG2g");
	this.shape.setTransform(-0.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-37.5,40,44);
p.frameBounds = [rect];


(lib.object_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_63_img();
	this.instance.setTransform(-21,-39,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai8DRIAAmhIF6AAIAAGhg");
	this.shape.setTransform(-1.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-39,40,43);
p.frameBounds = [rect];


(lib.object_50_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_62_img();
	this.instance.setTransform(-21,-39,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiyCzIAAlmIFmAAIAAFmg");
	this.shape.setTransform(-0.4,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-39,40,45.3);
p.frameBounds = [rect];


(lib.object_49_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_61_img();
	this.instance.setTransform(-29,-26,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkaCqIgJiXIB9i8ID9AAIDNDWIgXB9g");
	this.shape.setTransform(-2.7,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-28.2,58.5,34.1);
p.frameBounds = [rect];


(lib.object_48_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_60_img();
	this.instance.setTransform(-23,-79,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai4GzIhFqFIC4jgIB7AAIDID5IhuJsg");
	this.shape.setTransform(0.6,-41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.8,-84.6,50.9,87.1);
p.frameBounds = [rect];


(lib.object_47_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_59_img();
	this.instance.setTransform(-32,-50,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-50,63.8,50);
p.frameBounds = [rect];


(lib.object_46_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_58_img();
	this.instance.setTransform(-54,-6,0.387,0.387);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-6,108.4,12);
p.frameBounds = [rect];


(lib.object_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_57_img();
	this.instance.setTransform(-59,-28,0.441,0.441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXDHIAAmNISvAAIAAGNg");
	this.shape.setTransform(0,-13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-33.9,120,40);
p.frameBounds = [rect];


(lib.object_44_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_56_img();
	this.instance.setTransform(-50,-77,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-77,99.1,80);
p.frameBounds = [rect];


(lib.object_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_55_img();
	this.instance.setTransform(-26,-33,0.549,0.549);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-33,49.5,49.5);
p.frameBounds = [rect];


(lib.object_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_54_img();
	this.instance.setTransform(-25,-48,0.549,0.549);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjlD5IAAnxIHKAAIAAHxg");
	this.shape.setTransform(-0.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-48,49.5,51.5);
p.frameBounds = [rect];


(lib.object_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_53_img();
	this.instance.setTransform(-34,-48,0.582,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlTErIAApVIKnAAIAAJVg");
	this.shape.setTransform(-2.1,-23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.1,-53,68,60);
p.frameBounds = [rect];


(lib.object_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_52_img();
	this.instance.setTransform(-95,-117,0.677,0.678);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuuJiIgKh+IDZtmIInjuIHfAFIDLBEIHHOaIg1D+g");
	this.shape.setTransform(0.1,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.2,-118.2,190.7,125.2);
p.frameBounds = [rect];


(lib.object_39_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_51_img();
	this.instance.setTransform(-45,-28,0.79,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnLC+IAAl7IOWAAIAAF7g");
	this.shape.setTransform(0.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-32,92,38);
p.frameBounds = [rect];


(lib.object_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_50_img();
	this.instance.setTransform(-25,-67,0.493,0.493);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkUluIEAgeIEqHFIghFOIoCAGg");
	this.shape.setTransform(1.4,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.3,-72.3,55.6,79.5);
p.frameBounds = [rect];


(lib.object_37_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_49_img();
	this.instance.setTransform(-57,-109,0.393,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AizJYIAAyuIFmAAIAASug");
	this.shape.setTransform(-2.3,-54.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-114.2,110,120);
p.frameBounds = [rect];


(lib.object_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_48_img();
	this.instance.setTransform(-31,-42,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AinhEIBPkvIDEAAIA8DfIhYIDIhoAFg");
	this.shape.setTransform(-0.7,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-46.3,66.2,74.5);
p.frameBounds = [rect];


(lib.object_35_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_47_img();
	this.instance.setTransform(-48,-99,0.357,0.357);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-99,100,100);
p.frameBounds = [rect];


(lib.object_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_46_img();
	this.instance.setTransform(-68,-118,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkwIWIhIm5IE0p9IBIAAIF1KrIgaGVg");
	this.shape.setTransform(-6.8,-49.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-118,120,122.6);
p.frameBounds = [rect];


(lib.object_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_45_img();
	this.instance.setTransform(-48,-93,0.335,0.335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiVH0IAAvmIErAAIAAPmg");
	this.shape.setTransform(-0.8,-46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-96.7,93.8,100);
p.frameBounds = [rect];


(lib.object_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_44_img();
	this.instance.setTransform(-67,-129,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjgGQIAAseIHAAAIAAMeg");
	this.shape.setTransform(-1.3,-37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-129,129.9,131.8);
p.frameBounds = [rect];


(lib.object_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_43_img();
	this.instance.setTransform(-38,-79,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjyGeIhwsYIGsgwIEZILIggFKg");
	this.shape.setTransform(-4.7,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.2,-83,71.4,85.6);
p.frameBounds = [rect];


(lib.object_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_42_img();
	this.instance.setTransform(-52,-49,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-49,97.9,97.9);
p.frameBounds = [rect];


(lib.object_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_31_img();
	this.instance.setTransform(-89,-154,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGHzIAAvmIGNAAIAAPmg");
	this.shape.setTransform(-4.3,-21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-154,180,182.8);
p.frameBounds = [rect];


(lib.object_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_30_img();
	this.instance.setTransform(-87,-180,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");
	this.shape.setTransform(3,-67.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87,-180,180,182.2);
p.frameBounds = [rect];


(lib.object_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_29_img();
	this.instance.setTransform(-58,-8,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-8,116.7,15);
p.frameBounds = [rect];


(lib.object_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_28_img();
	this.instance.setTransform(-57,-111,0.393,0.393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-111,110,110);
p.frameBounds = [rect];


(lib.object_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_27_img();
	this.instance.setTransform(-49,-97,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-97,97.9,97.9);
p.frameBounds = [rect];


(lib.object_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_26_img();
	this.instance.setTransform(-27,0,0.594,0.594);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjyF1Ig9hyIDmp3IB1AAIEEJ8Ig5Btg");
	this.shape.setTransform(0.4,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.9,-7.3,60.8,74.6);
p.frameBounds = [rect];


(lib.object_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_25_img();
	this.instance.setTransform(-60,-65,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-65,120.8,70);
p.frameBounds = [rect];


(lib.object_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_24_img();
	this.instance.setTransform(-64,-42,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao6D1IhhnpIU3AAIhqHpg");
	this.shape.setTransform(-1.4,-19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.2,-43.8,133.8,49);
p.frameBounds = [rect];


(lib.object_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_23_img();
	this.instance.setTransform(-77,-59,0.551,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqsFTIhum3IAThrIMbiFIKVCAIByByIhpG3g");
	this.shape.setTransform(-0.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-65.6,159.1,68.4);
p.frameBounds = [rect];


(lib.object_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_22_img();
	this.instance.setTransform(-45,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldHCIAAuDIK7AAIAAODg");
	this.shape.setTransform(0,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83,90,92.5);
p.frameBounds = [rect];


(lib.object_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_21_img();
	this.instance.setTransform(-50,-99,0.357,0.357);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai8IFIgkrsIDIkdIA+ABIC7EqIgZLeg");
	this.shape.setTransform(1.1,-48.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100.5,100,103.6);
p.frameBounds = [rect];


(lib.object_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_20_img();
	this.instance.setTransform(-50,-99,0.357,0.357);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiVINIAAwZIErAAIAAQZg");
	this.shape.setTransform(1,-49.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-101.9,100,105);
p.frameBounds = [rect];


(lib.object_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_19_img();
	this.instance.setTransform(-23,-70,0.535,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-70,46.1,120);
p.frameBounds = [rect];


(lib.object_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_18_img();
	this.instance.setTransform(-21,-97,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai8ILIhshJIHfvMIByBCIjKPTg");
	this.shape.setTransform(3.4,-49.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-101.6,59.4,104.7);
p.frameBounds = [rect];


(lib.object_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_17_img();
	this.instance.setTransform(-36,-65,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGGPIAAseIGNAAIAAMeg");
	this.shape.setTransform(-0.8,-27.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-67.9,72,80);
p.frameBounds = [rect];


(lib.object_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_16_img();
	this.instance.setTransform(-35,-68,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ah0F0Iiql0IBNlzIGnAAIBJFpIjOF+g");
	this.shape.setTransform(0.4,-31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-68.4,72,74.5);
p.frameBounds = [rect];


(lib.object_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_15_img();
	this.instance.setTransform(-37,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-35,73.5,70);
p.frameBounds = [rect];


(lib.object_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_14_img();
	this.instance.setTransform(-37,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-35,73.5,70);
p.frameBounds = [rect];


(lib.object_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_13_img();
	this.instance.setTransform(-22,-48,0.42,0.42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai3EJIhNoQIIJAAIhkIQg");
	this.shape.setTransform(0,-22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.1,-49.3,52.3,53);
p.frameBounds = [rect];


(lib.object_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_12_img();
	this.instance.setTransform(-27,-77,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AklGfIgGmMIF7m3IBxgBIBrCQIg3K7g");
	this.shape.setTransform(0,-36.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.1,-78.6,60.2,84.6);
p.frameBounds = [rect];


(lib.object_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_11_img();
	this.instance.setTransform(-47,-57,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-57,104.4,60);
p.frameBounds = [rect];


(lib.object_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_10_img();
	this.instance.setTransform(-58,-127,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-127,130,130);
p.frameBounds = [rect];


(lib.object_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_9_img();
	this.instance.setTransform(-84,-115,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtQpIIaigPIg7SrI5CAEg");
	this.shape.setTransform(0.6,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-115,170,121.6);
p.frameBounds = [rect];


(lib.object_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_6_img();
	this.instance.setTransform(-45,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am8iIIFjjPIIWI2IgXBYItPAhg");
	this.shape.setTransform(0.3,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45.7,90,68.8);
p.frameBounds = [rect];


(lib.object_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_5_img();
	this.instance.setTransform(-36,-67,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-67,72,72);
p.frameBounds = [rect];


(lib.object_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_4_img();
	this.instance.setTransform(-36,-55,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5FeIAAq6IHzAAIAAK6g");
	this.shape.setTransform(0,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-55,72,74.5);
p.frameBounds = [rect];


(lib.object_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_3_img();
	this.instance.setTransform(-37,-78,0.695,0.696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-78,73,80);
p.frameBounds = [rect];


(lib.object_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_2_img();
	this.instance.setTransform(-39,-76,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-76,78.6,80);
p.frameBounds = [rect];


(lib.object_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_1_img();
	this.instance.setTransform(-65,-141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnkL0IiXjqIgns2IEgnKIQlUTIgiDag");
	this.shape.setTransform(-5.2,-75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.8,-151.5,135.1,152);
p.frameBounds = [rect];


(lib.number_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.number_0_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.number_1_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.number_2_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.number_3_img();
	this.instance_3.setTransform(-60,-60);

	this.instance_4 = new lib.number_4_img();
	this.instance_4.setTransform(-60,-60);

	this.instance_5 = new lib.number_5_img();
	this.instance_5.setTransform(-60,-60);

	this.instance_6 = new lib.number_6_img();
	this.instance_6.setTransform(-60,-60);

	this.instance_7 = new lib.number_7_img();
	this.instance_7.setTransform(-60,-60);

	this.instance_8 = new lib.number_8_img();
	this.instance_8.setTransform(-60,-60);

	this.instance_9 = new lib.number_9_img();
	this.instance_9.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-250,-113);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-250,-113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-113,500,226);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-250,-113);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-250,-113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-113,500,226);
p.frameBounds = [rect, rect, rect];


(lib.icon_set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_set_0_2_img();
	this.instance.setTransform(-80,-80);

	this.instance_1 = new lib.icon_set_1_2_img();
	this.instance_1.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.icon_set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_set_0_1_img();
	this.instance.setTransform(-80,-80);

	this.instance_1 = new lib.icon_set_1_1_img();
	this.instance_1.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.houses_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.frontHouse_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontHouse
	this.instance = new lib.front_house_2_img();
	this.instance.setTransform(110,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(110,40,410,459);
p.frameBounds = [rect];


(lib.frontHouse_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontHouse
	this.instance = new lib.front_house_1_img();
	this.instance.setTransform(140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(140,-140,520,640);
p.frameBounds = [rect];


(lib.elsa_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.elsa_main_img();
	this.instance.setTransform(-317.1,-358.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-317.1,-358.1,472,572);
p.frameBounds = [rect];


(lib.doors_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.door_1_img();
	this.instance.setTransform(-37,-70);

	this.instance_1 = new lib.door_2_img();
	this.instance_1.setTransform(-36,-70);

	this.instance_2 = new lib.door_3_img();
	this.instance_2.setTransform(-36,-70);

	this.instance_3 = new lib.door_4_img();
	this.instance_3.setTransform(-36,-70);

	this.instance_4 = new lib.door_5_img();
	this.instance_4.setTransform(-36,-70);

	this.instance_5 = new lib.door_6_img();
	this.instance_5.setTransform(-36,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-70,89,140);
p.frameBounds = [rect, rect=new cjs.Rectangle(-36,-70,89,140), rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-195,-150);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-195,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-150,390,300);
p.frameBounds = [rect, rect];


(lib.body_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_help_en_img();
	this.instance.setTransform(-285,-210);

	this.instance_1 = new lib.title_help_ru_img();
	this.instance_1.setTransform(-285,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-285,-210,570,420);
p.frameBounds = [rect, rect];


(lib.body_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-195,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-150,390,300);
p.frameBounds = [rect];


(lib.background_counter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_counter_img();
	this.instance.setTransform(-310,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310,-110,620,220);
p.frameBounds = [rect];


(lib.background_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_3_1_img();
	this.instance.setTransform(-12,-12,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.background_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_2_1_img();
	this.instance.setTransform(-197,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-127,394,254);
p.frameBounds = [rect];


(lib.background_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_1_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.area_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsfCWIAAkrIY/AAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-15,160,30);
p.frameBounds = [rect];


(lib.area_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+dCWIAAkrMA87AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-15,390,30);
p.frameBounds = [rect];


(lib.area_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsfCWIAAkrIY/AAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-15,160,30);
p.frameBounds = [rect];


(lib.area_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+dCWIAAkrMA87AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-15,390,30);
p.frameBounds = [rect];


(lib.area_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+dCWIAAkrMA87AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-15,390,30);
p.frameBounds = [rect];


(lib.area_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDACWIAAkrMBOHAAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-15,500,30);
p.frameBounds = [rect];


(lib.area_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+dCWIAAkrMA87AAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-15,390,30);
p.frameBounds = [rect];


(lib.area_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDACWIAAkrMBOHAAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-15,500,30);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.blinking_star_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_star_2_img();
	this.instance.setTransform(-43,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-40,86,80);
p.frameBounds = [rect];


(lib.blinking_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_star_1_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
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
	this.instance.setTransform(-128,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-23,256,46);
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

	// image_1
	this.instance = new lib.redirect_4_mc();
	this.instance.setTransform(0,0,0.474,0.474);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_5_mc();
	this.instance_1.setTransform(0,0,0.474,0.474);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(51));

	// image_1
	this.instance_2 = new lib.redirect_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:true},1).wait(51));

	// bg
	this.instance_3 = new lib.redirect_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

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
p.nominalBounds = rect = new cjs.Rectangle(-195,-150,390,300);
p.frameBounds = [rect];


(lib.title_help_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_help_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.5,-209.5,570,420);
p.frameBounds = [rect];


(lib.option_90_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_8_img();
	this.instance.setTransform(-38,-40,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_89_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_7_img();
	this.instance.setTransform(-40,-40,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_88_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_80_img();
	this.instance.setTransform(-38,-32,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_87_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_79_img();
	this.instance.setTransform(-19,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_86_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_78_img();
	this.instance.setTransform(-18,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_85_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_77_img();
	this.instance.setTransform(-32,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_84_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_76_img();
	this.instance.setTransform(-39,-41,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_83_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_75_img();
	this.instance.setTransform(-38,-37,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_82_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_74_img();
	this.instance.setTransform(-45,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-63,120,123);
p.frameBounds = [rect];


(lib.option_81_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_73_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_80_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_72_img();
	this.instance.setTransform(-33,-40,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_79_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_71_img();
	this.instance.setTransform(-38,-35,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_78_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_70_img();
	this.instance.setTransform(-36,-35,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_77_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_69_img();
	this.instance.setTransform(-33.9,-40.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_76_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_68_img();
	this.instance.setTransform(-35,-40,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_75_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_67_img();
	this.instance.setTransform(-44,-23,0.506,0.505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_74_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_66_img();
	this.instance.setTransform(-46,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_73_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_65_img();
	this.instance.setTransform(-45,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_72_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_64_img();
	this.instance.setTransform(-40,-40,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_71_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_63_img();
	this.instance.setTransform(-45,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_70_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_93_img();
	this.instance.setTransform(45,-45,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_69_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_92_img();
	this.instance.setTransform(45,-45,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_68_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_91_img();
	this.instance.setTransform(45,-45,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_67_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_90_img();
	this.instance.setTransform(45,-45,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_66_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_89_img();
	this.instance.setTransform(45,-45,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_65_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_88_img();
	this.instance.setTransform(43,-41,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_64_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_87_img();
	this.instance.setTransform(45,-45,0.321,0.321,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_63_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_86_img();
	this.instance.setTransform(51.1,-52,0.365,0.365,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_62_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_85_img();
	this.instance.setTransform(52.1,-52,0.365,0.365,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_61_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_84_img();
	this.instance.setTransform(51.1,-52,0.365,0.365,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_60_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_62_img();
	this.instance.setTransform(-45,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_59_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_61_img();
	this.instance.setTransform(-35,-20,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_58_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_60_img();
	this.instance.setTransform(-26,-45,0.751,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_57_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_59_img();
	this.instance.setTransform(-35,-24,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_56_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_58_img();
	this.instance.setTransform(-45,-5,0.321,0.321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_55_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_57_img();
	this.instance.setTransform(-45,-4,0.338,0.338);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_54_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_56_img();
	this.instance.setTransform(-43,-34,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_53_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_55_img();
	this.instance.setTransform(-35,-44,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_52_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_54_img();
	this.instance.setTransform(-35,-35,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_53_img();
	this.instance.setTransform(-35,-24,0.642,0.642);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_50_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_52_img();
	this.instance.setTransform(-47,-30,0.335,0.335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_49_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_51_img();
	this.instance.setTransform(-45,-7,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_48_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_50_img();
	this.instance.setTransform(-29,-40,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_47_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_49_img();
	this.instance.setTransform(-47.8,-47,0.335,0.335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_46_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_48_img();
	this.instance.setTransform(-32,-32,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_47_img();
	this.instance.setTransform(-45,-54,0.321,0.321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_44_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_46_img();
	this.instance.setTransform(-51,-56,0.357,0.357);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_45_img();
	this.instance.setTransform(-48.8,-47,0.335,0.335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_44_img();
	this.instance.setTransform(-66,-91,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-91,129.9,151);
p.frameBounds = [rect];


(lib.option_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_43_img();
	this.instance.setTransform(-29,-31,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_42_img();
	this.instance.setTransform(-48,-45,0.321,0.321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_39_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_31_img();
	this.instance.setTransform(-48,-70,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-70,120,130);
p.frameBounds = [rect];


(lib.option_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_30_img();
	this.instance.setTransform(-48,-53,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_37_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_29_img();
	this.instance.setTransform(-45,-1,0.321,0.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_28_img();
	this.instance.setTransform(-48,-48,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_35_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_27_img();
	this.instance.setTransform(-45,-45,0.321,0.321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_26_img();
	this.instance.setTransform(-27,-39,0.594,0.594);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_25_img();
	this.instance.setTransform(-45,-25,0.435,0.435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_24_img();
	this.instance.setTransform(-44,-13,0.321,0.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_23_img();
	this.instance.setTransform(-45,-18,0.321,0.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_22_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_21_img();
	this.instance.setTransform(-40,-40,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_20_img();
	this.instance.setTransform(-47,-45,0.329,0.329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_19_img();
	this.instance.setTransform(-17,-45,0.402,0.402);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_18_img();
	this.instance.setTransform(-21,-40,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_17_img();
	this.instance.setTransform(-36,-40,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_16_img();
	this.instance.setTransform(-35,-36,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_15_img();
	this.instance.setTransform(-37,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_14_img();
	this.instance.setTransform(-37,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_13_img();
	this.instance.setTransform(-31,-35,0.589,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_83_img();
	this.instance.setTransform(52.1,-51,0.365,0.365,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_82_img();
	this.instance.setTransform(51.1,-53,0.365,0.365,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_81_img();
	this.instance.setTransform(51.1,-51,0.365,0.365,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.animal_7_img();
	this.instance.setTransform(48,-48,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.animal_6_img();
	this.instance.setTransform(45,-47,0.938,0.938,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.animal_5_img();
	this.instance.setTransform(40,-40,0.833,0.833,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.animal_4_img();
	this.instance.setTransform(48,-47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.animal_3_img();
	this.instance.setTransform(48,-49,0.938,0.938,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.animal_2_img();
	this.instance.setTransform(-40,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.animal_1_img();
	this.instance.setTransform(45,-46,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_12_img();
	this.instance.setTransform(-26,-37,0.492,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_11_img();
	this.instance.setTransform(-37,-21,0.421,0.421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_10_img();
	this.instance.setTransform(-40,-40,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_9_img();
	this.instance.setTransform(-42,-30,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_6_img();
	this.instance.setTransform(-36,-27,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_5_img();
	this.instance.setTransform(-34.5,-37.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_4_img();
	this.instance.setTransform(-37,-39,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_3_img();
	this.instance.setTransform(-37,-40,0.696,0.696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_2_img();
	this.instance.setTransform(-35,-36,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.option_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.furniture_1_img();
	this.instance.setTransform(-40,-46,0.645,0.645);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.substrate_mc = new lib.substrate_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApAECIiygXQA3jcg3j5ICogIIAokCIUVH0I0JH1g");

	// animation
	this.instance = new lib.shine_nav_mc();
	this.instance.setTransform(160,0.1,1,1,-30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({scaleX:1.29,scaleY:1.29,x:-9.8,y:0},10).to({scaleX:1,scaleY:1,x:-180,y:0.1},10).wait(1));

	// graph
	this.instance_1 = new lib.body_nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180.1,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(0,-110);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.6,scaleY:0.6},0).to({regY:-0.1,scaleX:1.02,scaleY:1.02,y:-110.1,alpha:0.672},10).to({regY:0,scaleX:1,scaleY:1,y:-110,alpha:1},5).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,110);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.6,scaleY:0.6},0).to({regY:0.1,scaleX:1.02,scaleY:1.02,y:110.1,alpha:0.672},10).to({regY:0,scaleX:1,scaleY:1,y:110,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-223,500,446);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-250,-177.8,500,400.8), new cjs.Rectangle(-250,-182.4,500,405.5), new cjs.Rectangle(-250,-187.2,500,410.2), new cjs.Rectangle(-250,-192,500,415), new cjs.Rectangle(-250,-196.7,500,419.8), new cjs.Rectangle(-250,-201.5,500,424.5), new cjs.Rectangle(-250,-206.2,500,429.3), new cjs.Rectangle(-250,-211,500,434), new cjs.Rectangle(-250,-215.8,500,438.8), new cjs.Rectangle(-250,-220.5,500,443.6), new cjs.Rectangle(-255,-225.2,510,403.1), new cjs.Rectangle(-254,-224.8,508,407.3), new cjs.Rectangle(-253,-224.2,506,411.5), new cjs.Rectangle(-251.9,-223.8,504,415.8), new cjs.Rectangle(-250.9,-223.3,502,420.1), new cjs.Rectangle(-250,-223,500,424.5), new cjs.Rectangle(-250,-223,500,429.3), new cjs.Rectangle(-250,-223,500,434), new cjs.Rectangle(-250,-223,500,438.8), new cjs.Rectangle(-250,-223,500,443.6), new cjs.Rectangle(-255,-223,510,448.3), new cjs.Rectangle(-254,-223,508,447.8), new cjs.Rectangle(-253,-223,506,447.4), new cjs.Rectangle(-251.9,-223,504,446.9), new cjs.Rectangle(-250.9,-223,502,446.4), new cjs.Rectangle(-250,-223,500,446)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.castle_main_1_img();
	this.instance.setTransform(101,13,0.651,0.651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.elsa_main_mc();
	this.instance_1.setTransform(132.7,290,0.805,0.805,0,0,0,-81.1,-72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.3,13,755.5,587.5);
p.frameBounds = [rect];


(lib.help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_help_mc();
	this.instance.setTransform(400,300,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.flippings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wallpapers
	this.wallpapers_mc = new lib.wallpapers_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.wallpapers_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,0,160,160);
p.frameBounds = [rect];


(lib.flippings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wallpapers
	this.wallpapers_mc = new lib.wallpapers_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.wallpapers_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect];


(lib.flippings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wallpapers
	this.wallpapers_mc = new lib.wallpapers_1_2_mc();
	this.wallpapers_mc.setTransform(195,100,1,1,0,0,0,195,100);

	this.timeline.addTween(cjs.Tween.get(this.wallpapers_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect];


(lib.flippings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// doors
	this.doors_mc = new lib.doors_mc();
	this.doors_mc.setTransform(250,105);

	this.timeline.addTween(cjs.Tween.get(this.doors_mc).wait(1));

	// wallpapers
	this.wallpapers_mc = new lib.wallpapers_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.wallpapers_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,200);
p.frameBounds = [rect];


(lib.counterPage_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.separator_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// numbers
	this.totalPages_mc = new lib.number_mc();
	this.totalPages_mc.setTransform(55,0,0.833,0.833);

	this.currentPage_mc = new lib.number_mc();
	this.currentPage_mc.setTransform(-55,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.currentPage_mc},{t:this.totalPages_mc}]}).wait(1));

	// bg
	this.instance_1 = new lib.background_counter_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310,-110,620,220);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AirKKQgRgJgKgQQgLgSAAgVIAAieIkuAAQghAAgWgXQgWgXgBggIAAq4QABggAWgXQAWgWAhAAIEuAAIAAiiQAAgVALgRQAKgRARgJQARgKATAAQAVABARALIKvKHIqvKIQgRALgVAAIgCABQgSAAgQgKg");

	// animation
	this.instance = new lib.shine_nav_mc();
	this.instance.setTransform(-200,0,1,1,30);
	this.instance.alpha = 0.012;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:1},0).to({x:200},25).wait(36));

	// graph
	this.instance_1 = new lib.nav_img();
	this.instance_1.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.backHome_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_mc();
	this.instance.setTransform(400,695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.elsa_main_mc();
	this.instance_1.setTransform(618.2,284.5,0.774,0.774);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,7.2,668.1,903.7);
p.frameBounds = [rect];


(lib.backHome_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_mc();
	this.instance.setTransform(400,695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,479.1,660,431.8);
p.frameBounds = [rect];


(lib.background_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_4_1_mc();
	this.instance.setTransform(26,0);

	this.instance_1 = new lib.background_4_1_mc();
	this.instance_1.setTransform(-26,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-12,76,24);
p.frameBounds = [rect];


(lib.background_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.background_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},59).to({y:0},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-127,394,254);
p.frameBounds = [rect, new cjs.Rectangle(-197,-127.1,394,254), new cjs.Rectangle(-197,-127.3,394,254), new cjs.Rectangle(-197,-127.5,394,254), new cjs.Rectangle(-197,-127.7,394,254), new cjs.Rectangle(-197,-127.8,394,254), new cjs.Rectangle(-197,-128,394,254), new cjs.Rectangle(-197,-128.2,394,254), new cjs.Rectangle(-197,-128.3,394,254), new cjs.Rectangle(-197,-128.5,394,254), new cjs.Rectangle(-197,-128.7,394,254), new cjs.Rectangle(-197,-128.8,394,254), new cjs.Rectangle(-197,-129,394,254), new cjs.Rectangle(-197,-129.2,394,254), new cjs.Rectangle(-197,-129.3,394,254), new cjs.Rectangle(-197,-129.5,394,254), new cjs.Rectangle(-197,-129.7,394,254), new cjs.Rectangle(-197,-129.9,394,254), new cjs.Rectangle(-197,-130,394,254), new cjs.Rectangle(-197,-130.2,394,254), new cjs.Rectangle(-197,-130.4,394,254), new cjs.Rectangle(-197,-130.5,394,254), new cjs.Rectangle(-197,-130.7,394,254), new cjs.Rectangle(-197,-130.9,394,254), new cjs.Rectangle(-197,-131,394,254), new cjs.Rectangle(-197,-131.2,394,254), new cjs.Rectangle(-197,-131.4,394,254), new cjs.Rectangle(-197,-131.6,394,254), new cjs.Rectangle(-197,-131.7,394,254), new cjs.Rectangle(-197,-131.9,394,254), new cjs.Rectangle(-197,-132.1,394,254), new cjs.Rectangle(-197,-132.2,394,254), new cjs.Rectangle(-197,-132.4,394,254), new cjs.Rectangle(-197,-132.6,394,254), new cjs.Rectangle(-197,-132.7,394,254), new cjs.Rectangle(-197,-132.9,394,254), new cjs.Rectangle(-197,-133.1,394,254), new cjs.Rectangle(-197,-133.2,394,254), new cjs.Rectangle(-197,-133.4,394,254), new cjs.Rectangle(-197,-133.6,394,254), new cjs.Rectangle(-197,-133.8,394,254), new cjs.Rectangle(-197,-133.9,394,254), new cjs.Rectangle(-197,-134.1,394,254), new cjs.Rectangle(-197,-134.3,394,254), new cjs.Rectangle(-197,-134.4,394,254), new cjs.Rectangle(-197,-134.6,394,254), new cjs.Rectangle(-197,-134.8,394,254), new cjs.Rectangle(-197,-134.9,394,254), new cjs.Rectangle(-197,-135.1,394,254), new cjs.Rectangle(-197,-135.3,394,254), new cjs.Rectangle(-197,-135.4,394,254), new cjs.Rectangle(-197,-135.6,394,254), new cjs.Rectangle(-197,-135.8,394,254), new cjs.Rectangle(-197,-136,394,254), new cjs.Rectangle(-197,-136.1,394,254), new cjs.Rectangle(-197,-136.3,394,254), new cjs.Rectangle(-197,-136.5,394,254), new cjs.Rectangle(-197,-136.6,394,254), new cjs.Rectangle(-197,-136.8,394,254), new cjs.Rectangle(-197,-137,394,254), new cjs.Rectangle(-197,-136.8,394,254), new cjs.Rectangle(-197,-136.6,394,254), new cjs.Rectangle(-197,-136.5,394,254), new cjs.Rectangle(-197,-136.3,394,254), new cjs.Rectangle(-197,-136.1,394,254), new cjs.Rectangle(-197,-136,394,254), new cjs.Rectangle(-197,-135.8,394,254), new cjs.Rectangle(-197,-135.6,394,254), new cjs.Rectangle(-197,-135.5,394,254), new cjs.Rectangle(-197,-135.3,394,254), new cjs.Rectangle(-197,-135.1,394,254), new cjs.Rectangle(-197,-135,394,254), new cjs.Rectangle(-197,-134.8,394,254), new cjs.Rectangle(-197,-134.6,394,254), new cjs.Rectangle(-197,-134.5,394,254), new cjs.Rectangle(-197,-134.3,394,254), new cjs.Rectangle(-197,-134.1,394,254), new cjs.Rectangle(-197,-134,394,254), new cjs.Rectangle(-197,-133.8,394,254), new cjs.Rectangle(-197,-133.6,394,254), new cjs.Rectangle(-197,-133.5,394,254), new cjs.Rectangle(-197,-133.3,394,254), new cjs.Rectangle(-197,-133.1,394,254), new cjs.Rectangle(-197,-133,394,254), new cjs.Rectangle(-197,-132.8,394,254), new cjs.Rectangle(-197,-132.6,394,254), new cjs.Rectangle(-197,-132.5,394,254), new cjs.Rectangle(-197,-132.3,394,254), new cjs.Rectangle(-197,-132.1,394,254), new cjs.Rectangle(-197,-132,394,254), new cjs.Rectangle(-197,-131.8,394,254), new cjs.Rectangle(-197,-131.6,394,254), new cjs.Rectangle(-197,-131.5,394,254), new cjs.Rectangle(-197,-131.3,394,254), new cjs.Rectangle(-197,-131.1,394,254), new cjs.Rectangle(-197,-131,394,254), new cjs.Rectangle(-197,-130.8,394,254), new cjs.Rectangle(-197,-130.6,394,254), new cjs.Rectangle(-197,-130.5,394,254), new cjs.Rectangle(-197,-130.3,394,254), new cjs.Rectangle(-197,-130.1,394,254), new cjs.Rectangle(-197,-130,394,254), new cjs.Rectangle(-197,-129.8,394,254), new cjs.Rectangle(-197,-129.6,394,254), new cjs.Rectangle(-197,-129.5,394,254), new cjs.Rectangle(-197,-129.3,394,254), new cjs.Rectangle(-197,-129.1,394,254), new cjs.Rectangle(-197,-129,394,254), new cjs.Rectangle(-197,-128.8,394,254), new cjs.Rectangle(-197,-128.6,394,254), new cjs.Rectangle(-197,-128.5,394,254), new cjs.Rectangle(-197,-128.3,394,254), new cjs.Rectangle(-197,-128.1,394,254), new cjs.Rectangle(-197,-128,394,254), new cjs.Rectangle(-197,-127.8,394,254), new cjs.Rectangle(-197,-127.6,394,254), new cjs.Rectangle(-197,-127.5,394,254), new cjs.Rectangle(-197,-127.3,394,254), new cjs.Rectangle(-197,-127.1,394,254), new cjs.Rectangle(-197,-127,394,254)];


(lib.area_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// areas
	this.ceil_mc = new lib.area_6_2_mc();
	this.ceil_mc.setTransform(80,15);

	this.floor_mc = new lib.area_5_2_mc();
	this.floor_mc.setTransform(80,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.floor_mc},{t:this.ceil_mc}]}).wait(1));

	// main_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AuDPnIAA/NIcHAAIAAfNg");
	this.shape.setTransform(80,80,0.889,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,160,190);
p.frameBounds = [rect];


(lib.area_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// area
	this.floor_mc = new lib.area_6_1_mc();
	this.floor_mc.setTransform(195,185);

	this.ceil_mc = new lib.area_5_1_mc();
	this.ceil_mc.setTransform(195,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ceil_mc},{t:this.floor_mc}]}).wait(1));

	// main_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A+dPnIAA/OMA86AAAIAAfOg");
	this.shape.setTransform(195,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect];


(lib.area_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// areas
	this.floor_mc = new lib.area_4_2_mc();
	this.floor_mc.setTransform(195,185);

	this.ceil_mc = new lib.area_3_2_mc();
	this.ceil_mc.setTransform(195,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ceil_mc},{t:this.floor_mc}]}).wait(1));

	// main_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A+dPnIAA/OMA86AAAIAAfOg");
	this.shape.setTransform(195,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect];


(lib.area_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// area
	this.floor_mc = new lib.area_4_1_mc();
	this.floor_mc.setTransform(250,185);

	this.ceil_mc = new lib.area_3_1_mc();
	this.ceil_mc.setTransform(250,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ceil_mc},{t:this.floor_mc}]}).wait(1));

	// main_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgnDAPnIAA/OMBOHAAAIAAfOg");
	this.shape.setTransform(250,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,200);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,y:4},49).to({scaleX:1,scaleY:1,y:0},50).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_mc();
	this.instance_1.setTransform(165,-90,1,1,0,0,0,165,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-150,390,300);
p.frameBounds = [rect, rect=new cjs.Rectangle(-195,-150,390,300.1), rect, new cjs.Rectangle(-195,-150,390,300), new cjs.Rectangle(-195,-150,390,300.1), new cjs.Rectangle(-195,-150,390,300), rect=new cjs.Rectangle(-195,-150,390,300.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-195,-150,390,300.2), rect=new cjs.Rectangle(-195,-150,390,300.1), rect, rect, rect, rect=new cjs.Rectangle(-195,-150,390,300.2), rect, rect=new cjs.Rectangle(-195,-150,390,300.1), rect, rect=new cjs.Rectangle(-195,-150,390,300.2), rect, rect, rect, new cjs.Rectangle(-195,-150,390,300.1), rect=new cjs.Rectangle(-195,-150,390,300.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-195,-150,390,300.1), rect, rect=new cjs.Rectangle(-195,-150,390,300.2), rect, new cjs.Rectangle(-195,-150,390,300.1), new cjs.Rectangle(-195,-150,390,300.2), new cjs.Rectangle(-195,-150,390,300.1), new cjs.Rectangle(-195,-150,390,300.2), rect=new cjs.Rectangle(-195,-150,390,300.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-195,-150,390,300), rect=new cjs.Rectangle(-195,-150,390,300.1), rect, rect, rect, new cjs.Rectangle(-195,-150,390,300), new cjs.Rectangle(-195,-150,390,300.1), rect=new cjs.Rectangle(-195,-150,390,300), rect, rect, new cjs.Rectangle(-195,-150,390,300.1), new cjs.Rectangle(-195,-150,390,300), new cjs.Rectangle(-195,-150,390,300.1), new cjs.Rectangle(-195,-150,390,300), new cjs.Rectangle(-195,-150,390,300.1), rect=new cjs.Rectangle(-195,-150,390,300), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-195,-150,390,300.1), rect, new cjs.Rectangle(-195,-150,390,300)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-755.5},0).wait(1).to({x:-711.1},0).wait(1).to({x:-666.6},0).wait(1).to({x:-622.2},0).wait(1).to({x:-577.8},0).wait(1).to({x:-533.3},0).wait(1).to({x:-488.9},0).wait(1).to({x:-444.4},0).wait(1).to({x:-400},0).wait(1).to({x:-355.5},0).wait(1).to({x:-311.1},0).wait(1).to({x:-266.6},0).wait(1).to({x:-222.2},0).wait(1).to({x:-177.8},0).wait(1).to({x:-133.3},0).wait(1).to({x:-88.9},0).wait(1).to({x:-44.4},0).wait(1).to({x:0},0).wait(10).to({x:-25.8},0).wait(1).to({x:-51.6},0).wait(1).to({x:-77.4},0).wait(1).to({x:-103.2},0).wait(1).to({x:-129},0).wait(1).to({x:-154.8},0).wait(1).to({x:-180.6},0).wait(1).to({x:-206.4},0).wait(1).to({x:-232.2},0).wait(1).to({x:-258},0).wait(1).to({x:-283.9},0).wait(1).to({x:-309.7},0).wait(1).to({x:-335.5},0).wait(1).to({x:-361.3},0).wait(1).to({x:-387.1},0).wait(1).to({x:-412.9},0).wait(1).to({x:-438.7},0).wait(1).to({x:-464.5},0).wait(1).to({x:-490.3},0).wait(1).to({x:-516.1},0).wait(1).to({x:-541.9},0).wait(1).to({x:-567.7},0).wait(1).to({x:-593.5},0).wait(1).to({x:-619.3},0).wait(1).to({x:-645.1},0).wait(1).to({x:-670.9},0).wait(1).to({x:-696.8},0).wait(1).to({x:-722.6},0).wait(1).to({x:-748.4},0).wait(1).to({x:-774.2},0).wait(1).to({x:-800},0).wait(1));

	// curtain_2
	this.instance_1 = new lib.curtain_2_mc();
	this.instance_1.setTransform(1400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:1355.6},0).wait(1).to({x:1311.1},0).wait(1).to({x:1266.7},0).wait(1).to({x:1222.2},0).wait(1).to({x:1177.8},0).wait(1).to({x:1133.4},0).wait(1).to({x:1088.9},0).wait(1).to({x:1044.5},0).wait(1).to({x:1000},0).wait(1).to({x:955.6},0).wait(1).to({x:911.1},0).wait(1).to({x:866.7},0).wait(1).to({x:822.2},0).wait(1).to({x:777.8},0).wait(1).to({x:733.4},0).wait(1).to({x:688.9},0).wait(1).to({x:644.5},0).wait(1).to({x:600},0).wait(10).to({x:625.8},0).wait(1).to({x:651.6},0).wait(1).to({x:677.4},0).wait(1).to({x:703.3},0).wait(1).to({x:729.1},0).wait(1).to({x:754.9},0).wait(1).to({x:780.7},0).wait(1).to({x:806.5},0).wait(1).to({x:832.3},0).wait(1).to({x:858.1},0).wait(1).to({x:883.9},0).wait(1).to({x:909.7},0).wait(1).to({x:935.5},0).wait(1).to({x:961.3},0).wait(1).to({x:987.1},0).wait(1).to({x:1012.9},0).wait(1).to({x:1038.7},0).wait(1).to({x:1064.5},0).wait(1).to({x:1090.3},0).wait(1).to({x:1116.2},0).wait(1).to({x:1142},0).wait(1).to({x:1167.8},0).wait(1).to({x:1193.6},0).wait(1).to({x:1219.4},0).wait(1).to({x:1245.2},0).wait(1).to({x:1271},0).wait(1).to({x:1296.8},0).wait(1).to({x:1322.6},0).wait(1).to({x:1348.4},0).wait(1).to({x:1374.2},0).wait(1).to({x:1400},0).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.blinking_star_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_star_4_mc();
	this.instance.setTransform(0,0,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:-10},79).to({scaleX:0.81,scaleY:0.81,y:0},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-32.5,70,65.1);
p.frameBounds = [rect, new cjs.Rectangle(-35.1,-32.7,70.2,65.3), new cjs.Rectangle(-35.2,-32.9,70.4,65.5), new cjs.Rectangle(-35.3,-33.2,70.6,65.7), new cjs.Rectangle(-35.4,-33.4,70.8,65.9), new cjs.Rectangle(-35.5,-33.6,71,66.1), new cjs.Rectangle(-35.6,-33.8,71.2,66.3), new cjs.Rectangle(-35.7,-34.1,71.4,66.4), new cjs.Rectangle(-35.8,-34.3,71.6,66.6), new cjs.Rectangle(-35.9,-34.5,71.8,66.8), new cjs.Rectangle(-36,-34.7,72,67), new cjs.Rectangle(-36.1,-34.9,72.3,67.2), new cjs.Rectangle(-36.2,-35.1,72.5,67.4), new cjs.Rectangle(-36.3,-35.4,72.7,67.6), new cjs.Rectangle(-36.4,-35.6,72.9,67.8), new cjs.Rectangle(-36.5,-35.8,73.1,68), new cjs.Rectangle(-36.6,-36.1,73.3,68.1), new cjs.Rectangle(-36.7,-36.3,73.5,68.3), new cjs.Rectangle(-36.8,-36.5,73.7,68.5), new cjs.Rectangle(-36.9,-36.7,73.9,68.7), new cjs.Rectangle(-37,-36.9,74.1,68.9), new cjs.Rectangle(-37.1,-37.1,74.3,69.1), new cjs.Rectangle(-37.2,-37.4,74.5,69.3), new cjs.Rectangle(-37.3,-37.6,74.7,69.5), new cjs.Rectangle(-37.4,-37.8,74.9,69.7), new cjs.Rectangle(-37.5,-38,75.1,69.8), new cjs.Rectangle(-37.6,-38.3,75.3,70), new cjs.Rectangle(-37.7,-38.4,75.5,70.2), new cjs.Rectangle(-37.8,-38.7,75.7,70.4), new cjs.Rectangle(-37.9,-38.9,75.9,70.6), new cjs.Rectangle(-38,-39.1,76.1,70.8), new cjs.Rectangle(-38.1,-39.3,76.3,71), new cjs.Rectangle(-38.2,-39.6,76.5,71.2), new cjs.Rectangle(-38.3,-39.8,76.7,71.3), new cjs.Rectangle(-38.4,-40,76.9,71.5), new cjs.Rectangle(-38.5,-40.3,77.1,71.7), new cjs.Rectangle(-38.6,-40.4,77.3,71.9), new cjs.Rectangle(-38.7,-40.7,77.5,72.1), new cjs.Rectangle(-38.8,-40.9,77.7,72.3), new cjs.Rectangle(-38.9,-41.1,77.9,72.5), new cjs.Rectangle(-39,-41.3,78.1,72.7), new cjs.Rectangle(-39.1,-41.6,78.3,72.9), new cjs.Rectangle(-39.2,-41.8,78.5,73), new cjs.Rectangle(-39.3,-42,78.7,73.2), new cjs.Rectangle(-39.4,-42.2,78.9,73.4), new cjs.Rectangle(-39.5,-42.4,79.1,73.6), new cjs.Rectangle(-39.6,-42.6,79.3,73.8), new cjs.Rectangle(-39.7,-42.9,79.5,74), new cjs.Rectangle(-39.8,-43.1,79.7,74.2), new cjs.Rectangle(-39.9,-43.3,79.9,74.4), new cjs.Rectangle(-40,-43.6,80.2,74.6), new cjs.Rectangle(-40.1,-43.8,80.4,74.7), new cjs.Rectangle(-40.2,-44,80.6,74.9), new cjs.Rectangle(-40.3,-44.2,80.8,75.1), new cjs.Rectangle(-40.4,-44.4,81,75.3), new cjs.Rectangle(-40.5,-44.6,81.2,75.5), new cjs.Rectangle(-40.6,-44.9,81.4,75.7), new cjs.Rectangle(-40.7,-45.1,81.6,75.9), new cjs.Rectangle(-40.8,-45.3,81.8,76.1), new cjs.Rectangle(-40.9,-45.5,82,76.3), new cjs.Rectangle(-41,-45.8,82.2,76.4), new cjs.Rectangle(-41.1,-46,82.4,76.6), new cjs.Rectangle(-41.2,-46.2,82.6,76.8), new cjs.Rectangle(-41.3,-46.4,82.8,77), new cjs.Rectangle(-41.4,-46.6,83,77.2), new cjs.Rectangle(-41.5,-46.9,83.2,77.4), new cjs.Rectangle(-41.6,-47.1,83.4,77.6), new cjs.Rectangle(-41.7,-47.3,83.6,77.8), new cjs.Rectangle(-41.8,-47.5,83.8,77.9), new cjs.Rectangle(-41.9,-47.8,84,78.1), new cjs.Rectangle(-42,-47.9,84.2,78.3), new cjs.Rectangle(-42.1,-48.2,84.4,78.5), new cjs.Rectangle(-42.2,-48.4,84.6,78.7), new cjs.Rectangle(-42.3,-48.6,84.8,78.9), new cjs.Rectangle(-42.4,-48.8,85,79.1), new cjs.Rectangle(-42.5,-49.1,85.2,79.3), new cjs.Rectangle(-42.6,-49.3,85.4,79.4), new cjs.Rectangle(-42.7,-49.5,85.6,79.6), new cjs.Rectangle(-42.8,-49.7,85.8,79.8), new cjs.Rectangle(-43,-50,86,80), new cjs.Rectangle(-42.9,-49.7,85.8,79.8), new cjs.Rectangle(-42.7,-49.5,85.6,79.7), new cjs.Rectangle(-42.7,-49.3,85.4,79.4), new cjs.Rectangle(-42.5,-49.1,85.2,79.3), new cjs.Rectangle(-42.5,-48.8,85,79.1), new cjs.Rectangle(-42.4,-48.6,84.8,78.9), new cjs.Rectangle(-42.2,-48.4,84.6,78.7), new cjs.Rectangle(-42.2,-48.2,84.4,78.5), new cjs.Rectangle(-42,-48,84.2,78.3), new cjs.Rectangle(-42,-47.8,84,78.2), new cjs.Rectangle(-41.8,-47.5,83.8,77.9), new cjs.Rectangle(-41.7,-47.3,83.6,77.8), new cjs.Rectangle(-41.7,-47.1,83.4,77.6), new cjs.Rectangle(-41.5,-46.9,83.2,77.4), new cjs.Rectangle(-41.5,-46.7,83,77.2), new cjs.Rectangle(-41.3,-46.5,82.8,77), new cjs.Rectangle(-41.2,-46.2,82.6,76.9), new cjs.Rectangle(-41.2,-46,82.4,76.7), new cjs.Rectangle(-41,-45.8,82.2,76.4), new cjs.Rectangle(-41,-45.6,82,76.3), new cjs.Rectangle(-40.8,-45.3,81.8,76.1), new cjs.Rectangle(-40.8,-45.2,81.6,75.9), new cjs.Rectangle(-40.6,-44.9,81.4,75.7), new cjs.Rectangle(-40.5,-44.7,81.2,75.6), new cjs.Rectangle(-40.5,-44.5,81,75.4), new cjs.Rectangle(-40.3,-44.3,80.8,75.2), new cjs.Rectangle(-40.3,-44,80.6,74.9), new cjs.Rectangle(-40.1,-43.8,80.4,74.8), new cjs.Rectangle(-40,-43.6,80.2,74.6), new cjs.Rectangle(-40,-43.4,80,74.4), new cjs.Rectangle(-39.8,-43.2,79.8,74.3), new cjs.Rectangle(-39.8,-43,79.6,74.1), new cjs.Rectangle(-39.6,-42.7,79.4,73.9), new cjs.Rectangle(-39.5,-42.5,79.2,73.7), new cjs.Rectangle(-39.5,-42.3,79,73.5), new cjs.Rectangle(-39.3,-42.1,78.8,73.3), new cjs.Rectangle(-39.3,-41.9,78.6,73.1), new cjs.Rectangle(-39.1,-41.7,78.4,72.9), new cjs.Rectangle(-39,-41.4,78.2,72.8), new cjs.Rectangle(-39,-41.2,78,72.6), new cjs.Rectangle(-38.8,-41,77.8,72.4), new cjs.Rectangle(-38.8,-40.8,77.6,72.2), new cjs.Rectangle(-38.6,-40.5,77.4,72), new cjs.Rectangle(-38.6,-40.4,77.2,71.8), new cjs.Rectangle(-38.4,-40.1,77,71.6), new cjs.Rectangle(-38.3,-39.9,76.8,71.5), new cjs.Rectangle(-38.3,-39.7,76.6,71.3), new cjs.Rectangle(-38.1,-39.5,76.4,71.1), new cjs.Rectangle(-38.1,-39.2,76.2,70.9), new cjs.Rectangle(-37.9,-39,76,70.7), new cjs.Rectangle(-37.8,-38.8,75.8,70.5), new cjs.Rectangle(-37.8,-38.6,75.6,70.3), new cjs.Rectangle(-37.6,-38.4,75.4,70.2), new cjs.Rectangle(-37.6,-38.2,75.2,70), new cjs.Rectangle(-37.4,-37.9,75,69.8), new cjs.Rectangle(-37.3,-37.7,74.8,69.6), new cjs.Rectangle(-37.3,-37.5,74.6,69.4), new cjs.Rectangle(-37.1,-37.3,74.4,69.2), new cjs.Rectangle(-37.1,-37.1,74.2,69), new cjs.Rectangle(-36.9,-36.9,74,68.9), new cjs.Rectangle(-36.8,-36.6,73.8,68.7), new cjs.Rectangle(-36.7,-36.4,73.6,68.5), new cjs.Rectangle(-36.6,-36.2,73.4,68.3), new cjs.Rectangle(-36.6,-36,73.2,68.1), new cjs.Rectangle(-36.4,-35.7,73,67.9), new cjs.Rectangle(-36.4,-35.6,72.8,67.7), new cjs.Rectangle(-36.2,-35.3,72.6,67.5), new cjs.Rectangle(-36.1,-35.1,72.4,67.4), new cjs.Rectangle(-36.1,-34.9,72.2,67.2), new cjs.Rectangle(-35.9,-34.7,72,67), new cjs.Rectangle(-35.9,-34.4,71.8,66.8), new cjs.Rectangle(-35.7,-34.2,71.6,66.6), new cjs.Rectangle(-35.6,-34,71.4,66.4), new cjs.Rectangle(-35.5,-33.8,71.2,66.2), new cjs.Rectangle(-35.4,-33.6,71,66.1), new cjs.Rectangle(-35.4,-33.4,70.8,65.9), new cjs.Rectangle(-35.2,-33.1,70.6,65.7), new cjs.Rectangle(-35.1,-32.9,70.4,65.5), new cjs.Rectangle(-35,-32.7,70.2,65.3), new cjs.Rectangle(-35,-32.5,70,65.1)];


(lib.blinking_star_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_star_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75},49).to({scaleX:1,scaleY:1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, new cjs.Rectangle(-39.7,-39.7,79.6,79.6), new cjs.Rectangle(-39.5,-39.5,79.2,79.2), new cjs.Rectangle(-39.3,-39.3,78.8,78.8), new cjs.Rectangle(-39.1,-39.1,78.4,78.4), new cjs.Rectangle(-38.9,-38.9,78,78), new cjs.Rectangle(-38.7,-38.7,77.6,77.6), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-38.3,-38.3,76.8,76.8), new cjs.Rectangle(-38.1,-38.1,76.4,76.4), new cjs.Rectangle(-37.9,-37.9,75.9,75.9), new cjs.Rectangle(-37.7,-37.7,75.5,75.5), new cjs.Rectangle(-37.5,-37.5,75.1,75.1), new cjs.Rectangle(-37.3,-37.3,74.7,74.7), new cjs.Rectangle(-37.1,-37.1,74.3,74.3), new cjs.Rectangle(-36.9,-36.9,73.9,73.9), new cjs.Rectangle(-36.7,-36.7,73.5,73.5), new cjs.Rectangle(-36.5,-36.5,73.1,73.1), new cjs.Rectangle(-36.3,-36.3,72.7,72.7), new cjs.Rectangle(-36.1,-36.1,72.3,72.3), new cjs.Rectangle(-35.9,-35.9,71.9,71.9), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-35.5,-35.5,71,71), new cjs.Rectangle(-35.3,-35.3,70.6,70.6), new cjs.Rectangle(-35.1,-35.1,70.2,70.2), new cjs.Rectangle(-34.8,-34.8,69.8,69.8), new cjs.Rectangle(-34.6,-34.6,69.4,69.4), new cjs.Rectangle(-34.4,-34.4,69,69), new cjs.Rectangle(-34.2,-34.2,68.6,68.6), new cjs.Rectangle(-34,-34,68.2,68.2), new cjs.Rectangle(-33.8,-33.8,67.8,67.8), new cjs.Rectangle(-33.6,-33.6,67.4,67.4), new cjs.Rectangle(-33.4,-33.4,67,67), new cjs.Rectangle(-33.2,-33.2,66.6,66.6), new cjs.Rectangle(-33,-33,66.1,66.1), new cjs.Rectangle(-32.8,-32.8,65.7,65.7), new cjs.Rectangle(-32.6,-32.6,65.3,65.3), new cjs.Rectangle(-32.4,-32.4,64.9,64.9), new cjs.Rectangle(-32.2,-32.2,64.5,64.5), new cjs.Rectangle(-32,-32,64.1,64.1), new cjs.Rectangle(-31.8,-31.8,63.7,63.7), new cjs.Rectangle(-31.6,-31.6,63.3,63.3), new cjs.Rectangle(-31.4,-31.4,62.9,62.9), new cjs.Rectangle(-31.2,-31.2,62.5,62.5), new cjs.Rectangle(-31,-31,62.1,62.1), new cjs.Rectangle(-30.8,-30.8,61.7,61.7), new cjs.Rectangle(-30.6,-30.6,61.2,61.2), new cjs.Rectangle(-30.4,-30.4,60.8,60.8), new cjs.Rectangle(-30.2,-30.2,60.4,60.4), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-30.1,-30.1,60.4,60.4), new cjs.Rectangle(-30.3,-30.3,60.8,60.8), new cjs.Rectangle(-30.5,-30.5,61.2,61.2), new cjs.Rectangle(-30.7,-30.7,61.6,61.6), new cjs.Rectangle(-30.9,-30.9,62,62), new cjs.Rectangle(-31.1,-31.1,62.4,62.4), new cjs.Rectangle(-31.3,-31.3,62.8,62.8), new cjs.Rectangle(-31.5,-31.5,63.2,63.2), new cjs.Rectangle(-31.7,-31.7,63.6,63.6), new cjs.Rectangle(-31.9,-31.9,64,64), new cjs.Rectangle(-32.1,-32.1,64.4,64.4), new cjs.Rectangle(-32.3,-32.3,64.8,64.8), new cjs.Rectangle(-32.5,-32.5,65.2,65.2), new cjs.Rectangle(-32.7,-32.7,65.6,65.6), new cjs.Rectangle(-32.9,-32.9,66,66), new cjs.Rectangle(-33.1,-33.1,66.4,66.4), new cjs.Rectangle(-33.3,-33.3,66.8,66.8), new cjs.Rectangle(-33.5,-33.5,67.2,67.2), new cjs.Rectangle(-33.7,-33.7,67.6,67.6), new cjs.Rectangle(-33.9,-33.9,68,68), new cjs.Rectangle(-34.1,-34.1,68.4,68.4), new cjs.Rectangle(-34.3,-34.3,68.8,68.8), new cjs.Rectangle(-34.5,-34.5,69.2,69.2), new cjs.Rectangle(-34.7,-34.7,69.6,69.6), new cjs.Rectangle(-34.9,-34.9,70,70), new cjs.Rectangle(-35.1,-35.1,70.4,70.4), new cjs.Rectangle(-35.3,-35.3,70.8,70.8), new cjs.Rectangle(-35.5,-35.5,71.2,71.2), new cjs.Rectangle(-35.7,-35.7,71.6,71.6), new cjs.Rectangle(-35.9,-35.9,72,72), new cjs.Rectangle(-36.1,-36.1,72.4,72.4), new cjs.Rectangle(-36.3,-36.3,72.8,72.8), new cjs.Rectangle(-36.5,-36.5,73.2,73.2), new cjs.Rectangle(-36.7,-36.7,73.6,73.6), new cjs.Rectangle(-36.9,-36.9,74,74), new cjs.Rectangle(-37.1,-37.1,74.4,74.4), new cjs.Rectangle(-37.3,-37.3,74.8,74.8), new cjs.Rectangle(-37.5,-37.5,75.2,75.2), new cjs.Rectangle(-37.7,-37.7,75.6,75.6), new cjs.Rectangle(-37.9,-37.9,76,76), new cjs.Rectangle(-38.1,-38.1,76.4,76.4), new cjs.Rectangle(-38.3,-38.3,76.8,76.8), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-38.7,-38.7,77.6,77.6), new cjs.Rectangle(-38.9,-38.9,78,78), new cjs.Rectangle(-39.1,-39.1,78.4,78.4), new cjs.Rectangle(-39.3,-39.3,78.8,78.8), new cjs.Rectangle(-39.5,-39.5,79.2,79.2), new cjs.Rectangle(-39.7,-39.7,79.6,79.6), new cjs.Rectangle(-40,-40,80,80)];


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


(lib.room_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// flippings
	this.flippings_mc = new lib.flippings_2_2_mc();
	this.flippings_mc.setTransform(0,1,1,1,0,0,0,0,1);

	this.timeline.addTween(cjs.Tween.get(this.flippings_mc).wait(1));

	// area
	this.area_mc = new lib.area_2_2_mc();
	this.area_mc.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,170,190);
p.frameBounds = [rect];


(lib.room_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+cPnIAA/NMA85AAAIAAErIAAV3IAAErg");
	mask.setTransform(195,100);

	// objects
	this.objects_mc = new lib.objects_mc();

	this.objects_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// flippings
	this.flippings_mc = new lib.flippings_2_1_mc();
	this.flippings_mc.setTransform(195,100,1,1,0,0,0,195,100);

	this.timeline.addTween(cjs.Tween.get(this.flippings_mc).wait(1));

	// area
	this.area_mc = new lib.area_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect];


(lib.room_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+cPnIAA/NMA85AAAIAAErIAAV3IAAErg");
	mask.setTransform(195,100);

	// objects
	this.objects_mc = new lib.objects_mc();

	this.objects_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// flippings
	this.flippings_mc = new lib.flippings_1_2_mc();
	this.flippings_mc.setTransform(195,100,1,1,0,0,0,195,100);

	this.timeline.addTween(cjs.Tween.get(this.flippings_mc).wait(1));

	// area
	this.area_mc = new lib.area_1_2_mc();
	this.area_mc.setTransform(195,100,1,1,0,0,0,195,100);

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390,200);
p.frameBounds = [rect];


(lib.room_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnDAPnIAA/NMBOHAAAIAAErIAAV3IAAErg");
	mask.setTransform(250,100);

	// objects
	this.objects_mc = new lib.objects_mc();

	this.objects_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// flippings
	this.flippings_mc = new lib.flippings_1_1_mc();
	this.flippings_mc.setTransform(250,100,1,1,0,0,0,250,100);

	this.timeline.addTween(cjs.Tween.get(this.flippings_mc).wait(1));

	// area
	this.area_mc = new lib.area_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,500,200);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.666,0.666,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.4,-103.2,245.5,206.4);
p.frameBounds = [rect];


(lib.options_set_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.object_75 = new lib.option_15_mc();
	this.object_75.setTransform(240,0);

	this.object_74 = new lib.option_14_mc();
	this.object_74.setTransform(120,0);

	this.object_73 = new lib.option_13_mc();

	this.object_72 = new lib.option_12_mc();
	this.object_72.setTransform(-120,0);

	this.object_71 = new lib.option_11_mc();
	this.object_71.setTransform(-240,0);

	this.object_80 = new lib.option_20_mc();
	this.object_80.setTransform(240,0);

	this.object_79 = new lib.option_19_mc();
	this.object_79.setTransform(120,0);

	this.object_78 = new lib.option_18_mc();

	this.object_77 = new lib.option_17_mc();
	this.object_77.setTransform(-120,0);

	this.object_76 = new lib.option_16_mc();
	this.object_76.setTransform(-240,0);

	this.object_85 = new lib.option_65_mc();
	this.object_85.setTransform(240,0);

	this.object_84 = new lib.option_64_mc();
	this.object_84.setTransform(120,0);

	this.object_83 = new lib.option_63_mc();

	this.object_82 = new lib.option_62_mc();
	this.object_82.setTransform(-120,0);

	this.object_81 = new lib.option_61_mc();
	this.object_81.setTransform(-240,0);

	this.object_90 = new lib.option_70_mc();
	this.object_90.setTransform(240,0);

	this.object_89 = new lib.option_69_mc();
	this.object_89.setTransform(120,0);

	this.object_88 = new lib.option_68_mc();

	this.object_87 = new lib.option_67_mc();
	this.object_87.setTransform(-120,0);

	this.object_86 = new lib.option_66_mc();
	this.object_86.setTransform(-240,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_71},{t:this.object_72},{t:this.object_73},{t:this.object_74},{t:this.object_75}]}).to({state:[{t:this.object_76},{t:this.object_77},{t:this.object_78},{t:this.object_79},{t:this.object_80}]},1).to({state:[{t:this.object_81},{t:this.object_82},{t:this.object_83},{t:this.object_84},{t:this.object_85}]},1).to({state:[{t:this.object_86},{t:this.object_87},{t:this.object_88},{t:this.object_89},{t:this.object_90}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-60,600,120);
p.frameBounds = [rect, rect, rect, rect];


(lib.options_set_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.object_5 = new lib.option_5_mc();
	this.object_5.setTransform(240,0);

	this.object_4 = new lib.option_4_mc();
	this.object_4.setTransform(120,0);

	this.object_3 = new lib.option_3_mc();

	this.object_2 = new lib.option_2_mc();
	this.object_2.setTransform(-120,0);

	this.object_1 = new lib.option_1_mc();
	this.object_1.setTransform(-240,0);

	this.object_10 = new lib.option_10_mc();
	this.object_10.setTransform(240,0);

	this.object_9 = new lib.option_9_mc();
	this.object_9.setTransform(120,0);

	this.object_8 = new lib.option_8_mc();

	this.object_7 = new lib.option_7_mc();
	this.object_7.setTransform(-120,0);

	this.object_6 = new lib.option_6_mc();
	this.object_6.setTransform(-240,0);

	this.object_15 = new lib.option_25_mc();
	this.object_15.setTransform(240,0);

	this.object_14 = new lib.option_24_mc();
	this.object_14.setTransform(120,0);

	this.object_13 = new lib.option_23_mc();

	this.object_12 = new lib.option_22_mc();
	this.object_12.setTransform(-120,0);

	this.object_11 = new lib.option_21_mc();
	this.object_11.setTransform(-240,0);

	this.object_20 = new lib.option_30_mc();
	this.object_20.setTransform(240,0);

	this.object_19 = new lib.option_29_mc();
	this.object_19.setTransform(120,0);

	this.object_18 = new lib.option_28_mc();

	this.object_17 = new lib.option_27_mc();
	this.object_17.setTransform(-120,0);

	this.object_16 = new lib.option_26_mc();
	this.object_16.setTransform(-240,0);

	this.object_25 = new lib.option_35_mc();
	this.object_25.setTransform(240,0);

	this.object_24 = new lib.option_34_mc();
	this.object_24.setTransform(120,0);

	this.object_23 = new lib.option_33_mc();

	this.object_22 = new lib.option_32_mc();
	this.object_22.setTransform(-120,0);

	this.object_21 = new lib.option_31_mc();
	this.object_21.setTransform(-240,0);

	this.object_30 = new lib.option_40_mc();
	this.object_30.setTransform(240,0);

	this.object_29 = new lib.option_39_mc();
	this.object_29.setTransform(120,0);

	this.object_28 = new lib.option_38_mc();

	this.object_27 = new lib.option_37_mc();
	this.object_27.setTransform(-120,0);

	this.object_26 = new lib.option_36_mc();
	this.object_26.setTransform(-240,0);

	this.object_35 = new lib.option_45_mc();
	this.object_35.setTransform(240,0);

	this.object_34 = new lib.option_44_mc();
	this.object_34.setTransform(120,0);

	this.object_33 = new lib.option_43_mc();

	this.object_32 = new lib.option_42_mc();
	this.object_32.setTransform(-120,0);

	this.object_31 = new lib.option_41_mc();
	this.object_31.setTransform(-240,0);

	this.object_40 = new lib.option_50_mc();
	this.object_40.setTransform(240,0);

	this.object_39 = new lib.option_49_mc();
	this.object_39.setTransform(120,0);

	this.object_38 = new lib.option_48_mc();

	this.object_37 = new lib.option_47_mc();
	this.object_37.setTransform(-120,0);

	this.object_36 = new lib.option_46_mc();
	this.object_36.setTransform(-240,0);

	this.object_45 = new lib.option_55_mc();
	this.object_45.setTransform(240,0);

	this.object_44 = new lib.option_54_mc();
	this.object_44.setTransform(120,0);

	this.object_43 = new lib.option_53_mc();

	this.object_42 = new lib.option_52_mc();
	this.object_42.setTransform(-120,0);

	this.object_41 = new lib.option_51_mc();
	this.object_41.setTransform(-240,0);

	this.object_50 = new lib.option_60_mc();
	this.object_50.setTransform(240,0);

	this.object_49 = new lib.option_59_mc();
	this.object_49.setTransform(120,0);

	this.object_48 = new lib.option_58_mc();

	this.object_47 = new lib.option_57_mc();
	this.object_47.setTransform(-120,0);

	this.object_46 = new lib.option_56_mc();
	this.object_46.setTransform(-240,0);

	this.object_55 = new lib.option_75_mc();
	this.object_55.setTransform(240,0);

	this.object_54 = new lib.option_74_mc();
	this.object_54.setTransform(120,0);

	this.object_53 = new lib.option_73_mc();

	this.object_52 = new lib.option_72_mc();
	this.object_52.setTransform(-120,0);

	this.object_51 = new lib.option_71_mc();
	this.object_51.setTransform(-240,0);

	this.object_60 = new lib.option_80_mc();
	this.object_60.setTransform(240,0);

	this.object_59 = new lib.option_79_mc();
	this.object_59.setTransform(120,0);

	this.object_58 = new lib.option_78_mc();

	this.object_57 = new lib.option_77_mc();
	this.object_57.setTransform(-120,0);

	this.object_56 = new lib.option_76_mc();
	this.object_56.setTransform(-240,0);

	this.object_65 = new lib.option_85_mc();
	this.object_65.setTransform(240,0);

	this.object_64 = new lib.option_84_mc();
	this.object_64.setTransform(120,0);

	this.object_63 = new lib.option_83_mc();

	this.object_62 = new lib.option_82_mc();
	this.object_62.setTransform(-120,0);

	this.object_61 = new lib.option_81_mc();
	this.object_61.setTransform(-240,0);

	this.object_70 = new lib.option_90_mc();
	this.object_70.setTransform(240,0);

	this.object_69 = new lib.option_89_mc();
	this.object_69.setTransform(120,0);

	this.object_68 = new lib.option_88_mc();

	this.object_67 = new lib.option_87_mc();
	this.object_67.setTransform(-120,0);

	this.object_66 = new lib.option_86_mc();
	this.object_66.setTransform(-240,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.object_2},{t:this.object_3},{t:this.object_4},{t:this.object_5}]}).to({state:[{t:this.object_6},{t:this.object_7},{t:this.object_8},{t:this.object_9},{t:this.object_10}]},1).to({state:[{t:this.object_11},{t:this.object_12},{t:this.object_13},{t:this.object_14},{t:this.object_15}]},1).to({state:[{t:this.object_16},{t:this.object_17},{t:this.object_18},{t:this.object_19},{t:this.object_20}]},1).to({state:[{t:this.object_21},{t:this.object_22},{t:this.object_23},{t:this.object_24},{t:this.object_25}]},1).to({state:[{t:this.object_26},{t:this.object_27},{t:this.object_28},{t:this.object_29},{t:this.object_30}]},1).to({state:[{t:this.object_31},{t:this.object_32},{t:this.object_33},{t:this.object_34},{t:this.object_35}]},1).to({state:[{t:this.object_36},{t:this.object_37},{t:this.object_38},{t:this.object_39},{t:this.object_40}]},1).to({state:[{t:this.object_41},{t:this.object_42},{t:this.object_43},{t:this.object_44},{t:this.object_45}]},1).to({state:[{t:this.object_46},{t:this.object_47},{t:this.object_48},{t:this.object_49},{t:this.object_50}]},1).to({state:[{t:this.object_51},{t:this.object_52},{t:this.object_53},{t:this.object_54},{t:this.object_55}]},1).to({state:[{t:this.object_56},{t:this.object_57},{t:this.object_58},{t:this.object_59},{t:this.object_60}]},1).to({state:[{t:this.object_61},{t:this.object_62},{t:this.object_63},{t:this.object_64},{t:this.object_65}]},1).to({state:[{t:this.object_66},{t:this.object_67},{t:this.object_68},{t:this.object_69},{t:this.object_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-60,600,120);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-300,-70,600,130), new cjs.Rectangle(-300,-91,600,151), rect=new cjs.Rectangle(-300,-60,600,120), rect, rect, rect, rect, new cjs.Rectangle(-300,-63,600,123), new cjs.Rectangle(-300,-60,600,120)];


(lib.options_set_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.object_75 = new lib.option_15_mc();
	this.object_75.setTransform(240,0);

	this.object_74 = new lib.option_14_mc();
	this.object_74.setTransform(120,0);

	this.object_73 = new lib.option_13_mc();

	this.object_72 = new lib.option_12_mc();
	this.object_72.setTransform(-120,0);

	this.object_71 = new lib.option_11_mc();
	this.object_71.setTransform(-240,0);

	this.object_80 = new lib.option_20_mc();
	this.object_80.setTransform(240,0);

	this.object_79 = new lib.option_19_mc();
	this.object_79.setTransform(120,0);

	this.object_78 = new lib.option_18_mc();

	this.object_77 = new lib.option_17_mc();
	this.object_77.setTransform(-120,0);

	this.object_76 = new lib.option_16_mc();
	this.object_76.setTransform(-240,0);

	this.object_85 = new lib.option_65_mc();
	this.object_85.setTransform(240,0);

	this.object_84 = new lib.option_64_mc();
	this.object_84.setTransform(120,0);

	this.object_83 = new lib.option_63_mc();

	this.object_82 = new lib.option_62_mc();
	this.object_82.setTransform(-120,0);

	this.object_81 = new lib.option_61_mc();
	this.object_81.setTransform(-240,0);

	this.object_90 = new lib.option_70_mc();
	this.object_90.setTransform(240,0);

	this.object_89 = new lib.option_69_mc();
	this.object_89.setTransform(120,0);

	this.object_88 = new lib.option_68_mc();

	this.object_87 = new lib.option_67_mc();
	this.object_87.setTransform(-120,0);

	this.object_86 = new lib.option_66_mc();
	this.object_86.setTransform(-240,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_71},{t:this.object_72},{t:this.object_73},{t:this.object_74},{t:this.object_75}]}).to({state:[{t:this.object_76},{t:this.object_77},{t:this.object_78},{t:this.object_79},{t:this.object_80}]},1).to({state:[{t:this.object_81},{t:this.object_82},{t:this.object_83},{t:this.object_84},{t:this.object_85}]},1).to({state:[{t:this.object_86},{t:this.object_87},{t:this.object_88},{t:this.object_89},{t:this.object_90}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-60,600,120);
p.frameBounds = [rect, rect, rect, rect];


(lib.options_set_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.object_5 = new lib.option_5_mc();
	this.object_5.setTransform(240,0);

	this.object_4 = new lib.option_4_mc();
	this.object_4.setTransform(120,0);

	this.object_3 = new lib.option_3_mc();

	this.object_2 = new lib.option_2_mc();
	this.object_2.setTransform(-120,0);

	this.object_1 = new lib.option_1_mc();
	this.object_1.setTransform(-240,0);

	this.object_10 = new lib.option_10_mc();
	this.object_10.setTransform(240,0);

	this.object_9 = new lib.option_9_mc();
	this.object_9.setTransform(120,0);

	this.object_8 = new lib.option_8_mc();

	this.object_7 = new lib.option_7_mc();
	this.object_7.setTransform(-120,0);

	this.object_6 = new lib.option_6_mc();
	this.object_6.setTransform(-240,0);

	this.object_15 = new lib.option_25_mc();
	this.object_15.setTransform(240,0);

	this.object_14 = new lib.option_24_mc();
	this.object_14.setTransform(120,0);

	this.object_13 = new lib.option_23_mc();

	this.object_12 = new lib.option_22_mc();
	this.object_12.setTransform(-120,0);

	this.object_11 = new lib.option_21_mc();
	this.object_11.setTransform(-240,0);

	this.object_20 = new lib.option_30_mc();
	this.object_20.setTransform(240,0);

	this.object_19 = new lib.option_29_mc();
	this.object_19.setTransform(120,0);

	this.object_18 = new lib.option_28_mc();

	this.object_17 = new lib.option_27_mc();
	this.object_17.setTransform(-120,0);

	this.object_16 = new lib.option_26_mc();
	this.object_16.setTransform(-240,0);

	this.object_25 = new lib.option_35_mc();
	this.object_25.setTransform(240,0);

	this.object_24 = new lib.option_34_mc();
	this.object_24.setTransform(120,0);

	this.object_23 = new lib.option_33_mc();

	this.object_22 = new lib.option_32_mc();
	this.object_22.setTransform(-120,0);

	this.object_21 = new lib.option_31_mc();
	this.object_21.setTransform(-240,0);

	this.object_30 = new lib.option_40_mc();
	this.object_30.setTransform(240,0);

	this.object_29 = new lib.option_39_mc();
	this.object_29.setTransform(120,0);

	this.object_28 = new lib.option_38_mc();

	this.object_27 = new lib.option_37_mc();
	this.object_27.setTransform(-120,0);

	this.object_26 = new lib.option_36_mc();
	this.object_26.setTransform(-240,0);

	this.object_35 = new lib.option_45_mc();
	this.object_35.setTransform(240,0);

	this.object_34 = new lib.option_44_mc();
	this.object_34.setTransform(120,0);

	this.object_33 = new lib.option_43_mc();

	this.object_32 = new lib.option_42_mc();
	this.object_32.setTransform(-120,0);

	this.object_31 = new lib.option_41_mc();
	this.object_31.setTransform(-240,0);

	this.object_40 = new lib.option_50_mc();
	this.object_40.setTransform(240,0);

	this.object_39 = new lib.option_49_mc();
	this.object_39.setTransform(120,0);

	this.object_38 = new lib.option_48_mc();

	this.object_37 = new lib.option_47_mc();
	this.object_37.setTransform(-120,0);

	this.object_36 = new lib.option_46_mc();
	this.object_36.setTransform(-240,0);

	this.object_45 = new lib.option_55_mc();
	this.object_45.setTransform(240,0);

	this.object_44 = new lib.option_54_mc();
	this.object_44.setTransform(120,0);

	this.object_43 = new lib.option_53_mc();

	this.object_42 = new lib.option_52_mc();
	this.object_42.setTransform(-120,0);

	this.object_41 = new lib.option_51_mc();
	this.object_41.setTransform(-240,0);

	this.object_50 = new lib.option_60_mc();
	this.object_50.setTransform(240,0);

	this.object_49 = new lib.option_59_mc();
	this.object_49.setTransform(120,0);

	this.object_48 = new lib.option_58_mc();

	this.object_47 = new lib.option_57_mc();
	this.object_47.setTransform(-120,0);

	this.object_46 = new lib.option_56_mc();
	this.object_46.setTransform(-240,0);

	this.object_55 = new lib.option_75_mc();
	this.object_55.setTransform(240,0);

	this.object_54 = new lib.option_74_mc();
	this.object_54.setTransform(120,0);

	this.object_53 = new lib.option_73_mc();

	this.object_52 = new lib.option_72_mc();
	this.object_52.setTransform(-120,0);

	this.object_51 = new lib.option_71_mc();
	this.object_51.setTransform(-240,0);

	this.object_60 = new lib.option_80_mc();
	this.object_60.setTransform(240,0);

	this.object_59 = new lib.option_79_mc();
	this.object_59.setTransform(120,0);

	this.object_58 = new lib.option_78_mc();

	this.object_57 = new lib.option_77_mc();
	this.object_57.setTransform(-120,0);

	this.object_56 = new lib.option_76_mc();
	this.object_56.setTransform(-240,0);

	this.object_65 = new lib.option_85_mc();
	this.object_65.setTransform(240,0);

	this.object_64 = new lib.option_84_mc();
	this.object_64.setTransform(120,0);

	this.object_63 = new lib.option_83_mc();

	this.object_62 = new lib.option_82_mc();
	this.object_62.setTransform(-120,0);

	this.object_61 = new lib.option_81_mc();
	this.object_61.setTransform(-240,0);

	this.object_70 = new lib.option_90_mc();
	this.object_70.setTransform(240,0);

	this.object_69 = new lib.option_89_mc();
	this.object_69.setTransform(120,0);

	this.object_68 = new lib.option_88_mc();

	this.object_67 = new lib.option_87_mc();
	this.object_67.setTransform(-120,0);

	this.object_66 = new lib.option_86_mc();
	this.object_66.setTransform(-240,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.object_2},{t:this.object_3},{t:this.object_4},{t:this.object_5}]}).to({state:[{t:this.object_6},{t:this.object_7},{t:this.object_8},{t:this.object_9},{t:this.object_10}]},1).to({state:[{t:this.object_11},{t:this.object_12},{t:this.object_13},{t:this.object_14},{t:this.object_15}]},1).to({state:[{t:this.object_16},{t:this.object_17},{t:this.object_18},{t:this.object_19},{t:this.object_20}]},1).to({state:[{t:this.object_21},{t:this.object_22},{t:this.object_23},{t:this.object_24},{t:this.object_25}]},1).to({state:[{t:this.object_26},{t:this.object_27},{t:this.object_28},{t:this.object_29},{t:this.object_30}]},1).to({state:[{t:this.object_31},{t:this.object_32},{t:this.object_33},{t:this.object_34},{t:this.object_35}]},1).to({state:[{t:this.object_36},{t:this.object_37},{t:this.object_38},{t:this.object_39},{t:this.object_40}]},1).to({state:[{t:this.object_41},{t:this.object_42},{t:this.object_43},{t:this.object_44},{t:this.object_45}]},1).to({state:[{t:this.object_46},{t:this.object_47},{t:this.object_48},{t:this.object_49},{t:this.object_50}]},1).to({state:[{t:this.object_51},{t:this.object_52},{t:this.object_53},{t:this.object_54},{t:this.object_55}]},1).to({state:[{t:this.object_56},{t:this.object_57},{t:this.object_58},{t:this.object_59},{t:this.object_60}]},1).to({state:[{t:this.object_61},{t:this.object_62},{t:this.object_63},{t:this.object_64},{t:this.object_65}]},1).to({state:[{t:this.object_66},{t:this.object_67},{t:this.object_68},{t:this.object_69},{t:this.object_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-60,600,120);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-300,-70,600,130), new cjs.Rectangle(-300,-91,600,151), rect=new cjs.Rectangle(-300,-60,600,120), rect, rect, rect, rect, new cjs.Rectangle(-300,-63,600,123), new cjs.Rectangle(-300,-60,600,120)];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.666,0.666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-103.2,245.5,206.4);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-318.3,-154.9,398.3,309.8);
p.frameBounds = [rect];


(lib.background_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.background_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({scaleY:0.42},5).wait(6).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-12,76,24);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-38,-10.5,76,21.2), new cjs.Rectangle(-38,-9.2,76,18.4), new cjs.Rectangle(-38,-7.7,76,15.6), new cjs.Rectangle(-38,-6.4,76,12.8), new cjs.Rectangle(-38,-5,76,10), rect=new cjs.Rectangle(-38,-4.9,76,10), rect, rect, rect, rect, new cjs.Rectangle(-38,-5,76,10), new cjs.Rectangle(-38,-6.3,76,12.8), new cjs.Rectangle(-38,-7.7,76,15.6), new cjs.Rectangle(-38,-9.1,76,18.4), new cjs.Rectangle(-38,-10.5,76,21.2), new cjs.Rectangle(-38,-12,76,24)];


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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.blinking_star_6_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.blinking_star_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-32.5,70,65.1);
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
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
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


(lib.sets_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// set_1
	this.set_1 = new lib.options_set_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.set_1).wait(1));

	// set_2
	this.set_2 = new lib.options_set_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.set_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-60,600,120);
p.frameBounds = [rect];


(lib.sets_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// set_1
	this.set_1 = new lib.options_set_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.set_1).wait(1));

	// set_2
	this.set_2 = new lib.options_set_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.set_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-60,600,120);
p.frameBounds = [rect];


(lib.rooms_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// room_1
	this.room_1 = new lib.room_1_2_mc();
	this.room_1.setTransform(120,290);

	this.timeline.addTween(cjs.Tween.get(this.room_1).wait(1));

	// room_2
	this.room_2 = new lib.room_2_2_mc();
	this.room_2.setTransform(510,320);

	this.timeline.addTween(cjs.Tween.get(this.room_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(120,290,560,220);
p.frameBounds = [rect];


(lib.rooms_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// room_1
	this.room_1 = new lib.room_1_1_mc();
	this.room_1.setTransform(150,290);

	this.timeline.addTween(cjs.Tween.get(this.room_1).wait(1));

	// room_2
	this.room_2 = new lib.room_2_1_mc();
	this.room_2.setTransform(205,90);

	this.timeline.addTween(cjs.Tween.get(this.room_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(150,90,500,400);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-154.9,398.3,309.8);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-318.3,-154.9,398.3,309.8);
p.frameBounds = [rect];


(lib.house_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontHouse
	this.frontHouse_mc = new lib.frontHouse_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frontHouse_mc).wait(1));

	// rooms
	this.rooms_mc = new lib.rooms_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.rooms_mc).wait(1));

	// backHome
	this.backHome_mc = new lib.backHome_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.backHome_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,7.2,668.1,903.7);
p.frameBounds = [rect];


(lib.house_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontHouse
	this.frontHouse_mc = new lib.frontHouse_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frontHouse_mc).wait(1));

	// rooms
	this.rooms_mc = new lib.rooms_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.rooms_mc).wait(1));

	// backHome
	this.backHome_mc = new lib.backHome_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.backHome_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,-140,660,1050.9);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.background_6_1_mc();
	this.instance.setTransform(35.1,199.1,1,1,-10,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.blinking_star_6_mc();
	this.instance_1.setTransform(85,120,1,1,0,0,180);

	this.instance_2 = new lib.blinking_star_6_mc();
	this.instance_2.setTransform(-50,185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// decor
	this.instance_3 = new lib.background_3_1_mc();
	this.instance_3.setTransform(793,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// decor
	this.instance_4 = new lib.blinking_star_3_mc();
	this.instance_4.setTransform(900,55);

	this.instance_5 = new lib.blinking_star_3_mc();
	this.instance_5.setTransform(670,63,0.5,0.5);

	this.instance_6 = new lib.blinking_star_3_mc();
	this.instance_6.setTransform(550.1,245.1,0.625,0.625,10,0,0,0.1,0.1);

	this.instance_7 = new lib.blinking_star_3_mc();
	this.instance_7.setTransform(200,275.1,0.5,0.5,5,0,0,0,0.1);

	this.instance_8 = new lib.blinking_star_3_mc();
	this.instance_8.setTransform(315.1,55,0.625,0.625,0,0,0,0.1,0);

	this.instance_9 = new lib.blinking_star_3_mc();
	this.instance_9.setTransform(-115,45,0.5,0.5,-5,0,0,-0.1,0);

	this.instance_10 = new lib.blinking_star_3_mc();
	this.instance_10.setTransform(-97,250,0.692,0.692,5);

	this.instance_11 = new lib.blinking_star_3_mc();
	this.instance_11.setTransform(-175,130);

	this.instance_12 = new lib.blinking_star_3_mc();
	this.instance_12.setTransform(424,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// bg
	this.instance_13 = new lib.background_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-2,1215,602);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1000);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,850,0.727,0.727);
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
	this.instance.setTransform(630,260,0.872,0.872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.699;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(349.3,299.1,1,1,0,0,0,349.3,299.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1355.9);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// help_mc
	this.help_mc = new lib.help_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1000);
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
	this.instance.alpha = 0.398;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1355.9);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(400,565);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// houses
	this.houses_mc = new lib.houses_mc();

	this.timeline.addTween(cjs.Tween.get(this.houses_mc).wait(1));

	// bg
	this.instance = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-2,1215,602);
p.frameBounds = [rect];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.icon_set_2_mc();
	this.set_2.setTransform(-330,-130,0.75,0.75);

	this.set_1 = new lib.icon_set_1_mc();
	this.set_1.setTransform(-329.9,-249.9,0.75,0.75,0,0,0,0.1,0.1);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(340.1,0.1,0.625,0.625,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-340,0.1,0.625,0.625,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1},{t:this.set_2}]}).wait(1));

	// options
	this.sets_mc = new lib.sets_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.sets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-310,780,406.8);
p.frameBounds = [rect];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.icon_set_2_mc();
	this.set_2.setTransform(-330,-130,0.75,0.75);

	this.set_1 = new lib.icon_set_1_mc();
	this.set_1.setTransform(-329.9,-249.9,0.75,0.75,0,0,0,0.1,0.1);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(340.1,0.1,0.625,0.625,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-340,0.1,0.625,0.625,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1},{t:this.set_2}]}).wait(1));

	// options
	this.sets_mc = new lib.sets_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.sets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-310,780,406.8);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(730.1,410.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800,0.889,0.889);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_2_mc();
	this.panel_mc.setTransform(398.5,537.5,1,1,0,0,0,-1.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// house
	this.house_mc = new lib.house_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.house_mc).wait(1));

	// bg
	this.instance = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1191.8);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(730.1,410.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800,0.889,0.889);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_1_mc();
	this.panel_mc.setTransform(398.5,537.5,1,1,0,0,0,-1.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// house
	this.house_mc = new lib.house_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.house_mc).wait(1));

	// bg
	this.instance = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1191.8);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(540,540);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(260,540);

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

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// counter
	this.counterPage_mc = new lib.counterPage_mc();
	this.counterPage_mc.setTransform(400,540,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.counterPage_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1089.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

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

	this.instance_6 = new lib.RedirectScreen();

	this.instance_7 = new lib.ResultScreen();

	this.instance_8 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(255,50);

	this.instance_9 = new lib.Cursor();
	this.instance_9.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_10 = new lib.OrientationLockScreen();

	this.instance_11 = new lib.CurtainScreen();

	this.instance_12 = new lib.object_90_mc();
	this.instance_12.setTransform(635.9,2275.1);

	this.instance_13 = new lib.object_89_mc();
	this.instance_13.setTransform(523,2277.1);

	this.instance_14 = new lib.object_88_mc();
	this.instance_14.setTransform(398.4,2277.1);

	this.instance_15 = new lib.object_87_mc();
	this.instance_15.setTransform(283.6,2277.1);

	this.instance_16 = new lib.object_86_mc();
	this.instance_16.setTransform(150.9,2270.6);

	this.instance_17 = new lib.object_85_mc();
	this.instance_17.setTransform(631.9,2126.1);

	this.instance_18 = new lib.object_84_mc();
	this.instance_18.setTransform(525,2134.1);

	this.instance_19 = new lib.object_83_mc();
	this.instance_19.setTransform(408,2129.1);

	this.instance_20 = new lib.object_82_mc();
	this.instance_20.setTransform(281,2130.1);

	this.instance_21 = new lib.object_81_mc();
	this.instance_21.setTransform(155,2134);

	this.instance_22 = new lib.object_80_mc();
	this.instance_22.setTransform(644.4,1968.1);

	this.instance_23 = new lib.object_79_mc();
	this.instance_23.setTransform(529.5,1966.6);

	this.instance_24 = new lib.object_78_mc();
	this.instance_24.setTransform(410.9,1967.1);

	this.instance_25 = new lib.object_77_mc();
	this.instance_25.setTransform(288,1938.5);

	this.instance_26 = new lib.object_76_mc();
	this.instance_26.setTransform(163,1930.5);

	this.instance_27 = new lib.object_75_mc();
	this.instance_27.setTransform(636.4,1827.5);

	this.instance_28 = new lib.object_74_mc();
	this.instance_28.setTransform(525,1840);

	this.instance_29 = new lib.object_73_mc();
	this.instance_29.setTransform(396.9,1821.5);

	this.instance_30 = new lib.object_72_mc();
	this.instance_30.setTransform(271.5,1804);

	this.instance_31 = new lib.object_71_mc();
	this.instance_31.setTransform(153,1826);

	this.instance_32 = new lib.object_70_mc();
	this.instance_32.setTransform(636.5,1699.5);

	this.instance_33 = new lib.object_69_mc();
	this.instance_33.setTransform(531.5,1700);

	this.instance_34 = new lib.object_68_mc();
	this.instance_34.setTransform(400.9,1686.3);

	this.instance_35 = new lib.object_67_mc();
	this.instance_35.setTransform(276.3,1669.3);

	this.instance_36 = new lib.object_66_mc();
	this.instance_36.setTransform(153.3,1674.8);

	this.instance_37 = new lib.object_65_mc();
	this.instance_37.setTransform(638.3,1542.3);

	this.instance_38 = new lib.object_64_mc();
	this.instance_38.setTransform(530.3,1583.3);

	this.instance_39 = new lib.object_63_mc();
	this.instance_39.setTransform(408.3,1581.3);

	this.instance_40 = new lib.object_62_mc();
	this.instance_40.setTransform(279.3,1567.8);

	this.instance_41 = new lib.object_61_mc();
	this.instance_41.setTransform(156,1576.5);

	this.instance_42 = new lib.object_60_mc();
	this.instance_42.setTransform(646.9,1445);

	this.instance_43 = new lib.object_59_mc();
	this.instance_43.setTransform(531.8,1452);

	this.instance_44 = new lib.object_58_mc();
	this.instance_44.setTransform(407,1454.5);

	this.instance_45 = new lib.object_57_mc();
	this.instance_45.setTransform(285.3,1392);

	this.instance_46 = new lib.object_56_mc();
	this.instance_46.setTransform(158.2,1421);

	this.instance_47 = new lib.object_55_mc();
	this.instance_47.setTransform(631.9,1308);

	this.instance_48 = new lib.object_54_mc();
	this.instance_48.setTransform(511,1298);

	this.instance_49 = new lib.object_53_mc();
	this.instance_49.setTransform(408,1297);

	this.instance_50 = new lib.object_52_mc();
	this.instance_50.setTransform(284,1298);

	this.instance_51 = new lib.object_51_mc();
	this.instance_51.setTransform(157,1301);

	this.instance_52 = new lib.object_50_mc();
	this.instance_52.setTransform(636,1180);

	this.instance_53 = new lib.object_49_mc();
	this.instance_53.setTransform(521.8,1177);

	this.instance_54 = new lib.object_48_mc();
	this.instance_54.setTransform(406,1200.9);

	this.instance_55 = new lib.object_47_mc();
	this.instance_55.setTransform(289.1,1201.9);

	this.instance_56 = new lib.object_46_mc();
	this.instance_56.setTransform(162,1179);

	this.instance_57 = new lib.object_45_mc();
	this.instance_57.setTransform(656,1074.2);

	this.instance_58 = new lib.object_44_mc();
	this.instance_58.setTransform(518.9,1090);

	this.instance_59 = new lib.object_43_mc();
	this.instance_59.setTransform(399.7,1059.7);

	this.instance_60 = new lib.object_42_mc();
	this.instance_60.setTransform(286.7,1081.7);

	this.instance_61 = new lib.object_41_mc();
	this.instance_61.setTransform(172.7,1083.8);

	this.instance_62 = new lib.object_40_mc();
	this.instance_62.setTransform(666,988.9);

	this.instance_63 = new lib.object_39_mc();
	this.instance_63.setTransform(520.2,968);

	this.instance_64 = new lib.object_38_mc();
	this.instance_64.setTransform(408,982.9);

	this.instance_65 = new lib.object_37_mc();
	this.instance_65.setTransform(284.9,990.9);

	this.instance_66 = new lib.object_36_mc();
	this.instance_66.setTransform(160.1,942.1);

	this.instance_67 = new lib.object_35_mc();
	this.instance_67.setTransform(630,854.9);

	this.instance_68 = new lib.object_34_mc();
	this.instance_68.setTransform(517.9,855.1);

	this.instance_69 = new lib.object_33_mc();
	this.instance_69.setTransform(405.9,848.9);

	this.instance_70 = new lib.object_32_mc();
	this.instance_70.setTransform(284.9,842.9);

	this.instance_71 = new lib.object_31_mc();
	this.instance_71.setTransform(160.9,841.9);

	this.instance_72 = new lib.object_30_mc();
	this.instance_72.setTransform(622.8,656.1);

	this.instance_73 = new lib.object_29_mc();
	this.instance_73.setTransform(524.9,686.9);

	this.instance_74 = new lib.object_28_mc();
	this.instance_74.setTransform(407.9,711.9);

	this.instance_75 = new lib.object_27_mc();
	this.instance_75.setTransform(286.9,688.9);

	this.instance_76 = new lib.object_26_mc();
	this.instance_76.setTransform(155.9,706.9);

	this.instance_77 = new lib.object_25_mc();
	this.instance_77.setTransform(622.9,571.9);

	this.instance_78 = new lib.object_24_mc();
	this.instance_78.setTransform(537.2,497.9);

	this.instance_79 = new lib.object_23_mc();
	this.instance_79.setTransform(430,554.9);

	this.instance_80 = new lib.object_22_mc();
	this.instance_80.setTransform(292.9,555.9);

	this.instance_81 = new lib.object_21_mc();
	this.instance_81.setTransform(140.7,558.9);

	this.instance_82 = new lib.object_20_mc();
	this.instance_82.setTransform(612,441);

	this.instance_83 = new lib.object_19_mc();
	this.instance_83.setTransform(517,461);

	this.instance_84 = new lib.object_18_mc();
	this.instance_84.setTransform(415.2,461);

	this.instance_85 = new lib.object_17_mc();
	this.instance_85.setTransform(286,419);

	this.instance_86 = new lib.object_16_mc();
	this.instance_86.setTransform(152.9,445);

	this.instance_87 = new lib.object_15_mc();
	this.instance_87.setTransform(615,309);

	this.instance_88 = new lib.object_14_mc();
	this.instance_88.setTransform(531,315);

	this.instance_89 = new lib.object_13_mc();
	this.instance_89.setTransform(419.4,288.9);

	this.instance_90 = new lib.object_12_mc();
	this.instance_90.setTransform(287.3,288.9);

	this.instance_91 = new lib.object_11_mc();
	this.instance_91.setTransform(168.9,310.9);

	this.instance_92 = new lib.object_10_mc();
	this.instance_92.setTransform(628.4,209);

	this.instance_93 = new lib.object_9_mc();
	this.instance_93.setTransform(534,209);

	this.instance_94 = new lib.object_8_mc();
	this.instance_94.setTransform(429,227);

	this.instance_95 = new lib.object_7_mc();
	this.instance_95.setTransform(294,225);

	this.instance_96 = new lib.object_6_mc();
	this.instance_96.setTransform(163,179);

	this.instance_97 = new lib.object_5_mc();
	this.instance_97.setTransform(619,94);

	this.instance_98 = new lib.object_4_mc();
	this.instance_98.setTransform(527,73);

	this.instance_99 = new lib.object_3_mc();
	this.instance_99.setTransform(429.2,93);

	this.instance_100 = new lib.object_2_mc();
	this.instance_100.setTransform(306.2,91);

	this.instance_101 = new lib.object_1_mc();
	this.instance_101.setTransform(173,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_9},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},1).to({state:[]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1355.9), rect, rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1191.8), rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1080), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,15,263,70), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1000,0,2800,600), new cjs.Rectangle(60.7,-46.5,700.9,2329), rect=null, rect, rect, rect, rect, rect, rect];


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