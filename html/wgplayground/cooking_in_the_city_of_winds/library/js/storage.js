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
		{src:"library/images/hero_main_img.png", id:"hero_main_img"},
		{src:"library/images/shadow_hero_main_img.png", id:"shadow_hero_main_img"},
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
		{src:"library/images/storage_atlas_29.png", id:"storage_atlas_29"},
		{src:"library/images/storage_atlas_30.png", id:"storage_atlas_30"},
		{src:"library/images/storage_atlas_31.png", id:"storage_atlas_31"},
		{src:"library/images/storage_atlas_32.png", id:"storage_atlas_32"},
		{src:"library/images/storage_atlas_33.png", id:"storage_atlas_33"},
		{src:"library/images/storage_atlas_34.png", id:"storage_atlas_34"},
		{src:"library/images/storage_atlas_35.png", id:"storage_atlas_35"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_8", frames: [[0,0,597,600],[599,0,550,588]]},
		{name:"storage_atlas_9", frames: [[662,0,505,567],[0,0,660,490]]},
		{name:"storage_atlas_10", frames: [[0,390,1200,200],[0,0,638,388]]},
		{name:"storage_atlas_11", frames: [[0,0,400,600]]},
		{name:"storage_atlas_12", frames: [[0,0,896,266]]},
		{name:"storage_atlas_13", frames: [[0,0,388,600],[390,0,408,524]]},
		{name:"storage_atlas_14", frames: [[502,0,501,371],[0,0,500,380]]},
		{name:"storage_atlas_15", frames: [[0,0,800,224],[0,226,640,280]]},
		{name:"storage_atlas_16", frames: [[642,0,400,400],[0,0,640,280]]},
		{name:"storage_atlas_17", frames: [[463,0,435,366],[0,0,461,347]]},
		{name:"storage_atlas_18", frames: [[0,0,500,300],[502,0,500,300]]},
		{name:"storage_atlas_19", frames: [[0,0,500,300],[502,0,500,300]]},
		{name:"storage_atlas_20", frames: [[0,0,468,319],[470,0,380,380]]},
		{name:"storage_atlas_21", frames: [[382,0,366,392],[750,248,398,263],[0,0,380,380],[750,0,431,246]]},
		{name:"storage_atlas_22", frames: [[431,0,380,260],[813,0,380,260],[0,0,429,238],[0,240,316,315],[700,262,380,260],[318,262,380,260]]},
		{name:"storage_atlas_23", frames: [[764,0,380,260],[382,262,380,260],[382,0,380,260],[0,0,380,260],[0,262,380,260]]},
		{name:"storage_atlas_24", frames: [[0,0,435,223],[302,225,366,251],[437,0,411,223],[670,225,264,342],[0,225,300,320]]},
		{name:"storage_atlas_25", frames: [[0,0,300,300],[302,0,300,300],[604,0,300,300]]},
		{name:"storage_atlas_26", frames: [[302,0,300,300],[604,0,300,300],[0,0,300,300]]},
		{name:"storage_atlas_27", frames: [[604,0,296,296],[474,302,296,296],[772,298,417,210],[302,0,300,300],[0,0,300,300],[0,302,472,190]]},
		{name:"storage_atlas_28", frames: [[0,0,417,210],[0,212,417,210],[419,0,417,210],[419,212,417,210]]},
		{name:"storage_atlas_29", frames: [[979,0,163,378],[0,192,279,279],[698,0,279,276],[417,0,279,276],[0,0,415,190],[281,278,282,210],[565,278,275,210],[842,380,346,129]]},
		{name:"storage_atlas_30", frames: [[0,207,229,183],[0,0,205,205],[207,0,357,115],[812,203,200,200],[406,523,561,69],[203,392,201,201],[0,392,201,201],[231,117,201,201],[434,117,201,201],[609,320,201,201],[637,0,201,201],[840,0,201,201],[406,320,201,201]]},
		{name:"storage_atlas_31", frames: [[0,142,190,190],[1001,112,180,180],[0,334,190,190],[1001,294,180,180],[384,384,228,158],[192,142,190,190],[576,140,186,188],[614,330,194,178],[192,334,190,190],[384,192,190,190],[384,0,190,190],[838,0,320,110],[810,327,127,256],[838,112,161,213],[0,0,260,140],[576,0,260,138]]},
		{name:"storage_atlas_32", frames: [[683,247,183,132],[564,112,212,133],[182,0,407,79],[483,515,280,80],[778,161,340,80],[319,435,162,163],[137,435,180,160],[371,81,191,157],[182,81,187,171],[494,247,187,132],[862,0,186,159],[679,381,183,132],[591,0,269,110],[0,182,180,180],[0,0,180,180],[1050,0,150,150],[345,254,147,170],[978,243,200,110],[182,254,161,179],[868,243,108,218],[1072,355,125,173],[765,515,305,72],[0,364,135,236],[494,381,183,132]]},
		{name:"storage_atlas_33", frames: [[452,356,147,131],[677,0,126,135],[691,137,126,135],[805,0,170,99],[693,274,170,99],[693,375,170,99],[411,0,123,167],[720,476,139,106],[1097,129,49,325],[0,507,220,80],[969,371,126,127],[269,150,140,150],[601,283,90,190],[117,175,150,142],[1148,129,50,297],[0,365,310,69],[0,175,115,188],[452,169,110,185],[865,423,93,172],[0,436,310,69],[564,144,125,137],[127,0,143,148],[312,456,138,140],[312,302,138,152],[536,0,139,142],[977,0,45,369],[819,101,102,159],[865,262,102,159],[0,0,125,173],[452,489,266,66],[1024,0,126,127],[272,0,134,140]]},
		{name:"storage_atlas_34", frames: [[0,239,120,120],[129,0,120,120],[0,361,120,120],[0,117,120,120],[1051,418,91,102],[1042,314,91,102],[1029,210,91,102],[968,469,81,118],[495,0,120,120],[739,0,120,120],[617,0,120,120],[251,0,120,120],[373,0,120,120],[722,213,100,100],[861,0,120,120],[0,483,180,60],[488,257,180,60],[287,428,180,60],[287,366,180,60],[847,210,180,60],[488,319,180,60],[469,381,100,106],[936,374,104,93],[926,272,99,100],[670,226,50,210],[847,122,271,42],[983,0,120,120],[488,122,98,133],[1105,0,80,120],[824,374,110,90],[847,166,271,42],[717,122,128,89],[244,122,120,120],[244,244,120,120],[366,244,120,120],[122,122,120,120],[366,122,120,120],[122,244,120,120],[122,366,163,83],[0,0,127,115],[242,490,240,40],[571,438,240,40],[0,545,240,40],[484,531,240,40],[242,532,240,40],[726,480,240,40],[484,489,240,40],[726,522,240,40],[722,315,100,100],[824,272,100,100],[588,122,127,102]]},
		{name:"storage_atlas_35", frames: [[695,189,56,54],[943,166,61,63],[770,183,50,50],[464,191,50,50],[351,178,61,62],[282,104,67,79],[351,104,72,72],[637,187,56,56],[341,242,44,44],[872,236,44,45],[186,0,91,102],[93,0,91,102],[372,0,91,102],[465,0,91,102],[0,0,91,102],[279,0,91,102],[425,104,72,72],[0,163,90,50],[1067,158,90,50],[414,178,48,75],[222,104,58,97],[1176,68,17,28],[822,178,48,75],[1084,262,60,24],[516,191,50,50],[568,191,50,50],[196,203,50,50],[1067,210,50,50],[940,231,48,48],[0,215,48,48],[990,233,50,44],[0,104,220,30],[598,245,40,40],[872,180,66,54],[1170,40,30,26],[92,163,50,89],[770,92,50,89],[144,163,50,89],[640,92,65,93],[0,136,198,25],[0,272,53,26],[824,0,46,176],[50,215,40,55],[556,243,40,43],[499,104,10,11],[872,84,69,94],[1074,83,100,73],[282,185,57,60],[1170,0,23,38],[1159,158,31,31],[1119,210,50,50],[1025,84,40,147],[464,243,44,44],[640,0,90,90],[732,0,90,90],[290,247,40,40],[92,254,40,40],[640,245,40,40],[682,245,40,40],[248,247,40,40],[134,254,40,40],[176,255,40,40],[387,255,40,40],[1042,262,40,40],[801,255,40,40],[1074,0,94,81],[753,235,46,46],[943,84,80,80],[510,243,44,44],[499,154,136,35],[499,117,136,35],[707,92,61,95],[1176,118,18,18],[1176,98,18,18],[558,0,80,115],[872,0,200,40],[872,42,200,40]]}
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
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.back_podl1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back_podl2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.berry1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.berry2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.besms_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blesk_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.booba_tea_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bow1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carpet1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ch12_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ch1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ch1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.circular_move_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.circular_move_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.colors1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.colors1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.colors1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cook6_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cook7_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cook_mas1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cook_mas2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cook_mas3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cook_mas4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cook_mas7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cube1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cube1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cube2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cube2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cube3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cube3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cube4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cube4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cube5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cup11_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cup1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cup2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.desk_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flower1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.flower2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.flower3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.focuspocus1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.form1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.form2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.form3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.form4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.form5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.form_flower_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.form_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.form_leaf_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.frige1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frige2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.genshin_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.genshin_star_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.glazur15_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.glazur2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.go_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.heart_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_main_img = function() {
	this.initialize(img.hero_main_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,730,650);


(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.jelly1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.jelly2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.jelly3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.kaplya1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.kaplya2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.kaplya3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.karamel_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.kastr_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.knife_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.leaf_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.lemon_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.marker1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.marker2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.microwave1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.microwave2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.milk1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.milk2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.milk3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.mini_icon_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mini_icon_2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mini_icon_3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mixer1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.mixer2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mixer3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.movie_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.movie_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.movie_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.napkin_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.padisara_pudding_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.pinapple1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pinapple2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pinapple3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.pinapple4_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.pinapple5_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.pinapple6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.pinsm_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.plate11_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.plate2_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.plita_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.pointing_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.pudra1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.purple_part1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.purple_star_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.question_mark_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.select_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.select_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.select_3_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.select_4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.shadow_hero_main_img = function() {
	this.initialize(img.shadow_hero_main_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,730,650);


(lib.side_pattern_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.simply_move_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.simply_move_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.simply_move_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.sito_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.skalka_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skovorodka_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.slivki1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.slivki2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.slivki3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.smes9_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.smile1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.smile2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.smile3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.smile4_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.smile5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.smile6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.sok1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sok2_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sok3_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.solominka_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.spoon_inv2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.spoon_inv_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.stakan_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.stakan_krishka_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.stylus_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.sugar1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.sugar_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tapioka1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.tapioka_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.tea1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.tea2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.tea3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.tea5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.tea6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.title_jp_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.unknown_dish_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.uzor1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.uzor2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.venchik_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.water1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.water2_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.water3_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.water4_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.water5_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.water6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.water7_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.watermelon1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.watermelon2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.watermelon3_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.watermelon4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.white_part1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.win1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wmsms_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-130,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-70,260,140);
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


(lib.wmsms_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wmsms_img();
	this.instance.setTransform(-91.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-66,183,132);
p.frameBounds = [rect];


(lib.win1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.win1_img();
	this.instance.setTransform(-319,-194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-319,-194,638,388);
p.frameBounds = [rect];


(lib.white_part1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_part1_img();
	this.instance.setTransform(-173,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-64.5,346,129);
p.frameBounds = [rect];


(lib.watermelon4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.watermelon4_img();
	this.instance.setTransform(-63.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-51,127,102);
p.frameBounds = [rect];


(lib.watermelon3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.watermelon3_img();
	this.instance.setTransform(-130,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-69,260,138);
p.frameBounds = [rect];


(lib.watermelon2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.watermelon2_img();
	this.instance.setTransform(-141,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141,-105,275,210);
p.frameBounds = [rect];


(lib.watermelon1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.watermelon1_img();
	this.instance.setTransform(-141,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141,-105,282,210);
p.frameBounds = [rect];


(lib.water7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.water7_img();
	this.instance.setTransform(-63,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-63.5,134,140);
p.frameBounds = [rect];


(lib.water6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.water6_img();
	this.instance.setTransform(-63,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-63.5,126,127);
p.frameBounds = [rect];


(lib.water5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.water5_img();
	this.instance.setTransform(-100.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-100.5,201,201);
p.frameBounds = [rect];


(lib.water2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.water2_img();
	this.instance.setTransform(-100.5,-100.5);

	this.instance_1 = new lib.water3_img();
	this.instance_1.setTransform(-100.5,-100.5);

	this.instance_2 = new lib.water4_img();
	this.instance_2.setTransform(-100.5,-100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-100.5,201,201);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.water1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.water1_img();
	this.instance.setTransform(-100.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-100.5,201,201);
p.frameBounds = [rect];


(lib.venchik_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.venchik_img();
	this.instance.setTransform(-67.5,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-118,135,236);
p.frameBounds = [rect];


(lib.uzor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.uzor2_img();
	this.instance.setTransform(-152.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152.5,-36,305,72);
p.frameBounds = [rect];


(lib.uzor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.uzor1_img();
	this.instance.setTransform(-133,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-33,266,66);
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


(lib.tea6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tea6_img();
	this.instance.setTransform(-62.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-86.5,125,173);
p.frameBounds = [rect];


(lib.tea5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tea5_img();
	this.instance.setTransform(-62.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-86.5,125,173);
p.frameBounds = [rect];


(lib.tea3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tea3_img();
	this.instance.setTransform(-40,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-57.5,80,115);
p.frameBounds = [rect];


(lib.tea1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tea1_img();
	this.instance.setTransform(-54,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-109,108,218);
p.frameBounds = [rect];


(lib.tea_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tea2_img();
	this.instance.setTransform(-63.5,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-57.5,127,115);
p.frameBounds = [rect];


(lib.tapioka1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tapioka1_img();
	this.instance.setTransform(-9,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
p.frameBounds = [rect];


(lib.tapioka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tapioka_img();
	this.instance.setTransform(-9,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
p.frameBounds = [rect];


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_img();
	this.instance.setTransform(-250,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-190,500,380);
p.frameBounds = [rect];


(lib.sugar1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sugar1_img();
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-55,200,110);
p.frameBounds = [rect];


(lib.sugar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sugar_img();
	this.instance.setTransform(-80.5,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-89.5,161,179);
p.frameBounds = [rect];


(lib.stylus_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stylus_img();
	this.instance.setTransform(-30.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-47.5,61,95);
p.frameBounds = [rect];


(lib.stakan_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stakan_img();
	this.instance.setTransform(-80.5,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-106.5,161,213);
p.frameBounds = [rect];


(lib.stakan_krishka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stakan_krishka_img();
	this.instance.setTransform(-81.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-41.5,163,83);
p.frameBounds = [rect];


(lib.spoon_inv2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spoon_inv2_img();
	this.instance.setTransform(-51,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-79.5,102,159);
p.frameBounds = [rect];


(lib.spoon_inv_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spoon_inv_img();
	this.instance.setTransform(-51,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-79.5,102,159);
p.frameBounds = [rect];


(lib.solominka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.solominka_img();
	this.instance.setTransform(-22.5,-184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-184.5,45,369);
p.frameBounds = [rect];


(lib.sok3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sok3_img();
	this.instance.setTransform(-100.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-100.5,201,201);
p.frameBounds = [rect];


(lib.sok2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sok2_img();
	this.instance.setTransform(-100.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-100.5,201,201);
p.frameBounds = [rect];


(lib.sok1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sok1_img();
	this.instance.setTransform(-100.5,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-100.5,201,201);
p.frameBounds = [rect];


(lib.smile6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile6_img();
	this.instance.setTransform(69.5,-71,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-71,139,142);
p.frameBounds = [rect];


(lib.smile5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile5_img();
	this.instance.setTransform(-73.5,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-85,147,170);
p.frameBounds = [rect];


(lib.smile4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile4_img();
	this.instance.setTransform(-69,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-76,138,152);
p.frameBounds = [rect];


(lib.smile3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile3_img();
	this.instance.setTransform(-69,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-70,138,140);
p.frameBounds = [rect];


(lib.smile2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile2_img();
	this.instance.setTransform(-71.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-74,143,148);
p.frameBounds = [rect];


(lib.smile1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile1_img();
	this.instance.setTransform(-62.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-68.5,125,137);
p.frameBounds = [rect];


(lib.smes9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smes9_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.slivki3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slivki3_img();
	this.instance.setTransform(-64,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-44.5,128,89);
p.frameBounds = [rect];


(lib.slivki2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slivki2_img();
	this.instance.setTransform(-68,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-17.5,136,35);
p.frameBounds = [rect];


(lib.slivki1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slivki1_img();
	this.instance.setTransform(-68,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-17.5,136,35);
p.frameBounds = [rect];


(lib.skovorodka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skovorodka_img();
	this.instance.setTransform(-215.5,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215.5,-123,431,246);
p.frameBounds = [rect];


(lib.skalka11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skalka_img();
	this.instance.setTransform(-280.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280.5,-34.5,561,69);
p.frameBounds = [rect];


(lib.sito_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sito_img();
	this.instance.setTransform(-63.5,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-128,127,256);
p.frameBounds = [rect];


(lib.simply_move_arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.simply_move_arrow_3_img();
	this.instance.setTransform(-135.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-21,271,42);
p.frameBounds = [rect];


(lib.simply_move_arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.simply_move_arrow_1_img();
	this.instance.setTransform(-155,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-34.5,310,69);
p.frameBounds = [rect];


(lib.simply_move_arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.simply_move_arrow_2_img();
	this.instance.setTransform(-22,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-22,44,44);
p.frameBounds = [rect];


(lib.shadow_hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_hero_main_img();
	this.instance.setTransform(-365,-325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-325,730,650);
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


(lib.select_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.select_4_img();
	this.instance.setTransform(-55,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-45,110,90);
p.frameBounds = [rect];


(lib.select_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.select_3_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.select_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.select_2_img();
	this.instance.setTransform(-160,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-55,320,110);
p.frameBounds = [rect];


(lib.select_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.select_1_img();
	this.instance.setTransform(-330,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-245,660,490);
p.frameBounds = [rect];


(lib.question_mark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.question_mark_img();
	this.instance.setTransform(-40,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-60,80,120);
p.frameBounds = [rect];


(lib.purple_star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.purple_star_img();
	this.instance.setTransform(-23,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


(lib.purple_part1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.purple_part1_img();
	this.instance.setTransform(-178.5,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178.5,-57.5,357,115);
p.frameBounds = [rect];


(lib.pudra1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pudra1_img();
	this.instance.setTransform(-199,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-131.5,398,263);
p.frameBounds = [rect];


(lib.pointing_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointing_finger_img();
	this.instance.setTransform(-27,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-1,98,133);
p.frameBounds = [rect];


(lib.plita_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plita_img();
	this.instance.setTransform(-158,-157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158,-157.5,316,315);
p.frameBounds = [rect];


(lib.plate2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plate2_img();
	this.instance.setTransform(-102.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-102.5,205,205);
p.frameBounds = [rect];


(lib.plate1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plate11_img();
	this.instance.setTransform(-134.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-55,269,110);
p.frameBounds = [rect];


(lib.pinsm_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinsm_img();
	this.instance.setTransform(-91.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-66,183,132);
p.frameBounds = [rect];


(lib.pinapple6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinapple6_img();
	this.instance.setTransform(-47,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-40.5,94,81);
p.frameBounds = [rect];


(lib.pinapple5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinapple5_img();
	this.instance.setTransform(-46.5,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-86,93,172);
p.frameBounds = [rect];


(lib.pinapple3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinapple3_img();
	this.instance.setTransform(-57.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.5,-94,115,188);
p.frameBounds = [rect];


(lib.pinapple2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinapple2_img();
	this.instance.setTransform(-207.5,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207.5,-95,415,190);
p.frameBounds = [rect];


(lib.pinapple1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinapple1_img();
	this.instance.setTransform(-236,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-236,-95,472,190);
p.frameBounds = [rect];


(lib.pinapple_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinapple4_img();
	this.instance.setTransform(-55,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-92.5,110,185);
p.frameBounds = [rect];


(lib.padisara_pudding_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.padisara_pudding_img();
	this.instance.setTransform(-183,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-196,366,392);
p.frameBounds = [rect];


(lib.object_40_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A6gahQq+q/AAviQAAvhK+q/QK/q+PhAAQPiAAK/K+QK+K/AAPhQAAPiq+K/Qq/K+viAAQvhAAq/q+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-240,480,480);
p.frameBounds = [rect];


(lib.object_36_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1FQaMAAAggzMAqLAAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-105,270,210);
p.frameBounds = [rect];


(lib.object_34_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPdQmZmZgBpEQABpCGZmbQGbmZJCgBQJEABGaGZQGZGbABJCQgBJEmZGZQmaGbpEAAQpCAAmbmbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.object_33_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgSuAiXMAAAhEtMAldAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-220,240,440);
p.frameBounds = [rect];


(lib.object_33_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwkQkQm2m3gBptQABpsG2m4QG4m2JsgBQJtABG3G2QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm4m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.object_32_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A8JcKQrsrrABwfQgBweLsrrQLrrsQeABQQggBLrLsQLqLrAAQeQAAQfrqLrQrrLswggBQweABrrrsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255,-255,510,510);
p.frameBounds = [rect];


(lib.object_32_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.object_31_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClBQFBlCHHAAQHHAAFCFCQFDFBgBHHQABHHlDFCQlCFDnHgBQnHABlBlDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_31_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQEIkIFzAAQF0AAEIEIQEIEIAAFzQAAF0kIEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_30_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgtSAiXMAAAhEtMBalAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-220,580,440);
p.frameBounds = [rect];


(lib.object_30_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Eg7WAj8MAAAhH3MB2tAAAMAAABH3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-379.9,-230,760,460);
p.frameBounds = [rect];


(lib.object_29_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlRAAnbQAAnbFRlRQFRlRHbAAQHbAAFRFRQFRFRABHbQgBHblRFRQlRFRnbABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.object_28_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsrMsQlRlQgBncQABnbFRlRQFQlRHbAAQHcAAFRFRQFRFRAAHbQAAHclRFQQlRFRncABQnbgBlQlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.object_28_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAlzEIkIQEIkIFzAAQF0AAEIEIQEIEIAAFzQAAF1kIEHQkIEIl0AAQlzAAkIkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_27_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_27_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Eg7WArvMAAAhXdMB2tAAAMAAABXdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-280,760,560);
p.frameBounds = [rect];


(lib.object_26_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmamaAApEQAApCGambQGbmZJCgBQJDABGaGZQGbGbAAJCQAAJEmbGaQmaGZpDABQpCgBmbmZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.object_26_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwkNQQm2lfgBnxQABnwG2lfQG4lfJsAAQJtAAG3FfQG4FfAAHwQAAHxm4FfQm3FfptAAQpsAAm4lfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-120,300,240);
p.frameBounds = [rect];


(lib.object_25_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjQkQm4m3AAptQAApsG4m4QG3m2JsgBQJtABG3G2QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.object_25_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.object_24_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.object_24_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFvFuAAIEQAAIFlvFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125,250,250);
p.frameBounds = [rect];


(lib.object_22_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQkzk0AAmyQAAmxEzk0QE0k0GxAAQGyAAE0E0QEzE0AAGxQAAGykzE0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_22_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnGFClCQFClCHGAAQHHAAFCFCQFDFCgBHGQABHHlDFCQlCFDnHgBQnGABlClDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_22_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtyN0QlulugBoGQABoEFulvQFultIEAAQIFAAFuFtQFvFvAAIEQAAIGlvFuQluFtoFAAQoEAAlultg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125,250,250);
p.frameBounds = [rect];


(lib.object_21_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_20_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArmLmQkyk0gBmyQABmxEyk0QE1k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk1k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_20_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnGFClCQFClCHGAAQHIAAFBFCQFCFCAAHGQAAHHlCFCQlBFDnIgBQnGABlClDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_20_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHxHyABK/QgBLAnxHyQnyHxrAABQq/gBnynxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.object_19_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLlQk0kyAAmzQAAmyE0k0QE0kyGxgBQGzABEzEyQE0E0AAGyQAAGzk0EyQkzE1mzAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_18_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_18_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwkQkQm2m3gBptQABpsG2m4QG4m2JsgBQJtABG3G2QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm4m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.object_17_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_16_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.object_16_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A12RLMAAAgiVMArtAAAMAAAAiVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-110,280,220);
p.frameBounds = [rect];


(lib.object_15_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnGFClCQFClDHGABQHHgBFCFDQFCFCAAHGQAAHHlCFCQlCFCnHAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_14_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwAQBQmpmpABpYQgBpXGpmpQGpmoJXAAQJYAAGpGoQGoGpAAJXQAAJYmoGpQmpGppYgBQpXABmpmpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.object_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwAAQHxAAFfFfQFfFgAAHvQAAHxlfFfQlfFfnxAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_13_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QEzk0GyAAQGyAAE0E0QE0E0AAGxQAAGyk0E0Qk0E0myAAQmyAAkzk0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqWHVnUQHUnVKWAAQKXAAHUHVQHVHUAAKWQAAKWnVHVQnUHUqXABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_12_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l7AAobQAAoZF8l9QF9l8IZAAQIbAAF7F8QF9F9AAIZQAAIbl9F7Ql7F9obAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMtQlRlRAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFRQlQFRncAAQnbAAlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230.1);
p.frameBounds = [rect];


(lib.object_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnHFClBQFClCHGAAQHIAAFBFCQFCFBAAHHQAAHIlCFBQlBFCnIAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtyNzQlulugBoFQABoEFuluQFuluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlulug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125,250,250);
p.frameBounds = [rect];


(lib.object_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF1AAEHEIQEIEHAAF0QAAF1kIEHQkHEIl1AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlDlBABnIQgBnGFDlCQFClDHGABQHHgBFCFDQFCFCAAHGQAAHIlCFBQlCFCnHAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF1AAEHEIQEIEHAAF0QAAF1kIEHQkHEIl1AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoZF8l8QF9l9IZAAQIaAAF8F9QF9F8AAIZQAAIal9F8Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmIEVkXQEXkVGIgBQGJABEWEVQEXEXAAGIQAAGIkXEXQkWEXmJAAQmIAAkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.object_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnwFflfQFflfHwAAQHxAAFfFfQFfFfAAHwQAAHxlfFfQlfFfnxAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArlLmQk0k0AAmyQAAmxE0k0QE0k0GxAAQGyAAEzE0QE1E0AAGxQAAGyk1E0QkzE0myAAQmxAAk0k0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnwFflfQFflfHwAAQHxAAFfFfQFfFfAAHwQAAHxlfFfQlfFfnxAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-135,270,270);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtONQQlglfAAnxQAAnwFgleQFelgHwAAQHxAAFfFgQFfFeAAHwQAAHxlfFfQlfFfnxAAQnwAAlelfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFBlCHHAAQHHAAFCFCQFDFCgBHGQABHIlDFBQlCFCnHAAQnHAAlBlCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoZF8l9QF+l8IYAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F9oaAAQoYAAl+l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqVHTnWQHWnTKVgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-160,320,320);
p.frameBounds = [rect];


(lib.object_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkHkIAAl0QAAl0EHkIQEIkGFzgBQF0ABEHEGQEIEIAAF0QAAF0kIEIQkHEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.9,-90,180,180);
p.frameBounds = [rect];


(lib.object_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEHkIF0AAQF0AAEIEIQEHEHABF0QgBF0kHEIQkIEHl0ABQl0gBkHkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKfQkXkXAAmIQAAmIEXkWQEXkXGHAAQGJAAEXEXQEVEWABGIQgBGIkVEXQkXEXmJAAQmHAAkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.napkin_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.napkin_img();
	this.instance.setTransform(-230.5,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.5,-173.5,461,347);
p.frameBounds = [rect];


(lib.movie_arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.movie_arrow_3_img();
	this.instance.setTransform(-135.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-21,271,42);
p.frameBounds = [rect];


(lib.movie_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.movie_arrow_1_img();
	this.instance.setTransform(-155,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-34.5,310,69);
p.frameBounds = [rect];


(lib.movie_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.movie_arrow_2_img();
	this.instance.setTransform(-22,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-22,44,44);
p.frameBounds = [rect];


(lib.mixer3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer3_img();
	this.instance.setTransform(-95.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-78.5,191,157);
p.frameBounds = [rect];


(lib.mixer2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer2_img();
	this.instance.setTransform(-132,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-171,264,342);
p.frameBounds = [rect];


(lib.mixer1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer1_img();
	this.instance.setTransform(-23,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-88,46,176);
p.frameBounds = [rect];


(lib.mixer1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer1_img();
	this.instance.setTransform(-23,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:180,x:23},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-88,46,176);
p.frameBounds = [rect, rect];


(lib.milk3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.milk3_img();
	this.instance.setTransform(-81,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-81.5,162,163);
p.frameBounds = [rect];


(lib.milk2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.milk2_img();
	this.instance.setTransform(-69.5,6,1,1,-46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-69.7,139,139.5);
p.frameBounds = [rect];


(lib.milk1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.milk1_img();
	this.instance.setTransform(-63,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-63.5,126,127);
p.frameBounds = [rect];


(lib.microwave2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.microwave2_img();
	this.instance.setTransform(-205.5,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205.5,-111.5,411,223);
p.frameBounds = [rect];


(lib.microwave1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.microwave1_img();
	this.instance.setTransform(-250.5,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250.5,-185.5,501,371);
p.frameBounds = [rect];


(lib.marker2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.marker2_img();
	this.instance.setTransform(-26.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-13,53,26);
p.frameBounds = [rect];


(lib.marker1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.marker1_img();
	this.instance.setTransform(-99,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-12.5,198,25);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lemon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lemon_img();
	this.instance.setTransform(-50,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-53,100,106);
p.frameBounds = [rect];


(lib.leaf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf_img();
	this.instance.setTransform(-32.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-46.5,65,93);
p.frameBounds = [rect];


(lib.knife_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.knife_img();
	this.instance.setTransform(-24.5,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-162.5,49,325);
p.frameBounds = [rect];


(lib.kastr_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kastr_img();
	this.instance.setTransform(-214.5,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.5,-119,429,238);
p.frameBounds = [rect];


(lib.karame_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.karamel_img();
	this.instance.setTransform(-69.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-53,139,106);
p.frameBounds = [rect];


(lib.kaplya3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kaplya3_img();
	this.instance.setTransform(-25,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-44.5,50,89);
p.frameBounds = [rect];


(lib.kaplya2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kaplya2_img();
	this.instance.setTransform(-25,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-44.5,50,89);
p.frameBounds = [rect];


(lib.kaplya1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kaplya1_img();
	this.instance.setTransform(-25,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-44.5,50,89);
p.frameBounds = [rect];


(lib.jelly3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jelly3_img();
	this.instance.setTransform(-15,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-13,30,26);
p.frameBounds = [rect];


(lib.jelly2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jelly2_img();
	this.instance.setTransform(-33,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-27,66,54);
p.frameBounds = [rect];


(lib.jelly1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jelly1_img();
	this.instance.setTransform(-61.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-83.5,123,167);
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


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_3_img();
	this.instance.setTransform(-275,-285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275,-285,550,588);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_2_img();
	this.instance.setTransform(-252.5,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-252.5,-283.5,505,567);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_1_img();
	this.instance.setTransform(-204,-262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204,-262,408,524);
p.frameBounds = [rect];


(lib.heart_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart_img();
	this.instance.setTransform(-25,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-22,50,44);
p.frameBounds = [rect];


(lib.go_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.go_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.glazur15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glazur15_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.glazur2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glazur2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.frige2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frige2_img();
	this.instance.setTransform(-298.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-298.5,-300,597,600);
p.frameBounds = [rect];


(lib.frige1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frige1_img();
	this.instance.setTransform(-298.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-298.5,-300,388,600);
p.frameBounds = [rect];


(lib.form5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form5_img();
	this.instance.setTransform(-203.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-203.5,-39.5,407,79);
p.frameBounds = [rect];


(lib.form4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form4_img();
	this.instance.setTransform(-208.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-105,417,210);
p.frameBounds = [rect];


(lib.form3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form3_img();
	this.instance.setTransform(-208.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-105,417,210);
p.frameBounds = [rect];


(lib.form2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form2_img();
	this.instance.setTransform(-208.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-105,417,210);
p.frameBounds = [rect];


(lib.form1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form1_img();
	this.instance.setTransform(-208.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-105,417,210);
p.frameBounds = [rect];


(lib.form_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form_img();
	this.instance.setTransform(-208.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-105,417,210);
p.frameBounds = [rect];


(lib.form_leaf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form_leaf_img();
	this.instance.setTransform(-40.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-59,81,118);
p.frameBounds = [rect];


(lib.form_flower_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.form_flower_img();
	this.instance.setTransform(24,37.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-37.5,48,75);
p.frameBounds = [rect];


(lib.focuspocus1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.focuspocus1_img();
	this.instance.setTransform(-217.5,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.5,-183,435,366);
p.frameBounds = [rect];


(lib.flower3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower3_img();
	this.instance.setTransform(-8.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-14,17,28);
p.frameBounds = [rect];


(lib.flower2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower2_img();
	this.instance.setTransform(-29,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-48.5,58,97);
p.frameBounds = [rect];


(lib.flower1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower1_img();
	this.instance.setTransform(24,37.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-37.5,48,75);
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


(lib.desk_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.desk_img();
	this.instance.setTransform(-234,-159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234,-159.5,468,319);
p.frameBounds = [rect];


(lib.cup21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup2_img();
	this.instance.setTransform(-114,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-79,228,158);
p.frameBounds = [rect];


(lib.cup11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup11_img();
	this.instance.setTransform(-114.5,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-91.5,229,183);
p.frameBounds = [rect];


(lib.cup1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup1_img();
	this.instance.setTransform(-183,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-125.5,366,251);
p.frameBounds = [rect];


(lib.cube5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube5_2_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube4_2_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube4_1_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube3_2_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube3_1_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube2_2_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube2_1_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube1_2_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cube1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube1_1_img();
	this.instance.setTransform(-45.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-51,91,102);
p.frameBounds = [rect];


(lib.cook7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook7_img();
	this.instance.setTransform(-148,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-148,296,296);
p.frameBounds = [rect];


(lib.cook6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook6_img();
	this.instance.setTransform(-148,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-148,296,296);
p.frameBounds = [rect];


(lib.cook3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook6_img();
	this.instance.setTransform(-148,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-148,296,296);
p.frameBounds = [rect];


(lib.cook_mas7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook_mas7_img();
	this.instance.setTransform(139.5,138,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-138,279,276);
p.frameBounds = [rect];


(lib.cook_mas4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook_mas4_img();
	this.instance.setTransform(-139.5,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-138,279,276);
p.frameBounds = [rect];


(lib.cook_mas3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook_mas3_img();
	this.instance.setTransform(-85,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-49.5,170,99);
p.frameBounds = [rect];


(lib.cook_mas2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook_mas2_img();
	this.instance.setTransform(-85,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-49.5,170,99);
p.frameBounds = [rect];


(lib.cook_mas1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook_mas1_img();
	this.instance.setTransform(-85,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-49.5,170,99);
p.frameBounds = [rect];


(lib.colors1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colors1_3_img();
	this.instance.setTransform(-22,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-22.5,44,45);
p.frameBounds = [rect];


(lib.colors1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colors1_2_img();
	this.instance.setTransform(-63,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-67.5,126,135);
p.frameBounds = [rect];


(lib.colors1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colors1_1_img();
	this.instance.setTransform(-63,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-67.5,126,135);
p.frameBounds = [rect];


(lib.circular_move_arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circular_move_arrow_1_img();
	this.instance.setTransform(-22,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-22,44,44);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgHzAnEMAAAhOHIPnAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-250,100,500);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-28,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_2_img();
	this.instance.setTransform(-36,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect];


(lib.ch1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch12_img();
	this.instance.setTransform(-106,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-66.5,212,133);
p.frameBounds = [rect];


(lib.ch1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch1_2_img();
	this.instance.setTransform(-41,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-39.5,67,79);
p.frameBounds = [rect];


(lib.ch1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch1_1_img();
	this.instance.setTransform(-34.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-34,61,62);
p.frameBounds = [rect];


(lib.carpet1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.carpet1_img();
	this.instance.setTransform(-217.5,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217.5,-111.5,435,223);
p.frameBounds = [rect];


(lib.bow1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bow1_img();
	this.instance.setTransform(-73.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-65.5,147,131);
p.frameBounds = [rect];


(lib.booba_tea_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.booba_tea_img();
	this.instance.setTransform(-81.5,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-189,163,378);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-190,-130);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-190,-130);

	this.instance_2 = new lib.title_es_img();
	this.instance_2.setTransform(-190,-130);

	this.instance_3 = new lib.title_pt_img();
	this.instance_3.setTransform(-190,-130);

	this.instance_4 = new lib.title_tr_img();
	this.instance_4.setTransform(-190,-130);

	this.instance_5 = new lib.title_jp_img();
	this.instance_5.setTransform(-190,-130);

	this.instance_6 = new lib.title_zh_img();
	this.instance_6.setTransform(-190,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-130,380,260);
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


(lib.body_hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_main_img();
	this.instance.setTransform(-365,-325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-325,730,650);
p.frameBounds = [rect];


(lib.body_background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_5_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.body_background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_4_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.body_background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-190,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-130,380,260);
p.frameBounds = [rect];


(lib.besms_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.besms_img();
	this.instance.setTransform(-91.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-66,183,132);
p.frameBounds = [rect];


(lib.berry2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.berry2_img();
	this.instance.setTransform(-30.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-31.5,61,63);
p.frameBounds = [rect];


(lib.berry1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.berry1_img();
	this.instance.setTransform(-28,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-27,56,54);
p.frameBounds = [rect];


(lib.back2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.back_podl2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back_podl2_img();
	this.instance.setTransform(-448,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-448,-133,896,266);
p.frameBounds = [rect];


(lib.back_podl1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back_podl1_img();
	this.instance.setTransform(-400,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-112,800,224);
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


(lib.animation_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


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


(lib.genshin_star_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.genshin_star_2_img();
	this.instance.setTransform(-30,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-12,60,24);
p.frameBounds = [rect];


(lib.genshin_star_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.genshin_star_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


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


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.decor_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_large_buttons_img();
	this.instance.setTransform(-18,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-44,72,72);
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

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:140,alpha:1},10).to({y:165},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

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
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,680);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,654), new cjs.Rectangle(-210,-210,420,628), new cjs.Rectangle(-210,-210,420,602), new cjs.Rectangle(-210,-210,420,576), new cjs.Rectangle(-210,-210,420,550), new cjs.Rectangle(-210,-210,420,524), rect=new cjs.Rectangle(-210,-210,420,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,539), new cjs.Rectangle(-210,-210,420,562.5), new cjs.Rectangle(-210,-210,420,586), new cjs.Rectangle(-210,-210,420,609.5), new cjs.Rectangle(-210,-210,420,633), new cjs.Rectangle(-210,-210,420,656.5), new cjs.Rectangle(-210,-210,420,680)];


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


(lib.watermelons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.watermelon4_mc();
	this.instance.setTransform(43.9,26);

	this.instance_1 = new lib.watermelon4_mc();
	this.instance_1.setTransform(-56.6,28);

	this.instance_2 = new lib.watermelon4_mc();
	this.instance_2.setTransform(59.4,-5);

	this.instance_3 = new lib.watermelon4_mc();
	this.instance_3.setTransform(-59.3,-17.9);

	this.instance_4 = new lib.watermelon4_mc();
	this.instance_4.setTransform(3.4,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.8,-79,245.7,158);
p.frameBounds = [rect];


(lib.vetki_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower3_mc();
	this.instance.setTransform(-53.1,-54);

	this.instance_1 = new lib.flower3_mc();
	this.instance_1.setTransform(53.7,13);

	this.instance_2 = new lib.flower3_mc();
	this.instance_2.setTransform(-57.6,42);

	this.instance_3 = new lib.flower2_mc();
	this.instance_3.setTransform(-23.6,-51,1,1,-15.2);

	this.instance_4 = new lib.flower2_mc();
	this.instance_4.setTransform(25.4,15,1,1,0,15.2,-164.8);

	this.instance_5 = new lib.flower2_mc();
	this.instance_5.setTransform(-33.6,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.1,-105.4,132.3,210.9);
p.frameBounds = [rect];


(lib.unknown_dish_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.question_mark_mc();
	this.instance.setTransform(44,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.question_mark_mc();
	this.instance_1.setTransform(-64,70,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.question_mark_mc();
	this.instance_2.setTransform(-12,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.unknown_dish_img();
	this.instance_3.setTransform(-150,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-160,300,320);
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
p.nominalBounds = rect = new cjs.Rectangle(-190,-130,380,260);
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


(lib.tap_plate_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tapioka_mc();
	this.instance.setTransform(28.5,8.1);

	this.instance_1 = new lib.tapioka_mc();
	this.instance_1.setTransform(5.5,11.7);

	this.instance_2 = new lib.tapioka_mc();
	this.instance_2.setTransform(-15.5,11.7);

	this.instance_3 = new lib.tapioka_mc();
	this.instance_3.setTransform(-43.5,8.1);

	this.instance_4 = new lib.tapioka_mc();
	this.instance_4.setTransform(-65.5,-2.3);

	this.instance_5 = new lib.tapioka_mc();
	this.instance_5.setTransform(-25.5,-2.3);

	this.instance_6 = new lib.tapioka_mc();
	this.instance_6.setTransform(-7.5,-9.9);

	this.instance_7 = new lib.tapioka_mc();
	this.instance_7.setTransform(50.5,2.1);

	this.instance_8 = new lib.tapioka_mc();
	this.instance_8.setTransform(14.5,-9.9);

	this.instance_9 = new lib.tapioka_mc();
	this.instance_9.setTransform(32.5,-15.9);

	this.instance_10 = new lib.tapioka_mc();
	this.instance_10.setTransform(8.5,-24.3);

	this.instance_11 = new lib.tapioka_mc();
	this.instance_11.setTransform(-19.5,-20.3);

	this.instance_12 = new lib.tapioka_mc();
	this.instance_12.setTransform(-44.5,-6.3);

	this.instance_13 = new lib.plate1_mc();
	this.instance_13.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-35.3,173,70.7);
p.frameBounds = [rect];


(lib.table_with_dish_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.focuspocus1_mc();
	this.instance.setTransform(97.7,-175.3,0.576,0.576,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.padisara_pudding_img();
	this.instance_1.setTransform(-220,-336,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.booba_tea_mc();
	this.instance_2.setTransform(-6.4,-281.6,0.781,0.781);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.table_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-429.1,500,619.1);
p.frameBounds = [rect];


(lib.t3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tapioka_mc();
	this.instance.setTransform(36.4,-2.5,1,1,-23.5);

	this.instance_1 = new lib.tapioka_mc();
	this.instance_1.setTransform(16.7,9.9,1,1,-23.5);

	this.instance_2 = new lib.tapioka_mc();
	this.instance_2.setTransform(-2.6,18.3,1,1,-23.5);

	this.instance_3 = new lib.tapioka_mc();
	this.instance_3.setTransform(-29.7,26.2,1,1,-23.5);

	this.instance_4 = new lib.tapioka_mc();
	this.instance_4.setTransform(-54.1,25.3,1,1,-23.5);

	this.instance_5 = new lib.tapioka_mc();
	this.instance_5.setTransform(-17.4,9.4,1,1,-23.5);

	this.instance_6 = new lib.tapioka_mc();
	this.instance_6.setTransform(-3.9,-4.7,1,1,-23.5);

	this.instance_7 = new lib.tapioka_mc();
	this.instance_7.setTransform(54.1,-16.8,1,1,-23.5);

	this.instance_8 = new lib.tapioka_mc();
	this.instance_8.setTransform(16.3,-13.5,1,1,-23.5);

	this.instance_9 = new lib.tapioka_mc();
	this.instance_9.setTransform(30.4,-26.2,1,1,-23.5);

	this.instance_10 = new lib.tapioka_mc();
	this.instance_10.setTransform(5.1,-24.4,1,1,-23.5);

	this.instance_11 = new lib.tapioka_mc();
	this.instance_11.setTransform(-19,-9.5,1,1,-23.5);

	this.instance_12 = new lib.tapioka_mc();
	this.instance_12.setTransform(-36.4,13.3,1,1,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-38,131.9,76.1);
p.frameBounds = [rect];


(lib.t1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tapioka1_mc();
	this.instance.setTransform(6,39);

	this.instance_1 = new lib.tapioka1_mc();
	this.instance_1.setTransform(-44,-9.4);

	this.instance_2 = new lib.tapioka1_mc();
	this.instance_2.setTransform(-19,-17.5);

	this.instance_3 = new lib.tapioka1_mc();
	this.instance_3.setTransform(20,-9.4);

	this.instance_4 = new lib.tapioka1_mc();
	this.instance_4.setTransform(22,31);

	this.instance_5 = new lib.tapioka1_mc();
	this.instance_5.setTransform(-16,13);

	this.instance_6 = new lib.tapioka1_mc();
	this.instance_6.setTransform(-22,31);

	this.instance_7 = new lib.tapioka1_mc();
	this.instance_7.setTransform(44,-17.5);

	this.instance_8 = new lib.tapioka1_mc();
	this.instance_8.setTransform(4,-39);

	this.instance_9 = new lib.tapioka1_mc();
	this.instance_9.setTransform(-30,3);

	this.instance_10 = new lib.tapioka1_mc();
	this.instance_10.setTransform(22,7.5);

	this.instance_11 = new lib.tapioka1_mc();
	this.instance_11.setTransform(-1,21);

	this.instance_12 = new lib.tapioka1_mc();
	this.instance_12.setTransform(-30,-27.4);

	this.instance_13 = new lib.tapioka1_mc();
	this.instance_13.setTransform(22,-23);

	this.instance_14 = new lib.tapioka1_mc();
	this.instance_14.setTransform(-1,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-48,106,96);
p.frameBounds = [rect];


(lib.t_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tapioka_mc();
	this.instance.setTransform(6,39);

	this.instance_1 = new lib.tapioka_mc();
	this.instance_1.setTransform(-44,-9.4);

	this.instance_2 = new lib.tapioka_mc();
	this.instance_2.setTransform(-19,-17.5);

	this.instance_3 = new lib.tapioka_mc();
	this.instance_3.setTransform(20,-9.4);

	this.instance_4 = new lib.tapioka_mc();
	this.instance_4.setTransform(22,31);

	this.instance_5 = new lib.tapioka_mc();
	this.instance_5.setTransform(-16,13);

	this.instance_6 = new lib.tapioka_mc();
	this.instance_6.setTransform(-22,31);

	this.instance_7 = new lib.tapioka_mc();
	this.instance_7.setTransform(44,-17.5);

	this.instance_8 = new lib.tapioka_mc();
	this.instance_8.setTransform(4,-39);

	this.instance_9 = new lib.tapioka_mc();
	this.instance_9.setTransform(-30,3);

	this.instance_10 = new lib.tapioka_mc();
	this.instance_10.setTransform(22,7.5);

	this.instance_11 = new lib.tapioka_mc();
	this.instance_11.setTransform(-1,21);

	this.instance_12 = new lib.tapioka_mc();
	this.instance_12.setTransform(-30,-27.4);

	this.instance_13 = new lib.tapioka_mc();
	this.instance_13.setTransform(22,-23);

	this.instance_14 = new lib.tapioka_mc();
	this.instance_14.setTransform(-1,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-48,106,96);
p.frameBounds = [rect];


(lib.stenka32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cube5_2
	this.instance = new lib.cube5_2_mc();
	this.instance.setTransform(45.7,-32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cube4_2
	this.instance_1 = new lib.cube4_2_mc();
	this.instance_1.setTransform(0.3,-54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cube3_2
	this.instance_2 = new lib.cube3_2_mc();
	this.instance_2.setTransform(-44.7,-78.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cube1_2
	this.instance_3 = new lib.cube1_2_mc();
	this.instance_3.setTransform(45.7,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// cube3_2
	this.instance_4 = new lib.cube3_2_mc();
	this.instance_4.setTransform(-0.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// cube2_2
	this.instance_5 = new lib.cube2_2_mc();
	this.instance_5.setTransform(-45.3,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// cube3_2
	this.instance_6 = new lib.cube3_2_mc();
	this.instance_6.setTransform(46.3,78.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// cube4_2
	this.instance_7 = new lib.cube4_2_mc();
	this.instance_7.setTransform(-0.3,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// cube3_2
	this.instance_8 = new lib.cube3_2_mc();
	this.instance_8.setTransform(-46.3,31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.8,-129.7,183.6,259.5);
p.frameBounds = [rect];


(lib.stenka11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cube1_2
	this.instance = new lib.cube1_2_mc();
	this.instance.setTransform(46.8,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cube2_2
	this.instance_1 = new lib.cube2_2_mc();
	this.instance_1.setTransform(0.8,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cube5_2
	this.instance_2 = new lib.cube5_2_mc();
	this.instance_2.setTransform(-45.9,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cube3_2
	this.instance_3 = new lib.cube3_2_mc();
	this.instance_3.setTransform(46.8,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// cube1_2
	this.instance_4 = new lib.cube1_2_mc();
	this.instance_4.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// cube1_2
	this.instance_5 = new lib.cube1_2_mc();
	this.instance_5.setTransform(-45.7,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// cube2_2
	this.instance_6 = new lib.cube2_2_mc();
	this.instance_6.setTransform(46.3,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// cube3_2
	this.instance_7 = new lib.cube3_2_mc();
	this.instance_7.setTransform(0.3,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// cube2_2
	this.instance_8 = new lib.cube2_2_mc();
	this.instance_8.setTransform(-46.7,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.2,-130,184.5,260.1);
p.frameBounds = [rect];


(lib.stenka3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// cube5_2
	this.instance = new lib.cube5_2_mc();
	this.instance.setTransform(45.7,-367.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:-32.7},2).wait(1));

	// cube4_2
	this.instance_1 = new lib.cube4_2_mc();
	this.instance_1.setTransform(-0.3,-367.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:0.3,y:-54.3},3).wait(1));

	// cube3_2
	this.instance_2 = new lib.cube3_2_mc();
	this.instance_2.setTransform(-44.7,-360.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:-78.7},5).wait(1));

	// cube1_2
	this.instance_3 = new lib.cube1_2_mc();
	this.instance_3.setTransform(45.7,-357.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({y:25.3},8).wait(1));

	// cube3_2
	this.instance_4 = new lib.cube3_2_mc();
	this.instance_4.setTransform(-0.3,-363.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({x:-0.7,y:1.7},9).wait(1));

	// cube2_2
	this.instance_5 = new lib.cube2_2_mc();
	this.instance_5.setTransform(-45.3,-357.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({y:-22.7},10).wait(1));

	// cube3_2
	this.instance_6 = new lib.cube3_2_mc();
	this.instance_6.setTransform(46.3,-342.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({y:78.7},12).wait(1));

	// cube4_2
	this.instance_7 = new lib.cube4_2_mc();
	this.instance_7.setTransform(-0.3,-355.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({y:55.3},13).wait(1));

	// cube3_2
	this.instance_8 = new lib.cube3_2_mc();
	this.instance_8.setTransform(-45.3,-353.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-46.3,y:31.3},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.8,-404.7,91,102);
p.frameBounds = [rect, new cjs.Rectangle(-90.9,-406.7,136.1,131.5), new cjs.Rectangle(-91,-393.2,182.8,145.6), new cjs.Rectangle(-91,-358.1,182.9,138), new cjs.Rectangle(-91.1,-408.7,183,216.1), new cjs.Rectangle(-91.2,-414.3,183,249.1), new cjs.Rectangle(-91.3,-408.7,183.1,271.1), new cjs.Rectangle(-91.3,-360.8,183.1,250.7), new cjs.Rectangle(-91.4,-313,183.2,232.3), new cjs.Rectangle(-91.5,-411.7,183.3,366.1), new cjs.Rectangle(-91.5,-355.3,183.4,344.8), new cjs.Rectangle(-91.6,-418.3,183.5,442.8), new cjs.Rectangle(-91.7,-418.3,183.5,477.9), new cjs.Rectangle(-91.8,-251,183.6,345.6), new cjs.Rectangle(-91.8,-129.7,183.6,259.5)];


(lib.stenka1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// cube1_2
	this.instance = new lib.cube1_2_mc();
	this.instance.setTransform(46.8,-302);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:-32},3).wait(1));

	// cube2_2
	this.instance_1 = new lib.cube2_2_mc();
	this.instance_1.setTransform(0.8,-297);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:-55},5).wait(1));

	// cube5_2
	this.instance_2 = new lib.cube5_2_mc();
	this.instance_2.setTransform(-45.7,-307);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:-45.9,y:-79},7).wait(1));

	// cube3_2
	this.instance_3 = new lib.cube3_2_mc();
	this.instance_3.setTransform(46.8,-277);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:24},9).wait(1));

	// cube1_2
	this.instance_4 = new lib.cube1_2_mc();
	this.instance_4.setTransform(0.8,-277);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:0},10).wait(1));

	// cube1_2
	this.instance_5 = new lib.cube1_2_mc();
	this.instance_5.setTransform(-45.7,-307);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({y:-24.1},11).wait(1));

	// cube2_2
	this.instance_6 = new lib.cube2_2_mc();
	this.instance_6.setTransform(46.8,-256.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({x:46.3,y:79},12).wait(1));

	// cube3_2
	this.instance_7 = new lib.cube3_2_mc();
	this.instance_7.setTransform(0.8,-249.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({x:0.3,y:55},13).wait(1));

	// cube2_2
	this.instance_8 = new lib.cube2_2_mc();
	this.instance_8.setTransform(-45.7,-302);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-46.7,y:31},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.2,-353,91,102);
p.frameBounds = [rect, new cjs.Rectangle(-91.3,-329.2,137.6,130.3), new cjs.Rectangle(-91.4,-307.9,183.7,132.5), new cjs.Rectangle(-91.4,-358,183.7,206), new cjs.Rectangle(-91.5,-332.3,183.7,203.8), new cjs.Rectangle(-91.6,-328,183.9,223), new cjs.Rectangle(-91.7,-294.6,184,213), new cjs.Rectangle(-91.7,-358,184,299.9), new cjs.Rectangle(-91.8,-325.5,184.1,290.8), new cjs.Rectangle(-91.9,-348,184.2,338.1), new cjs.Rectangle(-91.9,-299.6,184.2,317.7), new cjs.Rectangle(-92,-353,184.3,399.1), new cjs.Rectangle(-92.1,-263,184.4,337.1), new cjs.Rectangle(-92.2,-173,184.5,275.1), new cjs.Rectangle(-92.2,-130,184.5,260.1)];


(lib.stakan1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stakan_krishka_mc();
	this.instance.setTransform(0,-91.8);

	this.instance_1 = new lib.stakan_mc();
	this.instance_1.setTransform(1,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-133.3,163,266.6);
p.frameBounds = [rect];


(lib.srenka22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cube3_2
	this.instance = new lib.cube3_2_mc();
	this.instance.setTransform(45.7,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cube2_2
	this.instance_1 = new lib.cube2_2_mc();
	this.instance_1.setTransform(0.7,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cube3_2
	this.instance_2 = new lib.cube3_2_mc();
	this.instance_2.setTransform(-45.3,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cube2_2
	this.instance_3 = new lib.cube2_2_mc();
	this.instance_3.setTransform(45.7,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// cube2_2
	this.instance_4 = new lib.cube2_2_mc();
	this.instance_4.setTransform(-0.8,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// cube3_2
	this.instance_5 = new lib.cube3_2_mc();
	this.instance_5.setTransform(-46,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// cube1_2
	this.instance_6 = new lib.cube1_2_mc();
	this.instance_6.setTransform(46,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// cube2_2
	this.instance_7 = new lib.cube2_2_mc();
	this.instance_7.setTransform(0,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// cube3_2
	this.instance_8 = new lib.cube3_2_mc();
	this.instance_8.setTransform(-46,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-128.5,183,257.1);
p.frameBounds = [rect];


(lib.srenka2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// cube3_2
	this.instance = new lib.cube3_2_mc();
	this.instance.setTransform(45.7,-326.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({y:-29.5},3).wait(1));

	// cube2_2
	this.instance_1 = new lib.cube2_2_mc();
	this.instance_1.setTransform(0.7,-326.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:-53.5},4).wait(1));

	// cube3_2
	this.instance_2 = new lib.cube3_2_mc();
	this.instance_2.setTransform(-45.3,-335.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:-77.5},5).wait(1));

	// cube2_2
	this.instance_3 = new lib.cube2_2_mc();
	this.instance_3.setTransform(45.7,-333.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({y:25.5},7).wait(1));

	// cube2_2
	this.instance_4 = new lib.cube2_2_mc();
	this.instance_4.setTransform(0.7,-327.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({x:-0.8,y:1.5},8).wait(1));

	// cube3_2
	this.instance_5 = new lib.cube3_2_mc();
	this.instance_5.setTransform(-45.3,-328.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:-46,y:-22.5},9).wait(1));

	// cube1_2
	this.instance_6 = new lib.cube1_2_mc();
	this.instance_6.setTransform(45.7,-335.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({x:46,y:77.5},11).wait(1));

	// cube2_2
	this.instance_7 = new lib.cube2_2_mc();
	this.instance_7.setTransform(0.7,-328.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:0,y:54.5},12).wait(1));

	// cube3_2
	this.instance_8 = new lib.cube3_2_mc();
	this.instance_8.setTransform(-45.3,-333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-46,y:32.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.8,-384.5,91,102);
p.frameBounds = [rect, new cjs.Rectangle(-90.9,-358.3,91,102), new cjs.Rectangle(-90.9,-379.5,137.1,149.4), new cjs.Rectangle(-91,-386.5,182.2,182.5), new cjs.Rectangle(-91,-349,182.3,171.1), new cjs.Rectangle(-91.1,-379.5,182.3,227.8), new cjs.Rectangle(-91.1,-378.5,182.4,252.9), new cjs.Rectangle(-91.2,-384.5,182.5,285), new cjs.Rectangle(-91.2,-333.2,182.5,259.9), new cjs.Rectangle(-91.2,-386.5,182.6,339.4), new cjs.Rectangle(-91.3,-377.5,182.6,356.5), new cjs.Rectangle(-91.3,-377.5,182.8,393.4), new cjs.Rectangle(-91.4,-278.5,182.9,332), new cjs.Rectangle(-91.4,-180.1,182.9,271.1), new cjs.Rectangle(-91.5,-128.5,183,257.1)];


(lib.sok3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sok3_mc();
	this.instance.setTransform(1.7,0.7,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.plate2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-102.5,205,205);
p.frameBounds = [rect];


(lib.sok2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sok2_mc();
	this.instance.setTransform(1.7,0.7,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.plate2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-102.5,205,205);
p.frameBounds = [rect];


(lib.sok1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sok1_mc();
	this.instance.setTransform(1.7,0.7,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.plate2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-102.5,205,205);
p.frameBounds = [rect];


(lib.smes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sugar1_mc();
	this.instance.setTransform(12.4,27,0.48,0.48);

	this.instance_1 = new lib.jelly2_mc();
	this.instance_1.setTransform(3,6.7);

	this.instance_2 = new lib.sugar1_mc();
	this.instance_2.setTransform(25.9,5,0.48,0.48);

	this.instance_3 = new lib.sugar1_mc();
	this.instance_3.setTransform(-6.6,2,0.48,0.48);

	this.instance_4 = new lib.milk3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-81.5,162,163);
p.frameBounds = [rect];


(lib.simply_move_arrow_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow2.png
	this.instance = new lib.simply_move_arrow_4_mc();
	this.instance.setTransform(-120,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:120},42).to({alpha:0.012},7).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsFFHIAApWIAHAAIAAg3IFdAAIAAKNg");
	var mask_graphics_1 = new cjs.Graphics().p("AsFFHIAApWIAIAAIAAg3IGVAAIAAKNg");
	var mask_graphics_2 = new cjs.Graphics().p("AsFFHIAApWIAJAAIAAg3IHNAAIAAKNg");
	var mask_graphics_3 = new cjs.Graphics().p("AsFFHIAApWIAKAAIAAg3IIFAAIAAKNg");
	var mask_graphics_4 = new cjs.Graphics().p("AsFFHIAApWIALAAIAAg3II9AAIAAKNg");
	var mask_graphics_5 = new cjs.Graphics().p("AsFFHIAApWIAMAAIAAg3IJ1AAIAAKNg");
	var mask_graphics_6 = new cjs.Graphics().p("AsFFHIAApWIANAAIAAg3IKtAAIAAKNg");
	var mask_graphics_7 = new cjs.Graphics().p("AsFFHIAApWIAPAAIAAg3ILkAAIAAKNg");
	var mask_graphics_8 = new cjs.Graphics().p("AsFFHIAApWIAQAAIAAg3IMaAAIAAKNg");
	var mask_graphics_9 = new cjs.Graphics().p("AsFFHIAApWIARAAIAAg3INSAAIAAKNg");
	var mask_graphics_10 = new cjs.Graphics().p("AsFFHIAApWIASAAIAAg3IOKAAIAAKNg");
	var mask_graphics_11 = new cjs.Graphics().p("AsFFHIAApWIATAAIAAg3IPCAAIAAKNg");
	var mask_graphics_12 = new cjs.Graphics().p("AsFFHIAApWIAUAAIAAg3IP6AAIAAKNg");
	var mask_graphics_13 = new cjs.Graphics().p("AsFFHIAApWIAVAAIAAg3IQyAAIAAKNg");
	var mask_graphics_14 = new cjs.Graphics().p("AsFFHIAApWIAXAAIAAg3IRpAAIAAKNg");
	var mask_graphics_15 = new cjs.Graphics().p("AsFFHIAApWIAYAAIAAg3IShAAIAAKNg");
	var mask_graphics_16 = new cjs.Graphics().p("AsFFHIAApWIAZAAIAAg3ITZAAIAAKNg");
	var mask_graphics_17 = new cjs.Graphics().p("AsFFHIAApWIAaAAIAAg3IURAAIAAKNg");
	var mask_graphics_18 = new cjs.Graphics().p("AsFFHIAApWIAbAAIAAg3IVJAAIAAKNg");
	var mask_graphics_19 = new cjs.Graphics().p("AsFFHIAApWIAcAAIAAg3IWBAAIAAKNg");
	var mask_graphics_20 = new cjs.Graphics().p("AsFFHIAApWIAdAAIAAg3IW5AAIAAKNg");
	var mask_graphics_21 = new cjs.Graphics().p("AsHFHIAApWIAeAAIAAg3IXxAAIAAKNg");
	var mask_graphics_22 = new cjs.Graphics().p("AskFHIAApWIAgAAIAAg3IYpAAIAAKNg");
	var mask_graphics_23 = new cjs.Graphics().p("AtAFHIAApWIAhAAIAAg3IZgAAIAAKNg");
	var mask_graphics_24 = new cjs.Graphics().p("AtdFHIAApWIAiAAIAAg3IaZAAIAAKNg");
	var mask_graphics_25 = new cjs.Graphics().p("At5FHIAApWIAjAAIAAg3IbQAAIAAKNg");
	var mask_graphics_26 = new cjs.Graphics().p("AuWFHIAApWIAlAAIAAg3IcIAAIAAKNg");
	var mask_graphics_27 = new cjs.Graphics().p("AuyFHIAApWIAlAAIAAg3IdAAAIAAKNg");
	var mask_graphics_28 = new cjs.Graphics().p("AvPFHIAApWIAnAAIAAg3Id4AAIAAKNg");
	var mask_graphics_29 = new cjs.Graphics().p("AvrFHIAApWIAnAAIAAg3IewAAIAAKNg");
	var mask_graphics_30 = new cjs.Graphics().p("AwIFHIAApWIApAAIAAg3IfoAAIAAKNg");
	var mask_graphics_31 = new cjs.Graphics().p("AwkFHIAApWIAqAAIAAg3MAgfAAAIAAKNg");
	var mask_graphics_32 = new cjs.Graphics().p("AxBFHIAApWIArAAIAAg3MAhYAAAIAAKNg");
	var mask_graphics_33 = new cjs.Graphics().p("AxdFHIAApWIAsAAIAAg3MAiPAAAIAAKNg");
	var mask_graphics_34 = new cjs.Graphics().p("Ax6FHIAApWIAuAAIAAg3MAjHAAAIAAKNg");
	var mask_graphics_35 = new cjs.Graphics().p("AyWFHIAApWIAuAAIAAg3MAj/AAAIAAKNg");
	var mask_graphics_36 = new cjs.Graphics().p("AyzFHIAApWIAwAAIAAg3MAk3AAAIAAKNg");
	var mask_graphics_37 = new cjs.Graphics().p("AzPFHIAApWIAwAAIAAg3MAlvAAAIAAKNg");
	var mask_graphics_38 = new cjs.Graphics().p("AzsFHIAApWIAyAAIAAg3MAmnAAAIAAKNg");
	var mask_graphics_39 = new cjs.Graphics().p("A0IFHIAApWIAzAAIAAg3MAneAAAIAAKNg");
	var mask_graphics_40 = new cjs.Graphics().p("A0lFHIAApWIA0AAIAAg3MAoXAAAIAAKNg");
	var mask_graphics_41 = new cjs.Graphics().p("A1BFHIAApWIA1AAIAAg3MApOAAAIAAKNg");
	var mask_graphics_42 = new cjs.Graphics().p("A1eFHIAApWIA3AAIAAg3MAqGAAAIAAKNg");
	var mask_graphics_43 = new cjs.Graphics().p("A1nFHIAApWIA3AAIAAg3MAqYAAAIAAKNg");
	var mask_graphics_44 = new cjs.Graphics().p("A1wFHIAApWIA3AAIAAg3MAqqAAAIAAKNg");
	var mask_graphics_45 = new cjs.Graphics().p("A15FHIAApWIA3AAIAAg3MAq8AAAIAAKNg");
	var mask_graphics_46 = new cjs.Graphics().p("A2CFHIAApWIA4AAIAAg3MArNAAAIAAKNg");
	var mask_graphics_47 = new cjs.Graphics().p("A2LFHIAApWIA4AAIAAg3MArfAAAIAAKNg");
	var mask_graphics_48 = new cjs.Graphics().p("A2UFHIAApWIA4AAIAAg3MArxAAAIAAKNg");
	var mask_graphics_49 = new cjs.Graphics().p("A2dFHIAApWIA5AAIAAg3MAsCAAAIAAKNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_1,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_2,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_3,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_4,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_5,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_6,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_7,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_8,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_9,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_10,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_11,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_12,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_13,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_14,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_15,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_16,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_17,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_18,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_19,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_20,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_21,x:-77.2,y:-1.7}).wait(1).to({graphics:mask_graphics_22,x:-74.4,y:-1.7}).wait(1).to({graphics:mask_graphics_23,x:-71.5,y:-1.7}).wait(1).to({graphics:mask_graphics_24,x:-68.7,y:-1.7}).wait(1).to({graphics:mask_graphics_25,x:-65.8,y:-1.7}).wait(1).to({graphics:mask_graphics_26,x:-62.9,y:-1.7}).wait(1).to({graphics:mask_graphics_27,x:-60.1,y:-1.7}).wait(1).to({graphics:mask_graphics_28,x:-57.2,y:-1.7}).wait(1).to({graphics:mask_graphics_29,x:-54.4,y:-1.7}).wait(1).to({graphics:mask_graphics_30,x:-51.5,y:-1.7}).wait(1).to({graphics:mask_graphics_31,x:-48.7,y:-1.7}).wait(1).to({graphics:mask_graphics_32,x:-45.8,y:-1.7}).wait(1).to({graphics:mask_graphics_33,x:-43,y:-1.7}).wait(1).to({graphics:mask_graphics_34,x:-40.1,y:-1.7}).wait(1).to({graphics:mask_graphics_35,x:-37.3,y:-1.7}).wait(1).to({graphics:mask_graphics_36,x:-34.4,y:-1.7}).wait(1).to({graphics:mask_graphics_37,x:-31.6,y:-1.7}).wait(1).to({graphics:mask_graphics_38,x:-28.7,y:-1.7}).wait(1).to({graphics:mask_graphics_39,x:-25.8,y:-1.7}).wait(1).to({graphics:mask_graphics_40,x:-23,y:-1.7}).wait(1).to({graphics:mask_graphics_41,x:-20.1,y:-1.7}).wait(1).to({graphics:mask_graphics_42,x:-17.5,y:-1.7}).wait(1).to({graphics:mask_graphics_43,x:-16.6,y:-1.7}).wait(1).to({graphics:mask_graphics_44,x:-15.7,y:-1.7}).wait(1).to({graphics:mask_graphics_45,x:-14.8,y:-1.7}).wait(1).to({graphics:mask_graphics_46,x:-13.9,y:-1.7}).wait(1).to({graphics:mask_graphics_47,x:-13,y:-1.7}).wait(1).to({graphics:mask_graphics_48,x:-12.1,y:-1.7}).wait(1).to({graphics:mask_graphics_49,x:-11.2,y:-1.7}).wait(1));

	// Слой 4
	this.instance_1 = new lib.simply_move_arrow_8_mc();
	this.instance_1.setTransform(-7.8,-1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({alpha:0.012},2).to({_off:true},1).wait(5));

	// arrow1.png
	this.instance_2 = new lib.simply_move_arrow_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-34.5,310,69);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.simply_move_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.simply_move_arrow_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-34.5,310,69);
p.frameBounds = [rect];


(lib.simply_move_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(110,0);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-110,0);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.simply_move_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.simply_move_arrow_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.simply_move_arrow_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.side_pattern_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.purple_star_mc();
	this.instance.setTransform(85,390);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.purple_star_mc();
	this.instance_1.setTransform(100,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.stylus_mc();
	this.instance_2.setTransform(112,535,0.842,0.842,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.stylus_mc();
	this.instance_3.setTransform(98,91,0.736,0.737,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.stylus_mc();
	this.instance_4.setTransform(87,293);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.side_pattern_img();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,400,600);
p.frameBounds = [rect];


(lib.select_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.select_2_mc();
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.select_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-245,660,490);
p.frameBounds = [rect];


(lib.select_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.select_4_mc();
	this.instance.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.select_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,285);
p.frameBounds = [rect];


(lib.s5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sugar1_mc();
	this.instance.setTransform(12.2,25.5,0.409,0.409);

	this.instance_1 = new lib.sugar1_mc();
	this.instance_1.setTransform(-23.1,3.6,0.409,0.409);

	this.instance_2 = new lib.sugar1_mc();
	this.instance_2.setTransform(23.2,-25.5,0.409,0.409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-48,128.1,96);
p.frameBounds = [rect];


(lib.s3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sugar1_mc();
	this.instance.setTransform(6.4,20,0.5,0.5);

	this.instance_1 = new lib.sugar1_mc();
	this.instance_1.setTransform(-32,-17,0.5,0.5);

	this.instance_2 = new lib.sugar1_mc();
	this.instance_2.setTransform(32,-20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-47.5,164,95);
p.frameBounds = [rect];


(lib.pinapples_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pinapple6_mc();
	this.instance.setTransform(43.4,26.7);

	this.instance_1 = new lib.pinapple6_mc();
	this.instance_1.setTransform(-47.6,26.7);

	this.instance_2 = new lib.pinapple6_mc();
	this.instance_2.setTransform(3.4,7.3);

	this.instance_3 = new lib.pinapple6_mc();
	this.instance_3.setTransform(58.4,-3.7);

	this.instance_4 = new lib.pinapple6_mc();
	this.instance_4.setTransform(-58.3,-7.1);

	this.instance_5 = new lib.pinapple6_mc();
	this.instance_5.setTransform(9.4,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-67.2,210.7,134.4);
p.frameBounds = [rect];


(lib.movie_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow2.png
	this.instance = new lib.movie_arrow_1_mc();
	this.instance.setTransform(-120,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:120},44).to({x:-120},45).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsFFHIAApWIAHAAIAAg3IFdAAIAAKNg");
	var mask_graphics_1 = new cjs.Graphics().p("AsFFHIAApWIAIAAIAAg3IGTAAIAAKNg");
	var mask_graphics_2 = new cjs.Graphics().p("AsFFHIAApWIAJAAIAAg3IHIAAIAAKNg");
	var mask_graphics_3 = new cjs.Graphics().p("AsFFHIAApWIAKAAIAAg3IH9AAIAAKNg");
	var mask_graphics_4 = new cjs.Graphics().p("AsFFHIAApWIALAAIAAg3IIzAAIAAKNg");
	var mask_graphics_5 = new cjs.Graphics().p("AsFFHIAApWIAMAAIAAg3IJoAAIAAKNg");
	var mask_graphics_6 = new cjs.Graphics().p("AsFFHIAApWIANAAIAAg3IKeAAIAAKNg");
	var mask_graphics_7 = new cjs.Graphics().p("AsFFHIAApWIAOAAIAAg3ILTAAIAAKNg");
	var mask_graphics_8 = new cjs.Graphics().p("AsFFHIAApWIAPAAIAAg3IMGAAIAAKNg");
	var mask_graphics_9 = new cjs.Graphics().p("AsFFHIAApWIAQAAIAAg3IM8AAIAAKNg");
	var mask_graphics_10 = new cjs.Graphics().p("AsFFHIAApWIASAAIAAg3INwAAIAAKNg");
	var mask_graphics_11 = new cjs.Graphics().p("AsFFHIAApWIATAAIAAg3IOmAAIAAKNg");
	var mask_graphics_12 = new cjs.Graphics().p("AsFFHIAApWIAUAAIAAg3IPbAAIAAKNg");
	var mask_graphics_13 = new cjs.Graphics().p("AsFFHIAApWIAVAAIAAg3IQRAAIAAKNg");
	var mask_graphics_14 = new cjs.Graphics().p("AsFFHIAApWIAWAAIAAg3IRGAAIAAKNg");
	var mask_graphics_15 = new cjs.Graphics().p("AsFFHIAApWIAXAAIAAg3IR7AAIAAKNg");
	var mask_graphics_16 = new cjs.Graphics().p("AsFFHIAApWIAYAAIAAg3ISxAAIAAKNg");
	var mask_graphics_17 = new cjs.Graphics().p("AsFFHIAApWIAZAAIAAg3ITmAAIAAKNg");
	var mask_graphics_18 = new cjs.Graphics().p("AsFFHIAApWIAaAAIAAg3IUcAAIAAKNg");
	var mask_graphics_19 = new cjs.Graphics().p("AsFFHIAApWIAbAAIAAg3IVRAAIAAKNg");
	var mask_graphics_20 = new cjs.Graphics().p("AsFFHIAApWIAcAAIAAg3IWGAAIAAKNg");
	var mask_graphics_21 = new cjs.Graphics().p("AsFFHIAApWIAeAAIAAg3IW7AAIAAKNg");
	var mask_graphics_22 = new cjs.Graphics().p("AsHFHIAApWIAeAAIAAg3IXxAAIAAKNg");
	var mask_graphics_23 = new cjs.Graphics().p("AsiFHIAApWIAfAAIAAg3IYmAAIAAKNg");
	var mask_graphics_24 = new cjs.Graphics().p("As+FHIAApWIAhAAIAAg3IZcAAIAAKNg");
	var mask_graphics_25 = new cjs.Graphics().p("AtZFHIAApWIAiAAIAAg3IaRAAIAAKNg");
	var mask_graphics_26 = new cjs.Graphics().p("At0FHIAApWIAjAAIAAg3IbGAAIAAKNg");
	var mask_graphics_27 = new cjs.Graphics().p("AuPFHIAApWIAkAAIAAg3Ib7AAIAAKNg");
	var mask_graphics_28 = new cjs.Graphics().p("AuqFHIAApWIAlAAIAAg3IcwAAIAAKNg");
	var mask_graphics_29 = new cjs.Graphics().p("AvGFHIAApWIAmAAIAAg3IdnAAIAAKNg");
	var mask_graphics_30 = new cjs.Graphics().p("AvhFHIAApWIAnAAIAAg3IecAAIAAKNg");
	var mask_graphics_31 = new cjs.Graphics().p("Av8FHIAApWIAoAAIAAg3IfRAAIAAKNg");
	var mask_graphics_32 = new cjs.Graphics().p("AwXFHIAApWIApAAIAAg3MAgGAAAIAAKNg");
	var mask_graphics_33 = new cjs.Graphics().p("AwyFHIAApWIAqAAIAAg3MAg7AAAIAAKNg");
	var mask_graphics_34 = new cjs.Graphics().p("AxOFHIAApWIAsAAIAAg3MAhxAAAIAAKNg");
	var mask_graphics_35 = new cjs.Graphics().p("AxpFHIAApWIAtAAIAAg3MAimAAAIAAKNg");
	var mask_graphics_36 = new cjs.Graphics().p("AyEFHIAApWIAuAAIAAg3MAjbAAAIAAKNg");
	var mask_graphics_37 = new cjs.Graphics().p("AyfFHIAApWIAuAAIAAg3MAkRAAAIAAKNg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay6FHIAApWIAvAAIAAg3MAlGAAAIAAKNg");
	var mask_graphics_39 = new cjs.Graphics().p("AzWFHIAApWIAxAAIAAg3MAl8AAAIAAKNg");
	var mask_graphics_40 = new cjs.Graphics().p("AzxFHIAApWIAyAAIAAg3MAmxAAAIAAKNg");
	var mask_graphics_41 = new cjs.Graphics().p("A0MFHIAApWIAzAAIAAg3MAnmAAAIAAKNg");
	var mask_graphics_42 = new cjs.Graphics().p("A0nFHIAApWIA0AAIAAg3MAobAAAIAAKNg");
	var mask_graphics_43 = new cjs.Graphics().p("A1CFHIAApWIA1AAIAAg3MApQAAAIAAKNg");
	var mask_graphics_44 = new cjs.Graphics().p("A1eFHIAApWIA3AAIAAg3MAqGAAAIAAKNg");
	var mask_graphics_45 = new cjs.Graphics().p("AGeFHIAAqNIDxAAIAAJWIgFAAIAAA3g");
	var mask_graphics_46 = new cjs.Graphics().p("AFqFHIAAqNIElAAIAAJWIgGAAIAAA3g");
	var mask_graphics_47 = new cjs.Graphics().p("AE2FHIAAqNIFZAAIAAJWIgHAAIAAA3g");
	var mask_graphics_48 = new cjs.Graphics().p("AECFHIAAqNIGNAAIAAJWIgIAAIAAA3g");
	var mask_graphics_49 = new cjs.Graphics().p("ADOFHIAAqNIHBAAIAAJWIgJAAIAAA3g");
	var mask_graphics_50 = new cjs.Graphics().p("ACaFHIAAqNIH1AAIAAJWIgKAAIAAA3g");
	var mask_graphics_51 = new cjs.Graphics().p("ABmFHIAAqNIIpAAIAAJWIgLAAIAAA3g");
	var mask_graphics_52 = new cjs.Graphics().p("AAyFHIAAqNIJdAAIAAJWIgMAAIAAA3g");
	var mask_graphics_53 = new cjs.Graphics().p("AAAFHIAAqNIKPAAIAAJWIgNAAIAAA3g");
	var mask_graphics_54 = new cjs.Graphics().p("Ag0FHIAAqNILDAAIAAJWIgOAAIAAA3g");
	var mask_graphics_55 = new cjs.Graphics().p("AhoFHIAAqNIL3AAIAAJWIgPAAIAAA3g");
	var mask_graphics_56 = new cjs.Graphics().p("AicFHIAAqNIMrAAIAAJWIgQAAIAAA3g");
	var mask_graphics_57 = new cjs.Graphics().p("AjQFHIAAqNINfAAIAAJWIgRAAIAAA3g");
	var mask_graphics_58 = new cjs.Graphics().p("AkEFHIAAqNIOTAAIAAJWIgSAAIAAA3g");
	var mask_graphics_59 = new cjs.Graphics().p("Ak4FHIAAqNIPHAAIAAJWIgTAAIAAA3g");
	var mask_graphics_60 = new cjs.Graphics().p("AlsFHIAAqNIP7AAIAAJWIgUAAIAAA3g");
	var mask_graphics_61 = new cjs.Graphics().p("AmgFHIAAqNIQvAAIAAJWIgVAAIAAA3g");
	var mask_graphics_62 = new cjs.Graphics().p("AnUFHIAAqNIRjAAIAAJWIgWAAIAAA3g");
	var mask_graphics_63 = new cjs.Graphics().p("AoIFHIAAqNISXAAIAAJWIgXAAIAAA3g");
	var mask_graphics_64 = new cjs.Graphics().p("Ao8FHIAAqNITLAAIAAJWIgYAAIAAA3g");
	var mask_graphics_65 = new cjs.Graphics().p("ApwFHIAAqNIT/AAIAAJWIgZAAIAAA3g");
	var mask_graphics_66 = new cjs.Graphics().p("AqZFHIAAqNIUzAAIAAJWIgaAAIAAA3g");
	var mask_graphics_67 = new cjs.Graphics().p("AqzFHIAAqNIVnAAIAAJWIgbAAIAAA3g");
	var mask_graphics_68 = new cjs.Graphics().p("ArNFHIAAqNIWbAAIAAJWIgcAAIAAA3g");
	var mask_graphics_69 = new cjs.Graphics().p("ArnFHIAAqNIXPAAIAAJWIgdAAIAAA3g");
	var mask_graphics_70 = new cjs.Graphics().p("AsBFHIAAqNIYDAAIAAJWIgeAAIAAA3g");
	var mask_graphics_71 = new cjs.Graphics().p("AsbFHIAAqNIY3AAIAAJWIgfAAIAAA3g");
	var mask_graphics_72 = new cjs.Graphics().p("As1FHIAAqNIZrAAIAAJWIggAAIAAA3g");
	var mask_graphics_73 = new cjs.Graphics().p("AtPFHIAAqNIafAAIAAJWIghAAIAAA3g");
	var mask_graphics_74 = new cjs.Graphics().p("AtpFHIAAqNIbTAAIAAJWIgiAAIAAA3g");
	var mask_graphics_75 = new cjs.Graphics().p("AuDFHIAAqNIcHAAIAAJWIgjAAIAAA3g");
	var mask_graphics_76 = new cjs.Graphics().p("AudFHIAAqNIc7AAIAAJWIgkAAIAAA3g");
	var mask_graphics_77 = new cjs.Graphics().p("Au3FHIAAqNIdvAAIAAJWIglAAIAAA3g");
	var mask_graphics_78 = new cjs.Graphics().p("AvRFHIAAqNIejAAIAAJWIgmAAIAAA3g");
	var mask_graphics_79 = new cjs.Graphics().p("AvrFHIAAqNIfXAAIAAJWIgnAAIAAA3g");
	var mask_graphics_80 = new cjs.Graphics().p("AwFFHIAAqNMAgLAAAIAAJWIgoAAIAAA3g");
	var mask_graphics_81 = new cjs.Graphics().p("AwfFHIAAqNMAg/AAAIAAJWIgpAAIAAA3g");
	var mask_graphics_82 = new cjs.Graphics().p("Aw5FHIAAqNMAhzAAAIAAJWIgqAAIAAA3g");
	var mask_graphics_83 = new cjs.Graphics().p("AxTFHIAAqNMAinAAAIAAJWIgrAAIAAA3g");
	var mask_graphics_84 = new cjs.Graphics().p("AxtFHIAAqNMAjbAAAIAAJWIgsAAIAAA3g");
	var mask_graphics_85 = new cjs.Graphics().p("AyHFHIAAqNMAkPAAAIAAJWIgtAAIAAA3g");
	var mask_graphics_86 = new cjs.Graphics().p("AyiFHIAAqNMAlEAAAIAAJWIguAAIAAA3g");
	var mask_graphics_87 = new cjs.Graphics().p("Ay8FHIAAqNMAl5AAAIAAJWIgwAAIAAA3g");
	var mask_graphics_88 = new cjs.Graphics().p("AzWFHIAAqNMAmtAAAIAAJWIgxAAIAAA3g");
	var mask_graphics_89 = new cjs.Graphics().p("AzwFHIAAqNMAnhAAAIAAJWIgyAAIAAA3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_1,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_2,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_3,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_4,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_5,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_6,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_7,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_8,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_9,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_10,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_11,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_12,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_13,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_14,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_15,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_16,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_17,x:-77.5,y:-1.7}).wait(1).to({graphics:mask_graphics_18,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_19,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_20,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_21,x:-77.4,y:-1.7}).wait(1).to({graphics:mask_graphics_22,x:-77.2,y:-1.7}).wait(1).to({graphics:mask_graphics_23,x:-74.5,y:-1.7}).wait(1).to({graphics:mask_graphics_24,x:-71.8,y:-1.7}).wait(1).to({graphics:mask_graphics_25,x:-69,y:-1.7}).wait(1).to({graphics:mask_graphics_26,x:-66.3,y:-1.7}).wait(1).to({graphics:mask_graphics_27,x:-63.6,y:-1.7}).wait(1).to({graphics:mask_graphics_28,x:-60.9,y:-1.7}).wait(1).to({graphics:mask_graphics_29,x:-58.1,y:-1.7}).wait(1).to({graphics:mask_graphics_30,x:-55.4,y:-1.7}).wait(1).to({graphics:mask_graphics_31,x:-52.7,y:-1.7}).wait(1).to({graphics:mask_graphics_32,x:-50,y:-1.7}).wait(1).to({graphics:mask_graphics_33,x:-47.3,y:-1.7}).wait(1).to({graphics:mask_graphics_34,x:-44.5,y:-1.7}).wait(1).to({graphics:mask_graphics_35,x:-41.8,y:-1.7}).wait(1).to({graphics:mask_graphics_36,x:-39.1,y:-1.7}).wait(1).to({graphics:mask_graphics_37,x:-36.4,y:-1.7}).wait(1).to({graphics:mask_graphics_38,x:-33.6,y:-1.7}).wait(1).to({graphics:mask_graphics_39,x:-30.9,y:-1.7}).wait(1).to({graphics:mask_graphics_40,x:-28.2,y:-1.7}).wait(1).to({graphics:mask_graphics_41,x:-25.5,y:-1.7}).wait(1).to({graphics:mask_graphics_42,x:-22.7,y:-1.7}).wait(1).to({graphics:mask_graphics_43,x:-20,y:-1.7}).wait(1).to({graphics:mask_graphics_44,x:-17.5,y:-1.7}).wait(1).to({graphics:mask_graphics_45,x:65.5,y:-1.2}).wait(1).to({graphics:mask_graphics_46,x:65.5,y:-1.3}).wait(1).to({graphics:mask_graphics_47,x:65.5,y:-1.3}).wait(1).to({graphics:mask_graphics_48,x:65.5,y:-1.3}).wait(1).to({graphics:mask_graphics_49,x:65.5,y:-1.3}).wait(1).to({graphics:mask_graphics_50,x:65.5,y:-1.4}).wait(1).to({graphics:mask_graphics_51,x:65.5,y:-1.4}).wait(1).to({graphics:mask_graphics_52,x:65.5,y:-1.4}).wait(1).to({graphics:mask_graphics_53,x:65.5,y:-1.4}).wait(1).to({graphics:mask_graphics_54,x:65.5,y:-1.5}).wait(1).to({graphics:mask_graphics_55,x:65.5,y:-1.5}).wait(1).to({graphics:mask_graphics_56,x:65.6,y:-1.5}).wait(1).to({graphics:mask_graphics_57,x:65.6,y:-1.5}).wait(1).to({graphics:mask_graphics_58,x:65.6,y:-1.5}).wait(1).to({graphics:mask_graphics_59,x:65.6,y:-1.6}).wait(1).to({graphics:mask_graphics_60,x:65.6,y:-1.6}).wait(1).to({graphics:mask_graphics_61,x:65.6,y:-1.6}).wait(1).to({graphics:mask_graphics_62,x:65.6,y:-1.6}).wait(1).to({graphics:mask_graphics_63,x:65.6,y:-1.7}).wait(1).to({graphics:mask_graphics_64,x:65.6,y:-1.7}).wait(1).to({graphics:mask_graphics_65,x:65.6,y:-1.7}).wait(1).to({graphics:mask_graphics_66,x:64.5,y:-1.7}).wait(1).to({graphics:mask_graphics_67,x:61.9,y:-1.7}).wait(1).to({graphics:mask_graphics_68,x:59.3,y:-1.8}).wait(1).to({graphics:mask_graphics_69,x:56.7,y:-1.8}).wait(1).to({graphics:mask_graphics_70,x:54.1,y:-1.8}).wait(1).to({graphics:mask_graphics_71,x:51.5,y:-1.8}).wait(1).to({graphics:mask_graphics_72,x:48.9,y:-1.9}).wait(1).to({graphics:mask_graphics_73,x:46.3,y:-1.9}).wait(1).to({graphics:mask_graphics_74,x:43.8,y:-1.9}).wait(1).to({graphics:mask_graphics_75,x:41.2,y:-1.9}).wait(1).to({graphics:mask_graphics_76,x:38.6,y:-2}).wait(1).to({graphics:mask_graphics_77,x:36,y:-2}).wait(1).to({graphics:mask_graphics_78,x:33.4,y:-2}).wait(1).to({graphics:mask_graphics_79,x:30.8,y:-2}).wait(1).to({graphics:mask_graphics_80,x:28.2,y:-2}).wait(1).to({graphics:mask_graphics_81,x:25.6,y:-2.1}).wait(1).to({graphics:mask_graphics_82,x:23,y:-2.1}).wait(1).to({graphics:mask_graphics_83,x:20.4,y:-2.1}).wait(1).to({graphics:mask_graphics_84,x:17.8,y:-2.1}).wait(1).to({graphics:mask_graphics_85,x:15.2,y:-2.2}).wait(1).to({graphics:mask_graphics_86,x:12.6,y:-2.2}).wait(1).to({graphics:mask_graphics_87,x:10,y:-2.2}).wait(1).to({graphics:mask_graphics_88,x:7.4,y:-2.2}).wait(1).to({graphics:mask_graphics_89,x:4.5,y:-2.2}).wait(1));

	// Слой 4
	this.instance_1 = new lib.movie_arrow_4_mc();
	this.instance_1.setTransform(-7.8,-1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0.012},5).to({skewY:180,alpha:1},1).wait(40).to({alpha:0.012},4).wait(1));

	// arrow1.png
	this.instance_2 = new lib.movie_arrow_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-34.5,310,69);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mixer_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mixer3_mc();
	this.instance.setTransform(30.4,84.4);

	this.instance_1 = new lib.mixer2_mc();

	this.instance_2 = new lib.mixer1_mc();
	this.instance_2.setTransform(30.4,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132,-171,264,342);
p.frameBounds = [rect];


(lib.marker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.marker2_mc();
	this.instance.setTransform(-76.5,0);

	this.instance_1 = new lib.marker1_mc();
	this.instance_1.setTransform(4.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-13,206.2,26);
p.frameBounds = [rect];


(lib.leafs1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf_mc();
	this.instance.setTransform(27,23.3,1,1,-75.5);

	this.instance_1 = new lib.leaf_mc();
	this.instance_1.setTransform(-26.5,-3.7,1,1,-105.9);

	this.instance_2 = new lib.leaf_mc();
	this.instance_2.setTransform(29.8,-28.1,1,1,-82.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.1,-66.4,160.3,132.8);
p.frameBounds = [rect];


(lib.leafs_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf_mc();
	this.instance.setTransform(54.5,59);

	this.instance_1 = new lib.leaf_mc();
	this.instance_1.setTransform(-37.5,58);

	this.instance_2 = new lib.leaf_mc();
	this.instance_2.setTransform(41.5,-58);

	this.instance_3 = new lib.leaf_mc();
	this.instance_3.setTransform(-54.5,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87,-105.5,174,211);
p.frameBounds = [rect];


(lib.hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.movie_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-34.5,310,69);
p.frameBounds = [rect];


(lib.flowers3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower3_mc();
	this.instance.setTransform(-22.2,-15);

	this.instance_1 = new lib.flower2_mc();
	this.instance_1.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.7,-48.5,61.5,97);
p.frameBounds = [rect];


(lib.flowers2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower1_mc();
	this.instance.setTransform(16.9,27.6,1,1,109.2);

	this.instance_1 = new lib.flower1_mc();
	this.instance_1.setTransform(-24.1,8.7,1,1,69.2);

	this.instance_2 = new lib.flower1_mc();
	this.instance_2.setTransform(23.9,-2.3,1,1,111.7);

	this.instance_3 = new lib.flower1_mc();
	this.instance_3.setTransform(-12.1,-26.8,1,1,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.6,-62.5,135.3,125.1);
p.frameBounds = [rect];


(lib.flowers1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower1_mc();
	this.instance.setTransform(93.5,0,0.7,0.7);

	this.instance_1 = new lib.flower1_mc();
	this.instance_1.setTransform(43.5,0,0.7,0.7);

	this.instance_2 = new lib.flower1_mc();
	this.instance_2.setTransform(-5.5,0,0.7,0.7);

	this.instance_3 = new lib.flower1_mc();
	this.instance_3.setTransform(-51.5,0,0.7,0.7);

	this.instance_4 = new lib.flower1_mc();
	this.instance_4.setTransform(-93.5,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.3,-26.2,220.6,52.5);
p.frameBounds = [rect];


(lib.flower4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flowers3_mc();
	this.instance.setTransform(7.7,1.3,1,1,-33.9);

	this.instance_1 = new lib.flowers3_mc();
	this.instance_1.setTransform(15.7,11.3,1,1,0,33.9,-146.1);

	this.instance_2 = new lib.flowers3_mc();
	this.instance_2.setTransform(-15.6,-11.2,1,1,-33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.3,-68.6,130.6,135.4);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.desk2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pudra1_mc();
	this.instance.setTransform(40.9,32.3,1,1,180);

	this.instance_1 = new lib.pudra1_mc();
	this.instance_1.setTransform(-40.8,-23.3);

	this.instance_2 = new lib.desk_mc();
	this.instance_2.setTransform(-1.1,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-239.8,-163.8,479.7,327.6);
p.frameBounds = [rect];


(lib.cup2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.uzor2_mc();
	this.instance.setTransform(0.8,1.6,0.6,0.6);

	this.instance_1 = new lib.uzor1_mc();
	this.instance_1.setTransform(1.4,20.2,0.6,0.6);

	this.instance_2 = new lib.cup1_mc();
	this.instance_2.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-75.3,219.6,150.6);
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


(lib.colors2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colors1_1_mc();
	this.instance.setTransform(-10,-11);

	this.instance_1 = new lib.colors1_3_mc();
	this.instance_1.setTransform(51,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-78.5,146,157.1);
p.frameBounds = [rect];


(lib.colors_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colors1_2_mc();
	this.instance.setTransform(-10,-11);

	this.instance_1 = new lib.colors1_3_mc();
	this.instance_1.setTransform(51,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-78.5,146,157.1);
p.frameBounds = [rect];


(lib.circular_move_arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circular_move_arrow_5_mc();
	this.instance.setTransform(-108.7,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-109,y:0.5},0).wait(1).to({x:-108.6,y:-8.4},0).wait(1).to({x:-107.6,y:-17.3},0).wait(1).to({x:-105.8,y:-26},0).wait(1).to({x:-103.4,y:-34.7},0).wait(1).to({x:-100.1,y:-43.1},0).wait(1).to({x:-96.1,y:-51.1},0).wait(1).to({x:-91.5,y:-58.8},0).wait(1).to({x:-86.2,y:-66.1},0).wait(1).to({x:-79.9,y:-73.4},0).wait(1).to({x:-73.1,y:-80.1},0).wait(1).to({x:-65.8,y:-86.3},0).wait(1).to({x:-58,y:-91.8},0).wait(1).to({x:-49.7,y:-96.7},0).wait(1).to({x:-40.9,y:-100.7},0).wait(1).to({x:-31.9,y:-103.9},0).wait(1).to({x:-22.5,y:-106.2},0).wait(1).to({x:-13,y:-107.7},0).wait(1).to({x:-3.4,y:-108.4},0).wait(1).to({x:7.2,y:-108.3},0).wait(1).to({x:17.6,y:-107.3},0).wait(1).to({x:28,y:-105.2},0).wait(1).to({x:38.1,y:-102.2},0).wait(1).to({x:47.9,y:-98.1},0).wait(1).to({x:57.2,y:-93},0).wait(1).to({x:66,y:-86.9},0).wait(1).to({x:74.1,y:-80.1},0).wait(1).to({x:81.6,y:-72.6},0).wait(1).to({x:88.4,y:-64.5},0).wait(1).to({x:92.4,y:-59},0).wait(1).to({x:96,y:-53.1},0).wait(1).to({x:99.3,y:-47.1},0).wait(1).to({x:102.1,y:-40.8},0).wait(1).to({x:104.5,y:-34.3},0).wait(1).to({x:106.5,y:-27.7},0).wait(1).to({x:108,y:-21},0).wait(1).to({x:109.1,y:-14.1},0).wait(1).to({x:109.8,y:-7.3},0).wait(1).to({x:110,y:-0.4},0).wait(1).to({x:109.8,y:8.9},0).wait(1).to({x:108.8,y:18.1},0).wait(1).to({x:107.1,y:27.2},0).wait(1).to({x:104.6,y:36.2},0).wait(1).to({x:101.2,y:44.9},0).wait(1).to({x:97.1,y:53.3},0).wait(1).to({x:92.2,y:61.2},0).wait(1).to({x:86.7,y:68.7},0).wait(1).to({x:80.5,y:75.8},0).wait(1).to({x:73.9,y:82.3},0).wait(1).to({x:67.8,y:87.5},0).wait(1).to({x:61.5,y:92.2},0).wait(1).to({x:54.7,y:96.5},0).wait(1).to({x:47.7,y:100.2},0).wait(1).to({x:40.3,y:103.4},0).wait(1).to({x:32.7,y:106},0).wait(1).to({x:25,y:108},0).wait(1).to({x:17.1,y:109.4},0).wait(1).to({x:9.1,y:110.3},0).wait(1).to({x:1.1,y:112.2},0).wait(1).to({x:-7,y:110.4},0).wait(1).to({x:-15,y:109.6},0).wait(1).to({x:-23,y:108.2},0).wait(1).to({x:-30.9,y:106.3},0).wait(1).to({x:-38.6,y:103.7},0).wait(1).to({x:-46.1,y:100.5},0).wait(1).to({x:-53.4,y:96.7},0).wait(1).to({x:-60.3,y:92.4},0).wait(1).to({x:-66.8,y:87.5},0).wait(1).to({x:-73,y:82.2},0).wait(1).to({x:-78.4,y:77},0).wait(1).to({x:-83.4,y:71.5},0).wait(1).to({x:-88.1,y:65.7},0).wait(1).to({x:-92.3,y:59.5},0).wait(1).to({x:-96.2,y:53.1},0).wait(1).to({x:-99.5,y:46.4},0).wait(1).to({x:-102.4,y:39.5},0).wait(1).to({x:-104.7,y:32.3},0).wait(1).to({x:-106.5,y:25},0).wait(1).to({x:-107.8,y:17.6},0).wait(11));

	// animation
	this.instance_1 = new lib.circular_move_arrow_2_img();
	this.instance_1.setTransform(-139.5,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-139.5,279,279);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.circular_move_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circular_move_arrow_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-139.5,279,279);
p.frameBounds = [rect];


(lib.circular_move_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(0,200);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(200,0,1,1,90);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(0,-200);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-450,500,900);
p.frameBounds = [rect];


(lib.circular_move_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.circular_move_arrow_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.circular_move_arrow_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-450,589.5,900);
p.frameBounds = [rect];


(lib.choc1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch1_1_mc();
	this.instance.setTransform(67,-1.5);

	this.instance_1 = new lib.ch1_2_mc();
	this.instance_1.setTransform(33.5,-2.5);

	this.instance_2 = new lib.ch1_1_mc();
	this.instance_2.setTransform(-16,6.1);

	this.instance_3 = new lib.ch1_2_mc();
	this.instance_3.setTransform(-47.5,4.1);

	this.instance_4 = new lib.ch1_1_mc();
	this.instance_4.setTransform(-59,-9.5);

	this.instance_5 = new lib.ch1_2_mc();
	this.instance_5.setTransform(4.5,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-43.5,187,87.1);
p.frameBounds = [rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:1},4).to({scaleX:1,scaleY:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect, rect, new cjs.Rectangle(-29,-29,58,58), new cjs.Rectangle(-29.9,-29.9,60,60), new cjs.Rectangle(-31,-31,62,62), new cjs.Rectangle(-32,-32,64,64), new cjs.Rectangle(-30.6,-30.6,61.4,61.4), new cjs.Rectangle(-29.3,-29.3,58.7,58.7), new cjs.Rectangle(-28,-28,56,56)];


(lib.check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// animation
	this.instance = new lib.check_1_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:1},4).to({scaleX:1,scaleY:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect, rect, new cjs.Rectangle(-37.2,-37.2,74.6,74.6), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-39.8,-39.8,79.7,79.7), new cjs.Rectangle(-41.1,-41.1,82.3,82.3), new cjs.Rectangle(-39.4,-39.4,78.9,78.9), new cjs.Rectangle(-37.7,-37.7,75.5,75.5), new cjs.Rectangle(-36,-36,72,72)];


(lib.boobt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stakan_krishka_mc();
	this.instance.setTransform(0,-33.4);

	this.instance_1 = new lib.slivki3_mc();
	this.instance_1.setTransform(1,-10,1,1,0,0,0,0,44);

	this.instance_2 = new lib.slivki2_mc();
	this.instance_2.setTransform(-64.5,-14.4,1,1,0,0,0,-66,0);

	this.instance_3 = new lib.stakan_mc();
	this.instance_3.setTransform(0.2,82);

	this.instance_4 = new lib.solominka_mc();
	this.instance_4.setTransform(-0.3,-3.9);

	this.instance_5 = new lib.slivki1_mc();
	this.instance_5.setTransform(-66.5,10.6,1,1,0,0,0,-67,0);

	this.instance_6 = new lib.tea6_mc();
	this.instance_6.setTransform(0.5,94.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-188.4,163,376.9);
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


(lib.blesk_anim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_7_mc("synched",0);
	this.instance.setTransform(0.5,0.5,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-10.6,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14,29.1,29.1), new cjs.Rectangle(-17.4,-17.5,36.1,36.1), new cjs.Rectangle(-20.9,-20.9,42.8,42.8), new cjs.Rectangle(-23.7,-23.7,48.5,48.5), new cjs.Rectangle(-25.9,-25.9,52.9,52.9), new cjs.Rectangle(-27.3,-27.2,55.5,55.5), new cjs.Rectangle(-27.6,-27.5,56.1,56.1), new cjs.Rectangle(-26.7,-26.6,54.3,54.3), new cjs.Rectangle(-24.5,-24.5,50,50), new cjs.Rectangle(-27,-27,55.1,55.1), new cjs.Rectangle(-27.2,-27.2,55.6,55.6), new cjs.Rectangle(-25.6,-25.6,52.2,52.2), new cjs.Rectangle(-22.4,-22.3,45.7,45.7), new cjs.Rectangle(-18.1,-18.1,37.2,37.2), new cjs.Rectangle(-13.3,-13.2,27.6,27.6), new cjs.Rectangle(-10.2,-10.1,21.3,21.3), new cjs.Rectangle(-9.4,-9.3,19.6,19.6), new cjs.Rectangle(-7.3,-7.2,15.5,15.5), new cjs.Rectangle(-4.4,-4.4,9.8,9.8)];


(lib.berries_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.berry1_mc();
	this.instance.setTransform(26,25.2,1,1,0,0,180);

	this.instance_1 = new lib.berry1_mc();
	this.instance_1.setTransform(-37.7,28.7);

	this.instance_2 = new lib.berry2_mc();
	this.instance_2.setTransform(3.3,6.2);

	this.instance_3 = new lib.berry2_mc();
	this.instance_3.setTransform(-59.2,6.2,1,1,0,0,180);

	this.instance_4 = new lib.berry1_mc();
	this.instance_4.setTransform(61.8,-2.3,1,1,0,0,180);

	this.instance_5 = new lib.berry2_mc();
	this.instance_5.setTransform(14.4,-24.2);

	this.instance_6 = new lib.berry1_mc();
	this.instance_6.setTransform(-40.6,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-55.7,179.5,111.5);
p.frameBounds = [rect];


(lib.background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.side_pattern_mc();
	this.instance.setTransform(1200,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1600},0).wait(38).to({x:1200},20).wait(1));

	// animation
	this.instance_1 = new lib.side_pattern_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-400},0).wait(38).to({x:0},20).wait(1));

	// bg
	this.instance_2 = new lib.body_background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,2000,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,0,1960,600), new cjs.Rectangle(-360,0,1920,600), new cjs.Rectangle(-340,0,1880,600), new cjs.Rectangle(-320,0,1840,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-280,0,1760,600), new cjs.Rectangle(-260,0,1720,600), new cjs.Rectangle(-240,0,1680,600), new cjs.Rectangle(-220,0,1640,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-180,0,1560,600), new cjs.Rectangle(-160,0,1520,600), new cjs.Rectangle(-140,0,1480,600), new cjs.Rectangle(-120,0,1440,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-80,0,1360,600), new cjs.Rectangle(-60,0,1320,600), new cjs.Rectangle(-40,0,1280,600), new cjs.Rectangle(-20,0,1240,600), new cjs.Rectangle(0,0,1200,600)];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.side_pattern_mc();
	this.instance.setTransform(1200,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1600},0).wait(38).to({x:1200},20).wait(1));

	// animation
	this.instance_1 = new lib.side_pattern_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-400},0).wait(38).to({x:0},20).wait(1));

	// bg
	this.instance_2 = new lib.body_background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,2000,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,0,1960,600), new cjs.Rectangle(-360,0,1920,600), new cjs.Rectangle(-340,0,1880,600), new cjs.Rectangle(-320,0,1840,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-280,0,1760,600), new cjs.Rectangle(-260,0,1720,600), new cjs.Rectangle(-240,0,1680,600), new cjs.Rectangle(-220,0,1640,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-180,0,1560,600), new cjs.Rectangle(-160,0,1520,600), new cjs.Rectangle(-140,0,1480,600), new cjs.Rectangle(-120,0,1440,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-80,0,1360,600), new cjs.Rectangle(-60,0,1320,600), new cjs.Rectangle(-40,0,1280,600), new cjs.Rectangle(-20,0,1240,600), new cjs.Rectangle(0,0,1200,600)];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.side_pattern_mc();
	this.instance.setTransform(1200,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1600},0).wait(38).to({x:1200},20).wait(1));

	// animation
	this.instance_1 = new lib.side_pattern_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-400},0).wait(38).to({x:0},20).wait(1));

	// bg
	this.instance_2 = new lib.body_background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,2000,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,0,1960,600), new cjs.Rectangle(-360,0,1920,600), new cjs.Rectangle(-340,0,1880,600), new cjs.Rectangle(-320,0,1840,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-280,0,1760,600), new cjs.Rectangle(-260,0,1720,600), new cjs.Rectangle(-240,0,1680,600), new cjs.Rectangle(-220,0,1640,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-180,0,1560,600), new cjs.Rectangle(-160,0,1520,600), new cjs.Rectangle(-140,0,1480,600), new cjs.Rectangle(-120,0,1440,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-80,0,1360,600), new cjs.Rectangle(-60,0,1320,600), new cjs.Rectangle(-40,0,1280,600), new cjs.Rectangle(-20,0,1240,600), new cjs.Rectangle(0,0,1200,600)];


(lib.arrow_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_44_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_39_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_37_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_35_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circular_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-450,589.5,900);
p.frameBounds = [rect];


(lib.arrow_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circular_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-450,589.5,900);
p.frameBounds = [rect];


(lib.arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circular_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-450,589.5,900);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.simply_move_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-250,320,500);
p.frameBounds = [rect];


(lib.animation3_60_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cube1_2_mc();
	this.instance.setTransform(150.4,-106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:831.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_1 = new lib.cube1_2_mc();
	this.instance_1.setTransform(39.4,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:720.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_2 = new lib.cube1_2_mc();
	this.instance_2.setTransform(-74.6,-109.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:606.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_3 = new lib.cube2_2_mc();
	this.instance_3.setTransform(150.4,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:831.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_4 = new lib.cube2_2_mc();
	this.instance_4.setTransform(61.4,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:742.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_5 = new lib.cube2_2_mc();
	this.instance_5.setTransform(-46.6,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:634.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_6 = new lib.cube2_2_mc();
	this.instance_6.setTransform(43.4,-199.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:724.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_7 = new lib.cube3_2_mc();
	this.instance_7.setTransform(96.4,-226.1);

	this.instance_8 = new lib.bow1_mc();
	this.instance_8.setTransform(-74.5,-509.6);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:777.4,alpha:0.012},9).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85).to({_off:false},0).to({y:-94.6,alpha:1},14).wait(1));

	// animation
	this.instance_9 = new lib.cube3_2_mc();
	this.instance_9.setTransform(163.4,-239.1);

	this.instance_10 = new lib.stenka3_mc();
	this.instance_10.setTransform(-4.3,-161.2);

	this.instance_11 = new lib.stenka32_mc();
	this.instance_11.setTransform(-4.3,-161.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_9}]},9).to({state:[]},1).to({state:[{t:this.instance_10}]},56).to({state:[{t:this.instance_11}]},15).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:844.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_12 = new lib.cube4_2_mc();
	this.instance_12.setTransform(-87.6,-185.9);

	this.instance_13 = new lib.srenka2_mc();
	this.instance_13.setTransform(40.4,-186.4);

	this.instance_14 = new lib.srenka22_mc();
	this.instance_14.setTransform(40.4,-186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},9).to({state:[]},1).to({state:[{t:this.instance_13}]},36).to({state:[{t:this.instance_14}]},15).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:593.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_15 = new lib.cube4_2_mc();
	this.instance_15.setTransform(-29.6,-216.1);

	this.instance_16 = new lib.stenka1_mc();
	this.instance_16.setTransform(86.3,-207.9);

	this.instance_17 = new lib.stenka11_mc();
	this.instance_17.setTransform(86.3,-207.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_15}]},9).to({state:[]},1).to({state:[{t:this.instance_16}]},14).to({state:[{t:this.instance_17}]},16).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:651.4,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_18 = new lib.desk2_mc();
	this.instance_18.setTransform(33.2,-121.3);

	this.instance_19 = new lib.carpet1_mc();
	this.instance_19.setTransform(26,285.4);
	this.instance_19.alpha = 0.012;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:714.2,alpha:0.012},9).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(11).to({_off:false},0).to({y:-86.6,alpha:1},13).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.6,-290.1,479.7,332.6);
p.frameBounds = [rect, new cjs.Rectangle(-131,-290.1,479.7,332.6), new cjs.Rectangle(-55.3,-290.1,479.7,332.6), new cjs.Rectangle(20.4,-290.1,479.7,332.6), new cjs.Rectangle(96,-290.1,479.7,332.6), new cjs.Rectangle(171.7,-290.1,479.7,332.6), new cjs.Rectangle(247.4,-290.1,479.7,332.6), new cjs.Rectangle(323,-290.1,479.7,332.6), new cjs.Rectangle(398.7,-290.1,479.7,332.6), new cjs.Rectangle(474.4,-290.1,479.7,332.6), null, new cjs.Rectangle(-191.5,173.9,435,223), new cjs.Rectangle(-191.5,145.3,435,223), new cjs.Rectangle(-191.5,116.7,435,223), new cjs.Rectangle(-191.5,88,435,223), new cjs.Rectangle(-191.5,59.4,435,223), new cjs.Rectangle(-191.5,30.8,435,223), new cjs.Rectangle(-191.5,2.2,435,223), new cjs.Rectangle(-191.5,-26.4,435,223), new cjs.Rectangle(-191.5,-55,435,223), new cjs.Rectangle(-191.5,-83.6,435,223), new cjs.Rectangle(-191.5,-112.2,435,223), new cjs.Rectangle(-191.5,-140.9,435,223), new cjs.Rectangle(-191.5,-169.5,435,223), rect=new cjs.Rectangle(-191.5,-561,435,585.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-191.5,-338,435,362.9), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-191.5,-570.9,435,595.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-191.5,-338,435,362.9), rect, rect, rect, rect, rect=new cjs.Rectangle(-191.5,-565.9,435,590.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-191.5,-338,435,362.9), rect, rect, rect, new cjs.Rectangle(-191.5,-575.1,435,600), new cjs.Rectangle(-191.5,-545.4,435,570.4), new cjs.Rectangle(-191.5,-515.8,435,540.7), new cjs.Rectangle(-191.5,-486.2,435,511.1), new cjs.Rectangle(-191.5,-456.5,435,481.5), new cjs.Rectangle(-191.5,-426.9,435,451.8), new cjs.Rectangle(-191.5,-397.2,435,422.2), new cjs.Rectangle(-191.5,-367.6,435,392.5), rect=new cjs.Rectangle(-191.5,-338,435,362.9), rect, rect, rect, rect, rect, rect];


(lib.animation3_58_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cube1_1_mc();
	this.instance.setTransform(150.4,-106.9);

	this.instance_1 = new lib.cube1_2_mc();
	this.instance_1.setTransform(150.4,-106.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-125.9},5).to({y:-106.9},6).to({y:-125.9},7).to({y:-106.9},6).to({y:-125.9},6).to({_off:true,y:-106.9},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},6).to({y:-125.9},7).to({y:-106.9},6).wait(6));

	// animation
	this.instance_2 = new lib.cube1_1_mc();
	this.instance_2.setTransform(39.4,-65);

	this.instance_3 = new lib.cube1_2_mc();
	this.instance_3.setTransform(39.4,-65);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-84},5).to({y:-65},6).to({y:-84},7).to({y:-65},6).to({y:-84},6).to({_off:true,y:-65},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},6).to({y:-84},7).to({y:-65},6).wait(6));

	// animation
	this.instance_4 = new lib.cube1_1_mc();
	this.instance_4.setTransform(-74.6,-109.9);

	this.instance_5 = new lib.cube1_2_mc();
	this.instance_5.setTransform(-74.6,-109.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-128.9},5).to({y:-109.9},6).to({y:-128.9},7).to({y:-109.9},6).to({y:-128.9},6).to({_off:true,y:-109.9},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},6).to({y:-128.9},7).to({y:-109.9},6).wait(6));

	// animation
	this.instance_6 = new lib.cube2_1_mc();
	this.instance_6.setTransform(150.4,-161);

	this.instance_7 = new lib.cube2_2_mc();
	this.instance_7.setTransform(150.4,-161);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-180},5).to({y:-161},6).to({y:-180},7).to({y:-161},6).to({y:-180},6).to({y:-161},6).to({y:-180},7).to({_off:true,y:-161},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({_off:false},6).wait(6));

	// animation
	this.instance_8 = new lib.cube2_1_mc();
	this.instance_8.setTransform(61.4,-133);

	this.instance_9 = new lib.cube2_2_mc();
	this.instance_9.setTransform(61.4,-133);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-153},5).to({y:-133},6).to({y:-153},7).to({y:-133},6).to({y:-153},6).to({y:-133},6).to({y:-153},7).to({_off:true,y:-133},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(43).to({_off:false},6).wait(6));

	// animation
	this.instance_10 = new lib.cube2_1_mc();
	this.instance_10.setTransform(-46.6,-161);

	this.instance_11 = new lib.cube2_2_mc();
	this.instance_11.setTransform(-46.6,-161);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-181},5).to({y:-161},6).to({y:-181},7).to({y:-161},6).to({y:-181},6).to({_off:true,y:-161},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},6).to({y:-181},7).to({y:-161},6).wait(6));

	// animation
	this.instance_12 = new lib.cube2_1_mc();
	this.instance_12.setTransform(43.4,-199.9);

	this.instance_13 = new lib.cube2_2_mc();
	this.instance_13.setTransform(43.4,-199.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:-219.9},5).to({y:-199.9},6).to({y:-219.9},7).to({y:-199.9},6).to({y:-219.9},6).to({_off:true,y:-199.9},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({_off:false},6).to({y:-219.9},7).to({y:-199.9},6).wait(6));

	// animation
	this.instance_14 = new lib.cube3_1_mc();
	this.instance_14.setTransform(96.4,-226.1);

	this.instance_15 = new lib.cube3_2_mc();
	this.instance_15.setTransform(96.4,-226.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:-246.1},5).to({y:-226.1},6).to({y:-246.1},7).to({y:-226.1},6).to({y:-246.1},6).to({_off:true,y:-226.1},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},6).to({y:-246.1},7).to({y:-226.1},6).wait(6));

	// animation
	this.instance_16 = new lib.cube3_1_mc();
	this.instance_16.setTransform(163.4,-239.1);

	this.instance_17 = new lib.cube3_2_mc();
	this.instance_17.setTransform(163.4,-239.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:-259.1},5).to({y:-239.1},6).to({y:-259.1},7).to({y:-239.1},6).to({y:-259.1},6).to({y:-239.1},6).to({y:-259.1},7).to({_off:true,y:-239.1},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(43).to({_off:false},6).wait(6));

	// animation
	this.instance_18 = new lib.cube4_1_mc();
	this.instance_18.setTransform(-87.6,-185.9);

	this.instance_19 = new lib.cube4_2_mc();
	this.instance_19.setTransform(-87.6,-185.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({y:-206.9},5).to({y:-185.9},6).to({y:-206.9},7).to({y:-185.9},6).to({y:-206.9},6).to({y:-185.9},6).to({y:-206.9},7).to({_off:true,y:-185.9},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(43).to({_off:false},6).wait(6));

	// animation
	this.instance_20 = new lib.cube4_1_mc();
	this.instance_20.setTransform(-29.6,-216.1);

	this.instance_21 = new lib.cube4_2_mc();
	this.instance_21.setTransform(-29.6,-216.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:-237.1},5).to({y:-216.1},6).to({y:-237.1},7).to({y:-216.1},6).to({y:-237.1},6).to({y:-216.1},6).to({y:-237.1},7).to({_off:true,y:-216.1},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(43).to({_off:false},6).wait(6));

	// animation
	this.instance_22 = new lib.desk2_mc();
	this.instance_22.setTransform(33.2,-121.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({y:-138.3},5).to({y:-121.3},4).wait(2).to({y:-138.3},7).to({y:-121.3},4).wait(2).to({y:-138.3},6).to({y:-121.3},4).wait(2).to({y:-138.3},7).to({y:-121.3},4).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.6,-290.1,479.7,332.6);
p.frameBounds = [rect, new cjs.Rectangle(-206.6,-294.1,479.7,333.2), new cjs.Rectangle(-206.6,-298.1,479.7,333.8), new cjs.Rectangle(-206.6,-302.1,479.7,334.4), new cjs.Rectangle(-206.6,-306.1,479.7,335), new cjs.Rectangle(-206.6,-310.1,479.7,335.6), new cjs.Rectangle(-206.6,-306.7,479.7,336.5), new cjs.Rectangle(-206.6,-303.4,479.7,337.5), new cjs.Rectangle(-206.6,-300.1,479.7,338.4), new cjs.Rectangle(-206.6,-296.7,479.7,339.3), new cjs.Rectangle(-206.6,-293.4,479.7,336), new cjs.Rectangle(-206.6,-290.1,479.7,332.6), new cjs.Rectangle(-206.6,-292.9,479.7,333), new cjs.Rectangle(-206.6,-295.8,479.7,333.5), new cjs.Rectangle(-206.6,-298.6,479.7,333.8), new cjs.Rectangle(-206.6,-301.5,479.7,334.4), new cjs.Rectangle(-206.6,-304.4,479.7,334.8), new cjs.Rectangle(-206.6,-307.2,479.7,335.2), new cjs.Rectangle(-206.6,-310.1,479.7,335.6), new cjs.Rectangle(-206.6,-306.7,479.7,336.5), new cjs.Rectangle(-206.6,-303.4,479.7,337.5), new cjs.Rectangle(-206.6,-300.1,479.7,338.4), new cjs.Rectangle(-206.6,-296.7,479.7,339.3), new cjs.Rectangle(-206.6,-293.4,479.7,336), new cjs.Rectangle(-206.6,-290.1,479.7,332.6), new cjs.Rectangle(-206.6,-293.4,479.7,333.1), new cjs.Rectangle(-206.6,-296.7,479.7,333.6), new cjs.Rectangle(-206.6,-300.1,479.7,334.1), new cjs.Rectangle(-206.6,-303.4,479.7,334.6), new cjs.Rectangle(-206.6,-306.7,479.7,335.1), new cjs.Rectangle(-206.6,-310.1,479.7,335.6), new cjs.Rectangle(-206.6,-306.7,479.7,336.5), new cjs.Rectangle(-206.6,-303.4,479.7,337.5), new cjs.Rectangle(-206.6,-300.1,479.7,338.4), new cjs.Rectangle(-206.6,-296.7,479.7,339.3), new cjs.Rectangle(-206.6,-293.4,479.7,336), new cjs.Rectangle(-206.6,-290.1,479.7,332.6), new cjs.Rectangle(-206.6,-292.9,479.7,333), new cjs.Rectangle(-206.6,-295.8,479.7,333.5), new cjs.Rectangle(-206.6,-298.6,479.7,333.8), new cjs.Rectangle(-206.6,-301.5,479.7,334.4), new cjs.Rectangle(-206.6,-304.4,479.7,334.8), new cjs.Rectangle(-206.6,-307.2,479.7,335.2), new cjs.Rectangle(-206.6,-310.1,479.7,335.6), new cjs.Rectangle(-206.6,-306.7,479.7,336.5), new cjs.Rectangle(-206.6,-303.4,479.7,337.5), new cjs.Rectangle(-206.6,-300.1,479.7,338.4), new cjs.Rectangle(-206.6,-296.7,479.7,339.3), new cjs.Rectangle(-206.6,-293.4,479.7,336), rect=new cjs.Rectangle(-206.6,-290.1,479.7,332.6), rect, rect, rect, rect, rect];


(lib.animation3_57_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.form5_mc();
	this.instance.setTransform(33.4,-553.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-304.6},9).to({y:-297.6},2).to({y:-304.6},2).to({y:-297.6},2).to({y:-304.6},2).to({y:-297.6},2).to({y:-304.6},2).to({y:-297.6},2).wait(11).to({y:-557.6,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.cube1_1_mc();
	this.instance_1.setTransform(150.4,-106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46));

	// animation
	this.instance_2 = new lib.cube1_1_mc();
	this.instance_2.setTransform(39.4,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46));

	// animation
	this.instance_3 = new lib.cube1_1_mc();
	this.instance_3.setTransform(-74.6,-109.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46));

	// animation
	this.instance_4 = new lib.cube2_1_mc();
	this.instance_4.setTransform(150.4,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46));

	// animation
	this.instance_5 = new lib.cube2_1_mc();
	this.instance_5.setTransform(61.4,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46));

	// animation
	this.instance_6 = new lib.cube2_1_mc();
	this.instance_6.setTransform(-46.6,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46));

	// animation
	this.instance_7 = new lib.cube2_1_mc();
	this.instance_7.setTransform(43.4,-199.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46));

	// animation
	this.instance_8 = new lib.cube3_1_mc();
	this.instance_8.setTransform(96.4,-286.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({y:-226.1},5).wait(26));

	// animation
	this.instance_9 = new lib.cube3_1_mc();
	this.instance_9.setTransform(163.4,-286.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({y:-239.1},5).wait(24));

	// animation
	this.instance_10 = new lib.cube4_1_mc();
	this.instance_10.setTransform(-80.6,-287.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({x:-87.6,y:-185.9},5).wait(29));

	// animation
	this.instance_11 = new lib.cube4_1_mc();
	this.instance_11.setTransform(-29.6,-287.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({y:-216.1},5).wait(27));

	// animation
	this.instance_12 = new lib.desk2_mc();
	this.instance_12.setTransform(33.2,-121.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.6,-593.1,479.7,635.6);
p.frameBounds = [rect, new cjs.Rectangle(-206.6,-565.4,479.7,608), new cjs.Rectangle(-206.6,-537.7,479.7,580.3), new cjs.Rectangle(-206.6,-510.1,479.7,552.6), new cjs.Rectangle(-206.6,-482.4,479.7,525), new cjs.Rectangle(-206.6,-454.7,479.7,497.3), new cjs.Rectangle(-206.6,-427.1,479.7,469.6), new cjs.Rectangle(-206.6,-399.4,479.7,442), new cjs.Rectangle(-206.6,-371.7,479.7,414.3), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-337.1,479.7,379.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-337.1,479.7,379.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-337.1,479.7,379.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), rect=new cjs.Rectangle(-206.6,-337.1,479.7,379.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-206.6,-363.1,479.7,405.6), new cjs.Rectangle(-206.6,-389.1,479.7,431.6), new cjs.Rectangle(-206.6,-415.1,479.7,457.6), new cjs.Rectangle(-206.6,-441.1,479.7,483.6), new cjs.Rectangle(-206.6,-467.1,479.7,509.6), new cjs.Rectangle(-206.6,-493.1,479.7,535.6), new cjs.Rectangle(-206.6,-519.1,479.7,561.6), new cjs.Rectangle(-206.6,-545.1,479.7,587.6), new cjs.Rectangle(-206.6,-571.1,479.7,613.6), new cjs.Rectangle(-206.6,-597.1,479.7,639.6), new cjs.Rectangle(-206.6,-290.1,479.7,332.6)];


(lib.animation3_55_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.form5_mc();
	this.instance.setTransform(33.4,-553.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-304.6},9).to({y:-297.6},2).to({y:-304.6},2).to({y:-297.6},2).to({y:-304.6},2).to({y:-297.6},2).to({y:-304.6},2).to({y:-297.6},2).wait(11).to({y:-557.6,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.cube1_1_mc();
	this.instance_1.setTransform(150.4,-106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46));

	// animation
	this.instance_2 = new lib.cube1_1_mc();
	this.instance_2.setTransform(39.4,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46));

	// animation
	this.instance_3 = new lib.cube1_1_mc();
	this.instance_3.setTransform(-74.6,-109.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46));

	// animation
	this.instance_4 = new lib.cube2_1_mc();
	this.instance_4.setTransform(150.4,-283.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({y:-161},5).wait(26));

	// animation
	this.instance_5 = new lib.cube2_1_mc();
	this.instance_5.setTransform(61.4,-283.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({y:-133},5).wait(28));

	// animation
	this.instance_6 = new lib.cube2_1_mc();
	this.instance_6.setTransform(-46.6,-283.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({y:-161},5).wait(30));

	// animation
	this.instance_7 = new lib.cube2_1_mc();
	this.instance_7.setTransform(43.4,-283.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).to({y:-199.9},5).wait(24));

	// animation
	this.instance_8 = new lib.desk2_mc();
	this.instance_8.setTransform(33.2,-121.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.6,-593.1,479.7,635.6);
p.frameBounds = [rect, new cjs.Rectangle(-206.6,-565.4,479.7,608), new cjs.Rectangle(-206.6,-537.7,479.7,580.3), new cjs.Rectangle(-206.6,-510.1,479.7,552.6), new cjs.Rectangle(-206.6,-482.4,479.7,525), new cjs.Rectangle(-206.6,-454.7,479.7,497.3), new cjs.Rectangle(-206.6,-427.1,479.7,469.6), new cjs.Rectangle(-206.6,-399.4,479.7,442), new cjs.Rectangle(-206.6,-371.7,479.7,414.3), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-337.1,479.7,379.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-337.1,479.7,379.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-337.1,479.7,379.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), new cjs.Rectangle(-206.6,-344.1,479.7,386.6), new cjs.Rectangle(-206.6,-340.6,479.7,383.1), rect=new cjs.Rectangle(-206.6,-337.1,479.7,379.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-206.6,-363.1,479.7,405.6), new cjs.Rectangle(-206.6,-389.1,479.7,431.6), new cjs.Rectangle(-206.6,-415.1,479.7,457.6), new cjs.Rectangle(-206.6,-441.1,479.7,483.6), new cjs.Rectangle(-206.6,-467.1,479.7,509.6), new cjs.Rectangle(-206.6,-493.1,479.7,535.6), new cjs.Rectangle(-206.6,-519.1,479.7,561.6), new cjs.Rectangle(-206.6,-545.1,479.7,587.6), new cjs.Rectangle(-206.6,-571.1,479.7,613.6), new cjs.Rectangle(-206.6,-597.1,479.7,639.6), new cjs.Rectangle(-206.6,-285.1,479.7,327.6)];


(lib.animation3_53_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.form5_mc();
	this.instance.setTransform(34,-527);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:-350},10).to({y:-347},2).to({y:-350},2).to({y:-347},2).to({y:-350},2).to({y:-347},2).wait(10).to({y:-502,alpha:0.012},5).wait(1));

	// animation
	this.instance_1 = new lib.cube1_1_mc();
	this.instance_1.setTransform(150.4,-333.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({y:-106.9},5).wait(14));

	// animation
	this.instance_2 = new lib.cube1_1_mc();
	this.instance_2.setTransform(39.4,-333.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({y:-65},5).wait(17));

	// animation
	this.instance_3 = new lib.cube1_1_mc();
	this.instance_3.setTransform(-68.6,-333.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({x:-74.6,y:-109.9},5).wait(19));

	// animation
	this.instance_4 = new lib.desk2_mc();
	this.instance_4.setTransform(33.2,-269.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-121.3},9).wait(36));

	// animation
	this.instance_5 = new lib.back_podl2_mc();
	this.instance_5.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:248.3,alpha:0.012},9).to({_off:true},1).wait(35));

	// animation
	this.instance_6 = new lib.back_podl1_mc();
	this.instance_6.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:269.3,alpha:0.012},9).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-433.1,896,566.5);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-416.6,896,577.6), new cjs.Rectangle(-447.6,-400.2,896,588.7), new cjs.Rectangle(-447.6,-383.7,896,599.8), new cjs.Rectangle(-447.6,-367.3,896,610.9), new cjs.Rectangle(-447.6,-350.9,896,622), new cjs.Rectangle(-447.6,-334.4,896,633.1), new cjs.Rectangle(-447.6,-318,896,644.2), new cjs.Rectangle(-447.6,-301.5,896,655.3), new cjs.Rectangle(-447.6,-566.5,896,947.8), new cjs.Rectangle(-206.6,-548.8,479.7,591.3), new cjs.Rectangle(-206.6,-531.1,479.7,573.6), new cjs.Rectangle(-206.6,-513.4,479.7,555.9), new cjs.Rectangle(-206.6,-495.7,479.7,538.2), new cjs.Rectangle(-206.6,-478,479.7,520.5), new cjs.Rectangle(-206.6,-460.3,479.7,502.8), new cjs.Rectangle(-206.6,-442.6,479.7,485.1), new cjs.Rectangle(-206.6,-424.9,479.7,467.4), new cjs.Rectangle(-206.6,-407.2,479.7,449.7), new cjs.Rectangle(-206.6,-389.5,479.7,432), new cjs.Rectangle(-206.6,-388,479.7,430.5), new cjs.Rectangle(-206.6,-386.5,479.7,429), new cjs.Rectangle(-206.6,-388,479.7,430.5), new cjs.Rectangle(-206.6,-389.5,479.7,432), new cjs.Rectangle(-206.6,-388,479.7,430.5), new cjs.Rectangle(-206.6,-386.5,479.7,429), new cjs.Rectangle(-206.6,-388,479.7,430.5), new cjs.Rectangle(-206.6,-389.5,479.7,432), new cjs.Rectangle(-206.6,-388,479.7,430.5), rect=new cjs.Rectangle(-206.6,-386.5,479.7,429), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-206.6,-417.5,479.7,460), new cjs.Rectangle(-206.6,-448.5,479.7,491), new cjs.Rectangle(-206.6,-479.5,479.7,522), new cjs.Rectangle(-206.6,-510.5,479.7,553), new cjs.Rectangle(-206.6,-541.5,479.7,584)];


(lib.animation3_47_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.microwave2_mc();
	this.instance.setTransform(30.5,30.9,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

	// animation
	this.instance_1 = new lib.cup21_mc();
	this.instance_1.setTransform(-175,-282.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66));

	// animation
	this.instance_2 = new lib.ch1_mc();
	this.instance_2.setTransform(188.5,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-8.7,x:22.7,y:-462.5},8).to({rotation:-19.5,x:-14.3,y:-456.8},6).to({rotation:-34.7,x:-167.3,y:-352.8},38).to({_off:true},1).wait(13));

	// animation
	this.instance_3 = new lib.ch1_1_mc();
	this.instance_3.setTransform(-116.9,-423.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({x:-107,y:-327.6},10).wait(14));

	// animation
	this.instance_4 = new lib.ch1_2_mc();
	this.instance_4.setTransform(-82.6,-388.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({x:-140.5,y:-328.6},10).wait(14));

	// animation
	this.instance_5 = new lib.ch1_1_mc();
	this.instance_5.setTransform(-116.9,-420.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).to({x:-190,y:-320},10).wait(20));

	// animation
	this.instance_6 = new lib.ch1_2_mc();
	this.instance_6.setTransform(-82.6,-385.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).to({x:-221.5,y:-322},10).wait(20));

	// animation
	this.instance_7 = new lib.ch1_1_mc();
	this.instance_7.setTransform(-116.9,-420.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({x:-233,y:-335.6},10).wait(27));

	// animation
	this.instance_8 = new lib.ch1_2_mc();
	this.instance_8.setTransform(-82.6,-385.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({x:-169.5,y:-330.1},10).wait(27));

	// animation
	this.instance_9 = new lib.plate1_mc();
	this.instance_9.setTransform(190.5,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-8.7,x:29.1,y:-434.2},8).to({rotation:-19.5,x:-2.7,y:-430.1},6).wait(39).to({rotation:-2.3,x:197.3,y:-439.1,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.cup11_mc();
	this.instance_10.setTransform(-174.5,-294.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(66));

	// animation
	this.instance_11 = new lib.back_podl2_mc();
	this.instance_11.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(66));

	// animation
	this.instance_12 = new lib.back_podl1_mc();
	this.instance_12.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-386.4,896,519.8);
p.frameBounds = [rect, rect, new cjs.Rectangle(-447.6,-407.1,896,540.5), new cjs.Rectangle(-447.6,-430.2,896,563.6), new cjs.Rectangle(-447.6,-452.9,896,586.3), new cjs.Rectangle(-447.6,-475.6,896,609), new cjs.Rectangle(-447.6,-498.7,896,632.1), new cjs.Rectangle(-447.6,-521.3,896,654.7), new cjs.Rectangle(-447.6,-544.4,896,677.8), new cjs.Rectangle(-447.6,-546.2,896,679.6), new cjs.Rectangle(-447.6,-548.1,896,681.5), new cjs.Rectangle(-447.6,-549.8,896,683.2), new cjs.Rectangle(-447.6,-551.4,896,684.8), new cjs.Rectangle(-447.6,-553,896,686.4), new cjs.Rectangle(-447.6,-554.8,896,688.2), new cjs.Rectangle(-447.6,-552.4,896,685.8), new cjs.Rectangle(-447.6,-550.4,896,683.8), new cjs.Rectangle(-447.6,-548,896,681.4), new cjs.Rectangle(-447.6,-545.8,896,679.2), new cjs.Rectangle(-447.6,-543.5,896,676.9), new cjs.Rectangle(-447.6,-541.3,896,674.7), new cjs.Rectangle(-447.6,-539.2,896,672.6), new cjs.Rectangle(-447.6,-536.8,896,670.2), new cjs.Rectangle(-447.6,-534.7,896,668.1), new cjs.Rectangle(-447.6,-532.4,896,665.8), new cjs.Rectangle(-447.6,-530.2,896,663.6), new cjs.Rectangle(-447.6,-528,896,661.4), rect=new cjs.Rectangle(-447.6,-526.5,896,659.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-526.8,896,660.2), new cjs.Rectangle(-447.6,-524.3,896,657.7), new cjs.Rectangle(-447.6,-522.2,896,655.6), new cjs.Rectangle(-447.6,-520,896,653.4), new cjs.Rectangle(-447.6,-517.3,896,650.7), new cjs.Rectangle(-447.6,-515,896,648.4), new cjs.Rectangle(-447.6,-512.6,896,646), new cjs.Rectangle(-447.6,-510.1,896,643.5), new cjs.Rectangle(-447.6,-507.2,896,640.6), new cjs.Rectangle(-447.6,-504.6,896,638), new cjs.Rectangle(-447.6,-502.1,896,635.5), new cjs.Rectangle(-447.6,-499.4,896,632.8), new cjs.Rectangle(-447.6,-386.4,896,519.8)];


(lib.animation3_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sok3_mc();
	this.instance.setTransform(-183.3,-287.1,0.841,0.841);

	this.instance_1 = new lib.microwave2_mc();
	this.instance_1.setTransform(30.5,30.9,0.272,0.272);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:36.5,x:263.7,y:-432.4},9).to({scaleX:0.94,rotation:0,skewX:36.5,skewY:63.3,x:271.7,y:-373.4},4).to({x:43.7,y:-323.4,alpha:0.012},15).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,alpha:1},10).to({scaleX:0.62,scaleY:0.62},2).to({scaleX:0.56,scaleY:0.56},2).wait(1));

	// animation
	this.instance_2 = new lib.kastr_mc();
	this.instance_2.setTransform(-278,-289.6);

	this.instance_3 = new lib.cup21_mc();
	this.instance_3.setTransform(-585.9,-282.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:36.5,x:189,y:-490.6},9).wait(4).to({x:-39},15).to({y:-674.6,alpha:0.012},7).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).to({x:-175},11).wait(4));

	// animation
	this.instance_4 = new lib.cup11_mc();
	this.instance_4.setTransform(-585.4,-294.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({_off:false},0).to({x:-174.5},11).wait(4));

	// animation
	this.instance_5 = new lib.form3_mc();
	this.instance_5.setTransform(177,-275.9);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_6 = new lib.ch1_mc();
	this.instance_6.setTransform(632.5,-294.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({alpha:1},15).wait(7).to({scaleX:0.43,scaleY:0.43,x:18.1,y:-250.9},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(68).to({_off:false},0).to({x:188.5,y:-295},11).wait(4));

	// animation
	this.instance_7 = new lib.form_mc();
	this.instance_7.setTransform(177,-275.6);

	this.instance_8 = new lib.plate1_mc();
	this.instance_8.setTransform(634.5,-265.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({scaleX:0.43,scaleY:0.43,x:18.1,y:-250.7},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(68).to({_off:false},0).to({x:190.5,y:-266},11).wait(4));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(83));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(83));

	// animation
	this.instance_11 = new lib.frige2_mc();
	this.instance_11.setTransform(119,150.4);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.instance_12 = new lib.frige1_mc();
	this.instance_12.setTransform(119,-166.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35).to({_off:false},0).to({y:-166.6,alpha:1},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},1).wait(11).to({y:226.3,alpha:0.012},8).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-492.5,-408.6,940.9,542);
p.frameBounds = [rect, new cjs.Rectangle(-448.3,-445.6,896.7,579), new cjs.Rectangle(-447.6,-481.9,896,615.3), new cjs.Rectangle(-447.6,-517.6,896,651), new cjs.Rectangle(-447.6,-552.5,896,685.9), new cjs.Rectangle(-447.6,-587,896,720.4), new cjs.Rectangle(-447.6,-620,896,753.4), new cjs.Rectangle(-447.6,-652.1,896,785.5), new cjs.Rectangle(-447.6,-683.2,896,816.6), new cjs.Rectangle(-447.6,-713.7,896,847.1), rect=new cjs.Rectangle(-447.6,-713.3,896,846.7), rect, rect, new cjs.Rectangle(-447.6,-713.7,896,847.1), rect=new cjs.Rectangle(-447.6,-713.3,896,846.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-713.7,896,847.1), new cjs.Rectangle(-447.6,-739.5,896,872.9), new cjs.Rectangle(-447.6,-765.8,896,899.2), new cjs.Rectangle(-447.6,-792.1,896,925.5), new cjs.Rectangle(-447.6,-818.4,896,951.8), new cjs.Rectangle(-447.6,-844.7,896,978.1), new cjs.Rectangle(-447.6,-870.9,896,1004.3), new cjs.Rectangle(-447.6,-897.7,896,1348.1), new cjs.Rectangle(-447.6,-371.4,896,786.6), new cjs.Rectangle(-447.6,-362,896,742), new cjs.Rectangle(-447.6,-352.6,896,697.3), new cjs.Rectangle(-447.6,-343.1,896,652.6), new cjs.Rectangle(-447.6,-333.7,896,608), new cjs.Rectangle(-447.6,-361,896,600), new cjs.Rectangle(-447.6,-396.2,896,600), new cjs.Rectangle(-447.6,-431.4,896,600), rect=new cjs.Rectangle(-447.6,-466.6,896,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-417.5,896,600), new cjs.Rectangle(-447.6,-368.4,896,600), new cjs.Rectangle(-447.6,-319.3,896,600), new cjs.Rectangle(-447.6,-270.2,896,600), new cjs.Rectangle(-447.6,-221,896,600), new cjs.Rectangle(-447.6,-171.9,896,600), new cjs.Rectangle(-699.9,-386.4,1468.9,863.7), new cjs.Rectangle(-662.6,-386.4,1391.2,912.8), new cjs.Rectangle(-625.2,-386.4,1313.5,519.8), new cjs.Rectangle(-587.8,-386.4,1235.7,519.8), new cjs.Rectangle(-550.5,-386.4,1158,519.8), new cjs.Rectangle(-513.1,-386.4,1080.3,519.8), new cjs.Rectangle(-475.8,-386.4,1002.6,519.8), new cjs.Rectangle(-447.6,-386.4,934.1,519.8), rect=new cjs.Rectangle(-447.6,-386.4,896,519.8), rect, rect, rect, rect, rect, rect];


(lib.animation3_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sok2_mc();
	this.instance.setTransform(-183.3,-287.1,0.841,0.841);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:36.5,x:263.7,y:-432.4},9).to({scaleX:0.94,rotation:0,skewX:36.5,skewY:63.3,x:271.7,y:-373.4},4).to({x:43.7,y:-323.4,alpha:0.012},15).to({_off:true},1).wait(54));

	// animation
	this.instance_1 = new lib.kastr_mc();
	this.instance_1.setTransform(-278,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:36.5,x:189,y:-490.6},9).wait(4).to({x:-39},15).to({y:-674.6,alpha:0.012},7).to({_off:true},1).wait(47));

	// animation
	this.instance_2 = new lib.sok3_1_mc();
	this.instance_2.setTransform(232.4,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83));

	// animation
	this.instance_3 = new lib.smes9_mc();
	this.instance_3.setTransform(-563.6,-287.9);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({x:24.4,alpha:1},13).wait(1));

	// animation
	this.instance_4 = new lib.form2_mc();
	this.instance_4.setTransform(177,-275.9);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.instance_5 = new lib.kastr_mc();
	this.instance_5.setTransform(-659.9,-289.6);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({alpha:1},15).wait(7).to({scaleX:0.43,scaleY:0.43,x:18.1,y:-250.9},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({x:-72,alpha:1},13).wait(1));

	// animation
	this.instance_6 = new lib.form_mc();
	this.instance_6.setTransform(177,-275.6);

	this.instance_7 = new lib.plita_mc();
	this.instance_7.setTransform(-562.6,-284.9);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({scaleX:0.43,scaleY:0.43,x:18.1,y:-250.7},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({x:25.4,alpha:1},13).wait(1));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(83));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(83));

	// animation
	this.instance_10 = new lib.frige2_mc();
	this.instance_10.setTransform(119,150.4);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.instance_11 = new lib.frige1_mc();
	this.instance_11.setTransform(119,-166.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({_off:false},0).to({y:-166.6,alpha:1},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},1).wait(11).to({y:226.3,alpha:0.012},8).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-492.5,-408.6,940.9,542);
p.frameBounds = [rect, new cjs.Rectangle(-448.3,-445.6,896.7,579), new cjs.Rectangle(-447.6,-481.9,896,615.3), new cjs.Rectangle(-447.6,-517.6,896,651), new cjs.Rectangle(-447.6,-552.5,896,685.9), new cjs.Rectangle(-447.6,-587,896,720.4), new cjs.Rectangle(-447.6,-620,896,753.4), new cjs.Rectangle(-447.6,-652.1,896,785.5), new cjs.Rectangle(-447.6,-683.2,896,816.6), new cjs.Rectangle(-447.6,-713.7,896,847.1), rect=new cjs.Rectangle(-447.6,-713.3,896,846.7), rect, rect, new cjs.Rectangle(-447.6,-713.7,896,847.1), rect=new cjs.Rectangle(-447.6,-713.3,896,846.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-713.7,896,847.1), new cjs.Rectangle(-447.6,-739.5,896,872.9), new cjs.Rectangle(-447.6,-765.8,896,899.2), new cjs.Rectangle(-447.6,-792.1,896,925.5), new cjs.Rectangle(-447.6,-818.4,896,951.8), new cjs.Rectangle(-447.6,-844.7,896,978.1), new cjs.Rectangle(-447.6,-870.9,896,1004.3), new cjs.Rectangle(-447.6,-897.7,896,1348.1), new cjs.Rectangle(-447.6,-371.4,896,786.6), new cjs.Rectangle(-447.6,-362,896,742), new cjs.Rectangle(-447.6,-352.6,896,697.3), new cjs.Rectangle(-447.6,-343.1,896,652.6), new cjs.Rectangle(-447.6,-333.7,896,608), new cjs.Rectangle(-447.6,-361,896,600), new cjs.Rectangle(-447.6,-396.2,896,600), new cjs.Rectangle(-447.6,-431.4,896,600), rect=new cjs.Rectangle(-447.6,-466.6,896,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-417.5,896,600), new cjs.Rectangle(-447.6,-368.4,896,600), new cjs.Rectangle(-447.6,-319.3,896,600), new cjs.Rectangle(-447.6,-270.2,896,600), new cjs.Rectangle(-447.6,-221,896,600), new cjs.Rectangle(-447.6,-171.9,896,600), new cjs.Rectangle(-447.6,-132.6,896,609.9), new cjs.Rectangle(-874.4,-442.4,1322.8,968.8), new cjs.Rectangle(-829.2,-442.4,1277.6,575.8), new cjs.Rectangle(-784,-442.4,1232.4,575.8), new cjs.Rectangle(-738.7,-442.4,1187.1,575.8), new cjs.Rectangle(-693.5,-442.4,1141.9,575.8), new cjs.Rectangle(-648.3,-442.4,1096.7,575.8), new cjs.Rectangle(-603.1,-442.4,1051.5,575.8), new cjs.Rectangle(-557.8,-442.4,1006.2,575.8), new cjs.Rectangle(-512.6,-442.4,961,575.8), new cjs.Rectangle(-467.4,-442.4,915.8,575.8), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect];


(lib.animation3_37_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sok1_mc();
	this.instance.setTransform(-183.3,-287.1,0.841,0.841);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:36.5,x:263.7,y:-432.4},9).to({scaleX:0.94,rotation:0,skewX:36.5,skewY:63.3,x:271.7,y:-373.4},4).to({x:43.7,y:-323.4,alpha:0.012},15).to({_off:true},1).wait(54));

	// animation
	this.instance_1 = new lib.kastr_mc();
	this.instance_1.setTransform(-278,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:36.5,x:189,y:-490.6},9).wait(4).to({x:-39},15).to({y:-674.6,alpha:0.012},7).to({_off:true},1).wait(47));

	// animation
	this.instance_2 = new lib.sok2_1_mc();
	this.instance_2.setTransform(11.9,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83));

	// animation
	this.instance_3 = new lib.sok3_1_mc();
	this.instance_3.setTransform(232.4,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83));

	// animation
	this.instance_4 = new lib.smes9_mc();
	this.instance_4.setTransform(-563.6,-287.9);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({_off:false},0).to({x:24.4,alpha:1},13).wait(1));

	// animation
	this.instance_5 = new lib.form1_mc();
	this.instance_5.setTransform(177,-275.9);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_6 = new lib.kastr_mc();
	this.instance_6.setTransform(-659.9,-289.6);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({alpha:1},15).wait(7).to({scaleX:0.43,scaleY:0.43,x:18.1,y:-250.9},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).to({x:-72,alpha:1},13).wait(1));

	// animation
	this.instance_7 = new lib.form_mc();
	this.instance_7.setTransform(177,-275.6);

	this.instance_8 = new lib.plita_mc();
	this.instance_8.setTransform(-562.6,-284.9);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({scaleX:0.43,scaleY:0.43,x:18.1,y:-250.7},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},0).to({x:25.4,alpha:1},13).wait(1));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(83));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(83));

	// animation
	this.instance_11 = new lib.frige2_mc();
	this.instance_11.setTransform(119,150.4);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.instance_12 = new lib.frige1_mc();
	this.instance_12.setTransform(119,-166.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35).to({_off:false},0).to({y:-166.6,alpha:1},9).wait(5).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},1).wait(11).to({y:226.3,alpha:0.012},8).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-492.5,-408.6,940.9,542);
p.frameBounds = [rect, new cjs.Rectangle(-448.3,-445.6,896.7,579), new cjs.Rectangle(-447.6,-481.9,896,615.3), new cjs.Rectangle(-447.6,-517.6,896,651), new cjs.Rectangle(-447.6,-552.5,896,685.9), new cjs.Rectangle(-447.6,-587,896,720.4), new cjs.Rectangle(-447.6,-620,896,753.4), new cjs.Rectangle(-447.6,-652.1,896,785.5), new cjs.Rectangle(-447.6,-683.2,896,816.6), new cjs.Rectangle(-447.6,-713.7,896,847.1), rect=new cjs.Rectangle(-447.6,-713.3,896,846.7), rect, rect, new cjs.Rectangle(-447.6,-713.7,896,847.1), rect=new cjs.Rectangle(-447.6,-713.3,896,846.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-713.7,896,847.1), new cjs.Rectangle(-447.6,-739.5,896,872.9), new cjs.Rectangle(-447.6,-765.8,896,899.2), new cjs.Rectangle(-447.6,-792.1,896,925.5), new cjs.Rectangle(-447.6,-818.4,896,951.8), new cjs.Rectangle(-447.6,-844.7,896,978.1), new cjs.Rectangle(-447.6,-870.9,896,1004.3), new cjs.Rectangle(-447.6,-897.7,896,1348.1), new cjs.Rectangle(-447.6,-371.4,896,786.6), new cjs.Rectangle(-447.6,-362,896,742), new cjs.Rectangle(-447.6,-352.6,896,697.3), new cjs.Rectangle(-447.6,-343.1,896,652.6), new cjs.Rectangle(-447.6,-333.7,896,608), new cjs.Rectangle(-447.6,-361,896,600), new cjs.Rectangle(-447.6,-396.2,896,600), new cjs.Rectangle(-447.6,-431.4,896,600), rect=new cjs.Rectangle(-447.6,-466.6,896,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-417.5,896,600), new cjs.Rectangle(-447.6,-368.4,896,600), new cjs.Rectangle(-447.6,-319.3,896,600), new cjs.Rectangle(-447.6,-270.2,896,600), new cjs.Rectangle(-447.6,-221,896,600), new cjs.Rectangle(-447.6,-171.9,896,600), new cjs.Rectangle(-447.6,-132.6,896,609.9), new cjs.Rectangle(-874.4,-442.4,1322.8,968.8), new cjs.Rectangle(-829.2,-442.4,1277.6,575.8), new cjs.Rectangle(-784,-442.4,1232.4,575.8), new cjs.Rectangle(-738.7,-442.4,1187.1,575.8), new cjs.Rectangle(-693.5,-442.4,1141.9,575.8), new cjs.Rectangle(-648.3,-442.4,1096.7,575.8), new cjs.Rectangle(-603.1,-442.4,1051.5,575.8), new cjs.Rectangle(-557.8,-442.4,1006.2,575.8), new cjs.Rectangle(-512.6,-442.4,961,575.8), new cjs.Rectangle(-467.4,-442.4,915.8,575.8), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect];


(lib.animation3_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lemon_mc();
	this.instance.setTransform(299.4,20.4,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86));

	// animation
	this.instance_1 = new lib.spoon_inv_mc();
	this.instance_1.setTransform(322.7,-346.9,1,1,-108.6);

	this.instance_2 = new lib.spoon_inv2_mc();
	this.instance_2.setTransform(308.7,-335.9,1,1,-108.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:308.7,y:-335.9},3).wait(7).to({_off:false,x:91.7,y:-354.9},5).to({x:322.7,y:-346.9},9).to({_off:true,x:308.7,y:-335.9},3).wait(7).to({_off:false,x:64.7,y:-386.9},5).to({x:322.7,y:-346.9},10).to({_off:true,x:308.7,y:-335.9},3).wait(7).to({_off:false,x:126.7,y:-389.9},5).to({x:135.7,y:-532.9,alpha:0.012},10).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},3).to({x:124.7,y:-378.9},7).to({_off:true,x:91.7,y:-354.9},5).wait(9).to({_off:false,x:308.7,y:-335.9},3).to({x:124.7,y:-378.9},7).to({_off:true,x:64.7,y:-386.9},5).wait(10).to({_off:false,x:308.7,y:-335.9},3).to({x:124.7,y:-378.9},7).to({_off:true,x:126.7,y:-389.9},5).wait(22));

	// animation
	this.instance_3 = new lib.karame_mc();
	this.instance_3.setTransform(23.4,-276.6);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({alpha:1},10).wait(2));

	// animation
	this.instance_4 = new lib.sugar1_mc();
	this.instance_4.setTransform(44.4,-257.6,0.5,0.5);

	this.instance_5 = new lib.sugar1_mc();
	this.instance_5.setTransform(6,-294.6,0.5,0.5);

	this.instance_6 = new lib.sugar1_mc();
	this.instance_6.setTransform(70,-297.6,0.5,0.5);

	this.instance_7 = new lib.s3_mc();
	this.instance_7.setTransform(38,-277.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_5},{t:this.instance_4}]},24).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},25).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_7}]},10).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_8 = new lib.sugar_mc();
	this.instance_8.setTransform(272.4,-226.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({x:582.3,alpha:0.012},10).to({_off:true},1).wait(11));

	// animation
	this.instance_9 = new lib.jelly2_mc();
	this.instance_9.setTransform(19,-262.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.kastr_mc();
	this.instance_10.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(86));

	// animation
	this.instance_11 = new lib.plita_mc();
	this.instance_11.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(86));

	// animation
	this.instance_12 = new lib.back_podl2_mc();
	this.instance_12.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(86));

	// animation
	this.instance_13 = new lib.back_podl1_mc();
	this.instance_13.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442.4,896,575.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-446.4,896,579.8), new cjs.Rectangle(-447.6,-452.7,896,586.1), new cjs.Rectangle(-447.6,-447.7,896,581.1), new cjs.Rectangle(-447.6,-442.9,896,576.3), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-446.4,896,579.8), new cjs.Rectangle(-447.6,-452.7,896,586.1), new cjs.Rectangle(-447.6,-454.1,896,587.5), new cjs.Rectangle(-447.6,-455.7,896,589.1), new cjs.Rectangle(-447.6,-457.3,896,590.7), new cjs.Rectangle(-447.6,-458.9,896,592.3), new cjs.Rectangle(-447.6,-460.7,896,594.1), new cjs.Rectangle(-447.6,-456.5,896,589.9), new cjs.Rectangle(-447.6,-452.5,896,585.9), new cjs.Rectangle(-447.6,-448.5,896,581.9), new cjs.Rectangle(-447.6,-444.5,896,577.9), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-446.4,896,579.8), new cjs.Rectangle(-447.6,-452.7,896,586.1), new cjs.Rectangle(-447.6,-454.7,896,588.1), new cjs.Rectangle(-447.6,-456.9,896,590.3), new cjs.Rectangle(-447.6,-459.1,896,592.5), new cjs.Rectangle(-447.6,-461.3,896,594.7), new cjs.Rectangle(-447.6,-463.7,896,597.1), new cjs.Rectangle(-447.6,-477.9,896,611.3), new cjs.Rectangle(-447.6,-492.2,896,625.6), new cjs.Rectangle(-447.6,-506.5,896,639.9), new cjs.Rectangle(-447.6,-520.8,924.5,654.2), new cjs.Rectangle(-447.6,-535.1,955.5,668.5), new cjs.Rectangle(-447.6,-549.4,986.5,682.8), new cjs.Rectangle(-447.6,-563.7,1017.5,697.1), new cjs.Rectangle(-447.6,-578,1048.4,711.4), new cjs.Rectangle(-447.6,-592.3,1079.4,725.7), new cjs.Rectangle(-447.6,-606.7,1110.4,740.1), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lemon_mc();
	this.instance.setTransform(299.4,20.4,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// animation
	this.instance_1 = new lib.sugar_mc();
	this.instance_1.setTransform(136.4,27.4,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.jelly1_mc();
	this.instance_2.setTransform(252.1,-300.6,0.999,0.999,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-57.6,x:144.1,y:-334.6},10).to({rotation:-57.6,x:136.1},2).to({x:144.1},2).to({x:136.1},2).to({x:144.1},2).to({x:136.1},2).to({x:144.1},2).to({x:136.1},2).to({x:144.1},2).to({x:136.1},2).to({rotation:-11.1,x:431.1,y:-383.6,alpha:0.012},9).to({_off:true},1).wait(7));

	// animation
	this.instance_3 = new lib.jelly2_mc();
	this.instance_3.setTransform(19,-262.9);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},22).wait(13));

	// animation
	this.instance_4 = new lib.jelly3_mc();
	this.instance_4.setTransform(57,-327.5,0.6,0.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(7));

	// animation
	this.instance_5 = new lib.jelly3_mc();
	this.instance_5.setTransform(57,-327.5,0.6,0.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(12));

	// animation
	this.instance_6 = new lib.jelly3_mc();
	this.instance_6.setTransform(57,-327.5,0.6,0.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(18));

	// animation
	this.instance_7 = new lib.jelly3_mc();
	this.instance_7.setTransform(57,-327.5,0.6,0.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(22));

	// animation
	this.instance_8 = new lib.jelly3_mc();
	this.instance_8.setTransform(57,-327.5,0.6,0.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(25));

	// animation
	this.instance_9 = new lib.kastr_mc();
	this.instance_9.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45));

	// animation
	this.instance_10 = new lib.plita_mc();
	this.instance_10.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45));

	// animation
	this.instance_11 = new lib.back_podl2_mc();
	this.instance_11.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45));

	// animation
	this.instance_12 = new lib.back_podl1_mc();
	this.instance_12.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442.4,896,575.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-447.1,896,580.5), new cjs.Rectangle(-447.6,-453.9,896,587.3), new cjs.Rectangle(-447.6,-459.8,896,593.2), new cjs.Rectangle(-447.6,-464.8,896,598.2), new cjs.Rectangle(-447.6,-469.1,896,602.5), new cjs.Rectangle(-447.6,-472.7,900.6,606.1), new cjs.Rectangle(-447.6,-475.4,928.2,608.8), new cjs.Rectangle(-447.6,-477.3,955.1,610.7), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect];


(lib.animation3_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer3_mc();
	this.instance.setTransform(-36.6,-202.6);

	this.instance_1 = new lib.lemon_mc();
	this.instance_1.setTransform(299.4,20.4,0.519,0.519);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({x:617.3,alpha:0.012},11).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({_off:false},0).to({scaleX:0.86,scaleY:0.86,alpha:1},12).wait(7));

	// animation
	this.instance_2 = new lib.besms_mc();
	this.instance_2.setTransform(-34.8,-194.8);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.instance_3 = new lib.sugar_mc();
	this.instance_3.setTransform(136.4,27.4,0.304,0.304);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({alpha:1},10).wait(5).to({x:619.2,alpha:0.012},11).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(73).to({_off:false},0).to({scaleX:0.86,scaleY:0.86,alpha:1},12).wait(15));

	// animation
	this.instance_4 = new lib.mixer2_mc();
	this.instance_4.setTransform(-67,-286.9);

	this.instance_5 = new lib.jelly1_mc();
	this.instance_5.setTransform(-44,23.4,0.415,0.415);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({x:-576.9,alpha:0.012},11).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,alpha:1},12).wait(22));

	// animation
	this.instance_6 = new lib.mixer1_mc();
	this.instance_6.setTransform(-36.6,-237.6);

	this.instance_7 = new lib.mixer1_1_mc();
	this.instance_7.setTransform(-36.6,-237.6);
	this.instance_7._off = true;

	this.instance_8 = new lib.plita_mc();
	this.instance_8.setTransform(-232.6,28,0.291,0.291);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:true},1).wait(10).to({_off:false},1).wait(4).to({x:-546.6,alpha:0.012},11).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},1).wait(10).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(57).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,alpha:1},12).wait(31));

	// animation
	this.instance_9 = new lib.berry1_mc();
	this.instance_9.setTransform(253,-179,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({skewX:29.2,skewY:209.2,x:178,y:-357},9).to({x:14,y:-352},10).to({x:-5.4,y:-164},10).to({alpha:0.012},11).to({_off:true},1).wait(59));

	// animation
	this.instance_10 = new lib.berry1_mc();
	this.instance_10.setTransform(189.3,-175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-23.7,x:96.7,y:-338.9},9).to({x:-67.3,y:-333.9},10).to({x:-76.3,y:-168.9},10).to({alpha:0.012},11).to({_off:true},1).wait(59));

	// animation
	this.instance_11 = new lib.berry2_mc();
	this.instance_11.setTransform(230.3,-198);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:15.5,x:140.3,y:-378},9).to({x:-23.7,y:-373},10).to({x:-30,y:-157},10).to({alpha:0.012},11).to({_off:true},1).wait(59));

	// animation
	this.instance_12 = new lib.berry2_mc();
	this.instance_12.setTransform(167.8,-198,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:-23,skewY:157,x:63.8,y:-383},9).to({x:-100.2,y:-378},10).to({x:-94.2,y:-201},10).to({alpha:0.012},11).to({_off:true},1).wait(59));

	// animation
	this.instance_13 = new lib.berry1_mc();
	this.instance_13.setTransform(288.8,-206.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({skewX:23.2,skewY:203.2,x:212.8,y:-397.2},9).to({x:48.8,y:-392.2},10).to({x:19.3,y:-193.2},10).to({alpha:0.012},11).to({_off:true},1).wait(59));

	// animation
	this.instance_14 = new lib.berry2_mc();
	this.instance_14.setTransform(241.4,-228.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:-6.2,x:163.7,y:-419.4},9).to({x:-0.3,y:-414.4},10).to({x:14.6,y:-201.4},10).to({alpha:0.012},11).to({_off:true},1).wait(59));

	// animation
	this.instance_15 = new lib.berry1_mc();
	this.instance_15.setTransform(186.4,-223.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:-10.7,x:111.4,y:-401.9},9).to({x:-52.6,y:-396.9},10).to({x:-40.6,y:-207.2},10).to({alpha:0.012},11).to({_off:true},1).wait(59));

	// animation
	this.instance_16 = new lib.plate1_mc();
	this.instance_16.setTransform(223.4,-181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:600.3,alpha:0.012},9).to({_off:true},1).wait(90));

	// animation
	this.instance_17 = new lib.back_podl2_mc();
	this.instance_17.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(100));

	// animation
	this.instance_18 = new lib.back_podl1_mc();
	this.instance_18.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-457.9,896,591.3);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-447.6,-457.9,931.2,591.3), new cjs.Rectangle(-447.6,-457.9,973.1,591.3), new cjs.Rectangle(-447.6,-457.9,1014.9,591.3), new cjs.Rectangle(-447.6,-457.9,1056.8,591.3), new cjs.Rectangle(-447.6,-457.9,1098.7,591.3), new cjs.Rectangle(-447.6,-457.9,1140.6,591.3), new cjs.Rectangle(-447.6,-457.9,1182.4,591.3), rect=new cjs.Rectangle(-447.6,-457.9,896,591.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-477.1,-457.9,925.5,591.3), new cjs.Rectangle(-523.5,-457.9,998.5,591.3), new cjs.Rectangle(-569.9,-457.9,1104.4,591.3), new cjs.Rectangle(-616.2,-457.9,1210.2,591.3), new cjs.Rectangle(-662.6,-457.9,1316,591.3), new cjs.Rectangle(-708.9,-457.9,1421.8,591.3), rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mixer3_mc();
	this.instance.setTransform(-36.6,-202.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({x:618.3,alpha:0.012},8).to({_off:true},1).wait(1).to({_off:false},0).to({x:-36.6,alpha:1},8).wait(11));

	// animation
	this.instance_1 = new lib.mixer2_mc();
	this.instance_1.setTransform(-67,-286.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

	// animation
	this.instance_2 = new lib.wmsms_mc();
	this.instance_2.setTransform(-34,-193.6);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({alpha:1},11).wait(6).to({x:621,alpha:0.012},8).to({_off:true},1).wait(20));

	// animation
	this.instance_3 = new lib.mixer1_mc();
	this.instance_3.setTransform(-36.6,-237.6);

	this.instance_4 = new lib.mixer1_1_mc();
	this.instance_4.setTransform(-36.6,-237.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:true},1).wait(10).to({_off:false},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},1).wait(10).to({_off:true},1).wait(34));

	// animation
	this.instance_5 = new lib.watermelon4_mc();
	this.instance_5.setTransform(272.5,-202);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-34.2,x:173.5,y:-357},9).to({x:19.5,y:-360},10).to({x:-23.5,y:-195},10).to({alpha:0.012},11).to({_off:true},1).wait(34));

	// animation
	this.instance_6 = new lib.watermelon4_mc();
	this.instance_6.setTransform(172,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-41.9,x:73,y:-355},9).to({x:-81,y:-358},10).to({x:-69,y:-217},10).to({alpha:0.012},11).to({_off:true},1).wait(34));

	// animation
	this.instance_7 = new lib.watermelon4_mc();
	this.instance_7.setTransform(288,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-51.7,x:189,y:-388},9).to({x:35,y:-391},10).to({x:-15,y:-229},10).to({alpha:0.012},11).to({_off:true},1).wait(34));

	// animation
	this.instance_8 = new lib.watermelon4_mc();
	this.instance_8.setTransform(169.4,-245.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-99.5,x:70.4,y:-400.9},9).to({x:-83.6,y:-403.9},10).to({x:-67.6,y:-202.9},10).to({alpha:0.012},11).to({_off:true},1).wait(34));

	// animation
	this.instance_9 = new lib.watermelon4_mc();
	this.instance_9.setTransform(232,-256);

	this.instance_10 = new lib.berries_mc();
	this.instance_10.setTransform(606,-204.2);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-58.7,x:133,y:-411},9).to({x:-21,y:-414},10).to({x:-33,y:-195},10).to({alpha:0.012},11).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(64).to({_off:false},0).to({x:227,alpha:1},10).wait(1));

	// animation
	this.instance_11 = new lib.plate1_mc();
	this.instance_11.setTransform(223.4,-181.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({x:610.3,alpha:0.012},10).to({_off:true},1).wait(34).to({_off:false,x:602.3},0).to({x:223.4,alpha:1},10).wait(1));

	// animation
	this.instance_12 = new lib.back_podl2_mc();
	this.instance_12.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(75));

	// animation
	this.instance_13 = new lib.back_podl1_mc();
	this.instance_13.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-457.9,896,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-475.1,896,608.5), new cjs.Rectangle(-447.6,-491.7,896,625.1), new cjs.Rectangle(-447.6,-491.9,896,625.3), new cjs.Rectangle(-447.6,-492.2,896,625.6), new cjs.Rectangle(-447.6,-492.5,896,625.9), new cjs.Rectangle(-447.6,-492.8,896,626.2), new cjs.Rectangle(-447.6,-493.1,896,626.5), new cjs.Rectangle(-447.6,-493.4,896,626.8), new cjs.Rectangle(-447.6,-493.7,896,627.1), new cjs.Rectangle(-447.6,-494,896,627.4), new cjs.Rectangle(-447.6,-494.3,896,627.7), new cjs.Rectangle(-447.6,-494.7,896,628.1), new cjs.Rectangle(-447.6,-472.7,896,606.1), new cjs.Rectangle(-447.6,-457.9,896,591.3), new cjs.Rectangle(-447.6,-457.9,921.6,591.3), new cjs.Rectangle(-447.6,-457.9,960.3,591.3), new cjs.Rectangle(-447.6,-457.9,999,591.3), new cjs.Rectangle(-447.6,-457.9,1037.7,591.3), new cjs.Rectangle(-447.6,-457.9,1076.4,591.3), new cjs.Rectangle(-447.6,-457.9,1115.1,591.3), new cjs.Rectangle(-447.6,-457.9,1153.8,591.3), new cjs.Rectangle(-447.6,-457.9,1192.4,591.3), rect=new cjs.Rectangle(-447.6,-457.9,896,591.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-457.9,915.9,591.3), new cjs.Rectangle(-447.6,-457.9,997.7,591.3), new cjs.Rectangle(-447.6,-457.9,1079.6,591.3), new cjs.Rectangle(-447.6,-457.9,1161.4,591.3), new cjs.Rectangle(-447.6,-457.9,896,591.3), new cjs.Rectangle(-447.6,-457.9,1161.4,591.3), new cjs.Rectangle(-447.6,-457.9,1079.6,591.3), new cjs.Rectangle(-447.6,-457.9,997.7,591.3), new cjs.Rectangle(-447.6,-457.9,915.9,591.3), rect=new cjs.Rectangle(-447.6,-457.9,896,591.3), rect, rect, rect, new cjs.Rectangle(-447.6,-457.9,1184.4,591.3), new cjs.Rectangle(-447.6,-457.9,1146.6,591.3), new cjs.Rectangle(-447.6,-457.9,1108.7,591.3), new cjs.Rectangle(-447.6,-457.9,1070.8,591.3), new cjs.Rectangle(-447.6,-457.9,1032.9,591.3), new cjs.Rectangle(-447.6,-457.9,995,591.3), new cjs.Rectangle(-447.6,-457.9,957.1,591.3), new cjs.Rectangle(-447.6,-457.9,919.2,591.3), rect=new cjs.Rectangle(-447.6,-457.9,896,591.3), rect, rect];


(lib.animation3_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.knife_mc();
	this.instance.setTransform(15.4,21.4,0.627,0.627,-45.5);

	this.instance_1 = new lib.watermelons_mc();
	this.instance_1.setTransform(558.7,-296);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-121.6,x:-66.6,y:-431.6},9).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140).to({_off:false},0).to({x:39.7,alpha:1},9).wait(1));

	// animation
	this.instance_2 = new lib.watermelon1_mc();
	this.instance_2.setTransform(27,-281.9);

	this.instance_3 = new lib.plate1_mc();
	this.instance_3.setTransform(553.4,-249.6);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({rotation:12,x:81,y:-73,alpha:0.012},13).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140).to({_off:false},0).to({x:34.4,alpha:1},9).wait(1));

	// animation
	this.instance_4 = new lib.watermelon3_mc();
	this.instance_4.setTransform(19.4,-244.9);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({alpha:1},5).wait(9).to({rotation:19,x:-10.6,y:-175.2},5).wait(65).to({x:641.3,alpha:0.012},9).to({_off:true},1).wait(9));

	// animation
	this.instance_5 = new lib.watermelon3_mc();
	this.instance_5.setTransform(19.4,-244.9);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).to({alpha:1},5).wait(9).to({rotation:10,x:8.4,y:-207.2},5).wait(37).to({x:660.3,alpha:0.012},9).to({_off:true},1).wait(9));

	// animation
	this.instance_6 = new lib.watermelon3_mc();
	this.instance_6.setTransform(19.4,-244.9);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(103).to({_off:false},0).to({alpha:1},5).wait(9).to({rotation:4,x:18.4,y:-234.9},5).wait(9).to({x:670.3,alpha:0.012},9).to({_off:true},1).wait(9));

	// animation
	this.instance_7 = new lib.knife_mc();
	this.instance_7.setTransform(-66.6,-431.6,0.998,0.998,-121.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({rotation:-136.6,x:-2.6,y:-337.6},11).to({x:228.4,y:-282.6},11).to({rotation:-114.6,x:-83.6,y:-370.6},11).to({rotation:-147.1,x:-94.2,y:-376.6},4).to({x:207.8,y:-284.6},9).wait(10).to({rotation:-114.6,x:-83.6,y:-370.6},5).to({rotation:-147.1,x:-94.2,y:-376.6},4).to({x:207.8,y:-284.6},9).wait(10).to({rotation:-114.6,x:-83.6,y:-370.6},5).to({rotation:-147.1,x:-94.2,y:-376.6},4).to({x:207.8,y:-284.6},9).wait(10).to({x:336.8,y:-569.6,alpha:0.012},9).to({_off:true},1).wait(18));

	// animation
	this.instance_8 = new lib.watermelon2_mc();
	this.instance_8.setTransform(27,-281.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).wait(110).to({x:679,alpha:0.012},9).to({_off:true},1).wait(9));

	// animation
	this.instance_9 = new lib.desk_mc();
	this.instance_9.setTransform(27,-273.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131).to({x:679,alpha:0.012},9).to({_off:true},1).wait(9));

	// animation
	this.instance_10 = new lib.mixer3_mc();
	this.instance_10.setTransform(-172.7,66.5,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150));

	// animation
	this.instance_11 = new lib.mixer2_mc();
	this.instance_11.setTransform(-188.6,22.2,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150));

	// animation
	this.instance_12 = new lib.mixer1_mc();
	this.instance_12.setTransform(-172.7,48.1,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150));

	// animation
	this.instance_13 = new lib.back_podl2_mc();
	this.instance_13.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150));

	// animation
	this.instance_14 = new lib.back_podl1_mc();
	this.instance_14.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-433.1,896,566.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-463.6,896,597), rect=new cjs.Rectangle(-447.6,-537.5,896,670.9), rect, new cjs.Rectangle(-447.6,-531.5,896,664.9), new cjs.Rectangle(-447.6,-526.1,896,659.5), new cjs.Rectangle(-447.6,-520.1,896,653.5), new cjs.Rectangle(-447.6,-514.5,896,647.9), new cjs.Rectangle(-447.6,-508.6,896,642), new cjs.Rectangle(-447.6,-502.9,896,636.3), new cjs.Rectangle(-447.6,-496.7,896,630.1), new cjs.Rectangle(-447.6,-490.9,896,624.3), new cjs.Rectangle(-447.6,-484.5,896,617.9), new cjs.Rectangle(-447.6,-478.5,896,611.9), new cjs.Rectangle(-447.6,-472.3,896,605.7), new cjs.Rectangle(-447.6,-467,896,600.4), new cjs.Rectangle(-447.6,-462,896,595.4), new cjs.Rectangle(-447.6,-457,896,590.4), new cjs.Rectangle(-447.6,-452,896,585.4), new cjs.Rectangle(-447.6,-447,896,580.4), new cjs.Rectangle(-447.6,-442,896,575.4), new cjs.Rectangle(-447.6,-437,896,570.4), rect=new cjs.Rectangle(-447.6,-433.1,896,566.5), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-434.7,896,568.1), new cjs.Rectangle(-447.6,-438.8,896,572.2), new cjs.Rectangle(-447.6,-442.6,896,576), new cjs.Rectangle(-447.6,-446.4,896,579.8), new cjs.Rectangle(-447.6,-450,896,583.4), new cjs.Rectangle(-447.6,-453.5,896,586.9), new cjs.Rectangle(-447.6,-456.9,896,590.3), new cjs.Rectangle(-447.6,-460.5,896,593.9), new cjs.Rectangle(-447.6,-480.4,896,613.8), new cjs.Rectangle(-447.6,-498.1,896,631.5), new cjs.Rectangle(-447.6,-513.5,896,646.9), new cjs.Rectangle(-447.6,-526.1,896,659.5), new cjs.Rectangle(-447.6,-515.7,896,649.1), new cjs.Rectangle(-447.6,-505.5,896,638.9), new cjs.Rectangle(-447.6,-495.3,896,628.7), new cjs.Rectangle(-447.6,-485,896,618.4), new cjs.Rectangle(-447.6,-474.8,896,608.2), new cjs.Rectangle(-447.6,-464.6,896,598), new cjs.Rectangle(-447.6,-454.4,896,587.8), new cjs.Rectangle(-447.6,-444.1,896,577.5), new cjs.Rectangle(-447.6,-434.1,896,567.5), rect=new cjs.Rectangle(-447.6,-433.9,896,567.3), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-434.1,896,567.5), new cjs.Rectangle(-447.6,-442.4,896,575.8), new cjs.Rectangle(-447.6,-449.2,896,582.6), new cjs.Rectangle(-447.6,-454.3,896,587.7), new cjs.Rectangle(-447.6,-457.9,896,591.3), new cjs.Rectangle(-447.6,-460.5,896,593.9), new cjs.Rectangle(-447.6,-480.4,896,613.8), new cjs.Rectangle(-447.6,-498.1,896,631.5), new cjs.Rectangle(-447.6,-513.5,896,646.9), new cjs.Rectangle(-447.6,-526.1,896,659.5), new cjs.Rectangle(-447.6,-515.7,896,649.1), new cjs.Rectangle(-447.6,-505.5,896,638.9), new cjs.Rectangle(-447.6,-495.3,896,628.7), new cjs.Rectangle(-447.6,-485,896,618.4), new cjs.Rectangle(-447.6,-474.8,896,608.2), new cjs.Rectangle(-447.6,-464.6,896,598), new cjs.Rectangle(-447.6,-454.4,896,587.8), new cjs.Rectangle(-447.6,-444.1,896,577.5), new cjs.Rectangle(-447.6,-434.1,896,567.5), rect=new cjs.Rectangle(-447.6,-433.9,896,567.3), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-434.1,896,567.5), new cjs.Rectangle(-447.6,-442.4,896,575.8), new cjs.Rectangle(-447.6,-449.2,896,582.6), new cjs.Rectangle(-447.6,-454.3,896,587.7), new cjs.Rectangle(-447.6,-457.9,896,591.3), new cjs.Rectangle(-447.6,-460.5,896,593.9), new cjs.Rectangle(-447.6,-480.4,896,613.8), new cjs.Rectangle(-447.6,-498.1,896,631.5), new cjs.Rectangle(-447.6,-513.5,896,646.9), new cjs.Rectangle(-447.6,-526.1,896,659.5), new cjs.Rectangle(-447.6,-515.7,896,649.1), new cjs.Rectangle(-447.6,-505.5,896,638.9), new cjs.Rectangle(-447.6,-495.3,896,628.7), new cjs.Rectangle(-447.6,-485,896,618.4), new cjs.Rectangle(-447.6,-474.8,896,608.2), new cjs.Rectangle(-447.6,-464.6,896,598), new cjs.Rectangle(-447.6,-454.4,896,587.8), new cjs.Rectangle(-447.6,-444.1,896,577.5), new cjs.Rectangle(-447.6,-434.1,896,567.5), rect=new cjs.Rectangle(-447.6,-433.9,896,567.3), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-434.1,896,567.5), new cjs.Rectangle(-447.6,-465.6,896,599), new cjs.Rectangle(-447.6,-497.3,896,630.7), new cjs.Rectangle(-447.6,-528.9,896,662.3), new cjs.Rectangle(-447.6,-560.6,896,694), new cjs.Rectangle(-447.6,-592.3,896,725.7), new cjs.Rectangle(-447.6,-623.9,896,757.3), new cjs.Rectangle(-447.6,-655.6,896,789), new cjs.Rectangle(-447.6,-687.3,896,820.7), new cjs.Rectangle(-447.6,-719.1,896,852.5), rect=new cjs.Rectangle(-447.6,-433.1,896,566.5), rect, new cjs.Rectangle(-447.6,-433.1,926,566.5), new cjs.Rectangle(-447.6,-433.1,998.4,566.5), new cjs.Rectangle(-447.6,-433.1,1070.9,566.5), new cjs.Rectangle(-447.6,-433.1,1143.3,566.5), new cjs.Rectangle(-447.6,-433.1,1215.7,566.5), new cjs.Rectangle(-447.6,-433.1,1288.2,566.5), new cjs.Rectangle(-447.6,-433.1,1360.6,566.5), new cjs.Rectangle(-447.6,-375,1077.9,508.4), new cjs.Rectangle(-447.6,-375,1020.2,508.4), new cjs.Rectangle(-447.6,-375,962.5,508.4), new cjs.Rectangle(-447.6,-375,904.9,508.4), rect=new cjs.Rectangle(-447.6,-375,896,508.4), rect, rect, rect, rect];


(lib.animation3_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.knife_mc();
	this.instance.setTransform(15.4,21.4,0.627,0.627,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// animation
	this.instance_1 = new lib.mixer3_mc();
	this.instance_1.setTransform(-36.6,-202.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({x:538.4,alpha:0.012},11).to({x:536.4},1).to({x:-36.6,alpha:1},12).to({scaleX:0.53,scaleY:0.53,x:-172.7,y:66.5},15).wait(1));

	// animation
	this.instance_2 = new lib.mixer2_mc();
	this.instance_2.setTransform(-67,-286.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({scaleX:0.53,scaleY:0.53,x:-188.6,y:22.2},15).wait(1));

	// animation
	this.instance_3 = new lib.pinsm_mc();
	this.instance_3.setTransform(-35,-194.9);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({alpha:1},19).wait(1).to({x:540,alpha:0.012},11).to({_off:true},1).wait(28));

	// animation
	this.instance_4 = new lib.mixer1_mc();
	this.instance_4.setTransform(-36.6,-237.6);

	this.instance_5 = new lib.mixer1_1_mc();
	this.instance_5.setTransform(-36.6,-237.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:true},1).wait(19).to({_off:false},1).wait(24).to({scaleX:0.53,scaleY:0.53,x:-172.7,y:48.1},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},1).wait(19).to({_off:true},1).wait(40));

	// animation
	this.instance_6 = new lib.pinapple6_mc();
	this.instance_6.setTransform(284,-213.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:209,y:-326.1},9).to({rotation:-53.2,x:190,y:-364.1},10).to({x:-1,y:-336},10).to({x:-44,y:-180},10).to({alpha:0.012},19).to({_off:true},1).wait(41));

	// animation
	this.instance_7 = new lib.pinapple6_mc();
	this.instance_7.setTransform(193,-213.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:118,y:-326.1},9).to({rotation:-77.2,x:17.5,y:-359.8},10).to({x:-47.5,y:-343.1},10).to({x:-67.1,y:-229.1},10).to({alpha:0.012},19).to({_off:true},1).wait(41));

	// animation
	this.instance_8 = new lib.pinapple6_mc();
	this.instance_8.setTransform(244,-232.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:169,y:-345.5},9).to({rotation:-43.5,x:124,y:-349.5},10).to({x:26,y:-331.5},10).to({x:-8,y:-177.5},10).to({alpha:0.012},19).to({_off:true},1).wait(41));

	// animation
	this.instance_9 = new lib.pinapple6_mc();
	this.instance_9.setTransform(299,-243.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:224,y:-356.5},9).to({rotation:-38.2,x:185,y:-395.5},10).to({x:-80,y:-303.5},10).to({x:-68,y:-189.5},10).to({alpha:0.012},19).to({_off:true},1).wait(41));

	// animation
	this.instance_10 = new lib.pinapple6_mc();
	this.instance_10.setTransform(182.4,-246.9);

	this.instance_11 = new lib.watermelon1_mc();
	this.instance_11.setTransform(27,-569.9);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:107.4,y:-359.9},9).to({rotation:-72.5,x:82.4,y:-365.9},10).to({x:-6.6,y:-340.9},10).to({y:-221.9},10).to({alpha:0.012},19).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(84).to({_off:false},0).to({y:-281.9,alpha:1},15).wait(1));

	// animation
	this.instance_12 = new lib.pinapple6_mc();
	this.instance_12.setTransform(250,-266.5);

	this.instance_13 = new lib.desk_mc();
	this.instance_13.setTransform(668,-275.4);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:175,y:-379.5},9).to({rotation:-67,x:123,y:-401.5},10).to({x:-19,y:-364.5},10).to({x:-41.8,y:-219.8},10).to({alpha:0.012},19).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(84).to({_off:false},0).to({x:27,y:-273.6,alpha:1},15).wait(1));

	// animation
	this.instance_14 = new lib.plate1_mc();
	this.instance_14.setTransform(240.4,-201.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(39).to({x:609.3,alpha:0.012},10).to({_off:true},1).wait(50));

	// animation
	this.instance_15 = new lib.back_podl2_mc();
	this.instance_15.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(100));

	// animation
	this.instance_16 = new lib.back_podl1_mc();
	this.instance_16.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-457.9,896,591.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-458.8,896,592.2), new cjs.Rectangle(-447.6,-460,896,593.4), new cjs.Rectangle(-447.6,-460.6,896,594), rect=new cjs.Rectangle(-447.6,-457.9,896,591.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-457.9,896.3,591.3), new cjs.Rectangle(-447.6,-457.9,933.2,591.3), new cjs.Rectangle(-447.6,-457.9,970.1,591.3), new cjs.Rectangle(-447.6,-457.9,1007,591.3), new cjs.Rectangle(-447.6,-457.9,1043.9,591.3), new cjs.Rectangle(-447.6,-457.9,1080.8,591.3), new cjs.Rectangle(-447.6,-457.9,1117.7,591.3), new cjs.Rectangle(-447.6,-457.9,1154.6,591.3), new cjs.Rectangle(-447.6,-457.9,1191.4,591.3), rect=new cjs.Rectangle(-447.6,-457.9,896,591.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-457.9,924.7,591.3), new cjs.Rectangle(-447.6,-457.9,977,591.3), new cjs.Rectangle(-447.6,-457.9,1029.3,591.3), new cjs.Rectangle(-447.6,-457.9,1081.5,591.3), new cjs.Rectangle(-447.6,-457.9,1079.5,591.3), new cjs.Rectangle(-447.6,-457.9,1031.8,591.3), new cjs.Rectangle(-447.6,-457.9,984,591.3), new cjs.Rectangle(-447.6,-457.9,936.3,591.3), rect=new cjs.Rectangle(-447.6,-457.9,896,591.3), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-674.9,1349.6,808.3), new cjs.Rectangle(-447.6,-655.7,1306.9,789.1), new cjs.Rectangle(-447.6,-636.5,1264.2,769.9), new cjs.Rectangle(-447.6,-617.3,1221.4,750.7), new cjs.Rectangle(-447.6,-598.1,1178.7,731.5), new cjs.Rectangle(-447.6,-578.9,1135.9,712.3), new cjs.Rectangle(-447.6,-559.7,1093.2,693.1), new cjs.Rectangle(-447.6,-540.5,1050.5,673.9), new cjs.Rectangle(-447.6,-521.3,1007.8,654.7), new cjs.Rectangle(-447.6,-502.1,965.1,635.5), new cjs.Rectangle(-447.6,-482.9,922.3,616.3), new cjs.Rectangle(-447.6,-463.7,896,597.1), new cjs.Rectangle(-447.6,-444.5,896,577.9), new cjs.Rectangle(-447.6,-433.3,896,566.7), new cjs.Rectangle(-447.6,-433.2,896,566.6), new cjs.Rectangle(-447.6,-433.1,896,566.5)];


(lib.animation3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.knife_mc();
	this.instance.setTransform(65.4,-350.6,0.998,0.998,-44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-65.7,x:46.4,y:-342.6},12).to({_off:true},1).wait(95).to({_off:false,x:-41.6,y:-356.6},0).to({scaleX:0.63,scaleY:0.63,rotation:-45.5,x:15.4,y:21.4},12).wait(16));

	// animation
	this.instance_1 = new lib.pinapple5_mc();
	this.instance_1.setTransform(-127.1,-279.5);

	this.instance_2 = new lib.mixer_all_mc();
	this.instance_2.setTransform(-196,24,0.212,0.212);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({x:490.9,alpha:0.012},12).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,alpha:1},14).wait(1));

	// animation
	this.instance_3 = new lib.knife_mc();
	this.instance_3.setTransform(-6.6,-355.6,0.998,0.998,-65.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(76).to({_off:false},0).to({x:-41.6,y:-356.6},7).to({x:-39.6,y:-185.6},10).to({x:-2.6},7).to({x:-41.6,y:-356.6},7).to({_off:true},1).wait(28));

	// animation
	this.instance_4 = new lib.pinapple_mc();
	this.instance_4.setTransform(-105.6,-280.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(93).to({rotation:13.2,x:-47.6,y:-279.6},7).wait(7).to({x:570.4,alpha:0.012},12).to({_off:true},1).wait(16));

	// animation
	this.instance_5 = new lib.knife_mc();
	this.instance_5.setTransform(46.4,-342.6,0.998,0.998,-65.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.pinapples_mc();
	this.instance_6.setTransform(631.6,-239.8);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({_off:false},0).to({x:-6.6,y:-355.6},6).to({x:-11.6,y:-193.6},12).to({x:49.4,y:-191.6},8).to({x:-6.6,y:-355.6},6).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(121).to({_off:false},0).to({x:6.7,alpha:1},14).wait(1));

	// animation
	this.instance_7 = new lib.pinapple3_mc();
	this.instance_7.setTransform(-82.6,-281.6);

	this.instance_8 = new lib.plate1_mc();
	this.instance_8.setTransform(631.3,-201.6);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61).to({rotation:11,x:-10.6,y:-282.6},8).wait(38).to({x:607.4,alpha:0.012},12).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(121).to({_off:false},0).to({x:6.4,alpha:1},14).wait(1));

	// animation
	this.instance_9 = new lib.knife_mc();
	this.instance_9.setTransform(46.4,-342.6,0.998,0.998,-65.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({rotation:-77.4,x:19.4,y:-198.6},11).to({x:116.4,y:-199.6},9).to({rotation:-65.7,x:46.4,y:-342.6},8).to({_off:true},1).wait(93));

	// animation
	this.instance_10 = new lib.pinapple2_mc();
	this.instance_10.setTransform(90.4,-281.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({x:187.4,y:-282.6},9).wait(73).to({x:805.4,alpha:0.012},12).to({_off:true},1).wait(16));

	// animation
	this.instance_11 = new lib.desk_mc();
	this.instance_11.setTransform(20,-274.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(107).to({x:638,alpha:0.012},12).to({_off:true},1).wait(16));

	// animation
	this.instance_12 = new lib.back_podl2_mc();
	this.instance_12.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(136));

	// animation
	this.instance_13 = new lib.back_podl1_mc();
	this.instance_13.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-483.9,896,617.3);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-479.8,896,613.2), new cjs.Rectangle(-447.6,-476,896,609.4), new cjs.Rectangle(-447.6,-472.1,896,605.5), new cjs.Rectangle(-447.6,-468,896,601.4), new cjs.Rectangle(-447.6,-463.9,896,597.3), new cjs.Rectangle(-447.6,-459.6,896,593), new cjs.Rectangle(-447.6,-455.2,896,588.6), new cjs.Rectangle(-447.6,-450.3,896,583.7), new cjs.Rectangle(-447.6,-445.9,896,579.3), new cjs.Rectangle(-447.6,-441.1,896,574.5), new cjs.Rectangle(-447.6,-436.3,896,569.7), rect=new cjs.Rectangle(-447.6,-434.1,896,567.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-435.9,896,569.3), new cjs.Rectangle(-447.6,-438,896,571.4), new cjs.Rectangle(-447.6,-440.2,896,573.6), new cjs.Rectangle(-447.6,-442.4,896,575.8), new cjs.Rectangle(-447.6,-444.7,896,578.1), rect=new cjs.Rectangle(-447.6,-434.1,896,567.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-444.7,896,578.1), rect, rect, new cjs.Rectangle(-447.6,-444.9,896,578.3), new cjs.Rectangle(-447.6,-445,896,578.4), new cjs.Rectangle(-447.6,-445.1,896,578.5), new cjs.Rectangle(-447.6,-445.3,896,578.7), new cjs.Rectangle(-447.6,-445.4,896,578.8), new cjs.Rectangle(-447.6,-445.7,896,579.1), rect=new cjs.Rectangle(-447.6,-434.1,896,567.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-445.7,896,579.1), rect, new cjs.Rectangle(-447.6,-434.1,945.5,567.5), new cjs.Rectangle(-447.6,-434.1,997,567.5), new cjs.Rectangle(-447.6,-434.1,1048.5,567.5), new cjs.Rectangle(-447.6,-434.1,1100,567.5), new cjs.Rectangle(-447.6,-434.1,1151.5,567.5), new cjs.Rectangle(-447.6,-434.1,1203,567.5), new cjs.Rectangle(-447.6,-434.1,1254.5,567.5), new cjs.Rectangle(-447.6,-434.1,1306,567.5), new cjs.Rectangle(-447.6,-434.1,1357.5,567.5), new cjs.Rectangle(-447.6,-434.1,1409,567.5), new cjs.Rectangle(-447.6,-434.1,1460.5,567.5), new cjs.Rectangle(-447.6,-132.6,896,266), new cjs.Rectangle(-447.6,-307,1213.4,440.4), new cjs.Rectangle(-447.6,-307,1168.8,440.4), new cjs.Rectangle(-447.6,-307,1124.2,440.4), new cjs.Rectangle(-447.6,-307,1079.6,440.4), new cjs.Rectangle(-447.6,-307,1034.9,440.4), new cjs.Rectangle(-447.6,-307,990.3,440.4), new cjs.Rectangle(-447.6,-307,945.6,440.4), new cjs.Rectangle(-447.6,-307,901,440.4), rect=new cjs.Rectangle(-447.6,-307,896,440.4), rect, rect, rect, rect, rect, rect];


(lib.animation3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_133 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(133).call(this.frame_133).wait(1));

	// animation
	this.instance = new lib.go_mc();
	this.instance.setTransform(24,13,0.38,0.38);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({scaleX:1.14,scaleY:1.14},3).to({scaleX:1,scaleY:1},3).wait(1));

	// animation
	this.instance_1 = new lib.heart_mc();
	this.instance_1.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:84.4,y:-36.6},10).wait(24).to({x:318.4,y:-234.6,alpha:0.012},10).to({_off:true},1).wait(28));

	// animation
	this.instance_2 = new lib.heart_mc();
	this.instance_2.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:23.4,y:-36.6},10).wait(36).to({x:247.4,y:-308.6,alpha:0.012},10).to({_off:true},1).wait(22));

	// animation
	this.instance_3 = new lib.heart_mc();
	this.instance_3.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:-37.6,y:-36.6},10).wait(49).to({x:322.4,y:-144.6,alpha:0.012},10).to({_off:true},1).wait(15));

	// animation
	this.instance_4 = new lib.smile1_mc();
	this.instance_4.setTransform(193.4,-144.6,0.424,0.424);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).to({scaleX:1.22,scaleY:1.22},3).to({scaleX:1,scaleY:1},3).wait(48));

	// animation
	this.instance_5 = new lib.focuspocus1_mc();
	this.instance_5.setTransform(20,-155.9,0.145,0.145);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({scaleX:0.51,scaleY:0.51,alpha:1},7).to({scaleX:0.56,scaleY:0.56},2).to({scaleX:0.51,scaleY:0.51},2).wait(94));

	// animation
	this.instance_6 = new lib.smile5_mc();
	this.instance_6.setTransform(-153,-149.6,0.66,0.66,0,0,180);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},11).to({scaleX:1.12,scaleY:1.12},2).to({scaleX:1,scaleY:1},2).wait(105));

	// animation
	this.instance_7 = new lib.win1_mc();
	this.instance_7.setTransform(16.4,336.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-151.6},10).to({y:-154.6},2).to({y:-151.6},2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-302.6,142.4,638,388);
p.frameBounds = [rect, new cjs.Rectangle(-302.6,93.6,638,388), new cjs.Rectangle(-302.6,44.8,638,388), new cjs.Rectangle(-302.6,-4,638,388), new cjs.Rectangle(-302.6,-52.8,638,388), new cjs.Rectangle(-302.6,-101.6,638,388), new cjs.Rectangle(-302.6,-150.4,638,388), new cjs.Rectangle(-302.6,-199.2,638,388), new cjs.Rectangle(-302.6,-248,638,388), new cjs.Rectangle(-302.6,-296.8,638,388), new cjs.Rectangle(-302.6,-345.6,638,388), new cjs.Rectangle(-302.6,-347.1,638,388), new cjs.Rectangle(-302.6,-348.6,638,388), new cjs.Rectangle(-302.6,-347.1,638,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-302.6,-345.6,646,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-302.6,-345.6,650,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, new cjs.Rectangle(-302.6,-345.6,638,389.2), new cjs.Rectangle(-302.6,-345.6,638,393.1), new cjs.Rectangle(-302.6,-345.6,638,397), new cjs.Rectangle(-302.6,-345.6,638,400.8), new cjs.Rectangle(-302.6,-345.6,638,404.7), new cjs.Rectangle(-302.6,-345.6,638,408.6), new cjs.Rectangle(-302.6,-345.6,638,410.9), new cjs.Rectangle(-302.6,-345.6,638,413.3), new cjs.Rectangle(-302.6,-345.6,638,415.6), new cjs.Rectangle(-302.6,-345.6,638,413.3), new cjs.Rectangle(-302.6,-345.6,638,410.9), new cjs.Rectangle(-302.6,-345.6,638,408.6)];


(lib.animation2_60_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.stakan_krishka_mc();
	this.instance.setTransform(-152.6,-232.1,1,1,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

	// animation
	this.instance_1 = new lib.glazur15_mc();
	this.instance_1.setTransform(310,-196.7,0.7,0.7,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-8.7,x:117,y:-471.7},9).to({rotation:-8.7,x:151,y:-457.3},5).to({x:99,y:-479.3},6).to({x:131,y:-520.7},5).to({rotation:47.3,x:321,y:-613.7,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.slivki3_mc();
	this.instance_2.setTransform(35.9,-323.2,0.422,0.422,0,0,0,0,44);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1},16).wait(14));

	// animation
	this.instance_3 = new lib.slivki2_mc();
	this.instance_3.setTransform(-29.6,-327.6,1,1,0,0,0,-66,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39));

	// animation
	this.instance_4 = new lib.stakan_mc();
	this.instance_4.setTransform(35,-231.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39));

	// animation
	this.instance_5 = new lib.solominka_mc();
	this.instance_5.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39));

	// animation
	this.instance_6 = new lib.slivki1_mc();
	this.instance_6.setTransform(-31.6,-302.6,1,1,0,0,0,-67,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39));

	// animation
	this.instance_7 = new lib.tea6_mc();
	this.instance_7.setTransform(35.4,-218.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-345.1,903.8,478.5);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-370.3,896,503.7), new cjs.Rectangle(-447.6,-397.2,896,530.6), new cjs.Rectangle(-447.6,-423.1,896,556.5), new cjs.Rectangle(-447.6,-447.8,896,581.2), new cjs.Rectangle(-447.6,-471.9,896,605.3), new cjs.Rectangle(-447.6,-495,896,628.4), new cjs.Rectangle(-447.6,-517.1,896,650.5), new cjs.Rectangle(-447.6,-552.8,896,686.2), new cjs.Rectangle(-447.6,-591.3,896,724.7), new cjs.Rectangle(-447.6,-588.2,896,721.6), new cjs.Rectangle(-447.6,-585.4,896,718.8), new cjs.Rectangle(-447.6,-582.5,896,715.9), new cjs.Rectangle(-447.6,-579.6,896,713), new cjs.Rectangle(-447.6,-576.9,896,710.3), new cjs.Rectangle(-447.6,-580.4,896,713.8), new cjs.Rectangle(-447.6,-584.1,896,717.5), new cjs.Rectangle(-447.6,-587.7,896,721.1), new cjs.Rectangle(-447.6,-591.4,896,724.8), new cjs.Rectangle(-447.6,-595.1,896,728.5), new cjs.Rectangle(-447.6,-598.9,896,732.3), new cjs.Rectangle(-447.6,-607,896,740.4), new cjs.Rectangle(-447.6,-615.2,896,748.6), new cjs.Rectangle(-447.6,-623.5,896,756.9), new cjs.Rectangle(-447.6,-631.8,896,765.2), new cjs.Rectangle(-447.6,-640.3,896,773.7), new cjs.Rectangle(-447.6,-640.5,896,773.9), new cjs.Rectangle(-447.6,-642.1,896,775.5), new cjs.Rectangle(-447.6,-658.1,896,791.5), new cjs.Rectangle(-447.6,-673,896,806.4), new cjs.Rectangle(-447.6,-687.3,896,820.7), new cjs.Rectangle(-447.6,-700.9,896,834.3), new cjs.Rectangle(-447.6,-713.3,896,846.7), new cjs.Rectangle(-447.6,-724.9,896,858.3), new cjs.Rectangle(-447.6,-735.6,896,869), new cjs.Rectangle(-447.6,-745.3,896,878.7), new cjs.Rectangle(-447.6,-754.1,900.9,887.5), new cjs.Rectangle(-447.6,-762.1,917,895.5), new cjs.Rectangle(-447.6,-411.7,896,545.1)];


(lib.animation2_52_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.stakan_krishka_mc();
	this.instance.setTransform(-152.6,-232.1,1,1,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

	// animation
	this.instance_1 = new lib.glazur15_mc();
	this.instance_1.setTransform(283,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

	// animation
	this.instance_2 = new lib.glazur2_mc();
	this.instance_2.setTransform(124,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41));

	// animation
	this.instance_3 = new lib.tap_plate_mc();
	this.instance_3.setTransform(-35.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41));

	// animation
	this.instance_4 = new lib.solominka_mc();
	this.instance_4.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41));

	// animation
	this.instance_5 = new lib.stakan_mc();
	this.instance_5.setTransform(35,-231.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41));

	// animation
	this.instance_6 = new lib.water5_mc();
	this.instance_6.setTransform(37.7,-574.5,0.861,0.861);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({x:35,y:-418.5},9).to({scaleX:0.58,y:-277.5,alpha:0.012},12).to({_off:true},1).wait(12));

	// animation
	this.instance_7 = new lib.plate2_mc();
	this.instance_7.setTransform(38.4,-576.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({x:35.7,y:-420.6},9).wait(12).to({y:-628.6,alpha:0.012},10).to({_off:true},1).wait(2));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AuWpcIAAhBIB3AAIAAgFIa2AAIAABGg");
	var mask_graphics_17 = new cjs.Graphics().p("AuWoBIAAjpIB3AAIAAgSIa2AAIAAD7g");
	var mask_graphics_18 = new cjs.Graphics().p("AuWmnIAAmRIB3AAIAAgfIa2AAIAAGwg");
	var mask_graphics_19 = new cjs.Graphics().p("AuWlNIAAo4IB3AAIAAgsIa2AAIAAJkg");
	var mask_graphics_20 = new cjs.Graphics().p("AuWjyIAArhIB3AAIAAg4Ia2AAIAAMZg");
	var mask_graphics_21 = new cjs.Graphics().p("AuWiYIAAuIIB3AAIAAhGIa2AAIAAPOg");
	var mask_graphics_22 = new cjs.Graphics().p("AuWg+IAAwwIB3AAIAAhSIa2AAIAASCg");
	var mask_graphics_23 = new cjs.Graphics().p("AuWAbIAAzWIB3AAIAAhgIa2AAIAAU2g");
	var mask_graphics_24 = new cjs.Graphics().p("AuWB1IAA1+IB3AAIAAhsIa2AAIAAXqg");
	var mask_graphics_25 = new cjs.Graphics().p("AuWDQIAA4mIB3AAIAAh6Ia2AAIAAagg");
	var mask_graphics_26 = new cjs.Graphics().p("AuWEqIAA7OIB3AAIAAiGIa2AAIAAdUg");
	var mask_graphics_27 = new cjs.Graphics().p("AuWGEIAA91IB3AAIAAiTIa2AAMAAAAgIg");
	var mask_graphics_28 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_29 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_30 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_31 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_32 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_33 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_34 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_35 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_36 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_37 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_38 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_39 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");
	var mask_graphics_40 = new cjs.Graphics().p("AuWHfMAAAggdIB3AAIAAigIa2AAMAAAAi9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:35,y:-67.5}).wait(1).to({graphics:mask_graphics_17,x:35,y:-76.6}).wait(1).to({graphics:mask_graphics_18,x:35,y:-85.6}).wait(1).to({graphics:mask_graphics_19,x:35,y:-94.6}).wait(1).to({graphics:mask_graphics_20,x:35,y:-103.7}).wait(1).to({graphics:mask_graphics_21,x:35,y:-112.7}).wait(1).to({graphics:mask_graphics_22,x:35,y:-121.8}).wait(1).to({graphics:mask_graphics_23,x:35,y:-130.8}).wait(1).to({graphics:mask_graphics_24,x:35,y:-139.9}).wait(1).to({graphics:mask_graphics_25,x:35,y:-148.9}).wait(1).to({graphics:mask_graphics_26,x:35,y:-157.9}).wait(1).to({graphics:mask_graphics_27,x:35,y:-167}).wait(1).to({graphics:mask_graphics_28,x:35,y:-176}).wait(1).to({graphics:mask_graphics_29,x:35,y:-176}).wait(1).to({graphics:mask_graphics_30,x:35,y:-176}).wait(1).to({graphics:mask_graphics_31,x:35,y:-176}).wait(1).to({graphics:mask_graphics_32,x:35,y:-176}).wait(1).to({graphics:mask_graphics_33,x:35,y:-176}).wait(1).to({graphics:mask_graphics_34,x:35,y:-176}).wait(1).to({graphics:mask_graphics_35,x:35,y:-176}).wait(1).to({graphics:mask_graphics_36,x:35,y:-176}).wait(1).to({graphics:mask_graphics_37,x:35,y:-176}).wait(1).to({graphics:mask_graphics_38,x:35,y:-176}).wait(1).to({graphics:mask_graphics_39,x:35,y:-176}).wait(1).to({graphics:mask_graphics_40,x:35,y:-176}).wait(1));

	// animation
	this.instance_8 = new lib.tea5_mc();
	this.instance_8.setTransform(35.4,-218.6);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).wait(25));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-337.7,896,471.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-679.1,896,812.5), new cjs.Rectangle(-447.6,-661.7,896,795.1), new cjs.Rectangle(-447.6,-644.4,896,777.8), new cjs.Rectangle(-447.6,-627.1,896,760.5), new cjs.Rectangle(-447.6,-609.7,896,743.1), new cjs.Rectangle(-447.6,-592.4,896,725.8), new cjs.Rectangle(-447.6,-575.1,896,708.5), new cjs.Rectangle(-447.6,-557.7,896,691.1), new cjs.Rectangle(-447.6,-540.4,896,673.8), rect=new cjs.Rectangle(-447.6,-523.1,896,656.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-543.9,896,677.3), new cjs.Rectangle(-447.6,-564.7,896,698.1), new cjs.Rectangle(-447.6,-585.5,896,718.9), new cjs.Rectangle(-447.6,-606.3,896,739.7), new cjs.Rectangle(-447.6,-627.1,896,760.5), new cjs.Rectangle(-447.6,-647.9,896,781.3), new cjs.Rectangle(-447.6,-668.7,896,802.1), new cjs.Rectangle(-447.6,-689.5,896,822.9), new cjs.Rectangle(-447.6,-710.3,896,843.7), new cjs.Rectangle(-447.6,-731.1,896,864.5), rect=new cjs.Rectangle(-447.6,-337.7,896,471.1), rect];


(lib.animation2_46_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.colors1_2_mc();
	this.instance.setTransform(250.4,-380.4,1,1,-76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({rotation:-22.8,x:634.7,y:-444.9,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.colors1_3_mc();
	this.instance_1.setTransform(303.5,-405.3,1,1,-76.7,0,0,-24.6,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:281.5,y:-393.3},9).wait(8).to({x:303.5,y:-405.3},5).wait(27).to({regX:-24.5,regY:-21.1,rotation:-22.8,x:686.1,y:-416.7,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.kaplya2_mc();
	this.instance_2.setTransform(174.4,-323.6,0.32,0.32);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,x:173.4,y:-312.6},8).to({y:-264.6,alpha:0.012},5).to({_off:true},1).wait(9).to({_off:false,scaleX:0.32,scaleY:0.32,x:174.4,y:-323.6,alpha:1},0).to({scaleX:0.52,scaleY:0.52,x:173.4,y:-312.6},8).to({y:-264.6,alpha:0.012},5).to({_off:true},1).wait(19));

	// animation
	this.instance_3 = new lib.cook7_mc();
	this.instance_3.setTransform(164.3,-272.8,0.454,0.454);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({alpha:1},29).wait(19));

	// animation
	this.instance_4 = new lib.cook3_mc();
	this.instance_4.setTransform(164.3,-272.8,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(163.5,-274,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65));

	// animation
	this.instance_6 = new lib.cook3_mc();
	this.instance_6.setTransform(-113.7,-272.8,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65));

	// animation
	this.instance_7 = new lib.plate2_mc();
	this.instance_7.setTransform(-114.5,-274,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-457.2,896,590.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-447.6,-457.1,896,590.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-457.2,896,590.6), rect=new cjs.Rectangle(-447.6,-457.1,896,590.5), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-457.2,896,590.6), rect=new cjs.Rectangle(-447.6,-457.1,896,590.5), rect, rect, rect, new cjs.Rectangle(-447.6,-457.2,896,590.6), rect=new cjs.Rectangle(-447.6,-457.1,896,590.5), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-457.2,896,590.6), rect=new cjs.Rectangle(-447.6,-457.1,896,590.5), rect, rect, rect, new cjs.Rectangle(-447.6,-457.2,896,590.6), rect=new cjs.Rectangle(-447.6,-457.1,896,590.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-457.2,896,590.6), new cjs.Rectangle(-447.6,-464.9,896,598.3), new cjs.Rectangle(-447.6,-472.4,896,605.8), new cjs.Rectangle(-447.6,-479.6,896,613), new cjs.Rectangle(-447.6,-486.3,920.8,619.7), new cjs.Rectangle(-447.6,-492.7,949.3,626.1), new cjs.Rectangle(-447.6,-498.6,977.6,632), new cjs.Rectangle(-447.6,-504.2,1005.6,637.6), new cjs.Rectangle(-447.6,-509.3,1033.4,642.7), new cjs.Rectangle(-447.6,-513.9,1060.7,647.3), new cjs.Rectangle(-447.6,-518.2,1087.9,651.6), new cjs.Rectangle(-447.6,-522.2,1114.7,655.6), new cjs.Rectangle(-447.6,-525.6,1141.1,659), new cjs.Rectangle(-447.6,-528.7,1167.4,662.1), new cjs.Rectangle(-447.6,-531.5,1193.4,664.9), new cjs.Rectangle(-447.6,-357,896,490.4)];


(lib.animation2_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.colors_mc();
	this.instance.setTransform(10.4,19.4,0.26,0.26);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(1));

	// animation
	this.instance_1 = new lib.cook3_mc();
	this.instance_1.setTransform(607.3,-272.8,0.454,0.454);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({x:164.3},10).wait(10));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(606.5,-274,0.81,0.81);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({x:163.5},10).wait(10));

	// animation
	this.instance_3 = new lib.cook3_mc();
	this.instance_3.setTransform(-525.6,-272.8,0.454,0.454);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({x:-113.7},10).wait(10));

	// animation
	this.instance_4 = new lib.plate2_mc();
	this.instance_4.setTransform(-526.4,-274,0.81,0.81);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({x:-114.5},10).wait(10));

	// animation
	this.instance_5 = new lib.venchik_mc();
	this.instance_5.setTransform(72,-343.6,0.999,0.999,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:77,y:-396.6},7).to({x:118,y:-355.6},8).to({x:84,y:-307.6},8).to({x:37,y:-342.6},7).to({x:71,y:-404.6},8).to({x:134,y:-355.6},8).to({x:89,y:-305.6},9).to({x:34,y:-343.6},10).to({x:525,y:-338.6,alpha:0.012},13).to({_off:true},1).wait(41));

	// animation
	this.instance_6 = new lib.cook3_mc();
	this.instance_6.setTransform(21.4,-276.1,0.561,0.561);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:90.8,alpha:0.5},15).to({rotation:180.8,alpha:0.699},15).to({rotation:265.5,alpha:1},16).to({rotation:352.4},19).wait(24).to({x:657.3,alpha:0.699},11).to({_off:true},1).wait(19));

	// animation
	this.instance_7 = new lib.milk3_mc();
	this.instance_7.setTransform(20,-275.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:true},2).wait(74));

	// animation
	this.instance_8 = new lib.plate2_mc();
	this.instance_8.setTransform(20.4,-277.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({x:656.3,alpha:0.699},11).to({_off:true},1).wait(19));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-475.6,896,609);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-483,896,616.4), new cjs.Rectangle(-447.6,-490.6,896,624), new cjs.Rectangle(-447.6,-498.2,896,631.6), new cjs.Rectangle(-447.6,-505.8,896,639.2), new cjs.Rectangle(-447.6,-513.3,896,646.7), new cjs.Rectangle(-447.6,-520.9,896,654.3), new cjs.Rectangle(-447.6,-528.6,896,662), new cjs.Rectangle(-447.6,-523.3,896,656.7), new cjs.Rectangle(-447.6,-518.2,896,651.6), new cjs.Rectangle(-447.6,-513.1,896,646.5), new cjs.Rectangle(-447.6,-508,896,641.4), new cjs.Rectangle(-447.6,-502.8,896,636.2), new cjs.Rectangle(-447.6,-497.7,896,631.1), new cjs.Rectangle(-447.6,-492.6,896,626), new cjs.Rectangle(-447.6,-487.6,896,621), new cjs.Rectangle(-447.6,-481.5,896,614.9), new cjs.Rectangle(-447.6,-475.5,896,608.9), new cjs.Rectangle(-447.6,-469.5,896,602.9), new cjs.Rectangle(-447.6,-463.5,896,596.9), new cjs.Rectangle(-447.6,-457.5,896,590.9), new cjs.Rectangle(-447.6,-451.5,896,584.9), new cjs.Rectangle(-447.6,-445.5,896,578.9), new cjs.Rectangle(-447.6,-439.6,896,573), new cjs.Rectangle(-447.6,-444.5,896,577.9), new cjs.Rectangle(-447.6,-449.5,896,582.9), new cjs.Rectangle(-447.6,-454.5,896,587.9), new cjs.Rectangle(-447.6,-459.5,896,592.9), new cjs.Rectangle(-447.6,-464.5,896,597.9), new cjs.Rectangle(-447.6,-469.5,896,602.9), new cjs.Rectangle(-447.6,-474.6,896,608), new cjs.Rectangle(-447.6,-482.3,896,615.7), new cjs.Rectangle(-447.6,-490,896,623.4), new cjs.Rectangle(-447.6,-497.8,896,631.2), new cjs.Rectangle(-447.6,-505.5,896,638.9), new cjs.Rectangle(-447.6,-513.3,896,646.7), new cjs.Rectangle(-447.6,-521,896,654.4), new cjs.Rectangle(-447.6,-528.8,896,662.2), new cjs.Rectangle(-447.6,-536.6,896,670), new cjs.Rectangle(-447.6,-530.3,896,663.7), new cjs.Rectangle(-447.6,-524.2,896,657.6), new cjs.Rectangle(-447.6,-518.1,896,651.5), new cjs.Rectangle(-447.6,-512,896,645.4), new cjs.Rectangle(-447.6,-505.8,896,639.2), new cjs.Rectangle(-447.6,-499.7,896,633.1), new cjs.Rectangle(-447.6,-493.6,896,627), new cjs.Rectangle(-447.6,-487.6,896,621), new cjs.Rectangle(-447.6,-481.9,896,615.3), new cjs.Rectangle(-447.6,-476.4,896,609.8), new cjs.Rectangle(-447.6,-470.8,896,604.2), new cjs.Rectangle(-447.6,-465.3,896,598.7), new cjs.Rectangle(-447.6,-459.7,896,593.1), new cjs.Rectangle(-447.6,-454.1,896,587.5), new cjs.Rectangle(-447.6,-448.6,896,582), new cjs.Rectangle(-447.6,-443,896,576.4), new cjs.Rectangle(-447.6,-437.6,896,571), new cjs.Rectangle(-447.6,-441.3,896,574.7), new cjs.Rectangle(-447.6,-445.1,896,578.5), new cjs.Rectangle(-447.6,-448.9,896,582.3), new cjs.Rectangle(-447.6,-452.7,896,586.1), new cjs.Rectangle(-447.6,-456.5,896,589.9), new cjs.Rectangle(-447.6,-460.3,896,593.7), new cjs.Rectangle(-447.6,-464.1,896,597.5), new cjs.Rectangle(-447.6,-467.9,896,601.3), new cjs.Rectangle(-447.6,-471.7,896,605.1), new cjs.Rectangle(-447.6,-475.6,896,609), new cjs.Rectangle(-447.6,-475.1,896,608.5), new cjs.Rectangle(-447.6,-474.8,896,608.2), new cjs.Rectangle(-447.6,-474.4,896,607.8), new cjs.Rectangle(-447.6,-474,896,607.4), new cjs.Rectangle(-447.6,-473.6,896,607), new cjs.Rectangle(-447.6,-473.2,896,606.6), new cjs.Rectangle(-447.6,-472.8,896,606.2), new cjs.Rectangle(-447.6,-472.4,896,605.8), new cjs.Rectangle(-447.6,-472.1,919.2,605.5), new cjs.Rectangle(-447.6,-471.7,956.9,605.1), new cjs.Rectangle(-447.6,-471.3,994.7,604.7), new cjs.Rectangle(-447.6,-470.9,1032.4,604.3), new cjs.Rectangle(-447.6,-470.6,1070.4,604), rect=new cjs.Rectangle(-447.6,-380.1,896,513.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-380.1,917.4,513.5), new cjs.Rectangle(-447.6,-380.1,975.2,513.5), new cjs.Rectangle(-447.6,-380.1,1033,513.5), new cjs.Rectangle(-447.6,-380.1,1090.8,513.5), new cjs.Rectangle(-447.6,-380.1,1148.7,513.5), new cjs.Rectangle(-609.4,-380.1,1368.3,513.5), new cjs.Rectangle(-568.1,-356.9,1213.3,490.3), new cjs.Rectangle(-526.9,-356.9,1127.8,490.3), new cjs.Rectangle(-485.7,-356.9,1042.3,490.3), new cjs.Rectangle(-447.6,-356.9,959.9,490.3), new cjs.Rectangle(-447.6,-356.9,915.6,490.3), rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, rect, rect, new cjs.Rectangle(-447.6,-357,896,490.4), rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-357,896,490.4)];


(lib.animation2_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.water2_mc();
	this.instance.setTransform(-131,-281.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:50},11).to({scaleX:1.15,scaleY:0.95,x:83,y:-279.9},3).to({scaleY:0.59,x:159,y:-270.9},7).to({scaleX:0.48,scaleY:0.5,x:220,y:-267.9,alpha:0.012},12).to({_off:true},1).wait(16));

	// animation
	this.instance_1 = new lib.t_mc();
	this.instance_1.setTransform(-130,-274.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:51},11).to({x:107,y:-278.5},3).to({scaleX:0.94,scaleY:0.94,x:218.9,y:-266.5},7).wait(29));

	// animation
	this.instance_2 = new lib.skovorodka_mc();
	this.instance_2.setTransform(-222.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-41.6},11).to({scaleX:0.91,x:-22.6},3).wait(19).to({scaleX:1,x:-91.6},6).to({x:-616.6,y:-295.9,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.sito_mc();
	this.instance_3.setTransform(264.4,-222.9,0.998,0.998,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// animation
	this.instance_4 = new lib.water2_mc();
	this.instance_4.setTransform(219,-268.5,0.393,0.393);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({scaleX:0.59,scaleY:0.59},16).wait(16));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(219.4,-269.6,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.plita_mc();
	this.instance_6.setTransform(-130.6,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-737.6,alpha:0.012},11).to({_off:true},1).wait(38));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-454.2,-437.6,902.6,571), new cjs.Rectangle(-509.3,-437.6,957.7,571), new cjs.Rectangle(-564.5,-437.6,1012.9,571), new cjs.Rectangle(-619.7,-437.6,1068.1,571), new cjs.Rectangle(-674.9,-437.6,1123.3,571), new cjs.Rectangle(-730,-437.6,1178.4,571), new cjs.Rectangle(-785.2,-437.6,1233.6,571), new cjs.Rectangle(-840.4,-437.6,1288.8,571), new cjs.Rectangle(-895.6,-437.6,1344,571), rect=new cjs.Rectangle(-447.6,-407.9,896,541.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-409.1,896,542.5), new cjs.Rectangle(-447.6,-410.3,896,543.7), new cjs.Rectangle(-482.1,-411.5,930.5,544.9), new cjs.Rectangle(-540.4,-412.8,988.8,546.2), new cjs.Rectangle(-598.8,-414,1047.2,547.4), new cjs.Rectangle(-657.1,-415.2,1105.5,548.6), new cjs.Rectangle(-715.4,-416.4,1163.8,549.8), new cjs.Rectangle(-773.7,-417.7,1222.1,551.1), new cjs.Rectangle(-832.1,-418.9,1280.5,552.3), new cjs.Rectangle(-447.6,-358.4,896,491.8)];


(lib.animation2_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sito_mc();
	this.instance.setTransform(27.4,25.1,0.724,0.724,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

	// animation
	this.instance_1 = new lib.t1_mc();
	this.instance_1.setTransform(209,-264.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-30},14).to({x:-83,y:-267.5},3).to({x:-130,y:-274.5},4).to({_off:true},1).wait(20));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(210.4,-269.6,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-28.6},14).to({scaleX:0.6},3).wait(4).to({scaleX:0.7,x:43.4},3).to({x:219.4},11).wait(7));

	// animation
	this.instance_3 = new lib.water2_mc();
	this.instance_3.setTransform(-131,-281.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42));

	// animation
	this.instance_4 = new lib.t_mc();
	this.instance_4.setTransform(-130,-274.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({alpha:1},10).wait(2));

	// animation
	this.instance_5 = new lib.t1_mc();
	this.instance_5.setTransform(-130,-274.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).wait(8).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.skovorodka_mc();
	this.instance_6.setTransform(-222.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42));

	// animation
	this.instance_7 = new lib.plita_mc();
	this.instance_7.setTransform(-130.6,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.water5_mc();
	this.instance.setTransform(-134,-281.9);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-7,y:-287.9},9).to({scaleX:1.05,scaleY:0.91,x:36.1,y:-294.9},6).to({scaleX:0.91,scaleY:0.56,x:96.1,y:-303.9},10).to({scaleX:0.52,scaleY:0.53,x:145.1,alpha:0.012},14).to({_off:true},1).wait(32));

	// animation
	this.instance_1 = new lib.tea_mc();
	this.instance_1.setTransform(-128.6,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.6,y:-293.6},9).to({scaleX:0.9,x:62.9,y:-303.6},6).to({scaleX:0.79,scaleY:0.79,x:138.9,y:-310.6},10).to({scaleX:0.63,scaleY:0.63,x:149.9,y:-308.6},14).wait(20).to({x:557.9,y:-290.6,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.skovorodka_mc();
	this.instance_2.setTransform(-225.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-98.6,y:-290.9},9).to({scaleX:0.9,x:-77.6},6).wait(24).to({scaleX:1,x:-152.6},6).to({x:-626.6,alpha:0.012},13).to({_off:true},1).wait(13));

	// animation
	this.instance_3 = new lib.sito_mc();
	this.instance_3.setTransform(189.4,-257.9,0.998,0.998,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({x:597.3,y:-239.9,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.water5_mc();
	this.instance_4.setTransform(156,-299.9,0.444,0.444);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({scaleX:0.83,scaleY:0.83,x:167,y:-276.9},14).wait(33));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(166.4,-279.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-407.9,896,541.3);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-408.5,896,541.9), new cjs.Rectangle(-447.6,-409.2,896,542.6), new cjs.Rectangle(-447.6,-409.9,896,543.3), new cjs.Rectangle(-447.6,-410.5,896,543.9), new cjs.Rectangle(-447.6,-411.2,896,544.6), new cjs.Rectangle(-447.6,-411.9,896,545.3), new cjs.Rectangle(-447.6,-412.5,896,545.9), new cjs.Rectangle(-447.6,-413.2,896,546.6), rect=new cjs.Rectangle(-447.6,-413.9,896,547.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-477.5,-413.9,925.9,547.3), new cjs.Rectangle(-514,-413.9,962.4,547.3), new cjs.Rectangle(-550.4,-413.9,998.8,547.3), new cjs.Rectangle(-586.9,-413.9,1035.3,547.3), new cjs.Rectangle(-623.3,-413.9,1071.7,547.3), new cjs.Rectangle(-659.8,-413.9,1108.2,547.3), new cjs.Rectangle(-696.2,-413.9,1144.6,547.3), new cjs.Rectangle(-732.7,-413.9,1181.1,547.3), new cjs.Rectangle(-769.2,-413.9,1217.6,547.3), new cjs.Rectangle(-805.6,-413.9,1254,547.3), new cjs.Rectangle(-842.1,-413.9,1290.5,547.3), new cjs.Rectangle(-447.6,-393.4,896,526.8), new cjs.Rectangle(-447.6,-391.5,896,524.9), new cjs.Rectangle(-447.6,-389.9,896,523.3), new cjs.Rectangle(-447.6,-388.2,896,521.6), new cjs.Rectangle(-447.6,-386.6,920,520), new cjs.Rectangle(-447.6,-384.9,957.1,518.3), new cjs.Rectangle(-447.6,-383.3,994.2,516.7), new cjs.Rectangle(-447.6,-382.1,1031.3,515.5), new cjs.Rectangle(-447.6,-382.1,1068.4,515.5), new cjs.Rectangle(-447.6,-382.1,1105.4,515.5), new cjs.Rectangle(-447.6,-382.1,1142.5,515.5), new cjs.Rectangle(-447.6,-382.1,1179.9,515.5), new cjs.Rectangle(-447.6,-382.1,896,515.5)];


(lib.animation2_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.milk2_mc();
	this.instance.setTransform(104.4,-296.9);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},6).wait(10).to({alpha:0.012},4).to({_off:true},1).wait(15));

	// animation
	this.instance_1 = new lib.milk1_mc();
	this.instance_1.setTransform(213.4,-284.6,1,1,-48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.94,x:154.4,y:-290.6},9).wait(20).to({x:498.4,y:-283.6,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(12.4,19.4,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// animation
	this.instance_3 = new lib.sito_mc();
	this.instance_3.setTransform(232.4,25.1,0.724,0.724,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// animation
	this.instance_4 = new lib.water5_mc();
	this.instance_4.setTransform(18,-281.9);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({alpha:0.898},10).wait(20));

	// animation
	this.instance_5 = new lib.water2_mc();
	this.instance_5.setTransform(18,-281.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({alpha:0.012},10).to({_off:true},1).wait(19));

	// animation
	this.instance_6 = new lib.tea_mc();
	this.instance_6.setTransform(23.4,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

	// animation
	this.instance_7 = new lib.skovorodka_mc();
	this.instance_7.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45));

	// animation
	this.instance_8 = new lib.plita_mc();
	this.instance_8.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-437.6,907,571), new cjs.Rectangle(-447.6,-437.6,931.6,571), new cjs.Rectangle(-447.6,-437.6,956.2,571), new cjs.Rectangle(-447.6,-437.6,980.8,571), new cjs.Rectangle(-447.6,-437.6,1005.4,571), new cjs.Rectangle(-447.6,-437.6,1030.1,571), new cjs.Rectangle(-447.6,-437.6,896,571)];


(lib.animation2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.milk1_mc();
	this.instance.setTransform(-190.6,21.4,0.286,0.286);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({scaleX:0.81,scaleY:0.81},9).wait(17));

	// animation
	this.instance_1 = new lib.plate2_mc();
	this.instance_1.setTransform(12.4,19.4,0.307,0.307);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({scaleX:0.77,scaleY:0.77},9).wait(9));

	// animation
	this.instance_2 = new lib.sito_mc();
	this.instance_2.setTransform(232.4,25.1,0.28,0.28,-44.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({scaleX:0.72,scaleY:0.72},9).wait(1));

	// animation
	this.instance_3 = new lib.water6_mc();
	this.instance_3.setTransform(226,-278,1,1,-42.2);

	this.instance_4 = new lib.water7_mc();
	this.instance_4.setTransform(146,-286,0.941,0.947,-42.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:167,y:-279},9).to({scaleX:0.94,scaleY:0.95,x:159,y:-281},4).to({_off:true,x:146,y:-286},1).wait(9).to({_off:false,x:159,y:-281},1).to({x:514,y:-288,alpha:0.012},14).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},1).wait(9).to({_off:true,x:159,y:-281},1).wait(56));

	// animation
	this.instance_5 = new lib.water2_mc();
	this.instance_5.setTransform(18,-281.9);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32).to({_off:false},0).to({alpha:1},8).wait(40));

	// animation
	this.instance_6 = new lib.water1_mc();
	this.instance_6.setTransform(52.4,-283.9,0.353,0.353);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,x:18,y:-281.9},10).wait(8).to({alpha:0.012},8).to({_off:true},1).wait(39));

	// animation
	this.instance_7 = new lib.karame_mc();
	this.instance_7.setTransform(18.4,-286.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({alpha:0.012},8).to({_off:true},1).wait(47));

	// animation
	this.instance_8 = new lib.tea_mc();
	this.instance_8.setTransform(23.4,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.skovorodka_mc();
	this.instance_9.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// animation
	this.instance_10 = new lib.plita_mc();
	this.instance_10.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.back_podl2_mc();
	this.instance_11.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// animation
	this.instance_12 = new lib.back_podl1_mc();
	this.instance_12.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-437.6,919.1,571), new cjs.Rectangle(-447.6,-437.6,944.4,571), new cjs.Rectangle(-447.6,-437.6,969.8,571), new cjs.Rectangle(-447.6,-437.6,995.1,571), new cjs.Rectangle(-447.6,-437.6,1020.5,571), new cjs.Rectangle(-447.6,-437.6,1045.9,571), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.water6_mc();
	this.instance.setTransform(336,27.4,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

	// animation
	this.instance_1 = new lib.spoon_inv_mc();
	this.instance_1.setTransform(288,-352.9,1,1,-105.3);

	this.instance_2 = new lib.spoon_inv2_mc();
	this.instance_2.setTransform(284,-340.9,1,1,-105.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:284,y:-340.9},4).wait(8).to({_off:false,x:77.2,y:-330.9},3).to({x:288,y:-352.9},7).to({_off:true,x:284,y:-340.9},4).wait(8).to({_off:false,x:77.2,y:-378.9},3).to({x:288,y:-352.9},6).to({_off:true,x:284,y:-340.9},4).wait(8).to({_off:false,x:32.2,y:-349.9},3).to({rotation:-45.3,x:439.2,y:-484.9,alpha:0.012},10).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},4).to({x:90.2,y:-339.9},8).to({_off:true,x:77.2,y:-330.9},3).wait(7).to({_off:false,x:284,y:-340.9},4).to({x:77.2,y:-378.9},8).to({_off:true},3).wait(6).to({_off:false,x:284,y:-340.9},4).to({x:32.2,y:-349.9},8).to({_off:true},3).wait(43));

	// animation
	this.instance_3 = new lib.sugar1_mc();
	this.instance_3.setTransform(24.4,-242.6,0.409,0.409);

	this.instance_4 = new lib.sugar1_mc();
	this.instance_4.setTransform(24.4,-242.6,0.409,0.409);

	this.instance_5 = new lib.s5_mc();
	this.instance_5.setTransform(12.2,-268.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{x:24.4,y:-242.6}}]},15).to({state:[{t:this.instance_4},{t:this.instance_3,p:{x:35.4,y:-293.6}}]},22).to({state:[{t:this.instance_5}]},21).to({state:[{t:this.instance_5}]},19).to({state:[{t:this.instance_5}]},22).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).wait(19).to({scaleY:0.79,alpha:0.012},22).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.karame_mc();
	this.instance_6.setTransform(18.4,-286.6);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77).to({_off:false},0).to({alpha:1},23).wait(1));

	// animation
	this.instance_7 = new lib.sugar_mc();
	this.instance_7.setTransform(251.4,-235.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({x:584.3,y:-175.6,alpha:0.012},10).to({_off:true},1).wait(32));

	// animation
	this.instance_8 = new lib.tea_mc();
	this.instance_8.setTransform(23.4,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(101));

	// animation
	this.instance_9 = new lib.skovorodka_mc();
	this.instance_9.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(101));

	// animation
	this.instance_10 = new lib.plita_mc();
	this.instance_10.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(101));

	// animation
	this.instance_11 = new lib.back_podl2_mc();
	this.instance_11.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101));

	// animation
	this.instance_12 = new lib.back_podl1_mc();
	this.instance_12.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-439.5,896,572.9), new cjs.Rectangle(-447.6,-444.2,896,577.6), new cjs.Rectangle(-447.6,-449.1,896,582.5), rect=new cjs.Rectangle(-447.6,-449,896,582.4), rect, new cjs.Rectangle(-447.6,-449.1,896,582.5), new cjs.Rectangle(-447.6,-444.6,896,578), new cjs.Rectangle(-447.6,-440.3,896,573.7), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-444.9,896,578.3), new cjs.Rectangle(-447.6,-466.2,912.7,599.6), new cjs.Rectangle(-447.6,-486.7,946,620.1), new cjs.Rectangle(-447.6,-506.5,979.3,639.9), new cjs.Rectangle(-447.6,-525.5,1012.6,658.9), new cjs.Rectangle(-447.6,-543.6,1045.9,677), new cjs.Rectangle(-447.6,-560.7,1079.2,694.1), new cjs.Rectangle(-447.6,-577.1,1112.4,710.5), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_133 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(133).call(this.frame_133).wait(1));

	// animation
	this.instance = new lib.go_mc();
	this.instance.setTransform(24,13,0.38,0.38);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({scaleX:1.14,scaleY:1.14},3).to({scaleX:1,scaleY:1},3).wait(1));

	// animation
	this.instance_1 = new lib.heart_mc();
	this.instance_1.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:84.4,y:-36.6},10).wait(24).to({x:318.4,y:-234.6,alpha:0.012},10).to({_off:true},1).wait(28));

	// animation
	this.instance_2 = new lib.heart_mc();
	this.instance_2.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:23.4,y:-36.6},10).wait(36).to({x:247.4,y:-308.6,alpha:0.012},10).to({_off:true},1).wait(22));

	// animation
	this.instance_3 = new lib.heart_mc();
	this.instance_3.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:-37.6,y:-36.6},10).wait(49).to({x:322.4,y:-144.6,alpha:0.012},10).to({_off:true},1).wait(15));

	// animation
	this.instance_4 = new lib.smile1_mc();
	this.instance_4.setTransform(193.4,-144.6,0.424,0.424);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).to({scaleX:1.22,scaleY:1.22},3).to({scaleX:1,scaleY:1},3).wait(48));

	// animation
	this.instance_5 = new lib.booba_tea_mc();
	this.instance_5.setTransform(16,-160.5,0.35,0.35);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({scaleX:0.74,scaleY:0.74},7).to({scaleX:0.8,scaleY:0.8},2).to({scaleX:0.74,scaleY:0.74},2).wait(94));

	// animation
	this.instance_6 = new lib.smile4_mc();
	this.instance_6.setTransform(-158,-142.6,0.377,0.377);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},11).to({scaleX:1.17,scaleY:1.17},2).to({scaleX:1,scaleY:1},2).wait(105));

	// animation
	this.instance_7 = new lib.win1_mc();
	this.instance_7.setTransform(16.4,336.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-151.6},10).to({y:-154.6},2).to({y:-151.6},2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-302.6,142.4,638,388);
p.frameBounds = [rect, new cjs.Rectangle(-302.6,93.6,638,388), new cjs.Rectangle(-302.6,44.8,638,388), new cjs.Rectangle(-302.6,-4,638,388), new cjs.Rectangle(-302.6,-52.8,638,388), new cjs.Rectangle(-302.6,-101.6,638,388), new cjs.Rectangle(-302.6,-150.4,638,388), new cjs.Rectangle(-302.6,-199.2,638,388), new cjs.Rectangle(-302.6,-248,638,388), new cjs.Rectangle(-302.6,-296.8,638,388), new cjs.Rectangle(-302.6,-345.6,638,388), new cjs.Rectangle(-302.6,-347.1,638,388), new cjs.Rectangle(-302.6,-348.6,638,388), new cjs.Rectangle(-302.6,-347.1,638,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-302.6,-345.6,646,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-302.6,-345.6,650,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, new cjs.Rectangle(-302.6,-345.6,638,389.2), new cjs.Rectangle(-302.6,-345.6,638,393.1), new cjs.Rectangle(-302.6,-345.6,638,397), new cjs.Rectangle(-302.6,-345.6,638,400.8), new cjs.Rectangle(-302.6,-345.6,638,404.7), new cjs.Rectangle(-302.6,-345.6,638,408.6), new cjs.Rectangle(-302.6,-345.6,638,410.9), new cjs.Rectangle(-302.6,-345.6,638,413.3), new cjs.Rectangle(-302.6,-345.6,638,415.6), new cjs.Rectangle(-302.6,-345.6,638,413.3), new cjs.Rectangle(-302.6,-345.6,638,410.9), new cjs.Rectangle(-302.6,-345.6,638,408.6)];


(lib.animation1_74_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cup2_mc();
	this.instance.setTransform(6.5,-149.3,1.667,1.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.flower4_mc();
	this.instance_1.setTransform(16.3,68.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// animation
	this.instance_2 = new lib.flower1_mc();
	this.instance_2.setTransform(-230,-104.5,1,1,109.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:60.2,x:-181,y:-331.5},9).to({x:57.8,y:-340.2},10).to({rotation:8,x:14.8,y:-301.2},10).wait(1));

	// animation
	this.instance_3 = new lib.flower1_mc();
	this.instance_3.setTransform(-271,-123.5,1,1,69.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:9.3,x:-241,y:-364.5},9).to({rotation:-43.7,x:-60.5,y:-344.5},10).to({x:-26,y:-292.4},10).wait(1));

	// animation
	this.instance_4 = new lib.flower1_mc();
	this.instance_4.setTransform(-223,-134.5,1,1,111.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:75.7,x:-193,y:-375.5},9).to({rotation:6.8,x:-6.2,y:-354.5},10).to({rotation:34,x:44.5,y:-294.6},10).wait(1));

	// animation
	this.instance_5 = new lib.flower1_mc();
	this.instance_5.setTransform(-259,-158.9,1,1,69.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:5.3,x:-229,y:-399.9},9).to({rotation:5.3,x:-10.2,y:-389.9},10).to({rotation:-10.5,x:-7.2,y:-304.9},10).wait(1));

	// animation
	this.instance_6 = new lib.leaf_mc();
	this.instance_6.setTransform(9.6,-238.5,1,0.677);

	this.instance_7 = new lib.leaf_mc();
	this.instance_7.setTransform(-48,-255.5,0.744,1,0,89.1,67.3);

	this.instance_8 = new lib.leaf_mc();
	this.instance_8.setTransform(70.4,-256.9,0.735,1,0,-90,-70.4);

	this.instance_9 = new lib.white_part1_mc();
	this.instance_9.setTransform(9.2,-155.7,1.01,1.01);

	this.instance_10 = new lib.purple_part1_mc();
	this.instance_10.setTransform(9.8,-207.7,1.006,1.006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-314.5,-279.4,504,414.8);
p.frameBounds = [rect, new cjs.Rectangle(-311.9,-279.4,501.4,414.8), new cjs.Rectangle(-308.7,-279.4,498.2,414.8), new cjs.Rectangle(-304.9,-282.1,494.4,417.5), new cjs.Rectangle(-300.5,-310,490,445.4), new cjs.Rectangle(-295.7,-337.1,485.2,472.5), new cjs.Rectangle(-290.1,-363.7,479.6,499.1), new cjs.Rectangle(-284.1,-389.5,473.6,524.9), new cjs.Rectangle(-277.6,-414.7,467.1,550.1), new cjs.Rectangle(-270.7,-439.5,460.2,574.9), new cjs.Rectangle(-249.3,-438.5,438.8,573.9), new cjs.Rectangle(-229.7,-437.5,419.2,572.9), new cjs.Rectangle(-215,-436.5,404.5,571.9), new cjs.Rectangle(-200,-435.5,389.5,570.9), new cjs.Rectangle(-184.8,-434.5,374.3,569.9), new cjs.Rectangle(-176.5,-433.5,366,568.9), new cjs.Rectangle(-176.5,-432.5,366,567.9), new cjs.Rectangle(-176.5,-431.5,366,566.9), new cjs.Rectangle(-176.5,-430.5,366,565.9), new cjs.Rectangle(-176.5,-429.5,366,564.9), new cjs.Rectangle(-176.5,-420.3,366,555.7), new cjs.Rectangle(-176.5,-411.3,366,546.7), new cjs.Rectangle(-176.5,-402.2,366,537.6), new cjs.Rectangle(-176.5,-393.9,366,529.3), new cjs.Rectangle(-176.5,-386,366,521.4), new cjs.Rectangle(-176.5,-378,366,513.4), new cjs.Rectangle(-176.5,-370.2,366,505.6), new cjs.Rectangle(-176.5,-362.2,366,497.6), new cjs.Rectangle(-176.5,-354.2,366,489.6), new cjs.Rectangle(-176.5,-346.1,366,481.5)];


(lib.animation1_72_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cup2_mc();
	this.instance.setTransform(6.5,-149.3,1.667,1.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// animation
	this.instance_1 = new lib.flower4_mc();
	this.instance_1.setTransform(16.3,68.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// animation
	this.instance_2 = new lib.flowers2_mc();
	this.instance_2.setTransform(-246.9,-132.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// animation
	this.instance_3 = new lib.leaf_mc();
	this.instance_3.setTransform(309.6,-100.5,1,1,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:229.6,y:-333.5},9).to({rotation:-10.7,x:-0.4,y:-326.5},13).to({scaleY:0.68,rotation:0,x:9.6,y:-238.5},17).wait(1));

	// animation
	this.instance_4 = new lib.leaf_mc();
	this.instance_4.setTransform(256,-127.5,1,1,-105.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:182,y:-372.5},9).to({rotation:-263.9,x:-94,y:-377.5},13).to({scaleX:0.74,rotation:-360,skewX:89.1,skewY:67.3,x:-48,y:-255.5},17).wait(1));

	// animation
	this.instance_5 = new lib.leaf_mc();
	this.instance_5.setTransform(312.4,-151.9,1,1,-82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:296.4,y:-383.9},9).to({rotation:-96.7,x:100.4,y:-368.9},13).to({scaleX:0.74,rotation:0,skewX:-90,skewY:-70.4,x:70.4,y:-256.9},17).wait(1));

	// animation
	this.instance_6 = new lib.white_part1_mc();
	this.instance_6.setTransform(9.2,-155.7,1.01,1.01);

	this.instance_7 = new lib.purple_part1_mc();
	this.instance_7.setTransform(9.8,-207.7,1.006,1.006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-314.5,-274.8,677.3,410.2);
p.frameBounds = [rect, new cjs.Rectangle(-314.5,-274.8,675.4,410.2), new cjs.Rectangle(-314.5,-274.8,673.7,410.2), new cjs.Rectangle(-314.5,-274.8,671.9,410.2), new cjs.Rectangle(-314.5,-293.2,670.1,428.6), new cjs.Rectangle(-314.5,-319,668.3,454.4), new cjs.Rectangle(-314.5,-344.8,666.6,480.2), new cjs.Rectangle(-314.5,-370.6,664.8,506), new cjs.Rectangle(-314.5,-396.3,663,531.7), new cjs.Rectangle(-314.5,-422.2,661.3,557.6), new cjs.Rectangle(-314.5,-423.4,645.6,558.8), new cjs.Rectangle(-314.5,-428,630,563.4), new cjs.Rectangle(-314.5,-430.2,614.4,565.6), new cjs.Rectangle(-314.5,-429.9,598.7,565.3), new cjs.Rectangle(-314.5,-427.1,583.1,562.5), new cjs.Rectangle(-314.5,-421.9,567.4,557.3), new cjs.Rectangle(-314.5,-427,551.8,562.4), new cjs.Rectangle(-314.5,-431,537.4,566.4), new cjs.Rectangle(-314.5,-432.5,522.9,567.9), new cjs.Rectangle(-314.5,-431.6,508.4,567), new cjs.Rectangle(-314.5,-428.1,504,563.5), new cjs.Rectangle(-314.5,-422.3,504,557.7), new cjs.Rectangle(-314.5,-414.7,504,550.1), new cjs.Rectangle(-314.5,-406.7,504,542.1), new cjs.Rectangle(-314.5,-398.7,504,534.1), new cjs.Rectangle(-314.5,-390.9,504,526.3), new cjs.Rectangle(-314.5,-382.8,504,518.2), new cjs.Rectangle(-314.5,-374.8,504,510.2), new cjs.Rectangle(-314.5,-366.8,504,502.2), new cjs.Rectangle(-314.5,-358.6,504,494), new cjs.Rectangle(-314.5,-350.7,504,486.1), new cjs.Rectangle(-314.5,-342.4,504,477.8), new cjs.Rectangle(-314.5,-334.3,504,469.7), new cjs.Rectangle(-314.5,-326.2,504,461.6), new cjs.Rectangle(-314.5,-318,504,453.4), new cjs.Rectangle(-314.5,-309.9,504,445.3), new cjs.Rectangle(-314.5,-302,504,437.4), new cjs.Rectangle(-314.5,-294.4,504,429.8), new cjs.Rectangle(-314.5,-286.9,504,422.3), new cjs.Rectangle(-314.5,-279.4,504,414.8)];


(lib.animation1_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.microwave2_mc();
	this.instance.setTransform(30.5,30.9,0.272,0.272);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,alpha:1},10).to({scaleX:0.62,scaleY:0.62},2).to({scaleX:0.56,scaleY:0.56},2).wait(1));

	// animation
	this.instance_1 = new lib.cup21_mc();
	this.instance_1.setTransform(-585.9,-282.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({x:-175},11).wait(4));

	// animation
	this.instance_2 = new lib.cup11_mc();
	this.instance_2.setTransform(-585.4,-294.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({x:-174.5},11).wait(4));

	// animation
	this.instance_3 = new lib.ch1_mc();
	this.instance_3.setTransform(632.5,-294.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({x:188.5,y:-295},11).wait(4));

	// animation
	this.instance_4 = new lib.plate1_mc();
	this.instance_4.setTransform(634.5,-265.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({x:190.5,y:-266},11).wait(4));

	// animation
	this.instance_5 = new lib.cup2_mc();
	this.instance_5.setTransform(8,-225.6,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({scaleX:0.96,scaleY:0.96,x:-237.5,y:32.6},7).wait(16));

	// animation
	this.instance_6 = new lib.colors1_2_mc();
	this.instance_6.setTransform(242.8,13.9,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

	// animation
	this.instance_7 = new lib.colors1_3_mc();
	this.instance_7.setTransform(293.2,51.7,1,1,-11.2,0,0,-18.9,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70));

	// animation
	this.instance_8 = new lib.cook7_mc();
	this.instance_8.setTransform(305.4,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:10.4,y:-417.4},10).to({scaleY:0.65,y:-365.4},9).to({scaleX:0.78,scaleY:0.31,y:-281.4,alpha:0.012},10).to({_off:true},1).wait(40));

	// animation
	this.instance_9 = new lib.plate2_mc();
	this.instance_9.setTransform(304.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:9.4,y:-419.6},10).wait(20).to({x:392.2,y:-350.6,alpha:0.012},11).to({_off:true},1).wait(28));

	// animation
	this.instance_10 = new lib.white_part1_mc();
	this.instance_10.setTransform(10.3,-230.9,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({scaleX:0.58,scaleY:0.58,x:-235.9,y:29},7).wait(16));

	// animation
	this.instance_11 = new lib.purple_part1_mc();
	this.instance_11.setTransform(10.8,-274.6,0.845,0.845);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({alpha:1},11).wait(17).to({scaleX:0.58,scaleY:0.58,x:-235.6,y:-0.9},7).wait(16));

	// animation
	this.instance_12 = new lib.back_podl2_mc();
	this.instance_12.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// animation
	this.instance_13 = new lib.back_podl1_mc();
	this.instance_13.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-388.9,896,522.3), new cjs.Rectangle(-447.6,-403.7,896,537.1), new cjs.Rectangle(-447.6,-418.5,896,551.9), new cjs.Rectangle(-447.6,-433.3,896,566.7), new cjs.Rectangle(-447.6,-448.1,896,581.5), new cjs.Rectangle(-447.6,-462.9,896,596.3), new cjs.Rectangle(-447.6,-477.7,896,611.1), new cjs.Rectangle(-447.6,-492.5,896,625.9), new cjs.Rectangle(-447.6,-507.3,896,640.7), rect=new cjs.Rectangle(-447.6,-522.1,896,655.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-515.8,896,649.2), new cjs.Rectangle(-447.6,-509.5,896,642.9), new cjs.Rectangle(-447.6,-503.3,896,636.7), new cjs.Rectangle(-447.6,-497,896,630.4), new cjs.Rectangle(-447.6,-490.7,896,624.1), new cjs.Rectangle(-447.6,-484.4,896,617.8), new cjs.Rectangle(-447.6,-478.2,896,611.6), new cjs.Rectangle(-447.6,-471.9,896,605.3), new cjs.Rectangle(-447.6,-465.6,896,599), new cjs.Rectangle(-447.6,-459.3,907.6,592.7), new cjs.Rectangle(-447.6,-453.1,942.4,586.5), rect=new cjs.Rectangle(-447.6,-330.9,896,464.3), rect, rect, rect, rect, new cjs.Rectangle(-447.6,-331,896,464.4), new cjs.Rectangle(-447.6,-289.3,896,422.7), new cjs.Rectangle(-447.6,-247.7,896,381.1), new cjs.Rectangle(-447.6,-206.1,896,339.5), new cjs.Rectangle(-447.6,-164.4,896,297.8), rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, rect, new cjs.Rectangle(-699.9,-386.4,1468.9,519.8), new cjs.Rectangle(-662.6,-386.4,1391.2,519.8), new cjs.Rectangle(-625.2,-386.4,1313.5,519.8), new cjs.Rectangle(-587.8,-386.4,1235.7,519.8), new cjs.Rectangle(-550.5,-386.4,1158,519.8), new cjs.Rectangle(-513.1,-386.4,1080.3,519.8), new cjs.Rectangle(-475.8,-386.4,1002.6,519.8), new cjs.Rectangle(-447.6,-386.4,934.1,519.8), rect=new cjs.Rectangle(-447.6,-386.4,896,519.8), rect, rect, rect, rect, rect, rect];


(lib.animation1_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cup2_mc();
	this.instance.setTransform(8,-225.6,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43));

	// animation
	this.instance_1 = new lib.colors1_2_mc();
	this.instance_1.setTransform(242.8,13.9,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43));

	// animation
	this.instance_2 = new lib.colors1_3_mc();
	this.instance_2.setTransform(293.2,51.7,1,1,-11.2,0,0,-18.9,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43));

	// animation
	this.instance_3 = new lib.cook7_mc();
	this.instance_3.setTransform(305.4,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43));

	// animation
	this.instance_4 = new lib.plate2_mc();
	this.instance_4.setTransform(304.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43));

	// animation
	this.instance_5 = new lib.white_part1_mc();
	this.instance_5.setTransform(10.3,-230.9,0.848,0.848);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({alpha:1},9).wait(14));

	// animation
	this.instance_6 = new lib.cook6_mc();
	this.instance_6.setTransform(-282.1,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:9.9,y:-419.3},9).to({scaleY:0.64,y:-302.3},11).to({scaleX:0.62,scaleY:0.25,x:14.9,y:-233.3,alpha:0.012},9).to({_off:true},1).wait(13));

	// animation
	this.instance_7 = new lib.plate2_mc();
	this.instance_7.setTransform(-283.1,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:8.9,y:-421.5},9).wait(20).to({x:-520.1,y:-384.5,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-390.7,896,524.1), new cjs.Rectangle(-447.6,-407.4,896,540.8), new cjs.Rectangle(-447.6,-424,896,557.4), new cjs.Rectangle(-447.6,-440.7,896,574.1), new cjs.Rectangle(-447.6,-457.4,896,590.8), new cjs.Rectangle(-447.6,-474,896,607.4), new cjs.Rectangle(-447.6,-490.7,896,624.1), new cjs.Rectangle(-447.6,-507.3,896,640.7), rect=new cjs.Rectangle(-447.6,-524,896,657.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-520.9,896,654.3), new cjs.Rectangle(-447.6,-517.8,896,651.2), new cjs.Rectangle(-447.6,-514.7,896,648.1), new cjs.Rectangle(-447.6,-511.6,896,645), new cjs.Rectangle(-447.6,-508.6,896,642), new cjs.Rectangle(-447.6,-505.5,896,638.9), new cjs.Rectangle(-447.6,-502.4,896,635.8), new cjs.Rectangle(-447.6,-499.3,896,632.7), new cjs.Rectangle(-490.3,-496.2,938.7,629.6), new cjs.Rectangle(-534.4,-493.1,982.8,626.5), new cjs.Rectangle(-578.5,-490.1,1026.9,623.5), new cjs.Rectangle(-622.6,-487,1071,620.4), new cjs.Rectangle(-447.6,-374.1,896,507.5)];


(lib.animation1_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.cup2_mc();
	this.instance.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// animation
	this.instance_1 = new lib.colors1_2_mc();
	this.instance_1.setTransform(235.6,-340.9,1,1,-87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({rotation:-11.2,x:242.8,y:13.9},9).wait(1));

	// animation
	this.instance_2 = new lib.colors1_3_mc();
	this.instance_2.setTransform(284,-381.1,1,1,-87.7,0,0,-18.9,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:265,y:-363.1},14).to({x:284,y:-381.1},6).to({x:265,y:-363.1},14).to({x:284,y:-381.1},6).to({rotation:-11.2,x:293.2,y:51.7},9).wait(1));

	// animation
	this.instance_3 = new lib.kaplya2_mc();
	this.instance_3.setTransform(167.4,-282.6,0.08,0.08,0,0,0,0,-41.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:169.4,y:-280.6},9).to({y:-259.6,alpha:0.012},6).to({_off:true},1).wait(7).to({_off:false,scaleX:0.08,scaleY:0.08,x:167.4,y:-282.6,alpha:1},0).to({scaleX:0.5,scaleY:0.5,x:169.4,y:-280.6},9).to({y:-259.6,alpha:0.012},6).to({_off:true},1).wait(6));

	// animation
	this.instance_4 = new lib.cook7_mc();
	this.instance_4.setTransform(168.4,-269.4,0.45,0.45);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({alpha:1},22).wait(7));

	// animation
	this.instance_5 = new lib.cook6_mc();
	this.instance_5.setTransform(168.4,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:true},1).wait(7));

	// animation
	this.instance_6 = new lib.plate2_mc();
	this.instance_6.setTransform(167.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.cook6_mc();
	this.instance_7.setTransform(-120.6,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.plate2_mc();
	this.instance_8.setTransform(-121.6,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-422.1,896,555.5);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-420.7,896,554.1), new cjs.Rectangle(-447.6,-419.5,896,552.9), new cjs.Rectangle(-447.6,-418.2,896,551.6), new cjs.Rectangle(-447.6,-416.9,896,550.3), new cjs.Rectangle(-447.6,-415.6,896,549), new cjs.Rectangle(-447.6,-414.3,896,547.7), new cjs.Rectangle(-447.6,-413,896,546.4), new cjs.Rectangle(-447.6,-411.7,896,545.1), new cjs.Rectangle(-447.6,-410.5,896,543.9), new cjs.Rectangle(-447.6,-409.2,896,542.6), new cjs.Rectangle(-447.6,-407.9,896,541.3), new cjs.Rectangle(-447.6,-406.6,896,540), new cjs.Rectangle(-447.6,-406.5,896,539.9), new cjs.Rectangle(-447.6,-406.6,896,540), new cjs.Rectangle(-447.6,-407.1,896,540.5), new cjs.Rectangle(-447.6,-410.1,896,543.5), new cjs.Rectangle(-447.6,-413.1,896,546.5), new cjs.Rectangle(-447.6,-416.1,896,549.5), new cjs.Rectangle(-447.6,-419.1,896,552.5), new cjs.Rectangle(-447.6,-422.1,896,555.5), new cjs.Rectangle(-447.6,-420.7,896,554.1), new cjs.Rectangle(-447.6,-419.5,896,552.9), new cjs.Rectangle(-447.6,-418.2,896,551.6), new cjs.Rectangle(-447.6,-416.9,896,550.3), new cjs.Rectangle(-447.6,-415.6,896,549), new cjs.Rectangle(-447.6,-414.3,896,547.7), new cjs.Rectangle(-447.6,-413,896,546.4), new cjs.Rectangle(-447.6,-411.7,896,545.1), new cjs.Rectangle(-447.6,-410.5,896,543.9), new cjs.Rectangle(-447.6,-409.2,896,542.6), new cjs.Rectangle(-447.6,-407.9,896,541.3), new cjs.Rectangle(-447.6,-406.6,896,540), new cjs.Rectangle(-447.6,-406.5,896,539.9), new cjs.Rectangle(-447.6,-406.6,896,540), new cjs.Rectangle(-447.6,-407.1,896,540.5), new cjs.Rectangle(-447.6,-410.1,896,543.5), new cjs.Rectangle(-447.6,-413.1,896,546.5), new cjs.Rectangle(-447.6,-416.1,896,549.5), new cjs.Rectangle(-447.6,-419.1,896,552.5), new cjs.Rectangle(-447.6,-422.1,896,555.5), new cjs.Rectangle(-447.6,-375.9,896,509.3), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.venchik_mc();
	this.instance.setTransform(446,-298.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:177,y:-301.6,alpha:1},9).to({x:41,y:-417.6},10).to({x:10,y:-372.6},5).to({x:50.4,y:-323.6},5).to({x:107.4,y:-363.6},5).to({x:41,y:-417.6},5).to({x:10,y:-372.6},5).to({x:50.4,y:-323.6},5).to({x:107.4,y:-363.6},5).to({x:41,y:-417.6},5).to({x:10,y:-372.6},5).to({x:50.4,y:-323.6},5).to({x:107.4,y:-363.6},5).to({x:454.4,y:-331.6,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.cup2_mc();
	this.instance_1.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

	// animation
	this.instance_2 = new lib.cook6_mc();
	this.instance_2.setTransform(16.4,-269.4,0.538,0.538,135);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({rotation:0,alpha:1},65).wait(11));

	// animation
	this.instance_3 = new lib.smes1_mc();
	this.instance_3.setTransform(16,-269.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({alpha:0.012},65).to({_off:true},1).wait(10));

	// animation
	this.instance_4 = new lib.plate2_mc();
	this.instance_4.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85));

	// animation
	this.instance_5 = new lib.back_podl2_mc();
	this.instance_5.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85));

	// animation
	this.instance_6 = new lib.back_podl1_mc();
	this.instance_6.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-416.6,961.2,550);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-416.9,931.3,550.3), new cjs.Rectangle(-447.6,-417.2,901.4,550.6), new cjs.Rectangle(-447.6,-417.6,896,551), new cjs.Rectangle(-447.6,-417.9,896,551.3), new cjs.Rectangle(-447.6,-418.2,896,551.6), new cjs.Rectangle(-447.6,-418.6,896,552), new cjs.Rectangle(-447.6,-418.9,896,552.3), new cjs.Rectangle(-447.6,-419.2,896,552.6), new cjs.Rectangle(-447.6,-419.6,896,553), new cjs.Rectangle(-447.6,-431.2,896,564.6), new cjs.Rectangle(-447.6,-442.8,896,576.2), new cjs.Rectangle(-447.6,-454.4,896,587.8), new cjs.Rectangle(-447.6,-466,896,599.4), new cjs.Rectangle(-447.6,-477.6,896,611), new cjs.Rectangle(-447.6,-489.2,896,622.6), new cjs.Rectangle(-447.6,-500.8,896,634.2), new cjs.Rectangle(-447.6,-512.4,896,645.8), new cjs.Rectangle(-447.6,-524,896,657.4), new cjs.Rectangle(-447.6,-535.6,896,669), new cjs.Rectangle(-447.6,-526.6,896,660), new cjs.Rectangle(-447.6,-517.6,896,651), new cjs.Rectangle(-447.6,-508.6,896,642), new cjs.Rectangle(-447.6,-499.6,896,633), new cjs.Rectangle(-447.6,-490.6,896,624), new cjs.Rectangle(-447.6,-480.8,896,614.2), new cjs.Rectangle(-447.6,-471,896,604.4), new cjs.Rectangle(-447.6,-461.2,896,594.6), new cjs.Rectangle(-447.6,-451.4,896,584.8), new cjs.Rectangle(-447.6,-441.6,896,575), new cjs.Rectangle(-447.6,-449.6,896,583), new cjs.Rectangle(-447.6,-457.6,896,591), new cjs.Rectangle(-447.6,-465.6,896,599), new cjs.Rectangle(-447.6,-473.6,896,607), new cjs.Rectangle(-447.6,-481.6,896,615), new cjs.Rectangle(-447.6,-492.4,896,625.8), new cjs.Rectangle(-447.6,-503.2,896,636.6), new cjs.Rectangle(-447.6,-514,896,647.4), new cjs.Rectangle(-447.6,-524.8,896,658.2), new cjs.Rectangle(-447.6,-535.6,896,669), new cjs.Rectangle(-447.6,-526.6,896,660), new cjs.Rectangle(-447.6,-517.6,896,651), new cjs.Rectangle(-447.6,-508.6,896,642), new cjs.Rectangle(-447.6,-499.6,896,633), new cjs.Rectangle(-447.6,-490.6,896,624), new cjs.Rectangle(-447.6,-480.8,896,614.2), new cjs.Rectangle(-447.6,-471,896,604.4), new cjs.Rectangle(-447.6,-461.2,896,594.6), new cjs.Rectangle(-447.6,-451.4,896,584.8), new cjs.Rectangle(-447.6,-441.6,896,575), new cjs.Rectangle(-447.6,-449.6,896,583), new cjs.Rectangle(-447.6,-457.6,896,591), new cjs.Rectangle(-447.6,-465.6,896,599), new cjs.Rectangle(-447.6,-473.6,896,607), new cjs.Rectangle(-447.6,-481.6,896,615), new cjs.Rectangle(-447.6,-492.4,896,625.8), new cjs.Rectangle(-447.6,-503.2,896,636.6), new cjs.Rectangle(-447.6,-514,896,647.4), new cjs.Rectangle(-447.6,-524.8,896,658.2), new cjs.Rectangle(-447.6,-535.6,896,669), new cjs.Rectangle(-447.6,-526.6,896,660), new cjs.Rectangle(-447.6,-517.6,896,651), new cjs.Rectangle(-447.6,-508.6,896,642), new cjs.Rectangle(-447.6,-499.6,896,633), new cjs.Rectangle(-447.6,-490.6,896,624), new cjs.Rectangle(-447.6,-480.8,896,614.2), new cjs.Rectangle(-447.6,-471,896,604.4), new cjs.Rectangle(-447.6,-461.2,896,594.6), new cjs.Rectangle(-447.6,-451.4,896,584.8), new cjs.Rectangle(-447.6,-441.6,896,575), new cjs.Rectangle(-447.6,-449.6,896,583), new cjs.Rectangle(-447.6,-457.6,896,591), new cjs.Rectangle(-447.6,-465.6,896,599), new cjs.Rectangle(-447.6,-473.6,896,607), new cjs.Rectangle(-447.6,-481.6,896,615), new cjs.Rectangle(-447.6,-478,896,611.4), new cjs.Rectangle(-447.6,-474.5,896,607.9), new cjs.Rectangle(-447.6,-470.9,896,604.3), new cjs.Rectangle(-447.6,-467.4,896,600.8), new cjs.Rectangle(-447.6,-463.8,896,597.2), new cjs.Rectangle(-447.6,-460.2,896,593.6), new cjs.Rectangle(-447.6,-456.7,896,590.1), new cjs.Rectangle(-447.6,-453.1,931,586.5), new cjs.Rectangle(-447.6,-449.6,969.5,583), new cjs.Rectangle(-447.6,-374.1,896,507.5)];


(lib.animation1_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.jelly1_mc();
	this.instance.setTransform(208.9,-267.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-59,x:132.9,y:-327.6},10).to({x:120.9,y:-325.6},2).to({x:132.9,y:-327.6},2).to({x:120.9,y:-325.6},2).to({x:132.9,y:-327.6},2).to({x:120.9,y:-325.6},2).to({x:132.9,y:-327.6},2).to({x:120.9,y:-325.6},2).to({x:132.9,y:-327.6},2).to({x:120.9,y:-325.6},2).to({x:132.9,y:-327.6},2).to({x:120.9,y:-325.6},2).to({rotation:-0.8,x:340.9,y:-278.6,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.cup2_mc();
	this.instance_1.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// animation
	this.instance_2 = new lib.sugar1_mc();
	this.instance_2.setTransform(28.4,-242.6,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// animation
	this.instance_3 = new lib.jelly3_mc();
	this.instance_3.setTransform(57,-327.5,0.6,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(7));

	// animation
	this.instance_4 = new lib.jelly3_mc();
	this.instance_4.setTransform(57,-327.5,0.6,0.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(12));

	// animation
	this.instance_5 = new lib.jelly3_mc();
	this.instance_5.setTransform(57,-327.5,0.6,0.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(18));

	// animation
	this.instance_6 = new lib.jelly3_mc();
	this.instance_6.setTransform(57,-327.5,0.6,0.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(22));

	// animation
	this.instance_7 = new lib.jelly3_mc();
	this.instance_7.setTransform(57,-327.5,0.6,0.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({rotation:-88.7,x:23,y:-275.5},9).to({_off:true},1).wait(25));

	// animation
	this.instance_8 = new lib.jelly2_mc();
	this.instance_8.setTransform(19,-262.9);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({alpha:1},22).wait(13));

	// animation
	this.instance_9 = new lib.sugar1_mc();
	this.instance_9.setTransform(41.9,-264.6,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45));

	// animation
	this.instance_10 = new lib.sugar1_mc();
	this.instance_10.setTransform(9.4,-267.6,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45));

	// animation
	this.instance_11 = new lib.milk3_mc();
	this.instance_11.setTransform(16,-269.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45));

	// animation
	this.instance_12 = new lib.plate2_mc();
	this.instance_12.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(45));

	// animation
	this.instance_13 = new lib.back_podl2_mc();
	this.instance_13.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45));

	// animation
	this.instance_14 = new lib.back_podl1_mc();
	this.instance_14.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-447.6,-383.6,896,517), new cjs.Rectangle(-447.6,-392.6,896,526), new cjs.Rectangle(-447.6,-400.3,896,533.7), new cjs.Rectangle(-447.6,-407.1,896,540.5), new cjs.Rectangle(-447.6,-412.7,896,546.1), new cjs.Rectangle(-447.6,-417.2,896,550.6), new cjs.Rectangle(-447.6,-420.7,896,554.1), new cjs.Rectangle(-447.6,-423.3,896,556.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-421.3,896,554.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-423.3,896,556.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-421.3,896,554.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-423.3,896,556.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-421.3,896,554.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-423.3,896,556.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-421.3,896,554.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-423.3,896,556.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-421.3,896,554.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-423.3,896,556.7), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-421.3,896,554.7), new cjs.Rectangle(-447.6,-420.2,896,553.6), new cjs.Rectangle(-447.6,-418.3,896,551.7), new cjs.Rectangle(-447.6,-415.5,896,548.9), new cjs.Rectangle(-447.6,-411.9,896,545.3), new cjs.Rectangle(-447.6,-407.5,896,540.9), new cjs.Rectangle(-447.6,-402.2,896,535.6), new cjs.Rectangle(-447.6,-396,896,529.4), new cjs.Rectangle(-447.6,-388.9,896,522.3), new cjs.Rectangle(-447.6,-381.1,896,514.5), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect];


(lib.animation1_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.spoon_inv_mc();
	this.instance.setTransform(266,-366.9,1,1,-105.3);

	this.instance_1 = new lib.spoon_inv2_mc();
	this.instance_1.setTransform(255,-353.9,1,1,-112);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-112,x:255,y:-353.9},4).wait(10).to({_off:false,rotation:-89.3,x:74,y:-302.9},1).to({rotation:-105.3,x:266,y:-366.9},9).to({_off:true,rotation:-112,x:255,y:-353.9},4).wait(10).to({_off:false,rotation:-89.3,x:74,y:-302.9},1).to({rotation:-105.3,x:266,y:-366.9},11).to({_off:true,rotation:-112,x:255,y:-353.9},4).wait(10).to({_off:false,rotation:-89.3,x:74,y:-302.9},1).to({rotation:-76,x:330,y:-408.9,alpha:0.012},17).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({rotation:-89.3,x:74,y:-302.9},10).to({_off:true},1).wait(9).to({_off:false,rotation:-112,x:255,y:-353.9},4).to({rotation:-89.3,x:74,y:-302.9},10).to({_off:true},1).wait(11).to({_off:false,rotation:-112,x:255,y:-353.9},4).to({rotation:-89.3,x:74,y:-302.9},10).to({_off:true},1).wait(19));

	// animation
	this.instance_2 = new lib.sugar_mc();
	this.instance_2.setTransform(224.8,-241.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({x:518.7,alpha:0.012},17).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.jelly1_mc();
	this.instance_3.setTransform(292.9,20.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84));

	// animation
	this.instance_4 = new lib.cup2_mc();
	this.instance_4.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84));

	// animation
	this.instance_5 = new lib.sugar1_mc();
	this.instance_5.setTransform(28.4,-242.6,0.48,0.48);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).wait(45));

	// animation
	this.instance_6 = new lib.sugar1_mc();
	this.instance_6.setTransform(41.9,-264.6,0.48,0.48);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65).to({_off:false},0).wait(19));

	// animation
	this.instance_7 = new lib.sugar1_mc();
	this.instance_7.setTransform(9.4,-267.6,0.48,0.48);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).wait(69));

	// animation
	this.instance_8 = new lib.milk3_mc();
	this.instance_8.setTransform(16,-269.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(84));

	// animation
	this.instance_9 = new lib.plate2_mc();
	this.instance_9.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84));

	// animation
	this.instance_10 = new lib.back_podl2_mc();
	this.instance_10.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(84));

	// animation
	this.instance_11 = new lib.back_podl1_mc();
	this.instance_11.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.1,896,570.5);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-435.4,896,568.8), new cjs.Rectangle(-447.6,-434,896,567.4), new cjs.Rectangle(-447.6,-432.5,896,565.9), new cjs.Rectangle(-447.6,-431,896,564.4), new cjs.Rectangle(-447.6,-423.7,896,557.1), new cjs.Rectangle(-447.6,-416.1,896,549.5), new cjs.Rectangle(-447.6,-408.6,896,542), new cjs.Rectangle(-447.6,-400.9,896,534.3), new cjs.Rectangle(-447.6,-393.1,896,526.5), new cjs.Rectangle(-447.6,-385.3,896,518.7), new cjs.Rectangle(-447.6,-377.4,896,510.8), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-381.4,896,514.8), new cjs.Rectangle(-447.6,-390.8,896,524.2), new cjs.Rectangle(-447.6,-400.1,896,533.5), new cjs.Rectangle(-447.6,-409.3,896,542.7), new cjs.Rectangle(-447.6,-418.5,896,551.9), new cjs.Rectangle(-447.6,-427.9,896,561.3), new cjs.Rectangle(-447.6,-437.1,896,570.5), new cjs.Rectangle(-447.6,-435.4,896,568.8), new cjs.Rectangle(-447.6,-434,896,567.4), new cjs.Rectangle(-447.6,-432.5,896,565.9), new cjs.Rectangle(-447.6,-431,896,564.4), new cjs.Rectangle(-447.6,-423.7,896,557.1), new cjs.Rectangle(-447.6,-416.1,896,549.5), new cjs.Rectangle(-447.6,-408.6,896,542), new cjs.Rectangle(-447.6,-400.9,896,534.3), new cjs.Rectangle(-447.6,-393.1,896,526.5), new cjs.Rectangle(-447.6,-385.3,896,518.7), new cjs.Rectangle(-447.6,-377.4,896,510.8), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-376.2,896,509.6), new cjs.Rectangle(-447.6,-383.9,896,517.3), new cjs.Rectangle(-447.6,-391.7,896,525.1), new cjs.Rectangle(-447.6,-399.4,896,532.8), new cjs.Rectangle(-447.6,-406.8,896,540.2), new cjs.Rectangle(-447.6,-414.4,896,547.8), new cjs.Rectangle(-447.6,-422,896,555.4), new cjs.Rectangle(-447.6,-429.5,896,562.9), new cjs.Rectangle(-447.6,-437.1,896,570.5), new cjs.Rectangle(-447.6,-435.4,896,568.8), new cjs.Rectangle(-447.6,-434,896,567.4), new cjs.Rectangle(-447.6,-432.5,896,565.9), new cjs.Rectangle(-447.6,-431,896,564.4), new cjs.Rectangle(-447.6,-423.7,896,557.1), new cjs.Rectangle(-447.6,-416.1,896,549.5), new cjs.Rectangle(-447.6,-408.6,896,542), new cjs.Rectangle(-447.6,-400.9,896,534.3), new cjs.Rectangle(-447.6,-393.1,896,526.5), new cjs.Rectangle(-447.6,-385.3,896,518.7), new cjs.Rectangle(-447.6,-377.4,896,510.8), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-376.8,896,510.2), new cjs.Rectangle(-447.6,-384,896,517.4), new cjs.Rectangle(-447.6,-391.3,896,524.7), new cjs.Rectangle(-447.6,-398.4,896,531.8), new cjs.Rectangle(-447.6,-405.7,896,539.1), new cjs.Rectangle(-447.6,-412.9,896,546.3), new cjs.Rectangle(-447.6,-420,908.5,553.4), new cjs.Rectangle(-447.6,-427.4,925.8,560.8), new cjs.Rectangle(-447.6,-434.6,943.1,568), new cjs.Rectangle(-447.6,-441.8,960.4,575.2), new cjs.Rectangle(-447.6,-448.9,977.7,582.3), new cjs.Rectangle(-447.6,-456.1,995,589.5), new cjs.Rectangle(-447.6,-463.2,1012.3,596.6), new cjs.Rectangle(-447.6,-470.3,1029.6,603.7), new cjs.Rectangle(-447.6,-477.6,1046.9,611), new cjs.Rectangle(-447.6,-374.1,896,507.5)];


(lib.animation1_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.milk2_mc();
	this.instance.setTransform(159.4,-269.9,0.556,1,0,0,0,68,5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1,rotation:-2.5,x:174.4,y:-273.9,alpha:1},6).to({x:154.4},4).wait(8).to({x:136.4,y:-269.9,alpha:0.012},3).to({_off:true},1).wait(14));

	// animation
	this.instance_1 = new lib.milk1_mc();
	this.instance_1.setTransform(201.9,-233.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-46.7,x:186.9,y:-269.6},9).to({x:158.9},5).wait(6).to({x:138.9},4).wait(11).to({rotation:0,x:300.9,y:-230.6,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.jelly1_mc();
	this.instance_2.setTransform(292.9,20.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.sugar_mc();
	this.instance_3.setTransform(136.8,23.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// animation
	this.instance_4 = new lib.cup2_mc();
	this.instance_4.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// animation
	this.instance_5 = new lib.milk3_mc();
	this.instance_5.setTransform(16,-269.6,0.457,0.457);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1},8).wait(18));

	// animation
	this.instance_6 = new lib.plate2_mc();
	this.instance_6.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_mc();
	this.instance.setTransform(-57.2,-384.7,1,1,-45);

	this.instance_1 = new lib.jelly1_mc();
	this.instance_1.setTransform(292.9,20.2,0.361,0.361);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-39.2,y:-315.7},5).to({x:-7.2},5).to({x:19.8,y:-287.7},5).to({x:52.8,y:-296.7},5).to({x:89.8,y:-270.7},5).to({x:119.8,y:-293.7},6).to({x:160.8,y:-286.7},7).to({x:187.8,y:-315.7},6).to({x:216.8,y:-314.7},5).to({rotation:51.3,x:542.8,y:-155.7,alpha:0.012},16).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,alpha:1},6).to({scaleX:0.98,scaleY:0.98},2).to({scaleX:0.8,scaleY:0.8},2).wait(5));

	// animation
	this.instance_2 = new lib.uzor2_mc();
	this.instance_2.setTransform(21.4,-261.9);

	this.instance_3 = new lib.sugar_mc();
	this.instance_3.setTransform(136.8,23.4,0.328,0.328);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({scaleX:0.6,scaleY:0.6,x:-220.2,y:36},8).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,alpha:1},6).to({scaleX:0.92,scaleY:0.92},2).to({scaleX:0.8,scaleY:0.8},2).wait(15));

	// animation
	this.instance_4 = new lib.uzor1_mc();
	this.instance_4.setTransform(22.4,-230.9);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.instance_5 = new lib.milk1_mc();
	this.instance_5.setTransform(-22.1,23.4,0.403,0.403);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({alpha:1},44).wait(17).to({scaleX:0.6,scaleY:0.6,x:-219.6,y:54.6},8).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(76).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,alpha:1},6).to({scaleX:1.05,scaleY:1.05},2).to({scaleX:0.8,scaleY:0.8},2).wait(25));

	// animation
	this.instance_6 = new lib.cup1_mc();
	this.instance_6.setTransform(20,-264.6);

	this.instance_7 = new lib.cup2_mc();
	this.instance_7.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},66).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_7}]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({scaleX:0.6,scaleY:0.6,x:-221,y:34.4},8).to({_off:true,scaleX:1,scaleY:1},1).wait(36));

	// animation
	this.instance_8 = new lib.plate2_mc();
	this.instance_8.setTransform(-509.6,-271.6);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(97).to({_off:false},0).to({x:15.4,alpha:1},13).wait(1));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(111));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-463.5,896,596.9);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-449.8,896,583.2), new cjs.Rectangle(-447.6,-436,896,569.4), new cjs.Rectangle(-447.6,-422.2,896,555.6), new cjs.Rectangle(-447.6,-408.4,896,541.8), rect=new cjs.Rectangle(-447.6,-394.5,896,527.9), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-390.1,896,523.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-394.5,896,527.9), new cjs.Rectangle(-447.6,-394.3,896,527.7), new cjs.Rectangle(-447.6,-394.1,896,527.5), new cjs.Rectangle(-447.6,-393.9,896,527.3), new cjs.Rectangle(-447.6,-393.7,896,527.1), new cjs.Rectangle(-447.6,-393.5,896,526.9), rect=new cjs.Rectangle(-447.6,-390.1,896,523.5), rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-390.1,906.5,523.5), new cjs.Rectangle(-447.6,-390.1,926.9,523.5), new cjs.Rectangle(-447.6,-390.1,947.6,523.5), new cjs.Rectangle(-447.6,-390.1,966.9,523.5), new cjs.Rectangle(-447.6,-390.1,985.4,523.5), new cjs.Rectangle(-447.6,-390.1,1002.7,523.5), new cjs.Rectangle(-447.6,-390.1,1019,523.5), new cjs.Rectangle(-447.6,-390.1,1034.3,523.5), new cjs.Rectangle(-447.6,-390.1,1048.7,523.5), new cjs.Rectangle(-447.6,-390.1,1062.1,523.5), new cjs.Rectangle(-447.6,-390.1,896,523.5), new cjs.Rectangle(-447.6,-346.4,896,479.8), new cjs.Rectangle(-447.6,-302.7,896,436.1), new cjs.Rectangle(-447.6,-259.1,896,392.5), new cjs.Rectangle(-447.6,-215.5,896,348.9), new cjs.Rectangle(-447.6,-171.8,896,305.2), rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-612.1,-374.1,1060.5,507.5), new cjs.Rectangle(-571.7,-374.1,1020.1,507.5), new cjs.Rectangle(-531.3,-374.1,979.7,507.5), new cjs.Rectangle(-490.9,-374.1,939.3,507.5), new cjs.Rectangle(-450.6,-374.1,899,507.5), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_mc();
	this.instance.setTransform(-33.2,-365.7,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-57.2,y:-332.7},4).to({x:-40.2,y:-363.7},5).to({x:-18.2,y:-332.7},5).to({x:29.8,y:-338.7},8).to({x:70.8,y:-305.7},8).to({x:88.8,y:-336.7},5).to({x:106.8,y:-303.7},4).to({x:150.8,y:-336.7},9).to({x:197.8,y:-331.7},12).to({x:216.8,y:-362.7},6).to({x:235.8,y:-332.7},5).to({x:-57.2,y:-384.7},13).wait(1));

	// animation
	this.instance_1 = new lib.uzor2_mc();
	this.instance_1.setTransform(21.4,-261.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},67).wait(14));

	// animation
	this.instance_2 = new lib.uzor1_mc();
	this.instance_2.setTransform(22.4,-230.9);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85));

	// animation
	this.instance_3 = new lib.cup1_mc();
	this.instance_3.setTransform(20,-264.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85));

	// animation
	this.instance_4 = new lib.back_podl2_mc();
	this.instance_4.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85));

	// animation
	this.instance_5 = new lib.back_podl1_mc();
	this.instance_5.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-444.5,896,577.9);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-436.3,896,569.7), new cjs.Rectangle(-447.6,-428,896,561.4), new cjs.Rectangle(-447.6,-419.8,896,553.2), new cjs.Rectangle(-447.6,-411.5,896,544.9), new cjs.Rectangle(-447.6,-417.7,896,551.1), new cjs.Rectangle(-447.6,-423.9,896,557.3), new cjs.Rectangle(-447.6,-430.1,896,563.5), new cjs.Rectangle(-447.6,-436.3,896,569.7), new cjs.Rectangle(-447.6,-442.5,896,575.9), new cjs.Rectangle(-447.6,-436.3,896,569.7), new cjs.Rectangle(-447.6,-430.1,896,563.5), new cjs.Rectangle(-447.6,-423.9,896,557.3), new cjs.Rectangle(-447.6,-417.7,896,551.1), new cjs.Rectangle(-447.6,-411.5,896,544.9), new cjs.Rectangle(-447.6,-412.3,896,545.7), new cjs.Rectangle(-447.6,-413.1,896,546.5), new cjs.Rectangle(-447.6,-413.8,896,547.2), new cjs.Rectangle(-447.6,-414.6,896,548), new cjs.Rectangle(-447.6,-415.3,896,548.7), new cjs.Rectangle(-447.6,-416.1,896,549.5), new cjs.Rectangle(-447.6,-416.8,896,550.2), new cjs.Rectangle(-447.6,-417.5,896,550.9), new cjs.Rectangle(-447.6,-413.4,896,546.8), new cjs.Rectangle(-447.6,-409.3,896,542.7), new cjs.Rectangle(-447.6,-405.1,896,538.5), new cjs.Rectangle(-447.6,-401,896,534.4), new cjs.Rectangle(-447.6,-396.9,896,530.3), new cjs.Rectangle(-447.6,-392.8,896,526.2), rect=new cjs.Rectangle(-447.6,-390.1,896,523.5), rect, new cjs.Rectangle(-447.6,-390.8,896,524.2), new cjs.Rectangle(-447.6,-397,896,530.4), new cjs.Rectangle(-447.6,-403.2,896,536.6), new cjs.Rectangle(-447.6,-409.4,896,542.8), new cjs.Rectangle(-447.6,-415.5,896,548.9), new cjs.Rectangle(-447.6,-407.3,896,540.7), new cjs.Rectangle(-447.6,-399,896,532.4), new cjs.Rectangle(-447.6,-390.8,896,524.2), rect=new cjs.Rectangle(-447.6,-390.1,896,523.5), rect, rect, new cjs.Rectangle(-447.6,-393.5,896,526.9), new cjs.Rectangle(-447.6,-397.2,896,530.6), new cjs.Rectangle(-447.6,-400.9,896,534.3), new cjs.Rectangle(-447.6,-404.5,896,537.9), new cjs.Rectangle(-447.6,-408.2,896,541.6), new cjs.Rectangle(-447.6,-411.9,896,545.3), new cjs.Rectangle(-447.6,-415.5,896,548.9), new cjs.Rectangle(-447.6,-415.1,896,548.5), new cjs.Rectangle(-447.6,-414.7,896,548.1), new cjs.Rectangle(-447.6,-414.3,896,547.7), new cjs.Rectangle(-447.6,-413.9,896,547.3), new cjs.Rectangle(-447.6,-413.4,896,546.8), new cjs.Rectangle(-447.6,-413,896,546.4), new cjs.Rectangle(-447.6,-412.6,896,546), new cjs.Rectangle(-447.6,-412.2,896,545.6), new cjs.Rectangle(-447.6,-411.8,896,545.2), new cjs.Rectangle(-447.6,-411.4,896,544.8), new cjs.Rectangle(-447.6,-410.9,896,544.3), new cjs.Rectangle(-447.6,-410.5,896,543.9), new cjs.Rectangle(-447.6,-415.7,896,549.1), new cjs.Rectangle(-447.6,-420.9,896,554.3), new cjs.Rectangle(-447.6,-426,896,559.4), new cjs.Rectangle(-447.6,-431.2,896,564.6), new cjs.Rectangle(-447.6,-436.4,896,569.8), new cjs.Rectangle(-447.6,-441.5,896,574.9), new cjs.Rectangle(-447.6,-435.5,896,568.9), new cjs.Rectangle(-447.6,-429.5,896,562.9), new cjs.Rectangle(-447.6,-423.5,896,556.9), new cjs.Rectangle(-447.6,-417.5,896,550.9), new cjs.Rectangle(-447.6,-411.5,896,544.9), new cjs.Rectangle(-447.6,-415.5,896,548.9), new cjs.Rectangle(-447.6,-419.5,896,552.9), new cjs.Rectangle(-447.6,-423.5,896,556.9), new cjs.Rectangle(-447.6,-427.5,896,560.9), new cjs.Rectangle(-447.6,-431.5,896,564.9), new cjs.Rectangle(-447.6,-435.5,896,568.9), new cjs.Rectangle(-447.6,-439.5,896,572.9), new cjs.Rectangle(-447.6,-443.5,896,576.9), new cjs.Rectangle(-447.6,-447.5,896,580.9), new cjs.Rectangle(-447.6,-451.5,896,584.9), new cjs.Rectangle(-447.6,-455.5,896,588.9), new cjs.Rectangle(-447.6,-459.5,896,592.9), new cjs.Rectangle(-447.6,-463.5,896,596.9)];


(lib.animation1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_133 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(133).call(this.frame_133).wait(1));

	// animation
	this.instance = new lib.go_mc();
	this.instance.setTransform(24,13,0.38,0.38);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({scaleX:1.14,scaleY:1.14},3).to({scaleX:1,scaleY:1},3).wait(1));

	// animation
	this.instance_1 = new lib.heart_mc();
	this.instance_1.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:84.4,y:-36.6},10).wait(24).to({x:318.4,y:-234.6,alpha:0.012},10).to({_off:true},1).wait(28));

	// animation
	this.instance_2 = new lib.heart_mc();
	this.instance_2.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:23.4,y:-36.6},10).wait(36).to({x:247.4,y:-308.6,alpha:0.012},10).to({_off:true},1).wait(22));

	// animation
	this.instance_3 = new lib.heart_mc();
	this.instance_3.setTransform(-142.6,-183.6,0.36,0.36);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({scaleX:1,scaleY:1,x:-57.6,y:-267.6},9).to({x:-37.6,y:-36.6},10).wait(49).to({x:322.4,y:-144.6,alpha:0.012},10).to({_off:true},1).wait(15));

	// animation
	this.instance_4 = new lib.smile1_mc();
	this.instance_4.setTransform(193.4,-144.6,0.424,0.424);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).to({scaleX:1.22,scaleY:1.22},3).to({scaleX:1,scaleY:1},3).wait(48));

	// animation
	this.instance_5 = new lib.padisara_pudding_mc();
	this.instance_5.setTransform(22,-179.6,0.133,0.133);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({scaleX:0.52,scaleY:0.52,alpha:1},7).to({scaleX:0.57,scaleY:0.57},2).to({scaleX:0.52,scaleY:0.52},2).wait(94));

	// animation
	this.instance_6 = new lib.smile6_mc();
	this.instance_6.setTransform(-140.6,-156.6,0.338,0.338);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).to({scaleX:1.17,scaleY:1.17},2).to({scaleX:1,scaleY:1},2).wait(111));

	// animation
	this.instance_7 = new lib.win1_mc();
	this.instance_7.setTransform(16.4,336.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-151.6},10).to({y:-154.6},2).to({y:-151.6},2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-302.6,142.4,638,388);
p.frameBounds = [rect, new cjs.Rectangle(-302.6,93.6,638,388), new cjs.Rectangle(-302.6,44.8,638,388), new cjs.Rectangle(-302.6,-4,638,388), new cjs.Rectangle(-302.6,-52.8,638,388), new cjs.Rectangle(-302.6,-101.6,638,388), new cjs.Rectangle(-302.6,-150.4,638,388), new cjs.Rectangle(-302.6,-199.2,638,388), new cjs.Rectangle(-302.6,-248,638,388), new cjs.Rectangle(-302.6,-296.8,638,388), new cjs.Rectangle(-302.6,-345.6,638,388), new cjs.Rectangle(-302.6,-347.1,638,388), new cjs.Rectangle(-302.6,-348.6,638,388), new cjs.Rectangle(-302.6,-347.1,638,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-302.6,-345.6,646,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-302.6,-345.6,650,388), rect=new cjs.Rectangle(-302.6,-345.6,638,388), rect, rect, new cjs.Rectangle(-302.6,-345.6,638,389.2), new cjs.Rectangle(-302.6,-345.6,638,393.1), new cjs.Rectangle(-302.6,-345.6,638,397), new cjs.Rectangle(-302.6,-345.6,638,400.8), new cjs.Rectangle(-302.6,-345.6,638,404.7), new cjs.Rectangle(-302.6,-345.6,638,408.6), new cjs.Rectangle(-302.6,-345.6,638,410.9), new cjs.Rectangle(-302.6,-345.6,638,413.3), new cjs.Rectangle(-302.6,-345.6,638,415.6), new cjs.Rectangle(-302.6,-345.6,638,413.3), new cjs.Rectangle(-302.6,-345.6,638,410.9), new cjs.Rectangle(-302.6,-345.6,638,408.6)];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,-349.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:50.5},15).to({y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-480,380,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-190,-453.3,380,260), new cjs.Rectangle(-190,-426.6,380,260), new cjs.Rectangle(-190,-400,380,260), new cjs.Rectangle(-190,-373.3,380,260), new cjs.Rectangle(-190,-346.6,380,260), new cjs.Rectangle(-190,-320,380,260), new cjs.Rectangle(-190,-293.3,380,260), new cjs.Rectangle(-190,-266.6,380,260), new cjs.Rectangle(-190,-240,380,260), new cjs.Rectangle(-190,-213.3,380,260), new cjs.Rectangle(-190,-186.6,380,260), new cjs.Rectangle(-190,-160,380,260), new cjs.Rectangle(-190,-133.3,380,260), new cjs.Rectangle(-190,-106.6,380,260), new cjs.Rectangle(-190,-80,380,260), new cjs.Rectangle(-190,-90,380,260), new cjs.Rectangle(-190,-100,380,260), new cjs.Rectangle(-190,-110,380,260), new cjs.Rectangle(-190,-120,380,260), new cjs.Rectangle(-190,-130,380,260)];


(lib.animation_shadow_hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shadow_hero_main_mc();
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},49).to({alpha:0.199},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-325,730,650);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_question_mark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.question_mark_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-60,80,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-41.8,-61.2,83.8,122.5), new cjs.Rectangle(-43.8,-62.4,87.8,125), new cjs.Rectangle(-45.8,-63.7,91.7,127.5), new cjs.Rectangle(-47.7,-64.8,95.5,129.7), new cjs.Rectangle(-49.8,-66,99.6,132.1), new cjs.Rectangle(-47.7,-64.8,95.5,129.7), new cjs.Rectangle(-45.8,-63.7,91.7,127.5), new cjs.Rectangle(-43.8,-62.4,87.8,125), new cjs.Rectangle(-41.8,-61.2,83.8,122.5), new cjs.Rectangle(-39.9,-59.9,80,120), new cjs.Rectangle(-42,-61.3,84.2,122.7), new cjs.Rectangle(-44,-62.6,88.2,125.3), new cjs.Rectangle(-46,-63.8,92.1,127.7), new cjs.Rectangle(-47.9,-64.9,95.9,130), new cjs.Rectangle(-49.8,-66,99.6,132.1), new cjs.Rectangle(-47.9,-64.9,95.9,129.9), new cjs.Rectangle(-46,-63.8,92.1,127.7), new cjs.Rectangle(-44,-62.6,88.2,125.3), new cjs.Rectangle(-42,-61.3,84.2,122.7), new cjs.Rectangle(-40,-60,80,120)];


(lib.animation_pointing_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pointing_finger_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,scaleX:0.9,scaleY:0.9,y:25.1},19).to({regY:0,scaleX:1,scaleY:1,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-1,98,133);
p.frameBounds = [rect, new cjs.Rectangle(-26.8,0.3,97.5,132.3), new cjs.Rectangle(-26.7,1.7,97,131.7), new cjs.Rectangle(-26.5,3,96.5,131), new cjs.Rectangle(-26.4,4.3,96,130.3), new cjs.Rectangle(-26.3,5.6,95.5,129.6), new cjs.Rectangle(-26.1,7,94.9,128.9), new cjs.Rectangle(-26,8.3,94.5,128.2), new cjs.Rectangle(-25.8,9.6,93.9,127.6), new cjs.Rectangle(-25.7,10.9,93.5,126.9), new cjs.Rectangle(-25.6,12.3,92.9,126.2), new cjs.Rectangle(-25.4,13.6,92.5,125.5), new cjs.Rectangle(-25.3,14.9,92,124.8), new cjs.Rectangle(-25.1,16.2,91.4,124.1), new cjs.Rectangle(-25,17.6,91,123.4), new cjs.Rectangle(-24.9,18.9,90.4,122.8), new cjs.Rectangle(-24.7,20.2,89.9,122.1), new cjs.Rectangle(-24.6,21.5,89.4,121.4), new cjs.Rectangle(-24.4,22.9,88.9,120.7), new cjs.Rectangle(-24.3,24.1,88.4,120), new cjs.Rectangle(-24.6,21.6,89.4,121.3), new cjs.Rectangle(-24.8,19.1,90.3,122.6), new cjs.Rectangle(-25.1,16.6,91.3,123.9), new cjs.Rectangle(-25.4,14,92.3,125.2), new cjs.Rectangle(-25.6,11.5,93.2,126.5), new cjs.Rectangle(-25.9,9,94.2,127.8), new cjs.Rectangle(-26.2,6.5,95.1,129.1), new cjs.Rectangle(-26.4,3.9,96.1,130.4), new cjs.Rectangle(-26.7,1.4,97.1,131.7), new cjs.Rectangle(-27,-1,98,133)];


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


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-130,380,260);
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
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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


(lib.genshin_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.genshin_star_3_mc();
	this.instance.setTransform(-29.9,30,0.599,0.599,135,0,0,-0.1,0);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,x:-46,y:46.1,alpha:0.801},5).to({regX:0,regY:0,scaleX:0.6,scaleY:0.6,x:-64,y:64,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.genshin_star_3_mc();
	this.instance_1.setTransform(-30,-30,0.599,0.599,-134.9,0,0,0.1,0);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-135,x:-46,y:-46,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-134.9,x:-64,y:-64,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.genshin_star_3_mc();
	this.instance_2.setTransform(30.1,30.1,0.599,0.599,45.1,0,0,0.1,0);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:45,x:46,y:46,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:45.1,x:64.1,y:64.1,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.genshin_star_3_mc();
	this.instance_3.setTransform(30.1,-30,0.599,0.599,-44.9,0,0,0.1,0);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-45,x:46,y:-46,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-44.9,x:64.1,y:-64,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.genshin_star_2_mc();
	this.instance_4.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.801},4).to({rotation:45},5).to({rotation:90},5).wait(5).to({scaleX:0.8,scaleY:0.8,alpha:0.102},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-68.4,-68.4,136.9,136.9), new cjs.Rectangle(-75.4,-75.4,150.9,150.9), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-83.6,-83.6,167.3,167.3), new cjs.Rectangle(-84.9,-84.9,169.8,169.8), new cjs.Rectangle(-83.7,-83.6,167.4,167.4), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-75.5,-75.5,151.1,151.1), new cjs.Rectangle(-68.6,-68.6,137.2,137.2), new cjs.Rectangle(-60,-60,120,120), rect=new cjs.Rectangle(-60,-59.9,120,120), rect, new cjs.Rectangle(-64.5,-64.4,129,129.1), new cjs.Rectangle(-70.2,-70,140.2,140.2), new cjs.Rectangle(-75.7,-75.7,151.4,151.4), new cjs.Rectangle(-76.3,-76.3,152.6,152.6), new cjs.Rectangle(-76.9,-76.9,153.8,153.8), new cjs.Rectangle(-77.5,-77.5,155,155), new cjs.Rectangle(-78,-78,156.1,156.1), new cjs.Rectangle(-78.7,-78.7,157.4,157.4), new cjs.Rectangle(-79.3,-79.3,158.6,158.7), new cjs.Rectangle(-79.9,-79.9,159.9,159.9), new cjs.Rectangle(-80.5,-80.5,161.1,161.1), new cjs.Rectangle(-81.1,-81.1,162.3,162.3), new cjs.Rectangle(-81.8,-81.8,163.6,163.6), null];


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
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.102},19).to({scaleX:1,scaleY:1,alpha:0.602},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-24.4,-24.4,49,49), new cjs.Rectangle(-24.2,-24.2,48.4,48.4), new cjs.Rectangle(-23.9,-23.9,47.9,47.9), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.4,-23.4,46.8,46.8), new cjs.Rectangle(-23.1,-23.1,46.3,46.3), new cjs.Rectangle(-22.8,-22.8,45.8,45.8), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.1,-22.1,44.2,44.2), new cjs.Rectangle(-21.8,-21.8,43.7,43.7), new cjs.Rectangle(-21.5,-21.5,43.2,43.2), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21,-21,42.1,42.1), new cjs.Rectangle(-20.7,-20.7,41.6,41.6), new cjs.Rectangle(-20.5,-20.5,41.1,41.1), new cjs.Rectangle(-20.2,-20.2,40.6,40.6), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.2,-22.2,44.5,44.5), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-23.4,-23.4,47,47), new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.2,-24.2,48.5,48.5), new cjs.Rectangle(-24.4,-24.4,49,49), new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-25,-25,50,50)];


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

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// decor
	this.instance_2 = new lib.decor_large_buttons_mc();
	this.instance_2.setTransform(42,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({rotation:15},10).to({rotation:0},10).wait(1));

	// decor
	this.instance_3 = new lib.decor_large_buttons_mc();
	this.instance_3.setTransform(-42,62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({skewX:-15,skewY:165},10).to({skewX:0,skewY:180},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-95,192,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-95,193,190), new cjs.Rectangle(-96,-95,194,190), new cjs.Rectangle(-96,-95,195,190), new cjs.Rectangle(-96,-95,196,190), new cjs.Rectangle(-96,-95,195,190), new cjs.Rectangle(-96,-95,194,190), new cjs.Rectangle(-96,-95,193,190), rect=new cjs.Rectangle(-96,-95,192,190), rect, rect, new cjs.Rectangle(-97,-95,193,190), new cjs.Rectangle(-98,-95,194,190), new cjs.Rectangle(-99,-95,195,190), new cjs.Rectangle(-100,-95,196,190), new cjs.Rectangle(-99,-95,195,190), new cjs.Rectangle(-98,-95,194,190), new cjs.Rectangle(-97,-95,193,190), rect=new cjs.Rectangle(-96,-95,192,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-97,-95,194,190), new cjs.Rectangle(-98,-95,196.1,190), new cjs.Rectangle(-99.1,-95,198.3,190), new cjs.Rectangle(-100.1,-95,200.3,190.3), new cjs.Rectangle(-101.1,-95,202.3,191.6), new cjs.Rectangle(-102,-95,204.1,192.9), new cjs.Rectangle(-102.9,-95,205.9,194.2), new cjs.Rectangle(-103.8,-95,207.7,195.5), new cjs.Rectangle(-104.6,-95,209.2,196.7), new cjs.Rectangle(-105.5,-95,211.1,198.1), new cjs.Rectangle(-104.6,-95,209.3,196.6), new cjs.Rectangle(-103.8,-95,207.6,195.4), new cjs.Rectangle(-102.9,-95,205.9,194.2), new cjs.Rectangle(-102.1,-95,204.2,192.9), new cjs.Rectangle(-101.1,-95,202.3,191.6), new cjs.Rectangle(-100.1,-95,200.3,190.3), new cjs.Rectangle(-99.2,-95,198.4,190), new cjs.Rectangle(-98,-95,196.1,190), new cjs.Rectangle(-96.9,-95,193.9,190), new cjs.Rectangle(-96,-95,192,190)];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// decor
	this.instance_2 = new lib.decor_large_buttons_mc();
	this.instance_2.setTransform(42,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({rotation:15},10).to({rotation:0},10).wait(41));

	// decor
	this.instance_3 = new lib.decor_large_buttons_mc();
	this.instance_3.setTransform(-42,62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({skewX:-15,skewY:165},10).to({skewX:0,skewY:180},10).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-95,192,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-97,-95,194,190), new cjs.Rectangle(-98,-95,196.1,190), new cjs.Rectangle(-99.1,-95,198.3,190), new cjs.Rectangle(-100.1,-95,200.3,190.3), new cjs.Rectangle(-101.1,-95,202.3,191.6), new cjs.Rectangle(-102,-95,204.1,192.9), new cjs.Rectangle(-102.9,-95,205.9,194.2), new cjs.Rectangle(-103.8,-95,207.7,195.5), new cjs.Rectangle(-104.6,-95,209.2,196.7), new cjs.Rectangle(-105.5,-95,211.1,198.1), new cjs.Rectangle(-104.6,-95,209.3,196.6), new cjs.Rectangle(-103.8,-95,207.6,195.4), new cjs.Rectangle(-102.9,-95,205.9,194.2), new cjs.Rectangle(-102.1,-95,204.2,192.9), new cjs.Rectangle(-101.1,-95,202.3,191.6), new cjs.Rectangle(-100.1,-95,200.3,190.3), new cjs.Rectangle(-99.2,-95,198.4,190), new cjs.Rectangle(-98,-95,196.1,190), new cjs.Rectangle(-96.9,-95,193.9,190), rect=new cjs.Rectangle(-96,-95,192,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape.graphics.f("rgba(0,0,0,0.039)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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

	// icon
	this.instance = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// decor
	this.instance_2 = new lib.decor_large_buttons_mc();
	this.instance_2.setTransform(42,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({rotation:15},10).to({rotation:0},10).wait(1));

	// decor
	this.instance_3 = new lib.decor_large_buttons_mc();
	this.instance_3.setTransform(-42,62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({skewX:-15,skewY:165},10).to({skewX:0,skewY:180},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-95,192,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-97,-95,194,190), new cjs.Rectangle(-98,-95,196.1,190), new cjs.Rectangle(-99.1,-95,198.3,190), new cjs.Rectangle(-100.1,-95,200.3,190.3), new cjs.Rectangle(-101.1,-95,202.3,191.6), new cjs.Rectangle(-102,-95,204.1,192.9), new cjs.Rectangle(-102.9,-95,205.9,194.2), new cjs.Rectangle(-103.8,-95,207.7,195.5), new cjs.Rectangle(-104.6,-95,209.2,196.7), new cjs.Rectangle(-105.5,-95,211.1,198.1), new cjs.Rectangle(-104.6,-95,209.3,196.6), new cjs.Rectangle(-103.8,-95,207.6,195.4), new cjs.Rectangle(-102.9,-95,205.9,194.2), new cjs.Rectangle(-102.1,-95,204.2,192.9), new cjs.Rectangle(-101.1,-95,202.3,191.6), new cjs.Rectangle(-100.1,-95,200.3,190.3), new cjs.Rectangle(-99.2,-95,198.4,190), new cjs.Rectangle(-98,-95,196.1,190), new cjs.Rectangle(-96.9,-95,193.9,190), new cjs.Rectangle(-96,-95,192,190)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,770);
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


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_2_mc();
	this.instance.setTransform(-114.9,-145.1,0.889,0.889,0,0,0,0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// decor
	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(0,133);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_2 = new lib.animation_question_mark_mc();
	this.instance_2.setTransform(5,0);

	this.instance_3 = new lib.mini_icon_3_img();
	this.instance_3.setTransform(-92,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.select_5_mc();
	this.instance_4.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("AriV4QhYAAg9g+Qg+g9AAhYMAAAglJQAAhYA+g9QA9g+BYAAIXFAAQBYAAA9A+QA+A9AABYMAAAAlJQAABYg+A9Qg9A+hYAAg");
	this.shape.setTransform(0,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,280);
p.frameBounds = [rect, rect, new cjs.Rectangle(-147,-177,242,362)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_2_mc();
	this.instance.setTransform(0,-155);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// decor
	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(0,138);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_2 = new lib.animation_question_mark_mc();
	this.instance_2.setTransform(5,0);

	this.instance_3 = new lib.mini_icon_2_img();
	this.instance_3.setTransform(-43,-103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.select_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("AriV4QhYAAg9g+Qg+g9AAhYMAAAglJQAAhYA+g9QA9g+BYAAIXFAAQBYAAA9A+QA+A9AABYMAAAAlJQAABYg+A9Qg9A+hYAAg");
	this.shape.setTransform(0,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,285);
p.frameBounds = [rect, new cjs.Rectangle(-100,-103,200,288), new cjs.Rectangle(-100,-191,200,376)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_2_mc();
	this.instance.setTransform(115.1,-145.1,0.889,0.889,0,0,0,0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// decor
	this.instance_1 = new lib.check_2_mc();
	this.instance_1.setTransform(0,133);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_2 = new lib.animation_question_mark_mc();
	this.instance_2.setTransform(5,0);

	this.instance_3 = new lib.mini_icon_1_img();
	this.instance_3.setTransform(-70,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// bg
	this.instance_4 = new lib.select_5_mc();
	this.instance_4.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("AriV4QhYAAg9g+Qg+g9AAhYMAAAglJQAAhYA+g9QA9g+BYAAIXFAAQBYAAA9A+QA+A9AABYMAAAAlJQAABYg+A9Qg9A+hYAAg");
	this.shape.setTransform(0,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,280);
p.frameBounds = [rect, rect, new cjs.Rectangle(-95,-177,242,362)];


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


(lib.hint_location_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.pointer_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,45,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.6,-39.4,141.4,141.4);
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


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.instance = new lib.body_hero_main_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.animation_shadow_hero_main_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-325,730,650);
p.frameBounds = [rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:79,end:159});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-195,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-580},0).wait(38).to({y:-10,alpha:0.012},0).to({alpha:1},15).wait(106));

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-560},0).wait(48).to({y:0,alpha:0.012},0).to({alpha:1},15).wait(96));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(195,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-580},0).wait(58).to({y:-10,alpha:0.012},0).to({alpha:1},15).wait(86));

	// bg
	this.instance = new lib.select_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-560},0).wait(23).to({y:-580},0).to({y:50},11).to({y:0},4).wait(121));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.setTransform(-400,-300);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},15).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-245,660,490);
p.frameBounds = [rect, rect=new cjs.Rectangle(-330,-805,660,490), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330,-825,660,490), new cjs.Rectangle(-330,-767.7,660,490), new cjs.Rectangle(-330,-710.4,660,490), new cjs.Rectangle(-330,-675,660,511.8), new cjs.Rectangle(-330,-675,660,569.1), new cjs.Rectangle(-330,-675,660,626.4), new cjs.Rectangle(-330,-675,660,683.7), new cjs.Rectangle(-330,-675,660,740.9), new cjs.Rectangle(-330,-675,660,798.2), new cjs.Rectangle(-330,-675,660,855.5), new cjs.Rectangle(-330,-675,660,912.8), new cjs.Rectangle(-330,-675,660,970), new cjs.Rectangle(-330,-675,660,957.5), new cjs.Rectangle(-330,-675,660,945), new cjs.Rectangle(-330,-675,660,932.5), rect=new cjs.Rectangle(-330,-675,660,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-610,-310,1220,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-195,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-580},0).wait(38).to({y:-10,alpha:0.012},0).to({alpha:1},15).wait(106));

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-560},0).wait(48).to({y:0,alpha:0.012},0).to({alpha:1},15).wait(96));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(195,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-580},0).wait(58).to({y:-10,alpha:0.012},0).to({alpha:1},15).wait(86));

	// bg
	this.instance = new lib.select_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-560},0).wait(23).to({y:-580},0).to({y:50},11).to({y:0},4).wait(121));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.setTransform(-400,-300);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},15).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-245,660,490);
p.frameBounds = [rect, rect=new cjs.Rectangle(-330,-805,660,490), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330,-825,660,490), new cjs.Rectangle(-330,-767.7,660,490), new cjs.Rectangle(-330,-710.4,660,490), new cjs.Rectangle(-330,-675,660,511.8), new cjs.Rectangle(-330,-675,660,569.1), new cjs.Rectangle(-330,-675,660,626.4), new cjs.Rectangle(-330,-675,660,683.7), new cjs.Rectangle(-330,-675,660,740.9), new cjs.Rectangle(-330,-675,660,798.2), new cjs.Rectangle(-330,-675,660,855.5), new cjs.Rectangle(-330,-675,660,912.8), new cjs.Rectangle(-330,-675,660,970), new cjs.Rectangle(-330,-675,660,957.5), new cjs.Rectangle(-330,-675,660,945), new cjs.Rectangle(-330,-675,660,932.5), rect=new cjs.Rectangle(-330,-675,660,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-610,-310,1220,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// decor
	this.instance = new lib.hint_location_mc();
	this.instance.setTransform(-133,52);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({alpha:1},5).to({alpha:0.102},5).to({_off:true},1).wait(75));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-195,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-580},0).wait(38).to({y:-10,alpha:0.012},0).to({alpha:1},15).wait(106));

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-560},0).wait(48).to({y:0,alpha:0.012},0).to({alpha:1},15).wait(96));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(195,-10);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-580},0).wait(58).to({y:-10,alpha:0.012},0).to({alpha:1},15).wait(86));

	// bg
	this.instance_1 = new lib.select_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-560},0).wait(23).to({y:-580},0).to({y:50},11).to({y:0},4).wait(121));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.setTransform(-400,-300);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},15).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-245,660,490);
p.frameBounds = [rect, rect=new cjs.Rectangle(-330,-805,660,490), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330,-825,660,490), new cjs.Rectangle(-330,-767.7,660,490), new cjs.Rectangle(-330,-710.4,660,490), new cjs.Rectangle(-330,-675,660,511.8), new cjs.Rectangle(-330,-675,660,569.1), new cjs.Rectangle(-330,-675,660,626.4), new cjs.Rectangle(-330,-675,660,683.7), new cjs.Rectangle(-330,-675,660,740.9), new cjs.Rectangle(-330,-675,660,798.2), new cjs.Rectangle(-330,-675,660,855.5), new cjs.Rectangle(-330,-675,660,912.8), new cjs.Rectangle(-330,-675,660,970), new cjs.Rectangle(-330,-675,660,957.5), new cjs.Rectangle(-330,-675,660,945), new cjs.Rectangle(-330,-675,660,932.5), rect=new cjs.Rectangle(-330,-675,660,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-610,-310,1220,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cup4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup2_mc();
	this.instance.setTransform(0,35.7,1.667,1.667);

	this.instance_1 = new lib.flower1_mc();
	this.instance_1.setTransform(8.4,-116.2,1,1,8);

	this.instance_2 = new lib.flower1_mc();
	this.instance_2.setTransform(-32.4,-107.4,1,1,-43.7);

	this.instance_3 = new lib.flower1_mc();
	this.instance_3.setTransform(38.1,-109.6,1,1,34);

	this.instance_4 = new lib.flower1_mc();
	this.instance_4.setTransform(-13.6,-119.9,1,1,-10.5);

	this.instance_5 = new lib.leaf_mc();
	this.instance_5.setTransform(3.1,-53.5,1,0.677);

	this.instance_6 = new lib.leaf_mc();
	this.instance_6.setTransform(-54.4,-70.5,0.744,1,0,89.1,67.3);

	this.instance_7 = new lib.leaf_mc();
	this.instance_7.setTransform(63.9,-71.9,0.735,1,0,-90,-70.4);

	this.instance_8 = new lib.white_part1_mc();
	this.instance_8.setTransform(2.7,29.3,1.01,1.01);

	this.instance_9 = new lib.purple_part1_mc();
	this.instance_9.setTransform(3.3,-22.7,1.006,1.006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-161.1,366,322.3);
p.frameBounds = [rect];


(lib.cup3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup2_mc();
	this.instance.setTransform(0,0,0.958,0.958);

	this.instance_1 = new lib.white_part1_mc();
	this.instance_1.setTransform(1.6,-3.6,0.581,0.581);

	this.instance_2 = new lib.purple_part1_mc();
	this.instance_2.setTransform(1.9,-33.5,0.579,0.579);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.2,-72.1,210.4,144.3);
p.frameBounds = [rect];


(lib.animation3_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-90,-235,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-545,y:-380,alpha:0.012},9).to({_off:true},1).wait(75));

	// animation
	this.instance_1 = new lib.smile3_mc();
	this.instance_1.setTransform(216,-285.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:638,alpha:0.012},9).to({_off:true},1).wait(75));

	// animation
	this.instance_2 = new lib.cup21_mc();
	this.instance_2.setTransform(15.5,-261.3,0.961,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-207.5},9).wait(19).to({rotation:71.5,x:0.4,y:-400},6).to({x:-127.6,y:-369},5).to({x:-112.6,y:-295},5).to({x:-29.6,y:-293},5).to({rotation:22.5,x:-243.1,y:-491.4,alpha:0.012},8).to({_off:true},1).wait(27));

	// animation
	this.instance_3 = new lib.cook3_mc();
	this.instance_3.setTransform(14,-316.8,0.637,0.209);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-209},9).wait(19).to({rotation:64.3,x:73.6,y:-392.1},6).to({scaleX:0.58,x:-49.4,y:-353.1},5).to({scaleX:0.56,rotation:57.3,x:-32.4,y:-274.1},5).to({scaleX:0.29,rotation:64.3,x:75.6,y:-228.1,alpha:0.012},5).to({_off:true},1).wait(35));

	// animation
	this.instance_4 = new lib.cup11_mc();
	this.instance_4.setTransform(16,-273.4,0.961,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-207},9).wait(19).to({rotation:71.5,x:12,y:-403.4},6).to({x:-116,y:-372.4},5).to({x:-101,y:-298.4},5).to({x:-18,y:-296.4},5).to({rotation:22.5,x:-238,y:-502.4,alpha:0.012},8).to({_off:true},1).wait(27));

	// animation
	this.instance_5 = new lib.form4_mc();
	this.instance_5.setTransform(146,-242.9);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({alpha:1},15).wait(15).to({x:644,alpha:0.012},11).to({_off:true},1).wait(9));

	// animation
	this.instance_6 = new lib.form3_mc();
	this.instance_6.setTransform(634,-242.8);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.instance_7 = new lib.desk2_mc();
	this.instance_7.setTransform(33.2,-623.3);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:146,y:-242.9,alpha:1},10).wait(20).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(76).to({_off:false},0).to({y:-269.3,alpha:1},8).wait(1));

	// animation
	this.instance_8 = new lib.form_mc();
	this.instance_8.setTransform(634,-242.4);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({x:146,y:-242.6,alpha:1},10).wait(36).to({x:644,alpha:0.012},11).to({_off:true},1).wait(9));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-361.3,896,494.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-447.6,-361.2,896,494.6), rect, rect, new cjs.Rectangle(-447.6,-361.2,920.2,494.6), new cjs.Rectangle(-477.2,-361.2,996.6,494.6), new cjs.Rectangle(-527.7,-361.2,1094.1,494.6), new cjs.Rectangle(-578.3,-374.1,1191.5,507.5), new cjs.Rectangle(-628.8,-390.2,1288.9,523.6), new cjs.Rectangle(-679.5,-406.3,1386.5,539.7), rect=new cjs.Rectangle(-447.6,-361.2,896,494.6), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-361.2,1290.1,494.6), new cjs.Rectangle(-447.6,-361.2,1241.3,494.6), new cjs.Rectangle(-447.6,-361.2,1192.5,494.6), new cjs.Rectangle(-447.6,-361.2,1143.7,494.6), new cjs.Rectangle(-447.6,-361.2,1094.9,494.6), new cjs.Rectangle(-447.6,-361.2,1046.2,494.6), new cjs.Rectangle(-447.6,-361.2,997.4,494.6), new cjs.Rectangle(-447.6,-361.2,948.6,494.6), new cjs.Rectangle(-447.6,-361.2,899.8,494.6), new cjs.Rectangle(-447.6,-361.2,896,494.6), new cjs.Rectangle(-447.6,-361.3,896,494.7), new cjs.Rectangle(-447.6,-403.5,896,536.9), new cjs.Rectangle(-447.6,-441.4,896,574.8), new cjs.Rectangle(-447.6,-473.7,896,607.1), new cjs.Rectangle(-447.6,-500.4,896,633.8), new cjs.Rectangle(-447.6,-520.9,896,654.3), new cjs.Rectangle(-447.6,-535.6,896,669), new cjs.Rectangle(-447.6,-529.3,896,662.7), new cjs.Rectangle(-447.6,-523.1,896,656.5), new cjs.Rectangle(-447.6,-516.9,896,650.3), new cjs.Rectangle(-447.6,-510.7,896,644.1), new cjs.Rectangle(-447.6,-504.6,896,638), new cjs.Rectangle(-447.6,-489.7,896,623.1), new cjs.Rectangle(-447.6,-474.9,896,608.3), new cjs.Rectangle(-447.6,-460.1,896,593.5), new cjs.Rectangle(-447.6,-445.3,896,578.7), new cjs.Rectangle(-447.6,-430.6,896,564), new cjs.Rectangle(-447.6,-430.1,896,563.5), new cjs.Rectangle(-447.6,-429.7,896,563.1), new cjs.Rectangle(-447.6,-429.3,896,562.7), new cjs.Rectangle(-447.6,-428.9,896,562.3), new cjs.Rectangle(-447.6,-428.6,896,562), new cjs.Rectangle(-447.6,-458.6,896,592), new cjs.Rectangle(-447.6,-487.2,896,620.6), new cjs.Rectangle(-447.6,-514.2,896,647.6), new cjs.Rectangle(-447.6,-539.6,896,673), new cjs.Rectangle(-447.6,-563.4,896,696.8), new cjs.Rectangle(-447.6,-585.5,896,718.9), new cjs.Rectangle(-447.6,-606.3,896,739.7), new cjs.Rectangle(-447.6,-625.7,896,759.1), rect=new cjs.Rectangle(-447.6,-347.9,896,481.3), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-347.9,938,481.3), new cjs.Rectangle(-447.6,-347.9,983.3,481.3), new cjs.Rectangle(-447.6,-347.9,1028.5,481.3), new cjs.Rectangle(-447.6,-347.9,1073.8,481.3), new cjs.Rectangle(-447.6,-347.9,1119.1,481.3), new cjs.Rectangle(-447.6,-347.9,1164.4,481.3), new cjs.Rectangle(-447.6,-347.9,1209.6,481.3), new cjs.Rectangle(-447.6,-347.9,1254.9,481.3), new cjs.Rectangle(-447.6,-347.9,1300.2,481.3), new cjs.Rectangle(-447.6,-787.1,896,920.5), new cjs.Rectangle(-447.6,-742.8,896,876.2), new cjs.Rectangle(-447.6,-698.6,896,832), new cjs.Rectangle(-447.6,-654.3,896,787.7), new cjs.Rectangle(-447.6,-610.1,896,743.5), new cjs.Rectangle(-447.6,-565.8,896,699.2), new cjs.Rectangle(-447.6,-521.6,896,655), new cjs.Rectangle(-447.6,-477.3,896,610.7), new cjs.Rectangle(-447.6,-433.1,896,566.5)];


(lib.animation3_49_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(10,-45,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:-360,y:-350,alpha:0.012},9).to({_off:true},1).wait(80));

	// animation
	this.instance_1 = new lib.microwave2_mc();
	this.instance_1.setTransform(30.5,30.9,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(89));

	// animation
	this.instance_2 = new lib.heart_mc();
	this.instance_2.setTransform(191.4,-233.6,0.52,0.52);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({scaleX:1,scaleY:1,x:137.4,y:-402.6},7).to({x:31.4,y:-339.3,alpha:0.012},6).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.heart_mc();
	this.instance_3.setTransform(191.4,-233.6,0.52,0.52);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({scaleX:1,scaleY:1,x:137.4,y:-402.6},7).to({x:31.4,y:-339.3,alpha:0.012},6).to({_off:true},1).wait(5));

	// animation
	this.instance_4 = new lib.heart_mc();
	this.instance_4.setTransform(191.4,-233.6,0.52,0.52);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,x:137.4,y:-402.6},7).to({x:31.4,y:-339.3,alpha:0.012},6).to({_off:true},1).wait(10));

	// animation
	this.instance_5 = new lib.smile3_mc();
	this.instance_5.setTransform(216,-487.6);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({y:-285.6,alpha:1},8).to({y:-274.6},2).to({y:-285.6},3).wait(21));

	// animation
	this.instance_6 = new lib.cup21_mc();
	this.instance_6.setTransform(-175,-282.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({scaleX:0.7,scaleY:0.7,x:17.7,y:-305.6},15).to({_off:true},1).wait(16).to({_off:false},0).to({scaleX:0.96,scaleY:0.96,x:15.5,y:-261.3},10).wait(34));

	// animation
	this.instance_7 = new lib.choc1_mc();
	this.instance_7.setTransform(-174,-326);

	this.instance_8 = new lib.cook3_mc();
	this.instance_8.setTransform(16.5,-346,0.464,0.152);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({scaleX:0.7,scaleY:0.7,x:18.4,y:-336.1},15).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).to({scaleX:0.64,scaleY:0.21,x:14,y:-316.8},10).wait(34));

	// animation
	this.instance_9 = new lib.cup11_mc();
	this.instance_9.setTransform(-174.5,-294.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({scaleX:0.7,scaleY:0.7,x:18,y:-314.4},15).to({_off:true},1).wait(16).to({_off:false},0).to({scaleX:0.96,scaleY:0.96,x:16,y:-273.4},10).wait(34));

	// animation
	this.instance_10 = new lib.back_podl2_mc();
	this.instance_10.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// animation
	this.instance_11 = new lib.back_podl1_mc();
	this.instance_11.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

	// animation
	this.instance_12 = new lib.microwave1_mc();
	this.instance_12.setTransform(13,-527.5);
	this.instance_12.alpha = 0.012;

	this.instance_13 = new lib.microwave2_mc();
	this.instance_13.setTransform(58,-318.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:-304.5,alpha:1},14).wait(15).to({_off:true,x:58,y:-318.5},1).wait(15).to({_off:false,x:13,y:-304.5},1).to({y:-527.5,alpha:0.012},10).wait(32).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},1).wait(15).to({_off:true,x:13,y:-304.5},1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-713,896,846.4);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-697,896,830.4), new cjs.Rectangle(-447.6,-681.1,896,814.5), new cjs.Rectangle(-447.6,-665.2,896,798.6), new cjs.Rectangle(-447.6,-649.3,896,782.7), new cjs.Rectangle(-447.6,-633.3,896,766.7), new cjs.Rectangle(-447.6,-617.4,896,750.8), new cjs.Rectangle(-447.6,-601.5,896,734.9), new cjs.Rectangle(-461.1,-585.5,909.5,718.9), new cjs.Rectangle(-492,-569.6,940.4,703), new cjs.Rectangle(-447.6,-553.7,896,687.1), new cjs.Rectangle(-447.6,-537.8,896,671.2), new cjs.Rectangle(-447.6,-521.8,896,655.2), new cjs.Rectangle(-447.6,-505.9,896,639.3), rect=new cjs.Rectangle(-447.6,-490,896,623.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-430,896,563.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-490,896,623.4), new cjs.Rectangle(-447.6,-512.3,896,645.7), new cjs.Rectangle(-447.6,-534.6,896,668), new cjs.Rectangle(-447.6,-556.9,896,690.3), new cjs.Rectangle(-447.6,-579.2,896,712.6), new cjs.Rectangle(-447.6,-601.5,896,734.9), new cjs.Rectangle(-447.6,-623.8,896,757.2), new cjs.Rectangle(-447.6,-646.1,896,779.5), new cjs.Rectangle(-447.6,-668.4,896,801.8), new cjs.Rectangle(-447.6,-690.7,896,824.1), rect=new cjs.Rectangle(-447.6,-713,896,846.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-361.3,896,494.7)];


(lib.animation3_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(140,10,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-440,y:-260,alpha:0.012},9).to({_off:true},1).wait(40));

	// animation
	this.instance_1 = new lib.sok3_mc();
	this.instance_1.setTransform(233.7,27.9,0.668,0.668);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.85,scaleY:0.85,x:19.2,y:-485.1},9).to({scaleX:0.6,x:20.2,y:-418.1},5).to({y:-315.1,alpha:0.012},5).to({_off:true},1).wait(30));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(232.4,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:20.4,y:-485.6},9).to({scaleY:0.93,y:-478.1},5).wait(5).to({scaleY:1,y:-587.1,alpha:0.012},7).to({_off:true},1).wait(23));

	// animation
	this.instance_3 = new lib.sok3_mc();
	this.instance_3.setTransform(22.7,-287.1,0.841,0.841);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},5).wait(12).to({x:-183.3},8).wait(11));

	// animation
	this.instance_4 = new lib.smes9_mc();
	this.instance_4.setTransform(24.4,-287.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:true},1).wait(31));

	// animation
	this.instance_5 = new lib.kastr_mc();
	this.instance_5.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({x:-278},8).wait(11));

	// animation
	this.instance_6 = new lib.plita_mc();
	this.instance_6.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({x:-582.6,alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_7 = new lib.form_mc();
	this.instance_7.setTransform(685,-275.6);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({x:177,alpha:1},10).wait(1));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442.4,896,575.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-456.7,-469.1,905.1,602.5), new cjs.Rectangle(-521.1,-528.6,969.5,662), new cjs.Rectangle(-585.9,-588.1,1034.3,721.5), new cjs.Rectangle(-447.6,-585.1,896,718.5), new cjs.Rectangle(-447.6,-582.1,896,715.5), new cjs.Rectangle(-447.6,-579.1,896,712.5), new cjs.Rectangle(-447.6,-576.1,896,709.5), new cjs.Rectangle(-447.6,-573.1,896,706.5), rect=new cjs.Rectangle(-447.6,-573,896,706.4), rect, rect, rect, new cjs.Rectangle(-447.6,-573.1,896,706.5), new cjs.Rectangle(-447.6,-589.7,896,723.1), new cjs.Rectangle(-447.6,-606.3,896,739.7), new cjs.Rectangle(-447.6,-623,896,756.4), new cjs.Rectangle(-447.6,-639.6,896,773), new cjs.Rectangle(-447.6,-656.2,896,789.6), new cjs.Rectangle(-447.6,-672.9,896,806.3), new cjs.Rectangle(-447.6,-689.6,896,823), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-512.6,-442.4,961,575.8), new cjs.Rectangle(-588.6,-442.4,1037,575.8), new cjs.Rectangle(-664.6,-442.4,1113,575.8), new cjs.Rectangle(-740.6,-442.4,1634.1,575.8), new cjs.Rectangle(-492.5,-408.6,1335.2,542), new cjs.Rectangle(-492.5,-408.6,1284.4,542), new cjs.Rectangle(-492.5,-408.6,1233.6,542), new cjs.Rectangle(-492.5,-408.6,1182.8,542), new cjs.Rectangle(-492.5,-408.6,1132,542), new cjs.Rectangle(-492.5,-408.6,1081.2,542), new cjs.Rectangle(-492.5,-408.6,1030.4,542), new cjs.Rectangle(-492.5,-408.6,979.6,542), rect=new cjs.Rectangle(-492.5,-408.6,940.9,542), rect];


(lib.animation3_39_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-75,10,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-450,y:-70,alpha:0.012},9).to({_off:true},1).wait(40));

	// animation
	this.instance_1 = new lib.sok2_mc();
	this.instance_1.setTransform(13.2,27.9,0.668,0.668);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.85,scaleY:0.85,x:19.2,y:-485.1},9).to({scaleX:0.6,x:20.2,y:-418.1},5).to({y:-315.1,alpha:0.012},5).to({_off:true},1).wait(30));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(11.9,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:20.4,y:-485.6},9).to({scaleY:0.93,y:-478.1},5).wait(5).to({scaleY:1,y:-587.1,alpha:0.012},7).to({_off:true},1).wait(23));

	// animation
	this.instance_3 = new lib.sok3_1_mc();
	this.instance_3.setTransform(232.4,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// animation
	this.instance_4 = new lib.sok2_mc();
	this.instance_4.setTransform(22.7,-287.1,0.841,0.841);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},5).wait(12).to({x:-183.3},8).wait(11));

	// animation
	this.instance_5 = new lib.smes9_mc();
	this.instance_5.setTransform(24.4,-287.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:true},1).wait(31));

	// animation
	this.instance_6 = new lib.kastr_mc();
	this.instance_6.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({x:-278},8).wait(11));

	// animation
	this.instance_7 = new lib.plita_mc();
	this.instance_7.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({x:-582.6,alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_8 = new lib.form_mc();
	this.instance_8.setTransform(685,-275.6);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({x:177,alpha:1},10).wait(1));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442.4,896,575.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-470.6,-442.4,919,575.8), new cjs.Rectangle(-512.3,-469.1,960.7,602.5), new cjs.Rectangle(-554,-528.6,1002.4,662), new cjs.Rectangle(-595.9,-588.1,1044.3,721.5), new cjs.Rectangle(-447.6,-585.1,896,718.5), new cjs.Rectangle(-447.6,-582.1,896,715.5), new cjs.Rectangle(-447.6,-579.1,896,712.5), new cjs.Rectangle(-447.6,-576.1,896,709.5), new cjs.Rectangle(-447.6,-573.1,896,706.5), rect=new cjs.Rectangle(-447.6,-573,896,706.4), rect, rect, rect, new cjs.Rectangle(-447.6,-573.1,896,706.5), new cjs.Rectangle(-447.6,-589.7,896,723.1), new cjs.Rectangle(-447.6,-606.3,896,739.7), new cjs.Rectangle(-447.6,-623,896,756.4), new cjs.Rectangle(-447.6,-639.6,896,773), new cjs.Rectangle(-447.6,-656.2,896,789.6), new cjs.Rectangle(-447.6,-672.9,896,806.3), new cjs.Rectangle(-447.6,-689.6,896,823), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-512.6,-442.4,961,575.8), new cjs.Rectangle(-588.6,-442.4,1037,575.8), new cjs.Rectangle(-664.6,-442.4,1113,575.8), new cjs.Rectangle(-740.6,-442.4,1634.1,575.8), new cjs.Rectangle(-492.5,-408.6,1335.2,542), new cjs.Rectangle(-492.5,-408.6,1284.4,542), new cjs.Rectangle(-492.5,-408.6,1233.6,542), new cjs.Rectangle(-492.5,-408.6,1182.8,542), new cjs.Rectangle(-492.5,-408.6,1132,542), new cjs.Rectangle(-492.5,-408.6,1081.2,542), new cjs.Rectangle(-492.5,-408.6,1030.4,542), new cjs.Rectangle(-492.5,-408.6,979.6,542), rect=new cjs.Rectangle(-492.5,-408.6,940.9,542), rect];


(lib.animation3_35_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-175.1,-30,1,1,0,-150,30,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:299.9,y:-225,alpha:0.012},9).to({_off:true},1).wait(40));

	// animation
	this.instance_1 = new lib.sok1_mc();
	this.instance_1.setTransform(-207.3,27.9,0.668,0.668);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.84,scaleY:0.84,x:20.7,y:-485.1},9).to({scaleX:0.67,scaleY:0.93,y:-417.6},5).to({y:-333.6,alpha:0.012},5).to({_off:true},1).wait(30));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(-208.6,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:20.4,y:-485.6},9).to({scaleY:0.93,y:-478.1},5).wait(5).to({scaleY:1,y:-587.1,alpha:0.012},7).to({_off:true},1).wait(23));

	// animation
	this.instance_3 = new lib.sok1_mc();
	this.instance_3.setTransform(22.7,-287.1,0.841,0.841);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},5).wait(12).to({x:-183.3},8).wait(11));

	// animation
	this.instance_4 = new lib.smes9_mc();
	this.instance_4.setTransform(24.4,-287.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:true},1).wait(31));

	// animation
	this.instance_5 = new lib.sok2_1_mc();
	this.instance_5.setTransform(11.9,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.sok3_1_mc();
	this.instance_6.setTransform(232.4,27.4,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.kastr_mc();
	this.instance_7.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({x:-278},8).wait(11));

	// animation
	this.instance_8 = new lib.plita_mc();
	this.instance_8.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({x:-582.6,alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_9 = new lib.form_mc();
	this.instance_9.setTransform(685,-275.6);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({x:177,alpha:1},10).wait(1));

	// animation
	this.instance_10 = new lib.back_podl2_mc();
	this.instance_10.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// animation
	this.instance_11 = new lib.back_podl1_mc();
	this.instance_11.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442.4,896,575.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-469.1,896,602.5), new cjs.Rectangle(-447.6,-528.6,896,662), new cjs.Rectangle(-447.6,-588.1,896,721.5), new cjs.Rectangle(-447.6,-585.1,896,718.5), new cjs.Rectangle(-447.6,-582.1,896,715.5), new cjs.Rectangle(-447.6,-579.1,896,712.5), new cjs.Rectangle(-447.6,-576.1,896,709.5), new cjs.Rectangle(-447.6,-573.1,896,706.5), rect=new cjs.Rectangle(-447.6,-573,896,706.4), rect, rect, rect, new cjs.Rectangle(-447.6,-573.1,896,706.5), new cjs.Rectangle(-447.6,-589.7,896,723.1), new cjs.Rectangle(-447.6,-606.3,896,739.7), new cjs.Rectangle(-447.6,-623,896,756.4), new cjs.Rectangle(-447.6,-639.6,896,773), new cjs.Rectangle(-447.6,-656.2,896,789.6), new cjs.Rectangle(-447.6,-672.9,896,806.3), new cjs.Rectangle(-447.6,-689.6,896,823), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-512.6,-442.4,961,575.8), new cjs.Rectangle(-588.6,-442.4,1037,575.8), new cjs.Rectangle(-664.6,-442.4,1113,575.8), new cjs.Rectangle(-740.6,-442.4,1634.1,575.8), new cjs.Rectangle(-492.5,-408.6,1335.2,542), new cjs.Rectangle(-492.5,-408.6,1284.4,542), new cjs.Rectangle(-492.5,-408.6,1233.6,542), new cjs.Rectangle(-492.5,-408.6,1182.8,542), new cjs.Rectangle(-492.5,-408.6,1132,542), new cjs.Rectangle(-492.5,-408.6,1081.2,542), new cjs.Rectangle(-492.5,-408.6,1030.4,542), new cjs.Rectangle(-492.5,-408.6,979.6,542), rect=new cjs.Rectangle(-492.5,-408.6,940.9,542), rect];


(lib.animation3_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(245,15,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-190,y:-15,alpha:0.012},9).to({_off:true},1).wait(70));

	// animation
	this.instance_1 = new lib.smes9_mc();
	this.instance_1.setTransform(24.4,-287.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:1},9).wait(31));

	// animation
	this.instance_2 = new lib.kaplya3_mc();
	this.instance_2.setTransform(-6.6,-329.6,0.268,0.268);
	this.instance_2._off = true;

	this.instance_3 = new lib.sok1_1_mc();
	this.instance_3.setTransform(-208.6,27.4,0.415,0.415);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,x:-4.6,y:-250.6},8).to({scaleX:1.04,scaleY:0.31,x:-3.6,y:-235.6},2).wait(6).to({alpha:0.012},9).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,alpha:1},8).wait(21));

	// animation
	this.instance_4 = new lib.kaplya3_mc();
	this.instance_4.setTransform(-6.6,-329.6,0.268,0.268);
	this.instance_4._off = true;

	this.instance_5 = new lib.sok2_1_mc();
	this.instance_5.setTransform(11.9,27.4,0.405,0.405);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,x:-2.6,y:-266.6},8).to({scaleX:1.04,scaleY:0.31,y:-254.6},2).wait(18).to({alpha:0.012},9).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,alpha:1},8).wait(13));

	// animation
	this.instance_6 = new lib.kaplya3_mc();
	this.instance_6.setTransform(-6.6,-329.6,0.268,0.268);
	this.instance_6._off = true;

	this.instance_7 = new lib.sok3_1_mc();
	this.instance_7.setTransform(232.4,27.4,0.405,0.405);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,x:-17.6,y:-275.6},8).to({scaleX:1.04,scaleY:0.31,x:-15.6,y:-266.6},2).wait(12).to({alpha:0.012},9).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,alpha:1},8).wait(5));

	// animation
	this.instance_8 = new lib.lemon_mc();
	this.instance_8.setTransform(299.4,20.4,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,x:-23.6,y:-381.6},9).to({scaleX:0.76},3).to({scaleX:1},3).to({scaleX:0.76},3).to({scaleX:1},3).to({scaleX:0.76},3).to({x:-133.6,y:-576.6,alpha:0.012},10).to({_off:true},1).wait(45));

	// animation
	this.instance_9 = new lib.karame_mc();
	this.instance_9.setTransform(23.4,-276.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_10 = new lib.kastr_mc();
	this.instance_10.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.plita_mc();
	this.instance_11.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// animation
	this.instance_12 = new lib.back_podl2_mc();
	this.instance_12.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// animation
	this.instance_13 = new lib.back_podl1_mc();
	this.instance_13.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442.4,896,575.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-454.1,896,587.5), new cjs.Rectangle(-447.6,-473.6,896,607), new cjs.Rectangle(-447.6,-493.1,896,626.5), new cjs.Rectangle(-447.6,-512.6,896,646), new cjs.Rectangle(-447.6,-532.1,896,665.5), new cjs.Rectangle(-447.6,-551.6,896,685), new cjs.Rectangle(-447.6,-571.1,896,704.5), new cjs.Rectangle(-447.6,-590.6,896,724), new cjs.Rectangle(-447.6,-610.1,896,743.5), new cjs.Rectangle(-447.6,-629.6,896,763), rect=new cjs.Rectangle(-447.6,-442.4,896,575.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(60,20,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-480,y:-220,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.lemon_mc();
	this.instance_1.setTransform(299.4,20.4,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.spoon_inv_mc();
	this.instance_2.setTransform(297.5,-535.9,1,1,-108.6);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:322.7,y:-346.9,alpha:1},9).wait(1));

	// animation
	this.instance_3 = new lib.sugar_mc();
	this.instance_3.setTransform(136.4,27.4,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:272.4,y:-226.8},9).wait(1));

	// animation
	this.instance_4 = new lib.jelly2_mc();
	this.instance_4.setTransform(19,-262.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.kastr_mc();
	this.instance_5.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.plita_mc();
	this.instance_6.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-609.7,896,743.1);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-588.6,896,722), new cjs.Rectangle(-447.6,-567.6,896,701), new cjs.Rectangle(-447.6,-546.6,896,680), new cjs.Rectangle(-447.6,-525.6,896,659), new cjs.Rectangle(-447.6,-504.6,896,638), new cjs.Rectangle(-447.6,-483.6,896,617), new cjs.Rectangle(-505.5,-462.6,953.9,596), new cjs.Rectangle(-565.5,-442.4,1013.9,575.8), new cjs.Rectangle(-625.9,-442.4,1074.3,575.8)];


(lib.animation3_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-105,25,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-600,y:-200,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.lemon_mc();
	this.instance_1.setTransform(299.4,20.4,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.sugar_mc();
	this.instance_2.setTransform(136.4,27.4,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.jelly1_mc();
	this.instance_3.setTransform(-44,23.4,0.837,0.837);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-15.8,x:252.1,y:-300.6},9).wait(1));

	// animation
	this.instance_4 = new lib.kastr_mc();
	this.instance_4.setTransform(-72,-289.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.plita_mc();
	this.instance_5.setTransform(25.4,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442.4,896,575.8);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-470.6,-442.4,919,575.8), new cjs.Rectangle(-525.6,-442.4,974,575.8), new cjs.Rectangle(-580.6,-442.4,1029,575.8), new cjs.Rectangle(-635.6,-442.4,1084,575.8), new cjs.Rectangle(-690.6,-442.4,1139,575.8), new cjs.Rectangle(-745.9,-442.4,1194.3,575.8)];


(lib.animation3_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-225,-65,1,1,0,-150,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:570,y:180,alpha:0.012},9).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.lemon_mc();
	this.instance_1.setTransform(299.4,20.4,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.sugar_mc();
	this.instance_2.setTransform(136.4,27.4,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.jelly1_mc();
	this.instance_3.setTransform(-44,23.4,0.837,0.837);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.kastr_mc();
	this.instance_4.setTransform(-72,-573.6);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({y:-289.6,alpha:1},8).wait(1));

	// animation
	this.instance_5 = new lib.plita_mc();
	this.instance_5.setTransform(-232.6,28,0.532,0.532);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,x:25.4,y:-284.9},9).wait(6));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-192.8,896,326.2);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-165.5,896,298.9), new cjs.Rectangle(-447.6,-141.6,896,275), new cjs.Rectangle(-447.6,-184.5,896,317.9), new cjs.Rectangle(-447.6,-227.5,896,360.9), new cjs.Rectangle(-447.6,-270.4,896,403.8), new cjs.Rectangle(-447.6,-692.6,896,827.1), new cjs.Rectangle(-447.6,-657.1,968,818.8), new cjs.Rectangle(-447.6,-621.6,1056.3,810.5), new cjs.Rectangle(-447.6,-586.1,1145.2,802.5), new cjs.Rectangle(-447.6,-550.6,896,684), new cjs.Rectangle(-447.6,-515.1,896,648.5), new cjs.Rectangle(-447.6,-479.6,896,613), new cjs.Rectangle(-447.6,-444.1,896,577.5), new cjs.Rectangle(-447.6,-442.4,896,575.8)];


(lib.animation3_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-130,0,1,1,0,-105,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:450,y:-180,alpha:0.012},9).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.mixer3_mc();
	this.instance_1.setTransform(-172.7,66.5,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:-36.6,y:-202.6},14).wait(1));

	// animation
	this.instance_2 = new lib.mixer2_mc();
	this.instance_2.setTransform(-188.6,22.2,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:-67,y:-286.9},14).wait(1));

	// animation
	this.instance_3 = new lib.mixer1_mc();
	this.instance_3.setTransform(-172.7,48.1,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:-36.6,y:-237.6},14).wait(1));

	// animation
	this.instance_4 = new lib.watermelons_mc();
	this.instance_4.setTransform(39.7,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:228.7,y:-228},14).wait(1));

	// animation
	this.instance_5 = new lib.plate1_mc();
	this.instance_5.setTransform(34.4,-249.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:223.4,y:-181.6},14).wait(1));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-375,896,508.4);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-370.1,896,503.5), new cjs.Rectangle(-447.6,-365.3,896,498.7), new cjs.Rectangle(-447.6,-360.4,896,493.8), new cjs.Rectangle(-447.6,-355.5,896,488.9), new cjs.Rectangle(-447.6,-350.7,896,484.1), new cjs.Rectangle(-447.6,-345.8,896,479.2), new cjs.Rectangle(-447.6,-341,914.3,474.4), new cjs.Rectangle(-447.6,-336.1,978.8,469.5), new cjs.Rectangle(-447.6,-331.3,1043.6,464.7), new cjs.Rectangle(-447.6,-346.4,896,479.8), new cjs.Rectangle(-447.6,-374.2,896,507.6), new cjs.Rectangle(-447.6,-402.1,896,535.5), new cjs.Rectangle(-447.6,-430,896,563.4), new cjs.Rectangle(-447.6,-457.9,896,591.3)];


(lib.animation3_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-140,0,1,1,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:300,y:260,alpha:0.012},9).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.knife_mc();
	this.instance_1.setTransform(15.4,21.4,0.627,0.627,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.mixer_all_mc();
	this.instance_2.setTransform(-196,24,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:-67,y:-286.9},14).wait(1));

	// animation
	this.instance_3 = new lib.pinapples_mc();
	this.instance_3.setTransform(6.7,-239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:240.7},14).wait(1));

	// animation
	this.instance_4 = new lib.plate1_mc();
	this.instance_4.setTransform(6.4,-201.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:240.4},14).wait(1));

	// animation
	this.instance_5 = new lib.back_podl2_mc();
	this.instance_5.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.back_podl1_mc();
	this.instance_6.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-307,896,440.4);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-447.6,-307,896,446.4), new cjs.Rectangle(-447.6,-307,896,475.3), new cjs.Rectangle(-447.6,-307,896,504.2), new cjs.Rectangle(-447.6,-307,896,533), new cjs.Rectangle(-447.6,-307,896,561.9), new cjs.Rectangle(-447.6,-318.1,896,602.1), new cjs.Rectangle(-447.6,-346,896,479.4), new cjs.Rectangle(-447.6,-373.9,896,507.3), new cjs.Rectangle(-447.6,-402,896,535.4), new cjs.Rectangle(-447.6,-429.9,896,563.3), new cjs.Rectangle(-447.6,-457.9,896,591.3)];


(lib.animation3_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(60,30,1,1,0,-135,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:500,y:-250,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.knife_mc();
	this.instance_1.setTransform(16.4,20.4,0.623,0.623,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-44.2,x:65.4,y:-350.6},9).wait(1));

	// animation
	this.instance_2 = new lib.pinapple1_mc();
	this.instance_2.setTransform(62.4,-281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.desk_mc();
	this.instance_3.setTransform(20,-274.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.back_podl2_mc();
	this.instance_4.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.back_podl1_mc();
	this.instance_5.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-434.1,896,567.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-434.1,944.3,567.5), new cjs.Rectangle(-447.6,-434.1,993.2,567.5), new cjs.Rectangle(-447.6,-438.2,1042.1,571.6), new cjs.Rectangle(-447.6,-483.9,1091.2,617.3)];


(lib.animation3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(245,25,1,1,-130.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:600,y:-160,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.pinapple1_mc();
	this.instance_1.setTransform(191.4,20.4,0.46,0.46,-119.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,x:62.4,y:-281.5},9).wait(1));

	// animation
	this.instance_2 = new lib.knife_mc();
	this.instance_2.setTransform(16.4,20.4,0.623,0.623,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.desk_mc();
	this.instance_3.setTransform(20,-274.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.back_podl2_mc();
	this.instance_4.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.back_podl1_mc();
	this.instance_5.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-434.1,896,570.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-447.6,-434.1,896,567.5), rect, new cjs.Rectangle(-447.6,-434.1,929.3,567.5), new cjs.Rectangle(-447.6,-434.1,968.7,567.5), new cjs.Rectangle(-447.6,-434.1,1008.1,567.5), new cjs.Rectangle(-447.6,-434.1,1047.6,567.5), new cjs.Rectangle(-447.6,-434.1,1087,567.5), new cjs.Rectangle(-447.6,-434.1,1126.4,567.5), new cjs.Rectangle(-447.6,-434.1,1166.1,567.5)];


(lib.animation3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-160,-35,1,1,0,-165,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:410,y:-240,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.pinapple1_mc();
	this.instance_1.setTransform(191.4,20.4,0.46,0.46,-119.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.knife_mc();
	this.instance_2.setTransform(16.4,20.4,0.623,0.623,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.desk_mc();
	this.instance_3.setTransform(-165,26.4,0.346,0.346);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:20,y:-274.6},9).wait(1));

	// animation
	this.instance_4 = new lib.back_podl2_mc();
	this.instance_4.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.back_podl1_mc();
	this.instance_5.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-169.5,896,305.8);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-192.1,896,328.3), new cjs.Rectangle(-447.6,-214.9,896,351), new cjs.Rectangle(-447.6,-237.7,896,373.8), new cjs.Rectangle(-447.6,-260.4,896,396.5), new cjs.Rectangle(-447.6,-283.2,896,419.4), new cjs.Rectangle(-447.6,-306,896,442.1), new cjs.Rectangle(-447.6,-343.9,896,480), new cjs.Rectangle(-447.6,-389,896.6,525.1), new cjs.Rectangle(-447.6,-434.1,960.4,570.4)];


(lib.animation3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(39));

	// animation
	this.instance_1 = new lib.back_podl2_mc();
	this.instance_1.setTransform(0.4,0.4);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},9).wait(21));

	// animation
	this.instance_2 = new lib.pinapple1_mc();
	this.instance_2.setTransform(191.4,20.4,0.215,0.215,-119.6);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({scaleX:0.46,scaleY:0.46,alpha:1},9).wait(1));

	// animation
	this.instance_3 = new lib.knife_mc();
	this.instance_3.setTransform(16.4,20.4,0.237,0.237,-37);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({scaleX:0.62,scaleY:0.62,alpha:1},9).wait(7));

	// animation
	this.instance_4 = new lib.desk_mc();
	this.instance_4.setTransform(-165,26.4,0.184,0.184);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({scaleX:0.35,scaleY:0.35,alpha:1},9).wait(12));

	// animation
	this.instance_5 = new lib.back_podl1_mc();
	this.instance_5.setTransform(14.4,21.4);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},9).wait(21));

	// animation
	this.instance_6 = new lib.go_mc();
	this.instance_6.setTransform(24,13);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_7 = new lib.smile1_mc();
	this.instance_7.setTransform(193.4,-144.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_8 = new lib.focuspocus1_mc();
	this.instance_8.setTransform(20.1,-156,0.508,0.508,0,0,0,0.1,-0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({regX:0,regY:0,x:20,y:-155.9,alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_9 = new lib.smile5_mc();
	this.instance_9.setTransform(-153,-149.6,1,1,0,0,180);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_10 = new lib.win1_mc();
	this.instance_10.setTransform(16.4,-151.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-302.6,142.4,638,388);
p.frameBounds = [rect, rect=new cjs.Rectangle(-302.6,-345.6,638,408.6), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-132.6,896,268.9)];


(lib.animation2_64_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-135,30,1,1,0,-120,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:400,y:200,alpha:0.012},9).to({_off:true},1).wait(50));

	// animation
	this.instance_1 = new lib.stakan_krishka_mc();
	this.instance_1.setTransform(34.9,-346.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({x:29.9,y:-213.6},10).wait(1));

	// animation
	this.instance_2 = new lib.slivki3_mc();
	this.instance_2.setTransform(35.9,-323.2,1,1,0,0,0,0,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({x:30.9,y:-190.2},10).wait(1));

	// animation
	this.instance_3 = new lib.slivki2_mc();
	this.instance_3.setTransform(-29.6,-327.6,1,1,0,0,0,-66,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({x:-34.6,y:-194.6},10).wait(1));

	// animation
	this.instance_4 = new lib.stakan_mc();
	this.instance_4.setTransform(35,-231.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({x:30,y:-98.2},10).wait(1));

	// animation
	this.instance_5 = new lib.solominka_mc();
	this.instance_5.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,x:-128,y:-327.2},10).to({x:-2,y:-609.2},6).to({x:22.5,y:-514.2},7).to({x:34.5,y:-317.1},6).wait(20).to({x:29.5,y:-184.1},10).wait(1));

	// animation
	this.instance_6 = new lib.slivki1_mc();
	this.instance_6.setTransform(-31.6,-302.6,1,1,0,0,0,-67,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({x:-36.6,y:-169.6},10).wait(1));

	// animation
	this.instance_7 = new lib.tea6_mc();
	this.instance_7.setTransform(35.4,-218.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({x:30.4,y:-85.6},10).wait(1));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(37).to({y:273.3,alpha:0.012},12).to({_off:true},1).wait(10));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(37).to({y:294.3,alpha:0.012},12).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-411.7,896,545.1);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-447.6,-411.7,896,560.4), new cjs.Rectangle(-447.6,-411.7,896,579.3), new cjs.Rectangle(-447.6,-411.7,896,598.2), new cjs.Rectangle(-447.6,-411.7,896,617.1), new cjs.Rectangle(-447.6,-411.7,896,635.9), new cjs.Rectangle(-447.6,-422.4,937.7,665.5), new cjs.Rectangle(-447.6,-467,997.5,729.1), new cjs.Rectangle(-447.6,-511.7,896,645.1), new cjs.Rectangle(-447.6,-558.7,896,692.1), new cjs.Rectangle(-447.6,-605.7,896,739.1), new cjs.Rectangle(-447.6,-652.7,896,786.1), new cjs.Rectangle(-447.6,-699.7,896,833.1), new cjs.Rectangle(-447.6,-746.7,896,880.1), new cjs.Rectangle(-447.6,-793.7,896,927.1), new cjs.Rectangle(-447.6,-780.2,896,913.6), new cjs.Rectangle(-447.6,-766.6,896,900), new cjs.Rectangle(-447.6,-753,896,886.4), new cjs.Rectangle(-447.6,-739.4,896,872.8), new cjs.Rectangle(-447.6,-725.9,896,859.3), new cjs.Rectangle(-447.6,-712.3,896,845.7), new cjs.Rectangle(-447.6,-698.7,896,832.1), new cjs.Rectangle(-447.6,-665.9,896,799.3), new cjs.Rectangle(-447.6,-633,896,766.4), new cjs.Rectangle(-447.6,-600.2,896,733.6), new cjs.Rectangle(-447.6,-567.3,896,700.7), new cjs.Rectangle(-447.6,-534.5,896,667.9), rect=new cjs.Rectangle(-447.6,-501.6,896,635), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-501.6,896,657.8), new cjs.Rectangle(-447.6,-501.6,896,680.5), new cjs.Rectangle(-447.6,-501.6,896,703.3), new cjs.Rectangle(-447.6,-501.6,896,726), new cjs.Rectangle(-447.6,-501.6,896,748.8), new cjs.Rectangle(-447.6,-501.6,896,771.5), new cjs.Rectangle(-447.6,-501.6,896,794.2), new cjs.Rectangle(-447.6,-501.6,896,817), new cjs.Rectangle(-447.6,-501.6,896,839.7), new cjs.Rectangle(-447.6,-501.6,896,862.5), new cjs.Rectangle(-447.6,-501.6,896,885.2), new cjs.Rectangle(-447.6,-501.6,896,908), new cjs.Rectangle(-47.1,-488.3,163,376.9), new cjs.Rectangle(-47.6,-475,163,376.9), new cjs.Rectangle(-48.1,-461.7,163,376.9), new cjs.Rectangle(-48.6,-448.4,163,376.9), new cjs.Rectangle(-49.1,-435.1,163,376.9), new cjs.Rectangle(-49.6,-421.8,163,376.9), new cjs.Rectangle(-50.1,-408.5,163,376.9), new cjs.Rectangle(-50.6,-395.2,163,376.9), new cjs.Rectangle(-51.1,-381.9,163,376.9), new cjs.Rectangle(-51.6,-368.6,163,376.9)];


(lib.animation2_62_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-170,-240,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-550,y:-450,alpha:0.012},9).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.stakan_krishka_mc();
	this.instance_1.setTransform(-152.6,-232.1,1,1,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:-116.6,y:-470.1},9).to({x:22.9,y:-457.1},5).to({x:34.9,y:-346.6},5).wait(1));

	// animation
	this.instance_2 = new lib.slivki3_mc();
	this.instance_2.setTransform(35.9,-323.2,1,1,0,0,0,0,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.slivki2_mc();
	this.instance_3.setTransform(-29.6,-327.6,1,1,0,0,0,-66,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.stakan_mc();
	this.instance_4.setTransform(35,-231.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.solominka_mc();
	this.instance_5.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.slivki1_mc();
	this.instance_6.setTransform(-31.6,-302.6,1,1,0,0,0,-67,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// animation
	this.instance_7 = new lib.tea6_mc();
	this.instance_7.setTransform(35.4,-218.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-411.7,896,545.1);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-447.6,-422.4,896,555.8), new cjs.Rectangle(-482.1,-445.7,930.5,579.1), new cjs.Rectangle(-524.3,-469,972.7,602.4), new cjs.Rectangle(-566.6,-492.4,1015,625.8), new cjs.Rectangle(-608.8,-515.7,1057.2,649.1), new cjs.Rectangle(-651,-539,1099.4,672.4), new cjs.Rectangle(-693.5,-562.4,1141.9,695.8), new cjs.Rectangle(-447.6,-509,896,642.4), new cjs.Rectangle(-447.6,-506.4,896,639.8), new cjs.Rectangle(-447.6,-503.8,896,637.2), new cjs.Rectangle(-447.6,-501.2,896,634.6), new cjs.Rectangle(-447.6,-498.6,896,632), new cjs.Rectangle(-447.6,-476.5,896,609.9), new cjs.Rectangle(-447.6,-454.4,896,587.8), new cjs.Rectangle(-447.6,-432.3,896,565.7), rect=new cjs.Rectangle(-447.6,-411.7,896,545.1), rect];


(lib.animation2_58_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(75.1,-5.1,1,1,120,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-359.9,y:-380.1,alpha:0.012},9).to({_off:true},1).wait(25));

	// animation
	this.instance_1 = new lib.glazur2_mc();
	this.instance_1.setTransform(124,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.7,scaleY:0.7,x:77.9,y:-440},9).to({scaleY:0.71,skewX:6.5,x:212.9,y:-438},12).to({scaleY:0.7,skewX:0,x:264.9,y:-636,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.stakan_krishka_mc();
	this.instance_2.setTransform(-152.6,-232.1,1,1,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// animation
	this.instance_3 = new lib.glazur15_mc();
	this.instance_3.setTransform(310,-196.7,0.7,0.7,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// animation
	this.instance_4 = new lib.slivki2_mc();
	this.instance_4.setTransform(-29.6,-327.6,0.112,1,0,0,0,-66.1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regX:-66,scaleX:1},12).wait(14));

	// animation
	this.instance_5 = new lib.stakan_mc();
	this.instance_5.setTransform(35,-231.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// animation
	this.instance_6 = new lib.solominka_mc();
	this.instance_6.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// animation
	this.instance_7 = new lib.slivki1_mc();
	this.instance_7.setTransform(-31.6,-302.6,1,1,0,0,0,-67,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// animation
	this.instance_8 = new lib.tea6_mc();
	this.instance_8.setTransform(35.4,-218.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-342.8,903.8,476.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-383.2,903.8,516.6), new cjs.Rectangle(-447.6,-437.1,903.8,570.5), new cjs.Rectangle(-461.1,-491,917.2,624.4), new cjs.Rectangle(-509.8,-545,965.9,678.4), new cjs.Rectangle(-447.6,-544.9,903.8,678.3), new cjs.Rectangle(-447.6,-544.7,903.8,678.1), new cjs.Rectangle(-447.6,-544.6,903.8,678), new cjs.Rectangle(-447.6,-544.5,903.8,677.9), new cjs.Rectangle(-447.6,-544.3,903.8,677.7), new cjs.Rectangle(-447.6,-544.1,903.8,677.5), new cjs.Rectangle(-447.6,-544,903.8,677.4), new cjs.Rectangle(-447.6,-543.7,903.8,677.1), new cjs.Rectangle(-447.6,-543.6,903.8,677), new cjs.Rectangle(-447.6,-543.4,903.8,676.8), new cjs.Rectangle(-447.6,-543.2,903.8,676.6), new cjs.Rectangle(-447.6,-543,903.8,676.4), new cjs.Rectangle(-447.6,-559.5,903.8,692.9), new cjs.Rectangle(-447.6,-576.1,903.8,709.5), new cjs.Rectangle(-447.6,-592.6,903.8,726), new cjs.Rectangle(-447.6,-609.1,903.8,742.5), new cjs.Rectangle(-447.6,-625.6,903.8,759), new cjs.Rectangle(-447.6,-642.1,903.8,775.5), new cjs.Rectangle(-447.6,-658.7,903.8,792.1), new cjs.Rectangle(-447.6,-675.1,903.8,808.5), new cjs.Rectangle(-447.6,-691.6,903.8,825), new cjs.Rectangle(-447.6,-708.1,903.8,841.5), new cjs.Rectangle(-447.6,-724.5,903.8,857.9), new cjs.Rectangle(-447.6,-741,903.8,874.4), new cjs.Rectangle(-447.6,-345.1,903.8,478.5)];


(lib.animation2_56_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(257.1,-33,1,1,0,150,-30,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:530.1,y:-290,alpha:0.012},9).to({_off:true},1).wait(25));

	// animation
	this.instance_1 = new lib.stakan_krishka_mc();
	this.instance_1.setTransform(-152.6,-232.1,1,1,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// animation
	this.instance_2 = new lib.glazur15_mc();
	this.instance_2.setTransform(283,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.7,scaleY:0.7,rotation:4.3,x:264,y:-455.7},8).to({x:101,y:-414.7},4).to({scaleY:0.7,rotation:0,skewX:10.9,skewY:4.3,x:210},15).to({scaleY:0.7,rotation:34.8,skewX:0,skewY:0,x:310,y:-196.7},7).wait(1));

	// animation
	this.instance_3 = new lib.stakan_mc();
	this.instance_3.setTransform(35,-231.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// animation
	this.instance_4 = new lib.glazur2_mc();
	this.instance_4.setTransform(124,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// animation
	this.instance_5 = new lib.solominka_mc();
	this.instance_5.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// animation
	this.instance_6 = new lib.slivki1_mc();
	this.instance_6.setTransform(-31.6,-302.6,0.215,1,0,0,0,-67,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({scaleX:1},15).wait(8));

	// animation
	this.instance_7 = new lib.tea6_mc();
	this.instance_7.setTransform(35.4,-218.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-337.7,896,471.1);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-376.9,918.3,510.3), new cjs.Rectangle(-447.6,-440.4,948.7,573.8), new cjs.Rectangle(-447.6,-504.4,979,637.8), new cjs.Rectangle(-447.6,-568.3,1009.3,701.7), new cjs.Rectangle(-447.6,-558,1039.7,691.4), new cjs.Rectangle(-447.6,-547.7,896,681.1), new cjs.Rectangle(-447.6,-537.5,896,670.9), new cjs.Rectangle(-447.6,-527.3,896,660.7), new cjs.Rectangle(-447.6,-527.2,896,660.6), rect=new cjs.Rectangle(-447.6,-527.1,896,660.5), rect, new cjs.Rectangle(-447.6,-527,896,660.4), new cjs.Rectangle(-447.6,-526.9,896,660.3), rect=new cjs.Rectangle(-447.6,-527,896,660.4), rect, rect=new cjs.Rectangle(-447.6,-526.8,896,660.2), rect, new cjs.Rectangle(-447.6,-526.7,896,660.1), new cjs.Rectangle(-447.6,-526.6,896,660), new cjs.Rectangle(-447.6,-526.5,896,659.9), rect=new cjs.Rectangle(-447.6,-526.4,896,659.8), rect, rect, new cjs.Rectangle(-447.6,-501.4,896,634.8), new cjs.Rectangle(-447.6,-476.5,896,609.9), new cjs.Rectangle(-447.6,-450.7,896,584.1), new cjs.Rectangle(-447.6,-424.4,896,557.8), new cjs.Rectangle(-447.6,-397.9,896,531.3), new cjs.Rectangle(-447.6,-370.4,896,503.8), new cjs.Rectangle(-447.6,-342.8,903.8,476.2)];


(lib.animation2_54_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-45.1,-30,1,1,165,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-300.1,y:-300,alpha:0.012},9).to({_off:true},1).wait(49));

	// animation
	this.instance_1 = new lib.stakan_krishka_mc();
	this.instance_1.setTransform(-152.6,-232.1,1,1,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59));

	// animation
	this.instance_2 = new lib.glazur15_mc();
	this.instance_2.setTransform(283,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59));

	// animation
	this.instance_3 = new lib.glazur2_mc();
	this.instance_3.setTransform(124,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59));

	// animation
	this.instance_4 = new lib.spoon_inv_mc();
	this.instance_4.setTransform(395,-566.9,1,1,-104.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:320,y:-423.9,alpha:1},8).to({rotation:-128,x:224.2,y:-475.4},8).to({x:158.2,y:-443.4},9).wait(13).to({rotation:-101.8,x:382.1,y:-620.6,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.tap_plate_mc();
	this.instance_5.setTransform(-35.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:211.5,y:-352.6},10).wait(8).to({rotation:-23.5,x:153.1,y:-366.7},8).to({_off:true},1).wait(32));

	// animation
	this.instance_6 = new lib.solominka_mc();
	this.instance_6.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59));

	// animation
	this.instance_7 = new lib.stakan_mc();
	this.instance_7.setTransform(35,-231.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59));

	// animation
	this.instance_8 = new lib.t3_mc();
	this.instance_8.setTransform(146.2,-368);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({x:80.2,y:-351},8).to({rotation:-56.7,x:50.2,y:-308},5).to({x:40.8,y:-206.1,alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_9 = new lib.plate1_mc();
	this.instance_9.setTransform(153.1,-366.7,0.643,0.643,-23.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).wait(21).to({rotation:2.7,x:343.6,y:-554.1,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.tea6_mc();
	this.instance_10.setTransform(35.4,-218.6);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40).to({_off:false},0).to({alpha:1},13).wait(6));

	// animation
	this.instance_11 = new lib.tea5_mc();
	this.instance_11.setTransform(35.4,-218.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},53).wait(6));

	// animation
	this.instance_12 = new lib.back_podl2_mc();
	this.instance_12.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59));

	// animation
	this.instance_13 = new lib.back_podl1_mc();
	this.instance_13.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-337.7,896,471.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-344.4,896,477.8), new cjs.Rectangle(-447.6,-374.4,896,507.8), new cjs.Rectangle(-447.6,-404.4,896,537.8), new cjs.Rectangle(-447.6,-434.5,896,567.9), new cjs.Rectangle(-447.6,-636.2,932.4,769.6), new cjs.Rectangle(-447.6,-618.2,923,751.6), new cjs.Rectangle(-447.6,-600.4,913.6,733.8), new cjs.Rectangle(-447.6,-582.5,904.3,715.9), new cjs.Rectangle(-447.6,-564.6,896,698), new cjs.Rectangle(-447.6,-546.7,896,680.1), new cjs.Rectangle(-447.6,-528.9,896,662.3), new cjs.Rectangle(-447.6,-511,896,644.4), new cjs.Rectangle(-447.6,-493.2,896,626.6), new cjs.Rectangle(-447.6,-502.6,896,636), new cjs.Rectangle(-447.6,-512.1,896,645.5), new cjs.Rectangle(-447.6,-521.4,896,654.8), new cjs.Rectangle(-447.6,-530.3,896,663.7), new cjs.Rectangle(-447.6,-539.2,896,672.6), new cjs.Rectangle(-447.6,-547.9,896,681.3), new cjs.Rectangle(-447.6,-556.3,896,689.7), new cjs.Rectangle(-447.6,-564.5,896,697.9), new cjs.Rectangle(-447.6,-560.8,896,694.2), new cjs.Rectangle(-447.6,-557.2,896,690.6), new cjs.Rectangle(-447.6,-553.7,896,687.1), new cjs.Rectangle(-447.6,-550.1,896,683.5), new cjs.Rectangle(-447.6,-546.5,896,679.9), new cjs.Rectangle(-447.6,-543,896,676.4), new cjs.Rectangle(-447.6,-539.4,896,672.8), new cjs.Rectangle(-447.6,-535.9,896,669.3), new cjs.Rectangle(-447.6,-532.5,896,665.9), rect=new cjs.Rectangle(-447.6,-532.4,896,665.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-532.5,896,665.9), new cjs.Rectangle(-447.6,-550.4,896,683.8), new cjs.Rectangle(-447.6,-568.1,896,701.5), new cjs.Rectangle(-447.6,-585.7,896,719.1), new cjs.Rectangle(-447.6,-603,896,736.4), new cjs.Rectangle(-447.6,-620,896,753.4), new cjs.Rectangle(-447.6,-637,896,770.4), new cjs.Rectangle(-447.6,-653.6,896,787), new cjs.Rectangle(-447.6,-670.2,896,803.6), new cjs.Rectangle(-447.6,-686.8,918,820.2), new cjs.Rectangle(-447.6,-337.7,896,471.1)];


(lib.animation2_50_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-215,-55,1,1,0,-135,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:80,y:-400,alpha:0.012},9).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.glazur15_mc();
	this.instance_1.setTransform(283,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.glazur2_mc();
	this.instance_2.setTransform(124,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.tap_plate_mc();
	this.instance_3.setTransform(-35.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.solominka_mc();
	this.instance_4.setTransform(-158,28.7,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.stakan_krishka_mc();
	this.instance_5.setTransform(-254.6,-32.1,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:-47.2,x:-152.6,y:-232.1},14).wait(1));

	// animation
	this.instance_6 = new lib.stakan_mc();
	this.instance_6.setTransform(-254,45.7,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:35,y:-231.2},14).wait(1));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-167.4,896,300.8);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-205.7,896,339), new cjs.Rectangle(-447.6,-244,896,377.4), new cjs.Rectangle(-447.6,-282.3,896,415.7), new cjs.Rectangle(-447.6,-320.7,896,454.1), new cjs.Rectangle(-447.6,-359,896,492.4), new cjs.Rectangle(-447.6,-397.3,896,530.7), new cjs.Rectangle(-447.6,-435.7,896,569.1), new cjs.Rectangle(-447.6,-474,896,607.4), new cjs.Rectangle(-447.6,-512.4,896,645.8), new cjs.Rectangle(-447.6,-248,896,381.4), new cjs.Rectangle(-447.6,-270.5,896,403.9), new cjs.Rectangle(-447.6,-292.8,896,426.2), new cjs.Rectangle(-447.6,-315.2,896,448.6), new cjs.Rectangle(-447.6,-337.7,896,471.1)];


(lib.animation2_48_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(105,-235,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-80,y:0,alpha:0.012},9).to({_off:true},1).wait(81));

	// animation
	this.instance_1 = new lib.glazur15_mc();
	this.instance_1.setTransform(283,15,0.233,0.233);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},7).wait(1));

	// animation
	this.instance_2 = new lib.glazur2_mc();
	this.instance_2.setTransform(124,15,0.247,0.247);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},7).wait(5));

	// animation
	this.instance_3 = new lib.tap_plate_mc();
	this.instance_3.setTransform(-35.5,20.4,0.445,0.445);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(12));

	// animation
	this.instance_4 = new lib.solominka_mc();
	this.instance_4.setTransform(-158,28.7,0.153,0.153);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({scaleX:0.51,scaleY:0.51},7).wait(19));

	// animation
	this.instance_5 = new lib.stakan1_mc();
	this.instance_5.setTransform(-254.6,28.1,0.264,0.264);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).to({scaleX:0.66,scaleY:0.66},7).wait(26));

	// animation
	this.instance_6 = new lib.cook7_mc();
	this.instance_6.setTransform(164.3,-272.8,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:239.3},10).wait(14).to({x:625.3,alpha:0.012},9).to({_off:true},1).wait(57));

	// animation
	this.instance_7 = new lib.plate2_mc();
	this.instance_7.setTransform(163.5,-274,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:238.5},10).wait(14).to({x:624.5,alpha:0.012},9).to({_off:true},1).wait(57));

	// animation
	this.instance_8 = new lib.cook3_mc();
	this.instance_8.setTransform(-113.7,-272.8,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-199.7},10).wait(37).to({x:-591.6,alpha:0.012},10).to({_off:true},1).wait(33));

	// animation
	this.instance_9 = new lib.plate2_mc();
	this.instance_9.setTransform(-114.5,-274,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-200.5},10).wait(37).to({x:-592.4,alpha:0.012},10).to({_off:true},1).wait(33));

	// animation
	this.instance_10 = new lib.smile2_mc();
	this.instance_10.setTransform(28.4,-16.6);
	this.instance_10.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-272,alpha:1},10).wait(8).to({x:126.4},6).to({x:512.3},9).to({skewY:180,x:476.4},1).to({x:-74.6},13).to({x:-486.6,alpha:0.012},10).to({_off:true},1).wait(33));

	// animation
	this.instance_11 = new lib.back_podl2_mc();
	this.instance_11.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(91));

	// animation
	this.instance_12 = new lib.back_podl1_mc();
	this.instance_12.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-357,896,490.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-357,896,490.4), rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-357,896,490.4), rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, rect, rect, rect, new cjs.Rectangle(-447.6,-357,896,490.4), rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, new cjs.Rectangle(-447.6,-356.9,897.8,490.3), new cjs.Rectangle(-447.6,-356.9,940.7,490.3), new cjs.Rectangle(-447.6,-356.9,983.5,490.3), new cjs.Rectangle(-447.6,-356.9,1026.4,490.3), new cjs.Rectangle(-447.6,-356.9,1069.3,490.3), new cjs.Rectangle(-447.6,-356.9,1112.2,490.3), new cjs.Rectangle(-447.6,-357,1155.1,490.4), new cjs.Rectangle(-447.6,-356.9,995.5,490.3), new cjs.Rectangle(-447.6,-356.9,953.1,490.3), new cjs.Rectangle(-447.6,-356.9,910.8,490.3), rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-357,896,490.4), rect=new cjs.Rectangle(-447.6,-356.9,896,490.3), rect, rect, rect, new cjs.Rectangle(-479.4,-356.9,927.8,490.3), new cjs.Rectangle(-518.6,-356.9,967,490.3), new cjs.Rectangle(-557.8,-356.9,1006.2,490.3), new cjs.Rectangle(-597,-356.9,1045.4,490.3), new cjs.Rectangle(-636.2,-356.9,1084.6,490.3), new cjs.Rectangle(-675.4,-357,1123.8,490.4), rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_44_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(25,-12,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:440,y:-140,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.colors_mc();
	this.instance_1.setTransform(10.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-76.7,x:263.4,y:-387.6},9).wait(1));

	// animation
	this.instance_2 = new lib.cook3_mc();
	this.instance_2.setTransform(164.3,-272.8,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.plate2_mc();
	this.instance_3.setTransform(163.5,-274,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.cook3_mc();
	this.instance_4.setTransform(-113.7,-272.8,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(-114.5,-274,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-357,896,490.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-382.3,907.5,515.7), new cjs.Rectangle(-447.6,-420.6,953.7,554), new cjs.Rectangle(-447.6,-457.2,1000.1,590.6)];


(lib.animation2_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(55,10,1,1,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-260,y:90,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.venchik_mc();
	this.instance_1.setTransform(116,19.4,0.733,0.733,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:16.3,x:72,y:-343.6},9).wait(1));

	// animation
	this.instance_2 = new lib.milk3_mc();
	this.instance_2.setTransform(20,-275.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.plate2_mc();
	this.instance_3.setTransform(20.4,-277.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.back_podl2_mc();
	this.instance_4.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.back_podl1_mc();
	this.instance_5.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-380.1,896,513.5);
p.frameBounds = [rect, rect, new cjs.Rectangle(-447.6,-380.1,896,517.2), new cjs.Rectangle(-447.6,-380.1,896,526), new cjs.Rectangle(-447.6,-380.1,896,534.9), new cjs.Rectangle(-447.6,-380.1,896,543.8), new cjs.Rectangle(-447.6,-380.1,896,552.7), new cjs.Rectangle(-447.6,-389.4,896,570.8), new cjs.Rectangle(-447.6,-434.7,896,625.1), new cjs.Rectangle(-447.6,-475.6,896,675.3)];


(lib.animation2_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-95.1,-15,1,1,0,-150,30,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:264.9,y:-250,alpha:0.012},9).to({_off:true},1).wait(27));

	// animation
	this.instance_1 = new lib.venchik_mc();
	this.instance_1.setTransform(116,19.4,0.733,0.733,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37));

	// animation
	this.instance_2 = new lib.milk2_mc();
	this.instance_2.setTransform(-53.6,-267.9,0.927,0.927,-178.6);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({alpha:1},3).wait(6).to({alpha:0.012},2).to({_off:true},1).wait(12));

	// animation
	this.instance_3 = new lib.milk1_mc();
	this.instance_3.setTransform(-136,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:133.8,x:-115,y:-274.6},9).to({scaleX:0.94,scaleY:0.94,x:-102},4).wait(11).to({rotation:110.8,x:-559.9,y:-264.6,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.milk3_mc();
	this.instance_4.setTransform(20,-275.6,0.531,0.531);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(14));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(20.4,-277.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-380.1,896,513.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-474.4,-380.1,922.8,513.5), new cjs.Rectangle(-515.3,-380.1,963.7,513.5), new cjs.Rectangle(-555.9,-380.1,1004.3,513.5), new cjs.Rectangle(-596.4,-380.1,1044.8,513.5), new cjs.Rectangle(-637,-380.1,1085.4,513.5), new cjs.Rectangle(-447.6,-380.1,896,513.5)];


(lib.animation2_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(135,-265,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-200,alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.t_mc();
	this.instance_1.setTransform(218.9,-266.5,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:567.8,alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_2 = new lib.sito_mc();
	this.instance_2.setTransform(264.4,-222.9,0.998,0.998,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:613.3,alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_3 = new lib.water2_mc();
	this.instance_3.setTransform(219,-268.5,0.592,0.592);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:568,alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.plate2_mc();
	this.instance_4.setTransform(219.4,-269.6,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:568.3,alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.venchik_mc();
	this.instance_5.setTransform(116,19.4,0.285,0.285,110.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({scaleX:0.73,scaleY:0.73},10).wait(1));

	// animation
	this.instance_6 = new lib.milk1_mc();
	this.instance_6.setTransform(-136,30.4,0.302,0.302);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1},10).wait(11));

	// animation
	this.instance_7 = new lib.plate2_mc();
	this.instance_7.setTransform(548.4,-277.6);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({x:20.4,alpha:1},10).wait(20));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-358.4,896,491.8);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-358.1,896,491.5), new cjs.Rectangle(-447.6,-358.1,924.2,491.5), new cjs.Rectangle(-447.6,-358.1,963,491.5), new cjs.Rectangle(-447.6,-358.1,1001.8,491.5), new cjs.Rectangle(-447.6,-358.1,1040.5,491.5), new cjs.Rectangle(-447.6,-358.1,1079.3,491.5), new cjs.Rectangle(-447.6,-358.1,1118.1,491.5), new cjs.Rectangle(-447.6,-358.1,1156.9,491.5), new cjs.Rectangle(-447.6,-358.4,1195.9,491.8), new cjs.Rectangle(-447.6,-380.1,1098.5,513.5), new cjs.Rectangle(-447.6,-380.1,1045.7,513.5), new cjs.Rectangle(-447.6,-380.1,992.9,513.5), new cjs.Rectangle(-447.6,-380.1,940.1,513.5), rect=new cjs.Rectangle(-447.6,-380.1,896,513.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(35,-45,1,1,0,-135,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:350,y:-270,alpha:0.012},9).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.sito_mc();
	this.instance_1.setTransform(27.4,25.1,0.724,0.724,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-44.6,x:264.4,y:-222.9},14).wait(1));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(219.4,-269.6,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.water2_mc();
	this.instance_3.setTransform(-131,-281.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.t_mc();
	this.instance_4.setTransform(-130,-274.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.skovorodka_mc();
	this.instance_5.setTransform(-222.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.plita_mc();
	this.instance_6.setTransform(-130.6,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-437.6,905.9,571), new cjs.Rectangle(-447.6,-437.6,941.2,571), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect];


(lib.animation2_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(55,-275,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:170,alpha:0.012},9).to({_off:true},1).wait(40));

	// animation
	this.instance_1 = new lib.water5_mc();
	this.instance_1.setTransform(167,-276.9,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:656,alpha:0.012},10).to({_off:true},1).wait(39));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(166.4,-279.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:655.3,alpha:0.012},10).to({_off:true},1).wait(39));

	// animation
	this.instance_3 = new lib.sito_mc();
	this.instance_3.setTransform(27.4,25.1,0.347,0.347,-44.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({scaleX:0.72,scaleY:0.72},9).wait(1));

	// animation
	this.instance_4 = new lib.t1_mc();
	this.instance_4.setTransform(569,-264.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({x:209,alpha:1},9).wait(19));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(570.3,-269.6,0.698,0.698);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({x:210.4,alpha:1},9).wait(19));

	// animation
	this.instance_6 = new lib.water2_mc();
	this.instance_6.setTransform(-606,-281.9);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({x:-131,alpha:1},13).wait(26));

	// animation
	this.instance_7 = new lib.skovorodka_mc();
	this.instance_7.setTransform(-697.6,-284.9);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({x:-222.6,alpha:1},13).wait(26));

	// animation
	this.instance_8 = new lib.plita_mc();
	this.instance_8.setTransform(-605.6,-280.1);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).to({x:-130.6,alpha:1},13).wait(26));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-382.1,896,515.5);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-447.6,-382.1,912.1,515.5), new cjs.Rectangle(-447.6,-382.1,961,515.5), new cjs.Rectangle(-447.6,-382.1,1009.9,515.5), new cjs.Rectangle(-447.6,-382.1,1058.8,515.5), new cjs.Rectangle(-447.6,-382.1,1107.7,515.5), new cjs.Rectangle(-447.6,-382.1,1156.6,515.5), new cjs.Rectangle(-447.6,-382.1,1205.4,515.5), new cjs.Rectangle(-913.1,-437.6,1361.5,571), new cjs.Rectangle(-876.6,-437.6,1325,571), new cjs.Rectangle(-840.1,-437.6,1288.5,571), new cjs.Rectangle(-803.5,-437.6,1251.9,571), new cjs.Rectangle(-767,-437.6,1215.4,571), new cjs.Rectangle(-730.4,-437.6,1178.8,571), new cjs.Rectangle(-693.9,-437.6,1142.3,571), new cjs.Rectangle(-657.4,-437.6,1105.8,571), new cjs.Rectangle(-620.8,-437.6,1069.2,571), new cjs.Rectangle(-584.3,-437.6,1032.7,571), new cjs.Rectangle(-547.7,-437.6,996.1,571), new cjs.Rectangle(-511.2,-437.6,1153,571), new cjs.Rectangle(-474.7,-437.6,1076.5,571), new cjs.Rectangle(-447.6,-437.6,1009.4,571), new cjs.Rectangle(-447.6,-437.6,969.4,571), new cjs.Rectangle(-447.6,-437.6,929.4,571), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(160,-45,1,1,130.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-220,y:-100,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.sito_mc();
	this.instance_1.setTransform(232.4,25.1,0.724,0.724,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-44.6,x:189.4,y:-257.9},9).wait(1));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(166.4,-279.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.water5_mc();
	this.instance_3.setTransform(-134,-281.9);
	this.instance_3.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.tea_mc();
	this.instance_4.setTransform(-128.6,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.skovorodka_mc();
	this.instance_5.setTransform(-225.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-407.9,896,541.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-38,-23,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-440,y:-300,alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.plate2_mc();
	this.instance_1.setTransform(12.4,19.4,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:166.4,y:-279.6},10).wait(1));

	// animation
	this.instance_2 = new lib.sito_mc();
	this.instance_2.setTransform(232.4,25.1,0.724,0.724,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// animation
	this.instance_3 = new lib.water5_mc();
	this.instance_3.setTransform(18,-281.9);
	this.instance_3.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-134},10).wait(1));

	// animation
	this.instance_4 = new lib.tea_mc();
	this.instance_4.setTransform(23.4,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-128.6},10).wait(1));

	// animation
	this.instance_5 = new lib.skovorodka_mc();
	this.instance_5.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-225.6},10).wait(1));

	// animation
	this.instance_6 = new lib.plita_mc();
	this.instance_6.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-590.6,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-477.9,-437.6,926.3,571), new cjs.Rectangle(-545.6,-437.6,994,571), new cjs.Rectangle(-613.2,-437.6,1061.6,571), new cjs.Rectangle(-680.9,-437.6,1129.3,571), new cjs.Rectangle(-748.6,-437.6,1197,571), new cjs.Rectangle(-583.5,-412.4,1031.9,545.8)];


(lib.animation2_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-160,-20,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-430,y:-250,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.milk1_mc();
	this.instance_1.setTransform(-190.6,21.4,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-48.4,x:213.4,y:-284.6},9).wait(1));

	// animation
	this.instance_2 = new lib.plate2_mc();
	this.instance_2.setTransform(12.4,19.4,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.sito_mc();
	this.instance_3.setTransform(232.4,25.1,0.724,0.724,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.water2_mc();
	this.instance_4.setTransform(18,-281.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.tea_mc();
	this.instance_5.setTransform(23.4,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.skovorodka_mc();
	this.instance_6.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.plita_mc();
	this.instance_7.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-451,-437.6,899.4,571), new cjs.Rectangle(-480.9,-437.6,929.3,571)];


(lib.animation2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(280,-25,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.9,y:100,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.water6_mc();
	this.instance_1.setTransform(336,27.4,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-42.2,x:226,y:-278},9).wait(1));

	// animation
	this.instance_2 = new lib.karame_mc();
	this.instance_2.setTransform(18.4,-286.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.tea_mc();
	this.instance_3.setTransform(23.4,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.skovorodka_mc();
	this.instance_4.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.plita_mc();
	this.instance_5.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-437.6,896,574.6), new cjs.Rectangle(-447.6,-437.6,896,588.6)];


(lib.animation2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(176,-41,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-260,y:-170,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.water6_mc();
	this.instance_1.setTransform(336,27.4,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.spoon_inv_mc();
	this.instance_2.setTransform(442,-363.9,1,1,-113);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-105.3,x:288,y:-352.9,alpha:1},9).wait(1));

	// animation
	this.instance_3 = new lib.sugar_mc();
	this.instance_3.setTransform(211.4,24.4,0.739,0.739);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:251.4,y:-235.6},9).wait(1));

	// animation
	this.instance_4 = new lib.tea_mc();
	this.instance_4.setTransform(23.4,-287.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.skovorodka_mc();
	this.instance_5.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.plita_mc();
	this.instance_6.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442,982.8,575.4);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-439.7,965.3,573.1), new cjs.Rectangle(-447.6,-437.8,948,571.2), new cjs.Rectangle(-447.6,-437.6,930.5,571), new cjs.Rectangle(-447.6,-437.6,913.1,571), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect];


(lib.animation2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(50,10,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-240,y:80,alpha:0.012},9).to({_off:true},1).wait(40));

	// animation
	this.instance_1 = new lib.water6_mc();
	this.instance_1.setTransform(336,27.4,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// animation
	this.instance_2 = new lib.sugar_mc();
	this.instance_2.setTransform(211.4,24.4,0.739,0.739);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.tea1_mc();
	this.instance_3.setTransform(96,28.4,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:189.9,y:-270.6},9).to({rotation:-65.9,x:169.9,y:-321.6},10).to({x:160.9,y:-314.1},3).to({x:169.9,y:-321.6},3).to({x:160.9,y:-314.1},3).to({x:169.9,y:-321.6},3).to({x:160.9,y:-314.1},3).to({rotation:0,x:487.8,y:-265.1,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.tea3_mc();
	this.instance_4.setTransform(42.4,-285.3);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({alpha:1},6).to({alpha:0.012},9).to({_off:true},1).wait(15));

	// animation
	this.instance_5 = new lib.tea_mc();
	this.instance_5.setTransform(23.4,-287.6);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({alpha:1},9).wait(16));

	// animation
	this.instance_6 = new lib.skovorodka_mc();
	this.instance_6.setTransform(-73.6,-284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.plita_mc();
	this.instance_7.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-437.6,896,578.7), new cjs.Rectangle(-447.6,-437.6,896,586.5), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-437.6,911.7,571), new cjs.Rectangle(-447.6,-437.6,928.3,571), new cjs.Rectangle(-447.6,-437.6,944.2,571), new cjs.Rectangle(-447.6,-437.6,959.6,571), new cjs.Rectangle(-447.6,-437.6,974.7,571), new cjs.Rectangle(-447.6,-437.6,989.5,571), new cjs.Rectangle(-447.6,-437.6,896,571)];


(lib.animation2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-120,5,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-375,y:180},9).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.water6_mc();
	this.instance_1.setTransform(336,27.4,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.sugar_mc();
	this.instance_2.setTransform(211.4,24.4,0.739,0.739);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.tea1_mc();
	this.instance_3.setTransform(96,28.4,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.skovorodka_mc();
	this.instance_4.setTransform(-60.6,20.1,0.508,0.508,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:0,x:-73.6,y:-284.9},14).wait(1));

	// animation
	this.instance_5 = new lib.plita_mc();
	this.instance_5.setTransform(18.4,-280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-437.6,896,571);
p.frameBounds = [rect, rect, new cjs.Rectangle(-447.6,-437.6,896,583.8), new cjs.Rectangle(-447.6,-437.6,896,603.3), new cjs.Rectangle(-447.6,-437.6,896,622.7), new cjs.Rectangle(-447.6,-437.6,896,642.1), new cjs.Rectangle(-447.6,-437.6,896,661.6), new cjs.Rectangle(-452.7,-437.6,901.1,681), new cjs.Rectangle(-481,-437.6,929.4,700.5), new cjs.Rectangle(-509.5,-437.6,957.9,720.4), rect=new cjs.Rectangle(-447.6,-437.6,896,571), rect, rect, rect, rect];


(lib.animation2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-246,-60,1,1,0,-165,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-470,y:-330,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.water6_mc();
	this.instance_1.setTransform(336,27.4,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.sugar_mc();
	this.instance_2.setTransform(211.4,24.4,0.739,0.739);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.tea1_mc();
	this.instance_3.setTransform(96,28.4,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.skovorodka_mc();
	this.instance_4.setTransform(-60.6,20.1,0.508,0.508,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.plita_mc();
	this.instance_5.setTransform(-251.6,28,0.532,0.532);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,x:18.4,y:-280.1},9).wait(1));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-194.5,896,327.9);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-224.3,896,357.7), new cjs.Rectangle(-447.6,-254.3,896,387.7), new cjs.Rectangle(-447.6,-284.3,896,417.7), new cjs.Rectangle(-447.6,-314.3,896,447.7), new cjs.Rectangle(-447.6,-344.3,896,477.7), new cjs.Rectangle(-447.6,-374.3,896,507.7), new cjs.Rectangle(-447.6,-404.3,896,537.7), new cjs.Rectangle(-471.4,-434.3,919.8,567.7), new cjs.Rectangle(-496.3,-464.5,944.7,597.9)];


(lib.animation2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(39));

	// animation
	this.instance_1 = new lib.back_podl2_mc();
	this.instance_1.setTransform(0.4,0.4);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},9).wait(21));

	// animation
	this.instance_2 = new lib.water6_mc();
	this.instance_2.setTransform(336,27.4,0.429,0.429);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,alpha:1},6).wait(3));

	// animation
	this.instance_3 = new lib.sugar_mc();
	this.instance_3.setTransform(211.4,24.4,0.391,0.391);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({scaleX:0.74,scaleY:0.74,alpha:1},6).wait(6));

	// animation
	this.instance_4 = new lib.tea1_mc();
	this.instance_4.setTransform(96,28.4,0.371,0.371);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,alpha:1},6).wait(9));

	// animation
	this.instance_5 = new lib.skovorodka_mc();
	this.instance_5.setTransform(-60.6,20.1,0.263,0.263,31.7);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({scaleX:0.51,scaleY:0.51,alpha:1},6).wait(12));

	// animation
	this.instance_6 = new lib.plita_mc();
	this.instance_6.setTransform(-251.6,28,0.316,0.316);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,alpha:1},6).wait(15));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({alpha:1},9).wait(21));

	// animation
	this.instance_8 = new lib.go_mc();
	this.instance_8.setTransform(24,13);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_9 = new lib.smile1_mc();
	this.instance_9.setTransform(193.4,-144.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_10 = new lib.booba_tea_mc();
	this.instance_10.setTransform(16,-160.5,0.742,0.742);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_11 = new lib.smile4_mc();
	this.instance_11.setTransform(-158,-142.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_12 = new lib.win1_mc();
	this.instance_12.setTransform(16.4,-151.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-302.6,142.4,638,388);
p.frameBounds = [rect, rect=new cjs.Rectangle(-302.6,-345.6,638,408.6), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_76_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.padisara_pudding_mc();
	this.instance.setTransform(6.4,-219.6);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({alpha:1},9).wait(1));

	// animation
	this.instance_1 = new lib.cup4_mc();
	this.instance_1.setTransform(6.5,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.flowers3_mc();
	this.instance_2.setTransform(24,69.9,1,1,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-258,y:-142},10).to({x:-218.1,y:-377},10).to({rotation:-17,x:-20.7,y:-338.9},10).to({alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.flowers3_mc();
	this.instance_3.setTransform(32,79.9,1,1,0,33.9,-146.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:271,y:-181},10).to({x:219,y:-370},10).to({skewX:7.8,skewY:-172.2,x:35.6,y:-327.7},10).to({skewX:7.8,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.flowers3_mc();
	this.instance_4.setTransform(0.7,57.4,1,1,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-225.3,y:-50.6},10).to({x:-207.3,y:-336.8},10).to({scaleX:0.74,scaleY:0.74,rotation:9.3,x:-4.3,y:-375.8},10).to({rotation:9.3,alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.5,-346.1,366,481.5);
p.frameBounds = [rect, new cjs.Rectangle(-176.5,-346.1,366.1,455.3), new cjs.Rectangle(-176.5,-346.1,366.1,437.4), new cjs.Rectangle(-176.5,-346.1,366.1,426.6), new cjs.Rectangle(-176.5,-346.1,366.1,415.8), new cjs.Rectangle(-176.5,-346.1,377.6,405), new cjs.Rectangle(-194.6,-346.1,419.6,394.3), new cjs.Rectangle(-222.8,-346.1,471.7,383.5), new cjs.Rectangle(-251,-346.1,523.8,372.7), new cjs.Rectangle(-279.2,-346.1,575.8,361.9), new cjs.Rectangle(-307.6,-346.1,628.3,351), new cjs.Rectangle(-303.4,-346.1,618.8,322.3), new cjs.Rectangle(-299.5,-346.1,609.7,322.3), new cjs.Rectangle(-295.5,-346.1,600.5,322.3), new cjs.Rectangle(-291.5,-346.1,591.3,322.3), new cjs.Rectangle(-287.5,-346.1,582.1,322.3), new cjs.Rectangle(-283.5,-351.7,572.9,327.8), new cjs.Rectangle(-279.5,-370.6,563.7,346.8), new cjs.Rectangle(-275.5,-389.5,554.5,365.7), new cjs.Rectangle(-271.6,-410.8,545.4,387), new cjs.Rectangle(-267.8,-434.4,536.5,410.6), new cjs.Rectangle(-247.1,-430.5,496.2,406.7), new cjs.Rectangle(-226.6,-426.6,456,402.8), new cjs.Rectangle(-206,-422.7,415.7,398.9), new cjs.Rectangle(-185.3,-418.8,375,395), new cjs.Rectangle(-176.5,-414.8,366.1,391), new cjs.Rectangle(-176.5,-410.7,366.1,386.9), new cjs.Rectangle(-176.5,-406.7,366.1,382.9), new cjs.Rectangle(-176.5,-406.6,366.1,382.8), new cjs.Rectangle(-176.5,-410.7,366.1,386.9), new cjs.Rectangle(-176.6,-415.6,366,392), rect=new cjs.Rectangle(-176.6,-415.6,366.1,392), rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-176.6,-415.6,366,392), rect];


(lib.animation1_70_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-160,-50,1,1,0,-135,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:460,y:-360,alpha:0.012},9).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.cup3_mc();
	this.instance_1.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.74,scaleY:1.74,x:6.5,y:-149.3},9).wait(21));

	// animation
	this.instance_2 = new lib.flower4_mc();
	this.instance_2.setTransform(16.3,226.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:68.7},10).wait(1));

	// animation
	this.instance_3 = new lib.flowers2_mc();
	this.instance_3.setTransform(-548.8,-132.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:-246.9},10).wait(6));

	// animation
	this.instance_4 = new lib.leafs1_mc();
	this.instance_4.setTransform(634.5,-123.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:282.6},10).wait(11));

	// animation
	this.instance_5 = new lib.back_podl2_mc();
	this.instance_5.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:296.4,alpha:0.012},9).to({_off:true},1).wait(20));

	// animation
	this.instance_6 = new lib.back_podl1_mc();
	this.instance_6.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:317.4,alpha:0.012},9).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-162.4,896,295.8);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-196.8,896,363.1), new cjs.Rectangle(-447.6,-231.2,896,430.4), new cjs.Rectangle(-447.6,-265.7,896,497.7), new cjs.Rectangle(-447.6,-300.1,896,565.1), new cjs.Rectangle(-447.6,-334.5,896,632.4), new cjs.Rectangle(-447.6,-369,896,699.7), new cjs.Rectangle(-447.6,-403.4,913,767), new cjs.Rectangle(-447.6,-437.9,981.9,834.4), new cjs.Rectangle(-447.6,-472.4,1162.3,901.8), new cjs.Rectangle(-176.5,-274.8,856,251), new cjs.Rectangle(-176.5,-274.8,820.8,251), new cjs.Rectangle(-176.5,-274.8,785.6,251), new cjs.Rectangle(-176.5,-274.8,750.4,251), new cjs.Rectangle(-616.5,-274.8,1155.2,251), new cjs.Rectangle(-586.3,-274.8,1089.8,251), new cjs.Rectangle(-556.1,-274.8,1024.4,251), new cjs.Rectangle(-525.9,-274.8,959,251), new cjs.Rectangle(-495.7,-274.8,893.6,251), new cjs.Rectangle(-465.5,-274.8,828.3,568.1), new cjs.Rectangle(-435.3,-274.8,798.1,552.3), new cjs.Rectangle(-405.1,-274.8,767.8,536.5), new cjs.Rectangle(-374.9,-274.8,737.7,520.7), new cjs.Rectangle(-344.7,-274.8,707.5,504.9), new cjs.Rectangle(-314.5,-274.8,677.3,489.1), new cjs.Rectangle(-314.5,-274.8,677.3,473.3), new cjs.Rectangle(-314.5,-274.8,677.3,457.5), new cjs.Rectangle(-314.5,-274.8,677.3,441.7), new cjs.Rectangle(-314.5,-274.8,677.3,425.9), new cjs.Rectangle(-314.5,-274.8,677.3,410.2)];


(lib.animation1_68_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.vetki_mc();
	this.instance.setTransform(7,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-592.5,alpha:0.012},18).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.napkin_mc();
	this.instance_1.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-635.1,alpha:0.012},18).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.cup3_mc();
	this.instance_2.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.back_podl2_mc();
	this.instance_3.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.back_podl1_mc();
	this.instance_4.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-460.6,896,594);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-480,896,613.4), new cjs.Rectangle(-447.6,-499.3,896,632.7), new cjs.Rectangle(-447.6,-518.6,896,652), new cjs.Rectangle(-447.6,-538,896,671.4), new cjs.Rectangle(-447.6,-557.3,896,690.7), new cjs.Rectangle(-447.6,-576.6,896,710), new cjs.Rectangle(-447.6,-596,896,729.4), new cjs.Rectangle(-447.6,-615.3,896,748.7), new cjs.Rectangle(-447.6,-634.6,896,768), new cjs.Rectangle(-447.6,-654,896,787.4), new cjs.Rectangle(-447.6,-673.3,896,806.7), new cjs.Rectangle(-447.6,-692.6,896,826), new cjs.Rectangle(-447.6,-712,896,845.4), new cjs.Rectangle(-447.6,-731.3,896,864.7), new cjs.Rectangle(-447.6,-750.6,896,884), new cjs.Rectangle(-447.6,-770,896,903.4), new cjs.Rectangle(-447.6,-789.3,896,922.7), new cjs.Rectangle(-447.6,-808.6,896,942), new cjs.Rectangle(-447.6,-132.6,896,266)];


(lib.animation1_66_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(75,20,1,1,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:300,y:180,alpha:0.012},9).to({_off:true},1).wait(50));

	// animation
	this.instance_1 = new lib.glazur2_mc();
	this.instance_1.setTransform(5.6,18.2,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.7,scaleY:0.7,rotation:12.3,x:75.2,y:-284.7},9).to({scaleX:0.67,scaleY:0.67,x:63.5,y:-280.7},2).to({scaleX:0.7,scaleY:0.7,x:75.2,y:-284.7},2).to({x:179.2,y:-318.5},12).to({scaleX:0.63,scaleY:0.63,x:171.2,y:-313.5},2).to({scaleX:0.7,scaleY:0.7,x:179.2,y:-318.5},2).to({x:72.3,y:-382.5},13).to({scaleX:0.63,scaleY:0.63,x:62.3,y:-377.5},2).to({scaleX:0.7,scaleY:0.7,x:72.3,y:-382.5},2).to({scaleX:0.7,scaleY:0.7,rotation:69.8,x:586.2,y:-323.3,alpha:0.012},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.flower3_mc();
	this.instance_2.setTransform(-50.6,-202.6);

	this.instance_3 = new lib.flower3_mc();
	this.instance_3.setTransform(-50.6,-202.6);

	this.instance_4 = new lib.flower3_mc();
	this.instance_4.setTransform(-50.6,-202.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:-50.6,y:-202.6}}]},11).to({state:[{t:this.instance_3,p:{x:-50.6,y:-202.6}},{t:this.instance_2,p:{x:60.6,y:-231.6}}]},16).to({state:[{t:this.instance_4},{t:this.instance_3,p:{x:60.6,y:-231.6}},{t:this.instance_2,p:{x:-46.1,y:-298.6}}]},17).wait(16));

	// animation
	this.instance_5 = new lib.flower2_mc();
	this.instance_5.setTransform(-16.6,-295.6,1,1,-15.2);

	this.instance_6 = new lib.flower2_mc();
	this.instance_6.setTransform(32.4,-229.6,1,1,0,15.2,-164.8);

	this.instance_7 = new lib.flower2_mc();
	this.instance_7.setTransform(-26.6,-187.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(60));

	// animation
	this.instance_8 = new lib.napkin_mc();
	this.instance_8.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// animation
	this.instance_9 = new lib.cup3_mc();
	this.instance_9.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

	// animation
	this.instance_10 = new lib.back_podl2_mc();
	this.instance_10.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

	// animation
	this.instance_11 = new lib.back_podl1_mc();
	this.instance_11.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-460.6,896,594);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-447.6,-460.6,896,605), new cjs.Rectangle(-447.6,-460.6,896,622.8), new cjs.Rectangle(-447.6,-460.6,896,640.6), new cjs.Rectangle(-447.6,-460.6,896,658.3), new cjs.Rectangle(-447.6,-460.6,896,676.1), new cjs.Rectangle(-447.6,-460.6,896,693.8), new cjs.Rectangle(-447.6,-460.6,896,711.7), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-462.8,896,596.2), new cjs.Rectangle(-447.6,-467.7,896,601.1), new cjs.Rectangle(-447.6,-472.7,896,606.1), new cjs.Rectangle(-447.6,-477.6,896,611), new cjs.Rectangle(-447.6,-482.5,896,615.9), new cjs.Rectangle(-447.6,-487.4,896,620.8), new cjs.Rectangle(-447.6,-492.4,896,625.8), new cjs.Rectangle(-447.6,-497.3,896,630.7), new cjs.Rectangle(-447.6,-502.2,896,635.6), new cjs.Rectangle(-447.6,-507.4,896,640.8), new cjs.Rectangle(-447.6,-498.3,896,631.7), new cjs.Rectangle(-447.6,-489.6,896,623), new cjs.Rectangle(-447.6,-498.3,896,631.7), new cjs.Rectangle(-447.6,-507.4,896,640.8), new cjs.Rectangle(-447.6,-508.4,896,641.8), new cjs.Rectangle(-447.6,-508.8,896,642.2), new cjs.Rectangle(-447.6,-508.2,896,641.6), new cjs.Rectangle(-447.6,-506.7,896,640.1), new cjs.Rectangle(-447.6,-504.3,896,637.7), new cjs.Rectangle(-447.6,-500.6,924.7,634), new cjs.Rectangle(-447.6,-496,967.8,629.4), new cjs.Rectangle(-447.6,-490.4,1010,623.8), new cjs.Rectangle(-447.6,-483.7,1051,617.1), new cjs.Rectangle(-447.6,-476.1,1091.2,609.5), new cjs.Rectangle(-447.6,-467.5,1130.3,600.9), new cjs.Rectangle(-447.6,-460.6,1168.6,594), new cjs.Rectangle(-447.6,-460.6,896,594)];


(lib.animation1_64_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(170,-38,1,1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-200,y:-520,alpha:0.012},9).to({_off:true},1).wait(80));

	// animation
	this.instance_1 = new lib.glazur15_mc();
	this.instance_1.setTransform(206.5,18.2,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.7,scaleY:0.7,x:100.5,y:-244.7},11).to({x:88.5,y:-313.7},9).to({x:69.5,y:-332.7},5).to({x:49.5,y:-307.7},4).to({x:99,y:-295.7},5).to({x:124,y:-358.7},9).to({x:147,y:-371.7},5).to({x:160,y:-358.7},3).to({x:163,y:-341.7},3).to({x:118.1,y:-360.7},7).to({x:82.1,y:-437.7},10).to({x:63.1,y:-433.7},4).to({x:54.1,y:-407.7},4).to({x:43.1,y:-543.7,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.flower2_mc();
	this.instance_2.setTransform(-16.6,-295.6,1,1,-15.2);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).to({alpha:1},18).wait(11));

	// animation
	this.instance_3 = new lib.flower2_mc();
	this.instance_3.setTransform(32.4,-229.6,1,1,0,15.2,-164.8);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({alpha:1},20).wait(36));

	// animation
	this.instance_4 = new lib.flower2_mc();
	this.instance_4.setTransform(-26.6,-187.6);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({alpha:1},18).wait(61));

	// animation
	this.instance_5 = new lib.glazur2_mc();
	this.instance_5.setTransform(5.6,18.2,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// animation
	this.instance_6 = new lib.napkin_mc();
	this.instance_6.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// animation
	this.instance_7 = new lib.cup3_mc();
	this.instance_7.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-460.6,896,594);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-487,896,620.4), new cjs.Rectangle(-447.6,-540.6,896,674), new cjs.Rectangle(-447.6,-594.1,896,727.5), new cjs.Rectangle(-447.6,-647.8,896,781.2), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-463.7,896,597.1), new cjs.Rectangle(-447.6,-466.3,896,599.7), new cjs.Rectangle(-447.6,-468.9,896,602.3), new cjs.Rectangle(-447.6,-471.5,896,604.9), new cjs.Rectangle(-447.6,-474.1,896,607.5), new cjs.Rectangle(-447.6,-476.7,896,610.1), new cjs.Rectangle(-447.6,-472.3,896,605.7), new cjs.Rectangle(-447.6,-468,896,601.4), new cjs.Rectangle(-447.6,-463.7,896,597.1), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-463,896,596.4), new cjs.Rectangle(-447.6,-465.7,896,599.1), new cjs.Rectangle(-447.6,-473.4,896,606.8), new cjs.Rectangle(-447.6,-481.1,896,614.5), new cjs.Rectangle(-447.6,-488.8,896,622.2), new cjs.Rectangle(-447.6,-496.5,896,629.9), new cjs.Rectangle(-447.6,-504.2,896,637.6), new cjs.Rectangle(-447.6,-511.9,896,645.3), new cjs.Rectangle(-447.6,-519.6,896,653), new cjs.Rectangle(-447.6,-527.3,896,660.7), new cjs.Rectangle(-447.6,-535,896,668.4), new cjs.Rectangle(-447.6,-542.7,896,676.1), new cjs.Rectangle(-447.6,-541.7,896,675.1), new cjs.Rectangle(-447.6,-540.7,896,674.1), new cjs.Rectangle(-447.6,-539.7,896,673.1), new cjs.Rectangle(-447.6,-538.7,896,672.1), new cjs.Rectangle(-447.6,-532.1,896,665.5), new cjs.Rectangle(-447.6,-525.6,896,659), new cjs.Rectangle(-447.6,-519.1,896,652.5), new cjs.Rectangle(-447.6,-512.7,896,646.1), new cjs.Rectangle(-447.6,-527.8,896,661.2), new cjs.Rectangle(-447.6,-542.9,896,676.3), new cjs.Rectangle(-447.6,-558,896,691.4), new cjs.Rectangle(-447.6,-573.1,896,706.5), new cjs.Rectangle(-447.6,-588.2,896,721.6), new cjs.Rectangle(-447.6,-603.3,896,736.7), new cjs.Rectangle(-447.6,-618.5,896,751.9), new cjs.Rectangle(-447.6,-633.6,896,767), new cjs.Rectangle(-447.6,-648.7,896,782.1), new cjs.Rectangle(-447.6,-460.6,896,594)];


(lib.animation1_62_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.flowers1_mc();
	this.instance.setTransform(7.5,-278.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-490.9,alpha:0.012},9).to({_off:true},1).wait(15));

	// animation
	this.instance_1 = new lib.glazur15_mc();
	this.instance_1.setTransform(206.5,18.2,0.284,0.284);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,alpha:1},6).to({scaleX:0.66,scaleY:0.66},3).to({scaleX:0.61,scaleY:0.61},3).wait(1));

	// animation
	this.instance_2 = new lib.glazur2_mc();
	this.instance_2.setTransform(5.6,18.2,0.317,0.317);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,alpha:1},7).to({scaleX:0.68,scaleY:0.68},3).to({scaleX:0.61,scaleY:0.61},3).wait(3));

	// animation
	this.instance_3 = new lib.napkin_mc();
	this.instance_3.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// animation
	this.instance_4 = new lib.cup3_mc();
	this.instance_4.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.back_podl2_mc();
	this.instance_5.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.back_podl1_mc();
	this.instance_6.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-460.6,896,594);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-470.1,896,603.5), new cjs.Rectangle(-447.6,-493.6,896,627), new cjs.Rectangle(-447.6,-517.2,896,650.6), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_60_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-265,-245,1,1,0,-75,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:20,y:0,alpha:0.012},9).to({_off:true},1).wait(50));

	// animation
	this.instance_1 = new lib.form_flower_mc();
	this.instance_1.setTransform(-297,-257.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.35,scaleY:1.35,x:-74,y:-282.9},9).to({scaleX:1,scaleY:1,x:-86,y:-275.9},3).to({scaleX:1.35,scaleY:1.35,x:-28,y:-282.9},5).to({scaleX:1,scaleY:1,x:-43,y:-275.9},3).to({scaleX:1.35,scaleY:1.35,x:5.1,y:-282.9},5).to({scaleX:1,scaleY:1,x:1.8,y:-274.9},3).to({scaleX:1.35,scaleY:1.35,x:57.1,y:-276.9},6).to({scaleX:1,scaleY:1,x:51.1,y:-275.9},4).to({scaleX:1.35,scaleY:1.35,x:102.1,y:-276.9},7).to({scaleX:1,scaleY:1},3).to({x:295.1,y:-388.9,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.flower1_mc();
	this.instance_2.setTransform(-86,-278.9,0.7,0.7);

	this.instance_3 = new lib.flower1_mc();
	this.instance_3.setTransform(-86,-278.9,0.7,0.7);

	this.instance_4 = new lib.flower1_mc();
	this.instance_4.setTransform(-86,-278.9,0.7,0.7);

	this.instance_5 = new lib.flower1_mc();
	this.instance_5.setTransform(-86,-278.9,0.7,0.7);

	this.instance_6 = new lib.flower1_mc();
	this.instance_6.setTransform(-86,-278.9,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:-86}}]},12).to({state:[{t:this.instance_3,p:{x:-86}},{t:this.instance_2,p:{x:-44}}]},8).to({state:[{t:this.instance_4,p:{x:-86}},{t:this.instance_3,p:{x:-44}},{t:this.instance_2,p:{x:2}}]},8).to({state:[{t:this.instance_5,p:{x:-86}},{t:this.instance_4,p:{x:-44}},{t:this.instance_3,p:{x:2}},{t:this.instance_2,p:{x:51}}]},10).to({state:[{t:this.instance_6},{t:this.instance_5,p:{x:-44}},{t:this.instance_4,p:{x:2}},{t:this.instance_3,p:{x:51}},{t:this.instance_2,p:{x:101}}]},10).wait(12));

	// animation
	this.instance_7 = new lib.cook_mas7_mc();
	this.instance_7.setTransform(24,-276.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_8 = new lib.napkin_mc();
	this.instance_8.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// animation
	this.instance_9 = new lib.cup3_mc();
	this.instance_9.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

	// animation
	this.instance_10 = new lib.back_podl2_mc();
	this.instance_10.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

	// animation
	this.instance_11 = new lib.back_podl1_mc();
	this.instance_11.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-460.6,896,594);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_58_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.form_flower_mc();
	this.instance.setTransform(-525.9,-257.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({x:-297},10).wait(1));

	// animation
	this.instance_1 = new lib.skalka11_mc();
	this.instance_1.setTransform(24,-167.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-373.1},19).to({y:-180.1},20).to({y:-373.1},20).to({y:-129.1},20).to({y:-492.1,alpha:0.012},19).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.napkin_mc();
	this.instance_2.setTransform(30.4,-312.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({x:52.4,y:-626.1,alpha:0.012},15).to({_off:true},1).wait(5));

	// animation
	this.instance_3 = new lib.cook_mas7_mc();
	this.instance_3.setTransform(24,-276.9);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},20).wait(41));

	// animation
	this.instance_4 = new lib.cook_mas2_mc();
	this.instance_4.setTransform(23.4,-247.5,1,1,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1.39,rotation:0,skewX:-3.2,skewY:-6.2,y:-232.2},19).to({scaleX:1.43},20).to({alpha:0.012},20).to({_off:true},1).wait(40));

	// animation
	this.instance_5 = new lib.cook_mas1_mc();
	this.instance_5.setTransform(-0.1,-326.8,1,1,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1.39,rotation:0,skewX:2.7,skewY:5.2,y:-342.5},19).to({scaleX:1.44},20).to({alpha:0.012},20).to({_off:true},1).wait(40));

	// animation
	this.instance_6 = new lib.napkin_mc();
	this.instance_6.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

	// animation
	this.instance_7 = new lib.cup3_mc();
	this.instance_7.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-485.6,896,619);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-506.6,896,640), new cjs.Rectangle(-447.6,-527.5,896,660.9), new cjs.Rectangle(-447.6,-548.4,896,681.8), new cjs.Rectangle(-447.6,-569.4,896,702.8), new cjs.Rectangle(-447.6,-590.3,896,723.7), new cjs.Rectangle(-447.6,-611.2,896,744.6), new cjs.Rectangle(-447.6,-632.2,896,765.6), new cjs.Rectangle(-447.6,-653.1,896,786.5), new cjs.Rectangle(-447.6,-674,896,807.4), new cjs.Rectangle(-549.9,-695,998.3,828.4), new cjs.Rectangle(-527,-715.9,975.4,849.3), new cjs.Rectangle(-504.1,-736.8,952.5,870.2), new cjs.Rectangle(-481.2,-757.8,929.6,891.2), new cjs.Rectangle(-458.3,-778.7,906.7,912.1), new cjs.Rectangle(-447.6,-799.6,896,933), new cjs.Rectangle(-447.6,-469.3,896,602.7), new cjs.Rectangle(-447.6,-488.4,896,621.8), new cjs.Rectangle(-447.6,-507.5,896,640.9), new cjs.Rectangle(-447.6,-526.6,896,660), new cjs.Rectangle(-447.6,-460.6,896,594)];


(lib.animation1_57_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.leafs_mc();
	this.instance.setTransform(20.9,-281.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-554.9,alpha:0.012},9).to({_off:true},1).wait(63));

	// animation
	this.instance_1 = new lib.skalka11_mc();
	this.instance_1.setTransform(24,-481.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({y:-167.1,alpha:1},11).wait(1));

	// animation
	this.instance_2 = new lib.napkin_mc();
	this.instance_2.setTransform(-81.6,-622.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({x:30.4,y:-312.1,alpha:1},10).wait(12));

	// animation
	this.instance_3 = new lib.cook_mas2_mc();
	this.instance_3.setTransform(605.3,-204.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:196.4},7).to({rotation:-25.9,x:36.4,y:-216.5},8).to({rotation:-4.5,x:23.4,y:-247.5},11).wait(38));

	// animation
	this.instance_4 = new lib.plate1_mc();
	this.instance_4.setTransform(604.3,-192.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:195.4},7).to({rotation:-25.9,x:123.9,y:-240.9},8).to({rotation:-7.2,x:264.9,y:-258.9},11).to({rotation:-7.2,x:610.9,y:-257.9,alpha:0.012},6).to({_off:true},1).wait(31));

	// animation
	this.instance_5 = new lib.cook_mas1_mc();
	this.instance_5.setTransform(-658.6,-204.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:-213.6},7).to({rotation:23.7,x:-41.1,y:-338.8},8).to({rotation:3.7,x:-0.1,y:-326.8},11).to({rotation:3.7},6).wait(32));

	// animation
	this.instance_6 = new lib.plate1_mc();
	this.instance_6.setTransform(-659.6,-192.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:-214.6},7).to({rotation:23.7,x:-131,y:-358.9},8).to({rotation:9.3,x:-233,y:-357.9},11).to({x:-517,y:-390.9,alpha:0.012},6).to({_off:true},1).wait(31));

	// animation
	this.instance_7 = new lib.napkin_mc();
	this.instance_7.setTransform(14.4,-558.1);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({y:-287.1,alpha:1},12).wait(52));

	// animation
	this.instance_8 = new lib.cup3_mc();
	this.instance_8.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-387.4,896,520.8);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-417.8,896,551.2), new cjs.Rectangle(-447.6,-448.1,896,581.5), new cjs.Rectangle(-447.6,-478.4,896,611.8), new cjs.Rectangle(-447.6,-508.8,896,642.2), new cjs.Rectangle(-447.6,-539.1,896,672.5), new cjs.Rectangle(-447.6,-569.4,896,702.8), new cjs.Rectangle(-447.6,-599.8,896,733.2), new cjs.Rectangle(-447.6,-630.1,896,763.5), new cjs.Rectangle(-794.1,-731.6,1532.9,865), new cjs.Rectangle(-730.5,-709,1410.9,842.4), new cjs.Rectangle(-666.9,-686.5,1288.9,819.9), new cjs.Rectangle(-603.4,-663.9,1166.9,797.3), new cjs.Rectangle(-539.8,-641.3,1045,774.7), new cjs.Rectangle(-476.3,-618.7,924.7,752.1), new cjs.Rectangle(-447.6,-596.1,896,729.5), new cjs.Rectangle(-447.6,-573.5,896,706.9), new cjs.Rectangle(-447.6,-551,896,684.4), new cjs.Rectangle(-447.6,-528.4,896,661.8), new cjs.Rectangle(-447.6,-505.8,896,639.2), new cjs.Rectangle(-447.6,-483.2,896,616.6), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, new cjs.Rectangle(-447.6,-463.4,896,596.8), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-460.6,910.4,594), new cjs.Rectangle(-469.2,-460.6,989.6,594), new cjs.Rectangle(-516.5,-460.6,1094.6,594), new cjs.Rectangle(-563.8,-460.6,1199.6,594), new cjs.Rectangle(-611.1,-461.2,1304.5,594.6), new cjs.Rectangle(-658.6,-466.9,1409.8,600.3), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-795.6,896,929), new cjs.Rectangle(-447.6,-764.6,896,898), new cjs.Rectangle(-447.6,-733.6,896,867), new cjs.Rectangle(-447.6,-702.6,896,836), new cjs.Rectangle(-447.6,-671.6,896,805), new cjs.Rectangle(-447.6,-640.6,896,774), new cjs.Rectangle(-447.6,-609.6,896,743), new cjs.Rectangle(-447.6,-578.6,896,712), new cjs.Rectangle(-447.6,-547.6,896,681), new cjs.Rectangle(-447.6,-516.6,896,650), new cjs.Rectangle(-447.6,-515.6,896,649), new cjs.Rectangle(-447.6,-487.1,896,620.5), rect=new cjs.Rectangle(-447.6,-485.6,896,619), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_55_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-240,-250,1,1,0,-75,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:120,y:-20,alpha:0.012},9).to({_off:true},1).wait(55));

	// animation
	this.instance_1 = new lib.form_leaf_mc();
	this.instance_1.setTransform(-291,-260.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.14,scaleY:1.14,x:-41,y:-341.6},9).to({scaleX:1,scaleY:1,x:-34},3).to({scaleX:1.14,scaleY:1.14,x:62,y:-340.6},7).to({scaleX:1,scaleY:1},4).to({scaleX:1.14,scaleY:1.14,x:-16.1,y:-223.6},11).to({scaleX:1,scaleY:1},4).to({scaleX:1.14,scaleY:1.14,x:75.9,y:-222.6},11).to({scaleX:1,scaleY:1},4).to({x:315.9,y:-374.6,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.leaf_mc();
	this.instance_2.setTransform(-33.6,-340.9);

	this.instance_3 = new lib.leaf_mc();
	this.instance_3.setTransform(-33.6,-340.9);

	this.instance_4 = new lib.leaf_mc();
	this.instance_4.setTransform(-33.6,-340.9);

	this.instance_5 = new lib.leaf_mc();
	this.instance_5.setTransform(-33.6,-340.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:-33.6,y:-340.9}}]},12).to({state:[{t:this.instance_3,p:{x:-33.6,y:-340.9}},{t:this.instance_2,p:{x:62.4,y:-339.9}}]},11).to({state:[{t:this.instance_4,p:{x:-33.6,y:-340.9}},{t:this.instance_3,p:{x:62.4,y:-339.9}},{t:this.instance_2,p:{x:-16.6,y:-223.9}}]},15).to({state:[{t:this.instance_5},{t:this.instance_4,p:{x:62.4,y:-339.9}},{t:this.instance_3,p:{x:-16.6,y:-223.9}},{t:this.instance_2,p:{x:75.4,y:-222.9}}]},15).wait(12));

	// animation
	this.instance_6 = new lib.cook_mas4_mc();
	this.instance_6.setTransform(22,-278.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_7 = new lib.napkin_mc();
	this.instance_7.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53).to({y:-618.1,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_8 = new lib.cup3_mc();
	this.instance_8.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-460.6,896,594);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-493.7,896,627.1), new cjs.Rectangle(-447.6,-526.8,896,660.2), new cjs.Rectangle(-447.6,-559.9,896,693.3), new cjs.Rectangle(-447.6,-593,896,726.4), new cjs.Rectangle(-447.6,-626.1,896,759.5), new cjs.Rectangle(-447.6,-659.2,896,792.6), new cjs.Rectangle(-447.6,-692.3,896,825.7), new cjs.Rectangle(-447.6,-725.4,896,858.8), new cjs.Rectangle(-447.6,-758.5,896,891.9), new cjs.Rectangle(-447.6,-791.6,896,925), new cjs.Rectangle(-447.6,-387.4,896,520.8)];


(lib.animation1_53_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.form_leaf_mc();
	this.instance.setTransform(-549.9,-260.6);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({x:-291,alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.skalka11_mc();
	this.instance_1.setTransform(24,-167.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-373.1},19).to({y:-180.1},20).to({y:-373.1},20).to({y:-129.1},20).to({y:-492.1,alpha:0.012},19).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.napkin_mc();
	this.instance_2.setTransform(30.4,-312.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({y:-605.1,alpha:0.012},19).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.cook_mas4_mc();
	this.instance_3.setTransform(22,-278.9,1,0.732);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({scaleY:1,alpha:1},16).wait(45));

	// animation
	this.instance_4 = new lib.cook_mas3_mc();
	this.instance_4.setTransform(28.2,-229.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.75,y:-253.9},19).to({scaleX:1.4},20).to({alpha:0.012},16).to({_off:true},1).wait(44));

	// animation
	this.instance_5 = new lib.napkin_mc();
	this.instance_5.setTransform(14.4,-287.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

	// animation
	this.instance_6 = new lib.cup3_mc();
	this.instance_6.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-485.6,896,619);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-501,896,634.4), new cjs.Rectangle(-447.6,-516.5,896,649.9), new cjs.Rectangle(-447.6,-531.9,896,665.3), new cjs.Rectangle(-447.6,-547.3,896,680.7), new cjs.Rectangle(-447.6,-562.7,896,696.1), new cjs.Rectangle(-447.6,-578.2,896,711.6), new cjs.Rectangle(-447.6,-593.6,896,727), new cjs.Rectangle(-447.6,-609,896,742.4), new cjs.Rectangle(-447.6,-624.4,896,757.8), new cjs.Rectangle(-590.4,-639.8,1038.8,773.2), new cjs.Rectangle(-564.5,-655.3,1012.9,788.7), new cjs.Rectangle(-538.6,-670.7,987,804.1), new cjs.Rectangle(-512.7,-686.1,961.1,819.5), new cjs.Rectangle(-486.8,-701.5,935.2,834.9), new cjs.Rectangle(-461,-716.9,909.4,850.3), new cjs.Rectangle(-447.6,-732.4,896,865.8), new cjs.Rectangle(-447.6,-747.8,896,881.2), new cjs.Rectangle(-447.6,-763.2,896,896.6), new cjs.Rectangle(-447.6,-778.6,896,912), new cjs.Rectangle(-447.6,-460.6,896,594)];


(lib.animation1_52_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-75.1,-300,1,1,0,45,-135,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-150.1,y:-65,alpha:0.012},9).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.skalka11_mc();
	this.instance_1.setTransform(24,-481.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({y:-167.1,alpha:1},11).wait(1));

	// animation
	this.instance_2 = new lib.napkin_mc();
	this.instance_2.setTransform(-81.6,-622.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({x:30.4,y:-312.1,alpha:1},10).wait(12));

	// animation
	this.instance_3 = new lib.cook_mas3_mc();
	this.instance_3.setTransform(3.2,-351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:28.2,y:-229.9},9).wait(52));

	// animation
	this.instance_4 = new lib.plate1_mc();
	this.instance_4.setTransform(2.2,-339.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-286.6},9).to({y:-501.6,alpha:0.012},13).to({_off:true},1).wait(38));

	// animation
	this.instance_5 = new lib.napkin_mc();
	this.instance_5.setTransform(14.4,-558.1);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({y:-287.1,alpha:1},12).wait(32));

	// animation
	this.instance_6 = new lib.cook_mas2_mc();
	this.instance_6.setTransform(196.4,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:568.3},9).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.plate1_mc();
	this.instance_7.setTransform(195.4,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:567.3},9).to({_off:true},1).wait(51));

	// animation
	this.instance_8 = new lib.cook_mas1_mc();
	this.instance_8.setTransform(-213.6,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-526.6},9).to({_off:true},1).wait(51));

	// animation
	this.instance_9 = new lib.plate1_mc();
	this.instance_9.setTransform(-214.6,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-527.6},9).to({_off:true},1).wait(51));

	// animation
	this.instance_10 = new lib.cup3_mc();
	this.instance_10.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(61));

	// animation
	this.instance_11 = new lib.back_podl2_mc();
	this.instance_11.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(61));

	// animation
	this.instance_12 = new lib.back_podl1_mc();
	this.instance_12.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-401.4,896,534.8);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-388.7,896,522.1), new cjs.Rectangle(-447.6,-382.8,896,516.2), new cjs.Rectangle(-453.4,-376.9,907.3,510.3), new cjs.Rectangle(-488.2,-371,983.4,504.4), new cjs.Rectangle(-523,-365.1,1059.5,498.5), new cjs.Rectangle(-557.8,-359.2,1135.6,492.6), new cjs.Rectangle(-592.5,-353.4,1211.7,486.8), new cjs.Rectangle(-627.3,-347.5,1287.8,480.9), new cjs.Rectangle(-662.1,-341.6,1363.9,475), new cjs.Rectangle(-447.6,-358.1,896,491.5), new cjs.Rectangle(-447.6,-374.7,896,508.1), new cjs.Rectangle(-447.6,-391.2,896,524.6), new cjs.Rectangle(-447.6,-407.7,896,541.1), new cjs.Rectangle(-447.6,-424.3,896,557.7), new cjs.Rectangle(-447.6,-440.8,896,574.2), new cjs.Rectangle(-447.6,-457.3,896,590.7), new cjs.Rectangle(-447.6,-731.6,896,865), new cjs.Rectangle(-447.6,-709,896,842.4), new cjs.Rectangle(-447.6,-686.5,896,819.9), new cjs.Rectangle(-447.6,-663.9,896,797.3), new cjs.Rectangle(-447.6,-641.3,896,774.7), new cjs.Rectangle(-447.6,-618.7,896,752.1), new cjs.Rectangle(-447.6,-596.1,896,729.5), new cjs.Rectangle(-447.6,-573.5,896,706.9), new cjs.Rectangle(-447.6,-551,896,684.4), new cjs.Rectangle(-447.6,-528.4,896,661.8), new cjs.Rectangle(-447.6,-505.8,896,639.2), new cjs.Rectangle(-447.6,-483.2,896,616.6), rect=new cjs.Rectangle(-447.6,-460.6,896,594), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-795.6,896,929), new cjs.Rectangle(-447.6,-764.6,896,898), new cjs.Rectangle(-447.6,-733.6,896,867), new cjs.Rectangle(-447.6,-702.6,896,836), new cjs.Rectangle(-447.6,-671.6,896,805), new cjs.Rectangle(-447.6,-640.6,896,774), new cjs.Rectangle(-447.6,-609.6,896,743), new cjs.Rectangle(-447.6,-578.6,896,712), new cjs.Rectangle(-447.6,-547.6,896,681), new cjs.Rectangle(-447.6,-516.6,896,650), new cjs.Rectangle(-447.6,-515.6,896,649), new cjs.Rectangle(-447.6,-487.1,896,620.5), rect=new cjs.Rectangle(-447.6,-485.6,896,619), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_50_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.colors1_2_mc();
	this.instance.setTransform(276.3,-346.4,1,1,-75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:3.5,x:581.9,y:-396.3,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.colors1_3_mc();
	this.instance_1.setTransform(329.4,-372.1,1,1,-75.7,0,0,-23.1,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:308.4,y:-360.1},10).to({x:329.4,y:-372.1},4).to({x:308.4,y:-360.1},11).to({x:329.4,y:-372.1},4).to({rotation:3.5,x:617.1,y:-349,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.cook_mas3_mc();
	this.instance_2.setTransform(3.2,-351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// animation
	this.instance_3 = new lib.plate1_mc();
	this.instance_3.setTransform(2.2,-339.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// animation
	this.instance_4 = new lib.kaplya2_mc();
	this.instance_4.setTransform(199.4,-301.6,0.158,0.158,0,0,0,0,-50.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,y:-303.6},6).to({y:-227.6,alpha:0.012},6).to({_off:true},1).wait(21));

	// animation
	this.instance_5 = new lib.kaplya2_mc();
	this.instance_5.setTransform(199.4,-301.6,0.158,0.158,0,0,0,0,-50.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,y:-303.6},6).to({y:-227.6,alpha:0.012},6).to({_off:true},1).wait(8));

	// animation
	this.instance_6 = new lib.cook_mas2_mc();
	this.instance_6.setTransform(196.4,-204.9);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({alpha:1},14).wait(7));

	// animation
	this.instance_7 = new lib.cook_mas1_mc();
	this.instance_7.setTransform(196.4,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	// animation
	this.instance_8 = new lib.plate1_mc();
	this.instance_8.setTransform(195.4,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

	// animation
	this.instance_9 = new lib.cook_mas1_mc();
	this.instance_9.setTransform(-213.6,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	// animation
	this.instance_10 = new lib.plate1_mc();
	this.instance_10.setTransform(-214.6,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

	// animation
	this.instance_11 = new lib.cup3_mc();
	this.instance_11.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40));

	// animation
	this.instance_12 = new lib.back_podl2_mc();
	this.instance_12.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(40));

	// animation
	this.instance_13 = new lib.back_podl1_mc();
	this.instance_13.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-424.1,896,557.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-447.6,-424,896,557.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-424.1,896,557.5), rect=new cjs.Rectangle(-447.6,-424,896,557.4), rect, rect, new cjs.Rectangle(-447.6,-424.1,896,557.5), rect=new cjs.Rectangle(-447.6,-424,896,557.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-424.1,896,557.5), rect=new cjs.Rectangle(-447.6,-424,896,557.4), rect, rect, new cjs.Rectangle(-447.6,-424.1,896,557.5), new cjs.Rectangle(-447.6,-436.2,896,569.6), new cjs.Rectangle(-447.6,-446.5,902.4,579.9), new cjs.Rectangle(-447.6,-454.6,935.9,588), new cjs.Rectangle(-447.6,-460.7,968,594.1), new cjs.Rectangle(-447.6,-464.5,998.4,597.9), new cjs.Rectangle(-447.6,-466.2,1027.5,599.6), new cjs.Rectangle(-447.6,-465.8,1055.3,599.2), new cjs.Rectangle(-447.6,-463.7,1081.7,597.1), new cjs.Rectangle(-447.6,-467.5,1109.8,600.9), new cjs.Rectangle(-447.6,-401.4,896,534.8)];


(lib.animation1_48_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(255,-15,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:500,y:-150,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.colors_mc();
	this.instance_1.setTransform(254.4,22.4,1,1,-11.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0,rotation:-75.7,x:289.5,y:-353.5},9).wait(1));

	// animation
	this.instance_2 = new lib.cook_mas3_mc();
	this.instance_2.setTransform(3.2,-351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.plate1_mc();
	this.instance_3.setTransform(2.2,-339.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.cook_mas1_mc();
	this.instance_4.setTransform(196.4,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.plate1_mc();
	this.instance_5.setTransform(195.4,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.cook_mas1_mc();
	this.instance_6.setTransform(-213.6,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.plate1_mc();
	this.instance_7.setTransform(-214.6,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.cup3_mc();
	this.instance_8.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-401.4,896,534.8);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-447.6,-401.4,896.5,534.8), new cjs.Rectangle(-447.6,-401.4,923.7,534.8), new cjs.Rectangle(-447.6,-401.4,950.9,534.8), new cjs.Rectangle(-447.6,-401.4,978.2,534.8), new cjs.Rectangle(-447.6,-401.4,1005.4,534.8), new cjs.Rectangle(-447.6,-401.4,1032.6,534.8), new cjs.Rectangle(-447.6,-424.1,1060.1,557.5)];


(lib.animation1_46_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.colors1_1_mc();
	this.instance.setTransform(103.3,-429.4,1,1,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({rotation:6.7,x:551.1,y:-530.4,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.colors1_3_mc();
	this.instance_1.setTransform(162,-438.1,1,1,-55.8,0,0,-20.8,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:135.5,y:-435.1},9).to({x:162,y:-438.1},3).to({x:135.5,y:-435.1},12).to({x:162,y:-438.1},3).to({regX:-20.7,rotation:6.7,x:586.1,y:-482.4,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.kaplya1_mc();
	this.instance_2.setTransform(16.4,-413.6,0.24,0.24,0,0,0,0,-45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},4).to({y:-371.6,alpha:0.012},8).to({_off:true},1).wait(9));

	// animation
	this.instance_3 = new lib.kaplya1_mc();
	this.instance_3.setTransform(16.4,-413.6,0.24,0.24,0,0,0,0,-45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({scaleX:0.5,scaleY:0.5},4).to({y:-371.6,alpha:0.012},8).to({_off:true},1).wait(22));

	// animation
	this.instance_4 = new lib.cook_mas3_mc();
	this.instance_4.setTransform(3.2,-351.9);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},15).wait(11));

	// animation
	this.instance_5 = new lib.cook_mas1_mc();
	this.instance_5.setTransform(3.2,-351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:true},1).wait(11));

	// animation
	this.instance_6 = new lib.plate1_mc();
	this.instance_6.setTransform(2.2,-339.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

	// animation
	this.instance_7 = new lib.cook_mas1_mc();
	this.instance_7.setTransform(196.4,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	// animation
	this.instance_8 = new lib.plate1_mc();
	this.instance_8.setTransform(195.4,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

	// animation
	this.instance_9 = new lib.cook_mas1_mc();
	this.instance_9.setTransform(-213.6,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	// animation
	this.instance_10 = new lib.plate1_mc();
	this.instance_10.setTransform(-214.6,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

	// animation
	this.instance_11 = new lib.cup3_mc();
	this.instance_11.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40));

	// animation
	this.instance_12 = new lib.colors_mc();
	this.instance_12.setTransform(254.4,22.4,1,1,-11.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(40));

	// animation
	this.instance_13 = new lib.back_podl2_mc();
	this.instance_13.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40));

	// animation
	this.instance_14 = new lib.back_podl1_mc();
	this.instance_14.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-519.5,896,652.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(-447.6,-519.4,896,652.8), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-519.5,896,652.9), rect=new cjs.Rectangle(-447.6,-519.4,896,652.8), rect, new cjs.Rectangle(-447.6,-519.5,896,652.9), rect=new cjs.Rectangle(-447.6,-519.4,896,652.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-519.5,896,652.9), rect=new cjs.Rectangle(-447.6,-519.4,896,652.8), rect, new cjs.Rectangle(-447.6,-519.5,896,652.9), new cjs.Rectangle(-447.6,-530.2,896,663.6), new cjs.Rectangle(-447.6,-540,896,673.4), new cjs.Rectangle(-447.6,-549,896,682.4), new cjs.Rectangle(-447.6,-557,896,690.4), new cjs.Rectangle(-447.6,-564.2,896,697.6), new cjs.Rectangle(-447.6,-570.4,897.6,703.8), new cjs.Rectangle(-447.6,-575.9,933.2,709.3), new cjs.Rectangle(-447.6,-580.6,968.3,714), new cjs.Rectangle(-447.6,-584.4,1002.8,717.8), new cjs.Rectangle(-447.6,-589.6,1037.9,723), new cjs.Rectangle(-447.6,-604.8,1076,738.2), new cjs.Rectangle(-447.6,-401.4,896,534.8)];


(lib.animation1_44_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(48.1,-8,1,1,-135,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:430.1,y:-270,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.colors2_mc();
	this.instance_1.setTransform(40.4,22.4,1,1,-11.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-55.8,x:118,y:-431.6},9).wait(1));

	// animation
	this.instance_2 = new lib.cook_mas1_mc();
	this.instance_2.setTransform(3.2,-351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.plate1_mc();
	this.instance_3.setTransform(2.2,-339.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.cook_mas1_mc();
	this.instance_4.setTransform(196.4,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.plate1_mc();
	this.instance_5.setTransform(195.4,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.cook_mas1_mc();
	this.instance_6.setTransform(-213.6,-204.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.plate1_mc();
	this.instance_7.setTransform(-214.6,-192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.cup3_mc();
	this.instance_8.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.colors_mc();
	this.instance_9.setTransform(254.4,22.4,1,1,-11.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.back_podl2_mc();
	this.instance_10.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.back_podl1_mc();
	this.instance_11.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-401.4,896,534.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-423.1,905.2,556.5), new cjs.Rectangle(-447.6,-471.5,947.7,604.9), new cjs.Rectangle(-447.6,-519.4,990.1,652.8)];


(lib.animation1_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-100,-250,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-440,y:15,alpha:0.012},9).to({_off:true},1).wait(55));

	// animation
	this.instance_1 = new lib.cook_mas1_mc();
	this.instance_1.setTransform(3.2,-534.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).to({y:-351.9},11).wait(17));

	// animation
	this.instance_2 = new lib.plate1_mc();
	this.instance_2.setTransform(2.2,-522.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({y:-339.6},11).wait(17));

	// animation
	this.instance_3 = new lib.smile3_mc();
	this.instance_3.setTransform(216,-285.6);

	this.instance_4 = new lib.cook_mas1_mc();
	this.instance_4.setTransform(555.4,-204.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:166},3).to({x:-457.9},11).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({x:196.4},9).wait(28));

	// animation
	this.instance_5 = new lib.cup21_mc();
	this.instance_5.setTransform(15.5,-261.3,0.961,0.961);

	this.instance_6 = new lib.plate1_mc();
	this.instance_6.setTransform(554.4,-192.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({x:-608.4},11).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({x:195.4},9).wait(28));

	// animation
	this.instance_7 = new lib.cook3_mc();
	this.instance_7.setTransform(14,-316.8,0.637,0.209);

	this.instance_8 = new lib.cook_mas1_mc();
	this.instance_8.setTransform(-569.6,-204.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({x:-610},11).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({x:-213.6},9).wait(39));

	// animation
	this.instance_9 = new lib.cup11_mc();
	this.instance_9.setTransform(16,-273.4,0.961,0.961);

	this.instance_10 = new lib.plate1_mc();
	this.instance_10.setTransform(-570.6,-192.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({x:-607.9},11).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).to({x:-214.6},9).wait(39));

	// animation
	this.instance_11 = new lib.cup3_mc();
	this.instance_11.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// animation
	this.instance_12 = new lib.colors2_mc();
	this.instance_12.setTransform(40.4,22.4,0.51,0.51,-11.3,0,0,0.1,-0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).to({scaleX:1,scaleY:1},6).to({scaleX:1.1,scaleY:1.1},2).to({scaleX:1,scaleY:1},2).wait(1));

	// animation
	this.instance_13 = new lib.colors_mc();
	this.instance_13.setTransform(254.4,22.4,1,1,-11.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65));

	// animation
	this.instance_14 = new lib.back_podl2_mc();
	this.instance_14.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(65));

	// animation
	this.instance_15 = new lib.back_podl1_mc();
	this.instance_15.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-361.3,896,494.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-447.6,-361.2,896,494.6), rect, new cjs.Rectangle(-447.6,-361.3,896,494.7), rect=new cjs.Rectangle(-447.6,-361.2,896,494.6), rect, new cjs.Rectangle(-461,-361.2,909.4,494.6), new cjs.Rectangle(-498.8,-361.2,947.2,494.6), new cjs.Rectangle(-536.5,-361.2,984.9,494.6), new cjs.Rectangle(-574.5,-361.2,1022.9,494.6), new cjs.Rectangle(-491,-361.2,939.4,494.6), new cjs.Rectangle(-547.8,-361.2,996.2,494.6), new cjs.Rectangle(-604.5,-361.2,1052.9,494.6), new cjs.Rectangle(-661.2,-361.2,1109.6,494.6), new cjs.Rectangle(-718,-361.3,1166.4,494.7), rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, new cjs.Rectangle(-705.1,-254.4,1153.5,387.8), new cjs.Rectangle(-665.5,-254.4,1113.9,387.8), new cjs.Rectangle(-626,-254.4,1074.4,387.8), new cjs.Rectangle(-586.4,-254.4,1034.8,387.8), new cjs.Rectangle(-546.9,-254.4,995.3,387.8), new cjs.Rectangle(-507.3,-254.4,955.7,387.8), new cjs.Rectangle(-467.8,-254.4,916.2,387.8), rect=new cjs.Rectangle(-447.6,-254.4,896,387.8), rect, rect, rect, new cjs.Rectangle(-447.6,-254.4,1136.5,387.8), new cjs.Rectangle(-447.6,-254.4,1096.6,387.8), new cjs.Rectangle(-447.6,-254.4,1056.7,387.8), new cjs.Rectangle(-447.6,-254.4,1016.9,387.8), new cjs.Rectangle(-447.6,-254.4,977,387.8), new cjs.Rectangle(-447.6,-254.4,937.1,387.8), new cjs.Rectangle(-447.6,-254.4,897.2,387.8), rect=new cjs.Rectangle(-447.6,-254.4,896,387.8), rect, new cjs.Rectangle(-447.6,-584.4,896,717.8), new cjs.Rectangle(-447.6,-567.8,896,701.2), new cjs.Rectangle(-447.6,-551.2,896,684.6), new cjs.Rectangle(-447.6,-534.5,896,667.9), new cjs.Rectangle(-447.6,-517.9,896,651.3), new cjs.Rectangle(-447.6,-501.2,896,634.6), new cjs.Rectangle(-447.6,-484.6,896,618), new cjs.Rectangle(-447.6,-468,896,601.4), new cjs.Rectangle(-447.6,-451.3,896,584.7), new cjs.Rectangle(-447.6,-434.7,896,568.1), new cjs.Rectangle(-447.6,-418.1,896,551.5), rect=new cjs.Rectangle(-447.6,-401.4,896,534.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(15,-40,1,1,0,-150,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:460,y:-310,alpha:0.012},9).to({_off:true},1).wait(80));

	// animation
	this.instance_1 = new lib.microwave2_mc();
	this.instance_1.setTransform(30.5,30.9,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(89));

	// animation
	this.instance_2 = new lib.heart_mc();
	this.instance_2.setTransform(191.4,-233.6,0.52,0.52);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({scaleX:1,scaleY:1,x:137.4,y:-402.6},7).to({x:31.4,y:-339.3,alpha:0.012},6).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.heart_mc();
	this.instance_3.setTransform(191.4,-233.6,0.52,0.52);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({scaleX:1,scaleY:1,x:137.4,y:-402.6},7).to({x:31.4,y:-339.3,alpha:0.012},6).to({_off:true},1).wait(5));

	// animation
	this.instance_4 = new lib.heart_mc();
	this.instance_4.setTransform(191.4,-233.6,0.52,0.52);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,x:137.4,y:-402.6},7).to({x:31.4,y:-339.3,alpha:0.012},6).to({_off:true},1).wait(10));

	// animation
	this.instance_5 = new lib.smile3_mc();
	this.instance_5.setTransform(216,-487.6);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({y:-285.6,alpha:1},8).to({y:-274.6},2).to({y:-285.6},3).wait(21));

	// animation
	this.instance_6 = new lib.cup21_mc();
	this.instance_6.setTransform(-175,-282.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({scaleX:0.7,scaleY:0.7,x:17.7,y:-305.6},15).to({_off:true},1).wait(16).to({_off:false},0).to({scaleX:0.96,scaleY:0.96,x:15.5,y:-261.3},10).wait(34));

	// animation
	this.instance_7 = new lib.choc1_mc();
	this.instance_7.setTransform(-174,-326);

	this.instance_8 = new lib.cook3_mc();
	this.instance_8.setTransform(16.5,-346,0.464,0.152);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({scaleX:0.7,scaleY:0.7,x:18.4,y:-336.1},15).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).to({scaleX:0.64,scaleY:0.21,x:14,y:-316.8},10).wait(34));

	// animation
	this.instance_9 = new lib.cup11_mc();
	this.instance_9.setTransform(-174.5,-294.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({scaleX:0.7,scaleY:0.7,x:18,y:-314.4},15).to({_off:true},1).wait(16).to({_off:false},0).to({scaleX:0.96,scaleY:0.96,x:16,y:-273.4},10).wait(34));

	// animation
	this.instance_10 = new lib.cup3_mc();
	this.instance_10.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// animation
	this.instance_11 = new lib.colors_mc();
	this.instance_11.setTransform(254.4,22.4,1,1,-11.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

	// animation
	this.instance_12 = new lib.microwave1_mc();
	this.instance_12.setTransform(13,-527.5);
	this.instance_12.alpha = 0.012;

	this.instance_13 = new lib.microwave2_mc();
	this.instance_13.setTransform(58,-318.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:-304.5,alpha:1},14).wait(15).to({_off:true,x:58,y:-318.5},1).wait(15).to({_off:false,x:13,y:-304.5},1).to({y:-527.5,alpha:0.012},10).wait(32).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},1).wait(15).to({_off:true,x:13,y:-304.5},1).wait(44));

	// animation
	this.instance_14 = new lib.back_podl2_mc();
	this.instance_14.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(90));

	// animation
	this.instance_15 = new lib.back_podl1_mc();
	this.instance_15.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-713,896,846.4);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-697,896,830.4), new cjs.Rectangle(-447.6,-681.1,896,814.5), new cjs.Rectangle(-447.6,-665.2,896,798.6), new cjs.Rectangle(-447.6,-649.3,896,782.7), new cjs.Rectangle(-447.6,-633.3,896,766.7), new cjs.Rectangle(-447.6,-617.4,896,750.8), new cjs.Rectangle(-447.6,-601.5,935.8,734.9), new cjs.Rectangle(-447.6,-585.5,985.2,718.9), new cjs.Rectangle(-447.6,-569.6,1035.2,703), new cjs.Rectangle(-447.6,-553.7,896,687.1), new cjs.Rectangle(-447.6,-537.8,896,671.2), new cjs.Rectangle(-447.6,-521.8,896,655.2), new cjs.Rectangle(-447.6,-505.9,896,639.3), rect=new cjs.Rectangle(-447.6,-490,896,623.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-430,896,563.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-490,896,623.4), new cjs.Rectangle(-447.6,-512.3,896,645.7), new cjs.Rectangle(-447.6,-534.6,896,668), new cjs.Rectangle(-447.6,-556.9,896,690.3), new cjs.Rectangle(-447.6,-579.2,896,712.6), new cjs.Rectangle(-447.6,-601.5,896,734.9), new cjs.Rectangle(-447.6,-623.8,896,757.2), new cjs.Rectangle(-447.6,-646.1,896,779.5), new cjs.Rectangle(-447.6,-668.4,896,801.8), new cjs.Rectangle(-447.6,-690.7,896,824.1), rect=new cjs.Rectangle(-447.6,-713,896,846.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-361.3,896,494.7)];


(lib.animation1_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.microwave2_mc();
	this.instance.setTransform(30.5,30.9,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

	// animation
	this.instance_1 = new lib.cup21_mc();
	this.instance_1.setTransform(-175,-282.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66));

	// animation
	this.instance_2 = new lib.ch1_mc();
	this.instance_2.setTransform(188.5,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-8.7,x:22.7,y:-462.5},8).to({rotation:-19.5,x:-14.3,y:-456.8},6).to({rotation:-34.7,x:-167.3,y:-352.8},38).to({_off:true},1).wait(13));

	// animation
	this.instance_3 = new lib.ch1_1_mc();
	this.instance_3.setTransform(-116.9,-423.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({x:-107,y:-327.6},10).wait(14));

	// animation
	this.instance_4 = new lib.ch1_2_mc();
	this.instance_4.setTransform(-82.6,-388.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({x:-140.5,y:-328.6},10).wait(14));

	// animation
	this.instance_5 = new lib.ch1_1_mc();
	this.instance_5.setTransform(-116.9,-420.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).to({x:-190,y:-320},10).wait(20));

	// animation
	this.instance_6 = new lib.ch1_2_mc();
	this.instance_6.setTransform(-82.6,-385.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).to({x:-221.5,y:-322},10).wait(20));

	// animation
	this.instance_7 = new lib.ch1_1_mc();
	this.instance_7.setTransform(-116.9,-420.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({x:-233,y:-335.6},10).wait(27));

	// animation
	this.instance_8 = new lib.ch1_2_mc();
	this.instance_8.setTransform(-82.6,-385.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({x:-169.5,y:-330.1},10).wait(27));

	// animation
	this.instance_9 = new lib.plate1_mc();
	this.instance_9.setTransform(190.5,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-8.7,x:29.1,y:-434.2},8).to({rotation:-19.5,x:-2.7,y:-430.1},6).wait(39).to({rotation:-2.3,x:197.3,y:-439.1,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_10 = new lib.cup11_mc();
	this.instance_10.setTransform(-174.5,-294.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(66));

	// animation
	this.instance_11 = new lib.cup3_mc();
	this.instance_11.setTransform(-237.5,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(66));

	// animation
	this.instance_12 = new lib.colors_mc();
	this.instance_12.setTransform(254.4,22.4,1,1,-11.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66));

	// animation
	this.instance_13 = new lib.back_podl2_mc();
	this.instance_13.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(66));

	// animation
	this.instance_14 = new lib.back_podl1_mc();
	this.instance_14.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-386.4,896,519.8);
p.frameBounds = [rect, rect, new cjs.Rectangle(-447.6,-407.1,896,540.5), new cjs.Rectangle(-447.6,-430.2,896,563.6), new cjs.Rectangle(-447.6,-452.9,896,586.3), new cjs.Rectangle(-447.6,-475.6,896,609), new cjs.Rectangle(-447.6,-498.7,896,632.1), new cjs.Rectangle(-447.6,-521.3,896,654.7), new cjs.Rectangle(-447.6,-544.4,896,677.8), new cjs.Rectangle(-447.6,-546.2,896,679.6), new cjs.Rectangle(-447.6,-548.1,896,681.5), new cjs.Rectangle(-447.6,-549.8,896,683.2), new cjs.Rectangle(-447.6,-551.4,896,684.8), new cjs.Rectangle(-447.6,-553,896,686.4), new cjs.Rectangle(-447.6,-554.8,896,688.2), new cjs.Rectangle(-447.6,-552.4,896,685.8), new cjs.Rectangle(-447.6,-550.4,896,683.8), new cjs.Rectangle(-447.6,-548,896,681.4), new cjs.Rectangle(-447.6,-545.8,896,679.2), new cjs.Rectangle(-447.6,-543.5,896,676.9), new cjs.Rectangle(-447.6,-541.3,896,674.7), new cjs.Rectangle(-447.6,-539.2,896,672.6), new cjs.Rectangle(-447.6,-536.8,896,670.2), new cjs.Rectangle(-447.6,-534.7,896,668.1), new cjs.Rectangle(-447.6,-532.4,896,665.8), new cjs.Rectangle(-447.6,-530.2,896,663.6), new cjs.Rectangle(-447.6,-528,896,661.4), rect=new cjs.Rectangle(-447.6,-526.5,896,659.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-526.8,896,660.2), new cjs.Rectangle(-447.6,-524.3,896,657.7), new cjs.Rectangle(-447.6,-522.2,896,655.6), new cjs.Rectangle(-447.6,-520,896,653.4), new cjs.Rectangle(-447.6,-517.3,896,650.7), new cjs.Rectangle(-447.6,-515,896,648.4), new cjs.Rectangle(-447.6,-512.6,896,646), new cjs.Rectangle(-447.6,-510.1,896,643.5), new cjs.Rectangle(-447.6,-507.2,896,640.6), new cjs.Rectangle(-447.6,-504.6,896,638), new cjs.Rectangle(-447.6,-502.1,896,635.5), new cjs.Rectangle(-447.6,-499.4,896,632.8), new cjs.Rectangle(-447.6,-386.4,896,519.8)];


(lib.animation1_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-90,0,1,1,0,-105,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150,y:150,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.cup2_mc();
	this.instance_1.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.4,scaleY:1.4,x:8,y:-225.6},9).wait(1));

	// animation
	this.instance_2 = new lib.colors1_2_mc();
	this.instance_2.setTransform(242.8,13.9,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.colors1_3_mc();
	this.instance_3.setTransform(293.2,51.7,1,1,-11.2,0,0,-18.9,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.cook7_mc();
	this.instance_4.setTransform(168.4,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:305.4},9).wait(1));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(167.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:304.4},9).wait(1));

	// animation
	this.instance_6 = new lib.cook6_mc();
	this.instance_6.setTransform(-120.6,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-282.1},9).wait(1));

	// animation
	this.instance_7 = new lib.plate2_mc();
	this.instance_7.setTransform(-121.6,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-283.1},9).wait(1));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-447.6,-374.1,896,509.5), new cjs.Rectangle(-447.6,-374.1,896,526.2), new cjs.Rectangle(-447.6,-374.1,896,542.8), new cjs.Rectangle(-447.6,-374.1,896,559.5), new cjs.Rectangle(-447.6,-374.1,896,576.2), new cjs.Rectangle(-447.6,-374.1,896,593)];


(lib.animation1_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(150,5,1,1,0,-135,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:500,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.cup2_mc();
	this.instance_1.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// animation
	this.instance_2 = new lib.colors_mc();
	this.instance_2.setTransform(131,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-87.7,x:247.1,y:-350.5},9).wait(1));

	// animation
	this.instance_3 = new lib.cook6_mc();
	this.instance_3.setTransform(168.4,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.plate2_mc();
	this.instance_4.setTransform(167.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.cook6_mc();
	this.instance_5.setTransform(-120.6,-269.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.plate2_mc();
	this.instance_6.setTransform(-121.6,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-447.6,-374.1,896.6,507.5), new cjs.Rectangle(-447.6,-374.1,935.5,507.5), new cjs.Rectangle(-447.6,-374.1,974.4,507.5), new cjs.Rectangle(-447.6,-374.1,1013.2,507.5), new cjs.Rectangle(-447.6,-376.6,1052.1,510), new cjs.Rectangle(-447.6,-422.1,1091.2,555.5)];


(lib.animation1_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-95,-245,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-250,alpha:0.012},9).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.cup2_mc();
	this.instance_1.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// animation
	this.instance_2 = new lib.colors_mc();
	this.instance_2.setTransform(131,27.5,0.63,0.63,0,0,0,0,-0.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.13,scaleY:1.13},2).to({scaleX:1,scaleY:1},2).wait(1));

	// animation
	this.instance_3 = new lib.cook6_mc();
	this.instance_3.setTransform(615.3,-269.4,0.45,0.45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:168.4},11).wait(11));

	// animation
	this.instance_4 = new lib.plate2_mc();
	this.instance_4.setTransform(614.3,-271.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({x:167.4},11).wait(11));

	// animation
	this.instance_5 = new lib.cook6_mc();
	this.instance_5.setTransform(582.3,-269.4,0.45,0.45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:-120.6},9).wait(22));

	// animation
	this.instance_6 = new lib.plate2_mc();
	this.instance_6.setTransform(581.3,-271.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:-121.6},9).wait(22));

	// animation
	this.instance_7 = new lib.cook6_mc();
	this.instance_7.setTransform(16.4,-269.4,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:582.3,alpha:0.012},8).to({_off:true},1).wait(31));

	// animation
	this.instance_8 = new lib.plate2_mc();
	this.instance_8.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:581.3,alpha:0.012},8).to({_off:true},1).wait(31));

	// animation
	this.instance_9 = new lib.back_podl2_mc();
	this.instance_9.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	// animation
	this.instance_10 = new lib.back_podl1_mc();
	this.instance_10.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-374.1,919.2,507.5), new cjs.Rectangle(-447.6,-374.1,990,507.5), new cjs.Rectangle(-447.6,-374.1,1060.7,507.5), rect=new cjs.Rectangle(-447.6,-374.1,1131.4,507.5), rect, new cjs.Rectangle(-447.6,-374.1,1053.4,507.5), new cjs.Rectangle(-447.6,-374.1,975.3,507.5), new cjs.Rectangle(-447.6,-374.1,897.2,507.5), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect, rect, rect, new cjs.Rectangle(-447.6,-374.1,1164.4,507.5), new cjs.Rectangle(-447.6,-374.1,1123.8,507.5), new cjs.Rectangle(-447.6,-374.1,1083.2,507.5), new cjs.Rectangle(-447.6,-374.1,1042.6,507.5), new cjs.Rectangle(-447.6,-374.1,1001.9,507.5), new cjs.Rectangle(-447.6,-374.1,961.3,507.5), new cjs.Rectangle(-447.6,-374.1,920.7,507.5), rect=new cjs.Rectangle(-447.6,-374.1,896,507.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(220,20,1,1,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:60,x:-40,y:100,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.jelly1_mc();
	this.instance_1.setTransform(292.9,20.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:208.9,y:-267.6},9).wait(1));

	// animation
	this.instance_2 = new lib.cup2_mc();
	this.instance_2.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.sugar1_mc();
	this.instance_3.setTransform(28.4,-242.6,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.sugar1_mc();
	this.instance_4.setTransform(41.9,-264.6,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.sugar1_mc();
	this.instance_5.setTransform(9.4,-267.6,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.milk3_mc();
	this.instance_6.setTransform(16,-269.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.plate2_mc();
	this.instance_7.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.back_podl2_mc();
	this.instance_8.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.back_podl1_mc();
	this.instance_9.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-374.1,896,516.9), new cjs.Rectangle(-447.6,-374.1,896,540.2), new cjs.Rectangle(-447.6,-374.1,896,561.8), new cjs.Rectangle(-447.6,-374.1,896,582.4), new cjs.Rectangle(-447.6,-374.1,896,601.6)];


(lib.animation1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(95,-45,1,1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:90,x:-200,y:-150.1,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.spoon_inv_mc();
	this.instance_1.setTransform(442,-363.9,1,1,-113);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-105.3,x:266,y:-366.9,alpha:1},9).wait(1));

	// animation
	this.instance_2 = new lib.sugar_mc();
	this.instance_2.setTransform(136.8,23.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:224.8,y:-241.6},9).wait(1));

	// animation
	this.instance_3 = new lib.jelly1_mc();
	this.instance_3.setTransform(292.9,20.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.cup2_mc();
	this.instance_4.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.milk3_mc();
	this.instance_5.setTransform(16,-269.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.plate2_mc();
	this.instance_6.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl2_mc();
	this.instance_7.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.back_podl1_mc();
	this.instance_8.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-442,982.8,575.4);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-441.3,962.8,574.7), new cjs.Rectangle(-447.6,-440.9,943.1,574.3), new cjs.Rectangle(-447.6,-440.3,923.2,573.7), new cjs.Rectangle(-447.6,-439.8,903.4,573.2), new cjs.Rectangle(-447.6,-439.2,896,572.6), new cjs.Rectangle(-447.6,-438.7,896,572.1), new cjs.Rectangle(-447.6,-438.3,896,571.7), new cjs.Rectangle(-447.6,-437.5,896,570.9), new cjs.Rectangle(-447.6,-437.1,896,570.5)];


(lib.animation1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-50.1,-45,1,1,165,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:120,x:-180.1,y:-179.9,alpha:0.012},9).wait(1));

	// animation
	this.instance_1 = new lib.milk1_mc();
	this.instance_1.setTransform(-22.1,23.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:201.9,y:-233.6},9).wait(1));

	// animation
	this.instance_2 = new lib.jelly1_mc();
	this.instance_2.setTransform(292.9,20.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.sugar_mc();
	this.instance_3.setTransform(136.8,23.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.cup2_mc();
	this.instance_4.setTransform(-221,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.plate2_mc();
	this.instance_5.setTransform(15.4,-271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.back_podl2_mc();
	this.instance_6.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.back_podl1_mc();
	this.instance_7.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-374.1,896,507.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(170,4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,rotation:-90,x:300,y:-10.1,alpha:0.012},9).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.marker2_mc();
	this.instance_1.setTransform(104.8,-28.8,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:69.8,y:-59.8},6).to({rotation:-75,x:-1.2,y:-29.8,alpha:0.012},4).to({_off:true},1).wait(9));

	// animation
	this.instance_2 = new lib.marker1_mc();
	this.instance_2.setTransform(161.8,28.3,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({rotation:-45,x:-33.2,y:-365.7},9).wait(1));

	// animation
	this.instance_3 = new lib.cup1_mc();
	this.instance_3.setTransform(20,-264.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.back_podl2_mc();
	this.instance_4.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.back_podl1_mc();
	this.instance_5.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-390.1,896,523.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.6,-444.5,896,577.9)];


(lib.animation1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_pointing_finger_mc();
	this.instance.setTransform(-70,-60,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:-215,y:-350,alpha:0.012},9).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.cup1_mc();
	this.instance_1.setTransform(-77,24.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:20,y:-264.6},14).wait(1));

	// animation
	this.instance_2 = new lib.back_podl2_mc();
	this.instance_2.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.marker_mc();
	this.instance_3.setTransform(158.9,25.4,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.back_podl1_mc();
	this.instance_4.setTransform(14.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-447.6,-192,896,325.4);
p.frameBounds = [rect, new cjs.Rectangle(-447.6,-226.8,896,360.2), new cjs.Rectangle(-447.6,-257.5,896,390.9), new cjs.Rectangle(-447.6,-284.4,896,417.8), new cjs.Rectangle(-447.6,-307.3,896,440.7), new cjs.Rectangle(-447.6,-326.5,896,459.9), new cjs.Rectangle(-447.6,-342.6,896,476), new cjs.Rectangle(-447.6,-355.9,896,489.3), new cjs.Rectangle(-447.6,-367.2,896,500.6), new cjs.Rectangle(-447.6,-377,896,510.4), new cjs.Rectangle(-447.6,-293.2,896,426.6), new cjs.Rectangle(-447.6,-317.3,896,450.7), new cjs.Rectangle(-447.6,-341.5,896,474.9), new cjs.Rectangle(-447.6,-365.8,896,499.2), new cjs.Rectangle(-447.6,-390.1,896,523.5)];


(lib.animation1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(39));

	// animation
	this.instance_1 = new lib.back_podl2_mc();
	this.instance_1.setTransform(0.4,0.4);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},9).wait(21));

	// animation
	this.instance_2 = new lib.marker_mc();
	this.instance_2.setTransform(158.9,25.4,0.46,0.46,45);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).to({scaleX:1.04,scaleY:1.04},2).to({scaleX:1,scaleY:1},2).wait(5));

	// animation
	this.instance_3 = new lib.cup1_mc();
	this.instance_3.setTransform(-77,24.4,0.25,0.25);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,alpha:1},5).to({scaleX:0.67,scaleY:0.67},2).to({scaleX:0.6,scaleY:0.6},2).wait(12));

	// animation
	this.instance_4 = new lib.back_podl1_mc();
	this.instance_4.setTransform(14.4,21.4);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({alpha:1},9).wait(21));

	// animation
	this.instance_5 = new lib.go_mc();
	this.instance_5.setTransform(24,13);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_6 = new lib.smile1_mc();
	this.instance_6.setTransform(193.4,-144.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_7 = new lib.padisara_pudding_mc();
	this.instance_7.setTransform(22.1,-179.6,0.521,0.521,0,0,0,0.1,-0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regX:0,regY:0,x:22,alpha:0.012},8).to({_off:true},1).wait(30));

	// animation
	this.instance_8 = new lib.smile6_mc();
	this.instance_8.setTransform(-140.6,-156.6);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(8).to({_off:true},1).wait(30));

	// animation
	this.instance_9 = new lib.win1_mc();
	this.instance_9.setTransform(16.4,-151.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({alpha:0.012},8).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-302.6,142.4,638,388);
p.frameBounds = [rect, rect=new cjs.Rectangle(-302.6,-345.6,638,408.6), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-447.6,-132.6,896,266), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.genshin_star_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.genshin_star_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-85,171.7,170);
p.frameBounds = [rect, new cjs.Rectangle(-90.9,-90,181.8,180), new cjs.Rectangle(-85.8,-85,171.7,170), new cjs.Rectangle(-90.9,-90,181.8,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-85,171.7,170);
p.frameBounds = [rect, new cjs.Rectangle(-90.9,-90,181.8,180), new cjs.Rectangle(-85.8,-85,171.7,170), new cjs.Rectangle(-90.9,-90,181.8,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-85,171.7,170);
p.frameBounds = [rect, new cjs.Rectangle(-90.9,-90,181.8,180), new cjs.Rectangle(-85.8,-85,171.7,170), new cjs.Rectangle(-90.9,-90,181.8,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,770);
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


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-245,660,490);
p.frameBounds = [rect, rect, rect];


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


(lib.hero_result_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.focuspocus1_mc();
	this.instance.setTransform(217,66,0.467,0.467);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.padisara_pudding_img();
	this.instance_1.setTransform(-25,-48,0.459,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.booba_tea_mc();
	this.instance_2.setTransform(134,-38,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-325,730,650);
p.frameBounds = [rect];


(lib.hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.genshin_star_mc();
	this.instance.setTransform(155.1,-47.9,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.unknown_dish_mc();
	this.instance_1.setTransform(150,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365,-325,730,650);
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


(lib.animation3_61_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.genshin_star_mc();
	this.instance.setTransform(-74.9,105.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.genshin_star_mc();
	this.instance_1.setTransform(-102.9,-373.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.genshin_star_mc();
	this.instance_2.setTransform(-232.9,-229.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_3 = new lib.genshin_star_mc();
	this.instance_3.setTransform(-46.9,-222.9,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},29).wait(1));

	// animation
	this.instance_4 = new lib.animation_pointing_finger_mc();
	this.instance_4.setTransform(-120,-195,1,1,109.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-520,y:-365,alpha:0.012},9).to({_off:true},1).wait(20));

	// animation
	this.instance_5 = new lib.focuspocus1_mc();
	this.instance_5.setTransform(26,-155.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({scaleX:0.78,scaleY:0.78,x:-206},12).to({scaleX:0.46,scaleY:0.46,x:108,y:-150.9,alpha:0.012},8).wait(1));

	// animation
	this.instance_6 = new lib.hero_1_mc();
	this.instance_6.setTransform(628,-127.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:201},12).wait(9));

	// animation
	this.instance_7 = new lib.back2_mc();
	this.instance_7.setTransform(13,-166.5);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-587,-466.5,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-623.3,-466.5,1236.3,600), new cjs.Rectangle(-668,-466.5,1500,600.9), new cjs.Rectangle(-587,-466.5,1383.4,600.9), new cjs.Rectangle(-587,-466.5,1347.8,600.9), new cjs.Rectangle(-587,-466.5,1312.2,600.9), new cjs.Rectangle(-587,-466.5,1276.7,600.9), new cjs.Rectangle(-587,-466.5,1241.1,600.9), new cjs.Rectangle(-587,-466.5,1205.5,600.9), rect=new cjs.Rectangle(-587,-466.5,1200,600.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-587,-466.5,1200,601.5)];


(lib.animation2_66_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.genshin_star_mc();
	this.instance.setTransform(108.1,-260.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.genshin_star_mc();
	this.instance_1.setTransform(-119.9,71.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.genshin_star_mc();
	this.instance_2.setTransform(-121.9,-368.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_3 = new lib.genshin_star_mc();
	this.instance_3.setTransform(-208.9,-171.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_4 = new lib.genshin_star_mc();
	this.instance_4.setTransform(17.1,-224.9,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},29).wait(1));

	// animation
	this.instance_5 = new lib.animation_pointing_finger_mc();
	this.instance_5.setTransform(-45,-110,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-600,y:0,alpha:0.012},9).to({_off:true},1).wait(20));

	// animation
	this.instance_6 = new lib.blesk_anim_mc();
	this.instance_6.setTransform(56,-257.4,1,1,0,0,0,0.5,0.5);

	this.instance_7 = new lib.blesk_anim_mc();
	this.instance_7.setTransform(13,-36.5,1,1,0,0,0,0.5,0.5);

	this.instance_8 = new lib.blesk_anim_mc();
	this.instance_8.setTransform(66,-73.5,1,1,0,0,0,0.5,0.5);

	this.instance_9 = new lib.blesk_anim_mc();
	this.instance_9.setTransform(-21,-125.4,1,1,0,0,0,0.5,0.5);

	this.instance_10 = new lib.blesk_anim_mc();
	this.instance_10.setTransform(86,-191.4,1,1,0,0,0,0.5,0.5);

	this.instance_11 = new lib.blesk_anim_mc();
	this.instance_11.setTransform(-16.6,-237.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[]},1).wait(29));

	// animation
	this.instance_12 = new lib.boobt_mc();
	this.instance_12.setTransform(29.9,-180.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:0.63,scaleY:0.63,x:-211.1,y:-202.2},9).wait(10).to({x:47.9,y:-187.2,alpha:0.012},10).wait(1));

	// animation
	this.instance_13 = new lib.hero_2_mc();
	this.instance_13.setTransform(617.4,-150);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).to({x:153.4,alpha:1},10).wait(11));

	// animation
	this.instance_14 = new lib.back2_mc();
	this.instance_14.setTransform(13,-166.5);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-587,-466.5,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-611,-466.5,1224,600), new cjs.Rectangle(-672.7,-466.5,1285.7,600), new cjs.Rectangle(-734.5,-466.5,1604.4,600), new cjs.Rectangle(-587,-466.5,1410.5,600), new cjs.Rectangle(-587,-466.5,1364.1,600), new cjs.Rectangle(-587,-466.5,1317.7,600), new cjs.Rectangle(-587,-466.5,1271.3,600), new cjs.Rectangle(-587,-466.5,1224.9,600), rect=new cjs.Rectangle(-587,-466.5,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_77_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.genshin_star_mc();
	this.instance.setTransform(-104.9,75.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.genshin_star_mc();
	this.instance_1.setTransform(343.1,-301.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.genshin_star_mc();
	this.instance_2.setTransform(-232.9,-229.9,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_3 = new lib.genshin_star_mc();
	this.instance_3.setTransform(-44.9,-222.9,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},29).wait(1));

	// animation
	this.instance_4 = new lib.animation_pointing_finger_mc();
	this.instance_4.setTransform(140,-140,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.012},4).to({_off:true},1).wait(25));

	// animation
	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(54,-53.4,1.636,1.636,0,0,0,0.5,0.5);

	this.instance_6 = new lib.blesk_anim_mc();
	this.instance_6.setTransform(-54,-214.3,1.455,1.455,0,0,0,0.5,0.5);

	this.instance_7 = new lib.blesk_anim_mc();
	this.instance_7.setTransform(129,-271.4,1,1,0,0,0,0.5,0.5);

	this.instance_8 = new lib.blesk_anim_mc();
	this.instance_8.setTransform(-145,-236.4,1,1,0,0,0,0.5,0.5);

	this.instance_9 = new lib.blesk_anim_mc();
	this.instance_9.setTransform(54,-358.4,1,1,0,0,0,0.5,0.5);

	this.instance_10 = new lib.blesk_anim_mc();
	this.instance_10.setTransform(-49,-332.4,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[]},1).wait(29));

	// animation
	this.instance_11 = new lib.padisara_pudding_mc();
	this.instance_11.setTransform(6.4,-219.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.65,scaleY:0.65,x:-194.6,y:-184.6},9).wait(10).to({scaleX:0.42,scaleY:0.42,x:-56.6,y:-206.6,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_12 = new lib.hero_3_mc();
	this.instance_12.setTransform(521,-166.5);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({x:164,alpha:1},10).wait(11));

	// animation
	this.instance_13 = new lib.back2_mc();
	this.instance_13.setTransform(13,-166.5);
	this.instance_13.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-587,-466.5,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-587,-466.5,1383,603), new cjs.Rectangle(-587,-466.5,1347.3,603), new cjs.Rectangle(-587,-466.5,1311.6,603), new cjs.Rectangle(-587,-466.5,1275.9,603), new cjs.Rectangle(-587,-466.5,1240.2,603), new cjs.Rectangle(-587,-466.5,1204.5,603), rect=new cjs.Rectangle(-587,-466.5,1200,603), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":99});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// decor
	this.instance = new lib.genshin_star_mc();
	this.instance.setTransform(175.1,485.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.genshin_star_mc();
	this.instance_1.setTransform(600.1,95.1,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},29).to({state:[]},70).wait(1));

	// title
	this.instance_2 = new lib.curtain_3_mc();
	this.instance_2.setTransform(400,300,0.833,0.833);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:400.1,y:300.1,alpha:0.801},16).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,y:300,alpha:1},4).wait(20).to({alpha:0.012},10).to({_off:true},1).wait(20));

	// decor
	this.instance_3 = new lib.curtain_2_mc();
	this.instance_3.setTransform(400,300,1,1,0,0,0,400,300);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({alpha:1},5).to({alpha:0.301},5).to({alpha:1},5).to({alpha:0.012},5).to({_off:true},1).wait(30));

	// curtain
	this.instance_4 = new lib.curtain_1_mc();
	this.instance_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(60).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:405,y:545}},{t:this.instance,p:{x:405,y:115}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{x:400,y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_3_mc();
	this.object_1.setTransform(407,478);

	this.object_2 = new lib.object_2_3_mc();
	this.object_2.setTransform(221,496);

	this.object_3 = new lib.object_3_3_mc();
	this.object_3.setTransform(579,490);

	this.object_4 = new lib.object_4_3_mc();
	this.object_4.setTransform(401,484);

	this.frame_5_mc = new lib.arrow_31_mc();
	this.frame_5_mc.setTransform(490,190,1,1,0,-45,135);

	this.object_6 = new lib.object_6_3_mc();
	this.object_6.setTransform(191,501);

	this.frame_7_mc = new lib.arrow_32_mc();
	this.frame_7_mc.setTransform(475,365,1,1,0,0,180);

	this.frame_8_mc = new lib.arrow_33_mc();
	this.frame_8_mc.setTransform(410,335);

	this.object_9 = new lib.object_9_3_mc();
	this.object_9.setTransform(193,495);

	this.frame_10_mc = new lib.arrow_34_mc();
	this.frame_10_mc.setTransform(485,365,1,1,0,0,180);

	this.frame_11_mc = new lib.arrow_35_mc();
	this.frame_11_mc.setTransform(545,140,0.875,0.875,0,0,180);

	this.object_12 = new lib.object_12_3_mc();
	this.object_12.setTransform(153,492);

	this.object_13 = new lib.object_13_3_mc();
	this.object_13.setTransform(341,491);

	this.frame_14_mc = new lib.arrow_36_mc();
	this.frame_14_mc.setTransform(555,320,1,1,0,0,180);

	this.object_15 = new lib.object_15_3_mc();
	this.object_15.setTransform(524,485);

	this.frame_16_mc = new lib.arrow_37_mc();
	this.frame_16_mc.setTransform(550,320,1,1,0,0,180);

	this.object_17 = new lib.object_17_3_mc();
	this.object_17.setTransform(686,484);

	this.object_18 = new lib.object_18_3_mc();
	this.object_18.setTransform(181,493);

	this.frame_19_mc = new lib.arrow_38_mc();
	this.frame_19_mc.setTransform(335,340);

	this.object_20 = new lib.object_20_3_mc();
	this.object_20.setTransform(400,494);

	this.frame_21_mc = new lib.arrow_39_mc();
	this.frame_21_mc.setTransform(335,340);

	this.object_22 = new lib.object_22_3_mc();
	this.object_22.setTransform(621,495);

	this.frame_23_mc = new lib.arrow_40_mc();
	this.frame_23_mc.setTransform(335,340);

	this.frame_24_mc = new lib.arrow_41_mc();
	this.frame_24_mc.setTransform(395,305,1,1,0,0,180);

	this.object_25 = new lib.object_25_3_mc();
	this.object_25.setTransform(417,497);

	this.object_26 = new lib.object_26_3_mc();
	this.object_26.setTransform(404,184);

	this.frame_27_mc = new lib.arrow_42_mc();
	this.frame_27_mc.setTransform(125,190,1,1,90);

	this.frame_28_mc = new lib.arrow_43_mc();
	this.frame_28_mc.setTransform(715,340,1,1,90);

	this.frame_29_mc = new lib.arrow_44_mc();
	this.frame_29_mc.setTransform(130,340,1,1,90);

	this.object_30 = new lib.object_30_3_mc();
	this.object_30.setTransform(410,340);

	this.frame_31_mc = new lib.arrow_45_mc();
	this.frame_31_mc.setTransform(420,130);

	this.object_32 = new lib.object_32_3_mc();
	this.object_32.setTransform(414,296);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.frame_11_mc}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.frame_14_mc}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.frame_16_mc}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.frame_19_mc}]},1).to({state:[{t:this.object_20}]},1).to({state:[{t:this.frame_21_mc}]},1).to({state:[{t:this.object_22}]},1).to({state:[{t:this.frame_23_mc}]},1).to({state:[{t:this.frame_24_mc}]},1).to({state:[{t:this.object_25}]},1).to({state:[{t:this.object_26}]},1).to({state:[{t:this.frame_27_mc}]},1).to({state:[{t:this.frame_28_mc}]},1).to({state:[{t:this.frame_29_mc}]},1).to({state:[{t:this.object_30}]},1).to({state:[{t:this.frame_31_mc}]},1).to({state:[{t:this.object_32}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation3_2_mc();
	this.subject_1.setTransform(387,467);

	this.subject_2 = new lib.animation3_4_mc();
	this.subject_2.setTransform(387,467);

	this.subject_3 = new lib.animation3_6_mc();
	this.subject_3.setTransform(387,467);

	this.subject_4 = new lib.animation3_8_mc();
	this.subject_4.setTransform(387,467);

	this.subject_5 = new lib.animation3_9_mc();
	this.subject_5.setTransform(387,467);

	this.subject_6 = new lib.animation3_11_mc();
	this.subject_6.setTransform(387,467);

	this.subject_7 = new lib.animation3_13_mc();
	this.subject_7.setTransform(387,467);

	this.subject_8 = new lib.animation3_15_mc();
	this.subject_8.setTransform(387,467);

	this.subject_9 = new lib.animation3_17_mc();
	this.subject_9.setTransform(387,467);

	this.subject_10 = new lib.animation3_19_mc();
	this.subject_10.setTransform(387,467);

	this.subject_11 = new lib.animation3_21_mc();
	this.subject_11.setTransform(387,467);

	this.subject_12 = new lib.animation3_23_mc();
	this.subject_12.setTransform(387,467);

	this.subject_13 = new lib.animation3_25_mc();
	this.subject_13.setTransform(387,467);

	this.subject_14 = new lib.animation3_27_mc();
	this.subject_14.setTransform(387,467);

	this.subject_15 = new lib.animation3_29_mc();
	this.subject_15.setTransform(387,467);

	this.subject_16 = new lib.animation3_31_mc();
	this.subject_16.setTransform(387,467);

	this.subject_17 = new lib.animation3_33_mc();
	this.subject_17.setTransform(387,467);

	this.subject_18 = new lib.animation3_35_mc();
	this.subject_18.setTransform(387,467);

	this.subject_19 = new lib.animation3_37_mc();
	this.subject_19.setTransform(387,467);

	this.subject_20 = new lib.animation3_39_mc();
	this.subject_20.setTransform(387,467);

	this.subject_21 = new lib.animation3_41_mc();
	this.subject_21.setTransform(387,467);

	this.subject_22 = new lib.animation3_43_mc();
	this.subject_22.setTransform(387,467);

	this.subject_23 = new lib.animation3_45_mc();
	this.subject_23.setTransform(387,467);

	this.subject_24 = new lib.animation3_47_mc();
	this.subject_24.setTransform(387,467);

	this.subject_25 = new lib.animation3_49_mc();
	this.subject_25.setTransform(387,467);

	this.subject_26 = new lib.animation3_51_mc();
	this.subject_26.setTransform(387,467);

	this.subject_27 = new lib.animation3_53_mc();
	this.subject_27.setTransform(387,467);

	this.subject_28 = new lib.animation3_55_mc();
	this.subject_28.setTransform(387,467);

	this.subject_29 = new lib.animation3_57_mc();
	this.subject_29.setTransform(387,467);

	this.subject_30 = new lib.animation3_58_mc();
	this.subject_30.setTransform(387,467);

	this.subject_31 = new lib.animation3_60_mc();
	this.subject_31.setTransform(387,467);

	this.subject_32 = new lib.animation3_61_mc();
	this.subject_32.setTransform(387,467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).to({state:[{t:this.subject_26}]},1).to({state:[{t:this.subject_27}]},1).to({state:[{t:this.subject_28}]},1).to({state:[{t:this.subject_29}]},1).to({state:[{t:this.subject_30}]},1).to({state:[{t:this.subject_31}]},1).to({state:[{t:this.subject_32}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(84.4,-289.9,638,1287.3);
p.frameBounds = [rect, new cjs.Rectangle(-60.6,-289.9,896,896), new cjs.Rectangle(-60.6,-289.9,896,900), new cjs.Rectangle(-60.6,-289.9,896,894), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,921), new cjs.Rectangle(-60.6,-289.9,896,905), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,910), new cjs.Rectangle(-60.6,-289.9,896,905), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,912), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, rect, rect, rect, new cjs.Rectangle(-105.5,-289.9,940.9,890.3), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-105.5,-289.9,940.9,890.3), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-105.5,-289.9,940.9,890.3), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,937), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-125,-289.9,960.4,890.3), new cjs.Rectangle(180.4,-289.9,784.7,799.5), new cjs.Rectangle(-120,-289.9,780,799.5), new cjs.Rectangle(120,-139,580,724), new cjs.Rectangle(180.4,-289.9,479.7,799.5), new cjs.Rectangle(-200,-289.9,1200,890.5)];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_2_mc();
	this.object_1.setTransform(410,478);

	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(135,493);

	this.object_3 = new lib.object_3_2_mc();
	this.object_3.setTransform(327,484);

	this.object_4 = new lib.object_4_2_mc();
	this.object_4.setTransform(484,499);

	this.object_5 = new lib.object_5_2_mc();
	this.object_5.setTransform(599,486);

	this.frame_6_mc = new lib.arrow_21_mc();
	this.frame_6_mc.setTransform(525,350,1,1,0,0,180);

	this.object_7 = new lib.object_7_2_mc();
	this.object_7.setTransform(719,489);

	this.frame_8_mc = new lib.arrow_22_mc();
	this.frame_8_mc.setTransform(520,290,1,1,0,0,180);

	this.object_9 = new lib.object_9_2_mc();
	this.object_9.setTransform(189,484);

	this.frame_10_mc = new lib.arrow_23_mc();
	this.frame_10_mc.setTransform(520,285,1,1,0,0,180);

	this.object_11 = new lib.object_11_2_mc();
	this.object_11.setTransform(397,486);

	this.object_12 = new lib.object_12_2_mc();
	this.object_12.setTransform(618,490);

	this.frame_13_mc = new lib.arrow_24_mc();
	this.frame_13_mc.setTransform(400,290);

	this.object_14 = new lib.object_14_2_mc();
	this.object_14.setTransform(558,189);

	this.frame_15_mc = new lib.arrow_25_mc();
	this.frame_15_mc.setTransform(485,318,1,1,0,0,180);

	this.object_16 = new lib.object_16_2_mc();
	this.object_16.setTransform(411,489);

	this.frame_17_mc = new lib.arrow_26_mc();
	this.frame_17_mc.setTransform(485,315);

	this.object_18 = new lib.object_18_2_mc();
	this.object_18.setTransform(649,242);

	this.object_19 = new lib.object_19_2_mc();
	this.object_19.setTransform(243,493);

	this.object_20 = new lib.object_20_2_mc();
	this.object_20.setTransform(498,485);

	this.frame_21_mc = new lib.arrow_27_mc();
	this.frame_21_mc.setTransform(408,190);

	this.object_22 = new lib.object_22_2_mc();
	this.object_22.setTransform(390,482);

	this.frame_23_mc = new lib.arrow_28_mc();
	this.frame_23_mc.setTransform(568,232,1,1,0,-15,165);

	this.object_24 = new lib.object_24_2_mc();
	this.object_24.setTransform(549,190);

	this.object_25 = new lib.object_25_2_mc();
	this.object_25.setTransform(133,486);

	this.frame_26_mc = new lib.arrow_29_mc();
	this.frame_26_mc.setTransform(550,190,1,1,90);

	this.object_27 = new lib.object_27_2_mc();
	this.object_27.setTransform(353,467);

	this.object_28 = new lib.object_28_2_mc();
	this.object_28.setTransform(671,483);

	this.object_29 = new lib.object_29_2_mc();
	this.object_29.setTransform(506,488);

	this.frame_30_mc = new lib.arrow_30_mc();
	this.frame_30_mc.setTransform(480,340,1,1,0,15,-165);

	this.object_31 = new lib.object_31_2_mc();
	this.object_31.setTransform(246,244);

	this.object_32 = new lib.object_32_2_mc();
	this.object_32.setTransform(230,495);

	this.object_33 = new lib.object_33_2_mc();
	this.object_33.setTransform(416,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.frame_13_mc}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.frame_17_mc}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).to({state:[{t:this.object_20}]},1).to({state:[{t:this.frame_21_mc}]},1).to({state:[{t:this.object_22}]},1).to({state:[{t:this.frame_23_mc}]},1).to({state:[{t:this.object_24}]},1).to({state:[{t:this.object_25}]},1).to({state:[{t:this.frame_26_mc}]},1).to({state:[{t:this.object_27}]},1).to({state:[{t:this.object_28}]},1).to({state:[{t:this.object_29}]},1).to({state:[{t:this.frame_30_mc}]},1).to({state:[{t:this.object_31}]},1).to({state:[{t:this.object_32}]},1).to({state:[{t:this.object_33}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation2_2_mc();
	this.subject_1.setTransform(387,467);

	this.subject_2 = new lib.animation2_4_mc();
	this.subject_2.setTransform(387,467);

	this.subject_3 = new lib.animation2_6_mc();
	this.subject_3.setTransform(387,467);

	this.subject_4 = new lib.animation2_8_mc();
	this.subject_4.setTransform(387,467);

	this.subject_5 = new lib.animation2_10_mc();
	this.subject_5.setTransform(387,467);

	this.subject_6 = new lib.animation2_12_mc();
	this.subject_6.setTransform(387,467);

	this.subject_7 = new lib.animation2_14_mc();
	this.subject_7.setTransform(387,467);

	this.subject_8 = new lib.animation2_16_mc();
	this.subject_8.setTransform(387,467);

	this.subject_9 = new lib.animation2_18_mc();
	this.subject_9.setTransform(387,467);

	this.subject_10 = new lib.animation2_20_mc();
	this.subject_10.setTransform(387,467);

	this.subject_11 = new lib.animation2_22_mc();
	this.subject_11.setTransform(387,467);

	this.subject_12 = new lib.animation2_24_mc();
	this.subject_12.setTransform(387,467);

	this.subject_13 = new lib.animation2_26_mc();
	this.subject_13.setTransform(387,467);

	this.subject_14 = new lib.animation2_28_mc();
	this.subject_14.setTransform(387,467);

	this.subject_15 = new lib.animation2_30_mc();
	this.subject_15.setTransform(387,467);

	this.subject_16 = new lib.animation2_32_mc();
	this.subject_16.setTransform(387,467);

	this.subject_17 = new lib.animation2_34_mc();
	this.subject_17.setTransform(387,467);

	this.subject_18 = new lib.animation2_36_mc();
	this.subject_18.setTransform(387,467);

	this.subject_19 = new lib.animation2_38_mc();
	this.subject_19.setTransform(387,467);

	this.subject_20 = new lib.animation2_40_mc();
	this.subject_20.setTransform(387,467);

	this.subject_21 = new lib.animation2_42_mc();
	this.subject_21.setTransform(387,467);

	this.subject_22 = new lib.animation2_44_mc();
	this.subject_22.setTransform(387,467);

	this.subject_23 = new lib.animation2_46_mc();
	this.subject_23.setTransform(387,467);

	this.subject_24 = new lib.animation2_48_mc();
	this.subject_24.setTransform(387,467);

	this.subject_25 = new lib.animation2_50_mc();
	this.subject_25.setTransform(387,467);

	this.subject_26 = new lib.animation2_52_mc();
	this.subject_26.setTransform(387,467);

	this.subject_27 = new lib.animation2_54_mc();
	this.subject_27.setTransform(387,467);

	this.subject_28 = new lib.animation2_56_mc();
	this.subject_28.setTransform(387,467);

	this.subject_29 = new lib.animation2_58_mc();
	this.subject_29.setTransform(387,467);

	this.subject_30 = new lib.animation2_60_mc();
	this.subject_30.setTransform(387,467);

	this.subject_31 = new lib.animation2_62_mc();
	this.subject_31.setTransform(387,467);

	this.subject_32 = new lib.animation2_64_mc();
	this.subject_32.setTransform(387,467);

	this.subject_33 = new lib.animation2_66_mc();
	this.subject_33.setTransform(387,467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).to({state:[{t:this.subject_26}]},1).to({state:[{t:this.subject_27}]},1).to({state:[{t:this.subject_28}]},1).to({state:[{t:this.subject_29}]},1).to({state:[{t:this.subject_30}]},1).to({state:[{t:this.subject_31}]},1).to({state:[{t:this.subject_32}]},1).to({state:[{t:this.subject_33}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(84.4,-289.9,638,1287.3);
p.frameBounds = [rect, new cjs.Rectangle(-60.6,-289.9,896,913), new cjs.Rectangle(-60.6,-289.9,896,909), new cjs.Rectangle(-60.6,-289.9,896,894), new cjs.Rectangle(-60.6,-289.9,982.8,890.3), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, rect, rect, rect, new cjs.Rectangle(-60.6,-289.9,896,895), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, new cjs.Rectangle(-60.6,-289.9,896,894), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, rect, new cjs.Rectangle(-60.6,-289.9,918.7,930), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, new cjs.Rectangle(-60.6,-289.9,896,891), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, new cjs.Rectangle(-60.6,-289.9,903.8,893), new cjs.Rectangle(-60.6,-289.9,903.8,912.9), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,900), new cjs.Rectangle(-200,-289.9,1200,890.5)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:420}},{t:this.instance,p:{rotation:90,x:80,y:180}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:420}},{t:this.instance,p:{rotation:90,x:80,y:180}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{rotation:0,x:400,y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(408,480);

	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(310,455);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(545,490);

	this.frame_4_mc = new lib.arrow_1_mc();
	this.frame_4_mc.setTransform(408,250);

	this.frame_5_mc = new lib.arrow_2_mc();
	this.frame_5_mc.setTransform(408,308);

	this.object_6 = new lib.object_6_1_mc();
	this.object_6.setTransform(355,480);

	this.frame_7_mc = new lib.arrow_3_mc();
	this.frame_7_mc.setTransform(395,310,1,1,180);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(525,475);

	this.frame_9_mc = new lib.arrow_4_mc();
	this.frame_9_mc.setTransform(470,310,1,1,180);

	this.object_10 = new lib.object_10_1_mc();
	this.object_10.setTransform(680,480);

	this.frame_11_mc = new lib.arrow_5_mc();
	this.frame_11_mc.setTransform(470,300,1,1,180);

	this.frame_12_mc = new lib.arrow_6_mc();
	this.frame_12_mc.setTransform(403,197,1,1,0,0,180);

	this.object_13 = new lib.object_13_1_mc();
	this.object_13.setTransform(403,195);

	this.object_14 = new lib.object_14_1_mc();
	this.object_14.setTransform(513,491);

	this.frame_15_mc = new lib.arrow_7_mc();
	this.frame_15_mc.setTransform(610,250,1,1,150);

	this.object_16 = new lib.object_16_1_mc();
	this.object_16.setTransform(167,495);

	this.frame_17_mc = new lib.arrow_8_mc();
	this.frame_17_mc.setTransform(230,335);

	this.frame_18_mc = new lib.arrow_9_mc();
	this.frame_18_mc.setTransform(560,335,1,1,0,0,180);

	this.frame_19_mc = new lib.arrow_10_mc();
	this.frame_19_mc.setTransform(395,306,1,1,0,0,180);

	this.object_20 = new lib.object_20_1_mc();
	this.object_20.setTransform(410,490);

	this.object_21 = new lib.object_21_1_mc();
	this.object_21.setTransform(404,180);

	this.object_22 = new lib.object_22_1_mc();
	this.object_22.setTransform(422,489);

	this.frame_23_mc = new lib.arrow_11_mc();
	this.frame_23_mc.setTransform(460,200,1,1,160);

	this.object_24 = new lib.object_24_1_mc();
	this.object_24.setTransform(634,485);

	this.frame_25_mc = new lib.arrow_12_mc();
	this.frame_25_mc.setTransform(495.1,190,0.812,0.812,90,0,0,0,-0.1);

	this.object_26 = new lib.object_26_1_mc();
	this.object_26.setTransform(390,125);

	this.object_27 = new lib.object_27_1_mc();
	this.object_27.setTransform(390,190);

	this.object_28 = new lib.object_28_1_mc();
	this.object_28.setTransform(95,207);

	this.frame_29_mc = new lib.arrow_14_mc();
	this.frame_29_mc.setTransform(250,185,1,1,-90);

	this.object_30 = new lib.object_30_1_mc();
	this.object_30.setTransform(390,210);

	this.object_31 = new lib.object_31_1_mc();
	this.object_31.setTransform(90,205);

	this.frame_32_mc = new lib.arrow_16_mc();
	this.frame_32_mc.setTransform(230,185,1,1,-90);

	this.object_33 = new lib.object_33_1_mc();
	this.object_33.setTransform(595,485);

	this.object_34 = new lib.object_34_1_mc();
	this.object_34.setTransform(390,485);

	this.frame_35_mc = new lib.arrow_17_mc();
	this.frame_35_mc.setTransform(250,182,1,1,-90);

	this.object_36 = new lib.object_36_1_mc();
	this.object_36.setTransform(151,495);

	this.frame_37_mc = new lib.arrow_18_mc();
	this.frame_37_mc.setTransform(535,425,1,1,180);

	this.frame_38_mc = new lib.arrow_19_mc();
	this.frame_38_mc.setTransform(245,430);

	this.frame_39_mc = new lib.arrow_20_mc();
	this.frame_39_mc.setTransform(515,400,1,1,-90);

	this.object_40 = new lib.object_40_1_mc();
	this.object_40.setTransform(395,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.frame_9_mc}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.frame_11_mc}]},1).to({state:[{t:this.frame_12_mc}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.frame_17_mc}]},1).to({state:[{t:this.frame_18_mc}]},1).to({state:[{t:this.frame_19_mc}]},1).to({state:[{t:this.object_20}]},1).to({state:[{t:this.object_21}]},1).to({state:[{t:this.object_22}]},1).to({state:[{t:this.frame_23_mc}]},1).to({state:[{t:this.object_24}]},1).to({state:[{t:this.frame_25_mc}]},1).to({state:[{t:this.object_26}]},1).to({state:[{t:this.object_27}]},1).to({state:[{t:this.object_28}]},1).to({state:[{t:this.frame_29_mc}]},1).to({state:[{t:this.object_30}]},1).to({state:[{t:this.object_31}]},1).to({state:[{t:this.frame_32_mc}]},1).to({state:[{t:this.object_33}]},1).to({state:[{t:this.object_34}]},1).to({state:[{t:this.frame_35_mc}]},1).to({state:[{t:this.object_36}]},1).to({state:[{t:this.frame_37_mc}]},1).to({state:[{t:this.frame_38_mc}]},1).to({state:[{t:this.frame_39_mc}]},1).to({state:[{t:this.object_40}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation1_2_mc();
	this.subject_1.setTransform(387,467);

	this.subject_2 = new lib.animation1_4_mc();
	this.subject_2.setTransform(387,467);

	this.subject_3 = new lib.animation1_6_mc();
	this.subject_3.setTransform(387,467);

	this.subject_4 = new lib.animation1_8_mc();
	this.subject_4.setTransform(387,467);

	this.subject_5 = new lib.animation1_10_mc();
	this.subject_5.setTransform(387,467);

	this.subject_6 = new lib.animation1_12_mc();
	this.subject_6.setTransform(387,467);

	this.subject_7 = new lib.animation1_14_mc();
	this.subject_7.setTransform(387,467);

	this.subject_8 = new lib.animation1_16_mc();
	this.subject_8.setTransform(387,467);

	this.subject_9 = new lib.animation1_18_mc();
	this.subject_9.setTransform(387,467);

	this.subject_10 = new lib.animation1_20_mc();
	this.subject_10.setTransform(387,467);

	this.subject_11 = new lib.animation1_22_mc();
	this.subject_11.setTransform(387,467);

	this.subject_12 = new lib.animation1_24_mc();
	this.subject_12.setTransform(387,467);

	this.subject_13 = new lib.animation1_26_mc();
	this.subject_13.setTransform(387,467);

	this.subject_14 = new lib.animation1_28_mc();
	this.subject_14.setTransform(387,467);

	this.subject_15 = new lib.animation1_30_mc();
	this.subject_15.setTransform(387,467);

	this.subject_16 = new lib.animation1_32_mc();
	this.subject_16.setTransform(387,467);

	this.subject_17 = new lib.animation1_34_mc();
	this.subject_17.setTransform(387,467);

	this.subject_18 = new lib.animation1_36_mc();
	this.subject_18.setTransform(387,467);

	this.subject_19 = new lib.animation1_38_mc();
	this.subject_19.setTransform(387,467);

	this.subject_20 = new lib.animation1_40_mc();
	this.subject_20.setTransform(387,467);

	this.subject_21 = new lib.animation1_42_mc();
	this.subject_21.setTransform(387,467);

	this.subject_22 = new lib.animation1_44_mc();
	this.subject_22.setTransform(387,467);

	this.subject_23 = new lib.animation1_46_mc();
	this.subject_23.setTransform(387,467);

	this.subject_24 = new lib.animation1_48_mc();
	this.subject_24.setTransform(387,467);

	this.subject_25 = new lib.animation1_50_mc();
	this.subject_25.setTransform(387,467);

	this.subject_26 = new lib.animation1_52_mc();
	this.subject_26.setTransform(387,467);

	this.subject_27 = new lib.animation1_53_mc();
	this.subject_27.setTransform(387,467);

	this.subject_28 = new lib.animation1_55_mc();
	this.subject_28.setTransform(387,467);

	this.subject_29 = new lib.animation1_57_mc();
	this.subject_29.setTransform(387,467);

	this.subject_30 = new lib.animation1_58_mc();
	this.subject_30.setTransform(387,467);

	this.subject_31 = new lib.animation1_60_mc();
	this.subject_31.setTransform(387,467);

	this.subject_32 = new lib.animation1_62_mc();
	this.subject_32.setTransform(387,467);

	this.subject_33 = new lib.animation1_64_mc();
	this.subject_33.setTransform(387,467);

	this.subject_34 = new lib.animation1_66_mc();
	this.subject_34.setTransform(387,467);

	this.subject_35 = new lib.animation1_68_mc();
	this.subject_35.setTransform(387,467);

	this.subject_36 = new lib.animation1_70_mc();
	this.subject_36.setTransform(387,467);

	this.subject_37 = new lib.animation1_72_mc();
	this.subject_37.setTransform(387,467);

	this.subject_38 = new lib.animation1_74_mc();
	this.subject_38.setTransform(387,467);

	this.subject_39 = new lib.animation1_76_mc();
	this.subject_39.setTransform(387,467);

	this.subject_40 = new lib.animation1_77_mc();
	this.subject_40.setTransform(387,467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).to({state:[{t:this.subject_26}]},1).to({state:[{t:this.subject_27}]},1).to({state:[{t:this.subject_28}]},1).to({state:[{t:this.subject_29}]},1).to({state:[{t:this.subject_30}]},1).to({state:[{t:this.subject_31}]},1).to({state:[{t:this.subject_32}]},1).to({state:[{t:this.subject_33}]},1).to({state:[{t:this.subject_34}]},1).to({state:[{t:this.subject_35}]},1).to({state:[{t:this.subject_36}]},1).to({state:[{t:this.subject_37}]},1).to({state:[{t:this.subject_38}]},1).to({state:[{t:this.subject_39}]},1).to({state:[{t:this.subject_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(84.4,-289.9,638,1287.3);
p.frameBounds = [rect, new cjs.Rectangle(-60.6,-289.9,896,905), new cjs.Rectangle(-60.6,-289.9,896,900), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,918.7,1048), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, new cjs.Rectangle(-60.6,-289.9,982.8,890.3), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, new cjs.Rectangle(-60.6,-289.9,961.2,937), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,901), new cjs.Rectangle(-60.6,-289.9,934.2,890.3), new cjs.Rectangle(-60.6,-289.9,896,895), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, rect, new cjs.Rectangle(-60.6,-289.9,896,950), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,903.9), new cjs.Rectangle(-60.6,-289.9,896,890.3), new cjs.Rectangle(-60.6,-289.9,896,900), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, new cjs.Rectangle(-60.6,-139,896,739.4), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, new cjs.Rectangle(-60.6,-139,896,739.4), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, new cjs.Rectangle(-60.6,-289.9,896,925), new cjs.Rectangle(-60.6,-289.9,896,915), rect=new cjs.Rectangle(-60.6,-289.9,896,890.3), rect, new cjs.Rectangle(72.5,-289.9,677.3,965), new cjs.Rectangle(72.5,-289.9,504,970), new cjs.Rectangle(210.5,-289.9,554.6,892.3), new cjs.Rectangle(-200,-289.9,1200,890.5)];


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
	this.instance = new lib.background_5_mc();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-289.9,1262.7,1287.3);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-289.9,1262.7,1287.3);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-289.9,1262.7,1287.3);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_result_1_mc();
	this.instance.setTransform(400,295);

	this.instance_1 = new lib.table_with_dish_mc();
	this.instance_1.setTransform(401,530);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	// bg
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-30,1200,650);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,0,1200,720)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.hero_main_mc();
	this.instance.setTransform(-550,337,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({x:370},20).to({x:320},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-869.2,52.8,638.5,568.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-823.1,52.7,638.5,568.5), new cjs.Rectangle(-777.1,52.7,638.5,568.5), new cjs.Rectangle(-731.1,52.7,638.4,568.5), new cjs.Rectangle(-685.1,52.7,638.4,568.5), new cjs.Rectangle(-639.1,52.7,638.4,568.5), new cjs.Rectangle(-593.1,52.7,638.4,568.5), new cjs.Rectangle(-547.1,52.7,638.4,568.5), new cjs.Rectangle(-501.1,52.7,638.5,568.5), new cjs.Rectangle(-455.1,52.7,638.5,568.5), new cjs.Rectangle(-409.1,52.7,638.5,568.5), new cjs.Rectangle(-363.1,52.7,638.5,568.5), new cjs.Rectangle(-317.2,52.7,638.5,568.5), new cjs.Rectangle(-271.2,52.7,638.5,568.5), new cjs.Rectangle(-225.2,52.7,638.5,568.5), new cjs.Rectangle(-179.2,52.7,638.5,568.5), new cjs.Rectangle(-133.2,52.7,638.5,568.5), new cjs.Rectangle(-87.2,52.7,638.5,568.5), new cjs.Rectangle(-41.2,52.7,638.5,568.5), new cjs.Rectangle(4.8,52.7,638.5,568.5), new cjs.Rectangle(50.8,52.8,638.5,568.5), new cjs.Rectangle(40.7,52.7,638.4,568.5), new cjs.Rectangle(30.7,52.7,638.4,568.5), new cjs.Rectangle(20.7,52.7,638.4,568.5), new cjs.Rectangle(10.7,52.7,638.4,568.5), new cjs.Rectangle(0.8,52.8,638.5,568.5)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
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
		_createBubblesFunc(16);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,675);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,820.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(680,500);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,1040,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(540,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// heroes
	this.instance = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// title
	this.instance_2 = new lib.animation_title_mc();
	this.instance_2.setTransform(590,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-869.2,-280.8,1869.3,1364.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-30,1200,650);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(460,550);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(360,550);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,510);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,510);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
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

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.ResultScreen();

	this.instance_9 = new lib.InstructionScreen();

	this.instance_10 = new lib.Glitter_2();
	this.instance_10.setTransform(500,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_11 = new lib.FlashAnimation();
	this.instance_11.setTransform(150,280);

	this.instance_12 = new lib.TrackMove_2();
	this.instance_12.setTransform(350,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_13 = new lib.TrackMove();
	this.instance_13.setTransform(270,50);

	this.instance_14 = new lib.Cursor();
	this.instance_14.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_15 = new lib.OrientationLockScreen();

	this.instance_16 = new lib.CurtainScreen();

	this.instance_17 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_14},{t:this.instance_13},{t:this.gravity_explosion_comp},{t:this.instance_12},{t:this.instance_11},{t:this.next_btn},{t:this.instance_10}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},1).to({state:[{t:this.instance_17}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-869.2,-280.8,1869.3,1360.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect=new cjs.Rectangle(-262.6,-289.9,1262.7,1287.3), rect, rect, new cjs.Rectangle(-200,0,1200,770), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-10,810,440), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,600,1200,600), rect=null, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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