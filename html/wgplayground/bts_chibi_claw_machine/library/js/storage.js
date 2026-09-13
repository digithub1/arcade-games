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
		{src:"library/images/storage_atlas_9.png", id:"storage_atlas_9"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,660,651]]},
		{name:"storage_atlas_3", frames: [[0,602,623,434],[0,0,695,600],[697,0,590,590],[625,602,436,583]]},
		{name:"storage_atlas_4", frames: [[0,492,490,490],[492,0,490,490],[0,0,490,490],[0,984,1200,200],[492,492,640,280]]},
		{name:"storage_atlas_5", frames: [[0,551,306,545],[308,282,301,552],[642,0,317,545],[611,547,301,550],[914,551,301,550],[961,0,306,549],[0,0,640,280]]},
		{name:"storage_atlas_6", frames: [[0,0,301,550],[606,0,301,548],[0,552,301,549],[909,550,301,547],[909,0,301,548],[606,550,301,547],[303,0,301,549],[303,551,301,549]]},
		{name:"storage_atlas_7", frames: [[0,0,301,547],[303,548,301,545],[0,549,301,546],[909,546,301,544],[303,0,301,546],[909,0,301,544],[606,0,301,545]]},
		{name:"storage_atlas_8", frames: [[903,834,280,280],[0,564,654,193],[424,302,520,260],[424,0,500,300],[0,759,422,221],[0,361,422,187],[0,0,422,359],[576,1116,380,180],[424,759,150,500],[0,982,420,160],[946,0,272,443],[656,564,245,392],[946,445,278,387]]},
		{name:"storage_atlas_9", frames: [[1112,947,50,50],[974,198,120,120],[605,462,111,194],[944,486,111,193],[1170,681,111,191],[114,587,111,192],[378,692,111,191],[831,462,111,193],[264,537,112,191],[831,657,111,192],[0,617,111,192],[496,658,111,192],[718,462,111,194],[264,344,117,191],[383,497,111,193],[1057,486,111,193],[609,658,111,192],[1057,681,111,192],[227,730,111,191],[1170,486,111,193],[0,422,112,193],[113,781,111,191],[944,681,111,192],[388,71,240,120],[550,193,22,22],[340,730,32,382],[0,955,59,52],[934,360,24,73],[388,193,160,160],[812,198,160,160],[0,0,204,258],[496,497,99,120],[550,233,160,160],[0,260,160,160],[974,324,160,160],[1136,324,160,160],[0,811,70,70],[388,0,422,69],[913,875,160,60],[446,894,70,70],[374,885,70,70],[812,0,147,196],[961,0,147,196],[383,395,220,100],[162,344,100,241],[671,395,31,48],[786,658,43,59],[114,422,41,149],[722,658,62,149],[162,260,40,52],[227,587,30,40],[712,360,220,100],[712,233,90,90],[1110,162,180,160],[630,71,180,160],[605,395,64,64],[650,894,64,64],[848,937,64,64],[518,894,64,64],[716,894,64,64],[782,894,64,64],[226,923,64,64],[584,894,64,64],[914,937,64,64],[980,937,64,64],[1110,0,180,160],[206,182,180,160],[206,0,180,180],[1170,874,120,120],[1046,947,64,64],[0,883,70,70],[1075,875,70,70],[491,852,420,40]]}
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



(lib.barbie_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blesk_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boy10_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boy11_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boy12_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boy13_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boy14_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boy15_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boy16_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boy17_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.boy18_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.boy19_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.boy1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boy20_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boy21_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.boy2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.boy3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.boy4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.boy5_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.boy6_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.boy7_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.boy8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.boy9_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon10_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon12_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon13_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon14_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon15_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon16_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon17_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon18_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon19_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon20_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon21_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.boy_icon9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.claw_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.claw_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.claw_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.claw_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.claw_left_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.claw_left_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_back2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_back_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_egg1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_front1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.claw_machine_front_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.claw_right_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.claw_right_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.claw_run_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.claw_run_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.congratulation_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.egg_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.egg_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.egg_bow_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.egg_top_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.heroes_main_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.icon01_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.icon0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.new_game_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.number_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.number_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.number_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.number_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.number_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.number_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.number_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.number_7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.number_8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.number_9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.show_window_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.slash_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.superluck_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.toy1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.toy2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.toy3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
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


(lib.toy1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.floor(Math.random() * this.totalFrames));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// graph
	this.instance = new lib.toy1_img();
	this.instance.setTransform(-136,-221.5);

	this.instance_1 = new lib.toy2_img();
	this.instance_1.setTransform(-123,-196);

	this.instance_2 = new lib.toy3_img();
	this.instance_2.setTransform(-139,-194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136,-221.5,272,443);
p.frameBounds = [rect, new cjs.Rectangle(-123,-196,245,392), new cjs.Rectangle(-139,-194,278,387)];


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
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.shadow_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_decor_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.option_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon21_img();
	this.instance.setTransform(-58.5,-96.6);

	this.instance_1 = new lib.boy21_img();
	this.instance_1.setTransform(-54.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon20_img();
	this.instance.setTransform(-63.5,-96.6);

	this.instance_1 = new lib.boy20_img();
	this.instance_1.setTransform(-55.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon19_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy19_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon18_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy18_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon17_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy17_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon16_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy16_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon15_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy15_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon14_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy14_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon13_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy13_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon12_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy12_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon11_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy11_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon10_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy10_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon9_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy9_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon8_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy8_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon7_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy7_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon6_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy6_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon5_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy5_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon4_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy4_img();
	this.instance_1.setTransform(-52.3,-90,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon3_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy3_img();
	this.instance_1.setTransform(-52.3,-89,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon2_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy2_img();
	this.instance_1.setTransform(-52.3,-91,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.option_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy_icon1_img();
	this.instance.setTransform(-56.5,-96.6);

	this.instance_1 = new lib.boy1_img();
	this.instance_1.setTransform(-52.3,-91,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.icon0_img();
	this.instance_2.setTransform(-74,-98);

	this.instance_3 = new lib.icon01_img();
	this.instance_3.setTransform(-74,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-98,147,196);
p.frameBounds = [rect, rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.girl20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy20_img();
	this.instance.setTransform(-162.5,-282.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.5,-282.7,317,545);
p.frameBounds = [rect];


(lib.girl19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy19_img();
	this.instance.setTransform(-150.2,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.2,-277,301,544);
p.frameBounds = [rect];


(lib.girl18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy18_img();
	this.instance.setTransform(-146,-278.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-278.7,301,546);
p.frameBounds = [rect];


(lib.girl17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy17_img();
	this.instance.setTransform(-142.7,-275.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.7,-275.8,301,544);
p.frameBounds = [rect];


(lib.girl16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy16_img();
	this.instance.setTransform(-150.1,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.1,-280.5,306,545);
p.frameBounds = [rect];


(lib.girl15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy15_img();
	this.instance.setTransform(-157.3,-289.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.3,-289.2,301,549);
p.frameBounds = [rect];


(lib.girl14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy14_img();
	this.instance.setTransform(-145.9,-287.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.9,-287.3,301,548);
p.frameBounds = [rect];


(lib.girl13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy13_img();
	this.instance.setTransform(-142.7,-280.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.7,-280.3,301,546);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-211,-112.5,422,221);
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


(lib.clawRun_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.claw_run_1_img();
	this.instance.setTransform(-80,-80);

	this.instance_1 = new lib.claw_run_0_img();
	this.instance_1.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.clawRight_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.claw_right_1_img();
	this.instance.setTransform(-80,-80);

	this.instance_1 = new lib.claw_right_0_img();
	this.instance_1.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.clawLeft_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.claw_left_1_img();
	this.instance.setTransform(-80,-80);

	this.instance_1 = new lib.claw_left_0_img();
	this.instance_1.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-11,-40,24,73);
p.frameBounds = [rect];


(lib.claw_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.claw_3_img();
	this.instance.setTransform(-34,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-29.5,59,52);
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


(lib.boy21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy21_img();
	this.instance.setTransform(-157.5,-282.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.5,-282.7,301,547);
p.frameBounds = [rect];


(lib.boy12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy12_img();
	this.instance.setTransform(-148.7,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.7,-280,301,545);
p.frameBounds = [rect];


(lib.boy11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy11_img();
	this.instance.setTransform(-150.2,-288.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.2,-288.1,301,547);
p.frameBounds = [rect];


(lib.boy10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy10_img();
	this.instance.setTransform(-148,-285.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-285.3,301,550);
p.frameBounds = [rect];


(lib.boy9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy9_img();
	this.instance.setTransform(-149.4,-288.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.4,-288.9,301,549);
p.frameBounds = [rect];


(lib.boy8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy8_img();
	this.instance.setTransform(-149,-284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-284,301,545);
p.frameBounds = [rect];


(lib.boy7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy7_img();
	this.instance.setTransform(-156.4,-288.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.4,-288.2,306,549);
p.frameBounds = [rect];


(lib.boy6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy6_img();
	this.instance.setTransform(-150.1,-287.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.1,-287.2,301,550);
p.frameBounds = [rect];


(lib.boy5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy5_img();
	this.instance.setTransform(-156.2,-295.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.2,-295.6,301,549);
p.frameBounds = [rect];


(lib.boy4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy4_img();
	this.instance.setTransform(-149,-285.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-285.5,301,547);
p.frameBounds = [rect];


(lib.boy3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy3_img();
	this.instance.setTransform(-145.9,-295.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.9,-295.5,301,548);
p.frameBounds = [rect];


(lib.boy2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy2_img();
	this.instance.setTransform(-157.5,-286.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-157.5,-286.2,301,550);
p.frameBounds = [rect];


(lib.boy1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.boy1_img();
	this.instance.setTransform(-149.1,-285.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.1,-285.1,301,552);
p.frameBounds = [rect];


(lib.bodyPopUpGallery_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.boy1_img();
	this.instance.setTransform(-151,-276);

	this.instance_1 = new lib.boy2_img();
	this.instance_1.setTransform(-151,-274);

	this.instance_2 = new lib.boy3_img();
	this.instance_2.setTransform(-151,-274);

	this.instance_3 = new lib.boy4_img();
	this.instance_3.setTransform(-151,-272);

	this.instance_4 = new lib.boy5_img();
	this.instance_4.setTransform(-146,-274);

	this.instance_5 = new lib.boy6_img();
	this.instance_5.setTransform(-146,-274);

	this.instance_6 = new lib.boy7_img();
	this.instance_6.setTransform(-143,-274);

	this.instance_7 = new lib.boy8_img();
	this.instance_7.setTransform(-156,-270);

	this.instance_8 = new lib.boy9_img();
	this.instance_8.setTransform(-146,-274);

	this.instance_9 = new lib.boy10_img();
	this.instance_9.setTransform(-153,-274);

	this.instance_10 = new lib.boy11_img();
	this.instance_10.setTransform(-156,-272);

	this.instance_11 = new lib.boy12_img();
	this.instance_11.setTransform(-141,-269);

	this.instance_12 = new lib.boy13_img();
	this.instance_12.setTransform(-143,-268);

	this.instance_13 = new lib.boy14_img();
	this.instance_13.setTransform(-151,-273);

	this.instance_14 = new lib.boy15_img();
	this.instance_14.setTransform(-149,-273);

	this.instance_15 = new lib.boy16_img();
	this.instance_15.setTransform(-153,-270);

	this.instance_16 = new lib.boy17_img();
	this.instance_16.setTransform(-146,-269);

	this.instance_17 = new lib.boy18_img();
	this.instance_17.setTransform(-151,-271);

	this.instance_18 = new lib.boy19_img();
	this.instance_18.setTransform(-151,-270);

	this.instance_19 = new lib.boy20_img();
	this.instance_19.setTransform(-159,-270);

	this.instance_20 = new lib.boy21_img();
	this.instance_20.setTransform(-151,-271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).wait(1));

	// bg
	this.instance_21 = new lib.show_window_img();
	this.instance_21.setTransform(-218,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-292,436,583);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(-295,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-295,590,590);
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


(lib.barbie_star_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_star_1_img();
	this.instance.setTransform(-137,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137,-140,280,280);
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
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.more_games_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_7_2_img();
	this.instance.setTransform(0.2,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0,21.6,28.8);
p.frameBounds = [rect];


(lib.more_games_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_2_img();
	this.instance.setTransform(0.1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,0,28.8,37.5);
p.frameBounds = [rect];


(lib.more_games_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_5_2_img();
	this.instance.setTransform(-0.2,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.2,0,44.7,107.3);
p.frameBounds = [rect];


(lib.more_games_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_4_2_img();
	this.instance.setTransform(0,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,29.5,107.3);
p.frameBounds = [rect];


(lib.more_games_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_3_2_img();
	this.instance.setTransform(0.2,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0,31,42.5);
p.frameBounds = [rect];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_2_2_img();
	this.instance.setTransform(0.2,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0,22.3,34.6);
p.frameBounds = [rect];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_2_img();
	this.instance.setTransform(0,0,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,45.7,110.1);
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
	this.instance.setTransform(580,40,0.833,0.833);

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


(lib.egg_animation22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.egg_bow_mc();
	this.instance.setTransform(0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:376},20).to({_off:true},1).wait(95));

	// animation
	this.instance_1 = new lib.egg_top_mc();
	this.instance_1.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-485},20).to({_off:true},1).wait(95));

	// animation
	this.instance_2 = new lib.egg_bottom1_mc();
	this.instance_2.setTransform(0,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:447},20).to({_off:true},1).wait(95));

	// animation
	this.instance_3 = new lib.toy1_mc();
	this.instance_3.setTransform(1,2.7,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({scaleX:1,scaleY:1},29).wait(45).to({scaleX:0.35,scaleY:0.35,x:344,y:233.7,alpha:0.012},21).wait(1));

	// animation
	this.instance_4 = new lib.egg_bottom2_mc();
	this.instance_4.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-118.5,-192,239.2,389.6), new cjs.Rectangle(-119.1,-193,240.4,391.5), new cjs.Rectangle(-119.7,-194,241.5,393.4), new cjs.Rectangle(-120.3,-194.9,242.7,395.3), new cjs.Rectangle(-120.9,-195.8,243.9,397.2), new cjs.Rectangle(-121.5,-196.8,245.1,399.1), new cjs.Rectangle(-122.1,-197.8,246.2,401), new cjs.Rectangle(-122.6,-198.7,247.4,402.9), new cjs.Rectangle(-123.3,-199.7,248.6,404.8), new cjs.Rectangle(-123.9,-200.6,249.7,406.7), new cjs.Rectangle(-124.4,-201.6,250.9,408.6), new cjs.Rectangle(-125,-202.5,252.1,410.6), new cjs.Rectangle(-125.6,-203.5,253.3,412.5), new cjs.Rectangle(-126.2,-204.4,254.4,414.4), new cjs.Rectangle(-126.7,-205.4,255.6,416.3), new cjs.Rectangle(-127.3,-206.3,256.8,418.2), new cjs.Rectangle(-127.9,-207.3,258,420.1), new cjs.Rectangle(-128.5,-208.3,259.1,422), new cjs.Rectangle(-129.1,-209.2,260.3,423.9), new cjs.Rectangle(-129.7,-210.2,261.5,425.8), new cjs.Rectangle(-130.3,-211.1,262.6,427.7), new cjs.Rectangle(-130.8,-212.1,263.8,429.7), new cjs.Rectangle(-131.4,-213,265,431.6), new cjs.Rectangle(-132,-214,266.2,433.5), new cjs.Rectangle(-132.6,-214.9,267.3,435.4), new cjs.Rectangle(-133.2,-215.9,268.5,437.3), new cjs.Rectangle(-133.8,-216.8,269.7,439.2), new cjs.Rectangle(-134.4,-217.8,270.9,441.1), rect=new cjs.Rectangle(-135,-218.8,272,443), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-114.4,-200.8,263.5,429.2), new cjs.Rectangle(-93.8,-182.9,255.1,415.4), new cjs.Rectangle(-73.2,-165,246.6,401.6), new cjs.Rectangle(-52.6,-147.1,238.1,387.8), new cjs.Rectangle(-32.1,-129.2,229.6,374), new cjs.Rectangle(-11.5,-111.3,221.2,360.2), new cjs.Rectangle(9,-93.4,212.7,346.4), new cjs.Rectangle(29.6,-75.5,204.2,332.6), new cjs.Rectangle(50.1,-57.6,195.7,318.8), new cjs.Rectangle(70.7,-39.7,187.3,305), new cjs.Rectangle(91.3,-21.9,178.8,291.2), new cjs.Rectangle(111.9,-4,170.3,277.4), new cjs.Rectangle(132.4,13.9,161.8,263.5), new cjs.Rectangle(153,31.8,153.4,249.8), new cjs.Rectangle(173.6,49.7,144.8,236), new cjs.Rectangle(194.2,67.6,136.4,222.2), new cjs.Rectangle(214.7,85.5,127.9,208.4), new cjs.Rectangle(235.3,103.4,119.5,194.5), new cjs.Rectangle(255.9,121.3,111,180.7), new cjs.Rectangle(276.4,139.2,102.5,166.9), new cjs.Rectangle(297,157.1,94,153.1)];


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
	this.instance_1.setTransform(1.6,183.4,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-2.5,122.4,1.008,1.015,0,60.8,-131.5,25,-19.9);

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
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,481.5);
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
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-245,143.3,459.8);
p.frameBounds = [rect, new cjs.Rectangle(-71.8,-245,141.8,460.3), new cjs.Rectangle(-70.9,-245,140.5,460.8), new cjs.Rectangle(-70,-245,139,461.1), new cjs.Rectangle(-72.3,-245,140.9,461.3), new cjs.Rectangle(-69.8,-245,138.8,461.1), new cjs.Rectangle(-70.5,-245,139.9,460.9), new cjs.Rectangle(-71.2,-245,141,460.7), new cjs.Rectangle(-72,-245,142.2,460.3), new cjs.Rectangle(-72.7,-245,143.3,459.8)];


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
	this.instance_1.setTransform(-0.4,183.3,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-29,skewY:151,x:8.3,y:184.2},9).to({skewX:-11,skewY:169,x:-1.4,y:183.2},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-4.5,121.7,1.008,1.015,0,60.8,-131.5,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:25.1,regY:-20,skewX:54.3,skewY:-138,x:-5.6,y:121.4},9).to({regX:25,regY:-19.9,skewX:60.8,skewY:-131.5,x:-4.5,y:121.7},10).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(50,169,1,1,0,0,180,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:-23.2,skewY:156.8,x:60.8,y:157.1},9).to({skewX:0,skewY:180,x:50,y:169},10).wait(1));

	// claw_3
	this.instance_4 = new lib.claw_3_mc();
	this.instance_4.setTransform(-1,119.5,1,1,0,0,180,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-20.1,skewX:-10,skewY:170,x:-1.4,y:119.8},9).to({regY:-20,skewX:0,skewY:180,x:-1,y:119.5},10).wait(1));

	// claw_4.png
	this.instance_5 = new lib.claw_4_mc();
	this.instance_5.setTransform(-50,169,1,1,0,0,0,-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:12.8,x:-38.4,y:180.2},9).to({rotation:0,x:-50,y:169},10).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(1,119.5,1,1,0,0,0,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-20.1,rotation:-19.7,x:-1.2,y:119},9).to({regY:-20,rotation:0,x:1,y:119.5},10).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,481.4);
p.frameBounds = [rect, new cjs.Rectangle(-59,-245,121.7,481.6), new cjs.Rectangle(-59.2,-245,125.7,481.8), new cjs.Rectangle(-59.4,-245,129.5,481.8), new cjs.Rectangle(-59.6,-245,133.6,481.9), new cjs.Rectangle(-59.9,-245,137.4,481.9), new cjs.Rectangle(-60,-245,141.1,481.8), new cjs.Rectangle(-60,-245,144.9,482.4), new cjs.Rectangle(-60,-245,148.3,483.7), new cjs.Rectangle(-60,-245,151.9,485.1), new cjs.Rectangle(-60,-245,148.8,483.9), new cjs.Rectangle(-60,-245,145.6,482.7), new cjs.Rectangle(-60,-245,142.4,481.7), new cjs.Rectangle(-59.9,-245,139,481.8), new cjs.Rectangle(-59.7,-245,135.6,481.8), new cjs.Rectangle(-59.6,-245,132.2,481.8), new cjs.Rectangle(-59.2,-245,128.4,481.7), new cjs.Rectangle(-59.1,-245,124.9,481.6), new cjs.Rectangle(-59,-245,121.5,481.4), new cjs.Rectangle(-59,-245,118,481.3)];


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
	this.instance_1.setTransform(0,162,1,0.885,0,-8.1,171.9,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-2},3).to({skewX:-11,skewY:169,x:-0.4,y:183.4},4).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-5.4,122.3,0.74,1.011,0,55.7,-158,25,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-7.4},3).to({regY:-19.9,scaleX:1.01,scaleY:1.01,skewX:60.8,skewY:-131.5,x:-4.5,y:122.4},4).wait(1));

	// claw_4
	this.instance_3 = new lib.claw_4_mc();
	this.instance_3.setTransform(59,154.9,1,1,0,10.5,-169.5,-2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:-18.5,skewY:-198.5,x:62.1,y:153},3).to({regY:-25,skewX:0,skewY:-180,x:50,y:169},4).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-72.7,-245,143.3,459.8);
p.frameBounds = [rect, new cjs.Rectangle(-70.6,-245,139.8,459.8), new cjs.Rectangle(-74.8,-245,153.6,459.8), new cjs.Rectangle(-83.3,-245,172.3,460.3), new cjs.Rectangle(-77.2,-245,158.8,465.2), new cjs.Rectangle(-71.1,-245,145.2,470.7), new cjs.Rectangle(-65,-245,131.6,476), new cjs.Rectangle(-59,-245,118,481.5)];


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
	this.instance_1.setTransform(-2,162,1,0.885,0,-8.1,171.9,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-8.4,122.3,0.74,1.011,0,55.7,-158,25,-20.1);

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
	this.instance_1.setTransform(-1.4,183.4,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-25,scaleY:0.69,x:-2.7,y:150.8},7).to({regY:-24.9,scaleY:0.89,skewX:-8.1,skewY:171.9,x:0,y:163},9).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-4.5,122.4,1.008,1.015,0,60.8,-131.5,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:24.9,scaleX:0.87,scaleY:1.12,skewX:77.4,skewY:-167.1,x:-7.5,y:125.5},7).to({regX:25,regY:-20.1,scaleX:0.74,scaleY:1.01,skewX:55.7,skewY:-158,x:-6.4,y:122.3},9).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,481.5);
p.frameBounds = [rect, new cjs.Rectangle(-66.4,-245,133.2,475.3), new cjs.Rectangle(-74.1,-245,148.6,469), new cjs.Rectangle(-81.4,-245,163.4,463.6), new cjs.Rectangle(-88.6,-245,178.2,459.9), new cjs.Rectangle(-95.6,-245,192.1,455.8), new cjs.Rectangle(-102.5,-245,205.8,451.2), new cjs.Rectangle(-109,-245,218.9,446.4), new cjs.Rectangle(-104.1,-245,209,449), new cjs.Rectangle(-98.7,-245,198.5,451.3), new cjs.Rectangle(-93.2,-245,187.3,453.1), new cjs.Rectangle(-87.6,-245,176,454.4), new cjs.Rectangle(-81.6,-245,164,455.3), new cjs.Rectangle(-75.7,-245,152,455.5), new cjs.Rectangle(-71.9,-245,141.9,456.3), new cjs.Rectangle(-72.3,-245,142.5,458.4), new cjs.Rectangle(-72.7,-245,143.3,460.8)];


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
	this.instance_1.setTransform(-0.4,183.5,1,0.885,0,-11,169,-2,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:16.4,skewY:196.4,x:-9.1,y:183.1},9).to({skewX:-11,skewY:169,x:0.6,y:183.4},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.claw_3_mc();
	this.instance_2.setTransform(-3.5,123,1.008,1.015,0,60.8,-131.5,25,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:68.3,skewY:-124,x:-3.3,y:123.4},9).to({skewX:60.8,skewY:-131.5,x:-3.5,y:123},10).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-24.9,rotation:22.5,x:-59.1,y:163.7},9).to({regY:-25,rotation:0,x:-50,y:169},10).wait(1));

	// claw_3.png
	this.instance_6 = new lib.claw_3_mc();
	this.instance_6.setTransform(1,119.5,1,1,0,0,0,25,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-19.9,rotation:5.2,x:1.4,y:120.5},9).to({regY:-20,rotation:0,x:1,y:119.5},10).wait(1));

	// Слой 3
	this.instance_7 = new lib.claw_2_mc();
	this.instance_7.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-245,118,481.6);
p.frameBounds = [rect, new cjs.Rectangle(-62.3,-245,121.1,481.2), new cjs.Rectangle(-65.8,-245,124.4,480.7), new cjs.Rectangle(-69.3,-245,127.8,480), new cjs.Rectangle(-72.8,-245,131,479.7), new cjs.Rectangle(-76.2,-245,134.6,480), new cjs.Rectangle(-79.6,-245,138,480.3), new cjs.Rectangle(-82.9,-245,141.4,480.2), new cjs.Rectangle(-86.2,-245,144.8,480.1), new cjs.Rectangle(-89.5,-245,148.2,479.8), new cjs.Rectangle(-86.5,-245,145.2,480), new cjs.Rectangle(-83.4,-245,142,480.1), new cjs.Rectangle(-80.6,-245,139.1,480.1), new cjs.Rectangle(-77.5,-245,135.9,480), new cjs.Rectangle(-74.4,-245,132.8,479.7), new cjs.Rectangle(-71.3,-245,129.6,479.4), new cjs.Rectangle(-68.2,-245,126.7,480.1), new cjs.Rectangle(-65.1,-245,123.8,480.6), new cjs.Rectangle(-61.9,-245,120.7,481.1), new cjs.Rectangle(-59,-245,118,481.5)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,654,812);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.5,654,792.5), new cjs.Rectangle(-326,-367,654,773.1), new cjs.Rectangle(-326,-347.6,654,753.6), new cjs.Rectangle(-326,-328.1,654,734.2), new cjs.Rectangle(-326,-308.7,654,714.8), new cjs.Rectangle(-326,-289.3,654,695.3), new cjs.Rectangle(-326,-269.8,654,675.9), new cjs.Rectangle(-326,-250.4,654,656.4), rect=new cjs.Rectangle(-326,-230.9,654,637), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-246,654,652.1), new cjs.Rectangle(-326,-261.1,654,667.1), new cjs.Rectangle(-326,-276.2,654,682.2), new cjs.Rectangle(-326,-291.2,654,697.3), new cjs.Rectangle(-326,-306.3,654,712.4), new cjs.Rectangle(-326,-321.4,654,727.4), new cjs.Rectangle(-326,-336.5,654,742.5), new cjs.Rectangle(-326,-351.5,654,757.6), new cjs.Rectangle(-326,-366.6,654,772.7), new cjs.Rectangle(-326,-381.7,654,787.7), new cjs.Rectangle(-326,-396.8,654,802.8), new cjs.Rectangle(-326,-411.8,654,817.9), new cjs.Rectangle(-326,-426.9,654,833), new cjs.Rectangle(-326,-425.4,654,831.5), new cjs.Rectangle(-326,-423.9,654,830), new cjs.Rectangle(-326,-422.4,654,828.5), new cjs.Rectangle(-326,-420.9,654,827), new cjs.Rectangle(-326,-419.4,654,825.5), new cjs.Rectangle(-326,-417.9,654,824), new cjs.Rectangle(-326,-416.4,654,822.5), new cjs.Rectangle(-326,-414.9,654,821), new cjs.Rectangle(-326,-413.4,654,819.5), new cjs.Rectangle(-326,-411.9,654,818), new cjs.Rectangle(-326,-410.4,654,816.5), new cjs.Rectangle(-326,-408.9,654,815), new cjs.Rectangle(-326,-407.4,654,813.5), new cjs.Rectangle(-326,-405.9,654,812)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.9,654,792.9), new cjs.Rectangle(-326,-368,654,774), new cjs.Rectangle(-326,-349.1,654,755.2), new cjs.Rectangle(-326,-330.2,654,736.3), new cjs.Rectangle(-326,-311.3,654,717.4), new cjs.Rectangle(-326,-292.4,654,698.5), new cjs.Rectangle(-326,-273.6,654,679.6), new cjs.Rectangle(-326,-254.7,654,660.7), rect=new cjs.Rectangle(-326,-235.8,654,641.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-250.3,654,656.3), new cjs.Rectangle(-326,-264.8,654,670.8), new cjs.Rectangle(-326,-279.3,654,685.3), new cjs.Rectangle(-326,-293.8,654,699.8), new cjs.Rectangle(-326,-308.3,654,714.3), new cjs.Rectangle(-326,-322.8,654,728.8), new cjs.Rectangle(-326,-337.3,654,743.3), new cjs.Rectangle(-326,-351.8,654,757.8), new cjs.Rectangle(-326,-366.3,654,772.3), new cjs.Rectangle(-326,-380.8,654,786.8), new cjs.Rectangle(-326,-395.3,654,801.3), new cjs.Rectangle(-326,-409.8,654,815.8), new cjs.Rectangle(-326,-409.5,654,815.6), new cjs.Rectangle(-326,-409.2,654,815.3), new cjs.Rectangle(-326,-409,654,815), new cjs.Rectangle(-326,-408.7,654,814.8), new cjs.Rectangle(-326,-408.4,654,814.5), new cjs.Rectangle(-326,-408.2,654,814.2), new cjs.Rectangle(-326,-407.9,654,814), new cjs.Rectangle(-326,-407.6,654,813.7), new cjs.Rectangle(-326,-407.4,654,813.4), new cjs.Rectangle(-326,-407.1,654,813.2), new cjs.Rectangle(-326,-406.8,654,812.9), new cjs.Rectangle(-326,-406.6,654,812.6), new cjs.Rectangle(-326,-406.3,654,812.4), new cjs.Rectangle(-326,-406,654,812.1), new cjs.Rectangle(-326,-405.8,654,811.8)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-385.1,654,791.2), new cjs.Rectangle(-326,-364.4,654,770.5), new cjs.Rectangle(-326,-343.8,654,749.8), new cjs.Rectangle(-326,-323.1,654,729.2), new cjs.Rectangle(-326,-302.4,654,708.5), new cjs.Rectangle(-326,-281.8,654,687.8), new cjs.Rectangle(-326,-261.1,654,667.2), new cjs.Rectangle(-326,-240.4,654,646.5), rect=new cjs.Rectangle(-326,-219.8,654,625.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-237.6,654,643.6), new cjs.Rectangle(-326,-255.4,654,661.4), new cjs.Rectangle(-326,-273.2,654,679.2), new cjs.Rectangle(-326,-291,654,697), new cjs.Rectangle(-326,-308.8,654,714.8), new cjs.Rectangle(-326,-326.6,654,732.6), new cjs.Rectangle(-326,-344.4,654,750.4), new cjs.Rectangle(-326,-362.2,654,768.2), new cjs.Rectangle(-326,-380,654,786), new cjs.Rectangle(-326,-397.8,654,803.8), new cjs.Rectangle(-326,-398.4,654,804.5), new cjs.Rectangle(-326,-399.1,654,805.2), new cjs.Rectangle(-326,-399.8,654,805.8), new cjs.Rectangle(-326,-400.4,654,806.5), new cjs.Rectangle(-326,-401.1,654,807.2), new cjs.Rectangle(-326,-401.8,654,807.8), new cjs.Rectangle(-326,-402.4,654,808.5), new cjs.Rectangle(-326,-403.1,654,809.2), new cjs.Rectangle(-326,-403.8,654,809.8), new cjs.Rectangle(-326,-404.4,654,810.5), new cjs.Rectangle(-326,-405.1,654,811.2), new cjs.Rectangle(-326,-405.8,654,811.8)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-383.6,654,789.7), new cjs.Rectangle(-326,-361.4,654,767.4), new cjs.Rectangle(-326,-339.2,654,745.2), new cjs.Rectangle(-326,-316.9,654,723), new cjs.Rectangle(-326,-294.7,654,700.8), new cjs.Rectangle(-326,-272.5,654,678.5), new cjs.Rectangle(-326,-250.3,654,656.3), new cjs.Rectangle(-326,-228,654,634.1), rect=new cjs.Rectangle(-326,-205.8,654,611.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-222,654,628), new cjs.Rectangle(-326,-238.2,654,644.2), new cjs.Rectangle(-326,-254.3,654,660.4), new cjs.Rectangle(-326,-270.5,654,676.5), new cjs.Rectangle(-326,-286.7,654,692.7), new cjs.Rectangle(-326,-302.8,654,708.9), new cjs.Rectangle(-326,-319,654,725), new cjs.Rectangle(-326,-335.2,654,741.2), new cjs.Rectangle(-326,-351.3,654,757.4), new cjs.Rectangle(-326,-367.5,654,773.5), new cjs.Rectangle(-326,-383.7,654,789.7), new cjs.Rectangle(-326,-399.8,654,805.9), new cjs.Rectangle(-326,-400.2,654,806.3), new cjs.Rectangle(-326,-400.6,654,806.7), new cjs.Rectangle(-326,-401,654,807.1), new cjs.Rectangle(-326,-401.4,654,807.5), new cjs.Rectangle(-326,-401.8,654,807.9), new cjs.Rectangle(-326,-402.2,654,808.3), new cjs.Rectangle(-326,-402.6,654,808.7), new cjs.Rectangle(-326,-403,654,809.1), new cjs.Rectangle(-326,-403.4,654,809.5), new cjs.Rectangle(-326,-403.8,654,809.9), new cjs.Rectangle(-326,-404.2,654,810.3), new cjs.Rectangle(-326,-404.6,654,810.7), new cjs.Rectangle(-326,-405,654,811.1), new cjs.Rectangle(-326,-405.4,654,811.5), new cjs.Rectangle(-326,-405.8,654,811.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,654,812);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.5,654,792.5), new cjs.Rectangle(-326,-367,654,773.1), new cjs.Rectangle(-326,-347.6,654,753.6), new cjs.Rectangle(-326,-328.1,654,734.2), new cjs.Rectangle(-326,-308.7,654,714.8), new cjs.Rectangle(-326,-289.3,654,695.3), new cjs.Rectangle(-326,-269.8,654,675.9), new cjs.Rectangle(-326,-250.4,654,656.4), rect=new cjs.Rectangle(-326,-230.9,654,637), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-246,654,652.1), new cjs.Rectangle(-326,-261.1,654,667.1), new cjs.Rectangle(-326,-276.2,654,682.2), new cjs.Rectangle(-326,-291.2,654,697.3), new cjs.Rectangle(-326,-306.3,654,712.4), new cjs.Rectangle(-326,-321.4,654,727.4), new cjs.Rectangle(-326,-336.5,654,742.5), new cjs.Rectangle(-326,-351.5,654,757.6), new cjs.Rectangle(-326,-366.6,654,772.7), new cjs.Rectangle(-326,-381.7,654,787.7), new cjs.Rectangle(-326,-396.8,654,802.8), new cjs.Rectangle(-326,-411.8,654,817.9), rect=new cjs.Rectangle(-326,-426.9,654,833), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-425.5,654,831.6), new cjs.Rectangle(-326,-424.1,654,830.2), new cjs.Rectangle(-326,-422.7,654,829.5), new cjs.Rectangle(-326,-421.3,654,833.1), new cjs.Rectangle(-326,-419.9,654,831.6), new cjs.Rectangle(-326,-418.5,654,830.2), new cjs.Rectangle(-326,-417.1,654,828.8), new cjs.Rectangle(-326,-415.7,654,827.4), new cjs.Rectangle(-326,-414.3,654,826), new cjs.Rectangle(-326,-412.9,654,824.6), new cjs.Rectangle(-326,-411.5,654,823.2), new cjs.Rectangle(-326,-410.1,654,821.8), new cjs.Rectangle(-326,-408.7,654,820.4), new cjs.Rectangle(-326,-407.3,654,819), new cjs.Rectangle(-326,-405.9,654,817.7)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-406.1,654,812.2), new cjs.Rectangle(-326,-406.4,654,812.5), new cjs.Rectangle(-326,-406.9,654,813), new cjs.Rectangle(-326,-407.3,654,813.3), new cjs.Rectangle(-326,-407.6,654,813.6), new cjs.Rectangle(-326,-407.9,654,813.9), new cjs.Rectangle(-326,-408.4,654,814.4), rect=new cjs.Rectangle(-326,-408.3,654,814.3), rect, rect=new cjs.Rectangle(-326,-408.2,654,814.2), rect, new cjs.Rectangle(-326,-408.2,654,814.3), rect=new cjs.Rectangle(-326,-408.2,654,814.2), rect, new cjs.Rectangle(-326,-408.1,654,814.2), new cjs.Rectangle(-326,-408.1,654,814.1), new cjs.Rectangle(-326,-408.1,654,814.2), new cjs.Rectangle(-326,-408.1,654,814.1), new cjs.Rectangle(-326,-408.1,654,814.2), new cjs.Rectangle(-326,-408,654,814), rect=new cjs.Rectangle(-326,-408,654,814.1), rect, rect=new cjs.Rectangle(-326,-408,654,814), rect, rect=new cjs.Rectangle(-326,-407.9,654,814), rect, rect, rect, rect=new cjs.Rectangle(-326,-407.9,654,813.9), rect, rect, new cjs.Rectangle(-326,-407.8,654,813.9), rect=new cjs.Rectangle(-326,-407.7,654,813.8), rect, new cjs.Rectangle(-326,-407.8,654,813.8), new cjs.Rectangle(-326,-407.8,654,813.9), new cjs.Rectangle(-326,-407.5,654,813.6), new cjs.Rectangle(-326,-407.3,654,813.4), new cjs.Rectangle(-326,-407.1,654,813.1), new cjs.Rectangle(-326,-406.8,654,812.9), new cjs.Rectangle(-326,-406.5,654,812.6), new cjs.Rectangle(-326,-406.4,654,812.4), new cjs.Rectangle(-326,-406.1,654,812.1), new cjs.Rectangle(-326,-405.9,654,812)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,654,812), new cjs.Rectangle(-326,-406.2,654,812.2), new cjs.Rectangle(-326,-406.3,654,812.4), new cjs.Rectangle(-326,-406.5,654,812.5), new cjs.Rectangle(-326,-406.6,654,812.7), new cjs.Rectangle(-326,-406.8,654,812.9), new cjs.Rectangle(-326,-407,654,813), rect=new cjs.Rectangle(-326,-407.1,654,813.1), rect, rect, new cjs.Rectangle(-326,-407.2,654,813.2), new cjs.Rectangle(-326,-407.1,654,813.2), new cjs.Rectangle(-326,-407.2,654,813.3), rect=new cjs.Rectangle(-326,-407.3,654,813.3), rect, new cjs.Rectangle(-326,-407.3,654,813.4), rect=new cjs.Rectangle(-326,-407.4,654,813.5), rect, rect=new cjs.Rectangle(-326,-407.5,654,813.6), rect, new cjs.Rectangle(-326,-407.6,654,813.6), rect=new cjs.Rectangle(-326,-407.6,654,813.7), rect, new cjs.Rectangle(-326,-407.7,654,813.7), new cjs.Rectangle(-326,-407.8,654,813.8), new cjs.Rectangle(-326,-407.7,654,813.8), new cjs.Rectangle(-326,-407.8,654,813.9), new cjs.Rectangle(-326,-407.9,654,813.9), new cjs.Rectangle(-326,-407.8,654,813.9), rect=new cjs.Rectangle(-326,-407.9,654,813.9), rect, new cjs.Rectangle(-326,-408,654,814), new cjs.Rectangle(-326,-407.9,654,814), rect=new cjs.Rectangle(-326,-408,654,814.1), rect, new cjs.Rectangle(-326,-408.1,654,814.2), new cjs.Rectangle(-326,-407.8,654,813.9), new cjs.Rectangle(-326,-407.6,654,813.6), new cjs.Rectangle(-326,-407.3,654,813.3), new cjs.Rectangle(-326,-407,654,813), new cjs.Rectangle(-326,-406.7,654,812.8), new cjs.Rectangle(-326,-406.3,654,812.4), new cjs.Rectangle(-326,-406.1,654,812.1), new cjs.Rectangle(-326,-405.8,654,811.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,654,812), new cjs.Rectangle(-326,-406.2,654,812.3), new cjs.Rectangle(-326,-406.5,654,812.5), new cjs.Rectangle(-326,-406.7,654,812.8), rect=new cjs.Rectangle(-326,-407.1,654,813.1), rect, new cjs.Rectangle(-326,-407.2,654,813.2), rect=new cjs.Rectangle(-326,-407.2,654,813.3), rect, new cjs.Rectangle(-326,-407.3,654,813.3), new cjs.Rectangle(-326,-407.4,654,813.4), new cjs.Rectangle(-326,-407.4,654,813.5), rect=new cjs.Rectangle(-326,-407.5,654,813.5), rect, rect, new cjs.Rectangle(-326,-407.6,654,813.6), rect=new cjs.Rectangle(-326,-407.7,654,813.7), rect, new cjs.Rectangle(-326,-407.7,654,813.8), rect=new cjs.Rectangle(-326,-407.8,654,813.9), rect, new cjs.Rectangle(-326,-407.9,654,814), new cjs.Rectangle(-326,-408,654,814), new cjs.Rectangle(-326,-408,654,814.1), rect=new cjs.Rectangle(-326,-408.1,654,814.1), rect, new cjs.Rectangle(-326,-408.1,654,814.2), new cjs.Rectangle(-326,-408.3,654,814.3), rect=new cjs.Rectangle(-326,-408.3,654,814.4), rect, rect=new cjs.Rectangle(-326,-408.4,654,814.5), rect, rect=new cjs.Rectangle(-326,-408.5,654,814.6), rect, new cjs.Rectangle(-326,-408.6,654,814.6), new cjs.Rectangle(-326,-408.3,654,814.3), new cjs.Rectangle(-326,-407.9,654,814), new cjs.Rectangle(-326,-407.6,654,813.7), new cjs.Rectangle(-326,-407.3,654,813.4), new cjs.Rectangle(-326,-407.1,654,813.1), new cjs.Rectangle(-326,-406.8,654,812.8), new cjs.Rectangle(-326,-406.5,654,812.5), new cjs.Rectangle(-326,-406.1,654,812.1), new cjs.Rectangle(-326,-405.8,654,811.8)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-386.9,654,792.9), new cjs.Rectangle(-326,-368,654,774), new cjs.Rectangle(-326,-349.1,654,755.2), new cjs.Rectangle(-326,-330.2,654,736.3), new cjs.Rectangle(-326,-311.3,654,717.4), new cjs.Rectangle(-326,-292.4,654,698.5), new cjs.Rectangle(-326,-273.6,654,679.6), new cjs.Rectangle(-326,-254.7,654,660.7), rect=new cjs.Rectangle(-326,-235.8,654,641.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-250.3,654,656.3), new cjs.Rectangle(-326,-264.8,654,670.8), new cjs.Rectangle(-326,-279.3,654,685.3), new cjs.Rectangle(-326,-293.8,654,699.8), new cjs.Rectangle(-326,-308.3,654,714.3), new cjs.Rectangle(-326,-322.8,654,728.8), new cjs.Rectangle(-326,-337.3,654,743.3), new cjs.Rectangle(-326,-351.8,654,757.8), new cjs.Rectangle(-326,-366.3,654,772.3), new cjs.Rectangle(-326,-380.8,654,786.8), new cjs.Rectangle(-326,-395.3,654,801.3), rect=new cjs.Rectangle(-326,-409.8,654,815.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-409.8,654,819.4), new cjs.Rectangle(-326,-409.5,654,821), new cjs.Rectangle(-326,-409.2,654,820.7), new cjs.Rectangle(-326,-409,654,818.5), new cjs.Rectangle(-326,-408.7,654,814.8), new cjs.Rectangle(-326,-408.4,654,814.5), new cjs.Rectangle(-326,-408.2,654,814.2), new cjs.Rectangle(-326,-407.9,654,814), new cjs.Rectangle(-326,-407.6,654,813.7), new cjs.Rectangle(-326,-407.4,654,813.4), new cjs.Rectangle(-326,-407.1,654,813.2), new cjs.Rectangle(-326,-406.8,654,812.9), new cjs.Rectangle(-326,-406.6,654,812.6), new cjs.Rectangle(-326,-406.3,654,812.4), new cjs.Rectangle(-326,-406,654,812.1), new cjs.Rectangle(-326,-405.8,654,811.8)];


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
	this.instance_3.setTransform(142.5,-393.7,1,1,4.2,0,0,-0.1,-232.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regY:-232.9,rotation:4.2,x:142.5,y:-393.7},6).to({_off:false,x:258.5},28).to({regY:-233.1,rotation:0,x:240.5,y:-393.9},10).wait(1));
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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,654,811.9), new cjs.Rectangle(-326,-406,654,812.1), new cjs.Rectangle(-326,-406.2,654,812.2), new cjs.Rectangle(-326,-406.4,654,812.4), new cjs.Rectangle(-326,-406.5,654,812.5), new cjs.Rectangle(-326,-406.9,654,813), rect=new cjs.Rectangle(-326,-406.8,654,812.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-406.9,654,813), new cjs.Rectangle(-326,-406.7,654,812.8), new cjs.Rectangle(-326,-406.7,654,812.7), new cjs.Rectangle(-326,-406.5,654,812.6), new cjs.Rectangle(-326,-406.4,654,812.5), new cjs.Rectangle(-326,-406.3,654,812.4), new cjs.Rectangle(-326,-406.2,654,812.3), new cjs.Rectangle(-326,-406.1,654,812.2), new cjs.Rectangle(-326,-406,654,812), new cjs.Rectangle(-326,-405.9,654,812), new cjs.Rectangle(-326,-405.8,654,811.8)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.8);
p.frameBounds = [rect, new cjs.Rectangle(-326,-385.1,654,791.2), new cjs.Rectangle(-326,-364.4,654,770.5), new cjs.Rectangle(-326,-343.8,654,749.8), new cjs.Rectangle(-326,-323.1,654,729.2), new cjs.Rectangle(-326,-302.4,654,708.5), new cjs.Rectangle(-326,-281.8,654,687.8), new cjs.Rectangle(-326,-261.1,654,667.2), new cjs.Rectangle(-326,-240.4,654,646.5), rect=new cjs.Rectangle(-326,-219.8,654,625.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-237.6,654,643.6), new cjs.Rectangle(-326,-255.4,654,661.4), new cjs.Rectangle(-326,-273.2,654,679.2), new cjs.Rectangle(-326,-291,654,697), new cjs.Rectangle(-326,-308.8,654,714.8), new cjs.Rectangle(-326,-326.6,654,732.6), new cjs.Rectangle(-326,-344.4,654,750.4), new cjs.Rectangle(-326,-362.2,654,768.2), new cjs.Rectangle(-326,-380,654,786), rect=new cjs.Rectangle(-326,-397.8,654,803.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-397.8,654,809.1), new cjs.Rectangle(-326,-397.8,654,812.5), new cjs.Rectangle(-326,-397.8,654,814.3), new cjs.Rectangle(-326,-398.5,654,815), new cjs.Rectangle(-326,-399.2,654,813.7), new cjs.Rectangle(-326,-400,654,814.4), new cjs.Rectangle(-326,-400.7,654,815.1), new cjs.Rectangle(-326,-401.4,654,815.8), new cjs.Rectangle(-326,-402.1,654,816.5), new cjs.Rectangle(-326,-402.9,654,817.3), new cjs.Rectangle(-326,-403.6,654,818), new cjs.Rectangle(-326,-404.3,654,818.7), new cjs.Rectangle(-326,-405,654,819.4), new cjs.Rectangle(-326,-405.8,654,820.3)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-405.9,654,811.9), new cjs.Rectangle(-326,-406,654,812.1), new cjs.Rectangle(-326,-406.2,654,812.2), new cjs.Rectangle(-326,-406.4,654,812.4), new cjs.Rectangle(-326,-406.5,654,812.6), rect=new cjs.Rectangle(-326,-406.4,654,812.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-406.5,654,812.6), new cjs.Rectangle(-326,-406.4,654,812.5), new cjs.Rectangle(-326,-406.3,654,812.4), new cjs.Rectangle(-326,-406.2,654,812.3), new cjs.Rectangle(-326,-406.1,654,812.2), new cjs.Rectangle(-326,-406.1,654,812.1), new cjs.Rectangle(-326,-406,654,812), new cjs.Rectangle(-326,-405.9,654,812), new cjs.Rectangle(-326,-405.8,654,811.8)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.8,654,811.9);
p.frameBounds = [rect, new cjs.Rectangle(-326,-383.6,654,789.7), new cjs.Rectangle(-326,-361.4,654,767.4), new cjs.Rectangle(-326,-339.2,654,745.2), new cjs.Rectangle(-326,-316.9,654,723), new cjs.Rectangle(-326,-294.7,654,700.8), new cjs.Rectangle(-326,-272.5,654,678.5), new cjs.Rectangle(-326,-250.3,654,656.3), new cjs.Rectangle(-326,-228,654,634.1), rect=new cjs.Rectangle(-326,-205.8,654,611.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-222,654,628), new cjs.Rectangle(-326,-238.2,654,644.2), new cjs.Rectangle(-326,-254.3,654,660.4), new cjs.Rectangle(-326,-270.5,654,676.5), new cjs.Rectangle(-326,-286.7,654,692.7), new cjs.Rectangle(-326,-302.8,654,708.9), new cjs.Rectangle(-326,-319,654,725), new cjs.Rectangle(-326,-335.2,654,741.2), new cjs.Rectangle(-326,-351.3,654,757.4), new cjs.Rectangle(-326,-367.5,654,773.5), new cjs.Rectangle(-326,-383.7,654,789.7), rect=new cjs.Rectangle(-326,-399.8,654,805.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-399.8,654,806.3), new cjs.Rectangle(-326,-400.3,654,806.3), new cjs.Rectangle(-326,-400.7,654,806.8), new cjs.Rectangle(-326,-401.2,654,807.3), new cjs.Rectangle(-326,-401.7,654,807.7), new cjs.Rectangle(-326,-402.1,654,808.2), new cjs.Rectangle(-326,-402.6,654,808.6), new cjs.Rectangle(-326,-403.1,654,809.1), new cjs.Rectangle(-326,-403.5,654,809.6), new cjs.Rectangle(-326,-404,654,810), new cjs.Rectangle(-326,-404.4,654,810.5), new cjs.Rectangle(-326,-404.9,654,811), new cjs.Rectangle(-326,-405.4,654,811.4), new cjs.Rectangle(-326,-405.8,654,811.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,654,812);
p.frameBounds = [rect, new cjs.Rectangle(-326,-406.3,654,812.4), new cjs.Rectangle(-326,-406.8,654,812.9), new cjs.Rectangle(-326,-407.4,654,813.4), rect=new cjs.Rectangle(-326,-407.3,654,813.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-326,-407.4,654,813.4), new cjs.Rectangle(-326,-407.2,654,813.2), new cjs.Rectangle(-326,-407,654,813.1), new cjs.Rectangle(-326,-406.9,654,812.9), new cjs.Rectangle(-326,-406.8,654,812.9), new cjs.Rectangle(-326,-406.5,654,812.6), new cjs.Rectangle(-326,-406.5,654,812.5), new cjs.Rectangle(-326,-406.3,654,812.3), new cjs.Rectangle(-326,-406.1,654,812.2), new cjs.Rectangle(-326,-406,654,812), new cjs.Rectangle(-326,-405.8,654,811.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,654,812);
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
p.nominalBounds = rect = new cjs.Rectangle(-326,-405.9,654,812);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-326,-405.8,654,811.9), rect, rect=new cjs.Rectangle(-326,-405.8,654,811.8), rect, rect, rect, rect, new cjs.Rectangle(-326,-405.8,654,811.9), new cjs.Rectangle(-326,-405.9,654,812), new cjs.Rectangle(-326,-405.8,654,811.9), rect=new cjs.Rectangle(-326,-405.8,654,811.8), rect, new cjs.Rectangle(-326,-405.9,654,812)];


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
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.barbie_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.barbie_star_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},4).to({rotation:45},5).to({rotation:90},5).wait(5).to({scaleX:0.8,scaleY:0.8,alpha:0.102},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-156.7,-159.2,319.5,319.5), new cjs.Rectangle(-173.1,-175,352,352), new cjs.Rectangle(-185.4,-186.7,376.2,376.2), new cjs.Rectangle(-192.7,-193.4,390.4,390.4), new cjs.Rectangle(-195.8,-195.8,396,396), new cjs.Rectangle(-193.5,-192.8,390.5,390.5), new cjs.Rectangle(-186.7,-185.4,376.2,376.2), new cjs.Rectangle(-175.3,-173.4,352.5,352.5), new cjs.Rectangle(-159.6,-157.1,320.2,320.2), new cjs.Rectangle(-140,-137,280,280), rect=new cjs.Rectangle(-140,-136.9,280,280), rect, rect, rect, new cjs.Rectangle(-140,-137,280,280), new cjs.Rectangle(-137.2,-134.2,274.4,274.4), new cjs.Rectangle(-134.4,-131.5,268.8,268.8), new cjs.Rectangle(-131.6,-128.7,263.2,263.2), new cjs.Rectangle(-128.8,-126,257.6,257.6), new cjs.Rectangle(-126,-123.2,252,252), new cjs.Rectangle(-123.2,-120.5,246.4,246.4), new cjs.Rectangle(-120.4,-117.8,240.8,240.8), new cjs.Rectangle(-117.6,-115,235.2,235.2), new cjs.Rectangle(-114.8,-112.3,229.6,229.6), new cjs.Rectangle(-112,-109.6,224,224), null];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-70,-70,140,140)];


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


(lib.more_games_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_3_2_mc();
	this.instance.setTransform(50.6,58.6,0.914,0.914,30,0,0,11.2,17.4);

	this.instance_1 = new lib.more_games_3_2_mc();
	this.instance_1.setTransform(37.7,-32.6,1.144,1.144,0,0,0,11.2,17.4);

	this.instance_2 = new lib.more_games_4_2_mc();
	this.instance_2.setTransform(4,-7.1,0.766,0.766,0,0,0,15.7,21.4);

	this.instance_3 = new lib.more_games_4_2_mc();
	this.instance_3.setTransform(43,21.4,1,1,-15,0,0,15.7,21.4);

	this.instance_4 = new lib.more_games_3_2_mc();
	this.instance_4.setTransform(11.2,39.5,1,1,0,0,0,11.2,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.9,-52.5,75.4,129.9);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_5_2_mc();
	this.instance.setTransform(5.7,86.5,0.488,0.488,0,0,0,29.3,28.4);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:29.8,regY:12.4,scaleX:0.63,scaleY:0.63,x:6.2,y:77.8,alpha:0.368},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:6.4,y:77.2,alpha:0.644},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:6.6,y:76.7,alpha:0.842},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:6.7,y:76.4,alpha:0.96},0).wait(1).to({regX:29.4,regY:28.3,scaleX:0.89,scaleY:0.89,x:6.3,y:90.6,alpha:1},0).wait(1).to({regX:29.8,regY:12.4,scaleX:0.89,scaleY:0.89,x:6.7,y:76.6,alpha:0.938},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:6.6,y:77.1,alpha:0.753},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:6.4,y:78,alpha:0.444},0).wait(1).to({regX:29.3,regY:28.4,scaleX:0.92,scaleY:0.92,x:5.7,y:94,alpha:0.012},0).wait(5));

	// animation
	this.instance_1 = new lib.more_games_5_2_mc();
	this.instance_1.setTransform(115.7,86.5,0.488,0.488,0,0,0,29.3,28.4);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:29.8,regY:12.4,scaleX:0.63,scaleY:0.63,x:118.2,y:77.8,alpha:0.368},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:119.9,y:77.2,alpha:0.644},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:121.1,y:76.7,alpha:0.842},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:121.9,y:76.4,alpha:0.96},0).wait(1).to({regX:29.4,regY:28.3,scaleX:0.89,scaleY:0.89,x:121.8,y:90.6,alpha:1},0).wait(1).to({regX:29.8,regY:12.4,scaleX:0.89,scaleY:0.89,y:76.7,alpha:0.938},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:120.8,y:77.4,alpha:0.753},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:119.3,y:78.6,alpha:0.444},0).wait(1).to({regX:29.3,regY:28.4,scaleX:0.86,scaleY:0.86,x:116.7,y:94,alpha:0.012},0).wait(5));

	// animation
	this.instance_2 = new lib.more_games_2_2_mc();
	this.instance_2.setTransform(58.5,98.3,1,1,0,0,0,22.8,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.1,scaleY:1.1},7).to({scaleX:1,scaleY:1},6).wait(5));

	// animation
	this.instance_3 = new lib.more_games_8_2_mc();
	this.instance_3.setTransform(1.8,101,0.949,1.065,0,0,180,14.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:14.5,regY:18.7,scaleX:1.19,scaleY:1.19,x:2.7,y:101.4},0).wait(1).to({scaleX:1.4,scaleY:1.29,x:3.6,y:101.7},0).wait(1).to({scaleX:1.56,scaleY:1.37,x:4.2,y:102.1},0).wait(1).to({scaleX:1.7,scaleY:1.44,x:4.7,y:102.3},0).wait(1).to({scaleX:1.79,scaleY:1.49,x:5,y:102.5},0).wait(1).to({scaleX:1.84,scaleY:1.51,x:5.3},0).wait(1).to({regY:18.8,scaleX:1.86,scaleY:1.52,y:102.8},0).wait(1).to({regY:18.7,scaleX:1.84,scaleY:1.51,x:5.1,y:102.5},0).wait(1).to({scaleX:1.76,scaleY:1.47,x:4.8,y:102.4},0).wait(1).to({scaleX:1.63,scaleY:1.41,x:4.4,y:102.2},0).wait(1).to({scaleX:1.46,scaleY:1.32,x:3.7,y:101.8},0).wait(1).to({scaleX:1.23,scaleY:1.21,x:2.9,y:101.4},0).wait(1).to({regX:14.6,regY:18.8,scaleX:0.95,scaleY:1.07,x:1.8,y:101},0).wait(5));

	// animation
	this.instance_4 = new lib.more_games_9_2_mc();
	this.instance_4.setTransform(2.3,57.9,0.832,0.934,0,0,180,11,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:10.9,scaleX:1.09,scaleY:1.08,x:2.9,y:57.4},0).wait(1).to({scaleX:1.3,scaleY:1.2,x:3.4,y:56.9},0).wait(1).to({scaleX:1.48,scaleY:1.29,x:3.8,y:56.6},0).wait(1).to({scaleX:1.62,scaleY:1.37,x:4.2,y:56.2},0).wait(1).to({scaleX:1.72,scaleY:1.42,x:4.4,y:56},0).wait(1).to({scaleX:1.77,scaleY:1.46,x:4.5,y:55.9},0).wait(1).to({regX:11,scaleX:1.79,scaleY:1.47,x:4.4},0).wait(1).to({regX:10.9,scaleX:1.77,scaleY:1.45,x:4.5},0).wait(1).to({scaleX:1.69,scaleY:1.41,x:4.3,y:56.1},0).wait(1).to({scaleX:1.55,scaleY:1.33,x:4,y:56.4},0).wait(1).to({scaleX:1.37,scaleY:1.23,x:3.6,y:56.8},0).wait(1).to({scaleX:1.13,scaleY:1.1,x:3,y:57.3},0).wait(1).to({regX:11,scaleX:0.83,scaleY:0.93,x:2.3,y:57.9},0).wait(5));

	// animation
	this.instance_5 = new lib.more_games_7_2_mc();
	this.instance_5.setTransform(3.2,81,0.723,1,0,0,180,22.4,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:22.1,regY:53.6,scaleX:0.88,scaleY:1.02,x:4.7,y:80.8},0).wait(1).to({scaleX:1.02,scaleY:1.04,x:5.8},0).wait(1).to({scaleX:1.13,scaleY:1.06,x:6.7},0).wait(1).to({scaleX:1.22,scaleY:1.07,x:7.4},0).wait(1).to({scaleX:1.28,scaleY:1.08,x:7.9},0).wait(1).to({scaleX:1.32,scaleY:1.09,x:8.2,y:80.7},0).wait(1).to({regX:22.4,regY:53.8,scaleX:1.33,scaleY:1.09,x:7.9,y:81},0).wait(1).to({regX:22.1,regY:53.6,scaleX:1.31,scaleY:1.09,x:8.2,y:80.8},0).wait(1).to({scaleX:1.26,scaleY:1.08,x:7.8},0).wait(1).to({scaleX:1.18,scaleY:1.07,x:7.1},0).wait(1).to({scaleX:1.06,scaleY:1.05,x:6.1},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:4.9},0).wait(1).to({regX:22.4,regY:53.8,scaleX:0.72,scaleY:1,x:3.2,y:81},0).wait(5));

	// animation
	this.instance_6 = new lib.more_games_6_2_mc();
	this.instance_6.setTransform(38.2,81,1.27,1,0,0,180,14.8,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:53.6,scaleX:1.1,scaleY:1.02,x:40.5,y:80.8},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:42.5},0).wait(1).to({scaleX:0.84,scaleY:1.06,x:44.1},0).wait(1).to({scaleX:0.75,scaleY:1.07,x:45.3},0).wait(1).to({scaleX:0.68,scaleY:1.08,x:46.3},0).wait(1).to({scaleX:0.64,scaleY:1.09,x:46.8,y:80.7},0).wait(1).to({regY:53.8,scaleX:0.63,scaleY:1.09,x:47,y:81},0).wait(1).to({regY:53.6,scaleX:0.65,scaleY:1.09,x:46.7,y:80.8},0).wait(1).to({scaleX:0.7,scaleY:1.08,x:46},0).wait(1).to({scaleX:0.79,scaleY:1.07,x:44.8},0).wait(1).to({scaleX:0.91,scaleY:1.05,x:43.1},0).wait(1).to({scaleX:1.07,scaleY:1.03,x:40.9},0).wait(1).to({regY:53.8,scaleX:1.27,scaleY:1,x:38.2,y:81},0).wait(5));

	// animation
	this.instance_7 = new lib.more_games_8_2_mc();
	this.instance_7.setTransform(116.9,101,0.949,1.065,0,0,0,14.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:14.5,regY:18.7,x:116.8,y:100.9},0).wait(3).to({regX:14.6,regY:18.8,x:116.9,y:101},0).wait(1).to({regX:14.5,regY:18.7,scaleX:1.19,scaleY:1.19,x:115.9,y:101.4},0).wait(1).to({scaleX:1.4,scaleY:1.29,x:115.1,y:101.7},0).wait(1).to({scaleX:1.56,scaleY:1.37,x:114.5,y:102.1},0).wait(1).to({scaleX:1.7,scaleY:1.44,x:114,y:102.3},0).wait(1).to({scaleX:1.79,scaleY:1.49,x:113.6,y:102.5},0).wait(1).to({scaleX:1.84,scaleY:1.51,x:113.4},0).wait(1).to({regY:18.8,scaleX:1.86,scaleY:1.52,y:102.8},0).wait(1).to({regY:18.7,scaleX:1.84,scaleY:1.51,x:113.5,y:102.5},0).wait(1).to({scaleX:1.76,scaleY:1.47,x:113.8,y:102.4},0).wait(1).to({scaleX:1.63,scaleY:1.41,x:114.3,y:102.2},0).wait(1).to({scaleX:1.46,scaleY:1.32,x:114.9,y:101.8},0).wait(1).to({scaleX:1.23,scaleY:1.21,x:115.8,y:101.4},0).wait(1).to({regX:14.6,regY:18.8,scaleX:0.95,scaleY:1.07,x:116.9,y:101},0).wait(1));

	// animation
	this.instance_8 = new lib.more_games_9_2_mc();
	this.instance_8.setTransform(116.4,57.9,0.832,0.934,0,0,0,11,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:10.9,x:116.3},0).wait(3).to({regX:11,x:116.4},0).wait(1).to({regX:10.9,scaleX:1.09,scaleY:1.08,x:115.7,y:57.4},0).wait(1).to({scaleX:1.3,scaleY:1.2,x:115.2,y:56.9},0).wait(1).to({scaleX:1.48,scaleY:1.29,x:114.8,y:56.6},0).wait(1).to({scaleX:1.62,scaleY:1.37,x:114.4,y:56.2},0).wait(1).to({scaleX:1.72,scaleY:1.42,x:114.2,y:56},0).wait(1).to({scaleX:1.77,scaleY:1.46,x:114.1,y:55.9},0).wait(1).to({regX:11,scaleX:1.79,scaleY:1.47,x:114.3},0).wait(1).to({regX:10.9,scaleX:1.77,scaleY:1.45,x:114.1},0).wait(1).to({scaleX:1.69,scaleY:1.41,x:114.3,y:56.1},0).wait(1).to({scaleX:1.55,scaleY:1.33,x:114.6,y:56.4},0).wait(1).to({scaleX:1.37,scaleY:1.23,x:115,y:56.8},0).wait(1).to({scaleX:1.13,scaleY:1.1,x:115.6,y:57.3},0).wait(1).to({regX:11,scaleX:0.83,scaleY:0.93,x:116.4,y:57.9},0).wait(1));

	// animation
	this.instance_9 = new lib.more_games_7_2_mc();
	this.instance_9.setTransform(115.4,81,0.723,1,0,0,0,22.4,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:22.1,regY:53.6,x:115.2,y:80.8},0).wait(3).to({regX:22.4,regY:53.8,x:115.4,y:81},0).wait(1).to({regX:22.1,regY:53.6,scaleX:0.88,scaleY:1.02,x:113.9,y:80.8},0).wait(1).to({scaleX:1.02,scaleY:1.04,x:112.8},0).wait(1).to({scaleX:1.13,scaleY:1.06,x:111.9},0).wait(1).to({scaleX:1.22,scaleY:1.07,x:111.2},0).wait(1).to({scaleX:1.28,scaleY:1.08,x:110.7},0).wait(1).to({scaleX:1.32,scaleY:1.09,x:110.4,y:80.7},0).wait(1).to({regX:22.4,regY:53.8,scaleX:1.33,scaleY:1.09,x:110.8,y:81},0).wait(1).to({regX:22.1,regY:53.6,scaleX:1.31,scaleY:1.09,x:110.5,y:80.8},0).wait(1).to({scaleX:1.26,scaleY:1.08,x:110.9},0).wait(1).to({scaleX:1.18,scaleY:1.07,x:111.6},0).wait(1).to({scaleX:1.06,scaleY:1.05,x:112.5},0).wait(1).to({scaleX:0.91,scaleY:1.03,x:113.7},0).wait(1).to({regX:22.4,regY:53.8,scaleX:0.72,scaleY:1,x:115.4,y:81},0).wait(1));

	// animation
	this.instance_10 = new lib.more_games_6_2_mc();
	this.instance_10.setTransform(80.4,81,1.27,1,0,0,0,14.8,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:53.6,y:80.8},0).wait(3).to({regY:53.8,y:81},0).wait(1).to({regY:53.6,scaleX:1.1,scaleY:1.02,x:78.1,y:80.8},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:76.1},0).wait(1).to({scaleX:0.84,scaleY:1.06,x:74.5},0).wait(1).to({scaleX:0.75,scaleY:1.07,x:73.3},0).wait(1).to({scaleX:0.68,scaleY:1.08,x:72.3},0).wait(1).to({scaleX:0.64,scaleY:1.09,x:71.8,y:80.7},0).wait(1).to({regY:53.8,scaleX:0.63,scaleY:1.09,x:71.7,y:81},0).wait(1).to({regY:53.6,scaleX:0.65,scaleY:1.09,x:71.9,y:80.8},0).wait(1).to({scaleX:0.7,scaleY:1.08,x:72.6},0).wait(1).to({scaleX:0.79,scaleY:1.07,x:73.8},0).wait(1).to({scaleX:0.91,scaleY:1.05,x:75.5},0).wait(1).to({scaleX:1.07,scaleY:1.03,x:77.7},0).wait(1).to({regY:53.8,scaleX:1.27,scaleY:1,x:80.4,y:81},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.7,27.2,144,126.1);
p.frameBounds = [rect, new cjs.Rectangle(-14.9,26,146.3,128.2), new cjs.Rectangle(-16.9,24.9,148.2,130), new cjs.Rectangle(-18.5,24.1,149.8,131.6), new cjs.Rectangle(-19.7,23.4,154.1,133.1), new cjs.Rectangle(-20.7,22.9,162.8,134.4), new cjs.Rectangle(-21.5,22.6,169.4,135.5), new cjs.Rectangle(-24.4,22.5,176.7,136.3), new cjs.Rectangle(-26.1,19.8,180.9,138.1), new cjs.Rectangle(-26.8,18.7,182.4,138.3), new cjs.Rectangle(-26.9,18.7,182.1,137.4), new cjs.Rectangle(-27.3,18.8,181.4,136.4), new cjs.Rectangle(-27.9,18.9,180.1,135.4), rect=new cjs.Rectangle(-28.6,19.2,178.2,134.2), rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,1200,620);
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
	this.instance_1.setTransform(88.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(52.5,-211.9,695,827);
p.frameBounds = [rect];


(lib.gallery_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-352,0);

	this.next_mc = new lib.next_mc_1();
	this.next_mc.setTransform(350,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(3));

	// counter
	this.counter_mc = new lib.counterOptions_mc();
	this.counter_mc.setTransform(0,250);

	this.timeline.addTween(cjs.Tween.get(this.counter_mc).wait(3));

	// options
	this.option_8_mc = new lib.option_8_mc();
	this.option_8_mc.setTransform(240,102);

	this.option_7_mc = new lib.option_7_mc();
	this.option_7_mc.setTransform(80,102);

	this.option_6_mc = new lib.option_6_mc();
	this.option_6_mc.setTransform(-80,102);

	this.option_5_mc = new lib.option_5_mc();
	this.option_5_mc.setTransform(-240,102);

	this.option_4_mc = new lib.option_4_mc();
	this.option_4_mc.setTransform(240,-102);

	this.option_3_mc = new lib.option_3_mc();
	this.option_3_mc.setTransform(80,-102);

	this.option_2_mc = new lib.option_2_mc();
	this.option_2_mc.setTransform(-80,-102);

	this.option_1_mc = new lib.option_1_mc();
	this.option_1_mc.setTransform(-240,-102);

	this.option_16_mc = new lib.option_16_mc();
	this.option_16_mc.setTransform(240,102);

	this.option_15_mc = new lib.option_15_mc();
	this.option_15_mc.setTransform(80,102);

	this.option_14_mc = new lib.option_14_mc();
	this.option_14_mc.setTransform(-80,102);

	this.option_13_mc = new lib.option_13_mc();
	this.option_13_mc.setTransform(-240,102);

	this.option_12_mc = new lib.option_12_mc();
	this.option_12_mc.setTransform(240,-102);

	this.option_11_mc = new lib.option_11_mc();
	this.option_11_mc.setTransform(80,-102);

	this.option_10_mc = new lib.option_10_mc();
	this.option_10_mc.setTransform(-80,-102);

	this.option_9_mc = new lib.option_9_mc();
	this.option_9_mc.setTransform(-240,-102);

	this.option_21_mc = new lib.option_21_mc();
	this.option_21_mc.setTransform(80,102);

	this.option_20_mc = new lib.option_20_mc();
	this.option_20_mc.setTransform(-80,102);

	this.option_19_mc = new lib.option_19_mc();
	this.option_19_mc.setTransform(160,-102);

	this.option_18_mc = new lib.option_18_mc();
	this.option_18_mc.setTransform(0,-102);

	this.option_17_mc = new lib.option_17_mc();
	this.option_17_mc.setTransform(-160,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option_1_mc},{t:this.option_2_mc},{t:this.option_3_mc},{t:this.option_4_mc},{t:this.option_5_mc},{t:this.option_6_mc},{t:this.option_7_mc},{t:this.option_8_mc}]}).to({state:[{t:this.option_9_mc},{t:this.option_10_mc},{t:this.option_11_mc},{t:this.option_12_mc},{t:this.option_13_mc},{t:this.option_14_mc},{t:this.option_15_mc},{t:this.option_16_mc}]},1).to({state:[{t:this.option_17_mc},{t:this.option_18_mc},{t:this.option_19_mc},{t:this.option_20_mc},{t:this.option_21_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-397,-200,792,482);
p.frameBounds = [rect, rect, rect];


(lib.egg_animation21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(136.8,233.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-34.4,-53.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(-34.4,-250.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-98.3,207.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(41.4,-135,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-102.3,-190.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy21_mc();
	this.instance_9.setTransform(0.4,3.4,0.836,0.836);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1,x:3.4,y:4.4},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-149.3,-265.2,286,519.7), new cjs.Rectangle(-149.5,-265.9,286.8,521.1), new cjs.Rectangle(-149.7,-266.5,287.5,522.5), new cjs.Rectangle(-150,-267.3,288.3,524), new cjs.Rectangle(-150.2,-268,289.1,525.4), new cjs.Rectangle(-150.5,-268.7,289.9,526.8), new cjs.Rectangle(-150.8,-269.3,290.7,528.3), new cjs.Rectangle(-151,-270,291.5,529.7), new cjs.Rectangle(-151.3,-270.7,292.3,531.2), new cjs.Rectangle(-151.6,-271.5,293,532.6), new cjs.Rectangle(-151.8,-272.1,293.9,534.1), new cjs.Rectangle(-152,-272.7,294.7,535.5), new cjs.Rectangle(-152.3,-273.4,295.5,536.9), new cjs.Rectangle(-152.6,-274.1,296.3,538.3), new cjs.Rectangle(-152.8,-274.9,297,539.8), new cjs.Rectangle(-153.1,-275.6,297.8,541.2), new cjs.Rectangle(-153.3,-276.3,298.6,542.7), new cjs.Rectangle(-153.6,-276.9,299.4,544.1), new cjs.Rectangle(-153.8,-277.6,300.2,545.6), rect=new cjs.Rectangle(-154.2,-278.3,301,547), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-118.8,-245.7,287.1,521.8), new cjs.Rectangle(-83.5,-213.2,273.2,496.5), new cjs.Rectangle(-48.1,-180.6,259.3,471.3), new cjs.Rectangle(-12.8,-148,245.5,446), new cjs.Rectangle(22.6,-115.4,231.6,420.8), new cjs.Rectangle(57.9,-82.8,217.7,395.5), new cjs.Rectangle(93.3,-50.2,203.8,370.3), new cjs.Rectangle(128.6,-17.6,189.8,345), new cjs.Rectangle(163.9,14.9,176,319.8), new cjs.Rectangle(199.3,47.5,162.1,294.6), new cjs.Rectangle(234.6,80.1,148.2,269.3), new cjs.Rectangle(270,112.6,134.3,244.1), new cjs.Rectangle(305.4,145.2,120.4,218.8), null];


(lib.egg_animation20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(140.6,231.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(123.6,-88.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(-56.4,-248.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-102.3,205.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-12.6,-122.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-102.3,-155.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,3.4,0.845,0.845);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1,x:0.6,y:1.4},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-154,-265.2,301.2,517.8), new cjs.Rectangle(-154.4,-266,302,519.2), new cjs.Rectangle(-154.8,-266.8,302.8,520.6), new cjs.Rectangle(-155.2,-267.7,303.7,522.1), new cjs.Rectangle(-155.6,-268.6,304.5,523.5), new cjs.Rectangle(-156.1,-269.5,305.3,524.9), new cjs.Rectangle(-156.5,-270.3,306.2,526.4), new cjs.Rectangle(-156.9,-271.1,307,527.8), new cjs.Rectangle(-157.3,-272,307.8,529.2), new cjs.Rectangle(-157.7,-272.9,308.7,530.7), new cjs.Rectangle(-158.1,-273.7,309.5,532.1), new cjs.Rectangle(-158.6,-274.5,310.3,533.5), new cjs.Rectangle(-159,-275.3,311.2,535), new cjs.Rectangle(-159.4,-276.2,312,536.4), new cjs.Rectangle(-159.8,-277.1,312.8,537.8), new cjs.Rectangle(-160.2,-278,313.7,539.3), new cjs.Rectangle(-160.7,-278.8,314.5,540.7), new cjs.Rectangle(-161,-279.6,315.3,542.1), new cjs.Rectangle(-161.5,-280.4,316.2,543.6), rect=new cjs.Rectangle(-162,-281.3,317,545), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-126.1,-248.5,302.4,519.9), new cjs.Rectangle(-90.3,-215.7,287.8,494.7), new cjs.Rectangle(-54.5,-182.9,273.1,469.6), new cjs.Rectangle(-18.8,-150.1,258.5,444.4), new cjs.Rectangle(17,-117.2,243.9,419.3), new cjs.Rectangle(52.8,-84.4,229.2,394.1), new cjs.Rectangle(88.6,-51.6,214.6,368.9), new cjs.Rectangle(124.4,-18.8,200,343.8), new cjs.Rectangle(160.2,14,185.3,318.6), new cjs.Rectangle(195.9,46.8,170.7,293.5), new cjs.Rectangle(231.7,79.6,156.1,268.3), new cjs.Rectangle(267.5,112.4,141.5,243.2), new cjs.Rectangle(303.4,145.2,126.8,218), null];


(lib.egg_animation19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(134.8,245.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-120.4,220.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(104.6,-205.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-17.6,23.7,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-42.6,-106,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-66.5,-181.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,3.4,0.864,0.864);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1,x:-2.6,y:7.4},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-142.3,-259.8,286,516.8), new cjs.Rectangle(-142.8,-260.3,286.8,518.2), new cjs.Rectangle(-143.3,-260.8,287.5,519.7), new cjs.Rectangle(-143.8,-261.4,288.3,521.1), new cjs.Rectangle(-144.4,-261.9,289.1,522.5), new cjs.Rectangle(-145,-262.4,289.9,524), new cjs.Rectangle(-145.5,-262.9,290.7,525.4), new cjs.Rectangle(-146.1,-263.4,291.5,526.8), new cjs.Rectangle(-146.6,-263.9,292.3,528.3), new cjs.Rectangle(-147.1,-264.5,293.1,529.7), new cjs.Rectangle(-147.7,-265,293.9,531.1), new cjs.Rectangle(-148.3,-265.5,294.7,532.6), new cjs.Rectangle(-148.8,-266,295.5,534), new cjs.Rectangle(-149.4,-266.5,296.3,535.4), new cjs.Rectangle(-149.9,-267.1,297,536.9), new cjs.Rectangle(-150.5,-267.6,297.8,538.3), new cjs.Rectangle(-151.1,-268.2,298.6,539.7), new cjs.Rectangle(-151.6,-268.6,299.4,541.1), new cjs.Rectangle(-152.2,-269.1,300.2,542.6), rect=new cjs.Rectangle(-152.8,-269.7,301,544), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-117.4,-237.6,287.1,518.9), new cjs.Rectangle(-81.9,-205.5,273.2,493.8), new cjs.Rectangle(-46.5,-173.4,259.3,468.7), new cjs.Rectangle(-11,-141.3,245.5,443.6), new cjs.Rectangle(24.5,-109.2,231.6,418.5), new cjs.Rectangle(59.9,-77.1,217.7,393.4), new cjs.Rectangle(95.4,-45,203.8,368.3), new cjs.Rectangle(130.9,-12.9,189.9,343.2), new cjs.Rectangle(166.3,19.1,176,318), new cjs.Rectangle(201.8,51.2,162.1,292.9), new cjs.Rectangle(237.3,83.3,148.2,267.8), new cjs.Rectangle(272.7,115.4,134.3,242.7), new cjs.Rectangle(308.3,147.5,120.4,217.6), null];


(lib.egg_animation18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(126.8,234.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-70.4,-67.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(-22.6,-263.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-28.6,217.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(44.4,-100,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-75.5,-198.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,3.4,0.847,0.847);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1,x:-1.6,y:-0.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-138.3,-261.4,286,518.7), new cjs.Rectangle(-138.7,-262.3,286.8,520.1), new cjs.Rectangle(-139.2,-263.3,287.5,521.6), new cjs.Rectangle(-139.7,-264.3,288.3,523), new cjs.Rectangle(-140.2,-265.2,289.1,524.5), new cjs.Rectangle(-140.7,-266.2,289.9,525.8), new cjs.Rectangle(-141.2,-267.1,290.7,527.3), new cjs.Rectangle(-141.6,-268,291.5,528.8), new cjs.Rectangle(-142.1,-269,292.3,530.2), new cjs.Rectangle(-142.6,-270,293.1,531.6), new cjs.Rectangle(-143.1,-270.9,293.9,533.1), new cjs.Rectangle(-143.6,-271.8,294.7,534.5), new cjs.Rectangle(-144.1,-272.8,295.5,536), new cjs.Rectangle(-144.5,-273.7,296.3,537.3), new cjs.Rectangle(-145,-274.7,297.1,538.8), new cjs.Rectangle(-145.6,-275.6,297.8,540.3), new cjs.Rectangle(-146,-276.5,298.6,541.7), new cjs.Rectangle(-146.5,-277.4,299.4,543.1), new cjs.Rectangle(-147,-278.4,300.2,544.6), rect=new cjs.Rectangle(-147.6,-279.4,301,546), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-112.5,-246.6,287.1,520.8), new cjs.Rectangle(-77.3,-213.8,273.2,495.6), new cjs.Rectangle(-42,-181.1,259.3,470.4), new cjs.Rectangle(-6.8,-148.2,245.5,445.2), new cjs.Rectangle(28.3,-115.5,231.6,420), new cjs.Rectangle(63.5,-82.7,217.7,394.8), new cjs.Rectangle(98.7,-49.9,203.8,369.6), new cjs.Rectangle(133.9,-17.1,189.9,344.4), new cjs.Rectangle(169.1,15.6,176,319.2), new cjs.Rectangle(204.3,48.4,162.1,294), new cjs.Rectangle(239.5,81.2,148.2,268.8), new cjs.Rectangle(274.7,114,134.3,243.6), new cjs.Rectangle(310,146.8,120.4,218.4), null];


(lib.egg_animation17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(134.8,229.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(65.6,-26.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(30.3,-127,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-112.3,202.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(13.4,-212,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-85.5,-190.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,3.4,0.849,0.849);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1,x:-5.6,y:-10.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-135.2,-258.7,286,516.8), new cjs.Rectangle(-135.8,-260.1,286.8,518.2), new cjs.Rectangle(-136.5,-261.6,287.5,519.7), new cjs.Rectangle(-137.2,-263.1,288.3,521.1), new cjs.Rectangle(-137.9,-264.6,289.1,522.5), new cjs.Rectangle(-138.6,-266,289.9,524), new cjs.Rectangle(-139.3,-267.4,290.7,525.4), new cjs.Rectangle(-139.9,-268.8,291.5,526.8), new cjs.Rectangle(-140.7,-270.3,292.3,528.3), new cjs.Rectangle(-141.3,-271.8,293,529.7), new cjs.Rectangle(-142,-273.3,293.9,531.1), new cjs.Rectangle(-142.7,-274.7,294.7,532.6), new cjs.Rectangle(-143.4,-276.2,295.5,534), new cjs.Rectangle(-144.1,-277.6,296.3,535.4), new cjs.Rectangle(-144.8,-279.1,297.1,536.8), new cjs.Rectangle(-145.5,-280.6,297.8,538.3), new cjs.Rectangle(-146.2,-282.1,298.6,539.7), new cjs.Rectangle(-146.8,-283.5,299.4,541.1), new cjs.Rectangle(-147.6,-284.9,300.2,542.6), rect=new cjs.Rectangle(-148.4,-286.5,301,544), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-113.1,-253.1,287.1,518.9), new cjs.Rectangle(-77.7,-219.7,273.2,493.8), new cjs.Rectangle(-42.3,-186.3,259.3,468.7), new cjs.Rectangle(-6.9,-152.8,245.5,443.6), new cjs.Rectangle(28.3,-119.4,231.6,418.5), new cjs.Rectangle(63.7,-86,217.7,393.4), new cjs.Rectangle(99.1,-52.6,203.8,368.3), new cjs.Rectangle(134.4,-19.1,189.9,343.2), new cjs.Rectangle(169.7,14.2,176,318.1), new cjs.Rectangle(205.1,47.7,162,292.9), new cjs.Rectangle(240.5,81.1,148.2,267.8), new cjs.Rectangle(275.9,114.5,134.3,242.7), new cjs.Rectangle(311.3,148,120.4,217.6), null];


(lib.egg_animation16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(145.8,240.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-27.4,-99.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(-53.5,-188.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-101.4,210.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(21.4,-227,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(72.5,68.2,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,3.4,0.841,0.841);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-142.3,-263.1,290.7,517.8), new cjs.Rectangle(-142.6,-263.9,291.5,519.2), new cjs.Rectangle(-143,-264.6,292.3,520.6), new cjs.Rectangle(-143.4,-265.4,293.1,522.1), new cjs.Rectangle(-143.8,-266.1,293.9,523.5), new cjs.Rectangle(-144.2,-266.9,294.7,524.9), new cjs.Rectangle(-144.6,-267.5,295.5,526.4), new cjs.Rectangle(-145,-268.3,296.4,527.8), new cjs.Rectangle(-145.4,-269,297.2,529.2), new cjs.Rectangle(-145.7,-269.8,298,530.7), new cjs.Rectangle(-146.1,-270.6,298.8,532.1), new cjs.Rectangle(-146.5,-271.2,299.6,533.5), new cjs.Rectangle(-146.9,-272,300.4,535), new cjs.Rectangle(-147.3,-272.7,301.2,536.4), new cjs.Rectangle(-147.7,-273.5,302,537.8), new cjs.Rectangle(-148.1,-274.2,302.8,539.3), new cjs.Rectangle(-148.5,-275,303.6,540.7), new cjs.Rectangle(-148.9,-275.7,304.4,542.1), new cjs.Rectangle(-149.3,-276.4,305.2,543.6), rect=new cjs.Rectangle(-149.8,-277.2,306,545), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-114.5,-244.6,291.9,519.9), new cjs.Rectangle(-79.3,-212.1,277.8,494.7), new cjs.Rectangle(-44,-179.5,263.7,469.6), new cjs.Rectangle(-8.8,-146.9,249.5,444.4), new cjs.Rectangle(26.4,-114.4,235.4,419.3), new cjs.Rectangle(61.6,-81.8,221.3,394.1), new cjs.Rectangle(96.9,-49.2,207.2,368.9), new cjs.Rectangle(132.1,-16.7,193,343.8), new cjs.Rectangle(167.3,15.8,178.9,318.6), new cjs.Rectangle(202.6,48.4,164.8,293.5), new cjs.Rectangle(237.8,81,150.6,268.3), new cjs.Rectangle(273.1,113.5,136.5,243.2), new cjs.Rectangle(308.3,146.1,122.4,218), null];


(lib.egg_animation15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(127.8,233.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-27.4,78,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(17.6,-195.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-105.5,208.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-49.6,-227,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(3.4,-109.1,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,3.4,0.881,0.881);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-149.1,-271.4,286,521.6), new cjs.Rectangle(-149.4,-272.1,286.8,523), new cjs.Rectangle(-149.8,-272.9,287.5,524.4), new cjs.Rectangle(-150.2,-273.7,288.3,525.9), new cjs.Rectangle(-150.6,-274.5,289.1,527.3), new cjs.Rectangle(-151,-275.2,289.9,528.8), new cjs.Rectangle(-151.5,-276,290.7,530.2), new cjs.Rectangle(-151.9,-276.7,291.5,531.7), new cjs.Rectangle(-152.3,-277.5,292.3,533.1), new cjs.Rectangle(-152.7,-278.3,293.1,534.6), new cjs.Rectangle(-153.1,-279,293.9,536), new cjs.Rectangle(-153.5,-279.8,294.7,537.5), new cjs.Rectangle(-154,-280.5,295.5,538.9), new cjs.Rectangle(-154.4,-281.3,296.3,540.3), new cjs.Rectangle(-154.8,-282.1,297.1,541.8), new cjs.Rectangle(-155.2,-282.8,297.8,543.2), new cjs.Rectangle(-155.6,-283.6,298.6,544.7), new cjs.Rectangle(-156,-284.3,299.4,546.1), new cjs.Rectangle(-156.4,-285.1,300.2,547.6), rect=new cjs.Rectangle(-156.9,-285.9,301,549), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-121.3,-252.9,287.1,523.7), new cjs.Rectangle(-85.8,-220,273.2,498.4), new cjs.Rectangle(-50.2,-187,259.3,473), new cjs.Rectangle(-14.6,-154,245.5,447.7), new cjs.Rectangle(20.9,-121,231.6,422.3), new cjs.Rectangle(56.5,-88.1,217.7,397), new cjs.Rectangle(92,-55.1,203.8,371.6), new cjs.Rectangle(127.6,-22.1,189.8,346.3), new cjs.Rectangle(163.1,10.8,176,321), new cjs.Rectangle(198.8,43.7,162.1,295.6), new cjs.Rectangle(234.3,76.7,148.2,270.3), new cjs.Rectangle(269.9,109.7,134.3,245), new cjs.Rectangle(305.5,142.6,120.4,219.6), null];


(lib.egg_animation14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(138.8,235.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(19.5,-239.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(0.6,32.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-122.5,208.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-33.5,-142,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,3.4,0.873,0.873);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-138.3,-269.6,286,520.6), new cjs.Rectangle(-138.6,-270.3,286.8,522.1), new cjs.Rectangle(-139,-271,287.5,523.5), new cjs.Rectangle(-139.3,-271.8,288.3,524.9), new cjs.Rectangle(-139.7,-272.6,289.1,526.3), new cjs.Rectangle(-140.1,-273.4,289.9,527.8), new cjs.Rectangle(-140.5,-274.1,290.7,529.3), new cjs.Rectangle(-140.9,-274.8,291.5,530.7), new cjs.Rectangle(-141.3,-275.6,292.3,532.2), new cjs.Rectangle(-141.7,-276.4,293,533.6), new cjs.Rectangle(-142,-277.1,293.9,535), new cjs.Rectangle(-142.4,-277.8,294.7,536.5), new cjs.Rectangle(-142.8,-278.6,295.5,537.9), new cjs.Rectangle(-143.2,-279.4,296.3,539.3), new cjs.Rectangle(-143.6,-280.2,297,540.8), new cjs.Rectangle(-144,-280.9,297.8,542.2), new cjs.Rectangle(-144.3,-281.7,298.6,543.7), new cjs.Rectangle(-144.7,-282.4,299.4,545.1), new cjs.Rectangle(-145.1,-283.1,300.2,546.6), rect=new cjs.Rectangle(-145.6,-283.9,301,548), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.5,-251,287.1,522.7), new cjs.Rectangle(-75.5,-218.2,273.2,497.4), new cjs.Rectangle(-40.4,-185.3,259.3,472.1), new cjs.Rectangle(-5.4,-152.4,245.5,446.9), new cjs.Rectangle(29.6,-119.5,231.6,421.6), new cjs.Rectangle(64.7,-86.7,217.7,396.3), new cjs.Rectangle(99.7,-53.8,203.8,371), new cjs.Rectangle(134.7,-20.9,189.9,345.7), new cjs.Rectangle(169.8,11.9,176,320.3), new cjs.Rectangle(204.9,44.8,162,295.1), new cjs.Rectangle(239.9,77.7,148.2,269.8), new cjs.Rectangle(274.9,110.5,134.3,244.5), new cjs.Rectangle(310,143.4,120.4,219.2), null];


(lib.egg_animation13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(28.8,227.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-32.6,35.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(64.6,-205.8,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-129.6,238.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(79.4,-104,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-60.5,-121,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9.setTransform(0.4,-4.6,0.909,0.909);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,y:3.4},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-135.2,-263,286,518.7), new cjs.Rectangle(-135.5,-263.7,286.8,520.1), new cjs.Rectangle(-135.9,-264.4,287.5,521.6), new cjs.Rectangle(-136.3,-265.2,288.3,523), new cjs.Rectangle(-136.7,-265.9,289.1,524.5), new cjs.Rectangle(-137,-266.7,289.9,525.8), new cjs.Rectangle(-137.4,-267.4,290.7,527.3), new cjs.Rectangle(-137.8,-268.1,291.5,528.8), new cjs.Rectangle(-138.2,-268.8,292.3,530.2), new cjs.Rectangle(-138.5,-269.6,293.1,531.6), new cjs.Rectangle(-138.9,-270.4,293.9,533.1), new cjs.Rectangle(-139.3,-271,294.7,534.5), new cjs.Rectangle(-139.7,-271.8,295.5,536), new cjs.Rectangle(-140,-272.5,296.3,537.4), new cjs.Rectangle(-140.4,-273.3,297,538.8), new cjs.Rectangle(-140.8,-274,297.8,540.3), new cjs.Rectangle(-141.2,-274.8,298.6,541.7), new cjs.Rectangle(-141.5,-275.5,299.4,543.1), new cjs.Rectangle(-141.9,-276.2,300.2,544.6), rect=new cjs.Rectangle(-142.4,-277,301,546), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-107.5,-244.4,287.1,520.8), new cjs.Rectangle(-72.6,-211.9,273.2,495.6), new cjs.Rectangle(-37.6,-179.3,259.3,470.4), new cjs.Rectangle(-2.7,-146.7,245.5,445.2), new cjs.Rectangle(32.1,-114.2,231.6,420), new cjs.Rectangle(67,-81.7,217.7,394.8), new cjs.Rectangle(101.9,-49.1,203.8,369.6), new cjs.Rectangle(136.8,-16.5,189.9,344.4), new cjs.Rectangle(171.6,16,176,319.2), new cjs.Rectangle(206.6,48.5,162.1,294), new cjs.Rectangle(241.5,81.1,148.2,268.8), new cjs.Rectangle(276.4,113.6,134.3,243.6), new cjs.Rectangle(311.3,146.2,120.4,218.4), null];


(lib.egg_animation12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(105.8,210.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-60.4,0.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(51.6,-103.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-43.4,223.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(34.6,-229,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-56.4,-133.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy12_mc();
	this.instance_9.setTransform(0.4,3.4,0.865,0.865);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-140.9,-262.7,286,517.8), new cjs.Rectangle(-141.2,-263.4,286.8,519.2), new cjs.Rectangle(-141.6,-264.1,287.5,520.6), new cjs.Rectangle(-142,-264.9,288.3,522.1), new cjs.Rectangle(-142.4,-265.6,289.1,523.5), new cjs.Rectangle(-142.8,-266.4,289.9,524.9), new cjs.Rectangle(-143.2,-267.1,290.7,526.4), new cjs.Rectangle(-143.6,-267.8,291.5,527.8), new cjs.Rectangle(-143.9,-268.5,292.3,529.2), new cjs.Rectangle(-144.3,-269.3,293,530.7), new cjs.Rectangle(-144.7,-270.1,293.9,532.1), new cjs.Rectangle(-145.1,-270.7,294.7,533.5), new cjs.Rectangle(-145.5,-271.5,295.5,535), new cjs.Rectangle(-145.9,-272.2,296.3,536.4), new cjs.Rectangle(-146.3,-273,297.1,537.8), new cjs.Rectangle(-146.7,-273.7,297.8,539.3), new cjs.Rectangle(-147.1,-274.5,298.6,540.7), new cjs.Rectangle(-147.5,-275.2,299.4,542.1), new cjs.Rectangle(-147.9,-275.9,300.2,543.6), rect=new cjs.Rectangle(-148.3,-276.7,301,545), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-113.1,-244.1,287.1,519.9), new cjs.Rectangle(-78,-211.6,273.2,494.7), new cjs.Rectangle(-42.8,-179,259.3,469.6), new cjs.Rectangle(-7.6,-146.5,245.5,444.4), new cjs.Rectangle(27.5,-114,231.6,419.3), new cjs.Rectangle(62.7,-81.4,217.7,394.1), new cjs.Rectangle(97.8,-48.9,203.8,368.9), new cjs.Rectangle(133,-16.3,189.9,343.8), new cjs.Rectangle(168.2,16.1,176,318.6), new cjs.Rectangle(203.4,48.7,162,293.5), new cjs.Rectangle(238.5,81.2,148.2,268.3), new cjs.Rectangle(273.7,113.8,134.3,243.2), new cjs.Rectangle(308.9,146.3,120.4,218), null];


(lib.egg_animation11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(128.6,231.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-11.7,35.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(-45.6,-87.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-105.6,208.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-9.7,-145,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-5.5,-261.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy11_mc();
	this.instance_9.setTransform(0.4,3.4,0.864,0.864);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-142.4,-270.4,286,519.7), new cjs.Rectangle(-142.7,-271.1,286.8,521.1), new cjs.Rectangle(-143.1,-271.8,287.5,522.5), new cjs.Rectangle(-143.5,-272.7,288.3,524), new cjs.Rectangle(-143.9,-273.4,289.1,525.4), new cjs.Rectangle(-144.3,-274.2,289.9,526.9), new cjs.Rectangle(-144.7,-274.9,290.7,528.3), new cjs.Rectangle(-145.1,-275.6,291.5,529.7), new cjs.Rectangle(-145.4,-276.4,292.3,531.2), new cjs.Rectangle(-145.8,-277.2,293,532.6), new cjs.Rectangle(-146.2,-278,293.9,534.1), new cjs.Rectangle(-146.6,-278.7,294.7,535.5), new cjs.Rectangle(-147,-279.4,295.5,536.9), new cjs.Rectangle(-147.4,-280.2,296.3,538.3), new cjs.Rectangle(-147.8,-281,297,539.8), new cjs.Rectangle(-148.2,-281.8,297.8,541.2), new cjs.Rectangle(-148.6,-282.5,298.6,542.7), new cjs.Rectangle(-149,-283.2,299.4,544.1), new cjs.Rectangle(-149.4,-284,300.2,545.6), rect=new cjs.Rectangle(-149.9,-284.8,301,547), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-114.6,-251.8,287.1,521.8), new cjs.Rectangle(-79.4,-219,273.2,496.5), new cjs.Rectangle(-44.1,-186,259.3,471.3), new cjs.Rectangle(-8.9,-153.1,245.5,446), new cjs.Rectangle(26.3,-120.2,231.6,420.8), new cjs.Rectangle(61.6,-87.3,217.7,395.5), new cjs.Rectangle(96.8,-54.4,203.8,370.3), new cjs.Rectangle(132,-21.5,189.9,345.1), new cjs.Rectangle(167.3,11.4,176,319.8), new cjs.Rectangle(202.5,44.3,162.1,294.6), new cjs.Rectangle(237.8,77.2,148.2,269.3), new cjs.Rectangle(273,110.1,134.3,244.1), new cjs.Rectangle(308.3,143.1,120.4,218.8), null];


(lib.egg_animation10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(129.8,238.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-111.4,210,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(63.6,-232.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(19.5,22.7,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-31.6,-147,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-57.5,-249,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy10_mc();
	this.instance_9.setTransform(0.4,3.4,0.885,0.885);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-140.2,-267.7,286,522.5), new cjs.Rectangle(-140.5,-268.4,286.8,524), new cjs.Rectangle(-140.9,-269.1,287.5,525.4), new cjs.Rectangle(-141.3,-269.9,288.3,526.8), new cjs.Rectangle(-141.7,-270.7,289.1,528.3), new cjs.Rectangle(-142.1,-271.4,289.9,529.7), new cjs.Rectangle(-142.5,-272.1,290.7,531.2), new cjs.Rectangle(-142.9,-272.9,291.5,532.6), new cjs.Rectangle(-143.3,-273.6,292.3,534.1), new cjs.Rectangle(-143.7,-274.4,293,535.5), new cjs.Rectangle(-144,-275.2,293.9,537), new cjs.Rectangle(-144.4,-275.9,294.7,538.4), new cjs.Rectangle(-144.8,-276.6,295.5,539.8), new cjs.Rectangle(-145.2,-277.4,296.3,541.3), new cjs.Rectangle(-145.6,-278.2,297,542.8), new cjs.Rectangle(-146,-278.9,297.8,544.2), new cjs.Rectangle(-146.4,-279.7,298.6,545.7), new cjs.Rectangle(-146.8,-280.4,299.4,547.1), new cjs.Rectangle(-147.2,-281.1,300.2,548.6), rect=new cjs.Rectangle(-147.6,-281.9,301,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-112.5,-249.1,287.1,524.6), new cjs.Rectangle(-77.3,-216.4,273.2,499.3), new cjs.Rectangle(-42.2,-183.5,259.3,473.9), new cjs.Rectangle(-7,-150.8,245.5,448.5), new cjs.Rectangle(28.1,-118,231.6,423.1), new cjs.Rectangle(63.2,-85.2,217.7,397.7), new cjs.Rectangle(98.3,-52.4,203.8,372.3), new cjs.Rectangle(133.4,-19.7,189.9,346.9), new cjs.Rectangle(168.6,13.1,176,321.6), new cjs.Rectangle(203.8,45.8,162.1,296.2), new cjs.Rectangle(238.9,78.6,148.2,270.8), new cjs.Rectangle(274,111.4,134.3,245.4), new cjs.Rectangle(309.2,144.2,120.4,220), null];


(lib.egg_animation9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(107.8,205.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-20.5,26.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(55.6,-62.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-139.6,241.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(26.4,-134,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(64.5,-218.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy9_mc();
	this.instance_9.setTransform(0.4,3.4,0.884,0.884);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-141.6,-271.1,286,521.6), new cjs.Rectangle(-141.9,-271.8,286.8,523), new cjs.Rectangle(-142.3,-272.6,287.5,524.4), new cjs.Rectangle(-142.7,-273.4,288.3,525.8), new cjs.Rectangle(-143.1,-274.1,289.1,527.3), new cjs.Rectangle(-143.5,-274.9,289.9,528.8), new cjs.Rectangle(-143.9,-275.6,290.7,530.2), new cjs.Rectangle(-144.3,-276.4,291.5,531.7), new cjs.Rectangle(-144.7,-277.1,292.3,533.1), new cjs.Rectangle(-145.1,-277.9,293,534.6), new cjs.Rectangle(-145.5,-278.7,293.9,536), new cjs.Rectangle(-145.9,-279.4,294.7,537.5), new cjs.Rectangle(-146.2,-280.2,295.5,538.9), new cjs.Rectangle(-146.6,-280.9,296.3,540.3), new cjs.Rectangle(-147,-281.7,297.1,541.8), new cjs.Rectangle(-147.4,-282.5,297.8,543.2), new cjs.Rectangle(-147.8,-283.3,298.6,544.7), new cjs.Rectangle(-148.2,-284,299.4,546.1), new cjs.Rectangle(-148.6,-284.7,300.2,547.6), rect=new cjs.Rectangle(-149.1,-285.5,301,549), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-113.9,-252.6,287.1,523.7), new cjs.Rectangle(-78.7,-219.6,273.2,498.4), new cjs.Rectangle(-43.4,-186.6,259.3,473), new cjs.Rectangle(-8.2,-153.7,245.5,447.7), new cjs.Rectangle(26.9,-120.8,231.6,422.3), new cjs.Rectangle(62.1,-87.8,217.7,397), new cjs.Rectangle(97.3,-54.9,203.8,371.6), new cjs.Rectangle(132.5,-21.9,189.9,346.3), new cjs.Rectangle(167.7,11,176,321), new cjs.Rectangle(203,43.9,162.1,295.6), new cjs.Rectangle(238.2,76.9,148.2,270.3), new cjs.Rectangle(273.4,109.8,134.3,245), new cjs.Rectangle(308.6,142.8,120.4,219.6), null];


(lib.egg_animation8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(111.8,207.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-44.6,-34.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(39.6,-55.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-131.6,234.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(37.4,-139,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-68.5,-227.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy8_mc();
	this.instance_9.setTransform(0.4,7.4,0.904,0.904);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,y:3.4},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-141.2,-266.4,286,517.8), new cjs.Rectangle(-141.5,-267.1,286.8,519.2), new cjs.Rectangle(-141.9,-267.9,287.5,520.6), new cjs.Rectangle(-142.3,-268.7,288.3,522.1), new cjs.Rectangle(-142.7,-269.4,289.1,523.5), new cjs.Rectangle(-143.1,-270.2,289.9,524.9), new cjs.Rectangle(-143.5,-270.9,290.7,526.3), new cjs.Rectangle(-143.9,-271.6,291.5,527.8), new cjs.Rectangle(-144.3,-272.4,292.3,529.2), new cjs.Rectangle(-144.7,-273.2,293,530.7), new cjs.Rectangle(-145.1,-273.9,293.9,532.1), new cjs.Rectangle(-145.5,-274.6,294.7,533.5), new cjs.Rectangle(-145.9,-275.4,295.5,535), new cjs.Rectangle(-146.2,-276.1,296.3,536.4), new cjs.Rectangle(-146.6,-276.9,297.1,537.8), new cjs.Rectangle(-147,-277.7,297.8,539.3), new cjs.Rectangle(-147.4,-278.4,298.6,540.7), new cjs.Rectangle(-147.8,-279.1,299.4,542.1), new cjs.Rectangle(-148.2,-279.8,300.2,543.6), rect=new cjs.Rectangle(-148.7,-280.6,301,545), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-113.5,-247.9,287.1,519.9), new cjs.Rectangle(-78.3,-215.2,273.2,494.7), new cjs.Rectangle(-43.1,-182.4,259.3,469.6), new cjs.Rectangle(-7.9,-149.7,245.5,444.4), new cjs.Rectangle(27.2,-117,231.6,419.3), new cjs.Rectangle(62.4,-84.3,217.7,394.1), new cjs.Rectangle(97.6,-51.5,203.8,368.9), new cjs.Rectangle(132.8,-18.8,189.9,343.8), new cjs.Rectangle(168,13.8,176,318.6), new cjs.Rectangle(203.2,46.5,162,293.5), new cjs.Rectangle(238.4,79.3,148.2,268.3), new cjs.Rectangle(273.6,112,134.3,243.2), new cjs.Rectangle(308.8,144.7,120.4,218), null];


(lib.egg_animation7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(134.8,232.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(78.6,-58.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(-76.7,-58.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-18.6,185.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(23.4,-149,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-68.7,-235.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy7_mc();
	this.instance_9.setTransform(0.4,3.4,0.903,0.903);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-148.2,-270.4,290.7,521.6), new cjs.Rectangle(-148.5,-271.1,291.5,523), new cjs.Rectangle(-148.9,-271.9,292.3,524.4), new cjs.Rectangle(-149.4,-272.7,293.1,525.9), new cjs.Rectangle(-149.8,-273.5,293.9,527.3), new cjs.Rectangle(-150.2,-274.2,294.7,528.8), new cjs.Rectangle(-150.6,-274.9,295.5,530.2), new cjs.Rectangle(-151,-275.7,296.4,531.7), new cjs.Rectangle(-151.4,-276.5,297.2,533.1), new cjs.Rectangle(-151.8,-277.3,298,534.6), new cjs.Rectangle(-152.2,-278,298.8,536), new cjs.Rectangle(-152.7,-278.7,299.5,537.5), new cjs.Rectangle(-153.1,-279.5,300.4,538.9), new cjs.Rectangle(-153.5,-280.2,301.2,540.3), new cjs.Rectangle(-153.9,-281.1,302,541.8), new cjs.Rectangle(-154.3,-281.8,302.8,543.2), new cjs.Rectangle(-154.7,-282.6,303.6,544.7), new cjs.Rectangle(-155.1,-283.3,304.4,546.1), new cjs.Rectangle(-155.5,-284,305.2,547.6), rect=new cjs.Rectangle(-156,-284.8,306,549), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-120.5,-251.9,291.9,523.7), new cjs.Rectangle(-85,-219,277.8,498.4), new cjs.Rectangle(-49.4,-186,263.7,473), new cjs.Rectangle(-13.9,-153.1,249.5,447.7), new cjs.Rectangle(21.6,-120.2,235.4,422.3), new cjs.Rectangle(57.1,-87.3,221.3,397), new cjs.Rectangle(92.6,-54.4,207.2,371.6), new cjs.Rectangle(128.1,-21.5,193,346.3), new cjs.Rectangle(163.7,11.4,178.9,321), new cjs.Rectangle(199.2,44.3,164.8,295.6), new cjs.Rectangle(234.8,77.2,150.6,270.3), new cjs.Rectangle(270.3,110.1,136.5,245), new cjs.Rectangle(305.8,143,122.4,219.6), null];


(lib.egg_animation6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(129.8,228.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(53.6,-53,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(32.5,-139.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-61.6,108.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(82.4,-229.8,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-50.5,-237.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy6_mc();
	this.instance_9.setTransform(0.4,3.4,0.877,0.877);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-142.3,-269.5,286,522.5), new cjs.Rectangle(-142.6,-270.2,286.8,524), new cjs.Rectangle(-143,-271,287.5,525.4), new cjs.Rectangle(-143.4,-271.8,288.3,526.8), new cjs.Rectangle(-143.8,-272.6,289.1,528.3), new cjs.Rectangle(-144.2,-273.3,289.9,529.7), new cjs.Rectangle(-144.6,-274,290.7,531.2), new cjs.Rectangle(-145,-274.8,291.5,532.6), new cjs.Rectangle(-145.4,-275.5,292.3,534.1), new cjs.Rectangle(-145.7,-276.3,293.1,535.5), new cjs.Rectangle(-146.1,-277.1,293.9,537), new cjs.Rectangle(-146.5,-277.8,294.7,538.4), new cjs.Rectangle(-146.9,-278.6,295.5,539.9), new cjs.Rectangle(-147.3,-279.3,296.3,541.3), new cjs.Rectangle(-147.7,-280.1,297.1,542.8), new cjs.Rectangle(-148.1,-280.9,297.8,544.2), new cjs.Rectangle(-148.5,-281.6,298.6,545.7), new cjs.Rectangle(-148.9,-282.3,299.4,547.1), new cjs.Rectangle(-149.3,-283.1,300.2,548.6), rect=new cjs.Rectangle(-149.8,-283.9,301,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-114.5,-251,287.1,524.6), new cjs.Rectangle(-79.3,-218.1,273.2,499.3), new cjs.Rectangle(-44,-185.2,259.3,473.9), new cjs.Rectangle(-8.8,-152.4,245.5,448.5), new cjs.Rectangle(26.4,-119.5,231.6,423.1), new cjs.Rectangle(61.6,-86.7,217.7,397.7), new cjs.Rectangle(96.9,-53.7,203.8,372.3), new cjs.Rectangle(132.1,-20.9,189.8,346.9), new cjs.Rectangle(167.3,11.9,176,321.6), new cjs.Rectangle(202.6,44.8,162,296.2), new cjs.Rectangle(237.8,77.7,148.2,270.8), new cjs.Rectangle(273.1,110.5,134.3,245.4), new cjs.Rectangle(308.3,143.4,120.4,220), null];


(lib.egg_animation5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(85.8,200.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-49.6,99,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(37.6,-246.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-141.6,226.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(20.6,-144,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-40.6,-79.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy5_mc();
	this.instance_9.setTransform(0.4,3.4,0.895,0.895);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-148.1,-277.5,286,521.6), new cjs.Rectangle(-148.4,-278.2,286.8,523), new cjs.Rectangle(-148.8,-279,287.5,524.4), new cjs.Rectangle(-149.2,-279.8,288.3,525.9), new cjs.Rectangle(-149.6,-280.6,289.1,527.3), new cjs.Rectangle(-150,-281.4,289.9,528.8), new cjs.Rectangle(-150.5,-282.1,290.7,530.2), new cjs.Rectangle(-150.9,-282.9,291.5,531.7), new cjs.Rectangle(-151.3,-283.7,292.3,533.1), new cjs.Rectangle(-151.7,-284.5,293,534.6), new cjs.Rectangle(-152.1,-285.3,293.9,536), new cjs.Rectangle(-152.5,-286,294.7,537.5), new cjs.Rectangle(-152.9,-286.8,295.5,538.9), new cjs.Rectangle(-153.3,-287.6,296.3,540.3), new cjs.Rectangle(-153.7,-288.4,297.1,541.8), new cjs.Rectangle(-154.2,-289.2,297.8,543.2), new cjs.Rectangle(-154.6,-290,298.6,544.7), new cjs.Rectangle(-155,-290.7,299.4,546.1), new cjs.Rectangle(-155.4,-291.5,300.2,547.6), rect=new cjs.Rectangle(-155.9,-292.3,301,549), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-120.3,-259,287.1,523.7), new cjs.Rectangle(-84.8,-225.8,273.2,498.4), new cjs.Rectangle(-49.3,-192.5,259.3,473), new cjs.Rectangle(-13.8,-159.2,245.5,447.7), new cjs.Rectangle(21.7,-126,231.6,422.3), new cjs.Rectangle(57.2,-92.7,217.7,397), new cjs.Rectangle(92.7,-59.4,203.8,371.6), new cjs.Rectangle(128.2,-26.2,189.9,346.3), new cjs.Rectangle(163.8,7,176,321), new cjs.Rectangle(199.3,40.3,162.1,295.6), new cjs.Rectangle(234.8,73.6,148.2,270.3), new cjs.Rectangle(270.3,106.8,134.3,245), new cjs.Rectangle(305.9,140.1,120.4,219.6), null];


(lib.egg_animation4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(104.8,210.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-24.6,-249.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(36.6,-123.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-136.6,229.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-14.5,72,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-41.5,-59.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy4_mc();
	this.instance_9.setTransform(0.4,2.4,0.911,0.911);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,y:3.4},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-141.2,-267.9,286,519.7), new cjs.Rectangle(-141.5,-268.6,286.8,521.1), new cjs.Rectangle(-141.9,-269.4,287.5,522.5), new cjs.Rectangle(-142.3,-270.2,288.3,524), new cjs.Rectangle(-142.7,-270.9,289.1,525.4), new cjs.Rectangle(-143.1,-271.7,289.9,526.9), new cjs.Rectangle(-143.5,-272.4,290.7,528.3), new cjs.Rectangle(-143.8,-273.1,291.5,529.7), new cjs.Rectangle(-144.2,-273.9,292.3,531.2), new cjs.Rectangle(-144.6,-274.7,293.1,532.6), new cjs.Rectangle(-145,-275.4,293.9,534.1), new cjs.Rectangle(-145.4,-276.1,294.7,535.5), new cjs.Rectangle(-145.8,-276.9,295.5,536.9), new cjs.Rectangle(-146.2,-277.6,296.3,538.3), new cjs.Rectangle(-146.6,-278.4,297,539.8), new cjs.Rectangle(-147,-279.2,297.8,541.2), new cjs.Rectangle(-147.4,-279.9,298.6,542.7), new cjs.Rectangle(-147.8,-280.6,299.4,544.1), new cjs.Rectangle(-148.2,-281.4,300.2,545.6), rect=new cjs.Rectangle(-148.6,-282.2,301,547), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-113.4,-249.4,287.1,521.8), new cjs.Rectangle(-78.2,-216.6,273.2,496.5), new cjs.Rectangle(-43,-183.8,259.3,471.3), new cjs.Rectangle(-7.8,-151,245.5,446), new cjs.Rectangle(27.3,-118.2,231.6,420.8), new cjs.Rectangle(62.5,-85.4,217.7,395.6), new cjs.Rectangle(97.6,-52.6,203.8,370.3), new cjs.Rectangle(132.8,-19.8,189.8,345.1), new cjs.Rectangle(168,12.9,176,319.8), new cjs.Rectangle(203.2,45.7,162.1,294.6), new cjs.Rectangle(238.4,78.5,148.2,269.3), new cjs.Rectangle(273.6,111.3,134.3,244.1), new cjs.Rectangle(308.8,144.1,120.4,218.8), null];


(lib.egg_animation3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(119.8,244.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(69.6,-24.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(66.6,-251.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-30.6,212.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-35.6,-140,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-142.5,238.1,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy3_mc();
	this.instance_9.setTransform(-4.6,23.4,0.87,0.87);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:1,scaleY:1},20).wait(81).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), rect=new cjs.Rectangle(-150.6,-272.1,301,548), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-151,-272.1,301.4,548), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-150.6,-272.1,301,548), new cjs.Rectangle(-115.2,-240.4,287.1,522.7), new cjs.Rectangle(-79.7,-208.7,273.2,497.4), new cjs.Rectangle(-44.3,-177,259.3,472.1), new cjs.Rectangle(-8.9,-145.2,245.5,446.9), new cjs.Rectangle(26.5,-113.6,231.6,421.6), new cjs.Rectangle(61.9,-81.8,217.7,396.3), new cjs.Rectangle(97.4,-50.1,203.8,371), new cjs.Rectangle(132.8,-18.4,189.9,345.7), new cjs.Rectangle(168.2,13.2,176,320.4), new cjs.Rectangle(203.6,45,162,295.1), new cjs.Rectangle(239,76.7,148.2,269.8), new cjs.Rectangle(274.5,108.4,134.3,244.5), new cjs.Rectangle(310,140.1,120.4,219.2), null];


(lib.egg_animation2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(125.8,236.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(35.6,-49.9,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(60.4,-223.8,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-138.6,219.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-30.6,-132,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-41.5,-220.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy2_mc();
	this.instance_9.setTransform(0.4,3.4,0.873,0.873);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1,x:-2.6},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-149.3,-268.6,286,522.5), new cjs.Rectangle(-149.8,-269.3,286.8,524), new cjs.Rectangle(-150.3,-270,287.5,525.4), new cjs.Rectangle(-150.9,-270.8,288.3,526.8), new cjs.Rectangle(-151.5,-271.6,289.1,528.3), new cjs.Rectangle(-152,-272.3,289.9,529.7), new cjs.Rectangle(-152.6,-273.1,290.7,531.2), new cjs.Rectangle(-153.2,-273.8,291.5,532.6), new cjs.Rectangle(-153.7,-274.6,292.3,534.1), new cjs.Rectangle(-154.3,-275.4,293,535.5), new cjs.Rectangle(-154.9,-276.1,293.9,537), new cjs.Rectangle(-155.5,-276.8,294.7,538.4), new cjs.Rectangle(-156,-277.6,295.5,539.9), new cjs.Rectangle(-156.6,-278.3,296.3,541.3), new cjs.Rectangle(-157.2,-279.1,297,542.8), new cjs.Rectangle(-157.7,-279.9,297.8,544.2), new cjs.Rectangle(-158.4,-280.6,298.6,545.7), new cjs.Rectangle(-158.9,-281.3,299.4,547.1), new cjs.Rectangle(-159.5,-282.1,300.2,548.6), rect=new cjs.Rectangle(-160.2,-282.9,301,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-124.4,-250,287.1,524.6), new cjs.Rectangle(-88.6,-217.2,273.2,499.3), new cjs.Rectangle(-52.8,-184.4,259.3,473.9), new cjs.Rectangle(-17,-151.6,245.5,448.5), new cjs.Rectangle(18.8,-118.7,231.6,423.1), new cjs.Rectangle(54.6,-85.9,217.7,397.7), new cjs.Rectangle(90.4,-53.1,203.7,372.3), new cjs.Rectangle(126.2,-20.3,189.9,346.9), new cjs.Rectangle(162,12.5,176,321.6), new cjs.Rectangle(197.9,45.3,162,296.2), new cjs.Rectangle(233.7,78.2,148.2,270.8), new cjs.Rectangle(269.5,111,134.3,245.4), new cjs.Rectangle(305.4,143.8,120.4,220), null];


(lib.egg_animation1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(96.8,210.6,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-132.4,239,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(57.6,-47.1,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-31.6,66.7,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(-35.6,-144,0.77,0.77,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-48.6,-252.8,0.77,0.77,0,0,0,0.5,0.5);

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
	this.instance_9 = new lib.boy1_mc();
	this.instance_9.setTransform(0.4,3.4,0.884,0.884);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({scaleX:0.95,scaleY:0.95},20).wait(1).to({scaleX:1,scaleY:1},19).wait(61).to({scaleX:0.4,scaleY:0.4,x:368.4,y:258.3,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.egg_bottom2_mc();
	this.instance_10.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-11.7,x:10.2,y:49},19).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:-11.7,x:10.2,y:49},20).to({rotation:9.7,x:-8.4,y:49.3},20).to({rotation:0,x:0,y:50},20).to({y:335},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, new cjs.Rectangle(-213.6,-276.3,427.4,548.6), new cjs.Rectangle(-216.3,-278.1,432.8,552.2), new cjs.Rectangle(-219.4,-280.6,438.9,557.1), new cjs.Rectangle(-222,-282.3,444.2,560.5), new cjs.Rectangle(-225.2,-284.7,450.3,565.3), new cjs.Rectangle(-227.7,-286.5,455.5,568.8), new cjs.Rectangle(-230.8,-288.8,461.5,573.5), new cjs.Rectangle(-233.3,-290.6,466.5,576.9), new cjs.Rectangle(-236.3,-292.9,472.4,581.5), new cjs.Rectangle(-238.8,-294.6,477.4,584.9), new cjs.Rectangle(-241.7,-296.8,483.1,589.4), new cjs.Rectangle(-244.1,-298.4,488,592.6), new cjs.Rectangle(-247.1,-300.7,493.7,597.1), new cjs.Rectangle(-249.4,-302.2,498.4,600.3), new cjs.Rectangle(-252.3,-304.3,504,604.6), new cjs.Rectangle(-254.6,-305.9,508.7,607.8), new cjs.Rectangle(-257.3,-308,514.1,612), new cjs.Rectangle(-259.6,-309.5,518.7,615.1), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-249,-302.3,498.7,600.6), new cjs.Rectangle(-244.7,-299.1,489.8,593.9), new cjs.Rectangle(-240.2,-295.7,480.9,587), new cjs.Rectangle(-235.3,-291.6,471,578.5), new cjs.Rectangle(-230.8,-288.1,461.8,571.4), new cjs.Rectangle(-226,-284.6,452.3,564.2), new cjs.Rectangle(-221,-280.3,442,555.6), new cjs.Rectangle(-216.1,-276.6,432.3,548.1), new cjs.Rectangle(-211.3,-272.9,422.5,540.7), new cjs.Rectangle(-215.6,-276.4,431.3,547.7), new cjs.Rectangle(-220.5,-280,441,555), new cjs.Rectangle(-225.3,-283.6,450.5,562.2), new cjs.Rectangle(-230,-287.2,460,569.2), new cjs.Rectangle(-235.2,-291.2,470,577.5), new cjs.Rectangle(-239.7,-294.6,479.2,584.3), new cjs.Rectangle(-244.1,-297.9,488.1,591.1), new cjs.Rectangle(-249.1,-301.7,497.6,598.9), new cjs.Rectangle(-253.4,-304.9,506.2,605.5), new cjs.Rectangle(-257.6,-308,514.8,611.9), new cjs.Rectangle(-262.5,-311.7,524.2,619.5), new cjs.Rectangle(-257.7,-307.9,514.9,611.8), new cjs.Rectangle(-253.4,-304.9,506.3,605.5), new cjs.Rectangle(-249.1,-301.6,497.7,598.8), new cjs.Rectangle(-244.2,-297.9,488.3,591.1), new cjs.Rectangle(-239.8,-294.5,479.3,584.3), new cjs.Rectangle(-235.2,-291.2,470.1,577.5), new cjs.Rectangle(-230,-287.1,460.1,569.2), new cjs.Rectangle(-225.4,-283.6,450.7,562.1), new cjs.Rectangle(-220.6,-280,441.1,555), new cjs.Rectangle(-215.7,-276.4,431.4,547.7), new cjs.Rectangle(-211.2,-272.9,422.5,540.6), new cjs.Rectangle(-216.1,-276.6,432.2,548.1), new cjs.Rectangle(-220.9,-280.3,441.8,555.5), new cjs.Rectangle(-226,-284.6,452.2,564.2), new cjs.Rectangle(-230.7,-288.1,461.7,571.4), new cjs.Rectangle(-235.3,-291.6,470.9,578.6), new cjs.Rectangle(-240.2,-295.7,480.8,586.9), new cjs.Rectangle(-244.6,-299.1,489.8,593.8), new cjs.Rectangle(-249,-302.3,498.6,600.5), new cjs.Rectangle(-253.7,-306.2,508.1,608.5), new cjs.Rectangle(-251.3,-304.1,503.2,604.2), new cjs.Rectangle(-249.6,-303.3,499.9,602.5), new cjs.Rectangle(-247.5,-301.7,495.7,599.3), new cjs.Rectangle(-245.5,-300.2,491.6,596.3), new cjs.Rectangle(-243.4,-298.7,487.4,593.3), new cjs.Rectangle(-241.4,-297.1,483.3,590), new cjs.Rectangle(-239.3,-295.5,479.1,586.9), new cjs.Rectangle(-237.2,-294,474.9,583.8), new cjs.Rectangle(-235,-292.3,470.5,580.5), new cjs.Rectangle(-232.9,-290.7,466.3,577.2), new cjs.Rectangle(-230.8,-289.1,461.9,573.9), new cjs.Rectangle(-228.6,-287.4,457.5,570.5), new cjs.Rectangle(-226.4,-285.8,453,567.4), new cjs.Rectangle(-224.2,-284.1,448.5,564), new cjs.Rectangle(-222,-282.4,444,560.7), new cjs.Rectangle(-219.8,-280.8,439.6,557.3), new cjs.Rectangle(-217.5,-279,435,553.9), new cjs.Rectangle(-215.2,-277.2,430.4,550.5), new cjs.Rectangle(-212.9,-275.6,425.7,547.2), new cjs.Rectangle(-211,-274.5,422,545), new cjs.Rectangle(-211,-294,422,578.8), new cjs.Rectangle(-211,-313.5,422,612.5), new cjs.Rectangle(-211,-333,422,646.3), new cjs.Rectangle(-211,-352.5,422,680), new cjs.Rectangle(-211,-372,422,713.8), new cjs.Rectangle(-211,-391.5,422,747.5), new cjs.Rectangle(-211,-411,422,781.3), new cjs.Rectangle(-211,-430.5,422,815), new cjs.Rectangle(-211,-450,422,848.8), new cjs.Rectangle(-211,-469.5,422,882.5), new cjs.Rectangle(-211,-489,422,916.3), new cjs.Rectangle(-211,-508.5,422,950), new cjs.Rectangle(-211,-528,422,983.8), new cjs.Rectangle(-211,-547.5,422,1017.5), new cjs.Rectangle(-211,-567,422,1051.3), new cjs.Rectangle(-211,-586.5,422,1085), new cjs.Rectangle(-211,-606,422,1118.8), new cjs.Rectangle(-211,-625.5,422,1152.5), new cjs.Rectangle(-211,-645,422,1186.3), new cjs.Rectangle(-211,-664.5,422,1220), new cjs.Rectangle(-141.3,-267.5,286,524.4), new cjs.Rectangle(-141.6,-268.2,286.8,525.8), new cjs.Rectangle(-142,-268.9,287.5,527.3), new cjs.Rectangle(-142.4,-269.7,288.3,528.8), new cjs.Rectangle(-142.8,-270.5,289.1,530.2), new cjs.Rectangle(-143.2,-271.2,289.9,531.7), new cjs.Rectangle(-143.5,-271.9,290.7,533.1), new cjs.Rectangle(-143.9,-272.7,291.5,534.6), new cjs.Rectangle(-144.3,-273.4,292.3,536), new cjs.Rectangle(-144.7,-274.2,293.1,537.5), new cjs.Rectangle(-145.1,-275,293.9,538.9), new cjs.Rectangle(-145.5,-275.7,294.7,540.3), new cjs.Rectangle(-145.9,-276.4,295.5,541.8), new cjs.Rectangle(-146.3,-277.2,296.3,543.3), new cjs.Rectangle(-146.7,-278,297,544.7), new cjs.Rectangle(-147.1,-278.7,297.8,546.2), new cjs.Rectangle(-147.5,-279.5,298.6,547.7), new cjs.Rectangle(-147.9,-280.2,299.4,549.1), new cjs.Rectangle(-148.3,-280.9,300.2,550.6), rect=new cjs.Rectangle(-148.7,-281.7,301,552), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-113.5,-248.9,287.1,526.5), new cjs.Rectangle(-78.3,-216.2,273.2,501.1), new cjs.Rectangle(-43.1,-183.4,259.3,475.6), new cjs.Rectangle(-7.9,-150.6,245.5,450.1), new cjs.Rectangle(27.2,-117.9,231.6,424.6), new cjs.Rectangle(62.4,-85.1,217.7,399.2), new cjs.Rectangle(97.6,-52.3,203.8,373.7), new cjs.Rectangle(132.8,-19.5,189.9,348.2), new cjs.Rectangle(167.9,13.2,176,322.7), new cjs.Rectangle(203.2,45.9,162,297.3), new cjs.Rectangle(238.3,78.7,148.2,271.8), new cjs.Rectangle(273.5,111.5,134.3,246.3), new cjs.Rectangle(308.7,144.3,120.4,220.8), null];


(lib.egg_animation_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_0_mc = new lib.egg_animation22_mc();

	this.frame_1_mc = new lib.egg_animation1_mc();

	this.frame_2_mc = new lib.egg_animation2_mc();

	this.frame_3_mc = new lib.egg_animation3_mc();

	this.frame_4_mc = new lib.egg_animation4_mc();

	this.frame_5_mc = new lib.egg_animation5_mc();

	this.frame_6_mc = new lib.egg_animation6_mc();

	this.frame_7_mc = new lib.egg_animation7_mc();

	this.frame_8_mc = new lib.egg_animation8_mc();

	this.frame_9_mc = new lib.egg_animation9_mc();

	this.frame_10_mc = new lib.egg_animation10_mc();

	this.frame_11_mc = new lib.egg_animation11_mc();

	this.frame_12_mc = new lib.egg_animation12_mc();

	this.frame_13_mc = new lib.egg_animation13_mc();

	this.frame_14_mc = new lib.egg_animation14_mc();

	this.frame_15_mc = new lib.egg_animation15_mc();

	this.frame_16_mc = new lib.egg_animation16_mc();

	this.frame_17_mc = new lib.egg_animation17_mc();

	this.frame_18_mc = new lib.egg_animation18_mc();

	this.frame_19_mc = new lib.egg_animation19_mc();

	this.frame_20_mc = new lib.egg_animation20_mc();

	this.frame_21_mc = new lib.egg_animation21_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_0_mc}]}).to({state:[{t:this.frame_1_mc}]},1).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.frame_9_mc}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.frame_11_mc}]},1).to({state:[{t:this.frame_12_mc}]},1).to({state:[{t:this.frame_13_mc}]},1).to({state:[{t:this.frame_14_mc}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.frame_16_mc}]},1).to({state:[{t:this.frame_17_mc}]},1).to({state:[{t:this.frame_18_mc}]},1).to({state:[{t:this.frame_19_mc}]},1).to({state:[{t:this.frame_20_mc}]},1).to({state:[{t:this.frame_21_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211,-274.5,422,545);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.barbie_star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.loop = false;
		_body_mc.visible = false;
		/*
		
		*/
		var _timeOut_id;
		/*
		
		*/
		function _initAnimationBarbieStarFunc()
		{
			if(_timeOut_id != null)
			{
				clearTimeout(_timeOut_id);
			}
			timeOut_id = setTimeout(_startAnimationBarbieStarFunc, 1000 + (Math.random() * 2000));
		}
		/*
		
		*/
		function _startAnimationBarbieStarFunc()
		{
			try
			{
				/*
				
				*/
				_body_mc.gotoAndPlay(0);
				_body_mc.visible = true;
				/*
				
				*/
				_initAnimationBarbieStarFunc();
			}
			catch(event)
			{
				
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		_initAnimationBarbieStarFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.barbie_star_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137,-140,280,280);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_2_mc();
	this.instance.setTransform(-59.3,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-63,144,126.1);
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
p.nominalBounds = rect = new cjs.Rectangle(-210,-20,1220,630);
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


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_star_mc();
	this.instance.setTransform(-19,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.title_img();
	this.instance_1.setTransform(-210,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(193,-52);

	this.instance_3 = new lib.barbie_star_mc();
	this.instance_3.setTransform(-195,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-332,-192,668,310);
p.frameBounds = [rect];


(lib.popUpGame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.egg_animation_all_mc();
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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.heroes_main_img();
	this.instance.setTransform(67,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.barbie_star_mc();
	this.instance_1.setTransform(715,166);

	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(65,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,26,930,661);
p.frameBounds = [rect];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvmMgIAA4/IfNAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-63,144,126.1);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-100,-80,200,160)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(50,560);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(100,900);
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
	this.instance.setTransform(390,535);

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
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,1040);
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
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(745,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
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
p.nominalBounds = rect = new cjs.Rectangle(-210,-211.9,1220,1075);
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
	this.moreGames_btn.setTransform(710,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
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
p.nominalBounds = rect = new cjs.Rectangle(-210,-330,1220,1293.1);
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
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,1040), new cjs.Rectangle(-210,-211.9,1220,1075), new cjs.Rectangle(-210,-330,1220,1293.1), new cjs.Rectangle(-200,-51,1200,651), new cjs.Rectangle(-200,-10,1200,610), new cjs.Rectangle(30.7,33.7,261.5,70.5), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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