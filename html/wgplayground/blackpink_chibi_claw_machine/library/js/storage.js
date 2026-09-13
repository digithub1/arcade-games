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
		{src:"library/images/storage_atlas_8.png", id:"storage_atlas_8"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,695,600],[0,0,1200,600],[697,602,600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,623,453],[492,561,490,490],[0,455,490,490],[625,0,436,559]]},
		{name:"storage_atlas_4", frames: [[399,694,396,517],[797,694,393,511],[0,694,397,518],[0,0,490,490],[0,492,1200,200],[492,0,640,280]]},
		{name:"storage_atlas_5", frames: [[424,795,500,300],[0,804,422,359],[990,0,277,516],[0,282,331,520],[642,0,346,517],[926,519,282,507],[333,282,296,511],[0,0,640,280]]},
		{name:"storage_atlas_6", frames: [[545,262,318,415],[545,0,520,260],[276,0,267,517],[997,774,247,518],[748,774,247,518],[499,679,247,519],[865,262,255,510],[0,0,274,514],[0,516,247,521],[249,519,248,518]]},
		{name:"storage_atlas_7", frames: [[498,192,336,363],[960,454,249,413],[498,0,652,190],[0,1037,422,225],[424,1081,422,187],[0,519,247,516],[0,0,247,517],[249,517,247,512],[249,0,247,515],[960,869,328,295],[498,557,460,260],[498,819,460,260],[836,192,460,260]]},
		{name:"storage_atlas_8", frames: [[469,182,50,50],[522,717,120,120],[307,260,240,120],[1260,144,22,22],[1260,573,32,382],[1030,947,68,59],[1260,0,22,80],[534,0,204,258],[359,839,99,120],[142,538,140,140],[0,502,140,140],[1149,431,140,140],[442,524,140,140],[726,533,140,140],[584,533,140,140],[83,852,70,70],[740,198,422,69],[307,182,160,60],[155,853,70,70],[640,887,70,70],[1105,0,153,196],[152,182,153,196],[185,680,89,171],[815,771,81,171],[981,771,81,170],[898,771,81,170],[276,727,81,171],[1148,747,81,171],[0,644,91,170],[886,431,130,168],[1018,431,129,169],[309,382,131,170],[0,816,81,169],[1149,573,109,172],[1064,776,81,169],[284,554,114,171],[644,717,85,168],[968,602,94,167],[93,680,90,170],[1064,602,82,172],[868,601,98,168],[731,717,82,170],[442,422,220,100],[152,0,380,180],[0,0,150,500],[152,382,155,154],[460,839,96,91],[740,0,181,181],[664,431,220,100],[558,839,80,80],[1095,269,180,160],[549,260,180,160],[1164,198,64,64],[1230,198,64,64],[460,932,64,64],[964,943,64,64],[1147,920,64,64],[149,925,64,64],[784,944,64,64],[898,943,64,64],[558,921,64,64],[83,924,64,64],[731,269,180,160],[913,269,180,160],[923,0,180,180],[400,717,120,120],[1260,82,26,60],[712,889,70,70],[227,900,70,70],[400,675,420,40]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blesk_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.candies_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.candies_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.candies_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.claw_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.claw_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.claw_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.claw_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_back2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_back_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_egg1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_front1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_front_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.claw_next_1_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.claw_next_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.claw_next_2_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.claw_next_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.claw_run_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.claw_run_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.congratulation_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.egg_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.egg_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.egg_bow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.egg_top_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.girl10_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.girl11_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.girl12_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl13_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.girl14_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.girl15_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.girl16_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.girl17_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.girl18_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.girl19_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.girl1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.girl20_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.girl2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.girl3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.girl5_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.girl6_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.girl7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.girl8_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.girl9_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.icon01_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.icon0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl11_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl13_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl14_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl15_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl16_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl17_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl18_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl19_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl20_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.icon_girl9_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.new_game_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.number_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.number_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.number_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.number_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.number_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.number_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.number_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.number_7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.number_8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.number_9_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.show_window_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.slash_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.superluck_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
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
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
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


(lib.totalOptions_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// second
	this.instance = new lib.number_1_img();
	this.instance.setTransform(-32,-32);

	this.instance_1 = new lib.number_2_img();
	this.instance_1.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},10).wait(10));

	// first
	this.instance_2 = new lib.number_0_img();
	this.instance_2.setTransform(-32,-32);

	this.instance_3 = new lib.number_1_img();
	this.instance_3.setTransform(-32,-32);

	this.instance_4 = new lib.number_2_img();
	this.instance_4.setTransform(-32,-32);

	this.instance_5 = new lib.number_3_img();
	this.instance_5.setTransform(-32,-32);

	this.instance_6 = new lib.number_4_img();
	this.instance_6.setTransform(-32,-32);

	this.instance_7 = new lib.number_5_img();
	this.instance_7.setTransform(-32,-32);

	this.instance_8 = new lib.number_6_img();
	this.instance_8.setTransform(-32,-32);

	this.instance_9 = new lib.number_7_img();
	this.instance_9.setTransform(-32,-32);

	this.instance_10 = new lib.number_8_img();
	this.instance_10.setTransform(-32,-32);

	this.instance_11 = new lib.number_9_img();
	this.instance_11.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:-32}}]}).to({state:[{t:this.instance_3,p:{x:-32}}]},1).to({state:[{t:this.instance_4,p:{x:-32}}]},1).to({state:[{t:this.instance_5,p:{x:-32}}]},1).to({state:[{t:this.instance_6,p:{x:-32}}]},1).to({state:[{t:this.instance_7,p:{x:-32}}]},1).to({state:[{t:this.instance_8,p:{x:-32}}]},1).to({state:[{t:this.instance_9,p:{x:-32}}]},1).to({state:[{t:this.instance_10,p:{x:-32}}]},1).to({state:[{t:this.instance_11,p:{x:-32}}]},1).to({state:[{t:this.instance_2,p:{x:30}}]},1).to({state:[{t:this.instance_3,p:{x:30}}]},1).to({state:[{t:this.instance_4,p:{x:30}}]},1).to({state:[{t:this.instance_5,p:{x:30}}]},1).to({state:[{t:this.instance_6,p:{x:30}}]},1).to({state:[{t:this.instance_7,p:{x:30}}]},1).to({state:[{t:this.instance_8,p:{x:30}}]},1).to({state:[{t:this.instance_9,p:{x:30}}]},1).to({state:[{t:this.instance_10,p:{x:30}}]},1).to({state:[{t:this.instance_11,p:{x:30}}]},1).to({state:[{t:this.instance_2,p:{x:30}}]},1).to({state:[{t:this.instance_3,p:{x:30}}]},1).to({state:[{t:this.instance_4,p:{x:30}}]},1).to({state:[{t:this.instance_5,p:{x:30}}]},1).to({state:[{t:this.instance_6,p:{x:30}}]},1).to({state:[{t:this.instance_7,p:{x:30}}]},1).to({state:[{t:this.instance_8,p:{x:30}}]},1).to({state:[{t:this.instance_9,p:{x:30}}]},1).to({state:[{t:this.instance_10,p:{x:30}}]},1).to({state:[{t:this.instance_11,p:{x:30}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-32,-32,126,64), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_img();
	this.instance.setTransform(-230,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-130,460,260);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-230,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-130,460,260);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-230,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-130,460,260);
p.frameBounds = [rect];


(lib.superluck_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.superluck_img();
	this.instance.setTransform(-210,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,0,420,40);
p.frameBounds = [rect];


(lib.slash_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.slash_img();
	this.instance.setTransform(-13,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-30,26,60);
p.frameBounds = [rect];


(lib.shadow_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_decor_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.option_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl20_img();
	this.instance.setTransform(-49,-82.5);

	this.instance_1 = new lib.girl20_img();
	this.instance_1.setTransform(-53.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl19_img();
	this.instance.setTransform(-65,-80.5);

	this.instance_1 = new lib.girl19_img();
	this.instance_1.setTransform(-65.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl18_img();
	this.instance.setTransform(-63,-80.5);

	this.instance_1 = new lib.girl18_img();
	this.instance_1.setTransform(-66.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl17_img();
	this.instance.setTransform(-64,-80.5);

	this.instance_1 = new lib.girl17_img();
	this.instance_1.setTransform(-65.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl16_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl16_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl15_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl15_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl14_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl14_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl13_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl13_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl12_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl12_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl11_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl11_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl10_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl10_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl9_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl9_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl8_img();
	this.instance.setTransform(-44,-80.5);

	this.instance_1 = new lib.girl8_img();
	this.instance_1.setTransform(-45.2,-79,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl7_img();
	this.instance.setTransform(-40,-82.5);

	this.instance_1 = new lib.girl7_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl6_img();
	this.instance.setTransform(-42,-80.5);

	this.instance_1 = new lib.girl6_img();
	this.instance_1.setTransform(-44.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl5_img();
	this.instance.setTransform(-42,-78.5);

	this.instance_1 = new lib.girl5_img();
	this.instance_1.setTransform(-41.2,-83,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl4_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl4_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl3_img();
	this.instance.setTransform(-54,-80.5);

	this.instance_1 = new lib.girl3_img();
	this.instance_1.setTransform(-56.2,-83,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl2_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl2_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.option_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.icon_girl1_img();
	this.instance.setTransform(-40,-80.5);

	this.instance_1 = new lib.girl1_img();
	this.instance_1.setTransform(-41.2,-84,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-76.5,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-76.5,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-98,153,196);
p.frameBounds = [rect, rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.girl10_img();
	this.instance.setTransform(10,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.girl12_img();
	this.instance_1.setTransform(545,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.girl11_img();
	this.instance_2.setTransform(180,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.girl9_img();
	this.instance_3.setTransform(365,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,20,782,558);
p.frameBounds = [rect];


(lib.girl20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl20_img();
	this.instance.setTransform(-126.3,-227.6,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.3,-227.6,310.1,487.1);
p.frameBounds = [rect];


(lib.girl19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl19_img();
	this.instance.setTransform(-174.3,-207,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.3,-207,361,471.1);
p.frameBounds = [rect];


(lib.girl18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl18_img();
	this.instance.setTransform(-168.9,-176.3,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168.9,-176.3,338.3,439.9);
p.frameBounds = [rect];


(lib.girl17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl17_img();
	this.instance.setTransform(-184.3,-221.5,0.935,0.935);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.3,-221.5,370.5,483.6);
p.frameBounds = [rect];


(lib.girl16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl16_img();
	this.instance.setTransform(-124.6,-258.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.6,-258.2,277,516);
p.frameBounds = [rect];


(lib.girl15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl15_img();
	this.instance.setTransform(-123.5,-260.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-260.4,247,519);
p.frameBounds = [rect];


(lib.girl14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl14_img();
	this.instance.setTransform(-123.5,-259.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-259.3,247,517);
p.frameBounds = [rect];


(lib.girl13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl13_img();
	this.instance.setTransform(-123.5,-257.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-257.1,247,516);
p.frameBounds = [rect];


(lib.girl12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl12_img();
	this.instance.setTransform(-124.6,-259.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.6,-259.3,247,518);
p.frameBounds = [rect];


(lib.girl11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl11_img();
	this.instance.setTransform(-122.4,-259.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.4,-259.3,247,518);
p.frameBounds = [rect];


(lib.girl10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl10_img();
	this.instance.setTransform(-123.5,-259.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-259.3,267,517);
p.frameBounds = [rect];


(lib.girl9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl9_img();
	this.instance.setTransform(-123.5,-258.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-258.2,248,518);
p.frameBounds = [rect];


(lib.girl8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl8_img();
	this.instance.setTransform(-126.8,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.8,-256,296,511);
p.frameBounds = [rect];


(lib.girl7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl7_img();
	this.instance.setTransform(-123.5,-263.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-263.7,247,521);
p.frameBounds = [rect];


(lib.girl6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl6_img();
	this.instance.setTransform(-123.5,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-256,274,514);
p.frameBounds = [rect];


(lib.girl5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl5_img();
	this.instance.setTransform(-123.5,-253.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-253.8,282,507);
p.frameBounds = [rect];


(lib.girl4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl4_img();
	this.instance.setTransform(-124.6,-253.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.6,-253.8,255,510);
p.frameBounds = [rect];


(lib.girl3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl3_img();
	this.instance.setTransform(-166.4,-260.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.4,-260.4,346,517);
p.frameBounds = [rect];


(lib.girl2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2_img();
	this.instance.setTransform(-123.5,-257.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-257.1,247,515);
p.frameBounds = [rect];


(lib.girl1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_img();
	this.instance.setTransform(-123.5,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-256,247,512);
p.frameBounds = [rect];


(lib.girl_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.floor(Math.random() * this.totalFrames));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// graph
	this.instance = new lib.candies_1_img();
	this.instance.setTransform(-168,-182);

	this.instance_1 = new lib.candies_2_img();
	this.instance_1.setTransform(-111,-207);

	this.instance_2 = new lib.candies_3_img();
	this.instance_2.setTransform(-159,-208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168,-182,336,363);
p.frameBounds = [rect, new cjs.Rectangle(-111,-207,249,413), new cjs.Rectangle(-159,-208,318,415)];


(lib.egg_top_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg_top_img();
	this.instance.setTransform(-211,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-179.5,422,359);
p.frameBounds = [rect];


(lib.egg_bow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg_bow_img();
	this.instance.setTransform(-211,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-93.5,422,187);
p.frameBounds = [rect];


(lib.egg_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg_bottom2_img();
	this.instance.setTransform(-211,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-34.5,422,69);
p.frameBounds = [rect];


(lib.egg_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg_bottom1_img();
	this.instance.setTransform(-211,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-112.5,422,225);
p.frameBounds = [rect];


(lib.currentOptions_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// second
	this.instance = new lib.number_1_img();
	this.instance.setTransform(-90,-32);

	this.instance_1 = new lib.number_2_img();
	this.instance_1.setTransform(-90,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},10).wait(10));

	// first
	this.instance_2 = new lib.number_0_img();
	this.instance_2.setTransform(-32,-32);

	this.instance_3 = new lib.number_1_img();
	this.instance_3.setTransform(-32,-32);

	this.instance_4 = new lib.number_2_img();
	this.instance_4.setTransform(-32,-32);

	this.instance_5 = new lib.number_3_img();
	this.instance_5.setTransform(-32,-32);

	this.instance_6 = new lib.number_4_img();
	this.instance_6.setTransform(-32,-32);

	this.instance_7 = new lib.number_5_img();
	this.instance_7.setTransform(-32,-32);

	this.instance_8 = new lib.number_6_img();
	this.instance_8.setTransform(-32,-32);

	this.instance_9 = new lib.number_7_img();
	this.instance_9.setTransform(-32,-32);

	this.instance_10 = new lib.number_8_img();
	this.instance_10.setTransform(-32,-32);

	this.instance_11 = new lib.number_9_img();
	this.instance_11.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-90,-32,122,64), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.claw_run_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.claw_run_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.claw_run_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.claw_run_0_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.claw_next_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.claw_next_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.claw_next_2_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.claw_next_2_0_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.claw_next_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.claw_next_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.claw_next_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.claw_next_1_0_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.claw_machine_egg1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.claw_machine_egg1_img();
	this.instance.setTransform(-49.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-60,99,120);
p.frameBounds = [rect];


(lib.claw_machine_back2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.claw_machine_back2_img();
	this.instance.setTransform(-102,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-129,204,258);
p.frameBounds = [rect];


(lib.claw_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.claw_4_img();
	this.instance.setTransform(-11,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11,-40,22,80);
p.frameBounds = [rect];


(lib.claw_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.claw_3_img();
	this.instance.setTransform(-34,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-29.5,68,59);
p.frameBounds = [rect];


(lib.claw_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.claw_2_img();
	this.instance.setTransform(-16,-191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-191,32,382);
p.frameBounds = [rect];


(lib.claw_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.claw_1_img();
	this.instance.setTransform(-11,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11,-11,22,22);
p.frameBounds = [rect];


(lib.bodyPopUpGallery_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.girl1_img();
	this.instance.setTransform(-125,-255);

	this.instance_1 = new lib.girl2_img();
	this.instance_1.setTransform(-124,-254);

	this.instance_2 = new lib.girl3_img();
	this.instance_2.setTransform(-169,-253.9);

	this.instance_3 = new lib.girl4_img();
	this.instance_3.setTransform(-123,-249.9);

	this.instance_4 = new lib.girl5_img();
	this.instance_4.setTransform(-127,-254.5);

	this.instance_5 = new lib.girl6_img();
	this.instance_5.setTransform(-138,-257);

	this.instance_6 = new lib.girl7_img();
	this.instance_6.setTransform(-124,-263);

	this.instance_7 = new lib.girl8_img();
	this.instance_7.setTransform(-135,-256);

	this.instance_8 = new lib.girl9_img();
	this.instance_8.setTransform(-127,-259);

	this.instance_9 = new lib.girl10_img();
	this.instance_9.setTransform(-128,-258);

	this.instance_10 = new lib.girl11_img();
	this.instance_10.setTransform(-130,-258);

	this.instance_11 = new lib.girl12_img();
	this.instance_11.setTransform(-127,-258);

	this.instance_12 = new lib.girl13_img();
	this.instance_12.setTransform(-144,-257);

	this.instance_13 = new lib.girl14_img();
	this.instance_13.setTransform(-124,-259);

	this.instance_14 = new lib.girl15_img();
	this.instance_14.setTransform(-123.5,-259.5);

	this.instance_15 = new lib.girl16_img();
	this.instance_15.setTransform(-143,-258);

	this.instance_16 = new lib.girl17_img();
	this.instance_16.setTransform(-198,-258.5);

	this.instance_17 = new lib.girl18_img();
	this.instance_17.setTransform(-199,-254);

	this.instance_18 = new lib.girl19_img();
	this.instance_18.setTransform(-188,-259);

	this.instance_19 = new lib.girl20_img();
	this.instance_19.setTransform(-158.1,-259.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

	// bg
	this.instance_20 = new lib.show_window_img();
	this.instance_20.setTransform(-218,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-280,436,559);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_pointer_img();
	this.instance.setTransform(-55,-55,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.body_congratulation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.congratulation_img();
	this.instance.setTransform(-260,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-130,520,260);
p.frameBounds = [rect];


(lib.animation_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-90,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-80,180,160);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-90,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-80,180,160);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-90,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-80,180,160);
p.frameBounds = [rect];


(lib.new_game_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.new_game_img();
	this.instance.setTransform(-90,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-80,180,160);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.more_games_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_4_2_img();
	this.instance.setTransform(-64.7,-65.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.7,-65.1,130.3,130.3);
p.frameBounds = [rect];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_3_2_img();
	this.instance.setTransform(-34,-31.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-31.8,69.1,65.5);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_1_2_img();
	this.instance.setTransform(0.2,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0,236.2,212.4);
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
	this.instance.setTransform(-110,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
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
	this.instance.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.body_title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

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
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
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


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({alpha:0.801},5).to({alpha:1},5).to({alpha:0.801},5).to({alpha:1},5).wait(1));

	// animation
	this.instance_1 = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({alpha:0.801},5).to({alpha:1},5).to({alpha:0.801},5).to({alpha:1},5).wait(61));

	// animation
	this.instance_2 = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({alpha:0.801},5).to({alpha:1},5).to({alpha:0.801},5).to({alpha:1},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-130,460,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak9E+QiEiFAAi5QAAi4CEiFQCEiDC5gBQC6ABCDCDQCECFABC4QgBC5iECFQiDCDi6AAQi5AAiEiDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.popUpGallery_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(605,30,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyPopUpGallery_mc();
	this.body_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhfSAwcMAAAhg2MC+lAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
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


(lib.next_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance_1 = new lib.nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak9E+QiEiFAAi5QAAi4CEiFQCEiDC5gBQC6ABCDCDQCECFABC4QgBC5iECFQiDCDi6AAQi5AAiEiDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.egg_animation_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.egg_bow_mc();
	this.instance.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:376},20).to({_off:true},1).wait(59));

	// animation
	this.instance_1 = new lib.egg_top_mc();
	this.instance_1.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-485},20).to({_off:true},1).wait(59));

	// animation
	this.instance_2 = new lib.egg_bottom1_mc();
	this.instance_2.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:447},20).to({_off:true},1).wait(59));

	// animation
	this.instance_3 = new lib.girl_0_mc();
	this.instance_3.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({scaleX:1,scaleY:1},19).wait(25).to({scaleX:0.4,scaleY:0.4,x:360,y:260,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.egg_bottom2_mc();
	this.instance_4.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:335},20).to({_off:true},1).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-159.6,-172.9,319.2,344.9), new cjs.Rectangle(-160,-173.3,320.1,345.8), new cjs.Rectangle(-160.4,-173.8,321,346.8), new cjs.Rectangle(-160.9,-174.3,321.9,347.7), new cjs.Rectangle(-161.3,-174.8,322.8,348.7), new cjs.Rectangle(-161.8,-175.2,323.6,349.6), new cjs.Rectangle(-162.2,-175.7,324.5,350.6), new cjs.Rectangle(-162.6,-176.2,325.4,351.5), new cjs.Rectangle(-163.1,-176.7,326.3,352.5), new cjs.Rectangle(-163.5,-177.2,327.2,353.5), new cjs.Rectangle(-164,-177.6,328.1,354.4), new cjs.Rectangle(-164.4,-178.1,328.9,355.4), new cjs.Rectangle(-164.9,-178.6,329.8,356.3), new cjs.Rectangle(-165.3,-179.1,330.7,357.3), new cjs.Rectangle(-165.7,-179.6,331.6,358.2), new cjs.Rectangle(-166.2,-180,332.5,359.2), new cjs.Rectangle(-166.6,-180.5,333.4,360.2), new cjs.Rectangle(-167.1,-181,334.2,361.1), new cjs.Rectangle(-167.5,-181.5,335.1,362.1), rect=new cjs.Rectangle(-168,-182,336,363), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-132.5,-153.5,320.5,346.3), new cjs.Rectangle(-97,-125.2,305,329.5), new cjs.Rectangle(-61.6,-96.8,289.5,312.8), new cjs.Rectangle(-26.2,-68.3,274,296), new cjs.Rectangle(9.2,-39.9,258.5,279.3), new cjs.Rectangle(44.7,-11.6,243,262.5), new cjs.Rectangle(80.1,16.8,227.5,245.7), new cjs.Rectangle(115.6,45.2,212,229), new cjs.Rectangle(151,73.6,196.5,212.2), new cjs.Rectangle(186.4,102,180.9,195.5), new cjs.Rectangle(221.9,130.4,165.4,178.7), new cjs.Rectangle(257.3,158.8,149.9,162), new cjs.Rectangle(292.8,187.2,134.4,145.2), null];


(lib.counterOptions_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// currentOptions
	this.currentOptions_mc = new lib.currentOptions_mc();
	this.currentOptions_mc.setTransform(-45,0);

	this.timeline.addTween(cjs.Tween.get(this.currentOptions_mc).wait(1));

	// slash
	this.instance = new lib.slash_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// totalOptions
	this.totalOptions_mc = new lib.totalOptions_mc();
	this.totalOptions_mc.setTransform(45,0);

	this.timeline.addTween(cjs.Tween.get(this.totalOptions_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-32,154,64);
p.frameBounds = [rect];


(lib.congratulation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_congratulation_mc();
	this.instance.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:0},20).wait(70).to({y:500},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-630,520,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-260,-605,520,260), new cjs.Rectangle(-260,-580,520,260), new cjs.Rectangle(-260,-555,520,260), new cjs.Rectangle(-260,-530,520,260), new cjs.Rectangle(-260,-505,520,260), new cjs.Rectangle(-260,-480,520,260), new cjs.Rectangle(-260,-455,520,260), new cjs.Rectangle(-260,-430,520,260), new cjs.Rectangle(-260,-405,520,260), new cjs.Rectangle(-260,-380,520,260), new cjs.Rectangle(-260,-355,520,260), new cjs.Rectangle(-260,-330,520,260), new cjs.Rectangle(-260,-305,520,260), new cjs.Rectangle(-260,-280,520,260), new cjs.Rectangle(-260,-255,520,260), new cjs.Rectangle(-260,-230,520,260), new cjs.Rectangle(-260,-205,520,260), new cjs.Rectangle(-260,-180,520,260), new cjs.Rectangle(-260,-155,520,260), rect=new cjs.Rectangle(-260,-130,520,260), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-260,-105,520,260), new cjs.Rectangle(-260,-80,520,260), new cjs.Rectangle(-260,-55,520,260), new cjs.Rectangle(-260,-30,520,260), new cjs.Rectangle(-260,-5,520,260), new cjs.Rectangle(-260,20,520,260), new cjs.Rectangle(-260,45,520,260), new cjs.Rectangle(-260,70,520,260), new cjs.Rectangle(-260,95,520,260), new cjs.Rectangle(-260,120,520,260), new cjs.Rectangle(-260,145,520,260), new cjs.Rectangle(-260,170,520,260), new cjs.Rectangle(-260,195,520,260), new cjs.Rectangle(-260,220,520,260), new cjs.Rectangle(-260,245,520,260), new cjs.Rectangle(-260,270,520,260), new cjs.Rectangle(-260,295,520,260), new cjs.Rectangle(-260,320,520,260), new cjs.Rectangle(-260,345,520,260), new cjs.Rectangle(-260,370,520,260)];


(lib.clawRun_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.claw_run_1_mc();

	this.instance_1 = new lib.claw_run_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.clawResult_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hint
	this.hint_mc = new lib.pointer_mc();
	this.hint_mc.setTransform(-95,-75,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.hint_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172.8,-152.8,272.8,252.8);
p.frameBounds = [rect];


(lib.claw1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.claw_1_mc();
	this.instance.setTransform(0,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.claw_4_mc();
	this.instance_1.setTransform(0.6,183.4,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(2.5,122.4,1.008,1.015,0,60.8,-131.5,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(50,169,1,1,0,0,180,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,0,180,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-50,169,1,1,0,0,0,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(1,119.5,1,1,0,0,0,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,487.2);
p.frameBounds = [rect];


(lib.claw1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 4
	this.instance = new lib.claw_1_mc();
	this.instance.setTransform(0,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Слой 9
	this.instance_1 = new lib.claw_4_mc();
	this.instance_1.setTransform(-1,162,1,0.885,0,-8.1,171.9,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-25,skewX:-20.6,skewY:159.4,x:1,y:163},4).to({regY:-24.9,skewX:-8.1,skewY:171.9,x:-1,y:162},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-0.4,122.3,0.74,1.011,0,55.7,-158,25,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(59,154.9,1,1,0,10.5,-169.5,-2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:2,skewY:-178,x:59.1,y:155},4).to({skewX:10.5,skewY:-169.5,x:59,y:154.9},5).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,-16.2,163.8,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-60.7,155.3,1,1,-12.2,0,0,-2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-25,rotation:2.5},4).to({regY:-25.1,rotation:-12.2},5).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(0.9,120,1,1,14.2,0,0,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-245,143.3,465.9);
p.frameBounds = [rect, new cjs.Rectangle(-71.8,-245,141.8,466), new cjs.Rectangle(-70.9,-245,140.5,466.3), new cjs.Rectangle(-70,-245,139.2,466.4), new cjs.Rectangle(-72.6,-245,142.1,466.4), new cjs.Rectangle(-69.8,-245,139,466.3), new cjs.Rectangle(-70.5,-245,139.9,466.3), new cjs.Rectangle(-71.2,-245,141,466.3), new cjs.Rectangle(-72,-245,142.2,466), new cjs.Rectangle(-72.7,-245,143.3,465.9)];


(lib.claw1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 4
	this.instance = new lib.claw_1_mc();
	this.instance.setTransform(0,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 9
	this.instance_1 = new lib.claw_4_mc();
	this.instance_1.setTransform(0.6,183.4,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-29,skewY:151,x:7.4,y:183.1},9).to({skewX:-11,skewY:169,x:0.6,y:183.4},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(2.5,122.4,1.008,1.015,0,60.8,-131.5,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:25.1,regY:-20,skewX:54.3,skewY:-138,x:2.4,y:122.2},9).to({regX:25,regY:-19.9,skewX:60.8,skewY:-131.5,x:2.5,y:122.4},10).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(50,169,1,1,0,0,180,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:-23.2,skewY:156.8,x:57.5,y:159.8},9).to({skewX:0,skewY:180,x:50,y:169},10).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,0,180,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.1,skewX:-10,skewY:170,x:-1.4,y:119.8},9).to({regY:-20,skewX:0,skewY:180,x:-1,y:119.5},10).wait(1));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-50,169,1,1,0,0,0,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:12.8,x:-35.4,y:180.5},9).to({rotation:0,x:-50,y:169},10).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(1,119.5,1,1,0,0,0,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-20.1,rotation:-19.7,x:-1.2,y:119},9).to({regY:-20,rotation:0,x:1,y:119.5},10).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,487.2);
p.frameBounds = [rect, new cjs.Rectangle(-58.8,-245,121.5,487.1), new cjs.Rectangle(-58.9,-245,125.3,487.1), new cjs.Rectangle(-59.3,-245,129.3,486.9), new cjs.Rectangle(-59.6,-245,133.4,486.7), new cjs.Rectangle(-59.9,-245,137.2,486.4), new cjs.Rectangle(-60,-245,140.8,487.8), new cjs.Rectangle(-60,-245,144.5,489.2), new cjs.Rectangle(-60,-245,147.8,490.4), new cjs.Rectangle(-60,-245,151.4,491.8), new cjs.Rectangle(-60,-245,148.3,490.6), new cjs.Rectangle(-60,-245,145.3,489.4), new cjs.Rectangle(-60,-245,141.9,488.2), new cjs.Rectangle(-59.9,-245,138.6,487), new cjs.Rectangle(-59.7,-245,135.4,486.5), new cjs.Rectangle(-59.6,-245,132,486.7), new cjs.Rectangle(-59.2,-245,128.1,486.8), new cjs.Rectangle(-58.9,-245,124.6,487), new cjs.Rectangle(-58.8,-245,121.1,487), new cjs.Rectangle(-59,-245,118,487.2)];


(lib.claw1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Слой 4
	this.instance = new lib.claw_1_mc();
	this.instance.setTransform(0,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// Слой 9
	this.instance_1 = new lib.claw_4_mc();
	this.instance_1.setTransform(-1,162,1,0.885,0,-8.1,171.9,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({skewX:-11,skewY:169,x:0.6,y:183.4},4).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-0.4,122.3,0.74,1.011,0,55.7,-158,25,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({regY:-19.9,scaleX:1.01,scaleY:1.01,skewX:60.8,skewY:-131.5,x:2.5,y:122.4},4).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(59,154.9,1,1,0,10.5,-169.5,-2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:-18.5,skewY:-198.5,x:59.1,y:155},3).to({regY:-25,skewX:0,skewY:-180,x:50,y:169},4).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,-16.2,163.8,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({skewX:0,skewY:180},4).wait(1));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-60.7,155.3,1,1,-12.2,0,0,-2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-25,rotation:13.7,y:155.4},3).to({rotation:0,x:-50,y:169},4).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(0.9,120,1,1,14.2,0,0,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({regY:-20,rotation:0,x:1,y:119.5},4).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-245,143.3,465.9);
p.frameBounds = [rect, new cjs.Rectangle(-70.6,-245,139.9,465.8), new cjs.Rectangle(-75.4,-245,153.2,466.2), new cjs.Rectangle(-84.9,-245,173.2,466.6), new cjs.Rectangle(-78.4,-245,159.5,471), new cjs.Rectangle(-72,-245,145.7,476.4), new cjs.Rectangle(-65.4,-245,131.8,481.7), new cjs.Rectangle(-59,-245,118,487.2)];


(lib.claw1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.claw_1_mc();
	this.instance.setTransform(0,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.claw_4_mc();
	this.instance_1.setTransform(-1,162,1,0.885,0,-8.1,171.9,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-0.4,122.3,0.74,1.011,0,55.7,-158,25,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(59,154.9,1,1,0,10.5,-169.5,-2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,-16.2,163.8,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-60.7,155.3,1,1,-12.2,0,0,-2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(0.9,120,1,1,14.2,0,0,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.claw_machine_egg1_mc();
	this.instance_8.setTransform(-1.8,190.7,1,1,-168.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-245,143.3,504.6);
p.frameBounds = [rect];


(lib.claw1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Слой 4
	this.instance = new lib.claw_1_mc();
	this.instance.setTransform(0,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

	// Слой 9
	this.instance_1 = new lib.claw_4_mc();
	this.instance_1.setTransform(0.6,183.4,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-25,scaleY:0.69,x:-0.7,y:150.8},7).to({regY:-24.9,scaleY:0.89,skewX:-8.1,skewY:171.9,x:-1,y:162},9).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(2.5,122.4,1.008,1.015,0,60.8,-131.5,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:24.9,scaleX:0.87,scaleY:1.12,skewX:77.4,skewY:-167.1,y:124.5},7).to({regY:-20.1,scaleX:0.74,scaleY:1.01,skewX:55.7,skewY:-158,x:-0.4,y:122.4},9).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(50,169,1,1,0,0,180,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:-37.7,skewY:142.3,x:67.3,y:138.4},7).to({regY:-25.1,skewX:10.5,skewY:190.5,x:59,y:154.9},9).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,0,180,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:24.9,regY:-19.9,skewX:-28.1,skewY:151.9,x:-1.3,y:119.6},7).to({regX:25,regY:-20,skewX:-16.2,skewY:163.8,x:-1,y:119.5},9).wait(1));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-50,169,1,1,0,0,0,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-24.9,rotation:34.2,x:-69,y:145.1},7).to({regY:-25.1,rotation:-12.2,x:-60.7,y:155.3},9).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(1,119.5,1,1,0,0,0,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-20.1,rotation:23.2,x:1.1,y:119.4},7).to({regY:-19.9,rotation:14.2,x:0.9,y:120},9).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,487.2);
p.frameBounds = [rect, new cjs.Rectangle(-67,-245,134.4,480.8), new cjs.Rectangle(-75.3,-245,151.1,474.4), new cjs.Rectangle(-83.1,-245,167.1,469.8), new cjs.Rectangle(-90.9,-245,183.1,465.8), new cjs.Rectangle(-98.4,-245,198.1,461.4), new cjs.Rectangle(-105.9,-245,213,456.3), new cjs.Rectangle(-113,-245,227.1,451.1), new cjs.Rectangle(-107.5,-245,216.1,454.1), new cjs.Rectangle(-101.5,-245,204.5,456.9), new cjs.Rectangle(-95.4,-245,192.1,459.1), new cjs.Rectangle(-89.2,-245,179.6,460.8), new cjs.Rectangle(-82.6,-245,166.4,461.9), new cjs.Rectangle(-76.1,-245,153.1,462.4), new cjs.Rectangle(-71.9,-245,142.5,463.3), new cjs.Rectangle(-72.3,-245,142.5,464.7), new cjs.Rectangle(-72.7,-245,143.3,465.9)];


(lib.claw1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 4
	this.instance = new lib.claw_1_mc();
	this.instance.setTransform(0,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 9
	this.instance_1 = new lib.claw_4_mc();
	this.instance_1.setTransform(0.6,183.4,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:16.4,skewY:196.4,x:-7.1,y:182.9},9).to({skewX:-11,skewY:169,x:0.6,y:183.4},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(2.5,122.4,1.008,1.015,0,60.8,-131.5,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:68.3,skewY:-124,x:2.7,y:122.8},9).to({skewX:60.8,skewY:-131.5,x:2.5,y:122.4},10).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(50,169,1,1,0,0,180,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-25.1,skewX:10.2,skewY:190.2,x:45.7,y:172.8},9).to({regY:-25,skewX:0,skewY:180,x:50,y:169},10).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,0,180,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:4.9,skewY:184.9,x:-0.9,y:119.1},9).to({skewX:0,skewY:180,x:-1,y:119.5},10).wait(1));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-50,169,1,1,0,0,0,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-24.9,rotation:22.5,x:-53.9,y:165.2},9).to({regY:-25,rotation:0,x:-50,y:169},10).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(1,119.5,1,1,0,0,0,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-19.9,rotation:5.2,x:1.4,y:120.5},9).to({regY:-20,rotation:0,x:1,y:119.5},10).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,487.2);
p.frameBounds = [rect, new cjs.Rectangle(-62,-245,120.8,487), new cjs.Rectangle(-65.3,-245,123.9,486.5), new cjs.Rectangle(-68.5,-245,126.9,486), new cjs.Rectangle(-71.7,-245,129.9,485.7), new cjs.Rectangle(-74.8,-245,133.1,486), new cjs.Rectangle(-77.9,-245,136.4,486.2), new cjs.Rectangle(-80.9,-245,139.5,486.1), new cjs.Rectangle(-83.9,-245,142.5,485.9), new cjs.Rectangle(-87,-245,145.7,485.5), new cjs.Rectangle(-84.2,-245,142.9,485.8), new cjs.Rectangle(-81.5,-245,140,486), new cjs.Rectangle(-78.8,-245,137.3,486.1), new cjs.Rectangle(-76,-245,134.4,486), new cjs.Rectangle(-73.2,-245,131.6,485.8), new cjs.Rectangle(-70.4,-245,128.7,485.5), new cjs.Rectangle(-67.5,-245,126,486.1), new cjs.Rectangle(-64.5,-245,123.2,486.5), new cjs.Rectangle(-61.7,-245,120.5,486.9), new cjs.Rectangle(-59,-245,118,487.2)];


(lib.claw_next_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animatiom
	this.instance = new lib.claw_next_2_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

	// bg
	this.instance_1 = new lib.claw_next_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.claw_next_4_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animatiom
	this.instance = new lib.claw_next_2_0_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},29).to({alpha:1},30).wait(1));

	// bg
	this.instance_1 = new lib.claw_next_1_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.claw_next_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animatiom
	this.instance = new lib.claw_next_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

	// bg
	this.instance_1 = new lib.claw_next_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.claw_next_3_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animatiom
	this.instance = new lib.claw_next_2_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},29).to({alpha:1},30).wait(1));

	// bg
	this.instance_1 = new lib.claw_next_1_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.blesk_anim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_7_mc("synched",0);
	this.instance.setTransform(0.5,0.5,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-10.6,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14,29.1,29.1), new cjs.Rectangle(-17.4,-17.5,36.1,36.1), new cjs.Rectangle(-20.9,-20.9,42.8,42.8), new cjs.Rectangle(-23.7,-23.7,48.5,48.5), new cjs.Rectangle(-25.9,-25.9,52.9,52.9), new cjs.Rectangle(-27.3,-27.2,55.5,55.5), new cjs.Rectangle(-27.6,-27.5,56.1,56.1), new cjs.Rectangle(-26.7,-26.6,54.3,54.3), new cjs.Rectangle(-24.5,-24.5,50,50), new cjs.Rectangle(-27,-27,55.1,55.1), new cjs.Rectangle(-27.2,-27.2,55.6,55.6), new cjs.Rectangle(-25.6,-25.6,52.2,52.2), new cjs.Rectangle(-22.4,-22.3,45.7,45.7), new cjs.Rectangle(-18.1,-18.1,37.2,37.2), new cjs.Rectangle(-13.3,-13.2,27.6,27.6), new cjs.Rectangle(-10.2,-10.1,21.3,21.3), new cjs.Rectangle(-9.4,-9.3,19.6,19.6), new cjs.Rectangle(-7.3,-7.2,15.5,15.5), new cjs.Rectangle(-4.4,-4.4,9.8,9.8)];


(lib.animation15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(-226.5,-393.9,1,1,0,0,0,0,-233);

	this.instance_3 = new lib.claw1_2_mc();
	this.instance_3.setTransform(-226.5,-218.9,1,1,0,0,0,0,-233);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:-218.9},9).to({_off:false},18).to({y:-414.9},13).to({y:-393.9},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},9).to({_off:true},18).wait(28));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,652,812);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.5,652,792.5), new cjs.Rectangle(-326,-367,652,773.1), new cjs.Rectangle(-326,-347.6,652,753.6), new cjs.Rectangle(-326,-328.1,652,734.2), new cjs.Rectangle(-326,-308.7,652,714.8), new cjs.Rectangle(-326,-289.3,652,695.3), new cjs.Rectangle(-326,-269.8,652,675.9), new cjs.Rectangle(-326,-250.4,652,656.4), rect=new cjs.Rectangle(-326,-230.9,652,637), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-246,652,652.1), new cjs.Rectangle(-326,-261.1,652,667.1), new cjs.Rectangle(-326,-276.2,652,682.2), new cjs.Rectangle(-326,-291.2,652,697.3), new cjs.Rectangle(-326,-306.3,652,712.4), new cjs.Rectangle(-326,-321.4,652,727.4), new cjs.Rectangle(-326,-336.5,652,742.5), new cjs.Rectangle(-326,-351.5,652,757.6), new cjs.Rectangle(-326,-366.6,652,772.7), new cjs.Rectangle(-326,-381.7,652,787.7), new cjs.Rectangle(-326,-396.8,652,802.8), new cjs.Rectangle(-326,-411.8,652,817.9), new cjs.Rectangle(-326,-426.9,652,833), new cjs.Rectangle(-326,-425.4,652,831.5), new cjs.Rectangle(-326,-423.9,652,830), new cjs.Rectangle(-326,-422.4,652,828.5), new cjs.Rectangle(-326,-420.9,652,827), new cjs.Rectangle(-326,-419.4,652,825.5), new cjs.Rectangle(-326,-417.9,652,824), new cjs.Rectangle(-326,-416.4,652,822.5), new cjs.Rectangle(-326,-414.9,652,821), new cjs.Rectangle(-326,-413.4,652,819.5), new cjs.Rectangle(-326,-411.9,652,818), new cjs.Rectangle(-326,-410.4,652,816.5), new cjs.Rectangle(-326,-408.9,652,815), new cjs.Rectangle(-326,-407.4,652,813.5), new cjs.Rectangle(-326,-405.9,652,812)];


(lib.animation14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(240.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_6_mc();
	this.instance_3.setTransform(240.5,-223.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:-223.9},9).to({_off:false},18).to({_off:true,y:-397.9},12).to({_off:false,y:-393.9},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},9).to({_off:true},18).to({_off:false,y:-397.9},12).to({_off:true,y:-393.9},15).wait(1));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(210,194,1,1,-58.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({rotation:-33.6,x:203,y:187},8).to({rotation:-58.3,x:210,y:194},10).to({_off:true},1).wait(27));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55));

	// animation
	this.instance_7 = new lib.claw_machine_egg1_mc();
	this.instance_7.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.9,652,792.9), new cjs.Rectangle(-326,-368,652,774), new cjs.Rectangle(-326,-349.1,652,755.2), new cjs.Rectangle(-326,-330.2,652,736.3), new cjs.Rectangle(-326,-311.3,652,717.4), new cjs.Rectangle(-326,-292.4,652,698.5), new cjs.Rectangle(-326,-273.6,652,679.6), new cjs.Rectangle(-326,-254.7,652,660.7), rect=new cjs.Rectangle(-326,-235.8,652,641.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-250.3,652,656.3), new cjs.Rectangle(-326,-264.8,652,670.8), new cjs.Rectangle(-326,-279.3,652,685.3), new cjs.Rectangle(-326,-293.8,652,699.8), new cjs.Rectangle(-326,-308.3,652,714.3), new cjs.Rectangle(-326,-322.8,652,728.8), new cjs.Rectangle(-326,-337.3,652,743.3), new cjs.Rectangle(-326,-351.8,652,757.8), new cjs.Rectangle(-326,-366.3,652,772.3), new cjs.Rectangle(-326,-380.8,652,786.8), new cjs.Rectangle(-326,-395.3,652,801.3), new cjs.Rectangle(-326,-409.8,652,815.8), new cjs.Rectangle(-326,-409.5,652,815.6), new cjs.Rectangle(-326,-409.2,652,815.3), new cjs.Rectangle(-326,-409,652,815), new cjs.Rectangle(-326,-408.7,652,814.8), new cjs.Rectangle(-326,-408.4,652,814.5), new cjs.Rectangle(-326,-408.2,652,814.2), new cjs.Rectangle(-326,-407.9,652,814), new cjs.Rectangle(-326,-407.6,652,813.7), new cjs.Rectangle(-326,-407.4,652,813.4), new cjs.Rectangle(-326,-407.1,652,813.2), new cjs.Rectangle(-326,-406.8,652,812.9), new cjs.Rectangle(-326,-406.6,652,812.6), new cjs.Rectangle(-326,-406.3,652,812.4), new cjs.Rectangle(-326,-406,652,812.1), new cjs.Rectangle(-326,-405.8,652,811.8)];


(lib.animation13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(121.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_2_mc();
	this.instance_3.setTransform(121.5,-207.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.claw1_6_mc();
	this.instance_4.setTransform(121.5,-207.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:-207.9},9).wait(18).to({_off:false,y:-385.9},10).to({y:-393.9},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},9).to({_off:true},18).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},18).to({_off:true,y:-385.9},10).wait(13));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({rotation:12.5},9).to({rotation:22.2},9).wait(23));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({rotation:43.4},9).to({rotation:37.5},9).wait(23));

	// animation
	this.instance_7 = new lib.claw_machine_egg1_mc();
	this.instance_7.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({rotation:-6.2},9).to({rotation:0},9).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-385.1,652,791.2), new cjs.Rectangle(-326,-364.4,652,770.5), new cjs.Rectangle(-326,-343.8,652,749.8), new cjs.Rectangle(-326,-323.1,652,729.2), new cjs.Rectangle(-326,-302.4,652,708.5), new cjs.Rectangle(-326,-281.8,652,687.8), new cjs.Rectangle(-326,-261.1,652,667.2), new cjs.Rectangle(-326,-240.4,652,646.5), rect=new cjs.Rectangle(-326,-219.8,652,625.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-237.6,652,643.6), new cjs.Rectangle(-326,-255.4,652,661.4), new cjs.Rectangle(-326,-273.2,652,679.2), new cjs.Rectangle(-326,-291,652,697), new cjs.Rectangle(-326,-308.8,652,714.8), new cjs.Rectangle(-326,-326.6,652,732.6), new cjs.Rectangle(-326,-344.4,652,750.4), new cjs.Rectangle(-326,-362.2,652,768.2), new cjs.Rectangle(-326,-380,652,786), new cjs.Rectangle(-326,-397.8,652,803.8), new cjs.Rectangle(-326,-398.4,652,804.5), new cjs.Rectangle(-326,-399.1,652,805.2), new cjs.Rectangle(-326,-399.8,652,805.8), new cjs.Rectangle(-326,-400.4,652,806.5), new cjs.Rectangle(-326,-401.1,652,807.2), new cjs.Rectangle(-326,-401.8,652,807.8), new cjs.Rectangle(-326,-402.4,652,808.5), new cjs.Rectangle(-326,-403.1,652,809.2), new cjs.Rectangle(-326,-403.8,652,809.8), new cjs.Rectangle(-326,-404.4,652,810.5), new cjs.Rectangle(-326,-405.1,652,811.2), new cjs.Rectangle(-326,-405.8,652,811.8)];


(lib.animation12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(-44.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_2_mc();
	this.instance_3.setTransform(-44.5,-193.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.claw1_6_mc();
	this.instance_4.setTransform(-44.5,-193.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:-193.9},9).wait(18).to({_off:false,y:-387.9},12).to({y:-393.9},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},9).to({_off:true},18).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},18).to({_off:true,y:-387.9},12).wait(16));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({rotation:33.6,x:20,y:190},9).to({rotation:22.2,x:15,y:188},9).wait(28));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({rotation:46.9},9).to({rotation:37.5},9).wait(28));

	// animation
	this.instance_7 = new lib.claw_machine_egg1_mc();
	this.instance_7.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({rotation:-10.4},9).to({rotation:0},9).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-383.6,652,789.7), new cjs.Rectangle(-326,-361.4,652,767.4), new cjs.Rectangle(-326,-339.2,652,745.2), new cjs.Rectangle(-326,-316.9,652,723), new cjs.Rectangle(-326,-294.7,652,700.8), new cjs.Rectangle(-326,-272.5,652,678.5), new cjs.Rectangle(-326,-250.3,652,656.3), new cjs.Rectangle(-326,-228,652,634.1), rect=new cjs.Rectangle(-326,-205.8,652,611.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-222,652,628), new cjs.Rectangle(-326,-238.2,652,644.2), new cjs.Rectangle(-326,-254.3,652,660.4), new cjs.Rectangle(-326,-270.5,652,676.5), new cjs.Rectangle(-326,-286.7,652,692.7), new cjs.Rectangle(-326,-302.8,652,708.9), new cjs.Rectangle(-326,-319,652,725), new cjs.Rectangle(-326,-335.2,652,741.2), new cjs.Rectangle(-326,-351.3,652,757.4), new cjs.Rectangle(-326,-367.5,652,773.5), new cjs.Rectangle(-326,-383.7,652,789.7), new cjs.Rectangle(-326,-399.8,652,805.9), new cjs.Rectangle(-326,-400.2,652,806.3), new cjs.Rectangle(-326,-400.6,652,806.7), new cjs.Rectangle(-326,-401,652,807.1), new cjs.Rectangle(-326,-401.4,652,807.5), new cjs.Rectangle(-326,-401.8,652,807.9), new cjs.Rectangle(-326,-402.2,652,808.3), new cjs.Rectangle(-326,-402.6,652,808.7), new cjs.Rectangle(-326,-403,652,809.1), new cjs.Rectangle(-326,-403.4,652,809.5), new cjs.Rectangle(-326,-403.8,652,809.9), new cjs.Rectangle(-326,-404.2,652,810.3), new cjs.Rectangle(-326,-404.6,652,810.7), new cjs.Rectangle(-326,-405,652,811.1), new cjs.Rectangle(-326,-405.4,652,811.5), new cjs.Rectangle(-326,-405.8,652,811.9)];


(lib.animation11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		try
		{
			app.addSoundFunc("hit_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(25));

	// animation
	this.instance = new lib.claw1_4_mc();
	this.instance.setTransform(0.5,-414.9,1,1,0,0,0,0,-233);
	this.instance._off = true;

	this.instance_1 = new lib.claw1_mc();
	this.instance_1.setTransform(0.5,-414.9,1,1,0,0,0,0,-233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},55).to({state:[{t:this.instance_1}]},8).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true},8).wait(17));

	// animation
	this.instance_2 = new lib.claw_machine_egg1_mc();
	this.instance_2.setTransform(-2,8,1,1,-170.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({rotation:-178.8,y:315},8).to({rotation:-217.8,x:2,y:334},5).wait(12));

	// animation
	this.instance_3 = new lib.claw_machine_back2_mc();
	this.instance_3.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.claw_machine_front1_img();
	this.instance_4.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.claw1_mc();
	this.instance_5.setTransform(-226.5,-393.9,1,1,0,0,0,0,-233);

	this.instance_6 = new lib.claw1_2_mc();
	this.instance_6.setTransform(-226.5,-218.9,1,1,0,0,0,0,-233);
	this.instance_6._off = true;

	this.instance_7 = new lib.claw1_3_mc();
	this.instance_7.setTransform(-226.5,-218.9,1,1,0,0,0,0,-233);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:-218.9},9).wait(55).to({_off:false,x:0.5,y:-414.9},0).to({x:-226.5,y:-393.9},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},9).to({_off:true},18).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},18).to({y:-414.9},13).to({x:0.5},14).to({_off:true},1).wait(25));

	// animation
	this.instance_8 = new lib.claw_machine_egg1_mc();
	this.instance_8.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.claw_machine_egg1_mc();
	this.instance_9.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// animation
	this.instance_10 = new lib.claw_machine_egg1_mc();
	this.instance_10.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,652,812);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.5,652,792.5), new cjs.Rectangle(-326,-367,652,773.1), new cjs.Rectangle(-326,-347.6,652,753.6), new cjs.Rectangle(-326,-328.1,652,734.2), new cjs.Rectangle(-326,-308.7,652,714.8), new cjs.Rectangle(-326,-289.3,652,695.3), new cjs.Rectangle(-326,-269.8,652,675.9), new cjs.Rectangle(-326,-250.4,652,656.4), rect=new cjs.Rectangle(-326,-230.9,652,637), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-246,652,652.1), new cjs.Rectangle(-326,-261.1,652,667.1), new cjs.Rectangle(-326,-276.2,652,682.2), new cjs.Rectangle(-326,-291.2,652,697.3), new cjs.Rectangle(-326,-306.3,652,712.4), new cjs.Rectangle(-326,-321.4,652,727.4), new cjs.Rectangle(-326,-336.5,652,742.5), new cjs.Rectangle(-326,-351.5,652,757.6), new cjs.Rectangle(-326,-366.6,652,772.7), new cjs.Rectangle(-326,-381.7,652,787.7), new cjs.Rectangle(-326,-396.8,652,802.8), new cjs.Rectangle(-326,-411.8,652,817.9), rect=new cjs.Rectangle(-326,-426.9,652,833), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-425.5,652,831.6), new cjs.Rectangle(-326,-424.1,652,830.2), new cjs.Rectangle(-326,-422.7,652,829.5), new cjs.Rectangle(-326,-421.3,652,833.1), new cjs.Rectangle(-326,-419.9,652,831.6), new cjs.Rectangle(-326,-418.5,652,830.2), new cjs.Rectangle(-326,-417.1,652,828.8), new cjs.Rectangle(-326,-415.7,652,827.4), new cjs.Rectangle(-326,-414.3,652,826), new cjs.Rectangle(-326,-412.9,652,824.6), new cjs.Rectangle(-326,-411.5,652,823.2), new cjs.Rectangle(-326,-410.1,652,821.8), new cjs.Rectangle(-326,-408.7,652,820.4), new cjs.Rectangle(-326,-407.3,652,819), new cjs.Rectangle(-326,-405.9,652,817.7)];


(lib.animation10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(-44.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_5_mc();
	this.instance_3.setTransform(-89.5,-394,1,1,-9.5,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,rotation:-9.5,x:-89.5,y:-394},7).to({_off:false,regX:0,regY:-233,rotation:-7.2,x:-244.5,y:-393.9},29).to({rotation:0,x:-226.5},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},7).to({_off:true,regX:0,regY:-233,rotation:-7.2,x:-244.5,y:-393.9},29).wait(9));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-406.1,652,812.2), new cjs.Rectangle(-326,-406.4,652,812.5), new cjs.Rectangle(-326,-406.9,652,813), new cjs.Rectangle(-326,-407.3,652,813.3), new cjs.Rectangle(-326,-407.6,652,813.6), new cjs.Rectangle(-326,-407.9,652,813.9), new cjs.Rectangle(-326,-408.4,652,814.4), rect=new cjs.Rectangle(-326,-408.3,652,814.3), rect, rect=new cjs.Rectangle(-326,-408.2,652,814.2), rect, new cjs.Rectangle(-326,-408.2,652,814.3), rect=new cjs.Rectangle(-326,-408.2,652,814.2), rect, new cjs.Rectangle(-326,-408.1,652,814.2), new cjs.Rectangle(-326,-408.1,652,814.1), new cjs.Rectangle(-326,-408.1,652,814.2), new cjs.Rectangle(-326,-408.1,652,814.1), new cjs.Rectangle(-326,-408.1,652,814.2), new cjs.Rectangle(-326,-408,652,814), rect=new cjs.Rectangle(-326,-408,652,814.1), rect, rect=new cjs.Rectangle(-326,-408,652,814), rect, rect=new cjs.Rectangle(-326,-407.9,652,814), rect, rect, rect, rect=new cjs.Rectangle(-326,-407.9,652,813.9), rect, rect, new cjs.Rectangle(-326,-407.8,652,813.9), rect=new cjs.Rectangle(-326,-407.7,652,813.8), rect, new cjs.Rectangle(-326,-407.8,652,813.8), new cjs.Rectangle(-326,-407.8,652,813.9), new cjs.Rectangle(-326,-407.5,652,813.6), new cjs.Rectangle(-326,-407.3,652,813.4), new cjs.Rectangle(-326,-407.1,652,813.1), new cjs.Rectangle(-326,-406.8,652,812.9), new cjs.Rectangle(-326,-406.5,652,812.6), new cjs.Rectangle(-326,-406.4,652,812.4), new cjs.Rectangle(-326,-406.1,652,812.1), new cjs.Rectangle(-326,-405.9,652,812)];


(lib.animation9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(121.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_5_mc();
	this.instance_3.setTransform(100.5,-393.9,1,1,-4.5,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,rotation:-4.5,x:100.5},7).to({_off:false,rotation:-9,x:-60.5},29).to({rotation:0,x:-44.5},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},7).to({_off:true,rotation:-9,x:-60.5},29).wait(9));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,652,812), new cjs.Rectangle(-326,-406.2,652,812.2), new cjs.Rectangle(-326,-406.3,652,812.4), new cjs.Rectangle(-326,-406.5,652,812.5), new cjs.Rectangle(-326,-406.6,652,812.7), new cjs.Rectangle(-326,-406.8,652,812.9), new cjs.Rectangle(-326,-407,652,813), rect=new cjs.Rectangle(-326,-407.1,652,813.1), rect, rect, new cjs.Rectangle(-326,-407.2,652,813.2), new cjs.Rectangle(-326,-407.1,652,813.2), new cjs.Rectangle(-326,-407.2,652,813.3), rect=new cjs.Rectangle(-326,-407.3,652,813.3), rect, new cjs.Rectangle(-326,-407.3,652,813.4), rect=new cjs.Rectangle(-326,-407.4,652,813.5), rect, rect=new cjs.Rectangle(-326,-407.5,652,813.6), rect, new cjs.Rectangle(-326,-407.6,652,813.6), rect=new cjs.Rectangle(-326,-407.6,652,813.7), rect, new cjs.Rectangle(-326,-407.7,652,813.7), new cjs.Rectangle(-326,-407.8,652,813.8), new cjs.Rectangle(-326,-407.7,652,813.8), new cjs.Rectangle(-326,-407.8,652,813.9), new cjs.Rectangle(-326,-407.9,652,813.9), new cjs.Rectangle(-326,-407.8,652,813.9), rect=new cjs.Rectangle(-326,-407.9,652,813.9), rect, new cjs.Rectangle(-326,-408,652,814), new cjs.Rectangle(-326,-407.9,652,814), rect=new cjs.Rectangle(-326,-408,652,814.1), rect, new cjs.Rectangle(-326,-408.1,652,814.2), new cjs.Rectangle(-326,-407.8,652,813.9), new cjs.Rectangle(-326,-407.6,652,813.6), new cjs.Rectangle(-326,-407.3,652,813.3), new cjs.Rectangle(-326,-407,652,813), new cjs.Rectangle(-326,-406.7,652,812.8), new cjs.Rectangle(-326,-406.3,652,812.4), new cjs.Rectangle(-326,-406.1,652,812.1), new cjs.Rectangle(-326,-405.8,652,811.9)];


(lib.animation8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(240.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_5_mc();
	this.instance_3.setTransform(203.5,-393.9,1,1,-4.9,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,rotation:-4.9,x:203.5},5).to({_off:false,rotation:-6.7,x:102.5,y:-394.9},30).to({rotation:0,x:121.5,y:-393.9},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},5).to({_off:true,rotation:-6.7,x:102.5,y:-394.9},30).wait(10));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,652,812), new cjs.Rectangle(-326,-406.2,652,812.3), new cjs.Rectangle(-326,-406.5,652,812.5), new cjs.Rectangle(-326,-406.7,652,812.8), rect=new cjs.Rectangle(-326,-407.1,652,813.1), rect, new cjs.Rectangle(-326,-407.2,652,813.2), rect=new cjs.Rectangle(-326,-407.2,652,813.3), rect, new cjs.Rectangle(-326,-407.3,652,813.3), new cjs.Rectangle(-326,-407.4,652,813.4), new cjs.Rectangle(-326,-407.4,652,813.5), rect=new cjs.Rectangle(-326,-407.5,652,813.5), rect, rect, new cjs.Rectangle(-326,-407.6,652,813.6), rect=new cjs.Rectangle(-326,-407.7,652,813.7), rect, new cjs.Rectangle(-326,-407.7,652,813.8), rect=new cjs.Rectangle(-326,-407.8,652,813.9), rect, new cjs.Rectangle(-326,-407.9,652,814), new cjs.Rectangle(-326,-408,652,814), new cjs.Rectangle(-326,-408,652,814.1), rect=new cjs.Rectangle(-326,-408.1,652,814.1), rect, new cjs.Rectangle(-326,-408.1,652,814.2), new cjs.Rectangle(-326,-408.3,652,814.3), rect=new cjs.Rectangle(-326,-408.3,652,814.4), rect, rect=new cjs.Rectangle(-326,-408.4,652,814.5), rect, rect=new cjs.Rectangle(-326,-408.5,652,814.6), rect, new cjs.Rectangle(-326,-408.6,652,814.6), new cjs.Rectangle(-326,-408.3,652,814.3), new cjs.Rectangle(-326,-407.9,652,814), new cjs.Rectangle(-326,-407.6,652,813.7), new cjs.Rectangle(-326,-407.3,652,813.4), new cjs.Rectangle(-326,-407.1,652,813.1), new cjs.Rectangle(-326,-406.8,652,812.8), new cjs.Rectangle(-326,-406.5,652,812.5), new cjs.Rectangle(-326,-406.1,652,812.1), new cjs.Rectangle(-326,-405.8,652,811.8)];


(lib.animation7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		try
		{
			app.addSoundFunc("hit_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(25));

	// animation
	this.instance = new lib.claw1_4_mc();
	this.instance.setTransform(-0.5,-397.9,1,1,0,0,0,-0.1,-233.1);
	this.instance._off = true;

	this.instance_1 = new lib.claw1_mc();
	this.instance_1.setTransform(-0.5,-397.9,1,1,0,0,0,-0.1,-233.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},55).to({state:[{t:this.instance_1}]},8).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true},8).wait(17));

	// animation
	this.instance_2 = new lib.claw_machine_egg1_mc();
	this.instance_2.setTransform(-2,25.3,1,1,-167.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({rotation:-148.8,x:0,y:329},8).to({rotation:-103.8,x:1,y:343.6},5).wait(12));

	// animation
	this.instance_3 = new lib.claw_machine_back2_mc();
	this.instance_3.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.claw_machine_front1_img();
	this.instance_4.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.claw1_mc();
	this.instance_5.setTransform(240.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_6 = new lib.claw1_2_mc();
	this.instance_6.setTransform(240.5,-223.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.claw1_3_mc();
	this.instance_7.setTransform(240.5,-223.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:-223.9},9).wait(55).to({_off:false,x:-0.5,y:-397.9},0).to({x:240.5,y:-393.9},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},9).to({_off:true},18).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},18).to({y:-397.9},12).to({x:-0.5},15).to({_off:true},1).wait(25));

	// animation
	this.instance_8 = new lib.claw_machine_egg1_mc();
	this.instance_8.setTransform(210,194,1,1,-58.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({rotation:-33.6,x:203,y:187},8).to({rotation:-58.3,x:210,y:194},10).to({_off:true},1).wait(52));

	// animation
	this.instance_9 = new lib.claw_machine_egg1_mc();
	this.instance_9.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// animation
	this.instance_10 = new lib.claw_machine_egg1_mc();
	this.instance_10.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.claw_machine_egg1_mc();
	this.instance_11.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.9,652,792.9), new cjs.Rectangle(-326,-368,652,774), new cjs.Rectangle(-326,-349.1,652,755.2), new cjs.Rectangle(-326,-330.2,652,736.3), new cjs.Rectangle(-326,-311.3,652,717.4), new cjs.Rectangle(-326,-292.4,652,698.5), new cjs.Rectangle(-326,-273.6,652,679.6), new cjs.Rectangle(-326,-254.7,652,660.7), rect=new cjs.Rectangle(-326,-235.8,652,641.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-250.3,652,656.3), new cjs.Rectangle(-326,-264.8,652,670.8), new cjs.Rectangle(-326,-279.3,652,685.3), new cjs.Rectangle(-326,-293.8,652,699.8), new cjs.Rectangle(-326,-308.3,652,714.3), new cjs.Rectangle(-326,-322.8,652,728.8), new cjs.Rectangle(-326,-337.3,652,743.3), new cjs.Rectangle(-326,-351.8,652,757.8), new cjs.Rectangle(-326,-366.3,652,772.3), new cjs.Rectangle(-326,-380.8,652,786.8), new cjs.Rectangle(-326,-395.3,652,801.3), rect=new cjs.Rectangle(-326,-409.8,652,815.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-409.8,652,819.4), new cjs.Rectangle(-326,-409.5,652,821), new cjs.Rectangle(-326,-409.2,652,820.7), new cjs.Rectangle(-326,-409,652,818.5), new cjs.Rectangle(-326,-408.7,652,814.8), new cjs.Rectangle(-326,-408.4,652,814.5), new cjs.Rectangle(-326,-408.2,652,814.2), new cjs.Rectangle(-326,-407.9,652,814), new cjs.Rectangle(-326,-407.6,652,813.7), new cjs.Rectangle(-326,-407.4,652,813.4), new cjs.Rectangle(-326,-407.1,652,813.2), new cjs.Rectangle(-326,-406.8,652,812.9), new cjs.Rectangle(-326,-406.6,652,812.6), new cjs.Rectangle(-326,-406.3,652,812.4), new cjs.Rectangle(-326,-406,652,812.1), new cjs.Rectangle(-326,-405.8,652,811.8)];


(lib.animation6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(121.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_1_mc();
	this.instance_3.setTransform(142.5,-393.9,1,1,4.2,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,rotation:4.2,x:142.5},6).to({_off:false,x:258.5},28).to({rotation:0,x:240.5},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},6).to({_off:true,x:258.5},28).wait(11));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,652,812), new cjs.Rectangle(-326,-406.1,652,812.2), new cjs.Rectangle(-326,-406.3,652,812.3), new cjs.Rectangle(-326,-406.5,652,812.5), new cjs.Rectangle(-326,-406.6,652,812.7), new cjs.Rectangle(-326,-406.9,652,813), rect=new cjs.Rectangle(-326,-406.8,652,812.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-326,-406.8,652,812.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-406.9,652,813), new cjs.Rectangle(-326,-406.7,652,812.8), new cjs.Rectangle(-326,-406.6,652,812.7), new cjs.Rectangle(-326,-406.5,652,812.5), new cjs.Rectangle(-326,-406.4,652,812.4), new cjs.Rectangle(-326,-406.3,652,812.3), new cjs.Rectangle(-326,-406.1,652,812.2), new cjs.Rectangle(-326,-406,652,812.1), new cjs.Rectangle(-326,-405.9,652,811.9), rect=new cjs.Rectangle(-326,-405.8,652,811.8), rect];


(lib.animation5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		try
		{
			app.addSoundFunc("hit_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(21));

	// animation
	this.instance = new lib.claw1_4_mc();
	this.instance.setTransform(2.5,-385.9,1,1,0,0,0,-0.1,-233.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(8).to({_off:true},1).wait(12));

	// animation
	this.instance_1 = new lib.claw_machine_egg1_mc();
	this.instance_1.setTransform(2,39,1,1,-173.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({rotation:-197.9,x:-4,y:339},7).to({rotation:-233.4},4).wait(10));

	// animation
	this.instance_2 = new lib.claw_machine_back2_mc();
	this.instance_2.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66));

	// animation
	this.instance_3 = new lib.claw_machine_front1_img();
	this.instance_3.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66));

	// animation
	this.instance_4 = new lib.claw1_mc();
	this.instance_4.setTransform(121.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_5 = new lib.claw1_2_mc();
	this.instance_5.setTransform(121.5,-207.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.claw1_3_mc();
	this.instance_6.setTransform(121.5,-207.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,y:-207.9},9).wait(45).to({_off:false,x:2.5,y:-385.9},0).to({x:121.5,y:-393.9},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},9).to({_off:true},18).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},18).to({y:-385.9},10).to({x:2.5},7).to({_off:true},1).wait(21));

	// animation
	this.instance_7 = new lib.claw_machine_egg1_mc();
	this.instance_7.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({rotation:12.5},9).to({rotation:22.2},9).wait(39));

	// animation
	this.instance_8 = new lib.claw_machine_egg1_mc();
	this.instance_8.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({rotation:43.4},9).to({rotation:37.5},9).wait(39));

	// animation
	this.instance_9 = new lib.claw_machine_egg1_mc();
	this.instance_9.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({rotation:-6.2},9).to({rotation:0},9).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-385.1,652,791.2), new cjs.Rectangle(-326,-364.4,652,770.5), new cjs.Rectangle(-326,-343.8,652,749.8), new cjs.Rectangle(-326,-323.1,652,729.2), new cjs.Rectangle(-326,-302.4,652,708.5), new cjs.Rectangle(-326,-281.8,652,687.8), new cjs.Rectangle(-326,-261.1,652,667.2), new cjs.Rectangle(-326,-240.4,652,646.5), rect=new cjs.Rectangle(-326,-219.8,652,625.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-237.6,652,643.6), new cjs.Rectangle(-326,-255.4,652,661.4), new cjs.Rectangle(-326,-273.2,652,679.2), new cjs.Rectangle(-326,-291,652,697), new cjs.Rectangle(-326,-308.8,652,714.8), new cjs.Rectangle(-326,-326.6,652,732.6), new cjs.Rectangle(-326,-344.4,652,750.4), new cjs.Rectangle(-326,-362.2,652,768.2), new cjs.Rectangle(-326,-380,652,786), rect=new cjs.Rectangle(-326,-397.8,652,803.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-397.8,652,809.1), new cjs.Rectangle(-326,-397.8,652,812.5), new cjs.Rectangle(-326,-397.8,652,814.3), new cjs.Rectangle(-326,-398.5,652,815), new cjs.Rectangle(-326,-399.2,652,813.7), new cjs.Rectangle(-326,-400,652,814.4), new cjs.Rectangle(-326,-400.7,652,815.1), new cjs.Rectangle(-326,-401.4,652,815.8), new cjs.Rectangle(-326,-402.1,652,816.5), new cjs.Rectangle(-326,-402.9,652,817.3), new cjs.Rectangle(-326,-403.6,652,818), new cjs.Rectangle(-326,-404.3,652,818.7), new cjs.Rectangle(-326,-405,652,819.4), new cjs.Rectangle(-326,-405.8,652,820.3)];


(lib.animation4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(-44.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_3 = new lib.claw1_1_mc();
	this.instance_3.setTransform(-34.5,-393.9,1,1,2.7,0,0,-0.1,-233.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,rotation:2.7,x:-34.5},5).to({_off:false,x:121.5},31).to({rotation:0},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},5).to({_off:true,x:121.5},31).wait(9));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,652,811.9), new cjs.Rectangle(-326,-406,652,812.1), new cjs.Rectangle(-326,-406.2,652,812.2), new cjs.Rectangle(-326,-406.4,652,812.4), new cjs.Rectangle(-326,-406.5,652,812.6), rect=new cjs.Rectangle(-326,-406.4,652,812.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-406.5,652,812.6), new cjs.Rectangle(-326,-406.4,652,812.5), new cjs.Rectangle(-326,-406.3,652,812.4), new cjs.Rectangle(-326,-406.2,652,812.3), new cjs.Rectangle(-326,-406.1,652,812.2), new cjs.Rectangle(-326,-406.1,652,812.1), new cjs.Rectangle(-326,-406,652,812), new cjs.Rectangle(-326,-405.9,652,812), new cjs.Rectangle(-326,-405.8,652,811.8)];


(lib.animation3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		try
		{
			app.addSoundFunc("hit_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(24));

	// animation
	this.instance = new lib.claw1_4_mc();
	this.instance.setTransform(-0.5,-387.9,1,1,0,0,0,-0.1,-233.1);
	this.instance._off = true;

	this.instance_1 = new lib.claw1_1_mc();
	this.instance_1.setTransform(-0.5,-387.9,1,1,0,0,0,-0.1,-233.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},46).to({state:[{t:this.instance_1}]},9).to({state:[]},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({_off:true},9).wait(15));

	// animation
	this.instance_2 = new lib.claw_machine_egg1_mc();
	this.instance_2.setTransform(-3,37.6,1,1,-166.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({y:325.5},8).to({rotation:-111.1,x:5,y:332.5},3).wait(13));

	// animation
	this.instance_3 = new lib.claw_machine_back2_mc();
	this.instance_3.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

	// animation
	this.instance_4 = new lib.claw_machine_front1_img();
	this.instance_4.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// animation
	this.instance_5 = new lib.claw1_mc();
	this.instance_5.setTransform(-44.5,-393.9,1,1,0,0,0,-0.1,-233.1);

	this.instance_6 = new lib.claw1_2_mc();
	this.instance_6.setTransform(-44.5,-193.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.claw1_3_mc();
	this.instance_7.setTransform(-44.5,-193.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.claw1_1_mc();
	this.instance_8.setTransform(-0.5,-387.9,1,1,0,0,0,-0.1,-233.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:-193.9},9).wait(47).to({_off:false,y:-393.9},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},9).to({_off:true},18).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},18).to({y:-387.9},12).to({x:-0.5},6).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({_off:false},0).to({_off:true,x:-44.5,y:-393.9},13).wait(1));

	// animation
	this.instance_9 = new lib.claw_machine_egg1_mc();
	this.instance_9.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({rotation:33.6,x:20,y:190},9).to({rotation:22.2,x:15,y:188},9).wait(43));

	// animation
	this.instance_10 = new lib.claw_machine_egg1_mc();
	this.instance_10.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({rotation:46.9},9).to({rotation:37.5},9).wait(43));

	// animation
	this.instance_11 = new lib.claw_machine_egg1_mc();
	this.instance_11.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({rotation:-10.4},9).to({rotation:0},9).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,652,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-383.6,652,789.7), new cjs.Rectangle(-326,-361.4,652,767.4), new cjs.Rectangle(-326,-339.2,652,745.2), new cjs.Rectangle(-326,-316.9,652,723), new cjs.Rectangle(-326,-294.7,652,700.8), new cjs.Rectangle(-326,-272.5,652,678.5), new cjs.Rectangle(-326,-250.3,652,656.3), new cjs.Rectangle(-326,-228,652,634.1), rect=new cjs.Rectangle(-326,-205.8,652,611.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-222,652,628), new cjs.Rectangle(-326,-238.2,652,644.2), new cjs.Rectangle(-326,-254.3,652,660.4), new cjs.Rectangle(-326,-270.5,652,676.5), new cjs.Rectangle(-326,-286.7,652,692.7), new cjs.Rectangle(-326,-302.8,652,708.9), new cjs.Rectangle(-326,-319,652,725), new cjs.Rectangle(-326,-335.2,652,741.2), new cjs.Rectangle(-326,-351.3,652,757.4), new cjs.Rectangle(-326,-367.5,652,773.5), new cjs.Rectangle(-326,-383.7,652,789.7), rect=new cjs.Rectangle(-326,-399.8,652,805.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-399.8,652,806.3), new cjs.Rectangle(-326,-400.3,652,806.3), new cjs.Rectangle(-326,-400.7,652,806.8), new cjs.Rectangle(-326,-401.2,652,807.3), new cjs.Rectangle(-326,-401.7,652,807.7), new cjs.Rectangle(-326,-402.1,652,808.2), new cjs.Rectangle(-326,-402.6,652,808.6), new cjs.Rectangle(-326,-403.1,652,809.1), new cjs.Rectangle(-326,-403.5,652,809.6), new cjs.Rectangle(-326,-404,652,810), new cjs.Rectangle(-326,-404.4,652,810.5), new cjs.Rectangle(-326,-404.9,652,811), new cjs.Rectangle(-326,-405.4,652,811.4), new cjs.Rectangle(-326,-405.8,652,811.9)];


(lib.animation2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// animation
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(-226.5,-393.9,1,1,0,0,0,0,-233);

	this.instance_3 = new lib.claw1_1_mc();
	this.instance_3.setTransform(-206.5,-393.9,1,1,5.5,0,0,-0.1,-233);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:-0.1,rotation:5.5,x:-206.5},3).to({_off:false,x:-44.5},31).to({regY:-233.1,rotation:0},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},3).to({_off:true,x:-44.5},31).wait(11));

	// animation
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// animation
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.claw_machine_egg1_mc();
	this.instance_6.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,652,812);
p.frameBounds = [rect, new cjs.Rectangle(-326,-406.3,652,812.4), new cjs.Rectangle(-326,-406.8,652,812.9), new cjs.Rectangle(-326,-407.4,652,813.4), rect=new cjs.Rectangle(-326,-407.3,652,813.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-407.4,652,813.4), new cjs.Rectangle(-326,-407.2,652,813.2), new cjs.Rectangle(-326,-407,652,813.1), new cjs.Rectangle(-326,-406.9,652,812.9), new cjs.Rectangle(-326,-406.8,652,812.9), new cjs.Rectangle(-326,-406.5,652,812.6), new cjs.Rectangle(-326,-406.5,652,812.5), new cjs.Rectangle(-326,-406.3,652,812.3), new cjs.Rectangle(-326,-406.1,652,812.2), new cjs.Rectangle(-326,-406,652,812), new cjs.Rectangle(-326,-405.8,652,811.9)];


(lib.animation1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.claw_machine_back2_mc();
	this.instance.setTransform(2,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.claw_machine_front1_img();
	this.instance_1.setTransform(-326,123.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.claw1_mc();
	this.instance_2.setTransform(-226.5,-160.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.claw_machine_egg1_mc();
	this.instance_3.setTransform(15,188,1,1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.claw_machine_egg1_mc();
	this.instance_4.setTransform(64,186,1,1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.claw_machine_egg1_mc();
	this.instance_5.setTransform(-38,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,652,812);
p.frameBounds = [rect];


(lib.animation_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go_1_2:1,luck_2:2,go_2_3:3,luck_3:4,go_3_4:5,luck_4:6,go_4_3:7,go_3_2:8,go_2_1:9,luck_1:10,fail_2:11,fail_3:12,fail_4:13,fail_1:14});

	// body
	this.frame_0_mc = new lib.animation1_mc();

	this.frame_1_mc = new lib.animation2_mc();

	this.frame_2_mc = new lib.animation3_mc();

	this.frame_3_mc = new lib.animation4_mc();

	this.frame_4_mc = new lib.animation5_mc();

	this.frame_5_mc = new lib.animation6_mc();

	this.frame_6_mc = new lib.animation7_mc();

	this.frame_7_mc = new lib.animation8_mc();

	this.frame_8_mc = new lib.animation9_mc();

	this.frame_9_mc = new lib.animation10_mc();

	this.frame_10_mc = new lib.animation11_mc();

	this.frame_11_mc = new lib.animation12_mc();

	this.frame_12_mc = new lib.animation13_mc();

	this.frame_13_mc = new lib.animation14_mc();

	this.frame_14_mc = new lib.animation15_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.frame_9_mc}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.frame_11_mc}]},1).to({state:[{t:this.frame_12_mc}]},1).to({state:[{t:this.frame_13_mc}]},1).to({state:[{t:this.frame_14_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,652,812);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-326,-405.8,652,811.9), rect, rect=new cjs.Rectangle(-326,-405.8,652,811.8), rect, rect, rect, rect, new cjs.Rectangle(-326,-405.8,652,811.9), new cjs.Rectangle(-326,-405.9,652,812), new cjs.Rectangle(-326,-405.8,652,811.9), rect=new cjs.Rectangle(-326,-405.8,652,811.8), rect, new cjs.Rectangle(-326,-405.9,652,812)];


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
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-35,-35,70,70)];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_mc();
	this.instance.setTransform(0,0,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-75.5,170,151);
p.frameBounds = [rect, new cjs.Rectangle(-90,-80,180,160), new cjs.Rectangle(-85,-75.5,170,151.1), new cjs.Rectangle(-90,-80,180,160)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-75.5,170,151.1);
p.frameBounds = [rect, new cjs.Rectangle(-90,-80,180,160), new cjs.Rectangle(-85,-75.5,170,151.1), new cjs.Rectangle(-90,-80,180,160)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_mc();
	this.instance.setTransform(0,0,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-75.5,170,151.1);
p.frameBounds = [rect, new cjs.Rectangle(-90,-80,180,160), new cjs.Rectangle(-85,-75.5,170,151.1), new cjs.Rectangle(-90,-80,180,160)];


(lib.new_game_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.new_game_mc();
	this.instance.setTransform(0,0,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-75.5,170,151.1);
p.frameBounds = [rect, new cjs.Rectangle(-90,-80,180,160), new cjs.Rectangle(-85,-75.5,170,151.1), new cjs.Rectangle(-90,-80,180,160)];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.955,0.954);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.95,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_3_2_mc();
	this.instance.setTransform(204.7,83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},7).to({scaleX:1,scaleY:1},7).wait(1));

	// animation
	this.instance_1 = new lib.more_games_4_2_mc();
	this.instance_1.setTransform(203.6,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:45},14).wait(1));

	// animation
	this.instance_2 = new lib.more_games_2_2_img();
	this.instance_2.setTransform(144.5,33.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.more_games_1_2_mc();
	this.instance_3.setTransform(197.4,87.8,0.765,0.765,0,0,0,118.1,106.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.5,scaleY:0.5},7).to({scaleX:0.77,scaleY:0.77},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(107.2,6.5,180.7,162.5);
p.frameBounds = [rect, new cjs.Rectangle(111.6,10.5,171.8,154.5), new cjs.Rectangle(116,14.5,162.9,146.5), new cjs.Rectangle(120.5,12.1,158.6,150.1), new cjs.Rectangle(124.9,9.3,157,155.8), new cjs.Rectangle(123.5,6.6,161.1,161.1), new cjs.Rectangle(121.1,4.3,165.9,165.9), new cjs.Rectangle(119.1,2.3,169.8,169.9), new cjs.Rectangle(117.3,0.5,173.6,173.6), new cjs.Rectangle(115.6,-1,176.8,176.8), new cjs.Rectangle(114.3,-2.3,179.4,179.4), new cjs.Rectangle(113.3,-3.3,181.4,181.4), new cjs.Rectangle(112.6,-4,182.8,182.9), new cjs.Rectangle(111.6,-4.4,184.1,183.7), new cjs.Rectangle(107.2,-4.8,188.9,184.3)];


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
	this.instance.setTransform(0,0,0.955,0.954);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.95,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-47.7,210,95.4);
p.frameBounds = [rect, new cjs.Rectangle(-110,-50,220,100), new cjs.Rectangle(-105,-47.7,210,95.4), new cjs.Rectangle(-110,-50,220,100)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-35,-35,70,70)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-51,1200,651);
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


(lib.gallery_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-330,0);

	this.next_mc = new lib.next_mc_1();
	this.next_mc.setTransform(330,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(3));

	// counter
	this.counter_mc = new lib.counterOptions_mc();
	this.counter_mc.setTransform(0,245);

	this.timeline.addTween(cjs.Tween.get(this.counter_mc).wait(3));

	// options
	this.option_8_mc = new lib.option_8_mc();
	this.option_8_mc.setTransform(246,102);

	this.option_7_mc = new lib.option_7_mc();
	this.option_7_mc.setTransform(82,102);

	this.option_6_mc = new lib.option_6_mc();
	this.option_6_mc.setTransform(-82,102);

	this.option_5_mc = new lib.option_5_mc();
	this.option_5_mc.setTransform(-246,102);

	this.option_4_mc = new lib.option_4_mc();
	this.option_4_mc.setTransform(246,-102);

	this.option_3_mc = new lib.option_3_mc();
	this.option_3_mc.setTransform(82,-102);

	this.option_2_mc = new lib.option_2_mc();
	this.option_2_mc.setTransform(-82,-102);

	this.option_1_mc = new lib.option_1_mc();
	this.option_1_mc.setTransform(-246,-102);

	this.option_16_mc = new lib.option_16_mc();
	this.option_16_mc.setTransform(246,102);

	this.option_15_mc = new lib.option_15_mc();
	this.option_15_mc.setTransform(82,102);

	this.option_14_mc = new lib.option_14_mc();
	this.option_14_mc.setTransform(-82,102);

	this.option_13_mc = new lib.option_13_mc();
	this.option_13_mc.setTransform(-246,102);

	this.option_12_mc = new lib.option_12_mc();
	this.option_12_mc.setTransform(246,-102);

	this.option_11_mc = new lib.option_11_mc();
	this.option_11_mc.setTransform(82,-102);

	this.option_10_mc = new lib.option_10_mc();
	this.option_10_mc.setTransform(-82,-102);

	this.option_9_mc = new lib.option_9_mc();
	this.option_9_mc.setTransform(-246,-102);

	this.option_20_mc = new lib.option_20_mc();
	this.option_20_mc.setTransform(82,102);

	this.option_19_mc = new lib.option_19_mc();
	this.option_19_mc.setTransform(-82,102);

	this.option_18_mc = new lib.option_18_mc();
	this.option_18_mc.setTransform(82,-102);

	this.option_17_mc = new lib.option_17_mc();
	this.option_17_mc.setTransform(-82,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option_1_mc},{t:this.option_2_mc},{t:this.option_3_mc},{t:this.option_4_mc},{t:this.option_5_mc},{t:this.option_6_mc},{t:this.option_7_mc},{t:this.option_8_mc}]}).to({state:[{t:this.option_9_mc},{t:this.option_10_mc},{t:this.option_11_mc},{t:this.option_12_mc},{t:this.option_13_mc},{t:this.option_14_mc},{t:this.option_15_mc},{t:this.option_16_mc}]},1).to({state:[{t:this.option_17_mc},{t:this.option_18_mc},{t:this.option_19_mc},{t:this.option_20_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-200,750,477);
p.frameBounds = [rect, rect, rect];


(lib.egg_animation_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(82.8,227.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-68.4,-82.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(140.6,-123.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-85.3,216.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(27.4,-102,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-36.5,-181.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl20_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1.09,scaleY:1.09,x:-12.6,y:-14.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-119.6,-212.8,294.6,462.7), new cjs.Rectangle(-121.1,-215.4,296.8,466.2), new cjs.Rectangle(-122.7,-218,299,469.8), new cjs.Rectangle(-124.3,-220.6,301.3,473.3), new cjs.Rectangle(-125.9,-223.1,303.5,476.8), new cjs.Rectangle(-127.4,-225.8,305.7,480.3), new cjs.Rectangle(-129,-228.3,308,483.8), new cjs.Rectangle(-130.7,-231,310.2,487.3), new cjs.Rectangle(-132.3,-233.5,312.4,490.8), new cjs.Rectangle(-133.9,-236.1,314.7,494.4), new cjs.Rectangle(-135.5,-238.6,316.9,497.9), new cjs.Rectangle(-137.1,-241.3,319.2,501.4), new cjs.Rectangle(-138.7,-243.8,321.4,504.9), new cjs.Rectangle(-140.3,-246.5,323.6,508.4), new cjs.Rectangle(-141.9,-249,325.9,511.9), new cjs.Rectangle(-143.5,-251.6,328.1,515.4), new cjs.Rectangle(-145.1,-254.2,330.3,518.9), new cjs.Rectangle(-146.7,-256.8,332.5,522.5), new cjs.Rectangle(-148.2,-259.4,334.8,526), new cjs.Rectangle(-149.9,-262,337,529.5), rect=new cjs.Rectangle(-149.8,-262,337,529.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-149.9,-262,337,529.5), new cjs.Rectangle(-114,-229,320.7,503.7), new cjs.Rectangle(-78,-196,304.3,478), new cjs.Rectangle(-42,-163,287.9,452.3), new cjs.Rectangle(-5.9,-129.9,271.5,426.5), new cjs.Rectangle(29.9,-96.9,255.1,400.8), new cjs.Rectangle(65.9,-63.9,238.7,375), new cjs.Rectangle(101.9,-30.9,222.3,349.3), new cjs.Rectangle(137.9,2.1,206,323.5), new cjs.Rectangle(173.8,35.1,189.6,297.8), new cjs.Rectangle(209.9,68.1,173.2,272), new cjs.Rectangle(245.8,101.2,156.8,246.3), new cjs.Rectangle(281.8,134.2,140.4,220.6), new cjs.Rectangle(317.9,167.3,124,194.9), null];


(lib.egg_animation_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(97.8,231.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-156.4,-170,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(150.6,-119.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-30.6,123.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(15.4,-122,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-53.5,-215.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl19_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1.11,scaleY:1.11,x:-6.6,y:-19.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-165.3,-193.3,343,447.5), new cjs.Rectangle(-167,-196.3,346,451.4), new cjs.Rectangle(-168.8,-199.2,349,455.4), new cjs.Rectangle(-170.6,-202.1,352,459.3), new cjs.Rectangle(-172.4,-205,355,463.3), new cjs.Rectangle(-174.3,-208,358.1,467.2), new cjs.Rectangle(-176.1,-210.9,361.1,471.1), new cjs.Rectangle(-178,-213.8,364.1,475.1), new cjs.Rectangle(-179.8,-216.9,367.1,479), new cjs.Rectangle(-181.6,-219.7,370.2,483), new cjs.Rectangle(-183.5,-222.7,373.2,486.9), new cjs.Rectangle(-185.3,-225.6,376.2,490.9), new cjs.Rectangle(-187.1,-228.6,379.2,494.8), new cjs.Rectangle(-188.9,-231.6,382.2,498.7), new cjs.Rectangle(-190.8,-234.4,385.3,502.7), new cjs.Rectangle(-192.6,-237.4,388.3,506.6), new cjs.Rectangle(-194.4,-240.3,391.3,510.6), new cjs.Rectangle(-196.2,-243.3,394.3,514.5), new cjs.Rectangle(-198,-246.3,397.4,518.5), new cjs.Rectangle(-200,-249.2,400.4,522.4), rect=new cjs.Rectangle(-199.9,-249.2,400.4,522.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-249.2,400.4,522.4), new cjs.Rectangle(-161.6,-216.6,380.7,496.7), new cjs.Rectangle(-123.3,-184,361,471), new cjs.Rectangle(-84.9,-151.3,341.3,445.3), new cjs.Rectangle(-46.6,-118.6,321.6,419.6), new cjs.Rectangle(-8.2,-85.9,301.9,393.9), new cjs.Rectangle(30.1,-53.3,282.2,368.2), new cjs.Rectangle(68.5,-20.6,262.5,342.6), new cjs.Rectangle(106.8,12.1,242.9,316.8), new cjs.Rectangle(145.1,44.7,223.2,291.2), new cjs.Rectangle(183.5,77.4,203.5,265.5), new cjs.Rectangle(221.8,110.1,183.8,239.8), new cjs.Rectangle(260.2,142.7,164.1,214.1), new cjs.Rectangle(298.6,175.5,144.4,188.4), null];


(lib.egg_animation_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(96.8,221.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-114.4,-60.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(131.6,-163.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-28.6,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-22.6,-125,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-32.5,-215.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl18_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1.16,scaleY:1.16,x:-1.6,y:-40.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-160.1,-164.1,321.4,417.9), new cjs.Rectangle(-162.1,-168.4,325.2,422.9), new cjs.Rectangle(-164.1,-172.7,329,427.8), new cjs.Rectangle(-166.1,-177,332.9,432.8), new cjs.Rectangle(-168.1,-181.2,336.7,437.7), new cjs.Rectangle(-170.1,-185.6,340.5,442.7), new cjs.Rectangle(-172.1,-189.9,344.3,447.7), new cjs.Rectangle(-174.2,-194.2,348.1,452.6), new cjs.Rectangle(-176.2,-198.5,351.9,457.6), new cjs.Rectangle(-178.2,-202.8,355.8,462.6), new cjs.Rectangle(-180.2,-207.1,359.5,467.5), new cjs.Rectangle(-182.2,-211.4,363.4,472.5), new cjs.Rectangle(-184.2,-215.8,367.2,477.5), new cjs.Rectangle(-186.1,-220,371,482.4), new cjs.Rectangle(-188.1,-224.3,374.9,487.4), new cjs.Rectangle(-190.2,-228.7,378.7,492.4), new cjs.Rectangle(-192.2,-233,382.5,497.3), new cjs.Rectangle(-194.2,-237.3,386.3,502.3), new cjs.Rectangle(-196.3,-241.6,390.1,507.3), new cjs.Rectangle(-198.4,-245.9,394,512.2), rect=new cjs.Rectangle(-198.3,-245.9,393.9,512.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-198.4,-245.9,394,512.2), new cjs.Rectangle(-160,-212.5,374.1,486.4), new cjs.Rectangle(-121.6,-179.2,354.2,460.5), new cjs.Rectangle(-83.2,-145.8,334.3,434.6), new cjs.Rectangle(-44.8,-112.5,314.4,408.8), new cjs.Rectangle(-6.4,-79.1,294.5,382.9), new cjs.Rectangle(31.9,-45.8,274.5,357), new cjs.Rectangle(70.4,-12.4,254.7,331.2), new cjs.Rectangle(108.7,20.9,234.8,305.3), new cjs.Rectangle(147.1,54.3,214.9,279.4), new cjs.Rectangle(185.5,87.6,195,253.6), new cjs.Rectangle(224,121,175.1,227.7), new cjs.Rectangle(262.3,154.4,155.2,201.8), new cjs.Rectangle(300.8,187.8,135.4,175.9), null];


(lib.egg_animation_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(68.8,234.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-155.4,-112.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(142.6,-149.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-110.3,82.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-4.6,-129,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-56.5,-210.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl17_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1.11,scaleY:1.11,x:-5.6,y:-10.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-174.7,-207.1,352,459.4), new cjs.Rectangle(-176.5,-209.7,355,463.5), new cjs.Rectangle(-178.3,-212.2,358,467.5), new cjs.Rectangle(-180.1,-214.9,361.2,471.5), new cjs.Rectangle(-182,-217.4,364.3,475.6), new cjs.Rectangle(-183.9,-220,367.4,479.6), new cjs.Rectangle(-185.7,-222.5,370.4,483.6), new cjs.Rectangle(-187.6,-225.1,373.5,487.6), new cjs.Rectangle(-189.5,-227.7,376.6,491.7), new cjs.Rectangle(-191.3,-230.3,379.7,495.7), new cjs.Rectangle(-193.1,-232.9,382.8,499.7), new cjs.Rectangle(-195,-235.4,385.9,503.8), new cjs.Rectangle(-196.9,-238,389,507.8), new cjs.Rectangle(-198.7,-240.7,392,511.8), new cjs.Rectangle(-200.5,-243.2,395.1,515.8), new cjs.Rectangle(-202.4,-245.8,398.2,519.9), new cjs.Rectangle(-204.3,-248.4,401.3,523.9), new cjs.Rectangle(-206,-251,404.4,528), new cjs.Rectangle(-207.9,-253.5,407.5,532), new cjs.Rectangle(-209.9,-256.2,410.6,536), rect=new cjs.Rectangle(-209.8,-256.1,410.6,536), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-209.9,-256.2,410.6,536), new cjs.Rectangle(-171.1,-223.4,390.4,509.7), new cjs.Rectangle(-132.3,-190.8,370.2,483.3), new cjs.Rectangle(-93.5,-157.9,350,457), new cjs.Rectangle(-54.6,-125.2,329.8,430.6), new cjs.Rectangle(-15.8,-92.4,309.6,404.3), new cjs.Rectangle(22.9,-59.6,289.5,377.9), new cjs.Rectangle(61.7,-26.9,269.3,351.5), new cjs.Rectangle(100.5,5.8,249.1,325.2), new cjs.Rectangle(139.3,38.6,228.9,298.8), new cjs.Rectangle(178.2,71.4,208.7,272.5), new cjs.Rectangle(217,104.1,188.5,246.1), new cjs.Rectangle(255.8,136.9,168.4,219.8), new cjs.Rectangle(294.7,169.7,148.2,193.4), null];


(lib.egg_animation_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(102.8,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(33.6,-40.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(19.7,-221.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-76.4,175.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(45.4,-146,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-53.5,3.2,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl16_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-118,-241.9,263.2,490.2), new cjs.Rectangle(-118.2,-242.6,263.9,491.6), new cjs.Rectangle(-118.6,-243.2,264.6,492.9), new cjs.Rectangle(-118.9,-244,265.4,494.3), new cjs.Rectangle(-119.2,-244.6,266.1,495.6), new cjs.Rectangle(-119.6,-245.3,266.8,497), new cjs.Rectangle(-119.9,-246,267.5,498.4), new cjs.Rectangle(-120.2,-246.6,268.3,499.7), new cjs.Rectangle(-120.5,-247.3,269,501.1), new cjs.Rectangle(-120.9,-248,269.7,502.4), new cjs.Rectangle(-121.2,-248.7,270.5,503.8), new cjs.Rectangle(-121.5,-249.4,271.2,505.2), new cjs.Rectangle(-121.9,-250,271.9,506.5), new cjs.Rectangle(-122.2,-250.7,272.6,507.9), new cjs.Rectangle(-122.5,-251.4,273.4,509.2), new cjs.Rectangle(-122.8,-252.1,274.1,510.6), new cjs.Rectangle(-123.2,-252.8,274.8,511.9), new cjs.Rectangle(-123.5,-253.4,275.6,513.3), new cjs.Rectangle(-123.8,-254.1,276.3,514.7), rect=new cjs.Rectangle(-124.2,-254.8,277,516), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-90.1,-223.3,264.2,492.2), new cjs.Rectangle(-56.1,-191.8,251.5,468.4), new cjs.Rectangle(-22,-160.2,238.7,444.6), new cjs.Rectangle(12,-128.7,225.9,420.8), new cjs.Rectangle(46.1,-97.2,213.1,396.9), new cjs.Rectangle(80.1,-65.7,200.3,373.1), new cjs.Rectangle(114.2,-34.1,187.5,349.3), new cjs.Rectangle(148.2,-2.6,174.7,325.5), new cjs.Rectangle(182.3,28.9,162,301.7), new cjs.Rectangle(216.4,60.4,149.2,277.9), new cjs.Rectangle(250.4,92,136.4,254), new cjs.Rectangle(284.5,123.5,123.6,230.2), new cjs.Rectangle(318.5,155,110.8,206.4), null];


(lib.egg_animation_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(102.8,218.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-39.4,30.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(69.6,-206.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-50.6,209.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(20.4,-126,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-88.5,-122.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl15_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-244,234.6,493.1), new cjs.Rectangle(-117.2,-244.7,235.3,494.4), new cjs.Rectangle(-117.5,-245.3,236,495.8), new cjs.Rectangle(-117.8,-246.1,236.6,497.2), new cjs.Rectangle(-118.2,-246.8,237.3,498.5), new cjs.Rectangle(-118.5,-247.4,237.9,499.9), new cjs.Rectangle(-118.8,-248.1,238.6,501.3), new cjs.Rectangle(-119.1,-248.8,239.2,502.6), new cjs.Rectangle(-119.5,-249.5,239.9,504), new cjs.Rectangle(-119.8,-250.2,240.5,505.4), new cjs.Rectangle(-120.1,-250.9,241.2,506.7), new cjs.Rectangle(-120.4,-251.5,241.8,508.1), new cjs.Rectangle(-120.8,-252.2,242.5,509.5), new cjs.Rectangle(-121.1,-252.9,243.1,510.8), new cjs.Rectangle(-121.4,-253.6,243.8,512.2), new cjs.Rectangle(-121.7,-254.3,244.4,513.5), new cjs.Rectangle(-122.1,-255,245.1,514.9), new cjs.Rectangle(-122.4,-255.6,245.7,516.3), new cjs.Rectangle(-122.7,-256.3,246.4,517.6), rect=new cjs.Rectangle(-123.1,-257,247,519), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-225.4,235.6,495.1), new cjs.Rectangle(-55.1,-193.8,224.2,471.1), new cjs.Rectangle(-21.1,-162.1,212.8,447.2), new cjs.Rectangle(12.9,-130.5,201.4,423.2), new cjs.Rectangle(46.9,-98.9,190,399.3), new cjs.Rectangle(80.9,-67.2,178.6,375.3), new cjs.Rectangle(114.9,-35.6,167.2,351.3), new cjs.Rectangle(148.9,-4,155.8,327.4), new cjs.Rectangle(182.9,27.6,144.4,303.4), new cjs.Rectangle(217,59.2,133,279.5), new cjs.Rectangle(251,90.9,121.6,255.5), new cjs.Rectangle(285,122.5,110.2,231.6), new cjs.Rectangle(319,154.2,98.8,207.6), null];


(lib.egg_animation_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(102.8,218.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(39.5,-218.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(22.6,-18.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(8.5,65.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(35.4,-131,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-35.5,-226.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl14_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-243,234.6,491.2), new cjs.Rectangle(-117.2,-243.6,235.3,492.5), new cjs.Rectangle(-117.5,-244.3,236,493.9), new cjs.Rectangle(-117.8,-245,236.6,495.2), new cjs.Rectangle(-118.2,-245.7,237.3,496.6), new cjs.Rectangle(-118.5,-246.4,237.9,498), new cjs.Rectangle(-118.8,-247,238.6,499.3), new cjs.Rectangle(-119.1,-247.7,239.2,500.7), new cjs.Rectangle(-119.5,-248.4,239.9,502.1), new cjs.Rectangle(-119.8,-249.1,240.5,503.4), new cjs.Rectangle(-120.1,-249.8,241.2,504.8), new cjs.Rectangle(-120.4,-250.4,241.8,506.1), new cjs.Rectangle(-120.8,-251.1,242.5,507.5), new cjs.Rectangle(-121.1,-251.8,243.1,508.9), new cjs.Rectangle(-121.4,-252.5,243.8,510.2), new cjs.Rectangle(-121.7,-253.2,244.4,511.6), new cjs.Rectangle(-122.1,-253.9,245.1,512.9), new cjs.Rectangle(-122.4,-254.5,245.7,514.3), new cjs.Rectangle(-122.7,-255.2,246.4,515.7), rect=new cjs.Rectangle(-123.1,-255.9,247,517), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-224.3,235.6,493.2), new cjs.Rectangle(-55.1,-192.8,224.2,469.3), new cjs.Rectangle(-21.1,-161.1,212.8,445.4), new cjs.Rectangle(12.9,-129.6,201.4,421.6), new cjs.Rectangle(46.9,-98,190,397.7), new cjs.Rectangle(80.9,-66.4,178.6,373.8), new cjs.Rectangle(114.9,-34.8,167.2,350), new cjs.Rectangle(148.9,-3.3,155.8,326.1), new cjs.Rectangle(182.9,28.3,144.4,302.3), new cjs.Rectangle(217,59.8,133,278.4), new cjs.Rectangle(251,91.4,121.6,254.5), new cjs.Rectangle(285,123,110.2,230.7), new cjs.Rectangle(319,154.6,98.8,206.8), null];


(lib.egg_animation_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,219.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-62.6,23.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(33.6,-232.8,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-62.6,205.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-6.6,-141,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-57.5,-209.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl13_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-240.9,234.6,490.2), new cjs.Rectangle(-117.2,-241.5,235.3,491.6), new cjs.Rectangle(-117.5,-242.2,236,492.9), new cjs.Rectangle(-117.8,-242.9,236.6,494.3), new cjs.Rectangle(-118.2,-243.6,237.3,495.6), new cjs.Rectangle(-118.5,-244.3,237.9,497), new cjs.Rectangle(-118.8,-244.9,238.6,498.4), new cjs.Rectangle(-119.1,-245.6,239.2,499.7), new cjs.Rectangle(-119.5,-246.3,239.9,501.1), new cjs.Rectangle(-119.8,-247,240.5,502.4), new cjs.Rectangle(-120.1,-247.7,241.2,503.8), new cjs.Rectangle(-120.4,-248.3,241.8,505.2), new cjs.Rectangle(-120.8,-249,242.5,506.5), new cjs.Rectangle(-121.1,-249.6,243.1,507.9), new cjs.Rectangle(-121.4,-250.4,243.8,509.2), new cjs.Rectangle(-121.7,-251,244.4,510.6), new cjs.Rectangle(-122.1,-251.7,245.1,511.9), new cjs.Rectangle(-122.4,-252.3,245.7,513.3), new cjs.Rectangle(-122.7,-253,246.4,514.7), rect=new cjs.Rectangle(-123.1,-253.7,247,516), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-222.2,235.6,492.2), new cjs.Rectangle(-55.1,-190.8,224.2,468.4), new cjs.Rectangle(-21.1,-159.3,212.8,444.6), new cjs.Rectangle(12.9,-127.8,201.4,420.8), new cjs.Rectangle(46.9,-96.3,190,396.9), new cjs.Rectangle(80.9,-64.9,178.6,373.1), new cjs.Rectangle(114.9,-33.3,167.2,349.3), new cjs.Rectangle(148.9,-1.9,155.8,325.5), new cjs.Rectangle(182.9,29.5,144.4,301.7), new cjs.Rectangle(217,61,133,277.9), new cjs.Rectangle(251,92.5,121.6,254), new cjs.Rectangle(285,124,110.2,230.2), new cjs.Rectangle(319,155.5,98.8,206.4), null];


(lib.egg_animation_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(99.8,223.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-56.4,-21.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(110.6,-105.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-28.6,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-18.6,-133,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-53.5,-215.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl12_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-118,-243,234.7,492.1), new cjs.Rectangle(-118.2,-243.6,235.3,493.5), new cjs.Rectangle(-118.6,-244.3,236,494.8), new cjs.Rectangle(-118.9,-245,236.6,496.2), new cjs.Rectangle(-119.2,-245.7,237.3,497.6), new cjs.Rectangle(-119.6,-246.4,237.9,498.9), new cjs.Rectangle(-119.9,-247,238.6,500.3), new cjs.Rectangle(-120.2,-247.7,239.2,501.7), new cjs.Rectangle(-120.5,-248.4,239.9,503), new cjs.Rectangle(-120.9,-249.1,240.5,504.4), new cjs.Rectangle(-121.2,-249.8,241.2,505.8), new cjs.Rectangle(-121.5,-250.4,241.8,507.1), new cjs.Rectangle(-121.9,-251.1,242.5,508.5), new cjs.Rectangle(-122.2,-251.8,243.1,509.8), new cjs.Rectangle(-122.5,-252.5,243.8,511.2), new cjs.Rectangle(-122.8,-253.2,244.4,512.6), new cjs.Rectangle(-123.2,-253.9,245.1,513.9), new cjs.Rectangle(-123.5,-254.5,245.7,515.3), new cjs.Rectangle(-123.8,-255.2,246.4,516.6), rect=new cjs.Rectangle(-124.2,-255.9,247,518), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-90.1,-224.3,235.6,494.1), new cjs.Rectangle(-56.1,-192.8,224.2,470.2), new cjs.Rectangle(-22,-161.1,212.8,446.3), new cjs.Rectangle(12,-129.6,201.4,422.4), new cjs.Rectangle(46.1,-98,190,398.5), new cjs.Rectangle(80.1,-66.4,178.6,374.6), new cjs.Rectangle(114.2,-34.8,167.2,350.7), new cjs.Rectangle(148.2,-3.3,155.8,326.8), new cjs.Rectangle(182.3,28.3,144.4,302.9), new cjs.Rectangle(216.4,59.8,133,278.9), new cjs.Rectangle(250.4,91.4,121.6,255), new cjs.Rectangle(284.5,123,110.2,231.1), new cjs.Rectangle(318.5,154.6,98.8,207.2), null];


(lib.egg_animation_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(100.6,225.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(18.6,35.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(69.6,-82.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-28.6,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-15.6,-115,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-25.5,-227.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl11_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-115.9,-243,234.7,492.1), new cjs.Rectangle(-116.1,-243.6,235.3,493.5), new cjs.Rectangle(-116.5,-244.3,236,494.8), new cjs.Rectangle(-116.8,-245,236.6,496.2), new cjs.Rectangle(-117.1,-245.7,237.3,497.6), new cjs.Rectangle(-117.4,-246.4,237.9,498.9), new cjs.Rectangle(-117.8,-247,238.6,500.3), new cjs.Rectangle(-118.1,-247.7,239.2,501.7), new cjs.Rectangle(-118.4,-248.4,239.9,503), new cjs.Rectangle(-118.7,-249.1,240.5,504.4), new cjs.Rectangle(-119,-249.8,241.2,505.8), new cjs.Rectangle(-119.4,-250.4,241.8,507.1), new cjs.Rectangle(-119.7,-251.1,242.5,508.5), new cjs.Rectangle(-120,-251.8,243.1,509.8), new cjs.Rectangle(-120.3,-252.5,243.8,511.2), new cjs.Rectangle(-120.7,-253.2,244.4,512.6), new cjs.Rectangle(-121,-253.9,245.1,513.9), new cjs.Rectangle(-121.3,-254.5,245.7,515.3), new cjs.Rectangle(-121.6,-255.2,246.4,516.6), rect=new cjs.Rectangle(-122,-255.9,247,518), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-88.1,-224.3,235.6,494.1), new cjs.Rectangle(-54.1,-192.8,224.2,470.2), new cjs.Rectangle(-20.1,-161.1,212.8,446.3), new cjs.Rectangle(13.8,-129.6,201.4,422.4), new cjs.Rectangle(47.7,-98,190,398.5), new cjs.Rectangle(81.7,-66.4,178.6,374.6), new cjs.Rectangle(115.6,-34.8,167.2,350.7), new cjs.Rectangle(149.6,-3.3,155.8,326.8), new cjs.Rectangle(183.5,28.3,144.4,302.9), new cjs.Rectangle(217.5,59.8,133,278.9), new cjs.Rectangle(251.5,91.4,121.6,255), new cjs.Rectangle(285.4,123,110.2,231.1), new cjs.Rectangle(319.4,154.6,98.8,207.2), null];


(lib.egg_animation_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(94.8,221.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-61.4,67,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(109.6,-135.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-15.5,7.7,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-28.6,-129,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-24.5,-193.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl10_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-243,253.6,491.2), new cjs.Rectangle(-117.2,-243.6,254.4,492.5), new cjs.Rectangle(-117.5,-244.3,255.1,493.9), new cjs.Rectangle(-117.8,-245,255.8,495.2), new cjs.Rectangle(-118.2,-245.7,256.5,496.6), new cjs.Rectangle(-118.5,-246.4,257.2,498), new cjs.Rectangle(-118.8,-247,257.9,499.3), new cjs.Rectangle(-119.1,-247.7,258.6,500.7), new cjs.Rectangle(-119.5,-248.4,259.3,502.1), new cjs.Rectangle(-119.8,-249.1,260,503.4), new cjs.Rectangle(-120.1,-249.8,260.7,504.8), new cjs.Rectangle(-120.4,-250.4,261.4,506.1), new cjs.Rectangle(-120.8,-251.1,262.1,507.5), new cjs.Rectangle(-121.1,-251.8,262.8,508.9), new cjs.Rectangle(-121.4,-252.5,263.5,510.2), new cjs.Rectangle(-121.7,-253.2,264.2,511.6), new cjs.Rectangle(-122.1,-253.9,264.9,512.9), new cjs.Rectangle(-122.4,-254.5,265.6,514.3), new cjs.Rectangle(-122.7,-255.2,266.3,515.7), rect=new cjs.Rectangle(-123.1,-255.9,267,517), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-224.3,254.7,493.2), new cjs.Rectangle(-55.1,-192.8,242.4,469.3), new cjs.Rectangle(-21.1,-161.1,230.1,445.4), new cjs.Rectangle(12.9,-129.6,217.7,421.6), new cjs.Rectangle(46.9,-98,205.4,397.7), new cjs.Rectangle(80.9,-66.4,193,373.8), new cjs.Rectangle(114.9,-34.8,180.7,350), new cjs.Rectangle(148.9,-3.3,168.4,326.1), new cjs.Rectangle(182.9,28.3,156.1,302.3), new cjs.Rectangle(217,59.8,143.8,278.4), new cjs.Rectangle(251,91.4,131.5,254.5), new cjs.Rectangle(285,123,119.1,230.7), new cjs.Rectangle(319,154.6,106.8,206.8), null];


(lib.egg_animation_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,220.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-0.5,32.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(97.6,-74.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-7.6,216.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-3.6,-133,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(16.5,-192.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl9_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-241.9,235.6,492.1), new cjs.Rectangle(-117.2,-242.6,236.3,493.5), new cjs.Rectangle(-117.5,-243.2,236.9,494.8), new cjs.Rectangle(-117.8,-244,237.6,496.2), new cjs.Rectangle(-118.2,-244.6,238.2,497.6), new cjs.Rectangle(-118.5,-245.3,238.9,498.9), new cjs.Rectangle(-118.8,-246,239.5,500.3), new cjs.Rectangle(-119.1,-246.6,240.2,501.7), new cjs.Rectangle(-119.5,-247.3,240.8,503), new cjs.Rectangle(-119.8,-248,241.5,504.4), new cjs.Rectangle(-120.1,-248.7,242.1,505.8), new cjs.Rectangle(-120.4,-249.4,242.8,507.1), new cjs.Rectangle(-120.8,-250,243.5,508.5), new cjs.Rectangle(-121.1,-250.7,244.1,509.8), new cjs.Rectangle(-121.4,-251.4,244.8,511.2), new cjs.Rectangle(-121.7,-252.1,245.4,512.6), new cjs.Rectangle(-122.1,-252.8,246.1,513.9), new cjs.Rectangle(-122.4,-253.4,246.7,515.3), new cjs.Rectangle(-122.7,-254.1,247.4,516.6), rect=new cjs.Rectangle(-123.1,-254.8,248,518), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-223.3,236.6,494.1), new cjs.Rectangle(-55.1,-191.8,225.1,470.2), new cjs.Rectangle(-21.1,-160.2,213.7,446.3), new cjs.Rectangle(12.9,-128.7,202.2,422.4), new cjs.Rectangle(46.9,-97.2,190.8,398.5), new cjs.Rectangle(80.9,-65.7,179.3,374.6), new cjs.Rectangle(114.9,-34.1,167.9,350.7), new cjs.Rectangle(148.9,-2.6,156.5,326.8), new cjs.Rectangle(182.9,28.9,145,302.9), new cjs.Rectangle(217,60.4,133.6,278.9), new cjs.Rectangle(251,92,122.1,255), new cjs.Rectangle(285,123.5,110.7,231.1), new cjs.Rectangle(319,155,99.2,207.2), null];


(lib.egg_animation_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-45.6,6.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(68.6,-64.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(6.4,214.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(39.4,-134,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(26.5,-229.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl8_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-120.1,-239.8,281.2,485.5), new cjs.Rectangle(-120.3,-240.5,282,486.8), new cjs.Rectangle(-120.7,-241.1,282.8,488.1), new cjs.Rectangle(-121,-241.9,283.6,489.5), new cjs.Rectangle(-121.3,-242.5,284.3,490.8), new cjs.Rectangle(-121.7,-243.2,285.1,492.2), new cjs.Rectangle(-122,-243.8,285.9,493.5), new cjs.Rectangle(-122.3,-244.5,286.7,494.9), new cjs.Rectangle(-122.7,-245.2,287.5,496.2), new cjs.Rectangle(-123,-245.9,288.2,497.6), new cjs.Rectangle(-123.3,-246.6,289,498.9), new cjs.Rectangle(-123.7,-247.2,289.8,500.3), new cjs.Rectangle(-124,-247.9,290.6,501.6), new cjs.Rectangle(-124.3,-248.6,291.3,502.9), new cjs.Rectangle(-124.7,-249.3,292.1,504.3), new cjs.Rectangle(-125,-249.9,292.9,505.6), new cjs.Rectangle(-125.3,-250.6,293.7,507), new cjs.Rectangle(-125.7,-251.2,294.5,508.3), new cjs.Rectangle(-126,-251.9,295.2,509.7), rect=new cjs.Rectangle(-126.4,-252.6,296,511), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.2,-221.2,282.4,487.4), new cjs.Rectangle(-58.1,-189.8,268.7,463.9), new cjs.Rectangle(-23.9,-158.3,255,440.3), new cjs.Rectangle(10.2,-126.9,241.4,416.7), new cjs.Rectangle(44.4,-95.5,227.7,393.1), new cjs.Rectangle(78.5,-64.1,214.1,369.5), new cjs.Rectangle(112.7,-32.6,200.4,345.9), new cjs.Rectangle(146.8,-1.2,186.7,322.3), new cjs.Rectangle(181,30.2,173.1,298.8), new cjs.Rectangle(215.2,61.6,159.4,275.2), new cjs.Rectangle(249.3,93.1,145.7,251.6), new cjs.Rectangle(283.5,124.5,132.1,228), new cjs.Rectangle(317.7,155.9,118.4,204.4), null];


(lib.egg_animation_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-8.4,42.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(-14.7,-40.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-31.6,163.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(39.4,-104,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-14.7,-176.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl7_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-247.1,234.6,495), new cjs.Rectangle(-117.2,-247.8,235.3,496.3), new cjs.Rectangle(-117.5,-248.5,236,497.7), new cjs.Rectangle(-117.8,-249.2,236.6,499.1), new cjs.Rectangle(-118.2,-249.9,237.3,500.4), new cjs.Rectangle(-118.5,-250.6,237.9,501.8), new cjs.Rectangle(-118.8,-251.3,238.6,503.2), new cjs.Rectangle(-119.1,-252,239.2,504.6), new cjs.Rectangle(-119.5,-252.7,239.9,505.9), new cjs.Rectangle(-119.8,-253.4,240.5,507.3), new cjs.Rectangle(-120.1,-254.1,241.2,508.7), new cjs.Rectangle(-120.4,-254.7,241.8,510), new cjs.Rectangle(-120.8,-255.4,242.5,511.4), new cjs.Rectangle(-121.1,-256.1,243.1,512.8), new cjs.Rectangle(-121.4,-256.9,243.8,514.2), new cjs.Rectangle(-121.7,-257.6,244.4,515.5), new cjs.Rectangle(-122.1,-258.3,245.1,516.9), new cjs.Rectangle(-122.4,-258.9,245.7,518.3), new cjs.Rectangle(-122.7,-259.6,246.4,519.6), rect=new cjs.Rectangle(-123.1,-260.3,247,521), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-228.5,235.6,497), new cjs.Rectangle(-55.1,-196.8,224.2,472.9), new cjs.Rectangle(-21.1,-164.9,212.8,448.9), new cjs.Rectangle(12.9,-133.2,201.4,424.8), new cjs.Rectangle(46.9,-101.4,190,400.8), new cjs.Rectangle(80.9,-69.6,178.6,376.8), new cjs.Rectangle(114.9,-37.8,167.2,352.7), new cjs.Rectangle(148.9,-6,155.8,328.7), new cjs.Rectangle(182.9,25.7,144.4,304.6), new cjs.Rectangle(217,57.5,133,280.6), new cjs.Rectangle(251,89.3,121.6,256.5), new cjs.Rectangle(285,121,110.2,232.5), new cjs.Rectangle(319,152.8,98.8,208.4), null];


(lib.egg_animation_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,219.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(9.6,65,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(13.5,-139.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-39.6,99.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(88.4,-215.8,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-31.5,-204.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl6_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-239.8,260.3,488.3), new cjs.Rectangle(-117.2,-240.5,261,489.7), new cjs.Rectangle(-117.5,-241.1,261.8,491), new cjs.Rectangle(-117.8,-241.9,262.5,492.4), new cjs.Rectangle(-118.2,-242.5,263.2,493.7), new cjs.Rectangle(-118.5,-243.2,263.9,495.1), new cjs.Rectangle(-118.8,-243.8,264.6,496.4), new cjs.Rectangle(-119.1,-244.5,265.4,497.8), new cjs.Rectangle(-119.5,-245.2,266.1,499.1), new cjs.Rectangle(-119.8,-245.9,266.8,500.5), new cjs.Rectangle(-120.1,-246.6,267.5,501.8), new cjs.Rectangle(-120.4,-247.2,268.3,503.2), new cjs.Rectangle(-120.8,-247.9,269,504.6), new cjs.Rectangle(-121.1,-248.6,269.7,505.9), new cjs.Rectangle(-121.4,-249.3,270.4,507.2), new cjs.Rectangle(-121.7,-249.9,271.1,508.6), new cjs.Rectangle(-122.1,-250.6,271.9,510), new cjs.Rectangle(-122.4,-251.2,272.6,511.3), new cjs.Rectangle(-122.7,-251.9,273.3,512.7), rect=new cjs.Rectangle(-123.1,-252.6,274,514), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-221.2,261.4,490.3), new cjs.Rectangle(-55.1,-189.8,248.7,466.6), new cjs.Rectangle(-21.1,-158.3,236.1,442.9), new cjs.Rectangle(12.9,-126.9,223.4,419.1), new cjs.Rectangle(46.9,-95.5,210.7,395.4), new cjs.Rectangle(80.9,-64.1,198.1,371.7), new cjs.Rectangle(114.9,-32.6,185.5,348), new cjs.Rectangle(148.9,-1.2,172.9,324.2), new cjs.Rectangle(182.9,30.2,160.2,300.5), new cjs.Rectangle(217,61.6,147.6,276.8), new cjs.Rectangle(251,93.1,134.9,253.1), new cjs.Rectangle(285,124.5,122.3,229.3), new cjs.Rectangle(319,155.9,109.6,205.6), null];


(lib.egg_animation_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(91.8,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-23.6,-29.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(56.6,-210.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-23.6,212.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(16.4,-139,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-59.5,-207.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl5_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-237.7,267.9,481.7), new cjs.Rectangle(-117.2,-238.4,268.7,483), new cjs.Rectangle(-117.5,-239,269.4,484.3), new cjs.Rectangle(-117.8,-239.8,270.1,485.7), new cjs.Rectangle(-118.2,-240.4,270.9,487), new cjs.Rectangle(-118.5,-241.1,271.6,488.3), new cjs.Rectangle(-118.8,-241.7,272.4,489.7), new cjs.Rectangle(-119.1,-242.4,273.1,491), new cjs.Rectangle(-119.5,-243,273.9,492.3), new cjs.Rectangle(-119.8,-243.8,274.6,493.7), new cjs.Rectangle(-120.1,-244.4,275.3,495), new cjs.Rectangle(-120.4,-245.1,276.1,496.3), new cjs.Rectangle(-120.8,-245.7,276.8,497.7), new cjs.Rectangle(-121.1,-246.4,277.5,499), new cjs.Rectangle(-121.4,-247.1,278.3,500.3), new cjs.Rectangle(-121.7,-247.8,279,501.7), new cjs.Rectangle(-122.1,-248.4,279.8,503), new cjs.Rectangle(-122.4,-249.1,280.5,504.3), new cjs.Rectangle(-122.7,-249.7,281.3,505.7), rect=new cjs.Rectangle(-123.1,-250.4,282,507), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-89.1,-219.1,269,483.6), new cjs.Rectangle(-55.1,-187.8,256,460.2), new cjs.Rectangle(-21.1,-156.4,243,436.8), new cjs.Rectangle(12.9,-125.1,230,413.4), new cjs.Rectangle(46.9,-93.8,216.9,390), new cjs.Rectangle(80.9,-62.5,203.9,366.6), new cjs.Rectangle(114.9,-31.1,190.9,343.2), new cjs.Rectangle(148.9,0.2,177.9,319.8), new cjs.Rectangle(182.9,31.5,164.9,296.4), new cjs.Rectangle(217,62.8,151.9,273), new cjs.Rectangle(251,94.2,138.9,249.6), new cjs.Rectangle(285,125.5,125.8,226.2), new cjs.Rectangle(319,156.8,112.8,202.8), null];


(lib.egg_animation_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,219.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(17.6,-144.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(64.6,-101.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-26.6,219.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-68.5,24,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-64.5,-76.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl4_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-118,-237.7,242.3,484.5), new cjs.Rectangle(-118.2,-238.4,242.9,485.9), new cjs.Rectangle(-118.6,-239,243.6,487.2), new cjs.Rectangle(-118.9,-239.8,244.3,488.5), new cjs.Rectangle(-119.2,-240.4,245,489.9), new cjs.Rectangle(-119.6,-241.1,245.6,491.2), new cjs.Rectangle(-119.9,-241.7,246.3,492.6), new cjs.Rectangle(-120.2,-242.4,247,493.9), new cjs.Rectangle(-120.5,-243,247.6,495.3), new cjs.Rectangle(-120.9,-243.8,248.3,496.6), new cjs.Rectangle(-121.2,-244.4,249,497.9), new cjs.Rectangle(-121.5,-245.1,249.7,499.3), new cjs.Rectangle(-121.9,-245.7,250.3,500.6), new cjs.Rectangle(-122.2,-246.4,251,502), new cjs.Rectangle(-122.5,-247.1,251.7,503.3), new cjs.Rectangle(-122.8,-247.8,252.3,504.6), new cjs.Rectangle(-123.2,-248.4,253,506), new cjs.Rectangle(-123.5,-249.1,253.7,507.3), new cjs.Rectangle(-123.8,-249.7,254.3,508.7), rect=new cjs.Rectangle(-124.2,-250.4,255,510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-90.1,-219.1,243.3,486.5), new cjs.Rectangle(-56.1,-187.8,231.5,463), new cjs.Rectangle(-22,-156.4,219.7,439.4), new cjs.Rectangle(12,-125.1,207.9,415.9), new cjs.Rectangle(46.1,-93.8,196.1,392.3), new cjs.Rectangle(80.1,-62.5,184.4,368.8), new cjs.Rectangle(114.2,-31.1,172.6,345.2), new cjs.Rectangle(148.2,0.2,160.9,321.7), new cjs.Rectangle(182.3,31.5,149.1,298.2), new cjs.Rectangle(216.4,62.8,137.3,274.6), new cjs.Rectangle(250.4,94.2,125.5,251.1), new cjs.Rectangle(284.5,125.5,113.8,227.6), new cjs.Rectangle(318.5,156.8,102,204), null];


(lib.egg_animation_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(89.8,226.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-0.4,-34.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(116.6,-228.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-30.6,218.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-9.6,-178,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-135.5,-208.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl3_mc();
	this.instance_9.setTransform(-4.6,23.4,0.87,0.87);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).wait(21).to({scaleX:1,scaleY:1,x:-7.6,y:6.4},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-149.4,-203.2,301,449.8), new cjs.Rectangle(-150.7,-205.8,303.4,453.3), new cjs.Rectangle(-151.9,-208.5,305.8,456.9), new cjs.Rectangle(-153.2,-211.2,308.1,460.4), new cjs.Rectangle(-154.5,-213.9,310.5,464), new cjs.Rectangle(-155.9,-216.5,312.9,467.5), new cjs.Rectangle(-157.1,-219.2,315.2,471), new cjs.Rectangle(-158.4,-221.9,317.6,474.6), new cjs.Rectangle(-159.7,-224.5,320,478.1), new cjs.Rectangle(-161,-227.2,322.3,481.6), new cjs.Rectangle(-162.3,-229.9,324.7,485.2), new cjs.Rectangle(-163.6,-232.6,327.1,488.7), new cjs.Rectangle(-164.9,-235.3,329.4,492.3), new cjs.Rectangle(-166.2,-238,331.8,495.8), new cjs.Rectangle(-167.5,-240.6,334.2,499.3), new cjs.Rectangle(-168.7,-243.3,336.5,502.9), new cjs.Rectangle(-170.1,-246,338.9,506.4), new cjs.Rectangle(-171.4,-248.6,341.3,509.9), new cjs.Rectangle(-172.7,-251.3,343.7,513.5), rect=new cjs.Rectangle(-174,-254,346,517), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-137.5,-222.6,330.1,493.2), new cjs.Rectangle(-100.8,-191.2,314,469.3), new cjs.Rectangle(-64.3,-159.8,298.1,445.4), new cjs.Rectangle(-27.6,-128.4,282.1,421.6), new cjs.Rectangle(8.9,-97,266.2,397.7), new cjs.Rectangle(45.5,-65.6,250.2,373.9), new cjs.Rectangle(82.1,-34.2,234.2,350), new cjs.Rectangle(118.7,-2.8,218.3,326.1), new cjs.Rectangle(155.3,28.6,202.3,302.3), new cjs.Rectangle(192,59.9,186.3,278.4), new cjs.Rectangle(228.5,91.4,170.4,254.5), new cjs.Rectangle(265.2,122.7,154.4,230.7), new cjs.Rectangle(301.8,154.2,138.4,206.8), null];


(lib.egg_animation_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(105.8,221.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(23.6,12.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(46.4,-249.8,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-64.6,181.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(45.4,-140,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-7.5,-215.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl2_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-11.7,x:1.1,y:3.3},19).to({rotation:9.7,x:-0.2,y:3.4},20).to({rotation:-11.7,x:1.1,y:3.3},20).to({rotation:9.7,x:-0.2,y:3.4},20).to({rotation:0,x:0.4},20).wait(21).to({scaleX:1,scaleY:1,x:-2.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-240.9,234.6,489.3), new cjs.Rectangle(-117.3,-241.5,235.3,490.6), new cjs.Rectangle(-117.8,-242.2,236,492), new cjs.Rectangle(-118.2,-242.9,236.6,493.3), new cjs.Rectangle(-118.8,-243.6,237.3,494.7), new cjs.Rectangle(-119.2,-244.3,237.9,496), new cjs.Rectangle(-119.7,-244.9,238.6,497.4), new cjs.Rectangle(-120.2,-245.6,239.2,498.8), new cjs.Rectangle(-120.7,-246.3,239.9,500.1), new cjs.Rectangle(-121.1,-247,240.5,501.5), new cjs.Rectangle(-121.7,-247.7,241.2,502.8), new cjs.Rectangle(-122.1,-248.3,241.8,504.2), new cjs.Rectangle(-122.6,-249,242.5,505.5), new cjs.Rectangle(-123.1,-249.6,243.1,506.9), new cjs.Rectangle(-123.6,-250.4,243.8,508.2), new cjs.Rectangle(-124,-251,244.4,509.6), new cjs.Rectangle(-124.6,-251.7,245.1,510.9), new cjs.Rectangle(-125,-252.3,245.7,512.3), new cjs.Rectangle(-125.5,-253,246.4,513.7), rect=new cjs.Rectangle(-126.1,-258.3,247,519.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-126.1,-253.7,247,515), new cjs.Rectangle(-91.9,-222.2,235.6,491.3), new cjs.Rectangle(-57.7,-190.8,224.2,467.5), new cjs.Rectangle(-23.5,-159.3,212.8,443.7), new cjs.Rectangle(10.8,-127.8,201.4,419.9), new cjs.Rectangle(45,-96.3,190,396.2), new cjs.Rectangle(79.2,-64.9,178.6,372.4), new cjs.Rectangle(113.5,-33.3,167.2,348.6), new cjs.Rectangle(147.7,-1.9,155.8,324.8), new cjs.Rectangle(182,29.5,144.4,301.1), new cjs.Rectangle(216.2,61,133,277.3), new cjs.Rectangle(250.5,92.5,121.6,253.6), new cjs.Rectangle(284.7,124,110.2,229.8), new cjs.Rectangle(319,155.5,98.8,206), null];


(lib.egg_animation_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-93.4,-43.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(117.6,-153.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-28.6,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-28.6,-129,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-53.5,-215.8,0.77,0.77,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},139).to({state:[]},61).wait(15));

	// animation
	this.instance_6 = new lib.egg_bow_mc();
	this.instance_6.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:18.5,y:89.1},19).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:-11.7,x:18.5,y:89.1},20).to({rotation:9.7,x:-15.4,y:89.7},20).to({rotation:0,x:0,y:91},20).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_7 = new lib.egg_top_mc();
	this.instance_7.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11.7,x:-19.3,y:-93},19).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:-11.7,x:-19.3,y:-93},20).to({rotation:9.7,x:16.1,y:-93.6},20).to({rotation:0,x:0,y:-95},20).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_8 = new lib.egg_bottom1_mc();
	this.instance_8.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-11.7,x:33,y:158.6},19).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:-11.7,x:33,y:158.6},20).to({rotation:9.7,x:-27.4,y:159.7},20).to({rotation:0,x:0,y:162},20).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_9 = new lib.girl1_mc();
	this.instance_9.setTransform(0.4,3.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-11.7,x:1.1,y:3.3},19).to({rotation:9.7,x:-0.2,y:3.4},20).to({rotation:-11.7,x:1.1,y:3.3},20).to({rotation:9.7,x:-0.2,y:3.4},20).to({rotation:0,x:0.4},20).wait(21).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,552.6), new cjs.Rectangle(-216.3,-278.1,432.8,556.2), new cjs.Rectangle(-219.4,-280.6,439,561.1), new cjs.Rectangle(-222,-282.3,444.4,564.5), new cjs.Rectangle(-225.2,-284.7,450.5,569.3), new cjs.Rectangle(-227.7,-286.5,455.7,572.8), new cjs.Rectangle(-230.8,-288.8,461.8,577.4), new cjs.Rectangle(-233.3,-290.6,466.8,580.9), new cjs.Rectangle(-236.3,-292.9,472.8,585.5), new cjs.Rectangle(-238.8,-294.6,477.8,588.8), new cjs.Rectangle(-241.7,-296.8,483.6,593.4), new cjs.Rectangle(-244.1,-298.4,488.5,596.6), new cjs.Rectangle(-247.1,-300.7,494.2,601.1), new cjs.Rectangle(-249.4,-302.2,499,604.3), new cjs.Rectangle(-252.3,-304.3,504.6,608.6), new cjs.Rectangle(-254.6,-305.9,509.4,611.7), new cjs.Rectangle(-257.3,-308,514.8,616), new cjs.Rectangle(-259.6,-309.5,519.4,619), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-249.6,-302.3,499.3,604.5), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-240.7,-295.7,481.4,590.9), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-231.1,-288.1,462.1,575.4), new cjs.Rectangle(-226.3,-284.6,452.6,568.2), new cjs.Rectangle(-221.1,-280.3,442.1,559.6), new cjs.Rectangle(-216.2,-276.6,432.4,552.1), new cjs.Rectangle(-211.3,-272.9,422.5,544.7), new cjs.Rectangle(-215.6,-276.4,431.4,551.7), new cjs.Rectangle(-220.5,-280,441.2,558.9), new cjs.Rectangle(-225.3,-283.6,450.7,566.2), new cjs.Rectangle(-230,-287.2,460.2,573.2), new cjs.Rectangle(-235.2,-291.2,470.4,581.5), new cjs.Rectangle(-239.7,-294.6,479.6,588.3), new cjs.Rectangle(-244.1,-297.9,488.6,595.1), new cjs.Rectangle(-249.1,-301.7,498.2,602.8), new cjs.Rectangle(-253.4,-304.9,506.9,609.3), new cjs.Rectangle(-257.6,-308,515.5,615.8), new cjs.Rectangle(-262.5,-311.7,525,623.4), new cjs.Rectangle(-257.7,-307.9,515.6,615.7), new cjs.Rectangle(-253.4,-304.9,507,609.3), new cjs.Rectangle(-249.1,-301.6,498.3,602.8), new cjs.Rectangle(-244.2,-297.9,488.8,595.1), new cjs.Rectangle(-239.8,-294.5,479.7,588.3), new cjs.Rectangle(-235.2,-291.2,470.5,581.5), new cjs.Rectangle(-230,-287.1,460.3,573.2), new cjs.Rectangle(-225.4,-283.6,450.9,566.1), new cjs.Rectangle(-220.6,-280,441.3,559), new cjs.Rectangle(-215.7,-276.4,431.5,551.7), new cjs.Rectangle(-211.2,-272.9,422.5,544.6), new cjs.Rectangle(-216.1,-276.6,432.3,552.1), new cjs.Rectangle(-221.1,-280.3,442,559.5), new cjs.Rectangle(-226.2,-284.6,452.5,568.2), new cjs.Rectangle(-231,-288.1,462,575.3), new cjs.Rectangle(-235.7,-291.6,471.3,582.5), new cjs.Rectangle(-240.6,-295.7,481.3,590.8), new cjs.Rectangle(-245.2,-299.1,490.3,597.8), new cjs.Rectangle(-249.6,-302.3,499.2,604.5), new cjs.Rectangle(-254.3,-306.2,508.7,612.4), new cjs.Rectangle(-252,-304.1,503.8,608.1), new cjs.Rectangle(-250.2,-303.3,500.5,606.5), new cjs.Rectangle(-248.1,-301.7,496.3,603.3), new cjs.Rectangle(-246,-300.2,492.2,600.3), new cjs.Rectangle(-243.9,-298.7,487.9,597.3), new cjs.Rectangle(-241.9,-297.1,483.8,594), new cjs.Rectangle(-239.7,-295.5,479.5,590.8), new cjs.Rectangle(-237.6,-294,475.3,587.7), new cjs.Rectangle(-235.4,-292.3,470.9,584.4), new cjs.Rectangle(-233.3,-290.7,466.6,581.2), new cjs.Rectangle(-231.1,-289.1,462.2,577.9), new cjs.Rectangle(-228.9,-287.4,457.7,574.5), new cjs.Rectangle(-226.6,-285.8,453.2,571.4), new cjs.Rectangle(-224.4,-284.1,448.7,568), new cjs.Rectangle(-222.1,-282.4,444.2,564.7), new cjs.Rectangle(-219.9,-280.8,439.7,561.3), new cjs.Rectangle(-217.6,-279,435.1,557.9), new cjs.Rectangle(-215.2,-277.2,430.4,554.5), new cjs.Rectangle(-212.9,-275.6,425.7,551.2), new cjs.Rectangle(-211,-274.5,422,549), new cjs.Rectangle(-211,-294,422,582.8), new cjs.Rectangle(-211,-313.5,422,616.5), new cjs.Rectangle(-211,-333,422,650.3), new cjs.Rectangle(-211,-352.5,422,684), new cjs.Rectangle(-211,-372,422,717.8), new cjs.Rectangle(-211,-391.5,422,751.5), new cjs.Rectangle(-211,-411,422,785.3), new cjs.Rectangle(-211,-430.5,422,819), new cjs.Rectangle(-211,-450,422,852.8), new cjs.Rectangle(-211,-469.5,422,886.5), new cjs.Rectangle(-211,-489,422,920.3), new cjs.Rectangle(-211,-508.5,422,954), new cjs.Rectangle(-211,-528,422,987.8), new cjs.Rectangle(-211,-547.5,422,1021.5), new cjs.Rectangle(-211,-567,422,1055.3), new cjs.Rectangle(-211,-586.5,422,1089), new cjs.Rectangle(-211,-606,422,1122.8), new cjs.Rectangle(-211,-625.5,422,1156.5), new cjs.Rectangle(-211,-645,422,1190.3), new cjs.Rectangle(-211,-664.5,422,1224), new cjs.Rectangle(-116.9,-239.8,234.6,486.4), new cjs.Rectangle(-117.2,-240.5,235.3,487.8), new cjs.Rectangle(-117.5,-241.1,236,489.1), new cjs.Rectangle(-117.8,-241.9,236.6,490.4), new cjs.Rectangle(-118.2,-242.5,237.3,491.8), new cjs.Rectangle(-118.5,-243.2,237.9,493.1), new cjs.Rectangle(-118.8,-243.8,238.6,494.5), new cjs.Rectangle(-119.1,-244.5,239.2,495.8), new cjs.Rectangle(-119.5,-245.2,239.9,497.2), new cjs.Rectangle(-119.8,-245.9,240.5,498.5), new cjs.Rectangle(-120.1,-246.6,241.2,499.9), new cjs.Rectangle(-120.4,-247.2,241.8,501.2), new cjs.Rectangle(-120.8,-247.9,242.5,502.6), new cjs.Rectangle(-121.1,-248.6,243.1,503.9), new cjs.Rectangle(-121.4,-249.3,243.8,505.3), new cjs.Rectangle(-121.7,-249.9,244.4,506.6), new cjs.Rectangle(-122.1,-250.6,245.1,508), new cjs.Rectangle(-122.4,-251.2,245.7,509.3), new cjs.Rectangle(-122.7,-251.9,246.4,510.7), rect=new cjs.Rectangle(-123.1,-252.6,249.1,512), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-123.1,-252.6,247,512), new cjs.Rectangle(-89.1,-221.2,235.6,488.4), new cjs.Rectangle(-55.1,-189.8,224.2,464.8), new cjs.Rectangle(-21.1,-158.3,212.8,441.1), new cjs.Rectangle(12.9,-126.9,201.4,417.5), new cjs.Rectangle(46.9,-95.5,190,393.9), new cjs.Rectangle(80.9,-64.1,178.6,370.2), new cjs.Rectangle(114.9,-32.6,167.2,346.6), new cjs.Rectangle(148.9,-1.2,155.8,323), new cjs.Rectangle(182.9,30.2,144.4,299.3), new cjs.Rectangle(217,61.6,133,275.7), new cjs.Rectangle(251,93.1,121.6,252.1), new cjs.Rectangle(285,124.5,110.2,228.5), new cjs.Rectangle(319,155.9,98.8,204.8), null];


(lib.clawRight_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.claw_next_3_1_mc();

	this.instance_1 = new lib.claw_next_3_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.clawLeft_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.claw_next_4_1_mc();

	this.instance_1 = new lib.claw_next_4_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.bodyPopUpGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.egg_animation_0_mc();

	this.frame_1_mc = new lib.egg_animation_1_mc();

	this.frame_2_mc = new lib.egg_animation_2_mc();

	this.frame_3_mc = new lib.egg_animation_3_mc();

	this.frame_4_mc = new lib.egg_animation_4_mc();

	this.frame_5_mc = new lib.egg_animation_5_mc();

	this.frame_6_mc = new lib.egg_animation_6_mc();

	this.frame_7_mc = new lib.egg_animation_7_mc();

	this.frame_8_mc = new lib.egg_animation_8_mc();

	this.frame_9_mc = new lib.egg_animation_9_mc();

	this.frame_10_mc = new lib.egg_animation_10_mc();

	this.frame_11_mc = new lib.egg_animation_11_mc();

	this.frame_12_mc = new lib.egg_animation_12_mc();

	this.frame_13_mc = new lib.egg_animation_13_mc();

	this.frame_14_mc = new lib.egg_animation_14_mc();

	this.frame_15_mc = new lib.egg_animation_15_mc();

	this.frame_16_mc = new lib.egg_animation_16_mc();

	this.frame_17_mc = new lib.egg_animation_17_mc();

	this.frame_18_mc = new lib.egg_animation_18_mc();

	this.frame_19_mc = new lib.egg_animation_19_mc();

	this.frame_20_mc = new lib.egg_animation_20_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.frame_9_mc}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.frame_11_mc}]},1).to({state:[{t:this.frame_12_mc}]},1).to({state:[{t:this.frame_13_mc}]},1).to({state:[{t:this.frame_14_mc}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.frame_16_mc}]},1).to({state:[{t:this.frame_17_mc}]},1).to({state:[{t:this.frame_18_mc}]},1).to({state:[{t:this.frame_19_mc}]},1).to({state:[{t:this.frame_20_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,549);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_2_mc();
	this.instance.setTransform(-6,-1,1,1,0,0,0,197.5,87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-82.2,180.6,162.5);
p.frameBounds = [rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_2_mc();
	this.instance.setTransform(-82.9,0,0.553,0.553,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-82.9,alpha:0.801},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270.7,-140.3,375.8,280.6);
p.frameBounds = [rect, new cjs.Rectangle(-283.6,-146.9,393.6,293.9), new cjs.Rectangle(-270.7,-140.3,375.8,280.6), new cjs.Rectangle(-283.6,-146.9,393.6,293.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-51,1200,651);
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


(lib.popUpGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.bodyPopUpGame_mc();
	this.body_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhfSAwcMAAAhg2MC+lAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


(lib.machine_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.clawResult_mc = new lib.clawResult_mc();
	this.clawResult_mc.setTransform(402,515);

	this.clawLeft_mc = new lib.clawLeft_mc();
	this.clawLeft_mc.setTransform(555,515,0.929,0.929);

	this.clawRight_mc = new lib.clawRight_mc();
	this.clawRight_mc.setTransform(665,515,0.929,0.929);

	this.clawRun_mc = new lib.clawRun_mc();
	this.clawRun_mc.setTransform(240,515);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clawRun_mc},{t:this.clawRight_mc},{t:this.clawLeft_mc},{t:this.clawResult_mc}]}).wait(1));

	// top
	this.instance = new lib.claw_machine_front_img();
	this.instance.setTransform(52.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.animation_mc = new lib.animation_all_mc();
	this.animation_mc.setTransform(398,194);

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bottom
	this.instance_1 = new lib.claw_machine_back_img();
	this.instance_1.setTransform(88.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(52.5,-211.9,695,827);
p.frameBounds = [rect];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnuHvQjMjOgBkhQABkgDMjOQDNjMEhgBQEiABDNDMQDMDOABEgQgBEhjMDOQjNDMkiABQkhgBjNjMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-82.2,180.6,162.5);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-70,-70,140,140)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(615,560);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(690,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(110,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this._moreGames_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.credits_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(400,470);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,927);
p.frameBounds = [rect];


(lib.GameScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.superluck_mc = new lib.superluck_mc();
	this.superluck_mc.setTransform(430,0);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(90,515,0.941,0.941);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.next_btn},{t:this.superluck_mc}]}).wait(1));

	// popUp
	this.popUp_mc = new lib.popUpGame_mc();

	this.timeline.addTween(cjs.Tween.get(this.popUp_mc).wait(1));

	// machine
	this.machine_mc = new lib.machine_mc();

	this.timeline.addTween(cjs.Tween.get(this.machine_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-211.9,1220,1092.2);
p.frameBounds = [rect];


(lib.GalleryScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.newGame_btn = new lib.new_game_btn();
	this.newGame_btn.setTransform(710,525,0.882,0.882);
	new cjs.ButtonHelper(this.newGame_btn, 0, 1, 2, false, new lib.new_game_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(90,525,0.882,0.882);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(710,700);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(710,510);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.facebook_btn},{t:this.playAgain_btn},{t:this.newGame_btn}]}).wait(1));

	// congratulation
	this.congratulation_mc = new lib.congratulation_mc();
	this.congratulation_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.congratulation_mc).wait(1));

	// popUp
	this.popUp_mc = new lib.popUpGallery_mc();

	this.timeline.addTween(cjs.Tween.get(this.popUp_mc).wait(1));

	// gallery
	this.gallery_mc = new lib.gallery_mc();
	this.gallery_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.gallery_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-330,1220,1060);
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
	this.text = new cjs.Text("storage", "32px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 123;
	this.text.setTransform(63.5,2);

	this.instance = new lib.PreloaderScreen();
	this.instance.setTransform(-2,0.1,1,1,0,0,0,-2,0.1);

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.GameScreen();

	this.instance_4 = new lib.GalleryScreen();

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_5 = new lib.InstructionScreen();

	this.instance_6 = new lib.Cursor();
	this.instance_6.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_7 = new lib.OrientationLockScreen();

	this.instance_8 = new lib.CurtainScreen();

	this.instance_9 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,924.7), new cjs.Rectangle(-210,-211.9,1220,1092.2), new cjs.Rectangle(-210,-330,1220,1060), new cjs.Rectangle(-200,-51,1200,651), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,33.7,261.5,70.5), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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