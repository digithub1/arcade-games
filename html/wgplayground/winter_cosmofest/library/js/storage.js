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
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[662,602,600,600],[0,602,660,563]]},
		{name:"storage_atlas_6", frames: [[602,0,560,560],[0,0,600,600],[0,602,571,576],[573,602,547,593]]},
		{name:"storage_atlas_7", frames: [[0,0,500,540],[502,0,432,601],[0,603,1200,200]]},
		{name:"storage_atlas_8", frames: [[890,0,370,560],[428,504,460,460],[890,562,373,539],[0,504,426,510],[0,0,436,502],[0,1016,640,280]]},
		{name:"storage_atlas_9", frames: [[0,282,421,396],[0,680,360,432],[362,736,360,432],[724,851,360,432],[642,0,525,332],[825,334,305,515],[423,334,400,400],[0,0,640,280]]},
		{name:"storage_atlas_10", frames: [[0,0,360,432],[0,434,360,432],[0,868,360,432],[724,0,360,432],[362,0,360,432],[362,434,360,432],[362,868,360,432],[724,434,360,432],[724,868,360,432]]},
		{name:"storage_atlas_11", frames: [[724,0,360,432],[362,434,360,432],[0,0,360,432],[0,868,360,432],[362,868,360,432],[0,434,360,432],[362,0,360,432],[724,434,360,432],[724,868,360,432]]},
		{name:"storage_atlas_12", frames: [[680,604,500,300],[724,0,500,300],[362,918,500,300],[724,302,500,300],[362,434,316,482],[0,0,360,432],[362,0,360,432],[0,434,360,432],[0,868,360,432]]},
		{name:"storage_atlas_13", frames: [[502,0,500,300],[0,0,500,300],[345,302,343,436],[0,302,343,436],[345,740,343,436],[0,740,343,436],[690,740,343,436],[690,302,343,436]]},
		{name:"storage_atlas_14", frames: [[690,438,343,436],[0,0,343,436],[690,0,343,436],[0,438,343,436],[345,438,343,436],[345,0,343,436]]},
		{name:"storage_atlas_15", frames: [[0,0,343,436],[0,438,343,436],[345,0,343,436],[690,0,343,436],[345,438,343,436],[690,438,343,436]]},
		{name:"storage_atlas_16", frames: [[0,0,343,436],[345,438,343,436],[0,438,343,436],[690,0,343,436],[690,438,343,436],[345,0,343,436]]},
		{name:"storage_atlas_17", frames: [[0,0,343,436],[690,438,343,436],[0,438,343,436],[345,0,343,436],[690,0,343,436],[345,438,343,436]]},
		{name:"storage_atlas_18", frames: [[760,790,378,393],[380,790,378,393],[0,438,378,393],[380,395,378,393],[345,0,378,393],[0,833,378,393],[725,0,378,393],[760,395,378,393],[0,0,343,436]]},
		{name:"storage_atlas_19", frames: [[0,0,378,393],[0,790,378,393],[0,395,378,393],[762,382,380,380],[762,764,380,380],[380,764,380,380],[380,0,380,380],[380,382,380,380],[762,0,380,380]]},
		{name:"storage_atlas_20", frames: [[382,764,292,487],[0,0,380,380],[0,382,380,380],[382,0,380,380],[0,764,380,380],[764,382,260,540],[764,0,380,380],[382,382,380,380]]},
		{name:"storage_atlas_21", frames: [[556,876,580,200],[0,459,270,486],[597,0,405,320],[306,0,289,465],[272,467,282,465],[556,467,320,407],[878,322,258,477],[0,0,304,457],[0,1078,580,200],[582,1078,580,200]]},
		{name:"storage_atlas_22", frames: [[582,0,580,200],[0,0,580,200],[582,202,580,200],[582,606,580,200],[582,808,580,200],[0,202,580,200],[0,606,580,200],[0,404,580,200],[582,404,580,200],[0,808,580,200],[0,1010,580,200]]},
		{name:"storage_atlas_23", frames: [[342,741,228,484],[684,0,238,485],[924,0,221,484],[342,342,288,397],[572,741,230,474],[924,486,337,304],[804,792,286,354],[0,0,340,340],[0,684,340,340],[0,342,340,340],[342,0,340,340]]},
		{name:"storage_atlas_24", frames: [[510,975,300,300],[812,975,300,300],[0,0,280,360],[0,483,380,260],[979,481,300,300],[986,0,300,300],[786,481,191,492],[786,0,198,479],[282,0,207,481],[382,483,202,479],[0,745,200,480],[586,379,198,483],[491,0,254,377],[202,964,306,296]]},
		{name:"storage_atlas_25", frames: [[0,302,300,300],[0,0,300,300],[947,322,240,320],[302,212,240,320],[463,534,240,320],[705,808,240,320],[947,644,240,320],[705,486,240,320],[839,0,240,320],[947,966,240,320],[302,0,372,210],[0,604,185,463],[187,604,274,312],[676,0,161,484],[187,918,233,361],[422,918,281,288]]},
		{name:"storage_atlas_26", frames: [[0,644,240,320],[242,0,240,320],[0,966,240,320],[726,0,240,320],[968,0,240,320],[484,0,240,320],[242,322,240,320],[0,0,240,320],[0,322,240,320],[484,322,240,320],[242,644,240,320],[242,966,240,320],[726,322,254,297],[756,621,201,333],[982,322,206,366],[484,644,269,257],[973,942,234,276],[756,956,215,304],[484,903,270,255],[959,690,265,250]]},
		{name:"storage_atlas_27", frames: [[1110,872,190,190],[186,873,190,190],[1059,0,230,230],[448,476,340,120],[1110,610,140,260],[200,564,170,260],[193,386,253,176],[1041,232,235,198],[1002,432,217,176],[789,0,268,203],[0,873,184,320],[789,205,250,206],[263,0,271,231],[0,572,198,299],[536,0,251,248],[535,250,187,224],[0,244,191,326],[186,1065,190,190],[790,413,210,184],[372,598,157,233],[378,984,190,190],[917,803,191,191],[531,791,191,191],[917,610,191,191],[724,792,191,191],[531,598,191,191],[724,599,191,191],[762,996,190,190],[0,0,261,242],[570,985,190,190],[954,1064,190,190],[193,244,340,140]]},
		{name:"storage_atlas_28", frames: [[0,1075,180,180],[0,706,200,170],[916,0,180,180],[370,1174,300,78],[889,809,300,78],[889,889,300,78],[889,729,300,78],[889,969,300,78],[672,1209,300,78],[724,1049,300,78],[889,649,300,78],[724,1129,300,78],[974,1209,300,78],[196,346,216,149],[437,138,197,150],[688,0,226,149],[222,0,213,162],[202,670,190,167],[0,532,199,172],[390,513,200,132],[437,0,249,136],[676,151,129,221],[807,182,129,221],[938,182,129,221],[545,290,129,221],[414,290,129,221],[676,374,129,221],[807,405,129,221],[1069,182,129,221],[0,0,220,160],[202,839,142,214],[0,878,168,195],[938,567,340,80],[0,162,186,188],[0,352,194,178],[201,497,187,171],[700,884,187,132],[182,1055,186,159],[938,405,171,160],[1098,0,180,180],[188,164,180,180],[346,884,175,143],[370,1029,175,143],[571,739,175,143],[523,884,175,143],[394,739,175,143],[547,1029,175,143],[1111,405,175,143],[394,647,290,90]]},
		{name:"storage_atlas_29", frames: [[274,316,120,120],[640,318,120,120],[396,318,120,120],[518,318,120,120],[924,343,120,120],[794,976,73,110],[869,976,73,110],[302,0,300,78],[0,0,300,78],[640,674,90,50],[0,884,90,50],[1046,362,120,120],[1168,362,120,120],[0,398,120,120],[762,380,120,120],[701,161,50,50],[1250,484,50,50],[1250,536,50,50],[772,736,50,50],[590,684,48,48],[1146,976,48,48],[924,236,185,105],[949,0,96,234],[1145,0,96,234],[753,0,96,234],[1047,0,96,234],[851,0,96,234],[0,80,96,234],[98,80,96,234],[196,80,96,234],[294,80,96,234],[392,80,96,234],[689,798,80,124],[274,438,120,120],[1038,728,180,60],[856,728,180,60],[0,727,180,60],[590,736,180,60],[408,684,180,60],[226,684,180,60],[490,236,280,80],[202,995,220,30],[842,885,40,40],[406,746,85,121],[1181,790,101,99],[1111,236,147,124],[490,80,107,129],[604,0,147,159],[0,316,220,80],[226,615,40,55],[800,885,40,43],[490,211,10,11],[122,510,69,94],[599,161,100,73],[1220,718,57,60],[215,844,99,100],[884,413,23,38],[884,380,31,31],[112,789,50,50],[1260,212,40,147],[772,236,150,142],[1243,0,50,210],[222,316,50,297],[396,440,120,120],[996,606,100,120],[1098,606,100,120],[518,440,120,120],[640,440,120,120],[884,465,120,120],[1219,891,40,40],[1238,976,40,40],[1196,976,40,40],[424,995,40,40],[944,1018,40,40],[986,1018,40,40],[1028,1018,40,40],[1196,1018,40,40],[1238,1018,40,40],[1070,1018,40,40],[122,398,95,110],[182,746,110,96],[484,966,77,110],[112,844,101,99],[640,562,110,110],[0,789,110,93],[884,790,91,110],[642,966,74,110],[752,624,102,110],[1200,606,95,110],[294,746,110,96],[563,966,77,110],[586,798,101,99],[884,587,110,110],[772,790,110,93],[493,746,91,110],[718,966,74,110],[122,615,102,110],[1006,484,120,120],[0,642,80,80],[193,510,24,24],[193,536,24,24],[193,562,24,24],[193,588,24,24],[1128,484,120,120],[762,502,120,120],[0,520,120,120],[274,560,120,120],[396,562,120,120],[518,562,120,120],[800,934,240,40],[977,892,240,40],[316,869,240,40],[316,911,240,40],[558,924,240,40],[0,946,240,40],[242,953,240,40],[1042,934,240,40],[0,988,200,40],[944,976,200,40],[977,790,100,100],[1079,790,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
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



(lib.bg_closet_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_closet_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_blush_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.check_hairstyle_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.check_lips_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.current_location_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.exemplary_flower_0_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.exemplary_flower_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyes_closet2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fotki00_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fotki0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fotki1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fotki1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fotki1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fotki2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fotki2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fotki2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fotki3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fotki3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fotki3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress10_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe10_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair10_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lipstick_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lipstick_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lipstick_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lipstick_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lipstick_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lipstick_6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podv1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podv2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podv3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podv4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podv5_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podv6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podvodka1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podvodka2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podvodka3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podvodka4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podvodka5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_podvodka6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress10_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe10_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lipstick_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lipstick_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lipstick_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lipstick_6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podv4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podv6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podvodka1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podvodka2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podvodka3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podvodka4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podvodka5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podvodka6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.item1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.item2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.item2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.item2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.item3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.item3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.item3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.item4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.item4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.item4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.pencil1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.pencil3_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.pencil4_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.pencil5_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.pencil6_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.photo_lens_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.photo_lens_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.photo_lens_3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.photo_lens_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.pic_0_9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.pic_1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.podlogka_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.pointing_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.polaroid1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.polaroid2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.rouge2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.shadow_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.snow_logo_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-170,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-70,340,140);
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
	this.shape.graphics.lf(["#FFFFCC","#FFCC00"],[0,1],9.3,-48,-25.7,63.1).s().p("AlpJTQhSgOg1hAQg1hAAAhSIAArlQAAhTA2hAQA1g/BSgPQBRgOBIAqIKCF0QBJApAcBOQAcBMgcBOQgdBOhIApIqCF0Qg1Aeg6AAQgVAAgWgEg");
	this.shape.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-60,110.1,120);
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


(lib.target_ph_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.target_ph_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwivQCwixD3AAQD4AACvCxQCxCvAAD3QAAD4ixCwQivCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.target_ph_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGnQixivAAj4QAAj3CxiwQCviwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCvQiwCxj4AAQj3AAivixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.polaroid31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.polaroid1_img();
	this.instance.setTransform(-294,-245.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294,-245.5,571,576);
p.frameBounds = [rect];


(lib.polaroid21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.polaroid2_img();
	this.instance.setTransform(-273.5,-296.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-273.5,-296.5,547,593);
p.frameBounds = [rect];


(lib.pointing_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointing_finger_img();
	this.instance.setTransform(-130,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-270,260,540);
p.frameBounds = [rect];


(lib.podlogka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podlogka_img();
	this.instance.setTransform(-85.5,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect];


(lib.photo_lens_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_lens_4_img();
	this.instance.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.photo_lens_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_lens_3_img();
	this.instance.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.photo_lens_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_lens_2_img();
	this.instance.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.photo_lens_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_lens_1_img();
	this.instance.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.object_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDOEIAA8HIcHAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
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
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_3_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_2_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.item4_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item4_3_img();
	this.instance.setTransform(-73.5,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-79.5,147,159);
p.frameBounds = [rect];


(lib.item4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item4_2_img();
	this.instance.setTransform(-81,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-117,157,233);
p.frameBounds = [rect];


(lib.item4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item4_1_img();
	this.instance.setTransform(-53.5,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-64.5,107,129);
p.frameBounds = [rect];


(lib.item3_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_3_img();
	this.instance.setTransform(-73.5,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-62,147,124);
p.frameBounds = [rect];


(lib.item3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item3_2_img();
	this.instance.setTransform(-148,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-95,304,457);
p.frameBounds = [rect];


(lib.item3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item3_1_img();
	this.instance.setTransform(-50.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-49.5,101,99);
p.frameBounds = [rect];


(lib.item2_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_2_img();
	this.instance.setTransform(-105,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-92,210,184);
p.frameBounds = [rect];


(lib.item2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_3_img();
	this.instance.setTransform(-42.5,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-60.5,85,121);
p.frameBounds = [rect];


(lib.item2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_1_img();
	this.instance.setTransform(-111,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-78,168,195);
p.frameBounds = [rect];


(lib.item1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,142,214);
p.frameBounds = [rect];


(lib.indicator_ph_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AtRCWIAAkrIaiAAIAAErg");
	this.shape.setTransform(80,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,170,30);
p.frameBounds = [rect];


(lib.indicator_ph_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AsVBZIAAiyIYrAAIAACyg");
	this.shape.setTransform(80,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,158,18);
p.frameBounds = [rect];


(lib.indicator_ph_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AsfBjIAAjGIY/AAIAADGg");
	this.shape.setTransform(80,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,160,20);
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


(lib.hero2_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge2_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-180,-216);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-180,-216);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-180,-216);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-180,-216);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-180,-216);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_podvodka_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_podvodka3_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_podvodka_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_podvodka1_img();
	this.instance.setTransform(-180,-216);

	this.instance_1 = new lib.hero2_podvodka2_img();
	this.instance_1.setTransform(-180,-216);

	this.instance_2 = new lib.hero2_podvodka3_img();
	this.instance_2.setTransform(-180,-216);

	this.instance_3 = new lib.hero2_podvodka4_img();
	this.instance_3.setTransform(-180,-216);

	this.instance_4 = new lib.hero2_podvodka5_img();
	this.instance_4.setTransform(-180,-216);

	this.instance_5 = new lib.hero2_podvodka6_img();
	this.instance_5.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_main_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_main_podvodka_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_podvodka1_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_main_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_main_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_main_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-262.5,-211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.5,-211,525,332);
p.frameBounds = [rect];


(lib.hero2_main_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_main_body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body0_img();
	this.instance.setTransform(-210.5,-198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210.5,-198,421,396);
p.frameBounds = [rect];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-180,-216);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-180,-216);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-180,-216);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-180,-216);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-180,-216);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-91,-101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-101.9,187,224);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-91,-101.9);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-213,-93);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-175,-83);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-132,-108);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-206,-82);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-122,-168);

	this.instance_6 = new lib.hero2_hair7_img();
	this.instance_6.setTransform(-118,-177);

	this.instance_7 = new lib.hero2_hair8_img();
	this.instance_7.setTransform(-140,-72);

	this.instance_8 = new lib.hero2_hair10_img();
	this.instance_8.setTransform(-154.5,-88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-101.9,187,224);
p.frameBounds = [rect, new cjs.Rectangle(-213,-93,432,601), new cjs.Rectangle(-175,-83,426,510), new cjs.Rectangle(-132,-108,306,296), new cjs.Rectangle(-206,-82,436,502), new cjs.Rectangle(-122,-168,191,326), new cjs.Rectangle(-118,-177,305,515), new cjs.Rectangle(-140,-72,316,482), null, new cjs.Rectangle(-154.5,-88.1,373,539)];


(lib.hero2_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-262.5,-211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.5,-211,525,332);
p.frameBounds = [rect];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-134.5,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-128.5,269,257);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-134.5,-128.5);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-178,-123.9);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-140,-129);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-131,-124);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-131,-130);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-102,-130);

	this.instance_6 = new lib.hero2_fringe7_img();
	this.instance_6.setTransform(-109,-125);

	this.instance_7 = new lib.hero2_fringe8_img();
	this.instance_7.setTransform(-114,-121);

	this.instance_8 = new lib.hero2_fringe9_img();
	this.instance_8.setTransform(-127,-128);

	this.instance_9 = new lib.hero2_fringe10_img();
	this.instance_9.setTransform(-125,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-128.5,269,257);
p.frameBounds = [rect, new cjs.Rectangle(-178,-123.9,337,304), new cjs.Rectangle(-140,-129,286,354), new cjs.Rectangle(-131,-124,281,288), new cjs.Rectangle(-131,-130,271,231), new cjs.Rectangle(-102,-130,234,276), new cjs.Rectangle(-109,-125,198,299), new cjs.Rectangle(-114,-121,215,304), new cjs.Rectangle(-127,-128,251,248), new cjs.Rectangle(-125,-126,250,206)];


(lib.hero2_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-180,-216);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-180,-216);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-180,-216);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-180,-216);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-180,-216);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-180,-216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-216,360,432);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-105,-158.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-158.9,233,361);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-92,-160);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-105,-158.9);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-134,-151.9);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-93,-164);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-130,-161);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-108,-174.9);

	this.instance_6 = new lib.hero2_dress7_img();
	this.instance_6.setTransform(-113,-165);

	this.instance_7 = new lib.hero2_dress8_img();
	this.instance_7.setTransform(-121,-173.9);

	this.instance_8 = new lib.hero2_dress9_img();
	this.instance_8.setTransform(-86,-162.9);

	this.instance_9 = new lib.hero2_dress10_img();
	this.instance_9.setTransform(-92,-159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-160,184,320);
p.frameBounds = [rect, new cjs.Rectangle(-105,-158.9,233,361), new cjs.Rectangle(-134,-151.9,282,465), new cjs.Rectangle(-93,-164,320,407), new cjs.Rectangle(-130,-161,230,474), new cjs.Rectangle(-108,-174.9,254,377), new cjs.Rectangle(-113,-165,258,477), new cjs.Rectangle(-121,-173.9,292,487), new cjs.Rectangle(-86,-162.9,206,366), new cjs.Rectangle(-92,-159,201,333)];


(lib.hero2_body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body0_img();
	this.instance.setTransform(-210.5,-198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210.5,-198,421,396);
p.frameBounds = [rect];


(lib.hero2_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-80.5,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-242,161,484);
p.frameBounds = [rect];


(lib.hero1_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge6_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-171.5,-218);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-171.5,-218);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-171.5,-218);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-171.5,-218);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-171.5,-218);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_podvodka_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_podvodka1_img();
	this.instance.setTransform(-171.5,-218);

	this.instance_1 = new lib.hero1_podvodka2_img();
	this.instance_1.setTransform(-171.5,-218);

	this.instance_2 = new lib.hero1_podvodka3_img();
	this.instance_2.setTransform(-171.5,-218);

	this.instance_3 = new lib.hero1_podvodka4_img();
	this.instance_3.setTransform(-171.5,-218);

	this.instance_4 = new lib.hero1_podvodka5_img();
	this.instance_4.setTransform(-171.5,-218);

	this.instance_5 = new lib.hero1_podvodka6_img();
	this.instance_5.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_main_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_main_podvodka_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podvodka1_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_main_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_main_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_main_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-202.5,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.5,-160,405,320);
p.frameBounds = [rect];


(lib.hero1_main_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_main_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_main_body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body0_img();
	this.instance.setTransform(-186,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186,-105,372,210);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-171.5,-218);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-171.5,-218);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-171.5,-218);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-171.5,-218);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-171.5,-218);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair9_img();
	this.instance.setTransform(-138.9,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.9,-10,288,397);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-88.5,40.8);

	this.instance_1 = new lib.hero1_hair3_img();
	this.instance_1.setTransform(-96,-11.2);

	this.instance_2 = new lib.hero1_hair5_img();
	this.instance_2.setTransform(-111,67.8);

	this.instance_3 = new lib.hero1_hair7_img();
	this.instance_3.setTransform(-96,64.5);

	this.instance_4 = new lib.hero1_hair8_img();
	this.instance_4.setTransform(-123.9,37.5);

	this.instance_5 = new lib.hero1_hair9_img();
	this.instance_5.setTransform(-138.9,-10);

	this.instance_6 = new lib.hero1_hair10_img();
	this.instance_6.setTransform(-141,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,40.8,185,105);
p.frameBounds = [rect, null, new cjs.Rectangle(-96,-11.2,190,167), null, new cjs.Rectangle(-111,67.8,199,172), null, new cjs.Rectangle(-96,64.5,200,132), new cjs.Rectangle(-123.9,37.5,249,136), new cjs.Rectangle(-138.9,-10,288,397), new cjs.Rectangle(-141,-9,289,465)];


(lib.hero1_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-202.5,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.5,-160,405,320);
p.frameBounds = [rect];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe9_img();
	this.instance.setTransform(-119.9,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.9,-78,268,203);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-108,-74.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-95.5,-78.5);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-106.9,-76);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-106.9,-91.5);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-129.9,-77);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-108.9,-81.5);

	this.instance_6 = new lib.hero1_fringe7_img();
	this.instance_6.setTransform(-135.9,-72.5);

	this.instance_7 = new lib.hero1_fringe8_img();
	this.instance_7.setTransform(-121.4,-75);

	this.instance_8 = new lib.hero1_fringe9_img();
	this.instance_8.setTransform(-119.9,-78);

	this.instance_9 = new lib.hero1_fringe10_img();
	this.instance_9.setTransform(-125.4,-86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-74.5,216,149);
p.frameBounds = [rect, new cjs.Rectangle(-95.5,-78.5,197,150), new cjs.Rectangle(-106.9,-76,226,149), new cjs.Rectangle(-106.9,-91.5,213,162), new cjs.Rectangle(-129.9,-77,235,198), new cjs.Rectangle(-108.9,-81.5,217,176), new cjs.Rectangle(-135.9,-72.5,274,312), new cjs.Rectangle(-121.4,-75,254,297), new cjs.Rectangle(-119.9,-78,268,203), new cjs.Rectangle(-125.4,-86,253,176)];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes3_img();
	this.instance.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-171.5,-218);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-171.5,-218);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-171.5,-218);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-171.5,-218);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-171.5,-218);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-171.5,-218);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-171.5,-218);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-171.5,-218);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-171.5,-218);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-171.5,-218);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-171.5,-218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-218,343,436);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-146,-246.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-246.9,270,486);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-99,-239.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-108,-239);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-104,-238.9);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-99,-239.9);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-120,-241.9);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-146,-246.9);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-112,-244.9);

	this.instance_7 = new lib.hero1_dress8_img();
	this.instance_7.setTransform(-100,-241.9);

	this.instance_8 = new lib.hero1_dress9_img();
	this.instance_8.setTransform(-116,-242.9);

	this.instance_9 = new lib.hero1_dress10_img();
	this.instance_9.setTransform(-99,-222.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-239.5,198,479);
p.frameBounds = [rect, new cjs.Rectangle(-108,-239,207,481), new cjs.Rectangle(-104,-238.9,202,479), new cjs.Rectangle(-99,-239.9,200,480), new cjs.Rectangle(-120,-241.9,228,484), new cjs.Rectangle(-146,-246.9,270,486), new cjs.Rectangle(-112,-244.9,238,485), new cjs.Rectangle(-100,-241.9,198,483), new cjs.Rectangle(-116,-242.9,221,484), new cjs.Rectangle(-99,-222.9,185,463)];


(lib.hero1_body0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body0_img();
	this.instance.setTransform(-186,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186,-105,372,210);
p.frameBounds = [rect];


(lib.hero1_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body_img();
	this.instance.setTransform(-95.5,-246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-246,191,492);
p.frameBounds = [rect];


(lib.fotki3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki3_3_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki3_2_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki3_1_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki2_3_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki2_2_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki2_1_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki1_3_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki1_2_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki1_1_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki00_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki00_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.fotki0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fotki0_img();
	this.instance.setTransform(-189,-196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-196.5,378,393);
p.frameBounds = [rect];


(lib.flash_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_img();
	this.instance.setTransform(-330,-281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-281.5,660,563);
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


(lib.exemplary_flower_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.exemplary_flower_1_img();
	this.instance.setTransform(-36.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-55,73,110);
p.frameBounds = [rect];


(lib.exemplary_flower_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.exemplary_flower_0_img();
	this.instance.setTransform(-36.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-55,73,110);
p.frameBounds = [rect];


(lib.dress_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress10_img();
	this.instance.setTransform(-90,-150,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bfPMAAAg+dMAu3AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-200,300,400);
p.frameBounds = [rect];


(lib.dress_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress10_img();
	this.instance.setTransform(-83,-208,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress9_img();
	this.instance.setTransform(-93,-165,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bfPMAAAg+dMAu3AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-200,300,400);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress9_img();
	this.instance.setTransform(-99,-218,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress8_img();
	this.instance.setTransform(-131,-219,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgXbAiYMAAAhEuMAu3AAAMAAABEug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-220,300,440);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress8_img();
	this.instance.setTransform(-89,-217,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress7_img();
	this.instance.setTransform(-116,-215,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgXbAiYMAAAhEuMAu3AAAMAAABEug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-220,300,440);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress7_img();
	this.instance.setTransform(-107,-218,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-114,-170,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bfPMAAAg+dMAu3AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-200,300,400);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-122,-219,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-104,-213,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgXbAj8MAAAhH2MAu3AAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-230,300,460);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress5_img();
	this.instance.setTransform(-103,-218,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-144,-183,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bfPMAAAg+dMAu3AAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-200,300,400);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-90,-216,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-127,-209,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgXbAiYMAAAhEuMAu3AAAMAAABEug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-220,300,440);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-91,-216,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-105,-162,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13drMAAAg7VMArvAAAMAAAA7Vg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-190,280,380);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-93,-216,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-83,-144,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13drMAAAg7VMArvAAAMAAAA7Vg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-190,280,380);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-89,-216,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgV3Aj7MAAAhH2MArvAAAMAAABH2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-230,280,460);
p.frameBounds = [rect];


(lib.check_shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_shadows_img();
	this.instance.setTransform(-85,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.check_lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_lips_img();
	this.instance.setTransform(-70,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.check_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_hairstyle_img();
	this.instance.setTransform(-140,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.check_eyes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_eyes_img();
	this.instance.setTransform(-170,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.check_eyebrows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_eyebrows_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.check_blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_blush_img();
	this.instance.setTransform(-100,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,200,170);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-290,-100);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-290,-100);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-290,-100);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-290,-100);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-290,-100);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-290,-100);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-290,-100);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-290,-100);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-290,-100);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-290,-100);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-290,-100);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-290,-100);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-290,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-100,580,200);
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


(lib.body_current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_img();
	this.instance.setTransform(-230,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-290,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-100,580,200);
p.frameBounds = [rect];


(lib.bg_closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_closet_2_img();
	this.instance.setTransform(-250,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-270,500,540);
p.frameBounds = [rect];


(lib.bg_closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_closet_1_img();
	this.instance.setTransform(-185,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-280,370,560);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhfTAwbMAAAhg1MC+nAAAMAAABg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-610,-310,1220,620);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_4_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-310,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310,-310,600,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-280,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-280,560,560);
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

	this.instance_3 = new lib.copyright_title_ja_img();
	this.instance_3.setTransform(-250,-150);

	this.instance_4 = new lib.copyright_title_zh_img();
	this.instance_4.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

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


(lib.Snowflake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_1_img();
	this.instance.setTransform(-12,-12);

	this.instance_1 = new lib.snowfall_2_1_img();
	this.instance_1.setTransform(-12,-12);

	this.instance_2 = new lib.snowfall_3_1_img();
	this.instance_2.setTransform(-12,-12);

	this.instance_3 = new lib.snowfall_4_1_img();
	this.instance_3.setTransform(-12,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect, rect, rect, rect];


(lib.snowfall_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fA2sMAAAhtXMB8/AAAMAAABtXg");
	this.shape.setTransform(500,300,1.25,0.857);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,600);
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


(lib.snow_logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snow_logo_img();
	this.instance.setTransform(-145,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-45,290,90);
p.frameBounds = [rect];


(lib.shadow_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.nav_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_4_img();
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


(lib.nav_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_4_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-50,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-50,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-60,100,120);
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


(lib.bg_small_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_2_img();
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:160,alpha:1},10).to({y:205},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

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
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,656), new cjs.Rectangle(-210,-210,420,632), new cjs.Rectangle(-210,-210,420,608), new cjs.Rectangle(-210,-210,420,584), new cjs.Rectangle(-210,-210,420,560), new cjs.Rectangle(-210,-210,420,536), rect=new cjs.Rectangle(-210,-210,420,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,524), new cjs.Rectangle(-210,-210,420,543.5), new cjs.Rectangle(-210,-210,420,563), new cjs.Rectangle(-210,-210,420,582.5), new cjs.Rectangle(-210,-210,420,602), new cjs.Rectangle(-210,-210,420,621.5), new cjs.Rectangle(-210,-210,420,641), new cjs.Rectangle(-210,-210,420,660.5), new cjs.Rectangle(-210,-210,420,680)];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-60,110.1,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-54.9,-63,115.6,126), new cjs.Rectangle(-59.4,-66,121.1,132), new cjs.Rectangle(-63.9,-69,126.6,138), new cjs.Rectangle(-68.5,-72,132.1,144), new cjs.Rectangle(-73,-75,137.7,150), new cjs.Rectangle(-70.9,-75,137.6,150), new cjs.Rectangle(-68.9,-75,137.6,150), new cjs.Rectangle(-66.9,-75,137.6,150), new cjs.Rectangle(-64.9,-75,137.6,150), new cjs.Rectangle(-63,-75,137.6,150), new cjs.Rectangle(-61,-75,137.6,150), new cjs.Rectangle(-59,-75,137.6,150), new cjs.Rectangle(-57,-75,137.6,150), new cjs.Rectangle(-55,-75,137.6,150), new cjs.Rectangle(-53,-75,137.7,150), new cjs.Rectangle(-52.5,-72,132.1,144), new cjs.Rectangle(-52,-69,126.6,138), new cjs.Rectangle(-51.5,-66,121.1,132), new cjs.Rectangle(-50.9,-63,115.6,126), rect=new cjs.Rectangle(-50.4,-60,110.1,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// bg
	this.instance = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-100,580,200);
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


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.7,0.7,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.polaroid_level4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(183.9,-168.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,x:188.9,y:-163.9,alpha:1},2).to({scaleX:0.69,scaleY:0.69,x:183.9,y:-168.9,alpha:0.012},2).to({scaleX:1,scaleY:1,x:188.9,y:-163.9,alpha:1},2).to({scaleX:0.69,scaleY:0.69,x:183.9,y:-168.9,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki3_3_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:10.1,x:26,y:248.4},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid31_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294,352.2,571,576);
p.frameBounds = [rect, rect, new cjs.Rectangle(-294,319,571,576), new cjs.Rectangle(-294,285.8,571,576), new cjs.Rectangle(-294,252.6,571,576), new cjs.Rectangle(-294,219.4,571,576), new cjs.Rectangle(-294,186.2,571,576), new cjs.Rectangle(-294,153,571,576), new cjs.Rectangle(-294,119.8,571,576), new cjs.Rectangle(-294,86.6,571,576), new cjs.Rectangle(-294,53.4,571,576), new cjs.Rectangle(-294,20.1,571,576), new cjs.Rectangle(-294,-13.1,571,576), new cjs.Rectangle(-294,-46.3,571,576), new cjs.Rectangle(-294,-79.5,571,576), new cjs.Rectangle(-294,-112.7,571,576), new cjs.Rectangle(-294,-145.9,571,576), new cjs.Rectangle(-294,-179.1,571,576), new cjs.Rectangle(-294,-212.3,571,576), new cjs.Rectangle(-294,-245.5,571,576), new cjs.Rectangle(-294,-247.5,571,576), new cjs.Rectangle(-294,-249.5,571,576), new cjs.Rectangle(-294,-247.5,571,576), rect=new cjs.Rectangle(-294,-245.5,571,576), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-363.4,706,693.9), new cjs.Rectangle(-294,-404.4,759.5,734.9), new cjs.Rectangle(-294,-445.4,812.9,775.8), new cjs.Rectangle(-294,-404.4,759.5,734.8), new cjs.Rectangle(-294,-363.4,706,693.9), new cjs.Rectangle(-294,-404.4,759.5,734.9), new cjs.Rectangle(-294,-445.4,812.9,775.8), new cjs.Rectangle(-294,-404.4,759.5,734.8), new cjs.Rectangle(-294,-363.4,706,693.9), rect=new cjs.Rectangle(-294,-245.5,571,576), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-282.4,571,576), new cjs.Rectangle(-294,-319.3,571,576), new cjs.Rectangle(-294,-356.2,571,576), new cjs.Rectangle(-294,-393.1,571,576), new cjs.Rectangle(-294,-430,571,576), new cjs.Rectangle(-294,-466.9,571,576), new cjs.Rectangle(-294,-503.8,571,576), new cjs.Rectangle(-294,-540.7,571,576), new cjs.Rectangle(-294,-577.6,571,576), rect=new cjs.Rectangle(-294,-614.5,571,576), rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-614.5,571,583.4), new cjs.Rectangle(-294,-614.5,571,598.1), new cjs.Rectangle(-294,-614.5,571,612.7), new cjs.Rectangle(-294,-614.5,571,627.4), new cjs.Rectangle(-294,-614.5,571,642), new cjs.Rectangle(-294,-614.5,571,656.7), new cjs.Rectangle(-294,-614.5,571,671.3), new cjs.Rectangle(-294,-614.5,571,686), new cjs.Rectangle(-294,-614.5,571,700.7), new cjs.Rectangle(-294,-614.5,571,715.3), new cjs.Rectangle(-294,-614.5,571,730), new cjs.Rectangle(-294,-614.5,571,744.6), new cjs.Rectangle(-294,-614.5,571,759.3), new cjs.Rectangle(-294,-614.5,571,773.9), new cjs.Rectangle(-294,-614.5,571,788.6), new cjs.Rectangle(-294,-614.5,571,803.2), new cjs.Rectangle(-294,-614.5,571,817.9), new cjs.Rectangle(-294,-614.5,571,832.5), new cjs.Rectangle(-294,-614.5,571,847.2), new cjs.Rectangle(-294,-614.5,571,861.8), rect=new cjs.Rectangle(-294,-614.5,571,876.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-633.3,571,903.4), new cjs.Rectangle(-294,-652,571,930.6), new cjs.Rectangle(-294,-670.8,571,957.7), new cjs.Rectangle(-294,-689.6,571,984.6), new cjs.Rectangle(-294,-708.4,571,1011.3), new cjs.Rectangle(-294,-727.2,571,1037.8), new cjs.Rectangle(-294,-746,571,1064.2), new cjs.Rectangle(-294,-764.8,571,1089.9), new cjs.Rectangle(-294,-783.5,571,1115.8), new cjs.Rectangle(-294,-802.3,571,1141.7), new cjs.Rectangle(-294,-821.1,571,1167.3), new cjs.Rectangle(-294,-839.9,571,1192.7), new cjs.Rectangle(-294,-858.7,571,1218.1), new cjs.Rectangle(-88.3,131,228.6,234.8)];


(lib.polaroid_level4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(183.9,-168.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,x:188.9,y:-163.9,alpha:1},2).to({scaleX:0.69,scaleY:0.69,x:183.9,y:-168.9,alpha:0.012},2).to({scaleX:1,scaleY:1,x:188.9,y:-163.9,alpha:1},2).to({scaleX:0.69,scaleY:0.69,x:183.9,y:-168.9,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki3_2_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:-4.9,x:-105,y:242.4},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid31_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294,352.2,571,576);
p.frameBounds = [rect, rect, new cjs.Rectangle(-294,319,571,576), new cjs.Rectangle(-294,285.8,571,576), new cjs.Rectangle(-294,252.6,571,576), new cjs.Rectangle(-294,219.4,571,576), new cjs.Rectangle(-294,186.2,571,576), new cjs.Rectangle(-294,153,571,576), new cjs.Rectangle(-294,119.8,571,576), new cjs.Rectangle(-294,86.6,571,576), new cjs.Rectangle(-294,53.4,571,576), new cjs.Rectangle(-294,20.1,571,576), new cjs.Rectangle(-294,-13.1,571,576), new cjs.Rectangle(-294,-46.3,571,576), new cjs.Rectangle(-294,-79.5,571,576), new cjs.Rectangle(-294,-112.7,571,576), new cjs.Rectangle(-294,-145.9,571,576), new cjs.Rectangle(-294,-179.1,571,576), new cjs.Rectangle(-294,-212.3,571,576), new cjs.Rectangle(-294,-245.5,571,576), new cjs.Rectangle(-294,-247.5,571,576), new cjs.Rectangle(-294,-249.5,571,576), new cjs.Rectangle(-294,-247.5,571,576), rect=new cjs.Rectangle(-294,-245.5,571,576), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-363.4,706,693.9), new cjs.Rectangle(-294,-404.4,759.5,734.9), new cjs.Rectangle(-294,-445.4,812.9,775.8), new cjs.Rectangle(-294,-404.4,759.5,734.8), new cjs.Rectangle(-294,-363.4,706,693.9), new cjs.Rectangle(-294,-404.4,759.5,734.9), new cjs.Rectangle(-294,-445.4,812.9,775.8), new cjs.Rectangle(-294,-404.4,759.5,734.8), new cjs.Rectangle(-294,-363.4,706,693.9), rect=new cjs.Rectangle(-294,-245.5,571,576), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-282.4,571,576), new cjs.Rectangle(-294,-319.3,571,576), new cjs.Rectangle(-294,-356.2,571,576), new cjs.Rectangle(-294,-393.1,571,576), new cjs.Rectangle(-294,-430,571,576), new cjs.Rectangle(-294,-466.9,571,576), new cjs.Rectangle(-294,-503.8,571,576), new cjs.Rectangle(-294,-540.7,571,576), new cjs.Rectangle(-294,-577.6,571,576), rect=new cjs.Rectangle(-294,-614.5,571,576), rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-614.5,571,583.4), new cjs.Rectangle(-294,-614.5,571,598.1), new cjs.Rectangle(-294,-614.5,571,612.7), new cjs.Rectangle(-294,-614.5,571,627.4), new cjs.Rectangle(-294,-614.5,571,642), new cjs.Rectangle(-294,-614.5,571,656.7), new cjs.Rectangle(-294,-614.5,571,671.3), new cjs.Rectangle(-294,-614.5,571,686), new cjs.Rectangle(-294,-614.5,571,700.7), new cjs.Rectangle(-294,-614.5,571,715.3), new cjs.Rectangle(-294,-614.5,571,730), new cjs.Rectangle(-294,-614.5,571,744.6), new cjs.Rectangle(-294,-614.5,571,759.3), new cjs.Rectangle(-294,-614.5,571,773.9), new cjs.Rectangle(-294,-614.5,571,788.6), new cjs.Rectangle(-294,-614.5,571,803.2), new cjs.Rectangle(-294,-614.5,571,817.9), new cjs.Rectangle(-294,-614.5,571,832.5), new cjs.Rectangle(-294,-614.5,571,847.2), new cjs.Rectangle(-294,-614.5,571,861.8), rect=new cjs.Rectangle(-294,-614.5,571,876.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-633.3,571,902.1), new cjs.Rectangle(-294,-652,571,927.6), new cjs.Rectangle(-294,-670.8,571,953.5), new cjs.Rectangle(-294,-689.6,571,978.8), new cjs.Rectangle(-294,-708.4,571,1004.6), new cjs.Rectangle(-294,-727.2,571,1029.7), new cjs.Rectangle(-294,-746,571,1054.8), new cjs.Rectangle(-294,-764.8,571,1080.3), new cjs.Rectangle(-294,-783.5,571,1105.2), new cjs.Rectangle(-294,-802.3,571,1130.4), new cjs.Rectangle(-294,-821.1,571,1155.3), new cjs.Rectangle(-294,-839.9,571,1180), new cjs.Rectangle(-294,-858.7,571,1205), new cjs.Rectangle(-211.4,132.5,212.9,219.9)];


(lib.polaroid_level4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(183.9,-168.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,x:188.9,y:-163.9,alpha:1},2).to({scaleX:0.69,scaleY:0.69,x:183.9,y:-168.9,alpha:0.012},2).to({scaleX:1,scaleY:1,x:188.9,y:-163.9,alpha:1},2).to({scaleX:0.69,scaleY:0.69,x:183.9,y:-168.9,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki3_1_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:-15,x:-207,y:252.4},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid31_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-294,352.2,571,576);
p.frameBounds = [rect, rect, new cjs.Rectangle(-294,319,571,576), new cjs.Rectangle(-294,285.8,571,576), new cjs.Rectangle(-294,252.6,571,576), new cjs.Rectangle(-294,219.4,571,576), new cjs.Rectangle(-294,186.2,571,576), new cjs.Rectangle(-294,153,571,576), new cjs.Rectangle(-294,119.8,571,576), new cjs.Rectangle(-294,86.6,571,576), new cjs.Rectangle(-294,53.4,571,576), new cjs.Rectangle(-294,20.1,571,576), new cjs.Rectangle(-294,-13.1,571,576), new cjs.Rectangle(-294,-46.3,571,576), new cjs.Rectangle(-294,-79.5,571,576), new cjs.Rectangle(-294,-112.7,571,576), new cjs.Rectangle(-294,-145.9,571,576), new cjs.Rectangle(-294,-179.1,571,576), new cjs.Rectangle(-294,-212.3,571,576), new cjs.Rectangle(-294,-245.5,571,576), new cjs.Rectangle(-294,-247.5,571,576), new cjs.Rectangle(-294,-249.5,571,576), new cjs.Rectangle(-294,-247.5,571,576), rect=new cjs.Rectangle(-294,-245.5,571,576), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-363.4,706,693.9), new cjs.Rectangle(-294,-404.4,759.5,734.9), new cjs.Rectangle(-294,-445.4,812.9,775.8), new cjs.Rectangle(-294,-404.4,759.5,734.8), new cjs.Rectangle(-294,-363.4,706,693.9), new cjs.Rectangle(-294,-404.4,759.5,734.9), new cjs.Rectangle(-294,-445.4,812.9,775.8), new cjs.Rectangle(-294,-404.4,759.5,734.8), new cjs.Rectangle(-294,-363.4,706,693.9), rect=new cjs.Rectangle(-294,-245.5,571,576), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-282.4,571,576), new cjs.Rectangle(-294,-319.3,571,576), new cjs.Rectangle(-294,-356.2,571,576), new cjs.Rectangle(-294,-393.1,571,576), new cjs.Rectangle(-294,-430,571,576), new cjs.Rectangle(-294,-466.9,571,576), new cjs.Rectangle(-294,-503.8,571,576), new cjs.Rectangle(-294,-540.7,571,576), new cjs.Rectangle(-294,-577.6,571,576), rect=new cjs.Rectangle(-294,-614.5,571,576), rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-614.5,571,583.4), new cjs.Rectangle(-294,-614.5,571,598.1), new cjs.Rectangle(-294,-614.5,571,612.7), new cjs.Rectangle(-294,-614.5,571,627.4), new cjs.Rectangle(-294,-614.5,571,642), new cjs.Rectangle(-294,-614.5,571,656.7), new cjs.Rectangle(-294,-614.5,571,671.3), new cjs.Rectangle(-294,-614.5,571,686), new cjs.Rectangle(-294,-614.5,571,700.7), new cjs.Rectangle(-294,-614.5,571,715.3), new cjs.Rectangle(-294,-614.5,571,730), new cjs.Rectangle(-294,-614.5,571,744.6), new cjs.Rectangle(-294,-614.5,571,759.3), new cjs.Rectangle(-294,-614.5,571,773.9), new cjs.Rectangle(-294,-614.5,571,788.6), new cjs.Rectangle(-294,-614.5,571,803.2), new cjs.Rectangle(-294,-614.5,571,817.9), new cjs.Rectangle(-294,-614.5,571,832.5), new cjs.Rectangle(-294,-614.5,571,847.2), new cjs.Rectangle(-294,-614.5,571,861.8), rect=new cjs.Rectangle(-294,-614.5,571,876.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-294,-633.3,571,905.1), new cjs.Rectangle(-294,-652,571,933.4), new cjs.Rectangle(-294,-670.8,571,961.4), new cjs.Rectangle(-294,-689.6,571,989.6), new cjs.Rectangle(-294,-708.4,571,1017.1), new cjs.Rectangle(-294,-727.2,571,1044.2), new cjs.Rectangle(-294,-746,571,1071.6), new cjs.Rectangle(-294,-764.8,571,1098.2), new cjs.Rectangle(-294,-783.5,571,1124.6), new cjs.Rectangle(-294,-802.3,571,1150.8), new cjs.Rectangle(-298,-821.1,575.1,1177), new cjs.Rectangle(-308.1,-839.9,585.1,1202.6), new cjs.Rectangle(-318,-858.7,595,1228.1), new cjs.Rectangle(-328,128.7,242,247.5)];


(lib.polaroid_level3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(141.9,-219.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki2_3_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:-2.9,x:-139,y:252.9},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid21_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-273.5,301.3,547,593);
p.frameBounds = [rect, rect, new cjs.Rectangle(-273.5,268.1,547,593), new cjs.Rectangle(-273.5,234.9,547,593), new cjs.Rectangle(-273.5,201.6,547,593), new cjs.Rectangle(-273.5,168.4,547,593), new cjs.Rectangle(-273.5,135.2,547,593), new cjs.Rectangle(-273.5,102,547,593), new cjs.Rectangle(-273.5,68.8,547,593), new cjs.Rectangle(-273.5,35.6,547,593), new cjs.Rectangle(-273.5,2.4,547,593), new cjs.Rectangle(-273.5,-30.8,547,593), new cjs.Rectangle(-273.5,-64,547,593), new cjs.Rectangle(-273.5,-97.2,547,593), new cjs.Rectangle(-273.5,-130.4,547,593), new cjs.Rectangle(-273.5,-163.6,547,593), new cjs.Rectangle(-273.5,-196.8,547,593), new cjs.Rectangle(-273.5,-230.1,547,593), new cjs.Rectangle(-273.5,-263.3,547,593), new cjs.Rectangle(-273.5,-296.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), new cjs.Rectangle(-273.5,-300.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-333.4,547,593), new cjs.Rectangle(-273.5,-370.3,547,593), new cjs.Rectangle(-273.5,-407.2,547,593), new cjs.Rectangle(-273.5,-444.1,547,593), new cjs.Rectangle(-273.5,-480.9,547,593), new cjs.Rectangle(-273.5,-517.8,547,593), new cjs.Rectangle(-273.5,-554.7,547,593), new cjs.Rectangle(-273.5,-591.6,547,593), new cjs.Rectangle(-273.5,-628.5,547,593), rect=new cjs.Rectangle(-273.5,-665.4,547,593), rect, rect, rect, new cjs.Rectangle(-273.5,-665.4,547,605.1), new cjs.Rectangle(-273.5,-665.4,547,619.7), new cjs.Rectangle(-273.5,-665.4,547,634.4), new cjs.Rectangle(-273.5,-665.4,547,649), new cjs.Rectangle(-273.5,-665.4,547,663.7), new cjs.Rectangle(-273.5,-665.4,547,678.3), new cjs.Rectangle(-273.5,-665.4,547,693), new cjs.Rectangle(-273.5,-665.4,547,707.6), new cjs.Rectangle(-273.5,-665.4,547,722.3), new cjs.Rectangle(-273.5,-665.4,547,737), new cjs.Rectangle(-273.5,-665.4,547,751.6), new cjs.Rectangle(-273.5,-665.4,547,766.3), new cjs.Rectangle(-273.5,-665.4,547,780.9), new cjs.Rectangle(-273.5,-665.4,547,795.6), new cjs.Rectangle(-273.5,-665.4,547,810.2), new cjs.Rectangle(-273.5,-665.4,547,824.9), new cjs.Rectangle(-273.5,-665.4,547,839.5), new cjs.Rectangle(-273.5,-665.4,547,854.2), new cjs.Rectangle(-273.5,-665.4,547,868.8), new cjs.Rectangle(-273.5,-665.4,547,883.5), new cjs.Rectangle(-273.5,-665.4,547,898.1), new cjs.Rectangle(-273.5,-665.4,547,912.8), rect=new cjs.Rectangle(-273.5,-665.4,547,927.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-684.2,547,953.1), new cjs.Rectangle(-273.5,-703,547,979.2), new cjs.Rectangle(-273.5,-721.8,547,1005.3), new cjs.Rectangle(-273.5,-740.6,547,1031.3), new cjs.Rectangle(-273.5,-759.3,547,1057.3), new cjs.Rectangle(-273.5,-778.1,547,1083.2), new cjs.Rectangle(-273.5,-796.9,547,1108.6), new cjs.Rectangle(-273.5,-815.7,547,1134.4), new cjs.Rectangle(-273.5,-834.5,547,1160.2), new cjs.Rectangle(-273.5,-853.3,547,1185.9), new cjs.Rectangle(-273.5,-872.1,547,1211.6), new cjs.Rectangle(-273.5,-890.8,547,1237.1), new cjs.Rectangle(-273.5,-909.6,547,1262.4), new cjs.Rectangle(-242,146.2,206.1,213.5)];


(lib.polaroid_level3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(141.9,-219.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki2_2_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:5.8,x:-12,y:257.4},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid21_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-273.5,301.3,547,593);
p.frameBounds = [rect, rect, new cjs.Rectangle(-273.5,268.1,547,593), new cjs.Rectangle(-273.5,234.9,547,593), new cjs.Rectangle(-273.5,201.6,547,593), new cjs.Rectangle(-273.5,168.4,547,593), new cjs.Rectangle(-273.5,135.2,547,593), new cjs.Rectangle(-273.5,102,547,593), new cjs.Rectangle(-273.5,68.8,547,593), new cjs.Rectangle(-273.5,35.6,547,593), new cjs.Rectangle(-273.5,2.4,547,593), new cjs.Rectangle(-273.5,-30.8,547,593), new cjs.Rectangle(-273.5,-64,547,593), new cjs.Rectangle(-273.5,-97.2,547,593), new cjs.Rectangle(-273.5,-130.4,547,593), new cjs.Rectangle(-273.5,-163.6,547,593), new cjs.Rectangle(-273.5,-196.8,547,593), new cjs.Rectangle(-273.5,-230.1,547,593), new cjs.Rectangle(-273.5,-263.3,547,593), new cjs.Rectangle(-273.5,-296.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), new cjs.Rectangle(-273.5,-300.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-333.4,547,593), new cjs.Rectangle(-273.5,-370.3,547,593), new cjs.Rectangle(-273.5,-407.2,547,593), new cjs.Rectangle(-273.5,-444.1,547,593), new cjs.Rectangle(-273.5,-480.9,547,593), new cjs.Rectangle(-273.5,-517.8,547,593), new cjs.Rectangle(-273.5,-554.7,547,593), new cjs.Rectangle(-273.5,-591.6,547,593), new cjs.Rectangle(-273.5,-628.5,547,593), rect=new cjs.Rectangle(-273.5,-665.4,547,593), rect, rect, rect, new cjs.Rectangle(-273.5,-665.4,547,605.1), new cjs.Rectangle(-273.5,-665.4,547,619.7), new cjs.Rectangle(-273.5,-665.4,547,634.4), new cjs.Rectangle(-273.5,-665.4,547,649), new cjs.Rectangle(-273.5,-665.4,547,663.7), new cjs.Rectangle(-273.5,-665.4,547,678.3), new cjs.Rectangle(-273.5,-665.4,547,693), new cjs.Rectangle(-273.5,-665.4,547,707.6), new cjs.Rectangle(-273.5,-665.4,547,722.3), new cjs.Rectangle(-273.5,-665.4,547,737), new cjs.Rectangle(-273.5,-665.4,547,751.6), new cjs.Rectangle(-273.5,-665.4,547,766.3), new cjs.Rectangle(-273.5,-665.4,547,780.9), new cjs.Rectangle(-273.5,-665.4,547,795.6), new cjs.Rectangle(-273.5,-665.4,547,810.2), new cjs.Rectangle(-273.5,-665.4,547,824.9), new cjs.Rectangle(-273.5,-665.4,547,839.5), new cjs.Rectangle(-273.5,-665.4,547,854.2), new cjs.Rectangle(-273.5,-665.4,547,868.8), new cjs.Rectangle(-273.5,-665.4,547,883.5), new cjs.Rectangle(-273.5,-665.4,547,898.1), new cjs.Rectangle(-273.5,-665.4,547,912.8), rect=new cjs.Rectangle(-273.5,-665.4,547,927.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-684.2,547,954.1), new cjs.Rectangle(-273.5,-703,547,981.2), new cjs.Rectangle(-273.5,-721.8,547,1007.8), new cjs.Rectangle(-273.5,-740.6,547,1034.8), new cjs.Rectangle(-273.5,-759.3,547,1061.6), new cjs.Rectangle(-273.5,-778.1,547,1087.8), new cjs.Rectangle(-273.5,-796.9,547,1114.4), new cjs.Rectangle(-273.5,-815.7,547,1140.9), new cjs.Rectangle(-273.5,-834.5,547,1166.9), new cjs.Rectangle(-273.5,-853.3,547,1193.2), new cjs.Rectangle(-273.5,-872.1,547,1219.4), new cjs.Rectangle(-273.5,-890.8,547,1245.2), new cjs.Rectangle(-273.5,-909.6,547,1271.1), new cjs.Rectangle(-119.8,146.2,215.6,222.5)];


(lib.polaroid_level3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(141.9,-219.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki2_1_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:15,x:112,y:281.4},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid21_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-273.5,301.3,547,593);
p.frameBounds = [rect, rect, new cjs.Rectangle(-273.5,268.1,547,593), new cjs.Rectangle(-273.5,234.9,547,593), new cjs.Rectangle(-273.5,201.6,547,593), new cjs.Rectangle(-273.5,168.4,547,593), new cjs.Rectangle(-273.5,135.2,547,593), new cjs.Rectangle(-273.5,102,547,593), new cjs.Rectangle(-273.5,68.8,547,593), new cjs.Rectangle(-273.5,35.6,547,593), new cjs.Rectangle(-273.5,2.4,547,593), new cjs.Rectangle(-273.5,-30.8,547,593), new cjs.Rectangle(-273.5,-64,547,593), new cjs.Rectangle(-273.5,-97.2,547,593), new cjs.Rectangle(-273.5,-130.4,547,593), new cjs.Rectangle(-273.5,-163.6,547,593), new cjs.Rectangle(-273.5,-196.8,547,593), new cjs.Rectangle(-273.5,-230.1,547,593), new cjs.Rectangle(-273.5,-263.3,547,593), new cjs.Rectangle(-273.5,-296.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), new cjs.Rectangle(-273.5,-300.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-333.4,547,593), new cjs.Rectangle(-273.5,-370.3,547,593), new cjs.Rectangle(-273.5,-407.2,547,593), new cjs.Rectangle(-273.5,-444.1,547,593), new cjs.Rectangle(-273.5,-480.9,547,593), new cjs.Rectangle(-273.5,-517.8,547,593), new cjs.Rectangle(-273.5,-554.7,547,593), new cjs.Rectangle(-273.5,-591.6,547,593), new cjs.Rectangle(-273.5,-628.5,547,593), rect=new cjs.Rectangle(-273.5,-665.4,547,593), rect, rect, rect, new cjs.Rectangle(-273.5,-665.4,547,605.1), new cjs.Rectangle(-273.5,-665.4,547,619.7), new cjs.Rectangle(-273.5,-665.4,547,634.4), new cjs.Rectangle(-273.5,-665.4,547,649), new cjs.Rectangle(-273.5,-665.4,547,663.7), new cjs.Rectangle(-273.5,-665.4,547,678.3), new cjs.Rectangle(-273.5,-665.4,547,693), new cjs.Rectangle(-273.5,-665.4,547,707.6), new cjs.Rectangle(-273.5,-665.4,547,722.3), new cjs.Rectangle(-273.5,-665.4,547,737), new cjs.Rectangle(-273.5,-665.4,547,751.6), new cjs.Rectangle(-273.5,-665.4,547,766.3), new cjs.Rectangle(-273.5,-665.4,547,780.9), new cjs.Rectangle(-273.5,-665.4,547,795.6), new cjs.Rectangle(-273.5,-665.4,547,810.2), new cjs.Rectangle(-273.5,-665.4,547,824.9), new cjs.Rectangle(-273.5,-665.4,547,839.5), new cjs.Rectangle(-273.5,-665.4,547,854.2), new cjs.Rectangle(-273.5,-665.4,547,868.8), new cjs.Rectangle(-273.5,-665.4,547,883.5), new cjs.Rectangle(-273.5,-665.4,547,898.1), new cjs.Rectangle(-273.5,-665.4,547,912.8), rect=new cjs.Rectangle(-273.5,-665.4,547,927.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-684.2,547,958.2), new cjs.Rectangle(-273.5,-703,547,988.5), new cjs.Rectangle(-273.5,-721.8,547,1018.6), new cjs.Rectangle(-273.5,-740.6,547,1048.9), new cjs.Rectangle(-273.5,-759.3,547,1078.4), new cjs.Rectangle(-273.5,-778.1,547,1107.7), new cjs.Rectangle(-273.5,-796.9,547,1136.7), new cjs.Rectangle(-273.5,-815.7,547,1165.8), new cjs.Rectangle(-273.5,-834.5,547,1194.2), new cjs.Rectangle(-273.5,-853.3,547,1222.4), new cjs.Rectangle(-273.5,-872.1,547,1250.8), new cjs.Rectangle(-273.5,-890.8,547,1278.4), new cjs.Rectangle(-273.5,-909.6,547,1306.1), new cjs.Rectangle(-9,157.7,242,247.5)];


(lib.polaroid_level2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(141.9,-219.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki1_3_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:0.5,x:115,y:263.4},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid21_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-273.5,301.3,547,593);
p.frameBounds = [rect, rect, new cjs.Rectangle(-273.5,268.1,547,593), new cjs.Rectangle(-273.5,234.9,547,593), new cjs.Rectangle(-273.5,201.6,547,593), new cjs.Rectangle(-273.5,168.4,547,593), new cjs.Rectangle(-273.5,135.2,547,593), new cjs.Rectangle(-273.5,102,547,593), new cjs.Rectangle(-273.5,68.8,547,593), new cjs.Rectangle(-273.5,35.6,547,593), new cjs.Rectangle(-273.5,2.4,547,593), new cjs.Rectangle(-273.5,-30.8,547,593), new cjs.Rectangle(-273.5,-64,547,593), new cjs.Rectangle(-273.5,-97.2,547,593), new cjs.Rectangle(-273.5,-130.4,547,593), new cjs.Rectangle(-273.5,-163.6,547,593), new cjs.Rectangle(-273.5,-196.8,547,593), new cjs.Rectangle(-273.5,-230.1,547,593), new cjs.Rectangle(-273.5,-263.3,547,593), new cjs.Rectangle(-273.5,-296.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), new cjs.Rectangle(-273.5,-300.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-333.4,547,593), new cjs.Rectangle(-273.5,-370.3,547,593), new cjs.Rectangle(-273.5,-407.2,547,593), new cjs.Rectangle(-273.5,-444.1,547,593), new cjs.Rectangle(-273.5,-480.9,547,593), new cjs.Rectangle(-273.5,-517.8,547,593), new cjs.Rectangle(-273.5,-554.7,547,593), new cjs.Rectangle(-273.5,-591.6,547,593), new cjs.Rectangle(-273.5,-628.5,547,593), rect=new cjs.Rectangle(-273.5,-665.4,547,593), rect, rect, rect, new cjs.Rectangle(-273.5,-665.4,547,605.1), new cjs.Rectangle(-273.5,-665.4,547,619.7), new cjs.Rectangle(-273.5,-665.4,547,634.4), new cjs.Rectangle(-273.5,-665.4,547,649), new cjs.Rectangle(-273.5,-665.4,547,663.7), new cjs.Rectangle(-273.5,-665.4,547,678.3), new cjs.Rectangle(-273.5,-665.4,547,693), new cjs.Rectangle(-273.5,-665.4,547,707.6), new cjs.Rectangle(-273.5,-665.4,547,722.3), new cjs.Rectangle(-273.5,-665.4,547,737), new cjs.Rectangle(-273.5,-665.4,547,751.6), new cjs.Rectangle(-273.5,-665.4,547,766.3), new cjs.Rectangle(-273.5,-665.4,547,780.9), new cjs.Rectangle(-273.5,-665.4,547,795.6), new cjs.Rectangle(-273.5,-665.4,547,810.2), new cjs.Rectangle(-273.5,-665.4,547,824.9), new cjs.Rectangle(-273.5,-665.4,547,839.5), new cjs.Rectangle(-273.5,-665.4,547,854.2), new cjs.Rectangle(-273.5,-665.4,547,868.8), new cjs.Rectangle(-273.5,-665.4,547,883.5), new cjs.Rectangle(-273.5,-665.4,547,898.1), new cjs.Rectangle(-273.5,-665.4,547,912.8), rect=new cjs.Rectangle(-273.5,-665.4,547,927.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-684.2,547,953.7), new cjs.Rectangle(-273.5,-703,547,979.9), new cjs.Rectangle(-273.5,-721.8,547,1006), new cjs.Rectangle(-273.5,-740.6,547,1032.3), new cjs.Rectangle(-273.5,-759.3,547,1058.4), new cjs.Rectangle(-273.5,-778.1,547,1084.6), new cjs.Rectangle(-273.5,-796.9,547,1110.8), new cjs.Rectangle(-273.5,-815.7,547,1137.4), new cjs.Rectangle(-273.5,-834.5,547,1163.5), new cjs.Rectangle(-273.5,-853.3,547,1189.7), new cjs.Rectangle(-273.5,-872.1,547,1215.9), new cjs.Rectangle(-273.5,-890.8,547,1241.9), new cjs.Rectangle(-273.5,-909.6,547,1268.1), new cjs.Rectangle(16.2,160.7,197.7,205.5)];


(lib.polaroid_level2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(141.9,-219.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki1_2_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:7.2,x:226,y:269.5},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid21_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-273.5,301.3,547,593);
p.frameBounds = [rect, rect, new cjs.Rectangle(-273.5,268.1,547,593), new cjs.Rectangle(-273.5,234.9,547,593), new cjs.Rectangle(-273.5,201.6,547,593), new cjs.Rectangle(-273.5,168.4,547,593), new cjs.Rectangle(-273.5,135.2,547,593), new cjs.Rectangle(-273.5,102,547,593), new cjs.Rectangle(-273.5,68.8,547,593), new cjs.Rectangle(-273.5,35.6,547,593), new cjs.Rectangle(-273.5,2.4,547,593), new cjs.Rectangle(-273.5,-30.8,547,593), new cjs.Rectangle(-273.5,-64,547,593), new cjs.Rectangle(-273.5,-97.2,547,593), new cjs.Rectangle(-273.5,-130.4,547,593), new cjs.Rectangle(-273.5,-163.6,547,593), new cjs.Rectangle(-273.5,-196.8,547,593), new cjs.Rectangle(-273.5,-230.1,547,593), new cjs.Rectangle(-273.5,-263.3,547,593), new cjs.Rectangle(-273.5,-296.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), new cjs.Rectangle(-273.5,-300.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-333.4,547,593), new cjs.Rectangle(-273.5,-370.3,547,593), new cjs.Rectangle(-273.5,-407.2,547,593), new cjs.Rectangle(-273.5,-444.1,547,593), new cjs.Rectangle(-273.5,-480.9,547,593), new cjs.Rectangle(-273.5,-517.8,547,593), new cjs.Rectangle(-273.5,-554.7,547,593), new cjs.Rectangle(-273.5,-591.6,547,593), new cjs.Rectangle(-273.5,-628.5,547,593), rect=new cjs.Rectangle(-273.5,-665.4,547,593), rect, rect, rect, new cjs.Rectangle(-273.5,-665.4,547,605.1), new cjs.Rectangle(-273.5,-665.4,547,619.7), new cjs.Rectangle(-273.5,-665.4,547,634.4), new cjs.Rectangle(-273.5,-665.4,547,649), new cjs.Rectangle(-273.5,-665.4,547,663.7), new cjs.Rectangle(-273.5,-665.4,547,678.3), new cjs.Rectangle(-273.5,-665.4,547,693), new cjs.Rectangle(-273.5,-665.4,547,707.6), new cjs.Rectangle(-273.5,-665.4,547,722.3), new cjs.Rectangle(-273.5,-665.4,547,737), new cjs.Rectangle(-273.5,-665.4,547,751.6), new cjs.Rectangle(-273.5,-665.4,547,766.3), new cjs.Rectangle(-273.5,-665.4,547,780.9), new cjs.Rectangle(-273.5,-665.4,547,795.6), new cjs.Rectangle(-273.5,-665.4,547,810.2), new cjs.Rectangle(-273.5,-665.4,547,824.9), new cjs.Rectangle(-273.5,-665.4,547,839.5), new cjs.Rectangle(-273.5,-665.4,547,854.2), new cjs.Rectangle(-273.5,-665.4,547,868.8), new cjs.Rectangle(-273.5,-665.4,547,883.5), new cjs.Rectangle(-273.5,-665.4,547,898.1), new cjs.Rectangle(-273.5,-665.4,547,912.8), rect=new cjs.Rectangle(-273.5,-665.4,547,927.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-684.2,547,955.7), new cjs.Rectangle(-273.5,-703,547,983.8), new cjs.Rectangle(-273.5,-721.8,547,1011.7), new cjs.Rectangle(-273.5,-740.6,547,1039.5), new cjs.Rectangle(-273.5,-759.3,547,1067.1), new cjs.Rectangle(-273.5,-778.1,547,1094.7), new cjs.Rectangle(-273.5,-796.9,548.9,1122.1), new cjs.Rectangle(-273.5,-815.7,557.9,1149.5), new cjs.Rectangle(-273.5,-834.5,566.7,1176.7), new cjs.Rectangle(-273.5,-853.3,575.4,1203.8), new cjs.Rectangle(-273.5,-872.1,584,1230.8), new cjs.Rectangle(-273.5,-890.8,592.6,1257.6), new cjs.Rectangle(-273.5,-909.6,601,1284.4), new cjs.Rectangle(116,156.1,220.1,226.8)];


(lib.polaroid_level2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_105 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(15));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(141.9,-219.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({_off:true},1).wait(81));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(15));

	// animation
	this.instance_1 = new lib.fotki1_1_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:15,x:312,y:281.4},14).wait(1));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(14));

	// animation
	this.instance_3 = new lib.polaroid21_mc();
	this.instance_3.setTransform(0,597.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(26).to({y:-368.9},10).wait(46).to({y:-613.1},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-273.5,301.3,547,593);
p.frameBounds = [rect, rect, new cjs.Rectangle(-273.5,268.1,547,593), new cjs.Rectangle(-273.5,234.9,547,593), new cjs.Rectangle(-273.5,201.6,547,593), new cjs.Rectangle(-273.5,168.4,547,593), new cjs.Rectangle(-273.5,135.2,547,593), new cjs.Rectangle(-273.5,102,547,593), new cjs.Rectangle(-273.5,68.8,547,593), new cjs.Rectangle(-273.5,35.6,547,593), new cjs.Rectangle(-273.5,2.4,547,593), new cjs.Rectangle(-273.5,-30.8,547,593), new cjs.Rectangle(-273.5,-64,547,593), new cjs.Rectangle(-273.5,-97.2,547,593), new cjs.Rectangle(-273.5,-130.4,547,593), new cjs.Rectangle(-273.5,-163.6,547,593), new cjs.Rectangle(-273.5,-196.8,547,593), new cjs.Rectangle(-273.5,-230.1,547,593), new cjs.Rectangle(-273.5,-263.3,547,593), new cjs.Rectangle(-273.5,-296.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), new cjs.Rectangle(-273.5,-300.5,547,593), new cjs.Rectangle(-273.5,-298.5,547,593), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), new cjs.Rectangle(-273.5,-457.9,694.5,754.5), new cjs.Rectangle(-273.5,-501.4,745.4,797.9), new cjs.Rectangle(-273.5,-457.9,694.5,754.4), new cjs.Rectangle(-273.5,-414.4,643.5,711), rect=new cjs.Rectangle(-273.5,-296.5,547,593), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-333.4,547,593), new cjs.Rectangle(-273.5,-370.3,547,593), new cjs.Rectangle(-273.5,-407.2,547,593), new cjs.Rectangle(-273.5,-444.1,547,593), new cjs.Rectangle(-273.5,-480.9,547,593), new cjs.Rectangle(-273.5,-517.8,547,593), new cjs.Rectangle(-273.5,-554.7,547,593), new cjs.Rectangle(-273.5,-591.6,547,593), new cjs.Rectangle(-273.5,-628.5,547,593), rect=new cjs.Rectangle(-273.5,-665.4,547,593), rect, rect, rect, new cjs.Rectangle(-273.5,-665.4,547,605.1), new cjs.Rectangle(-273.5,-665.4,547,619.7), new cjs.Rectangle(-273.5,-665.4,547,634.4), new cjs.Rectangle(-273.5,-665.4,547,649), new cjs.Rectangle(-273.5,-665.4,547,663.7), new cjs.Rectangle(-273.5,-665.4,547,678.3), new cjs.Rectangle(-273.5,-665.4,547,693), new cjs.Rectangle(-273.5,-665.4,547,707.6), new cjs.Rectangle(-273.5,-665.4,547,722.3), new cjs.Rectangle(-273.5,-665.4,547,737), new cjs.Rectangle(-273.5,-665.4,547,751.6), new cjs.Rectangle(-273.5,-665.4,547,766.3), new cjs.Rectangle(-273.5,-665.4,547,780.9), new cjs.Rectangle(-273.5,-665.4,547,795.6), new cjs.Rectangle(-273.5,-665.4,547,810.2), new cjs.Rectangle(-273.5,-665.4,547,824.9), new cjs.Rectangle(-273.5,-665.4,547,839.5), new cjs.Rectangle(-273.5,-665.4,547,854.2), new cjs.Rectangle(-273.5,-665.4,547,868.8), new cjs.Rectangle(-273.5,-665.4,547,883.5), new cjs.Rectangle(-273.5,-665.4,547,898.1), new cjs.Rectangle(-273.5,-665.4,547,912.8), rect=new cjs.Rectangle(-273.5,-665.4,547,927.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-273.5,-684.2,547,958.2), new cjs.Rectangle(-273.5,-703,547,988.5), new cjs.Rectangle(-273.5,-721.8,547,1018.6), new cjs.Rectangle(-273.5,-740.6,552.1,1048.9), new cjs.Rectangle(-273.5,-759.3,568.7,1078.4), new cjs.Rectangle(-273.5,-778.1,584.8,1107.7), new cjs.Rectangle(-273.5,-796.9,600.8,1136.7), new cjs.Rectangle(-273.5,-815.7,616.9,1165.8), new cjs.Rectangle(-273.5,-834.5,632.3,1194.2), new cjs.Rectangle(-273.5,-853.3,647.5,1222.4), new cjs.Rectangle(-273.5,-872.1,662.8,1250.8), new cjs.Rectangle(-273.5,-890.8,677.5,1278.4), new cjs.Rectangle(-273.5,-909.6,691.9,1306.1), new cjs.Rectangle(191,157.7,242,247.5)];


(lib.objektive_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_lens_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.photo_lens_3_mc();
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.photo_lens_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.item10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_9_img();
	this.instance.setTransform(-55,-62);

	this.instance_1 = new lib.pic_0_9_img();
	this.instance_1.setTransform(-55,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_8_img();
	this.instance.setTransform(-39,-53);

	this.instance_1 = new lib.pic_0_8_img();
	this.instance_1.setTransform(-39,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_7_img();
	this.instance.setTransform(40,-50,1,1,0,0,180);

	this.instance_1 = new lib.pic_0_7_img();
	this.instance_1.setTransform(40,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_6_img();
	this.instance.setTransform(-59,-47);

	this.instance_1 = new lib.pic_0_6_img();
	this.instance_1.setTransform(-59,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_5_img();
	this.instance.setTransform(55,-55,1,1,0,0,180);

	this.instance_1 = new lib.pic_0_5_img();
	this.instance_1.setTransform(55,-55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_4_img();
	this.instance.setTransform(45,-45,1,1,0,0,180);

	this.instance_1 = new lib.pic_0_4_img();
	this.instance_1.setTransform(45,-45,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_3_img();
	this.instance.setTransform(-39,-53);

	this.instance_1 = new lib.pic_0_3_img();
	this.instance_1.setTransform(-39,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item4_31_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},24).to({y:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-79.5,147,159);
p.frameBounds = [rect, new cjs.Rectangle(-73.5,-79.7,147,159), new cjs.Rectangle(-73.5,-79.9,147,159), new cjs.Rectangle(-73.5,-80.1,147,159), new cjs.Rectangle(-73.5,-80.3,147,159), new cjs.Rectangle(-73.5,-80.5,147,159), new cjs.Rectangle(-73.5,-80.7,147,159), new cjs.Rectangle(-73.5,-80.9,147,159), new cjs.Rectangle(-73.5,-81.1,147,159), new cjs.Rectangle(-73.5,-81.3,147,159), new cjs.Rectangle(-73.5,-81.6,147,159), new cjs.Rectangle(-73.5,-81.8,147,159), new cjs.Rectangle(-73.5,-82,147,159), new cjs.Rectangle(-73.5,-82.2,147,159), new cjs.Rectangle(-73.5,-82.4,147,159), new cjs.Rectangle(-73.5,-82.6,147,159), new cjs.Rectangle(-73.5,-82.8,147,159), new cjs.Rectangle(-73.5,-83,147,159), new cjs.Rectangle(-73.5,-83.2,147,159), new cjs.Rectangle(-73.5,-83.4,147,159), new cjs.Rectangle(-73.5,-83.6,147,159), new cjs.Rectangle(-73.5,-83.8,147,159), new cjs.Rectangle(-73.5,-84.1,147,159), new cjs.Rectangle(-73.5,-84.3,147,159), new cjs.Rectangle(-73.5,-84.5,147,159), new cjs.Rectangle(-73.5,-84.3,147,159), new cjs.Rectangle(-73.5,-84.1,147,159), new cjs.Rectangle(-73.5,-83.9,147,159), new cjs.Rectangle(-73.5,-83.7,147,159), new cjs.Rectangle(-73.5,-83.5,147,159), new cjs.Rectangle(-73.5,-83.3,147,159), new cjs.Rectangle(-73.5,-83.1,147,159), new cjs.Rectangle(-73.5,-82.9,147,159), new cjs.Rectangle(-73.5,-82.7,147,159), new cjs.Rectangle(-73.5,-82.5,147,159), new cjs.Rectangle(-73.5,-82.3,147,159), new cjs.Rectangle(-73.5,-82.1,147,159), new cjs.Rectangle(-73.5,-81.9,147,159), new cjs.Rectangle(-73.5,-81.7,147,159), new cjs.Rectangle(-73.5,-81.5,147,159), new cjs.Rectangle(-73.5,-81.3,147,159), new cjs.Rectangle(-73.5,-81.1,147,159), new cjs.Rectangle(-73.5,-80.9,147,159), new cjs.Rectangle(-73.5,-80.7,147,159), new cjs.Rectangle(-73.5,-80.5,147,159), new cjs.Rectangle(-73.5,-80.3,147,159), new cjs.Rectangle(-73.5,-80.1,147,159), new cjs.Rectangle(-73.5,-79.9,147,159), new cjs.Rectangle(-73.5,-79.7,147,159), new cjs.Rectangle(-73.5,-79.5,147,159)];


(lib.item3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_2_img();
	this.instance.setTransform(55,-48,1,1,0,0,180);

	this.instance_1 = new lib.pic_0_2_img();
	this.instance_1.setTransform(55,-48,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item3_31_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},24).to({y:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-62,147,124);
p.frameBounds = [rect, new cjs.Rectangle(-73.5,-62.2,147,124), new cjs.Rectangle(-73.5,-62.4,147,124), new cjs.Rectangle(-73.5,-62.6,147,124), new cjs.Rectangle(-73.5,-62.8,147,124), new cjs.Rectangle(-73.5,-63,147,124), new cjs.Rectangle(-73.5,-63.2,147,124), new cjs.Rectangle(-73.5,-63.4,147,124), new cjs.Rectangle(-73.5,-63.6,147,124), new cjs.Rectangle(-73.5,-63.8,147,124), new cjs.Rectangle(-73.5,-64.1,147,124), new cjs.Rectangle(-73.5,-64.3,147,124), new cjs.Rectangle(-73.5,-64.5,147,124), new cjs.Rectangle(-73.5,-64.7,147,124), new cjs.Rectangle(-73.5,-64.9,147,124), new cjs.Rectangle(-73.5,-65.1,147,124), new cjs.Rectangle(-73.5,-65.3,147,124), new cjs.Rectangle(-73.5,-65.5,147,124), new cjs.Rectangle(-73.5,-65.7,147,124), new cjs.Rectangle(-73.5,-65.9,147,124), new cjs.Rectangle(-73.5,-66.1,147,124), new cjs.Rectangle(-73.5,-66.3,147,124), new cjs.Rectangle(-73.5,-66.6,147,124), new cjs.Rectangle(-73.5,-66.8,147,124), new cjs.Rectangle(-73.5,-67,147,124), new cjs.Rectangle(-73.5,-66.8,147,124), new cjs.Rectangle(-73.5,-66.6,147,124), new cjs.Rectangle(-73.5,-66.4,147,124), new cjs.Rectangle(-73.5,-66.2,147,124), new cjs.Rectangle(-73.5,-66,147,124), new cjs.Rectangle(-73.5,-65.8,147,124), new cjs.Rectangle(-73.5,-65.6,147,124), new cjs.Rectangle(-73.5,-65.4,147,124), new cjs.Rectangle(-73.5,-65.2,147,124), new cjs.Rectangle(-73.5,-65,147,124), new cjs.Rectangle(-73.5,-64.8,147,124), new cjs.Rectangle(-73.5,-64.6,147,124), new cjs.Rectangle(-73.5,-64.4,147,124), new cjs.Rectangle(-73.5,-64.2,147,124), new cjs.Rectangle(-73.5,-64,147,124), new cjs.Rectangle(-73.5,-63.8,147,124), new cjs.Rectangle(-73.5,-63.6,147,124), new cjs.Rectangle(-73.5,-63.4,147,124), new cjs.Rectangle(-73.5,-63.2,147,124), new cjs.Rectangle(-73.5,-63,147,124), new cjs.Rectangle(-73.5,-62.8,147,124), new cjs.Rectangle(-73.5,-62.6,147,124), new cjs.Rectangle(-73.5,-62.4,147,124), new cjs.Rectangle(-73.5,-62.2,147,124), new cjs.Rectangle(-73.5,-62,147,124)];


(lib.item2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pic_1_1_img();
	this.instance.setTransform(-52,-53);

	this.instance_1 = new lib.pic_0_1_img();
	this.instance_1.setTransform(-52,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect, rect];


(lib.item2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item2_21_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3},24).to({y:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-92,210,184);
p.frameBounds = [rect, new cjs.Rectangle(-105,-92.1,210,184), new cjs.Rectangle(-105,-92.2,210,184), new cjs.Rectangle(-105,-92.3,210,184), new cjs.Rectangle(-105,-92.5,210,184), new cjs.Rectangle(-105,-92.6,210,184), new cjs.Rectangle(-105,-92.7,210,184), new cjs.Rectangle(-105,-92.8,210,184), new cjs.Rectangle(-105,-93,210,184), new cjs.Rectangle(-105,-93.1,210,184), new cjs.Rectangle(-105,-93.2,210,184), new cjs.Rectangle(-105,-93.3,210,184), new cjs.Rectangle(-105,-93.5,210,184), new cjs.Rectangle(-105,-93.6,210,184), new cjs.Rectangle(-105,-93.7,210,184), new cjs.Rectangle(-105,-93.8,210,184), new cjs.Rectangle(-105,-94,210,184), new cjs.Rectangle(-105,-94.1,210,184), new cjs.Rectangle(-105,-94.2,210,184), new cjs.Rectangle(-105,-94.3,210,184), new cjs.Rectangle(-105,-94.5,210,184), new cjs.Rectangle(-105,-94.6,210,184), new cjs.Rectangle(-105,-94.7,210,184), new cjs.Rectangle(-105,-94.8,210,184), new cjs.Rectangle(-105,-95,210,184), new cjs.Rectangle(-105,-94.9,210,184), new cjs.Rectangle(-105,-94.7,210,184), new cjs.Rectangle(-105,-94.6,210,184), new cjs.Rectangle(-105,-94.5,210,184), new cjs.Rectangle(-105,-94.4,210,184), new cjs.Rectangle(-105,-94.3,210,184), new cjs.Rectangle(-105,-94.1,210,184), new cjs.Rectangle(-105,-94,210,184), new cjs.Rectangle(-105,-93.9,210,184), new cjs.Rectangle(-105,-93.8,210,184), new cjs.Rectangle(-105,-93.7,210,184), new cjs.Rectangle(-105,-93.5,210,184), new cjs.Rectangle(-105,-93.4,210,184), new cjs.Rectangle(-105,-93.3,210,184), new cjs.Rectangle(-105,-93.2,210,184), new cjs.Rectangle(-105,-93.1,210,184), new cjs.Rectangle(-105,-92.9,210,184), new cjs.Rectangle(-105,-92.8,210,184), new cjs.Rectangle(-105,-92.7,210,184), new cjs.Rectangle(-105,-92.6,210,184), new cjs.Rectangle(-105,-92.5,210,184), new cjs.Rectangle(-105,-92.3,210,184), new cjs.Rectangle(-105,-92.2,210,184), new cjs.Rectangle(-105,-92.1,210,184), new cjs.Rectangle(-105,-92,210,184)];


(lib.item1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.podlogka_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-80,171,160);
p.frameBounds = [rect];


(lib.indicator_ph_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_ph_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// graph
	this.instance = new lib.indicator_ph_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.indicator_ph_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,170,30);
p.frameBounds = [rect];


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


(lib.hero2_assessory4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_2_mc();
	this.instance.setTransform(0,0,0.619,0.619);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-56.9,130,113.9);
p.frameBounds = [rect];


(lib.hero2_assessory3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_1_mc();
	this.instance.setTransform(0,0,0.477,0.477,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.2,-37.2,80.1,93);
p.frameBounds = [rect];


(lib.hero2_assessory2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item4_2_mc();
	this.instance.setTransform(0,0,0.546,0.546,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-63.9,85.8,127.3);
p.frameBounds = [rect];


(lib.hero2_assessory1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-49.5,101,99);
p.frameBounds = [rect];


(lib.hero2_assessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_assessory1_mc();

	this.instance_1 = new lib.hero2_assessory2_mc();
	this.instance_1.setTransform(-1.6,-3.6);

	this.instance_2 = new lib.hero2_assessory3_mc();
	this.instance_2.setTransform(-13,20);

	this.instance_3 = new lib.hero2_assessory4_mc();
	this.instance_3.setTransform(15,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-49.5,101,99);
p.frameBounds = [rect, new cjs.Rectangle(-43.1,-67.5,85.8,127.3), new cjs.Rectangle(-40.2,-17.2,80.1,93), new cjs.Rectangle(-50,-48.6,130,113.9), null];


(lib.hero1_assessory4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item4_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-64.5,107,129);
p.frameBounds = [rect];


(lib.hero1_assessory3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item4_3_mc();
	this.instance.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-56.8,105,113.6);
p.frameBounds = [rect];


(lib.hero1_assessory2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_3_mc();
	this.instance.setTransform(0,0,1,1,0,-2.3,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-64.8,151.8,129.7);
p.frameBounds = [rect];


(lib.hero1_assessory1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_2_mc();
	this.instance.setTransform(0,0,0.676,0.676,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-62.2,142,124.4);
p.frameBounds = [rect];


(lib.hero1_assessory_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_assessory1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-62.2,142,124.4);
p.frameBounds = [rect];


(lib.hero1_assessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_assessory1_mc();

	this.instance_1 = new lib.hero1_assessory2_mc();
	this.instance_1.setTransform(6,15.4);

	this.instance_2 = new lib.hero1_assessory3_mc();
	this.instance_2.setTransform(-8,-6);

	this.instance_3 = new lib.hero1_assessory4_mc();
	this.instance_3.setTransform(25.4,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-62.2,142,124.4);
p.frameBounds = [rect, new cjs.Rectangle(-69.9,-49.5,151.8,129.7), new cjs.Rectangle(-60.5,-62.8,105,113.6), new cjs.Rectangle(-28.1,-94.5,107,129), null];


(lib.hero_m_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_fringe_main_mc();
	this.instance.setTransform(4,-218.5,1,1,0,0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-1.8,y:-211.5},49).to({skewX:0.9,y:-218.5},50).wait(1));

	// animation
	this.instance_1 = new lib.hero2_podvodka_main_mc();
	this.instance_1.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// animation
	this.instance_2 = new lib.hero2_eyes_main_mc();
	this.instance_2.setTransform(4,-224.8,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:6,y:-218.8},49).to({x:4,y:-224.8},50).wait(1));

	// animation
	this.instance_3 = new lib.hero2_lips_main_mc();
	this.instance_3.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// animation
	this.instance_4 = new lib.hero2_rouge_main_mc();
	this.instance_4.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// animation
	this.instance_5 = new lib.hero2_head_mc();
	this.instance_5.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// animation
	this.instance_6 = new lib.hero2_dress_main_mc();
	this.instance_6.setTransform(16,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:36.5},49).to({y:29.5},50).wait(1));

	// animation
	this.instance_7 = new lib.hero2_body_mc();
	this.instance_7.setTransform(17,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:107.5},49).to({y:100.5},50).wait(1));

	// animation
	this.instance_8 = new lib.hero2_hair_main_mc();
	this.instance_8.setTransform(7,-317.5,1,1.001,0,2.1,0,3,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:-2.1,y:-309.5},49).to({skewX:2.1,y:-317.5},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-347,276.5,689.5);
p.frameBounds = [rect, new cjs.Rectangle(-132.2,-346.8,276.2,689.4), new cjs.Rectangle(-132.1,-346.6,276.2,689.4), new cjs.Rectangle(-131.7,-346.6,275.7,689.5), new cjs.Rectangle(-131.7,-346.5,275.7,689.5), new cjs.Rectangle(-131.7,-346.3,275.7,689.5), new cjs.Rectangle(-131.6,-346.2,275.6,689.5), new cjs.Rectangle(-131.6,-346,275.6,689.5), new cjs.Rectangle(-131.1,-345.9,275.2,689.5), new cjs.Rectangle(-131.1,-345.7,275.2,689.5), new cjs.Rectangle(-131.1,-345.6,275.1,689.5), new cjs.Rectangle(-131,-345.5,275.1,689.5), new cjs.Rectangle(-130.6,-345.3,274.6,689.5), new cjs.Rectangle(-130.5,-345.2,274.6,689.5), new cjs.Rectangle(-130.5,-345,274.6,689.5), new cjs.Rectangle(-130.5,-344.9,274.6,689.5), new cjs.Rectangle(-130.4,-344.7,274.5,689.5), new cjs.Rectangle(-130.5,-344.5,274.5,689.5), new cjs.Rectangle(-130.5,-344.5,274.6,689.5), new cjs.Rectangle(-130.5,-344.3,274.6,689.5), new cjs.Rectangle(-130.6,-344.2,274.6,689.5), new cjs.Rectangle(-131.1,-344,275.1,689.5), new cjs.Rectangle(-131.1,-343.9,275.1,689.5), new cjs.Rectangle(-131.1,-343.7,275.2,689.5), new cjs.Rectangle(-131.2,-343.6,275.2,689.5), new cjs.Rectangle(-131.2,-343.5,275.2,689.5), new cjs.Rectangle(-131.6,-343.3,275.7,689.5), new cjs.Rectangle(-131.7,-343.2,275.7,689.5), new cjs.Rectangle(-131.7,-343,275.7,689.5), new cjs.Rectangle(-131.7,-342.9,275.8,689.5), new cjs.Rectangle(-131.8,-342.7,275.8,689.5), new cjs.Rectangle(-132.2,-342.5,276.3,689.5), new cjs.Rectangle(-132.2,-342.4,276.3,689.5), new cjs.Rectangle(-132.3,-342.3,276.3,689.5), new cjs.Rectangle(-132.3,-342.1,276.4,689.5), new cjs.Rectangle(-132.8,-342,276.8,689.5), new cjs.Rectangle(-132.8,-341.9,276.8,689.5), new cjs.Rectangle(-132.8,-341.7,276.9,689.5), new cjs.Rectangle(-132.8,-341.6,276.9,689.5), new cjs.Rectangle(-132.9,-341.5,276.9,689.5), new cjs.Rectangle(-133.3,-341.3,277.4,689.5), new cjs.Rectangle(-133.4,-341.2,277.4,689.5), new cjs.Rectangle(-133.4,-341,277.4,689.5), new cjs.Rectangle(-133.4,-340.9,277.5,689.5), new cjs.Rectangle(-133.9,-340.6,277.9,689.4), new cjs.Rectangle(-133.9,-340.5,277.9,689.4), new cjs.Rectangle(-133.9,-340.4,278,689.4), new cjs.Rectangle(-134,-340.2,278,689.4), new cjs.Rectangle(-134,-340.2,278,689.5), new cjs.Rectangle(-134.5,-340,278.5,689.5), new cjs.Rectangle(-133.9,-340.1,278,689.5), new cjs.Rectangle(-133.9,-340.2,278,689.4), new cjs.Rectangle(-133.9,-340.3,277.9,689.4), new cjs.Rectangle(-133.9,-340.5,277.9,689.4), new cjs.Rectangle(-133.8,-340.6,277.9,689.4), new cjs.Rectangle(-133.4,-340.9,277.4,689.5), new cjs.Rectangle(-133.3,-341,277.4,689.5), new cjs.Rectangle(-133.3,-341.1,277.4,689.5), new cjs.Rectangle(-133.3,-341.3,277.3,689.5), new cjs.Rectangle(-132.8,-341.4,276.9,689.5), new cjs.Rectangle(-132.8,-341.5,276.9,689.5), new cjs.Rectangle(-132.8,-341.7,276.8,689.5), new cjs.Rectangle(-132.7,-341.8,276.8,689.5), new cjs.Rectangle(-132.7,-341.9,276.8,689.5), new cjs.Rectangle(-132.3,-342.1,276.4,689.5), new cjs.Rectangle(-132.2,-342.2,276.3,689.5), new cjs.Rectangle(-132.3,-342.4,276.3,689.5), new cjs.Rectangle(-132.2,-342.5,276.3,689.5), new cjs.Rectangle(-132.2,-342.6,276.2,689.5), new cjs.Rectangle(-131.7,-342.8,275.8,689.5), new cjs.Rectangle(-131.7,-343,275.8,689.5), new cjs.Rectangle(-131.7,-343.1,275.7,689.5), new cjs.Rectangle(-131.7,-343.2,275.7,689.5), new cjs.Rectangle(-131.2,-343.4,275.2,689.5), new cjs.Rectangle(-131.1,-343.5,275.2,689.5), new cjs.Rectangle(-131.1,-343.7,275.1,689.5), new cjs.Rectangle(-131.1,-343.8,275.1,689.5), new cjs.Rectangle(-131,-343.9,275.1,689.5), new cjs.Rectangle(-130.6,-344.1,274.6,689.5), new cjs.Rectangle(-130.6,-344.2,274.6,689.5), new cjs.Rectangle(-130.5,-344.3,274.6,689.5), new cjs.Rectangle(-130.5,-344.5,274.5,689.5), new cjs.Rectangle(-130.5,-344.6,274.5,689.5), new cjs.Rectangle(-130.5,-344.7,274.5,689.5), new cjs.Rectangle(-130.5,-344.9,274.5,689.5), new cjs.Rectangle(-130.5,-345.1,274.6,689.5), new cjs.Rectangle(-130.5,-345.2,274.6,689.5), new cjs.Rectangle(-130.6,-345.3,274.7,689.5), new cjs.Rectangle(-131.1,-345.5,275.1,689.5), new cjs.Rectangle(-131.1,-345.6,275.1,689.5), new cjs.Rectangle(-131.1,-345.8,275.1,689.5), new cjs.Rectangle(-131.1,-345.9,275.2,689.5), new cjs.Rectangle(-131.6,-346,275.7,689.5), new cjs.Rectangle(-131.6,-346.2,275.7,689.5), new cjs.Rectangle(-131.7,-346.3,275.8,689.5), new cjs.Rectangle(-131.7,-346.5,275.8,689.5), new cjs.Rectangle(-131.7,-346.6,275.8,689.5), new cjs.Rectangle(-132.2,-346.6,276.2,689.4), new cjs.Rectangle(-132.2,-346.8,276.2,689.4), new cjs.Rectangle(-132.5,-347,276.5,689.5)];


(lib.hero_m_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_assessory_main_mc();
	this.instance.setTransform(-96,-116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-107.6},49).to({y:-116.6},50).wait(1));

	// animation
	this.instance_1 = new lib.hero1_fringe_main_mc();
	this.instance_1.setTransform(-6.5,-271.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-261.2},49).to({y:-271.2},50).wait(1));

	// animation
	this.instance_2 = new lib.hero1_eyes_main_mc();
	this.instance_2.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-0.1,y:-214.1},49).to({x:-2.1,y:-224.1},50).wait(1));

	// animation
	this.instance_3 = new lib.hero1_rouge_main_mc();
	this.instance_3.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-214.1},49).to({y:-224.1},50).wait(1));

	// animation
	this.instance_4 = new lib.hero1_head_mc();
	this.instance_4.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-214.1},49).to({y:-224.1},50).wait(1));

	// animation
	this.instance_5 = new lib.hero1_dress_main_mc();
	this.instance_5.setTransform(-0.5,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:122.8},49).to({y:112.8},50).wait(1));

	// animation
	this.instance_6 = new lib.hero1_body_mc();
	this.instance_6.setTransform(2.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:116.4},49).to({y:106.4},50).wait(1));

	// animation
	this.instance_7 = new lib.hero1_hair_main_mc();
	this.instance_7.setTransform(-6.5,-271.2,1,1,0,1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1,skewX:-2,y:-261.2},49).to({scaleY:1,skewX:1.6,y:-271.2},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167,-349.2,309.8,701.7);
p.frameBounds = [rect, new cjs.Rectangle(-166.9,-349,309.8,701.7), new cjs.Rectangle(-166.9,-348.8,309.7,701.7), new cjs.Rectangle(-166.9,-348.6,309.8,701.7), new cjs.Rectangle(-166.9,-348.4,309.7,701.7), new cjs.Rectangle(-166.9,-348.2,309.7,701.7), new cjs.Rectangle(-166.9,-348,309.7,701.7), new cjs.Rectangle(-166.9,-347.8,309.7,701.7), new cjs.Rectangle(-166.9,-347.6,309.6,701.7), new cjs.Rectangle(-166.9,-347.4,309.6,701.7), new cjs.Rectangle(-166.9,-347.2,309.6,701.7), new cjs.Rectangle(-166.9,-347,309.6,701.7), new cjs.Rectangle(-166.9,-346.8,309.5,701.7), new cjs.Rectangle(-166.9,-346.6,309.5,701.7), new cjs.Rectangle(-166.9,-346.4,309.6,701.7), new cjs.Rectangle(-166.9,-346.2,309.5,701.7), new cjs.Rectangle(-166.9,-346,309.5,701.7), new cjs.Rectangle(-166.9,-345.8,309.5,701.7), new cjs.Rectangle(-166.9,-345.6,309.5,701.7), new cjs.Rectangle(-166.9,-345.3,309.5,701.7), new cjs.Rectangle(-166.9,-345.1,309.5,701.7), new cjs.Rectangle(-166.9,-344.9,309.5,701.7), new cjs.Rectangle(-166.9,-344.7,309.5,701.7), new cjs.Rectangle(-166.9,-344.5,309.7,701.7), new cjs.Rectangle(-166.9,-344.3,309.8,701.7), new cjs.Rectangle(-166.9,-344.1,309.9,701.7), new cjs.Rectangle(-166.9,-343.9,311.3,701.7), new cjs.Rectangle(-166.9,-343.7,311.4,701.7), new cjs.Rectangle(-166.9,-343.5,311.5,701.7), new cjs.Rectangle(-166.9,-343.3,312.9,701.7), new cjs.Rectangle(-166.9,-343.1,313,701.7), new cjs.Rectangle(-166.9,-342.9,313.2,701.7), new cjs.Rectangle(-166.9,-342.7,313.3,701.7), new cjs.Rectangle(-166.9,-342.5,314.7,701.7), new cjs.Rectangle(-166.9,-342.3,314.8,701.7), new cjs.Rectangle(-166.9,-342.1,314.9,701.7), new cjs.Rectangle(-166.9,-341.9,316.3,701.7), new cjs.Rectangle(-166.9,-341.7,316.5,701.7), new cjs.Rectangle(-166.9,-341.5,316.5,701.7), new cjs.Rectangle(-166.9,-341.3,316.7,701.7), new cjs.Rectangle(-166.9,-341.1,318,701.7), new cjs.Rectangle(-166.9,-340.9,318.2,701.7), new cjs.Rectangle(-166.9,-340.7,318.3,701.7), new cjs.Rectangle(-166.9,-340.4,319.7,701.7), new cjs.Rectangle(-166.9,-340.2,319.8,701.7), new cjs.Rectangle(-166.9,-340,319.9,701.7), new cjs.Rectangle(-166.9,-339.8,320,701.7), new cjs.Rectangle(-166.9,-339.6,321.4,701.7), new cjs.Rectangle(-166.9,-339.4,321.5,701.7), new cjs.Rectangle(-167,-339.2,322.8,701.7), new cjs.Rectangle(-166.9,-339.4,321.5,701.7), new cjs.Rectangle(-166.9,-339.6,321.4,701.7), new cjs.Rectangle(-166.9,-339.8,321.3,701.7), new cjs.Rectangle(-166.9,-340,319.9,701.7), new cjs.Rectangle(-166.9,-340.2,319.8,701.7), new cjs.Rectangle(-166.9,-340.4,319.7,701.7), new cjs.Rectangle(-166.9,-340.6,318.3,701.7), new cjs.Rectangle(-166.9,-340.8,318.2,701.7), new cjs.Rectangle(-166.9,-341,318,701.7), new cjs.Rectangle(-166.9,-341.2,318,701.7), new cjs.Rectangle(-166.9,-341.4,316.5,701.7), new cjs.Rectangle(-166.9,-341.6,316.5,701.7), new cjs.Rectangle(-166.9,-341.8,316.3,701.7), new cjs.Rectangle(-166.9,-342,315,701.7), new cjs.Rectangle(-166.9,-342.2,314.8,701.7), new cjs.Rectangle(-166.9,-342.4,314.7,701.7), new cjs.Rectangle(-166.9,-342.6,314.5,701.7), new cjs.Rectangle(-166.9,-342.8,313.3,701.7), new cjs.Rectangle(-166.9,-343,313.1,701.7), new cjs.Rectangle(-166.9,-343.2,313,701.7), new cjs.Rectangle(-166.9,-343.4,311.6,701.7), new cjs.Rectangle(-166.9,-343.6,311.5,701.7), new cjs.Rectangle(-166.9,-343.8,311.4,701.7), new cjs.Rectangle(-166.9,-344,311.3,701.7), new cjs.Rectangle(-166.9,-344.2,309.9,701.7), new cjs.Rectangle(-166.9,-344.4,309.7,701.7), new cjs.Rectangle(-166.9,-344.6,309.6,701.7), new cjs.Rectangle(-166.9,-344.8,309.5,701.7), new cjs.Rectangle(-166.9,-345,309.6,701.7), new cjs.Rectangle(-166.9,-345.2,309.5,701.7), new cjs.Rectangle(-166.9,-345.4,309.5,701.7), new cjs.Rectangle(-166.9,-345.6,309.6,701.7), new cjs.Rectangle(-166.9,-345.8,309.5,701.7), new cjs.Rectangle(-166.9,-346,309.6,701.7), new cjs.Rectangle(-166.9,-346.2,309.7,701.7), new cjs.Rectangle(-166.9,-346.4,309.6,701.7), new cjs.Rectangle(-166.9,-346.6,309.6,701.7), new cjs.Rectangle(-166.9,-346.8,309.6,701.7), new cjs.Rectangle(-166.9,-347,309.7,701.7), new cjs.Rectangle(-166.9,-347.2,309.7,701.7), new cjs.Rectangle(-166.9,-347.4,309.7,701.7), new cjs.Rectangle(-166.9,-347.6,309.7,701.7), new cjs.Rectangle(-166.9,-347.8,309.8,701.7), new cjs.Rectangle(-166.9,-348,309.7,701.7), new cjs.Rectangle(-166.9,-348.2,309.7,701.7), new cjs.Rectangle(-166.9,-348.4,309.8,701.7), new cjs.Rectangle(-166.9,-348.6,309.8,701.7), new cjs.Rectangle(-166.9,-348.8,309.8,701.7), new cjs.Rectangle(-166.9,-349,309.9,701.7), new cjs.Rectangle(-167,-349.2,309.8,701.7)];


(lib.hero_l_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_main_fringe0_mc();
	this.instance.setTransform(0,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-111.5},10).to({y:-114.5},10).wait(41));

	// animation
	this.instance_1 = new lib.hero2_main_podvodka_all_mc();
	this.instance_1.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_1 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_2 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_3 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_4 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_5 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_6 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_7 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_8 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_9 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_10 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_11 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_12 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_13 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_14 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_15 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_16 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_17 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_18 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_19 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_20 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_21 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_22 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_23 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_24 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_25 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_26 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_27 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_28 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_29 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_30 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_31 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_32 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_33 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_34 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_35 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_36 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_37 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_38 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_39 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_40 = new cjs.Graphics().p("Av3A6Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgyQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_41 = new cjs.Graphics().p("Av3A7Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgxQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_42 = new cjs.Graphics().p("Av3A9Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgvQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_43 = new cjs.Graphics().p("Av3A+Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwguQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_44 = new cjs.Graphics().p("Av3BAQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgsQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_45 = new cjs.Graphics().p("Av3BBQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgrQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_46 = new cjs.Graphics().p("Av3BDQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgpQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_47 = new cjs.Graphics().p("Av3BEQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgoQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_48 = new cjs.Graphics().p("Av3BGQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgmQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_49 = new cjs.Graphics().p("Av3BHQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwglQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_50 = new cjs.Graphics().p("Av3BGQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgmQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_51 = new cjs.Graphics().p("Av3BEQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgoQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_52 = new cjs.Graphics().p("Av3BDQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgpQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_53 = new cjs.Graphics().p("Av3BBQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgrQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_54 = new cjs.Graphics().p("Av3BAQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgsQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_55 = new cjs.Graphics().p("Av3A+Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwguQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_56 = new cjs.Graphics().p("Av3A9Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgvQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_57 = new cjs.Graphics().p("Av3A7Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgxQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_58 = new cjs.Graphics().p("Av3A6Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgyQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_59 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_60 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_61 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_62 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_63 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_64 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_65 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_66 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_67 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_68 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_69 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_70 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_71 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_72 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_73 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_74 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_75 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_76 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_77 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_78 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_79 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_80 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_81 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_82 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_83 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_84 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_85 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_86 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_87 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_88 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_89 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_90 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_91 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_92 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_93 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_94 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_95 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_96 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_97 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_98 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_99 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_1,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_2,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_3,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_4,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_5,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_6,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_7,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_8,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_9,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_10,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_11,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_12,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_13,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_14,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_15,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_16,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_17,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_18,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_19,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_20,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_21,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_22,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_23,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_24,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_25,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_26,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_27,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_28,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_29,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_30,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_31,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_32,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_33,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_34,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_35,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_36,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_37,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_38,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_39,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_40,x:-5.8,y:-42.7}).wait(1).to({graphics:mask_graphics_41,x:-5.8,y:-42.5}).wait(1).to({graphics:mask_graphics_42,x:-5.8,y:-42.4}).wait(1).to({graphics:mask_graphics_43,x:-5.8,y:-42.2}).wait(1).to({graphics:mask_graphics_44,x:-5.8,y:-42.1}).wait(1).to({graphics:mask_graphics_45,x:-5.8,y:-41.9}).wait(1).to({graphics:mask_graphics_46,x:-5.8,y:-41.8}).wait(1).to({graphics:mask_graphics_47,x:-5.8,y:-41.6}).wait(1).to({graphics:mask_graphics_48,x:-5.8,y:-41.5}).wait(1).to({graphics:mask_graphics_49,x:-5.8,y:-41.3}).wait(1).to({graphics:mask_graphics_50,x:-5.8,y:-41.5}).wait(1).to({graphics:mask_graphics_51,x:-5.8,y:-41.6}).wait(1).to({graphics:mask_graphics_52,x:-5.8,y:-41.8}).wait(1).to({graphics:mask_graphics_53,x:-5.8,y:-41.9}).wait(1).to({graphics:mask_graphics_54,x:-5.8,y:-42.1}).wait(1).to({graphics:mask_graphics_55,x:-5.8,y:-42.2}).wait(1).to({graphics:mask_graphics_56,x:-5.8,y:-42.4}).wait(1).to({graphics:mask_graphics_57,x:-5.8,y:-42.5}).wait(1).to({graphics:mask_graphics_58,x:-5.8,y:-42.7}).wait(1).to({graphics:mask_graphics_59,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_60,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_61,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_62,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_63,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_64,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_65,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_66,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_67,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_68,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_69,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_70,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_71,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_72,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_73,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_74,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_75,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_76,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_77,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_78,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_79,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_80,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_81,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_82,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_83,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_84,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_85,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_86,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_87,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_88,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_89,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_90,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_91,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_92,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_93,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_94,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_95,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_96,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_97,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_98,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_99,x:-5.8,y:-42.8}).wait(1));

	// animation
	this.instance_2 = new lib.hero2_main_eyes_all_mc();
	this.instance_2.setTransform(7.5,-79.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({x:9.5,y:-78.5},10).to({x:7.5,y:-79.5},10).wait(41));

	// animation
	this.instance_3 = new lib.hero2_main_lips_all_mc();
	this.instance_3.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// animation
	this.instance_4 = new lib.hero2_main_rouge_all_mc();
	this.instance_4.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// animation
	this.instance_5 = new lib.hero2_main_head_mc();
	this.instance_5.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// animation
	this.instance_6 = new lib.hero2_main_body0_mc();
	this.instance_6.setTransform(-10,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.5,-325.5,525,651);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-262.5,-325.2,525,650.7), new cjs.Rectangle(-262.5,-324.9,525,650.4), new cjs.Rectangle(-262.5,-324.6,525,650.1), new cjs.Rectangle(-262.5,-324.3,525,649.8), new cjs.Rectangle(-262.5,-324,525,649.5), new cjs.Rectangle(-262.5,-323.7,525,649.2), new cjs.Rectangle(-262.5,-323.4,525,648.9), new cjs.Rectangle(-262.5,-323.1,525,648.6), new cjs.Rectangle(-262.5,-322.8,525,648.3), new cjs.Rectangle(-262.5,-322.5,525,648), new cjs.Rectangle(-262.5,-322.8,525,648.3), new cjs.Rectangle(-262.5,-323.1,525,648.6), new cjs.Rectangle(-262.5,-323.4,525,648.9), new cjs.Rectangle(-262.5,-323.7,525,649.2), new cjs.Rectangle(-262.5,-324,525,649.5), new cjs.Rectangle(-262.5,-324.3,525,649.8), new cjs.Rectangle(-262.5,-324.6,525,650.1), new cjs.Rectangle(-262.5,-324.9,525,650.4), new cjs.Rectangle(-262.5,-325.2,525,650.7), rect=new cjs.Rectangle(-262.5,-325.5,525,651), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero_l_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_main_fringe0_mc();
	this.instance.setTransform(0,-166.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-158.6},10).to({y:-166.6},11).wait(40));

	// animation
	this.instance_1 = new lib.hero1_main_eyebrows_all_mc();
	this.instance_1.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// animation
	this.instance_2 = new lib.hero1_main_podvodka_all_mc();
	this.instance_2.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// animation
	this.instance_3 = new lib.hero1_main_lips_all_mc();
	this.instance_3.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// animation
	this.instance_4 = new lib.hero1_main_eyes_all_mc();
	this.instance_4.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({x:2.4,y:-52.6},10).to({x:-2.6,y:-60.6},11).wait(40));

	// animation
	this.instance_5 = new lib.hero1_main_rouge_all_mc();
	this.instance_5.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// animation
	this.instance_6 = new lib.hero1_main_head_mc();
	this.instance_6.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// animation
	this.instance_7 = new lib.hero1_main_body0_mc();
	this.instance_7.setTransform(-8,221);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.5,-326.6,405,652.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-202.5,-325.8,405,651.8), new cjs.Rectangle(-202.5,-325,405,651), new cjs.Rectangle(-202.5,-324.2,405,650.2), new cjs.Rectangle(-202.5,-323.4,405,649.4), new cjs.Rectangle(-202.5,-322.6,405,648.6), new cjs.Rectangle(-202.5,-321.8,405,647.8), new cjs.Rectangle(-202.5,-321,405,647), new cjs.Rectangle(-202.5,-320.2,405,646.2), new cjs.Rectangle(-202.5,-319.4,405,645.4), new cjs.Rectangle(-202.5,-318.6,405,644.6), new cjs.Rectangle(-202.5,-319.4,405,645.3), new cjs.Rectangle(-202.5,-320.1,405,646.1), new cjs.Rectangle(-202.5,-320.8,405,646.8), new cjs.Rectangle(-202.5,-321.5,405,647.5), new cjs.Rectangle(-202.5,-322.3,405,648.3), new cjs.Rectangle(-202.5,-323,405,649), new cjs.Rectangle(-202.5,-323.7,405,649.7), new cjs.Rectangle(-202.5,-324.4,405,650.4), new cjs.Rectangle(-202.5,-325.2,405,651.2), new cjs.Rectangle(-202.5,-325.9,405,651.8), rect=new cjs.Rectangle(-202.5,-326.6,405,652.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessories
	this.accessories = new lib.hero2_assessory_all_mc();
	this.accessories.setTransform(72.4,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.accessories).to({y:-132.5},49).to({y:-139.5},50).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(4,-218.5,1,1,0,0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({skewX:-1.8,y:-211.5},49).to({skewX:0.9,y:-218.5},50).wait(1));

	// shadows
	this.shadows = new lib.hero2_podvodka_all_mc();
	this.shadows.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(4,-224.8,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({x:6,y:-218.8},49).to({x:4,y:-224.8},50).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(4,-224.3,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-217.3},49).to({y:-224.3},50).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(16,29.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:36.5},49).to({y:29.5},50).wait(1));

	// body
	this.instance_1 = new lib.hero2_body_mc();
	this.instance_1.setTransform(17,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:107.5},49).to({y:100.5},50).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(7,-317.5,1,1.001,0,2.1,0,3,-99);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({skewX:-2.1,y:-309.5},49).to({skewX:2.1,y:-317.5},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-347,273,689.5);
p.frameBounds = [rect, new cjs.Rectangle(-132.2,-346.8,272.5,689.4), new cjs.Rectangle(-132.1,-346.6,272.4,689.4), new cjs.Rectangle(-131.7,-346.6,271.5,689.5), new cjs.Rectangle(-131.7,-346.5,271.5,689.5), new cjs.Rectangle(-131.7,-346.3,271.4,689.5), new cjs.Rectangle(-131.6,-346.2,271.3,689.5), new cjs.Rectangle(-131.6,-346,271.3,689.5), new cjs.Rectangle(-131.1,-345.9,270.4,689.5), new cjs.Rectangle(-131.1,-345.7,270.3,689.5), new cjs.Rectangle(-131.1,-345.6,270.3,689.5), new cjs.Rectangle(-131,-345.5,270.2,689.5), new cjs.Rectangle(-130.6,-345.3,269.3,689.5), new cjs.Rectangle(-130.5,-345.2,269.2,689.5), new cjs.Rectangle(-130.5,-345,269.2,689.5), new cjs.Rectangle(-130.5,-344.9,269.1,689.5), new cjs.Rectangle(-130.4,-344.7,269,689.5), rect=new cjs.Rectangle(-130.5,-344.5,269.1,689.5), rect, new cjs.Rectangle(-130.5,-344.3,269.2,689.5), new cjs.Rectangle(-130.6,-344.2,269.2,689.5), new cjs.Rectangle(-131.1,-344,270.2,689.5), new cjs.Rectangle(-131.1,-343.9,270.2,689.5), new cjs.Rectangle(-131.1,-343.7,270.3,689.5), new cjs.Rectangle(-131.2,-343.6,270.3,689.5), new cjs.Rectangle(-131.2,-343.5,270.4,689.5), new cjs.Rectangle(-131.6,-343.3,271.3,689.5), new cjs.Rectangle(-131.7,-343.2,271.4,689.5), new cjs.Rectangle(-131.7,-343,271.4,689.5), new cjs.Rectangle(-131.7,-342.9,271.5,689.5), new cjs.Rectangle(-131.8,-342.7,271.5,689.5), new cjs.Rectangle(-132.2,-342.5,272.4,689.5), new cjs.Rectangle(-132.2,-342.4,272.5,689.5), new cjs.Rectangle(-132.3,-342.3,272.6,689.5), new cjs.Rectangle(-132.3,-342.1,272.6,689.5), new cjs.Rectangle(-132.8,-342,273.5,689.5), new cjs.Rectangle(-132.8,-341.9,273.6,689.5), new cjs.Rectangle(-132.8,-341.7,273.7,689.5), new cjs.Rectangle(-132.8,-341.6,273.7,689.5), new cjs.Rectangle(-132.9,-341.5,273.8,689.5), new cjs.Rectangle(-133.3,-341.3,274.7,689.5), new cjs.Rectangle(-133.4,-341.2,274.7,689.5), new cjs.Rectangle(-133.4,-341,274.8,689.5), new cjs.Rectangle(-133.4,-340.9,274.9,689.5), new cjs.Rectangle(-133.9,-340.6,275.8,689.4), new cjs.Rectangle(-133.9,-340.5,275.8,689.4), new cjs.Rectangle(-133.9,-340.4,275.9,689.4), new cjs.Rectangle(-134,-340.2,275.9,689.4), new cjs.Rectangle(-134,-340.2,276,689.5), new cjs.Rectangle(-134.5,-340,277,689.5), new cjs.Rectangle(-133.9,-340.1,276,689.5), new cjs.Rectangle(-133.9,-340.2,276,689.4), new cjs.Rectangle(-133.9,-340.3,275.9,689.4), new cjs.Rectangle(-133.9,-340.5,275.8,689.4), new cjs.Rectangle(-133.8,-340.6,275.8,689.4), new cjs.Rectangle(-133.4,-340.9,274.9,689.5), new cjs.Rectangle(-133.3,-341,274.8,689.5), new cjs.Rectangle(-133.3,-341.1,274.8,689.5), new cjs.Rectangle(-133.3,-341.3,274.7,689.5), new cjs.Rectangle(-132.8,-341.4,273.8,689.5), new cjs.Rectangle(-132.8,-341.5,273.7,689.5), new cjs.Rectangle(-132.8,-341.7,273.7,689.5), new cjs.Rectangle(-132.7,-341.8,273.6,689.5), new cjs.Rectangle(-132.7,-341.9,273.6,689.5), new cjs.Rectangle(-132.3,-342.1,272.7,689.5), new cjs.Rectangle(-132.2,-342.2,272.6,689.5), new cjs.Rectangle(-132.3,-342.4,272.5,689.5), new cjs.Rectangle(-132.2,-342.5,272.5,689.5), new cjs.Rectangle(-132.2,-342.6,272.4,689.5), new cjs.Rectangle(-131.7,-342.8,271.5,689.5), new cjs.Rectangle(-131.7,-343,271.5,689.5), new cjs.Rectangle(-131.7,-343.1,271.4,689.5), new cjs.Rectangle(-131.7,-343.2,271.3,689.5), new cjs.Rectangle(-131.2,-343.4,270.4,689.5), new cjs.Rectangle(-131.1,-343.5,270.4,689.5), new cjs.Rectangle(-131.1,-343.7,270.3,689.5), new cjs.Rectangle(-131.1,-343.8,270.2,689.5), new cjs.Rectangle(-131,-343.9,270.2,689.5), new cjs.Rectangle(-130.6,-344.1,269.3,689.5), new cjs.Rectangle(-130.6,-344.2,269.2,689.5), new cjs.Rectangle(-130.5,-344.3,269.2,689.5), new cjs.Rectangle(-130.5,-344.5,269.1,689.5), new cjs.Rectangle(-130.5,-344.6,269,689.5), new cjs.Rectangle(-130.5,-344.7,269.1,689.5), new cjs.Rectangle(-130.5,-344.9,269.1,689.5), new cjs.Rectangle(-130.5,-345.1,269.2,689.5), new cjs.Rectangle(-130.5,-345.2,269.2,689.5), new cjs.Rectangle(-130.6,-345.3,269.3,689.5), new cjs.Rectangle(-131.1,-345.5,270.2,689.5), new cjs.Rectangle(-131.1,-345.6,270.3,689.5), new cjs.Rectangle(-131.1,-345.8,270.3,689.5), new cjs.Rectangle(-131.1,-345.9,270.4,689.5), new cjs.Rectangle(-131.6,-346,271.3,689.5), new cjs.Rectangle(-131.6,-346.2,271.3,689.5), new cjs.Rectangle(-131.7,-346.3,271.4,689.5), new cjs.Rectangle(-131.7,-346.5,271.5,689.5), new cjs.Rectangle(-131.7,-346.6,271.5,689.5), new cjs.Rectangle(-132.2,-346.6,272.4,689.4), new cjs.Rectangle(-132.2,-346.8,272.5,689.4), new cjs.Rectangle(-132.5,-347,273,689.5)];


(lib.hero_2_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0_mc();
	this.instance.setTransform(0,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-111.5},10).to({y:-114.5},10).wait(41));

	// shadows
	this.shadows = new lib.hero2_podvodka_all_mc();
	this.shadows.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_1 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_2 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_3 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_4 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_5 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_6 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_7 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_8 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_9 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_10 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_11 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_12 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_13 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_14 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_15 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_16 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_17 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_18 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_19 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_20 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_21 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_22 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_23 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_24 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_25 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_26 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_27 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_28 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_29 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_30 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_31 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_32 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_33 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_34 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_35 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_36 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_37 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_38 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_39 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_40 = new cjs.Graphics().p("Av3A6Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgyQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_41 = new cjs.Graphics().p("Av3A7Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgxQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_42 = new cjs.Graphics().p("Av3A9Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgvQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_43 = new cjs.Graphics().p("Av3A+Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwguQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_44 = new cjs.Graphics().p("Av3BAQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgsQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_45 = new cjs.Graphics().p("Av3BBQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgrQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_46 = new cjs.Graphics().p("Av3BDQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgpQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_47 = new cjs.Graphics().p("Av3BEQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgoQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_48 = new cjs.Graphics().p("Av3BGQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgmQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_49 = new cjs.Graphics().p("Av3BHQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwglQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_50 = new cjs.Graphics().p("Av3BGQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgmQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_51 = new cjs.Graphics().p("Av3BEQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgoQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_52 = new cjs.Graphics().p("Av3BDQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgpQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_53 = new cjs.Graphics().p("Av3BBQg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgrQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_54 = new cjs.Graphics().p("Av3BAQg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgsQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_55 = new cjs.Graphics().p("Av3A+Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwguQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_56 = new cjs.Graphics().p("Av3A9Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgvQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_57 = new cjs.Graphics().p("Av3A7Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwgxQBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_58 = new cjs.Graphics().p("Av3A6Qg5iuCbhPQDmhXEEEDQBgCNhyAZQieAWhzAAQj7AAguhrgAFwgyQBylwFTgHQDPAwADBSQgIC7kxBVIkEAuQhjgRAJg4g");
	var mask_graphics_59 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_60 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_61 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_62 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_63 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_64 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_65 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_66 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_67 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_68 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_69 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_70 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_71 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_72 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_73 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_74 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_75 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_76 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_77 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_78 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_79 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_80 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_81 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_82 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_83 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_84 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_85 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_86 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_87 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_88 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_89 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_90 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_91 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_92 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_93 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_94 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_95 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_96 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_97 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_98 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");
	var mask_graphics_99 = new cjs.Graphics().p("Av3A4Qg5itCbhQQDmhXEEEEQBgCNhyAYQieAXhzAAQj7AAguhsgAFwg0QBylwFTgHQDPAxADBRQgIC8kxBVIkEAtQhjgRAJg4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_1,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_2,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_3,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_4,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_5,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_6,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_7,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_8,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_9,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_10,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_11,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_12,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_13,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_14,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_15,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_16,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_17,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_18,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_19,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_20,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_21,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_22,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_23,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_24,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_25,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_26,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_27,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_28,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_29,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_30,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_31,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_32,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_33,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_34,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_35,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_36,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_37,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_38,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_39,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_40,x:-5.8,y:-42.7}).wait(1).to({graphics:mask_graphics_41,x:-5.8,y:-42.5}).wait(1).to({graphics:mask_graphics_42,x:-5.8,y:-42.4}).wait(1).to({graphics:mask_graphics_43,x:-5.8,y:-42.2}).wait(1).to({graphics:mask_graphics_44,x:-5.8,y:-42.1}).wait(1).to({graphics:mask_graphics_45,x:-5.8,y:-41.9}).wait(1).to({graphics:mask_graphics_46,x:-5.8,y:-41.8}).wait(1).to({graphics:mask_graphics_47,x:-5.8,y:-41.6}).wait(1).to({graphics:mask_graphics_48,x:-5.8,y:-41.5}).wait(1).to({graphics:mask_graphics_49,x:-5.8,y:-41.3}).wait(1).to({graphics:mask_graphics_50,x:-5.8,y:-41.5}).wait(1).to({graphics:mask_graphics_51,x:-5.8,y:-41.6}).wait(1).to({graphics:mask_graphics_52,x:-5.8,y:-41.8}).wait(1).to({graphics:mask_graphics_53,x:-5.8,y:-41.9}).wait(1).to({graphics:mask_graphics_54,x:-5.8,y:-42.1}).wait(1).to({graphics:mask_graphics_55,x:-5.8,y:-42.2}).wait(1).to({graphics:mask_graphics_56,x:-5.8,y:-42.4}).wait(1).to({graphics:mask_graphics_57,x:-5.8,y:-42.5}).wait(1).to({graphics:mask_graphics_58,x:-5.8,y:-42.7}).wait(1).to({graphics:mask_graphics_59,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_60,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_61,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_62,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_63,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_64,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_65,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_66,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_67,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_68,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_69,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_70,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_71,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_72,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_73,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_74,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_75,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_76,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_77,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_78,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_79,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_80,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_81,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_82,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_83,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_84,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_85,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_86,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_87,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_88,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_89,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_90,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_91,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_92,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_93,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_94,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_95,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_96,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_97,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_98,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_99,x:-5.8,y:-42.8}).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(7.5,-79.5);

	this.eyes.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(39).to({x:9.5,y:-78.5},10).to({x:7.5,y:-79.5},10).wait(41));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// body
	this.instance_1 = new lib.hero2_head_mc();
	this.instance_1.setTransform(7.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({y:-75.5},10).to({y:-78.5},10).wait(41));

	// body
	this.instance_2 = new lib.hero2_body0_mc();
	this.instance_2.setTransform(-10,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.5,-325.5,525,651);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-262.5,-325.2,525,650.7), new cjs.Rectangle(-262.5,-324.9,525,650.4), new cjs.Rectangle(-262.5,-324.6,525,650.1), new cjs.Rectangle(-262.5,-324.3,525,649.8), new cjs.Rectangle(-262.5,-324,525,649.5), new cjs.Rectangle(-262.5,-323.7,525,649.2), new cjs.Rectangle(-262.5,-323.4,525,648.9), new cjs.Rectangle(-262.5,-323.1,525,648.6), new cjs.Rectangle(-262.5,-322.8,525,648.3), new cjs.Rectangle(-262.5,-322.5,525,648), new cjs.Rectangle(-262.5,-322.8,525,648.3), new cjs.Rectangle(-262.5,-323.1,525,648.6), new cjs.Rectangle(-262.5,-323.4,525,648.9), new cjs.Rectangle(-262.5,-323.7,525,649.2), new cjs.Rectangle(-262.5,-324,525,649.5), new cjs.Rectangle(-262.5,-324.3,525,649.8), new cjs.Rectangle(-262.5,-324.6,525,650.1), new cjs.Rectangle(-262.5,-324.9,525,650.4), new cjs.Rectangle(-262.5,-325.2,525,650.7), rect=new cjs.Rectangle(-262.5,-325.5,525,651), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessories
	this.accessories = new lib.hero1_assessory_all_mc();
	this.accessories.setTransform(-96,-116.6);

	this.timeline.addTween(cjs.Tween.get(this.accessories).to({y:-107.6},49).to({y:-116.6},50).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-6.5,-271.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({y:-261.2},49).to({y:-271.2},50).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({y:-214.1},49).to({y:-224.1},50).wait(1));

	// shadows
	this.shadows = new lib.hero1_podvodka_all_mc();
	this.shadows.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({y:-214.1},49).to({y:-224.1},50).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({y:-214.1},49).to({y:-224.1},50).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({x:-0.1,y:-214.1},49).to({x:-2.1,y:-224.1},50).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({y:-214.1},49).to({y:-224.1},50).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(-2.1,-224.1,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-214.1},49).to({y:-224.1},50).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(-0.5,112.8);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:122.8},49).to({y:112.8},50).wait(1));

	// body
	this.instance_1 = new lib.hero1_body_mc();
	this.instance_1.setTransform(2.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:116.4},49).to({y:106.4},50).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-6.5,-271.2,1,1,0,1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({scaleY:1,skewX:-2,y:-261.2},49).to({scaleY:1,skewX:1.6,y:-271.2},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167,-345.7,268.5,698.2);
p.frameBounds = [rect, new cjs.Rectangle(-166.9,-345.5,268.4,698.2), new cjs.Rectangle(-166.9,-345.3,268.4,698.2), new cjs.Rectangle(-166.9,-345.1,268.4,698.2), new cjs.Rectangle(-166.9,-344.9,268.4,698.2), new cjs.Rectangle(-166.9,-344.7,268.4,698.2), new cjs.Rectangle(-166.9,-344.5,268.4,698.2), new cjs.Rectangle(-166.9,-344.3,268.4,698.2), new cjs.Rectangle(-166.9,-344.1,268.4,698.2), new cjs.Rectangle(-166.9,-343.9,268.4,698.2), new cjs.Rectangle(-166.9,-343.7,268.4,698.2), new cjs.Rectangle(-166.9,-343.5,268.4,698.2), new cjs.Rectangle(-166.9,-343.3,268.4,698.2), new cjs.Rectangle(-166.9,-343.1,268.4,698.2), new cjs.Rectangle(-166.9,-342.9,268.4,698.2), new cjs.Rectangle(-166.9,-342.7,268.4,698.2), new cjs.Rectangle(-166.9,-342.5,268.4,698.2), new cjs.Rectangle(-166.9,-342.3,268.4,698.2), new cjs.Rectangle(-166.9,-342.1,268.4,698.2), new cjs.Rectangle(-166.9,-341.8,268.4,698.2), new cjs.Rectangle(-166.9,-341.6,268.4,698.2), new cjs.Rectangle(-166.9,-341.4,268.4,698.2), new cjs.Rectangle(-166.9,-341.2,268.4,698.2), new cjs.Rectangle(-166.9,-341,268.4,698.2), new cjs.Rectangle(-166.9,-340.8,268.4,698.2), new cjs.Rectangle(-166.9,-340.6,268.4,698.2), new cjs.Rectangle(-166.9,-340.4,268.4,698.2), new cjs.Rectangle(-166.9,-340.2,268.4,698.2), new cjs.Rectangle(-166.9,-340,268.4,698.2), new cjs.Rectangle(-166.9,-339.8,268.4,698.2), new cjs.Rectangle(-166.9,-339.6,268.4,698.2), new cjs.Rectangle(-166.9,-339.4,268.4,698.2), new cjs.Rectangle(-166.9,-339.2,268.4,698.2), new cjs.Rectangle(-166.9,-339,268.4,698.2), new cjs.Rectangle(-166.9,-338.8,268.4,698.2), new cjs.Rectangle(-166.9,-338.6,268.4,698.2), new cjs.Rectangle(-166.9,-338.4,268.4,698.2), new cjs.Rectangle(-166.9,-338.2,268.4,698.2), new cjs.Rectangle(-166.9,-338,268.4,698.2), new cjs.Rectangle(-166.9,-337.8,268.4,698.2), new cjs.Rectangle(-166.9,-337.6,268.4,698.2), new cjs.Rectangle(-166.9,-337.4,268.4,698.2), new cjs.Rectangle(-166.9,-337.2,268.4,698.2), new cjs.Rectangle(-166.9,-336.9,268.4,698.2), new cjs.Rectangle(-166.9,-336.7,268.4,698.2), new cjs.Rectangle(-166.9,-336.5,268.4,698.2), new cjs.Rectangle(-166.9,-336.3,268.4,698.2), new cjs.Rectangle(-166.9,-336.1,268.4,698.2), new cjs.Rectangle(-166.9,-335.9,268.4,698.2), new cjs.Rectangle(-167,-335.7,268.5,698.2), new cjs.Rectangle(-166.9,-335.9,268.4,698.2), new cjs.Rectangle(-166.9,-336.1,268.4,698.2), new cjs.Rectangle(-166.9,-336.3,268.4,698.2), new cjs.Rectangle(-166.9,-336.5,268.4,698.2), new cjs.Rectangle(-166.9,-336.7,268.4,698.2), new cjs.Rectangle(-166.9,-336.9,268.4,698.2), new cjs.Rectangle(-166.9,-337.1,268.4,698.2), new cjs.Rectangle(-166.9,-337.3,268.4,698.2), new cjs.Rectangle(-166.9,-337.5,268.4,698.2), new cjs.Rectangle(-166.9,-337.7,268.4,698.2), new cjs.Rectangle(-166.9,-337.9,268.4,698.2), new cjs.Rectangle(-166.9,-338.1,268.4,698.2), new cjs.Rectangle(-166.9,-338.3,268.4,698.2), new cjs.Rectangle(-166.9,-338.5,268.4,698.2), new cjs.Rectangle(-166.9,-338.7,268.4,698.2), new cjs.Rectangle(-166.9,-338.9,268.4,698.2), new cjs.Rectangle(-166.9,-339.1,268.4,698.2), new cjs.Rectangle(-166.9,-339.3,268.4,698.2), new cjs.Rectangle(-166.9,-339.5,268.4,698.2), new cjs.Rectangle(-166.9,-339.7,268.4,698.2), new cjs.Rectangle(-166.9,-339.9,268.4,698.2), new cjs.Rectangle(-166.9,-340.1,268.4,698.2), new cjs.Rectangle(-166.9,-340.3,268.4,698.2), new cjs.Rectangle(-166.9,-340.5,268.4,698.2), new cjs.Rectangle(-166.9,-340.7,268.4,698.2), new cjs.Rectangle(-166.9,-340.9,268.4,698.2), new cjs.Rectangle(-166.9,-341.1,268.4,698.2), new cjs.Rectangle(-166.9,-341.3,268.4,698.2), new cjs.Rectangle(-166.9,-341.5,268.4,698.2), new cjs.Rectangle(-166.9,-341.7,268.4,698.2), new cjs.Rectangle(-166.9,-341.9,268.4,698.2), new cjs.Rectangle(-166.9,-342.1,268.4,698.2), new cjs.Rectangle(-166.9,-342.3,268.4,698.2), new cjs.Rectangle(-166.9,-342.5,268.4,698.2), new cjs.Rectangle(-166.9,-342.7,268.4,698.2), new cjs.Rectangle(-166.9,-342.9,268.4,698.2), new cjs.Rectangle(-166.9,-343.1,268.4,698.2), new cjs.Rectangle(-166.9,-343.3,268.4,698.2), new cjs.Rectangle(-166.9,-343.5,268.4,698.2), new cjs.Rectangle(-166.9,-343.7,268.4,698.2), new cjs.Rectangle(-166.9,-343.9,268.4,698.2), new cjs.Rectangle(-166.9,-344.1,268.4,698.2), new cjs.Rectangle(-166.9,-344.3,268.4,698.2), new cjs.Rectangle(-166.9,-344.5,268.4,698.2), new cjs.Rectangle(-166.9,-344.7,268.4,698.2), new cjs.Rectangle(-166.9,-344.9,268.4,698.2), new cjs.Rectangle(-166.9,-345.1,268.4,698.2), new cjs.Rectangle(-166.9,-345.3,268.4,698.2), new cjs.Rectangle(-166.9,-345.5,268.4,698.2), new cjs.Rectangle(-167,-345.7,268.5,698.2)];


(lib.hero_1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0_mc();
	this.instance.setTransform(0,-166.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-158.6},10).to({y:-166.6},11).wait(40));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// shadows
	this.shadows = new lib.hero1_podvodka_all_mc();
	this.shadows.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(39).to({x:2.4,y:-52.6},10).to({x:-2.6,y:-60.6},11).wait(40));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// body
	this.instance_1 = new lib.hero1_head_mc();
	this.instance_1.setTransform(-2.6,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({y:-52.6},10).to({y:-60.6},11).wait(40));

	// body
	this.instance_2 = new lib.hero1_body0_mc();
	this.instance_2.setTransform(-8,221);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.5,-326.6,405,652.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-202.5,-325.8,405,651.8), new cjs.Rectangle(-202.5,-325,405,651), new cjs.Rectangle(-202.5,-324.2,405,650.2), new cjs.Rectangle(-202.5,-323.4,405,649.4), new cjs.Rectangle(-202.5,-322.6,405,648.6), new cjs.Rectangle(-202.5,-321.8,405,647.8), new cjs.Rectangle(-202.5,-321,405,647), new cjs.Rectangle(-202.5,-320.2,405,646.2), new cjs.Rectangle(-202.5,-319.4,405,645.4), new cjs.Rectangle(-202.5,-318.6,405,644.6), new cjs.Rectangle(-202.5,-319.4,405,645.3), new cjs.Rectangle(-202.5,-320.1,405,646.1), new cjs.Rectangle(-202.5,-320.8,405,646.8), new cjs.Rectangle(-202.5,-321.5,405,647.5), new cjs.Rectangle(-202.5,-322.3,405,648.3), new cjs.Rectangle(-202.5,-323,405,649), new cjs.Rectangle(-202.5,-323.7,405,649.7), new cjs.Rectangle(-202.5,-324.4,405,650.4), new cjs.Rectangle(-202.5,-325.2,405,651.2), new cjs.Rectangle(-202.5,-325.9,405,651.8), rect=new cjs.Rectangle(-202.5,-326.6,405,652.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyebrows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.7,0.7,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.check_shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},39).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_shadows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect, rect];


(lib.check_lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},39).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_lips_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect, rect];


(lib.check_hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_hairstyle_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect, rect];


(lib.check_eyes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_eyes_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},39).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_eyes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_eyes_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_eyes_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect, rect];


(lib.check_eyebrows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_eyebrows_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},39).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_eyebrows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_eyebrows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect, rect];


(lib.check_blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},39).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,200,170);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_blush_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-85,200,170);
p.frameBounds = [rect, rect];


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


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_5_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_6_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_6_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_5_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge2_4_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_4_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_4_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_3_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_1_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_2_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_2_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1_1_img();
	this.instance.setTransform(-87.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKK7IAA11MAiVAAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-85,220,170);
p.frameBounds = [rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.7,0.7,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.animations_ph_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.polaroid_level4_1_mc();
	this.object_1.setTransform(402.9,303.6);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// object_2
	this.object_2 = new lib.polaroid_level4_2_mc();
	this.object_2.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// object_3
	this.object_3 = new lib.polaroid_level4_3_mc();
	this.object_3.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(106,652.2,573.9,579.6);
p.frameBounds = [rect];


(lib.animations_ph_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.polaroid_level3_1_mc();
	this.object_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// object_2
	this.object_2 = new lib.polaroid_level3_2_mc();
	this.object_2.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// object_3
	this.object_3 = new lib.polaroid_level3_3_mc();
	this.object_3.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(126.5,601.3,547,593);
p.frameBounds = [rect];


(lib.animations_ph_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_3
	this.object_3 = new lib.polaroid_level2_3_mc();
	this.object_3.setTransform(402.9,303.6);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

	// object_2
	this.object_2 = new lib.polaroid_level2_2_mc();
	this.object_2.setTransform(402.9,303.6);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// object_1
	this.object_1 = new lib.polaroid_level2_1_mc();
	this.object_1.setTransform(402.9,303.6);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(129.4,604.9,547,593);
p.frameBounds = [rect];


(lib.animation_photo_lens_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.photo_lens_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_photo_lens_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.photo_lens_3_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.animation_background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.background_2_mc();
	this.instance.setTransform(800,0,1,1,0,0,180);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},49).to({alpha:0.012},50).wait(1));

	// graph
	this.instance_1 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessories_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_assessory4_mc();
	this.instance.setTransform(0,0,1.157,1.157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.accessories_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_assessory4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDOEIAA8GIcHAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessories_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_assessory3_mc();
	this.instance.setTransform(0,0,1.645,1.645);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,167.1,171.8);
p.frameBounds = [rect];


(lib.accessories_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_assessory3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDOEIAA8GIcHAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessories_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_assessory2_mc();
	this.instance.setTransform(0,0,1.481,1.481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfRLMAAAgiVIY/AAMAAAAiVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-110,160,220);
p.frameBounds = [rect];


(lib.accessories_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_assessory2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDOEIAA8GIcHAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessories_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_assessory1_mc();
	this.instance.setTransform(0,0,1.151,1.151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4+IY/AAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.accessories_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_assessory1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDOEIAA8GIcHAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessories_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:59,end:99});

	// timeline functions:
	this.frame_44 = function() {
		try
		{
			app.addSoundFunc("photo_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(55).call(this.frame_99).wait(1));

	// animation
	this.instance = new lib.curtain_3_mc();
	this.instance.setTransform(400,300);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.instance_1 = new lib.curtain_4_mc();
	this.instance_1.setTransform(400,300);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},44).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1,p:{alpha:0.398}}]},2).to({state:[{t:this.instance_1,p:{alpha:0.199}}]},2).to({state:[{t:this.instance_1,p:{alpha:0.102}}]},2).to({state:[]},2).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(2).to({alpha:0.398},0).wait(2).to({alpha:0.602},0).wait(2).to({alpha:0.801},0).to({_off:true},2).wait(48));

	// animation
	this.instance_2 = new lib.curtain_5_mc();
	this.instance_2.setTransform(400,300);
	this.instance_2.alpha = 0.398;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({_off:true},2).wait(48));

	// animation
	this.instance_3 = new lib.curtain_2_mc();
	this.instance_3.setTransform(400,300,0.643,0.643,0,0,0,0.1,0);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({regY:0.1,scaleX:1.04,scaleY:1.04,x:400.1,y:300.1,alpha:0.801},15).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,y:300,alpha:1},5).wait(30).to({alpha:0.199},9).to({_off:true},1).wait(21));

	// curtain
	this.instance_4 = new lib.curtain_1_mc();
	this.instance_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(60).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-200,-10,1200,610), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,620), rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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


(lib.snowfall_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.1
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
		_createSnowflakesFunc(12);
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
				snowflake_mc.gotoAndStop(Math.floor(Math.random() * snowflake_mc.totalFrames));
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
			//target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.3;
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
	this.instance.setTransform(500,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,712);
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

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// icon
	this.instance_1 = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// icon
	this.instance_1 = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(116));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_4_mc();

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
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AnuHuQjMjMgBkiQABkhDMjNQDOjNEgAAQEiAADNDNQDNDNAAEhQAAEijNDMQjNDNkiABQkggBjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animatiom
	this.instance = new lib.nav_1_3_mc();
	this.instance.setTransform(-60,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.92,scaleY:0.92},10).to({scaleX:1,scaleY:1},20).wait(21));

	// animatiom
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({scaleX:0.92,scaleY:0.92},10).to({scaleX:1,scaleY:1},20).wait(11));

	// animatiom
	this.instance_2 = new lib.nav_1_3_mc();
	this.instance_2.setTransform(60,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({scaleX:0.92,scaleY:0.92},10).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-60,220,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-109.5,-60,219.6,120), new cjs.Rectangle(-109.1,-60,219.2,120), new cjs.Rectangle(-108.7,-60,218.7,120), new cjs.Rectangle(-108.3,-60,218.3,120), new cjs.Rectangle(-107.9,-60,217.9,120), new cjs.Rectangle(-107.5,-60,217.5,120), new cjs.Rectangle(-107.1,-60,217.1,120), new cjs.Rectangle(-106.7,-60,216.7,120), new cjs.Rectangle(-106.2,-60,216.3,120), new cjs.Rectangle(-105.8,-60,215.9,120), new cjs.Rectangle(-106,-60,216,120), new cjs.Rectangle(-106.2,-60,216.2,120), new cjs.Rectangle(-106.4,-60,216.5,120), new cjs.Rectangle(-106.6,-60,216.7,120), new cjs.Rectangle(-106.9,-60,216.9,120), new cjs.Rectangle(-107,-60,217.1,120), new cjs.Rectangle(-107.3,-60,217.3,120), new cjs.Rectangle(-107.4,-60,217.5,120), new cjs.Rectangle(-107.7,-60,217.8,120), new cjs.Rectangle(-107.8,-60,217.9,120), new cjs.Rectangle(-108.1,-59.5,217.7,119), new cjs.Rectangle(-108.2,-59,217.4,118), new cjs.Rectangle(-108.5,-58.5,217.3,117), new cjs.Rectangle(-108.6,-58.4,217,117), new cjs.Rectangle(-108.9,-58.7,216.9,117.5), new cjs.Rectangle(-109.1,-58.9,216.7,118), new cjs.Rectangle(-109.3,-59.2,216.4,118.5), new cjs.Rectangle(-109.5,-59.4,216.2,119), new cjs.Rectangle(-109.7,-59.7,216,119.5), new cjs.Rectangle(-110,-60,215.9,120), new cjs.Rectangle(-110,-60,216,120), new cjs.Rectangle(-110,-60,216.3,120), new cjs.Rectangle(-110,-60,216.4,120), new cjs.Rectangle(-110,-60,216.6,120), new cjs.Rectangle(-110,-60,216.9,120), new cjs.Rectangle(-110,-60,217.1,120), new cjs.Rectangle(-110,-60,217.3,120), new cjs.Rectangle(-110,-60,217.5,120), new cjs.Rectangle(-110,-60,217.7,120), new cjs.Rectangle(-110,-60,217.9,120), new cjs.Rectangle(-110,-60,218.1,120), new cjs.Rectangle(-110,-60,218.3,120), new cjs.Rectangle(-110,-60,218.6,120), new cjs.Rectangle(-110,-60,218.7,120), new cjs.Rectangle(-110,-60,218.9,120), new cjs.Rectangle(-110,-60,219.1,120), new cjs.Rectangle(-110,-60,219.3,120), new cjs.Rectangle(-110,-60,219.5,120), new cjs.Rectangle(-110,-60,219.8,120), new cjs.Rectangle(-110,-60,220,120)];


(lib.nav_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animatiom
	this.instance = new lib.nav_1_2_mc();
	this.instance.setTransform(-30,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.92,scaleY:0.92},10).to({scaleX:1,scaleY:1},15).wait(11));

	// animatiom
	this.instance_1 = new lib.nav_1_2_mc();
	this.instance_1.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({scaleX:0.92,scaleY:0.92},10).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-79.5,-60,159.6,120), new cjs.Rectangle(-79.1,-60,159.2,120), new cjs.Rectangle(-78.7,-60,158.7,120), new cjs.Rectangle(-78.3,-60,158.3,120), new cjs.Rectangle(-77.9,-60,157.9,120), new cjs.Rectangle(-77.5,-60,157.5,120), new cjs.Rectangle(-77.1,-60,157.1,120), new cjs.Rectangle(-76.7,-60,156.7,120), new cjs.Rectangle(-76.2,-60,156.3,120), new cjs.Rectangle(-75.8,-60,155.9,120), new cjs.Rectangle(-76.1,-59.5,155.7,119), new cjs.Rectangle(-76.3,-59,155.6,118), new cjs.Rectangle(-76.6,-58.5,155.4,117), new cjs.Rectangle(-76.9,-58,155.3,116), new cjs.Rectangle(-77.2,-57.5,155.2,115), new cjs.Rectangle(-77.4,-56.9,155,114), new cjs.Rectangle(-77.7,-57.3,154.9,114.7), new cjs.Rectangle(-78,-57.6,154.7,115.4), new cjs.Rectangle(-78.2,-57.9,154.6,116), new cjs.Rectangle(-78.5,-58.3,154.4,116.7), new cjs.Rectangle(-78.8,-58.6,154.9,117.4), new cjs.Rectangle(-79,-58.9,155.5,118), new cjs.Rectangle(-79.3,-59.3,156,118.7), new cjs.Rectangle(-79.6,-59.6,156.7,119.4), new cjs.Rectangle(-80,-60,157.3,120), new cjs.Rectangle(-80,-60,157.5,120), new cjs.Rectangle(-80,-60,157.8,120), new cjs.Rectangle(-80,-60,158,120), new cjs.Rectangle(-80,-60,158.3,120), new cjs.Rectangle(-80,-60,158.6,120), new cjs.Rectangle(-80,-60,158.9,120), new cjs.Rectangle(-80,-60,159.1,120), new cjs.Rectangle(-80,-60,159.5,120), new cjs.Rectangle(-80,-60,159.7,120), new cjs.Rectangle(-80,-60,160,120)];


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

	// Слой 2
	this.instance = new lib.snow_logo_mc();
	this.instance.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance_1 = new lib.beam_light_0_mc();
	this.instance_1.setTransform(-220,0,1,1,30);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_2 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-74,290,114);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.instruction_1_mc_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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
	this.instance_1 = new lib.bg_small_buttons_2_mc();

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

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// icon
	this.instance_1 = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.targets_ph_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.target_ph_1_mc();
	this.object_1.setTransform(575,130);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// graph
	this.instance = new lib.item4_1_mc();
	this.instance.setTransform(590,146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// object_2
	this.object_2 = new lib.target_ph_2_mc();
	this.object_2.setTransform(620,455);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// graph
	this.instance_1 = new lib.item4_2_mc();
	this.instance_1.setTransform(620,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// object_3
	this.object_3 = new lib.target_ph_3_mc();
	this.object_3.setTransform(299,341);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

	// graph
	this.instance_2 = new lib.item4_3_mc();
	this.instance_2.setTransform(302,325);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(228.5,70,467.5,516);
p.frameBounds = [rect];


(lib.targets_ph_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.target_ph_1_mc();
	this.object_1.setTransform(709,420);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// graph
	this.instance = new lib.item3_1_mc();
	this.instance.setTransform(727,435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// object_2
	this.object_2 = new lib.target_ph_2_mc();
	this.object_2.setTransform(336,242);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// graph
	this.instance_1 = new lib.item3_2_mc();
	this.instance_1.setTransform(340,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// object_3
	this.object_3 = new lib.target_ph_3_mc();
	this.object_3.setTransform(584,131);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

	// graph
	this.instance_2 = new lib.item3_3_mc();
	this.instance_2.setTransform(585,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(192,71,585.5,531);
p.frameBounds = [rect];


(lib.targets_ph_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.target_ph_1_mc();
	this.object_1.setTransform(376,400);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// graph
	this.instance = new lib.item2_1_mc();
	this.instance.setTransform(380,410);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// object_2
	this.object_2 = new lib.target_ph_2_mc();
	this.object_2.setTransform(494,134);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// graph
	this.instance_1 = new lib.item2_2_mc();
	this.instance_1.setTransform(502,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// object_3
	this.object_3 = new lib.target_ph_3_mc();
	this.object_3.setTransform(275,151);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

	// graph
	this.instance_2 = new lib.item2_3_mc();
	this.instance_2.setTransform(274,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(215,48,392,479);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_podv6_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv6_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv3_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv5_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_podv4_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv4_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv2_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv3_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv4_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv2_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv5_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_podv1_img();
	this.instance.setTransform(-64.5,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXQZMAAAggxISvAAMAAAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-130,170,260);
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


(lib.photo_lens_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_ph_1_mc();
	this.indicator_mc.setTransform(-80,110);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(2));

	// graph
	this.instance = new lib.photo_lens_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.animation_photo_lens_1_mc();

	this.instance_2 = new lib.animation_photo_lens_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// graph
	this.instance_3 = new lib.photo_lens_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect];


(lib.objektive_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_lens_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.animation_photo_lens_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.photo_lens_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U+QososAAsSQAAsRIsotQIsotMSABQMTgBIsItQIsItAAMRQAAMSosIsQosItsTAAQsSAAosotg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-230,-230,460,460), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U+QososAAsSQAAsRIsotQIsotMSABQMTgBIsItQIsItAAMRQAAMSosIsQosItsTAAQsSAAosotg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-230,-230,460,460), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U+QososAAsSQAAsRIsotQIsotMSABQMTgBIsItQIsItAAMRQAAMSosIsQosItsTAAQsSAAosotg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-230,-230,460,460), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U+QososAAsSQAAsRIsotQIsotMSABQMTgBIsItQIsItAAMRQAAMSosIsQosItsTAAQsSAAosotg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-230,-230,460,460), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0+U+QososAAsSQAAsRIsotQIsotMSABQMTgBIsItQIsItAAMRQAAMSosIsQosItsTAAQsSAAosotg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-230,-230,460,460), new cjs.Rectangle(-190,-190,380,380)];


(lib.list_ph_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.item8_mc();
	this.object_1.setTransform(90,150);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// object_2
	this.object_2 = new lib.item9_mc();
	this.object_2.setTransform(90,300);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// object_3
	this.object_3 = new lib.item10_mc();
	this.object_3.setTransform(90,450);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(4.5,70,171,460);
p.frameBounds = [rect];


(lib.list_ph_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.item5_mc();
	this.object_1.setTransform(90,150);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// object_2
	this.object_2 = new lib.item6_mc();
	this.object_2.setTransform(90,300);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// object_3
	this.object_3 = new lib.item7_mc();
	this.object_3.setTransform(90,450);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(4.5,70,171,460);
p.frameBounds = [rect];


(lib.list_ph_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// object_1
	this.object_1 = new lib.item2_mc();
	this.object_1.setTransform(90,150);

	this.timeline.addTween(cjs.Tween.get(this.object_1).wait(1));

	// object_2
	this.object_2 = new lib.item3_mc();
	this.object_2.setTransform(90,300);

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1));

	// object_3
	this.object_3 = new lib.item4_mc();
	this.object_3.setTransform(90,450);

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(4.5,70,171,460);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lipstick_6_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_6_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lipstick_5_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_5_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_6_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_4_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_1_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_3_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lipstick_2_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_2_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lipstick_1_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lipstick_1_img();
	this.instance.setTransform(-48,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzTiMAAAgnDIPnAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


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

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(293,365);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:403},0).to({_off:true},1).wait(1).to({_off:false,x:512},0).wait(1).to({skewY:180,x:397},0).to({_off:true},1).wait(1).to({_off:false,skewY:0,x:293},0).wait(1).to({x:403},0).to({_off:true},1).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(512,380);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).to({_off:true},1).wait(1).to({_off:false,x:403},0).wait(1).to({x:294},0).to({_off:true},1).wait(1).to({_off:false,x:403},0).wait(1).to({x:512},0).to({_off:true},1).wait(1).to({_off:false,x:403},0).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,722.5);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,717.4), rect=new cjs.Rectangle(-200,0,1200,722.5), rect, new cjs.Rectangle(-200,0,1200,717.4), rect=new cjs.Rectangle(-200,0,1200,722.5), rect, new cjs.Rectangle(-200,0,1200,717.4), new cjs.Rectangle(-200,0,1200,722.5)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_l_1_main_mc();
	this.instance.setTransform(270,220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:1000},15).wait(70).to({y:220},15).wait(6));

	// animation
	this.instance_1 = new lib.hero_m_1_main_mc();
	this.instance_1.setTransform(1300,365);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({x:530},16).to({x:580},4).wait(35).to({x:1300},15).wait(21));

	// animation
	this.instance_2 = new lib.hero_l_2_main_mc();
	this.instance_2.setTransform(270,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({y:220},15).wait(40).to({y:1000},15).wait(21));

	// animation
	this.instance_3 = new lib.hero_m_2_main_mc();
	this.instance_3.setTransform(580,365);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({x:1300},15).wait(70).to({x:530},16).to({x:580},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(7.5,-106.6,1435.3,1432.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(7.5,-54.6,1435.3,1380.1), new cjs.Rectangle(7.5,-2.6,1435.3,1328.1), rect=new cjs.Rectangle(7.5,15.8,1435.3,1309.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(7.5,15.8,1436.5,1310.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(7.5,-1.5,1436.5,1327.5), new cjs.Rectangle(7.5,-53.5,1436.5,1379.5), rect=new cjs.Rectangle(7.5,-105.5,1436.5,1431.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(7.5,-53.5,1436.5,1379.5), new cjs.Rectangle(7.5,-1.5,1436.5,1327.5), rect=new cjs.Rectangle(7.5,15.8,1436.5,1310.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(7.5,15.8,1435.3,1309.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(7.5,-2.6,1435.3,1328.1), new cjs.Rectangle(7.5,-54.6,1435.3,1380.1), rect=new cjs.Rectangle(7.5,-106.6,1435.3,1432.1), rect, rect, rect, rect, rect];


(lib.hairstyle_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_10_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_10_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKZAMAAAgx/MAiVAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,280,360);
p.frameBounds = [rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":78,"end":109});

	// location_5
	this.location_5 = new lib.location_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:900},0).wait(49).to({x:-50},15).to({x:0},4).wait(41));

	// decor
	this.instance = new lib.location_1_3_mc();
	this.instance.setTransform(-190,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(23).to({x:-900},15).to({_off:true},1).wait(70));

	// decor
	this.instance_1 = new lib.location_1_4_mc();
	this.instance_1.setTransform(190,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(33).to({x:-900},15).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-190,1470,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-427.3,-190,1517.4,380), new cjs.Rectangle(-474.6,-190,1564.7,380), new cjs.Rectangle(-522,-190,1612,380), new cjs.Rectangle(-569.3,-190,1659.4,380), new cjs.Rectangle(-616.6,-190,1706.7,380), new cjs.Rectangle(-664,-190,1754,380), new cjs.Rectangle(-711.3,-190,1801.4,380), new cjs.Rectangle(-758.6,-190,1848.7,380), new cjs.Rectangle(-806,-190,1896,380), new cjs.Rectangle(-853.3,-190,1943.4,380), new cjs.Rectangle(-900.6,-190,1990.7,380), new cjs.Rectangle(-948,-190,2038,380), new cjs.Rectangle(-995.3,-190,2085.4,380), new cjs.Rectangle(-1042.6,-190,2132.7,380), new cjs.Rectangle(-1090,-190,2180,380), new cjs.Rectangle(-436,-190,1526,380), new cjs.Rectangle(-508.6,-190,1598.7,380), new cjs.Rectangle(-581.3,-190,1671.4,380), new cjs.Rectangle(-654,-190,1744,380), new cjs.Rectangle(-726.6,-190,1816.7,380), new cjs.Rectangle(-799.3,-190,1889.4,380), new cjs.Rectangle(-872,-190,1962,380), new cjs.Rectangle(-944.6,-190,2034.7,380), new cjs.Rectangle(-1017.3,-190,2107.4,380), new cjs.Rectangle(-1090,-190,2180,380), new cjs.Rectangle(710,-190,380,380), new cjs.Rectangle(646.7,-190,380,380), new cjs.Rectangle(583.4,-190,380,380), new cjs.Rectangle(520,-190,380,380), new cjs.Rectangle(456.7,-190,380,380), new cjs.Rectangle(393.4,-190,380,380), new cjs.Rectangle(330,-190,380,380), new cjs.Rectangle(266.7,-190,380,380), new cjs.Rectangle(203.4,-190,380,380), new cjs.Rectangle(140,-190,380,380), new cjs.Rectangle(76.7,-190,380,380), new cjs.Rectangle(13.4,-190,380,380), new cjs.Rectangle(-50,-190,380,380), new cjs.Rectangle(-113.3,-190,380,380), new cjs.Rectangle(-176.6,-190,380,380), new cjs.Rectangle(-240,-190,380,380), new cjs.Rectangle(-227.5,-190,380,380), new cjs.Rectangle(-215,-190,380,380), new cjs.Rectangle(-202.5,-190,380,380), rect=new cjs.Rectangle(-190,-190,380,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":89});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(34).to({rotation:-5},5).to({rotation:5},10).to({rotation:0},5).wait(36));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(24).to({rotation:-5},5).to({rotation:5},10).to({rotation:0},5).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-190,760,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383.2,-193.2,763.3,386.6), new cjs.Rectangle(-386.4,-196.4,766.5,393), new cjs.Rectangle(-389.7,-199.6,769.7,399.3), new cjs.Rectangle(-392.8,-202.7,772.8,405.5), new cjs.Rectangle(-395.8,-205.8,775.9,411.7), new cjs.Rectangle(-392.7,-202.7,772.8,405.5), new cjs.Rectangle(-389.6,-199.6,769.6,399.3), new cjs.Rectangle(-386.4,-196.4,766.5,393), new cjs.Rectangle(-383.2,-193.2,763.3,386.6), new cjs.Rectangle(-379.9,-190,760,380), new cjs.Rectangle(-383.1,-193.2,766.5,386.6), new cjs.Rectangle(-386.4,-196.4,773,393), new cjs.Rectangle(-389.6,-199.6,779.3,399.4), new cjs.Rectangle(-392.7,-202.7,785.5,405.5), new cjs.Rectangle(-395.8,-205.8,791.7,411.7), new cjs.Rectangle(-392.7,-202.7,785.5,405.5), new cjs.Rectangle(-389.6,-199.6,779.2,399.4), new cjs.Rectangle(-386.4,-196.4,772.9,393), new cjs.Rectangle(-383.2,-193.2,766.5,386.6), new cjs.Rectangle(-380,-190,760,380), new cjs.Rectangle(-380,-193.2,763.2,386.5), new cjs.Rectangle(-380,-196.4,766.5,393), new cjs.Rectangle(-380,-199.6,769.6,399.3), new cjs.Rectangle(-380,-202.7,772.8,405.5), new cjs.Rectangle(-380,-205.8,775.9,411.7), new cjs.Rectangle(-380,-202.8,772.8,405.5), new cjs.Rectangle(-380,-199.6,769.6,399.3), new cjs.Rectangle(-380,-196.4,766.4,393), new cjs.Rectangle(-380,-193.2,763.2,386.6), rect=new cjs.Rectangle(-380,-190,760,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":119});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:900},0).wait(48).to({x:-240},16).to({x:-190},4).wait(51));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:900},0).wait(58).to({x:140},16).to({x:190},4).wait(41));

	// decor
	this.instance = new lib.location_1_1_mc();
	this.instance.setTransform(-190,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(23).to({x:-900},15).to({_off:true},1).wait(80));

	// decor
	this.instance_1 = new lib.location_1_2_mc();
	this.instance_1.setTransform(190,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(33).to({x:-900},15).to({_off:true},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-190,760,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-190,1470,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-427.3,-190,1517.4,380), new cjs.Rectangle(-474.6,-190,1564.7,380), new cjs.Rectangle(-522,-190,1612,380), new cjs.Rectangle(-569.3,-190,1659.4,380), new cjs.Rectangle(-616.6,-190,1706.7,380), new cjs.Rectangle(-664,-190,1754,380), new cjs.Rectangle(-711.3,-190,1801.4,380), new cjs.Rectangle(-758.6,-190,1848.7,380), new cjs.Rectangle(-806,-190,1896,380), new cjs.Rectangle(-853.3,-190,1943.4,380), new cjs.Rectangle(-900.6,-190,1990.7,380), new cjs.Rectangle(-948,-190,2038,380), new cjs.Rectangle(-995.3,-190,2085.4,380), new cjs.Rectangle(-1042.6,-190,2132.7,380), new cjs.Rectangle(-1090,-190,2180,380), new cjs.Rectangle(-436,-190,1526,380), new cjs.Rectangle(-508.6,-190,1598.7,380), new cjs.Rectangle(-581.3,-190,1671.4,380), new cjs.Rectangle(-654,-190,1744,380), new cjs.Rectangle(-726.6,-190,1816.7,380), new cjs.Rectangle(-799.3,-190,1889.4,380), new cjs.Rectangle(-872,-190,1962,380), new cjs.Rectangle(-944.6,-190,2034.7,380), new cjs.Rectangle(-1017.3,-190,2107.4,380), new cjs.Rectangle(-1090,-190,2180,380), new cjs.Rectangle(638.8,-190,451.3,380), new cjs.Rectangle(567.5,-190,522.5,380), new cjs.Rectangle(496.3,-190,593.8,380), new cjs.Rectangle(425,-190,665,380), new cjs.Rectangle(353.8,-190,736.3,380), new cjs.Rectangle(282.5,-190,807.5,380), new cjs.Rectangle(211.3,-190,878.8,380), new cjs.Rectangle(140,-190,950,380), new cjs.Rectangle(68.8,-190,1021.3,380), new cjs.Rectangle(-2.5,-190,1092.5,380), new cjs.Rectangle(-73.7,-190,1116.3,380), new cjs.Rectangle(-145,-190,1140,380), new cjs.Rectangle(-216.2,-190,1163.8,380), new cjs.Rectangle(-287.5,-190,1187.5,380), new cjs.Rectangle(-358.7,-190,1211.3,380), new cjs.Rectangle(-430,-190,1235,380), new cjs.Rectangle(-417.5,-190,1175,380), new cjs.Rectangle(-405,-190,1115,380), new cjs.Rectangle(-392.5,-190,1055,380), new cjs.Rectangle(-380,-190,995,380), new cjs.Rectangle(-380,-190,947.5,380), new cjs.Rectangle(-380,-190,900,380), new cjs.Rectangle(-380,-190,852.5,380), new cjs.Rectangle(-380,-190,805,380), new cjs.Rectangle(-380,-190,757.5,380), new cjs.Rectangle(-380,-190,710,380), new cjs.Rectangle(-380,-190,722.5,380), new cjs.Rectangle(-380,-190,735,380), new cjs.Rectangle(-380,-190,747.5,380), rect=new cjs.Rectangle(-380,-190,760,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":99});

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(39).to({rotation:-5},5).to({rotation:5},10).to({rotation:0},5).wait(41));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(24).to({rotation:-5},5).to({rotation:5},10).to({rotation:0},5).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-190,760,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383.2,-193.2,763.3,386.6), new cjs.Rectangle(-386.4,-196.4,766.5,393), new cjs.Rectangle(-389.7,-199.6,769.7,399.3), new cjs.Rectangle(-392.8,-202.7,772.8,405.5), new cjs.Rectangle(-395.8,-205.8,775.9,411.7), new cjs.Rectangle(-392.7,-202.7,772.8,405.5), new cjs.Rectangle(-389.6,-199.6,769.6,399.3), new cjs.Rectangle(-386.4,-196.4,766.5,393), new cjs.Rectangle(-383.2,-193.2,763.3,386.6), new cjs.Rectangle(-379.9,-190,760,380), new cjs.Rectangle(-383.1,-193.2,763.2,386.5), new cjs.Rectangle(-386.4,-196.4,766.5,393), new cjs.Rectangle(-389.6,-199.6,769.7,399.3), new cjs.Rectangle(-392.7,-202.7,772.7,405.5), new cjs.Rectangle(-395.8,-205.8,775.9,411.7), new cjs.Rectangle(-392.7,-202.7,776,405.5), new cjs.Rectangle(-389.6,-199.6,776.2,399.3), new cjs.Rectangle(-386.4,-199.6,776.1,399.3), new cjs.Rectangle(-383.2,-202.7,776,405.5), new cjs.Rectangle(-380,-205.8,775.9,411.7), new cjs.Rectangle(-380,-202.6,772.8,405.5), new cjs.Rectangle(-380,-199.6,769.6,399.3), new cjs.Rectangle(-380,-196.4,766.5,393), new cjs.Rectangle(-380,-193.2,763.3,386.6), new cjs.Rectangle(-380,-190,760,380), new cjs.Rectangle(-380,-193.2,763.2,386.5), new cjs.Rectangle(-380,-196.4,766.5,393), new cjs.Rectangle(-380,-199.6,769.6,399.3), new cjs.Rectangle(-380,-202.7,772.8,405.5), new cjs.Rectangle(-380,-205.8,775.9,411.7), new cjs.Rectangle(-380,-202.8,772.8,405.5), new cjs.Rectangle(-380,-199.6,769.6,399.3), new cjs.Rectangle(-380,-196.4,766.4,393), new cjs.Rectangle(-380,-193.2,763.2,386.6), rect=new cjs.Rectangle(-380,-190,760,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":89});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({x:900},0).wait(23).to({x:-240},16).to({x:-190},4).wait(46));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:900},0).wait(33).to({x:140},16).to({x:190},4).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-190,760,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(710,-190,380,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(638.8,-190,451.3,380), new cjs.Rectangle(567.5,-190,522.5,380), new cjs.Rectangle(496.3,-190,593.8,380), new cjs.Rectangle(425,-190,665,380), new cjs.Rectangle(353.8,-190,736.3,380), new cjs.Rectangle(282.5,-190,807.5,380), new cjs.Rectangle(211.3,-190,878.8,380), new cjs.Rectangle(140,-190,950,380), new cjs.Rectangle(68.8,-190,1021.3,380), new cjs.Rectangle(-2.5,-190,1092.5,380), new cjs.Rectangle(-73.7,-190,1116.3,380), new cjs.Rectangle(-145,-190,1140,380), new cjs.Rectangle(-216.2,-190,1163.8,380), new cjs.Rectangle(-287.5,-190,1187.5,380), new cjs.Rectangle(-358.7,-190,1211.3,380), new cjs.Rectangle(-430,-190,1235,380), new cjs.Rectangle(-417.5,-190,1175,380), new cjs.Rectangle(-405,-190,1115,380), new cjs.Rectangle(-392.5,-190,1055,380), new cjs.Rectangle(-380,-190,995,380), new cjs.Rectangle(-380,-190,947.5,380), new cjs.Rectangle(-380,-190,900,380), new cjs.Rectangle(-380,-190,852.5,380), new cjs.Rectangle(-380,-190,805,380), new cjs.Rectangle(-380,-190,757.5,380), new cjs.Rectangle(-380,-190,710,380), new cjs.Rectangle(-380,-190,722.5,380), new cjs.Rectangle(-380,-190,735,380), new cjs.Rectangle(-380,-190,747.5,380), rect=new cjs.Rectangle(-380,-190,760,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet2_6_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet1_6_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet2_5_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet1_5_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet2_4_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet1_4_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet2_3_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet1_3_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet2_2_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet1_2_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet2_1_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_closet1_1_img();
	this.instance.setTransform(-150,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/H0IAAvnMAx/AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-60,340,120);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil6_img();
	this.instance.setTransform(-95.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjJ8Iaf6fIGoGoI6fafg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil5_img();
	this.instance.setTransform(-95.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjJ8Iaf6fIGoGoI6fafg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil4_img();
	this.instance.setTransform(-95.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjJ8Iaf6fIGoGoI6fafg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil3_img();
	this.instance.setTransform(-95.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjJ8Iaf6fIGoGoI6fafg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_img();
	this.instance.setTransform(-95.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjJ8Iaf6fIGoGoI6fafg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil1_img();
	this.instance.setTransform(-95.5,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjJ8Iaf6fIGoGoI6fafg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.drag_ph_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// photo
	this.photo_mc = new lib.photo_lens_mc();
	this.photo_mc.setTransform(400,-300);

	this.timeline.addTween(cjs.Tween.get(this.photo_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,1,0.008)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-470,1200,1070);
p.frameBounds = [rect];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(113,-210);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(113,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},3).to({state:[{t:this.shadows_0}]},3).to({state:[]},3).wait(2));

	// options
	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(0,60);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(0,-100);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(0,60);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(0,-100);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(0,60);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(0,-100);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(60,-50);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-60,10);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(60,-50);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-60,10);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(60,-50);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-60,10);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(60,-50,1,1,0,0,180);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-60,10,1,1,0,0,180);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(60,-50,1,1,0,0,180);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-60,10,1,1,0,0,180);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(60,-50,1,1,0,0,180);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-60,10,1,1,0,0,180);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(0,70,0.941,0.941);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(0,-30,0.941,0.941);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(0,-130,0.941,0.941);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(0,70,0.941,0.941);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(0,-30,0.941,0.941);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(0,-130,0.941,0.941);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2}]}).to({state:[{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2}]},1).to({state:[{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3}]},1).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-238,251,383);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-130,-180,260,320), rect, rect, rect=new cjs.Rectangle(-145,-238,290,378), rect, rect, rect=new cjs.Rectangle(-160,-186.4,320,312.9), rect];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(113,-210);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(113,-210);

	this.eyebrows_0 = new lib.eyebrows_0_mc();
	this.eyebrows_0.setTransform(113,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},3).to({state:[{t:this.shadows_0}]},3).to({state:[{t:this.eyebrows_0}]},3).to({state:[]},3).wait(2));

	// options
	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(0,60);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(0,-100);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(0,60);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(0,-100);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(0,60);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(0,-100);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(60,10);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-60,-50);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(60,10);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-60,-50);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(60,10);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-60,-50);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(60,10);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-60,-60);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(60,10);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-60,-60);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(60,10);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-60,-60);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(0,40);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(0,-80);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(0,40);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(0,-80);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(0,40);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(0,-80);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(0,70,0.941,0.941);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,-30,0.941,0.941);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(0,-130,0.941,0.941);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(0,70,0.941,0.941);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(0,-30,0.941,0.941);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,-130,0.941,0.941);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2}]}).to({state:[{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2}]},1).to({state:[{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2}]},1).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_4}]},1).to({state:[{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3}]},1).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-238,251,383);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-130,-180,260,320), rect, rect, rect=new cjs.Rectangle(-145,-238,290,378), rect, rect, rect=new cjs.Rectangle(-115,-238,256,393), rect, rect, rect=new cjs.Rectangle(-160,-186.4,320,312.9), rect];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(198,-220);
	this.accessories_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.accessories_0).wait(10).to({_off:false},0).wait(2));

	// options
	this.dress_10 = new lib.dress_10_2_mc();
	this.dress_10.setTransform(-15,10,1,1,0,0,180);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-10,0,1,1,0,0,180);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-10,20,1,1,0,0,180);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-50,10,1,1,0,0,180);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(10,16,1,1,0,0,180);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(-10,10,1,1,0,0,180);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-5,16,1,1,0,0,180);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(-10,10,1,1,0,0,180);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(-10,10,1,1,0,0,180);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-10,10,1,1,0,0,180);

	this.accessories_2 = new lib.accessories_2_2_mc();
	this.accessories_2.setTransform(0,90);

	this.accessories_1 = new lib.accessories_1_2_mc();
	this.accessories_1.setTransform(0,-110);

	this.accessories_4 = new lib.accessories_4_2_mc();
	this.accessories_4.setTransform(0,100);

	this.accessories_3 = new lib.accessories_3_2_mc();
	this.accessories_3.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_10}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.accessories_1},{t:this.accessories_2}]},1).to({state:[{t:this.accessories_3},{t:this.accessories_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-190,300,400);
p.frameBounds = [rect, new cjs.Rectangle(-150,-190,280,380), new cjs.Rectangle(-160,-200,300,440), new cjs.Rectangle(-200,-190,300,400), new cjs.Rectangle(-140,-214,300,460), new cjs.Rectangle(-160,-190,300,400), new cjs.Rectangle(-155,-204,300,440), new cjs.Rectangle(-160,-210,300,440), new cjs.Rectangle(-160,-190,300,400), new cjs.Rectangle(-150,-180,280,380), new cjs.Rectangle(-80,-244,302,444), new cjs.Rectangle(-80,-244,302,424)];


(lib.closet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(200,-218);
	this.accessories_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.accessories_0).wait(10).to({_off:false},0).wait(2));

	// options
	this.dress_10 = new lib.dress_10_1_mc();
	this.dress_10.setTransform(-5,20);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,11);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,14);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,14);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,13);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(-5,12);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(0,12);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(0,12);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(0,13);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,15);

	this.accessories_2 = new lib.accessories_2_1_mc();
	this.accessories_2.setTransform(0,100);

	this.accessories_1 = new lib.accessories_1_1_mc();
	this.accessories_1.setTransform(0,-100);

	this.accessories_4 = new lib.accessories_4_1_mc();
	this.accessories_4.setTransform(0,100);

	this.accessories_3 = new lib.accessories_3_1_mc();
	this.accessories_3.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_10}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.accessories_1},{t:this.accessories_2}]},1).to({state:[{t:this.accessories_3},{t:this.accessories_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-210,280,460);
p.frameBounds = [rect, new cjs.Rectangle(-140,-219,280,460), rect=new cjs.Rectangle(-140,-216,280,460), rect, new cjs.Rectangle(-140,-217,280,460), new cjs.Rectangle(-145,-218,280,460), rect=new cjs.Rectangle(-140,-218,280,460), rect, new cjs.Rectangle(-140,-217,280,460), new cjs.Rectangle(-140,-215,280,460), rect=new cjs.Rectangle(-90,-242,314,432), rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_9 = new lib.hairstyle_9_2_mc();
	this.hair_9.setTransform(-100,-60,0.875,0.875);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(100,60,0.875,0.875);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(100,60,0.875,0.875);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-100,-60,0.875,0.875);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(100,60,0.875,0.875);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(-100,-60,0.875,0.875);

	this.hair_8 = new lib.hairstyle_8_2_mc();
	this.hair_8.setTransform(100,60,0.875,0.875);

	this.hair_7 = new lib.hairstyle_7_2_mc();
	this.hair_7.setTransform(-100,-60,0.875,0.875);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-100,-60,0.875,0.875);

	this.hair_10 = new lib.hairstyle_10_2_mc();
	this.hair_10.setTransform(100,60,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_9}]}).to({state:[{t:this.hair_3},{t:this.hair_6}]},1).to({state:[{t:this.hair_4},{t:this.hair_5}]},1).to({state:[{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.hair_10},{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-217.5,445,435);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(100,60,0.875,0.875);

	this.hair_10 = new lib.hairstyle_10_1_mc();
	this.hair_10.setTransform(-100,-60,0.875,0.875);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(100,60,0.875,0.875);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-100,-60,0.875,0.875);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(100,60,0.875,0.875);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-100,-60,0.875,0.875);

	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(100,60,0.875,0.875);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(-100,-60,0.875,0.875);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(100,60,0.875,0.875);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-100,-60,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_10},{t:this.hair_2}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.hair_1},{t:this.hair_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-217.5,445,435);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-190,300,400);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-217.5,445,435);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-238,251,383);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-210,280,460);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-217.5,445,435);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-238,251,383);
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


(lib.animation_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_174 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_229 = function() {
		try
		{
			app.addSoundFunc("polaroid_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_325 = function() {
		try
		{
			app.addSoundFunc("putdown_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(55).call(this.frame_229).wait(96).call(this.frame_325).wait(11));

	// animation
	this.instance = new lib.flash_mc();
	this.instance.setTransform(141.9,-219.9,0.691,0.691);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(203).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({scaleX:1,scaleY:1,alpha:1},2).to({scaleX:0.69,scaleY:0.69,alpha:0.012},2).to({_off:true},1).wait(124));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_229 = new cjs.Graphics().p("EgzsAfyMAAAg/jMBkRAAAIAACqIDIAAMAAAA85g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_graphics_229,x:33,y:83.8}).wait(46).to({graphics:null,x:0,y:0}).wait(61));

	// animation
	this.instance_1 = new lib.fotki00_mc();
	this.instance_1.setTransform(20,65.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255).to({_off:false},0).to({alpha:1},20).to({scaleX:0.52,scaleY:0.52,rotation:15,x:312,y:281.4},14).wait(47));

	// animation
	this.instance_2 = new lib.fotki0_mc();
	this.instance_2.setTransform(20,-315.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).to({y:65.5},26).wait(20).to({_off:true},1).wait(60));

	// animation
	this.instance_3 = new lib.polaroid21_mc();
	this.instance_3.setTransform(0,597.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).wait(1).to({y:0},18).to({y:-4},2).to({y:0},2).wait(10).to({y:-368.9},16).wait(92).to({y:-613.1},13).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.pointing_finger_mc();
	this.instance_4.setTransform(-148,445,1,1,-15);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:-251,y:262},30).to({x:65,y:183},33).to({x:210,y:431},41).to({x:57,y:336},34).to({_off:true},41).wait(156));

	// animation
	this.indicator_mc = new lib.indicator_ph_2_mc();
	this.indicator_mc.setTransform(-35.8,110,0.1,1,0,0,0,-1.5,0);
	this.indicator_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(144).to({_off:false},0).to({regX:0,scaleX:1,x:-35},24).to({_off:true},1).wait(167));

	// animation
	this.instance_5 = new lib.indicator_ph_3_mc();
	this.instance_5.setTransform(-35,110);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({_off:true},25).wait(167));

	// animation
	this.instance_6 = new lib.indicator_ph_4_mc();
	this.instance_6.setTransform(-35,110);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({_off:true},25).wait(167));

	// animation
	this.instance_7 = new lib.objektive_1_mc();
	this.instance_7.setTransform(-160,120);
	this.instance_7._off = true;

	this.instance_8 = new lib.objektive_2_mc();
	this.instance_8.setTransform(45,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},30).to({state:[{t:this.instance_7}]},33).to({state:[{t:this.instance_7}]},41).to({state:[{t:this.instance_7}]},34).to({state:[{t:this.instance_8}]},1).to({state:[]},40).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({x:-260,y:-60},30).to({x:55,y:-140},33).to({x:200,y:110},41).to({x:45,y:12},34).to({_off:true},1).wait(196));

	// animation
	this.instance_9 = new lib.item1_1_mc();
	this.instance_9.setTransform(42,23.4,1,1,0,0,0,71,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(336));

	// animation
	this.instance_10 = new lib.exemplary_flower_1_mc();
	this.instance_10.setTransform(-295,-115);

	this.instance_11 = new lib.exemplary_flower_0_mc();
	this.instance_11.setTransform(-295,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},14).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_11}]},91).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0.801},14).to({alpha:1},15).to({alpha:0.801},15).to({alpha:1},15).to({alpha:0.801},15).to({alpha:1},15).to({_off:true},91).wait(156));

	// animation
	this.instance_12 = new lib.item1_mc();
	this.instance_12.setTransform(-290,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375.5,-200,488.5,330.4);
p.frameBounds = [rect, new cjs.Rectangle(-375.5,-200,488.5,939.5), new cjs.Rectangle(-375.5,-200,488.5,933), new cjs.Rectangle(-375.5,-200,488.5,926.9), new cjs.Rectangle(-375.5,-200,488.5,920.8), new cjs.Rectangle(-375.5,-200,488.5,914.7), new cjs.Rectangle(-375.5,-200,488.5,908.6), new cjs.Rectangle(-375.5,-200,488.5,902.5), new cjs.Rectangle(-375.5,-200,488.5,896.4), new cjs.Rectangle(-375.5,-200,488.5,890.3), new cjs.Rectangle(-375.5,-200,488.5,884.2), new cjs.Rectangle(-376.9,-200,489.9,878.1), new cjs.Rectangle(-380.3,-200,493.3,872), new cjs.Rectangle(-383.8,-200,496.8,865.9), new cjs.Rectangle(-387.2,-200,500.2,859.8), new cjs.Rectangle(-390.6,-200,503.6,853.7), new cjs.Rectangle(-394.1,-200,507.1,847.6), new cjs.Rectangle(-397.5,-200,510.5,841.5), new cjs.Rectangle(-400.9,-200,513.9,835.4), new cjs.Rectangle(-404.4,-200,517.4,829.3), new cjs.Rectangle(-407.8,-200,520.8,823.2), new cjs.Rectangle(-411.2,-200,524.2,817.1), new cjs.Rectangle(-414.7,-200,527.7,811), new cjs.Rectangle(-418.1,-200,531.1,804.9), new cjs.Rectangle(-421.5,-200,534.5,798.8), new cjs.Rectangle(-425,-200,538,792.7), new cjs.Rectangle(-428.4,-200,541.4,786.6), new cjs.Rectangle(-431.8,-206,544.8,786.5), new cjs.Rectangle(-435.3,-212,548.3,786.4), new cjs.Rectangle(-438.7,-218,551.7,786.3), new cjs.Rectangle(-442.1,-224,555.1,786.2), new cjs.Rectangle(-446.4,-230,559.4,786.5), new cjs.Rectangle(-436,-232.4,549,786), new cjs.Rectangle(-426.4,-234.8,539.4,786.1), new cjs.Rectangle(-416.8,-237.2,529.8,786.1), new cjs.Rectangle(-407.3,-239.7,520.3,786.1), new cjs.Rectangle(-397.7,-242.1,510.7,786.2), new cjs.Rectangle(-388.1,-244.5,501.1,786.2), new cjs.Rectangle(-378.5,-246.9,491.5,786.2), new cjs.Rectangle(-375.5,-249.4,488.5,786.3), new cjs.Rectangle(-375.5,-251.8,488.5,786.3), new cjs.Rectangle(-375.5,-254.2,488.5,786.3), new cjs.Rectangle(-375.5,-256.6,488.5,786.3), new cjs.Rectangle(-375.5,-259.1,488.5,786.4), new cjs.Rectangle(-375.5,-261.5,488.5,786.4), new cjs.Rectangle(-375.5,-263.9,488.5,786.5), new cjs.Rectangle(-375.5,-266.3,488.5,786.5), new cjs.Rectangle(-375.5,-268.8,488.5,786.6), new cjs.Rectangle(-375.5,-271.2,488.5,786.6), new cjs.Rectangle(-375.5,-273.6,491.5,786.6), new cjs.Rectangle(-375.5,-276,501.1,786.6), new cjs.Rectangle(-375.5,-278.5,510.6,786.7), new cjs.Rectangle(-375.5,-280.9,520.2,786.7), new cjs.Rectangle(-375.5,-283.3,529.8,786.8), new cjs.Rectangle(-375.5,-285.7,539.4,786.8), new cjs.Rectangle(-375.5,-288.2,548.9,786.8), new cjs.Rectangle(-375.5,-290.6,558.5,786.8), new cjs.Rectangle(-375.5,-293,568.1,786.9), new cjs.Rectangle(-375.5,-295.4,577.6,786.8), new cjs.Rectangle(-375.5,-297.9,587.2,786.9), new cjs.Rectangle(-375.5,-300.3,596.8,787), new cjs.Rectangle(-375.5,-302.7,606.3,787), new cjs.Rectangle(-375.5,-305.1,615.9,787), new cjs.Rectangle(-375.5,-307.6,625.5,787.1), new cjs.Rectangle(-375.5,-310,636,787.5), new cjs.Rectangle(-375.5,-303.9,638.8,787.1), new cjs.Rectangle(-375.5,-297.8,642.3,787), new cjs.Rectangle(-375.5,-291.7,645.8,787), new cjs.Rectangle(-375.5,-285.6,649.4,786.9), new cjs.Rectangle(-375.5,-279.5,652.9,786.9), new cjs.Rectangle(-375.5,-273.4,656.4,786.8), new cjs.Rectangle(-375.5,-267.3,660,786.8), new cjs.Rectangle(-375.5,-261.2,663.5,786.7), new cjs.Rectangle(-375.5,-255.1,667.1,786.6), new cjs.Rectangle(-375.5,-249,670.6,786.6), new cjs.Rectangle(-375.5,-242.9,674.1,786.5), new cjs.Rectangle(-375.5,-236.8,677.7,786.5), new cjs.Rectangle(-375.5,-230.7,681.2,786.5), new cjs.Rectangle(-375.5,-224.6,684.7,786.4), new cjs.Rectangle(-375.5,-218.5,688.3,786.3), new cjs.Rectangle(-375.5,-212.4,691.8,786.3), new cjs.Rectangle(-375.5,-206.3,695.3,786.3), new cjs.Rectangle(-375.5,-200.2,698.9,786.2), new cjs.Rectangle(-375.5,-200,702.4,792), new cjs.Rectangle(-375.5,-200,706,798.1), new cjs.Rectangle(-375.5,-200,709.5,804.1), new cjs.Rectangle(-375.5,-200,713,810.2), new cjs.Rectangle(-375.5,-200,716.6,816.2), new cjs.Rectangle(-375.5,-200,720.1,822.2), new cjs.Rectangle(-375.5,-200,723.6,828.3), new cjs.Rectangle(-375.5,-200,727.2,834.3), new cjs.Rectangle(-375.5,-200,730.7,840.4), new cjs.Rectangle(-375.5,-200,734.2,846.4), new cjs.Rectangle(-375.5,-200,737.8,852.5), new cjs.Rectangle(-375.5,-200,741.3,858.5), new cjs.Rectangle(-375.5,-200,744.9,864.6), new cjs.Rectangle(-375.5,-200,748.4,870.6), new cjs.Rectangle(-375.5,-200,751.9,876.7), new cjs.Rectangle(-375.5,-200,755.5,882.7), new cjs.Rectangle(-375.5,-200,759,888.8), new cjs.Rectangle(-375.5,-200,762.5,894.8), new cjs.Rectangle(-375.5,-200,766,900.9), new cjs.Rectangle(-375.5,-200,769.6,906.9), new cjs.Rectangle(-375.5,-200,773.1,913), new cjs.Rectangle(-375.5,-200,776.6,919), new cjs.Rectangle(-375.5,-200,781,925.5), new cjs.Rectangle(-375.5,-200,775.7,922.3), new cjs.Rectangle(-375.5,-200,771.2,919.5), new cjs.Rectangle(-375.5,-200,766.7,916.7), new cjs.Rectangle(-375.5,-200,762.2,913.9), new cjs.Rectangle(-375.5,-200,757.7,911.1), new cjs.Rectangle(-375.5,-200,753.2,908.3), new cjs.Rectangle(-375.5,-200,748.7,905.5), new cjs.Rectangle(-375.5,-200,744.2,902.7), new cjs.Rectangle(-375.5,-200,739.7,899.9), new cjs.Rectangle(-375.5,-200,735.2,897.1), new cjs.Rectangle(-375.5,-200,730.7,894.3), new cjs.Rectangle(-375.5,-200,726.2,891.5), new cjs.Rectangle(-375.5,-200,721.7,888.8), new cjs.Rectangle(-375.5,-200,717.2,886), new cjs.Rectangle(-375.5,-200,712.7,883.2), new cjs.Rectangle(-375.5,-200,708.2,880.4), new cjs.Rectangle(-375.5,-200,703.7,877.6), new cjs.Rectangle(-375.5,-200,699.2,874.8), new cjs.Rectangle(-375.5,-200,694.7,872), new cjs.Rectangle(-375.5,-200,690.2,869.2), new cjs.Rectangle(-375.5,-200,685.7,866.4), new cjs.Rectangle(-375.5,-200,681.2,863.6), new cjs.Rectangle(-375.5,-200,676.7,860.8), new cjs.Rectangle(-375.5,-200,672.2,858), new cjs.Rectangle(-375.5,-200,667.7,855.2), new cjs.Rectangle(-375.5,-200,663.2,852.4), new cjs.Rectangle(-375.5,-200,658.7,849.6), new cjs.Rectangle(-375.5,-200,654.2,846.8), new cjs.Rectangle(-375.5,-200,649.7,844), new cjs.Rectangle(-375.5,-200,645.2,841.3), new cjs.Rectangle(-375.5,-200,640.7,838.5), new cjs.Rectangle(-375.5,-200,636.2,835.7), new cjs.Rectangle(-375.5,-200,631.7,832.9), rect=new cjs.Rectangle(-375.5,-200,628,830.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-375.5,-200,649,1094.3), rect, new cjs.Rectangle(-375.5,-200,649,1061.1), new cjs.Rectangle(-375.5,-200,649,1027.9), new cjs.Rectangle(-375.5,-200,649,994.6), new cjs.Rectangle(-375.5,-200,649,961.4), new cjs.Rectangle(-375.5,-200,649,928.2), new cjs.Rectangle(-375.5,-200,649,895), new cjs.Rectangle(-375.5,-200,649,861.8), new cjs.Rectangle(-375.5,-200,649,828.6), new cjs.Rectangle(-375.5,-200,649,795.4), new cjs.Rectangle(-375.5,-200,649,762.2), new cjs.Rectangle(-375.5,-200,649,729), new cjs.Rectangle(-375.5,-200,649,695.8), new cjs.Rectangle(-375.5,-200,649,662.6), new cjs.Rectangle(-375.5,-200,649,629.4), new cjs.Rectangle(-375.5,-200,649,596.2), new cjs.Rectangle(-375.5,-230.1,649,593), new cjs.Rectangle(-375.5,-263.3,649,593), new cjs.Rectangle(-375.5,-296.5,649,593), new cjs.Rectangle(-375.5,-298.5,649,593), new cjs.Rectangle(-375.5,-300.5,649,593), new cjs.Rectangle(-375.5,-298.5,649,593), new cjs.Rectangle(-375.5,-414.4,745.5,711), new cjs.Rectangle(-375.5,-457.9,796.5,754.5), new cjs.Rectangle(-375.5,-501.4,847.4,797.9), new cjs.Rectangle(-375.5,-457.9,796.5,754.4), new cjs.Rectangle(-375.5,-414.4,745.5,711), new cjs.Rectangle(-375.5,-457.9,796.5,754.5), new cjs.Rectangle(-375.5,-501.4,847.4,797.9), new cjs.Rectangle(-375.5,-457.9,796.5,754.4), new cjs.Rectangle(-375.5,-414.4,745.5,711), rect=new cjs.Rectangle(-375.5,-296.5,649,593), rect, new cjs.Rectangle(-375.5,-319.5,649,593), new cjs.Rectangle(-375.5,-342.6,649,593), new cjs.Rectangle(-375.5,-365.7,649,593), new cjs.Rectangle(-375.5,-388.7,649,593), new cjs.Rectangle(-375.5,-411.8,649,593), new cjs.Rectangle(-375.5,-434.8,649,593), new cjs.Rectangle(-375.5,-457.9,649,593), new cjs.Rectangle(-375.5,-481,649,611.4), new cjs.Rectangle(-375.5,-504,649,634.5), new cjs.Rectangle(-375.5,-527.1,649,657.5), new cjs.Rectangle(-375.5,-550.1,649,680.6), new cjs.Rectangle(-375.5,-573.2,649,703.6), new cjs.Rectangle(-375.5,-596.2,649,726.7), new cjs.Rectangle(-375.5,-619.3,649,749.8), new cjs.Rectangle(-375.5,-642.4,649,772.8), rect=new cjs.Rectangle(-375.5,-665.4,649,795.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375.5,-665.4,649,810.2), new cjs.Rectangle(-375.5,-665.4,649,824.9), new cjs.Rectangle(-375.5,-665.4,649,839.5), new cjs.Rectangle(-375.5,-665.4,649,854.2), new cjs.Rectangle(-375.5,-665.4,649,868.8), new cjs.Rectangle(-375.5,-665.4,649,883.5), new cjs.Rectangle(-375.5,-665.4,649,898.1), new cjs.Rectangle(-375.5,-665.4,649,912.8), rect=new cjs.Rectangle(-375.5,-665.4,649,927.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375.5,-665.4,649,939.4), new cjs.Rectangle(-375.5,-665.4,649,951), new cjs.Rectangle(-375.5,-665.4,649,962.2), new cjs.Rectangle(-375.5,-665.4,654.1,973.7), new cjs.Rectangle(-375.5,-665.4,670.7,984.5), new cjs.Rectangle(-375.5,-665.4,686.8,995), new cjs.Rectangle(-375.5,-665.4,702.8,1005.2), new cjs.Rectangle(-375.5,-665.4,718.9,1015.5), new cjs.Rectangle(-375.5,-665.4,734.3,1025.2), new cjs.Rectangle(-375.5,-665.4,749.5,1034.5), new cjs.Rectangle(-375.5,-665.4,764.8,1044.1), new cjs.Rectangle(-375.5,-665.4,779.5,1053), new cjs.Rectangle(-375.5,-665.4,793.9,1061.9), rect=new cjs.Rectangle(-375.5,-665.4,808.5,1070.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375.5,-684.2,808.5,1089.4), new cjs.Rectangle(-375.5,-703,808.5,1108.2), new cjs.Rectangle(-375.5,-721.8,808.5,1126.9), new cjs.Rectangle(-375.5,-740.6,808.5,1145.8), new cjs.Rectangle(-375.5,-759.3,808.5,1164.5), new cjs.Rectangle(-375.5,-778.1,808.5,1183.3), new cjs.Rectangle(-375.5,-796.9,808.5,1202.1), new cjs.Rectangle(-375.5,-815.7,808.5,1220.9), new cjs.Rectangle(-375.5,-834.5,808.5,1239.7), new cjs.Rectangle(-375.5,-853.3,808.5,1258.4), new cjs.Rectangle(-375.5,-872.1,808.5,1277.3), new cjs.Rectangle(-375.5,-890.8,808.5,1296), new cjs.Rectangle(-375.5,-909.6,808.5,1314.8), new cjs.Rectangle(-375.5,-200,808.5,605.2)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
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
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_4_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmJYIAAyvIfNAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-60,220,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyvIY/AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
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
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,504.5,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,800.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,510,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(50,650,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(580,550,0.727,0.727);
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
	this.instance.setTransform(250.5,500.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_1_mc();
	this.snowfall_comp.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1705.4,1606.3);
p.frameBounds = [rect];


(lib.quest_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drag
	this.drag_mc = new lib.drag_ph_mc();

	this.timeline.addTween(cjs.Tween.get(this.drag_mc).wait(1));

	// animations
	this.animations_mc = new lib.animations_ph_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.animations_mc).wait(1));

	// list
	this.list_mc = new lib.list_ph_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.list_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_ph_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-470,1200,1701.8);
p.frameBounds = [rect];


(lib.quest_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drag
	this.drag_mc = new lib.drag_ph_mc();

	this.timeline.addTween(cjs.Tween.get(this.drag_mc).wait(1));

	// animations
	this.animations_mc = new lib.animations_ph_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.animations_mc).wait(1));

	// list
	this.list_mc = new lib.list_ph_2_mc();
	this.list_mc.setTransform(-92.2,-270.2,1,1,0,0,0,-92.2,-270.2);

	this.timeline.addTween(cjs.Tween.get(this.list_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_ph_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-470,1200,1664.3);
p.frameBounds = [rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drag
	this.drag_mc = new lib.drag_ph_mc();

	this.timeline.addTween(cjs.Tween.get(this.drag_mc).wait(1));

	// animations
	this.animations_mc = new lib.animations_ph_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.animations_mc).wait(1));

	// list
	this.list_mc = new lib.list_ph_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.list_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_ph_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-470,1200,1667.9);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,722.5);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-190,760,380);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-190,-190,380,380)];


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


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(215,0,0.857,0.857);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-215,0,0.857,0.857);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275,-270,550,770);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(215,0,0.857,0.857);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-215,0,0.857,0.857);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_closet_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275,-270,550,770);
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


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-45,165,90);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-45,165,90);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
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
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_1_mc();
	this.snowfall_comp.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_1 = new lib.animation_background_2_mc();

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
	this.next_mc.setTransform(460,540,0.857,0.857);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(340,540,0.857,0.857);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(90,510,0.895,0.895);
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

	// decor
	this.snowfall_comp = new lib.snowfall_1_1_mc();
	this.snowfall_comp.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(162,226,1,1,0,45,-135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:45,skewY:-135,x:162,y:226}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_5_mc();
	this.object_1.setTransform(100,180);

	this.frame_2_mc = new lib.quest_2_5_mc();

	this.frame_3_mc = new lib.quest_3_5_mc();

	this.frame_4_mc = new lib.quest_4_5_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBAYIgMgFIgEgCIgEgGQgCgDAAgGIgBgHIABgDIABgCIAIgHIAGgDQADgCAFABIAAgDIAMAGQADABABADIAEAFQAEAEABAEIgBAEQgDAOgLAFIgGACIgEABg");
	this.shape.setTransform(493.7,330.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.shape},{t:this.frame_4_mc}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation_1_1_mc();
	this.subject_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.subject_1).to({_off:true},1).wait(3));

	// bg
	this.instance_1 = new lib.background_6_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_7_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_8_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_3_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,929.4);
p.frameBounds = [rect, new cjs.Rectangle(-200,-470,1200,1667.9), new cjs.Rectangle(-200,-470,1200,1664.3), new cjs.Rectangle(-200,-470,1200,1701.8)];


(lib.quest_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(90,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:520},5).wait(25).to({y:700},10).wait(101));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(280,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:250},11).to({y:300},4).wait(60).to({y:1000},15).wait(86));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(655,370);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1100},0).wait(33).to({y:270},11).to({y:370},4).wait(65).to({x:403},20).wait(66));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},65).wait(21));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(5,23,790.5,777);
p.frameBounds = [rect, rect=new cjs.Rectangle(5,630,790.5,870.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(5,630,790.5,812.5), new cjs.Rectangle(5,593.7,790.5,848.8), new cjs.Rectangle(5,525.5,790.5,917), new cjs.Rectangle(5,457.3,790.5,985.2), new cjs.Rectangle(5,389.1,790.5,1053.4), new cjs.Rectangle(5,320.9,790.5,1121.6), new cjs.Rectangle(5,252.7,790.5,1189.8), new cjs.Rectangle(5,184.6,790.5,1257.9), new cjs.Rectangle(5,116.4,790.5,1326.1), new cjs.Rectangle(5,48.2,790.5,1394.3), new cjs.Rectangle(5,-20,790.5,1387), new cjs.Rectangle(5,-7.5,790.5,1299.1), new cjs.Rectangle(5,5,790.5,1211.1), new cjs.Rectangle(5,17.5,790.5,1123.2), new cjs.Rectangle(5,30,790.5,1035.2), new cjs.Rectangle(5,30,790.5,959.7), new cjs.Rectangle(5,30,790.5,884.3), new cjs.Rectangle(5,30,790.5,808.8), new cjs.Rectangle(5,30,790.5,770), new cjs.Rectangle(5,-1.5,790.5,801.6), new cjs.Rectangle(5,-77,790.5,877), new cjs.Rectangle(5,-52,790.5,852), new cjs.Rectangle(5,-27,790.5,827), new cjs.Rectangle(5,-2,790.5,802), rect=new cjs.Rectangle(5,23,790.5,777), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(5,23,790.5,823.7), new cjs.Rectangle(5,23,790.5,870.4), new cjs.Rectangle(5,23,790.5,917), new cjs.Rectangle(5,23,790.5,963.7), new cjs.Rectangle(5,23,790.5,1010.4), new cjs.Rectangle(5,23,790.5,1057), new cjs.Rectangle(5,23,790.5,1103.7), new cjs.Rectangle(5,23,790.5,1150.4), new cjs.Rectangle(5,23,790.5,1197), new cjs.Rectangle(5,23,790.5,1243.7), new cjs.Rectangle(5,23,790.5,1290.4), new cjs.Rectangle(5,23,790.5,1337), new cjs.Rectangle(5,23,790.5,1383.7), new cjs.Rectangle(5,23,790.5,1430.4), rect=new cjs.Rectangle(-210,-387,1220,1887), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(90,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:520},5).wait(25).to({y:700},10).wait(101));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(280,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:260},11).to({y:310},4).wait(60).to({y:1000},15).wait(86));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(650,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1100},0).wait(33).to({y:260},11).to({y:360},4).wait(65).to({x:403},20).wait(66));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},65).wait(21));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(5,14.3,746.5,795.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(5,630,746.5,870.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(5,630,746.5,822.5), new cjs.Rectangle(5,595.5,746.5,857), new cjs.Rectangle(5,528.2,746.5,924.2), new cjs.Rectangle(5,460.9,746.5,991.5), new cjs.Rectangle(5,393.7,746.5,1058.8), new cjs.Rectangle(5,326.4,746.5,1126.1), new cjs.Rectangle(5,259.1,746.5,1193.3), new cjs.Rectangle(5,191.8,746.5,1260.6), new cjs.Rectangle(5,124.6,746.5,1327.9), new cjs.Rectangle(5,57.3,746.5,1395.2), new cjs.Rectangle(5,-10,746.5,1386.1), new cjs.Rectangle(5,2.5,746.5,1297.2), new cjs.Rectangle(5,15,746.5,1208.3), new cjs.Rectangle(5,27.5,746.5,1119.5), new cjs.Rectangle(5,40,746.5,1030.6), new cjs.Rectangle(5,40,746.5,954.2), new cjs.Rectangle(5,40,746.5,877.9), new cjs.Rectangle(5,40,746.5,801.5), new cjs.Rectangle(5,40,746.5,770), new cjs.Rectangle(5,-9.4,746.5,819.4), new cjs.Rectangle(5,-85.7,746.5,895.8), new cjs.Rectangle(5,-60.7,746.5,870.8), new cjs.Rectangle(5,-35.7,746.5,845.8), new cjs.Rectangle(5,-10.7,746.5,820.8), rect=new cjs.Rectangle(5,14.3,746.5,795.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(5,14.3,746.5,841.8), new cjs.Rectangle(5,14.3,746.5,887.8), new cjs.Rectangle(5,14.3,746.5,933.8), new cjs.Rectangle(5,14.3,746.5,979.8), new cjs.Rectangle(5,14.3,746.5,1025.8), new cjs.Rectangle(5,14.3,746.5,1071.8), new cjs.Rectangle(5,14.3,746.5,1117.8), new cjs.Rectangle(5,14.3,746.5,1163.8), new cjs.Rectangle(5,14.3,746.5,1209.8), new cjs.Rectangle(5,14.3,746.5,1255.8), new cjs.Rectangle(5,14.3,746.5,1301.8), new cjs.Rectangle(5,14.3,746.5,1347.8), new cjs.Rectangle(5,14.3,746.5,1393.8), new cjs.Rectangle(5,14.3,746.5,1439.8), rect=new cjs.Rectangle(-210,-387,1220,1887), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.quest_5_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-100,150);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(100,-150);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-270,500,770);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-70,180);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(70,180);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-280,370,780);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-100,150);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(100,-150);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-270,500,770);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-70,180);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(70,180);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-280,370,780);
p.frameBounds = [rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(80,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:520},5).wait(25).to({y:700},10).wait(101));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(540,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:250},11).to({y:300},4).wait(60).to({y:1000},15).wait(86));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(150,390);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1100},0).wait(33).to({y:270},11).to({y:390},4).wait(65).to({x:403},20).wait(66));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},65).wait(21));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,30,780.1,770);
p.frameBounds = [rect, rect=new cjs.Rectangle(10,630,780.1,870.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,630,780.1,812.5), new cjs.Rectangle(10,593.7,780.1,848.8), new cjs.Rectangle(10,525.5,780.1,917), new cjs.Rectangle(10,457.3,780.1,985.2), new cjs.Rectangle(10,389.1,780.1,1053.4), new cjs.Rectangle(10,320.9,780.1,1121.6), new cjs.Rectangle(10,252.7,780.1,1189.8), new cjs.Rectangle(10,184.6,780.1,1257.9), new cjs.Rectangle(10,116.4,780.1,1326.1), new cjs.Rectangle(10,48.2,780.1,1394.3), new cjs.Rectangle(10,-20,780.1,1387), new cjs.Rectangle(10,-7.5,780.1,1299.1), new cjs.Rectangle(10,5,780.1,1211.1), new cjs.Rectangle(10,17.5,780.1,1123.2), new cjs.Rectangle(10,30,780.1,1035.2), new cjs.Rectangle(10,30,780.1,959.7), new cjs.Rectangle(10,30,780.1,884.3), new cjs.Rectangle(10,30,780.1,808.8), new cjs.Rectangle(10,30,780.1,770), new cjs.Rectangle(10,-1.5,780.1,801.6), new cjs.Rectangle(10,-77,780.1,877), new cjs.Rectangle(10,-47,780.1,847), new cjs.Rectangle(10,-17,780.1,817), new cjs.Rectangle(10,13,780.1,787), new cjs.Rectangle(10,30,780.1,770), new cjs.Rectangle(9,30,781,770), new cjs.Rectangle(8,30,782,770), new cjs.Rectangle(7,30,783,770), new cjs.Rectangle(6,30,784,770), new cjs.Rectangle(5,30,785,770), new cjs.Rectangle(4.1,30,786,770), new cjs.Rectangle(3.1,30,787,770), new cjs.Rectangle(2,30,788,770), new cjs.Rectangle(1,30,789,770), new cjs.Rectangle(0,30,790,770), new cjs.Rectangle(2,30,788.1,770), new cjs.Rectangle(4,30,786.1,770), new cjs.Rectangle(6,30,784.1,770), new cjs.Rectangle(8,30,782.1,770), rect=new cjs.Rectangle(10,30,780.1,770), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(10,30,780,770), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,30,780.1,770), new cjs.Rectangle(10,43,780.1,803.7), new cjs.Rectangle(10,43,780.1,850.4), new cjs.Rectangle(10,43,780.1,897), new cjs.Rectangle(10,43,780.1,943.7), new cjs.Rectangle(10,43,780.1,990.4), new cjs.Rectangle(10,43,780.1,1037), new cjs.Rectangle(10,43,780.1,1083.7), new cjs.Rectangle(10,43,780.1,1130.4), new cjs.Rectangle(10,43,780.1,1177), new cjs.Rectangle(10,43,780.1,1223.7), new cjs.Rectangle(10,43,780.1,1270.4), new cjs.Rectangle(10,43,780.1,1317), new cjs.Rectangle(10,43,780.1,1363.7), new cjs.Rectangle(10,43,780.1,1410.4), rect=new cjs.Rectangle(-210,-387,1220,1887), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:520},5).wait(25).to({y:700},10).wait(101));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(200,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:250},11).to({y:300},4).wait(60).to({y:1000},15).wait(86));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},65).wait(21));

	// hero
	this.hero_2 = new lib.hero_2_makeup_mc();
	this.hero_2.setTransform(580,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1000},0).wait(33).to({y:280},11).to({y:330},4).wait(65).to({x:404},20).wait(66));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(15,4.5,827.5,795.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(15,630,827.5,870.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(15,630,827.5,801.8), new cjs.Rectangle(15,583.7,827.5,780), new cjs.Rectangle(15,515.5,827.5,810), new cjs.Rectangle(15,447.3,827.5,878.2), new cjs.Rectangle(15,379.1,827.5,946.4), new cjs.Rectangle(15,310.9,827.5,1014.6), new cjs.Rectangle(15,242.7,827.5,1082.8), new cjs.Rectangle(15,174.6,827.5,1150.9), new cjs.Rectangle(15,106.4,827.5,1219.1), new cjs.Rectangle(15,38.2,827.5,1287.3), new cjs.Rectangle(15,-30,827.5,1290), new cjs.Rectangle(15,-17.5,827.5,1212.1), new cjs.Rectangle(15,-5,827.5,1134.1), new cjs.Rectangle(15,7.5,827.5,1056.2), new cjs.Rectangle(15,20,827.5,978.2), new cjs.Rectangle(15,20,827.5,912.7), new cjs.Rectangle(15,20,827.5,847.3), new cjs.Rectangle(15,20,827.5,781.8), new cjs.Rectangle(15,20,827.5,780), new cjs.Rectangle(15,19.9,827.5,780.1), new cjs.Rectangle(15,-45.5,827.5,845.6), new cjs.Rectangle(15,-33,827.5,833.1), new cjs.Rectangle(15,-20.5,827.5,820.6), new cjs.Rectangle(15,-8,827.5,808.1), rect=new cjs.Rectangle(15,4.5,827.5,795.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(15,4.5,827.5,842.2), new cjs.Rectangle(15,4.5,827.5,888.9), new cjs.Rectangle(15,4.5,827.5,935.6), new cjs.Rectangle(15,4.5,827.5,982.2), new cjs.Rectangle(15,4.5,827.5,1028.9), new cjs.Rectangle(15,4.5,827.5,1075.6), new cjs.Rectangle(15,4.5,827.5,1122.2), new cjs.Rectangle(15,4.5,827.5,1168.9), new cjs.Rectangle(15,4.5,827.5,1215.6), new cjs.Rectangle(15,4.5,827.5,1262.2), new cjs.Rectangle(15,4.5,827.5,1308.9), new cjs.Rectangle(15,4.5,827.5,1355.6), new cjs.Rectangle(15,4.5,827.5,1402.2), new cjs.Rectangle(15,4.5,827.5,1448.9), rect=new cjs.Rectangle(-210,-387,1220,1887), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(80,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:520},5).wait(25).to({y:700},10).wait(101));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(540,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:250},11).to({y:300},4).wait(60).to({y:1000},15).wait(86));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(170,380);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1100},0).wait(33).to({y:260},11).to({y:380},4).wait(65).to({x:403},20).wait(66));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},66).wait(20));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3,30,787,770);
p.frameBounds = [rect, rect=new cjs.Rectangle(3,630,787,870.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(3,630,787,822.5), new cjs.Rectangle(3,593.7,787,858.8), new cjs.Rectangle(3,525.5,787,927), new cjs.Rectangle(3,457.3,787,995.2), new cjs.Rectangle(3,389.1,787,1063.3), new cjs.Rectangle(3,320.9,787,1131.5), new cjs.Rectangle(3,252.7,787,1199.7), new cjs.Rectangle(3,184.6,787,1267.9), new cjs.Rectangle(3,116.4,787,1336.1), new cjs.Rectangle(3,48.2,787,1404.2), new cjs.Rectangle(3,-20,787,1396.1), new cjs.Rectangle(3,-7.5,787,1307.2), new cjs.Rectangle(3,5,787,1218.3), new cjs.Rectangle(3,17.5,787,1129.5), new cjs.Rectangle(3,30,787,1040.6), new cjs.Rectangle(3,30,787,964.2), new cjs.Rectangle(3,30,787,887.9), new cjs.Rectangle(3,30,787,811.5), new cjs.Rectangle(3,30,787,770), new cjs.Rectangle(3,-9.4,787,809.4), new cjs.Rectangle(3,-85.7,787,885.8), new cjs.Rectangle(3,-55.7,787,855.8), new cjs.Rectangle(3,-25.7,787,825.8), new cjs.Rectangle(3,4.3,787,795.8), rect=new cjs.Rectangle(3,30,787,770), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(2,30,788,770), new cjs.Rectangle(1,30,789,770), new cjs.Rectangle(0,30,790,770), new cjs.Rectangle(2,30,788.1,770), rect=new cjs.Rectangle(3,30,787,770), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(3,34.3,787,812.4), new cjs.Rectangle(3,34.3,787,859.1), new cjs.Rectangle(3,34.3,787,905.8), new cjs.Rectangle(3,34.3,787,952.4), new cjs.Rectangle(3,34.3,787,999.1), new cjs.Rectangle(3,34.3,787,1045.8), new cjs.Rectangle(3,34.3,787,1092.4), new cjs.Rectangle(3,34.3,787,1139.1), new cjs.Rectangle(3,34.3,787,1185.8), new cjs.Rectangle(3,34.3,787,1232.4), new cjs.Rectangle(3,34.3,787,1279.1), new cjs.Rectangle(3,34.3,787,1325.8), new cjs.Rectangle(3,34.3,787,1372.4), new cjs.Rectangle(3,34.3,787,1419.1), rect=new cjs.Rectangle(-210,-387,1220,1887), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1510), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:520},5).wait(25).to({y:700},10).wait(101));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(200,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:250},11).to({y:300},4).wait(60).to({y:900},15).wait(86));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(114).to({_off:false},0).to({_off:true},66).wait(20));

	// hero
	this.hero_1 = new lib.hero_1_makeup_mc();
	this.hero_1.setTransform(580,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1000},0).wait(33).to({y:280},11).to({y:330},4).wait(65).to({x:402},20).wait(66));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},20).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(15,3.4,775,796.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(15,630,775,870.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(15,630,775,801.8), new cjs.Rectangle(15,583.7,775,780), new cjs.Rectangle(15,515.5,775,810.5), new cjs.Rectangle(15,447.3,775,878.7), new cjs.Rectangle(15,379.1,775,946.9), new cjs.Rectangle(15,310.9,775,1015.1), new cjs.Rectangle(15,242.7,775,1083.3), new cjs.Rectangle(15,174.6,775,1151.4), new cjs.Rectangle(15,106.4,775,1219.6), new cjs.Rectangle(15,38.2,775,1287.8), new cjs.Rectangle(15,-30,775,1290.5), new cjs.Rectangle(15,-17.5,775,1212.6), new cjs.Rectangle(15,-5,775,1134.6), new cjs.Rectangle(15,7.5,775,1056.7), new cjs.Rectangle(15,20,775,978.7), new cjs.Rectangle(15,20,775,913.2), new cjs.Rectangle(15,20,775,847.8), new cjs.Rectangle(15,20,775,782.3), new cjs.Rectangle(15,20,775,780), new cjs.Rectangle(15,18.8,775,781.2), new cjs.Rectangle(15,-46.6,775,846.7), new cjs.Rectangle(15,-34.1,775,834.2), new cjs.Rectangle(15,-21.6,775,821.7), new cjs.Rectangle(15,-9.1,775,809.2), new cjs.Rectangle(15,3.4,775,796.7), new cjs.Rectangle(15,3.4,776,796.7), new cjs.Rectangle(15,3.4,777,796.7), new cjs.Rectangle(15,3.4,778,796.7), new cjs.Rectangle(15,3.4,779,796.7), new cjs.Rectangle(15,3.4,779.9,796.7), new cjs.Rectangle(15,3.4,780.9,796.7), new cjs.Rectangle(15,3.4,782,796.7), new cjs.Rectangle(15,3.4,783,796.7), new cjs.Rectangle(15,3.4,784,796.7), new cjs.Rectangle(15,3.4,785,796.7), new cjs.Rectangle(15,3.4,783,796.7), new cjs.Rectangle(15,3.4,781,796.7), new cjs.Rectangle(15,3.4,779,796.7), new cjs.Rectangle(15,3.4,777,796.7), rect=new cjs.Rectangle(15,3.4,775,796.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(15,3.4,775,836.7), new cjs.Rectangle(15,3.4,775,876.7), new cjs.Rectangle(15,3.4,775,916.7), new cjs.Rectangle(15,3.4,775,956.7), new cjs.Rectangle(15,3.4,775,996.7), new cjs.Rectangle(15,3.4,775,1036.7), new cjs.Rectangle(15,3.4,775,1076.7), new cjs.Rectangle(15,3.4,775,1116.7), new cjs.Rectangle(15,3.4,775,1156.7), new cjs.Rectangle(15,3.4,775,1196.7), new cjs.Rectangle(15,3.4,775,1236.7), new cjs.Rectangle(15,3.4,775,1276.7), new cjs.Rectangle(15,3.4,775,1316.7), new cjs.Rectangle(15,3.4,775,1356.7), rect=new cjs.Rectangle(-210,-387,1220,1787), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-10,1220,1410), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.frame_2_mc = new lib.quest_2_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,780,1129.4);
p.frameBounds = [rect, new cjs.Rectangle(5,-329.4,790.5,1129.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(15,-329.4,827.5,1129.4);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.frame_2_mc = new lib.quest_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3,-329.4,787,1129.4);
p.frameBounds = [rect, new cjs.Rectangle(5,-329.4,746.5,1139.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(15,-329.4,775,1129.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
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
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
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
	this.instance = new lib.background_1_img();
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

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
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_2();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.RedirectScreen();

	this.instance_10 = new lib.ResultScreen();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.InstructionScreen();

	this.instance_12 = new lib.Glitter_2();
	this.instance_12.setTransform(500,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_13 = new lib.FlashAnimation();
	this.instance_13.setTransform(150,280);

	this.instance_14 = new lib.TrackMove_2();
	this.instance_14.setTransform(350,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_15 = new lib.TrackMove();
	this.instance_15.setTransform(270,50);

	this.instance_16 = new lib.Cursor();
	this.instance_16.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_17 = new lib.OrientationLockScreen();

	this.instance_18 = new lib.CurtainScreen();

	this.instance_19 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_16},{t:this.instance_15},{t:this.gravity_explosion_comp},{t:this.instance_14},{t:this.instance_13},{t:this.next_btn},{t:this.instance_12}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).to({state:[{t:this.instance_19}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1705.4,1606.3), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4), rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,770), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-15,815,445), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,600,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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