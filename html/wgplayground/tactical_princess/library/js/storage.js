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
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,800,600]]},
		{name:"storage_atlas_4", frames: [[0,602,540,540],[542,802,580,440],[0,0,600,600],[602,0,371,800]]},
		{name:"storage_atlas_5", frames: [[482,644,295,600],[0,442,1200,200],[0,644,480,440],[779,644,505,323],[0,0,580,440],[582,0,580,440]]},
		{name:"storage_atlas_6", frames: [[476,984,490,260],[0,402,500,300],[502,382,231,600],[0,0,400,400],[402,0,380,380],[0,704,474,286],[735,644,490,260],[735,382,490,260],[784,0,490,260]]},
		{name:"storage_atlas_7", frames: [[0,786,260,480],[984,432,280,430],[984,0,280,430],[262,864,280,430],[544,864,280,430],[826,864,280,430],[0,0,490,260],[492,0,490,260],[0,262,490,260],[492,262,490,260],[0,524,490,260]]},
		{name:"storage_atlas_8", frames: [[548,1061,330,220],[216,1076,330,220],[886,0,280,280],[282,0,300,300],[302,302,300,300],[216,774,300,300],[584,0,300,300],[690,302,168,455],[518,604,170,455],[886,282,170,455],[0,774,214,454],[0,0,280,430],[0,432,300,340],[690,759,330,220],[880,981,330,220]]},
		{name:"storage_atlas_9", frames: [[657,520,190,190],[912,302,200,300],[1095,0,200,300],[465,520,190,190],[0,750,260,260],[833,0,260,260],[0,1012,260,260],[571,0,260,260],[332,306,320,210],[1041,702,180,180],[429,969,124,331],[262,969,165,321],[555,969,273,144],[555,1115,273,144],[262,518,201,297],[1026,1057,178,177],[1114,302,174,208],[849,604,190,190],[332,0,237,304],[0,444,237,304],[1114,512,186,188],[830,988,194,178],[1028,884,187,171],[644,712,190,190],[836,796,190,190],[654,262,256,256],[0,0,330,220],[0,222,330,220],[262,817,380,150]]},
		{name:"storage_atlas_10", frames: [[354,630,120,120],[476,630,120,120],[452,508,120,120],[1155,453,128,128],[110,485,46,46],[672,82,160,160],[0,161,160,160],[188,122,160,160],[674,244,160,160],[1014,0,160,160],[512,244,160,160],[996,162,160,160],[350,122,160,160],[162,284,160,160],[834,82,160,160],[324,284,160,160],[574,508,120,120],[1176,0,120,120],[110,590,120,120],[512,122,120,120],[232,601,120,120],[718,406,60,319],[634,122,32,74],[897,876,108,62],[558,770,109,74],[435,752,121,102],[338,752,95,139],[236,723,100,133],[1194,870,79,80],[1182,583,105,52],[314,446,136,153],[700,763,95,125],[780,540,197,49],[0,485,56,272],[435,856,196,46],[110,723,124,110],[836,244,112,78],[598,630,100,138],[379,904,56,56],[321,893,56,56],[52,835,94,82],[1025,453,128,144],[897,763,96,111],[1096,856,96,78],[1158,162,129,187],[1204,763,90,105],[1096,763,106,91],[797,763,98,115],[780,599,400,40],[675,947,370,12],[780,458,220,80],[672,0,340,80],[902,641,120,120],[780,641,120,120],[950,244,40,55],[1257,351,40,43],[996,82,10,11],[250,858,69,94],[148,858,100,73],[797,880,57,60],[995,763,99,100],[1209,122,23,38],[1176,122,31,31],[780,406,50,50],[633,846,40,147],[162,446,150,142],[0,759,50,210],[58,485,50,297],[836,324,187,132],[0,0,186,159],[0,323,160,160],[1007,865,80,80],[1146,641,120,120],[1024,641,120,120],[430,0,240,120],[188,0,240,120],[1025,351,230,100],[486,406,230,100]]}
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
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_next_round_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_start_level_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_help_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bullet_mark_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.card_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.card_10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.card_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.card_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.card_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.card_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.card_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.card_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.card_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.card_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.card_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.countdown_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.countdown_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.countdown_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.countdown_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.countdown_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
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
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decorative_pillow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.g1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.g1_bot1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.g1_gun1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.g1_pist = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.g1_shad = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.g1_shorts1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.g1_top1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.g1_tsirt = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.g1_und = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.g2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.g2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.g2_bot1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.g2_gun1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.g2_gun1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.g2_shirt1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.g2_shorts = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.g2_top1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.g2_und = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.g2shad = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.g3_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.g3_bot1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.g3_gun1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.g3_shad = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.g3_shirt = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.g3_shorts1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.g3_top1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.g3_under = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_main_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_main_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_main_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
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



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mini_girl2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.mini_girl_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mini_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.mini_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.prize_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ray_of_light_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.smoke_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_help_en_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_help_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_win_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.title_win_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-180,-71,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-71,360,142.1);
p.frameBounds = [rect];


(lib.redirect_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_hero_img();
	this.instance.setTransform(-218,-200,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-200,436.4,400);
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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


(lib.ray_of_light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ray_of_light_img();
	this.instance.setTransform(-666.7,-500,1.667,1.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-666.7,-500,1333.5,1000);
p.frameBounds = [rect];


(lib.prize_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.prize_1_img();
	this.instance.setTransform(-155,-166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-166,300,340);
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
	this.instance.setTransform(-140,-215);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-140,-215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUTAg0MAAAhBnMAomAAAMAAABBng");
	this.shape.setTransform(-10,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-215,280,430);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-140,-215);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-140,-215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUTAg0MAAAhBnMAomAAAMAAABBng");
	this.shape.setTransform(-10,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-215,280,430);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-140,-215);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-140,-215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUTAg0MAAAhBnMAomAAAMAAABBng");
	this.shape.setTransform(-10,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-215,280,430);
p.frameBounds = [rect, rect, rect];


(lib.jasmine_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_top1();
	this.instance.setTransform(-78.7,-59.2);

	this.instance_1 = new lib.g2_shirt1();
	this.instance_1.setTransform(-51.5,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.7,-59.2,136,153);
p.frameBounds = [rect, new cjs.Rectangle(-51.5,-48,79,80)];


(lib.jasmine_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_bot1();
	this.instance.setTransform(-53.6,-367.5);

	this.instance_1 = new lib.g2_shorts();
	this.instance_1.setTransform(-8.8,-346.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.6,-367.5,165,321);
p.frameBounds = [rect, new cjs.Rectangle(-8.8,-346.6,105,52)];


(lib.jas_fringle_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_2_fringe1_img();
	this.instance.setTransform(-38,-192);

	this.instance_1 = new lib.hero_2_fringe0_img();
	this.instance_1.setTransform(-23.5,-173.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-192,129,187);
p.frameBounds = [rect, new cjs.Rectangle(-23.5,-173.5,96,78)];


(lib.indicator_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.indicator_1_img();
	this.instance.setTransform(-200,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,400,40);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,370,12);
p.frameBounds = [rect];


(lib.hero_3_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_3_main_img();
	this.instance.setTransform(-135,-275,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-275,270.5,550);
p.frameBounds = [rect];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_2_main_img();
	this.instance.setTransform(-106,-275,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-275,211.8,550);
p.frameBounds = [rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_1_main_img();
	this.instance.setTransform(-139,-300,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139,-300,278.3,600);
p.frameBounds = [rect];


(lib.g3_gun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmiX4MAAAgvvINGAAMAAAAvvgAANr3QgBALgGA+IgGA7QALAfANAvQAIAaAKAAQAaAAAAgtQAAgNgHgYQgGgZAAgGQAAgLAYgiQAZghAAgVQAAgNgIgiQgGgWgHgPg");
	mask.setTransform(34.4,144.5);

	// Layer 1
	this.instance = new lib.g3_gun1();
	this.instance.setTransform(10.1,-4.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.1,-4.1,56,272);
p.frameBounds = [rect];


(lib.g2_gunf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmfBWIgPhKQggikAAiPQAAiCAjiPIAYhiINiEwIiuQFgAkQmCQgMAWgRAzIAAADIhQAUIgDBeIABAHIAPA3IARBAIBWgcIAAgRQAAgwgWghQgQgYgTgHIACgRIAMgFIASgJIgBABIAAAAQgDAKAAADQAAAMAIAIQAHAHAKAAQAKAAAMgNIgCAJQAAAKAIAGQAHAFAJAAQALAAAMgPIADgEIAAADQAAAJAMAIQALAGAIAAQAKAAAMgMQAIgKAagkIADABQAHAAAEgHQACgGAAgFQAAgQgfgcQgFgFgpgYQgfgSgJgHIACgOQAAgegfAAQgPAAgPAYg");
	mask.setTransform(243.1,95.5);

	// Layer 1
	this.instance = new lib.g2_gun1_img();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(196.8,28.8,76.3,115.2);
p.frameBounds = [rect];


(lib.g1_pistol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj6kwIBigZIASg4QAdgUAeAJIAVBAIAHAFQApA2ASAcIAEAGIAFBbIAAAAIgJAuQAAANADAMIACAIIABgBIAlguIABgOIAlgyIADgQIAggmIBLBaIAwGqIkKB2g");
	mask.setTransform(20.7,42);

	// Layer 1
	this.instance = new lib.g1_pist();
	this.instance.setTransform(3,-3.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3,2,32,68.6);
p.frameBounds = [rect];


(lib.g1_gun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkpYyMAAAgo/IB7okIHAAqIAYFnIhhDYIABElIgvA8IgTBBIgWBGIABACQAKAaAMAsQAJAdALAAQAPAAAIgMQAIgNAAgXQAAgYgHgdIgDgKQAHgJAMgLIAmgnQgVBeAAA5QAABCARBKQATBRAiA3IAHBeIAAZOg");
	mask.setTransform(18.8,147.7);

	// Layer 1
	this.instance = new lib.g1_gun1();
	this.instance.setTransform(-4.5,-14.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.5,-10.9,53.2,315.2);
p.frameBounds = [rect];


(lib.g1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_pist();
	this.instance.setTransform(54.9,-52,1.715,1.715,0,0,180);

	this.instance_1 = new lib.g1_gun1();
	this.instance_1.setTransform(-84.6,-273.4,1.715,1.715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.6,-273.4,139.5,547);
p.frameBounds = [rect];


(lib.decorative_pillow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decorative_pillow_img();
	this.instance.setTransform(-160,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-105,320,210);
p.frameBounds = [rect];


(lib.countdown_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.countdown_0_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_0_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_img();
	this.instance_1.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_10_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_9_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_8_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_7_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_6_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_5_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_4_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.bullet_mark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bullet_mark_img();
	this.instance.setTransform(-23,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-21,46,46);
p.frameBounds = [rect];


(lib.body_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,es:4,pt:5,tr:6,ja:7});

	// text
	this.instance = new lib.title_win_en_img();
	this.instance.setTransform(-211,-60);

	this.instance_1 = new lib.title_win_ru_img();
	this.instance_1.setTransform(-210,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(6));

	// decor
	this.instance_2 = new lib.text_bubble_2_img();
	this.instance_2.setTransform(-275,-126,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8));

	// decor
	this.instance_3 = new lib.mini_girl_img();
	this.instance_3.setTransform(-112,32,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275,-126,364,415.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5,"tr":6,"ja":7});

	// graph
	this.instance = new lib.title_start_level_en_img();
	this.instance.setTransform(-165,-110);

	this.instance_1 = new lib.title_start_level_ru_img();
	this.instance_1.setTransform(-165,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,330,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5,"tr":6,"ja":7});

	// graph
	this.instance = new lib.title_next_round_en_img();
	this.instance.setTransform(-165,-110);

	this.instance_1 = new lib.title_next_round_ru_img();
	this.instance_1.setTransform(-165,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,330,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5,"tr":6,"ja":7});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-245,-130);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-245,-130);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-245,-130);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-245,-130);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-245,-130);

	this.instance_5 = new lib.title_pt_img();
	this.instance_5.setTransform(-245,-130);

	this.instance_6 = new lib.title_tr_img();
	this.instance_6.setTransform(-245,-130);

	this.instance_7 = new lib.title_ja_img();
	this.instance_7.setTransform(-245,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-130,490,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5,"tr":6,"ja":7});

	// text
	this.instance = new lib.title_loss_en_img();
	this.instance.setTransform(-123,-224);

	this.instance_1 = new lib.title_loss_ru_img();
	this.instance_1.setTransform(-123,-224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(6));

	// decor
	this.instance_2 = new lib.text_bubble_1_img();
	this.instance_2.setTransform(-183,-270,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8));

	// decor
	this.instance_3 = new lib.mini_girl2_img();
	this.instance_3.setTransform(-124,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-270,366.1,524);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5,"tr":6,"ja":7});

	// graph
	this.instance = new lib.title_help_en_img();
	this.instance.setTransform(-290,-220);

	this.instance_1 = new lib.title_help_ru_img();
	this.instance_1.setTransform(-290,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-220,580,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-245,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-130,490,260);
p.frameBounds = [rect];


(lib.bg_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_help_img();
	this.instance.setTransform(-290,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-220,580,440);
p.frameBounds = [rect];


(lib.bg_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_start_level_img();
	this.instance.setTransform(-165,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,330,220);
p.frameBounds = [rect];


(lib.bg_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_next_round_img();
	this.instance.setTransform(-165,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,330,220);
p.frameBounds = [rect];


(lib.bg_hero_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_hero_img();
	this.instance.setTransform(-138.1,-255,1.063,1.063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.1,-255,276.3,510);
p.frameBounds = [rect];


(lib.bg_hero_mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_hero_img();
	this.instance.setTransform(-138.1,-255,1.063,1.063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.1,-255,276.3,510);
p.frameBounds = [rect];


(lib.bg_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_hero_img();
	this.instance.setTransform(-137.6,-254,1.058,1.058);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.6,-254,275.2,508);
p.frameBounds = [rect];


(lib.bg_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_cards_img();
	this.instance.setTransform(-270,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.ariel_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g3_top1();
	this.instance.setTransform(-58.8,-52.7);

	this.instance_1 = new lib.g3_shirt();
	this.instance_1.setTransform(-37.3,-38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.8,-52.7,178,177);
p.frameBounds = [rect, new cjs.Rectangle(-37.3,-38.2,124,110)];


(lib.ariel_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g3_bot1();
	this.instance.setTransform(-85.8,-327.2);

	this.instance_1 = new lib.g3_shorts1();
	this.instance_1.setTransform(-75.5,-343);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-327.2,201,297);
p.frameBounds = [rect, new cjs.Rectangle(-75.5,-343,112,78)];


(lib.ariel_fringle_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_3_fringe1_img();
	this.instance.setTransform(-76.5,-130.5);

	this.instance_1 = new lib.hero_3_fringe0_img();
	this.instance_1.setTransform(-36.5,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-130.5,174,208);
p.frameBounds = [rect, new cjs.Rectangle(-36.5,-130,106,91)];


(lib.anna_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_top1();
	this.instance.setTransform(-39.8,-48.2);

	this.instance_1 = new lib.g1_tsirt();
	this.instance_1.setTransform(-45,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.8,-48.2,121,102);
p.frameBounds = [rect, new cjs.Rectangle(-45,-45.9,95,139)];


(lib.anna_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_bot1();
	this.instance.setTransform(-32.8,-330.7);

	this.instance_1 = new lib.g1_shorts1();
	this.instance_1.setTransform(-25.4,-321.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.8,-330.7,124,331);
p.frameBounds = [rect, new cjs.Rectangle(-25.4,-321.2,109,74)];


(lib.anna_fringle_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_1_fringe1_img();
	this.instance.setTransform(-49,-123);

	this.instance_1 = new lib.hero_1_fringe0_img();
	this.instance_1.setTransform(-34.8,-109.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-123,128,144);
p.frameBounds = [rect, new cjs.Rectangle(-34.8,-109.2,94,82)];


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
	this.shape.graphics.f("#FFFFFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.smoke_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.smoke_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EhOHAPnIAA/OMCcOAAAIAAfOg");
	this.shape.setTransform(600,100,1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,256);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-28,-28);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
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
	this.instance.setTransform(-65,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-72,128,128);
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


(lib.mini_play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mini_play_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.mini_play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mini_play_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_hero_mc();
	this.instance.setTransform(75,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.redirect_1_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-223,483.4,413);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.redirect_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.redirect_3_mc();
	this.instance_2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-223,503.4,493.1);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.title_win_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_win_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-274.5,-125.5,364,415.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-245,-130,490,260);
p.frameBounds = [rect];


(lib.title_loss_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_loss_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-270,366.1,524);
p.frameBounds = [rect];


(lib.title_help_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_help_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_help_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-220,580.5,440.5);
p.frameBounds = [rect];


(lib.prize_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1_round_1:0,location_1_round_2:1,location_1_round_3:2,location_1_round_4:3,location_2_round_1:4,location_2_round_2:5,location_2_round_3:6,location_2_round_4:7,location_3_round_1:8,location_3_round_2:9,location_3_round_3:10,location_3_round_4:11});

	// graph
	this.instance = new lib.hero_1_fringe1_img();
	this.instance.setTransform(-107,-326,1.944,1.944);

	this.instance_1 = new lib.g1_bot1();
	this.instance_1.setTransform(-151,132,1.511,1.511);

	this.instance_2 = new lib.g1();
	this.instance_2.setTransform(2.6,182.3,1,1,105);

	this.instance_3 = new lib.g1_top1();
	this.instance_3.setTransform(-71,-52,1.983,1.984);

	this.instance_4 = new lib.hero_2_fringe1_img();
	this.instance_4.setTransform(-106,-370,1.872,1.872);

	this.instance_5 = new lib.g2_bot1();
	this.instance_5.setTransform(-188,112,1.576,1.576);

	this.instance_6 = new lib.g2_gun1_img();
	this.instance_6.setTransform(-224,61,1.835,1.835);

	this.instance_7 = new lib.g2_top1();
	this.instance_7.setTransform(-106,-87,1.912,1.912);

	this.instance_8 = new lib.hero_3_fringe1_img();
	this.instance_8.setTransform(-165,-332,1.954,1.954);

	this.instance_9 = new lib.g3_bot1();
	this.instance_9.setTransform(-152,163,1.443,1.443);

	this.instance_10 = new lib.g3_gun1();
	this.instance_10.setTransform(238.8,187.3,1.823,1.823,105);

	this.instance_11 = new lib.g3_top1();
	this.instance_11.setTransform(-141,-86,1.91,1.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// decor
	this.instance_12 = new lib.decorative_pillow_mc();
	this.instance_12.setTransform(20,180);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,-326,248.8,279.9);
p.frameBounds = [rect, new cjs.Rectangle(-151,132,187.4,500), new cjs.Rectangle(-266.3,29.8,555,255.2), new cjs.Rectangle(-71,-52,240,202.3), new cjs.Rectangle(-106,-370,241.5,350), new cjs.Rectangle(-188,112,260,505.9), new cjs.Rectangle(-224,61,500.9,264.2), new cjs.Rectangle(-106,-87,260,292.6), new cjs.Rectangle(-165,-332,340,406.5), new cjs.Rectangle(-152,163,290,428.6), new cjs.Rectangle(-266.5,59,505.3,226.9), new cjs.Rectangle(-141,-86,340,338.1)];


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


(lib.nav_mc = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(260,-50);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-260,-50);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-265,800,530);
p.frameBounds = [rect];


(lib.indicator_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,370,12);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAHA7IgHgHIgGAHI8AAAQgVAAgPgOQgPgPAAgUIAAgSQAAgVAPgPQAPgPAVAAIcBAAIAFAIIAHgIIcBAAQAUAAAOAPQAQAPgBAVIAAASQABAUgQAPQgOAOgUAAg");
	mask.setTransform(185,6);

	// band
	this.band_mc = new lib.indicator_3_mc();
	this.band_mc.setTransform(0,0,0.003,1);

	this.band_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.band_mc).to({scaleX:1},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,12);
p.frameBounds = [rect, new cjs.Rectangle(0,0,4.7,12), new cjs.Rectangle(0,0,8.5,12), new cjs.Rectangle(0,0,12.2,12), new cjs.Rectangle(0,0,15.9,12), new cjs.Rectangle(0,0,19.7,12), new cjs.Rectangle(0,0,23.4,12), new cjs.Rectangle(0,0,27.1,12), new cjs.Rectangle(0,0,30.8,12), new cjs.Rectangle(0,0,34.6,12), new cjs.Rectangle(0,0,38.3,12), new cjs.Rectangle(0,0,42,12), new cjs.Rectangle(0,0,45.8,12), new cjs.Rectangle(0,0,49.5,12), new cjs.Rectangle(0,0,53.2,12), new cjs.Rectangle(0,0,56.9,12), new cjs.Rectangle(0,0,60.7,12), new cjs.Rectangle(0,0,64.4,12), new cjs.Rectangle(0,0,68.1,12), new cjs.Rectangle(0,0,71.8,12), new cjs.Rectangle(0,0,75.6,12), new cjs.Rectangle(0,0,79.3,12), new cjs.Rectangle(0,0,83,12), new cjs.Rectangle(0,0,86.7,12), new cjs.Rectangle(0,0,90.5,12), new cjs.Rectangle(0,0,94.2,12), new cjs.Rectangle(0,0,97.9,12), new cjs.Rectangle(0,0,101.7,12), new cjs.Rectangle(0,0,105.4,12), new cjs.Rectangle(0,0,109.1,12), new cjs.Rectangle(0,0,112.8,12), new cjs.Rectangle(0,0,116.6,12), new cjs.Rectangle(0,0,120.3,12), new cjs.Rectangle(0,0,124,12), new cjs.Rectangle(0,0,127.7,12), new cjs.Rectangle(0,0,131.5,12), new cjs.Rectangle(0,0,135.2,12), new cjs.Rectangle(0,0,138.9,12), new cjs.Rectangle(0,0,142.7,12), new cjs.Rectangle(0,0,146.4,12), new cjs.Rectangle(0,0,150.1,12), new cjs.Rectangle(0,0,153.8,12), new cjs.Rectangle(0,0,157.6,12), new cjs.Rectangle(0,0,161.3,12), new cjs.Rectangle(0,0,165,12), new cjs.Rectangle(0,0,168.8,12), new cjs.Rectangle(0,0,172.5,12), new cjs.Rectangle(0,0,176.2,12), new cjs.Rectangle(0,0,179.9,12), new cjs.Rectangle(0,0,183.7,12), new cjs.Rectangle(0,0,187.4,12), new cjs.Rectangle(0,0,191.1,12), new cjs.Rectangle(0,0,194.8,12), new cjs.Rectangle(0,0,198.6,12), new cjs.Rectangle(0,0,202.3,12), new cjs.Rectangle(0,0,206,12), new cjs.Rectangle(0,0,209.8,12), new cjs.Rectangle(0,0,213.5,12), new cjs.Rectangle(0,0,217.2,12), new cjs.Rectangle(0,0,220.9,12), new cjs.Rectangle(0,0,224.7,12), new cjs.Rectangle(0,0,228.4,12), new cjs.Rectangle(0,0,232.1,12), new cjs.Rectangle(0,0,235.8,12), new cjs.Rectangle(0,0,239.6,12), new cjs.Rectangle(0,0,243.3,12), new cjs.Rectangle(0,0,247,12), new cjs.Rectangle(0,0,250.8,12), new cjs.Rectangle(0,0,254.5,12), new cjs.Rectangle(0,0,258.2,12), new cjs.Rectangle(0,0,261.9,12), new cjs.Rectangle(0,0,265.7,12), new cjs.Rectangle(0,0,269.4,12), new cjs.Rectangle(0,0,273.1,12), new cjs.Rectangle(0,0,276.8,12), new cjs.Rectangle(0,0,280.6,12), new cjs.Rectangle(0,0,284.3,12), new cjs.Rectangle(0,0,288,12), new cjs.Rectangle(0,0,291.7,12), new cjs.Rectangle(0,0,295.5,12), new cjs.Rectangle(0,0,299.2,12), new cjs.Rectangle(0,0,302.9,12), new cjs.Rectangle(0,0,306.7,12), new cjs.Rectangle(0,0,310.4,12), new cjs.Rectangle(0,0,314.1,12), new cjs.Rectangle(0,0,317.8,12), new cjs.Rectangle(0,0,321.6,12), new cjs.Rectangle(0,0,325.3,12), new cjs.Rectangle(0,0,329,12), new cjs.Rectangle(0,0,332.8,12), new cjs.Rectangle(0,0,336.5,12), new cjs.Rectangle(0,0,340.2,12), new cjs.Rectangle(0,0,343.9,12), new cjs.Rectangle(0,0,347.7,12), new cjs.Rectangle(0,0,351.4,12), new cjs.Rectangle(0,0,355.1,12), new cjs.Rectangle(0,0,358.8,12), new cjs.Rectangle(0,0,362.6,12), new cjs.Rectangle(0,0,366.3,12), new cjs.Rectangle(0,0,370,12)];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.indicator_2_mc();
	this.body_mc.setTransform(-185,-6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.indicator_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,400,40);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.instance = new lib.hero_1_main_mc();
	this.instance.setTransform(413,332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125));

	// hero_3
	this.instance_1 = new lib.hero_3_main_mc();
	this.instance_1.setTransform(552,333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({x:240},15).wait(45).to({x:552},15).wait(1));

	// hero_2
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(250,333);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({x:555},15).wait(45).to({x:250},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(144,32,543.5,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(164.4,32,502.3,600), new cjs.Rectangle(184.7,32,461.2,600), new cjs.Rectangle(205,32,420.1,600), new cjs.Rectangle(225.4,32,378.9,600), new cjs.Rectangle(245.7,32,337.8,600), new cjs.Rectangle(266,32,296.7,600), new cjs.Rectangle(271.4,32,280.9,600), new cjs.Rectangle(250.6,32,301.7,600), new cjs.Rectangle(229.8,32,322.5,600), new cjs.Rectangle(209,32,350.1,600), new cjs.Rectangle(188.2,32,391.2,600), new cjs.Rectangle(167.4,32,432.4,600), new cjs.Rectangle(146.6,32,473.5,600), new cjs.Rectangle(125.8,32,514.6,600), rect=new cjs.Rectangle(105,32,555.8,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(125.8,32,514.6,600), new cjs.Rectangle(146.6,32,473.5,600), new cjs.Rectangle(167.4,32,432.4,600), new cjs.Rectangle(188.2,32,391.2,600), new cjs.Rectangle(209,32,350.1,600), new cjs.Rectangle(229.8,32,322.5,600), new cjs.Rectangle(250.6,32,301.7,600), new cjs.Rectangle(271.4,32,280.9,600), new cjs.Rectangle(266,32,296.7,600), new cjs.Rectangle(245.7,32,337.8,600), new cjs.Rectangle(225.4,32,378.9,600), new cjs.Rectangle(205,32,420.1,600), new cjs.Rectangle(184.7,32,461.2,600), new cjs.Rectangle(164.4,32,502.3,600), new cjs.Rectangle(144,32,543.5,600)];


(lib.help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_help_mc();
	this.instance.setTransform(400.5,300.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.guns2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2_gun1_1_img();
	this.instance.setTransform(-136.5,-72);

	this.instance_1 = new lib.g2_gunf();
	this.instance_1.setTransform(0,0,1,1,0,0,0,136.5,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-72,289.5,162.2);
p.frameBounds = [rect];


(lib.guns1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1_pistol();
	this.instance.setTransform(86.3,-25.8,1,1,0,0,0,18.8,39);

	this.instance_1 = new lib.g1_gun();
	this.instance_1.setTransform(-71,3.2,1,1,0,0,0,26.9,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.9,-161.4,222.3,321);
p.frameBounds = [rect];


(lib.countdown_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_2_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.countdown_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_0_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.countdown_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bullet_mark_mc();
	this.instance.setTransform(-50.7,31.9,0.783,0.783,-45);

	this.instance_1 = new lib.bullet_mark_mc();
	this.instance_1.setTransform(33.5,-43.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.countdown_3_img();
	this.instance_2.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.countdown_bg_img();
	this.instance_3.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.countdown_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.bullet_mark_mc();
	this.instance.setTransform(6.5,-51.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.countdown_1_img();
	this.instance_1.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.countdown_bg_img();
	this.instance_2.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.ariel_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g3_gun();
	this.instance.setTransform(-45.2,85,1,1,0,0,0,29,134.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.8,-57.6,84,305.6);
p.frameBounds = [rect, null];


(lib.anna_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.guns1();
	this.instance.setTransform(10.9,55.4,1,1,0,0,0,2.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.2,-105.1,222.3,321);
p.frameBounds = [rect, null];


(lib.animation_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// animation
	this.instance = new lib.title_win_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-274.5,-125.5,364,415.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-130,490,260);
p.frameBounds = [rect];


(lib.animation_ray_of_light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ray_of_light_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-666.7,-500,1333.5,1000);
p.frameBounds = [rect];


(lib.animation_card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{begin:0,mid:4,end:9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.card_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":22,"end":59});

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
		var _particleCount_num = 5;
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,256);
p.frameBounds = [rect];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
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
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},29).to({scaleX:1,scaleY:1,alpha:0.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-72,128,128);
p.frameBounds = [rect, new cjs.Rectangle(-64.5,-71.5,127.1,127.1), new cjs.Rectangle(-64.1,-71,126.3,126.3), new cjs.Rectangle(-63.6,-70.5,125.4,125.4), new cjs.Rectangle(-63.2,-70,124.5,124.5), new cjs.Rectangle(-62.7,-69.5,123.6,123.6), new cjs.Rectangle(-62.3,-69,122.7,122.7), new cjs.Rectangle(-61.8,-68.5,121.8,121.8), new cjs.Rectangle(-61.4,-68,121,121), new cjs.Rectangle(-60.9,-67.5,120.1,120.1), new cjs.Rectangle(-60.5,-67,119.2,119.2), new cjs.Rectangle(-60,-66.5,118.3,118.3), new cjs.Rectangle(-59.6,-66,117.4,117.4), new cjs.Rectangle(-59.1,-65.5,116.5,116.5), new cjs.Rectangle(-58.7,-65,115.7,115.7), new cjs.Rectangle(-58.2,-64.5,114.8,114.8), new cjs.Rectangle(-57.8,-64,113.9,113.9), new cjs.Rectangle(-57.3,-63.5,113,113), new cjs.Rectangle(-56.9,-63,112.1,112.1), new cjs.Rectangle(-56.4,-62.5,111.3,111.3), new cjs.Rectangle(-56,-62,110.4,110.4), new cjs.Rectangle(-55.5,-61.5,109.5,109.5), new cjs.Rectangle(-55.1,-61,108.6,108.6), new cjs.Rectangle(-54.6,-60.5,107.7,107.7), new cjs.Rectangle(-54.2,-60,106.8,106.8), new cjs.Rectangle(-53.7,-59.5,106,106), new cjs.Rectangle(-53.3,-59,105.1,105.1), new cjs.Rectangle(-52.8,-58.5,104.2,104.2), new cjs.Rectangle(-52.4,-58,103.3,103.3), new cjs.Rectangle(-52,-57.6,102.4,102.4), new cjs.Rectangle(-52.4,-58,103.3,103.3), new cjs.Rectangle(-52.8,-58.5,104.1,104.1), new cjs.Rectangle(-53.2,-59,105,105), new cjs.Rectangle(-53.7,-59.5,105.8,105.8), new cjs.Rectangle(-54.1,-59.9,106.7,106.7), new cjs.Rectangle(-54.5,-60.4,107.5,107.5), new cjs.Rectangle(-55,-60.9,108.4,108.4), new cjs.Rectangle(-55.4,-61.4,109.2,109.2), new cjs.Rectangle(-55.8,-61.9,110.1,110.1), new cjs.Rectangle(-56.3,-62.3,111,111), new cjs.Rectangle(-56.7,-62.8,111.8,111.8), new cjs.Rectangle(-57.1,-63.3,112.7,112.7), new cjs.Rectangle(-57.6,-63.8,113.5,113.5), new cjs.Rectangle(-58,-64.3,114.4,114.4), new cjs.Rectangle(-58.4,-64.7,115.2,115.2), new cjs.Rectangle(-58.9,-65.2,116.1,116.1), new cjs.Rectangle(-59.3,-65.7,116.9,116.9), new cjs.Rectangle(-59.7,-66.2,117.8,117.8), new cjs.Rectangle(-60.2,-66.7,118.6,118.6), new cjs.Rectangle(-60.6,-67.1,119.5,119.5), new cjs.Rectangle(-61,-67.6,120.3,120.3), new cjs.Rectangle(-61.5,-68.1,121.2,121.2), new cjs.Rectangle(-61.9,-68.6,122.1,122.1), new cjs.Rectangle(-62.3,-69.1,122.9,122.9), new cjs.Rectangle(-62.8,-69.5,123.8,123.8), new cjs.Rectangle(-63.2,-70,124.6,124.6), new cjs.Rectangle(-63.6,-70.5,125.5,125.5), new cjs.Rectangle(-64.1,-71,126.3,126.3), new cjs.Rectangle(-64.5,-71.5,127.2,127.2), new cjs.Rectangle(-65,-72,128,128)];


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


(lib.mini_play_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mini_play_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.92,scaleY:0.92,x:5},10).to({x:-5},20).to({scaleX:1,scaleY:1,x:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-59,-59.5,119,119), new cjs.Rectangle(-58,-59,118,118), new cjs.Rectangle(-57,-58.5,117,117), new cjs.Rectangle(-56,-58,116,116), new cjs.Rectangle(-54.9,-57.5,115,115), new cjs.Rectangle(-53.9,-56.9,114,114), new cjs.Rectangle(-52.9,-56.4,113,113), new cjs.Rectangle(-51.9,-56,112,112), new cjs.Rectangle(-50.9,-55.5,111,111), new cjs.Rectangle(-50,-55,110,110), new cjs.Rectangle(-50.4,-54.9,110,110), new cjs.Rectangle(-50.9,-54.9,110,110), new cjs.Rectangle(-51.4,-54.9,110,110), new cjs.Rectangle(-51.9,-54.9,110,110), new cjs.Rectangle(-52.4,-54.9,110,110), new cjs.Rectangle(-53,-54.9,110,110), new cjs.Rectangle(-53.5,-54.9,110,110), new cjs.Rectangle(-54,-54.9,110,110), new cjs.Rectangle(-54.5,-54.9,110,110), new cjs.Rectangle(-54.9,-54.9,110,110), new cjs.Rectangle(-55.4,-54.9,110,110), new cjs.Rectangle(-55.9,-54.9,110,110), new cjs.Rectangle(-56.4,-54.9,110,110), new cjs.Rectangle(-56.9,-54.9,110,110), new cjs.Rectangle(-57.4,-54.9,110,110), new cjs.Rectangle(-58,-54.9,110,110), new cjs.Rectangle(-58.5,-54.9,110,110), new cjs.Rectangle(-59,-54.9,110,110), new cjs.Rectangle(-59.5,-54.9,110,110), new cjs.Rectangle(-60,-55,110,110), new cjs.Rectangle(-59.9,-55.4,111,111), new cjs.Rectangle(-59.9,-55.9,112,112), new cjs.Rectangle(-59.9,-56.4,113,113), new cjs.Rectangle(-59.9,-56.9,114,114), new cjs.Rectangle(-59.9,-57.4,115,115), new cjs.Rectangle(-59.9,-57.9,116,116), new cjs.Rectangle(-59.9,-58.4,117,117), new cjs.Rectangle(-59.9,-58.9,118,118), new cjs.Rectangle(-59.9,-59.4,119,119), new cjs.Rectangle(-60,-60,120,120)];


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


(lib.prize_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_ray_of_light_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75,rotation:180,alpha:0.801},49).to({scaleX:1,scaleY:1,rotation:0,alpha:1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-666.7,-500,1333.5,1000);
p.frameBounds = [rect, new cjs.Rectangle(-692.6,-537.3,1385.3,1074.7), new cjs.Rectangle(-716.9,-574.2,1434,1148.5), new cjs.Rectangle(-738,-608.2,1476.1,1216.6), new cjs.Rectangle(-754.6,-637.7,1509.4,1275.5), new cjs.Rectangle(-769,-665.9,1538.2,1331.8), new cjs.Rectangle(-780,-690.9,1560.1,1381.9), new cjs.Rectangle(-787,-711.6,1574.2,1423.2), new cjs.Rectangle(-791.3,-730.3,1582.7,1460.7), new cjs.Rectangle(-792.1,-745.7,1584.3,1491.5), new cjs.Rectangle(-789.5,-757,1579.2,1514.1), new cjs.Rectangle(-783.8,-765.9,1567.7,1531.8), new cjs.Rectangle(-774.7,-771.3,1549.6,1542.8), new cjs.Rectangle(-762.5,-773.5,1525.2,1547), new cjs.Rectangle(-747.8,-772.2,1495.7,1544.5), new cjs.Rectangle(-729.6,-767.9,1459.2,1535.8), new cjs.Rectangle(-708.4,-760.3,1416.9,1520.7), new cjs.Rectangle(-685.5,-750,1371,1500.1), new cjs.Rectangle(-659,-736.3,1318.1,1472.8), new cjs.Rectangle(-630,-719.7,1260.1,1439.4), new cjs.Rectangle(-600.1,-701,1200.2,1402), new cjs.Rectangle(-566.6,-678.8,1133.3,1357.6), new cjs.Rectangle(-531.1,-653.9,1062.3,1308), new cjs.Rectangle(-495.5,-627.8,991.1,1255.7), new cjs.Rectangle(-456.6,-598.2,913.1,1196.6), new cjs.Rectangle(-453.9,-594.7,907.8,1189.6), new cjs.Rectangle(-486.9,-616.9,973.9,1234), new cjs.Rectangle(-515.8,-635.1,1031.7,1270.4), new cjs.Rectangle(-543.9,-651.6,1087.9,1303.3), new cjs.Rectangle(-569.4,-665.1,1138.8,1330.3), new cjs.Rectangle(-590.8,-674.9,1181.7,1349.9), new cjs.Rectangle(-610.9,-682.5,1221.8,1365.1), new cjs.Rectangle(-628.1,-687.1,1256.2,1374.3), new cjs.Rectangle(-641.4,-688.5,1282.9,1377), new cjs.Rectangle(-652.9,-687.2,1305.9,1374.6), new cjs.Rectangle(-661.4,-683,1323,1366.2), new cjs.Rectangle(-666.6,-676.2,1333.3,1352.5), new cjs.Rectangle(-669.5,-666.5,1339,1333.1), new cjs.Rectangle(-669.3,-654,1338.8,1308.1), new cjs.Rectangle(-666.4,-638.9,1332.9,1277.9), new cjs.Rectangle(-660.8,-622,1321.6,1244.1), new cjs.Rectangle(-652.3,-602.1,1304.7,1204.1), new cjs.Rectangle(-641.2,-579.7,1282.5,1159.5), new cjs.Rectangle(-628.1,-556.3,1256.2,1112.7), new cjs.Rectangle(-611.9,-529.8,1223.9,1059.7), new cjs.Rectangle(-593.4,-501.5,1186.9,1002.9), new cjs.Rectangle(-573.5,-472.7,1147,945.4), new cjs.Rectangle(-550.6,-441,1101.2,881.9), new cjs.Rectangle(-525.7,-407.7,1051.3,815.5), new cjs.Rectangle(-500,-374.9,1000,749.8), new cjs.Rectangle(-525.4,-407.5,1050.9,815.1), new cjs.Rectangle(-549.2,-439,1098.5,878.1), new cjs.Rectangle(-572.1,-470.7,1144.2,941.4), new cjs.Rectangle(-592,-499.4,1184.1,998.8), new cjs.Rectangle(-610.5,-527.7,1221.1,1055.4), new cjs.Rectangle(-626.1,-553,1252.3,1106.1), new cjs.Rectangle(-639.5,-576.5,1279,1153.1), new cjs.Rectangle(-650.9,-599,1301.8,1198), new cjs.Rectangle(-659.4,-618.4,1318.8,1236.8), new cjs.Rectangle(-665.5,-635.6,1331,1271.2), new cjs.Rectangle(-668.9,-651.1,1337.9,1302.2), new cjs.Rectangle(-669.8,-663.5,1339.6,1327.2), new cjs.Rectangle(-667.7,-673.9,1335.5,1347.9), new cjs.Rectangle(-663.2,-681.3,1326.5,1362.8), new cjs.Rectangle(-655.5,-686.2,1311,1372.6), new cjs.Rectangle(-645.6,-688.4,1291.3,1376.9), new cjs.Rectangle(-633.1,-687.9,1266.3,1375.9), new cjs.Rectangle(-616.9,-684.3,1233.9,1368.7), new cjs.Rectangle(-599.1,-678.3,1198.3,1356.7), new cjs.Rectangle(-578.8,-669.6,1157.6,1339.3), new cjs.Rectangle(-554.5,-657.3,1109.1,1314.8), new cjs.Rectangle(-529.1,-643.1,1058.3,1286.4), new cjs.Rectangle(-499.8,-625.1,999.6,1250.4), new cjs.Rectangle(-469.7,-605.5,939.4,1211.1), new cjs.Rectangle(-437.4,-583.3,874.9,1166.7), new cjs.Rectangle(-475.1,-612.5,950.2,1225), new cjs.Rectangle(-511.3,-639.6,1022.7,1279.2), new cjs.Rectangle(-547.6,-665.6,1095.3,1331.3), new cjs.Rectangle(-580.5,-688.1,1161,1376.4), new cjs.Rectangle(-612.9,-709.1,1225.8,1418.2), new cjs.Rectangle(-641.7,-726.5,1283.4,1453.1), new cjs.Rectangle(-668.4,-741.4,1336.8,1482.8), new cjs.Rectangle(-693.8,-753.9,1387.7,1507.9), new cjs.Rectangle(-715.6,-763.1,1431.3,1526.3), new cjs.Rectangle(-735,-769.5,1470,1539.1), new cjs.Rectangle(-752.2,-772.8,1504.6,1545.8), new cjs.Rectangle(-766,-773.2,1532.2,1546.5), new cjs.Rectangle(-777.3,-770.1,1554.7,1540.4), new cjs.Rectangle(-785.3,-764.4,1570.7,1528.8), new cjs.Rectangle(-790.2,-754.8,1580.6,1509.7), new cjs.Rectangle(-792.1,-742.9,1584.4,1485.8), new cjs.Rectangle(-791,-727.9,1582.1,1455.9), new cjs.Rectangle(-786.2,-708.8,1572.5,1417.7), new cjs.Rectangle(-778.7,-687.8,1557.5,1375.7), new cjs.Rectangle(-768.1,-663.9,1536.4,1328), new cjs.Rectangle(-753.5,-635.6,1507.2,1271.4), new cjs.Rectangle(-736.7,-606.1,1473.5,1212.3), new cjs.Rectangle(-715.5,-572,1431.1,1144.1), new cjs.Rectangle(-692.5,-537.2,1385.1,1074.4), new cjs.Rectangle(-666.7,-500,1333.5,1000)];


(lib.prize_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":99});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// foreground
	this.instance = new lib.prize_1_mc();
	this.instance.setTransform(0,0,0.412,0.412);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},19).wait(40).to({alpha:0.012},10).wait(31));

	// body
	this.body_mc = new lib.prize_3_mc();
	this.body_mc.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(19).to({x:500,y:-80,alpha:1},40).wait(30).to({alpha:0.012},10).wait(1));

	// background
	this.instance_1 = new lib.prize_2_mc();
	this.instance_1.setTransform(0,0,0.412,0.412);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:1},19).wait(40).to({alpha:0.012},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-274.5,-326,549,531.9);
p.frameBounds = [rect, new cjs.Rectangle(-295.1,-326,590.2,547.4), new cjs.Rectangle(-315.7,-326,631.5,562.9), new cjs.Rectangle(-336.4,-326,672.8,578.3), new cjs.Rectangle(-357,-326,714.1,593.8), new cjs.Rectangle(-377.6,-326,755.3,609.3), new cjs.Rectangle(-398.3,-326,796.7,624.8), new cjs.Rectangle(-418.9,-326,838,640.3), new cjs.Rectangle(-439.6,-329.7,879.3,659.4), new cjs.Rectangle(-460.2,-345.1,920.6,690.3), new cjs.Rectangle(-480.9,-360.6,961.9,721.3), new cjs.Rectangle(-501.5,-376.1,1003.2,752.3), new cjs.Rectangle(-522.2,-391.6,1044.5,783.3), new cjs.Rectangle(-542.8,-407.1,1085.7,814.2), new cjs.Rectangle(-563.5,-422.5,1127.1,845.2), new cjs.Rectangle(-584.1,-438,1168.3,876.1), new cjs.Rectangle(-604.8,-453.5,1209.6,907.1), new cjs.Rectangle(-625.4,-469,1250.9,938.1), new cjs.Rectangle(-646,-484.5,1292.2,969), rect=new cjs.Rectangle(-666.7,-500,1333.5,1000), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(-0.9,0,0.75,0.75,0,0,180,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-190.5,352.5,381.1);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0.9,0,0.75,0.75,0,0,0,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292.4,-190.5,352.5,381.1);
p.frameBounds = [rect];


(lib.mulan_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_3
	this.round_3 = new lib.ariel_bottom_all();
	this.round_3.setTransform(-29.6,10.9);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_4
	this.round_4 = new lib.ariel_top_all();
	this.round_4.setTransform(-16.3,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.ariel_shoes_all();
	this.round_2.setTransform(27.7,313.9);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1
	this.round_1 = new lib.ariel_fringle_all();
	this.round_1.setTransform(-10.2,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// body
	this.instance = new lib.hero_3_head1_img();
	this.instance.setTransform(-42.9,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.g3_under();
	this.instance_1.setTransform(-43.9,-97.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.g3_body_img();
	this.instance_2.setTransform(-74,-174.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.g3_shad();
	this.instance_3.setTransform(-42.4,244.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.4,-281,265,571.2);
p.frameBounds = [rect];


(lib.mulan_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_1
	this.round_1 = new lib.anna_fringle_all();
	this.round_1.setTransform(-12.4,-156.8);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// round_3
	this.round_3 = new lib.anna_bottom_all();
	this.round_3.setTransform(-1.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_2
	this.round_2 = new lib.anna_shoes_all();
	this.round_2.setTransform(-26,297.7);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_4
	this.round_4 = new lib.anna_top_all();
	this.round_4.setTransform(-0.1,-92);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// body
	this.instance = new lib.hero_1_head1_img();
	this.instance.setTransform(-48,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.g1_und();
	this.instance_1.setTransform(-46.3,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.g1_body_img();
	this.instance_2.setTransform(-60,-165.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.g1_shad();
	this.instance_3.setTransform(-34,235.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.9,-279.9,222.3,577.9);
p.frameBounds = [rect];


(lib.jasmine_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g2_gun1
	this.instance = new lib.guns2();
	this.instance.setTransform(-29.3,-151.5,1,1,0,0,0,8.3,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.1,-232.6,289.5,162.2);
p.frameBounds = [rect, null];


(lib.countdown_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_3_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.countdown_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.countdown_0_1_mc();
	this.instance.setTransform(0,0,0.643,0.643);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-95.5,191.1,191.1), new cjs.Rectangle(-101.1,-101.1,202.2,202.2), new cjs.Rectangle(-106.6,-106.6,213.4,213.4), new cjs.Rectangle(-112.2,-112.2,224.5,224.5), new cjs.Rectangle(-117.7,-117.7,235.6,235.6), new cjs.Rectangle(-123.3,-123.3,246.7,246.7), new cjs.Rectangle(-128.8,-128.8,257.8,257.8), new cjs.Rectangle(-134.4,-134.4,268.9,268.9), new cjs.Rectangle(-140,-140,280,280)];


(lib.card_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.body_0_mc = new lib.animation_card_0_mc();

	this.body_1_mc = new lib.animation_card_1_mc();

	this.body_2_mc = new lib.animation_card_2_mc();

	this.body_3_mc = new lib.animation_card_3_mc();

	this.body_4_mc = new lib.animation_card_4_mc();

	this.body_5_mc = new lib.animation_card_5_mc();

	this.body_6_mc = new lib.animation_card_6_mc();

	this.body_7_mc = new lib.animation_card_7_mc();

	this.body_8_mc = new lib.animation_card_8_mc();

	this.body_9_mc = new lib.animation_card_9_mc();

	this.body_10_mc = new lib.animation_card_10_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_0_mc}]}).to({state:[{t:this.body_1_mc}]},1).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
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
	this.instance_1.setTransform(-80,-80,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_2 = new lib.flash_6_mc();
	this.instance_2.setTransform(80,80,0.167,0.167);
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
p.nominalBounds = rect = new cjs.Rectangle(-65,-72,128,128);
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


(lib.mini_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.mini_play_3_mc();
	this.instance.setTransform(5,0,1,1,0,0,0,5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.mini_play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.instance.setTransform(400,460,0.889,0.889);

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
	this.smoke_comp = new lib.smoke_1_mc();
	this.smoke_comp.setTransform(-200,350);

	this.timeline.addTween(cjs.Tween.get(this.smoke_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.title_start_level_mc = function(mode,startPosition,loop) {
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

	// decor
	this.mini_play_mc = new lib.mini_play_mc();
	this.mini_play_mc.setTransform(140,90.1,0.667,0.667,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mini_play_mc).wait(1));

	// body
	this.body_mc = new lib.body_title_start_level_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_start_level_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,345,240);
p.frameBounds = [rect];


(lib.title_next_round_mc = function(mode,startPosition,loop) {
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

	// decor
	this.mini_play_mc = new lib.mini_play_mc();
	this.mini_play_mc.setTransform(140,90.1,0.667,0.667,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mini_play_mc).wait(1));

	// body
	this.body_mc = new lib.body_title_next_round_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_next_round_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-110,345,240);
p.frameBounds = [rect];


(lib.preview_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgSGAi6MAAAhEtIA7AAIAAhGMAjSAAAMAAABFzg");
	mask.setTransform(1,0.5);

	// hero
	this.location_3 = new lib.mulan_3_mc();
	this.location_3.setTransform(12.3,63.8,0.963,0.963,0,0,0,21.1,16.4);

	this.location_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.location_3).to({scaleX:0.97,scaleY:0.97,x:12.5,y:64},59).to({scaleX:0.96,scaleY:0.96,x:12.3,y:63.8},60).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.1,-255,276.3,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preview_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgSGAi6MAAAhEtIA7AAIAAhGMAjSAAAMAAABFzg");
	mask.setTransform(1,0.5);

	// hero
	this.location_1 = new lib.mulan_1_mc();
	this.location_1.setTransform(5.9,54.7,0.952,0.952,0,0,0,9.3,9.1);

	this.location_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.location_1).to({regX:9.2,scaleX:0.96,scaleY:0.96,y:54.8},59).to({regX:9.3,scaleX:0.95,scaleY:0.95,y:54.7},60).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.6,-254,275.2,508);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.mulan_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_4
	this.round_4 = new lib.jasmine_top_all();
	this.round_4.setTransform(21.8,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.jasmine_shoes_all();
	this.round_2.setTransform(-23,332.8);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1
	this.round_1 = new lib.jas_fringle_all();
	this.round_1.setTransform(-21,-101.2);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// body
	this.instance = new lib.hero_2_head1_img();
	this.instance.setTransform(-41.5,-262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.g2_und();
	this.instance_1.setTransform(-28.2,-99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.g2_body_img();
	this.instance_2.setTransform(-72.5,-173.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// round_3
	this.round_3 = new lib.jasmine_bottom_all();
	this.round_3.setTransform(38,20);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// body
	this.instance_3 = new lib.g2_body1_img();
	this.instance_3.setTransform(-72.5,-173.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.g2shad();
	this.instance_4.setTransform(-92,247.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.1,-293.3,289.5,589.7);
p.frameBounds = [rect];


(lib.LossScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,800,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.freeGames_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.title_loss_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.background_2_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_3
	this.location_3 = new lib.mulan_3_mc();
	this.location_3.setTransform(581.1,326.4,1,1,0,0,0,21.1,16.4);

	this.timeline.addTween(cjs.Tween.get(this.location_3).to({_off:true},1).wait(2).to({_off:false,x:412.1},0).wait(1));

	// location_2
	this.location_2 = new lib.mulan_2_mc();
	this.location_2.setTransform(402.6,327.7,1,1,0,0,0,8.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.location_2).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// location_1
	this.location_1 = new lib.mulan_1_mc();
	this.location_1.setTransform(236.3,306.1,1,1,0,0,0,9.3,9.1);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({x:407.3},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(125.1,14.7,588.5,589.7);
p.frameBounds = [rect, new cjs.Rectangle(296.1,17.1,222.3,577.9), new cjs.Rectangle(257.9,14.7,289.5,589.7), new cjs.Rectangle(279.6,29,265,571.2)];


(lib.countdown_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_1_0_mc();

	this.instance_1 = new lib.countdown_1_1_mc();

	this.instance_2 = new lib.countdown_1_2_mc();

	this.instance_3 = new lib.countdown_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-180,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(180,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,-180,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,-180,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,-60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(180,-60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-60,-60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(60,-60,0.688,0.688);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(-180,60,0.688,0.688);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(180,60,0.688,0.688);

	this.instance_14 = new lib.card_mc();
	this.instance_14.setTransform(-60,60,0.688,0.688);

	this.instance_15 = new lib.card_mc();
	this.instance_15.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-180,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-60,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(60,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(180,-180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-60,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(60,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-180,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(180,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-60,-60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(60,-60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-180,60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(180,60,0.688,0.688);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(-60,60,0.688,0.688);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-60,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(60,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,-180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,-180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-60,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-60,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(180,60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-60,60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-180,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(180,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-180,-180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(180,-180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-60,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-60,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(180,60,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-60,60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-60,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(60,180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,-180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,-180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(180,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,180,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(180,180,0.688,0.688);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-60,60,0.688,0.688);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(0,180,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(0,-180,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-180,0,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(180,0,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-60,-60,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(60,-60,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-60,60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-90,90);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(90,-90);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(180,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(60,180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-180,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-60,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-180,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-60,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(180,60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(90,90);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-90,-90);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-180,180,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-60,180,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(180,-180,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(60,-180,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(180,-60,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(60,-60,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-180,60,0.688,0.688);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(-60,60,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(160,160,0.937,0.937);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-160,160,0.937,0.937);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(0,160,0.937,0.937);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(0,-160,0.937,0.937);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(90,0,0.937,0.937);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-90,0,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(160,160,0.937,0.937);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-160,160,0.937,0.937);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(0,160,0.937,0.937);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(160,-160,0.937,0.937);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-160,-160,0.937,0.937);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(0,-160,0.937,0.937);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(160,0,0.937,0.937);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-160,0,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(160,160,0.937,0.937);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-160,160,0.937,0.937);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(0,160,0.937,0.937);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(160,-160,0.937,0.937);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-160,-160,0.937,0.937);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(0,-160,0.937,0.937);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(160,0,0.937,0.937);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-160,0,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(90,90);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-90,90);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(90,-90);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.animation_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// animation
	this.instance = new lib.title_start_level_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.55,scaleY:0.55,x:0.3,y:0.3},0).to({scaleX:1,scaleY:1,x:0.5,y:0.5,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.5,-110.5,345,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-90,-60,188.2,130.9), new cjs.Rectangle(-94.9,-63.3,198.6,138.1), new cjs.Rectangle(-99.9,-66.6,209,145.4), new cjs.Rectangle(-104.9,-69.9,219.4,152.6), new cjs.Rectangle(-109.9,-73.3,229.9,159.9), new cjs.Rectangle(-114.9,-76.6,240.4,167.2), new cjs.Rectangle(-119.9,-79.9,250.9,174.5), new cjs.Rectangle(-124.9,-83.2,261.3,181.7), new cjs.Rectangle(-129.9,-86.6,271.8,189.1), new cjs.Rectangle(-134.9,-89.9,282.2,196.3), new cjs.Rectangle(-139.9,-93.2,292.6,203.6), new cjs.Rectangle(-144.8,-96.5,303.1,210.9), new cjs.Rectangle(-149.9,-99.9,313.5,218.1), new cjs.Rectangle(-154.9,-103.2,324,225.4), new cjs.Rectangle(-159.8,-106.5,334.5,232.7), new cjs.Rectangle(-165,-110,345,240)];


(lib.animation_next_round_ru_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.title_next_round_mc();
	this.instance.setTransform(-0.1,-0.1,0.697,0.697,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.4,-77.1,240.5,167.2);
p.frameBounds = [rect, new cjs.Rectangle(-118.1,-78.9,245.9,171), new cjs.Rectangle(-120.7,-80.6,251.4,174.9), new cjs.Rectangle(-123.3,-82.4,256.9,178.7), new cjs.Rectangle(-125.9,-84,262.4,182.5), new cjs.Rectangle(-128.6,-85.8,267.9,186.3), new cjs.Rectangle(-131.2,-87.6,273.4,190.1), new cjs.Rectangle(-133.8,-89.3,279,194), new cjs.Rectangle(-136.5,-91.1,284.4,197.8), new cjs.Rectangle(-139.1,-92.8,289.9,201.6), new cjs.Rectangle(-141.7,-94.6,295.4,205.5), new cjs.Rectangle(-144.3,-96.4,300.9,209.4), new cjs.Rectangle(-147,-98.1,306.4,213.1), new cjs.Rectangle(-149.6,-99.9,312,217), new cjs.Rectangle(-152.2,-101.6,317.4,220.8), new cjs.Rectangle(-154.9,-103.4,323,224.7), new cjs.Rectangle(-157.5,-105.1,328.4,228.4), new cjs.Rectangle(-160.1,-106.9,333.9,232.3), new cjs.Rectangle(-162.8,-108.6,339.4,236.1), new cjs.Rectangle(-165.5,-110.5,345,240)];


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
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-43.2,76.8,76.8);
p.frameBounds = [rect];


(lib.preview_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgSGAi6MAAAhEtIA7AAIAAhGMAjSAAAMAAABFzg");
	mask.setTransform(1,0.5);

	// hero
	this.location_2 = new lib.mulan_2_mc();
	this.location_2.setTransform(0,65.5,0.933,0.933,0,0,0,8.5,19.8);

	this.location_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.location_2).to({scaleX:0.94,scaleY:0.94,y:65.7},69).to({scaleX:0.93,scaleY:0.93,y:65.5},70).wait(1));

	// bg
	this.instance = new lib.bg_hero_mc2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.1,-255,276.3,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_start_level_mc();
	this.instance.setTransform(400,280);

	this.countdown_mc = new lib.countdown_mc();
	this.countdown_mc.setTransform(400,300);

	this.prize_mc = new lib.prize_0_mc();
	this.prize_mc.setTransform(400,300,0.5,0.5);

	this.instance_1 = new lib.animation_next_round_ru_mc();
	this.instance_1.setTransform(400.5,280.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.countdown_mc}]},1).to({state:[{t:this.prize_mc}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(262.8,137,274.5,266), new cjs.Rectangle(-200,0,1200,600)];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,604.4);
p.frameBounds = [rect];


(lib.cards_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_3_mc();

	this.round_2 = new lib.cards_1_3_mc();

	this.round_3 = new lib.cards_2_3_mc();

	this.round_4 = new lib.cards_3_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// bg
	this.instance = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_2_mc();

	this.round_2 = new lib.cards_1_2_mc();

	this.round_3 = new lib.cards_2_2_mc();

	this.round_4 = new lib.cards_3_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// bg
	this.instance = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rounds
	this.round_1 = new lib.cards_0_1_mc();

	this.round_2 = new lib.cards_1_1_mc();

	this.round_3 = new lib.cards_2_1_mc();

	this.round_4 = new lib.cards_3_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).wait(1));

	// bg
	this.instance = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect, rect, rect, rect];


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
	this.instance.setTransform(600,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,733.6);
p.frameBounds = [rect];


(lib.WinScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(700,330);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(100,330);

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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_win_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1089.9);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// help_mc
	this.help_mc = new lib.help_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

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
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

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

	// cards
	this.cards_mc = new lib.cards_3_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,35);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_3_mc();
	this.preview_mc.setTransform(660,320);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

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

	// cards
	this.cards_mc = new lib.cards_2_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,35);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_2_mc();
	this.preview_mc.setTransform(660,320);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

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

	// cards
	this.cards_mc = new lib.cards_1_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(260,35);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_1_mc();
	this.preview_mc.setTransform(660,320);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
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

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.LossScreen();

	this.instance_9 = new lib.WinScreen();

	this.instance_10 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(260,50);

	this.instance_11 = new lib.Cursor();
	this.instance_11.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_12 = new lib.FlashAnimation();
	this.instance_12.setTransform(400,300);

	this.instance_13 = new lib.OrientationLockScreen();

	this.instance_14 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_11},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(-200,0,1200,600), rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-262.6,-319.9,1262.7,1080), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,15,278,70), new cjs.Rectangle(250,150,300,300), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect];


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