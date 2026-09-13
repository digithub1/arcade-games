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
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,600,600],[602,502,500,500],[602,0,500,500],[0,602,600,600]]},
		{name:"storage_atlas_6", frames: [[0,502,500,500],[0,0,500,500],[502,0,560,393],[0,1004,1200,200],[502,677,640,280],[502,395,640,280]]},
		{name:"storage_atlas_7", frames: [[0,302,250,460],[0,0,500,300],[252,302,320,320],[322,624,320,320],[322,946,320,320],[896,0,320,320],[0,764,320,320],[644,322,320,320],[966,322,320,320],[574,0,320,320],[644,644,320,320],[644,966,320,320],[966,644,320,320],[966,966,320,320]]},
		{name:"storage_atlas_8", frames: [[1142,1138,70,50],[584,1158,180,100],[968,1198,250,40],[968,1240,70,50],[584,584,190,190],[968,954,120,120],[1243,978,50,50],[322,0,240,360],[968,1076,120,120],[222,1198,40,100],[1147,244,120,120],[1138,0,120,120],[968,832,120,120],[1138,122,120,120],[876,282,80,600],[838,1256,36,36],[584,776,190,190],[0,614,290,290],[564,0,290,290],[292,654,290,290],[292,362,290,290],[0,322,290,290],[292,946,290,290],[584,292,290,290],[0,906,290,290],[0,1198,220,80],[958,616,340,80],[584,968,186,188],[1249,366,40,55],[1260,0,40,43],[1184,1273,10,11],[1212,820,69,94],[1147,366,100,73],[1243,916,57,60],[1142,954,99,100],[264,1198,23,38],[1184,1240,31,31],[264,1238,50,50],[1220,1138,40,147],[1146,455,150,142],[1090,954,50,210],[776,584,50,297],[772,1076,194,178],[958,282,187,171],[958,698,187,132],[958,455,186,159],[1040,1240,70,50],[856,0,280,280],[776,884,190,190],[1142,1056,80,80],[766,1256,70,40],[1224,1056,64,64],[1147,698,120,120],[1090,832,120,120],[1112,1240,70,50],[0,0,320,320]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.back_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bat_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_bar_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_btn_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_picture_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_picture_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_picture_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_picture_4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fixation_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.geometric_border_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hint_drag_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.page_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.planet_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.shadow_color_swatch_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.substrate_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



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


(lib.shadow_color_swatch_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_color_swatch_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,70,40);
p.frameBounds = [rect];


(lib.part_11_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlkKQIgXh/IAGgJQgSgLgSgNQhJgzgNhZQgEgVAAgYQAAgvALgvIAQgMQBlhOBvgwQB/g4B5gCQAYgRAcgOQBXg0BbgsQDahnCMAAQBeAAA6AnQAOAKAMAMQkCBliHBkQhJA2hCBKIgbAhIgVAiIgHAMQihEEgJAXIhUAPQADgEgFABIACADQg+AghEAqQhQAzgwApIgLhEgAnnhWQgTg2hXiAIADABIgDgBIAAAAIgBgBQhIgWhXgqQB6g0AggaQA3guAAhYQAAgegTg/IgYhHIgDgBIAAAAIgCgBIgcgMIAgAEIACAAIAAAAQBNAIAvADIAFAJQCdEOEzgVQAqBaAABuIgFByIgDBMQhjgSicAtQidAshdBJQAAhmgXhEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.4,-72.4,150.9,144.9);
p.frameBounds = [rect];


(lib.part_10_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKBXQgxgOgrgYQgrgXgkgcIgBAAQgjgfgfglQgCgDAAgDQAAgEACgDQACgDAEAAQADgBADABQBWAlBcAUQBdASBdAAIAFAAQBdgBBbgSQBagTBWglQADgBADABQAEAAACADQACADAAAEQAAADgCADQgfAlgkAfIAAAAQgkAcgrAXQgrAYgwAOIgGABIgEgDQgbgYghgMQghgNglgBIAAAAQgkABgiANIABAAQghAMgaAYIgFADIgCAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.9,-8.8,75.9,17.7);
p.frameBounds = [rect];


(lib.part_10_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0LFIAQjIQADgcAegXIgEgFQguAYhGA1Qg/AygwAhIABgCQABgMAAgLQAAgTgGgtQAwgpBQgzQBEgqA+ggIBSgPIgBAFQgOA3gPAKIgjAUIgcEDQgRCXgOBLIAFAFIgjAfgADvAOIAagfQBChKBJg2QCHhlEChmQAnApAABBQAAANgBAOIgIAAQh7gQjABTQiOA+heBQIggAaIgbAcIAWgigAm2gGQAOgvADgnIAAgRIAAgFQBehJCcguQCdgtBiASIAAAAIgBAxQgbARgbARQh3ACh/A4QhuAwhmBMIgQAMIAHgXgAshpFIgjgTQBvgKA2gnQBCgwAAhfQAAgrgOg2IgRhAIAbAPIAhAPIAcAMIABABIAAAAIADABIAYBHQATA/AAAeQAABZg3AtQggAah6A0QgsgVgvgbgAmduDIgGgJIAQACQDNCVC8AKIAHAJQAfApAXAvIgsACQkTAAiRj7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.7,-95.4,167.4,190.8);
p.frameBounds = [rect];


(lib.part_9_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAKpQggAAgegNQgdgNgXgVQgDgDAAgEQAAgEACgDQAMgNASgKIAAAAQASgJAWgFQAWgGAXAAQAYAAAVAGQAXAFASAJQASAJAMAOQADADAAAEQAAAEgDADQgXAWgeAMQgdANgiAAIAAAAgAMLDIQgDAAgCgCQgDgBgBgDQgbhOgrhHQgrhEg4g9IAAAAQg4g8hEgyQgDgCgBgDQgBgEACgEQBSiEBlh3QBkh2B3hlQADgDADAAQAEAAADADQADACAAADQAWCUgFCTQgECTgeCQQgeCOg4CKQgBADgDACQgCABgDAAIgBAAgAsQDHQgDgCgBgDQg4iKgeiOQgeiQgEiTQgFiTAWiUQABgDADgCQADgDADAAQAEAAADADQB2BlBkB2QBlB3BSCEQACAEgBAEQgBADgDACQhEAyg4A8Qg4A9gqBEQgrBHgcBOQgBADgDACQgCACgEgBIAAAAQgDAAgCgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-68.1,182.1,136.3);
p.frameBounds = [rect];


(lib.part_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD5SrQilgOgtgNIAAgDIAAAAQA7AABXgjQAwgUAZgTIAMgKQAIgIADgIQgPAFgGAAQg+AAhIgiQgZgLgYgPIgjgWQAqgrAVgaQApgyAKgqQAwgiA/gyQBFg0AwgYIADAFQgeAXgEAbIgODIIAAD1IAhgfIgEgEQAOhLARiYIAckCIAlgUQAQgKAOg4IABgEQALgYCgkDIAIgMIAbgcIAegcQBfhRCOg9QC/hRB9AQIAGABQgbCzlWGKQi4DTjSDOQgvB3hSBcIgEAGIiRgMgAiiGhQAAgUAFgZQgFAKgpAyQgoAzgBgBQgDgCAAgNQAAgeAGgbIAAgDQAIggANgUIgjAqIgFAGQgnAsgJAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBIAAgUIAVgoQANgYAFgQIghAbQghAZgKAAIgGgBIgCgBQANgnAegmQAogsAYgdQALgOAQg0QATg8AHgOQAghFAahRQAghlALhdIABgJIADgGQBXCAARA2QAXBDABBnIAAAEIgBASIgsBJQguBMAAATQAAALARAkQAOAaADANIABAHQAAAGgDAFQgDAIgIAAQgQAAgSgPQgWgSgNgFIgPBHQgMA5gOAAQgQAAAAhJgAhej+IAAAAIADAAgAl/mEQi0hoh/h3IAEgFIgIAAQgRAAgJgCQgNgEgWgCIgKgCQgwBHgxAoQgxAogiACQgjACgGgKQgGgLgGgSQgGgTAlgzQArg6AigiIAAAAIAAgBIgCAAQheAkg5ATQhmAjgyAAQhUAAAAghQAAgoAygdQAfgSA6gSQAvgOA8gWIBvgpQglgFhcgFQhQgFgmgHQh4gVAAhXQAAgZAbgIQAQgFAoAAIB0ANQBhAKAfAFIAHgIIgxguQgVgWgQgUQgvg6gBgtIAAgEQAAgiARgQQAQgPAjAAQAlAAAgAYIAEADIAAAAQAMAJASASQAfAtAqAkQATAQATANQAxAnAvAWIABAAQBOAjA4AoIADACQBOAUBbAsQBbAsA3AWQAoAQAmATIASBAQANA1gBAsQAABfhBAvQg3AnhtALIgEgCgAA0q0IAnABQBkAABUgSIBDBEQBFBFAhAnQi8gKjMiVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.1,-120.7,258.2,241.5);
p.frameBounds = [rect];


(lib.part_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ASNHyIgCgKQgKgkgNglQgihfhFh/QgthShrhxQhxhzgnguQhJBLg/BbQghAIgZhgQgWhSAAgvIAAgBIAAgBQAAggAFgbQACgNADgLQAKgjCsg8IAOgEQC6g/CggMQBJgGBQACIBzAFQgXAMBngFQAKF+hlEjQg2CbhVCCIgRAaIgFgVgA2DoDQEFgPEOBFQCEAiCGA2QhBAbhQA2QgdAUgfAXQiKBnhaBsQgrAxgfA0Qh/DQgmCPIgQAGQiNlkAgpDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.8,-51.9,283.7,103.9);
p.frameBounds = [rect];


(lib.part_8_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcCSQgCgBgCgCQgCgDAAgDIAAhGIACgFIADgEQAQgIAKgPQAJgPAAgTQAAgQgIgOIAAAAQgJgOgNgIIgBAAQgOgJgRAAQgQAAgOAJIgBAAQgOAIgIAOIAAAAQgJAPAAAQQABASAJAPQAKAPAQAIQADABABADQABACABADIAABGQAAADgCADQgCACgDABQgDABgDAAQgigIgZgVIAAAAQgagVgPgeIAAAAQgOgegBgjIAAgBQAAgdAMgaIAAAAQAMgcAUgUQAUgUAbgMQAbgMAeAAQAfAAAaAMQAbALAVAVIAAAAQAUAUAMAcIAAAAQAMAaAAAdQAAAjgPAfQgPAegaAVQgaAVggAIIgDAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.9,-14.7,29.9,29.5);
p.frameBounds = [rect];


(lib.part_8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnBF9QAvgPAhgdQhhgChMhJQgPgPgPgRQgfgmgWgtQgvhfgEh+QBThDAphYQAehAAMhXQBMgyA7AYQAhAlApAhQCZCACEgKIBLgHQgigbgxhUIg1hXQBdBVB9AlQB8AmB7AAQAVAABqgTIBGgNQAlAvAZB3IAEAaQASBbAIBoIgJABQkJD1hYjVQg1hghvB5Qi+ESjiAAQhZAAhfgrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.8,-42.4,135.6,84.9);
p.frameBounds = [rect];


(lib.part_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+SwQhtgojHjVQgugxgkgwIgLgOQgUgbgRgbQhNh9gKh1QgSjBAZhkQAYhlB5i2QgqiWhdiHQnPBplzhlIABgEQCZgnBIg2QBehHA6iPIB+gSQDRBxC0gfIA0A1QgnBKgbBqQAyBmB9BTIBEggQALAZAKAiQAVBHAAAwQAAAfgPAyQgKAeglBqQgmBpgKBlQgJBkApBxQApBwBmB8QA/BNBWBHQCDBrBWAAQAPAAAFgDQAJgFAIgRIAAgMQAPAfAAALQAAAXgoAbQgVAPhPAjIgFAAIgNABQg2AAhdghgAENOCQBJjrAMg6QAXhuAAicQAAh1gxjaIg1jTIBVAbIgJgmQgjiQgfhcQA9ATAsgWICiDYQh4CngNC4IAHAxQAQB6AABiQAABUg3ESQglC1gZBfQgWgxgihCgASdnuIAAgDIAAgJQAAhzg8AAQgjAZgMAAQgYAAgNgUQgLgQAAgRIAAAAIgKgCQgWgIgLgNQgGgHgDgKIgNADQgvAOgRgYIgGAFQgiADgPgTIgBgCQgKgNAAgYQAAgeAMgSQAJgNAdgYIAoAAIAFAFQAogoAwAAQAlAAAGACQALAFAXAhIAAAKQApABApAeQAkAaAWAmIgEALQAKAGAJAIQAjAdAAAzQAACEhOCYgALvnmQgPgcAAgRQAAgRAKgcQALgeAJAAQANAAAKAHIABAAQAGAFAGAIQAOAUAAAeQAAAZgEAUQgHAbgOAGQgFACgFAAQgOAAgQgegAkEsZIAEgOQBnAeBzAAQAlAAAigDIAABFIhFAygAr6utIgBAAIgHgDQgrgUg8gfIgBAAQhdgxg4ggIgOgIQgcgQgRgMIgOgJQAggsAxgdQA0gfA/gHQAaAJAegCQAwARA8A4QAuArAYAnQAZAnACAjQADBGgdAMIgEABIgFAAQgYAAhAgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.1,-123.3,256.4,246.7);
p.frameBounds = [rect];


(lib.part_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALJE0Qg0gYhxhFIAAgKIgCgRQgEgnAAhLIAAgKIABgPQABhRANgvQAbheBOAAQAmAAATAnQAJATAJAaQACgTAGgTQANgyAbgoQArg/A+gHIARgBQAcAAAeAeQAdAeAHAeIADAAQACABABADQAmhIAsgoQAfgcAkgNIAEgCQAegKAgAAQAuAAAcAaQAeAbAAAvQABA5ggAyQgKARgRAUQAgAAAXAKQAsATAAA3QgBBHhKA3QhFAxhKAAQguABgIgCIgFgBQgZgKgrgNQAgAVAcAXQAxAqABAdQAAA2g9AkQg5AkhOAAQhsAAhzg0gAr9DwQgagSAAglQAFgtABgVQgxBAgmAeQg2Apg8AAQghABgWgVQgZgXAAgxQAAgFAKgZIAIgVIhPA0QhIAqgqAAQg5gBghgdQgjgfAAg5QABhXA3gsQAigcAzgIQAUgCAXABQgSgFgRgJIgMgGQgpgaAAgnQAAgvAngaIAIgEIABAAQANgIAOgDQAegJAoAAQAjgBAkALQATAGAjAOQATAgAXAfQAzBFA8AmQBvBGCKgmQAoA6AtAlQgcAqgbAkQhUBxgxgBQgrAAgVgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.7,-36,273.4,72);
p.frameBounds = [rect];


(lib.part_7_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AMPRRQgDgBgCgDQgCgDAAgEQAIhGAVhIQAdhjBNi6QAbhAA0hkQA5htAWgxIAZg8QACgDADgCQADgCADABQAEABACADQADADgBADQgCAygFA1IAAAAQgGBHgLBIQgLBKgPBIQgPBKgTBGIgBACIgBABIgBACIAAAAIAAABIgBADIAAACIABAFIAAAAQAGAlgLAhQgJAhgbAgQgcAiguAeQgsAdg4AaIgBAAIgUAKIgEAAIgDAAgAsVRQIgUgJQg4gagtgdQgsgegegiIAAAAQgagggKghQgKgiAGgkIAAgCIAAgCIgBgGIAAgBIAAgBIgBgBIgBgDQgThGgPhKQgPhIgLhKQgLhIgHhHQgGhGgChBQAAgEADgDQACgDAEgBQAEAAADACQADACABAEIASA+QBFDbBwDEQA4BhAkCNQAMAwAPBMQABADgCAEQgCADgDABIgEABIgEgBgAHPgWQi0AAhPhXQg3g8gSiBIAAgBQgHhEABgqQABgqgUg3IAAAAQgTgzhNAAQhOAAglApQgmAsAAA+IADBFIADAzIAAADQgkCZhIA4IAAAAQhAAziQAAIgBAAIjeghIgFgBIgEgCIgDgEQgTgugXgmIgQgYIgBgEIAAgEQAYhcAshSQAthTBAhFIAAAAQA+hEBOg1QACgDADgBQAEgDADgEQACgFAAgGIAAAAQAAgGgDgFIAAAAQhGh1hThqQhUhrhiheQgCgDgBgDQAAgEACgDQACgDAEgBQADgBAEACQBbArBVA5QBVA4BLBFQBMBEBBBQQAFAGAGACIAAAAQAHABAGgCIAAAAQA6gTA+gKIAAAAQA9gKA8AAQA+AAA9AKIAAAAQA9AKA6ATIAAAAQAIACAGgBQAGgDAFgFQBBhQBLhEQBMhFBUg4QBVg5BdgrQADgCAEABQADABACADQACADAAAEQAAADgDADQhiBehUBrIAAAAQhUBphGB2IAAABIAAAAQgDAFAAAFIAAAAQAAAGADAFIAAAAQADAFAFADIAAABQBRA1A/BGIAAAAQBABFAsBTQAtBSAZBcIAAAEIgCAEQgIALgHANIgBAAQgWAkgTAsIgDADIgEADIgyANQhrAeg/AAIgBAAgAErk2QgpApAAA6QAAA5ApApQApApA5AAQA5AAApgpQApgpAAg5QAAg6gpgpQgpgog5AAIAAAAQg5AAgpAogAnxk2QgpApAAA6QAAA5ApApQApApA5AAQA6AAAogpQApgpAAg5QABg6gqgpQgogog6AAIAAAAQg5AAgpAogAGbqSIABAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.4,-110.5,222.8,221.2);
p.frameBounds = [rect];


(lib.part_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABdKNIgQgCQgvgDhLgIIAAAAIgCgBIgggDIgggQIgbgOQgmgTgogQQg4gWhagsQhbgshOgUIgDgCQg4gohOgjIgBAAQgvgWgxgnQAwAfA2ASQBEAWBNAAQBeAAA3gRIAFgBQFPCWEIl+QBwh4A1BfQBXDVEKj0IAJgBIADAnQADAmgJArQgaB1hyCUQhtCNjBArQhUAShkAAIgogBgAmioRIAAgCQAAg7gBgQQgBgbgEgUQAHAVAKAVQANAgASAeQAjA+AzA3Qg7gXhMAxQAHg4AAhDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.6,-65.4,153.3,131);
p.frameBounds = [rect];


(lib.part_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkIRDIBhklQi2gQiqgzQkuCqAriHQAJgeAZg8QAuhuALgeQALgfASgrQASgqAZglQAYgmA/AIICZATQA+AIAVAPIALAPQAkAvAuAxQDHDWBtAnQBqAlA2gFQisHCjzFCQjHktBRirgACRJDQhWhHg/hNQhmh7gphxQgphwAJhjQAKhlAmhpQAlhqAKgeQAPgyAAggQAAgxgVhHQgKghgLgaIhEAgQh9hTgyhmQAbhqAnhKIg0g1Qi0AgjRhyQA6hiBQgvQB/hMC3AzQAhAJAjAOIDeCEIBHgyIAAgjIADABQCDAUBbAzQB3BDAyB5QgRATgUAKQgsAWg9gTQAfBcAjCRIAJAlIhVgaIA1DVQAxDZAAB2QAACZgXBuQgMA6hJDsQAiBCAWAwQAaA4ABAVIAAAMQgIASgJAFQgFACgPAAQhWAAiDhrgAHZkYIgHgxQANi5B4ioQCZgFB0hwQgWgpgIg7QAOgGAHgbQAEgUAAgZQAAgdgOgVQgGgIgGgFQAMgXAOgkIAUgwIAFgDIABACQAPATAigDIAGgFQARAYAvgOIANgDQADAKAGAHQALANAWAIIAKACIAAABQAAARALAPQANAUAYAAQAMAAAjgZQA8AAAABzIAAAKIAAACIAWCiQg7BzhoB+QjUEBk5AAQgsAAgtgFgAzfsvIgChmQAAi4A4iaQArh3BlicIAKgRIgKgPIAOAJQARAMAcAQIAOAIQA4AhBdAwIABAAQgQAqgKA2IgBAHQgLA/AABHQAAA+ABAPQACAdAGAYQg6CPheBHQhIA2iZAnIgJABQgEgYgCgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-156.3,250.1,312.7);
p.frameBounds = [rect];


(lib.part_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABpM7QgxgUgpgeIgVgSQgjAghSAfQhTAghSAAQiTAAhVguQgZgOgYgUQgsgmgog7QiKAohwhIQg7gmgzhFQgXgfgUghQhViSgTjFQgFg2gBg6QAHhKAMhFQBAmHDTiNIAAAAIAfAqQgJAWgGAVQgYBZApAzIAOAQQAnAkA/AAIACAAIAGAAQAMgCANgDQAXgIAZgPQAfgWAigjQAggiAiguQAjgvBLgMQA4gKB3AUIgFAMQgJAXgGAXQgFAUgCATQgJBCAZAoQAJAOAMAKQAfAaA2ABIAIAAIAOgBIAVgDQAwgOAogwIARgWQARgYAigyQAfgqAcgVQA9gsBqgGQA9gECTAJIAXgMIATgKQgsh+h7gbQAjgjAdgnQKZBWA4MEQADArACAuQgVDGgpBIIgEABQgkAOgfAcQgsAngnBJQAAgDgCgBIgDgBQgHgdgdgeQgfgfgcAAIgRABQg9AIgrA/QgbAogOAyQgFASgDAUQgIgagKgUQgSgngnAAQhNAAgbBfQgNAugBBTIgNAQQgjApguAUQg2AYhTAAQhMAAhMgggApyFdQAAAkAJAfQAjB/CwBCQCaA5DbADIAUAAQCtAACJhpQBOg8AjhHQAbg6AAg/QAAgmgPgPQgOgPghAAQgdAAgqANQggAJgPAIQAKBQAAANQAAAcgZAYQgaAZgiAAQgyAAgbgoQgWgugLgOQgSAGgzAJQg3AKgYAAIglgCIgEgBQghgDgVgEIgjAAQgGAYgdAiQgeAhgigEQgjgGgegUQgfgWAAgjQAAgiAFgKQgughgagKQgegMgyAAQhOAAAABVgAiMAnQgaASghAwQgvA+AAAbQAAAdAxAKQAaAGAoAAIADAAQArAAA+gGQA8gGgPgmQgPgng2g+IgdgdIgegeIgHAAQgMAAgPAKgAFbkhIgJAFIgXAZQgJAKgJANQgfAogmA/Qg4BjAAApQAAAnAfANQALAFATACQATADAcAAQBuAABcgUQAmgIAagKQA3gWAAgfQAAgvhZhuQhBhPgwgZQgVgLgSAAQgFAAgIAFgAnIlJQgQABgmAeQgmAdg7A8Qh3B1AAA6QAAAoBIAXQAUAHAZAFIASAEQBUAOB0AAQAlAAAXgUQAZgWAAgiQAAgkgxhzQgZhCgTgmQgeg8gTAAQgEAAgEADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.7,-85.9,233.5,171.9);
p.frameBounds = [rect];


(lib.part_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah+ONQhDgEhIgIQhIgKhIgNQhJgNhHgRQhGgRhBgVIAAAAQg1gSgwgUIgEgDIgCgEQgPhMgMgvQgjiKg3hfQhxjGhFjcIgTg+IAAgDIAAgEIAAAAQgChhAHhQQAHhQASg+QARg+AagoIAAAAQATgdAVgPIAAAAQAXgQAbgDQAxgHAnARIABAAQAmARAeAoIAAAAIADAEIABABQASAZARAfIAAAAIAIAQIAAAAIAHAPQAYAzAWBAQAWBBAXBLIAgBnIAAAAQASAzATA0QAUA1AWAzQAWAzAbAwIAAAAIADAFIABABIAFAJIAAAAQA8BmBMBBQBLBCBdAgQADABACACQACADAAADQAAADgBACQgLAVgGAXQgGAXAAAaQAAAoAPAjQAOAjAbAaQAbAaAjAQQAjAPAnAAQAnAAAjgPQAkgQAagaIAAABQAagbAQgjQAPgkAAgnQAAgagGgXQgGgXgMgVQgBgCAAgDQAAgDACgDQACgCADgBQBdggBLhCQBMhBA8hmIAAAAIAFgJIACgCIABgDIABgBQAbgwAXgzIAAAAQAXgzATg1QATg0ARgzIAghnQAYhLAWhBQAXhAAXgzIAAABIAOgdIgBAAQARgiATgZIABgBIACgDIABgBQAfgoAngRQAmgRAyAHIAAAAQAaADAXAQIAAAAQAWAPASAdQAbAoARA+QARA+AIBQQAHBQgCBhIgBAlIgBADIgZA7QgWAxg6BuQg0BjgaA/QhNC5gdBiQgUBGgIBFIgCAFIgEADQgvAUg1ASIgBAAQhAAVhHARQhHARhIANQhJANhHAKQhJAIhCAEQhEAFg7ABQg6gBhEgFgAicFWQhNgNhKgbQhJgbhEgpIgEgEQgig9gbhCQgahCgYhDIAAAAIgriHIgmh4QgUg6gVg0IgBgFIABgIIACgFIAFgDIAFAAIDdAgQCGAAA8guQBCg1AjiQIgDgxIgDhGQAAhGAqgxQAqgwBYgBQBdAAAXBAIAAABQAVA7gBAtQgCAqAIBCQAQB5A0A5QBKBQCpABQA9gBBpgdIAzgNQAEgBADABQADACACAEQABADgBAEIgGANIAAABQgVAzgTA5IgnB5QgUBEgXBDQgXBDgbBCQgbBCghA9IgEAEQhDAohJAbIAAAAQhJAbhNAOQhMAOhPAAIgEAAIgEAAQhNAAhLgOgAhRhVQAnAQAqAAQArAAAmgQQAmgQAdgdIAAAAQAcgdARgmQAQgmABgsIABgGIAEgDQAfgUAagcIAAABQAEgGACgGIAAABQABgGgCgGIAAAAQgCgFgEgEIAAAAQgFgEgFgBIgBAAQgGgCgFACQgGACgEAEIAAAAQgbAegiASIgBAAQghATgmAFIAAAAQgmAGgmgHQgEAAgCgDQgDgDAAgEIAAgtIAAgCQAAgEADgDQACgDADAAQAUgEATgIQAUgIAQgLIAAAAQAQgLAJgNQAIgLAAgNQAAgQgJgOQgLgPgSgLQgUgNgZgGQgZgHgdAAIAAAAQgcAAgaAHQgZAGgTANQgTALgKAPIAAAAQgKAOAAARQAAAMAIALIAAAAQAKANAQALIgBAAQARALATAIIAAAAQAUAIATAEQAEAAACADQACADAAAEIAAACIAAAtQAAAEgCADQgCADgEAAQgnAHgmgGIABAAQgngFgigTQgigSgbgeIABAAQgEgEgGgCIgBAAQgFgCgFACIgBAAQgGABgFAEIAAAAQgEAEgCAFIAAAAQgBAGABAGQABAGAEAEQAaAcAgAUIAEAEIABAFQAAAsARAmIAAAAQAPAmAdAdIAAAAQAdAdAmAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-91.5,223,183);
p.frameBounds = [rect];


(lib.part_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqiNOQBMgtBAhYQB7itAVi/QAMhsgOhRQgKhAgbgwQg1hehbgeQgrgOgyAAIgRAAQgkgZg0gRQhOgXhhAAQgiAAgJABIgCAAQgYAYgaAfQg0BBgfAYQgFgKAAgeQAAhsBkhIQBhhGCIAAQBBAAA5AMQCcAiBZCBQA4BQAaBtIAAAAIAAABQAGAXAEAZQANBPAABdQAADPhZCPQhYCMisBHgAGAkiIgcgHIAAAAQg/gTgjgiIgGgHQg1g5AAhvQAAiFBahcQBdhfCMAAQBBAAArAhQAqAfAMA4IgggIIghgHQhqAAhKBVQhGBQAABrQAAAUAGARQAGAUAOARIAGAGQAiAfBGALQAZAEBEAOIAtAKQAyAKAnALIABAAQAqALAeALQA5AVgCgEQgDgFBmA1QBaArBRBOIgDAGQl/i1logag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-84.6,226.1,169.4);
p.frameBounds = [rect];


(lib.part_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC+DwQgHgqg3goQneEgkLkQQgOgngJgpQgKgqgFguQgFgogBgsIAgAAQAdABA4gKQAogHBEgXIA3gVQBrgqB8hvQAjghAggnIAZgjIAFAAIAKgBQA3gBAuAZIAJAFIAAAmQgEBpgqCBQgSA2ghBXQDShnBJhVQBYhmAphyIBaAjQBRCbBtBiIAAAyIAAAGQgBBlggBqQgjB0g4BDIAbAGIgYAIQgvANgsAAQiYAAhsigg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.2,-40,132.5,80.1);
p.frameBounds = [rect];


(lib.part_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFNfQg1gBgegZQgNgLgIgOQgZgoAJhCQACgTAFgTQAFgYAKgWIAFgNQh3gUg5AKQhLAMgiAvQgjAvgfAhQgiAkggAVQgYAQgXAHQgNAEgMABIgGAAIgDAAQg/AAgngkIgNgPQgpg0AYhYQAGgWAJgWQASgsAggoIAAgBQAOgTASgSQAMgNAOgLIAIgGQASgNAVgJQgxgmgkg1QgXgigSgpIgGgPIgGgRQgmhqgEiPIAAgGIAAgVIAMhCIAIglQAGgcAIgaIAHgWIABgDQASg3AXguQA4hyBWg/ICHkTQAfguAggOIAGgCIACgBQA5gTA5BSQBcCKAhB1QBugbBxAvQBBjCBmhTQBIg8BHBXQCxD2A2D/QAWBoABBpQgaDuh8CmQgeAngiAjQB6AbAsB+IgTAKIgXAMQiSgJg9AEQhqAGg9AsQgdAVgfAqQghAzgSAYIgQAVQgrAxgvANIgVAEIgPAAIgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.9,-86.3,146,172.7);
p.frameBounds = [rect];


(lib.part_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnPBMQgDgBgCgDQgCgDAAgEQAAgDADgDQBqhvDZgoQADAAADABQADABABADQACADAAADQAAADgCACIiDCoIgDADIgEABIgeAAQhUAAhNgUgAERBbIgEgDIh8inQgCgEAAgEQABgEAEgCQADgDAEABQC8AfB9BkQACACABAEQABAEgCADQgCADgDABQhYAehjAJIgBAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.1,-9.6,94.4,19.4);
p.frameBounds = [rect];


(lib.part_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkZPcQg3gTgvgfQgUgNgSgQQgrgkgfgtQgSgSgLgJIAAAAIgEgCQghgZglAAQgiABgQAPQgSAQAAAhIgKAGQgegwgZhDQgth6AAhWQAAgHADgMIACgSIgJgHIAFgFQCrhHBZiMQBZiQAAjMQAAhdgOhQQgDgZgGgWIAAgBIAJgBIAEAAIADgEIAFgFQAPgLAigKQAagHARgCIAPgCQATAAA5AGQgIgcgIgVIgEgPQgDgXADgnQAEg4BLhOQBMhQBPAAIAZAAQAIADAAAQQAAAOgJAhIgRAvIggBSIAFAAQA3hJBRgxQBQgyBXgEIAdAAQFpAbF/C0IARAIQBPBXA3BOQBgCIAXBuIALAzQAaCNAAB+IAAALQgCCOgjBzQgjBuhxCnIgGgDQAIgqgCgnIgDgnIAAAAQgJhqgRhcIgFgaQgYh2glgvIhHANQhpASgVAAQh8AAh8glQh8gmhghUIA2BXQAzBTAhAcIhMAGQiEAKiah/QgogighglQgzg2gkg/QgPgegOgfQgJgVgIgUQAEATACAaQABAQAAA7IAAADQAABCgIA4QgLBYgfA/QgpBZhTBCQAFCBAuBfQAWAtAgAmQAOARAPAPQBMBJBfACQggAdgvAPIgFABQg1AShegBQhOAAhDgVgAzAGFQhGhOgbhfIAAAAQgSg+AAhGQAAgMAHg6QAHg2AFgTIABgEQAKhZAig2QAng/BXgtQDNh3BCgRQArgLAqgCIAQgBQAzAAArAPQBbAeA1BgQAbAwAKA/QAOBSgMBrQgVC+h7CtQhABYhMAtIgHADQhFAlhPACIgKABQikAAhvh/gAs1FoIAFgGIgCgBgANZpIQhmg0ACAFQADAEg5gVQgegLgrgMIAAAAQgngKgzgLIgsgJQhEgOgZgEQhGgLgiggIgCgIIAAgBQAAgbAJgYQAYhIBhgyIARgIQBXgqBHAAQAKABAOADIAPAEQAdgRAlgEQALgCALABQBHAABIA3QAlAbA1AwIAFAFQAUANASAOQArAiAWAgQAlA4AABTQAAA4gNAkQgNAkg2AyQhRhNhZgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.2,-101,266.5,202);
p.frameBounds = [rect];


(lib.part_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNKLQghgJgfgNIgEgBQiNg7h0h4QgjglgdgmQg/hTgmhcQg1AfgtAEQgeACgagJQgdgKgbgXQhQhIgRiLIABgBQAigoARgZQAcguAWg9QAvCUBCBSQAcAkAjAdIAAAAQAZAVAcARQAjAXAoAQQAZAKAcAJQggg4gWg9QEMEPHdkfQA4AoAGAqQCLDNDUg7IAZgHQATAEAKAAIAEACQgqBQg5BHIgLANQhIBVhZA0Qh1BFiTAOQgkADglAAQhzAAhlgfgAJTnDQASgyAJg1QAcBKAiBAgAEOnSQgtgZg6ACIgKABIAAgHQA2hRAkhpIAEABQAXBwAFBWIAAAWIgJgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.1,-68.2,162.3,136.5);
p.frameBounds = [rect];


(lib.part_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgZEAhBQgJgQgGgQQgdhGAAhPQAAhsAhhhQAlhpBFg+IAJgDIgBgCQgNg7gCgMQgDgbAAgKQABg1APgOQAPgPA5AAQAOAAAiAHQAcAGAQACIAGAAQAnhOATgSQAagYA9AAQAhAAAuAZIAYANIAOAHQAKAFACAAQAJAAA8grQA9gqAhAAQA7AAAYAXQAJAJAFANIADAFQAKAXADAlQAbgHAygbQApgVAfAAQBJAAAuB2IAPAqIAAABIABADIAAABIABAAIABgCIAGgGQBqhrA2AAQAJAAAOAHQAKAGAKACIADAAIgCACQgvAegQAOQgrAigWArIgDAEIgEAKQgRAkgDAqIgBAZQAABNAnByIgJAEIgFgEQhDgygeggQgegggDg+QgLALgWADIgmABQg8AAgtggQgkgbgdgzQgcAoguAAQg0AAgugzIg5hPIgGAAIgrBuQgVAjg6AAQgtAAgwgjQgwgngRgLQABAOACAbIADAfQAAAggLAQQgNAUggAAQgiACgjgLIAOAvQAUBCABA1QAABEg/CCQg/CCABA+QAAAcAOAUIAEAFIgNAJQg7gpglhGgACcdaQhDhggUgkQgHgMgBgGQgFgQAGgIIABAAQACgDAEgCQAJgEAegEQAcgDAZgIQBiBRBYBDIAcAWQgWAxgvAbQgXANgZAGQgZAGgaAAIgzhJgAL9ZjQgDAAgDgDIgBgBIgBgBIgBAAIgBAAQgngEgggTQATgpAggcQAcgZAygXQgLBFgIBMgAQ4OxQgPgSgEgvIgBgtIAAgUQgBgYACgTIAbADIAJAAQAYAAAegLQAigNAFgQQAkA0AxAmQgVAJgTAOIgIAGQgOAKgLANQgSATgOATIAAAAQgrARgmAZgAR6gIQgXgvgrgXQgPgIgogKQgqgLgNgGQgagMgcgfIgHgHIAMgOQDAitBIjXQAuiIgCiZIgCghIgDgpIgTgDQk5gyj1ikQh1hOhkhoQhxh2heiWQATCIAcB7QAuDMBFCoQAiBSAnBJIgGALIgOgIQjNh7hsjAQg7hpgeh+QgUhWgHhfQghBcgrBOQgzBeg+BIQh0CGimA8QgMCgAGBtQAFBnAUBbIAFAXIAIAcQAIAeAKAcIABABQAtB+BQBkQighUh7jNIgMgUQgbgwgVgtQgbg5gPg1IgIgbQgPg9ABg2QgBgXACgWIgQgMQgNgIgFAAQgYAAgTAeQgPAZABAWQgBApANAwIgWB8IgdhyIgBgBQgZhhAAhWQAAioAXhqIAFgSIACgJQAmiQB+jPQAgg0AqgzQBbhsCKhoQAfgXAdgTQBQg3BBgbQA+gaAwAAQAMAAAYAKQAcALAHAJIAEgDQgagtgogtQgjgjgegYQgZgUgWgNQAggQAGgCQAFgCA0AAQAnAAA3AmQARALAUAQQBaBJggBiQAwggA6gZQB/g2CGAAQBNAAA0AOQAYAHBtAsQBQAfAdAOQBCAfApAhQgFAbgBAgIAAABIAAACQABAuAWBTQAZBhAggHQBAheBJhLQAnAvBwBzQBsByAsBTQBGB/AiBfQANAlAJAjIADALIAFAUQALA7AAA1QABAtgSBwIgHAtIgPBbQgTBngMArQgVBKgmAxIAEAIIgGADQggAOgfAuIiHETQhXA/g3BwIgghLgAWxrQQgcB3g3BYQgrBEhBA8QBggPA5hEQA4hFAAhlQAAg5gIgXIgHgSIgDAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-222.4,330,445);
p.frameBounds = [rect];


(lib.part_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A57NJIgEgCIgCgEQgehAgWhEQgVhEgOhHQgPhHgIhIQgHhHgChGIAAAAQAAgpABgpQAAgCABgDQAthFAtgrIABAAQAugsApgPIAAAAQAtgPAmASIAAAAQAVALAQAUIAAAAQAPATAKAZQAJAZADAeQAEAcgEAdQgDAfgKAdIAAABQgUA1gBAyIAAAAQgBAzATAzQARA0AoA4IAAAAQAPAXAEAWQAFAWgDAUIAAAAQgDAUgHARIAAAAQgHARgIANIAAAAQgJANgHAIQgTAYgaAUQgaATggAMQgfALghACIgLAAQgcAAgbgIgAa3idQgZgDgQgKIABAAQgRgJgLgOIAAgBQgKgOgGgSIgBAAIgMgmIgPgsIABABQgJgWgNgWQgNgWgTgWIAAABQgUgVgegRIAAAAQgsgbgegYQgfgZgTgVIAAAAQgTgXgKgUIAAAAQgKgUgEgRQgEgRgBgNIAAgBQAAgXAHgaQAGgZAMgaQALgZAPgZIAegzIABgCQACgDADgBQADgCADABQADAAACACQAvAtAmAwQAmAxAgAxQAfAxAZAuIAAAAQAuBYAlBjQAkBiAZBrQAAADgBADQgBACgCACQgDACgCAAIgbABQgRAAgNgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.5,-85,357.1,170);
p.frameBounds = [rect];


(lib.part_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkAHrQhGgGh4gfQhhgah0hlQgagXgbgaQiAh+gLj1QgBglABgoIgGgKIAJAFIABABQAWATAVAGQAQAEAPgEIABAAQAkgKAeg7QAKgNAGgNIAIgQQAIgUgBgRQgBgNgGgLQgOgZgogRIgCgBIABgBQBYg/BnghIAagIQBNgVBGAAQB1AAB6A7QBRAoB4BbQBjBJA0AjIAiAWQAZAPAZALQBIAiA9AAQAHAAAPgFQgDAIgHAIIgNAKQgYATgyAUQhWAjg6AAIgBAAIgJAAIAJADIAAAAQAtAMCkANICRAMIAFAAIABAAIA3ADQA2AABHAiIAkASIAvAaIARAJIAAABIADABIgDAAQgLAAgMACQg/AJhNArQhfAzhxA/QhxA/hKAtQhJAth2AYQhzAYgzAAIgJAAQgsgBgcgGQgvAHgdADQgWACgLAAIgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-49.1,171.7,98.4);
p.frameBounds = [rect];


(lib.part_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADbQNIgDgBIAAgiQCTgNB0hFQBag1BHhVIALgNQA6hHAphQIACgCIgGAAQgKAAgSgEIgcgGQA4hDAkh0QAfhqABhnIAAgGIAAgyQhshihSiZQgihAgdhJQgIA0gTAyQgpByhYBkQhJBVjUBpQAjhZASg2QAqiBAEhnIAAgmIgBgVQgEhXgYhvIAAgCIgBgFIgCAFQgkBpg2BRIgFAHIgZAjQggAngjAhQh6BthrAqIg3AVQhEAXgoAHQg3AKgegBIggAAQACAsAEAqQAFAuAKAqQAKApANAnQAVA9AgA4QgbgIgZgKQgpgRgigWQgdgSgYgVIgBAAQgigdgcgkQhChUgwiUQgVA+gcAtQgRAagjAnIAAABQAQCNBRBIQAaAXAdAKQg+AHg0AfQgxAdggAsIAKAPIgLAQIgSgMQh0hlAAiXIACgWIgIADQgbAIggARQgeAQgtAcIgFgHQABhSAkhlQAihbA0g/Qg6gfg7hmQggg2gRgqIgBgDIAaABQBpAACCjcQBEhzBQiqQBAhrC0hjQDAhoChAAQBMAAASABQAhACAwAOQgMgXAAgMQAAhdCKgxQBjgjBdAAQAhAAAIABQAUACARAMQgnAThBAtQhAAsgWAvIAAAFIABAAIA6gPQAvgLBvAHQBwAHDHB3QDHB2CRFPIAEAJIATApQBjDqgkFBQAxA4A4AfQhGgEg/gQIgCAGIgHAVQBeBbBJg+QhCDGisgcIAUBaIhuAAQAmBwA+AXQhNAfh2hHQARAkAFAlQASBshLBtQgahrhSgjQgOgGgQgEIgDAWQgbCIirBlQhbgziDgUgApGNNIACgEQBIAfAWgDIADgBQAegMgEhGQgCgjgYgnQgYgngvgrQg7g4gxgRQAugDA0ggQAnBdA+BSQAeAmAjAlQB0B4CNA7IAEABQAfANAhAKIgEAOQgjgOghgJQi3gzh/BMQhTgOgsiEgArNN6IABgHQAJg2ARgqQA7AfAsAUQguAdAFBPIgDAAQgrAAgrg4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.8,-110.8,247.7,221.8);
p.frameBounds = [rect];


(lib.part_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiKmQgrgjg2gyIjYjTQiciZhpjpQgYg2gRgxIgBgCQAWhdA3gmQAzgkBiAAQBUAAAkASIARAHQAcAOAdAMQAnAOADANIAAABQgHAHAFARQABAFAHANQAUAjBDBgIAzBHIAXAhIBCBjQA2BNAUAqQAYAzgHA1QgFAYAGBWQAJBxAAAsIAAA/QgEAjgaAAQgqAAhshZgAJVCiQgjgKgjAAQgoAAgdAJQgPAEgMAHIgDgCIjkimQgmgZgogfIgdgVQhXhDhfhSIhphXQhBg4gug1QAAgRgDgXQgEgVAAgJQAAhHAag3QASgnAgghQBMhQB2AAQAeAAAlADQAmAEAXAKIAPAGIAMAGQA7AgAuBGQAaAoA0BwQAbA4AWAmQARAbAOARIATAVQARAPATALQAgASAnAEIABAAIACABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAjAAQABA5AGA2QASDFBVCRQgigNgUgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.2,-76.7,130.4,153.5);
p.frameBounds = [rect];


(lib.part_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPEkIgEAAQg0AAg1gMQg1gLgvgUIAAAAQgwgUgngbQgogcgaggQgagggLglIAAgEIACgEQAPgVANgXQABgDADgCQADgBAEABQBgAaBkAKQADAAACADQADACABADQAAADgBADQgBADgDABIgPAKIAAAAQgGADgCAFIgBAAQgDAFAAAGQAAAGADAGQAEAFAFADIgBAAQAGADAGAAQAFAAAGgDIAAAAIAFgDIABAAIALgHQAvgfAkgrQAjgqATgzQAUg0AFg4QAEg4gNg4QgBgEABgDQACgDADgBQAEgCADABQA1APAvAXQAuAXAlAeQAmAfAZAlQAaAkALAqIAAAAQAMAqgFAsQgFAtgYAxIAAABIgCAEQgVAqgeAdQgdAdghARIAAABQghAQggAKIAAAAQghAJgdAEIAAAAQgcADgVAAIgBAAgAKgDKQg3gLgygZQgygagqgnIAAAAQgqgmgfgzQgBgCAAgDQAAgEACgCQACgBADAAQB8goByhAQADgBACAAIAdACIAlAEIBBAGQADAAADACQACADABADQAAADgCAEQgBADgEABQhGAbhLAOQgGACgEADIAAABQgFAEgCAFQgCAGABAGIAAgBQACAHAEADIgBgBQAEAEAGACIAAAAQAFACAGgBQBIgLBEgZQBFgaA/gjIAAAAIADgCIACgBQA7ghA1gqIAAAAQA2gqAugyQADgDAEAAQADgBAEADQADACAAAEQAIA3gHA3QgHA2gUAyQgVAwghArQghArgsAiQgsAhg1AVIgBAAQg4AVg4AFIghABQgpAAgogIgAsQDRQg5gFg4gVIAAAAQg2gVgsghQgsgigggrQghgrgVgwQgWgygGg2QgHg2AHg4QABgEADgCQADgDAEABQAEAAADADQAvAyA2AqQA0AqA8AhIABABIAEACIAAAAQA/AjBEAaIAAAAQBEAZBIALQAGABAGgCQAGgCAEgEIgBABQAEgDACgHIAAABQABgGgCgGIgBAAQgBgGgFgDQgEgEgHgCIABAAQhLgOhHgbQgDgBgCgDQgCgEABgDQAAgDADgDQADgCADAAIBBgGIAkgEIAdgCQADAAACABQByBAB8AoQADAAACABQACACAAAEQAAADgBACQgfAzgpAmIAAAAQgqAngyAaQgzAZg3ALQgoAIgoAAIghgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.8,-29.2,231.7,58.4);
p.frameBounds = [rect];


(lib.part_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ATHPKQgVgGgWgTIgBgBIiPhQIgHgHQAfgeAdghIAZghIAHgKQAYghAUghIAQALIBsA7QgDACACAFIADgGQAoARAOAZQAGALABANQABARgIAUIgHAQQgHANgKANQgeA7gjAKIgBAAQgIACgHAAQgJAAgIgCgABYE2IAIgPIAWgPQAegWAhgfIAQAVQAUAWAYAVQAPANARANQBbBCB3AYQAJAZAMAYQAiBAAlAQQgKAHgJAIQgJAJgGAKgAh6C9Ijbh+QAHgMACgMIAAgBIAAgHQAAgPgagVIikhoQgKgIgOAAQgdAAgQAZIgGAKQj+iBkDiaIgxgdQkOiSBulYQANgmAPgWQA5hRBXCeQBbCABiBmQCnCuC5BhIACABIACABQBFC2DfAmIAhAFIAAAAIACABIAAAAIABAAIEvC7IAIADIAAABIAAABQgKASgKAPIgBAAIgFAHIACAFQgUAIgTAJIgUAMIgCABIgJAFQgqAcgLAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.2,-97.2,270.5,194.6);
p.frameBounds = [rect];


(lib.part_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrF+IgGAAIgDAAIiogEIhbgDIhigFIgXgBIgpgEQg5gIgugKIgGgCQirgqgMheQgDgXALgVQAigbAtAAQA1AAAmAmQAmAmAAA2IgBAQQAYgUAfAAQASAAAOAGQAJgRAPgQQAngmA3AAQA3AAAnAmQAKALAIAMQAYgTAcgMQAFguAigiQAogoA4AAQA5AAAoAoQANAPAJARQAPgVATgUQBShRB0AAQBzAABSBRQAyAyAUA/QAEg6ArgrQAwgwBFAAQA8AAAsAlIAMALQAXAXAMAcQAFAKADAKQgdBxj9AXIgHAAIgIABIgPABIiXAKQiWAIiZACIhiACIhKgBgAn+ArIgBgBIgKgIIgDgCIgFgFQgWgWgJgZQgGgTAAgXQAAg1AlglQAlglA1AAQA1AAAlAlQAmAlAAA1QAAAOgDANQgHAjgcAbQglAlg1AAQgoAAgfgVgAI9iJQgYgZAAgiQAAgiAYgZQAZgYAiAAQAjAAAYAYQAYAZAAAiQAAAigYAZQgYAYgjAAQgiAAgZgYgAFSkcQgQgQAAgYQAAgYAQgRQARgQAYgBQAYABARAQQARARAAAYQAAAYgRAQQgRASgYgBQgYABgRgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.1,-38.3,166.3,76.6);
p.frameBounds = [rect];


(lib.part_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AizM1QhtgYhug1Qhbg0hGhDQgngkghgpQhQhkgth+IAAgBQgKgcgJgeIgHgcIAKgCQBuCECuAJQECADB+iZIBCAAQDKDCEjAVQENgUB0joQhIDXjACtIgOANQgRgOgVAAQgMAAg4AmQgzAjgGAHIgOgPQgJgKgHAAQgVAAgEAoQgCAVACAiIABAoQhXAohZAUQhTAShVAAQhZAAhbgVgAQEDvQA4hYAch3IALACQAGAXABA5QgBBlg4BFQg4BEhhAPQBCg8AqhEgAwxBoQgag1gOguIgCgIQgOgwAAgpQAAgWAPgZQATgeAYAAQAFAAANAIIAQAMQgCAWAAAXQAAA2APA7IAIAbQAQA1AaA5QAVAtAbAwQhSAAhBiHgAhJpGQgch7gTiIQBeCWBvB2QBkBoB2BOQiWAUhxChQhDiogujMgAoNm7QA+hIAzheQAqhOAlhcQAGBfAVBWQAdB+A7BpQiahqiZAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-84.2,226,168.5);
p.frameBounds = [rect];


(lib.part_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AErFEQiHiGAAi+QAAi8CHiHQCGiHC+AAQC+AACHCHQCGCHAAC8QAAC+iGCGQiHCHi+AAQi+AAiGiHgAuzFEQiGiGAAi+QAAi8CGiHQCHiHC+AAQC+AACHCHQCGCHAAC8QAAC+iGCGQiHCHi+AAQi+AAiHiHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.2,-45.9,216.6,91.9);
p.frameBounds = [rect];


(lib.part_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqPCnQgzikAQilQAmAMAkATIAYAOQBdA3BWBkIAVAZQhRBegiBtQgYBMgBBUQhTiBgoiCgAJwBgQhThwh7hKQAGgXAHgYQAjhsBQhuQASgZAUgYIARgVQA+CbAVCXQAWCdgXCbQgbg0gggtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-42.6,139.1,85.3);
p.frameBounds = [rect];


(lib.part_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxUDkQgzmyDYlkQASgdATgcQhChEAdh4QAjhsEzhGIAWgGQAJAbAVAWIAGAFIACACIAKAIIACABQAfAVAoAAQA1AAAlglQAbgbAIgkIAKADII1AAQDVAACuAsQA0ANAxASQDrBVgyCYQgFAigdAcIAfAlQDpEngeHsQhtMWu1AOQg7AFg5ABIglAAQtDAAixsKgAtJskQgLAVAEAXQALBeCsAqIAGACQAtAKA5AIIApAEIAXACIBjAEIBaAEICoADIAEAAIAFAAIBLABIBigBQCYgCCWgJICYgKIAOgBIAIgBIAHAAQD+gXAchxQgDgKgEgKQgMgcgXgXIgMgLQgtglg8AAQhEAAgxAwQgqArgFA6QgUg/gygyQhRhRh0AAQhzAAhSBRQgUAUgMAVQgKgRgPgPQgogog4AAQg5AAgoAoQgiAigFAuQgbAMgYATQgIgMgLgKQgmgng3AAQg3AAgnAnQgPAPgJARQgPgGgRAAQggAAgYAUIABgQQAAg2gmgmQglglg2AAQgtAAgiAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.9,-100.7,223.8,201.4);
p.frameBounds = [rect];


(lib.part_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIDmIhBAAQh/CZkCgDQiugJhtiEIgRgVQgUhbgFhnQgGhrAMigQCmg8B0iGQCZgeCaBqQBsDADLB7IAOAIIADACIAPAIIgJgRIgDgEQgnhJgihSQByihCVgUQD0CkE6AyIAWAsIABAhQACCXguCIQh0DokNAUQkjgVjKjCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-44.5,170.1,89.1);
p.frameBounds = [rect];


(lib.part_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVTWQhigGhegUIAAAAQhdgUhagiQhYgihTguIgBAAIgEgCQhgg2hXhGQhXhHhLhWQgEgFgFgCQgGgBgFABQgGABgFAEQgFAEgCAFQgBAGABAGQABAFAEAFQA8BFBEA8QBFA9BLAyQADABABADQABADAAADQgBADgDACQgCADgDAAQghADgoADQgoADgtABQgDAAgDgBQhDgng8g0IAAABQg7gygzg+QgEgFgFgCQgGgCgGABIABAAQgHABgFAEIAAABQgEADgBAGIgBAAQgMAngEAnIAAAAQgFAnACAnQAAAEgCACQgBADgEABQgDABgDAAQhLgUhBgiIAAAAQhBgig3gtQg3gugsg4Qgtg3gjg/QgCgDABgEQAAgEADgCQADgCAEAAIAOAAQArAAAogOQAngNAigYIAAAAQAigXAYgeIAAABQAWgcANgeIAAgBQANgdACgeQADgdgHgcQgHgdgSgZIgBgCIgBgEIgEgDQgVghgOgeIAAAAQgPgjgGghQgHghAEgiQADggANgjQAOglAEgmQAEgjgGgjQgFgjgNgfQgOgegUgYQgUgWgbgNIAAAAQgKgFgNgFQgOgEgTgBQgSAAgWAEQgWAFgZAMQgZANgdAXQgdAXgfAkQgCADgDABQgDAAgDgBQgDgBgCgDQgBgDAAgDQAJhWAPhVQAQhUAXhSQAYhRAfhNQAehNAlhGIAAAAQAXgtAeguQAeguAkgvIABAAQAkgvArgsQAsgsAzgnQAzgnA8geIAAAAQA6gfBFgUQADgBACABQADABACACQACADAAADQAEBCAyA7IgBAAQAZAcAgAZIAAAAQAgAaAnAVQAnAVAqASIArASIABAAIArAQQAsAPArAMIAAAAQArANAoAJQA/APA/ALQA/ALA7AIQA9AIA3AFQA3AFAwACQAwADAnAAQAlAAAwgDQAwgCA3gFQA3gFA8gIQA8gIA/gLQA+gLBAgPQAogJArgNIAAAAQArgMAsgPIA1gUIAAAAIAhgOIABAAQAqgSAmgVIABAAQAmgVAhgaQAfgZAZgcIAAAAQAxg7AEhCQABgDABgDQACgCADgBQADgBADABQA0APAxAXIgBAAIAGADQAtAVAoAaQAqAcAnAfQADADAAADQABAEgCADIgIANIAAAAIgiA6QgQAcgMAcQgMAcgHAdQgHAcABAcQACAtAVAoQAVAqAqAmQArApBBAmIAAAAQAYAPAQARIAAgBQAQARALATQAKASAHAUIAAAAIAOAnIAAAAQAGAVAIAUQAHAUAMASQALARASANIAAAAQASAOAaAIQAcAIAnAAIAjgCQAEAAADACQADADABADQASBgAJBhQAIBhgBBfQgCBXgLBaQgLBZgXBXQgWBXgiBSQgiBSgvBJQgvBJg9A8IAAgBQg8A9hMAsQhMAshbAYQgDAAgDgBQgDgBgCgDQgBgCAAgEQACgngFgnQgEgngNgnIAAAAQgBgGgFgDIAAgBQgEgEgHgBIABAAQgHgBgFACIAAAAQgGACgEAFIgBAAQgxA+g8AyIAAgBQg7A0hEAnIgFABQgtgBgogDQgogDghgDQgDAAgCgDQgDgCAAgDQgBgDABgDQABgDADgBQBKgyBFg9QBFg8A7hFQAFgFABgFQABgGgCgGIAAAAQgCgFgEgEQgFgEgGgBQgFgBgGABQgGACgEAFIAAAAQhLBWhWBHQhXBGhgA2IAAAAIgDACIAAAAQh0BAh+AnQgCABgDAAQgDgBgCgCQgCgCAAgDQgIghgQgfIAAAAQgPgggYgfIgBAAQgbgkgjgcQgkgdgpgWQgogWgtgNQgsgNgsgEQgGAAgFACIAAAAQgEADgEAFIAAAAQgDAEgBAGQgBAGACAFIAAAAQARAqAEArQAEAsgHAqQgHAqgSAnQgSAngbAhIgEADIgDAAIgBAAgAoKN4IABABIABAAIAAAAQBzAoCGgIIAAAAIAHgCIAAABIAEgEICujiIADgEIBJhhQACgCADgBQADgBACABQACABACACIBFBdIAAABIACADIAAgBICnDkIAAAAQACADAEACQADABAEAAQCGgKByguIACAAQE6iACkmQIAAAAQACgFgCgFIAAAAQgBgFgEgDIAAAAQgEgDgFAAIkoAAIgEAAIgIAAQgGAAgEAEIAAABQgFAEAAAGQAAAFADADIACAEIgBAFQhEDMhzgNIgDgBQh9g9gIj2QAAgFgDgEIAAAAQgCgEgFgBQgEgCgFACQgEABgDADIAAABIhBBQIgEADIgEABInkAAIgEgBIgEgDIg5hGIAAAAQgDgEgEgBQgFgBgEABIgBAAQgEABgDADIAAABQgDADAAAFIAAAAQgSD/h/AtIgEAAQhpgMhDi9IAAgBQgCgEgDgDQgEgDgFAAIk7AAQgFABgEADIAAAAQgEADgBAEQgCAFACAFIAAAAQC0G0EyBpgAhWK1IAAAAIAAAAgAESprQiPCQAADKQAADLCPCNQCQCQDKgBQDLABCQiQQCOiNAAjLQAAjKiOiQQiQiPjLAAIAAAAQjLAAiPCPgAvLprQiPCQAADKQAADLCPCNQCPCQDLgBQDLABCPiQQCPiNAAjLQAAjKiPiQQiPiPjLAAIAAAAQjLAAiPCPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-123.9,361.1,247.8);
p.frameBounds = [rect];


(lib.part_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvTeQgpgcgBg8IAAgEQAAhMA/gMIAsgKQAqgJArgMQBCgTA9glQA8gkAzguQAtgpAPgVIAEgGIAGgKIAPggIACgHQAKgcADgeQgKAYgQAXQgLARgOAQIgEAEIgNANIgFAEQgWAVgYAQQhHAuhSAAQgYAAgTgGIgBAAQgUgHgOgMQgSgPgIgXIAAAAIAAgBQgHgTAAgZQAAgkASgbQAGgKAJgJQAIgJAKgGQgkgRgig/QgNgYgIgZQh4gZhahCQgSgMgNgOQgYgUgTgXIgRgUQghAfgeAWIgVAOIgSALQgrAXglAAQgkAAgagNQgKgFgIgHQgZgVgHgkIAAgCQgDgNAAgOQAAgMAEgLQALggArgcIAIgFIACgCIAVgLQATgKAWgIIADgLIAAgBQALgOAJgTIABgBIAAAAIgJgEIkxi8IAAAAIAAgBIAAgBIgCAAIgBAAIghgEQjegkhGi2IgBgDIAAAAQgihaADh9QAChUAYhMQAihtBQheIgVgZQhWhmhdg3IgYgOQgkgTglgMQAwgPAygDQCwgLC3CDQC6iMD+AwQB3i+DMhBIAlgKIAbgGIAGgCIgRAVQgUAYgRAZQhRBugiBsQgIAYgFAXQB6BKBTByQAhAtAbA0QA7BnAABeIAAABQAAARgCARQgDATgEATIAKADQFGBPCzEsQAnBDAhBNQAaBAAWBHIACAMQAbCogjCZQgOA8gXA5QgYA9gjA6QgUAhgXAgIgHAKIgaAhQgdAhgfAeQhpBmh9BFQiQBPh2AAQhQAAgmgZgAraEYQghgHgfgXIgGgEIgFgEQgZgVgMgYQgLgXAAgZQAAgpANgbIAFgKQAQgZAeAAQAOAAAKAHICkBpQAaAXAAAPIAAAGIgBABQgBANgHALQgLARgXAOQgnAZgqAAQgQAAgPgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.7,-127.1,207.4,254.3);
p.frameBounds = [rect];


(lib.part_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMBNvQhBhiiVgqIouhGQpDg+iZpWIgGgKIgBABQgaANgaAUQgiAagdAAQgjAAgSgXQgSgVAAgiQAAhGBDg9QAoglAtgUQgBhOALhHQAGgoAKgnQAJgoAOgmQAOgmASgkQhikTBBhBQBPgwDMBnQD+h0EPBIQDHhlBCAoQBGA4hGEcIANAcQAQAnAMAoQARA3AKA5QAMBHAABJQBdFOCxEDQCKC2BQDXQAvEFhcAMQgvgMg0hig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.9,-98.9,185.9,197.9);
p.frameBounds = [rect];


(lib.part_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArMPIIgBAAQgnhyAAhOIABgZQAEgqARgkIAEgKIACgEQAXgqAqgiQARgOAugfIADgCIAXgPQA8goAkgeIAAAAIAAgJQgDicA2gaQASgJAcgHIgBguQgFhdgThcIgEgSIgHANQgaA4gyAyQhHBIh2gPQgagDgWgIQhQgcgfhbQgohyAFhbQAFhbAKg3QAKg3AAgWQAAgegKg8QgKg8AAgbQAAhUA2gjQAUgMAngPIBIgbIAeAAIAygeQAlgUAXAAQAiAAAWArIAEAHQAPAgAFArIAZgPIAZAAIAACHQALgbBIggQBHgfAxAAQAWAAAqANQAVgqgThOQCwAnCtglIAAA/QBVgyBigQQgFgYgCggIgBgpQgCghACgWQAEgoAVAAQAGAAAJAKIAPAPQAGgGAzgjQA4gnAMAAQAVAAARAOIABABIAIAIQAcAeAZAMQAOAGAqALQAoAKAOAIQArAYAYAuIAfBNQgXAugRA3IgCADIgGAWQgIAagHAcIgIAlIgMBCIABAVIAAAGQADCRAmBqIAHARIAGAPQARApAYAiQgFAQgiANQgeALgYAAIgKAAIgagDQgcgEgYgMIgCgCQiQg5hPhMIhYhgIgDgDIgKAPQgVAmglAyQgHAMgGANQgSAmAAAoQAAAmAbBEIA6CNQBVDJAABwIAAATQgEA9gcA5QgYAwg4BjIgEAIIgTgVQgPgRgQgbQgXglgag5Qg0hwgagoQguhGg7ggIgMgFIgQgHQgXgKgkgDQgmgEgeAAQh2AAhNBQQgfAhgSAnQgaA4AABGQAAAJADAWQAEAWAAARQAuA1BBA4IBoBYQgZAHgdAEQgdADgJAFQgEABgCADQgEgMgmgPQgegMgcgNIgQgIQgkgShUAAQhiAAgzAkQg3AmgXBdIgGgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.8,-98.8,175.6,197.6);
p.frameBounds = [rect];


(lib.part_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmzAm0MAAAhNnMBNnAAAMAAABNngEgFmAiuQADABACADQATAnAlAjIAAABQAjAjAzAcQAqAYAvARQAvARAyAJQAvAJAxgBIAEAAQBDAAA6gSIABAAQA7gRAughIAAAAQAvgiAfgwIAAAAQAggwAPg+QABgEADgCQAEgCAEABQAEAAACAEQAlAyAyAmIAAAAQAxAmA7AYQApAQApAIQAqAIArAAQApAAApgIIAAAAQApgHAogQIAAAAQA1gUAughIAAAAQAughAkgrIAAAAQAkgrAZgzIAAAAQAZg0AMg3QAAgDADgDQACgCACAAQBlgWBYgxQBZgxBJhIIAAAAQBKhJA6hhIAAAAQA0haAmhpQAkhqAUh3QAVh2ACiBQAChxgMhzQgMhygZhuQgahwglhnQgmhogxhdQg1hhg/hSIAAAAQhAhThJhAQhIg/hQgsIAAAAQhQgthWgYQgEgBgCgEQgCgDABgEQAZhdAQheQARhgAKhdQAKheAChYQACgsgCgwQgBgqgDgqIAAABIgBgNQgFgxgKgvQgJgvgPgqQgOgpgWghIAAAAQgwhIhIgLQg4gIguASQgEABgEgBQgEgCgBgEQgCgDACgEQAjhfAZhhQAZhjANhkQAQiEgDiDQgDiEgYiCIAAgBQgBgEgDgFIgBgBIgGgFIgBAAIgHgDIgDAAIgHACIgBAAQh/Aoh1A/Qh0A/hmBUQhnBUhWBmQgCACgDAAQgDABgCgBQg6gQg6gJQg8gJg8AAQg7AAg7AJQg7AJg5AQQgDABgCgBQgDAAgCgCQhWhmhnhUQhnhUh0g/Qh0g/iAgoIAAAAQgHgCgGABQgGACgEAEIgDADIABgBQgDAFgBAEIAAABQgYCCgDCEQgECDARCEQANBkAZBjQAZBhAjBfQACAEgCADQgBAEgEACQgEABgDgBQgvgSg4AIQhJALgvBIIAAAAQgWAhgPApIgHAXIAAAAQgKAggHAiQgKAvgDAxIAAAAQgFAxgBAvQgBAwABAsQACBYAJBeQAKBdARBgQASBeAYBdQABAEgCADQgCAEgEABQhWAYhQAtQhQAshIA/QhKBAg+BTQhBBSg0BhQgxBdgmBoQgmBngZBwQgaBugLByQgNBzADBxQACCBAUB2QAVB3AlBqQAkBpA2BaQA4BgBKBKQBJBIBZAyQBYAwBmAWQADAAACACQACADABADQALA3AZA0QAYAzAlArQAkArAuAhQAtAhA2AUIAAAAQAoAQApAHIAAAAQApAIApAAQArAAApgIQArgIAogQIABAAQArgRAngbIAAAAQAngaAhghQACgCADAAIACAAIAEABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-248.5,-248.5,497,497);
p.frameBounds = [rect];


(lib.part_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDAnEMAAAhOHMBOHAAAMAAABOHgAgpZgICEBLIAGAKQgBAoACAlQAKD3CAB+QAbAaAaAXQB0BlBiAaQB3AfBGAHQAKABAcgEQAdgDAxgHQAbAGAsABIAKAAQAxAAB2gYQB2gXBKgtQBIguByg/QBxg/BegzQBOgqA/gKQALgBAMgBIADAAIgDgBIgRgKIgvgZIgjgTQhJghg1gBIg4gCIAAAAIAAgHQBShcAvh3QDSjOC4jTQFWmKAci0IAAgCQACgOAAgNQAAhBgogpQgLgMgOgKQg7gnheAAQiMAAjZBnQhcArhXA1IABgyIAAAAIAEhMIAEhyQABhugrhaQgWgvghgqIgHgIQgggmhGhGIhDhCQDBgqBtiOQByiUAah0IAHABQBximAjhvQAjhxABiPIAAgLQABh+gaiNIgLg1QgXhuhgiIQg3hOhPhXIgPgNQA2gzANglQANgjgBg4QABhTglg3QgXghgrgjQgRgNgUgOIgFgEQg2gvglgdQhIg3hGAAQgMABgKABQglAEgeARIgPgFQgOgCgJAAQhHgBhYAqIgQAIQhiAygYBIQgJAYAAAbIAAACIACAIIgFgGQgPgRgGgUQgGgRABgUQgBhrBHhQQBJhVBrgBIAgAIIAhAHQgNg3gqggQgrgghBAAQiMgBhcBfQhbBcABCFQAABwA1A5IAFAHQAjAhA/AUIAAAAIAcAGIgeAAQhWAEhQAyQhSAyg5BIIgDgCIAehQIARgvQALghAAgOQAAgRgKgDIgZAAQhOAAhNBQQhKBPgFA3QgDApADAWIAFAPQAHAWAJAaQg6gEgTgBIgOACQgSACgZAIQgjAJgOALIgFAFQgFADgDABIgJABIAAgBQgahug3hQQhaiBiZgiQg6gNhBAAQiIAAhhBGQhjBJgBBrQAAAeAGALQAegYA1hBQAagfAXgYIADAAQAIgCAiAAQBiAABNAYQA0AQAkAaQgpACgrALQhDAQjNB4QhWAugnA+QgjA3gJBXIgCAGQgFASgGA4QgIA6AAANQABBFARA9IAAABQAcBfBGBPQByCBCrgDQBPgCBFgmIALAIIgCASQgCANAAAHQgBBVAuB7QAZBDAcAvIAKgBQABAtAvA7QAQATAVAWIAxAuIgIAIQgegEhhgLIhygNQgnAAgRAGQgbAHAAAZQAABXB3AVQAnAIBOAEQBdAGAkAEIhvApQg8AWgtAOQg7AQgeASQgzAdABApQAAAgBUAAQAyAABkgiQA5gUBegkIABACQghAhgrA6QgmAzAHATQAGATAGAKQAGAKAjgBQAigDAxgoQAwgoAxhGIAKABQAWACANAEQAJACARABIAEAEIAAAAQB/B3C0BoIAEACIAiATQAwAbAsAVQBWArBIAVIABABIgDAGIgBAJQgMBegfBkQgaBUggBEQgIAOgSA9QgQAzgLAOQgYAdgoAsQgeAmgNAnIACACIAGABQAKAAAhgZIAhgcQgFAQgNAYIgVAoIAAAUIABABQAAABABAAQAAAAABAAQAAAAABAAQABAAABAAQAJAAAngsIAFgFIAkgrQgOAUgIAhIAAACQgGAbAAAfQAAAMADACQABABAogyQApgzAFgJQgFAZAAAUQAABIAQAAQAOAAAMg5IAPhGQAOAEAVASQATAPAPAAQAIAAADgIQADgFAAgGIgBgHQgDgNgNgaQgSgkAAgKQAAgUAuhMIAuhJQgDAngOAwIgHAYQgLAvABAvQAAAXADAWQAOBZBIAzQASANASALIgGAJIAXB+IALBFQAGAtABAUQAAAKgCALIgBADQgKAqgpAzQgVAagqAqQg0gjhjhJQh6hbhSgnQh5g8h1AAQhHAAhLAVIgbAIQhmAhhZA/IgBABIhsg6IgQgLQAig7AYg8QAYg6ANg7QAjiZgbioIgCgNQgVhGgbhAQgghOgohDQixktlGhPIgKgDQAEgUADgTQACgRAAgQIAAgBQAAheg7hlQAXibgWifQgViXg+ibIgGABIgbAHIgmAKQjOBBh2C9Qj+gwi6CNQi4iEiwAMQgxADgxAOQgRCnA0ClQAoCABSCBQgDB9AjBZIgBABIgCABQi5hiioiuQhhhmhbh9QhXifg6BRQgPAWgNAmQhtFXENCRIAyAeQEDCaD+CAQgNAbAAAqQABAZAKAWQAMAZAaAUIAEAEIAGAFQAfAXAiAHQAPADAPAAQAqAAAngZQAXgPALgQIDbB+IAMAFQgFAMAAAMQABAOACANIAAACQAHAkAZAVQAIAHAKAFQAaANAkAAQAlAAAsgYIHOEKQgSAbAAAkQAAAYAHAUIAAABIAAAAQAJAXARAPQAPAMATAGIABAAQAUAHAYAAQBSAABGguQAYgQAXgVIAEgFIAOgMIADgFQAOgQALgQQARgXAJgZQgDAfgKAcIgCAHIgOAfIgGALIgFAGQgPAVgsApQg0Aug8AkQg9AlhCASQgrAMgpAKIgtAKQg/AMAABMIAAAEQABA8AqAcQAlAYBQAAQB2AACRhOQB9hGBohlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.part_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDAnEMAAAhOHMBOHAAAMAAABOHgAv+abIhgEmQhSCqDHEtQD1lBCsnCIAGgBQBOgiAWgPQAogbgBgYQABgLgQgeQgBgWgag3QAZhfAli2QA3kSAAhTQAAhigPh6QFzAoDwkkQBoh/A7hyQBPiWAAiEQgBgzgigdQgKgIgKgGIAEgMQgWglgjgaQgpgegqgCIABgKQgXgggMgFQgGgDglABQgvgBgpAoIgEgEIgpAAQgdAYgJANQgLARAAAeQAAAZAJANIgFADIgUAvQgMAkgMAYIgBAAQgKgIgNABQgIAAgMAdQgKAdAAAQQABARAPAcQAPAeAOAAQAFAAAFgBQAIA5AVApQhzBwiZAEIihjWQAUgJARgUQgyh4h4hDQCshmAaiHIADgWQAQAEAOAGQBSAjAbBqQBKhsgRhtQgGgkgQglQB1BIBLgfQg7gYgnhvIBsAAIgUhaQCtAbBCjFQhKA9hdhaIAHgWIABgFQBAAQBFAEQg3gfgyg4QAllDhkjrIgSgoIgEgJQiPlPjIh3QjHh2hvgHQhwgIguAMIg6AOIgBAAIAAgEQAVgvBBgsQBBguAngSQgRgMgVgDQgHAAghAAQhegBhiAkQiNAxAABdQABAMAMAWQgxgNghgCQgSgBhLAAQiiAAi/BoQi0BihABrQhRCrhEBzQiBDbhpAAIgbAAIABADQASAqAgA4QA7BlA6AfQg1A/ghBbQglBmgBBRIAGAHQAsgbAegQQAggRAcgIIAIgDIgDAWQAACXB1BlIASAMQhlCcgrB4Qg3CZgBC4IACBlQACAdAEAZIAAABIAIACQFzBlHQhqQBcCHArCWQh6C5gYBlQgYBkARDBQALB1BMB8QASAcATAbQgVgPg+gIIiZgTQg+gJgZAnQgZAlgSAqQgSAqgLAfQgLAeguBvQgZA7gJAeQgqCHEtipQCrAyC1AQgALAFEQglAlAAA1QAAAXAHATIgWAGQkzBGgkBrQgdB5BDBDQgTAdgTAdQjYFkA0G0QC0McNlgSQA5gBA9gFQO1gOBssWQAfnujpknIgfglQAdgdAEghQAziZjrhUQgygSg0gNQitgsjVgBIo4AAIgKgDQADgNAAgOQAAg1gmglQgkglg2AAQg0AAgmAlgAcQDdQgYAYAAAjQAAAiAYAZQAZAYAjAAQAiAAAYgYQAYgZABgiQgBgjgYgYQgYgYgiAAQgjAAgZAYgAYmBvQgRARAAAYQAAAYARAQQARASAXgBQAYABARgSQARgQAAgYQAAgYgRgRQgRgQgYAAQgXAAgRAQgAI1xXQCYJWJEA+IIwBGQCVAqBBBiQAzBiAvAMQBdgMgwkFQhPjXiKi2QixkDhdlQQgBhJgLhGQgKg5gRg4QgMgogRgmIgMgdQBGkchGg3QhCgpjHBlQkRhHj+BzQjMhnhPAwQhBBBBhETQgRAkgOAmQgOAngKAoQgKAmgFApQgLBGABBOQguAUgnAlQhDA9AABGQAAAkARAVQATAXAjAAQAcAAAjgaQAagUAZgPgA62jkQAAgPAAg/QgBhGALhAQAtA6AsgCQgEhPAtgdIAGAHQArCFBTANQhQAwg5BhIh/ATQgGgZgCgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.part_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDAnEMAAAhOHMBOHAAAMAAABOHgEAZUAiTQAABJADApIACAPIAAAKQBxBHA0AXQByA0BuAAQBNgBA6giQA7glAAg1QAAgegxgqQgcgYghgTQArANAaAIIAFACQAHACAvAAQBKAABEgzQBMg2AAhJQgBg2grgUQgWgKghAAQAQgUALgRQAfgyAAg4QAAgxgdgbQgcgZgwABQggAAgdAKQAphJAVjFQgCgvgCgrQg5sFqYhXQB7imAbjwQgBhpgXhmQg2j/ixj2QhGhXhJA8QhlBThBDCQhxguhwAbQgih2hbiKQg5hSg5ATIgFgHQAlgxAVhKQAMgrAThnIAPhbIAHgtQARhwAAgtQABg1gMg7IARgZQBUiDA2ibQBmklgLl+IgkgDQhSgIhMgBQhQgChJAGQihAMi5A/IgOAEQisA8gKAkQgDAKgCANQgpghhBgfQgegOhNggQhugrgYgHQg0gOhNAAQiGgBh/A3Qg6AYgwAhQAfhjhahIQgTgQgSgMQg4gmgnAAQg0AAgGACQgFACggAQQAWANAYAVQAfAYAjAiQAqAuAaAtIgEADQgHgJgcgLQgbgLgLAAQgvAAhAAbQiGg2iDghQkOhGkFAQQggJECNFkIAAABIAJAVQgXBqgBCoQAABVAaBiIABABIAdByIAVhzIAEABQAOAuAaA0QBBCHBSAAIAMAVQB7DNCgBTQAhAqAnAkQBHBCBaA0QBuA1BsAZQATBOgVAqQgqgMgWAAQgwAAhIAcQhHAggMAcIAAiFIgZAAIgYAOQgGgrgPggIgDgHQgXgqghgBQgYAAglAVIgyAdIgeAAIhIAbQgnAPgUAMQg1AjAABSQAAAbAKA9QAJA7ABAfQgBAWgJA2QgLA4gFBbQgEBaAoB0QAeBbBQAdQAXAHAZADQB2APBIhHQAxgzAag3IALAFQAUBbAFBdIAAAuQgcAHgRAKQg3AaADCbIAAAJIAAAAQgjAfg8AnIgYAQIgDAAQgKgCgKgGQgNgHgKAAQg2gBhqBsIgJADIgPgqQguh3hJAAQgfABgpAVQgzAagaAIQgEglgJgXIgCgGQgHgNgIgIQgYgXg7gBQghAAg9ArQg8ArgJAAQgCgBgKgEIgOgHIgZgNQgtgaghAAQg9ABgaAYQgTASgoBOIgFAAQgPgCgdgGQgigHgOAAQg5gBgPAQQgQAOABA1QAAAKACAaQACANAOA7IgJAFQhEA9gmBqQghBggBBtQAABOAeBGQAHARAIAQQAlBFA7AqQARAMASAJIgWgeIgEgFQgPgUAAgcQAAg+A/iCQA/iCgBhEQAAg1gUhCIgOgvQAjALAigCQAhAAAMgVQAKgPAAggIgCgfQgDgbABgPQAQALAwAoQAwAjAtAAQA7AAAUgjIAshvIAEAAIA7BQQAtAzA0AAQAugBAcgoQAdA0AkAaQAtAgA9ABIAlgBQAWgDALgLQADA+AeAgQAeAgBDAyIAAABQABACAEABIAJgEIAAABIAGATIACADQARAwAYA3QBpDqCcCaIDYDTQA2AxArAkQBuBYArAAQAZAAAEgiIAAg/QABgtgKhxQgGhVAFgYQAGg1gXgzQgUgrg2hNIhEhjIgXggQAaAAAZgGQAZgGAYgNQAtgcAXgwQAoAfAmAbIDjClIACADIgHAFQgpAaAAAuQAAAnAqAaIALAHIgIAPQgxAGgjAdQg4AuABBXQgBA4AkAgQAgAdA6AAQApAABHgpIBOg0IgIAUQgKAaAAAFQAAAxAaAYQAUATAjABQA7gBA3gqQAlgdAwg/QAAAUgEAsQAAAnAYAQQAWAPAsABQAwgBBUhwQAbgkAbgpQAYATAZAOQBVAuCTABQBSAABTggQBSggAkggIAXATQApAeAxAUQBMAgBLgBQBTAAA3gXQAtgVAkgogAizVgIADgIQA4hjAYgwQAcg5AEg8IABgTQAAhxhWjJIg6iNQgbhGABgmQAAgnASgnQAFgMAHgMQAlgzAWglIAMgMIBYBfQBOBMCPA5IADACQAXAMAcAFQgBASAAAZIAAAUIABAtQAEAvAPARIAJANIAAABQjUCMg+GIQgyAWgdAZQgfAcgTAqQgTgLgQgPgAk6iGQBZgTBYgoQABAgAFAYQhiAQhVAyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.page_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.page_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.location_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_4_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_3_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.location_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.location_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.location_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.location_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.hint_drag_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_drag_1_img();
	this.instance.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_img();
	this.instance.setTransform(-280,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-196.5,560,393);
p.frameBounds = [rect];


(lib.fixation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fixation_img();
	this.instance.setTransform(-20,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-50,40,100);
p.frameBounds = [rect];


(lib.color_swatch_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjuCVQg9AAAAg7IAAiyQAAg9A9AAIHeAAQA7AAABA9IAACyQgBA7g7AAg");
	this.shape.setTransform(30,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,30);
p.frameBounds = [rect];


(lib.color_picker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,240,360);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-160,-160);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-160,-160);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-160,-160);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-160,-160);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-160,-160);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-160,-160);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-160,-160);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-160,-160);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-160,-160);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-160,-160);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-160,-160);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-160,-160);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_geometric_border_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.geometric_border_img();
	this.instance.setTransform(-40,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-300,80,600);
p.frameBounds = [rect];


(lib.body_bat_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bat_img();
	this.instance.setTransform(-90,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-50,180,100);
p.frameBounds = [rect];


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EgTgAj8MAAAhH2MAnBAAAMAAABH2g");
	this.shape.setTransform(130,235);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,255,465);
p.frameBounds = [rect];


(lib.bg_btn_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_btn_panel_img();
	this.instance.setTransform(-35,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-25,70,50);
p.frameBounds = [rect];


(lib.bg_bar_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_bar_panel_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,250,40);
p.frameBounds = [rect];


(lib.bg_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_3_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_5_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect];


(lib.bg_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_6_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect];


(lib.bg_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_5_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_6_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect];


(lib.bg_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect];


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
	this.shape.graphics.f("#FFCC99").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fA2sMAAAhtXMB8/AAAMAAABtXg");
	this.shape.setTransform(500,250,1.25,0.714);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,500);
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
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.substrate_panel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_panel_img();
	this.instance.setTransform(-35,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bg
	this.instance_1 = new lib.bg_btn_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-25,70,50);
p.frameBounds = [rect, rect, rect, rect];


(lib.picture_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.part_10_4_mc();
	this.instance.setTransform(405.5,252.4);

	this.instance_1 = new lib.part_9_4_mc();
	this.instance_1.setTransform(405.4,131.4);

	this.instance_2 = new lib.part_8_4_mc();
	this.instance_2.setTransform(405.5,275.2);

	this.instance_3 = new lib.part_7_4_mc();
	this.instance_3.setTransform(405.4,177.4);

	this.instance_4 = new lib.part_6_4_mc();
	this.instance_4.setTransform(405.5,211);

	this.instance_5 = new lib.part_5_4_mc();
	this.instance_5.setTransform(404.7,467.9);

	this.instance_6 = new lib.part_4_4_mc();
	this.instance_6.setTransform(403,368.5);

	this.instance_7 = new lib.part_3_4_mc();
	this.instance_7.setTransform(405.4,510.8);

	this.instance_8 = new lib.part_2_4_mc();
	this.instance_8.setTransform(405.5,360.9);

	this.instance_9 = new lib.part_1_4_mc();
	this.instance_9.setTransform(405.8,388.3);

	this.instance_10 = new lib.part_0_4_mc();
	this.instance_10.setTransform(399.5,300.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(151,52,497,497);
p.frameBounds = [rect];


(lib.picture_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.part_11_3_mc();
	this.instance.setTransform(562.5,372.1);

	this.instance_1 = new lib.part_10_3_mc();
	this.instance_1.setTransform(558.2,392.1);

	this.instance_2 = new lib.part_9_3_mc();
	this.instance_2.setTransform(512.6,370.7);

	this.instance_3 = new lib.part_8_3_mc();
	this.instance_3.setTransform(516.9,233.5);

	this.instance_4 = new lib.part_7_3_mc();
	this.instance_4.setTransform(508.4,236);

	this.instance_5 = new lib.part_6_3_mc();
	this.instance_5.setTransform(460,135.2);

	this.instance_6 = new lib.part_5_3_mc();
	this.instance_6.setTransform(470.3,172.5);

	this.instance_7 = new lib.part_4_3_mc();
	this.instance_7.setTransform(495,488.9);

	this.instance_8 = new lib.part_3_3_mc();
	this.instance_8.setTransform(292.1,376.8);

	this.instance_9 = new lib.part_2_3_mc();
	this.instance_9.setTransform(281.9,275.9);

	this.instance_10 = new lib.part_1_3_mc();
	this.instance_10.setTransform(316.5,360.4);

	this.instance_11 = new lib.part_0_3_mc();
	this.instance_11.setTransform(400,300);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8B5C6").s().p("AAAACIAAgEIAAAEg");
	this.shape.setTransform(552.4,491.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#461B51").s().p("AgBACIADgDIgCADg");
	this.shape_1.setTransform(443.7,309.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(150,50,500,500);
p.frameBounds = [rect];


(lib.picture_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.part_8_2_mc();
	this.instance.setTransform(319.2,345.3);

	this.instance_1 = new lib.part_7_2_mc();
	this.instance_1.setTransform(314.5,389.4);

	this.instance_2 = new lib.part_6_2_mc();
	this.instance_2.setTransform(316.2,190.2);

	this.instance_3 = new lib.part_5_2_mc();
	this.instance_3.setTransform(294.9,199.2);

	this.instance_4 = new lib.part_4_2_mc();
	this.instance_4.setTransform(301,166.9);

	this.instance_5 = new lib.part_3_2_mc();
	this.instance_5.setTransform(523.5,347.8);

	this.instance_6 = new lib.part_2_2_mc();
	this.instance_6.setTransform(525.5,444.9);

	this.instance_7 = new lib.part_1_2_mc();
	this.instance_7.setTransform(530.2,187.8);

	this.instance_8 = new lib.part_0_2_mc();
	this.instance_8.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(150,50,500,500);
p.frameBounds = [rect];


(lib.picture_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.part_9_1_mc();
	this.instance.setTransform(364.1,113.7);

	this.instance_1 = new lib.part_8_1_mc();
	this.instance_1.setTransform(508,511.1);

	this.instance_2 = new lib.part_7_1_mc();
	this.instance_2.setTransform(513.5,440.1);

	this.instance_3 = new lib.part_6_1_mc();
	this.instance_3.setTransform(499.8,319.7);

	this.instance_4 = new lib.part_5_1_mc();
	this.instance_4.setTransform(317.3,278.5);

	this.instance_5 = new lib.part_4_1_mc();
	this.instance_5.setTransform(342.6,469.3);

	this.instance_6 = new lib.part_3_1_mc();
	this.instance_6.setTransform(351.8,203.1);

	this.instance_7 = new lib.part_2_1_mc();
	this.instance_7.setTransform(355.2,202.5);

	this.instance_8 = new lib.part_1_1_mc();
	this.instance_8.setTransform(348.6,359.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// parts
	this.instance_9 = new lib.part_0_1_mc();
	this.instance_9.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(150,50,500,500);
p.frameBounds = [rect];


(lib.photo_panel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_panel_img();
	this.instance.setTransform(-35,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bg
	this.instance_1 = new lib.bg_btn_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-26,70,51);
p.frameBounds = [rect, rect, rect, rect];


(lib.hint_drag_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hint_drag_1_mc();
	this.instance.setTransform(0,0,0.889,0.889);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:1,scaleY:1,alpha:0.801},10).to({scaleX:0.89,scaleY:0.89,alpha:1},20).to({scaleX:1,scaleY:1,alpha:0.801},10).to({scaleX:0.89,scaleY:0.89,alpha:0.012},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-16.1,-16.1,32.4,32.4), new cjs.Rectangle(-16.3,-16.3,32.8,32.8), new cjs.Rectangle(-16.5,-16.5,33.2,33.2), new cjs.Rectangle(-16.7,-16.7,33.6,33.6), new cjs.Rectangle(-16.9,-16.9,34,34), new cjs.Rectangle(-17.1,-17.1,34.4,34.4), new cjs.Rectangle(-17.3,-17.3,34.8,34.8), new cjs.Rectangle(-17.5,-17.5,35.2,35.2), new cjs.Rectangle(-17.7,-17.7,35.6,35.6), new cjs.Rectangle(-18,-18,36,36), new cjs.Rectangle(-17.9,-17.9,35.8,35.8), new cjs.Rectangle(-17.8,-17.8,35.6,35.6), new cjs.Rectangle(-17.7,-17.7,35.4,35.4), new cjs.Rectangle(-17.6,-17.6,35.2,35.2), new cjs.Rectangle(-17.5,-17.5,35,35), new cjs.Rectangle(-17.3,-17.3,34.8,34.8), new cjs.Rectangle(-17.2,-17.2,34.6,34.6), new cjs.Rectangle(-17.1,-17.1,34.4,34.4), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-16.9,-16.9,34,34), new cjs.Rectangle(-16.8,-16.8,33.8,33.8), new cjs.Rectangle(-16.8,-16.8,33.6,33.6), new cjs.Rectangle(-16.7,-16.7,33.4,33.4), new cjs.Rectangle(-16.6,-16.6,33.2,33.2), new cjs.Rectangle(-16.5,-16.5,33,33), new cjs.Rectangle(-16.3,-16.3,32.8,32.8), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16.1,-16.1,32.4,32.4), new cjs.Rectangle(-16,-16,32.2,32.2), new cjs.Rectangle(-16,-16,32,32), new cjs.Rectangle(-16.1,-16.1,32.4,32.4), new cjs.Rectangle(-16.3,-16.3,32.8,32.8), new cjs.Rectangle(-16.5,-16.5,33.2,33.2), new cjs.Rectangle(-16.7,-16.7,33.6,33.6), new cjs.Rectangle(-16.9,-16.9,34,34), new cjs.Rectangle(-17.1,-17.1,34.4,34.4), new cjs.Rectangle(-17.3,-17.3,34.8,34.8), new cjs.Rectangle(-17.5,-17.5,35.2,35.2), new cjs.Rectangle(-17.7,-17.7,35.6,35.6), new cjs.Rectangle(-18,-18,36,36), new cjs.Rectangle(-17.9,-17.9,35.8,35.8), new cjs.Rectangle(-17.8,-17.8,35.6,35.6), new cjs.Rectangle(-17.7,-17.7,35.4,35.4), new cjs.Rectangle(-17.6,-17.6,35.2,35.2), new cjs.Rectangle(-17.5,-17.5,35,35), new cjs.Rectangle(-17.3,-17.3,34.8,34.8), new cjs.Rectangle(-17.2,-17.2,34.6,34.6), new cjs.Rectangle(-17.1,-17.1,34.4,34.4), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-16.9,-16.9,34,34), new cjs.Rectangle(-16.8,-16.8,33.8,33.8), new cjs.Rectangle(-16.8,-16.8,33.6,33.6), new cjs.Rectangle(-16.7,-16.7,33.4,33.4), new cjs.Rectangle(-16.6,-16.6,33.2,33.2), new cjs.Rectangle(-16.5,-16.5,33,33), new cjs.Rectangle(-16.3,-16.3,32.8,32.8), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16.1,-16.1,32.4,32.4), new cjs.Rectangle(-16,-16,32.2,32.2), rect=new cjs.Rectangle(-16,-16,32,32), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.geometric_border_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_geometric_border_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-300,80,600);
p.frameBounds = [rect];


(lib.decor_top_picture_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fixation_mc();
	this.instance.setTransform(150,0);

	this.instance_1 = new lib.fixation_mc();
	this.instance_1.setTransform(650,0);

	this.instance_2 = new lib.fixation_mc();
	this.instance_2.setTransform(275,0);

	this.instance_3 = new lib.fixation_mc();
	this.instance_3.setTransform(525,0);

	this.instance_4 = new lib.fixation_mc();
	this.instance_4.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.decor_top_picture_4_img();
	this.instance_5.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(130,-50,540,600);
p.frameBounds = [rect];


(lib.decor_top_picture_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fixation_mc();
	this.instance.setTransform(150,0);

	this.instance_1 = new lib.fixation_mc();
	this.instance_1.setTransform(650,0);

	this.instance_2 = new lib.fixation_mc();
	this.instance_2.setTransform(275,0);

	this.instance_3 = new lib.fixation_mc();
	this.instance_3.setTransform(525,0);

	this.instance_4 = new lib.fixation_mc();
	this.instance_4.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.decor_top_picture_3_img();
	this.instance_5.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(130,-50,540,600);
p.frameBounds = [rect];


(lib.decor_top_picture_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fixation_mc();
	this.instance.setTransform(150,0);

	this.instance_1 = new lib.fixation_mc();
	this.instance_1.setTransform(650,0);

	this.instance_2 = new lib.fixation_mc();
	this.instance_2.setTransform(275,0);

	this.instance_3 = new lib.fixation_mc();
	this.instance_3.setTransform(525,0);

	this.instance_4 = new lib.fixation_mc();
	this.instance_4.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.decor_top_picture_2_img();
	this.instance_5.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(130,-50,540,600);
p.frameBounds = [rect];


(lib.decor_top_picture_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fixation_mc();
	this.instance.setTransform(150,0);

	this.instance_1 = new lib.fixation_mc();
	this.instance_1.setTransform(650,0);

	this.instance_2 = new lib.fixation_mc();
	this.instance_2.setTransform(275,0);

	this.instance_3 = new lib.fixation_mc();
	this.instance_3.setTransform(525,0);

	this.instance_4 = new lib.fixation_mc();
	this.instance_4.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.decor_top_picture_1_img();
	this.instance_5.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(130,-50,540,600);
p.frameBounds = [rect];


(lib.decor_bottom_picture_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_picture_4_img();
	this.instance.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.page_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.geometric_border_mc();
	this.instance_2.setTransform(740,300,1,1,0,0,180);

	this.instance_3 = new lib.geometric_border_mc();
	this.instance_3.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,0,760,600);
p.frameBounds = [rect];


(lib.decor_bottom_picture_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_picture_3_img();
	this.instance.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.page_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.geometric_border_mc();
	this.instance_2.setTransform(740,300,1,1,0,0,180);

	this.instance_3 = new lib.geometric_border_mc();
	this.instance_3.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,0,760,600);
p.frameBounds = [rect];


(lib.decor_bottom_picture_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_picture_2_img();
	this.instance.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.page_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.geometric_border_mc();
	this.instance_2.setTransform(740,300,1,1,0,0,180);

	this.instance_3 = new lib.geometric_border_mc();
	this.instance_3.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,0,760,600);
p.frameBounds = [rect];


(lib.decor_bottom_picture_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_picture_1_img();
	this.instance.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.page_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.geometric_border_mc();
	this.instance_2.setTransform(740,300,1,1,0,0,180);

	this.instance_3 = new lib.geometric_border_mc();
	this.instance_3.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,0,760,600);
p.frameBounds = [rect];


(lib.bat_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_bat_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},49).to({y:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-50,180,100);
p.frameBounds = [rect, new cjs.Rectangle(-90,-50.2,180,100), new cjs.Rectangle(-90,-50.4,180,100), new cjs.Rectangle(-90,-50.6,180,100), new cjs.Rectangle(-90,-50.8,180,100), new cjs.Rectangle(-90,-51,180,100), new cjs.Rectangle(-90,-51.2,180,100), new cjs.Rectangle(-90,-51.4,180,100), new cjs.Rectangle(-90,-51.6,180,100), new cjs.Rectangle(-90,-51.8,180,100), new cjs.Rectangle(-90,-52,180,100), new cjs.Rectangle(-90,-52.2,180,100), new cjs.Rectangle(-90,-52.4,180,100), new cjs.Rectangle(-90,-52.6,180,100), new cjs.Rectangle(-90,-52.8,180,100), new cjs.Rectangle(-90,-53,180,100), new cjs.Rectangle(-90,-53.2,180,100), new cjs.Rectangle(-90,-53.4,180,100), new cjs.Rectangle(-90,-53.6,180,100), new cjs.Rectangle(-90,-53.9,180,100), new cjs.Rectangle(-90,-54.1,180,100), new cjs.Rectangle(-90,-54.3,180,100), new cjs.Rectangle(-90,-54.5,180,100), new cjs.Rectangle(-90,-54.7,180,100), new cjs.Rectangle(-90,-54.9,180,100), new cjs.Rectangle(-90,-55.1,180,100), new cjs.Rectangle(-90,-55.3,180,100), new cjs.Rectangle(-90,-55.5,180,100), new cjs.Rectangle(-90,-55.7,180,100), new cjs.Rectangle(-90,-55.9,180,100), new cjs.Rectangle(-90,-56.1,180,100), new cjs.Rectangle(-90,-56.3,180,100), new cjs.Rectangle(-90,-56.5,180,100), new cjs.Rectangle(-90,-56.7,180,100), new cjs.Rectangle(-90,-56.9,180,100), new cjs.Rectangle(-90,-57.1,180,100), new cjs.Rectangle(-90,-57.3,180,100), new cjs.Rectangle(-90,-57.5,180,100), new cjs.Rectangle(-90,-57.7,180,100), new cjs.Rectangle(-90,-57.9,180,100), new cjs.Rectangle(-90,-58.1,180,100), new cjs.Rectangle(-90,-58.3,180,100), new cjs.Rectangle(-90,-58.5,180,100), new cjs.Rectangle(-90,-58.8,180,100), new cjs.Rectangle(-90,-59,180,100), new cjs.Rectangle(-90,-59.2,180,100), new cjs.Rectangle(-90,-59.4,180,100), new cjs.Rectangle(-90,-59.6,180,100), new cjs.Rectangle(-90,-59.8,180,100), new cjs.Rectangle(-90,-60,180,100), new cjs.Rectangle(-90,-59.8,180,100), new cjs.Rectangle(-90,-59.6,180,100), new cjs.Rectangle(-90,-59.4,180,100), new cjs.Rectangle(-90,-59.2,180,100), new cjs.Rectangle(-90,-59,180,100), new cjs.Rectangle(-90,-58.8,180,100), new cjs.Rectangle(-90,-58.6,180,100), new cjs.Rectangle(-90,-58.4,180,100), new cjs.Rectangle(-90,-58.2,180,100), new cjs.Rectangle(-90,-58,180,100), new cjs.Rectangle(-90,-57.8,180,100), new cjs.Rectangle(-90,-57.6,180,100), new cjs.Rectangle(-90,-57.4,180,100), new cjs.Rectangle(-90,-57.2,180,100), new cjs.Rectangle(-90,-57,180,100), new cjs.Rectangle(-90,-56.8,180,100), new cjs.Rectangle(-90,-56.6,180,100), new cjs.Rectangle(-90,-56.4,180,100), new cjs.Rectangle(-90,-56.2,180,100), new cjs.Rectangle(-90,-56,180,100), new cjs.Rectangle(-90,-55.8,180,100), new cjs.Rectangle(-90,-55.6,180,100), new cjs.Rectangle(-90,-55.4,180,100), new cjs.Rectangle(-90,-55.2,180,100), new cjs.Rectangle(-90,-55,180,100), new cjs.Rectangle(-90,-54.8,180,100), new cjs.Rectangle(-90,-54.6,180,100), new cjs.Rectangle(-90,-54.4,180,100), new cjs.Rectangle(-90,-54.2,180,100), new cjs.Rectangle(-90,-54,180,100), new cjs.Rectangle(-90,-53.8,180,100), new cjs.Rectangle(-90,-53.6,180,100), new cjs.Rectangle(-90,-53.4,180,100), new cjs.Rectangle(-90,-53.2,180,100), new cjs.Rectangle(-90,-53,180,100), new cjs.Rectangle(-90,-52.8,180,100), new cjs.Rectangle(-90,-52.6,180,100), new cjs.Rectangle(-90,-52.4,180,100), new cjs.Rectangle(-90,-52.2,180,100), new cjs.Rectangle(-90,-52,180,100), new cjs.Rectangle(-90,-51.8,180,100), new cjs.Rectangle(-90,-51.6,180,100), new cjs.Rectangle(-90,-51.4,180,100), new cjs.Rectangle(-90,-51.2,180,100), new cjs.Rectangle(-90,-51,180,100), new cjs.Rectangle(-90,-50.8,180,100), new cjs.Rectangle(-90,-50.6,180,100), new cjs.Rectangle(-90,-50.4,180,100), new cjs.Rectangle(-90,-50.2,180,100), new cjs.Rectangle(-90,-50,180,100)];


(lib.bar_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shadow_color_swatch_mc();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// swatch
	this.color_swatch_mc = new lib.color_swatch_mc();
	this.color_swatch_mc.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.color_swatch_mc).wait(1));

	// hint
	this.instance_1 = new lib.hint_drag_2_mc();
	this.instance_1.setTransform(230,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_bar_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,250,40);
p.frameBounds = [rect];


(lib.back_panel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.back_panel_img();
	this.instance.setTransform(-33,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// bg
	this.instance_1 = new lib.bg_btn_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-25,72,50);
p.frameBounds = [rect, rect, rect, rect];


(lib.animation_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},4).to({scaleX:1,scaleY:1,alpha:0.102},10).wait(1));

	// animation
	this.instance_1 = new lib.location_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-148.8,-148.8,297.7,297.7), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-156.4,-156.4,312.9,312.9), new cjs.Rectangle(-160.2,-160.2,320.5,320.5), new cjs.Rectangle(-158.7,-158.7,317.5,317.5), new cjs.Rectangle(-157.2,-157.2,314.4,314.4), new cjs.Rectangle(-155.6,-155.6,311.4,311.4), new cjs.Rectangle(-154.1,-154.1,308.3,308.3), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-151.1,-151.1,302.2,302.2), new cjs.Rectangle(-149.5,-149.5,299.2,299.2), new cjs.Rectangle(-148,-148,296.1,296.1), new cjs.Rectangle(-146.5,-146.5,293.1,293.1), new cjs.Rectangle(-145,-145,290,290)];


(lib.animation_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},4).to({scaleX:1,scaleY:1,alpha:0.102},10).wait(1));

	// animation
	this.instance_1 = new lib.location_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-148.8,-148.8,297.7,297.7), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-156.4,-156.4,312.9,312.9), new cjs.Rectangle(-160.2,-160.2,320.5,320.5), new cjs.Rectangle(-158.7,-158.7,317.5,317.5), new cjs.Rectangle(-157.2,-157.2,314.4,314.4), new cjs.Rectangle(-155.6,-155.6,311.4,311.4), new cjs.Rectangle(-154.1,-154.1,308.3,308.3), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-151.1,-151.1,302.2,302.2), new cjs.Rectangle(-149.5,-149.5,299.2,299.2), new cjs.Rectangle(-148,-148,296.1,296.1), new cjs.Rectangle(-146.5,-146.5,293.1,293.1), new cjs.Rectangle(-145,-145,290,290)];


(lib.animation_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},4).to({scaleX:1,scaleY:1,alpha:0.102},10).wait(1));

	// animation
	this.instance_1 = new lib.location_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-148.8,-148.8,297.7,297.7), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-156.4,-156.4,312.9,312.9), new cjs.Rectangle(-160.2,-160.2,320.5,320.5), new cjs.Rectangle(-158.7,-158.7,317.5,317.5), new cjs.Rectangle(-157.2,-157.2,314.4,314.4), new cjs.Rectangle(-155.6,-155.6,311.4,311.4), new cjs.Rectangle(-154.1,-154.1,308.3,308.3), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-151.1,-151.1,302.2,302.2), new cjs.Rectangle(-149.5,-149.5,299.2,299.2), new cjs.Rectangle(-148,-148,296.1,296.1), new cjs.Rectangle(-146.5,-146.5,293.1,293.1), new cjs.Rectangle(-145,-145,290,290)];


(lib.animation_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},4).to({scaleX:1,scaleY:1,alpha:0.102},10).wait(1));

	// animation
	this.instance_1 = new lib.location_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-148.8,-148.8,297.7,297.7), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-156.4,-156.4,312.9,312.9), new cjs.Rectangle(-160.2,-160.2,320.5,320.5), new cjs.Rectangle(-158.7,-158.7,317.5,317.5), new cjs.Rectangle(-157.2,-157.2,314.4,314.4), new cjs.Rectangle(-155.6,-155.6,311.4,311.4), new cjs.Rectangle(-154.1,-154.1,308.3,308.3), new cjs.Rectangle(-152.6,-152.6,305.3,305.3), new cjs.Rectangle(-151.1,-151.1,302.2,302.2), new cjs.Rectangle(-149.5,-149.5,299.2,299.2), new cjs.Rectangle(-148,-148,296.1,296.1), new cjs.Rectangle(-146.5,-146.5,293.1,293.1), new cjs.Rectangle(-145,-145,290,290)];


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


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


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


(lib.photoContainer_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(400,700.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decor
	this.decorTop_mc = new lib.decor_top_picture_4_mc();
	this.decorTop_mc.setTransform(0.5,-0.5,1,1,0,0,0,0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// picture
	this.picture_mc = new lib.picture_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.picture_mc).wait(1));

	// decor
	this.decorBottom_mc = new lib.decor_bottom_picture_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.bg_mc = new lib.bg_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,1200,771.2);
p.frameBounds = [rect];


(lib.photoContainer_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(400,700.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decor
	this.decorTop_mc = new lib.decor_top_picture_3_mc();
	this.decorTop_mc.setTransform(0.5,-0.5,1,1,0,0,0,0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// picture
	this.picture_mc = new lib.picture_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.picture_mc).wait(1));

	// decor
	this.decorBottom_mc = new lib.decor_bottom_picture_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.bg_mc = new lib.bg_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,1200,771.2);
p.frameBounds = [rect];


(lib.photoContainer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(400,700.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decor
	this.decorTop_mc = new lib.decor_top_picture_2_mc();
	this.decorTop_mc.setTransform(0.5,-0.5,1,1,0,0,0,0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// picture
	this.picture_mc = new lib.picture_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.picture_mc).wait(1));

	// decor
	this.decorBottom_mc = new lib.decor_bottom_picture_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.bg_mc = new lib.bg_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,1200,771.2);
p.frameBounds = [rect];


(lib.photoContainer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(400,700.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decor
	this.decorTop_mc = new lib.decor_top_picture_1_mc();
	this.decorTop_mc.setTransform(0.5,-0.5,1,1,0,0,0,0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// picture
	this.picture_mc = new lib.picture_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.picture_mc).wait(1));

	// decor
	this.decorBottom_mc = new lib.decor_bottom_picture_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.bg_mc = new lib.bg_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,1200,771.2);
p.frameBounds = [rect];


(lib.panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.substrate_btn = new lib.substrate_panel_btn();
	this.substrate_btn.setTransform(195,430);
	new cjs.ButtonHelper(this.substrate_btn, 0, 1, 2, false, new lib.substrate_panel_btn(), 3);

	this.photo_btn = new lib.photo_panel_btn();
	this.photo_btn.setTransform(125,430);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_panel_btn(), 3);

	this.back_btn = new lib.back_panel_btn();
	this.back_btn.setTransform(55,430);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.back_panel_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.back_btn},{t:this.photo_btn},{t:this.substrate_btn}]}).wait(1));

	// bar
	this.bar_mc = new lib.bar_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.bar_mc).wait(1));

	// color
	this.color_picker_mc = new lib.color_picker_mc();
	this.color_picker_mc.setTransform(5,45);

	this.timeline.addTween(cjs.Tween.get(this.color_picker_mc).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,255,465);
p.frameBounds = [rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_4_mc();

	this.instance_1 = new lib.animation_location_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyEQOIjPvGIC8xrILokyIQ7ApILIMuIh5WFIi2GvI3VAgg");
	this.shape.setTransform(1.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290.5);
p.frameBounds = [rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_3_mc();

	this.instance_1 = new lib.animation_location_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyEQOIjPvGIC8xrILokyIQ7ApILIMuIh5WFIi2GvI3VAgg");
	this.shape.setTransform(1.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290.5);
p.frameBounds = [rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_2_mc();

	this.instance_1 = new lib.animation_location_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyEQOIjPvGIC8xrILokyIQ7ApILIMuIh5WFIi2GvI3VAgg");
	this.shape.setTransform(1.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290.5);
p.frameBounds = [rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_1_mc();

	this.instance_1 = new lib.animation_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyEQOIjPvGIC8xrILokyIQ7ApILIMuIh5WFIi2GvI3VAgg");
	this.shape.setTransform(1.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290.5);
p.frameBounds = [rect, rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bat_mc();
	this.instance.setTransform(-30,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.bat_mc();
	this.instance_1.setTransform(65,85,0.667,0.666,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.planet_img();
	this.instance_2.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,293.3);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


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


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();
	this.panel_mc.setTransform(530,95);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();
	this.panel_mc.setTransform(70,95);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();
	this.panel_mc.setTransform(530,95);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();
	this.panel_mc.setTransform(530,95);

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(150,140);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.1,scaleY:1.1,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-150,140);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.1,scaleY:1.1,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(11));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(150,-140);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.1,scaleY:1.1,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(21));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-150,-140);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.69,scaleY:0.69},0).to({scaleX:1.1,scaleY:1.1,alpha:1},11).to({scaleX:1,scaleY:1},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-285,590,570.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-299,-289,594,574.6), new cjs.Rectangle(-304.4,-294.5,599.5,580), new cjs.Rectangle(-310,-300,605,585.5), new cjs.Rectangle(-306.2,-296.2,601.2,581.8), new cjs.Rectangle(-302.4,-292.4,597.5,577.9), new cjs.Rectangle(-298.7,-288.7,593.7,574.2), rect=new cjs.Rectangle(-295,-285,590,570.5), rect, rect, rect, new cjs.Rectangle(-295,-289,594.1,574.6), new cjs.Rectangle(-295,-294.5,599.6,580), new cjs.Rectangle(-295,-300,605,585.5), new cjs.Rectangle(-295,-296.2,601.3,581.8), new cjs.Rectangle(-295,-292.4,597.6,577.9), new cjs.Rectangle(-295,-288.7,593.8,574.2), rect=new cjs.Rectangle(-295,-285,590,570.5), rect, rect, rect, new cjs.Rectangle(-299,-285,594,574.6), new cjs.Rectangle(-304.4,-285,599.5,580.1), new cjs.Rectangle(-310,-285,605,585.6), new cjs.Rectangle(-306.2,-285,601.2,581.9), new cjs.Rectangle(-302.4,-285,597.5,578), new cjs.Rectangle(-298.7,-285,593.7,574.3), rect=new cjs.Rectangle(-295,-285,590,570.5), rect, rect, rect, new cjs.Rectangle(-295,-285,594.1,574.6), new cjs.Rectangle(-295,-285,599.6,580.1), new cjs.Rectangle(-295,-285,605,585.6), new cjs.Rectangle(-295,-285,601.3,581.9), new cjs.Rectangle(-295,-285,597.6,578), new cjs.Rectangle(-295,-285,593.8,574.3), new cjs.Rectangle(-295,-285,590,570.5)];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800,0.875,0.875);
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
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1151.8);
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
			//target_mc.gotoAndStop(0);
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
	this.instance.setTransform(500,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,675);
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
	this.instance.setTransform(290,450,1,1,0,0,0,-110,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.hero_main_mc();
	this.instance_2.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
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

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.InstructionScreen();

	this.instance_9 = new lib.Cursor();
	this.instance_9.setTransform(190,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_10 = new lib.OrientationLockScreen();

	this.instance_11 = new lib.CurtainScreen();

	this.instance_12 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1151.8), rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(15,15,210,70), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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