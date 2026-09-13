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
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,900,600],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,600,600],[0,602,620,520],[602,0,620,520],[622,522,620,520]]},
		{name:"storage_atlas_6", frames: [[0,0,620,520],[0,522,620,520],[622,522,620,520],[622,0,620,520]]},
		{name:"storage_atlas_7", frames: [[0,0,620,520],[0,522,620,520],[622,522,620,520],[622,0,620,520]]},
		{name:"storage_atlas_8", frames: [[622,522,540,540],[0,522,620,520],[622,0,620,520],[0,0,620,520]]},
		{name:"storage_atlas_9", frames: [[0,0,505,505],[0,507,505,505],[507,0,505,505],[507,507,505,505]]},
		{name:"storage_atlas_10", frames: [[0,507,505,505],[0,0,505,505],[507,0,505,505],[507,507,505,505]]},
		{name:"storage_atlas_11", frames: [[0,0,505,505],[507,0,505,505],[0,507,1200,200],[0,709,460,460],[462,709,640,280],[462,991,640,280]]},
		{name:"storage_atlas_12", frames: [[1018,384,190,190],[876,292,140,460],[876,754,120,320],[0,0,500,300],[1086,0,190,190],[584,292,290,290],[584,584,290,290],[292,594,290,290],[0,886,290,290],[0,302,290,290],[502,0,290,290],[794,0,290,290],[292,302,290,290],[0,594,290,290],[292,886,290,290],[342,1178,220,80],[0,1178,340,80],[1018,576,186,188],[1064,1119,150,142],[1210,384,50,297],[998,766,194,178],[998,946,187,171],[584,1168,187,132],[876,1119,186,159],[1086,192,190,190],[584,876,290,290]]},
		{name:"storage_atlas_13", frames: [[0,366,140,100],[142,366,140,100],[244,244,120,120],[52,724,50,50],[438,611,40,120],[366,244,120,120],[336,366,100,100],[122,0,120,120],[366,0,120,120],[0,0,120,120],[244,0,120,120],[0,570,90,90],[92,570,90,90],[184,570,90,90],[228,662,40,55],[228,719,40,43],[488,0,10,11],[438,366,69,94],[336,570,100,73],[276,578,57,60],[336,468,99,100],[480,462,23,38],[204,530,31,31],[358,707,50,50],[438,462,40,147],[284,366,50,210],[102,468,100,100],[0,662,60,60],[62,662,60,60],[204,468,60,60],[358,645,60,60],[0,468,100,100],[276,645,80,80],[124,662,50,50],[176,714,50,50],[176,662,50,50],[124,714,50,50],[0,724,50,50],[0,122,120,120],[122,122,120,120],[366,122,120,120],[244,122,120,120],[122,244,120,120],[0,244,120,120]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.back_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_photo_container_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_selection_screen_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.color_bar_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
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



(lib.decor_bottom_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_bottom_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_bottom_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_bottom_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_bottom_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_top_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eraser_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.open_palette_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.palette_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.photo_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.photo_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.photo_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.pipet_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.shadow_location_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_jp_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
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


(lib.size_brush_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AlfFgQiUiRAAjPQAAjOCUiSQCRiTDOAAQDPAACTCTQCSCSAADOQAADPiSCRQiTCUjPAAQjOAAiRiUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.shadow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_location_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.pipet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(109,141,185,0.965)").s().p("AgxAnIAAhiIBjAAIAABiIgyAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-6,10,12);
p.frameBounds = [rect];


(lib.palette_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.palette_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,460,460);
p.frameBounds = [rect];


(lib.open_palette_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0.024,0.498,0.957],-30,0,30,0).s().p("AkqJYIAAyvIJVAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-60,60,120);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.figure_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-350,700,700);
p.frameBounds = [rect];


(lib.eraser_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eraser_img();
	this.instance.setTransform(-40,-40,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.decor_top_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_5_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253,-253,505,505);
p.frameBounds = [rect];


(lib.decor_top_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_4_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253,-253,505,505);
p.frameBounds = [rect];


(lib.decor_top_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_3_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253,-253,505,505);
p.frameBounds = [rect];


(lib.decor_top_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_2_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253,-253,505,505);
p.frameBounds = [rect];


(lib.decor_top_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_top_1_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253,-253,505,505);
p.frameBounds = [rect];


(lib.color_bar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_bar_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,120,320);
p.frameBounds = [rect];


(lib.check_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_img();
	this.instance.setTransform(-20,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-60,40,120);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-310,-260);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-310,-260);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-310,-260);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-310,-260);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-310,-260);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-310,-260);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-310,-260);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-310,-260);

	this.instance_8 = new lib.title_jp_img();
	this.instance_8.setTransform(-310,-260);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-310,-260);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-310,-260);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-310,-260);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-310,-260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310,-260,620,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_part_5_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA9FyIgQgJQhtg+hoheQh8hvhJhyQhLh2gIhpIgBgaQABg+BGg0QBCgyBFAAQBZAAB2AvQB4AyBpBTQBWBDA7BOQAVAcATAeQBLB9ABCGQAABlgoA3QgTAbgdAQQgvAahHAAQhDAAh0hAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-43.5,90,87);
p.frameBounds = [rect];


(lib.body_part_5_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANoKvQhBhsgmiBQBngeBHhFQB+h8AchLQAbhLAThNQARhHgXhmQDPAACADQQBuC1AADgQAADEhkCBQhsCMi7AAQi5AAiCjagAq3DhQAng3AAhkQAAiFhMh+QgSgegVgdQg7hOhWhEQhphSh7gyQh1gwhaAAQhEAAhDAzQhGA1AAA9IgDgBQgRhcgDgHQgHgNAUg8QAUg6AnhAQAmhABWhEQBWhEChAAQBkAAB6A9QB6A7BrBlIATASQBjBiA7BwIAHANQBBCBAAB9QAACIhlCPIgBACQhBBdhVA1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.2,-90.5,316.5,181);
p.frameBounds = [rect];


(lib.body_part_5_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak7HkQivhDirhJIh2gzIABgCQBliRAAiJQAAh6hCiBIgGgMQg8hxhjhiQBshGCNgyIAGgCQDyhXEDAAQBDABA1ATQAvATBwABQAgBMArBYIAJAQQATApAgBJQAbA8AYAgQBABVCGAAQBQAAAhgRQA8geBrgXIATgDQA4CKAbBtIADAOQAWBmgRBJQgSBNgcBLQgcBLh+B8QhHBFhmAeQhRAYhlABQiiAAnzi/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.9,-67.5,181.9,135);
p.frameBounds = [rect];


(lib.body_part_5_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjYGEQgYgggcg8QgfhJgUgpIgIgRQgrhXgghMQhgjfgBh4QABgMAEgmQAFghABgQIABAAQBMgUBOgLQgQA1AAAbQAADCCDDlQAdA0AdApQAeApAfAeQBBBCAxAAQBBAACLgoQCMgoBHAAQBGB6AAAcQAAAtgWARQgQANgmgBIhNgIQgngDgeAEIgSADQhrAYg9AeQggAQhOAAQiGAAhAhUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-47.2,100,94.6);
p.frameBounds = [rect];


(lib.body_part_5_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLE0QgegegegpQgegpgdg0QiCjlAAjBQAAgcAPg1QBHgKBJgFQAACdAaA4QAUApAhAxQBUB0BLAAQAGAABFg+IA7g2IAMgIIA8BaIBFBtIAHAMQA8BfAmBEQhGgBiLAoQiMAphAAAQgyAAhBhDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-37.5,78,75);
p.frameBounds = [rect];


(lib.body_part_5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AraLaQhhg5hagxQhkg2grglQg6AAhxgZQiVgiAAguQAAgaAZgGQALgCAsACQAmACARgIQAZgMAAgmQAAgfgZgyQgZgyAAgYQAAgXALgRQAMgUAWAAQAMAAAtA4IAIgGQAJgyAQAAQA3AAAgAqIACACIAFAHIABgLIAyAAQAfAdAYAyQAPAeAeBHIAAAKQBAAMCXAYQCJAXBOAdIAUghQjUhxhUjWQg+qgDLh9QBHgsBTgbQCcgzDIAJQEvANDmDPQDmDOAAEkQAACQg5B8QA+gNAjgLQCJgrAXhNQAGgRADgpQAEgyACgPQAMhLA1AAQAVAAAeAeQAaAbADAWQAPgtARghQAshRA7AAQAiAAAMAKQAJAIAAAWQAAAPgEARQgHAcgTAeIAAAKQAOgeAPgmQAPgWAkAAQAbAAANAUIADAFQAHANAAARQAAAOgPApQgKAcgDANIgMAJIAKAAIACgJIASgOQAKgHAmANQAmANg9BIQg+BLheBpQhfBphfADQhfACjiDMIhTBNIgLAKIg7A1QhFBAgGAAQhNAAhUh2QgigwgTgqQgag4AAicQhJAEhHALQhNALhMAUIgBAAQAAAQgFAhQgFAmAAAMQAAB4BhDhQhwgCgxgSQg2gUhDAAQkDAAjxBWQAXg0AggvgAQNhjIABABIAAgGIgBAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.1,-82.9,276.3,166);
p.frameBounds = [rect];


(lib.body_part_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APzQLQgmgighgsQg3hHguhhQhujmAAjpQAAl0BWkOQA0ihBAhHQE/FnAAHjQAAGijtFFgAw2iXQirhCAAi5QAAhcA4h0IAkgkQDjjWEXhgQDlhQEHAAQA6AAA4AEQAlAXAbAmQA8BNAABXQAACFhQCDQhLB5iEBlQh/BhiWA3Qh5AthuAKQgdACgdAAQjKAAhmgng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-103.7,250.1,207.5);
p.frameBounds = [rect];


(lib.body_part_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ/OzQAAkkjmjOQjmjPkwgNQjIgJicAzQhTAbhGAsQjLB9A+KiQhHg7gfgeIgxgxQlrl3AAoGQgBoNF4l7Qg3B0AABdQAAC4CqBCQBnAoDKAAQAdAAAcgDQBvgJB4gtQCWg4B+hhQCEhlBLh5QBSiDAAiEQAAhYg8hNQgdgmglgXQAlADAkAEQHRA1FZFGQAyAwAtAyQhBBHgzChQhWEOAAF1QAADoBtDmQAuBhA4BIQAhArAlAjIgLALQgNgUgbAAQgkAAgPAWIgDAAQAEgRAAgPQAAgWgKgIQgMgKghAAQg7AAgsBRQgRAhgPAtQgEgWgZgbQgegegVAAQg1AAgMBLQgDAPgDAyQgDApgGATQgYBNiIArQgkALg9ANQA5h8AAiSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.1,-121.7,258.2,243.5);
p.frameBounds = [rect];


(lib.body_part_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgHOAnEIth2AIgMgDMAAAg0xIPUGVIXPpoIDUAAIgNCwQkXBgjjDWIglAkQl4F7AAIPQAAIGFrF3IAyAxQAfAdBHA7QBTDVDUBxIgTAhQhPgdiJgXQiWgYhAgMIAAgLQgehHgPgeQgZgxgegeIgyAAIgFAEIgDgBQgggqg3AAQgQAAgJAyIgJAFQgtg3gLAAQgXAAgMATQgKARAAAYQAAAYAZAyQAZAyAAAfQAAAmgZALQgRAJgmgCQgsgCgLACQgZAFAAAbQAAAuCVAiQBwAZA7AAQAqAlBkA2QBbAxBgA5QgfAvgYA0IgGACQiNAzhsBGIgTgSQhrhlh5g8Qh7g8hjAAQigAAhWBEQhWBEgmBAQgmA/gUA7QgUA7AGANQADAIARBcIAFAaQAIBpBKB2QBJB1B6BuQBpBeBuA/InhMRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134,-250,268.2,500);
p.frameBounds = [rect];


(lib.body_part_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgWIAnEIHisRIARAJQB0BABDAAQBIAAAugaQAdgNAbgQQBUg2BBhdIABAAIB2A0QCrBICtBDQH1C/ChAAQBmAABRgYQAlCABBBtQCCDZC5AAQC7AABtiMQBjiBABjEQgBjghti0QiBjTjOAAIgEgNQgahwg4iKQAdgEAnADIBNAHQAmACAQgNQAWgRAAgtQAAgchGh6QgnhDg7hgIgIgLIhFhtIg7hdIgCgCIBThMQDjjNBfgBQBegDBfhpQBfhnA9hLQA9hKglgOQgmgMgLAGIgSAPQADgNALgdQAOgoAAgPQAAgQgGgOIAKgOIAAAAQDtlFAAmiQAAnlk+lnQgtgzgzgvQlYlGnSg2QgkgDglgDQg4gEg6AAQkHAAjkBQIANiwMAkPAAAMAAABOHgEgnDAnEIAA2AIANAAINhWAgEgnDgjwIAAjTMAmmAAAI3SJog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.body_part_4_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2aUJQgNgEgogmIgNgJQAhguAAgtQAAgRgDgRQBxgXA/g4IAMANIgEAOIgBALQAAA3BCAsIgLAQQgEA3gtAbQgnAXhAAAQgsAAgGgDgAwSm5Qg3iTAAh7QAAgoACgHQAEgOAYgnQAWgOAggCQAggDA2ACQA2ACBvAvQBuAwAABQQAAArhzCYQh5Cgg4AAQgrAAg3iRgATGn6QgqgcgZggIgJgFQAnhLAAhSIgFg0IgFgzQAAgHADgEIABAAQA1AUA/AQIAPgIQAWAzArAlQA0AtBKASQgBA1g7BAQhBBGhEAAQgmAAgwgegAHOvOQgpgpAAgfQAAguBGhVQAlguA/hEIAQAAIgBAXQAAB/AtBFIgKAGQhKAkgpBjIgBACQgcgLgjgig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.1,-129.2,300.3,258.5);
p.frameBounds = [rect];


(lib.body_part_4_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkfDLQARifAyh8QBejrCzAAQBqAABFBaQA8BPAABeQAAA/ghDNIgEAbQhoBJh2AAQiSAAiqhxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.8,-31.6,57.7,63.3);
p.frameBounds = [rect];


(lib.body_part_4_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqvMOQgchDg4htIhaixQhljTAAh7QAAiJAyhUQA4hfBtAAQArAAA0AHQBoAhBjAzQCuBbBdBjIiGCTQiLCagRAVQhOBdg+B/Qg5B4ACAyIgKAAIgBAKgAsKglQggACgWAOQgZAlgDANQgCAIAAAoQAAB7A3CTQA2CRArAAQA5AAB5igQBziYAAgrQAAhQhvgwQhvgtg2gCIgrgBQgZAAgRACgALRhHQh+AAhCgOQiAgbAAhPQAAgtCCjIQCCjIBBgyIgEgFQBwhaBTAAQBIAIgoAZQhlBhgHCWIgPAAQg/BFgmAtQhFBVAAAuQAAAfAoAoQAjAjAdALQgPAjgIAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-78.2,192.8,156.5);
p.frameBounds = [rect];


(lib.body_part_4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnpEwQjpAcgNi6IAAgGIAAgBQgDg7AThQQCiBPCRgfIAFgBQAlBlBuA4QCCBDCagiQCcghBahzQBZhvgZh9IABgBQC/g3BmjEQDwEFkiCOQhFC/iqgLQg7CkjEgdQhRA5hKAJQhMAIhIgnQhHAug6AAQhUAAg5hgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.7,-40,147.5,80.1);
p.frameBounds = [rect];


(lib.body_part_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDOEIgNgBQhTgHhPgVIgLgDQhXgZhVgmQhXgkhRgxQhUgzg/hKQglgsgXg0QglhVgQhbQgOhSgFhUIAAgBIgBgHIAAgCQgFhggJhdQgJhfgihZQAbh1AshgIAEgKIAOgcIAQgeIABgBQBCh0BfhRQASgQAUgOIABAAQB6hbCngmQCDgjCBgCQB+gBB+AgQAcAHAcAJIAEABIAlANQCeA5CbBwQAHBiAYBfQAJAlARAhQAuBUAvBRQATAgAMAkQAdBQAFBWQAGBggOBiQgDAXgGAZQgYBeg3BQQg4BRhEBKQhCBHhIA/QgyAsg3AkQgaARgcAPQhUAwheAcQhCAShEAAQgVAAgTgCgAkAFqQBIAnBMgJQBMgJBPg4QDEAdA7ikQCqAKBFi+QEiiOjwkFQhmDEi/A3IgBAAQAZB+hZBuQhaBziaAiQicAiiChDQhug5glhlIgFACQiRAeiihPQgTBQADA8IAAAAIAAAHQANC5DpgbQBgChCuhvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.8,-90.2,173.6,180.5);
p.frameBounds = [rect];


(lib.body_part_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4SbDQg+gqAPg4QAOg5hqgMQgzgUgfgQQhKglhShsQhIhigMhLIACgBIANgBIgEgFIgMgSQhLhsABiLQgBg5A9hZQA5hUAmgKIgGAKIAQgJQAIgGALAAIAGAAIABAAIgBgIQAAhUA3hYQBNh9COAAQAYAAAbAIIAAgBQgBhBBbgvQBLgoBDAAQB8AABoBkQBpBlAAB8IgCAVIgCAQQAgADATAAQATgBADgFQAoAVA8A9QA7A+ABCNQACCNhkBQIgKAHQgfAXgiAPQAGATADAPQAFAUgBBCIgBAdQgHA6giBBQgqBShHBHQiLCMhpAgQgTAGgRACQgeADgcAAQhKAAgugegA3pQ7QACASAAARQABAtgiAuIAOAJQAoAlAMAFQAGADAsAAQBAAAAngXQAtgbAEg3IALgQQhCgsAAg3IABgMIAFgNIgNgOQg/A5hwAWgASZgtQiDhXAAhsQAAgHADgOIADgTIAJAAIAFgPIgBAAIgpgQQhogyhcgxIgEAAQiVAAhwhuQh0hwABiXQAAg1ALgyQAIglAPgjIAAgCQAqhkBJgjIAKgGQgshFAAiAIAAgWQAHiWBlhiIAOgNIACgCQB5hqBMgSQBNgSBmAQQBEghBVgNIAAgFIA0AAIAAAEQAbABAhAJQAXAGBWAeQA4ATAdAgQAhAjARBAIADAAIAGABIAGABQAuAEAhgHQAlgKBpBKQBqBJA6BeQA7BeAeB7QAeB6AAC5QAACUg8C1QAPAQALATQAYApAAAwQABCsiLBqIgBABIgGAEQicBxkeAAQi3AAiGhYgARutnQgDAEABAHIAEAzIAGAzQgBBSgmBMIAJAFQAYAgArAbQAwAfAlAAQBEAABBhGQA7hAABg1QhJgSg1gtQgrgmgWgyIgPAIQg/gQg1gUIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.2,-176.2,418.4,352.4);
p.frameBounds = [rect];


(lib.body_part_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwSOvQBeggBehOQA3gvAogzQAjgtAAgRIgFgsIgFgsQAAhmArhPQAig/BQhNQBohcA8g7QBuhqBUhxQBxiZBIjBQA5idAki/IABgGQBVAPBPAAQA7ABA4gMQAagGAigKIANABQBaAHBWgYQBegbBUgwQAcgQAagRIAIALQA7B2A8DBQBgE0AAD5QAADShKDpQhZEZi4Eag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.3,-94.3,208.7,188.6);
p.frameBounds = [rect];


(lib.body_part_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAPCAk1QC4kaBZkYQBKjqAAjUQAAj5hgk0Qg8jBg7h1IgHgLQA2gkAygsQBJg/BBhHQBEhKA4hRQA4hQAXhcQAGgZADgXQAOhigGhiQgFhWgchQQgNgkgSggQgwhRgthUQgSghgJglQgXhfgIhiQiahwifg5IglgNIgDgBQgdgJgcgHQh+ggiAABQiBACiDAjQimAmh7BbIAAAAQgUAOgTAQQhdBRhBB0IgBABIgQAeIgOAcIgFAKQgsBggbB1QAiBZAKBfQAJBfAFBgIAAACIAAAHIAAABQAFBUAOBQQAQBbAmBVQAXA0AjAsQA+BKBVAzQBRAxBWAkQBVAmBYAZICMAhQg7AhhUgHQhOAAhVgPIgCAFQgjDAg7CcQhJDBhxCaQhSByhtBqQg9A7hoBdQhQBNgiA+QgrBPAABmIAFAsIAFAsQAAARgjAtQgnAzg4AvQhdBPheAfIg1AAQiagJiohQQiLhCiMiLQggghgegiIgHAGQghAbhAAVQg+AWgrAAQi/AAhsh4QgngrgWg0QgJgWgFgSQhHgXgkgoQgvg2AAhlQAAgzAMgpQANgsAbgpIgBgDQgQgnAAguQAAiYCshuQjCjbhklrQhOkZAAjrQAAhXAJhPQEyDLDqiiQgdC5AACMQAAEhBhCvQBBB1CtCTIACARQBigIBrAGQFTATCnBYQCoBZAODMIAGAUIAdgFQApgHAlgvQApg8AagfQAegjAsgZQiNgDiWhTQiBhHhPhYIgEgNQBpggCLiMQBHhHAqhSQAihBAHg6IALABIAwArQARAMAcAAQAlAAAwgrQAmghAdgXQh3hFhMg+IgIgNIAKgHQBkhQgCiNQgBiLg7g+Qg8g9gogVQgEAFgTABIAAgpIgCkVQAFjqAFhdIAAgKIAKAAQgCgyA6h4QA9h/BOhdQASgVCLiaICFiUQhchklnitIDEAtIA5ARQBGAWEEBgQCZhQCpgcIADgHQBsirB1iPQBfh+BehFQkgGjAAAuQAABPCAAbQBDAOB9AAIARAEQgMAyAAA1QAACXBzBwQBxBuCVAAIAEAAQBcAxBnAyQAUAIAWAIIABAAIgFAPIgKAAIgCATQgDAOAAAHQAABsCCBXQCHBaC3AAQEeAACchzIAKACQh1JZiXF3QhkD8iSDQQhHBigeAtQgzBLgdBDQhGCkAAEgQAABVgYCNQgeCxg3CqQhwFaiyDWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-239.4,-235.7,478.9,471.5);
p.frameBounds = [rect];


(lib.body_part_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EASMAnEQCyjWBwlaQA3iqAeixQAZiNAAhVQgBkgBHikQAchDAzhLQAegtBHhiQCSjQBkj8QCXl3B1paIgDgGQCKhqABisQAAgwgagpQgLgTgPgQQA+i1AAiVQAAi4geh7Qgfh6g6heQg8hehphKQhohJgmAJQghAIgugEIgGgBIgGgBIgEgBQgQg/gggjQgfggg4gTQhVgegXgGQgigJgagBIAAgFINSAAMAAABOHgEgnDAnEMAAAhOHMBACAAAIAAAGQhWANhDAhQhngQhMASQhNASh4BqIgHgIIAAgEQgHAAgOgDIgVgDQhTAAhwBaQhYBGhqB+IgdAjQh1COhsCsIgDAFIAAABQioAciaBRQkEhghGgXQgdgJgcgIQh5gihdgNQg0gHgsAAQhsABg5BfQgyBUAACKQABB7BlDTIBaCyQA3BtAcBDIAKAAQgFBcgFDrIACEVIAAApQgSAAgggDIADgRIAAgVQAAh7hphmQhnhjh8gBQhCAAhNAoQhZAwgBBBIAAAAQgagIgXAAQiPABhOB8Qg3BZAABUIAAAIIgEgBQgMAAgJAHIgKgBQglAJg5BTQg8BYgBA5QABCMBJBsQAAALACANIAAABQALBLBKBiQBRBsBJAlQAgAPAzAVQBqAMgPA4QgOA5A+AqQA+ApB0gPQASgCASgFIAFANQBOBXCBBIQCWBSCNADQgsAZgeAkQgZAfgpA8QgmAugpAIIgdAFIgGgVQgOjLinhZQiohYlTgTQhqgHhjAJIgBgSQiuiShBh1QhhivAAkhQAAiMAdi5IAEgbQAhjNAAhCQgBhdg8hPQhEhahqAAQi2gBheDsQgyB9gQCfQgJBMABBYQAADtBNEYQBlFsDBDbQisBuABCYQAAAuAPAnIACADQgcApgNArQgMAqAAAzQABBlAuA2QAkAoBHAXQAFASAJAWQAWA0AnArQBtB3C+AAQArABA+gWQBBgVAggcIAHgFQAeAiAhAgQCLCMCMBCQCnBQCbAJgAn1JgIgvgrIgMgBIACgeQgBhBgEgUQgDgPgHgTQAkgPAegXIAIAMQBMA/B3BFQgdAXglAhQgxArglAAQgcgBgRgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.body_part_3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AcbM+IAAgWIgdAWQj7g9hLk8QhGknBLjjQAvh2B0hQQCmhxExgnQA4gHA8gEQBBjbDYi0IAAZ7gEgnDAM+IAA57QDYC0BBDbQA8AEA4AHQExAnCmBxQB0BQAvB2QBLDjhGEnQhLE8j7A9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-83,500,166.1);
p.frameBounds = [rect];


(lib.body_part_3_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAiNgFYIgdCfQDhBxBzisIAAEMQjYCzhBDbQg8AFg4AGQkxAnimBxQCvqDF+kegEgg2AGxQg4gGg8gFQhBjbjYizIAAkMQBzCsDhhxIgdifQF+EeCvKDQimhxkxgngEAj/gHPIDFh5IAADbgEgnDgJIIDEB5IjEBig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-58.6,500,117.2);
p.frameBounds = [rect];


(lib.body_part_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAhwACJIA8k+IEYCMIAAB2QhGBphuAAQhHAAhZgtgEgnDABNIAAh2IEYiMIA8E+QhZAthHAAQhuAAhGhpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-18.2,500,36.5);
p.frameBounds = [rect];


(lib.body_part_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjAG/IguAOQAmgcAEgEQAyg3AAgwIAAgFIgCABQhAAkhGgYQgTgGgTgOQg7gugZhJIg+i5QgdhXgkhVQgnhbgkhdQgVg1gggtIANgKQASgEAcgDQAagDAKAAQBBAABBAWQAmAOBIAkIAqAUIACABQAwAWAxAOQAxAPAeAEIACAAIAWACIBFgCIAXAAIBEACQAaAAAwgMIAAAAIAegJQBGgVBHgkQBBghAmgOIAHgDIACAAQA/gWBBAAQAKAAAaADQAcADASAEIANAKQggAtgVA1QgkBdgnBbQgkBVgdBXIg+C5QgZBJg7AuQgTAOgTAGQhGAYhAgkIgCgBIAAAFQAAAwAyA3IAIAIIApAcQjyhAjEAug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.1,-46.5,132.2,93.2);
p.frameBounds = [rect];


(lib.body_part_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AXzDfQgZiChJhYQhkh3jDgxIgggRIA+h2IgBgZIAFAAQGEAKDtApIHqjJIhyEnQDGBHCJBnIAAHeQh0lztdB4gEgnDgAEQCJhnDGhHIhyknIHqDJQDtgpEkgKIAGAZIBBB9IAAAKIgjAAQjEAxhkB3QhLBagYCGQr9h+h0Fzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-47.4,500,95);
p.frameBounds = [rect];


(lib.body_part_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjLFIhEgCIgZAAQgjABg4gBIgCAAQgegEgxgPQgxgOgwgWIgCgBIgqgUQhIgkgmgOQhBgWhBAAQgKAAgaADQgcADgSAEIgNAKIgPgTQgYgegigMIABgEQghhrgLgtQgVhYAAhOQAAhfAnhXQAcg7A9hSQBUhwANgUQAyhNAPhJQAlAsAFBbQAEA2gIBHQARg+AghCIBLibQAyhqAmhlQA5DEC4g5QA0hCA9g0QBJhBBDgZQgLAUgOA0IgaBrIAAAjQBAgQA/gMQBigRBGAAQAnAAA2AHQA3AIALAAQhzAchbBcQB8AGBaBCQAeAWAvAuQAzAyAYAUQguAahCBZQhABTg9ByIgKAUIANgDQA7gLBGAAIAQAAIBhAAIAjgSQBHgkAdgYIgoBtIACABQBNAcAwAyQhNALg6BjQg4BygdAkIAAAMQgbABgeAFQgwAKggAmIgOATIgNgKQgSgEgcgDQgagDgKAAQhBAAg/AWQgvARhBAhQhHAkhGAVIgeAJIAAAAQgsAMgZAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.4,-70.9,182.9,141.9);
p.frameBounds = [rect];


(lib.body_part_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEnO3QgegFgdgTQgQgLgPgPIgIgIQgyg3AAgwIACgEQBAAkBGgYQATgGATgOQA7guAZhJIA+i5QAdhZAkhVQAnhbAkhdQAVg1AggtIAPgSQAfglAwgKQAegFAbgBQA7gDAuAPQECjdBCh0QBCh0AnhcQAnhdgJiJQgJiKAYACQAYACAjAsQAmAwAjBJQBaC9AADLQAAEXiPDQQgxBGhRBYQh0B6gLAOIgGAAQgIhbhHg7QgPgMgRgLIACAZQAAARgBAQQgFBcguBNIgBAAIgRgJQgNgNgPgKQgSgMgOAAQhDAAhMBWIgoAuIAAABIhkB3IgrAyIgyA8IhOBYIgZAaQgWAVgXAQQgXARgYAMQgoANgpAAIgUgCgAk6O5QgpAAgogNIgBgBQgXgLgXgRQgXgQgWgVIgZgaIhOhYIgyg8IgrgyIhjh3IgBgBIgoguQhMhWhDAAQgOAAgSAMQgPAKgNANIgRAJQgvhNgFhcQgBgQAAgSIABgPIABgJIgFADIgIAGIgTAOQhHA7gIBbIgGAAQgLgOh0h6QhRhYgxhGQiPjQAAkXQAAjLBai9QAjhJAmgwQAjgsAYgCQAYgCgJCKQgJCJAnBdQAnBcBCB0QBCB0ECDdQBEgWBeAQIAVAGQAiAMAYAdIAPASQAgAtAVA1QAkBdAnBbQAkBVAdBZIA+C5QAZBJA7AuQATAOATAGQBGAYBAgkIACAEQAAAwgyA3IgHAHIgVAUQgqAggsABIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-95.3,322.5,190.6);
p.frameBounds = [rect];


(lib.body_part_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAh1AO2IByknInqDJQjtgpmEgKQAMgOBzh6QBShYAwhGQCQjSAAkXQAAjJhai9QgjhJgmgwQgjgsgZgCQgYgCAKCKQAICJgnBdQgmBchCByQhCB0kDDdQgugPg6ADIAAgMQAdgkA3hyQA7hjBMgLQgvgyhOgcIgCgBIAohrIADgCIAAgFIgDAHQgdAYhHAkIguAYQgogFgtgBIgRAAQhFAAg8ALIgDgRQA+hyA/hVQBChZAvgaQgYgUg0gyQgugugegWQhahCh9gGQBbhcBzgcQgLAAg2gIQg3gHgnAAQhFAAhiARQg/AMhAAQIAAgjIAZhrQAOg0ALgUIAFgBIAAgFIgFAGQhDAZhLBBQg6A0g0BCQi4A5g6jEQgmBlgyBqIhLCbQgfBCgRA+QAHhHgDg2QgGhbglgsQgPBJgxBNQgNAUhVBwQg9BSgcA9QgmBXgBBdQABBOAUBYQALAtAhBrIgBAEIgUgGQhegQhEAWQkCjdhCh0QhDhygnhcQgnhdAKiJQAJiKgZACQgYACgjAsQgmAwgiBJQhaC9AADJQAAEXCODSQAxBGBSBYQBzB6ALAOQkkAKjtApInqjJIByEnQjGBHiJBnMAAAgjHMBOHAAAMAAAAjHQiJhnjGhHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-112.4,500,225);
p.frameBounds = [rect];


(lib.body_part_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A79ZVQD7g9BLk8QBGknhLjlQgvh2h0hQQivqDl+kfIgfigIhUAqIjEh6QB0lzL9B+QAYiGBLhaQBkh5DEgxIAjAAIAAgKIhBh9IABgZQAHhbBHg7IAUgOIAHgGIAFgDIAAAJIgBAPQgBASACAQQAFBcAuBNIASgJQAMgNAPgKQATgMANAAQBDAABNBWIAoAuIAAABIBkB3IAqAyIAyA8IBOBYIAZAaQAWAVAXAQQAYARAXALIABABQAoANApAAIADAAQAtgBApggIAggJQDGguC6AxIAsANQAdATAeAFIAUACQApAAApgNQAYgMAXgRQAWgQAWgVIAagaIBNhYIAzg8IAqgyIBlh3IAAgBIAnguQBNhWBCAAQAOAAATAMQAPAKANANIARAJIABAAQAthNAGhcQABgQgBgRIgCgZQASALAPAMQBGA7AJBbIABAZIg+B2IAgARQDDAxBkB5QBJBYAZCCQNdh4B0FzIjFB6IhTgqIgfCgQl+EfivKDQh0BQgvB2QhLDlBGEnQBLE8D7A9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-162.1,500,324.3);
p.frameBounds = [rect];


(lib.body_part_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALZEkIgQlGQDLhqECiWIAFgBICXJHgA0xEkICXpHIAFABQECCWDLBqIgQFGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-29.2,266,58.6);
p.frameBounds = [rect];


(lib.body_part_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AUyFYIiXpJQBVgyBLg0QCgACBbCxQEXBODJGugArYFYIAQlIQBPApBHAiQDDBeDaAVQAtAFAuACIAoAAIASAAIATAAIApAAQAtgCAtgFQDagVDDheQBHgiBPgpIAQFIgEggVAFYQDJmuEXhOQBbixCggCQBLA0BVAyIiXJJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207,-34.5,414,69);
p.frameBounds = [rect];


(lib.body_part_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAgWAnEQjJmxkXhOQhbiyiggCQDtimCGjEQA0hKAkhKQBCiGASiGQBpggBRhlQBGhZBAibQA5iMAkiaQAjiVAAhmQAAiSgphmQg3iLh3AAQgQgBgTAIQgVAHgTAPIgJgFIAXgjQAmg6Afg+QGis6tyzwINJAAMAAABOHgEgnDAnEMAAAhOHINJAAQtyTwGiM6QAoBPA0BMIgJAFQgTgPgVgHQgTgIgQABQh3AAg3CLQgpBmAACSQAABmAjCVQAkCaA5CMQBACbBGBZQBRBlBpAgQASCGBCCGQAkBKA0BKQCGDEDtCmQigAChbCyQkXBOjJGxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.body_part_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ab0JvIgUgtQhwjaAqlxQARn5iIk4QDECBA0CoQB9BsBBB+QAfA9AABBQAAAtgZBaQgKAigGAbQgKAsAAAcQAAArAbBLIASAvQAtBvAAAxQAABlhAByQg7BohcBQIgQAEQgahogqhkgA9HM3QhchQg7hoQhAhyAAhlQAAgxAthvQAshuABg3QAAgcgKgsQgGgbgKgiQgZhaAAgtQAAhBAfg9QBBh+B9hsQA0ioDEiBQiIE4ARH5QAqFxhwDaIgUAtQgqBkgZBog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208,-82.7,416,165.6);
p.frameBounds = [rect];


(lib.body_part_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdDAQjwAYjUAjQk4ikAElRIasAAQgjEjkTDSQklgplZgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-25.1,171,50.3);
p.frameBounds = [rect];


(lib.body_part_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AffQ4QAZhaAAgtQAAhBgfg8QhBh/h9hsQg0injEiCQmdkQyOhrQyHBxmTEKQjECCg0CnQh9BshBB/QgfA8AABBQAAAtAZBaQAKAkAGAbIgggsQg0hKgohQQmis6NyztIMfAAQgEFTE5CkQDUgjDwgZQFZATElApQETjSAiklIMqAAQNyTtmiM6QgfA+gmA6IgXAiIggAsQAGgbAKgkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225.7,-114.4,451.5,228.8);
p.frameBounds = [rect];


(lib.body_part_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxAF/IgBAAQgGgBgBgBQABgHglgIIgBgBQhfgXjNjQQL/B5Dpp1QAlBJAGA8QAGA8gOB8QgQB5h7CcQgRASgUAQIgOALQg7Akg3AaQh6A3hvACIheABQgsAAgPgCgAOoFiQiggDi7h0IgOgLQihiFAAjmQABgWAGg9QAGhEAwheQDTImLsgWQjLCmhfAZIgCAAIgBABQglAIABAHQgBAEhHAAIhZgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.5,-38.5,287,77.1);
p.frameBounds = [rect];


(lib.body_part_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap4GpQldBli/kjQrChSC6quQFyD1FyhzQAJEqEQDSQEZDcGMAAQGNAAEZjcQERjSAJkqQGYBPEujvQDZMCpzgCQj7EJlJhVIgoAAQjaEEmcigQijBPiPAAQi+AAiYiLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.2,-56.4,346.5,112.9);
p.frameBounds = [rect];


(lib.body_part_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAd0IgSAAIgoAAIgLgBQgxgFgfgBQjagVjDheQhHgihPgpQjLhqkCiWIgFgDQhVgxhLg1QjtiniGjEQg0hKgkhKQhCiGgSiGQhpgghRhlQhGhZhAibQg5iMgkiYQgjiVAAhmQAAiTAphnQA3iLB3AAQAQgBATAIQAVAHATAPIAJgGIAgAsQAKAtAAAbQgBA4gsBuQgtBuAAAxQAABmBAByQA7BmBcBQIAFABIALAGIABgEQAZhnAqhiIAUgtQBwjagql0QgRn5CIk4QGTkJSHh0QSOBtGdEQQCIE4gRH5QgqF0BwDaIAUAtQAqBiAaBoIABADIAPgHQBchQA7hmQBAhyAAhmQAAgxgthuIgSgvQgbhLAAgsQAAgbAKgtIAggsIAJAGQATgPAVgHQATgIAQABQB3AAA3CLQApBnAACTQAABmgjCVQgkCYg5CMQhACbhGBZQhRBlhpAgQgSCGhCCGQgkBKg0BKQiGDEjtCnQhLA1hVAxIgFADQkCCWjLBqQhPAphHAiQjDBejaAVQgfABgxAFIgKABIgpAAIgTAAgAAdPxQGdCfDZkDIApAAQFJBVD6kJQJ0ACjZsCQkvDtmXhPQgKEqkQDUQkZDcmOAAQmLAAkZjcQkQjUgJkqQlyBylzjyQi5KuLBBSQDAEjFchlQELDyF9i2gAyGwNIABABQAmAIgCAGQAAABAHACIABAAQAcADB9gCQBugCB7g4QA4gZA6gkIAOgMQAUgQARgRQB8icAPh8QAOh7gGg8QgGg8glhKQjpJ4r/h5QDNDPBfAYgAGM5bQgHA+AAAVQAADpCgCFIAPALQC7BzCgADQChAEgBgHQAAgGAlgJIABAAIACgBQBfgZDMimQrtAXjTopQgvBfgHBDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233,-190.8,466,381.7);
p.frameBounds = [rect];


(lib.body_part_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq4f3QhJhUAAh4QAAh4BJhVQBJhVBnAAQBnAABJBVQBJBVAAB4QAAB4hJBUQhJBVhnAAQhnAAhJhVgAK3RrQgOgOgLgPQg/hQAAhpQAAh+BYhYQBVhVB2gDIALgBQB8AABZBXIACACQBYBYAAB+QAAB9hYBZQhZBYh+AAQh9AAhZhYgAx7RyQhAhAAAhbQAAhVA5g9IAMAKQAOArARAjQBNCbCJBlQgsAVgzAAQhbAAhAhAgANe4KQhDgohDgaQgVgyAAg9QAAhgAzhDQAzhDBJAAQBIAAA0BDIABACQAyBDAABeQAABfgzBDQghAsgrAPQgkgZgggTgArU7WQgvhAAAhaQAAhbAvhAQAxhABDAAIAHAAQA/ADAtA9QAwBAAABbQAABagwBAQggAsgpAOQgYACgYAFQhAgDgug+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.2,-212.4,242.5,425);
p.frameBounds = [rect];


(lib.body_part_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFCwQg4hJABhnQgBhmA4hKQA4hIBNgBQBOABA4BIQA3BKAABmQABAngJAiQgNA5giAuQgNAQgNANQgvAsg9ABQhNAAg4hKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-25,38,50);
p.frameBounds = [rect];


(lib.body_part_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvaJsQgTgbgRghQggg/gQhHQhGgQg/gmQhNguhEhNQhHhQgohhQgohcAAhUQAAjFB5iUQBMheBpgqQBVgiBoAAQBFAACBA7QBCAfBPArIA8gxIAMgJQAeANAgAMQAMBIBRAtQBSAsCxgFQCygGB5geQCbglAVhOIANAFQAnANBFALQA+AKAhAPIA/AbQCYhWDKAAQELAACkDIQBEBUAlBpQAjBhAABcQgBB+g/CTQhDCZhaBAIgRAIIgWgvQgpAAgnAGQh8AVhcBTgAp5jzQhqBqABCTQgBCVBqBpQBqBqCVAAQCVAABphqQBphpABiVQgBiThphqQhphpiVAAQiVAAhqBpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-62,300,124.2);
p.frameBounds = [rect];


(lib.body_part_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOGXNQBchUB9gVQAmgGApAAIA1BvgA1AXNIBjj5QA/AmBGAQQAQBIAgA+QARAhAUAcgAngHMQhRgtgMhIQgggMgdgNIgHgDQhKgig2gjIgRgLIgUgOQiJhlhNiaQgRgigOgrIgGgSQgmiDgKjJQgDlAgMiFIgMgGQAjhDAbg4QAfhCACgvQCaDVE5BtQH9huFJocQhcGwGfErQACBUgBA1QgECMgaBiQhBD7jlAsQAaAMBKAuQBJAlA5ADIg2AoQgwAigcAEQAsAlAmAWQhmA8hpAuQAPAkAAAdQAAANgDAMQgVBOicAmQh5AdiyAGIgmABQiUAAhJgogAS8kCQhYhWh8AAIgLABIgMleQDDA0CmANQAnEBikBxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-148.5,269.2,297);
p.frameBounds = [rect];


(lib.body_part_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAOlAgWIgfhAIARgIQBahABDiZQA/iTABh+QAAhegjhhQglhphEhUQikjIkLAAQjKAAiXBWIhAgbQghgOg+gLQhDgLgngNIgNgFQADgMAAgNQAAgdgOgkQBnguBmg8QgngWgrglQAcgEAwgiIA2goQg5gDhJgnQhIgugbgMQDjgsBCj7QAahiADiKQACg1gChUQmdkrBbmwQlKIcn+BuQk4htiajVQgCAvgfBCQgbA4gjBDIALAGQANCFADE+QAKDJAmCDIgHAHQg4A+gBBVQAABbBABAQBBBABaAAQA0gBAsgUIATAOIASALQA2AjBJAiIAHADIgMAJIg8AyQhPgshCgeQiBg8hFAAQhoAAhVAjQicifCFjeQjwgRgSknQDABwAnhWQAnhXAAh1QAAhKgVhlIgKg3IAAgBQivAAhfkNQhGjKAAjqQAAhxADgfQAIhZAeg0QA/CfCIgcQkCk3DRmGQAYB8A3AOQA2AOAvAAQAtgBBmhCQAhgWClh7QCDhiBaguQBUgrBMgOIAGAAQAXgBAUgGQAPgBAOgBQBvABBnAsQBmArBFBKQAPgKARgIQBHgmBYgZQBJgVBXgMQBLgLBYgEQA1gDA4AAQAUAAAUACQBsAGBtArQBDAaBDAoQAfAUAlAZQBuBMCbCJQDcDCBjBBQC2B0CmABQAhgBBMgkQBHgkANgYQDxInolCHQDkBFDAifQhgJunpBrQhLM+J/kZQAoIZmGCtQCMCQDSiQQgKFljlgHQEAD1hQEUgAKfDwQh2ADhVBUQhZBZAAB9QABBqA+BQQAMAPAOANQBYBZB+AAQB+AABYhZQBZhYgBh+QABh9hZhZIgCgCIAAAAQClhxgoj/QilgNjEg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194,-207,388,414);
p.frameBounds = [rect];


(lib.body_part_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgNEAi/QhphpAAiVQAAiVBphqQBqhpCVAAQCVAABpBpQBqBqAACVQAACVhqBpQhpBqiVAAQiVAAhqhqgAr+b0QhJBVAAB4QAAB4BJBUQBJBWBnAAQBnAABJhWQBJhUAAh4QAAh4hJhVQhJhVhnAAQhnAAhJBVgAmE3cQhngshuAAQgPAAgPACQApgOAggsQAwhAAAhaQAAhbgwhAQgtg9g/gDIAAjnIBKArIB+h7IDmBLIDIiHIDLCgIDrhQIDcC0ID6g7IBGGZIgCgCQgzhEhIAAQhJAAgzBEQgzBDAABfQAAA+AVAxQhtgqhsgHQgUgBgTAAQg5AAg0ACQhZAEhNALQhXAMhHAVQhYAZhHAlQgRAJgPAKQhFhKhmgsgAk3/QQg3BJAABnQAABoA3BJQA4BKBPgBQA9AAAwgtQANgMAMgQQAjgtALg6QAIgiAAgoQAAhng2hJQg4hKhOAAQhPAAg4BKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.3,-234.5,188.6,469);
p.frameBounds = [rect];


(lib.body_part_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAf+AnEQBQkUkAj1QDlAHAKllQjSCQiLiQQGFitgooZQqAEZBMtAQHphrBgpsQi/CgjlhGQIliHjxomQgNAXhHAjQhMAlghAAQinAAi1h1QhkhAjbjBQibiKhuhMQAqgQAhgrQAzhDAAhgQAAhdgxhDIhGmaIj7A9Ijbi0IjrBQIjLigIjICHIjnhLIh9B5IhKgqIAADnIgIgBQhDAAgwBAQgwBBAABaQAABbAwBAQAtA9BAAEQhMAOhUArQhaAuiEBiQikB7ghAWQhmBBgtACQgvAAg2gOQg2gPgZh6QjRGFECE3QiIAchAifQgdA0gIBZQgCAeAABzQAADpBFDKQBeELCwAAIAAABIAKA3QAVBlAABKQAAB3gnBXQgnBWjAhwQASEoDwAPQiFDfCcCfQhpAqhMBeQh5CUAADEQAABUAoBfQAoBgBHBRQBEBMBNAuIhkD5IwCAAMAAAhOHMBOHAAAMAAABOHgA/kVYQAPA2AwAcQAxAcA2gOQA2gPAcgwQAPgbADgcQAJgBAJgDQA3gOAbgxQAdgwgPg2QgMgrgggaIAIgNQAcgxgPg2QgOg2gxgcQgcgPgdgDQgWgCgXAHQgSAFgQAIQgRgtgsgZQgbgQgegDQgWgBgXAGQg2AOgcAyQgZArAJAwIACAKQACAJAEAHQggADghAJQhpAcg7BIQg8BJAUBLQAUBKBYAiQBYAgBogcQAhgIAdgOIACALgAaJ2xQAPA2AwAcQAxAcA2gOQAfgIAWgTQARgPALgUQAKgSAFgRQAsAVAxgNQAfgIAWgUQASgOALgVQAcgwgPg3QgNgxgogbIgKgGIgPgHQAVgYASgfQA2hdgKhdQgKhehDgmQhDgmhVAmQhVAng2BdQgRAegKAdIgJgFQgxgdg3AOQg2APgcAxQgcAwAPA2QAIAeASAWQgGAHgFAJQgcAwAPA2QAPA2AwAcQAmAXAqgFIADAOgA5v3YQAogoAHg2IATACQBHgBAzgxQAxgyAAhIQABgogRgjQgNgZgUgUQgSgSgUgMQAoguAAhAQAAgpgQgiQgMgagWgUQgygzhHAAQhAAAgvApIgLAKIgNAPQgXghgfgfQhghhh2gSQh0gUhGBGQhFBFATB1QATB1BhBhQAdAdAgAWIgIAMQgzAxAABHQAABHAzAzQAyAyBHAAQAnAAAggQQAIAKAIAJQAzAzBGgBQBHAAAzgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.body_part_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8jdQQgwgdgOg2IgDgLQgdAOghAJQhoAchXghQhYgigUhKQgUhLA7hIQA8hJBogcQAhgJAggCQgDgIgCgIIgDgLQgJgwAZgrQAcgxA2gPQAXgGAWACQAeACAcAQQArAZARAuQAQgJASgFQAXgGAWABQAeADAcAQQAwAbAPA2QAOA2gcAxIgIANQAhAaALArQAPA2gdAxQgbAwg2APQgKACgJABQgDAdgPAaQgcAwg2APQgTAFgSAAQgiAAgggSgAdKu5QgwgcgPg2IgDgPQgqAFgmgXQgwgcgPg2QgPg2AcgwQAFgJAGgHQgSgWgIgeQgPg1AcgxQAcgwA3gPQA2gOAxAcIAJAGQAKgeARgeQA2hdBWgnQBVgmBDAmQBDAnAJBdQAKBeg2BdQgRAegVAYIAPAHIAJAGQApAbANAxQAOA3gcAwQgLAVgRAOQgXAUgfAIQgxANgsgVQgEASgKARQgMAUgQAPQgXATgfAIQgTAFgRAAQgjAAgggSgA5nwCQhGABgzgzQgIgIgHgKQghAPgnAAQhHAAgygyQgygyAAhHQAAhHAygyIAKgKIgCgBQgggXgdgdQhhhhgTh1QgTh1BFhFQBGhFB1ATQB1ATBgBgQAfAfAXAhIAOgPIAKgKQAvgoBAAAQBHgBAzAzQAVAVAMAZQAQAiAAApQABBAgpAuQAUAMASASQAVAVANAZQAQAiAAApQAABHgyAyQgyAyhIAAIgSgBQgIA1goAoQgyAxhHAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226,-189,452,378);
p.frameBounds = [rect];


(lib.body_location_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_5_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_4_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_3_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_0_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.body_location_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.bg_selection_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_selection_screen_img();
	this.instance.setTransform(-450,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-300,900,600);
p.frameBounds = [rect];


(lib.bg_photo_container_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_photo_container_img();
	this.instance.setTransform(-270,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();
	this.instance.setTransform(-70,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-230,140,460);
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
	this.shape.graphics.f("#B04FA8").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.shine_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_7_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_6_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_5_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
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


(lib.glitter_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_2_img();
	this.instance.setTransform(-45,-45);

	this.instance_1 = new lib.glitter_2_2_img();
	this.instance_1.setTransform(-45,-45);

	this.instance_2 = new lib.glitter_3_2_img();
	this.instance_2.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
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


(lib.photo_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.photo_2_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.photo_3_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.photo_4_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.photo_5_img();
	this.instance_3.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-80,-80,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
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

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.024,0.494,0.984],-75.1,0,74.9,0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.back_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.back_2_img();
	this.instance.setTransform(-70,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect];


(lib.back_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.back_1_img();
	this.instance.setTransform(-70,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
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


(lib.pipet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// color
	this.color_mc = new lib.pipet_2_mc();
	this.color_mc.setTransform(-20,20,1,1,44.9);
	this.color_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.color_mc).wait(1));

	// graph
	this.instance = new lib.pipet_img();
	this.instance.setTransform(-40,-40,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.part_5_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA9FyIgQgJQhtg+hoheQh8hvhJhyQhLh2gIhpIgBgaQABg+BGg0QBCgyBFAAQBZAAB2AvQB4AyBpBTQBWBDA7BOQAVAcATAeQBLB9ABCGQAABlgoA3QgTAbgdAQQgvAahHAAQhDAAh0hAg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-43.5,90,87);
p.frameBounds = [rect];


(lib.part_5_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANoKvQhBhsgmiBQBngeBHhFQB+h8AchLQAbhLAThNQARhHgXhmQDPAACADQQBuC1AADgQAADEhkCBQhsCMi7AAQi5AAiCjagAq3DhQAng3AAhkQAAiFhMh+QgSgegVgdQg7hOhWhEQhphSh7gyQh1gwhaAAQhEAAhDAzQhGA1AAA9IgDgBQgRhcgDgHQgHgNAUg8QAUg6AnhAQAmhABWhEQBWhEChAAQBkAAB6A9QB6A7BrBlIATASQBjBiA7BwIAHANQBBCBAAB9QAACIhlCPIgBACQhBBdhVA1g");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.2,-90.5,316.5,181);
p.frameBounds = [rect];


(lib.part_5_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak7HkQivhDirhJIh2gzIABgCQBliRAAiJQAAh6hCiBIgGgMQg8hxhjhiQBshGCNgyIAGgCQDyhXEDAAQBDABA1ATQAvATBwABQAgBMArBYIAJAQQATApAgBJQAbA8AYAgQBABVCGAAQBQAAAhgRQA8geBrgXIATgDQA4CKAbBtIADAOQAWBmgRBJQgSBNgcBLQgcBLh+B8QhHBFhmAeQhRAYhlABQiiAAnzi/g");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.9,-67.5,181.9,135);
p.frameBounds = [rect];


(lib.part_5_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjYGEQgYgggcg8QgfhJgUgpIgIgRQgrhXgghMQhgjfgBh4QABgMAEgmQAFghABgQIABAAQBMgUBOgLQgQA1AAAbQAADCCDDlQAdA0AdApQAeApAfAeQBBBCAxAAQBBAACLgoQCMgoBHAAQBGB6AAAcQAAAtgWARQgQANgmgBIhNgIQgngDgeAEIgSADQhrAYg9AeQggAQhOAAQiGAAhAhUg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-47.2,100,94.6);
p.frameBounds = [rect];


(lib.part_5_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiLE0QgegegegpQgegpgdg0QiCjlAAjBQAAgcAPg1QBHgKBJgFQAACdAaA4QAUApAhAxQBUB0BLAAQAGAABFg+IA7g2IAMgIIA8BaIBFBtIAHAMQA8BfAmBEQhGgBiLAoQiMAphAAAQgyAAhBhDg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-37.5,78,75);
p.frameBounds = [rect];


(lib.part_5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AraLaQhhg5hagxQhkg2grglQg6AAhxgZQiVgiAAguQAAgaAZgGQALgCAsACQAmACARgIQAZgMAAgmQAAgfgZgyQgZgyAAgYQAAgXALgRQAMgUAWAAQAMAAAtA4IAIgGQAJgyAQAAQA3AAAgAqIACACIAFAHIABgLIAyAAQAfAdAYAyQAPAeAeBHIAAAKQBAAMCXAYQCJAXBOAdIAUghQjUhxhUjWQg+qgDLh9QBHgsBTgbQCcgzDIAJQEvANDmDPQDmDOAAEkQAACQg5B8QA+gNAjgLQCJgrAXhNQAGgRADgpQAEgyACgPQAMhLA1AAQAVAAAeAeQAaAbADAWQAPgtARghQAshRA7AAQAiAAAMAKQAJAIAAAWQAAAPgEARQgHAcgTAeIAAAKQAOgeAPgmQAPgWAkAAQAbAAANAUIADAFQAHANAAARQAAAOgPApQgKAcgDANIgMAJIAKAAIACgJIASgOQAKgHAmANQAmANg9BIQg+BLheBpQhfBphfADQhfACjiDMIhTBNIgLAKIg7A1QhFBAgGAAQhNAAhUh2QgigwgTgqQgag4AAicQhJAEhHALQhNALhMAUIgBAAQAAAQgFAhQgFAmAAAMQAAB4BhDhQhwgCgxgSQg2gUhDAAQkDAAjxBWQAXg0AggvgAQNhjIABABIAAgGIgBAFg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.1,-82.9,276.3,166);
p.frameBounds = [rect];


(lib.part_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("APzQLQgmgighgsQg3hHguhhQhujmAAjpQAAl0BWkOQA0ihBAhHQE/FnAAHjQAAGijtFFgAw2iXQirhCAAi5QAAhcA4h0IAkgkQDjjWEXhgQDlhQEHAAQA6AAA4AEQAlAXAbAmQA8BNAABXQAACFhQCDQhLB5iEBlQh/BhiWA3Qh5AthuAKQgdACgdAAQjKAAhmgng");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-103.7,250.1,207.5);
p.frameBounds = [rect];


(lib.part_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJ/OzQAAkkjmjOQjmjPkwgNQjIgJicAzQhTAbhGAsQjLB9A+KiQhHg7gfgeIgxgxQlrl3AAoGQgBoNF4l7Qg3B0AABdQAAC4CqBCQBnAoDKAAQAdAAAcgDQBvgJB4gtQCWg4B+hhQCEhlBLh5QBSiDAAiEQAAhYg8hNQgdgmglgXQAlADAkAEQHRA1FZFGQAyAwAtAyQhBBHgzChQhWEOAAF1QAADoBtDmQAuBhA4BIQAhArAlAjIgLALQgNgUgbAAQgkAAgPAWIgDAAQAEgRAAgPQAAgWgKgIQgMgKghAAQg7AAgsBRQgRAhgPAtQgEgWgZgbQgegegVAAQg1AAgMBLQgDAPgDAyQgDApgGATQgYBNiIArQgkALg9ANQA5h8AAiSg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.1,-121.7,258.2,243.5);
p.frameBounds = [rect];


(lib.part_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgHOAnEIth2AIgMgDMAAAg0xIPUGVIXPpoIDUAAIgNCwQkXBgjjDWIglAkQl4F7AAIPQAAIGFrF3IAyAxQAfAdBHA7QBTDVDUBxIgTAhQhPgdiJgXQiWgYhAgMIAAgLQgehHgPgeQgZgxgegeIgyAAIgFAEIgDgBQgggqg3AAQgQAAgJAyIgJAFQgtg3gLAAQgXAAgMATQgKARAAAYQAAAYAZAyQAZAyAAAfQAAAmgZALQgRAJgmgCQgsgCgLACQgZAFAAAbQAAAuCVAiQBwAZA7AAQAqAlBkA2QBbAxBgA5QgfAvgYA0IgGACQiNAzhsBGIgTgSQhrhlh5g8Qh7g8hjAAQigAAhWBEQhWBEgmBAQgmA/gUA7QgUA7AGANQADAIARBcIAFAaQAIBpBKB2QBJB1B6BuQBpBeBuA/InhMRg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134,-250,268.2,500);
p.frameBounds = [rect];


(lib.part_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgWIAnEIHisRIARAJQB0BABDAAQBIAAAugaQAdgNAbgQQBUg2BBhdIABAAIB2A0QCrBICtBDQH1C/ChAAQBmAABRgYQAlCABBBtQCCDZC5AAQC7AABtiMQBjiBABjEQgBjghti0QiBjTjOAAIgEgNQgahwg4iKQAdgEAnADIBNAHQAmACAQgNQAWgRAAgtQAAgchGh6QgnhDg7hgIgIgLIhFhtIg7hdIgCgCIBThMQDjjNBfgBQBegDBfhpQBfhnA9hLQA9hKglgOQgmgMgLAGIgSAPQADgNALgdQAOgoAAgPQAAgQgGgOIAKgOIAAAAQDtlFAAmiQAAnlk+lnQgtgzgzgvQlYlGnSg2QgkgDglgDQg4gEg6AAQkHAAjkBQIANiwMAkPAAAMAAABOHgEgnDAnEIAA2AIANAAINhWAgEgnDgjwIAAjTMAmmAAAI3SJog");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.part_4_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2aUJQgNgEgogmIgNgJQAhguAAgtQAAgRgDgRQBxgXA/g4IAMANIgEAOIgBALQAAA3BCAsIgLAQQgEA3gtAbQgnAXhAAAQgsAAgGgDgAwSm5Qg3iTAAh7QAAgoACgHQAEgOAYgnQAWgOAggCQAggDA2ACQA2ACBvAvQBuAwAABQQAAArhzCYQh5Cgg4AAQgrAAg3iRgATGn6QgqgcgZggIgJgFQAnhLAAhSIgFg0IgFgzQAAgHADgEIABAAQA1AUA/AQIAPgIQAWAzArAlQA0AtBKASQgBA1g7BAQhBBGhEAAQgmAAgwgegAHOvOQgpgpAAgfQAAguBGhVQAlguA/hEIAQAAIgBAXQAAB/AtBFIgKAGQhKAkgpBjIgBACQgcgLgjgig");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.1,-129.2,300.3,258.5);
p.frameBounds = [rect];


(lib.part_4_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkfDLQARifAyh8QBejrCzAAQBqAABFBaQA8BPAABeQAAA/ghDNIgEAbQhoBJh2AAQiSAAiqhxg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.8,-31.6,57.7,63.3);
p.frameBounds = [rect];


(lib.part_4_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqvMOQgchDg4htIhaixQhljTAAh7QAAiJAyhUQA4hfBtAAQArAAA0AHQBoAhBjAzQCuBbBdBjIiGCTQiLCagRAVQhOBdg+B/Qg5B4ACAyIgKAAIgBAKgAsKglQggACgWAOQgZAlgDANQgCAIAAAoQAAB7A3CTQA2CRArAAQA5AAB5igQBziYAAgrQAAhQhvgwQhvgtg2gCIgrgBQgZAAgRACgALRhHQh+AAhCgOQiAgbAAhPQAAgtCCjIQCCjIBBgyIgEgFQBwhaBTAAQBIAIgoAZQhlBhgHCWIgPAAQg/BFgmAtQhFBVAAAuQAAAfAoAoQAjAjAdALQgPAjgIAlg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-78.2,192.8,156.5);
p.frameBounds = [rect];


(lib.part_4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnpEwQjpAcgNi6IAAgGIAAgBQgDg7AThQQCiBPCRgfIAFgBQAlBlBuA4QCCBDCagiQCcghBahzQBZhvgZh9IABgBQC/g3BmjEQDwEFkiCOQhFC/iqgLQg7CkjEgdQhRA5hKAJQhMAIhIgnQhHAug6AAQhUAAg5hgg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.7,-40,147.5,80.1);
p.frameBounds = [rect];


(lib.part_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDOEIgNgBQhTgHhPgVIgLgDQhXgZhVgmQhXgkhRgxQhUgzg/hKQglgsgXg0QglhVgQhbQgOhSgFhUIAAgBIgBgHIAAgCQgFhggJhdQgJhfgihZQAbh1AshgIAEgKIAOgcIAQgeIABgBQBCh0BfhRQASgQAUgOIABAAQB6hbCngmQCDgjCBgCQB+gBB+AgQAcAHAcAJIAEABIAlANQCeA5CbBwQAHBiAYBfQAJAlARAhQAuBUAvBRQATAgAMAkQAdBQAFBWQAGBggOBiQgDAXgGAZQgYBeg3BQQg4BRhEBKQhCBHhIA/QgyAsg3AkQgaARgcAPQhUAwheAcQhCAShEAAQgVAAgTgCgAkAFqQBIAnBMgJQBMgJBPg4QDEAdA7ikQCqAKBFi+QEiiOjwkFQhmDEi/A3IgBAAQAZB+hZBuQhaBziaAiQicAiiChDQhug5glhlIgFACQiRAeiihPQgTBQADA8IAAAAIAAAHQANC5DpgbQBgChCuhvg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.8,-90.2,173.6,180.5);
p.frameBounds = [rect];


(lib.part_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4SbDQg+gqAPg4QAOg5hqgMQgzgUgfgQQhKglhShsQhIhigMhLIACgBIANgBIgEgFIgMgSQhLhsABiLQgBg5A9hZQA5hUAmgKIgGAKIAQgJQAIgGALAAIAGAAIABAAIgBgIQAAhUA3hYQBNh9COAAQAYAAAbAIIAAgBQgBhBBbgvQBLgoBDAAQB8AABoBkQBpBlAAB8IgCAVIgCAQQAgADATAAQATgBADgFQAoAVA8A9QA7A+ABCNQACCNhkBQIgKAHQgfAXgiAPQAGATADAPQAFAUgBBCIgBAdQgHA6giBBQgqBShHBHQiLCMhpAgQgTAGgRACQgeADgcAAQhKAAgugegA3pQ7QACASAAARQABAtgiAuIAOAJQAoAlAMAFQAGADAsAAQBAAAAngXQAtgbAEg3IALgQQhCgsAAg3IABgMIAFgNIgNgOQg/A5hwAWgASZgtQiDhXAAhsQAAgHADgOIADgTIAJAAIAFgPIgBAAIgpgQQhogyhcgxIgEAAQiVAAhwhuQh0hwABiXQAAg1ALgyQAIglAPgjIAAgCQAqhkBJgjIAKgGQgshFAAiAIAAgWQAHiWBlhiIAOgNIACgCQB5hqBMgSQBNgSBmAQQBEghBVgNIAAgFIA0AAIAAAEQAbABAhAJQAXAGBWAeQA4ATAdAgQAhAjARBAIADAAIAGABIAGABQAuAEAhgHQAlgKBpBKQBqBJA6BeQA7BeAeB7QAeB6AAC5QAACUg8C1QAPAQALATQAYApAAAwQABCsiLBqIgBABIgGAEQicBxkeAAQi3AAiGhYgARutnQgDAEABAHIAEAzIAGAzQgBBSgmBMIAJAFQAYAgArAbQAwAfAlAAQBEAABBhGQA7hAABg1QhJgSg1gtQgrgmgWgyIgPAIQg/gQg1gUIgBgBg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-209.2,-176.2,418.4,352.4);
p.frameBounds = [rect];


(lib.part_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwSOvQBeggBehOQA3gvAogzQAjgtAAgRIgFgsIgFgsQAAhmArhPQAig/BQhNQBohcA8g7QBuhqBUhxQBxiZBIjBQA5idAki/IABgGQBVAPBPAAQA7ABA4gMQAagGAigKIANABQBaAHBWgYQBegbBUgwQAcgQAagRIAIALQA7B2A8DBQBgE0AAD5QAADShKDpQhZEZi4Eag");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.3,-94.3,208.7,188.6);
p.frameBounds = [rect];


(lib.part_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAPCAk1QC4kaBZkYQBKjqAAjUQAAj5hgk0Qg8jBg7h1IgHgLQA2gkAygsQBJg/BBhHQBEhKA4hRQA4hQAXhcQAGgZADgXQAOhigGhiQgFhWgchQQgNgkgSggQgwhRgthUQgSghgJglQgXhfgIhiQiahwifg5IglgNIgDgBQgdgJgcgHQh+ggiAABQiBACiDAjQimAmh7BbIAAAAQgUAOgTAQQhdBRhBB0IgBABIgQAeIgOAcIgFAKQgsBggbB1QAiBZAKBfQAJBfAFBgIAAACIAAAHIAAABQAFBUAOBQQAQBbAmBVQAXA0AjAsQA+BKBVAzQBRAxBWAkQBVAmBYAZICMAhQg7AhhUgHQhOAAhVgPIgCAFQgjDAg7CcQhJDBhxCaQhSByhtBqQg9A7hoBdQhQBNgiA+QgrBPAABmIAFAsIAFAsQAAARgjAtQgnAzg4AvQhdBPheAfIg1AAQiagJiohQQiLhCiMiLQggghgegiIgHAGQghAbhAAVQg+AWgrAAQi/AAhsh4QgngrgWg0QgJgWgFgSQhHgXgkgoQgvg2AAhlQAAgzAMgpQANgsAbgpIgBgDQgQgnAAguQAAiYCshuQjCjbhklrQhOkZAAjrQAAhXAJhPQEyDLDqiiQgdC5AACMQAAEhBhCvQBBB1CtCTIACARQBigIBrAGQFTATCnBYQCoBZAODMIAGAUIAdgFQApgHAlgvQApg8AagfQAegjAsgZQiNgDiWhTQiBhHhPhYIgEgNQBpggCLiMQBHhHAqhSQAihBAHg6IALABIAwArQARAMAcAAQAlAAAwgrQAmghAdgXQh3hFhMg+IgIgNIAKgHQBkhQgCiNQgBiLg7g+Qg8g9gogVQgEAFgTABIAAgpIgCkVQAFjqAFhdIAAgKIAKAAQgCgyA6h4QA9h/BOhdQASgVCLiaICFiUQhchklnitIDEAtIA5ARQBGAWEEBgQCZhQCpgcIADgHQBsirB1iPQBfh+BehFQkgGjAAAuQAABPCAAbQBDAOB9AAIARAEQgMAyAAA1QAACXBzBwQBxBuCVAAIAEAAQBcAxBnAyQAUAIAWAIIABAAIgFAPIgKAAIgCATQgDAOAAAHQAABsCCBXQCHBaC3AAQEeAACchzIAKACQh1JZiXF3QhkD8iSDQQhHBigeAtQgzBLgdBDQhGCkAAEgQAABVgYCNQgeCxg3CqQhwFaiyDWg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-239.4,-235.7,478.9,471.5);
p.frameBounds = [rect];


(lib.part_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EASMAnEQCyjWBwlaQA3iqAeixQAZiNAAhVQgBkgBHikQAchDAzhLQAegtBHhiQCSjQBkj8QCXl3B1paIgDgGQCKhqABisQAAgwgagpQgLgTgPgQQA+i1AAiVQAAi4geh7Qgfh6g6heQg8hehphKQhohJgmAJQghAIgugEIgGgBIgGgBIgEgBQgQg/gggjQgfggg4gTQhVgegXgGQgigJgagBIAAgFINSAAMAAABOHgEgnDAnEMAAAhOHMBACAAAIAAAGQhWANhDAhQhngQhMASQhNASh4BqIgHgIIAAgEQgHAAgOgDIgVgDQhTAAhwBaQhYBGhqB+IgdAjQh1COhsCsIgDAFIAAABQioAciaBRQkEhghGgXQgdgJgcgIQh5gihdgNQg0gHgsAAQhsABg5BfQgyBUAACKQABB7BlDTIBaCyQA3BtAcBDIAKAAQgFBcgFDrIACEVIAAApQgSAAgggDIADgRIAAgVQAAh7hphmQhnhjh8gBQhCAAhNAoQhZAwgBBBIAAAAQgagIgXAAQiPABhOB8Qg3BZAABUIAAAIIgEgBQgMAAgJAHIgKgBQglAJg5BTQg8BYgBA5QABCMBJBsQAAALACANIAAABQALBLBKBiQBRBsBJAlQAgAPAzAVQBqAMgPA4QgOA5A+AqQA+ApB0gPQASgCASgFIAFANQBOBXCBBIQCWBSCNADQgsAZgeAkQgZAfgpA8QgmAugpAIIgdAFIgGgVQgOjLinhZQiohYlTgTQhqgHhjAJIgBgSQiuiShBh1QhhivAAkhQAAiMAdi5IAEgbQAhjNAAhCQgBhdg8hPQhEhahqAAQi2gBheDsQgyB9gQCfQgJBMABBYQAADtBNEYQBlFsDBDbQisBuABCYQAAAuAPAnIACADQgcApgNArQgMAqAAAzQABBlAuA2QAkAoBHAXQAFASAJAWQAWA0AnArQBtB3C+AAQArABA+gWQBBgVAggcIAHgFQAeAiAhAgQCLCMCMBCQCnBQCbAJgAn1JgIgvgrIgMgBIACgeQgBhBgEgUQgDgPgHgTQAkgPAegXIAIAMQBMA/B3BFQgdAXglAhQgxArglAAQgcgBgRgLg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.part_3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AcbM+IAAgWIgdAWQj7g9hLk8QhGknBLjjQAvh2B0hQQCmhxExgnQA4gHA8gEQBBjbDYi0IAAZ7gEgnDAM+IAA57QDYC0BBDbQA8AEA4AHQExAnCmBxQB0BQAvB2QBLDjhGEnQhLE8j7A9g");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-83,500,166.1);
p.frameBounds = [rect];


(lib.part_3_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAiNgFYIgdCfQDhBxBzisIAAEMQjYCzhBDbQg8AFg4AGQkxAnimBxQCvqDF+kegEgg2AGxQg4gGg8gFQhBjbjYizIAAkMQBzCsDhhxIgdifQF+EeCvKDQimhxkxgngEAj/gHPIDFh5IAADbgEgnDgJIIDEB5IjEBig");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-58.6,500,117.2);
p.frameBounds = [rect];


(lib.part_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAhwACJIA8k+IEYCMIAAB2QhGBphuAAQhHAAhZgtgEgnDABNIAAh2IEYiMIA8E+QhZAthHAAQhuAAhGhpg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-18.2,500,36.5);
p.frameBounds = [rect];


(lib.part_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjAG/IguAOQAmgcAEgEQAyg3AAgwIAAgFIgCABQhAAkhGgYQgTgGgTgOQg7gugZhJIg+i5QgdhXgkhVQgnhbgkhdQgVg1gggtIANgKQASgEAcgDQAagDAKAAQBBAABBAWQAmAOBIAkIAqAUIACABQAwAWAxAOQAxAPAeAEIACAAIAWACIBFgCIAXAAIBEACQAaAAAwgMIAAAAIAegJQBGgVBHgkQBBghAmgOIAHgDIACAAQA/gWBBAAQAKAAAaADQAcADASAEIANAKQggAtgVA1QgkBdgnBbQgkBVgdBXIg+C5QgZBJg7AuQgTAOgTAGQhGAYhAgkIgCgBIAAAFQAAAwAyA3IAIAIIApAcQjyhAjEAug");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.1,-46.5,132.2,93.2);
p.frameBounds = [rect];


(lib.part_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AXzDfQgZiChJhYQhkh3jDgxIgggRIA+h2IgBgZIAFAAQGEAKDtApIHqjJIhyEnQDGBHCJBnIAAHeQh0lztdB4gEgnDgAEQCJhnDGhHIhyknIHqDJQDtgpEkgKIAGAZIBBB9IAAAKIgjAAQjEAxhkB3QhLBagYCGQr9h+h0Fzg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-47.4,500,95);
p.frameBounds = [rect];


(lib.part_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjLFIhEgCIgZAAQgjABg4gBIgCAAQgegEgxgPQgxgOgwgWIgCgBIgqgUQhIgkgmgOQhBgWhBAAQgKAAgaADQgcADgSAEIgNAKIgPgTQgYgegigMIABgEQghhrgLgtQgVhYAAhOQAAhfAnhXQAcg7A9hSQBUhwANgUQAyhNAPhJQAlAsAFBbQAEA2gIBHQARg+AghCIBLibQAyhqAmhlQA5DEC4g5QA0hCA9g0QBJhBBDgZQgLAUgOA0IgaBrIAAAjQBAgQA/gMQBigRBGAAQAnAAA2AHQA3AIALAAQhzAchbBcQB8AGBaBCQAeAWAvAuQAzAyAYAUQguAahCBZQhABTg9ByIgKAUIANgDQA7gLBGAAIAQAAIBhAAIAjgSQBHgkAdgYIgoBtIACABQBNAcAwAyQhNALg6BjQg4BygdAkIAAAMQgbABgeAFQgwAKggAmIgOATIgNgKQgSgEgcgDQgagDgKAAQhBAAg/AWQgvARhBAhQhHAkhGAVIgeAJIAAAAQgsAMgZAAIgDAAg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.4,-70.9,182.9,141.9);
p.frameBounds = [rect];


(lib.part_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEnO3QgegFgdgTQgQgLgPgPIgIgIQgyg3AAgwIACgEQBAAkBGgYQATgGATgOQA7guAZhJIA+i5QAdhZAkhVQAnhbAkhdQAVg1AggtIAPgSQAfglAwgKQAegFAbgBQA7gDAuAPQECjdBCh0QBCh0AnhcQAnhdgJiJQgJiKAYACQAYACAjAsQAmAwAjBJQBaC9AADLQAAEXiPDQQgxBGhRBYQh0B6gLAOIgGAAQgIhbhHg7QgPgMgRgLIACAZQAAARgBAQQgFBcguBNIgBAAIgRgJQgNgNgPgKQgSgMgOAAQhDAAhMBWIgoAuIAAABIhkB3IgrAyIgyA8IhOBYIgZAaQgWAVgXAQQgXARgYAMQgoANgpAAIgUgCgAk6O5QgpAAgogNIgBgBQgXgLgXgRQgXgQgWgVIgZgaIhOhYIgyg8IgrgyIhjh3IgBgBIgoguQhMhWhDAAQgOAAgSAMQgPAKgNANIgRAJQgvhNgFhcQgBgQAAgSIABgPIABgJIgFADIgIAGIgTAOQhHA7gIBbIgGAAQgLgOh0h6QhRhYgxhGQiPjQAAkXQAAjLBai9QAjhJAmgwQAjgsAYgCQAYgCgJCKQgJCJAnBdQAnBcBCB0QBCB0ECDdQBEgWBeAQIAVAGQAiAMAYAdIAPASQAgAtAVA1QAkBdAnBbQAkBVAdBZIA+C5QAZBJA7AuQATAOATAGQBGAYBAgkIACAEQAAAwgyA3IgHAHIgVAUQgqAggsABIgEAAg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-95.3,322.5,190.6);
p.frameBounds = [rect];


(lib.part_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAh1AO2IByknInqDJQjtgpmEgKQAMgOBzh6QBShYAwhGQCQjSAAkXQAAjJhai9QgjhJgmgwQgjgsgZgCQgYgCAKCKQAICJgnBdQgmBchCByQhCB0kDDdQgugPg6ADIAAgMQAdgkA3hyQA7hjBMgLQgvgyhOgcIgCgBIAohrIADgCIAAgFIgDAHQgdAYhHAkIguAYQgogFgtgBIgRAAQhFAAg8ALIgDgRQA+hyA/hVQBChZAvgaQgYgUg0gyQgugugegWQhahCh9gGQBbhcBzgcQgLAAg2gIQg3gHgnAAQhFAAhiARQg/AMhAAQIAAgjIAZhrQAOg0ALgUIAFgBIAAgFIgFAGQhDAZhLBBQg6A0g0BCQi4A5g6jEQgmBlgyBqIhLCbQgfBCgRA+QAHhHgDg2QgGhbglgsQgPBJgxBNQgNAUhVBwQg9BSgcA9QgmBXgBBdQABBOAUBYQALAtAhBrIgBAEIgUgGQhegQhEAWQkCjdhCh0QhDhygnhcQgnhdAKiJQAJiKgZACQgYACgjAsQgmAwgiBJQhaC9AADJQAAEXCODSQAxBGBSBYQBzB6ALAOQkkAKjtApInqjJIByEnQjGBHiJBnMAAAgjHMBOHAAAMAAAAjHQiJhnjGhHg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-112.4,500,225);
p.frameBounds = [rect];


(lib.part_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A79ZVQD7g9BLk8QBGknhLjlQgvh2h0hQQivqDl+kfIgfigIhUAqIjEh6QB0lzL9B+QAYiGBLhaQBkh5DEgxIAjAAIAAgKIhBh9IABgZQAHhbBHg7IAUgOIAHgGIAFgDIAAAJIgBAPQgBASACAQQAFBcAuBNIASgJQAMgNAPgKQATgMANAAQBDAABNBWIAoAuIAAABIBkB3IAqAyIAyA8IBOBYIAZAaQAWAVAXAQQAYARAXALIABABQAoANApAAIADAAQAtgBApggIAggJQDGguC6AxIAsANQAdATAeAFIAUACQApAAApgNQAYgMAXgRQAWgQAWgVIAagaIBNhYIAzg8IAqgyIBlh3IAAgBIAnguQBNhWBCAAQAOAAATAMQAPAKANANIARAJIABAAQAthNAGhcQABgQgBgRIgCgZQASALAPAMQBGA7AJBbIABAZIg+B2IAgARQDDAxBkB5QBJBYAZCCQNdh4B0FzIjFB6IhTgqIgfCgQl+EfivKDQh0BQgvB2QhLDlBGEnQBLE8D7A9g");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-162.1,500,324.3);
p.frameBounds = [rect];


(lib.part_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALZEkIgQlGQDLhqECiWIAFgBICXJHgA0xEkICXpHIAFABQECCWDLBqIgQFGg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-29.2,266,58.6);
p.frameBounds = [rect];


(lib.part_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AUyFYIiXpJQBVgyBLg0QCgACBbCxQEXBODJGugArYFYIAQlIQBPApBHAiQDDBeDaAVQAtAFAuACIAoAAIASAAIATAAIApAAQAtgCAtgFQDagVDDheQBHgiBPgpIAQFIgEggVAFYQDJmuEXhOQBbixCggCQBLA0BVAyIiXJJg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207,-34.5,414,69);
p.frameBounds = [rect];


(lib.part_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAgWAnEQjJmxkXhOQhbiyiggCQDtimCGjEQA0hKAkhKQBCiGASiGQBpggBRhlQBGhZBAibQA5iMAkiaQAjiVAAhmQAAiSgphmQg3iLh3AAQgQgBgTAIQgVAHgTAPIgJgFIAXgjQAmg6Afg+QGis6tyzwINJAAMAAABOHgEgnDAnEMAAAhOHINJAAQtyTwGiM6QAoBPA0BMIgJAFQgTgPgVgHQgTgIgQABQh3AAg3CLQgpBmAACSQAABmAjCVQAkCaA5CMQBACbBGBZQBRBlBpAgQASCGBCCGQAkBKA0BKQCGDEDtCmQigAChbCyQkXBOjJGxg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.part_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ab0JvIgUgtQhwjaAqlxQARn5iIk4QDECBA0CoQB9BsBBB+QAfA9AABBQAAAtgZBaQgKAigGAbQgKAsAAAcQAAArAbBLIASAvQAtBvAAAxQAABlhAByQg7BohcBQIgQAEQgahogqhkgA9HM3QhchQg7hoQhAhyAAhlQAAgxAthvQAshuABg3QAAgcgKgsQgGgbgKgiQgZhaAAgtQAAhBAfg9QBBh+B9hsQA0ioDEiBQiIE4ARH5QAqFxhwDaIgUAtQgqBkgZBog");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208,-82.7,416,165.6);
p.frameBounds = [rect];


(lib.part_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhdDAQjwAYjUAjQk4ikAElRIasAAQgjEjkTDSQklgplZgSg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-25.1,171,50.3);
p.frameBounds = [rect];


(lib.part_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AffQ4QAZhaAAgtQAAhBgfg8QhBh/h9hsQg0injEiCQmdkQyOhrQyHBxmTEKQjECCg0CnQh9BshBB/QgfA8AABBQAAAtAZBaQAKAkAGAbIgggsQg0hKgohQQmis6NyztIMfAAQgEFTE5CkQDUgjDwgZQFZATElApQETjSAiklIMqAAQNyTtmiM6QgfA+gmA6IgXAiIggAsQAGgbAKgkg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225.7,-114.4,451.5,228.8);
p.frameBounds = [rect];


(lib.part_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxAF/IgBAAQgGgBgBgBQABgHglgIIgBgBQhfgXjNjQQL/B5Dpp1QAlBJAGA8QAGA8gOB8QgQB5h7CcQgRASgUAQIgOALQg7Akg3AaQh6A3hvACIheABQgsAAgPgCgAOoFiQiggDi7h0IgOgLQihiFAAjmQABgWAGg9QAGhEAwheQDTImLsgWQjLCmhfAZIgCAAIgBABQglAIABAHQgBAEhHAAIhZgBg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.5,-38.5,287,77.1);
p.frameBounds = [rect];


(lib.part_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap4GpQldBli/kjQrChSC6quQFyD1FyhzQAJEqEQDSQEZDcGMAAQGNAAEZjcQERjSAJkqQGYBPEujvQDZMCpzgCQj7EJlJhVIgoAAQjaEEmcigQijBPiPAAQi+AAiYiLg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.2,-56.4,346.5,112.9);
p.frameBounds = [rect];


(lib.part_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAd0IgSAAIgoAAIgLgBQgxgFgfgBQjagVjDheQhHgihPgpQjLhqkCiWIgFgDQhVgxhLg1QjtiniGjEQg0hKgkhKQhCiGgSiGQhpgghRhlQhGhZhAibQg5iMgkiYQgjiVAAhmQAAiTAphnQA3iLB3AAQAQgBATAIQAVAHATAPIAJgGIAgAsQAKAtAAAbQgBA4gsBuQgtBuAAAxQAABmBAByQA7BmBcBQIAFABIALAGIABgEQAZhnAqhiIAUgtQBwjagql0QgRn5CIk4QGTkJSHh0QSOBtGdEQQCIE4gRH5QgqF0BwDaIAUAtQAqBiAaBoIABADIAPgHQBchQA7hmQBAhyAAhmQAAgxgthuIgSgvQgbhLAAgsQAAgbAKgtIAggsIAJAGQATgPAVgHQATgIAQABQB3AAA3CLQApBnAACTQAABmgjCVQgkCYg5CMQhACbhGBZQhRBlhpAgQgSCGhCCGQgkBKg0BKQiGDEjtCnQhLA1hVAxIgFADQkCCWjLBqQhPAphHAiQjDBejaAVQgfABgxAFIgKABIgpAAIgTAAgAAdPxQGdCfDZkDIApAAQFJBVD6kJQJ0ACjZsCQkvDtmXhPQgKEqkQDUQkZDcmOAAQmLAAkZjcQkQjUgJkqQlyBylzjyQi5KuLBBSQDAEjFchlQELDyF9i2gAyGwNIABABQAmAIgCAGQAAABAHACIABAAQAcADB9gCQBugCB7g4QA4gZA6gkIAOgMQAUgQARgRQB8icAPh8QAOh7gGg8QgGg8glhKQjpJ4r/h5QDNDPBfAYgAGM5bQgHA+AAAVQAADpCgCFIAPALQC7BzCgADQChAEgBgHQAAgGAlgJIABAAIACgBQBfgZDMimQrtAXjTopQgvBfgHBDg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233,-190.8,466,381.7);
p.frameBounds = [rect];


(lib.part_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq4f3QhJhUAAh4QAAh4BJhVQBJhVBnAAQBnAABJBVQBJBVAAB4QAAB4hJBUQhJBVhnAAQhnAAhJhVgAK3RrQgOgOgLgPQg/hQAAhpQAAh+BYhYQBVhVB2gDIALgBQB8AABZBXIACACQBYBYAAB+QAAB9hYBZQhZBYh+AAQh9AAhZhYgAx7RyQhAhAAAhbQAAhVA5g9IAMAKQAOArARAjQBNCbCJBlQgsAVgzAAQhbAAhAhAgANe4KQhDgohDgaQgVgyAAg9QAAhgAzhDQAzhDBJAAQBIAAA0BDIABACQAyBDAABeQAABfgzBDQghAsgrAPQgkgZgggTgArU7WQgvhAAAhaQAAhbAvhAQAxhABDAAIAHAAQA/ADAtA9QAwBAAABbQAABagwBAQggAsgpAOQgYACgYAFQhAgDgug+g");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.2,-212.4,242.5,425);
p.frameBounds = [rect];


(lib.part_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiFCwQg4hJABhnQgBhmA4hKQA4hIBNgBQBOABA4BIQA3BKAABmQABAngJAiQgNA5giAuQgNAQgNANQgvAsg9ABQhNAAg4hKg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-25,38,50);
p.frameBounds = [rect];


(lib.part_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvaJsQgTgbgRghQggg/gQhHQhGgQg/gmQhNguhEhNQhHhQgohhQgohcAAhUQAAjFB5iUQBMheBpgqQBVgiBoAAQBFAACBA7QBCAfBPArIA8gxIAMgJQAeANAgAMQAMBIBRAtQBSAsCxgFQCygGB5geQCbglAVhOIANAFQAnANBFALQA+AKAhAPIA/AbQCYhWDKAAQELAACkDIQBEBUAlBpQAjBhAABcQgBB+g/CTQhDCZhaBAIgRAIIgWgvQgpAAgnAGQh8AVhcBTgAp5jzQhqBqABCTQgBCVBqBpQBqBqCVAAQCVAABphqQBphpABiVQgBiThphqQhphpiVAAQiVAAhqBpg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-62,300,124.2);
p.frameBounds = [rect];


(lib.part_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AOGXNQBchUB9gVQAmgGApAAIA1BvgA1AXNIBjj5QA/AmBGAQQAQBIAgA+QARAhAUAcgAngHMQhRgtgMhIQgggMgdgNIgHgDQhKgig2gjIgRgLIgUgOQiJhlhNiaQgRgigOgrIgGgSQgmiDgKjJQgDlAgMiFIgMgGQAjhDAbg4QAfhCACgvQCaDVE5BtQH9huFJocQhcGwGfErQACBUgBA1QgECMgaBiQhBD7jlAsQAaAMBKAuQBJAlA5ADIg2AoQgwAigcAEQAsAlAmAWQhmA8hpAuQAPAkAAAdQAAANgDAMQgVBOicAmQh5AdiyAGIgmABQiUAAhJgogAS8kCQhYhWh8AAIgLABIgMleQDDA0CmANQAnEBikBxg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-148.5,269.2,297);
p.frameBounds = [rect];


(lib.part_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAOlAgWIgfhAIARgIQBahABDiZQA/iTABh+QAAhegjhhQglhphEhUQikjIkLAAQjKAAiXBWIhAgbQghgOg+gLQhDgLgngNIgNgFQADgMAAgNQAAgdgOgkQBnguBmg8QgngWgrglQAcgEAwgiIA2goQg5gDhJgnQhIgugbgMQDjgsBCj7QAahiADiKQACg1gChUQmdkrBbmwQlKIcn+BuQk4htiajVQgCAvgfBCQgbA4gjBDIALAGQANCFADE+QAKDJAmCDIgHAHQg4A+gBBVQAABbBABAQBBBABaAAQA0gBAsgUIATAOIASALQA2AjBJAiIAHADIgMAJIg8AyQhPgshCgeQiBg8hFAAQhoAAhVAjQicifCFjeQjwgRgSknQDABwAnhWQAnhXAAh1QAAhKgVhlIgKg3IAAgBQivAAhfkNQhGjKAAjqQAAhxADgfQAIhZAeg0QA/CfCIgcQkCk3DRmGQAYB8A3AOQA2AOAvAAQAtgBBmhCQAhgWClh7QCDhiBaguQBUgrBMgOIAGAAQAXgBAUgGQAPgBAOgBQBvABBnAsQBmArBFBKQAPgKARgIQBHgmBYgZQBJgVBXgMQBLgLBYgEQA1gDA4AAQAUAAAUACQBsAGBtArQBDAaBDAoQAfAUAlAZQBuBMCbCJQDcDCBjBBQC2B0CmABQAhgBBMgkQBHgkANgYQDxInolCHQDkBFDAifQhgJunpBrQhLM+J/kZQAoIZmGCtQCMCQDSiQQgKFljlgHQEAD1hQEUgAKfDwQh2ADhVBUQhZBZAAB9QABBqA+BQQAMAPAOANQBYBZB+AAQB+AABYhZQBZhYgBh+QABh9hZhZIgCgCIAAAAQClhxgoj/QilgNjEg0g");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194,-207,388,414);
p.frameBounds = [rect];


(lib.part_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgNEAi/QhphpAAiVQAAiVBphqQBqhpCVAAQCVAABpBpQBqBqAACVQAACVhqBpQhpBqiVAAQiVAAhqhqgAr+b0QhJBVAAB4QAAB4BJBUQBJBWBnAAQBnAABJhWQBJhUAAh4QAAh4hJhVQhJhVhnAAQhnAAhJBVgAmE3cQhngshuAAQgPAAgPACQApgOAggsQAwhAAAhaQAAhbgwhAQgtg9g/gDIAAjnIBKArIB+h7IDmBLIDIiHIDLCgIDrhQIDcC0ID6g7IBGGZIgCgCQgzhEhIAAQhJAAgzBEQgzBDAABfQAAA+AVAxQhtgqhsgHQgUgBgTAAQg5AAg0ACQhZAEhNALQhXAMhHAVQhYAZhHAlQgRAJgPAKQhFhKhmgsgAk3/QQg3BJAABnQAABoA3BJQA4BKBPgBQA9AAAwgtQANgMAMgQQAjgtALg6QAIgiAAgoQAAhng2hJQg4hKhOAAQhPAAg4BKg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.3,-234.5,188.6,469);
p.frameBounds = [rect];


(lib.part_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAf+AnEQBQkUkAj1QDlAHAKllQjSCQiLiQQGFitgooZQqAEZBMtAQHphrBgpsQi/CgjlhGQIliHjxomQgNAXhHAjQhMAlghAAQinAAi1h1QhkhAjbjBQibiKhuhMQAqgQAhgrQAzhDAAhgQAAhdgxhDIhGmaIj7A9Ijbi0IjrBQIjLigIjICHIjnhLIh9B5IhKgqIAADnIgIgBQhDAAgwBAQgwBBAABaQAABbAwBAQAtA9BAAEQhMAOhUArQhaAuiEBiQikB7ghAWQhmBBgtACQgvAAg2gOQg2gPgZh6QjRGFECE3QiIAchAifQgdA0gIBZQgCAeAABzQAADpBFDKQBeELCwAAIAAABIAKA3QAVBlAABKQAAB3gnBXQgnBWjAhwQASEoDwAPQiFDfCcCfQhpAqhMBeQh5CUAADEQAABUAoBfQAoBgBHBRQBEBMBNAuIhkD5IwCAAMAAAhOHMBOHAAAMAAABOHgA/kVYQAPA2AwAcQAxAcA2gOQA2gPAcgwQAPgbADgcQAJgBAJgDQA3gOAbgxQAdgwgPg2QgMgrgggaIAIgNQAcgxgPg2QgOg2gxgcQgcgPgdgDQgWgCgXAHQgSAFgQAIQgRgtgsgZQgbgQgegDQgWgBgXAGQg2AOgcAyQgZArAJAwIACAKQACAJAEAHQggADghAJQhpAcg7BIQg8BJAUBLQAUBKBYAiQBYAgBogcQAhgIAdgOIACALgAaJ2xQAPA2AwAcQAxAcA2gOQAfgIAWgTQARgPALgUQAKgSAFgRQAsAVAxgNQAfgIAWgUQASgOALgVQAcgwgPg3QgNgxgogbIgKgGIgPgHQAVgYASgfQA2hdgKhdQgKhehDgmQhDgmhVAmQhVAng2BdQgRAegKAdIgJgFQgxgdg3AOQg2APgcAxQgcAwAPA2QAIAeASAWQgGAHgFAJQgcAwAPA2QAPA2AwAcQAmAXAqgFIADAOgA5v3YQAogoAHg2IATACQBHgBAzgxQAxgyAAhIQABgogRgjQgNgZgUgUQgSgSgUgMQAoguAAhAQAAgpgQgiQgMgagWgUQgygzhHAAQhAAAgvApIgLAKIgNAPQgXghgfgfQhghhh2gSQh0gUhGBGQhFBFATB1QATB1BhBhQAdAdAgAWIgIAMQgzAxAABHQAABHAzAzQAyAyBHAAQAnAAAggQQAIAKAIAJQAzAzBGgBQBHAAAzgxg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.part_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8jdQQgwgdgOg2IgDgLQgdAOghAJQhoAchXghQhYgigUhKQgUhLA7hIQA8hJBogcQAhgJAggCQgDgIgCgIIgDgLQgJgwAZgrQAcgxA2gPQAXgGAWACQAeACAcAQQArAZARAuQAQgJASgFQAXgGAWABQAeADAcAQQAwAbAPA2QAOA2gcAxIgIANQAhAaALArQAPA2gdAxQgbAwg2APQgKACgJABQgDAdgPAaQgcAwg2APQgTAFgSAAQgiAAgggSgAdKu5QgwgcgPg2IgDgPQgqAFgmgXQgwgcgPg2QgPg2AcgwQAFgJAGgHQgSgWgIgeQgPg1AcgxQAcgwA3gPQA2gOAxAcIAJAGQAKgeARgeQA2hdBWgnQBVgmBDAmQBDAnAJBdQAKBeg2BdQgRAegVAYIAPAHIAJAGQApAbANAxQAOA3gcAwQgLAVgRAOQgXAUgfAIQgxANgsgVQgEASgKARQgMAUgQAPQgXATgfAIQgTAFgRAAQgjAAgggSgA5nwCQhGABgzgzQgIgIgHgKQghAPgnAAQhHAAgygyQgygyAAhHQAAhHAygyIAKgKIgCgBQgggXgdgdQhhhhgTh1QgTh1BFhFQBGhFB1ATQB1ATBgBgQAfAfAXAhIAOgPIAKgKQAvgoBAAAQBHgBAzAzQAVAVAMAZQAQAiAAApQABBAgpAuQAUAMASASQAVAVANAZQAQAiAAApQAABHgyAyQgyAyhIAAIgSgBQgIA1goAoQgyAxhHAAIgBAAg");

	// figure
	this.figure_mc = new lib.figure_mc();

	this.figure_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.figure_mc).wait(1));

	// body
	this.body_mc = new lib.body_part_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226,-189,452,378);
p.frameBounds = [rect];


(lib.open_palette_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAF8IgRATQiagGhuhuQh1h1AAimQAAikB1h1QB1h1CkAAQClAAB1B1QB1B1AACkQAACmh1B1QhuBuiaAGg");

	// animation
	this.instance = new lib.open_palette_2_mc();
	this.instance.setTransform(-50,-50,1,1,45);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:50,y:50},40).wait(1));

	// graph
	this.instance_1 = new lib.open_palette_1_img();
	this.instance_1.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.decor_bottom_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_bottom_5_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_photo_container_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.decor_bottom_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_bottom_4_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_photo_container_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.decor_bottom_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_bottom_3_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_photo_container_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.decor_bottom_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_bottom_2_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_photo_container_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.decor_bottom_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_bottom_1_img();
	this.instance.setTransform(-253,-253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_photo_container_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_0_mc();
	this.instance.setTransform(-50,0,1,1,0,0,180);

	this.instance_1 = new lib.check_0_mc();
	this.instance_1.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,140,120);
p.frameBounds = [rect];


(lib.body_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.body_location_0_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.531},9).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.body_location_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-145.9,-145.9,292,292), new cjs.Rectangle(-146.9,-146.9,293.9,293.9), new cjs.Rectangle(-147.9,-147.9,295.9,295.9), new cjs.Rectangle(-148.8,-148.8,297.8,297.8), new cjs.Rectangle(-149.8,-149.8,299.8,299.8), new cjs.Rectangle(-150.8,-150.8,301.7,301.7), new cjs.Rectangle(-151.8,-151.8,303.7,303.6), new cjs.Rectangle(-152.7,-152.7,305.6,305.6), new cjs.Rectangle(-153.7,-153.7,307.5,307.5), new cjs.Rectangle(-152.8,-152.8,305.8,305.8), new cjs.Rectangle(-152,-151.9,304.1,304), new cjs.Rectangle(-151.1,-151.1,302.3,302.3), new cjs.Rectangle(-150.2,-150.2,300.5,300.5), new cjs.Rectangle(-149.3,-149.3,298.8,298.8), new cjs.Rectangle(-148.5,-148.4,297,297), new cjs.Rectangle(-147.6,-147.6,295.3,295.3), new cjs.Rectangle(-146.7,-146.7,293.5,293.5), new cjs.Rectangle(-145.8,-145.8,291.8,291.8), new cjs.Rectangle(-145,-145,290,290)];


(lib.body_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.body_location_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.531},9).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.body_location_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-145.9,-145.9,292,292), new cjs.Rectangle(-146.9,-146.9,293.9,293.9), new cjs.Rectangle(-147.9,-147.9,295.9,295.9), new cjs.Rectangle(-148.8,-148.8,297.8,297.8), new cjs.Rectangle(-149.8,-149.8,299.8,299.8), new cjs.Rectangle(-150.8,-150.8,301.7,301.7), new cjs.Rectangle(-151.8,-151.8,303.7,303.6), new cjs.Rectangle(-152.7,-152.7,305.6,305.6), new cjs.Rectangle(-153.7,-153.7,307.5,307.5), new cjs.Rectangle(-152.8,-152.8,305.8,305.8), new cjs.Rectangle(-152,-151.9,304.1,304), new cjs.Rectangle(-151.1,-151.1,302.3,302.3), new cjs.Rectangle(-150.2,-150.2,300.5,300.5), new cjs.Rectangle(-149.3,-149.3,298.8,298.8), new cjs.Rectangle(-148.5,-148.4,297,297), new cjs.Rectangle(-147.6,-147.6,295.3,295.3), new cjs.Rectangle(-146.7,-146.7,293.5,293.5), new cjs.Rectangle(-145.8,-145.8,291.8,291.8), new cjs.Rectangle(-145,-145,290,290)];


(lib.body_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.body_location_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.531},9).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.body_location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-145.9,-145.9,292,292), new cjs.Rectangle(-146.9,-146.9,293.9,293.9), new cjs.Rectangle(-147.9,-147.9,295.9,295.9), new cjs.Rectangle(-148.8,-148.8,297.8,297.8), new cjs.Rectangle(-149.8,-149.8,299.8,299.8), new cjs.Rectangle(-150.8,-150.8,301.7,301.7), new cjs.Rectangle(-151.8,-151.8,303.7,303.6), new cjs.Rectangle(-152.7,-152.7,305.6,305.6), new cjs.Rectangle(-153.7,-153.7,307.5,307.5), new cjs.Rectangle(-152.8,-152.8,305.8,305.8), new cjs.Rectangle(-152,-151.9,304.1,304), new cjs.Rectangle(-151.1,-151.1,302.3,302.3), new cjs.Rectangle(-150.2,-150.2,300.5,300.5), new cjs.Rectangle(-149.3,-149.3,298.8,298.8), new cjs.Rectangle(-148.5,-148.4,297,297), new cjs.Rectangle(-147.6,-147.6,295.3,295.3), new cjs.Rectangle(-146.7,-146.7,293.5,293.5), new cjs.Rectangle(-145.8,-145.8,291.8,291.8), new cjs.Rectangle(-145,-145,290,290)];


(lib.body_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.body_location_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.531},9).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.body_location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-145.9,-145.9,292,292), new cjs.Rectangle(-146.9,-146.9,293.9,293.9), new cjs.Rectangle(-147.9,-147.9,295.9,295.9), new cjs.Rectangle(-148.8,-148.8,297.8,297.8), new cjs.Rectangle(-149.8,-149.8,299.8,299.8), new cjs.Rectangle(-150.8,-150.8,301.7,301.7), new cjs.Rectangle(-151.8,-151.8,303.7,303.6), new cjs.Rectangle(-152.7,-152.7,305.6,305.6), new cjs.Rectangle(-153.7,-153.7,307.5,307.5), new cjs.Rectangle(-152.8,-152.8,305.8,305.8), new cjs.Rectangle(-152,-151.9,304.1,304), new cjs.Rectangle(-151.1,-151.1,302.3,302.3), new cjs.Rectangle(-150.2,-150.2,300.5,300.5), new cjs.Rectangle(-149.3,-149.3,298.8,298.8), new cjs.Rectangle(-148.5,-148.4,297,297), new cjs.Rectangle(-147.6,-147.6,295.3,295.3), new cjs.Rectangle(-146.7,-146.7,293.5,293.5), new cjs.Rectangle(-145.8,-145.8,291.8,291.8), new cjs.Rectangle(-145,-145,290,290)];


(lib.body_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.body_location_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.531},9).to({scaleX:1,scaleY:1,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.body_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect, new cjs.Rectangle(-145.9,-145.9,292,292), new cjs.Rectangle(-146.9,-146.9,293.9,293.9), new cjs.Rectangle(-147.9,-147.9,295.9,295.9), new cjs.Rectangle(-148.8,-148.8,297.8,297.8), new cjs.Rectangle(-149.8,-149.8,299.8,299.8), new cjs.Rectangle(-150.8,-150.8,301.7,301.7), new cjs.Rectangle(-151.8,-151.8,303.7,303.6), new cjs.Rectangle(-152.7,-152.7,305.6,305.6), new cjs.Rectangle(-153.7,-153.7,307.5,307.5), new cjs.Rectangle(-152.8,-152.8,305.8,305.8), new cjs.Rectangle(-152,-151.9,304.1,304), new cjs.Rectangle(-151.1,-151.1,302.3,302.3), new cjs.Rectangle(-150.2,-150.2,300.5,300.5), new cjs.Rectangle(-149.3,-149.3,298.8,298.8), new cjs.Rectangle(-148.5,-148.4,297,297), new cjs.Rectangle(-147.6,-147.6,295.3,295.3), new cjs.Rectangle(-146.7,-146.7,293.5,293.5), new cjs.Rectangle(-145.8,-145.8,291.8,291.8), new cjs.Rectangle(-145,-145,290,290)];


(lib.animation_pipet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.object_mc = new lib.pipet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.object_mc).wait(149).to({scaleX:0.98,scaleY:0.94,skewX:-32.3,skewY:-27.8,y:5},10).to({scaleX:1,scaleY:1,rotation:-30,skewX:0,skewY:0,y:-5},10).to({rotation:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-41.9,-41.1,84,83.2), new cjs.Rectangle(-43.9,-42,87.9,86.2), new cjs.Rectangle(-45.8,-42.9,91.7,88.8), new cjs.Rectangle(-47.5,-43.6,95.1,91.2), new cjs.Rectangle(-49.1,-44.1,98.3,93.3), new cjs.Rectangle(-50.5,-44.5,101.1,95.1), new cjs.Rectangle(-51.8,-44.7,103.6,96.6), new cjs.Rectangle(-52.8,-45,105.7,98.1), new cjs.Rectangle(-53.8,-45,107.7,99.1), new cjs.Rectangle(-54.6,-45,109.3,100), new cjs.Rectangle(-54.5,-46.3,109.2,100.8), new cjs.Rectangle(-54.5,-47.8,109.2,101.7), new cjs.Rectangle(-54.6,-49.2,109.3,102.5), new cjs.Rectangle(-54.6,-50.6,109.2,103.4), new cjs.Rectangle(-54.5,-52.1,109.2,104.4), new cjs.Rectangle(-54.5,-53.6,109.2,105.4), new cjs.Rectangle(-54.5,-55.1,109.1,106.4), new cjs.Rectangle(-54.5,-56.5,109.1,107.3), new cjs.Rectangle(-54.4,-58,109,108.3), new cjs.Rectangle(-54.6,-59.6,109.3,109.3), new cjs.Rectangle(-53.6,-58.2,107.4,107.4), new cjs.Rectangle(-52.7,-56.8,105.7,105.7), new cjs.Rectangle(-51.5,-55,103.1,103.1), new cjs.Rectangle(-50.3,-53.3,100.7,100.7), new cjs.Rectangle(-48.8,-51.4,97.7,97.7), new cjs.Rectangle(-47.2,-49.2,94.6,94.6), new cjs.Rectangle(-45.6,-47.2,91.4,91.5), new cjs.Rectangle(-43.8,-44.8,87.7,87.7), new cjs.Rectangle(-42,-42.5,84.1,84.1), new cjs.Rectangle(-40,-40,80,80)];


(lib.animation_eraser_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eraser_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170).to({x:-5},9).to({x:5},20).to({x:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-40.5,-40,80,80), new cjs.Rectangle(-41.1,-40,80,80), new cjs.Rectangle(-41.6,-40,80,80), new cjs.Rectangle(-42.2,-40,80,80), new cjs.Rectangle(-42.8,-40,80,80), new cjs.Rectangle(-43.3,-40,80,80), new cjs.Rectangle(-43.9,-40,80,80), new cjs.Rectangle(-44.4,-40,80,80), new cjs.Rectangle(-45,-40,80,80), new cjs.Rectangle(-44.5,-40,80,80), new cjs.Rectangle(-44,-40,80,80), new cjs.Rectangle(-43.5,-40,80,80), new cjs.Rectangle(-43,-40,80,80), new cjs.Rectangle(-42.5,-40,80,80), new cjs.Rectangle(-42,-40,80,80), new cjs.Rectangle(-41.5,-40,80,80), new cjs.Rectangle(-41,-40,80,80), new cjs.Rectangle(-40.5,-40,80,80), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-39.5,-40,80,80), new cjs.Rectangle(-39,-40,80,80), new cjs.Rectangle(-38.5,-40,80,80), new cjs.Rectangle(-38,-40,80,80), new cjs.Rectangle(-37.5,-40,80,80), new cjs.Rectangle(-37,-40,80,80), new cjs.Rectangle(-36.5,-40,80,80), new cjs.Rectangle(-36,-40,80,80), new cjs.Rectangle(-35.5,-40,80,80), new cjs.Rectangle(-35,-40,80,80), new cjs.Rectangle(-35.5,-40,80,80), new cjs.Rectangle(-36,-40,80,80), new cjs.Rectangle(-36.5,-40,80,80), new cjs.Rectangle(-37,-40,80,80), new cjs.Rectangle(-37.5,-40,80,80), new cjs.Rectangle(-38,-40,80,80), new cjs.Rectangle(-38.5,-40,80,80), new cjs.Rectangle(-39,-40,80,80), new cjs.Rectangle(-39.5,-40,80,80), new cjs.Rectangle(-40,-40,80,80)];


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


(lib.shine_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_7_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-12.7,-13.2,26.5,26.5), new cjs.Rectangle(-15,-15.4,31.1,31.1), new cjs.Rectangle(-17.2,-17.6,35.7,35.7), new cjs.Rectangle(-19.4,-19.7,40,40), new cjs.Rectangle(-21.4,-21.7,44,44), new cjs.Rectangle(-23.3,-23.4,47.7,47.7), new cjs.Rectangle(-24.9,-24.9,50.8,50.8), new cjs.Rectangle(-26.1,-26,53.3,53.3), new cjs.Rectangle(-27.1,-26.8,55.1,55.1), new cjs.Rectangle(-27.6,-27.1,56,56), new cjs.Rectangle(-27.7,-27.1,56,56), new cjs.Rectangle(-27.2,-26.5,55,55), new cjs.Rectangle(-26.3,-25.5,53,53), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-26.6,-25.6,53.1,53.1), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.2,-27,55.8,55.8), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.6,-26.5,54.4,54.4), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-25.2,-24.1,49.3,49.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-21.3,-20.5,41.6,41.6), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-16.7,-16,32.4,32.4), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.9,-11.4,22.9,22.9), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.7,-10.4,20.8,20.8), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-9.1,-8.9,17.8,17.8), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-6.5,-6.4,12.8,12.8), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_6_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-26.6,-25.6,53.1,53.1), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.2,-27,55.8,55.8), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.6,-26.5,54.4,54.4), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-25.2,-24.1,49.3,49.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-21.3,-20.5,41.6,41.6), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-16.7,-16,32.4,32.4), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.9,-11.4,22.9,22.9), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.7,-10.4,20.8,20.8), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-9.1,-8.9,17.8,17.8), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-6.5,-6.4,12.8,12.8), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_5_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27,-25.9,53.8,53.8), new cjs.Rectangle(-28,-26.9,55.7,55.7), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.3,-26.2,53.7,53.7), new cjs.Rectangle(-25.6,-24.6,50.3,50.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-20.6,-19.8,40.2,40.2), new cjs.Rectangle(-17.5,-16.8,34,34), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.1,-10.6,21.3,21.3), new cjs.Rectangle(-10.9,-10.6,21.1,21.1), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-8.8,-8.6,17.1,17), new cjs.Rectangle(-7,-6.9,13.7,13.7), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


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


(lib.shine_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_7_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_6_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_5_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
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

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97,-96.4,193.6,193), new cjs.Rectangle(-98,-95.9,194.1,192), new cjs.Rectangle(-99,-95.4,194.6,191), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-95,-95,190,190)];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.photo_2_mc();
	this.instance.setTransform(0,20,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:1,scaleY:1},10).to({scaleX:0.83,scaleY:0.83},10).wait(1));

	// graph
	this.instance_1 = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


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


(lib.back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.back_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:10},5).to({x:-10},10).to({x:0},5).wait(1));

	// bg
	this.instance_1 = new lib.back_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-70,-50,142,100), new cjs.Rectangle(-70,-50,144,100), new cjs.Rectangle(-70,-50,146,100), new cjs.Rectangle(-70,-50,148,100), new cjs.Rectangle(-70,-50,150,100), new cjs.Rectangle(-70,-50,148,100), new cjs.Rectangle(-70,-50,146,100), new cjs.Rectangle(-70,-50,144,100), new cjs.Rectangle(-70,-50,142,100), new cjs.Rectangle(-70,-50,140,100), new cjs.Rectangle(-72,-50,142,100), new cjs.Rectangle(-74,-50,144,100), new cjs.Rectangle(-76,-50,146,100), new cjs.Rectangle(-78,-50,148,100), new cjs.Rectangle(-80,-50,150,100), new cjs.Rectangle(-78,-50,148,100), new cjs.Rectangle(-76,-50,146,100), new cjs.Rectangle(-74,-50,144,100), new cjs.Rectangle(-72,-50,142,100), new cjs.Rectangle(-70,-50,140,100)];


(lib.back_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.back_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-50,140,100);
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


(lib.parts_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part
	this.instance = new lib.part_5_10_mc();
	this.instance.setTransform(-98,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// part
	this.instance_1 = new lib.part_5_9_mc();
	this.instance_1.setTransform(13,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// part
	this.instance_2 = new lib.part_5_8_mc();
	this.instance_2.setTransform(37,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// part
	this.instance_3 = new lib.part_5_7_mc();
	this.instance_3.setTransform(90,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// part
	this.instance_4 = new lib.part_5_6_mc();
	this.instance_4.setTransform(94,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// part
	this.instance_5 = new lib.part_5_5_mc();
	this.instance_5.setTransform(50,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// part
	this.instance_6 = new lib.part_5_4_mc();
	this.instance_6.setTransform(82,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// part
	this.instance_7 = new lib.part_5_3_mc();
	this.instance_7.setTransform(54,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// part
	this.instance_8 = new lib.part_5_2_mc();
	this.instance_8.setTransform(-116,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// part
	this.instance_9 = new lib.part_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-466,-487,910,986);
p.frameBounds = [rect];


(lib.parts_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part
	this.instance = new lib.part_4_9_mc();
	this.instance.setTransform(34,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// part
	this.instance_1 = new lib.part_4_8_mc();
	this.instance_1.setTransform(-216,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// part
	this.instance_2 = new lib.part_4_7_mc();
	this.instance_2.setTransform(10,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// part
	this.instance_3 = new lib.part_4_6_mc();
	this.instance_3.setTransform(58,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// part
	this.instance_4 = new lib.part_4_5_mc();
	this.instance_4.setTransform(62,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// part
	this.instance_5 = new lib.part_4_4_mc();
	this.instance_5.setTransform(38,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// part
	this.instance_6 = new lib.part_4_3_mc();
	this.instance_6.setTransform(20,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// part
	this.instance_7 = new lib.part_4_2_mc();
	this.instance_7.setTransform(-6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// part
	this.instance_8 = new lib.part_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-566,-506,978,1011);
p.frameBounds = [rect];


(lib.parts_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part
	this.instance = new lib.part_3_9_mc();
	this.instance.setTransform(0,167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// part
	this.instance_1 = new lib.part_3_8_mc();
	this.instance_1.setTransform(0,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// part
	this.instance_2 = new lib.part_3_7_mc();
	this.instance_2.setTransform(0,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// part
	this.instance_3 = new lib.part_3_6_mc();
	this.instance_3.setTransform(-5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// part
	this.instance_4 = new lib.part_3_5_mc();
	this.instance_4.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// part
	this.instance_5 = new lib.part_3_4_mc();
	this.instance_5.setTransform(7,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// part
	this.instance_6 = new lib.part_3_3_mc();
	this.instance_6.setTransform(-5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// part
	this.instance_7 = new lib.part_3_2_mc();
	this.instance_7.setTransform(0,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// part
	this.instance_8 = new lib.part_3_1_mc();
	this.instance_8.setTransform(0,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-355,-503,712,1020);
p.frameBounds = [rect];


(lib.parts_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part
	this.instance = new lib.part_2_9_mc();
	this.instance.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// part
	this.instance_1 = new lib.part_2_8_mc();
	this.instance_1.setTransform(0,215);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// part
	this.instance_2 = new lib.part_2_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// part
	this.instance_3 = new lib.part_2_6_mc();
	this.instance_3.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// part
	this.instance_4 = new lib.part_2_5_mc();
	this.instance_4.setTransform(0,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// part
	this.instance_5 = new lib.part_2_4_mc();
	this.instance_5.setTransform(0,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// part
	this.instance_6 = new lib.part_2_3_mc();
	this.instance_6.setTransform(-2,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// part
	this.instance_7 = new lib.part_2_2_mc();
	this.instance_7.setTransform(1,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// part
	this.instance_8 = new lib.part_2_1_mc();
	this.instance_8.setTransform(0,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-352,-575,703,1145);
p.frameBounds = [rect];


(lib.parts_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part
	this.instance = new lib.part_1_1_mc();
	this.instance.setTransform(-13,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// part
	this.instance_1 = new lib.part_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// part
	this.instance_2 = new lib.part_1_8_mc();
	this.instance_2.setTransform(-4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// part
	this.instance_3 = new lib.part_1_7_mc();
	this.instance_3.setTransform(-15,-192);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// part
	this.instance_4 = new lib.part_1_6_mc();
	this.instance_4.setTransform(-17,188);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// part
	this.instance_5 = new lib.part_1_5_mc();
	this.instance_5.setTransform(-13,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// part
	this.instance_6 = new lib.part_1_4_mc();
	this.instance_6.setTransform(19,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// part
	this.instance_7 = new lib.part_1_3_mc();
	this.instance_7.setTransform(3,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-367,-542,736,1080);
p.frameBounds = [rect];


(lib.open_palette_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.open_palette_1_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ApXErIAApVISvAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-60,-30,120,60)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_location_0_5_mc();

	this.instance_1 = new lib.body_location_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();
	this.instance_2.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvTUTQiEAAheheQhdhdAAiEIAA+nQAAiEBdheQBehdCEAAIenAAQCEAABdBdQBeBeAACEIAAenQAACEheBdQhdBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,296,296);
p.frameBounds = [rect, rect, new cjs.Rectangle(-139,-139,290,290)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_location_0_4_mc();

	this.instance_1 = new lib.body_location_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();
	this.instance_2.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvTUTQiEAAheheQhdhdAAiEIAA+nQAAiEBdheQBehdCEAAIenAAQCEAABdBdQBeBeAACEIAAenQAACEheBdQhdBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,296,296);
p.frameBounds = [rect, rect, new cjs.Rectangle(-139,-139,290,290)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_location_0_3_mc();

	this.instance_1 = new lib.body_location_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();
	this.instance_2.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvTUTQiEAAheheQhdhdAAiEIAA+nQAAiEBdheQBehdCEAAIenAAQCEAABdBdQBeBeAACEIAAenQAACEheBdQhdBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,296,296);
p.frameBounds = [rect, rect, new cjs.Rectangle(-139,-139,290,290)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_location_0_2_mc();

	this.instance_1 = new lib.body_location_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();
	this.instance_2.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvTUTQiEAAheheQhdhdAAiEIAA+nQAAiEBdheQBehdCEAAIenAAQCEAABdBdQBeBeAACEIAAenQAACEheBdQhdBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,296,296);
p.frameBounds = [rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_location_0_1_mc();

	this.instance_1 = new lib.body_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();
	this.instance_2.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvTUTQiEAAheheQhdhdAAiEIAA+nQAAiEBdheQBehdCEAAIenAAQCEAABdBdQBeBeAACEIAAenQAACEheBdQhdBeiEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,296,296);
p.frameBounds = [rect, rect, new cjs.Rectangle(-139,-139,290,290)];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,140,120);
p.frameBounds = [rect, new cjs.Rectangle(-70.3,-60.3,140.6,120.6), new cjs.Rectangle(-70.6,-60.6,141.3,121.2), new cjs.Rectangle(-71,-60.9,142,121.9), new cjs.Rectangle(-71.3,-61.2,142.7,122.5), new cjs.Rectangle(-71.7,-61.5,143.4,123.1), new cjs.Rectangle(-72,-61.8,144.1,123.7), new cjs.Rectangle(-72.4,-62.1,144.9,124.3), new cjs.Rectangle(-72.8,-62.4,145.6,124.9), new cjs.Rectangle(-73.1,-62.7,146.3,125.5), new cjs.Rectangle(-73.5,-63.1,147.1,126.1), new cjs.Rectangle(-73.9,-63.4,147.8,126.7), new cjs.Rectangle(-74.2,-63.7,148.5,127.4), new cjs.Rectangle(-74.6,-64,149.2,128), new cjs.Rectangle(-75,-64.3,150,128.5), new cjs.Rectangle(-74.6,-63.9,149.2,128), new cjs.Rectangle(-74.2,-63.7,148.5,127.4), new cjs.Rectangle(-74,-63.4,148,126.9), new cjs.Rectangle(-73.6,-63.1,147.3,126.3), new cjs.Rectangle(-73.2,-62.8,146.5,125.7), new cjs.Rectangle(-72.9,-62.5,145.8,125.2), new cjs.Rectangle(-72.6,-62.2,145.2,124.6), new cjs.Rectangle(-72.3,-61.9,144.6,124), new cjs.Rectangle(-71.9,-61.7,143.9,123.4), new cjs.Rectangle(-71.6,-61.4,143.2,122.9), new cjs.Rectangle(-71.3,-61.1,142.6,122.3), new cjs.Rectangle(-70.9,-60.8,141.9,121.7), new cjs.Rectangle(-70.6,-60.5,141.3,121.2), new cjs.Rectangle(-70.3,-60.2,140.6,120.6), new cjs.Rectangle(-70,-60,140,120)];


(lib.body_bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.shine_mc = new lib.shine_1_6_mc();
	this.shine_mc.setTransform(-236,41);

	this.shine_mc_1 = new lib.shine_1_1_mc();
	this.shine_mc_1.setTransform(255,-80);

	this.shine_mc_2 = new lib.shine_1_7_mc();
	this.shine_mc_2.setTransform(-21,-156);

	this.shine_mc_3 = new lib.shine_1_6_mc();
	this.shine_mc_3.setTransform(160,-43);

	this.shine_mc_4 = new lib.shine_1_5_mc();
	this.shine_mc_4.setTransform(-162,3);

	this.shine_mc_5 = new lib.shine_1_2_mc();
	this.shine_mc_5.setTransform(-186,-116);

	this.shine_mc_6 = new lib.shine_1_1_mc();
	this.shine_mc_6.setTransform(-99,-106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_6},{t:this.shine_mc_5},{t:this.shine_mc_4},{t:this.shine_mc_3},{t:this.shine_mc_2},{t:this.shine_mc_1},{t:this.shine_mc}]}).wait(1));

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-310,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310,-260,620,520);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},49).to({y:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310,-260,620,520);
p.frameBounds = [rect, new cjs.Rectangle(-310,-259.9,620,520), new cjs.Rectangle(-310,-259.8,620,520), new cjs.Rectangle(-310,-259.7,620,520), new cjs.Rectangle(-310,-259.6,620,520), new cjs.Rectangle(-310,-259.5,620,520), new cjs.Rectangle(-310,-259.4,620,520), new cjs.Rectangle(-310,-259.3,620,520), new cjs.Rectangle(-310,-259.2,620,520), new cjs.Rectangle(-310,-259.1,620,520), new cjs.Rectangle(-310,-259,620,520), new cjs.Rectangle(-310,-258.9,620,520), new cjs.Rectangle(-310,-258.8,620,520), new cjs.Rectangle(-310,-258.6,620,520), new cjs.Rectangle(-310,-258.5,620,520), new cjs.Rectangle(-310,-258.4,620,520), new cjs.Rectangle(-310,-258.3,620,520), new cjs.Rectangle(-310,-258.2,620,520), new cjs.Rectangle(-310,-258.1,620,520), new cjs.Rectangle(-310,-258,620,520), new cjs.Rectangle(-310,-257.9,620,520), new cjs.Rectangle(-310,-257.8,620,520), new cjs.Rectangle(-310,-257.7,620,520), new cjs.Rectangle(-310,-257.6,620,520), new cjs.Rectangle(-310,-257.5,620,520), new cjs.Rectangle(-310,-257.4,620,520), new cjs.Rectangle(-310,-257.3,620,520), new cjs.Rectangle(-310,-257.2,620,520), new cjs.Rectangle(-310,-257.1,620,520), new cjs.Rectangle(-310,-257,620,520), new cjs.Rectangle(-310,-256.9,620,520), new cjs.Rectangle(-310,-256.8,620,520), new cjs.Rectangle(-310,-256.7,620,520), new cjs.Rectangle(-310,-256.6,620,520), new cjs.Rectangle(-310,-256.5,620,520), new cjs.Rectangle(-310,-256.4,620,520), new cjs.Rectangle(-310,-256.3,620,520), new cjs.Rectangle(-310,-256.2,620,520), new cjs.Rectangle(-310,-256.1,620,520), new cjs.Rectangle(-310,-256,620,520), new cjs.Rectangle(-310,-255.9,620,520), new cjs.Rectangle(-310,-255.8,620,520), new cjs.Rectangle(-310,-255.7,620,520), new cjs.Rectangle(-310,-255.6,620,520), new cjs.Rectangle(-310,-255.5,620,520), new cjs.Rectangle(-310,-255.4,620,520), new cjs.Rectangle(-310,-255.3,620,520), new cjs.Rectangle(-310,-255.2,620,520), new cjs.Rectangle(-310,-255.1,620,520), new cjs.Rectangle(-310,-255,620,520), new cjs.Rectangle(-310,-255.1,620,520), new cjs.Rectangle(-310,-255.2,620,520), new cjs.Rectangle(-310,-255.3,620,520), new cjs.Rectangle(-310,-255.4,620,520), new cjs.Rectangle(-310,-255.5,620,520), new cjs.Rectangle(-310,-255.6,620,520), new cjs.Rectangle(-310,-255.7,620,520), new cjs.Rectangle(-310,-255.8,620,520), new cjs.Rectangle(-310,-255.9,620,520), new cjs.Rectangle(-310,-256,620,520), new cjs.Rectangle(-310,-256.1,620,520), new cjs.Rectangle(-310,-256.2,620,520), new cjs.Rectangle(-310,-256.3,620,520), new cjs.Rectangle(-310,-256.4,620,520), new cjs.Rectangle(-310,-256.5,620,520), new cjs.Rectangle(-310,-256.6,620,520), new cjs.Rectangle(-310,-256.7,620,520), new cjs.Rectangle(-310,-256.8,620,520), new cjs.Rectangle(-310,-256.9,620,520), new cjs.Rectangle(-310,-257,620,520), new cjs.Rectangle(-310,-257.1,620,520), new cjs.Rectangle(-310,-257.2,620,520), new cjs.Rectangle(-310,-257.3,620,520), new cjs.Rectangle(-310,-257.4,620,520), new cjs.Rectangle(-310,-257.5,620,520), new cjs.Rectangle(-310,-257.6,620,520), new cjs.Rectangle(-310,-257.7,620,520), new cjs.Rectangle(-310,-257.8,620,520), new cjs.Rectangle(-310,-257.9,620,520), new cjs.Rectangle(-310,-258,620,520), new cjs.Rectangle(-310,-258.1,620,520), new cjs.Rectangle(-310,-258.2,620,520), new cjs.Rectangle(-310,-258.3,620,520), new cjs.Rectangle(-310,-258.4,620,520), new cjs.Rectangle(-310,-258.5,620,520), new cjs.Rectangle(-310,-258.6,620,520), new cjs.Rectangle(-310,-258.7,620,520), new cjs.Rectangle(-310,-258.8,620,520), new cjs.Rectangle(-310,-258.9,620,520), new cjs.Rectangle(-310,-259,620,520), new cjs.Rectangle(-310,-259.1,620,520), new cjs.Rectangle(-310,-259.2,620,520), new cjs.Rectangle(-310,-259.3,620,520), new cjs.Rectangle(-310,-259.4,620,520), new cjs.Rectangle(-310,-259.5,620,520), new cjs.Rectangle(-310,-259.6,620,520), new cjs.Rectangle(-310,-259.7,620,520), new cjs.Rectangle(-310,-259.8,620,520), new cjs.Rectangle(-310,-259.9,620,520), new cjs.Rectangle(-310,-260,620,520)];


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
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
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
p.nominalBounds = rect = new cjs.Rectangle(-310,-260,620,520);
p.frameBounds = [rect];


(lib.photoContainer_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(0,265,0.765,0.764);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decorTop
	this.decorTop_mc = new lib.decor_top_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// parts
	this.parts_mc = new lib.parts_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.parts_mc).wait(1));

	// decorBottom
	this.decorBottom_mc = new lib.decor_bottom_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-487,1200,986);
p.frameBounds = [rect];


(lib.photoContainer_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(0,265,0.765,0.764);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decorTop
	this.decorTop_mc = new lib.decor_top_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// parts
	this.parts_mc = new lib.parts_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.parts_mc).wait(1));

	// decorBottom
	this.decorBottom_mc = new lib.decor_bottom_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-506,1200,1011);
p.frameBounds = [rect];


(lib.photoContainer_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(0,265,0.765,0.764);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decorTop
	this.decorTop_mc = new lib.decor_top_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// parts
	this.parts_mc = new lib.parts_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.parts_mc).wait(1));

	// decorBottom
	this.decorBottom_mc = new lib.decor_bottom_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-503,1200,1020);
p.frameBounds = [rect];


(lib.photoContainer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(0,265,0.765,0.764);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decorTop
	this.decorTop_mc = new lib.decor_top_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// parts
	this.parts_mc = new lib.parts_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.parts_mc).wait(1));

	// decorBottom
	this.decorBottom_mc = new lib.decor_bottom_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-575,1200,1145);
p.frameBounds = [rect];


(lib.photoContainer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logotype_mc = new lib.logotype_mc();
	this.logotype_mc.setTransform(0,265,0.765,0.764);

	this.timeline.addTween(cjs.Tween.get(this.logotype_mc).wait(1));

	// decorTop
	this.decorTop_mc = new lib.decor_top_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorTop_mc).wait(1));

	// parts
	this.parts_mc = new lib.parts_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.parts_mc).wait(1));

	// decorBottom
	this.decorBottom_mc = new lib.decor_bottom_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.decorBottom_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-542,1200,1080);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":124});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(29).to({scaleX:0.74,scaleY:0.74,y:-40,alpha:0.012},0).to({regY:-0.1,scaleX:1.08,scaleY:1.08,y:-40.1,alpha:0.738},11).to({regY:0,scaleX:1,scaleY:1,y:-40,alpha:1},4).wait(81));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(250,500);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(39).to({scaleX:0.74,scaleY:0.74,y:120,alpha:0.012},0).to({regX:0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:250.1,y:120.1,alpha:0.738},11).to({regX:0,regY:0,scaleX:1,scaleY:1,x:250,y:120,alpha:1},4).wait(71));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-250,500);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({scaleX:0.74,scaleY:0.74,y:120,alpha:0.012},0).to({regX:-0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:-250.1,y:120.1,alpha:0.738},11).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-250,y:120,alpha:1},4).wait(61));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-250,-500);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(19).to({scaleX:0.74,scaleY:0.74,y:-140,alpha:0.012},0).to({regX:-0.1,regY:-0.1,scaleX:1.08,scaleY:1.08,x:-250.1,y:-140.1,alpha:0.738},11).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-250,y:-140,alpha:1},4).wait(91));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(250,-500);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(59).to({scaleX:0.74,scaleY:0.74,y:-140,alpha:0.012},0).to({regX:0.1,regY:-0.1,scaleX:1.08,scaleY:1.08,x:250.1,y:-140.1,alpha:0.738},11).to({regX:0,regY:0,scaleX:1,scaleY:1,x:250,y:-140,alpha:1},4).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-395,-645,796,1296);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-397.9,-645,799,1296), new cjs.Rectangle(-402.4,-645,803.4,1296), new cjs.Rectangle(-406.7,-645,807.8,1296), new cjs.Rectangle(-403.8,-645,804.8,1296), new cjs.Rectangle(-400.8,-645,801.9,1296), new cjs.Rectangle(-397.8,-645,798.9,1296), rect=new cjs.Rectangle(-395,-645,796,1296), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395,-645,799,1296), new cjs.Rectangle(-395,-645,803.7,923.8), new cjs.Rectangle(-395,-645,808.2,928.2), new cjs.Rectangle(-395,-645,805.2,925.1), new cjs.Rectangle(-395,-645,802.1,922), new cjs.Rectangle(-395,-645,799.1,919), rect=new cjs.Rectangle(-395,-645,796,916), rect, rect, rect, new cjs.Rectangle(-397.9,-645,799,919.1), new cjs.Rectangle(-402.4,-285,803.4,563.8), new cjs.Rectangle(-406.7,-285,807.8,568.2), new cjs.Rectangle(-403.8,-285,804.8,565.1), new cjs.Rectangle(-400.8,-285,801.9,562), new cjs.Rectangle(-397.8,-285,798.9,559), rect=new cjs.Rectangle(-395,-285,796,556), rect, rect, rect, new cjs.Rectangle(-395,-287.9,799,558.9), new cjs.Rectangle(-395,-292.3,803.7,563.4), new cjs.Rectangle(-395,-296.7,808.2,567.8), new cjs.Rectangle(-395,-293.8,805.2,564.8), new cjs.Rectangle(-395,-290.7,802.1,561.8), new cjs.Rectangle(-395,-287.8,799.1,558.9), rect=new cjs.Rectangle(-395,-285,796,556), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,140,120);
p.frameBounds = [rect, rect];


(lib.Snowflake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,675);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(110,40,0.909,0.909);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,850.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1000);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(220,700,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc},{t:this.instance}]}).wait(1));

	// title
	this.instance_1 = new lib.title_mc();
	this.instance_1.setTransform(400.5,280.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(-200,400);
	this.instance_2.alpha = 0.102;
	this.instance_2.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1361.9);
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
	this.locations_mc.setTransform(399,310);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.bg_selection_screen_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-335,1262.7,1316);
p.frameBounds = [rect];


(lib.drawing_mode_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.animation_mc = new lib.animation_pipet_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvnIRJAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.2,-50,116.5,100);
p.frameBounds = [rect];


(lib.drawing_mode_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// color
	this.color_mc = new lib.size_brush_mc();
	this.color_mc.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.color_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99052F").s().p("AkqEmQh5h4AAiuQAAivB5h7QB9h5CtAAQCuAAB4B5QB+B7AACvQAACuh+B4Qh4B+iuAAQitAAh9h+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.2,-50,116.5,100);
p.frameBounds = [rect];


(lib.drawing_mode_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(0,0,0.666,0.667);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// color
	this.color_mc = new lib.size_brush_mc();
	this.color_mc.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.color_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99052F").s().p("AjjDgQhchcAAiEQAAiGBchdQBghcCDAAQCEAABcBcQBgBdAACGQAACEhgBcQhcBgiEAAQiDAAhghgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-40,100,80);
p.frameBounds = [rect];


(lib.drawing_mode_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(0,0,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// color
	this.color_mc = new lib.size_brush_mc();
	this.color_mc.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.color_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99052F").s().p("AibCZQg/g/AAhaQAAhbA/hAQBBg/BaAAQBaAAA/A/QBCBAAABbQAABahCA/Qg/BChaAAQhaAAhBhCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AnzDHIAAmNIPnAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-27.5,100,55);
p.frameBounds = [rect];


(lib.drawing_mode_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(0,0,0.291,0.292);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// color
	this.color_mc = new lib.size_brush_mc();
	this.color_mc.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.color_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99052F").s().p("AhUBTQgjgiABgxQgBgxAjgjQAkgjAwABQAxgBAiAjQAkAjAAAxQAAAxgkAiQgiAkgxAAQgwAAgkgkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AnzBjIAAjFIPnAAIAADFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-17.5,100,35);
p.frameBounds = [rect];


(lib.drawing_mode_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(0,0,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// color
	this.color_mc = new lib.size_brush_mc();
	this.color_mc.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.color_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99052F").s().p("AgxAwQgTgTgBgdQABgcATgVQAWgTAbgBQAdABATATQAWAVAAAcQAAAdgWATQgTAWgdAAQgbAAgWgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AnzBjIAAjFIPnAAIAADFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-12.5,100,25);
p.frameBounds = [rect];


(lib.drawing_mode_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// graph
	this.instance = new lib.animation_eraser_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokH0IAAvnIRJAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.2,-50,116.5,100);
p.frameBounds = [rect];


(lib.drawing_modes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mode_1_mc
	this.mode_1_mc = new lib.drawing_mode_1_mc();
	this.mode_1_mc.setTransform(70,180);

	this.timeline.addTween(cjs.Tween.get(this.mode_1_mc).wait(1));

	// mode_2_mc
	this.mode_2_mc = new lib.drawing_mode_2_mc();
	this.mode_2_mc.setTransform(70,205);

	this.timeline.addTween(cjs.Tween.get(this.mode_2_mc).wait(1));

	// mode_3_mc
	this.mode_3_mc = new lib.drawing_mode_3_mc();
	this.mode_3_mc.setTransform(70,245);

	this.timeline.addTween(cjs.Tween.get(this.mode_3_mc).wait(1));

	// mode_4_mc
	this.mode_4_mc = new lib.drawing_mode_4_mc();
	this.mode_4_mc.setTransform(70,305);

	this.timeline.addTween(cjs.Tween.get(this.mode_4_mc).wait(1));

	// mode_5_mc
	this.mode_5_mc = new lib.drawing_mode_5_mc();
	this.mode_5_mc.setTransform(70,385);

	this.timeline.addTween(cjs.Tween.get(this.mode_5_mc).wait(1));

	// mode_6_mc
	this.mode_6_mc = new lib.drawing_mode_6_mc();
	this.mode_6_mc.setTransform(70,470,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.mode_6_mc).wait(1));

	// mode_0_mc
	this.mode_0_mc = new lib.drawing_mode_0_mc();
	this.mode_0_mc.setTransform(70,130,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.mode_0_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.7,85,116.6,430);
p.frameBounds = [rect];


(lib.panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// palette
	this.openPalette_btn = new lib.open_palette_btn();
	this.openPalette_btn.setTransform(730,435);
	new cjs.ButtonHelper(this.openPalette_btn, 0, 1, 2, false, new lib.open_palette_btn(), 3);

	this.palette_mc = new lib.palette_mc();
	this.palette_mc.setTransform(170,70);
	this.palette_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.palette_mc},{t:this.openPalette_btn}]}).wait(1));

	// drawingMode
	this.drawingModes_mc = new lib.drawing_modes_mc();

	this.timeline.addTween(cjs.Tween.get(this.drawingModes_mc).wait(1));

	// colorBar
	this.colorBar_mc = new lib.color_bar_mc();
	this.colorBar_mc.setTransform(670,90);

	this.timeline.addTween(cjs.Tween.get(this.colorBar_mc).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();
	this.instance.setTransform(730,300);

	this.instance_1 = new lib.bg_panel_mc();
	this.instance_1.setTransform(70,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,70,800,460);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(730.1,525.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.back_btn = new lib.back_btn();
	this.back_btn.setTransform(70,555,0.714,0.714);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.back_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(730,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(730.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(90,-50,0.85,0.849);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.back_btn},{t:this.photo_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_5_mc();
	this.photoContainer_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.7,-246,1226.8,1127.1);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(730.1,525.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.back_btn = new lib.back_btn();
	this.back_btn.setTransform(70,555,0.714,0.714);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.back_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(730,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(730.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(90,-50,0.85,0.849);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.back_btn},{t:this.photo_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_4_mc();
	this.photoContainer_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.7,-246,1226.8,1127.1);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(730.1,525.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.back_btn = new lib.back_btn();
	this.back_btn.setTransform(70,555,0.714,0.714);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.back_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(730,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(730.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(90,-50,0.85,0.849);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.back_btn},{t:this.photo_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_3_mc();
	this.photoContainer_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.7,-246,1226.8,1127.1);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(730.1,525.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.back_btn = new lib.back_btn();
	this.back_btn.setTransform(70,555,0.714,0.714);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.back_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(730,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(730.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(90,-50,0.85,0.849);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.back_btn},{t:this.photo_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_2_mc();
	this.photoContainer_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.7,-275,1226.8,1156);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(730.1,525.1,0.875,0.875,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.back_btn = new lib.back_btn();
	this.back_btn.setTransform(70,555,0.714,0.714);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.back_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(730,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(730.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(90,-50,0.85,0.849);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.back_btn},{t:this.photo_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_1_mc();
	this.photoContainer_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226.7,-246,1226.8,1127.1);
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

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.InstructionScreen();

	this.instance_10 = new lib.Glitter_2();
	this.instance_10.setTransform(-50,50);

	this.instance_11 = new lib.Cursor();
	this.instance_11.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_12 = new lib.OrientationLockScreen();

	this.instance_13 = new lib.CurtainScreen();

	this.instance_14 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_11},{t:this.instance_10}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1361.9), new cjs.Rectangle(-262.6,-335,1262.7,1316), new cjs.Rectangle(-226.7,-246,1226.8,1127.1), new cjs.Rectangle(-226.7,-275,1226.8,1156), rect=new cjs.Rectangle(-226.7,-246,1226.8,1127.1), rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-95,5,315,90), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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